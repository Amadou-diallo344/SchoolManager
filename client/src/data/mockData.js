const dashboard = {
  stats: [
    { label: 'Élèves', value: '524', icon: '👨‍🎓', accent: 'blue' },
    { label: 'Enseignants', value: '38', icon: '👨‍🏫', accent: 'green' },
    { label: 'Classes', value: '18', icon: '🏫', accent: 'purple' },
    { label: 'Absences aujourd’hui', value: '27', icon: '⚠️', accent: 'red' },
    { label: 'Notes enregistrées', value: '1 245', icon: '📊', accent: 'amber' },
    { label: 'Enseignants présents', value: '34', icon: '✅', accent: 'emerald' },
    { label: 'Enseignants absents', value: '4', icon: '❌', accent: 'rose' },
  ],
  students: [
    { id: 'ELE-2026-00125', name: 'Amadou Diallo', className: '3e A', status: 'Actif' },
    { id: 'ELE-2026-00126', name: 'Mamadou Ba', className: '3e A', status: 'Actif' },
    { id: 'ELE-2026-00127', name: 'Fatou Ndiaye', className: '3e B', status: 'Actif' },
    { id: 'ELE-2026-00128', name: 'Awa Diop', className: '2nde A', status: 'Actif' },
  ],
  teachers: [
    { id: 'ENS-2026-001', name: 'Moussa Ndiaye', subject: 'Mathématiques', classes: '3e A, 3e B, 4e A', status: 'Actif' },
    { id: 'ENS-2026-002', name: 'Aissatou Diop', subject: 'Français', classes: '3e A, 5e A', status: 'Actif' },
    { id: 'ENS-2026-003', name: 'Ibrahima Ba', subject: 'Anglais', classes: 'Seconde A, Première L', status: 'Inactif' },
  ],
  classes: [
    { name: '6e A', level: '6e', students: 34, teacher: 'Mme Sow' },
    { name: '3e A', level: '3e', students: 31, teacher: 'M. Ndiaye' },
    { name: '3e B', level: '3e', students: 29, teacher: 'Mme Diop' },
    { name: 'Seconde A', level: 'Seconde', students: 27, teacher: 'M. Ba' },
  ],
  absences: [
    { student: 'Amadou Diallo', className: '3e A', date: '07/10/2026', subject: 'Mathématiques', status: 'Justifiée' },
    { student: 'Mamadou Ba', className: '3e A', date: '08/10/2026', subject: 'Français', status: 'Non justifiée' },
    { student: 'Fatou Ndiaye', className: '3e B', date: '09/10/2026', subject: 'Anglais', status: 'Justifiée' },
  ],
  grades: [
    { student: 'Amadou Diallo', subject: 'Mathématiques', evaluation: 'Devoir n°1', score: '15/20' },
    { student: 'Mamadou Ba', subject: 'Mathématiques', evaluation: 'Devoir n°1', score: '12/20' },
    { student: 'Fatou Ndiaye', subject: 'Français', evaluation: 'Interrogation', score: '17/20' },
  ],
};

export default dashboard;
