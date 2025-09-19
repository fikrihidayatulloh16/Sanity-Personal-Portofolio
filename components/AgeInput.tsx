// components/AgeInput.tsx

import {Card, Text} from '@sanity/ui'
import {type NumberInputProps, useFormValue} from 'sanity'

// This function to calculate age is still correct
function calculateAge(birthday: string | undefined): number | null {
  if (!birthday) return null
  const birthDate = new Date(birthday)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDifference = today.getMonth() - birthDate.getMonth()
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

export function AgeInput(props: NumberInputProps) {
  // We use the 'useFormValue' hook to get the value of the 'birthday' field.
  // The argument is an array representing the path to the field.
  const birthday = useFormValue(['birthday']) as string | undefined

  const age = calculateAge(birthday)

  return (
    <Card padding={3} radius={2} shadow={1} tone="transparent">
      <Text muted>
        {age !== null ? `Calculated Age: ${age}` : 'Please enter a birthday to see the calculated age.'}
      </Text>
    </Card>
  )
}