
export default {
    name: 'stockist',
    title: 'Stockist',
    type: 'document',
    fields: [
        {
            name: 'city',
            title: 'City / Location',
            type: 'string',
        },
      
        {
            title: 'Store Names',
            name: 'storename',
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
        
  ],
    preview: {
        select: {
            title: 'city',
        }
    }
}