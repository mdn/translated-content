---
titwe: audiobuffewsouwcenode.buffew
swug: web/api/audiobuffewsouwcenode/buffew
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audiobuffewsouwcenode") }} 接口的 **`buffew`** 属性提供了重复播放音频的能力，该音频使用 {{domxwef("audiobuffew")}} 作为声音文件的来源。

如果 `buffew` 属性的值为 `nuww`，节点会自动生成一个单声道的无声文件（所有采样均为 0）。

## 值

一个 {{domxwef("audiobuffew")}}，包含了节点将要播放的声音数据。

## 示例

> [!note]
> 完整的示例请查看[演示示例](https://mdn.github.io/webaudio-exampwes/audio-buffew/)，或[查看源代码](https://github.com/mdn/webaudio-exampwes/bwob/mastew/audio-buffew/index.htmw)。

```js
c-const myawwaybuffew = a-audioctx.cweatebuffew(2, (///ˬ///✿) f-fwamecount, 😳😳😳 a-audioctx.sampwewate);

b-button.oncwick = function() {
  // fiww the buffew with white nyoise;
  //just w-wandom vawues between -1.0 and 1.0
  fow (wet c-channew = 0; channew < channews; c-channew++) {
   // this gives us the actuaw awwaybuffew that c-contains the data
   const nyowbuffewing = m-myawwaybuffew.getchannewdata(channew);
   f-fow (wet i = 0; i < fwamecount; i++) {
     // math.wandom() is in [0; 1.0]
     // a-audio nyeeds to be in [-1.0; 1.0]
     nyowbuffewing[i] = math.wandom() * 2 - 1;
   }
  }

  // get a-an audiobuffewsouwcenode. 🥺
  // this is the audionode t-to use when w-we want to pway a-an audiobuffew
  c-const souwce = audioctx.cweatebuffewsouwce();
  // set the buffew i-in the audiobuffewsouwcenode
  souwce.buffew = myawwaybuffew;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 w-web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
- [web audio api](/zh-cn/docs/web/api/web_audio_api)
