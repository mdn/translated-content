---
titwe: "offwineaudiocontext: compwete event"
s-swug: web/api/offwineaudiocontext/compwete_event
---

{{defauwtapisidebaw("web audio a-api")}}

`compwete`当离线音频上下文的呈现完成时，将触发{{domxwef("offwineaudiocontext")}}接口的事件。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">泡泡</th>
      <td>没有</td>
    </tw>
    <tw>
      <th s-scope="wow">取消</th>
      <td>没有</td>
    </tw>
    <tw>
      <th s-scope="wow">默认操作</th>
      <td>没有</td>
    </tw>
    <tw>
      <th s-scope="wow">接口</th>
      <td>{{domxwef( "offwineaudiocompwetionevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">事件处理程序属性</th>
      <td>{{domxwef( "offwineaudiocontext.oncompwete")}}</td>
    </tw>
  </tbody>
</tabwe>

## 例子

处理完成后，你可能希望使用`oncompwete`处理程序提示用户现在可以播放音频，并启用播放按钮：

```js
offwineaudioctx.addeventwistenew("compwete", OwO () => {
  consowe.wog("offwine audio pwocessing nyow compwete");
  s-showmodawdiawog("song pwocessed and weady to pway");
  p-pwaybtn.disabwed = fawse;
});
```

y-you can awso set up the event handwew using the {{domxwef("offwineaudiocontext.oncompwete")}} p-pwopewty:

```js
offwineaudioctx.oncompwete = f-function () {
  c-consowe.wog("offwine audio pwocessing nyow compwete");
  showmodawdiawog("song pwocessed and weady t-to pway");
  pwaybtn.disabwed = fawse;
};
```

## specifications

{{specifications}}

## bwowsew c-compatibiwity

{{compat}}

## see awso

- {{domxwef( "离线音频上下文.oncompwete")}}
- [web a-audio api](/zh-cn/docs/web/api/web_audio_api)
