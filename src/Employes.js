class Employes {
  #nom = "";
  #prenom = "";
  #email = "";
  #poste = "";
  #dateEmbauche = "";
  #statut = "";

  // Méthode privée pour valider les champs
  #validateEmploye(employe) {
    if (!employe.nom || !employe.prenom || !employe.email || !employe.poste || !employe.dateEmbauche || !employe.statut) {
      throw new Error("Tous les champs sont obligatoires");
    }
    // Validation basique de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(employe.email)) {
      throw new Error("Adresse e-mail invalide");
    }
  }

  // Méthode privée pour centraliser les messages de la console
  #logMessage(action) {
    console.log(
      `Employe: ${this.#nom}, ${this.#prenom}, ${this.#email}, ${this.#poste}, ${this.#dateEmbauche}, ${this.#statut} a été ${action} avec succès`
    );
  }

  createEmp(employe) {
    try {
      this.#validateEmploye(employe);
      this.#nom = employe.nom;
      this.#prenom = employe.prenom;
      this.#poste = employe.poste;
      this.#email = employe.email;
      this.#dateEmbauche = employe.dateEmbauche;
      this.#statut = employe.statut;
      this.#logMessage("créé");
    } catch (error) {
      console.error("Erreur lors de la création de l'employé:", error.message);
    }
  }

  getName() {
    return this.#nom;
  }

  getEmp() {
    return {
      nom: this.#nom,
      prenom: this.#prenom,
      email: this.#email,
      poste: this.#poste,
      dateEmbauche: this.#dateEmbauche,
      statut: this.#statut,
    };
  }

  editEmp(newEmploye) {
    try {
      this.#validateEmploye(newEmploye);
      this.#nom = newEmploye.nom;
      this.#prenom = newEmploye.prenom;
      this.#email = newEmploye.email;
      this.#poste = newEmploye.poste;
      this.#dateEmbauche = newEmploye.dateEmbauche;
      this.#statut = newEmploye.statut;
      this.#logMessage("mis à jour");
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'employé:", error.message);
    }
  }

  dropEmp() {
    this.#nom = "";
    this.#prenom = "";
    this.#email = "";
    this.#poste = "";
    this.#dateEmbauche = null;
    this.#statut = "";
    console.log("Employé supprimé");
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

  get prenom() {
    return this.#prenom;
  }

  set prenom(value) {
    if (value) {
      this.#prenom = value;
    }
  }

  // Ajoutez d'autres getters et setters si nécessaire
}

export { Employes };
