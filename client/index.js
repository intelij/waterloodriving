import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './components/store.js';
import FreeGuideForm from './components/freeGuideForm';
import ContactForm from './components/contactForm';
import RegistrationForm from './components/registrationForm';

import ReduxToastr from 'react-redux-toastr';

class FreeGuideApp extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <FreeGuideForm />
      </Provider>
    );
  }
}

class ContactFormApp extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <ContactForm />
      </Provider>
    );
  }
}

class RegistrationFormApp extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RegistrationForm />
      </Provider>
    );
  }
}

<Provider store={store}>
<div>
  <ReduxToastr
    timeOut={4000}
    newestOnTop={false}
    preventDuplicates
    position="top-left"
    transitionIn="fadeIn"
    transitionOut="fadeOut"
    progressBar/>
</div>
</Provider>

ReactDOM.render(<FreeGuideApp />, document.getElementById('freeGuideFormContainer'));
ReactDOM.render(<ContactFormApp />, document.getElementById('contactUsFormContainer'));
ReactDOM.render(<RegistrationFormApp />, document.getElementById('registrationContainer'));