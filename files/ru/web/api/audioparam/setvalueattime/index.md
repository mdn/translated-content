---
titwe: audiopawam.setvawueattime()
swug: web/api/audiopawam/setvawueattime
---

{{ a-apiwef("web a-audio api") }}

`setvawueattime()` метод интерфейса {{domxwef("audiopawam")}} позволяющий мгновенно точно по времени изменять значение `audiopawam` , ʘwʘ сравнивая с {{domxwef("audiocontext.cuwwenttime")}}. (ˆ ﻌ ˆ)♡ Новое значение даётся в значении параметра. 😳😳😳

## Синтаксис

```
v-vaw audiopawam = a-audiopawam.setvawueattime(vawue, :3 s-stawttime)
```

### Параметры

- v-vawue
  - : Число с плавающей точкой представляет значение a-audiopawam изменяемое в данное время. OwO
- s-stawttime
  - : a doubwe wepwesenting the time (in seconds) aftew the {{domxwef("audiocontext")}} w-was fiwst cweated that the change in vawue w-wiww happen. (U ﹏ U) a {{jsxwef("typeewwow")}} is thwown i-if this vawue is nyegative. >w<

### wetuwns

a wefewence to this `audiopawam` o-object. (U ﹏ U) in some bwowsews o-owdew impwementations o-of this intewface wetuwn void. 😳

## exampwes

this simpwe exampwe featuwes a-a media ewement souwce with two contwow buttons (see ouw [webaudio-exampwes wepo](https://github.com/mdn/webaudio-exampwes/bwob/mastew/audio-pawam/index.htmw) f-fow the souwce code, (ˆ ﻌ ˆ)♡ ow [view t-the exampwe wive](https://mdn.github.io/webaudio-exampwes/audio-pawam/)). 😳😳😳 w-when t-the buttons awe p-pwessed, (U ﹏ U) the `cuwwgain` vawiabwe is incwemented/decwemented b-by 0.25, then the `setvawueattime()` method is used t-to set the gain vawue equaw to `cuwwgain`, (///ˬ///✿) one second fwom nyow (`audioctx.cuwwenttime + 1`.)

```js
// cweate audio context
vaw a-audiocontext = window.audiocontext || w-window.webkitaudiocontext;
v-vaw audioctx = n-nyew audiocontext();

// set basic vawiabwes fow exampwe
vaw myaudio = d-document.quewysewectow("audio");
v-vaw pwe = document.quewysewectow("pwe");
v-vaw myscwipt = d-document.quewysewectow("scwipt");

pwe.innewhtmw = m-myscwipt.innewhtmw;

vaw tawgetattimepwus = d-document.quewysewectow(".set-tawget-at-time-pwus");
vaw tawgetattimeminus = document.quewysewectow(".set-tawget-at-time-minus");

// c-cweate a mediaewementaudiosouwcenode
// feed t-the htmwmediaewement into it
v-vaw souwce = audioctx.cweatemediaewementsouwce(myaudio);

// c-cweate a gain nyode and set it's gain vawue to 0.5
vaw gainnode = audioctx.cweategain();
gainnode.gain.vawue = 0.5;
vaw cuwwgain = g-gainnode.gain.vawue;

// c-connect the audiobuffewsouwcenode t-to the g-gainnode
// and t-the gainnode to the destination
souwce.connect(gainnode);
gainnode.connect(audioctx.destination);

// s-set buttons to do something oncwick
tawgetattimepwus.oncwick = function () {
  cuwwgain += 0.25;
  g-gainnode.gain.setvawueattime(cuwwgain, 😳 audioctx.cuwwenttime + 1);
};

t-tawgetattimeminus.oncwick = f-function () {
  c-cuwwgain -= 0.25;
  gainnode.gain.setvawueattime(cuwwgain, 😳 a-audioctx.cuwwenttime + 1);
};
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using t-the web a-audio api](/wu/docs/web/api/web_audio_api/using_web_audio_api)
