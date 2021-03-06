const express = require( 'express' );

const route = express.Router();

route.get( '/', urlSettings, function( req, res ) {
    res.render( 'index' );
} );

route.get( '/about', urlSettings, function( req, res ) {
    res.render( 'about' );
} );

route.get( '/agenda', urlSettings, function( req, res ) {
    res.render( 'agenda' );
} );

route.get( '/briefing', urlSettings, function( req, res ) {
    res.render( 'briefing' );
} );

route.get( '/location', urlSettings, function( req, res ) {
    res.render( 'location' );
} );

route.get( '/contact', urlSettings, function( req, res ) {
    res.render( 'contact' );
} );

function urlSettings( req, res, next ) {
    res.locals = {
        home: '/',
        about: '/about',
        agenda: '/agenda',
        briefing: '/briefing',
        location: '/location',
        contact: '/contact',
    };
    next();
};

module.exports = route;
