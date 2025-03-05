const Footer = () => {
  return (
    <div className="flex text-white justify-between text-xs mx-[2%] lg:mx-[10%] py-10">
      {/* copy right footer */}
      <div>
        <p className="text-base">&#169; Sopheak SY, 2025</p>
      </div>
      {/* projects footer  */}
      <div className="flex flex-col gap-2">
        <h2 className="text-base">Current Projects</h2>
        <div className="flex flex-col gap-1">
          <p>PMS System</p>
          <p>Logistic & Service</p>
          <p>E-Commerce Website</p>
        </div>
      </div>
      {/* jump to section  */}
      <div className="flex flex-col gap-2">
        <h2 className="text-base">Jumb To</h2>
        <div className="flex flex-col gap-1">
          <p>About</p>
          <p>Blogs</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>
      {/* react out */}
      <div className="flex flex-col gap-2">
        <h2 className="text-base">Reach Out</h2>
        <div className="flex flex-col gap-1">
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Telegram</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
