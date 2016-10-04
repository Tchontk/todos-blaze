/**
 * Ce fichier tasks.js importe 
 * __ le module de meteor/mongo
 * Création de la connexion à la collection Tasks 
 */
import {
  Mongo
} from 'meteor/mongo';
import {
  Meteor
} from 'meteor/meteor';
import {
  check
} from 'meteor/check';
// le nom de l'export est "Tasks"
export const Tasks = new Mongo.Collection('tasks');


/**
 * Suppression du package autopublish
 * Il est obligatoire de spécifier les données à publier
 * Publication des Tasks
 */
if (Meteor.isServer) {
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find();
  });
}


/**
 * En supprimant le package insecure
 * Il devient obligatoire de définir des méthodes pour les modifications des données
 */
Meteor.methods({
  'tasks.insert' (text) {
    check(text, String);
    if (!this.userId) {
      throw new Meteor.error("identification manquante")
    }
    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'tasks.remove' (taskId) {
    check(taskId, String);
    Tasks.remove(taskId);
  },
  'tasks.setChecked' (taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);
    Tasks.update(taskId, {
      $set: {
        checked: setChecked
      },
    });
  }
})