import React from "react";
import PropTypes from 'prop-types';
import { Button } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <>
            {options.map((option) => (
                <Button key={option} onClick={()=>onLeaveFeedback(option)}>{option}</Button>
            ))}
        </>
    );
} 

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}