import {
  MAX_NUMBER_OF_LETTERS,
  MAX_NUMBER_OF_WORDS,
  MIN_NUMBER_OF_LETTERS,
  MIN_NUMBER_OF_WORDS,
} from '../../constants/settings'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Game Info" isOpen={isOpen} handleClose={handleClose}>
      <p className="mt-2 text-sm text-stone-700 dark:text-gray-300">
        Alterdle is a fully customisable word guessing game.
        <br />
        <br />
        Choose how long each word is (between {MIN_NUMBER_OF_LETTERS} and{' '}
        {MAX_NUMBER_OF_LETTERS} letters) <i>as well</i> as how many of them to
        guess (between {MIN_NUMBER_OF_WORDS} and {MAX_NUMBER_OF_WORDS}) ,
        resulting in{' '}
        {(MAX_NUMBER_OF_LETTERS - MIN_NUMBER_OF_LETTERS + 1) *
          (MAX_NUMBER_OF_WORDS - MIN_NUMBER_OF_WORDS + 1) -
          MAX_NUMBER_OF_WORDS + // Accounts for only 2 single letter words
          2}{' '}
        unique daily puzzles!!
      </p>
      <br />
    </BaseModal>
  )
}