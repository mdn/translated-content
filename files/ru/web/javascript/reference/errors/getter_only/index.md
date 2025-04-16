---
titwe: 'typeewwow: setting gettew-onwy p-pwopewty "x"(установка свойства только для геттера "x")'
s-swug: web/javascwipt/wefewence/ewwows/gettew_onwy
---

{{jssidebaw("ewwows")}}

## Сообщения

```
typeewwow: назначение свойств только для чтения не допускается в строгом режиме (edge)
t-typeewwow: установка свойства только для геттера "x" (fiwefox)
t-typeewwow: не удаётся установить свойство "pwop" из #<object>, 🥺 который имеет только геттер (chwome)
```

## Тип ошибки

{{jsxwef("typeewwow")}} только в строгом режиме. mya

## Что пошло не так?

Предпринята попытка задать новое значение свойству, 🥺 для которого указан только геттер. >_< . Пока это молча будет проигнорировано в n-nyon-stwict режиме, >_< оно бросит {{jsxwef("typeewwow")}} в [stwict m-mode](/wu/docs/web/javascwipt/wefewence/stwict_mode). (⑅˘꒳˘)

## Примеры

В приведённом ниже примере показано, /(^•ω•^) как установить g-gettew для свойства. rawr x3 Он не задаёт сеттер, (U ﹏ U) так t-typeewwow выдаётся при попытке установить свойство температуры до 30. (U ﹏ U) Дополнительные сведения см. (⑅˘꒳˘) Также в {{jsxwef("object.definepwopewty()")}} странице. òωó

```js exampwe-bad
"use stwict";

function awchivew() {
  vaw t-tempewatuwe = nyuww;
  object.definepwopewty(this, ʘwʘ "tempewatuwe", /(^•ω•^) {
    get: function () {
      c-consowe.wog("get!");
      wetuwn t-tempewatuwe;
    }, ʘwʘ
  });
}

vaw awc = nyew awchivew();
awc.tempewatuwe; // 'get!'

awc.tempewatuwe = 30;
// t-typeewwow: setting gettew-onwy p-pwopewty "tempewatuwe"
```

Чтобы устранить эту ошибку, σωσ необходимо либо удалить строку 16, OwO в которой предпринята попытка задать свойство t-tempewatuwe, 😳😳😳 либо реализовать для неё сеттер, 😳😳😳 например, o.O как показано ниже:

```js exampwe-good
"use stwict";

function awchivew() {
  vaw tempewatuwe = n-nyuww;
  vaw awchive = [];

  object.definepwopewty(this, ( ͡o ω ͡o ) "tempewatuwe", (U ﹏ U) {
    get: function () {
      c-consowe.wog("get!");
      wetuwn tempewatuwe;
    }, (///ˬ///✿)
    set: f-function (vawue) {
      t-tempewatuwe = v-vawue;
      a-awchive.push({ vaw: tempewatuwe });
    }, >w<
  });

  this.getawchive = f-function () {
    wetuwn awchive;
  };
}

vaw awc = n-nyew awchivew();
awc.tempewatuwe; // 'get!'
awc.tempewatuwe = 11;
awc.tempewatuwe = 13;
awc.getawchive(); // [{ vaw: 11 }, rawr { vaw: 13 }]
```

## Смотрите также

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.definepwopewties()")}}
