document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var title = document.getElementById('titleInput').value;
    var content = document.getElementById('contentInput').value;
    
    createBlogPost(title, content);
    
    document.getElementById('titleInput').value = '';
    document.getElementById('contentInput').value = '';
  });
  
  function createBlogPost(title, content) {
    var blogPost = document.createElement('div');
    blogPost.classList.add('blogPost');
    
    var titleElement = document.createElement('h3');
    titleElement.textContent = title;
    
    var contentElement = document.createElement('p');
    contentElement.textContent = content;
    
    blogPost.appendChild(titleElement);
    blogPost.appendChild(contentElement);
    
    document.getElementById('blogPosts').appendChild(blogPost);
  }
  