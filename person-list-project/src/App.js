import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "john",
      jop: "developer",
    },
    { img: 34, name: "Bob", jop: "artist" },
    { img: 56, name: "Peter", jop: "pilot" },
  ];

  return (
    <section>
      <Person person={people[0]}/>
      <Person person={people[1]}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum delectus culpa ullam quidem tenetur, veritatis
        {/* burayı children property si tutuyor */}
      </Person>
      <Person person={people[2]}/>
    </section>
  );
};

const Person = (props) => {
  const {img,name,jop}=props.person
  const {children}=props
  
  const url = `https://randomuser.me/api/portraits/med/men/${img}.jpg`;

  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{jop}</h4>
        {children}
      </div>
    </div>
  );
};

export default App;
