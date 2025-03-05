import project1 from '@/assets/images/ecommerce-project.webp'

const Project = () => {
  return (
    <div className="flex flex-col  gap-5 lg:mx-[10%]" id="project">
      <div>
        <h1 className="text-2xl lg:text-3xl uppercase  text-center">
          <span className='text-primary'>Projects</span> I've Done
        </h1>
        {/* <div className="flex justify-center">
          <hr className="w-[100px] bg-primary h-2" />
        </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
        <div className="border-2 border-primary">
          <div className="p-2">
            <img src={project1} alt="" />
          </div>
          <div className="bg-primary text-white p-2">
            <p>Anon Express</p>
          </div>
        </div>
        <div className="border-2 border-primary ">
          <div className="p-2">
            <img src={project1} alt="" />
          </div>
          <div className="bg-primary text-white p-2">
            <p>Anon Express</p>
          </div>
        </div>
        <div className="border-2 border-primary">
          <div className="p-2">
            <img src={project1} alt="" />
          </div>
          <div className="bg-primary text-white p-2">
            <p>Anon Express</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
