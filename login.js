function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
  console.log(profile);
 var taylorsEmail = profile.po;
 var taylorsFirstName = profile.Ph;
 var taylorsLastName = profile.hg;
 var taylorsImgURL = profile.Ei;
 console.log(taylorsEmail, taylorsFirstName, taylorsLastName, taylorsImgURL);
};
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  };