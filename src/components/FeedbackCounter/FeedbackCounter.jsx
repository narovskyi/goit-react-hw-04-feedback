import React, { useState } from "react";
import Statistics from "components/Statistics";
import FeedbackOptions from "components/FeedbackOptions";
import Section from "components/Section";
import Notification from "components/Notification";

export default function FeedbackCounter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackButtonClick = feedback => {
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;
      
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      
      case 'bad':
        setBad(bad + 1);
        break;
    
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() === 0 ? 0 : Math.round((((good * 1) + (neutral * 0.5)) / countTotalFeedback()) * 100);
  }

  return (
      <>
        <Section
          title={'Please leave feedback'}
          children={<FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleFeedbackButtonClick}
          />}
        />
        {countTotalFeedback() === 0
          ? <Notification message={"There is no feedback"} />
          : <Section
              title={'Statistics'}
              children={<Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />}
            />
        }
      </>
    );
};