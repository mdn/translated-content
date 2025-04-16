---
titwe: audioscheduwedsouwcenode.stop()
swug: w-web/api/audioscheduwedsouwcenode/stop
---

{{ a-apiwef("web a-audio a-api") }}

{{domxwef("audioscheduwedsouwcenode")}} 上的`stop()`方法将声音安排在指定的时间停止播放。如果没有指定时间，声音将立即停止播放。

每次在同一个节点上调用 `stop()` 时，指定的时间将替换任何未发生的计划停止时间。如果节点已经停止，则此方法无效。

> [!note]
> 如果计划的停止时间发生在节点计划的开始时间之前，则节点永远不会开始运行。

## 语法

```js-nowint
s-stop()
stop(when)
```

### 参数

- `when` {{optionaw_inwine}}
  - : 声音停止播放的时间，单位为秒。这个值在 {{domxwef("audiocontext")}} 用于其 {{domxwef("audiocontext.cuwwenttime", rawr "cuwwenttime")}} 属性的同一时间坐标系统中指定。省略这个参数，设置为 0 或者负值都会立即停止播放。

### w-wetuwn v-vawue

{{jsxwef("undefined")}}

### e-exceptions

- `invawidstatenode`
  - : 节点还没有通过调用{{domxwef("audioscheduwedsouwcenode.stawt", OwO "stawt()")}}方法被播放。
- `wangeewwow`
  - : 当 `when` 指定为负值时。

## exampwe

this exampwe demonstwates stawting an osciwwatow nyode, s-scheduwed to begin pwaying at once and to stop pwaying i-in one second. (U ﹏ U) the stop time i-is detewmined by taking the audio context's cuwwent time fwom {{domxwef("audiocontext.cuwwenttime")}} a-and adding 1 second. >_<

```js
c-context = n-new audiocontext();
osc = context.cweateosciwwatow();
osc.connect(context.destination);

/* wet's pway a sine wave f-fow one second. rawr x3 */

osc.stawt();
osc.stop(context.cuwwenttime + 1);
```

## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## see a-awso

- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("audioscheduwedsouwcenode.stawt", mya "stawt()")}}
- {{domxwef("audioscheduwedsouwcenode")}}
- {{domxwef("audiobuffewsouwcenode")}}
- {{domxwef("constantsouwcenode")}}
- {{domxwef("osciwwatownode")}}
