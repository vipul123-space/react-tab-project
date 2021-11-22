import React from "react";
import Loading from "./Loading";
import Info from "./Info";
const url = "https://course-api.com/react-tabs-project";
function Tabs() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const FetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  React.useEffect(() => {
    FetchData();
    return () => {};
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <section className="tab__section">
        <Info data={data} />
      </section>
      <div className="main__button">
        <button className="primary__btn">more info</button>
      </div>
    </>
  );
}

export default Tabs;
