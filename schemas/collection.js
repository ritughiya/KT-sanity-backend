import SlugInput from 'sanity-plugin-better-slug'

export default {
    name: 'collection',
    title: 'Collection',
    type: 'document',
    fields: [

        {
            name: 'collectionTitle',
            title: 'Collection Title',
            type: 'string',
        },
        {
            title: 'Collections Page – Block Size',
            name: 'size',
            type: 'string',
            options: {
              list: [
                { title: 'Shorter', value: 'shorter' },
                { title: 'Longer', value: 'longer' },
              ],
            },
          },
        {
            name: 'backgroundImage',
            type: 'image',
            title: 'Background Image',
            options: {
              hotspot: true,
            },},
        {
            name: 'selectedWorks',
            title: 'Selected Works',
            type: 'array', // supports drag'n'drop of multiple files
            
            of: [
                {
                    title: 'Piece',
                    name: 'piece',
                    type: 'reference',
                    to: [{type: 'work'}]
                  }
              ],
          }, 
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            inputComponent: SlugInput,
          options: {
            source: 'title',
            basePath: 'https://kassandrathatcher.netlify.app',
            maxLength: 30,
          }}
    ],
    preview: {
        select: {
            title: 'collectionTitle',
        }
    }
}