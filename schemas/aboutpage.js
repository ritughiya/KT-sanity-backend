
export default {
    name: 'aboutpage',
    title: 'About Page',
    type: 'document',
    fields: [
       
      
        {
            title: 'About Text',
            name: 'abouttext',
            type: 'array', 
            of: [{
                title: 'Block',
                type: 'block',
                // Styles let you set what your user can mark up blocks with. These
                // corrensponds with HTML tags, but you can set any title or value
                // you want and decide how you want to deal with it where you want to
                // use your content.
                styles: [
                  {title: 'Normal', value: 'normal'},
                  {title: 'H1', value: 'h1'},
                  {title: 'H2', value: 'h2'},
                  {title: 'H3', value: 'h3'},
                  {title: 'H4', value: 'h4'},
                  {title: 'Quote', value: 'blockquote'}
                ],
                lists: [{title: 'Bullet', value: 'bullet'}],
                // Marks let you mark up inline text in the block editor.
                marks: {
                  // Decorators usually describe a single property – e.g. a typographic
                  // preference or highlighting by editors.
                  decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
                  // Annotations can be any object structure – e.g. a link or a footnote.
                  annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                          {
                            title: 'URL',
                            name: 'href',
                            type: 'url',
                            validation: Rule => Rule.uri({
                              scheme: ['http', 'https', 'mailto', 'tel']
                            })
                          }
                        ]
                      }
                  ]
                }
              },]
        },
        {
            title: 'instagram',
            name: 'instagram',
            type: 'array', 
            of: [{
                title: 'Block',
                type: 'block',
                // Styles let you set what your user can mark up blocks with. These
                // corrensponds with HTML tags, but you can set any title or value
                // you want and decide how you want to deal with it where you want to
                // use your content.
                styles: [
                  {title: 'Normal', value: 'normal'},
                  {title: 'H1', value: 'h1'},
                  {title: 'H2', value: 'h2'},
                  {title: 'H3', value: 'h3'},
                  {title: 'H4', value: 'h4'},
                  {title: 'Quote', value: 'blockquote'}
                ],
                lists: [{title: 'Bullet', value: 'bullet'}],
                // Marks let you mark up inline text in the block editor.
                marks: {
                  // Decorators usually describe a single property – e.g. a typographic
                  // preference or highlighting by editors.
                  decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
                  // Annotations can be any object structure – e.g. a link or a footnote.
                  annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                          {
                            title: 'URL',
                            name: 'href',
                            type: 'url',
                            validation: Rule => Rule.uri({
                              scheme: ['http', 'https', 'mailto', 'tel']
                            })
                          }
                        ]
                      }
                  ]
                }
              },]
        },
        {
            title: 'linkedin',
            name: 'linkedin',
            type: 'array', 
            of: [{
                title: 'Block',
                type: 'block',
                // Styles let you set what your user can mark up blocks with. These
                // corrensponds with HTML tags, but you can set any title or value
                // you want and decide how you want to deal with it where you want to
                // use your content.
                styles: [
                  {title: 'Normal', value: 'normal'},
                  {title: 'H1', value: 'h1'},
                  {title: 'H2', value: 'h2'},
                  {title: 'H3', value: 'h3'},
                  {title: 'H4', value: 'h4'},
                  {title: 'Quote', value: 'blockquote'}
                ],
                lists: [{title: 'Bullet', value: 'bullet'}],
                // Marks let you mark up inline text in the block editor.
                marks: {
                  // Decorators usually describe a single property – e.g. a typographic
                  // preference or highlighting by editors.
                  decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
                  // Annotations can be any object structure – e.g. a link or a footnote.
                  annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                          {
                            title: 'URL',
                            name: 'href',
                            type: 'url',
                            validation: Rule => Rule.uri({
                              scheme: ['http', 'https', 'mailto', 'tel']
                            })
                          }
                        ]
                      }
                  ]
                }
              },]
        },
        {
            title: 'email',
            name: 'email',
            type: 'array', 
            of: [{
                title: 'Block',
                type: 'block',
                // Styles let you set what your user can mark up blocks with. These
                // corrensponds with HTML tags, but you can set any title or value
                // you want and decide how you want to deal with it where you want to
                // use your content.
                styles: [
                  {title: 'Normal', value: 'normal'},
                  {title: 'H1', value: 'h1'},
                  {title: 'H2', value: 'h2'},
                  {title: 'H3', value: 'h3'},
                  {title: 'H4', value: 'h4'},
                  {title: 'Quote', value: 'blockquote'}
                ],
                lists: [{title: 'Bullet', value: 'bullet'}],
                // Marks let you mark up inline text in the block editor.
                marks: {
                  // Decorators usually describe a single property – e.g. a typographic
                  // preference or highlighting by editors.
                  decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
                  // Annotations can be any object structure – e.g. a link or a footnote.
                  annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                          {
                            title: 'URL',
                            name: 'href',
                            type: 'url',
                            validation: Rule => Rule.uri({
                              scheme: ['http', 'https', 'mailto', 'tel']
                            })
                          }
                        ]
                      }
                  ]
                }
              },]
        },



        {
            name: 'stockists',
            title: 'Stockists',
            type: 'array', // supports drag'n'drop of multiple files
            
            of: [
                {
                    title: 'Stockist',
                    name: 'stockist',
                    type: 'reference',
                    to: [{type: 'stockist'}]
                  }
              ],
          }, 
          {
            name: 'press',
            title: 'Press',
            type: 'array', // supports drag'n'drop of multiple files
            
            of: [
                {
                    title: 'Press Piece',
                    name: 'presspiece',
                    type: 'reference',
                    to: [{type: 'presspiece'}]
                  }
              ],
          }, 
          {
            name: 'pageColor',
            title: 'Page Color (as Hex #)',
            type: 'string'
          },
          {
            name: 'pageTitle',
            title: 'Page Title',
            type: 'string'
          },
  ],
    preview: {
        select: {
            title: 'pageTitle',
        }
    }
}