import express from "express";
import bodyParser from "body-parser";
import { Employes } from "./Employes.js";
import { Taches } from "./Taches.js";
import { Assignation } from "./Assignation.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/app", (req, res) => {
  const e1 = new Employes();
  e1.createEmp({
    nom: "Gaye",
    prenom: "Aichetou",
    email: "aicha@gmail.com",
    poste: "Dev Web",
    dateEmbauche: "10-12-2024",
    statut: "CDD",
  });

  const e2 = new Employes();
  e2.createEmp({
    nom: "Cissé",
    prenom: "Fatima",
    email: "fatima@gmail.com",
    poste: "DevOps",
    dateEmbauche: "10-11-2024",
    statut: "CDI",
  });
  const e3 = new Employes();
  e3.createEmp({
    nom: "Sem",
    prenom: "Thillo",
    email: "thillo@gmail.com",
    poste: "Dev front",
    dateEmbauche: "10-11-2025",
    statut: "CDD",
  });

  const t1 = new Taches();
  t1.createTache({
    nom: "Integration de la maquette",
    description: "Integrer la maquette améliorée",
    dateDebut: "01-02-2023",
    dateFin: "01-02-2025",
    statut: "A faire",
    priorite: "Elevée",
  });

  const t2 = new Taches();
  t2.createTache({
    nom: "Rédiger le rapport mensuel",
    description: "Informer le client de l'avancement du projet",
    dateDebut: "11-12-2023",
    dateFin: "11-12-2026",
    statut: "En cours",
    priorite: "Elevée",
  });

  const t3 = new Taches();
  t3.createTache({
    nom: "Modification de la maquette",
    description:
      "Améliorer le UI, rendre responsive, ajouter une espace de connexion",
    dateDebut: "12-06-2023",
    dateFin: "12-12-2026",
    statut: "A faire",
    priorite: "Basse",
  });
  console.log("**************")
  // Assignation.assign({employe: e1.getEmp(), tache: t1.getTache(), dateAssignation: new Date()})
  // Assignation.assign({employe: e1.getEmp(), tache: t2.getTache(), dateAssignation: new Date()})
  // Assignation.assign({employe: e2.getEmp(), tache: t1.getTache(), dateAssignation: new Date()})
  Assignation.assign({employe: e1.getEmp(), tache: t3.getTache(), dateAssignation: new Date()})
  Assignation.assign({employe: e2.getEmp(), tache: t2.getTache(), dateAssignation: new Date()})

  const assignation = Assignation.getTab()
  const resulFiltre = Assignation.getEmpAssign(e1.getEmp());

  const newAssignation = Assignation.getTab()

  Assignation.assign({employe: e2.getEmp(), tache: t1.getTache(), dateAssignation: new Date()})

  const testEcrase = Assignation.getTab()
  
  res.status(200).json({newAssignation, testEcrase, resulFiltre});
});

app.listen(port, () => {
  console.log("Successfully connected");
});
