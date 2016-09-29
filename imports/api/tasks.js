/**
 * Ce fichier tasks.js importe 
 * __ le module de meteor/mongo
 * Création de la connexion à la collection Tasks 
 */
import {
  Mongo
} from 'meteor/mongo';

// le nom de l'export est "Tasks"
export const Tasks = new Mongo.Collection('tasks');