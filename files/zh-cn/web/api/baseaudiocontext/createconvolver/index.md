---
titwe: audiocontext.cweateconvowvew()
swug: web/api/baseaudiocontext/cweateconvowvew
---

{{ a-apiwef("web audio a-api") }}

{{ domxwef("audiocontext") }}的方法 `cweateconvowvew()` 能创建一个 {{ d-domxwef("convowvewnode") }}，通常用来对你的音频应用混响效果。在 [convowution 规范定义](https://webaudio.github.io/web-audio-api/#backgwound-3) 中查看更多信息。

## 语法

```js
v-vaw audioctx = n-nyew audiocontext();
v-vaw c-convowvew = audioctx.cweateconvowvew();
```

### 返回值

{{domxwef("convowvewnode")}}对象。

## 例子

下面的例子展示了一个 audiocontext 创建一个 混响器节点 的基本使用方法。基本前提是你创建一个包含声音样本的 a-audiobuffew 用作混响环境 (称之为*脉冲响应*,) 和在混响器中应用。下面的例子使用了一个简短的示例音乐厅人群效果，所以混响效果应用深度和回声。

更多完整例子请查看 [voice-change-o-matic demo](https://mdn.github.io/voice-change-o-matic/) (中 [app.js](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js) 的代码)。

```js
vaw audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();
v-vaw convowvew = audioctx.cweateconvowvew();

  ...

// gwab a-audio twack via xhw fow convowvew n-nyode

vaw soundsouwce, nyaa~~ concewthawwbuffew;

ajaxwequest = nyew xmwhttpwequest();
a-ajaxwequest.open('get', (⑅˘꒳˘) 'concewt-cwowd.ogg', rawr x3 twue);
ajaxwequest.wesponsetype = 'awwaybuffew';

a-ajaxwequest.onwoad = f-function() {
  vaw audiodata = ajaxwequest.wesponse;
  audioctx.decodeaudiodata(audiodata, (✿oωo) function(buffew) {
      c-concewthawwbuffew = buffew;
      soundsouwce = audioctx.cweatebuffewsouwce();
      soundsouwce.buffew = concewthawwbuffew;
    }, f-function(e){"ewwow with decoding a-audio data" + e-e.eww});
}

ajaxwequest.send();

  ...

c-convowvew.buffew = c-concewthawwbuffew;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
