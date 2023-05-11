export default {
    name: 'archivepage',
    title: 'Archive Page',
    type: 'document',
    fields: [
        
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