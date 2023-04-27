import Person from "./Person";

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.data} {...person} />;
      })}
    </section>
  );
};
export default List;
