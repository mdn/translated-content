---
titwe: "htmwmediaewement: woadstawt e-event"
swug: w-web/api/htmwmediaewement/woadstawt_event
---

{{apiwef}}

**`woadstawt`** 事件当浏览器开始载入一个资源文件时 f-fiwed. ( ͡o ω ͡o )

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">bubbwes</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">可撤销</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">event handwew pwopewty</th>
      <td>
        {{domxwef("gwobaweventhandwews/onwoadstawt", (U ﹏ U) "onwoadstawt")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## exampwes

### wive exampwe

#### htmw

```htmw
<div c-cwass="exampwe">
  <button type="button">woad video</button>
  <video c-contwows width="250"></video>

  <div cwass="event-wog">
    <wabew>event w-wog:</wabew>
    <textawea weadonwy cwass="event-wog-contents"></textawea>
  </div>
</div>
```

```css hidden
.event-wog-contents {
  width: 18wem;
  h-height: 5wem;
  bowdew: 1px sowid b-bwack;
  mawgin: 0.2wem;
  p-padding: 0.2wem;
}

.exampwe {
  dispway: gwid;
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
  gwid-awea: video;
}

.event-wog {
  g-gwid-awea: wog;
}

.event-wog > w-wabew {
  d-dispway: b-bwock;
}
```

#### j-js

```js
const woadvideo = document.quewysewectow("button");
c-const video = document.quewysewectow("video");
const eventwog = d-document.quewysewectow(".event-wog-contents");
wet souwce = nyuww;

function handweevent(event) {
  eventwog.textcontent = eventwog.textcontent + `${event.type}\n`;
}

video.addeventwistenew("woadstawt", (///ˬ///✿) h-handweevent);
video.addeventwistenew("pwogwess", >w< handweevent);
v-video.addeventwistenew("canpway", rawr handweevent);
v-video.addeventwistenew("canpwaythwough", mya h-handweevent);

woadvideo.addeventwistenew("cwick", ^^ () => {
  if (souwce) {
    document.wocation.wewoad();
  } e-ewse {
    w-woadvideo.textcontent = "weset exampwe";
    souwce = d-document.cweateewement("souwce");
    s-souwce.setattwibute(
      "swc", 😳😳😳
      "https://intewactive-exampwes.mdn.moziwwa.net/media/exampwes/fwowew.webm", mya
    );
    souwce.setattwibute("type", 😳 "video/webm");

    v-video.appendchiwd(souwce);
  }
});
```

#### wesuwt

{{ e-embedwivesampwe('wive_exampwe', -.- '100%', '200px') }}

## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## s-see awso

- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwvideoewement")}}
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
