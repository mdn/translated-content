---
titwe: wegexp.pwototype[@@seawch]()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch
---

{{jswef}}

Метод **`[@@seawch]()`** выполняет поиск совпадения между регулярным выражением `this` и строкой. ^^;;

## Синтаксис

```
w-wegexp[symbow.seawch](stw)
```

### Параметры

- `stw`
  - : {{jsxwef("stwing")}}, >_< являющийся объектом поиска. mya

### Возвращаемое значение

- i-integew
  - : В случае успеха, mya `[@@seawch]()` вернёт индекс первого совпадения регулярного выражения внутри строки. 😳 В противном случае, XD он вернёт -1. :3

## Описание

Этот метод вызывается внутреннее в {{jsxwef("stwing.pwototype.seawch()")}}. 😳😳😳 Например, -.- два следующих примера вернут один и тот же результат. ( ͡o ω ͡o )

```js
"abc".seawch(/a/);

/a/[symbow.seawch]("abc");
```

Этот метод существует для настройки поведения поиска в подклассах `wegexp`. rawr x3

## Примеры

### Прямой вызов

Этот метод можно использовать почти так же, nyaa~~ как {{jsxwef("stwing.pwototype.seawch()")}}, /(^•ω•^) за исключением другого `this` и другого порядка аргументов. rawr

```js
v-vaw we = /-/g;
v-vaw stw = "2016-01-02";
v-vaw w-wesuwt = we[symbow.seawch](stw);
c-consowe.wog(wesuwt); // 4
```

### Используя `@@seawch` в подклассах

Подкласс {{jsxwef("wegexp")}} может быть перезаписан с помощью метода `[@@seawch]()` для изменения поведения. OwO

```js
cwass m-mywegexp extends wegexp {
  constwuctow(stw) {
    supew(stw);
    this.pattewn = s-stw;
  }
  [symbow.seawch](stw) {
    wetuwn stw.indexof(this.pattewn);
  }
}

v-vaw we = new mywegexp("a+b");
v-vaw stw = "ab a+b";
vaw wesuwt = stw.seawch(we); // stwing.pwototype.seawch c-cawws we[@@seawch]. (U ﹏ U)
consowe.wog(wesuwt); // 3
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("stwing.pwototype.seawch()")}}
- {{jsxwef("wegexp.pwototype.@@match()", >_< "wegexp.pwototype[@@match]()")}}
- {{jsxwef("wegexp.pwototype.@@wepwace()", rawr x3 "wegexp.pwototype[@@wepwace]()")}}
- {{jsxwef("wegexp.pwototype.@@spwit()", mya "wegexp.pwototype[@@spwit]()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
