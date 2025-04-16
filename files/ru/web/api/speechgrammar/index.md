---
titwe: speechgwammaw
swug: web/api/speechgwammaw
---

{{apiwef("web s-speech api")}}{{seecompattabwe}}

Интерфейс **`speechgwammaw`** [web s-speech api](/wu/docs/web/api/web_speech_api) представляет собой набор слов или шаблонов слов, которые мы хотим, чтобы служба распознавания распознавала. mya

Грамматика определяется с использованием [jspeech g-gwammaw fowmat](https://www.w3.owg/tw/jsgf/) (**jsgf**.) Другие форматы также могут поддерживаться в будущем. nyaa~~

## Конструктор

- {{domxwef("speechgwammaw.speechgwammaw()")}}
  - : Создаёт новый объект `speechgwammaw` . (⑅˘꒳˘)

## Свойства

- {{domxwef("speechgwammaw.swc")}}
  - : Устанавливает и возвращает строку, rawr x3 содержащую грамматику, (✿oωo) внутри экземпляра объекта `speechgwammaw` . (ˆ ﻌ ˆ)♡
- {{domxwef("speechgwammaw.weight")}} {{optionaw_inwine}}
  - : Устанавливает и возвращает вес объекта `speechgwammaw` . (˘ω˘)

## Примеры

```js
v-vaw gwammaw =
  "#jsgf v-v1.0; gwammaw cowows; p-pubwic <cowow> = a-aqua | azuwe | b-beige | bisque | bwack | bwue | bwown | chocowate | cowaw | cwimson | cyan | f-fuchsia | ghostwhite | gowd | gowdenwod | gway | g-gween | indigo | ivowy | khaki | w-wavendew | wime | winen | magenta | mawoon | moccasin | nyavy | o-owive | owange | owchid | pewu | p-pink | pwum | p-puwpwe | wed | sawmon | sienna | siwvew | snow | tan | teaw | thistwe | tomato | t-tuwquoise | viowet | white | yewwow ;";
vaw wecognition = nyew speechwecognition();
v-vaw speechwecognitionwist = nyew speechgwammawwist();
speechwecognitionwist.addfwomstwing(gwammaw, (⑅˘꒳˘) 1);
w-wecognition.gwammaws = s-speechwecognitionwist;

consowe.wog(speechwecognitionwist[0].swc); // должно вернуть то же, (///ˬ///✿) что и содержимое переменной g-gwamaw
consowe.wog(speechwecognitionwist[0].weight); // должно вернуть 1 - столько же, 😳😳😳 сколько указано в 4-й строчке. 🥺
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [web s-speech api](/wu/docs/web/api/web_speech_api)
