/**
 * Ce fichier body.js importe :
 * __le module meteor/template
 * __le fichier api/tasks.js
 * __la page html body (qui aurait pu avoir un autre nom)
 * Le helper permet de renseigner des informations pour la page body.html
 * Le events listeners sont appelés après certaines actions
 */
import {
  Template
} from 'meteor/templating';

import {
  Tasks
} from '../api/tasks.js';

import './body.html';

Template.body.helpers({
  tasks() {
    // Show newest tasks at the top
    return Tasks.find({}, {
      sort: {
        createdAt: -1
      }
    });
  },
});

Template.body.events({
  'submit .new-task' (event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    Tasks.insert({
      text,
      createdAt: new Date(),
    });

    // Clear form
    target.text.value = '';
  },
});