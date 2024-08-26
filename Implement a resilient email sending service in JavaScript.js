import './App.css';
import emailJs from '@emailjs/browser';

function App() { 
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = {
      FirstName: e.target.fName.value,
      LastName: e.target.lName.value,
      Email: e.target.email.value,
      Message: e.target.message.value
    };

    console.log(form);

    emailJs.send('Service_First', 'template_rtv6zcn', form, 'xAJuc9N5pnHp9WyLY')
      .then(res => {
        console.log("data from response", JSON.stringify(res));
        if (res.status < 299) {
          e.target.fName.value = '';
          e.target.lName.value = '';
          e.target.email.value = '';
          e.target.message.value = '';
        }
      })
      .catch(error => {
        console.log("ERROR \n" + JSON.stringify(error));
      });
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='fName'>First Name</label>
          <input type='text' required name='fName' id='fName' />
          <br />
          <label htmlFor='lName'>Last Name</label>
          <input type='text' required name='lName' id='lName' />
          <br />
          <label htmlFor='email'>Email</label>
          <input type='email' required name='email' id='email' />
          <br />
          <label htmlFor='message'>Message</label>
          <br />
          <textarea rows={5} cols={50} required id='message' name='message'></textarea>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
