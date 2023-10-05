import React from "react";
import HorizontalLine from "./HorizontalLine";

interface PropTypes {}

const Footer: React.FC<PropTypes> = () => {
  return (
    <>
      <div className="mt-auto">
        <HorizontalLine />
        <footer className="container mx-auto footer footer-center p-4 text-base-content">
          <aside>
            <p>Copyright © 2023 - All right reserved by NFT Ltd</p>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;
