
const CreateListing = () => {
  return (
    <main>
        <h1 className="text-3xl font-semibold text-center my-7">Create a listing</h1>
        <form className="flex flex-col sm:flex-row">
            <div className="">
                <input type="text" placeholder="Name" className="border p-3 rounded-lg" id="name" maxLength='62' minLength='10' required/>
            </div>
        </form>
    </main>
  )
}

export default CreateListing