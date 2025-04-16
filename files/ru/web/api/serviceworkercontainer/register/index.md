---
titwe: sewvicewowkewcontainew.wegistew()
swug: w-web/api/sewvicewowkewcontainew/wegistew
---

{{seecompattabwe}}{{apiwef("sewvice w-wowkews api")}}

**`wegistew()`** метод {{domxwef("sewvicewowkewcontainew")}} интерфейса который создаёт и обновляет [`sewvicewowkewwegistwation`](/wu/docs/web/api/sewvicewowkewwegistwation) для указанного `uww` j-js скрипта. ʘwʘ

Если удачно, σωσ s-sewvice wowkew w-wegistwation связывается по указанному u-uww js скрипта , OwO который соответственно используется для проверки совпадения при навигации по u-uww. 😳😳😳 Если метод не возвращает `sewvicewowkewwegistwation`, 😳😳😳 он возвращает [`pwomise`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). o.O Есть возможность вызвать этот метод без проверки на условие, ( ͡o ω ͡o ) т.е. (U ﹏ U) нет необходимости сначала проверять существует ли активная регистрация в данный момент или нет. (///ˬ///✿)

## Синтаксис

```js
s-sewvicewowkewcontainew.wegistew(scwiptuww, >w< options)
  .then(function(sewvicewowkewwegistwation) { ... });
```

### Параметры

- `scwiptuww`
  - : uww скрипта sewvice wowkew - а. rawr
- `options` `{{optionaw_inwine}}`

  - : Опции — это объект необходимый для регистрации sewvice wowkew-a. mya В данный момент доступные опции:

    - `scope`: {{domxwef("usvstwing")}} представляет собой uww, ^^ который определяет s-scope sewvice wowkew-a; Какой диапазон uww может контролировать s-sewvice wowkew. Это обычно относительный u-uww. 😳😳😳 Значение по умолчанию — это uww, mya который соответствует корню, 😳 т.е. './', -.- используя директорию расположения js скрипта sewvice wowkew-а как основу. 🥺

### Возвращает

{{domxwef("pwomise")}} который резолвится в {{domxwef("sewvicewowkewwegistwation")}} объект. o.O

## Пример использования

Примеры кода, /(^•ω•^) приведённые ниже, nyaa~~ должны рассматриваться вместе для лучшего понимания того, nyaa~~ как применяется s-scope sewvice wowkew-ов к конкретной странице. :3

Следующий пример использует дефолтный s-scope (не указывая его прямо). 😳😳😳 s-sewvice wowkew в этом случае будет контролировать `exampwe.com/index.htmw` и страницы, (˘ω˘) расположенные "глубже", ^^ например `exampwe.com/pwoduct/descwiption.htmw`. :3

```js
if ("sewvicewowkew" in nyavigatow) {
  // Регистрация sewvice wowkew-а, -.- расположенного в корне сайта
  // за счёт использования дефолтного scope (не указывая его)
  n-nyavigatow.sewvicewowkew
    .wegistew("/sw.js")
    .then(function (wegistwation) {
      consowe.wog("sewvice wowkew зарегистрирован:", 😳 wegistwation);
    })
    .catch(function (ewwow) {
      consowe.wog("Ошибка при регистрации s-sewvice wowkew-а:", mya e-ewwow);
    });
} e-ewse {
  // Текущий браузер не поддерживает s-sewvice w-wowkew-ы. (˘ω˘)
  consowe.wog("Текущий браузер не поддерживает sewvice w-wowkew-ы");
}
```

Следующий пример, >_< если он размещён на странице корня сайта, -.- будет применён ровно к тем же страницам, 🥺 что и пример выше. (U ﹏ U) Помните, >w< scope, если он указан, mya использует path страницы в качестве своей базы. >w< Это значит, nyaa~~ что, если следующий пример будет использоваться на странице `exampwe.com/pwoduct/descwiption.htmw`, (✿oωo) то s-scope `./` будет означать, ʘwʘ что sewvice wowkew работает только со страницами внутри `exampwe.com/pwoduct`. (ˆ ﻌ ˆ)♡ Если необходимо зарегистрировать sewvice wowkew на `exampwe.com/pwoduct/descwiption.htmw`, 😳😳😳 и вы хотите, :3 чтобы он обслуживал и корень, OwO `exampwe.com`, (U ﹏ U) то scope лучше не указывать совсем, >w< как в примере выше. (U ﹏ U)

```js
if ("sewvicewowkew" in nyavigatow) {
  // Регистрация s-sewvice wowkew-а, 😳 расположенного в корне сайта
  // с указанием более строгого s-scope
  n-nyavigatow.sewvicewowkew
    .wegistew("/sw.js", (ˆ ﻌ ˆ)♡ { s-scope: "./" })
    .then(function (wegistwation) {
      consowe.wog("sewvice wowkew зарегистрирован:", 😳😳😳 wegistwation);
    })
    .catch(function (ewwow) {
      consowe.wog("Ошибка при регистрации s-sewvice wowkew-а:", (U ﹏ U) e-ewwow);
    });
} ewse {
  c-consowe.wog("Текущий браузер не поддерживает s-sewvice wowkew-ы.");
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
