// Sample video data
const videosData = [
    {
        id: 1,
        title: "Building a Modern Website with HTML, CSS & JavaScript",
        author: "CodeMaster",
        views: "1.2M views",
        time: "2 days ago",
        duration: "15:30",
        thumbnail: "https://i.ytimg.com/vi/G3e-cpL7ofc/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/G3e-cpL7ofc",
        description: "Learn how to build a modern, responsive website from scratch using HTML5, CSS3, and vanilla JavaScript. This comprehensive tutorial covers layout design, animations, and interactive features.",
        channelAvatar: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 2,
        title: "React Tutorial for Beginners - Complete Course",
        author: "React Academy",
        views: "2.1M views",
        time: "1 week ago",
        duration: "2:15:45",
        thumbnail: "https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/w7ejDZ8SWv8",
        description: "Master React.js with this complete beginner course. Learn components, hooks, state management, and build real-world projects.",
        channelAvatar: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        id: 3,
        title: "JavaScript ES6+ Features You Must Know",
        author: "JS Ninja",
        views: "856K views",
        time: "3 days ago",
        duration: "22:18",
        thumbnail: "https://i.ytimg.com/vi/nZ1DMMsyVyI/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/nZ1DMMsyVyI",
        description: "Explore the latest JavaScript features including arrow functions, destructuring, async/await, modules, and more modern ES6+ syntax.",
        channelAvatar: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        id: 4,
        title: "CSS Grid Layout - Complete Guide",
        author: "Design Pro",
        views: "943K views",
        time: "5 days ago",
        duration: "18:42",
        thumbnail: "https://i.ytimg.com/vi/jV8B24rSN5o/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/jV8B24rSN5o",
        description: "Master CSS Grid Layout with practical examples. Learn to create complex, responsive layouts with ease using this powerful CSS feature.",
        channelAvatar: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
        id: 5,
        title: "Node.js Crash Course for Beginners",
        author: "Backend Dev",
        views: "1.5M views",
        time: "1 week ago",
        duration: "1:45:20",
        thumbnail: "https://i.ytimg.com/vi/fBNz5xF-Kx4/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/fBNz5xF-Kx4",
        description: "Get started with Node.js and server-side JavaScript. Build REST APIs, work with databases, and create full-stack applications.",
        channelAvatar: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
        id: 6,
        title: "Python Machine Learning Projects",
        author: "AI Expert",
        views: "2.3M views",
        time: "2 weeks ago",
        duration: "3:12:15",
        thumbnail: "https://i.ytimg.com/vi/WFr2WgN9_xE/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/WFr2WgN9_xE",
        description: "Build 5 machine learning projects using Python, scikit-learn, and TensorFlow. Perfect for beginners and intermediate developers.",
        channelAvatar: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
        id: 7,
        title: "WordPress Theme Development from Scratch",
        author: "WP Developer",
        views: "687K views",
        time: "4 days ago",
        duration: "2:35:10",
        thumbnail: "https://i.ytimg.com/vi/VVqMeKWnXaE/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/VVqMeKWnXaE",
        description: "Learn to create custom WordPress themes from scratch. Cover PHP, HTML, CSS, and WordPress-specific functions and hooks.",
        channelAvatar: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
        id: 8,
        title: "Docker Tutorial - Containerization Made Easy",
        author: "DevOps Master",
        views: "1.8M views",
        time: "1 week ago",
        duration: "1:28:33",
        thumbnail: "https://i.ytimg.com/vi/pTFZFxd4hOI/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/pTFZFxd4hOI",
        description: "Master Docker containerization with this comprehensive tutorial. Learn Docker basics, images, containers, volumes, and orchestration.",
        channelAvatar: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
    }
];

// Sample comments data
const commentsData = [
    {
        id: 1,
        author: "TechEnthusiast",
        time: "2 hours ago",
        text: "This is exactly what I was looking for! The explanation is so clear and easy to follow. Thanks for the great tutorial!",
        likes: 42,
        avatar: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 2,
        author: "CodeNewbie",
        time: "5 hours ago",
        text: "As a beginner, this video helped me understand the concepts much better. The examples are practical and well-explained.",
        likes: 28,
        avatar: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        id: 3,
        author: "WebDeveloper",
        time: "1 day ago",
        text: "Great content! I've been struggling with this topic for weeks and this video cleared up all my confusion. Keep up the excellent work!",
        likes: 15,
        avatar: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        id: 4,
        author: "StudentProgrammer",
        time: "2 days ago",
        text: "This is going to help me so much with my final project. The step-by-step approach makes it easy to follow along. Thank you!",
        likes: 33,
        avatar: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
];

// DOM elements
let menuBtn, sidebar, mainContent, homePage, videoPage, videoGrid, logoBtn, searchInput, searchBtn;

// Initialize DOM elements
function initializeElements() {
    menuBtn = document.getElementById('menuBtn');
    sidebar = document.getElementById('sidebar');
    mainContent = document.querySelector('.main-content');
    homePage = document.getElementById('homePage');
    videoPage = document.getElementById('videoPage');
    videoGrid = document.getElementById('videoGrid');
    logoBtn = document.getElementById('logoBtn');
    searchInput = document.getElementById('searchInput');
    searchBtn = document.getElementById('searchBtn');
    
    console.log('Elements initialized:', {
        menuBtn: !!menuBtn,
        sidebar: !!sidebar,
        mainContent: !!mainContent,
        homePage: !!homePage,
        videoPage: !!videoPage,
        videoGrid: !!videoGrid,
        logoBtn: !!logoBtn,
        searchInput: !!searchInput,
        searchBtn: !!searchBtn
    });
}

// Current video data
let currentVideo = null;
let sidebarCollapsed = false;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeElements();
    loadVideos();
    setupEventListeners();
    checkWindowSize();
});

// Event listeners
function setupEventListeners() {
    if (menuBtn) menuBtn.addEventListener('click', toggleSidebar);
    if (logoBtn) logoBtn.addEventListener('click', showHomePage);
    window.addEventListener('resize', checkWindowSize);
    
    // Search functionality
    if (searchBtn) searchBtn.addEventListener('click', performSearch);
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Toggle sidebar
function toggleSidebar() {
    sidebarCollapsed = !sidebarCollapsed;
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');
}

// Check window size for responsive behavior
function checkWindowSize() {
    if (window.innerWidth <= 1312) {
        sidebar.classList.add('collapsed');
        mainContent.classList.add('collapsed');
        sidebarCollapsed = true;
    } else {
        if (!sidebarCollapsed) {
            sidebar.classList.remove('collapsed');
            mainContent.classList.remove('collapsed');
        }
    }
}

// Load videos on home page
function loadVideos() {
    console.log('Loading videos...');
    
    if (!videoGrid) {
        console.error('videoGrid element not found!');
        return;
    }
    
    videoGrid.innerHTML = '';
    
    videosData.forEach((video, index) => {
        console.log(`Creating video card ${index + 1}:`, video.title);
        const videoCard = createVideoCard(video);
        videoGrid.appendChild(videoCard);
    });
    
    console.log('Videos loaded successfully!');
}

// Create video card element
function createVideoCard(video) {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    videoCard.setAttribute('data-video-id', video.id);
    
    videoCard.innerHTML = `
        <div class="video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}">
            <span class="video-duration">${video.duration}</span>
        </div>
        <div class="video-info">
            <div class="channel-avatar" style="background: ${video.channelAvatar}"></div>
            <div class="video-details">
                <h3>${video.title}</h3>
                <div class="video-meta">
                    <div class="channel-name">${video.author}</div>
                    <div>${video.views} • ${video.time}</div>
                </div>
            </div>
        </div>
    `;
    
    videoCard.addEventListener('click', () => showVideoPage(video));
    
    return videoCard;
}

// Show video page
function showVideoPage(video) {
    currentVideo = video;
    
    // Hide home page, show video page
    homePage.style.display = 'none';
    videoPage.classList.add('active');
    
    // Update video player
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.innerHTML = `<iframe src="${video.videoUrl}" allowfullscreen></iframe>`;
    
    // Update video info
    document.getElementById('videoTitleMain').textContent = video.title;
    document.getElementById('videoViews').textContent = `${video.views} • ${video.time}`;
    document.getElementById('channelNameMain').textContent = video.author;
    document.getElementById('channelAvatarLarge').style.background = video.channelAvatar;
    document.getElementById('videoDescription').textContent = video.description;
    
    // Load sidebar videos and comments
    loadSidebarVideos();
    loadComments();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Show home page
function showHomePage() {
    videoPage.classList.remove('active');
    homePage.style.display = 'block';
    currentVideo = null;
    
    // Pause any playing video
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.innerHTML = '';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Load sidebar videos (recommended videos)
function loadSidebarVideos() {
    const sidebarVideos = document.getElementById('sidebarVideos');
    sidebarVideos.innerHTML = '';
    
    // Get videos excluding current video
    const recommendedVideos = videosData.filter(video => video.id !== currentVideo.id);
    
    recommendedVideos.forEach(video => {
        const sidebarVideo = createSidebarVideo(video);
        sidebarVideos.appendChild(sidebarVideo);
    });
}

// Create sidebar video element
function createSidebarVideo(video) {
    const sidebarVideo = document.createElement('div');
    sidebarVideo.className = 'sidebar-video';
    sidebarVideo.setAttribute('data-video-id', video.id);
    
    sidebarVideo.innerHTML = `
        <div class="sidebar-video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}">
            <span class="sidebar-video-duration">${video.duration}</span>
        </div>
        <div class="sidebar-video-info">
            <div class="sidebar-video-title">${video.title}</div>
            <div class="sidebar-video-author">${video.author}</div>
            <div class="sidebar-video-stats">${video.views} • ${video.time}</div>
        </div>
    `;
    
    sidebarVideo.addEventListener('click', () => showVideoPage(video));
    
    return sidebarVideo;
}

// Load comments
function loadComments() {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = '';
    
    commentsData.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsList.appendChild(commentElement);
    });
}

// Create comment element
function createCommentElement(comment) {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    
    commentDiv.innerHTML = `
        <div class="comment-avatar" style="background: ${comment.avatar}"></div>
        <div class="comment-content">
            <div class="comment-header">
                <span class="comment-author">${comment.author}</span>
                <span class="comment-time">${comment.time}</span>
            </div>
            <div class="comment-text">${comment.text}</div>
            <div class="comment-actions">
                <button class="comment-action">
                    <svg class="action-icon" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
                        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73z"/>
                    </svg>
                    ${comment.likes}
                </button>
                <button class="comment-action">
                    <svg class="action-icon" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
                        <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73 0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 20l6.58-6.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/>
                    </svg>
                </button>
                <button class="comment-action">Reply</button>
            </div>
        </div>
    `;
    
    return commentDiv;
}

// Search functionality
function performSearch() {
    if (!searchInput) return;
    
    const query = searchInput.value.trim().toLowerCase();
    
    if (query === '') {
        loadVideos();
        return;
    }
    
    const filteredVideos = videosData.filter(video => 
        video.title.toLowerCase().includes(query) ||
        video.author.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query)
    );
    
    displaySearchResults(filteredVideos, query);
}

function displaySearchResults(videos, query) {
    if (!videoGrid) return;
    
    videoGrid.innerHTML = '';
    
    if (videos.length === 0) {
        videoGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #aaaaaa;">
                <h3>No results found for "${query}"</h3>
                <p>Try different keywords or check your spelling</p>
            </div>
        `;
        return;
    }
    
    videos.forEach(video => {
        const videoCard = createVideoCard(video);
        videoGrid.appendChild(videoCard);
    });
}

// Add some interactive features
document.addEventListener('click', function(e) {
    // Handle action buttons
    if (e.target.closest('.action-btn')) {
        const button = e.target.closest('.action-btn');
        const action = button.textContent.trim().toLowerCase();
        
        // Simple visual feedback
        button.style.backgroundColor = '#065fd4';
        button.style.color = 'white';
        
        setTimeout(() => {
            button.style.backgroundColor = '';
            button.style.color = '';
        }, 200);
        
        console.log(`${action} clicked`);
    }
    
    // Handle subscribe button
    if (e.target.closest('.subscribe-btn')) {
        const subscribeBtn = e.target.closest('.subscribe-btn');
        
        if (subscribeBtn.textContent === 'Subscribe') {
            subscribeBtn.textContent = 'Subscribed';
            subscribeBtn.style.backgroundColor = '#606060';
        } else {
            subscribeBtn.textContent = 'Subscribe';
            subscribeBtn.style.backgroundColor = '#ff0000';
        }
    }
});