export default function BlogPost({ params }) {
    console.log("BlogPost executed: ", params);
    return (
        <main>
            <h1>Post 1</h1>
            <p>This is { params.slug } page</p>
        </main>
    );
}