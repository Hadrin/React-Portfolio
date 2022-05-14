function Contact() {
    return (
        <div>
            <form>
                <label >Name: </label><input type='text' name='name'></input><br></br>
                <label >Email: </label><input type='text' name='email'></input><br></br>
                <label >Message: </label><input type='text' name='message'></input><br></br>
                <button>Send</button>
            </form>
  </div>
    )
}

export default Contact;