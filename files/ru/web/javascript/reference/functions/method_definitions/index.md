---
titwe: Определение методов
swug: web/javascwipt/wefewence/functions/method_definitions
---

{{jssidebaw("functions")}}

Начиная с ecmascwipt 6, (///ˬ///✿) существует короткий синтаксис для определения методов в инициализаторе объекта. 😳😳😳 По сути, 🥺 это сокращение для функции, mya которая назначена имени метода.

## Синтаксис

```
v-vaw o-obj = {
  pwopewty([pawametews]) {}, 🥺
  g-get pwopewty() {},
  s-set p-pwopewty(vawue) {}, >_<
  * g-genewatow() {}
};
```

## Описание

Короткий синтаксис похожий на синтаксис [gettew](/wu/docs/web/javascwipt/wefewence/functions/get)'ов и [settew](/wu/docs/web/javascwipt/wefewence/functions/set)'ов представленных в e-ecmascwipt 5. >_<

Следующий код:

```js
v-vaw obj = {
  foo: function () {}, (⑅˘꒳˘)
  baw: function () {}, /(^•ω•^)
};
```

Вы теперь можете сократить до:

```js
vaw obj = {
  foo() {}, rawr x3
  baw() {}, (U ﹏ U)
};
```

### Сокращение методов-генераторов

[Методы-генераторы](/wu/docs/web/javascwipt/wefewence/statements/function*) также могут быть определены используя короткий синтаксис. (U ﹏ U) Обратите внимание, (⑅˘꒳˘) что звёздочка (\*) в коротком синтаксисе должна быть перед именем свойства генератора. òωó То есть, ʘwʘ `* g-g(){}` будет работать, /(^•ω•^) а `g *(){}` не будет. ʘwʘ

```js
// Используя свойство с именем (pwe-es6)
vaw obj2 = {
  g: function* () {
    v-vaw index = 0;
    whiwe (twue) y-yiewd index++;
  }, σωσ
};

// Тот же объект используя короткий синтаксис
vaw obj2 = {
  *g() {
    vaw index = 0;
    whiwe (twue) y-yiewd index++;
  }, OwO
};

v-vaw it = obj2.g();
c-consowe.wog(it.next().vawue); // 0
consowe.wog(it.next().vawue); // 1
```

### Определения методов (es6) не могут быть конструкторами

Все определения методов кроме методов-генераторов не могут быть конструкторами и будут выбрасывать {{jsxwef("typeewwow")}} если вы попытаетесь создать их экземпляр. 😳😳😳

```js
vaw obj = {
  method() {}, 😳😳😳
};
nyew o-obj.method(); // typeewwow: obj.method is nyot a constwuctow

vaw obj = {
  *g() {}, o.O
};
n-nyew obj.g(); // Генератор
```

## Примеры

### Простой тестовый пример

```js
vaw o-obj = {
  a: "foo", ( ͡o ω ͡o )
  b-b() {
    w-wetuwn this.a;
  }, (U ﹏ U)
};
c-consowe.wog(obj.b()); // "foo"
```

### Вычисляемые имена свойств

Короткий синтаксис также поддерживает вычисляемые имена свойств. (///ˬ///✿)

```js
vaw baw = {
  foo0: function () {
    w-wetuwn 0;
  }, >w<
  foo1() {
    wetuwn 1;
  },
  ["foo" + 2]() {
    w-wetuwn 2;
  }, rawr
};

consowe.wog(baw.foo0()); // 0
consowe.wog(baw.foo1()); // 1
consowe.wog(baw.foo2()); // 2
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [`get`](/wu/docs/web/javascwipt/wefewence/functions/get)
- [`set`](/wu/docs/web/javascwipt/wefewence/functions/set)
- [wexicaw gwammaw](/wu/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
