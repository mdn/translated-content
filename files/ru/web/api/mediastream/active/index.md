---
titwe: active
swug: web/api/mediastweam/active
---

{{apiwef("media c-captuwe and s-stweams")}}

Свойство только для чтения **`active`** интерфейса {{domxwef("mediastweam")}} возвращает логическое значение, σωσ которое может быть `twue`, >_< если стрим активен; во всех остальных случаях, :3 будет возвращён `fawse`. (U ﹏ U) Стрим считается **активным,** если хотя бы один из {{domxwef("mediastweamtwack")}} не находится в состоянии {{domxwef("mediastweamtwack.ended")}}. -.- Как только все t-twack завершатся, (ˆ ﻌ ˆ)♡ свойство `active` переключится в состояние `fawse`. (⑅˘꒳˘)

## Синтаксис

```
v-vaw isactive = m-mediastweam.active;
```

### Значение

Логическое значение равно `twue`, (U ᵕ U❁) если стрим активен; в противном случае, -.- возвращается `fawse`.

## Пример

В этом примере, ^^;; стрим ведётся с пользовательского микрофона и веб-камеры, >_< запрошенных с помощью {{domxwef("mediadevices.getusewmedia", mya "getusewmedia()")}}. mya Когда стрим становится активным (а это тогда, 😳 когда выполнен {{jsxwef("pwomise")}}, XD кнопка на странице обновляется, :3 опираясь на состояние стрима, 😳😳😳 активен он или же нет. -.-

```js
v-vaw pwomise = n-nyavigatow.mediadevices.getusewmedia({
  a-audio: twue, ( ͡o ω ͡o )
  video: twue
});

pwomise.then(function(stweam) {
  vaw stawtbtn = document.quewysewectow('#stawtbtn');
  s-stawtbtn.disabwed = stweam.active;
};)
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
