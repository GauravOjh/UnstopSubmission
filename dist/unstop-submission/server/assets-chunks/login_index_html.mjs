export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>UnstopSubmission</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>@font-face{font-family:Poppins;font-style:italic;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiAyp8kv8JHgFVrJJLmE0tCMPI.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:italic;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmv1pVGdeOcEg.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:italic;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmv1pVF9eO.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:italic;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm21lVGdeOcEg.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:italic;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm21lVF9eO.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:italic;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiGyp8kv8JHgFVrJJLufntAKPY.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:italic;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiGyp8kv8JHgFVrJJLucHtA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:italic;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmg1hVGdeOcEg.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:italic;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmg1hVF9eO.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:italic;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmr19VGdeOcEg.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:italic;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmr19VF9eO.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmy15VGdeOcEg.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmy15VF9eO.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:italic;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm111VGdeOcEg.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:italic;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm111VF9eO.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:italic;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm81xVGdeOcEg.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:italic;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm81xVF9eO.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiGyp8kv8JHgFVrLPTufntAKPY.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiGyp8kv8JHgFVrLPTucHtA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLFj_Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLFj_Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLDz8Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJfecg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLCz7Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLDD4Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLDD4Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLBT5Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLBT5Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}*{box-sizing:border-box;margin:0;font-family:Poppins;color:#1c1b1f;font-size:12px}@font-face{font-family:Poppins;font-style:italic;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiAyp8kv8JHgFVrJJLmE0tMMPKzSQ.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}body{font-family:Poppins}
</style><link rel="stylesheet" href="styles-3H4GCX5V.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-3H4GCX5V.css"></noscript><style ng-app-id="ng">.main-container[_ngcontent-ng-c1916221351]{display:flex;flex-direction:row;align-items:center;justify-content:center;width:100%;height:100vh;background-color:#f4f4f4}.left-container[_ngcontent-ng-c1916221351]{width:40%!important;height:100%;display:flex;align-items:center;justify-content:center;object-fit:contain}.left-container[_ngcontent-ng-c1916221351]   img[_ngcontent-ng-c1916221351]{max-width:100%;display:block}.right[_ngcontent-ng-c1916221351]{width:60%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.right-container[_ngcontent-ng-c1916221351]{background-color:#fff;min-width:75%;max-height:100%;border-radius:2rem;border:1px;padding:3rem;display:flex;flex-direction:column;gap:1.6rem}.Heading[_ngcontent-ng-c1916221351]{font-weight:500;font-size:3.6rem!important;line-height:4.8rem}.Unstop[_ngcontent-ng-c1916221351]{font-weight:900;font-size:4.6rem!important;line-height:6.3rem;color:#6358dc}.google[_ngcontent-ng-c1916221351]{font-size:1.6rem;font-weight:500;gap:1rem;border-radius:1.6rem;border:1px solid #E2E2E2;padding:2.1rem;cursor:pointer}.flex-containers[_ngcontent-ng-c1916221351]{display:flex;align-items:center;justify-content:center}.google[_ngcontent-ng-c1916221351]   img[_ngcontent-ng-c1916221351]{width:3.2rem;height:3.2rem}.or[_ngcontent-ng-c1916221351]{display:flex;flex-direction:column;align-items:center;justify-content:center}.or[_ngcontent-ng-c1916221351]   p[_ngcontent-ng-c1916221351]{font-weight:500;border-bottom:1px solid #1C1B1F;width:100%}.or[_ngcontent-ng-c1916221351]   span[_ngcontent-ng-c1916221351]{font-weight:500;z-index:11;position:absolute;background-color:#fff;padding:0rem 2rem}.input-fields[_ngcontent-ng-c1916221351]{display:flex;align-items:center;justify-content:flex-start;padding:1rem;min-width:100%;gap:1rem;border-radius:1rem;background-color:#f4f4f4}.inputs-container[_ngcontent-ng-c1916221351]   input[_ngcontent-ng-c1916221351]{all:unset;font-size:1.5rem;min-width:100%;color:#1c1b1f;font-weight:900;background-color:#f4f4f4}.forgot[_ngcontent-ng-c1916221351]{color:#1c1b1f;display:flex;align-items:center;justify-content:space-between}.remeber[_ngcontent-ng-c1916221351]   input[_ngcontent-ng-c1916221351]{background:#e2e2e2;accent-color:#F4F4F4}.remeber[_ngcontent-ng-c1916221351]   p[_ngcontent-ng-c1916221351]{font-size:1.2rem;font-weight:400}.forgoty[_ngcontent-ng-c1916221351], .forgotyy[_ngcontent-ng-c1916221351]{text-decoration:none;font-size:1.2rem;font-weight:500;color:#6358dc}.remeber[_ngcontent-ng-c1916221351]{display:flex;gap:1rem;justify-content:center;align-items:center}.login[_ngcontent-ng-c1916221351]{display:flex;align-items:center;justify-content:center;width:100%;cursor:pointer}.login[_ngcontent-ng-c1916221351]   button[_ngcontent-ng-c1916221351]{all:unset;border-radius:1.2rem;background-color:#6358dc;color:#fff;font-weight:600;text-align:center;font-size:1.2rem;padding:1.5rem;width:100%}.Register[_ngcontent-ng-c1916221351]{display:flex;align-items:center;justify-content:center;gap:1rem}.forgotyyy[_ngcontent-ng-c1916221351]{font-size:1.2rem;font-weight:500}.error-alert[_ngcontent-ng-c1916221351]{color:#d11d1d!important}@media (min-width: 901px){.main-container[_ngcontent-ng-c1916221351]{flex-direction:row}.left-container[_ngcontent-ng-c1916221351]{width:40%}.right-container[_ngcontent-ng-c1916221351]{width:75%;padding:3rem}.right[_ngcontent-ng-c1916221351]{width:60%}.Heading[_ngcontent-ng-c1916221351]{font-size:3.6rem}.Unstop[_ngcontent-ng-c1916221351]{font-size:4.6rem}.google[_ngcontent-ng-c1916221351]{width:100%;padding:2.2rem}}</style></head>
<body><!--nghm-->
  <app-root ng-version="19.1.1" ngh="0" ng-server-context="ssg"><router-outlet></router-outlet><app-login ngskiphydration="true" _nghost-ng-c1916221351><div _ngcontent-ng-c1916221351 class="main-container"><div _ngcontent-ng-c1916221351 class="left-container"><img _ngcontent-ng-c1916221351 src="Illustration.png" alt="Illustration"></div><form _ngcontent-ng-c1916221351 novalidate class="right ng-untouched ng-pristine ng-invalid"><div _ngcontent-ng-c1916221351 class="right-container"><div _ngcontent-ng-c1916221351><h3 _ngcontent-ng-c1916221351 class="Heading">Welcome to <br _ngcontent-ng-c1916221351><span _ngcontent-ng-c1916221351 class="Unstop">Unstop</span></h3></div><div _ngcontent-ng-c1916221351 class="flex-containers google"><img _ngcontent-ng-c1916221351 src="search 1.png" alt="Google"><p _ngcontent-ng-c1916221351>Login with Google</p></div><div _ngcontent-ng-c1916221351 class="flex-containers google"><img _ngcontent-ng-c1916221351 src="facebook.png" alt="Facebook"><p _ngcontent-ng-c1916221351>Login with Facebook</p></div><div _ngcontent-ng-c1916221351 class="or"><p _ngcontent-ng-c1916221351></p><span _ngcontent-ng-c1916221351>OR</span></div><div _ngcontent-ng-c1916221351 class="input-fields"><img _ngcontent-ng-c1916221351 src="account_circle.png" alt="Account"><div _ngcontent-ng-c1916221351 class="inputs-container"><p _ngcontent-ng-c1916221351>Username</p><input _ngcontent-ng-c1916221351 type="text" value formcontrolname="username" appusername placeholder="Enter Username" class="ng-untouched ng-pristine ng-invalid"></div></div><div _ngcontent-ng-c1916221351 class="input-fields"><img _ngcontent-ng-c1916221351 src="/mail.png" alt="Email"><div _ngcontent-ng-c1916221351 class="inputs-container"><p _ngcontent-ng-c1916221351>Email</p><input _ngcontent-ng-c1916221351 type="email" value formcontrolname="email" placeholder="Enter Email" class="ng-untouched ng-pristine ng-invalid"></div></div><!----><div _ngcontent-ng-c1916221351 class="input-fields"><img _ngcontent-ng-c1916221351 src="key.png" alt="Password"><div _ngcontent-ng-c1916221351 class="inputs-container"><p _ngcontent-ng-c1916221351>Password</p><input _ngcontent-ng-c1916221351 type="password" value formcontrolname="password" placeholder="Enter Password" class="ng-untouched ng-pristine ng-invalid"></div></div><!----><div _ngcontent-ng-c1916221351 class="forgot"><div _ngcontent-ng-c1916221351 class="remeber"><input _ngcontent-ng-c1916221351 type="checkbox"><p _ngcontent-ng-c1916221351>Remember me</p></div><a _ngcontent-ng-c1916221351 href="#" class="forgoty">Forgot Password?</a></div><div _ngcontent-ng-c1916221351 class="login"><button _ngcontent-ng-c1916221351 type="submit">Login</button></div><div _ngcontent-ng-c1916221351 class="Register"><p _ngcontent-ng-c1916221351 class="forgotyyy">Don't have an account? </p><a _ngcontent-ng-c1916221351 href="#" class="forgotyy">Register</a></div></div></form></div></app-login><!----></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-TKZRMPMM.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"c":{"0":[{"i":"c1916221351","r":1}]}}]}</script></body></html>`;