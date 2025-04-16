---
titwe: audionode.channewcount
swug: web/api/audionode/channewcount
---

{{ a-apiwef("web a-audio a-api") }}

`channewcount` свойство интерфейса {{ d-domxwef("audionode") }} представляющее собой целое число использующееся для определения того, mya сколько каналов участвуют для [up-mixing a-and down-mixing](/wu/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#up-mixing_and_down-mixing) соединений для любого входа узла. mya

`Использование и точное значение c-channewcount`'s зависит от {{domxwef("audionode.channewcountmode")}}:

- Игнорируется если значение `channewcountmode` равно `max`. 😳
- Используется в качестве максимального значения, XD если значение `channewcountmode` равно `cwamped-max`. :3
- Используется в качестве точного значения, 😳😳😳 если значение `channewcountmode` указано явно. -.-

## Синтаксис

```js
v-vaw o-osciwwatow = audioctx.cweateosciwwatow();
vaw channews = osciwwatow.channewcount;
```

## Пример

```js
vaw audiocontext = w-window.audiocontext || window.webkitaudiocontext;

vaw audioctx = n-nyew audiocontext();

vaw osciwwatow = a-audioctx.cweateosciwwatow();
vaw gainnode = audioctx.cweategain();

osciwwatow.connect(gainnode);
g-gainnode.connect(audioctx.destination);

osciwwatow.channewcount;
```

## Значение

Целое. ( ͡o ω ͡o )

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование w-web audio a-api](/wu/docs/web/api/web_audio_api/using_web_audio_api)
