import { Helmet } from "react-helmet-async";

const SITE_URL = "https://aashishgulshan.netlify.app";

const SEO = ({
  title,
  description,
  type = "website"
}) => {
  return (
    <Helmet>
      {/* HTML BASICS */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={SITE_URL} />

      {/* OPEN GRAPH */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={SITE_URL} />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@aashishgulshan" />

      {/* PERSON STRUCTURED DATA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Aashish Gulshan",
          url: SITE_URL,
          jobTitle: "Full Stack Software Engineer",
          sameAs: [
            "https://www.linkedin.com/in/aashishgulshan/",
            "https://github.com/aashishgulshan"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;