import React, { useState } from 'react'

function Chatbot() {

    const scrollToBottom = () => {
        const chatScreen = document.getElementById("chatScreen");
        chatScreen.scrollTop = chatScreen.scrollHeight;
    };
    // every message from the user on display\/
    const [chatarray, setChatarray] = useState([])
    // function to get a response\/
    const inpsubmit = () => {
        const userinput = document.getElementById('userTextarea').value.trim()
        const dupe = [...chatarray]
        dupe.push(userinput)
        setChatarray(dupe)
    }

    function sendMessage(element) {
        const y = element.toString().toLowerCase()
        switch (y) {
            case "how do i find the car that i want?":
                return "We get new stock every day! You can search by make, model, price and year plus a range of other criteria. Our website has a Saved Search tool that lets you set alerts for specific cars you are looking for. When we list a car matching your description, we will email you. You can also add listings to a watchlist that alerts you to an upcoming auction. To use Saved Search or Watchlist, you will need to register on our website. Register now. "
            case "will you buy my car?":
                return "We will purchase just about any car, or can help you sell it through auction. Just to be sure, you need to bring your car in for an appraisal, and you will need an appointment. You can do this online here, or call us on 0800 887 637."
            case "what happens if i win an auction?":
                return "When you win an auction, a message will appear on your screen saying 'Congratulations on your purchase' A system generated email will then be sent to you. A consultant will be in touch to arrange payment and pick up of the car."
            default:
                return "Sorry I did not recognise your question";
        }
    }
        
    const defaultArray = ["will you buy my car?", "how do i find the car that i want?", "what happens if i win an auction?"]
    
    const [searchQuestion, setSearchQuestion] = useState([])
    // const [searchedQuestion, setSearchedQuestion] = useState(['will you buy my car'])

    const HandleUserInput = (self) => {
        const searchWord = self.target.value
        const filteredSugestion = defaultArray.filter(element => {
            return element.toLowerCase().startsWith(searchWord.toLowerCase())
        })
        setSearchQuestion(filteredSugestion)
        if (searchWord.length === 0) {
            setSearchQuestion([])
        }
    };

  return (
      <div className="w-screen h-screen">
          <button onClick={() => { scrollToBottom() }}>click</button>
      <div className="absolute w-1/3 h-3/4 bg-gray-1 left-1/3 mt-10">
        <div className="h-full w-full relative bg-gray overflow-y-auto " id='chatScreen'>
          <h3 className="bg-purple rounded-2xl p-1 w-1/2 relative mt-3 mb-3">
            Hello and welcome to Turners how can we help?
          </h3>
            {
            chatarray.map((element, index) => {
                return (
                <div key={index}>
                    <h3 className="bg-purple rounded-2xl p-1 w-56 h-fit relative mr-0 ml-auto mb-3 wrap">
                    {element}
                    </h3>
                    <h3 className="bg-purple rounded-2xl p-1 pl-2 pr-2 w-56 h-fit relative mb-3">
                    {sendMessage(element)}
                    </h3>
                </div>
                );
            })
            }
        </div>
        <form
          className="relative bg-black w-full h-fit flex"
                  onSubmit={(self) => {
                        self.preventDefault();
                        inpsubmit()
                      
                  }}
        >
          <textarea
            className="relative bg-black bottom-0 w-full h-10 text-white pl-9 pr-9 pb-0 pt-2 outline-none"
            id="userTextarea"
            onChange={HandleUserInput}
          />
          <button
            className="relative bg-black bottom-0 w-fit h-10 text-white right-0 text-sm pr-1"
            type="submit"
            id="searchButt"
          >
            Send
          </button>
        </form>
{/* --------\/This is where the search sugestions are mapped\/ ------------*/}
        {
        searchQuestion.length?
        <ul className="h-20 bg-white ml-9 mr-9">
            {
            searchQuestion.map((elements,index) => {
                return (
                    <li key={index} className="border border-gray-2 bg-white pl-3 pr-3 text-center hover:cursor-pointer" onClick={() => {
                        const userTextarea = document.getElementById("userTextarea");
                        userTextarea.value = elements
                        setSearchQuestion([]);
                }}>
                    {elements}
                </li>
                );
            })
            }
        </ul>:<></>
        }
      </div>
    </div>
  );
}

export default Chatbot