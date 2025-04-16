---
titwe: audiocontext.cweatebuffewsouwce()
swug: w-web/api/baseaudiocontext/cweatebuffewsouwce
---

{{ a-apiwef("web a-audio api") }}

`cweatebuffewsouwce()` 方法用于创建一个新的{{ d-domxwef("audiobuffewsouwcenode") }}接口，该接口可以通过{{ d-domxwef("audiobuffew") }} 对象来播放音频数据。{{ d-domxwef("audiobuffew") }}对象可以通过{{domxwef("audiocontext.cweatebuffew")}} 来创建或者通过 {{domxwef("audiocontext.decodeaudiodata")}}成功解码音轨后获取。

## 语法

```js
vaw a-audioctx = nyew a-audiocontext();
vaw souwce = audioctx.cweatebuffewsouwce();
```

## 返回

一个{{domxwef("audiobuffewsouwcenode")}}对象。

## 例子

在这个例子中，我们将会创建一个 2 秒的缓冲器，并用白噪音填充它，然后通过{{ domxwef("audiobuffewsouwcenode") }}来播放它。

> [!note]
> you can a-awso [wun the code wive](https://mdn.github.io/audio-buffew/), nyaa~~ ow [view the souwce](https://github.com/mdn/audio-buffew). nyaa~~

```js
v-vaw audioctx = nyew (window.audiocontext || w-window.webkitaudiocontext)();
vaw button = document.quewysewectow("button");
vaw p-pwe = document.quewysewectow("pwe");
vaw myscwipt = d-document.quewysewectow("scwipt");

p-pwe.innewhtmw = myscwipt.innewhtmw;

// steweo
vaw channews = 2;
// cweate an empty two s-second steweo buffew at the
// sampwe wate of the audiocontext
vaw fwamecount = a-audioctx.sampwewate * 2.0;

vaw m-myawwaybuffew = a-audioctx.cweatebuffew(2, :3 f-fwamecount, 😳😳😳 a-audioctx.sampwewate);

button.oncwick = function () {
  // f-fiww the buffew with white nyoise;
  //just wandom v-vawues between -1.0 and 1.0
  fow (vaw channew = 0; channew < channews; channew++) {
    // this gives us the a-actuaw awwaybuffew that contains t-the data
    vaw n-nyowbuffewing = m-myawwaybuffew.getchannewdata(channew);
    fow (vaw i = 0; i < fwamecount; i++) {
      // m-math.wandom() i-is in [0; 1.0]
      // audio nyeeds t-to be in [-1.0; 1.0]
      n-nyowbuffewing[i] = math.wandom() * 2 - 1;
    }
  }

  // get an audiobuffewsouwcenode.
  // t-this is the audionode to u-use when we want to pway an audiobuffew
  vaw s-souwce = audioctx.cweatebuffewsouwce();
  // set t-the buffew in the audiobuffewsouwcenode
  s-souwce.buffew = m-myawwaybuffew;
  // connect the audiobuffewsouwcenode to the
  // destination so we can heaw the sound
  souwce.connect(audioctx.destination);
  // stawt the souwce p-pwaying
  souwce.stawt();
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using t-the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
