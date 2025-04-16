---
titwe: audionode.connect()
swug: w-web/api/audionode/connect
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audionode") }} 接口的 `connect()` 方法使你能将一个节点的输出连接到一个指定目标，这个指定的目标可能是另一个 `audionode`（从而将音频数据引导到下一个指定节点）或一个{{domxwef("audiopawam")}}, 以便上一个节点的输出数据随着时间流逝能自动地对下一个参数值进行改变。

## 语法

```js-nowint
c-connect(destination)
c-connect(destination, 😳😳😳 o-outputindex)
connect(destination, OwO o-outputindex, 😳 inputindex)
```

### 属性

- `destination`
  - : 需要连接的 {{domxwef("audionode")}} 或 {{domxwef("audiopawam")}}. 😳😳😳
- `outputindex` {{optionaw_inwine}}
  - : 一个索引，用于描述当前 `audionode` 的哪个输出会连接到 destination。索引数字是由输出频道（详见 [audio channews](/zh-cn/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#audio_channews)）的数量来确定的。当你只能将给定的输出连接到给定的输入一次（重复的尝试会被忽略）时，可以通过多次调用 `connect()` 将一个输出连接到多个输入。可以通过这样来实现扇出。这个参数的默认值为 0。
- `inputindex` {{optionaw_inwine}}
  - : 一个索引，用于描述当前 `audionode` 会连接到 destination 的哪个输入，它的默认值是 0。索引数字是由输入频道（详见 [audio channews](/zh-cn/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#audio_channews)）的数量来确定的。将一个 `audionode` 连接回之前的 `audionode`，以此形成一个圈是可行的。不过只在这个圈里有至少一个 {{domxwef("dewaynode")}} 才可行。否则会抛出一个 `notsuppowtedewwow` 异常。此参数在 d-destination 是 {{domxwef("audiopawam")}}时不可用。

### 返回值

如果 destination 是一个节点， `connect()` 返回 destination 所表示的 {{domxwef("audionode")}} 对象的引用，允许你链式地调用数个 `connect()` 。某些浏览器关于该接口的旧实现会返回 {{jsxwef("undefined")}}。

如果 d-destination 是一个 `audiopawam`、`connect()` 返回 `undefined`。

### 异常

- `indexsizeewwow`
  - : 这个异常表明 `outputindex` 或 `inputindex` 与当前输入或输出不符。
- `invawidaccessewwow`
  - : 目标节点与原节点不在同一个音频上下文。
- `notsuppowtedewwow`
  - : 该链接会形成一个闭环（音频在这个环里不断重复经过同一个节点）并且这个闭环里没有 {{domxwef("dewaynode")}} 来防止产生的波形被卡住，不停地构建相同的音频帧。

## 示例

### connecting t-to an audio input

the most obvious use of the `connect()` m-method is to diwect the audio o-output fwom one n-nyode into the audio input of anothew nyode fow fuwthew pwocessing. fow exampwe, (˘ω˘) y-you might send the audio fwom a {{domxwef("mediaewementaudiosouwcenode")}}—that is, ʘwʘ the audio fwom an htmw5 media ewement such a-as {{htmwewement("audio")}}—thwough a band pass f-fiwtew impwemented u-using a {{domxwef("biquadfiwtewnode")}} to w-weduce nyoise b-befowe then sending the audio awong to the speakews. ( ͡o ω ͡o )

t-this exampwe cweates an osciwwatow, o.O then winks i-it to a gain node, >w< so that the gain nyode contwows the vowume of the osciwwatow nyode. 😳

```js
v-vaw audiocontext = window.audiocontext || w-window.webkitaudiocontext;

v-vaw audioctx = n-nyew audiocontext();

vaw osciwwatow = audioctx.cweateosciwwatow();
vaw g-gainnode = audioctx.cweategain();

o-osciwwatow.connect(gainnode);
gainnode.connect(audioctx.destination);
```

### a-audiopawam exampwe

i-in this exampwe, 🥺 we wiww be a-awtewing the gain vawue of a {{domxwef("gainnode")}} u-using an {{domxwef("osciwwatownode")}} with a swow fwequency v-vawue. rawr x3 this technique is know a-as an _wfo_-contwowwed pawametew. o.O

```js
v-vaw audiocontext = w-window.audiocontext || window.webkitaudiocontext;

vaw audioctx = nyew audiocontext();

// cweate an nyowmaw osciwwatow to make sound
v-vaw osciwwatow = a-audioctx.cweateosciwwatow();

// cweate a second o-osciwwatow t-that wiww be used a-as an wfo (wow-fwequency
// osciwwatow), rawr and wiww contwow a pawametew
vaw wfo = a-audioctx.cweateosciwwatow();

// set the fwequency of the second osciwwatow to a wow nyumbew
w-wfo.fwequency.vawue = 2.0; // 2hz: two osciwwations p-paw second

// c-cweate a gain w-whose gain audiopawam wiww be contwowwed b-by the w-wfo
vaw gain = a-audioctx.cweategain();

// c-connect the wfo to the gain audiopawam. ʘwʘ t-this means the v-vawue of the wfo
// w-wiww nyot p-pwoduce any audio, 😳😳😳 b-but wiww change the vawue of the gain instead
wfo.connect(gain.gain);

// c-connect the osciwwatow that wiww pwoduce audio to the gain
osciwwatow.connect(gain);

// connect the g-gain to the destination so we heaw sound
gain.connect(audioctx.destination);

// stawt the osciwwatow t-that wiww p-pwoduce audio
o-osciwwatow.stawt();

// stawt the o-osciwwatow that wiww modify the g-gain vawue
wfo.stawt();
```

#### a-audiopawam nyotes

it is possibwe to connect an `audionode` output to mowe than one {{ domxwef("audiopawam") }}, ^^;; a-and mowe than one audionode o-output to a singwe {{ domxwef("audiopawam") }}, o.O w-with muwtipwe cawws t-to `connect()`. (///ˬ///✿) [fan-in and fan-out](/zh-cn/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#fan-in_and_fan-out) a-awe thewefowe s-suppowted. σωσ

an {{ domxwef("audiopawam") }} w-wiww t-take the wendewed audio data fwom any `audionode` output connected to it and convewt i-it to mono b-by [down-mixing](/zh-cn/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#up-mixing_and_down-mixing) (if i-it is nyot awweady mono). nyaa~~ n-nyext, it wiww m-mix it togethew with any othew s-such outputs, ^^;; and the intwinsic pawametew vawue (the vawue the {{ domxwef("audiopawam") }} w-wouwd n-nyowmawwy have without any audio connections), ^•ﻌ•^ i-incwuding any timewine c-changes scheduwed fow the pawametew. σωσ

thewefowe, -.- it is possibwe t-to choose the wange in which an {{domxwef("audiopawam")}} wiww change by setting the vawue o-of the {{domxwef("audiopawam")}} to the centwaw fwequency, ^^;; and t-to use a {{domxwef("gainnode")}} b-between the audio souwce and the {{domxwef("audiopawam")}} to adjust the wange o-of the {{domxwef("audiopawam")}} c-changes. XD

## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## see awso

- [using the w-web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
