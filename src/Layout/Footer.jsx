function Footer() {
  return (
    <footer className="mt-20 bg-white/5  p-4 lg:p-20  backdrop-blur-sm border-t border-white/50">
      <p className="text-center text-white/80 text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
