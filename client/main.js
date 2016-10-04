/** 
 * On appelle fichier imports/ui/body.js
 * Il se trouve dans le dossier imports/ui
 * Ce fichier body.js va charger
 * _meteor/template
 * _la page html body (qui aurait pu avoir un autre nom)
 * _le fichier de configuration des accounts
 * Ce fichier body.js renseigne des informations pour la page body.html via son helpers
 */
Meteor.startup(() => {
  console.log("Client");
});

import '../imports/ui/body.js';
import '../imports/startup/accounts-config.js'