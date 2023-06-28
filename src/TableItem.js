import Card from 'react-bootstrap/Card';

export const TableItem = ({ data, index }) => {

    return (
        <>
            <Card style={{ width: '40%', padding: "8px" }} border="light" text="light" bg={index % 2 == 0 ? "dark" : "secondary"} >
                <Card.Body>
                    <Card.Title style={{ fontSize: "30px" }}>{data.first_name} {data.last_name} Age: {data.age}</Card.Title>

                    <Card.Subtitle style={{ fontSize: "20px", margin: "10px 0" }} >SSN: {data.ssn}</Card.Subtitle>
                    <Card.Text style={{ fontSize: "25px" }}>
                        {data.address_street}
                        <br />
                        {data.address_city}{", "}{data.address_state}{" "}{data.address_zip}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}