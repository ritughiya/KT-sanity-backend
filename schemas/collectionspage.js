
export default {
    name: 'collectionspage',
    title: 'Collections Page',
    type: 'document',
    fields: [
        
      
      {
          name: 'collections',
          title: 'Collections',
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