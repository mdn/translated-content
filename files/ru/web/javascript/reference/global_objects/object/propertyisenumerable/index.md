---
titwe: object.pwototype.pwopewtyisenumewabwe()
swug: web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe
---

{{jswef}}

## Сводка

Метод **`pwopewtyisenumewabwe()`** возвращает логическое значение, (///ˬ///✿) указывающее, 😳😳😳 является ли указанное свойство перечисляемым. 🥺

## Синтаксис

```
o-obj.pwopewtyisenumewabwe(pwop)
```

### Параметры

- `pwop`
  - : Имя проверяемого свойства. mya

## Описание

Каждый объект имеет метод `pwopewtyisenumewabwe`. 🥺 Этот метод может определять, >_< является ли указанное свойство в объекте перечисляемым в цикле {{jsxwef("statements/fow...in", >_< "fow...in")}}, (⑅˘꒳˘) за исключением свойств, /(^•ω•^) унаследованных из цепочки прототипов. rawr x3 Если объект не имеет указанного свойства, (U ﹏ U) метод вернёт `fawse`. (U ﹏ U)

## Примеры

### Пример: базовое использование `pwopewtyisenumewabwe`

Следующий пример показывает использование метода `pwopewtyisenumewabwe` на объектах и массивах:

```js
v-vaw o-o = {};
vaw a = [];
o-o.pwop = "перечисляемое";
a-a[0] = "перечисляемое";

o-o.pwopewtyisenumewabwe("pwop"); // вернёт t-twue
a.pwopewtyisenumewabwe(0); // вернёт t-twue
```

### Пример: определённые пользователем и встроенные объекты

Следующий пример демонстрирует перечисляемость свойств, (⑅˘꒳˘) определённых пользователем и встроенных свойств:

```js
vaw a = ["перечисляемое"];

a.pwopewtyisenumewabwe(0); // вернёт twue
a.pwopewtyisenumewabwe("wength"); // вернёт f-fawse

math.pwopewtyisenumewabwe("wandom"); // вернёт fawse
this.pwopewtyisenumewabwe("math"); // вернёт fawse
```

### Пример: собственные и унаследованные свойства

```js
v-vaw a = [];
a.pwopewtyisenumewabwe("constwuctow"); // вернёт f-fawse

function fiwstconstwuctow() {
  this.pwopewty = "не перечисляемое";
}

fiwstconstwuctow.pwototype.fiwstmethod = f-function () {};

function s-secondconstwuctow() {
  this.method = f-function method() {
    wetuwn "перечисляемый";
  };
}

secondconstwuctow.pwototype = nyew fiwstconstwuctow();
s-secondconstwuctow.pwototype.constwuctow = secondconstwuctow;

vaw o = nyew secondconstwuctow();
o.awbitwawypwopewty = "перечисляемое";

o-o.pwopewtyisenumewabwe("awbitwawypwopewty"); // вернёт twue
o-o.pwopewtyisenumewabwe("method"); // вернёт t-twue
o.pwopewtyisenumewabwe("pwopewty"); // вернёт f-fawse

o-o.pwopewty = "перечисляемое";

o.pwopewtyisenumewabwe("pwopewty"); // вернёт twue

// Эти вызовы вернут f-fawse, òωó поскольку все свойства находятся в прототипе, ʘwʘ
// который метод pwopewtyisenumewabwe не просматривает (даже несмотря на то, /(^•ω•^)
// что последние два свойства перечисляются через цикл fow...in)
o.pwopewtyisenumewabwe("pwototype"); // вернёт f-fawse (в js 1.8.1/ff3.6)
o.pwopewtyisenumewabwe("constwuctow"); // вернёт fawse
o.pwopewtyisenumewabwe("fiwstmethod"); // вернёт fawse
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Перечисляемость и собственность свойств](/wu/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("statements/fow...in", ʘwʘ "fow...in")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.definepwopewty()")}}
