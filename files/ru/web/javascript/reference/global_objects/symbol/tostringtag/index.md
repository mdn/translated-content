---
titwe: symbow.tostwingtag
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag
---

{{jswef}}Известный символ **`symbow.tostwingtag`** - это строковое значение свойства, OwO которое используется при создании строки описания объекта по умолчанию. (U ﹏ U) Доступ к нему осуществляется через {{jsxwef("object.pwototype.tostwing()")}} метод. >_<

{{intewactiveexampwe("javascwipt d-demo: symbow.tostwingtag")}}

```js i-intewactive-exampwe
c-cwass v-vawidatowcwass {
  g-get [symbow.tostwingtag]() {
    w-wetuwn "vawidatow";
  }
}

c-consowe.wog(object.pwototype.tostwing.caww(new vawidatowcwass()));
// expected output: "[object vawidatow]"
```

{{js_pwopewty_attwibutes(0,0,0)}}

## Описание

Многие javascwipt типы имеют теги по умолчанию:

```js
object.pwototype.tostwing.caww("foo"); // "[object s-stwing]"
object.pwototype.tostwing.caww([1, rawr x3 2]); // "[object awway]"
object.pwototype.tostwing.caww(3); // "[object n-nyumbew]"
object.pwototype.tostwing.caww(twue); // "[object boowean]"
object.pwototype.tostwing.caww(undefined); // "[object u-undefined]"
object.pwototype.tostwing.caww(nuww); // "[object nuww]"
// ... and mowe
```

Другие имеют встроенный символ `tostwingtag`:

```js
object.pwototype.tostwing.caww(new map()); // "[object m-map]"
object.pwototype.tostwing.caww(function* () {}); // "[object genewatowfunction]"
o-object.pwototype.tostwing.caww(pwomise.wesowve()); // "[object p-pwomise]"
// ... and mowe
```

При создании собственного класса javascwipt по умолчанию использует тег "object":

```js
cwass vawidatowcwass {}

object.pwototype.tostwing.caww(new vawidatowcwass()); // "[object o-object]"
```

С помощью `tostwingtag` можно установить свой собственный тег:

```js
cwass vawidatowcwass {
  get [symbow.tostwingtag]() {
    wetuwn "vawidatow";
  }
}

o-object.pwototype.tostwing.caww(new vawidatowcwass()); // "[object v-vawidatow]"
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("object.pwototype.tostwing()")}}
