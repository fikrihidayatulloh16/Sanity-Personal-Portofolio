import { defineField, defineType } from "sanity";
import skill from "./skill";

export default defineType({
    name: 'project',

    title: 'Projects',

    type: 'document',

    fields: [
        defineField({
            name : 'title',
            title : 'Project Title',
            type : 'string'
        }),
        
        defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 96,
            // Use the defaultIsUnique helper function
            isUnique: (value, context) => context.defaultIsUnique(value, context),
        },
        validation: (Rule) => Rule.required(), // It's also good practice to make the slug required
        }),
        
        defineField({
            name : 'category',
            title : 'Category',
            type : 'string'
        }),
        
        defineField({
            name : 'client',
            title : 'Client',
            type : 'string'
        }),
        
        defineField({
            name : 'projectDate',
            title : 'Project Date',
            type : 'date'
        }),
        
        defineField({
            name : 'mainImage',
            title : 'Main Image',
            description : 'This image will be used for previews and cover photos',
            type : 'image',
            options:{ 
                hotspot: true
            }
        }),
        
        defineField({
            name : 'imageText',
            title : 'Image Text',
            description : 'This text used for quick message',
            type : 'string'
        }),
        
        defineField({
            name : 'gallery',
            title : 'Image Gallery',
            description : 'Add all other images for the project detail page here.',
            type : 'array',
            of : [{
                title: 'Image Gallery',
                type: 'object', // The array can contain images
                fields: [
                    {name: 'alt', title: 'Alt/teks galery', type: 'string'},
                    {name: 'projectgallery', title: 'Project Gallery', type: 'image', options: {hotspot: true}}
                ]
            }]
        }),
        
        defineField({
            name : 'videourl',
            title : 'Project Video URL',
            type : 'url'
        }),

        defineField({
            name : 'descriptions',
            title : 'Description',
            description : 'Project Description',
            type : 'array',
            of: [
                {type: 'block'}
            ]
        }),
        
        defineField({
            name: 'tech',
            title: 'Technologies',
            type: 'array',
            of: [{
                title : 'Technologies',
                type: 'object', 
                fields: [
                    {name: 'tech', title: 'Technology used', type: 'reference', to: [{type: 'skill'}]},
                    {name: 'techDescription', title: 'Technology Description', type: 'string',}
                ]}
            ]
                

        }),

        defineField({
            name : 'feature',
            title: 'Project Feature',
            type: 'array',
            of: [
                {type : 'block'},
            ]
        }),
        
        defineField({
            name : 'githuburl',
            title : 'Github URL Project',
            type : 'url'
        })
    ]
})