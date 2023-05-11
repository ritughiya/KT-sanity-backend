export default {
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
    
        {
            title: 'Is the background an image or a video?',
            name: 'background',
            type: 'string',
            options: {
              list: [
                { title: 'Image', value: 'image' },
                { title: 'Video', value: 'video' },
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
              name: 'backgroundImagecaption',
              type: 'string',
              title: 'Background Image Alt Text',
            },

        {
          name: 'backgroundVideo',
          title: 'Background Video – Iframe Link',
          type: 'url',
      },
      {
        name: 'leftColor',
        title: 'Left Color',
        type: 'color'
      },
      {
        name: 'bottomColor',
        title: 'Bottom Color',
        type: 'color'
      },
      {
        name: 'rightColor',
        title: 'Right Color',
        type: 'color'
      },
      {
        name: 'pageTitle',
        title: 'Page Title',
        type: 'string'
      },
        
    ],
    preview: {
        select: {
            title: 'siteTitle',
        }
    }
}