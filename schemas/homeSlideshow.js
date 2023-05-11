export default {
    title: "Demo - Home Slideshow",
    name: "homeslideshow",
    type: "document",
    fields: [
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
    ],
    preview: {
        select: {
            title: 'Demo Slideshow',
        }
    }
  }