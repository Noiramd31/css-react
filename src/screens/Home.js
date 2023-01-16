import Card from '../components/Card';

const Home = () => {

  return (
  <div className='contact'>
               <Card
           firstname = 'Ross'
           surname= 'Geller'
           email= 'ross.geller@friends.com'
           phone= '06 55 99 88 77 65'
           picture= "https://assets.afcdn.com/story/20200420/2050167_w1280h1280c1cx670cy301cxt0cyt0cxb1280cyb720.jpg"
           /> 
              <Card
           firstname = 'Monica'
           surname= 'Geller'
           email= 'monica.geller@friends.com'
           phone= '06 55 99 88 77 65'
           picture= "https://i.pinimg.com/originals/ef/2d/46/ef2d465b319086ef8f34a21c8a54097e.jpg"
           /> 
      </div> 
  );
}

export default Home;
