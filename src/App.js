
import './App.css';
import {useState,useEffect} from "react"
import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';
import logo from "./components/newsLogo.png"
function App() {
const alanKey = "c8d53bf364805831b2b33153b1e1a8b22e956eca572e1d8b807a3e2338fdd0dc/stage"

const [newsArticles,setNewsArticles] = useState()
const [activeArticle,setActiveArticle] = useState(-1)

  useEffect(() => {
    alanBtn({
      key:alanKey,
      onCommand:({command,articles,number})=>{
if(command==="newHeadlines"){
  setNewsArticles(articles)
  console.log(articles)
}
else if(command ==="highlight") {
setActiveArticle(prevArticle=>prevArticle+1);

}
else if(command==="open"){
  const parsedNumber = number.length>2?wordsToNumbers(number,{fuzzy:true}):number
  const article = articles[parsedNumber-1]
  if(parsedNumber>20){
    alanBtn().playText("Try again valid article number")
  }
  else if(article){
   window.open(article.url,"_blank");
   alanBtn().playText("opening")
  }

}
      }
    })
  }, [])
  return (
    <div className="App">
      <div className="logo-container">
      <img className="logo" src={logo} alt="logo"/>
      </div>

      
      <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
  );
}

export default App;
