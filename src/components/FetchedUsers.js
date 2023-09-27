import { useSelector } from 'react-redux'

const FetchedUsers = () => {
  const { users, isLoading, error } = useSelector((state) => state.users)

  return (
    <div>
      {isLoading ? <h1>Loading...</h1> : (
        error ? <h1>{error}</h1> : (
          <ul>
            {users.map((user) => (
              <li key={user.name.first}>{user.name.first}  {user.name.last}</li>
            ))}
          </ul>
        )
      )}
    </div>
  )
}

export default FetchedUsers
