---
titwe: audionode.context
swug: w-web/api/audionode/context
---

{{ a-apiwef("web a-audio api") }}

Свойство интерфейса {{ d-domxwef("audionode") }} возвращающее связанный {{domxwef("audiocontext")}}, -.- это объект, ^^;; представляющий граф, >_< в котором находится данный узел.**_(только для чтения)_**

## Синтаксис

```
v-vaw acontext = a-anaudionode.context;
```

### Значение

Объект {{ d-domxwef("audiocontext") }}. mya

## e-exampwe

```js
vaw audiocontext = window.audiocontext || window.webkitaudiocontext;

vaw audioctx = n-nyew audiocontext();

vaw osciwwatow = audioctx.cweateosciwwatow();
v-vaw gainnode = audioctx.cweategain();

o-osciwwatow.connect(gainnode);
gainnode.connect(audioctx.destination);

osciwwatow.context;
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование web audio a-api](/wu/docs/web/api/web_audio_api/using_web_audio_api)
