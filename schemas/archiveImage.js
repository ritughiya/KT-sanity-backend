export default {
    name: 'archiveImage',
    title: 'Archive Image',
    type: 'image',
    fields: [
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
            options: {
                isHighLight: true
            }
        },      
    ],
    options: {
        hotspot:true,
    }
}