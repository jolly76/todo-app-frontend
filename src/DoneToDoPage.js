
function DoneToDoPage(props) {
    let todoArr = props.todo;

    return (
        <div class="bg-yellow-100 min-h-[300px] flex justify-center items-center py-10 px-4">
            <table class="table-auto border border-black shadow-lg rounded-lg bg-white">
                <thead class="bg-yellow-300">
                    <tr>
                        <th class="border px-6 py-3 text-lg font-semibold text-gray-800">Completed Todo Title</th>
                        <th class="border px-6 py-3 text-lg font-semibold text-gray-800">status</th>
                        <th class="border px-6 py-3 text-lg font-semibold text-gray-800">Completed Date</th>

                    </tr>
                </thead>

                {
                    todoArr.map((todo, index) => (
                        todo.status === "completed" && (
                            <tr key={todo.id}>
                                <td>{todo.todoTitle}</td>
                                <td>{todo.status}</td>
                                <td>{todo.completedDate.toLocaleDateString()}</td>
                            </tr>
                        )))
                }


            </table>
        </div>
    )
}

export default DoneToDoPage