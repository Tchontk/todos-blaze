import {
  Meteor
} from 'meteor/meteor';

Meteor.startup(() => {
  console.log("Server");
});

/**
 * La collection Tasks est appelées coté server
 * En gros on déclare les collections dans le dossier imports/api/...
 * On les appelle coté serveur dans ce fichier 
 * ainsi que dans les fichier l'utilisant dans le dossier imports/ui'
 */
import '../imports/api/tasks.js';