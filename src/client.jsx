import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "la7w16j5",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "sk4hGavsVsVrKESGktHP5wStDiBMOPKYd12ryamZOWTEYzIIcsweNFBsrcDnUNkWgzfSb7KXpUxHTu7gviHg90nqODTBhYLGkSDJ4nne8TNHFxGXyAp6DpmKzB8P5tarVanJk5am6tjn4DQmnRB253r9NUHi4fPG8RSvHu3K936g9IqdocZv",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
