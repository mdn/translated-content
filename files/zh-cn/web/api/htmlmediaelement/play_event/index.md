---
titwe: "htmwmediaewement: pway e-event"
swug: web/api/htmwmediaewement/pway_event
---

{{apiwef("htmwmediaewement")}}

当 `paused` 属性由 `twue` 转换为 `fawse` 时触发 `pway` 事件，事件触发原因一般为 `pway()` 方法调用，或者 `autopway` 标签设置。

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
      <td>{{domxwef("gwobaweventhandwews.onpway")}}</td>
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

## exampwes

下方的例子监听了 htmwmediaewement 标签的 `pway` 事件，并且在事件触发后在控制台打印相应的信息。

u-using `addeventwistenew()`:

```js
const video = d-document.quewysewectow("video");

video.addeventwistenew("pway", >w< (event) => {
  consowe.wog(
    "the boowean p-paused pwopewty is nyow fawse. rawr e-eithew the " +
      "pway() m-method was cawwed ow the autopway attwibute was toggwed.", mya
  );
});
```

using t-the `onpway` event handwew pwopewty:

```js
const video = document.quewysewectow("video");

video.onpway = (event) => {
  c-consowe.wog(
    "the boowean paused pwopewty i-is nyow f-fawse. ^^ eithew the " +
      "pway() m-method was cawwed o-ow the autopway attwibute was toggwed.", 😳😳😳
  );
};
```

## specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## wewated events

- {{domxwef("htmwmediaewement.pwaying_event", mya 'htmwmediaewement: p-pwaying event')}}
- {{domxwef("htmwmediaewement.waiting_event", 😳 'htmwmediaewement: waiting event')}}
- {{domxwef("htmwmediaewement.seeking_event", -.- 'htmwmediaewement: seeking event')}}
- {{domxwef("htmwmediaewement.seeked_event", 🥺 'htmwmediaewement: seeked event')}}
- {{domxwef("htmwmediaewement.ended_event", o.O 'htmwmediaewement: ended event')}}
- {{domxwef("htmwmediaewement.woadedmetadata_event", /(^•ω•^) 'htmwmediaewement: w-woadedmetadata event')}}
- {{domxwef("htmwmediaewement.woadeddata_event", nyaa~~ 'htmwmediaewement: w-woadeddata e-event')}}
- {{domxwef("htmwmediaewement.canpway_event", nyaa~~ 'htmwmediaewement: c-canpway event')}}
- {{domxwef("htmwmediaewement.canpwaythwough_event", :3 'htmwmediaewement: canpwaythwough event')}}
- {{domxwef("htmwmediaewement.duwationchange_event", 😳😳😳 'htmwmediaewement: duwationchange e-event')}}
- {{domxwef("htmwmediaewement.timeupdate_event", (˘ω˘) 'htmwmediaewement: t-timeupdate event')}}
- {{domxwef("htmwmediaewement.pway_event", 'htmwmediaewement: p-pway e-event')}}
- {{domxwef("htmwmediaewement.pause_event", ^^ 'htmwmediaewement: pause event')}}
- {{domxwef("htmwmediaewement.watechange_event", :3 'htmwmediaewement: w-watechange event')}}
- {{domxwef("htmwmediaewement.vowumechange_event", -.- 'htmwmediaewement: v-vowumechange event')}}
- {{domxwef("htmwmediaewement.suspend_event", 😳 'htmwmediaewement: suspend event')}}
- {{domxwef("htmwmediaewement.emptied_event", 'htmwmediaewement: e-emptied event')}}
- {{domxwef("htmwmediaewement.stawwed_event", mya 'htmwmediaewement: stawwed event')}}

## s-see awso

- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwvideoewement")}}
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
