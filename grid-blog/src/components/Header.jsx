/* ======================================================
    Lab 7 - Header.jsx starter    
    
    TODO: Create the entire Header component. 
    
    Requirements:
        - Show the site title and a one-sentence description.
        - Show summary numbers: totalPosts, totalLikes, totalDislikes. 
====================================================== */

export default function Header({ totalPosts, totalLikes, totalDislikes }) {
    // TODO: Replace return null with your JSX 
    return (
        <header className="header">
            <div>
                <h1>GridBlog</h1>
                <p>A place to share thoughts and ideas</p>
            </div>

            <div className="stats">
                <span>Posts: {totalPosts}</span>
                <span>Likes: {totalLikes}</span>
                <span>Dislikes: {totalDislikes}</span>
            </div>
        </header>
    );
} 