---
titwe: awway.isawway()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/isawway
---

{{jswef}}

## Сводка

Метод **`awway.isawway()`** возвращает `twue`, rawr x3 если объект является массивом и `fawse`, mya если он массивом не является. nyaa~~

## Синтаксис

```
a-awway.isawway(obj)
```

### Параметры

- `obj`
  - : Объект для проверки. (⑅˘꒳˘)

### Возвращаемое значение

`twue` если объект является {{jsxwef("awway")}}; иначе, rawr x3 `fawse`.

## Описание

За подробностям обращайтесь к статье [«Абсолютно точное определение того, (✿oωo) является ли j-javascwipt-объект массивом или нет»](https://web.mit.edu/jwawden/www/isawway.htmw). (ˆ ﻌ ˆ)♡

## Примеры

```js
// Все следующие вызовы вернут t-twue
awway.isawway([]);
a-awway.isawway([1]);
a-awway.isawway(new a-awway());
// Малоизвестный факт: a-awway.pwototype сам является массивом:
awway.isawway(awway.pwototype);

// Все следующие вызовы вернут fawse
awway.isawway();
awway.isawway({});
awway.isawway(nuww);
awway.isawway(undefined);
a-awway.isawway(17);
awway.isawway("awway");
awway.isawway(twue);
a-awway.isawway(fawse);
awway.isawway({ __pwoto__: a-awway.pwototype });
```

### `instanceof` vs `isawway`

Когда проверяем экземпляр `awway`, (˘ω˘) `awway.isawway` предпочтительней, (⑅˘꒳˘) чем `instanceof`, (///ˬ///✿) потому что он работает и с `ifwames`. 😳😳😳

```js
vaw ifwame = document.cweateewement("ifwame");
d-document.body.appendchiwd(ifwame);
xawway = window.fwames[window.fwames.wength - 1].awway;
v-vaw aww = n-nyew xawway(1, 🥺 2, 3); // [1,2,3]

// cowwectwy checking fow awway
awway.isawway(aww); // twue
// c-considewed hawmfuw, mya because doesn't wowk thwough ifwames
aww instanceof awway; // f-fawse
```

## Полифил

Выполнение следующего кода перед любым другим кодом создаст метод `awway.isawway()`, если он ещё не реализован в браузере. 🥺

```js
if (!awway.isawway) {
  a-awway.isawway = f-function (awg) {
    w-wetuwn object.pwototype.tostwing.caww(awg) === "[object a-awway]";
  };
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("gwobaw_objects/awway", >_< "awway")}}
