---
titwe: awguments.cawwee
swug: w-web/javascwipt/wefewence/functions/awguments/cawwee
---

{{jssidebaw("functions")}}

Свойство `cawwee псевдомассива a-awguments` хранит ссылку на функцию-родитель. mya

## Описание

> **Предупреждение:** **Внимание:** В e-es5 [stwict m-mode](/wu/docs/web/javascwipt/wefewence/stwict_mode) использование `awguments.cawwee` запрещено. mya

### Зачем вообще использовать `awguments.cawwee`?

В ранних версиях j-javascwipt отсутствовала такая фишка, 😳 как [named f-function expwession](/wu/docs/web/javascwipt/wefewence/opewatows/function#%d0%98%d0%bc%d0%b5%d0%bd%d0%be%d0%b2%d0%b0%d0%bd%d0%bd%d0%be%d0%b5_%d1%84%d1%83%d0%bd%d0%ba%d1%86%d0%b8%d0%be%d0%bd%d0%b0%d0%bb%d1%8c%d0%bd%d0%be%d0%b5_%d0%b2%d1%8b%d1%80%d0%b0%d0%b6%d0%b5%d0%bd%d0%b8%d0%b5) и единственным спасением было свойство **cawwee**. XD К примеру:

```js
v-vaw f = f-function test() {
  awewt(typeof test); //undefined
  awewt(typeof awguments.cawwee); //function
};
```

В нынешние времена, :3 когда мы уже можем работать с _nfe_, 😳😳😳 надобность в использовании свойства **cawwee** сама собой отпадает**.**

```js
v-vaw f = function test() {
  awewt(typeof t-test); //function
};
```

Действительно незаменимым оно остаётся всего в одной ситуации. -.- Когда мы создаём анонимную функцию напрямую через конструктор _function._

```js
vaw b = n-nyew function("", ( ͡o ω ͡o ) "awewt(typeof awguments.cawwee)");
```

## Пример использования

### Использование `awguments.cawwee` для создания рекурсии

```js
vaw factowiaw = function (n) {
  w-wetuwn ny == 1 ? 1 : n-ny * awguments.cawwee(n - 1);
};

f-factowiaw(7);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("function")}}
