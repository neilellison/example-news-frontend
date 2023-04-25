export function ArticlesIndex(props) {
  return (
    <div>
      <h1>All Articles</h1>
      {props.articles.map((article) => (
        <div key={article.title}>
          <h2>{article.title}</h2>
          <p>Author: {article.author}</p>
          <p>Description: {article.description}</p>
          <p>Content: {article.content}</p>
        </div>
      ))}
    </div>
  );
}
