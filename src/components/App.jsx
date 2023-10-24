import { useState } from "react"
import { Statistic } from "./Statistic/Statistic";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)
const options = ['good','neutral','bad']

  const handleLeaveFeedBack = (key) => {
    switch (key) {
      case "good":
        setGood(prevState=> prevState + 1)
        break;
      
      case "neutral":
        setNeutral(prevState=> prevState + 1)
        break;
      
      case "bad":
        setBad(prevState=> prevState + 1)
        break;
    
      default:
        break;
    }
  }

    const totalFeedback = good + neutral + bad
  
    const countPositiveFeedbackPercentage = () => {
    return (good / totalFeedback * 100).toFixed(1)
  }
  
  return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleLeaveFeedBack} />
        {totalFeedback === 0 ? <Notification message="There is no feedback"/> : <Statistic good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={countPositiveFeedbackPercentage}/>}
      </Section>
    );
}
