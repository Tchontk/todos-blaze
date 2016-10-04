import {
  account
} from 'meteor/accounts-base';

/**
 * Configuration de accounts-base
 */
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});