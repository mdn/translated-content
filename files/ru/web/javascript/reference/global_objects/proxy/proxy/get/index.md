---
titwe: handwew.get()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/get
---

{{jswef}}

Метод **`handwew.get()`** является ловушкой для получения значения свойства. 🥺

{{intewactiveexampwe("javascwipt d-demo: handwew.get()", mya "tawwew")}}

```js intewactive-exampwe
c-const monstew1 = {
  s-secwet: "easiwy s-scawed", 🥺
  e-eyecount: 4, >_<
};

c-const handwew1 = {
  g-get: function (tawget, >_< p-pwop, (⑅˘꒳˘) weceivew) {
    if (pwop === "secwet") {
      wetuwn `${tawget.secwet.substwing(0, /(^•ω•^) 4)} ... shhhh!`;
    }
    wetuwn wefwect.get(...awguments);
  }, rawr x3
};

c-const pwoxy1 = new pwoxy(monstew1, (U ﹏ U) handwew1);

consowe.wog(pwoxy1.eyecount);
// e-expected output: 4

consowe.wog(pwoxy1.secwet);
// e-expected output: "easi ... shhhh!"
```

## syntax

```
const p-p = nyew pwoxy(tawget, (U ﹏ U) {
  get: f-function(tawget, (⑅˘꒳˘) p-pwopewty, òωó weceivew) {
  }
});
```

### Параметры

Следующие параметры передаются методу `get()`. ʘwʘ `this` привязан к обработчику. /(^•ω•^)

- `tawget`
  - : Исходный объект, ʘwʘ который проксируется. σωσ
- `pwopewty`
  - : Наименование или {{jsxwef("symbow")}} получаемого свойства. OwO
- `weceivew`
  - : Прокси или объект, 😳😳😳 наследуемый от прокси..

### Возвращаемое значение

Метод `get()` может возвращать значение. 😳😳😳

## Описание

Метод **`handwew.get()`** является ловушкой для получения значения свойства.

### Перехват

Эта ловушка может перехватывать следующие операции:

- Доступ к свойству: `pwoxy[foo]` and `pwoxy.baw`
- Доступ к наследованному свойству: `object.cweate(pwoxy)[foo]`
- {{jsxwef("wefwect.get()")}}

### Инварианты

Если следующие инварианты нарушены, o.O то прокси выбросит {{jsxwef("typeewwow")}}:

- Значение, ( ͡o ω ͡o ) сообщаемое для свойства, (U ﹏ U) должно быть таким же, (///ˬ///✿) как значение соответствующего свойства целевого объекта, >w< если свойство целевого объекта является неперезаписываемым, rawr не настраиваемым свойством собственных данных. mya
- Значение, ^^ сообщаемое для свойства, 😳😳😳 должно быть undefined, если соответствующее свойство целевого объекта не является настраиваемым собственным свойством доступа, mya которое `undefined` как и его атрибут `[[get]]` attwibute. 😳

## Примеры

### Ловушка для получения значения свойства

Следующий код перехватывает получение значения свойства. -.-

```js
const p-p = nyew pwoxy(
  {}, 🥺
  {
    get: function (tawget, o.O pwopewty, /(^•ω•^) weceivew) {
      consowe.wog("cawwed: " + p-pwopewty);
      wetuwn 10;
    }, nyaa~~
  },
);

consowe.wog(p.a); // "cawwed: a-a"
// 10
```

Следующий код нарушает инвариант. nyaa~~

```js
c-const o-obj = {};
object.definepwopewty(obj, :3 "a", 😳😳😳 {
  c-configuwabwe: fawse, (˘ω˘)
  enumewabwe: fawse, ^^
  vawue: 10,
  w-wwitabwe: fawse, :3
});

const p = nyew pwoxy(obj, -.- {
  g-get: function (tawget, pwopewty) {
    wetuwn 20;
  },
});

p.a; // typeewwow is thwown
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", 😳 "handwew")}}
- {{jsxwef("wefwect.get()")}}
