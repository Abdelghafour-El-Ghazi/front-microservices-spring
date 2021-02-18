export const validatePatientInput = ({ nom, prenom, cin }) => {
  const errors = {};

  if (nom.trim() === "") {
    errors.nom = "Le Nom est Obligatoire";
  }
  if (prenom.trim() === "") {
    errors.prenom = "Le Prénom est Obligatoire";
  }
  if (cin.trim() === "") {
    errors.cin = "Le CIN est Obligatoire";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

export const validateMedecinInput = ({
  nom,
  prenom,
  cinMedecin,
  specialite,
  nomServiceDep,
}) => {
  const errors = {};

  if (nom.trim() === "") {
    errors.nom = "Le Nom est Obligatoire";
  }
  if (prenom.trim() === "") {
    errors.prenom = "Le Prénom est Obligatoire";
  }
  if (cinMedecin.trim() === "") {
    errors.cin = "Le CIN est Obligatoire";
  }
  if (specialite.trim() === "") {
    errors.cin = "Le CIN est Obligatoire";
  }
  if (nomServiceDep.trim() === "") {
    errors.cin = "Le CIN est Obligatoire";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
