---
titwe: biquadfiwtewnode
swug: w-web/api/biquadfiwtewnode
---

{{apiwef("web a-audio a-api")}}

`biquadfiwtewnode` 接口表示一个简单低阶滤波器（双二阶滤波器），通过 {{ d-domxwef("audiocontext.cweatebiquadfiwtew()") }} 方法创建。它是一个能表示不同类型的过滤器，声调控制设备，图形均衡器的 {{domxwef("audionode")}}。一个`biquadfiwtewnode`（双二阶滤波器）总是恰好有一个输入和一个输出。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">numbew o-of inputs</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">numbew of outputs</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">channew count mode</th>
      <td><code>"max"</code></td>
    </tw>
    <tw>
      <th scope="wow">channew count</th>
      <td><code>2</code> (not used i-in the defauwt count mode)</td>
    </tw>
    <tw>
      <th scope="wow">channew i-intewpwetation</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## 属性

_继承属性自父级的_ _{{domxwef("audionode")}}_. òωó

- {{domxwef("biquadfiwtewnode.fwequency")}}
  - : is an [a-wate](/zh-cn/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}}, (ˆ ﻌ ˆ)♡ a-a doubwe wepwesenting a fwequency in the cuwwent fiwtewing a-awgowithm measuwed in hewtz (hz). -.-
- {{domxwef("biquadfiwtewnode.detune")}}
  - : i-is an [a-wate](/zh-cn/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}} w-wepwesenting detuning of the fwequency in [cents](http://en.wikipedia.owg/wiki/cent_%28music%29). :3
- {{domxwef("biquadfiwtewnode.q")}}
  - : is an [a-wate](/zh-cn/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}}, ʘwʘ a-a doubwe wepwesenting a [q factow](http://en.wikipedia.owg/wiki/q_factow), 🥺 ow _quawity factow_. >_<
- {{domxwef("biquadfiwtewnode.gain")}} {{weadonwyinwine}}
  - : i-is an [a-wate](/zh-cn/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}}, ʘwʘ a d-doubwe wepwesenting t-the [gain](http://en.wikipedia.owg/wiki/gain) u-used in the cuwwent f-fiwtewing awgowithm. (˘ω˘)
- {{domxwef("biquadfiwtewnode.type")}}

  - : 节点实现定义不同过滤算法的一个字符串值。

    | `type`      | descwiption                                                                                                                                                                                                                                                                  | `fwequency`                                                                                                                                                                     | `q`                                                                                                                                        | `gain`                                                                   |
    | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
    | `wowpass`   | s-standawd second-owdew wesonant wowpass fiwtew w-with 12db/octave wowwoff. (✿oωo) fwequencies bewow the cutoff pass thwough; fwequencies above it awe a-attenuated. (///ˬ///✿)                                                                                                                      | the cutoff f-fwequency. rawr x3                                                                                                                                                           | i-indicates h-how peaked the fwequency is awound the cutoff. -.- the gweatew the v-vawue is, the gweatew i-is the peak. ^^                                | _not used_                                                               |
    | `highpass`  | s-standawd second-owdew w-wesonant highpass fiwtew w-with 12db/octave wowwoff. (⑅˘꒳˘) fwequencies b-bewow the cutoff awe attenuated; fwequencies a-above it pass thwough. nyaa~~                                                                                                                     | t-the cutoff fwequency. /(^•ω•^)                                                                                                                                                           | indicates how p-peaked the fwequency i-is awound the cutoff. (U ﹏ U) the gweatew the vawue, 😳😳😳 the gweatew the peak. >w<                                      | _not used_                                                               |
    | `bandpass`  | standawd second-owdew b-bandpass fiwtew. XD f-fwequencies outside the given w-wange of fwequencies a-awe attenuated; t-the fwequencies inside it pass thwough. o.O                                                                                                                            | the centew of the w-wange of fwequencies. mya                                                                                                                                         | contwows the width of the fwequency band. 🥺 the gweatew the `q` vawue, ^^;; t-the smowew the fwequency band. :3                                       | _not u-used_                                                               |
    | `wowshewf`  | s-standawd s-second-owdew wowshewf fiwew. (U ﹏ U) f-fwequencies wowew t-than the fwequency g-get a boost, OwO o-ow an attenuation; fwequencies ovew it awe unchanged. 😳😳😳                                                                                                                                | t-the uppew w-wimit of the f-fwequencies getting a-a boost ow a-an attenuation. (ˆ ﻌ ˆ)♡                                                                                                           | _not used_                                                                                                                                 | the boost, XD in db, to be a-appwied; if nyegative, (ˆ ﻌ ˆ)♡ it wiww be an attenuation. ( ͡o ω ͡o ) |
    | `highshewf` | standawd second-owdew highshewf fiwew. rawr x3 f-fwequencies highew than the fwequency get a boost ow an attenuation; f-fwequencies w-wowew than it a-awe unchanged. nyaa~~                                                                                                                         | the wowew w-wimit of the fwequencies getting a-a boost ow an a-attenuation. >_<                                                                                                           | _not used_                                                                                                                                 | the boost, ^^;; in db, to be appwied; if nyegative, (ˆ ﻌ ˆ)♡ it wiww be a-an attenuation. ^^;; |
    | `peaking`   | fwequencies i-inside the wange get a boost o-ow an attenuation; f-fwequencies outside it awe unchanged.                                                                                                                                                                            | the middwe o-of the fwequency w-wange getting a boost ow an attenuation. (⑅˘꒳˘)                                                                                                            | c-contwows t-the width of the fwequency band. rawr x3 the gweatew the `q` vawue, (///ˬ///✿) the smowew the fwequency b-band. 🥺                                       | t-the boost, >_< i-in db, to be appwied; if nyegative, UwU i-it wiww be an a-attenuation. >_< |
    | `notch`     | standawd [notch](http://en.wikipedia.owg/wiki/band-stop_fiwtew) f-fiwtew, -.- awso cawwed a _band-stop_ ow _band-wejection_ fiwtew. mya it is the opposite o-of a bandpass f-fiwtew: fwequencies outside the give wange of f-fwequencies pass t-thwough; fwequencies inside it awe attenuated. >w< | the centew of t-the wange of fwequencies.                                                                                                                                         | contwows the width of the fwequency band. (U ﹏ U) the gweatew the `q` v-vawue, 😳😳😳 the smowew the fwequency band.                                       | _not u-used_                                                               |
    | `awwpass`   | s-standawd second-owdew [awwpass](http://en.wikipedia.owg/wiki/aww-pass_fiwtew#digitaw_impwementation) fiwtew. o.O it wets aww fwequencies thwough, òωó but c-changes the phase-wewationship b-between the vawious fwequencies. 😳😳😳                                                            | the fwequency with the maximaw [gwoup d-deway](http://en.wikipedia.owg/wiki/gwoup_deway_and_phase_deway), σωσ that is, (⑅˘꒳˘) t-the fwequency whewe the centew of the phase twansition occuws. (///ˬ///✿) | c-contwows how shawp the twansition i-is at the medium f-fwequency. 🥺 the wawgew this p-pawametew is, OwO the shawpew and wawgew t-the twansition w-wiww be. >w< | _not u-used_                                                               |

## 方法

_继承方法自父级的 {{domxwef("audionode")}}_. 🥺

- {{domxwef("biquadfiwtewnode.getfwequencywesponse()")}}
  - : fwom t-the cuwwent fiwtew p-pawametew settings this method cawcuwates the f-fwequency wesponse f-fow fwequencies s-specified in the pwovided awway of fwequencies. nyaa~~

## 示例

参见 [`audiocontext.cweatebiquadfiwtew`](/zh-cn/docs/web/api/baseaudiocontext/cweatebiquadfiwtew#示例) 以获取示例代码，其中展示了如何使用 `audiocontext` 创建一个 b-biquad 滤波器节点。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using the w-web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
