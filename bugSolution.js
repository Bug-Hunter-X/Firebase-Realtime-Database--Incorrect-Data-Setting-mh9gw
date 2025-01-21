```javascript
//Correct way of setting data in Firebase Realtime Database using update()

const db = firebase.database();
const updates = {};
updates['/user/123/profile/name'] = 'John Doe';
updates['/user/123/profile/age'] = 30;

db.ref().update(updates).then(() => {
  console.log('Data updated successfully!');
}).catch(error => {
  console.error('Error updating data:', error);
});
```