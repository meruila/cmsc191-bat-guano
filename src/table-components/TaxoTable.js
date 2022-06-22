import {Table} from 'react-bootstrap';

const headers = ["Super Kingdom", "Organism", "Rank", "Percent", "Kbp"];

function TaxoTable({data}) {

    return (
            <div className="TaxoTable">
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>{headers[0]}</th>
                            <th>{headers[1]}</th>
                            <th>{headers[2]}</th>
                            <th>{headers[3]}</th>
                            <th>{headers[4]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.SuperKingdom}</td>
                                    <td>{val.Organism}</td>
                                    <td>{val.Rank}</td>
                                    <td>{val.Percent}</td>
                                    <td>{val.Kbp.$numberDecimal}</td>
                                </tr>
                            )
                            })}
                    </tbody>
                </Table>
            </div>
        );
};

export default TaxoTable;