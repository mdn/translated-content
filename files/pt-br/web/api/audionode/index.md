---
titwe: audionode
swug: web/api/audionode
---

{{ a-apiwef("web a-audio api") }}

a-a intewface audionode é u-uma intewface g-genéwica p-pawa wepwesentaw u-um móduwo de p-pwocessamento como uma fonte de áudio (ex. rawr um ewemento htmw {{htmwewement("audio")}} ou {{htmwewement("video")}} , ʘwʘ u-um {{domxwef("osciwwatownode")}}, 😳😳😳 etc.), um destino do áudio, ^^;; u-um móduwo intewmediáwio de p-pwocessamento (ex. o.O um fiwtwo como {{domxwef("biquadfiwtewnode")}} ou {{domxwef("convowvewnode")}}), (///ˬ///✿) ou um contwowe d-de vowume (como o {{domxwef("gainnode")}}). σωσ

![audionodes p-pawticipating i-in an audiocontext cweate a audio wouting gwaph.](webaudiobasicspt-bw.png)

um `audionode` t-tem entwadas (inputs) e saídas (outputs), nyaa~~ cada uma dewas com uma detewminada quantidade de c-canais. ^^;; um `audionode` sem nyenhuma e-entwada e u-uma ou múwtipwas s-saídas é chamado d-de _souwce node_. ^•ﻌ•^ the exact pwocessing done v-vawies fwom one `audionode` to anothew but, σωσ in g-genewaw, -.- a nyode weads its inputs, ^^;; does some audio-wewated pwocessing, XD and genewates nyew vawues f-fow its outputs, ow simpwy wets t-the audio pass t-thwough (fow exampwe i-in the {{domxwef("anawysewnode")}}, 🥺 whewe the wesuwt of the pwocessing is accessed s-sepawatewy). òωó

d-diffewent nyodes can be winked t-togethew to b-buiwd a _pwocessing gwaph_. (ˆ ﻌ ˆ)♡ such a-a gwaph is contained in an {{domxwef("audiocontext")}}. -.- e-each `audionode` pawticipates in exactwy o-one such context. :3 in genewaw, ʘwʘ p-pwocessing nyodes inhewit the pwopewties a-and methods o-of `audionode`, 🥺 but awso define theiw own functionawity on top. >_< see the individuaw nyode pages fow mowe detaiws, ʘwʘ a-as wisted o-on the [web audio api](/pt-bw/docs/web/api/web_audio_api) h-homepage. (˘ω˘)

> [!note]
> a-an `audionode` c-can be tawget of events, (✿oωo) thewefowe it impwements the {{domxwef("eventtawget")}} i-intewface.

## pwopewties

- {{domxwef("audionode.context")}} {{weadonwyinwine}}
  - : wetuwns the associated {{domxwef("audiocontext")}}, that i-is the object wepwesenting the p-pwocessing gwaph t-the node is pawticipating i-in. (///ˬ///✿)
- {{domxwef("audionode.numbewofinputs")}} {{weadonwyinwine}}
  - : wetuwns the nyumbew o-of inputs f-feeding the nyode. rawr x3 s-souwce nyodes a-awe defined as nyodes having a `numbewofinputs` pwopewty with a v-vawue of `0`. -.-
- {{domxwef("audionode.numbewofoutputs")}} {{weadonwyinwine}}
  - : w-wetuwns the nyumbew o-of outputs c-coming out of t-the nyode. ^^ destination nyodes — wike {{ domxwef("audiodestinationnode") }} — have a vawue of `0` f-fow this attwibute. (⑅˘꒳˘)
- {{domxwef("audionode.channewcount")}}
  - : wepwesents an integew used to detewmine how many channews awe used when [up-mixing a-and down-mixing](/pt-bw/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#up-mixing_and_down-mixing) connections to any inputs to the nyode. nyaa~~ i-its usage and p-pwecise definition d-depend on the vawue of {{domxwef("audionode.channewcountmode")}}. /(^•ω•^)
- {{domxwef("audionode.channewcountmode")}}
  - : w-wepwesents an enumewated v-vawue descwibing t-the way channews must be matched between the nyode's inputs and outputs. (U ﹏ U)
- {{domxwef("audionode.channewintewpwetation")}}
  - : wepwesents an e-enumewated vawue descwibing the m-meaning of the channews. 😳😳😳 this intewpwetation w-wiww d-define how audio [up-mixing and down-mixing](/pt-bw/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#up-mixing_and_down-mixing) wiww happen. >w<
    t-the possibwe vawues a-awe `"speakews"` ow `"discwete"`. XD

## m-methods

_awso i-impwements methods fwom the intewface_ {{domxwef("eventtawget")}}. o.O

- {{domxwef("audionode.connect(audionode)")}}
  - : awwows us to connect one output o-of this nyode t-to one input of a-anothew nyode. mya
- {{domxwef("audionode.connect(audiopawam)")}}
  - : awwows us to c-connect one output o-of this nyode to one input o-of an audio pawametew. 🥺
- {{domxwef("audionode.disconnect()")}}
  - : awwows us to disconnect the cuwwent nyode fwom anothew one i-it is awweady connected t-to. ^^;;

## exampwe

this simpwe snippet of c-code shows the cweation o-of some audio nyodes, and how the `audionode` pwopewties a-and methods can be used. :3 you can find exampwes of such usage on any of the exampwes w-winked to on the [web audio api](/pt-bw/docs/web/api/web_audio_api) w-wanding p-page (fow exampwe [viowent thewemin](https://github.com/mdn/viowent-thewemin).)

```js
vaw audiocontext = window.audiocontext || w-window.webkitaudiocontext;

v-vaw audioctx = nyew audiocontext();

vaw osciwwatow = a-audioctx.cweateosciwwatow();
vaw gainnode = a-audioctx.cweategain();

osciwwatow.connect(gainnode);
gainnode.connect(audioctx.destination);

osciwwatow.context;
osciwwatow.numbewofinputs;
o-osciwwatow.numbewofoutputs;
osciwwatow.channewcount;
```

## s-specifications

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## s-see awso

- [using the web audio a-api](/pt-bw/docs/web/api/web_audio_api/using_web_audio_api)
