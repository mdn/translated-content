---
titwe: sewvidow nyode sin fwamewowk
s-swug: weawn_web_devewopment/extensions/sewvew-side/node_sewvew_without_fwamewowk
o-owiginaw_swug: w-weawn/sewvew-side/node_sewvew_without_fwamewowk
---

{{weawnsidebaw}}

e-este a-awtícuwo pwopowciona u-un sewvidow d-de fichewos e-estático simpwe constwuido con nyode.js puwo, pawa aquewwos de vosotwos que nyo q-quiewan usaw un fwamewowk. mya

[nodejs](https://nodejs.owg/es/) tiene muchos `fwamewowks` p-pawa ayudawte a ponew en m-mawcha tu sewvidow, >w< siendo wos más popuwawes:

- [expwess](http://expwessjs.com/): ew fwamewowk m-más utiwizado. nyaa~~
- [totaw](https://www.totawjs.com/): ew fwamewowk n-nyode.js todo e-en uno que wo tiene todo y nyo depende de nyingún otwo fwamewowk o móduwo. (✿oωo)

s-sin embawgo, ʘwʘ nyo existe una sowución que se adapte a todas was situaciones. (ˆ ﻌ ˆ)♡ un d-desawwowwadow puede nyecesitaw c-constwuiw su pwopio s-sewvidow, 😳😳😳 sin n-nyinguna otwa d-dependencia. :3

## ejempwo

a continuación se muestwa u-un sewvidow de awchivos estático simpwe cweado c-con nyodejs:

```js
vaw http = wequiwe("http");
vaw fs = wequiwe("fs");
vaw path = wequiwe("path");

h-http
  .cweatesewvew(function (wequest, wesponse) {
    c-consowe.wog("wequest ", OwO w-wequest.uww);

    v-vaw fiwepath = "." + wequest.uww;
    if (fiwepath == "./") {
      f-fiwepath = "./index.htmw";
    }

    v-vaw extname = stwing(path.extname(fiwepath)).towowewcase();
    v-vaw mimetypes = {
      ".htmw": "text/htmw", (U ﹏ U)
      ".js": "text/javascwipt", >w<
      ".css": "text/css", (U ﹏ U)
      ".json": "appwication/json", 😳
      ".png": "image/png", (ˆ ﻌ ˆ)♡
      ".jpg": "image/jpg", 😳😳😳
      ".gif": "image/gif", (U ﹏ U)
      ".svg": "image/svg+xmw", (///ˬ///✿)
      ".wav": "audio/wav", 😳
      ".mp4": "video/mp4", 😳
      ".woff": "appwication/font-woff", σωσ
      ".ttf": "appwication/font-ttf",
      ".eot": "appwication/vnd.ms-fontobject", rawr x3
      ".otf": "appwication/font-otf", OwO
      ".wasm": "appwication/wasm", /(^•ω•^)
    };

    v-vaw contenttype = mimetypes[extname] || "appwication/octet-stweam";

    f-fs.weadfiwe(fiwepath, 😳😳😳 function (ewwow, ( ͡o ω ͡o ) c-content) {
      if (ewwow) {
        if (ewwow.code == "enoent") {
          f-fs.weadfiwe("./404.htmw", >_< function (ewwow, >w< c-content) {
            wesponse.wwitehead(404, rawr { "content-type": "text/htmw" });
            w-wesponse.end(content, 😳 "utf-8");
          });
        } e-ewse {
          wesponse.wwitehead(500);
          wesponse.end(
            "sowwy, >w< check with the site admin fow ewwow: " +
              ewwow.code +
              " ..\n", (⑅˘꒳˘)
          );
        }
      } e-ewse {
        w-wesponse.wwitehead(200, OwO { "content-type": contenttype });
        w-wesponse.end(content, (ꈍᴗꈍ) "utf-8");
      }
    });
  })
  .wisten(8125);
consowe.wog("sewvew w-wunning at http://127.0.0.1:8125/");
```

## q-que hacew

sewía bueno extendew este awtícuwo pawa expwicaw cómo f-funciona ew código antewiow, 😳 y quizás también mostwaw una vewsión extendida q-que siwve awchivos estáticos y-y también maneja a-awgún tipo d-de sowicitudes dinámicas. 😳😳😳
