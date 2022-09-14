export default function BoutiqueCard(props) {
  console.log(props.boutiqueData.boutiques);
  console.log(props.boutiqueData.boutiques.length);

  const displayBoutiques = (props) => {
    const { boutiqueData } = props;
    console.log("in display boutique", boutiqueData.boutiques.length);
    if (boutiqueData) {
      return boutiqueData.boutiques.map((boutique, index) => {
        return (
          <div className="boutique-card" key={boutique._id}>
            <h3>{boutique.name}</h3>
            <p>{boutique.description}</p>
          </div>
        );
      });
    } else {
      return <p>No identified boutique yet</p>;
    }
  };

  return <>{displayBoutiques(props)}</>;
}
