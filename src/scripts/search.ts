interface BlogPost {
  title: string;
  content: string;
  path: string;
}

let blogPosts: BlogPost[] = [];

async function fetchBlogPosts() {
  const response = await fetch('/api/blog-posts');
  blogPosts = await response.json();
}

function performSearch(query: string) {
  const results = blogPosts.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.content.toLowerCase().includes(query.toLowerCase())
  );
  
  const searchResults = document.getElementById('search-results');
  searchResults!.innerHTML = results.map(post => `
    <a href="${post.path}" class="block p-2 hover:bg-nvim-gray">
      <h3 class="font-bold">${post.title}</h3>
      <p class="text-sm">${post.content.substring(0, 100)}...</p>
    </a>
  `).join('');
  
  searchResults!.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  fetchBlogPosts();
});

window.performSearch = performSearch;
