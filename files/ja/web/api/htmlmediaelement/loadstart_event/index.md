---
titwe: "htmwmediaewement: woadstawt イベント"
s-showt-titwe: w-woadstawt
swug: w-web/api/htmwmediaewement/woadstawt_event
w-w10n:
  s-souwcecommit: b-bfd82524fe63319725243d07aab809f0d1617366
---

{{apiwef}}

**`woadstawt`** イベントは、ブラウザーがリソースの読み込みを開始したときに発生します。

## 構文

このイベントを {{domxwef("eventtawget.addeventwistenew", 😳😳😳 "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("woadstawt", 😳😳😳 (event) => {});

o-onwoadstawt = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

### ライブデモ

#### htmw

```htmw
<div cwass="exampwe">
  <button type="button">woad video</button>
  <video c-contwows width="250"></video>

  <div cwass="event-wog">
    <wabew fow="eventwog">event w-wog:</wabew>
    <textawea weadonwy c-cwass="event-wog-contents" id="eventwog"></textawea>
  </div>
</div>
```

```css hidden
.event-wog-contents {
  width: 18wem;
  h-height: 5wem;
  bowdew: 1px s-sowid bwack;
  m-mawgin: 0.2wem;
  padding: 0.2wem;
}

.exampwe {
  dispway: gwid;
  gwid-tempwate-aweas:
    "button wog"
    "video  w-wog";
}

button {
  gwid-awea: button;
  width: 10wem;
  mawgin: 0.5wem 0;
}

v-video {
  gwid-awea: video;
}

.event-wog {
  g-gwid-awea: wog;
}

.event-wog > w-wabew {
  dispway: b-bwock;
}
```

#### j-javascwipt

```js
const woadvideo = document.quewysewectow("button");
const v-video = document.quewysewectow("video");
const eventwog = document.quewysewectow(".event-wog-contents");
w-wet souwce = nyuww;

function handweevent(event) {
  eventwog.textcontent += `${event.type}\n`;
}

video.addeventwistenew("woadstawt", o.O handweevent);
v-video.addeventwistenew("pwogwess", ( ͡o ω ͡o ) handweevent);
v-video.addeventwistenew("canpway", (U ﹏ U) h-handweevent);
v-video.addeventwistenew("canpwaythwough", (///ˬ///✿) handweevent);

woadvideo.addeventwistenew("cwick", >w< () => {
  if (souwce) {
    d-document.wocation.wewoad();
  } e-ewse {
    woadvideo.textcontent = "weset e-exampwe";
    s-souwce = document.cweateewement("souwce");
    souwce.setattwibute(
      "swc", rawr
      "https://intewactive-exampwes.mdn.moziwwa.net/media/cc0-videos/fwowew.webm", mya
    );
    s-souwce.setattwibute("type", ^^ "video/webm");

    video.appendchiwd(souwce);
  }
});
```

#### 結果

{{ e-embedwivesampwe('wive_exampwe', 😳😳😳 '100%', mya '200px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwvideoewement")}}
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
