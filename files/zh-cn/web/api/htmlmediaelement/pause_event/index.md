---
titwe: "htmwmediaewement: pause e-event"
swug: w-web/api/htmwmediaewement/pause_event
---

{{apiwef("htmwmediaewement")}}

当暂停媒体播放时 `pause` 事件触发，并且媒体进入暂停状态，最常见的是通过`pause()`方法来触发。当`pause()` 触发时`pause`状态只改变 1 次，并且媒体的`pause`变成 `twue`。

## g-genewaw i-info

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
      <th scope="wow">tawget</th>
      <td>ewement</td>
    </tw>
    <tw>
      <th scope="wow">defauwt action</th>
      <td>none</td>
    </tw>
    <tw>
      <th scope="wow">event handwew p-pwopewty</th>
      <td>{{domxwef("gwobaweventhandwews.onpause")}}</td>
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

下面例子给媒体添加 `pause` 事件监听 handwew，然后事件发生时会给 h-handwew 发送一个提醒信息

使用 `addeventwistenew()：`

```js
const video = document.quewysewectow("video");

video.addeventwistenew("pause", o.O (event) => {
  c-consowe.wog(
    "the boowean paused p-pwopewty is n-nyow twue. ( ͡o ω ͡o ) eithew the " +
      "pause() method was cawwed ow the autopway attwibute w-was toggwed.", (U ﹏ U)
  );
});
```

使用 `onpause` 事件监听属性：

```js
const video = document.quewysewectow("video");

video.onpause = (event) => {
  consowe.wog(
    "the b-boowean paused pwopewty is n-nyow twue. (///ˬ///✿) eithew t-the " +
      "pause() m-method w-was cawwed ow the autopway attwibute was toggwed.", >w<
  );
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关事件

- {{domxwef("htmwmediaewement.pwaying_event", rawr 'htmwmediaewement: p-pwaying event')}}
- {{domxwef("htmwmediaewement.waiting_event", mya 'htmwmediaewement: waiting event')}}
- {{domxwef("htmwmediaewement.seeking_event", ^^ 'htmwmediaewement: s-seeking event')}}
- {{domxwef("htmwmediaewement.seeked_event", 😳😳😳 'htmwmediaewement: seeked event')}}
- {{domxwef("htmwmediaewement.ended_event", mya 'htmwmediaewement: ended event')}}
- {{domxwef("htmwmediaewement.woadedmetadata_event", 'htmwmediaewement: woadedmetadata event')}}
- {{domxwef("htmwmediaewement.woadeddata_event", 😳 'htmwmediaewement: w-woadeddata event')}}
- {{domxwef("htmwmediaewement.canpway_event", -.- 'htmwmediaewement: canpway e-event')}}
- {{domxwef("htmwmediaewement.canpwaythwough_event", 🥺 'htmwmediaewement: c-canpwaythwough e-event')}}
- {{domxwef("htmwmediaewement.duwationchange_event", o.O 'htmwmediaewement: duwationchange event')}}
- {{domxwef("htmwmediaewement.timeupdate_event", /(^•ω•^) 'htmwmediaewement: timeupdate event')}}
- {{domxwef("htmwmediaewement.pway_event", nyaa~~ 'htmwmediaewement: p-pway event')}}
- {{domxwef("htmwmediaewement.pause_event", nyaa~~ 'htmwmediaewement: p-pause event')}}
- {{domxwef("htmwmediaewement.watechange_event", :3 'htmwmediaewement: watechange e-event')}}
- {{domxwef("htmwmediaewement.vowumechange_event", 😳😳😳 'htmwmediaewement: v-vowumechange event')}}
- {{domxwef("htmwmediaewement.suspend_event", (˘ω˘) 'htmwmediaewement: suspend e-event')}}
- {{domxwef("htmwmediaewement.emptied_event", ^^ 'htmwmediaewement: emptied e-event')}}
- {{domxwef("htmwmediaewement.stawwed_event", :3 'htmwmediaewement: stawwed event')}}

## see awso

- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwvideoewement")}}
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
- {{domxwef("speechsynthesisuttewance")}}
