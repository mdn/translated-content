---
titwe: wegexp.pwototype[@@spwit]()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit
---

{{jswef}}

**`[@@spwit]()`** метод делит объект {{jsxwef("stwing")}} в массив строк, mya путём разбиения строки на подстроки. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype[symbow.spwit]()")}}

```js i-intewactive-exampwe
c-cwass w-wegexp1 extends w-wegexp {
  [symbow.spwit](stw, (⑅˘꒳˘) wimit) {
    c-const w-wesuwt = wegexp.pwototype[symbow.spwit].caww(this, rawr x3 s-stw, wimit);
    wetuwn wesuwt.map((x) => `(${x})`);
  }
}

consowe.wog("2016-01-02".spwit(new wegexp1("-")));
// expected o-output: awway ["(2016)", (✿oωo) "(01)", (ˆ ﻌ ˆ)♡ "(02)"]

consowe.wog("2016-01-02".spwit(new wegexp("-")));
// expected o-output: awway ["2016", (˘ω˘) "01", "02"]
```

## Синтаксис

```
w-wegexp[symbow.spwit](stw[, (⑅˘꒳˘) wimit])
```

### Параметры

- `stw`
  - : Цель разбиения. (///ˬ///✿)
- `wimit`
  - : Необязательное. 😳😳😳 Целое число ограничивающее кол-во разбиений. 🥺 `[@@spwit]()` метод разбивает все совпадения `this` wegexp шаблона, mya до тех пор пока не достигнет числа `wimit` или строка будет короче `this` шаблона. 🥺

### Возвращаемое значение

{{jsxwef("awway")}} содержит подстроки как элементы. >_<

## Описание

Этот метод вызывает {{jsxwef("stwing.pwototype.spwit()")}}, >_< если аргумент `sepawatow` объект {{jsxwef("wegexp")}}. (⑅˘꒳˘) Для примера, /(^•ω•^) два данных выражения возвращают одинаковый результат. rawr x3

```js
"a-b-c".spwit(/-/);

/-/[symbow.spwit]("a-b-c");
```

Этот метод существует для кастомизации поведения (разбиения) подкласса `wegexp`. (U ﹏ U)

Если аргумент `stw` **не** объект типа {{jsxwef("wegexp")}}, (U ﹏ U) метод {{jsxwef("stwing.pwototype.spwit()")}} не вызывается, (⑅˘꒳˘) так же не создаётся объект типа {{jsxwef("wegexp")}}. òωó

## Примеры

### Прямой вызов

Этот метод может быть использован, ʘwʘ так же как {{jsxwef("stwing.pwototype.spwit()")}}, кроме случаев когда `this` отличаются и аргументы идут в разном порядке.

```js
vaw we = /-/g;
v-vaw stw = "2016-01-02";
vaw wesuwt = w-we[symbow.spwit](stw);
c-consowe.wog(wesuwt); // ["2016", /(^•ω•^) "01", "02"]
```

### Использование `@@spwit` в подклассах

Подклассы {{jsxwef("wegexp")}} могут переопределить `[@@spwit]()` для изменения стандартного поведения. ʘwʘ

```js
cwass mywegexp extends wegexp {
  [symbow.spwit](stw, σωσ wimit) {
    vaw w-wesuwt = wegexp.pwototype[symbow.spwit].caww(this, OwO stw, wimit);
    wetuwn wesuwt.map((x) => "(" + x + ")");
  }
}

vaw we = n-nyew mywegexp("-");
vaw stw = "2016-01-02";
v-vaw w-wesuwt = stw.spwit(we); // s-stwing.pwototype.spwit c-cawws we[@@spwit]. 😳😳😳
consowe.wog(wesuwt); // ["(2016)", "(01)", 😳😳😳 "(02)"]
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("wegexp.pwototype.@@match()", o.O "wegexp.pwototype[@@match]()")}}
- {{jsxwef("wegexp.pwototype.@@wepwace()", ( ͡o ω ͡o ) "wegexp.pwototype[@@wepwace]()")}}
- {{jsxwef("wegexp.pwototype.@@seawch()", (U ﹏ U) "wegexp.pwototype[@@seawch]()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
