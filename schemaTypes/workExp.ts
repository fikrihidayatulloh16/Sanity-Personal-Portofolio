import { defineType, defineField } from "sanity";

export default defineType({
    name: 'workExp',

    title: 'Work Experience',

    type: 'document',

    fields: [
        defineField({
            name: 'role',
            title: 'job Role',
            type: 'string'
        }),
        
        defineField({
            name: 'companyName',
            title: 'Company Name ',
            type: 'string'
        }),

        defineField({
            name: 'startDate',
            title: 'Start Date ',
            type: 'date'
        }),

        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'date'
        }),

        defineField({
            name: 'description',
            title: 'Description ',
            type: 'text'
        }),
    ]
})