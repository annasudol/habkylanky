import FooterDisclaimer from "@/components/FooterDisclaimer";

function Footer() {
  return (
    <footer className="px-3 sm:px-0 sticky bottom-2 left-1/2">
      <div className="container text-center mx-auto">
        <div className="md:w-4/6 mx-auto">
          <FooterDisclaimer />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
