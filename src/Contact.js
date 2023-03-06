import styled from "styled-components";

const Contact = () => {
 

  return (
    <Wrapper>
      <h2 className="common-heading"> CONTACT US </h2>
      <iframe
        title="dream-store"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d632.1364292853992!2d87.0894331432121!3d22.16566889408232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d12f7d9f85d75%3A0x261d959d839dfd9d!2sState%20Bank%20of%20India%20-%20Rohini%20Branch!5e1!3m2!1sen!2sin!4v1677735563950!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mqkoblzl" method="POST" className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
              // value=""
            ></input>
            <input
              type="email"
              placeholder="Email"
              name="Email"
              required
              autoComplete="off"
              // value=""
            ></input>
             <textarea
              placeholder="Enter Your Message"
              name=" Message"
              required
              autoComplete="off"
              // value=""
              cols="40"
              rows="5  "
            ></textarea>

            <input
             type="submit"
              name="SEND"
              required
              autoComplete="off"
              value="SEND"
            ></input>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;
height: auto;
background-color: ${({ theme }) => theme.colors.bg};

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 4px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;