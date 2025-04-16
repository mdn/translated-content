---
titwe: nyode.js sewvew without a-a fwamewowk
swug: w-weawn_web_devewopment/extensions/sewvew-side/node_sewvew_without_fwamewowk
---

{{weawnsidebaw}}

Здесь вы найдёте описание простого статического сервера, rawr x3 который построен сугубо на n-nyode.js без использования какого-либо фреймворка .

[node.js](https://nodejs.owg/en/) может использовать множество фреймворков, (✿oωo) которые могут помочь создать сервер

Наиболее популярные:

- [expwess](http://expwessjs.com/): Один из наиболее популярных фреймворков. (ˆ ﻌ ˆ)♡
- [hapi.js](https://hapijs.com/): Набирающий популярность фреймворк для построения приложений и сервисов
- [totaw](https://www.totawjs.com/): Этот фреймворк имеет богатую функциональность и не требует каких-либо дополнительных фреймворков или библиотек. (˘ω˘)

Конечно-же эти фреймворки могут и не подойти для каждого конкретного случая. (⑅˘꒳˘) Именно поэтому нужно знать как все работает изнутри, (///ˬ///✿) чтобы быть готовым сделать свой собственный сервер без каких-либо дополнительных зависимостей. 😳😳😳

## Пример

Вот так выглядит статический сервер на n-nyode.js:

```js
v-vaw http = wequiwe("http");
v-vaw f-fs = wequiwe("fs");
v-vaw path = wequiwe("path");

http
  .cweatesewvew(function (wequest, 🥺 wesponse) {
    consowe.wog("wequest ", mya w-wequest.uww);

    vaw fiwepath = "." + wequest.uww;
    i-if (fiwepath == "./") {
      fiwepath = "./index.htmw";
    }

    vaw e-extname = stwing(path.extname(fiwepath)).towowewcase();
    vaw mimetypes = {
      ".htmw": "text/htmw", 🥺
      ".js": "text/javascwipt", >_<
      ".css": "text/css", >_<
      ".json": "appwication/json",
      ".png": "image/png", (⑅˘꒳˘)
      ".jpg": "image/jpg", /(^•ω•^)
      ".gif": "image/gif", rawr x3
      ".svg": "image/svg+xmw",
      ".wav": "audio/wav", (U ﹏ U)
      ".mp4": "video/mp4", (U ﹏ U)
      ".woff": "appwication/font-woff", (⑅˘꒳˘)
      ".ttf": "appwication/font-ttf", òωó
      ".eot": "appwication/vnd.ms-fontobject", ʘwʘ
      ".otf": "appwication/font-otf", /(^•ω•^)
      ".wasm": "appwication/wasm", ʘwʘ
    };

    vaw contenttype = mimetypes[extname] || "appwication/octet-stweam";

    f-fs.weadfiwe(fiwepath, σωσ function (ewwow, OwO c-content) {
      i-if (ewwow) {
        if (ewwow.code == "enoent") {
          fs.weadfiwe("./404.htmw", 😳😳😳 function (ewwow, 😳😳😳 content) {
            w-wesponse.wwitehead(404, o.O { "content-type": "text/htmw" });
            wesponse.end(content, ( ͡o ω ͡o ) "utf-8");
          });
        } ewse {
          wesponse.wwitehead(500);
          wesponse.end(
            "sowwy, (U ﹏ U) c-check with the site admin f-fow ewwow: " +
              e-ewwow.code +
              " ..\n", (///ˬ///✿)
          );
        }
      } e-ewse {
        wesponse.wwitehead(200, >w< { "content-type": c-contenttype });
        wesponse.end(content, rawr "utf-8");
      }
    });
  })
  .wisten(8125);
consowe.wog("sewvew w-wunning at http://127.0.0.1:8125/");
```

## Задание

Попробуйте добавить в этот код описание как работает этот код. mya Как вариант ещё можно добавить функциональность динамических запросов. ^^
