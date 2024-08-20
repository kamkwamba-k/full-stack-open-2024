const Header = props => <h1>{props.course}</h1>
   
const Part = (props) => {
  return (
    <p>
        {props.part.name} {props.part.exercises}
    </p>
  )
}

// randers couses and number of exercises
const Content = ({parts}) => {
  return (
    <>
      { parts.map( part => <Part part={part} /> )}  
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}



const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content 
        parts={[part1, part2, part3]}
      />

      <Total 
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />

    </div>
  )
}

export default App