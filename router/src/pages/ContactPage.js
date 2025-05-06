const ContactPage = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-2 has-text-centered">Контакти</h1>
        <p className="subtitle is-5 has-text-centered">
          Залиште повідомлення, і ми зв'яжемося з вами!
        </p>

        <div className="columns is-centered">
          <div className="column is-half">
            <form>
              <div className="field">
                <label className="label">Ім'я</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Ваше ім'я" required />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="email" placeholder="example@email.com" required />
                </div>
              </div>

              <div className="field">
                <label className="label">Повідомлення</label>
                <div className="control">
                  <textarea className="textarea" placeholder="Ваше повідомлення" rows="5" required></textarea>
                </div>
              </div>

              <div className="field is-grouped is-justify-content-center">
                <div className="control">
                  <button type="submit" className="button is-link is-medium">Надіслати</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
