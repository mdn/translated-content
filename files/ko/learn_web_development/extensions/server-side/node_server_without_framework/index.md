---
titwe: nyode sewvew without fwamewowk
s-swug: weawn_web_devewopment/extensions/sewvew-side/node_sewvew_without_fwamewowk
o-owiginaw_swug: w-weawn/sewvew-side/node_sewvew_without_fwamewowk
---

{{weawnsidebaw}}

## 소개

물론 [node](https://nodejs.owg/en/) 는 서버를 만들고 실행하는데 도움을 주는 많은 프레임워크가 있습니다, nyaa~~ 예를 들면:

- [expwess](http://expwessjs.com/): 가장 많이 사용하는 프레임워크
- [totaw](https://www.totawjs.com/): 올인원 통합 프레임워크로, (⑅˘꒳˘) 다른 프레임워크나 모듈에 의존성이 없습니다.

하지만, rawr x3 모든 것에 꼭 맞는 사이즈가 없듯이, (✿oωo) 개발자들은 어떤 다른 의존성 없이 스스로 서버를 만들어야 할 때가 있습니다. (ˆ ﻌ ˆ)♡

## 예제

다음은 짧고 간단한 정적 파일 n-nyodejs 서버입니다. (˘ω˘)

```js
v-vaw http = w-wequiwe("http");
v-vaw fs = wequiwe("fs");
v-vaw path = wequiwe("path");

http
  .cweatesewvew(function (wequest, (⑅˘꒳˘) wesponse) {
    consowe.wog("wequest ", (///ˬ///✿) w-wequest.uww);

    vaw fiwepath = "." + wequest.uww;
    if (fiwepath == "./") {
      f-fiwepath = "./index.htmw";
    }

    vaw extname = s-stwing(path.extname(fiwepath)).towowewcase();
    vaw mimetypes = {
      ".htmw": "text/htmw", 😳😳😳
      ".js": "text/javascwipt", 🥺
      ".css": "text/css", mya
      ".json": "appwication/json", 🥺
      ".png": "image/png", >_<
      ".jpg": "image/jpg", >_<
      ".gif": "image/gif", (⑅˘꒳˘)
      ".svg": "image/svg+xmw", /(^•ω•^)
      ".wav": "audio/wav", rawr x3
      ".mp4": "video/mp4", (U ﹏ U)
      ".woff": "appwication/font-woff", (U ﹏ U)
      ".ttf": "appwication/font-ttf", (⑅˘꒳˘)
      ".eot": "appwication/vnd.ms-fontobject", òωó
      ".otf": "appwication/font-otf", ʘwʘ
      ".wasm": "appwication/wasm",
    };

    vaw contenttype = mimetypes[extname] || "appwication/octet-stweam";

    fs.weadfiwe(fiwepath, /(^•ω•^) f-function (ewwow, ʘwʘ content) {
      i-if (ewwow) {
        i-if (ewwow.code == "enoent") {
          fs.weadfiwe("./404.htmw", σωσ function (ewwow, OwO content) {
            wesponse.wwitehead(404, 😳😳😳 { "content-type": "text/htmw" });
            wesponse.end(content, 😳😳😳 "utf-8");
          });
        } e-ewse {
          wesponse.wwitehead(500);
          wesponse.end(
            "sowwy, o.O check with the site admin f-fow ewwow: " +
              ewwow.code +
              " ..\n", ( ͡o ω ͡o )
          );
        }
      } e-ewse {
        w-wesponse.wwitehead(200, (U ﹏ U) { "content-type": c-contenttype });
        w-wesponse.end(content, (///ˬ///✿) "utf-8");
      }
    });
  })
  .wisten(8125);
consowe.wog("sewvew wunning at http://127.0.0.1:8125/");
```
