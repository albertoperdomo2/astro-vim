interface BlogPost {
  title: string;
  content: string;
  path: string;
}

let blogPosts: BlogPost[] = [];

async function fetchBlogPosts() {
  try {
    const response = await fetch('/api/blog-posts.json');
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    blogPosts = await response.json();
  } catch (error) {
    console.error('Failed to load blog posts for search:', error);
  }
}

function performSearch(query: string) {
  const searchResults = document.getElementById('search-results');
  if (!searchResults) return;

  const results = blogPosts.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.content.toLowerCase().includes(query.toLowerCase())
  );

  if (results.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'p-2 text-nvim-gray';
    empty.textContent = `No results for "${query}"`;
    searchResults.replaceChildren(empty);
    searchResults.classList.remove('hidden');
    return;
  }

  searchResults.innerHTML = results.map(post => `
      <a href="${post.path}" class="block p-2 hover:bg-nvim-gray">
        <h3 class="font-bold text-nvim-blue">${post.title}</h3>
        <p class="text-sm">${post.content.substring(0, 100)}...</p>
      </a>
    `).join('');

  searchResults.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  fetchBlogPosts();
});

window.performSearch = performSearch;
