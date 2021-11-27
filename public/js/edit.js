 const postid = document.querySelector('#post-id').value;

const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value;
    const body = document.querySelector('#post-body').value;



    const response = await fetch(`/api/posts/${postid}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: {
          'Content-Type': 'application/json',
        }
      });


      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to edit post');
        console.log("failed");
        console.log(postid);
        
      }
      //  document.location.replace('/profile');
    };

  

document
  .querySelector('#edit-post')
  .addEventListener('submit', editFormHandler);


