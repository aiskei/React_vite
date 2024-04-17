import React from 'react'
import UserItem from './UserItem'

function UserList() {
    const users = [
        { name: 'John Doe', age: 25, city: 'New York' },
        { name: 'Fanny Kambi', age: 15, city: 'California' },
        { name: 'Magic Johnson', age: 65, city: 'Taxas' }
    ]
    return (
        <div>
            <h1>Userlist</h1>
            {users.map((user, index) => (
                <UserItem
                    key={index}
                    name={user.name}
                    age={user.age}
                    city={user.city}
                />
            ))}
        </div>
    )
}

export default UserList
