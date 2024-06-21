import { 
    Datagrid,
    List,
    NumberField,
    TextField, 
    ReferenceField
} from "react-admin";

export const ChallengeList = () => {
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