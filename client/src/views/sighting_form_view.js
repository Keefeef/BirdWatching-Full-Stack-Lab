const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newBird = this.createNewBird(evt.target)
  // console.log(newBird);
  // console.log('hello');
  PubSub.publish('SightingFormView: bird-submitted', newBird)
}

SightingFormView.prototype.createNewBird = function (form) {
  const newBird = {
    species: form.species.value,
    location: form.location.value,
    date: form.date.value
  }
  return newBird;
};


module.exports = SightingFormView;
