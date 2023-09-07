import Hero from '../hero/Hero'

// include the hero element in the code that is returned as JSX code from the home component

const Home = ({movies}) => {
  return (
    <Hero movies = {movies}/>
  )
}

export default Home;