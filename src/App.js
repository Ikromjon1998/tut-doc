
import './App.css';
import Toggle from './Toggle';
import Clock from './Clock';
import Greeting from './Greeting'
import LoginControl from './LoginControl';
import Mailbox from './Mailbox';
import Page from './Page';



function App() {

  const messages = ['React', 'Re: React', 'Re:Re: React'];
  return (
    <div>
      <Mailbox unreadMessages={messages} />
      <Page />
      <Toggle />
      <Greeting isLoggedIn={true} />
      <Clock />
      <Clock />
      <Clock />
      <LoginControl />
    </div>
  );
}

export default App;
