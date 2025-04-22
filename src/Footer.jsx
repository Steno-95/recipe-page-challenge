function Footer() {
  return (
    <footer className="text-center text-[1.1em] md:text-[1.5em] text-[var(--text-color)] mt-auto">
      Challenge by{" "}
      <a
        className="text-blue-800 hover:text-[var(--text-dark)] focus:text-[var(--text-dark)]"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className="text-blue-800 hover:text-[var(--text-dark)] focus:text-[var(--text-dark)]"
        href="https://github.com/Steno-95"
        title="The link will redirect to the github of Stefano Lezzi"
      >
        Stefano Lezzi
      </a>
      .
    </footer>
  );
}

export default Footer;
