import React from "react";
import Head from "../Helper/Head";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
import UserStatsGraphs from "./UserStatsGraphs";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem("token");
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head
          title="Estatísticas"
          description="Página de estatísticas do site Dogs, aqui o gráfico."
        />
        <UserStatsGraphs />
      </div>
    );
  else return null;
};

export default UserStats;
