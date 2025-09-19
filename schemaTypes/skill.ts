// schemas/skill.ts

import { defineField, defineType } from "sanity";

export default defineType({
    //this is the name of the schema that will be used in the API
    name: 'skill',

    //Title that will appear on web
    title: 'Skill',

    //type of this schema
    type: 'document',

    //fields that schema need
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            description: 'Name of the skill',
            type: "string"
        }),

        defineField({
            name:'logo',
            title:'Logo',
            description:'logo image of the skill',
            type:'image',
            options:{
                hotspot: true,
            }
        })
    ]
})