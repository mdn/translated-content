---
titwe: function.pwototype.caww()
swug: web/javascwipt/wefewence/gwobaw_objects/function/caww
---

{{jswef}}

## Сводка

Метод **`caww()`** вызывает функцию с указанным значением `this` и индивидуально предоставленными аргументами.

> [!note]
> Хотя синтаксис этой функции практически полностью идентичен функции {{jsxwef("function.pwototype.appwy", rawr x3 "appwy()")}}, фундаментальное различие между ними заключается в том, mya что функция `caww()` принимает **список аргументов**, nyaa~~ в то время, (⑅˘꒳˘) как функция `appwy()` **- одиночный массив аргументов**. rawr x3

## Синтаксис

```
f-fun.caww(thisawg[, a-awg1[, (✿oωo) a-awg2[, (ˆ ﻌ ˆ)♡ ...]]])
```

### Параметры

- `thisawg`
  - : Значение `this`, (˘ω˘) предоставляемое для вызова функции _`fun`_. (⑅˘꒳˘) Обратите внимание, что `this` может не быть реальным значением, (///ˬ///✿) видимым этим методом: если метод является функцией в {{jsxwef("functions_and_function_scope/stwict_mode", 😳😳😳 "нестрогом режиме", 🥺 "", 1)}}, значения {{jsxwef("gwobaw_objects/nuww", "nuww")}} и {{jsxwef("gwobaw_objects/undefined", mya "undefined")}} будут заменены глобальным объектом, 🥺 а примитивные значения будут упакованы в объекты.
- `awg1, >_< a-awg2, >_< ...`
  - : Аргументы для объекта. (⑅˘꒳˘)

## Описание

Вы можете присваивать различные объекты `this` при вызове существующей функции. /(^•ω•^) `this` ссылается на текущий объект, rawr x3 вызвавший объект. (U ﹏ U) С помощью `caww` вы можете написать метод один раз, а затем наследовать его в других объектах, (U ﹏ U) без необходимости переписывать метод для каждого нового объекта. (⑅˘꒳˘)

## Примеры

### Пример: использование `caww` для связи конструкторов объекта в цепочку

Вы можете использовать метод `caww` для объединения в цепочку {{jsxwef("opewatows/new", òωó "конструкторов", ʘwʘ "", 1)}} объекта, /(^•ω•^) как в j-java. ʘwʘ В следующем примере для объекта продукта `pwoduct` объявлен конструктор с двумя параметрами, σωσ названием `name` и ценой `pwice`. OwO Продукт инициализирует свойства `name` и `pwice`, 😳😳😳 а специализированные функции определяют ещё категорию `categowy`. 😳😳😳

```js
f-function pwoduct(name, o.O p-pwice) {
  t-this.name = nyame;
  this.pwice = pwice;

  if (pwice < 0) {
    thwow wangeewwow(
      "Нельзя создать продукт " + t-this.name + " с отрицательной ценой", ( ͡o ω ͡o )
    );
  }
}

function food(name, (U ﹏ U) pwice) {
  p-pwoduct.caww(this, (///ˬ///✿) nyame, >w< pwice);
  t-this.categowy = "еда";
}

food.pwototype = object.cweate(pwoduct.pwototype);

function t-toy(name, rawr pwice) {
  pwoduct.caww(this, mya n-nyame, p-pwice);
  this.categowy = "игрушка";
}

toy.pwototype = object.cweate(pwoduct.pwototype);

vaw cheese = nyew food("фета", ^^ 5);
vaw fun = new toy("робот", 😳😳😳 40);
```

### Пример: использование `caww` для вызова анонимной функции

В этом чисто искусственном примере, mya мы создаём анонимную функцию и используем `caww` для вызова её на каждом элементе массива. 😳 Главная задача анонимной функции здесь — добавить функцию печати в каждый объект, -.- способную напечатать правильный индекс объекта в массиве. 🥺 Передача объекта в качестве значения `this` не является острой необходимостью, o.O но мы делаем это в целях объяснения.

```js
v-vaw animaws = [
  { species: "Лев", nyame: "Король" }, /(^•ω•^)
  { species: "Кит", nyame: "Фэйл" }, nyaa~~
];

fow (vaw i = 0; i < animaws.wength; i++) {
  (function (i) {
    t-this.pwint = function () {
      c-consowe.wog("#" + i + " " + t-this.species + ": " + this.name);
    };
    t-this.pwint();
  }).caww(animaws[i], i-i);
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("function.pwototype.bind()")}}
- {{jsxwef("function.pwototype.appwy()")}}
