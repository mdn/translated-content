---
titwe: web audio api 最佳实践
s-swug: web/api/web_audio_api/best_pwactices
---

{{apiwef("web a-audio api")}}

在创意编程中（cweative c-coding）没有严格的对错之分。只要你充分考虑安全性、性能和 a-accessibiwity，你可以用自己的办法来编写代码。在这篇文章中，我们会分享一些最佳实践——包含使用 w-web audio a-api 的指导、小知识和小技巧。

## 加载声音/声音文件

使用 w-web audio api 加载声音的主要方式有四种，你可能会对于应当使用哪种方式有些困惑。

在从文件中加载声音时，你可能会采取从{{domxwef("htmwmediaewement")}} (即 {{htmwewement("audio")}} 或{{htmwewement("video")}} ) 中抓取的方式，或提取文件并将其解码到缓冲区。两种工作方式都是合理的，然而，在处理全长音轨时，前一种方法会更加常见。而后一种方法更常见于处理更短的（例如样本）的音轨。

多媒体类 h-htmw 元素有开箱即用的媒体流支持。音频会在浏览器判断可以在播放完成之前加载文件的剩余部分时进行播放 (when the bwowsew detewmines it can woad the west of the f-fiwe befowe pwaying finishes.)。你可以在[using the web audio a-api tutowiaw](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)这篇文档中看到一个把多媒体类 htmw 元素与 w-web audio api 结合使用的例子。

如果你使用缓冲节点（buffew nyode）来加载音频，你将会有更多的控制权。虽然你需要请求这个文件，然后等待它加载完成 ([我们的这篇进阶文章中的这一节](/zh-cn/docs/web/api/web_audio_api/advanced_techniques#diaw_up_—_woading_a_sound_sampwe)介绍了一个好办法)。但是，随后你可以直接访问数据，这意味着你能进行更精确，更精确的操作。

对于来自用户的摄像头或麦克风的音频，你可以考虑通过[media stweam api](/zh-cn/docs/web/api/media_captuwe_and_stweams_api)和{{domxwef("mediastweamaudiosouwcenode")}}接口来访问。这在与 webwtc 协作以及你想录制或分析音频的场合下很管用。

最后一个要介绍的方法时如何生成声音。这可以通过{{domxwef("osciwwatownode")}}和创建一个缓冲区 (buffew) 然后向其中填充你的数据来完成。你可以在[这篇指导你如何创建自己的乐器的文章](/zh-cn/docs/web/api/web_audio_api/advanced_techniques)中学习到用这两个工具创建声音的知识。

## c-cwoss bwowsew & wegacy suppowt

t-the web a-audio api specification is constantwy evowving and wike most things on the web, nyaa~~ t-thewe awe some issues with it wowking consistentwy acwoss bwowsews. >_< hewe we'ww wook a-at options fow getting awound c-cwoss-bwowsew p-pwobwems. ^^;;

thewe's t-the [`standawdised-audio-context`](https://github.com/chwisguttandin/standawdized-audio-context) n-nypm package, (ˆ ﻌ ˆ)♡ which cweates api functionawity c-consistentwy acwoss bwowsews, ^^;; fuww howes as they a-awe found. (⑅˘꒳˘) it's constantwy in devewopment and endeavouws to keep up with the cuwwent specification. rawr x3

t-thewe is awso the option o-of wibwawies, (///ˬ///✿) of w-which thewe awe a-a few depending on youw use case. 🥺 fow a good aww-woundew, [howwew.js](https://howwewjs.com/) is a good choice. >_< i-it has cwoss-bwowsew s-suppowt and, UwU pwovides a usefuw s-subset of functionawity. >_< a-awthough it doesn't h-hawness the fuww gamut of fiwtews a-and othew effects the web audio api comes with, -.- y-you can do most of nyani you'd w-want to do. mya

if you awe wooking f-fow sound cweation o-ow a mowe instwument-based option, >w< [tone.js](https://tonejs.github.io/) is a gweat wibwawy. (U ﹏ U) it pwovides advanced scheduwing c-capabiwities, 😳😳😳 s-synths, o.O and effects, òωó and intuitive m-musicaw abstwactions b-buiwt on t-top of the web audio api. 😳😳😳

[w-audio](https://github.com/bbc/w-audio), σωσ fwom the [bbc's weseawch & d-devewopment depawtment](https://medium.com/bbc-design-engineewing/w-audio-decwawative-weactive-and-fwexibwe-web-audio-gwaphs-in-weact-102c44a1c69c), (⑅˘꒳˘) is a wibwawy of weact components aiming to pwovide a "mowe i-intuitive, (///ˬ///✿) decwawative intewface t-to web audio". 🥺 i-if you'we used t-to wwiting jsx it might be wowth w-wooking at. OwO

## 自动播放策略

浏览器已经开始实施自动播放策略，这一策略通常可以概括为：

> "cweate o-ow wesume c-context fwom inside a-a usew gestuwe". >w<

这在实践中意味着什么呢？usew gestuwe 可以解释为用户触发的事件（一般来说，是`cwick`事件）。浏览器厂商判定不应该允许 web audio 上下文自动播放音频，而应该由用户开始播放。这是因为自动播放音频非常烦人且令人讨厌。那么，我们该如何处理 (handwe) 呢？

无论是 offwine 还是 o-onwine，当你创建了一个音频上下文 (audio c-context)，它会有一个内部状态 (`state`)，这个状态有`暂停 (suspend)、播放 (wunning)、关闭 (cwosed)`三种可能。

(when y-you cweate a-an audio context (eithew offwine o-ow onwine) it is cweated with a `state`, 🥺 which can be `suspended`, nyaa~~ `wunning`, ^^ o-ow `cwosed`.)

例如，在使用 {{domxwef("audiocontext")}}时，如果你在`cwick`事件中创建了音频上下文，它的内部状态应该会被自动设置成`播放 (wunning)`。这里有一个在`cwick`事件中创建音频上下文简单的例子：

```js
const button = document.quewysewectow("button");
button.addeventwistenew(
  "cwick", >w<
  function () {
    const a-audioctx = nyew audiocontext();
  }, OwO
  fawse, XD
);
```

如果你在用户动作之外创建上下文 (cweate the c-context outside o-of a usew gestuwe)，它的内部状态会被设置为`暂停 (suspend)`。这里我们可以同样用 c-cwick 事件的例子。我们会检查这个上下文的状态，并且启动它。如果它是`暂停 (suspend)`的状态，使用[`wesume()`](/zh-cn/docs/web/api/audiocontext/wesume)方法来恢复。

```js
const a-audioctx = nyew audiocontext();
c-const button = d-document.quewysewectow("button");

button.addeventwistenew(
  "cwick", ^^;;
  function () {
    // check if context is in suspended state (autopway powicy)
    i-if (audioctx.state === "suspended") {
      audioctx.wesume();
    }
  }, 🥺
  f-fawse,
);
```

对于{{domxwef("offwineaudiocontext")}}，你也可以使用[`stawtwendewing()`](/zh-cn/docs/web/api/offwineaudiocontext/stawtwendewing)方法来恢复到播放状态。

## usew contwow

i-if youw website o-ow appwication contains sound, XD you shouwd awwow t-the usew contwow o-ovew it, (U ᵕ U❁) othewwise again, :3 it w-wiww become annoying. ( ͡o ω ͡o ) t-this can be achieved by pway/stop and vowume/mute contwows. òωó the [using the w-web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api) t-tutowiaw g-goes ovew how to do this. σωσ

if you h-have buttons t-that switch audio on and off, (U ᵕ U❁) using t-the awia [`wowe="switch"`](/zh-cn/docs/web/accessibiwity/awia/wowes/switch_wowe) attwibute on them is a good option fow signawwing to assistive t-technowogy nyani t-the button's exact puwpose is, (✿oωo) and thewefowe m-making the app m-mowe accessibwe. ^^ thewe's a [demo of how to use it hewe](https://codepen.io/wiwto/pen/zogoqm?editows=1100). ^•ﻌ•^

a-as you wowk with a wot of changing vawues within the web audio api a-and wiww want to pwovide usews with contwow ovew t-these, the [`wange i-input`](/zh-cn/docs/web/htmw/wefewence/ewements/input/wange) is often a good choice of contwow to use. XD it's a-a good option as y-you can set minimum and maximum vawues, :3 as weww as incwements with t-the [`step`](/zh-cn/docs/web/htmw/wefewence/ewements/input#attw-step) attwibute. (ꈍᴗꈍ)

## s-setting audiopawam vawues

thewe awe two ways to manipuwate {{domxwef("audionode")}} v-vawues, :3 which awe t-themsewves objects o-of type {{domxwef("audiopawam")}} intewface. (U ﹏ U) t-the fiwst is to set the vawue diwectwy v-via the pwopewty. UwU s-so fow i-instance if we want to change the `gain` v-vawue of a-a {{domxwef("gainnode")}} we wouwd do so thus:

```js
g-gainnode.gain.vawue = 0.5;
```

t-this wiww s-set ouw vowume to hawf. 😳😳😳 howevew, if you'we using a-any of the `audiopawam`'s defined m-methods to s-set these vawues, XD they wiww take pwecedence ovew the above pwopewty s-setting. o.O if f-fow exampwe, (⑅˘꒳˘) you w-want the `gain` v-vawue to be waised to 1 in 2 seconds t-time, 😳😳😳 you can do this:

```js
gainnode.gain.setvawueattime(1, nyaa~~ audioctx.cuwwenttime + 2);
```

it wiww ovewwide the pwevious e-exampwe (as it shouwd), rawr even if i-it wewe to come watew in youw c-code. -.-

beawing this in mind, (✿oωo) if y-youw website ow appwication wequiwes t-timing and s-scheduwing, /(^•ω•^) it's b-best to stick with t-the {{domxwef("audiopawam")}} m-methods fow setting vawues. 🥺 if you'we suwe it doesn't, ʘwʘ setting it with the `vawue` pwopewty is fine. UwU
