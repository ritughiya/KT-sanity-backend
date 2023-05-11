// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import homepage from './homepage'
import homedemo from './homeSlideshow'
import collection from './collection'
import collectionspage from './collectionspage'
import aboutpage from './aboutpage'
import stockist from './stockist'
import presspiece from './presspiece'



import archivepage from './archivepage'
import info from './info'
import footer from './footer'

import work from './work'
import asset from './asset'
import productImage from './productImage'
import archiveImage from './archiveImage'
import homepageImage from './homepageImage'



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    homepage,
    homedemo,
    collectionspage,
    aboutpage,
    archivepage,
    collection,
    work,
    stockist,
    footer,
    asset,
    presspiece,
    productImage,
    archiveImage,
    homepageImage
  ]),
})
