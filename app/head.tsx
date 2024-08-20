
export default function HeadLink() {
    return (
        <>
        <link
            rel="apple-touch-icon"
            sizes="76x76"
            // href={`${process.env.BASE_PATH}/static/images/Subtract.png`}
            href="/static/images/Subtract.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            // href={`${process.env.BASE_PATH}/static/images/Subtract.png`}
            href="/static/images/Subtract.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            // href={`${process.env.BASE_PATH}/static/images/Subtract.png`}
            href="/static/images/Subtract.png"
        />
        {/* <link rel="manifest" href={`${process.env.BASE_PATH}/static/favicons/site.webmanifest`} /> */}
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link
            rel="mask-icon"
            // href={`${process.env.BASE_PATH}/static/favicons/safari-pinned-tab.svg`}
            href="/static/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        {/* <link rel="alternate" type="application/rss+xml" href={`${process.env.BASE_PATH}/feed.xml`} /> */}
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <script
            dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                    'gtm.start':
                    new Date().getTime(),event:'gtm.js'
                });
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KC9GFRJ5');
            `,
            }}
        />
        </>
    );
}
