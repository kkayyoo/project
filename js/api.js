/*
 # HERE api could be put here based on jQuery.
 # The better way for every team member to collaborate on this .js file
 # is to create a pull request before merge into WANLINYU' master  our "final master branch".
*/
// Initialize the platform object:
   var platform = new H.service.Platform({
   'app_id': '{7jZZomQfwSZAgcua33U4}',
   'app_code': '{OvdFmK9bxv1ley2aTN3wfA}'
   });

   // Obtain the default map types from the platform object
   var maptypes = platform.createDefaultLayers();

   // Instantiate (and display) a map object:
   var map = new H.Map(
   document.getElementById('here--map'),
   maptypes.normal.map,
   {
     zoom: 10,
     center: { lng: 13.4, lat: 52.51 }
   });
