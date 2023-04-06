import Typewriter from "typewriter-effect";

const TypeWriter = ({string}) => {
  return (
    <div className="typewriter">
      <Typewriter
        options={{
          loop: true,
          strings:string,
          autoStart: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .start()
            .pauseFor(800)
            .deleteAll()
        }}
      />
    </div>
  );
};

export default TypeWriter;
