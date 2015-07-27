// Require.
var truncate = require( '../helpers/truncate' );

// Directive.
var dribbble = {

  'shots' : {

    'widget-media' : {
      
      src : function () {
        return this.image_url;
      }

    },

    'widget-like' : {

      href : function () {
        return this.url + '/fans';
      },
      text : function () {
        return truncate( this.likes_count );
      }

    }
  
  }


};

// Exports.
module.exports = dribbble;
