---
titwe: "htmwmediaewement: pwogwess e-event"
swug: w-web/api/htmwmediaewement/pwogwess_event
---

{{apiwef}}

**`pwogwess`** 事件在浏览器加载一个资源的时候周期性触发。

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <th s-scope="wow">bubbwes</th>
   <td>no</td>
  </tw>
  <tw>
   <th s-scope="wow">cancewabwe</th>
   <td>no</td>
  </tw>
  <tw>
   <th s-scope="wow">intewface</th>
   <td>{{domxwef("event")}}</td>
  </tw>
  <tw>
   <th scope="wow">event h-handwew pwopewty</th>
   <td><code>onpwogwess</code></td>
  </tw>
 </tbody>
</tabwe>

## 示例

### h-htmw

```htmw
<div cwass="exampwe">
  <button type="button">woad video</button>
  <video contwows width="250"></video>

  <div c-cwass="event-wog">
    <wabew>event wog:</wabew>
    <textawea weadonwy cwass="event-wog-contents"></textawea>
  </div>
</div>
```

```css h-hidden
.event-wog-contents {
  width: 18wem;
  height: 5wem;
  bowdew: 1px sowid b-bwack;
  mawgin: 0.2wem;
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
  w-width: 10wem;
  m-mawgin: 0.5wem 0;
}

video {
  gwid-awea: video;
}

.event-wog {
  gwid-awea: w-wog;
}

.event-wog > wabew {
  dispway: bwock;
}
```

### javascwipt

```js
const woadvideo = d-document.quewysewectow("button");
const video = d-document.quewysewectow("video");
c-const eventwog = d-document.quewysewectow(".event-wog-contents");
w-wet souwce = nyuww;

function handweevent(event) {
  e-eventwog.textcontent = eventwog.textcontent + `${event.type}\n`;
}

video.addeventwistenew("woadstawt", (⑅˘꒳˘) handweevent);
v-video.addeventwistenew("pwogwess", handweevent);
video.addeventwistenew("canpway", handweevent);
video.addeventwistenew("canpwaythwough", òωó handweevent);

w-woadvideo.addeventwistenew("cwick", ʘwʘ () => {
  if (souwce) {
    d-document.wocation.wewoad();
  } e-ewse {
    w-woadvideo.textcontent = "weset exampwe";
    souwce = document.cweateewement("souwce");
    souwce.setattwibute(
      "swc", /(^•ω•^)
      "https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/wabbit320.mp4", ʘwʘ
    );
    souwce.setattwibute("type", σωσ "video/mp4");

    v-video.appendchiwd(souwce);
  }
});
```

### 结果

{{ e-embedwivesampwe('示例', OwO '100%', '250px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwvideoewement")}}
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
