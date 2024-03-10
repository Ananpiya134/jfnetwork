import Typography from "./Typography";

import type {Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof Typography> = {
  component:Typography,
  tags: ['autodocs'],
  title: 'Bases/Typography'
}

export default meta

type Story = StoryObj<typeof Typography> 

export const Desktop:Story = {
  render: () => 
    (<div>
      <Typography variant="header">Header</Typography>
      <Typography variant="name">Name</Typography>
      <Typography variant='content'>Content</Typography>
      <Typography variant='date'>Date</Typography>
    </div>)
  
}

export const Mobile:Story = {
  parameters: { viewport: { defaultViewport: 'iphonex', }},
  render: () => 
    (<div>
      <Typography variant="header">Header</Typography>
      <Typography variant="name">Name</Typography>
      <Typography variant='content'>Content</Typography>
      <Typography variant='date'>Date</Typography>
    </div>)
}