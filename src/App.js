function App() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const msg = e.target.message.value;
    const num = e.target.number.value;
    if (msg && num) {
      await window.navigator.clipboard.writeText(msg);
      window.open(`https://wa.me/${num}?text=${encodeURI(msg)}&app_absent=0`);
      // let url = `https://web.whatsapp.com/send?phone=${num}`;
      // url += `&text=${encodeURI(msg)}&app_absent=0`;
      // window.open(url);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Enter WhatsApp Number</label>
      <input type="number" name="number" />
      <br />
      <br />
      <label>Enter Message</label>
      <input type="text" name="message" />
      <br />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}

export default App;
