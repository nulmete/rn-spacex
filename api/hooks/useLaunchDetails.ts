import { GET_LAUNCH_DETAILS_QUERY } from "@/api/graphql";
import {
  APILaunchDetails,
  APILaunchDetailsResponse,
  LaunchDetails,
} from "@/types/launch";
import { formatDate } from "@/utils";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";

const adaptLaunch = (launch: APILaunchDetails): LaunchDetails => {
  const { mission_name, launch_site, launch_date_utc, links, rocket, details } =
    launch;

  return {
    details,
    missionName: mission_name,
    launchSiteName: launch_site?.site_name ?? null,
    rocketName: rocket.rocket_name,
    rocketType: rocket.rocket_type,
    launchDate: formatDate(launch_date_utc),
    articleLink: links.article_link,
    videoLink: links.video_link,
  };
};

export const useLaunchDetails = ({ id }: { id?: string }) => {
  const launchDetailsQuery = useQuery<APILaunchDetailsResponse>(
    GET_LAUNCH_DETAILS_QUERY,
    {
      variables: { id },
      skip: id === undefined,
    }
  );

  const data = useMemo(() => {
    if (launchDetailsQuery.data === undefined) return;
    return adaptLaunch(launchDetailsQuery.data.launch);
  }, [launchDetailsQuery]);

  return {
    ...launchDetailsQuery,
    data,
  };
};
