// API Response types
type APILaunchBase = {
  mission_name: string;
  rocket: APILaunchRocket;
  details: string | null;
  launch_date_utc: string;
};

export type APILaunch = APILaunchBase & {
  id: string;
};

export type APILaunchListResponse = {
  launches: APILaunch[];
};

type APILaunchRocket = {
  rocket_name: string;
  rocket_type: string;
};

export type APILaunchDetails = APILaunchBase & {
  launch_site: APILaunchSite | null;
  links: APILaunchLink;
};

export type APILaunchDetailsResponse = {
  launch: APILaunchDetails;
};

type APILaunchSite = {
  site_name: string | null;
};

type APILaunchLink = {
  article_link: string;
  video_link: string;
};

// UI types
type LaunchBase = {
  missionName: string;
  rocketName: string;
  rocketType: string;
  details: string | null;
  launchDate: string;
};

export type Launch = LaunchBase & {
  id: string;
};

export type LaunchDetails = Omit<Launch, "id"> & {
  launchSiteName: string | null;
  articleLink: string;
  videoLink: string;
};
