import { defineField, defineType } from "sanity";

export default defineType({
    name : 'education',

    title : 'Education',

    type : 'document',

    fields : [
        defineField({
            name : 'institutionname',
            title : 'institution Name ',
            description: 'Name of Institution',
            type : "string"
        }),

        defineField({
            name : 'major',
            title : 'Major',
            description: 'Major of education',
            type : "string"
        }),
        defineField({
            name : 'degree',
            title : 'Degree',
            description: 'Degree of education',
            type : "string"
        }),

        defineField({
            name : 'graduationDate',
            title : 'Graduation Date ',
            description: 'Date of Graduate',
            type : "string"
        })
    ]
})