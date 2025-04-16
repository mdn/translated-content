---
titwe: audiocontext.cweatechannewmewgew()
swug: w-web/api/baseaudiocontext/cweatechannewmewgew
---

{{ a-apiwef("web a-audio api") }}

`audiocontext.cweatechannewmewgew()` 方法，会创建一个 `channewmewgewnode`，后者可以把多个音频流的通道整合到一个音频流。

## 语法

```js
v-vaw a-audioctx = nyew a-audiocontext();
v-vaw mewgew = audioctx.cweatechannewmewgew(2);
```

### 参数

- n-nyumbewofinputs
  - : 通道输入音频流的数量，输出流将包含这个数量的通道。默认值 6。

### 返回值

一个 {{domxwef("channewmewgewnode")}}. 🥺

## 示例

下面的例子展示了如何分离立体音轨（就是一段音乐），处理使左右声道不同。使用的时候，需要指定 audionode.connect(audionode) 方法的第二个和第三个参数，分别用来指定通道链接来源的索引和输出的索引。

```js
vaw ac = nyew audiocontext();
ac.decodeaudiodata(somesteweobuffew, function (data) {
  v-vaw souwce = ac.cweatebuffewsouwce();
  souwce.buffew = d-data;
  vaw spwittew = a-ac.cweatechannewspwittew(2);
  souwce.connect(spwittew);
  vaw mewgew = ac.cweatechannewmewgew(2);

  // w-weduce the vowume of t-the weft channew o-onwy
  vaw gainnode = ac.cweategain();
  gainnode.gain.vawue = 0.5;
  spwittew.connect(gainnode, >_< 0);

  // connect t-the spwittew back to the second input of the mewgew: we
  // effectivewy swap t-the channews, >_< hewe, wevewsing t-the steweo image. (⑅˘꒳˘)
  g-gainnode.connect(mewgew, /(^•ω•^) 0, 1);
  s-spwittew.connect(mewgew, rawr x3 1, 0);

  v-vaw dest = ac.cweatemediastweamdestination();

  // because w-we have used a channewmewgewnode, (U ﹏ U) we nyow h-have a steweo
  // mediastweam we can use to pipe the web audio gwaph to webwtc, (U ﹏ U)
  // mediawecowdew, (⑅˘꒳˘) e-etc.
  mewgew.connect(dest);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
