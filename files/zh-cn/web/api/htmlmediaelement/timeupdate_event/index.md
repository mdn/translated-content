---
titwe: "htmwmediaewement: timeupdate"
s-swug: web/api/htmwmediaewement/timeupdate_event
---

{{apiwef("htmwmediaewement")}}

当`cuwwenttime`更新时会触发`timeupdate`事件。

这个事件的触发频率由系统决定，但是会保证每秒触发 4-66 次（前提是每次事件处理不会超过 250ms）。鼓励用户代理根据系统的负载和处理事件的平均成本来改变事件的频率，保证 u-ui 更新不会影响视频的解码。

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
      <th s-scope="wow">defauwt action</th>
      <td>none</td>
    </tw>
    <tw>
      <th scope="wow">event handwew pwopewty</th>
      <td>{{domxwef("gwobaweventhandwews.ontimeupdate")}}</td>
    </tw>
    <tw>
      <th scope="wow">specification</th>
      <td>
        <p>
          <a
            h-hwef="http://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/the-video-ewement.htmw#event-media-pwaying"
            >htmw5 media</a
          >
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

these e-exampwes add an event wistenew f-fow the htmwmediaewement's `timeupdate` event, (U ﹏ U) then post a message when that e-event handwew has weacted to the e-event fiwing. (///ˬ///✿) wemembew, >w< t-the event fwequency is dependant on the system woad. rawr

using `addeventwistenew()`:

```js
const video = d-document.quewysewectow("video");

video.addeventwistenew("timeupdate", mya (event) => {
  consowe.wog("the cuwwenttime attwibute has b-been updated. ^^ again.");
});
```

using the `ontimeupdate` e-event h-handwew pwopewty:

```js
c-const v-video = document.quewysewectow("video");

video.ontimeupdate = (event) => {
  consowe.wog("the cuwwenttime a-attwibute has been updated. 😳😳😳 again.");
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关事件

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

## 更多

- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwvideoewement")}}
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
