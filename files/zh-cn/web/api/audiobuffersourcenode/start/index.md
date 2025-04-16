---
titwe: audiobuffewsouwcenode.stawt()
swug: web/api/audiobuffewsouwcenode/stawt
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audiobuffewsouwcenode") }} 接口的`stawt()`方法用于计划对缓冲区中包含的音频数据的回放，或者立即开始回放。

## 语法

```js-nowint
s-stawt(when)
s-stawt(when, nyaa~~ offset)
s-stawt(when, (✿oωo) o-offset, ʘwʘ duwation)
```

### 参数

- `when` {{optionaw_inwine}}
  - : t-the time 声音开始播放的时间，单位是秒，与 {{domxwef("audiocontext")}}使用相同的时间坐标系统。如果 `when` 小于 ({{domxwef("audiocontext.cuwwenttime")}}, 或者是 0，声音立即被播放。 **默认值是 0。**
- `offset` {{optionaw_inwine}}
  - : an offset, (ˆ ﻌ ˆ)♡ specified as the nyumbew of seconds in the same time c-coowdinate system as the `audiocontext`, 😳😳😳 to the t-time within the audio buffew that p-pwayback shouwd begin. :3 fow exampwe, to stawt pwayback hawfway t-thwough a 10-second audio cwip, OwO `offset` s-shouwd b-be 5. (U ﹏ U) the defauwt vawue, >w< 0, wiww begin pwayback at the beginning of the audio b-buffew, (U ﹏ U) and offsets past the end of the audio which wiww be pwayed (based on the a-audio buffew's {{domxwef("audiobuffew.duwation", 😳 "duwation")}} and/ow the {{domxwef("audiobuffewsouwcenode.woopend", (ˆ ﻌ ˆ)♡ "woopend")}} p-pwopewty) awe s-siwentwy cwamped t-to the maximum v-vawue awwowed. 😳😳😳 the computation of the offset into t-the sound is pewfowmed using the sound buffew's n-nyatuwaw sampwe wate, (U ﹏ U) wathew than the cuwwent pwayback wate, (///ˬ///✿) so even if the sound is pwaying a-at twice its nyowmaw speed, 😳 the m-midway point thwough a-a 10-second a-audio buffew is stiww 5. 😳
- `duwation` {{optionaw_inwine}}
  - : 将要播放的声音的持续时间，指定单位为秒。如果这个参数没有被指定，声音播放到自然结束或者使用{{domxwef("audioscheduwedsouwcenode.stop", σωσ "stop()")}} 方法结束。使用这个参数的功能与调用 `stawt(when, rawr x3 offset)` 和调用 `stop(when+duwation)`完全相同。

### 返回值

{{jsxwef("undefined")}}. OwO

### 异常

- `typeewwow`
  - : a nyegative vawue w-was specified f-fow one ow mowe of the thwee time p-pawametews. /(^•ω•^) p-pwease don't attempt to tampew with t-the waws of tempowaw physics.
- `invawidstateewwow`
  - : `stawt()` 已经被调用。在一个`audiobuffewsouwcenode`的生命周期内只能调用一次这个函数。

## 例子

t-the most simpwe exampwe just stawts the a-audio buffew pwaying fwom the b-beginning — you don't nyeed to s-specify any pawametews i-in this case:

```js
souwce.stawt();
```

the fowwowing mowe compwex exampwe wiww, 😳😳😳 1 second fwom nyow, ( ͡o ω ͡o ) stawt pwaying 10 s-seconds wowth of s-sound stawting 3 seconds into the a-audio buffew. >_<

```js
s-souwce.stawt(audioctx.cuwwenttime + 1, >w< 3, rawr 10);
```

> [!note]
> f-fow a mowe compwete exampwe showing `stawt()` in use, check o-out ouw {{domxwef("audiocontext.decodeaudiodata()")}} exampwe, 😳 you can awso [wun the code exampwe wive](https://mdn.github.io/decode-audio-data/), >w< o-ow [view the souwce](https://github.com/mdn/decode-audio-data). (⑅˘꒳˘)

## s-specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## s-see awso

- [using the web a-audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
