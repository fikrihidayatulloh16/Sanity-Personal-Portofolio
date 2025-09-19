import { defineType, defineField } from "sanity";
import {AgeInput} from '../components/AgeInput'

export default defineType({
    name : 'pageInfo',

    title : 'Page Info',

    type : 'document',

    fields :[
        defineField({
            name: 'name',
            title : 'Full Name',
            description : 'Your Full Name',
            type: "string"
        }),

        defineField({
            name: 'callname',
            title : 'Call Name',
            description : 'Your Call Name',
            type: "string"
        }),

        defineField({
            name: 'heroTitle',
            title : 'Hero Title',
            description : 'Hero Section',
            type: "string"
        }),

        defineField({
            name: 'heroList',
            title : 'Hero List',
            description : 'Hero List Section',
            type: 'array', // Use 'array' for a list
            of: [{
                title: 'Social Link',
                type: 'object', // The items in the list are objects
                fields: [    // Each object has these fields
                    {name: 'heroname', title: 'Hero Name', type: 'string'}
                ]
            }]
        }),

        defineField({
            name: 'birthday',
            title : 'Birthday',
            type: "date"
        }),

        defineField({
            name: 'bio',
            title : 'Bio',
            description : 'About Yourself',
            type: "text"
        }),

        defineField({
            name: 'profileImage',
            title : 'Profile Image',
            type: "image",
            options: {
                hotspot: true
            }
        }),

        defineField({
            name: 'backroundImage',
            title : 'Backround Image',
            type: "image",
            options: {
                hotspot: true
            }
        }),

        defineField({
            name: 'age',
            title: 'Current Age',
            type: 'number',
            description: 'This field is calculated automatically from the birthday.',
            readOnly: true,
            components: {
                input: AgeInput,
            },
            // We have removed the 'options' object from here
        }),

        defineField({
            name: 'email',
            title : 'Email',
            type: "string"
        }),

        defineField({
            name: 'phone',
            title : 'Phone',
            type: "string"
        }),

        defineField({
            name: 'degree',
            title : 'Degree',
            type: "string"
        }),

        defineField({
            name: 'city',
            title : 'City',
            type: "string"
        }),

        defineField({
            name: 'freelance',
            title : 'Freelance Availability',
            type: "string"
        }),

        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array', // Use 'array' for a list
            of: [
                {
                title: 'Social Link',
                type: 'object', // The items in the list are objects
                fields: [    // Each object has these fields
                    {name: 'platform', title: 'Platform Name', type: 'string'},
                    {name: 'url', title: 'URL Platform', type: 'url'},
                ],
                },
            ],
        })
    ]
})