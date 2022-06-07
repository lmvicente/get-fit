import { Link, Outlet } from "react-router-dom";
import dumbbell from './../assets/dumbbell.png';
import bench from './../assets/bench-press.png';
import situp from './../assets/sit-up.png';
import cardio from './../assets/running.png';


const Schedule = [
    {
        id: 1,
        Day: "Monday",
        Target: "Arms",
        FirstExercise: "Bicep Curl",
        SecondExercise: "Overhead Triceps Extension",
        ThirdExercise: "Dumbbell Shrugs",
        FourthExercise: "Reverse Curl",
        FifthExercise: "Pull-Up"

    },
    {
        id: 2,
        Day: "Tuesday",
        Target: "Legs",
        FirstExercise: "Barbell Squats",
        SecondExercise: "Hip Thrust",
        ThirdExercise: "Walking Lunges",
        FourthExercise: "Wall Sits",
        FifthExercise: "Calf Raises"

    },
    {
        id: 3,
        Day: "Thursday",
        Target: "Pectorals",
        FirstExercise: "Push Ups",
        SecondExercise: "Bench Press",
        ThirdExercise: "Dumbbell Squeeze Press",
        FourthExercise: "Chest Dips",
        FifthExercise: "Cable Fly"

    },
    {
        id: 4,
        Day: "Friday",
        Target: "Abdominals",
        FirstExercise: "Crunches",
        SecondExercise: "Toe Touches",
        ThirdExercise: "Reverse Crunches",
        FourthExercise: "Heel Touches",
        FifthExercise: "Leg Raises"

    },
];


const ScrollToElement = () => {
    const section = document.getElementById('learnMore')
    section.scrollIntoView(true, { behavior: "smooth" })
}


const ScrollToTop = () => {
    const section = document.getElementById('header')
    section.scrollIntoView(true, { behavior: "smooth" })
}

function Home() {
    return (

        <>
            
            <div className="header-container" id="header">
            <div className="container-child">
                <h1>Create the perfect workout for you</h1>
                <p>Creating the perfect workout has never been easier. Just find your target body areas, select from the exercises, choose the amount of reps,
                    and add it to your routine! Get started making the perfect workout for you! </p>
                <div className="button-container">
                    <Link to="/create"><input type="button" value="Create a Routine" className="gen-routine" /></Link>
                    <input type="button" value="Learn More" className="gen-workout" onClick={ScrollToElement} />
                </div>
            </div>
            <div className="container-child">

            </div>
        </div>

            <div className="learn-container" id="learnMore">
                <h1>Learn Why Target Areas Are Important</h1>
                <p>Although full-body workouts are a great way of stimulating your entire body and getting a well-rounded workout, targeting body areas
                    allows for more sets in building individual muscles. And while you are building more specific muscles, you also get a larger recovery
                    time than doing a full-body workout. If you do arms one day, the next day you can work your legs. This allows your arms to recover as
                    you build muscle on your legs. Also, while you are targeting specific muscles, you are also able to isolate your weaker ones. For
                    example, if you are doing push-ups and you are only feeling the burn in your arms, this is because your body is primarily using your
                    arm muscles to do the work, leaving other muscle groups out. For push-ups, this could be your abdominal region. In order to get the
                    best workout for your abs, you might need to find an exercise that will specifically target that body area, such as a sit-up or a jackknife.
                </p>
            </div>

            <div className="learn-container" id="differentWorkouts">
                <h1>Examples of Target Body Areas</h1>
                <div className="workout-container">
                    <div className="card">
                        <h2>Arms</h2>
                        <img src={dumbbell} className="card-icon" />
                        <p>There are plenty of exercises for arms that include lateral raises, bicep curls, push-ups, tricep dips, dumbbell rows, and much more.</p>
                    </div>
                    <div className="card">
                        <h2>Pectorals</h2>
                        <img src={bench} className="card-icon" />
                        <p>These exercises include incline push ups, flat bench press, chest dips, cable crossovers, and regular push ups.</p>
                    </div>
                    <div className="card">
                        <h2>Abdominals</h2>
                        <img src={situp} className="card-icon" />
                        <p>Get that six-pack doing abdominal exercises such as sit-ups, jackknives, reverse crunches, crunches, heel touches, toe touches, and more.</p>
                    </div>
                    <div className="card">
                        <h2>Legs</h2>
                        <img src={cardio} className="card-icon" />
                        <p>Get your legs toned with calf raises, lunges, step ups, walking lunges, leg presses, bulgarian split squats, and more!</p>
                    </div>
                </div>

            </div>

            <div className="learn-container" id="scheduleIdeas">
                <h1>Examples of Workout Routines (w/ Rest)</h1>
                <div className="workout-container">
                    
                        {Schedule.map(({ id, Day, Target, FirstExercise, SecondExercise, ThirdExercise, FourthExercise, FifthExercise }) => (
                            <div key={id}>
                                <div className="card">

                                    <h3>{Day} - {Target}</h3>
                                    <p>{FirstExercise}</p>
                                    <p>{SecondExercise}</p>
                                    <p>{ThirdExercise}</p>
                                    <p>{FourthExercise}</p>
                                    <p>{FifthExercise}</p>


                                    {/*<p key={id}> {name}'s {description} is on {link} </p>*/}
                                </div>
                            </div>



                        ))}
                    

                </div>
            </div>

            <p onClick={ScrollToTop}>Click here to scroll back to top</p>


        </>



    )
}

export default Home;