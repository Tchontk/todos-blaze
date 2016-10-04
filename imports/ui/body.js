/**
 * Ce fichier body.js importe :
 * __le module meteor/template
 * __le fichier api/tasks.js
 * __le fichier ui/task.js
 * __la page ui/body.html
 * __le module reactiveDict permet l'utilisation du tracker via les variable session'
 * Le helper permet de renseigner des informations pour la page body.html
 * Le events listeners sont appelés après certaines actions
 */
import {
  Template
} from 'meteor/templating';
import {
  ReactiveDict
} from 'meteor/reactive-dict';
import {
  Tasks
} from '../api/tasks.js';

import './task.js';
import './body.html';

/**
 * Nous attachons le tracker au template body
 */
Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
})

Template.body.helpers({
  tasks() {
    const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
      /**
       * le find({Query},{projection})
       */
      return Tasks.find({
        checked: {
          $ne: true
        },
      }, {
        sort: {
          createdAt: -1
        }
      })
    }
    // Show newest tasks at the top
    return Tasks.find({}, {
      sort: {
        createdAt: -1
      }
    });
  },
  incompleteCount() {
    return Tasks.find({
      checked: {
        $ne: true
      }
    }).count()
  }
});

Template.body.events({
  'submit .new-task' (event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    Meteor.call('tasks.insert', text)

    // Clear form
    target.text.value = '';
  },
  /**
   * Création d'une nouvelle clef 'hideCompleted' dans l'objet instance.set'
   */
  'change .hide-completed input' (event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  }
});