class Taches {
  #nom = "";
  #description = "";
  #dateDebut = "";
  #dateFin = "";
  #statut = "";
  #priorite = "";

  // Méthode privée pour valider les champs
  #validateTache(tache) {
    if (!tache.nom || !tache.description || !tache.dateDebut || !tache.dateFin || !tache.statut || !tache.priorite) {
      throw new Error("Tous les champs sont obligatoires");
    }
    // Validation des dates (assurez-vous que les dates sont valides)
    if (new Date(tache.dateDebut) > new Date(tache.dateFin)) {
      throw new Error("La date de début ne peut pas être après la date de fin");
    }
  }

  // Méthode privée pour centraliser les messages de la console
  #logMessage(action) {
    console.log(
      `Tâche: ${this.#nom}, ${this.#description}, ${this.#dateDebut}, ${this.#dateFin}, ${this.#statut}, ${this.#priorite} a été ${action} avec succès`
    );
  }

  createTache(tache) {
    try {
      this.#validateTache(tache);
      this.#nom = tache.nom;
      this.#description = tache.description;
      this.#dateDebut = tache.dateDebut;
      this.#dateFin = tache.dateFin;
      this.#statut = tache.statut;
      this.#priorite = tache.priorite;
      this.#logMessage("créée");
    } catch (error) {
      console.error("Erreur lors de la création de la tâche:", error.message);
    }
  }

  getTache() {
    return {
      nom: this.#nom,
      description: this.#description,
      dateDebut: this.#dateDebut,
      dateFin: this.#dateFin,
      statut: this.#statut,
      priorite: this.#priorite,
    };
  }

  editTache(newTache) {
    try {
      this.#validateTache(newTache);
      this.#nom = newTache.nom;
      this.#description = newTache.description;
      this.#dateDebut = newTache.dateDebut;
      this.#dateFin = newTache.dateFin;
      this.#statut = newTache.statut;
      this.#priorite = newTache.priorite;
      this.#logMessage("mise à jour");
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la tâche:", error.message);
    }
  }

  dropTache() {
    this.#nom = "";
    this.#description = "";
    this.#dateDebut = null;
    this.#dateFin = null;
    this.#statut = "";
    this.#priorite = "";
    console.log("Tâche supprimée");
  }

  // Getters et Setters pour chaque champ (optionnels)
  get nom() {
    return this.#nom;
  }

  set nom(value) {
    if (value) {
      this.#nom = value;
    }
  }

  get description() {
    return this.#description;
  }

  set description(value) {
    if (value) {
      this.#description = value;
    }
  }

  // Ajoutez d'autres getters et setters si nécessaire
}

export { Taches };
