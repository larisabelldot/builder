import './index.css';

const stories = [
  {
    name: 'You',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&w=256&q=80',
  },
  {
    name: 'Aurora',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=facearea&w=256&q=80',
  },
  {
    name: 'Nomad Notes',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&w=256&q=80',
  },
  {
    name: 'Café Bloom',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=facearea&w=256&q=80',
  },
  {
    name: 'Coastline',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Palette Play',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=facearea&w=256&q=80',
  },
  {
    name: 'Midnight City',
    image:
      'https://images.unsplash.com/photo-1491884662610-dfcd28f30cf2?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Trail Life',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=256&q=80',
  },
];

const posts = [
  {
    id: 'aurora-north',
    userName: 'Aurora Lens',
    handle: '@aurora.lens',
    avatar:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=128&q=80',
    location: 'Reykjavík, Iceland',
    time: '2 hours ago',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'A pastel sunrise glowing over snow capped mountains and a calm fjord',
    likes: 1642,
    likedBy: 'Jordan',
    caption:
      'Chasing the first light of the day. The air was so crisp it almost sang.',
    tags: ['aurora', 'travel', 'northernlights'],
    comments: [
      {
        user: 'wander.with.mila',
        text: 'This feels like a dream! Adding Iceland to my list ASAP.',
      },
      {
        user: 'visualpoet',
        text: 'The tones are unreal. Do you still shoot on film here?',
      },
    ],
  },
  {
    id: 'city-murmur',
    userName: 'Noah Greene',
    handle: '@noahgreene',
    avatar:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=128&q=80',
    location: 'Shinjuku, Tokyo',
    time: '5 hours ago',
    image:
      'https://images.unsplash.com/photo-1506086679525-9f53aa4b2daf?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'City lights glowing in the rain with a person holding an umbrella crossing the street',
    likes: 982,
    likedBy: 'Mira',
    caption:
      'Midnight storms + neon nights. Tokyo you never stop humming.',
    tags: ['tokyo', 'streetphotography', 'rain'],
    comments: [
      {
        user: 'cityscape.jules',
        text: 'Love the reflections on the pavement. So cinematic!',
      },
    ],
  },
  {
    id: 'cocoa-dawn',
    userName: 'Café Bloom',
    handle: '@cafebloom',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&w=128&q=80',
    location: 'Lisbon, Portugal',
    time: 'Yesterday',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'A latte with intricate art on a wooden table beside pastel flowers',
    likes: 2451,
    likedBy: 'Emiko',
    caption: 'Our new lavender mocha is finally here &mdash; crafted for slow mornings.',
    tags: ['coffee', 'cafévibes', 'slowmorning'],
    comments: [
      {
        user: 'espresso.love',
        text: 'Tried it today &mdash; it is as magical as it looks! ☕️',
      },
      {
        user: 'wander.ines',
        text: 'Do you have a dairy-free version? Asking for a friend!',
      },
    ],
  },
];

const suggestions = [
  {
    name: 'Sierra Routes',
    handle: '@sierraroutes',
    reason: 'Followed by Ava & Jordan',
    avatar:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=facearea&w=128&q=80',
  },
  {
    name: 'Lumen Studio',
    handle: '@lumenstudio',
    reason: 'Popular on Instaverse',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&w=128&q=80',
  },
  {
    name: 'Stories & Co',
    handle: '@storiesnco',
    reason: 'New to Instaverse',
    avatar:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=128&q=80',
  },
];

const storiesContainer = document.querySelector('#stories');
const feedContainer = document.querySelector('#feed');
const suggestionsContainer = document.querySelector('#suggestions');

if (storiesContainer) {
  stories.forEach(story => {
    const item = document.createElement('div');
    item.className = 'story';
    item.setAttribute('role', 'listitem');
    item.innerHTML = `
      <img src="${story.image}" alt="Story from ${story.name}" loading="lazy" width="72" height="72" />
      <span class="story-name">${story.name}</span>
    `;
    storiesContainer.appendChild(item);
  });
}

if (feedContainer) {
  posts.forEach(post => {
    feedContainer.appendChild(createPost(post));
  });
}

if (suggestionsContainer) {
  suggestions.forEach(profile => {
    const row = document.createElement('div');
    row.className = 'suggestion';
    row.setAttribute('role', 'listitem');
    row.innerHTML = `
      <img src="${profile.avatar}" alt="${profile.name}" loading="lazy" width="44" height="44" />
      <div class="suggestion-info">
        <strong>${profile.handle}</strong>
        <span>${profile.reason}</span>
      </div>
      <button class="follow" type="button">Follow</button>
    `;
    suggestionsContainer.appendChild(row);
  });
}

function createPost(post) {
  const article = document.createElement('article');
  article.className = 'post';
  article.setAttribute('id', post.id);
  article.innerHTML = `
    <header class="post-header">
      <div class="post-user">
        <img class="post-avatar" src="${post.avatar}" alt="${post.userName}" loading="lazy" width="52" height="52" />
        <div class="post-user-info">
          <strong>${post.userName}</strong>
          <span>${post.handle}</span>
        </div>
      </div>
      <span class="post-location">${post.location}</span>
    </header>
    <img class="post-image" src="${post.image}" alt="${post.imageAlt}" loading="lazy" />
    <footer class="post-footer">
      <div class="post-actions" aria-label="Post actions">
        ${['Like', 'Comment', 'Share'].map(action => createActionButton(action)).join('')}
      </div>
      <button class="save" type="button" aria-label="Save to collection">
        <span aria-hidden="true">🔖</span>
      </button>
    </footer>
  `;

  const body = document.createElement('div');
  body.className = 'post-body';
  body.innerHTML = `
    <div class="post-likes">${formatLikes(post.likes)} likes · liked by ${post.likedBy}</div>
    <p class="post-caption"><strong>${post.handle}</strong> ${post.caption} ${
    post.tags
      .map(tag => `<a href="#${tag}" aria-label="View posts tagged ${tag}">#${tag}</a>`)
      .join(' ')
  }</p>
    <button class="post-comments" type="button" aria-label="View comments on ${post.userName}'s post">
      View all ${post.comments.length} comments
    </button>
    ${post.comments
      .map(comment => `<p class="post-comment"><strong>${comment.user}</strong> ${comment.text}</p>`)
      .join('')}
    <span class="post-time">${post.time}</span>
  `;

  article.appendChild(body);
  return article;
}

function createActionButton(action) {
  const icons = {
    Like: '❤️',
    Comment: '💬',
    Share: '✈️',
  };
  const ariaLabel = action === 'Share' ? 'Share post' : `${action} post`;
  return `
    <button type="button" aria-label="${ariaLabel}">
      <span aria-hidden="true">${icons[action]}</span>
    </button>
  `;
}

function formatLikes(value) {
  return value.toLocaleString('en-US');
}
