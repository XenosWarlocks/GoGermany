import { 
    Datagrid,
    List,
    NumberField,
    TextField, 
    ReferenceField
} from "react-admin";

export const LessonList = () => {
    return (
        <List>
            <Datagrid>
                <NumberField source="id" />
                <TextField source="title" />
                <ReferenceField source="unitId" reference="units" />
                <NumberField source="order" />
            </Datagrid>
        </List>
    );
}