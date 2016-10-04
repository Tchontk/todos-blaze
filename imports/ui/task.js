/**
 * Ce fichier task.js importe :
 * __le module meteor/template
 * __le fichier api/tasks.js
 * __le template html task.html
 * Le helper permet de renseigner des informations pour la page body.html
 * Le events listeners sont appelés après certaines actions
 */
import {
  Template
} from 'meteor/templating';

import {
  Tasks
} from '../api/tasks.js';

import './task.html';

Template.task.events({
  'click .toggle-checked' () {
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete' () {
    Meteor.call('tasks.remove', this._id);
  },
});