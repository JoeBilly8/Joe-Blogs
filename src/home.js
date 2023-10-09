const Home = () => {

    const clicked = () => {
        console.log("clicked");
    }

    const clickedAgain = (name, e) => {
        console.log("hello" + name);
        console.log(e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={clicked}>clickage</button>
            <button onClick={(e) => clickedAgain("shreevesh", e)}>click again u wetwipe</button>
        </div>
     );
}
 
export default Home;