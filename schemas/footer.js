export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string', 
        },
        {
            title: 'Notes',
            name: 'notes',
            type: 'array', 
            of: [{type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                            { title: 'Highlight', value: 'highlight' }
                        ],
                        annotations: [
                            {
                              name: 'link',
                              type: 'object',
                              title: 'Link',
                              fields: [
                                {
                                  name: 'href',
                                  type: 'url',
                                  title: 'URL',
                                  validation: Rule => Rule.uri({
                                    scheme: ['http', 'https', 'mailto', 'tel']
                                  })
                                },
                                {
                                  title: 'Open in new tab',
                                  name: 'blank',
                                  type: 'boolean'
                                }
                              ]
                            }
                          ]
                    }}]
        },
        {
            title: 'Instagram',
            name: 'instagram',
            type: 'array', 
            of: [{type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                            { title: 'Highlight', value: 'highlight' }
                        ],
                        annotations: [
                            {
                              name: 'link',
                              type: 'object',
                              title: 'Link',
                              fields: [
                                {
                                  name: 'href',
                                  type: 'url',
                                  title: 'URL',
                                  validation: Rule => Rule.uri({
                                    scheme: ['http', 'https', 'mailto', 'tel']
                                  })
                                },
                                {
                                  title: 'Open in new tab',
                                  name: 'blank',
                                  type: 'boolean'
                                }
                              ]
                            }
                          ]
                    }}]
        },
        {
            title: 'Email',
            name: 'email',
            type: 'array', 
            of: [{type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                            { title: 'Highlight', value: 'highlight' }
                        ],
                        annotations: [
                            {
                              name: 'link',
                              type: 'object',
                              title: 'Link',
                              fields: [
                                {
                                  name: 'href',
                                  type: 'url',
                                  title: 'URL',
                                  validation: Rule => Rule.uri({
                                    scheme: ['http', 'https', 'mailto', 'tel']
                                  })
                                },
                                {
                                  title: 'Open in new tab',
                                  name: 'blank',
                                  type: 'boolean'
                                }
                              ]
                            }
                          ]
                    }}]
        },
        {
            title: 'Privacy Policy',
            name: 'privacyPolicy',
            type: 'array', 
            of: [{type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                            { title: 'Highlight', value: 'highlight' }
                        ],
                        annotations: [
                            {
                              name: 'link',
                              type: 'object',
                              title: 'Link',
                              fields: [
                                {
                                  name: 'href',
                                  type: 'url',
                                  title: 'URL',
                                  validation: Rule => Rule.uri({
                                    scheme: ['http', 'https', 'mailto', 'tel']
                                  })
                                },
                                {
                                  title: 'Open in new tab',
                                  name: 'blank',
                                  type: 'boolean'
                                }
                              ]
                            }
                          ]
                    }}]
        },
        {
            title: 'Credits Line 1',
            name: 'credits1',
            type: 'array', 
            of: [{type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                            { title: 'Highlight', value: 'highlight' }
                        ],
                        annotations: [
                            {
                              name: 'link',
                              type: 'object',
                              title: 'Link',
                              fields: [
                                {
                                  name: 'href',
                                  type: 'url',
                                  title: 'URL',
                                  validation: Rule => Rule.uri({
                                    scheme: ['http', 'https', 'mailto', 'tel']
                                  })
                                },
                                {
                                  title: 'Open in new tab',
                                  name: 'blank',
                                  type: 'boolean'
                                }
                              ]
                            }
                          ]
                    }}]
        },
        {
            title: 'Credits Line 2',
            name: 'credits2',
            type: 'array', 
            of: [{type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                            { title: 'Highlight', value: 'highlight' }
                        ],
                        annotations: [
                            {
                              name: 'link',
                              type: 'object',
                              title: 'Link',
                              fields: [
                                {
                                  name: 'href',
                                  type: 'url',
                                  title: 'URL',
                                  validation: Rule => Rule.uri({
                                    scheme: ['http', 'https', 'mailto', 'tel']
                                  })
                                },
                                {
                                  title: 'Open in new tab',
                                  name: 'blank',
                                 
                                  type: 'boolean'
                                }
                              ]
                            },
                          ]
                    }}]
        },
    ],
    preview: {
        select: {
            title: 'title',
        }
    }
}


