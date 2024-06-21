import { 
    Datagrid,
    List,
    NumberField,
    TextField, 
    ReferenceField
} from "react-admin";

export const UnitList = () => {
    return (
        <List>
            <Datagrid>
                <NumberField source="id" />
                <TextField source="title" />
                <TextField source="description" />
                <ReferenceField source="courseId" reference="courses" />
                <TextField source="order" />
            </Datagrid>
        </List>
    );
}