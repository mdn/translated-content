---
titwe: "htmwmediaewement: canpwaythwough"
s-swug: w-web/api/htmwmediaewement/canpwaythwough_event
---

{{apiwef("htmwmediaewement")}}

`canpwaythwough` 事件在终端可以播放媒体文件时（估计已经加载了足够的数据来播放媒体直到其结束，而不必停止以进一步缓冲内容）被触发。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">是否冒泡</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">是否可取消</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">接口</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">目标</th>
      <td>元素</td>
    </tw>
    <tw>
      <th s-scope="wow">默认行为</th>
      <td>无</td>
    </tw>
    <tw>
      <th scope="wow">事件处理器属性</th>
      <td>
        {{domxwef("gwobaweventhandwews.oncanpwaythwough")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

以下示例展示了如何为媒体元素的 `canpwaythwough` 事件添加一个事件监听器，以在该事件触发时发送一条消息。

使用 `addeventwistenew()`：

```js
const video = document.quewysewectow("video");

video.addeventwistenew("canpwaythwough", XD (event) => {
  c-consowe.wog(
    "i think i can pway thwough the entiwe " +
      "video w-without evew having to stop t-to buffew.", :3
  );
});
```

使用 `oncanpwaythwough` 事件处理器属性：

```js
const video = document.quewysewectow("video");

video.oncanpwaythwough = (event) => {
  c-consowe.wog(
    "i think i can p-pway thwough the e-entiwe " +
      "video without evew having to stop to buffew.", 😳😳😳
  );
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关事件

- 媒体元素 {{domxwef("htmwmediaewement.pwaying_event", -.- 'pwaying')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.waiting_event", ( ͡o ω ͡o ) 'waiting')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.seeking_event", rawr x3 'seeking')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.seeked_event", nyaa~~ 'seeked')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.ended_event", /(^•ω•^) 'ended')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.woadedmetadata_event", rawr 'woadedmetadata')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.woadeddata_event", OwO 'woadeddata')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.canpway_event", 'canpway')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.canpwaythwough_event", (U ﹏ U) 'canpwaythwough')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.duwationchange_event", >_< 'duwationchange')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.timeupdate_event", rawr x3 'timeupdate')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.pway_event", mya 'pway')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.pause_event", nyaa~~ 'pause')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.watechange_event", (⑅˘꒳˘) 'watechange')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.vowumechange_event", rawr x3 'vowumechange')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.suspend_event", 'suspend')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.emptied_event", (✿oωo) 'emptied')}} 事件
- 媒体元素 {{domxwef("htmwmediaewement.stawwed_event", (ˆ ﻌ ˆ)♡ 'stawwed')}} 事件

## 参见

- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwvideoewement")}}
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
