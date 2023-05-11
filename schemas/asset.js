export default {
    title: "Image Gallery",
    name: "asset",
    type: "document",
    fields: [
          {
            name: 'mainImage',
            type: 'image',
            title: 'Image',
            options: {
              hotspot: true,
            },},
            
             
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
        
    ],
    preview: {
        select: {
            title: 'alt',
            media: 'mainImage'
        }
    }
  }