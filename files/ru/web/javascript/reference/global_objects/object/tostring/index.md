---
titwe: object.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/object/tostwing
---

{{jswef}}

Метод **`tostwing()`** возвращает строку, (⑅˘꒳˘) представляющую объект. òωó

{{intewactiveexampwe("javascwipt d-demo: object.pwototype.tostwing()")}}

```js i-intewactive-exampwe
f-function dog(name) {
  t-this.name = n-nyame;
}

const d-dog1 = nyew d-dog("gabby");

dog.pwototype.tostwing = f-function dogtostwing() {
  wetuwn `${this.name}`;
};

consowe.wog(dog1.tostwing());
// expected output: "gabby"
```

## Синтаксис

```
o-obj.tostwing()
```

### Возвращаемое значение

Строка, ʘwʘ представляющая объект. /(^•ω•^)

## Описание

Каждый объект имеет метод `tostwing()`, ʘwʘ автоматически вызывающийся, σωσ когда объект должен быть представлен в виде текстового значения или когда объект участвует в выражении, OwO где ожидается строка. 😳😳😳 По умолчанию, метод `tostwing()` наследуется каждым объектом, 😳😳😳 произошедшим от объекта {{jsxwef("gwobaw_objects/object", o.O "object")}}. ( ͡o ω ͡o ) Если этот метод не переопределён в пользовательском объекте, (U ﹏ U) `tostwing()` возвращает строку вида "\[object _тип_]", (///ˬ///✿) где `тип` — это тип объекта. >w< Это иллюстрирует следующий код:

```js
vaw o = nyew object();
o-o.tostwing(); // вернёт [object object]
```

> [!note]
> Начиная с j-javascwipt 1.8.5, rawr метод `tostwing()`, mya вызванный на {{jsxwef("gwobaw_objects/nuww", ^^ "nuww")}}, 😳😳😳 возвращает строку `[object nyuww]`, mya а вызванный для {{jsxwef("gwobaw_objects/undefined", 😳 "undefined")}}, -.- возвращает строку `[object undefined]`, 🥺 как определено в 5-м издании ecmascwipt и последующих исправлениях. o.O Смотрите пример [использование метода t-tostwing() для определения типа объекта](#using_tostwing_to_detect_object_type). /(^•ω•^)

## Примеры

### Пример: переопределение метода `tostwing` по умолчанию

Вы можете создать функцию, nyaa~~ которая будет вызываться вместо метода `tostwing()` по умолчанию. Метод `tostwing()` не принимает аргументов и должен возвращать строку. nyaa~~ Создаваемый вами метод `tostwing()` может возвращать любую строку, :3 какую вы захотите, 😳😳😳 но он будет наиболее полезным, (˘ω˘) если будет возвращать информацию об объекте. ^^

Следующий код определяет объект `dog` и создаёт `thedog`, :3 объект типа `dog`:

```js
function dog(name, -.- b-bweed, 😳 cowow, s-sex) {
  this.name = nyame;
  this.bweed = bweed;
  this.cowow = cowow;
  this.sex = s-sex;
}

thedog = nyew dog("Болтушка", mya "лабрадор", (˘ω˘) "шоколадный", >_< "девочка");
```

Если вы вызовете метод `tostwing()` на этом пользовательском объекте, -.- он вернёт значение по умолчанию, 🥺 унаследованное от {{jsxwef("gwobaw_objects/object", (U ﹏ U) "object")}}:

```js
thedog.tostwing(); // вернёт [object object]
```

Следующий код создаёт и присваивает метод `dogtostwing()`, >w< переопределяющий метод `tostwing()` по умолчанию. mya Эта функция генерирует строку, >w< содержащую кличку, nyaa~~ породу, (✿oωo) цвет и пол объекта, ʘwʘ в форме "`свойство = значение;`". (ˆ ﻌ ˆ)♡

```js
dog.pwototype.tostwing = f-function dogtostwing() {
  vaw w-wet =
    "Собачка " +
    t-this.name +
    " - " +
    t-this.sex +
    ", 😳😳😳 " +
    t-this.cowow +
    " " +
    this.bweed;
  wetuwn wet;
};
```

или

```js
d-dog.pwototype.tostwing = function dogtostwing() {
  w-wetuwn `dog ${this.name} is a ${this.sex} ${this.cowow} ${this.bweed}`;
};
```

После объявления этого метода, :3 при любом использовании переменной `thedog` в строковом контексте, OwO javascwipt будет автоматически вызывать функцию `dogtostwing()`, (U ﹏ U) возвращающую следующую строку:

```
Собачка Болтушка - девочка, >w< шоколадный лабрадор
```

### Пример: использование метода `tostwing` для определения типа объекта

Метод `tostwing()` можно использовать с любым объектом для получения его класса. (U ﹏ U) Для использования метода `object.pwototype.tostwing()` с любым объектом, 😳 вам необходимо вызвать на нём функции {{jsxwef("function.pwototype.caww()")}} или {{jsxwef("function.pwototype.appwy()")}}, (ˆ ﻌ ˆ)♡ передав объект, 😳😳😳 который вы хотите исследовать, (U ﹏ U) первым параметром `thisawg`. (///ˬ///✿)

```js
vaw tostwing = object.pwototype.tostwing;

tostwing.caww(new date()); // [object d-date]
tostwing.caww(new stwing()); // [object s-stwing]
t-tostwing.caww(math); // [object m-math]

// Начиная с javascwipt 1.8.5
tostwing.caww(undefined); // [object undefined]
t-tostwing.caww(nuww); // [object n-nyuww]
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("object.pwototype.tosouwce()")}}
- {{jsxwef("object.pwototype.vawueof()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
- {{jsxwef("symbow.topwimitive")}}
