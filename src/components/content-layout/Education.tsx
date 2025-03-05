import rupp from "@/assets/images/rupp-logo1.png"

const Education = () => {
        return (
          <div className="flex justify-center items-center gap-20">
            <div>
              <h1>About Me</h1>
              <p>
                I'm a passionate Frontend Developer with experience in building
                responsive and user-friendly web applications. Currently, I'm
                honing my skills through hands-on projects and internships,
                focusing on modern JavaScript frameworks, WebSocket development,
                and UI/UX design.
              </p>
            </div>
            <div>
              <div>
                <img src={rupp} alt="RUPP Logo" width={150} height={150} />
              </div>
              <div></div>
            </div>
          </div>
        );
};

export default Education;