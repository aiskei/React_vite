import Table from 'react-bootstrap/Table'
import styles from './houseList.module.css'
import currencyFormatter from '../helpers/currencyFormatter'
import React, { useState } from 'react'

const housesAray = [
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
        address: '3rd street, USA',
        country: 'United States',
        price: 1000000
    }
]
function HouseList() {
    //add new house using state hook
    const [houses, setHouses] = useState(housesAray);

    //function to add a house
   const addHouses = () => {
    setHouses([
        ...houses,
            {
                id: '4',
                address: '5th avenue, USA',
                country: 'United States',
                price: 800000
            }
        ])
   }
    return (
        <>
            <h1 className={styles.availableHouses}>
                Available Houses on the market
            </h1>
            <div>
                <Table responsive>
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
                                <td>{currencyFormatter.format(house.price)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div>
                    <button className="btn btn-primary" onClick={addHouses}>
                        Add
                    </button>
                </div>
            </div>
        </>
    )
}

export default HouseList
