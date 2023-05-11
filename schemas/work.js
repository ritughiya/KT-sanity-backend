import SlugInput from 'sanity-plugin-better-slug'


export default {
    title: "Works",
    name: "work",
    type: "document",
    fields: [
        {
            name: 'title',
            type: 'text',
            title: 'Work Title',
          },
          {
            title: 'Work Description',
            name: 'description',
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
          title: 'Material',
          name: 'material',
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
        title: 'Dimensions',
        name: 'dimensions',
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
      title: 'Shade',
      name: 'shade',
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
    name: 'year',
    title: 'Year',
    type: 'string',
},
{
  name: 'category',
  title: 'Category',
  type: 'string',
},
    
    {
        name: 'status',
        title: 'Status',
        type: 'string',
    },
    {
      name: 'specsheet',
      title: 'Spec Sheet URL',
      type: 'url', 
    },
        
          {
            name: 'slideshow',
            title: 'Image Slideshow',
            type: 'array', // supports drag'n'drop of multiple files
            
            of: [
                {
                    title: 'Piece',
                    name: 'piece',
                    type: 'reference',
                    to: [{type: 'asset'}]
                  }
              ],
          },
          {
            name: 'archiveimages',
            title: 'Archive Images [Suggested B+W]',
            type: 'array', // supports drag'n'drop of multiple files
            
            of: [
                {
                    title: 'Piece',
                    name: 'piece',
                    type: 'reference',
                    to: [{type: 'asset'}]
                  }
              ],
          },
        {
          title: 'On Archive Page, should this work be open by default?',
          description: 'If you turn on, this work will be expanded on the Archive Page.',
          name: 'archivestatus',
          type: 'string',
          options: {
            list: [
              { title: 'Open by default', value: 'open' },

            ],
          },
        },
        {
            name: 'includedcollection',
            title: 'What Collection is this in?',
            type: 'array', // supports drag'n'drop of multiple files
            of: [
                {
                    title: 'Collection',
                    name: 'collection',
                    type: 'reference',
                    to: [{type: 'collection'}]
                  }
              ],
          },
      
        
          
    ],
    preview: {
        select: {
            title: 'title',
        }
    }
  }