const article = ({ article }) => {
    return <>
        <h1>This is article {article.id}</h1>
        <p>{article.body}</p>
        <br />
    </>
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export default article;
