// schemas/certificateCategory.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'certificateCategory',
  title: 'Certificate Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The name of the category (e.g., "Data Science")',
      type: 'string',
    }),
  ],
})