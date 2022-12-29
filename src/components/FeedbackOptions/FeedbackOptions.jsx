import { WraperBtn, Btn } from '../Statistics/Statistics.styled';

export const FeedbackOptions = ({ options, onChangeFeedBack }) => {
  return (
    <WraperBtn>
      {Object.keys(options).map(key => (
        <Btn type="button" key={key} name={key} onClick={onChangeFeedBack}>
          {key}
        </Btn>
      ))}
    </WraperBtn>
  );
};
