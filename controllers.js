

app.controller('myControl', function($scope){

});

function SignInController($scope) {
    // flag we use to show or hide the button in the HTML.
    $scope.signedIn = false;
 
    // authentication processing and error handling.
    // authResult is a JSON object.
    $scope.processAuth = function(authResult) {
        // check if authentication has been successful.
        if(authResult['access_token']) {
  			$scope.signedIn = true;
 		
 			//do work/forward pageview?
        } else if(authResult['error']) {
            $scope.signedIn = false;
             //do work/report error.
        }
    };
 
    // processes authentication when callback is received.
    // this:
    $scope.signInCallback = function(authResult) {
        $scope.$apply(function() {
            $scope.processAuth(authResult);
        });
    //needs to incorpporate this:
	function signinCallback(result) {
    	if (result['access_token']) 
    	{
        document.querySelector('#signinButton').setAttribute('style', 'display:none');
        loadProfileInfo();
    	} 
    	else if (result['error']) 
    	{
       console.log(result);
   		}
} 


    };
 
    // renders the sign in button.
    $scope.renderSignInButton = function() {
        gapi.signin.render('signInButton',
            {
            'callback': $scope.signInCallback, // Function handling the callback.
            'clientid': '200772488238-3oe49iv349c5mj0g3avld1ch7igip7j5.apps.googleusercontent.com', 
            'requestvisibleactions': 'http://schemas.google.com/AddActivity', // Visible actions, scope and cookie policy wont be described now,
                                                                                  // as their explanation is available in Google+ API Documentation.
            'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email',
            'cookiepolicy': 'single_host_origin'
            }
        );
    }
 
    // renders the sign in button.
    $scope.start = function() {
        $scope.renderSignInButton();
    };
 
    // calls start function on load.
    $scope.start();
}

//backstretch controller
angular.module('myModule')
.controller('stretchController', function($scope){
  $scope.images = [
    'http://dl.dropbox.com/u/515046/www/garfield-interior.jpg',
    'http://dl.dropbox.com/u/515046/www/outside.jpg',
    'http://dl.dropbox.com/u/515046/www/cheers.jpg'
  ];
});