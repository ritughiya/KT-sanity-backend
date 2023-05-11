export default {
    name: 'info',
    title: 'Info',
    type: 'document',
    fields: [
        {
            title: 'Bio',
            name: 'bio',
            type: 'array', 
            of: [{type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                            { title: 'Highlight', value: 'highlight' }
                        ]
                    }}]
        },
        {
            title: 'Contact Information',
            name: 'contactInfo',
            type: 'array', 
            of: [{type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                            { title: 'Highlight', value: 'highlight' }
                        ]
                    }}]
        },
        {
            title: 'Stockists',
            name: 'stockists',
            type: 'array', 
            of: [{type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                            { title: 'Highlight', value: 'highlight' }
                        ]
                    }}]
        }
    ],
    preview: {
        select: {
            title: 'title',
        }
    }
}