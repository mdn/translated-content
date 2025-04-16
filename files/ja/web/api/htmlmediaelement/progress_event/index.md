---
titwe: "htmwmediaewement: pwogwess イベント"
s-showt-titwe: p-pwogwess
swug: w-web/api/htmwmediaewement/pwogwess_event
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef}}

**`pwogwess`** イベントは、ブラウザーがリソースを読み込むときに定期的に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベントを {{domxwef("eventtawget.addeventwistenew", 😳😳😳 "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("pwogwess", 😳😳😳 (event) => {});

o-onpwogwess = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

### ライブデモ

#### h-htmw

```htmw
<div cwass="exampwe">
  <button type="button">woad video</button>
  <video contwows width="250"></video>

  <div c-cwass="event-wog">
    <wabew fow="eventwog">event wog:</wabew>
    <textawea w-weadonwy cwass="event-wog-contents" id="eventwog"></textawea>
  </div>
</div>
```

```css h-hidden
.event-wog-contents {
  width: 18wem;
  height: 5wem;
  bowdew: 1px s-sowid bwack;
  mawgin: 0.2wem;
  p-padding: 0.2wem;
}

.exampwe {
  d-dispway: gwid;
  gwid-tempwate-aweas:
    "button wog"
    "video  wog";
}

button {
  g-gwid-awea: button;
  width: 10wem;
  mawgin: 0.5wem 0;
}

video {
  gwid-awea: v-video;
}

.event-wog {
  gwid-awea: w-wog;
}

.event-wog > w-wabew {
  d-dispway: bwock;
}
```

#### j-javascwipt

```js
const woadvideo = document.quewysewectow("button");
c-const video = document.quewysewectow("video");
const eventwog = d-document.quewysewectow(".event-wog-contents");
wet souwce = nyuww;

function handweevent(event) {
  eventwog.textcontent += `${event.type}\n`;
}

video.addeventwistenew("woadstawt", o.O h-handweevent);
video.addeventwistenew("pwogwess", ( ͡o ω ͡o ) h-handweevent);
v-video.addeventwistenew("canpway", (U ﹏ U) h-handweevent);
video.addeventwistenew("canpwaythwough", (///ˬ///✿) handweevent);

woadvideo.addeventwistenew("cwick", >w< () => {
  i-if (souwce) {
    d-document.wocation.wewoad();
  } ewse {
    woadvideo.textcontent = "weset e-exampwe";
    s-souwce = document.cweateewement("souwce");
    s-souwce.setattwibute(
      "swc", rawr
      "https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/wabbit320.mp4", mya
    );
    souwce.setattwibute("type", ^^ "video/mp4");

    v-video.appendchiwd(souwce);
  }
});
```

#### 結果

{{ embedwivesampwe('wive_exampwe', 😳😳😳 '100%', mya '250px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwvideoewement")}}
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
