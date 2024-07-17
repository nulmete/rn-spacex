import { GET_LAUNCHES_QUERY } from "@/api/graphql";
import { APILaunch, APILaunchListResponse, Launch } from "@/types/launch";
import { formatDate } from "@/utils";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";

const adaptLaunches = (launches: APILaunch[]): Launch[] => {
  return launches.map(
    ({ id, details, mission_name, launch_date_utc, rocket }) => {
      return {
        id,
        details,
        missionName: mission_name,
        launchDate: formatDate(launch_date_utc),
        rocketName: rocket.rocket_name,
        rocketType: rocket.rocket_type,
      };
    }
  );
};

export const useLaunches = () => {
  const launchesQuery = useQuery<APILaunchListResponse>(GET_LAUNCHES_QUERY, {
    // TODO(BONUS): find by rocket_name
    variables: {},
  });

  const data = useMemo(() => {
    if (launchesQuery.data === undefined) return;
    return adaptLaunches(launchesQuery.data.launches);
  }, [launchesQuery]);

  return {
    ...launchesQuery,
    data,
  };
};
