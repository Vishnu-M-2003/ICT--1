import "./Form.css";

export default function Form({ name }) {
  return (
    <>
      <section id="mainContentForm">
        <h1>CONTACT FORM for {name}</h1>
        <form>
          <section class="formItems fullName">
            <label for="fullName">Your Fullname : </label>
            <input type="text" id="fullName" />
          </section>
          <br />
          <section class="formItems emailAddress">
            <label for="emailAddress">Email Address : </label>
            <input type="text" id="emailAddress" />
          </section>
          <br />
          <section class="formItems Phone">
            <label for="Phone"> Phone : </label>
            <input type="number" id="Phone" />
          </section>
          <br />
          <section class="formItems emailSubject">
            <label for="emailSubject">Email Subject : </label>
            <input type="text" id="emailSubject" />
          </section>
          <br />
          <section class="formItems yourMessage">
            <label for="yourMessage">Your Message : </label>
            <input type="text" id="yourMessage" />
          </section>
          <br />
          <section class="formItems securityCode">
            <label for="securityCode">Security Code : </label>
            <input type="text" id="securityCode" />
          </section>
          <br />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}
