# SchoolManager

SchoolManager est une plateforme web responsive de gestion scolaire conçue pour centraliser la gestion des élèves, enseignants, classes, présences, absences, notes et statistiques.

## Fonctionnalités principales

- Gestion des élèves
- Gestion des enseignants
- Gestion des classes et matières
- Suivi des présences et absences
- Saisie des notes et calcul des moyennes
- Statistiques du tableau de bord
- Gestion des profils administrateur / enseignant / direction

## Stack technique

- Frontend : React + Vite + Tailwind CSS
- Backend : Node.js + Express
- Base de données : PostgreSQL (préparée pour intégration future)
- Authentification : JWT

## Structure du projet

- `client/` : application frontend
- `server/` : API backend

## Démarrage rapide

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le projet

```bash
npm run dev
```

Cette commande démarre à la fois le frontend et le backend.

- Frontend : http://localhost:5173
- Backend : http://localhost:5000

## Organisation

### Profil administrateur
- gestion complète des élèves, enseignants, classes, matières et paramètres

### Profil enseignant
- consultation des classes et élèves
- gestion des présences et notes
- enregistrement de sa présence

### Profil direction
- consultation des statistiques, absences et notes

## État du projet

Ce dépôt contient une version MVP fonctionnelle de démonstration avec données de test et interface utilisateur complète.

## Prochaine étape

- ajout de l’authentification réelle
- intégration PostgreSQL
- modules CRUD complets
- génération des bulletins et rapports
