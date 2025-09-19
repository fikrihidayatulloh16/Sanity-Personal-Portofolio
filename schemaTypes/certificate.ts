import { defineField, defineType } from "sanity";
import certificateCategory from "./certificateCategory";

export default defineType({
    name: 'cert',

    title : 'Certificate',

    type: 'document',

    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            description: 'Name of Certificate',
            type: 'string'
        }),
        
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference', // The type is 'reference'
            to: [{type: 'certificateCategory'}], // It links to our new category schema
        }),
        
        defineField({
            name: 'issuingOrganization',
            title: 'Issuing Organization ',
            description: 'Instance Source',
            type: 'string'
        }),
        defineField({
            name: 'dateIssued',
            title: 'Date Issued ',
            description: 'Date Certificate',
            type: 'date'
        }),
        defineField({
            name: 'credentialUrl',
            title: 'Credential Url',
            description: 'An optional link to verify the certificate online',
            type: 'url'
        }),
        defineField({
            name: 'certificateFile',
            title: 'Certificate File ',
            description: 'Certificate File',
            type: 'file'
        }),

    ]
})