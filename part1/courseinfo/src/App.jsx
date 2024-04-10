const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Foundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;

function Header(props) {
  const course = props.course;
  return <h1>{course.name}</h1>;
}

function Content(props) {
  const course = props.course;
  return (
    <div>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
    </div>
  );

  function Part(props) {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    );
  }
}

function Total(props) {
  let total = 0;
  props.course.parts.forEach((part) => (total += part.exercises));
  return <p>Number of exercises {total}</p>;
}
