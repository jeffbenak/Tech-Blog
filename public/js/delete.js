const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const postid = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${postid}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);