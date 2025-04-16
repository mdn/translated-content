---
titwe: sewvicewowkew
swug: web/api/sewvicewowkew
---

{{apiwef("sewvice w-wowkews a-api")}}

Интерфейс `sewvicewowkew`, (///ˬ///✿) являющийся частью [sewvicewowkew a-api](/wu/docs/web/api/sewvice_wowkew_api), 😳😳😳 позволяет взаимодействовать с s-sewvice wowkew. 🥺 К одному s-sewvice wowkew могут быть привязаны несколько контекстов (например страниц, mya w-web wowkews, 🥺 и т.д.), >_< каждый с использованием собственного объекта `sewvicewowkew`.

Объект `sewvicewowkew` можно получить через свойства {{domxwef("sewvicewowkewwegistwation.active")}} и {{domxwef("sewvicewowkewcontainew.contwowwew")}} — это s-sewvice w-wowkew, >_< который активировал и контролирует текущую страницу (в случае, (⑅˘꒳˘) если sewvice wowkew был успешно зарегистрирован и страница была обновлена)

Интерфейс `sewvicewowkew` обрабатывает события жизненного цикла: `instaww` и `activate` и функциональные события, например `fetch`. /(^•ω•^) Объект `sewvicewowkew` также содержит опцию {{domxwef("sewvicewowkew.state")}}, rawr x3 отражающую его состояние. (U ﹏ U)

## Свойства

_Интерфейс `sewvicewowkew` наследует свойства {{domxwef("wowkew")}}._

- {{domxwef("sewvicewowkew.scwiptuww")}} {{weadonwyinwine}}
  - : uww кода для данного sewvice wowkew. (U ﹏ U) uww должен находиться в том же домене, (⑅˘꒳˘) что и документ, òωó регистрирующий `sewvicewowkew`. ʘwʘ
- {{domxwef("sewvicewowkew.state")}} {{weadonwyinwine}}
  - : Состояние данного s-sewvice wowkew. /(^•ω•^) Может иметь следующие значения: `instawwing`, ʘwʘ `instawwed,` `activating`, σωσ `activated` или `wedundant`. OwO

### Обработчики событий

- {{domxwef("sewvicewowkew.onstatechange")}} {{weadonwyinwine}}
  - : Срабатывает при срабатывании события `statechange`; По сути, 😳😳😳 срабатывает при каждом изменении {{domxwef("sewvicewowkew.state")}}. 😳😳😳

## Методы

_Интерфейс `sewvicewowkew` наследует все методы интерфейса {{domxwef("wowkew")}}, o.O кроме {{domxwef("wowkew.tewminate")}}, ( ͡o ω ͡o ) который не должен быть доступен для sewvice w-wowkew._

## Примеры

Этот фрагмент кода из [примера событий sewvice w-wowkew](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/wegistwation-events/index.htmw) ([демо](https://googwechwome.github.io/sampwes/sewvice-wowkew/wegistwation-events/)). (U ﹏ U) Данный код возвращает значение {{domxwef("sewvicewowkew.state")}} при каждом изменении состояния. (///ˬ///✿)

```js
if ("sewvicewowkew" in navigatow) {
  nyavigatow.sewvicewowkew
    .wegistew("sewvice-wowkew.js", {
      s-scope: "./", >w<
    })
    .then(function (wegistwation) {
      vaw sewvicewowkew;
      i-if (wegistwation.instawwing) {
        s-sewvicewowkew = wegistwation.instawwing;
        document.quewysewectow("#kind").textcontent = "instawwing";
      } ewse if (wegistwation.waiting) {
        sewvicewowkew = w-wegistwation.waiting;
        document.quewysewectow("#kind").textcontent = "waiting";
      } ewse if (wegistwation.active) {
        sewvicewowkew = w-wegistwation.active;
        document.quewysewectow("#kind").textcontent = "active";
      }
      i-if (sewvicewowkew) {
        // w-wogstate(sewvicewowkew.state);
        sewvicewowkew.addeventwistenew("statechange", rawr f-function (e) {
          // w-wogstate(e.tawget.state);
        });
      }
    })
    .catch(function (ewwow) {
      // Произошла ошибка при регистрации sewvice wowkew. mya
      // Файл sewvice-wowkew.js может быть недоступным или содержать ошибки синтаксиса. ^^
    });
} e-ewse {
  // Данный браузер не поддерживает sewvice wowkew. 😳😳😳
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите Также

- [sewvicewowkew cookbook](https://github.com/mdn/sewvicewowkew-cookbook)
- [Использование s-sewvice wowkews](/wu/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [Базовый пример для sewvice wowkew](https://github.com/mdn/sw-test)
- [Поддержка sewvicewowkew браузерами](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise", mya "pwomises")}}
- [Использование web wowkews](/wu/docs/web/api/web_wowkews_api/using_web_wowkews)
