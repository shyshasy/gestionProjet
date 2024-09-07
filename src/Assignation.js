class Assignation {
  static #tabAssignations = [];

  // Méthode pour obtenir toutes les assignations
  static getTab() {
    return [...Assignation.#tabAssignations];
  }

  // Méthode pour ajouter une assignation
  static assign({ employe, tache, dateAssignation }) {
    if (!employe || !tache || !dateAssignation) {
      console.error("Tous les champs doivent être renseignés");
      return;
    }
    Assignation.#tabAssignations.push({ employe, tache, dateAssignation });
    console.log(`Assignation ajoutée pour l'employé ${employe.nom} à la tâche ${tache}`);
  }

  // Méthode pour supprimer une assignation basée sur l'employé
  static dropAssign(employe) {
    if (!employe || !employe.nom) {
      console.error("Employé invalide");
      return;
    }
    const initialLength = Assignation.#tabAssignations.length;
    Assignation.#tabAssignations = Assignation.#tabAssignations.filter(
      (ass) => ass.employe.nom !== employe.nom
    );
    const removedCount = initialLength - Assignation.#tabAssignations.length;
    console.log(`${removedCount} assignation(s) supprimée(s) pour l'employé ${employe.nom}`);
  }

  // Méthode pour obtenir les tâches assignées à un employé
  static getEmpAssign(employe) {
    if (!employe || !employe.nom) {
      console.error("Employé invalide");
      return [];
    }
    const assignments = Assignation.#tabAssignations
      .filter(ass => ass.employe.nom === employe.nom)
      .map(ass => ({
        tache: ass.tache,
        dateAssignation: ass.dateAssignation,
      }));
    if (assignments.length === 0) {
      console.log(`Aucune assignation trouvée pour l'employé ${employe.nom}`);
    }
    return assignments;
  }

  // Méthode pour obtenir les employés assignés à une tâche
  static getTacheAssign(tache) {
    if (!tache) {
      console.error("Tâche invalide");
      return [];
    }
    const assignments = Assignation.#tabAssignations
      .filter(ass => ass.tache === tache)
      .map(ass => ({
        employe: ass.employe,
      }));
    if (assignments.length === 0) {
      console.log(`Aucun employé trouvé pour la tâche ${tache}`);
    }
    return assignments;
  }
}

export { Assignation };
