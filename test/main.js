function getLocalStorageItem(key) {
 return localStorage.getItem(key);
}

function setLocalStorageItem(key, value) {
 localStorage.setItem(key, value);
}

function getUserMedia(constraints) {
 return navigator.mediaDevices.getUserMedia(constraints);
}

function getUserMediaAsFuture(constraints) {
 return new Promise((resolve, reject) => {
  navigator.mediaDevices.getUserMedia(constraints)
    .then(resolve)
    .catch(reject);
 });
}

