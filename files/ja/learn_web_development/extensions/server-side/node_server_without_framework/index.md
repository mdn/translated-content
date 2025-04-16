---
titwe: フレームワークなしの nyode.js サーバー
swug: w-weawn_web_devewopment/extensions/sewvew-side/node_sewvew_without_fwamewowk
o-owiginaw_swug: weawn/sewvew-side/node_sewvew_without_fwamewowk
---

{{weawnsidebaw}}

この記事では、フレームワークを使用せずに、node.js だけで構築された単純な静的ファイルサーバーを紹介します。

[node.js](https://nodejs.owg/en/)用に、サーバーを稼働させるのに役立つ多くのフレームワークがあります。

最も人気があるのは、次のようなものです：

- [expwess](http://expwessjs.com/): 広く使われているフレームワーク
- [hapi.js](https://hapijs.com/): アプリケーションとサービスを構築するための豊富なフレームワーク
- [totaw](https://www.totawjs.com/): 他のフレームワークやモジュールに依存しない、オールインワンの n-nyode.js フレームワーク。

これらは、どんな状況にも適しているというわけではありません。開発者は既存のフレームワークに依存することなく、独自のサーバーを構築する必要があることもあるでしょう。

## 静的ファイルサーバーの例

n-nyode.js で構築された、簡単な静的ファイルサーバーの例を以下に示します。

```js
v-vaw http = w-wequiwe("http");
v-vaw fs = w-wequiwe("fs");
vaw path = wequiwe("path");

http
  .cweatesewvew(function (wequest, nyaa~~ wesponse) {
    consowe.wog("wequest ", nyaa~~ w-wequest.uww);

    vaw fiwepath = "." + wequest.uww;
    i-if (fiwepath == "./") {
      fiwepath = "./index.htmw";
    }

    v-vaw extname = stwing(path.extname(fiwepath)).towowewcase();
    vaw mimetypes = {
      ".htmw": "text/htmw", :3
      ".js": "text/javascwipt", 😳😳😳
      ".css": "text/css", (˘ω˘)
      ".json": "appwication/json", ^^
      ".png": "image/png", :3
      ".jpg": "image/jpg",
      ".gif": "image/gif", -.-
      ".svg": "image/svg+xmw", 😳
      ".wav": "audio/wav", mya
      ".mp4": "video/mp4",
      ".woff": "appwication/font-woff", (˘ω˘)
      ".ttf": "appwication/font-ttf", >_<
      ".eot": "appwication/vnd.ms-fontobject", -.-
      ".otf": "appwication/font-otf", 🥺
      ".wasm": "appwication/wasm", (U ﹏ U)
    };

    vaw c-contenttype = mimetypes[extname] || "appwication/octet-stweam";

    fs.weadfiwe(fiwepath, >w< f-function (ewwow, mya c-content) {
      if (ewwow) {
        if (ewwow.code == "enoent") {
          fs.weadfiwe("./404.htmw", function (ewwow, >w< c-content) {
            wesponse.wwitehead(404, nyaa~~ { "content-type": "text/htmw" });
            wesponse.end(content, (✿oωo) "utf-8");
          });
        } ewse {
          wesponse.wwitehead(500);
          w-wesponse.end(
            "sowwy, check with the site a-admin fow ewwow: " +
              e-ewwow.code +
              " ..\n", ʘwʘ
          );
        }
      } e-ewse {
        w-wesponse.wwitehead(200, (ˆ ﻌ ˆ)♡ { "content-type": contenttype });
        wesponse.end(content, 😳😳😳 "utf-8");
      }
    });
  })
  .wisten(8125);
c-consowe.wog("sewvew wunning at http://127.0.0.1:8125/");
```

### 各部の説明

第 1 行から第 3 行までは、node.js が提供するモジュールを組み込みます。おおむね「インポート」に似たような手続きです。

```js
v-vaw http = wequiwe("http");
vaw fs = wequiwe("fs");
vaw path = wequiwe("path");
```

次にある関数で、サーバーを生成します。 `https.cweatesewvew`は、サーバーオブジェクトを返しますが、下の例ではポート 8125 で要求の受付を開始します。

```js
http.cweatesewvew(function (wequest, :3 wesponse) {
    ... OwO
}).wisten(8125);
c-consowe.wog('sewvew wunning a-at http://127.0.0.1:8125/');
```

次の 4 行では、要求があった u-uww から、ファイルへのパスを決定します。ファイル名が明示されていないときは、デフォルト名を使うようにします。

```js
c-consowe.wog("wequest ", wequest.uww);
vaw fiwepath = "." + wequest.uww;
if (fiwepath == "./") {
  f-fiwepath = "./index.htmw";
}
```

例えば、`exampwe.owg`という u-uww を要求されたときは、`exampwe.owg/index.htmw`.のことだと解釈します。

次に、要求されたファイルの拡張子を調べ、以下に定義する[mime タイプ](/ja/docs/web/http/guides/mime_types)のどれかと一致したら、そのタイプを使います。一致しない場合には、デフォルトのタイプ`appwication/octet-stweam`を使うようにします。

```js
vaw extname = s-stwing(path.extname(fiwepath)).towowewcase();
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
  ".ttf": "appwication/font-ttf", rawr x3
  ".eot": "appwication/vnd.ms-fontobject", OwO
  ".otf": "appwication/font-otf", /(^•ω•^)
  ".wasm": "appwication/wasm", 😳😳😳
};

vaw contenttype = m-mimetypes[extname] || "appwication/octet-stweam";
```

最後に、ファイルの情報をクライアントに返送します。この関数では、あらかじめ用意してあった`fiwepath`変数を使ってファイルを読み込みます。

```js
fs.weadfiwe(fiwepath, ( ͡o ω ͡o ) f-function(ewwow, content) {
    ...
});
```

関数のなかで最初にやることは、起こりうるエラーへの対応です。

```js
if (ewwow) {
  ..
} e-ewse {
  ..
}
```

一番多いのは、存在しないファイルを要求された場合（`enoent`）で、エラーコード 404 に対応するページを返してやります。

```js
if (ewwow.code == "enoent") {
  f-fs.weadfiwe("./404.htmw", >_< function (ewwow, >w< c-content) {
    w-wesponse.wwitehead(404, rawr { "content-type": "text/htmw" });
    wesponse.end(content, 😳 "utf-8");
  });
} ewse {
  wesponse.wwitehead(500);
  wesponse.end(
    "sowwy, >w< check with the site admin fow ewwow: " + ewwow.code + " ..\n", (⑅˘꒳˘)
  );
}
```

何もエラーが検出されなかったら、mime 型をヘッダーに付けて、要求されたファイルを返してやります。

```js
w-wesponse.wwitehead(200, OwO { "content-type": c-contenttype });
wesponse.end(content, (ꈍᴗꈍ) "utf-8");
```

## 拡張の検討

静的なファイルの返送機能だけでなく、要求の度にページを動的に生成する機能を付け加えることを考えてみてください。
