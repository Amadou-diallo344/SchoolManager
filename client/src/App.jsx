import { useEffect, useMemo, useState } from 'react';
import dashboardData from './data/mockData';

const sidebarItems = [
  'Tableau de bord',
  'Élèves',
  'Enseignants',
  'Classes',
  'Matières',
  'Présences',
  'Notes',
  'Statistiques',
];

function App() {
  const [data, setData] = useState(dashboardData);
  const [activeTab, setActiveTab] = useState('Tableau de bord');

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch('/api/dashboard');
        if (!res.ok) throw new Error('API not available');
        const json = await res.json();
        setData(json);
      } catch (error) {
        setData(dashboardData);
      }
    };

    loadData();
  }, []);

  const stats = useMemo(() => data.stats || [], [data]);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">S</div>
          <div>
            <h1>SchoolManager</h1>
            <small>Gestion scolaire</small>
          </div>
        </div>

        <nav className="menu">
          {sidebarItems.map((item) => (
            <button
              key={item}
              className={activeTab === item ? 'menu-item active' : 'menu-item'}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Bonjour, administrateur</p>
            <h2>Tableau de bord</h2>
          </div>
          <button className="primary-btn">+ Inscrire un élève</button>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className={`stat-card ${stat.accent}`}>
              <div className="stat-icon">{stat.icon}</div>
              <div>
                <p>{stat.label}</p>
                <strong>{stat.value}</strong>
              </div>
            </div>
          ))}
        </section>

        <section className="shortcut-row">
          <button>➕ Ajouter un enseignant</button>
          <button>📋 Faire l’appel</button>
          <button>📝 Ajouter une note</button>
          <button>📊 Statistiques</button>
          <button>🔍 Rechercher un élève</button>
        </section>

        <section className="content-grid">
          <div className="panel">
            <div className="panel-header">
              <h3>Élèves récents</h3>
              <span>Voir tout</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Matricule</th>
                  <th>Nom</th>
                  <th>Classe</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                {(data.students || []).map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.className}</td>
                    <td><span className="status-tag active">{student.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Enseignants</h3>
              <span>Voir tout</span>
            </div>
            <ul className="list-plain">
              {(data.teachers || []).map((teacher) => (
                <li key={teacher.id}>
                  <div>
                    <strong>{teacher.name}</strong>
                    <small>{teacher.subject}</small>
                  </div>
                  <span className="status-tag active">{teacher.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel">
            <div className="panel-header">
              <h3>Classes</h3>
              <span>Voir tout</span>
            </div>
            <ul className="list-plain">
              {(data.classes || []).map((item) => (
                <li key={item.name}>
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.level} • {item.teacher}</small>
                  </div>
                  <span>{item.students} élèves</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Absences récentes</h3>
              <span>Voir tout</span>
            </div>
            <ul className="list-plain">
              {(data.absences || []).map((item, index) => (
                <li key={`${item.student}-${index}`}>
                  <div>
                    <strong>{item.student}</strong>
                    <small>{item.subject} • {item.date}</small>
                  </div>
                  <span className="status-tag warning">{item.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
