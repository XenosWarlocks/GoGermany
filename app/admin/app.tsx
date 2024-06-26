"use client";

import simpleRestProvider from "ra-data-simple-rest";
import { Admin, Resource } from "react-admin";
import { CourseList } from "./course/list";
import { CourseEdit } from "./course/edit";
import { CourseCreate } from "./course/create";
import { UnitList } from "./unit/list";
import { UnitCreate } from "./unit/create";
import { UnitEdit } from "./unit/edit";
import { LessonEdit } from "./lesson/edit";
import { LessonCreate } from "./lesson/create";
import { LessonList } from "./lesson/list";

const dataProvider = simpleRestProvider("/api");

const App = () => {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource
                name="courses"
                recordRepresentation="title"
                list={CourseList}
                create={CourseCreate}
                edit={CourseEdit}
            />
            <Resource
                name="units"
                recordRepresentation="title"
                list={UnitList}
                create={UnitCreate}
                edit={UnitEdit}
            />
            <Resource
                name="units"
                recordRepresentation="title"
                list={LessonList}
                create={LessonCreate}
                edit={LessonEdit}
            />
        </Admin>
    )
}

export default App;