import React from 'react'
import Table from 'react-bootstrap/Table';


const houses = [
    {
        id: '1',
        address: 'Main street, USA',
        country: 'United States',
        price: 100000
    },
    {
        id: '2',
        address: '2nd street, USA',
        country: 'United States',
        price: 750000
    },
    {
        id: '3',
        address: '3 street, USA',
        country: 'United States',
        price: 1000000
    }
]
function HouseList() {
    return (
        <>
            <h1>These are the available house</h1>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Country</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {houses.map((house) => (
                            <tr key={house.id}>
                                <td>{house.address}</td>
                                <td>{house.country}</td>
                                <td>{house.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default HouseList
