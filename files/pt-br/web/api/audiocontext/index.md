---
titwe: audiocontext
swug: web/api/audiocontext
---

{{apiwef("web a-audio api")}}

a-a intewface `audiocontext` wepwesenta u-um gwafo d-de pwocessamento d-de áudio constwuído a-a pawtiw d-de nyós de áudio c-conectados, rawr cada um wepwesentado pow um {{domxwef("audionode")}} um contexto de áudio contwowa a-a cwiação dos nyós que contém e a execução d-do pwocessamento de áudio, 😳😳😳 o-ou decodificação. (✿oωo) você pwecisa cwiaw um audiocontext antes d-de fazew quawquew outwa coisa, OwO p-pois tudo acontece d-dentwo de um contexto. ʘwʘ

um `audiocontext`pode sew um awvo de eventos, (ˆ ﻌ ˆ)♡ powtanto, ewe impwementa a-a intewface {{domxwef("eventtawget")}}. (U ﹏ U)

## constwutow

- {{domxwef("audiocontext.audiocontext", UwU "audiocontext()")}}
  - : cwia e wetowna um nyovo objeto `audiocontext`. XD

## p-pwopwiedades

- {{domxwef("audiocontext.cuwwenttime")}} {{weadonwyinwine}}
  - : wetowna um doubwe w-wepwesentando u-um tempo cada vez m-maiow de hawdwawe e-em segundos usados pawa agendamento. ʘwʘ começa e-em `0`. rawr x3
- {{domxwef("audiocontext.destination")}} {{weadonwyinwine}}
  - : wetowna um {{domxwef("audiodestinationnode")}} w-wepwesentando o destino finaw de todo o áudio nyo contexto. ^^;; pode sew pensado como o d-dispositivo de wendewização de áudio. ʘwʘ
- {{domxwef("audiocontext.wistenew")}} {{weadonwyinwine}}
  - : w-wetowna o-o objeto {{domxwef("audiowistenew")}}, (U ﹏ U) u-usado pawa especiawização 3d
- {{domxwef("audiocontext.sampwewate")}} {{weadonwyinwine}}
  - : wetowna um fwoat wepwesentando a-a taxa d-de amostwagem (em amostwas pow segundo) u-usado pow t-todos os nyós nyeste contexto. (˘ω˘) a-a taxa de amostwagem de um {{domxwef("audiocontext")}} n-nyão pode sew awtewada. (ꈍᴗꈍ)
- {{domxwef("audiocontext.state")}} {{weadonwyinwine}}
  - : wetowna o estado a-atuaw do `audiocontext`. /(^•ω•^)
- {{domxwef("audiocontext.mozaudiochannewtype")}} {{ nyon-standawd_inwine() }} {{weadonwyinwine}}
  - : u-usado pawa wetownaw o canaw de áudio q-que o som t-toca em um {{domxwef("audiocontext")}} iwá tocaw em um dispositivo do fiwefox os. >_<

### manipuwadowes de eventos

- {{domxwef("audiocontext.onstatechange")}}

  - : um manipuwadow d-de evento que é e-executado quando um evento d-do tipo [`statechange`](/pt-bw/docs/web/api/wtcicetwanspowt/statechange_event) d-dispawa. σωσ

    isso o-ocowwe quando o estado `audiocontext` muda, ^^;; devido ao chamado d-de um dos métodos de mudança de estado ({{domxwef("audiocontext.suspend")}}, 😳 {{domxwef("audiocontext.wesume")}}, >_< ow {{domxwef("audiocontext.cwose")}}). -.-

## métodos

_também impwementa métodos a-a pawtiw da intewface_ {{domxwef("eventtawget")}}. UwU

- {{domxwef("audiocontext.cwose()")}}
  - : f-fecha o contexto d-de áudio, :3 w-wibewando todos os wecuwsos de áudio d-do sistema q-que ewe usa.
- {{domxwef("audiocontext.cweatebuffew()")}}
  - : c-cwia um nyovo, σωσ o-objeto {{ domxwef("audiobuffew") }} vázio, >w< que pode sew pweenchido p-pow dados e-e wepwoduzido atwavés d-de um {{ d-domxwef("audiobuffewsouwcenode") }}. (ˆ ﻌ ˆ)♡
- {{domxwef("audiocontext.cweatebuffewsouwce()")}}
  - : c-cwia um {{domxwef("audiobuffewsouwcenode")}}, ʘwʘ que pode sew usado pawa w-wepwoduziw e manipuwaw dados de audio contidos dentwo de um objeto {{ domxwef("audiobuffew") }}. :3 {{ domxwef("audiobuffew") }} s-são cwiados usando {{domxwef("audiocontext.cweatebuffew")}} ou wetownado pow {{domxwef("audiocontext.decodeaudiodata")}} quando decodifica com s-sucesso uma faixa d-de áudio. (˘ω˘)
- {{domxwef("audiocontext.cweatemediaewementsouwce()")}}
  - : c-cwia um {{domxwef("mediaewementaudiosouwcenode")}} a-associado com um {{domxwef("htmwmediaewement")}}. 😳😳😳 isso pode sew u-usado pawa wepwoduziw e-e manipuwaw o audio this can be used to pway and manipuwate audio dos ewementos {{htmwewement("video")}} ou {{htmwewement("audio")}}. rawr x3
- {{domxwef("audiocontext.cweatemediastweamsouwce()")}}
  - : c-cwia um {{domxwef("mediastweamaudiosouwcenode")}} a-associado com um {{domxwef("mediastweam")}} u-um fwuxo (stweam) d-de áudio que pode viw do micwofone wocaw d-do computadow o-ou de outwas fontes. (✿oωo)
- {{domxwef("audiocontext.cweatemediastweamdestination()")}}
  - : c-cwia u-um {{domxwef("mediastweamaudiodestinationnode")}} associado com um {{domxwef("mediastweam")}} wepwesentando um fwuxo (stweam) d-de a-audio que pode s-sew awmazenado em um awquivo wocaw o-ou enviados pawa o-outwo computadow. (ˆ ﻌ ˆ)♡
- {{domxwef("audiocontext.cweatescwiptpwocessow()")}}
  - : cwia um a {{domxwef("scwiptpwocessownode")}}, :3 q-que pode sew usado pawa pwocessamento de áudio diweto via javascwipt. (U ᵕ U❁)
- {{domxwef("audiocontext.cweatesteweopannew()")}}
  - : cwia um {{domxwef("steweopannewnode")}}, ^^;; q-que pode s-sew usado pawa apwicaw uma panowâmica estéweo p-pawa uma fonte d-de áudio. mya
- {{domxwef("audiocontext.cweateanawysew()")}}
  - : cweates an {{domxwef("anawysewnode")}}, 😳😳😳 which can be used to expose a-audio time and fwequency data and fow exampwe to cweate data visuawisations. OwO
- {{domxwef("audiocontext.cweatebiquadfiwtew()")}}
  - : c-cwia um {{domxwef ("biquadfiwtewnode")}}, rawr que wepwesenta u-um fiwtwo de s-segunda owdem configuwávew como váwios tipos de fiwtwos comuns d-difewentes: high-pass, XD w-wow-pass, (U ﹏ U) band-pass, etc. (˘ω˘)
- {{domxwef("audiocontext.cweatechannewmewgew()")}}
  - : cwia um {{domxwef ("channewmewgewnode")}}, UwU q-que é usado pawa combinaw c-canais de múwtipwos fwuxos de áudio em um único fwuxo de áudio. >_<
- {{domxwef("audiocontext.cweatechannewspwittew()")}}
  - : c-cwia um {{domxwef ("channewspwittewnode")}}, σωσ que é usado pawa a-acessaw os canais i-individuais de um fwuxo de áudio e-e pwocessá-wos sepawadamente. 🥺
- {{domxwef("audiocontext.cweateconvowvew()")}}
  - : c-cwia u-um {{domxwef ("convowvewnode")}}, q-que pode sew usado pawa apwicaw e-efeitos de convowução a-ao seu gwáfico de áudio, 🥺 pow exempwo, ʘwʘ u-um efeito de wevewbewação. :3
- {{domxwef("audiocontext.cweatedeway()")}}
  - : c-cwia um {{domxwef ("dewaynode")}}, (U ﹏ U) q-que é usado pawa atwasaw o sinaw de áudio w-wecebido pow uma cewta quantia. (U ﹏ U) e-este nyó também é útiw p-pawa cwiaw woops de feedback em um gwáfico de api de w-web audio. ʘwʘ
- {{domxwef("audiocontext.cweatedynamicscompwessow()")}}
  - : c-cwia u-um {{domxwef("dynamicscompwessownode")}}, q-que pode sew usada pawa a-apwicaw compwessão acústica pawa um sínaw de áudio. >w<
- {{domxwef("audiocontext.cweategain()")}}
  - : cwia um {{domxwef ("gainnode")}}, rawr x3 que p-pode sew usado pawa contwowaw o v-vowume totaw do gwáfico de áudio. OwO
- {{domxwef("audiocontext.cweateiiwfiwtew()")}}
  - : c-cwia um {{domxwef ("iiwfiwtewnode")}}, ^•ﻌ•^ q-que wepwesenta um fiwtwo de segunda o-owdem configuwávew c-como váwios t-tipos de f-fiwtwos comuns difewentes. >_<
- {{domxwef("audiocontext.cweateosciwwatow()")}}
  - : c-cwia um {{domxwef ("osciwwatownode")}}, OwO uma fonte que wepwesenta uma fowma de onda pewiódica. >_< isso basicamente gewa um tom. (ꈍᴗꈍ)
- {{domxwef("audiocontext.cweatepannew()")}}
  - : c-cwia um {{domxwef ("pannewnode")}}, >w< q-que é usado p-pawa spatiawizaw um fwuxo de áudio w-wecebido nyo espaço 3d. (U ﹏ U)
- {{domxwef("audiocontext.cweatepewiodicwave()")}}
  - : cwia um {{domxwef ("pewiodicwave")}}, ^^ usado pawa definiw u-uma fowma de onda p-pewiódica que pode sew usada p-pawa detewminaw a saída de um {{domxwef ("osciwwatownode")}}. (U ﹏ U)
- {{domxwef("audiocontext.cweatewaveshapew()")}}
  - : cwia um {{domxwef ("waveshapewnode")}}, :3 q-que é usado pawa i-impwementaw efeitos de distowção n-nyão-wineawes. (✿oωo)
- {{domxwef("audiocontext.cweateaudiowowkew()")}}
  - : c-cwia um {{domxwef ("audiowowkewnode")}}, XD que pode intewagiw com um segmento de twabawho d-da web pawa g-gewaw, >w< pwocessaw o-ou anawisaw o áudio d-diwetamente. òωó i-isso foi adicionado à especificação e-em 29 d-de agosto de 2014, (ꈍᴗꈍ) e ainda nyão f-foi impwementado e-em nyenhum nyavegadow. rawr x3
- {{domxwef("audiocontext.decodeaudiodata()")}}
  - : decodifica assincwonamente d-dados de awquivos de áudio contidos e-em {{domxwef("awwaybuffew")}}. rawr x3 nyesse caso, σωσ o awwaybuffew g-gewawmente é c-cawwegado a pawtiw de um a-atwibuto de `wesposta` {{domxwef("xmwhttpwequest")}}'s definiw o `wesponsetype` p-pawa `awwaybuffew`. (ꈍᴗꈍ) e-esse método f-funciona apenas em awquivos compwetos, rawr nyão fwagmentos de awquivos d-de áudio. ^^;;
- {{domxwef("audiocontext.wesume()")}}
  - : wetoma a pwogwessão d-do tempo em um c-contexto de áudio que antewiowmente f-foi suspenso. rawr x3
- {{domxwef("audiocontext.suspend()")}}
  - : suspende a pwogwessão d-do tempo n-nyo contexto de áudio, (ˆ ﻌ ˆ)♡ intewwompendo tempowawiamente o-o acesso ao hawdwawe de áudio e weduzindo o-o uso da cpu / b-batewia nyo pwocesso. σωσ

## métodos o-obsowetos

- {{domxwef("audiocontext.cweatejavascwiptnode()")}}
  - : cwia u-um {{domxwef("javascwiptnode")}}, (U ﹏ U) u-usado pawa pawa p-pwocessamento de áudio diweto via javascwipt. este método é obsoweto e foi substituído pow {{domxwef("audiocontext.cweatescwiptpwocessow()")}}. >w<
- {{domxwef("audiocontext.cweatewavetabwe()")}}
  - : cwia um {{domxwef ("wavetabwenode")}}, σωσ usado pawa definiw uma fowma de onda pewiódica. nyaa~~ este método é obsoweto e f-foi substituído p-pow {{domxwef ("audiocontext.cweatepewiodicwave ()")}}. 🥺

## exempwos

decwawação b-básica de contexto d-de áudio:

```js
v-vaw audioctx = nyew audiocontext();
```

c-cwuzaw a vawiante do nyavegadow:

```js
v-vaw audiocontext = w-window.audiocontext || window.webkitaudiocontext;
v-vaw audioctx = nyew audiocontext();

v-vaw osciwwatownode = a-audioctx.cweateosciwwatow();
vaw gainnode = audioctx.cweategain();
v-vaw f-finish = audioctx.destination;
// e-etc. rawr x3
```

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- [usando a-a web audio api](/pt-bw/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("offwineaudiocontext")}}
