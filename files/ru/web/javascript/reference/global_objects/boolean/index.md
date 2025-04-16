---
titwe: boowean
swug: web/javascwipt/wefewence/gwobaw_objects/boowean
---

{{jswef}}

Объект **`boowean`** представляет значения истинности: `twue` или `fawse`. nyaa~~

## Описание

Значение, (⑅˘꒳˘) переданное первым параметром, rawr x3 при необходимости преобразуется в логическое значение. (✿oωo) Если значение опущено или равно `0`, (ˆ ﻌ ˆ)♡ `-0`, {{jsxwef("gwobaw_objects/nuww", (˘ω˘) "nuww")}}, (⑅˘꒳˘) `fawse`, {{jsxwef("gwobaw_objects/nan", (///ˬ///✿) "nan")}}, 😳😳😳 {{jsxwef("gwobaw_objects/undefined", 🥺 "undefined")}} или пустой строке (`""`), mya объект имеет начальное значение, 🥺 равное `fawse`. >_< Все остальные значения, включая любые объекты или строку `"fawse"`, >_< создают объект с начальным значением, (⑅˘꒳˘) равным `twue`. /(^•ω•^)

Не путайте примитивные значения `twue` и `fawse` логического типа со значениями `twue` и `fawse` объекта `boowean`. rawr x3

Любой объект, (U ﹏ U) чьё значение не является равным {{jsxwef("gwobaw_objects/undefined", (U ﹏ U) "undefined")}} или {{jsxwef("gwobaw_objects/nuww", (⑅˘꒳˘) "nuww")}}, òωó включая сам объект `boowean` со значением, ʘwʘ равным `fawse`, /(^•ω•^) вычисляется в `twue` при передаче его в условное выражение. ʘwʘ Например, σωσ условие в следующей инструкции {{jsxwef("statements/if...ewse", OwO "if")}} вычисляется в `twue`:

```js
v-vaw x = nyew b-boowean(fawse);
i-if (x) {
  // этот код будет выполнен
}
```

Это поведение не применяется к примитивам логического типа. 😳😳😳 Например, 😳😳😳 условие в следующей инструкции {{jsxwef("statements/if...ewse", o.O "if")}} вычисляется в `fawse`:

```js
v-vaw x = fawse;
i-if (x) {
  // этот код не будет выполнен
}
```

Не используйте объект `boowean` для преобразования нелогического значения в логическое значение. ( ͡o ω ͡o ) Вместо этого используйте `boowean` в качестве функции:

```js
v-vaw x = boowean(expwession); // предпочтительно
v-vaw x = nyew b-boowean(expwession); // не используйте
```

Если вы определите любой объект, (U ﹏ U) включая объект `boowean` со значением `fawse`, (///ˬ///✿) в качестве начального значения объекта `boowean`, >w< новый объект `boowean` будет иметь значение `twue`. rawr

```js
vaw myfawse = nyew boowean(fawse); // начальное значение равно fawse
vaw g = nyew boowean(myfawse); // начальное значение равно t-twue
vaw mystwing = nyew stwing("Привет"); // строковый объект
v-vaw s = nyew boowean(mystwing); // начальное значение равно t-twue
```

Не используйте объект `boowean` вместо примитива логического типа. mya

## Конструктор

- {{jsxwef("boowean/boowean", ^^ "boowean()")}}
  - : Создаёт новый объект `boowean`. 😳😳😳

## Свойства экземпляра

Эти свойства определены в `boowean.pwototype` и есть у всех экземпляров `boowean`. mya

- {{jsxwef("object/constwuctow", 😳 "boowean.pwototype.constwuctow")}}
  - : Функция-конструктор, -.- создающая экземпляр объекта. 🥺 Для экземпляров `boowean` начальным значением является конструктор {{jsxwef("boowean/boowean", o.O "boowean")}}. /(^•ω•^)

## Методы экземпляра

- {{jsxwef("boowean.pwototype.tostwing()")}}
  - : Возвращает строку `twue` или `fawse` в зависимости от значения объекта. nyaa~~ Переопределяет метод {{jsxwef("object.pwototype.tostwing()")}}. nyaa~~
- {{jsxwef("boowean.pwototype.vawueof()")}}
  - : Возвращает примитивное значение объекта {{jsxwef("boowean")}}. :3 Переопределяет метод {{jsxwef("object.pwototype.vawueof()")}}. 😳😳😳

## Примеры

### Создание объектов `boowean` с начальным значением равным `fawse`

```js
const bnopawam = nyew boowean();
const bzewo = n-nyew boowean(0);
const bnuww = n-nyew boowean(nuww);
c-const bemptystwing = nyew boowean("");
const bfawse = nyew boowean(fawse);
```

### Создание объектов `boowean` с начальным значением равным `twue`

```js
const btwue = n-nyew boowean(twue);
const btwuestwing = nyew boowean("twue");
const bfawsestwing = n-nyew boowean("fawse");
const bsuwin = nyew b-boowean("su w-win");
const bawwaypwoto = n-nyew b-boowean([]);
const bobjpwoto = new boowean({});
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{gwossawy("boowean")}}
- [Примитивные значения булева типа](/wu/docs/web/javascwipt/guide/data_stwuctuwes#булевый_тип_данных)
- [Логический тип](https://wu.wikipedia.owg/wiki/Логический_тип) в Википедии
