import {v4 as uuidv4} from 'uuid'
import Header from './components/Header'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react';
import FeedbackStat from './components/FeedbackStat'
import FeedbackForm from './components/FeedbackForm';
import AboutIconsLink from './components/AboutIconsLink'
import AboutPages from './pages/About'

function App (){
    const [feedback, setFeedback] = useState(FeedbackData)
    console.log(feedback)

    const addFeedback =(newFeedback) =>{
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback])
    }
    const deleteFeedback =(id)=> {
      if(window.confirm('Are you sure you want to delete ?')){
        setFeedback(feedback.filter((item)=> item.id !== id))
      }
          }
      //  console.log('App', id)


  
return (
    <Router>
      <Header/>
      <div className="container">
      <Routes>
        <Route 
        exact 
        path='/' 
        element={
        <>
      <FeedbackForm handleAdd ={addFeedback}/>
      <FeedbackStat feedback ={feedback}/>
      <FeedbackList feedback={feedback}
           handleDelete ={deleteFeedback}/>
           
           
     </>
          }
      ></Route>
     <Route path='/about' element={<AboutPages/>}/>
     </Routes>
     <AboutIconsLink/>
      </div>
      </Router>  
    )
}
export default App