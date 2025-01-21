```javascript
//Incorrectly setting the data in Firebase Realtime Database

const db = firebase.database();
const updates = {};
updates['/user/123/profile/name'] = 'John Doe';
updates['/user/123/profile/age'] = 30;

db.ref().update(updates).catch(error => {
  console.error('Error updating data:', error);
});
```