import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select a number from the given options.</p>
            <p>Click on the dice image to roll the dice.</p>
            <p>If the rolled dice matches your selected number, you earn points equal to the dice number.</p>
            <p>If the rolled dice doesn't match your selection, 2 points will be deducted.</p>
        </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    background-color: #fbf1f1;
    padding: 20px;
    h2 {
        font-size: 24px;
    }
    .text {
        margin-top: 24px;
    }
`;
