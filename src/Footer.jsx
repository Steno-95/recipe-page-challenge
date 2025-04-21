function Footer() {
  return (
    <footer className="text-center text-[1.1em] md:text-[1.5em] text-amber-50 mt-auto">
      Challenge by{" "}
      <a
        className="text-blue-800 hover:text-[var(--text-green)] focus:text-[var(--text-green)]"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className="text-blue-800 hover:text-[var(--text-green)] focus:text-[var(--text-green)]"
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
