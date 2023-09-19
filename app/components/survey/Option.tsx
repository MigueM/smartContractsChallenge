import { FormControlLabel, ListItem, Radio } from '@mui/material'
import styles from './survey.module.css'

interface OptionProps {
  option: any
  index: number
  selected: boolean
  handleOptionChange: (option: any, index: number) => void
  questionDisabled: boolean
}

const Option = ({
  option,
  index,
  selected,
  handleOptionChange,
  questionDisabled,
}: OptionProps) => (
  <ListItem role={undefined} className={styles.optionContainer}>
    <FormControlLabel
      control={<Radio />}
      checked={selected}
      tabIndex={-1}
      label={option.text}
      onChange={() => handleOptionChange(option, index)}
      disabled={questionDisabled}
    />
  </ListItem>
)
export default Option
