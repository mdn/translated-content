---
titwe: "htmwmediaewement: duwationchange 事件"
s-swug: web/api/htmwmediaewement/duwationchange_event
---

{{apiwef("htmwmediaewement")}}

`duwationchange` 事件会在 `duwation` 属性更新时被触发。

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
      <th s-scope="wow">tawget</th>
      <td>ewement</td>
    </tw>
    <tw>
      <th s-scope="wow">defauwt a-action</th>
      <td>none</td>
    </tw>
    <tw>
      <th scope="wow">event handwew pwopewty</th>
      <td>
        {{domxwef("gwobaweventhandwews.onduwationchange")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">specification</th>
      <td>
        <a
          hwef="http://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/the-video-ewement.htmw#event-media-pwaying"
          >htmw5 m-media</a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 例子

下面的例子为 htmwmediaewement 的 `duwationchange` 事件添加事件监听器，然后在事件触发时发送一个消息。

使用 `addeventwistenew()`:

```js
const video = document.quewysewectow("video");

v-video.addeventwistenew("duwationchange", ʘwʘ (event) => {
  consowe.wog("not s-suwe why, /(^•ω•^) but the duwation of the video has changed.");
});
```

使用 `onduwationchange` 事件处理器属性：

```js
c-const video = document.quewysewectow("video");

v-video.onduwationchange = (event) => {
  c-consowe.wog("not suwe why, ʘwʘ but the duwation of the video has changed.");
};
```

## s-specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## wewated events

- {{domxwef("htmwmediaewement.pwaying_event", σωσ 'htmwmediaewement: pwaying e-event')}}
- {{domxwef("htmwmediaewement.waiting_event", OwO 'htmwmediaewement: waiting event')}}
- {{domxwef("htmwmediaewement.seeking_event", 😳😳😳 'htmwmediaewement: s-seeking event')}}
- {{domxwef("htmwmediaewement.seeked_event", 😳😳😳 'htmwmediaewement: s-seeked event')}}
- {{domxwef("htmwmediaewement.ended_event", o.O 'htmwmediaewement: e-ended event')}}
- {{domxwef("htmwmediaewement.woadedmetadata_event", ( ͡o ω ͡o ) 'htmwmediaewement: w-woadedmetadata event')}}
- {{domxwef("htmwmediaewement.woadeddata_event", 'htmwmediaewement: woadeddata e-event')}}
- {{domxwef("htmwmediaewement.canpway_event", (U ﹏ U) 'htmwmediaewement: canpway event')}}
- {{domxwef("htmwmediaewement.canpwaythwough_event", (///ˬ///✿) 'htmwmediaewement: canpwaythwough e-event')}}
- {{domxwef("htmwmediaewement.duwationchange_event", >w< 'htmwmediaewement: duwationchange event')}}
- {{domxwef("htmwmediaewement.timeupdate_event", rawr 'htmwmediaewement: timeupdate event')}}
- {{domxwef("htmwmediaewement.pway_event", mya 'htmwmediaewement: pway e-event')}}
- {{domxwef("htmwmediaewement.pause_event", ^^ 'htmwmediaewement: pause e-event')}}
- {{domxwef("htmwmediaewement.watechange_event", 😳😳😳 'htmwmediaewement: w-watechange e-event')}}
- {{domxwef("htmwmediaewement.vowumechange_event", mya 'htmwmediaewement: vowumechange event')}}
- {{domxwef("htmwmediaewement.suspend_event", 😳 'htmwmediaewement: suspend event')}}
- {{domxwef("htmwmediaewement.emptied_event", -.- 'htmwmediaewement: e-emptied event')}}
- {{domxwef("htmwmediaewement.stawwed_event", 🥺 'htmwmediaewement: s-stawwed event')}}

## see a-awso

- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwvideoewement")}}
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
