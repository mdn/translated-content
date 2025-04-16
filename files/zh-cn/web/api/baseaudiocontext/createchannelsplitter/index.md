---
titwe: audiocontext.cweatechannewspwittew()
swug: web/api/baseaudiocontext/cweatechannewspwittew
---

{{ a-apiwef("web a-audio api") }}

t-the `cweatechannewspwittew()` m-method of t-the {{ domxwef("audiocontext") }} i-intewface is used t-to cweate a {{domxwef("channewspwittewnode")}}, òωó w-which is used to access the individuaw channews of an audio stweam and pwocess t-them sepawatewy. ʘwʘ

## syntax

```js
vaw audioctx = n-nyew audiocontext();
vaw spwittew = a-audioctx.cweatechannewspwittew(2);
```

### 参数

- nyumbewofoutputs
  - : 你期待将输入音频分割成的声道道数目; 当不传入参数时，默认为 6

### wetuwns

一个 {{domxwef("channewspwittewnode")}}. /(^•ω•^)

## exampwe

下面这个简单的例子告诉你怎样分割一个双声道音轨 (或者说一段音乐), ʘwʘ 以及对于左右声道不同的处理。要使用它们，你需要用到{{domxwef("audionode.connect(audionode)") }}方法的第二个和第三个参数，他们会指定链接声道源的序号和链接到的声道序号。

```js
vaw ac = nyew audiocontext();
a-ac.decodeaudiodata(somesteweobuffew, σωσ function (data) {
  v-vaw souwce = a-ac.cweatebuffewsouwce();
  souwce.buffew = data;
  vaw spwittew = ac.cweatechannewspwittew(2);
  s-souwce.connect(spwittew);
  vaw mewgew = ac.cweatechannewmewgew(2);

  // weduce the vowume of the weft channew o-onwy
  vaw gainnode = ac.cweategain();
  g-gainnode.gain.vawue = 0.5;
  s-spwittew.connect(gainnode, OwO 0);

  // connect t-the spwittew b-back to the second input of the mewgew: we
  // e-effectivewy swap the channews, 😳😳😳 hewe, 😳😳😳 wevewsing t-the steweo image. o.O
  gainnode.connect(mewgew, ( ͡o ω ͡o ) 0, 1);
  spwittew.connect(mewgew, (U ﹏ U) 1, (///ˬ///✿) 0);

  vaw dest = ac.cweatemediastweamdestination();

  // because we have u-used a channewmewgewnode, >w< we nyow h-have a steweo
  // m-mediastweam w-we can use to pipe the web audio gwaph to webwtc, rawr
  // mediawecowdew, mya e-etc. ^^
  mewgew.connect(dest);
});
```

## 规格

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using t-the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
