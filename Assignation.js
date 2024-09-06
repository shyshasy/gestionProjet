class Assignation {
  assignTache(assigne) {
    this.employe = assigne.employe;
    this.tache = assigne.tache;
    this.dateAssignation = assigne.dateAssignation;

    console.log(
      `Assignation de ${this.employe.nom} à ${this.tache.nom} à la date de ${this.dateAssignation}`
    );
  }
  dropAssign(date) {
    this.dateAssignation = date;
    console.log(`${this.dateAssignation} a été supprimée`);
  }
  getAssign() {
    return {
      employe: this.employe,
      tache: this.tache,
      dateAssignation: this.dateAssignation,
    };
  }
  // getEmpAssign() {
  //     return { employe: this.employe}
  // }
  // getTacheAssign() {
  //     return { tache: this.tache }
  // }
}

export { Assignation };
