import React, { useState, useEffect } from "react";
import axios from "axios";

const RendezVous = (props) => {
  const [loadingList, setLoadingList] = useState(false);
  const [rdv, setrdv] = useState({});
  useEffect(() => {
    setLoadingList(true);

    axios
      .get(`http://localhost:9191/Rdv/rdvWithPatMed/${props.match.params.id}`)
      .then((res) => {
        setrdv(res.data);
        console.log(res.data);
        setLoadingList(false);
      });
  }, []);

  return (
    <>
      {/* <Dimmer active={loading || doneLoading}>
            <Loader size='mini'>Loading</Loader>
          </Dimmer>
          {getKid ? (
            <>
              <h2>
                Rendez Vous :{" "}
                {getKid.getKid.firstname + " " + getKid.getKid.lastname}
              </h2>
              <List divided verticalAlign='middle'>
                <List.Item>
                  <List.Content>Nom : {getKid.getKid.firstname}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>Prénom : {getKid.getKid.lastname} </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>Sexe : {getKid.getKid.sexe}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>Pére : {getKid.getKid.father} </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>Mére : {getKid.getKid.mother} </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Date Naissance : {getKid.getKid.birthdate}{" "}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Lieu de Naissance : {getKid.getKid.birthcity}{" "}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>Adresse : {getKid.getKid.adress} </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>CIN Tuteur : {getKid.getKid.cin} </List.Content>
                </List.Item>
              </List>
             
            </>
          ) : null} */}
    </>
  );
};

export default RendezVous;
