var mongoose = require('mongoose');
var Artist = require('./models/artist.js');
var Painting = require('./models/painting.js');

mongoose.connect('mongodb://localhost/museum', function(err) {
  if (err) {
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});

var ArtistList = [{

name:'Pablo Picasso',
img_url: 'http://i.telegraph.co.uk/multimedia/archive/01773/pablo-picasso_1773978b.jpg',
nationality:'Spain',
birthYear: 1881,
description:'Pablo Ruiz y Picasso, also known as Pablo Picasso, was a Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet and playwright who spent most of his adult life in France.'
},
{

name:'Vincent Van Gogh',
img_url: 'http://www.artcyclopedia.org/art/van-gogh-self.jpg',
nationality: 'Netherlands',
birthYear:1853,
description:'Vincent Willem van Gogh was a Post-Impressionist painter of Dutch origin whose work—notable for its rough beauty, emotional honesty, and bold color—had a far-reaching influence on 20th-century art.'
},
{

name:'Jean-Michel Basquiat',
img_url: 'http://urbanepop.files.wordpress.com/2012/08/jean_michel_basquiat-hr1.jpg',
nationality: 'USA',
birthYear:1960,
description:'Jean-Michel Basquiat was an American artist. Basquiat first achieved notoriety as part of SAMO, an informal graffiti group who wrote enigmatic epigrams in the cultural hotbed of the Lower East Side of Manhattan, New York City during the late 1970s where the hip hop, post-punk and street art movements had coalesced.'
}
];

var PaintingList = [{
    title:'Guernica',
    year_made:1937,
    img_url:'http://2.bp.blogspot.com/-dlllLhl8c7s/UnrFUvtgMxI/AAAAAAAARXQ/Cv8QKBgfVD4/s1600/guernica.jpg',
    artist: 'Pablo Picasso'
},
{
    title:'Les Demoiselles d"Avignon',
    year_made:1907,
    img_url:'http://www.moma.org/explore/conservation/demoiselles/images/demoiselles_NewFINAL.jpg',
    artist: 'Pablo Picasso'
},
{
    title:'The Starry Night',
    year_made:1889,
    img_url:'http://atomictoasters.com/wp-content/gallery/professors-shutdown-images/starry-night.jpg',
    artist:'Vincent Van Gogh'
},
{
    title:'Cafe Terrace at Night ',
    year_made:1888,
    img_url:'http://upload.wikimedia.org/wikipedia/commons/0/09/Van_Gogh_-_Terrasse_des_Caf%C3%A9s_an_der_Place_du_Forum_in_Arles_am_Abend1.jpeg',
    artist:'Vincent Van Gogh'
},
{
    title:'Irony of Negro Policeman',
    year_made:1981,
    img_url:'http://uploads7.wikiart.org/images/jean-michel-basquiat/ironew-york-of-the-negro-policeman.jpg!Blog.jpg',
    artist:'Jean-Michel Basquiat'
},
{
    title:'Hollywood Africans ',
    year_made:1983,
    img_url:'http://uploads0.wikiart.org/images/jean-michel-basquiat/hollywood-africans.jpg',
    artist:'Jean-Michel Basquiat'
}
];

Artist.collection.insert(ArtistList, onInsert);
function onInsert(err, docs) {
    if (err) {
        console.log(error);
        // TODO: handle error
    } else {
        console.info('stored artists', docs.length);
    }
}

Painting.collection.insert(PaintingList, onInsert);
function onInsert(err, docs) {
    if (err) {
        console.log(error);
        // TODO: handle error
    } else {
        console.info('stored paintings', docs.length);
    }
}
