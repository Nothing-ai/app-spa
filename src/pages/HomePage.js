import React from 'react';
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: "Czym jest teroai strun",
    author: "Jan Nowak",
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis doloribus excepturi. Quisquam commodi amet doloremque nostrum sequi facere reiciendis. Praesentium reprehenderit temporibus neque nesciunt exercitationem natus, tenetur ad ipsum!',
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego",
    author: "Ania Kwiatkowska",
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis doloribus excepturi. Quisquam commodi amet doloremque nostrum sequi facere reiciendis. Praesentium reprehenderit temporibus neque nesciunt exercitationem natus, tenetur ad ipsum!',
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia?",
    author: "Jan Kowalski",
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis doloribus excepturi. Quisquam commodi amet doloremque nostrum sequi facere reiciendis. Praesentium reprehenderit temporibus neque nesciunt exercitationem natus, tenetur ad ipsum!',
  },
]

const HomePage = () => {

  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ))
  return (
    <div className="home">
      {artList}
    </div>
  );
}

export default HomePage;