import Card from "./Card";
import React from "react";
const Cards = (props) => {
    let courses = props.courses;

    function getCourses() {
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(coursesData => {
                allCourses.push(coursesData);
            })
        })
        return allCourses;
    }


    return (
        <div>
            {
                getCourses().map( (course) => {
                    <Card key={course.id} course={course}/>
                })
            }
        </div>
    )
}

export default Cards;