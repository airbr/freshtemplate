// We need at least one JS file in the bundle (even if it's blank) for Parcel to
// attach the HMR behavior

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.pinboard.in/v1/posts/all?auth_token=airbr:9424701EFBAA8DCA0A1B", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));