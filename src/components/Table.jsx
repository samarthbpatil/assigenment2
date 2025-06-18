export default function Table({ data,c }) {
    const newData=[data[c]]
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                {newData.map((item) => (
                    <tr key={item.ID}>
                        <td>{item.name}</td>
                        <td>{item.ID}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}