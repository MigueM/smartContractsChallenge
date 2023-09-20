import { Box, Button, Container, List, ListItem } from '@mui/material'
import styles from './survey.module.css'

interface questionsData {
  text: string
  image: string
  lifetimeSeconds: number
  options: [{ text: number }]
}
interface ResultsProps {
  questions: questionsData[]
  selectedOptions: any
  submitSurvey: (answers: any) => void
}
const Results = ({
  questions,
  selectedOptions,
  submitSurvey,
}: ResultsProps) => {
  const answIds = selectedOptions.map((option: any) => option.index)
  const answers = { surveyID: 1, answerIds: answIds }
  return (
    <Box className={styles.surveyResultsContainer}>
      <h3>Thank you for completing the survey</h3>
      <p>Here are your answers:</p>
      <Box className={styles.answersContainer}>
        <List>
          {questions.map((question: any, index: number) => (
            <ListItem key={index}>
              <Container>
                <strong>{question.text}:</strong>{' '}
              </Container>
            </ListItem>
          ))}
        </List>
        <List>
          {selectedOptions.map((option: any, index: number) => (
            <ListItem key={index}>
              <Container>{option.value.text}</Container>
            </ListItem>
          ))}
        </List>
      </Box>
      <Button variant="contained" onClick={() => submitSurvey(answers)}>
        Submit Survey
      </Button>
    </Box>
  )
}
export default Results
