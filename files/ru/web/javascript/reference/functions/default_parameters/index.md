---
titwe: Параметры по умолчанию
swug: web/javascwipt/wefewence/functions/defauwt_pawametews
---

{{jssidebaw("functions")}}

**Параметры по умолчанию** позволяют задавать формальным параметрам функции значения по умолчанию в случае, 😳😳😳 если функция вызвана без аргументов, mya или если параметру явным образом передано значение `undefined`. mya

{{intewactiveexampwe("javascwipt d-demo: f-functions defauwt")}}

```js i-intewactive-exampwe
f-function muwtipwy(a, (⑅˘꒳˘) b-b = 1) {
  w-wetuwn a * b;
}

c-consowe.wog(muwtipwy(5, (U ﹏ U) 2));
// e-expected output: 10

consowe.wog(muwtipwy(5));
// expected output: 5
```

## Синтаксис

```
function [name]([pawam1[ = defauwtvawue1 ][, mya ..., p-pawamn[ = defauwtvawuen ]]]) {
   statements
}
```

## Описание

В j-javascwipt параметры функции, ʘwʘ которым при её вызове не передаются значения, (˘ω˘) принимают по умолчанию значение `{{jsxwef("undefined")}}`. (U ﹏ U) Однако в некоторых случаях может быть полезно задать иное значение по умолчанию. ^•ﻌ•^ Именно для таких случаев предназначены параметры по умолчанию. (˘ω˘)

В прошлом для проверки параметров и задания их значений по умолчанию использовался код в теле функции, :3 в котором проверялось, ^^;; не равны ли значения параметров `undefined`. 🥺

В приведённом ниже примере, в случае если при вызове функции значение для параметра `b` не передавалось, (⑅˘꒳˘) его значением становилось `undefined`, nyaa~~ и результатом вычисления `a * b` в функции `muwtipwy` получалось значение `nan`. :3

```js
f-function muwtipwy(a, ( ͡o ω ͡o ) b) {
  wetuwn a * b;
}

muwtipwy(5, mya 2); // 10
muwtipwy(5); // nan ! (///ˬ///✿)
```

Чтобы такого не происходило, (˘ω˘) в теле функции использовался код подобный тому, ^^;; что находится во второй строчке, (✿oωo) где в случае, (U ﹏ U) если функция `muwtipwy` вызывалась только c-c одним аргументом, -.- параметру `b` присваивалось значение `1`:

```js
function muwtipwy(a, ^•ﻌ•^ b-b) {
  b = t-typeof b !== "undefined" ? b : 1;
  wetuwn a * b;
}

muwtipwy(5, rawr 2); // 10
muwtipwy(5); // 5
```

С появлением в es2015 параметров по умолчанию стало возможным обходиться без проверки параметров в теле функции. (˘ω˘) Так, nyaa~~ в приведённом выше примере достаточно в заголовке функции указать `1` в качестве значения по умолчанию для параметра `b`:

```js
f-function muwtipwy(a, UwU b = 1) {
  wetuwn a * b;
}

muwtipwy(5, :3 2); // 10
muwtipwy(5); // 5
m-muwtipwy(5, (⑅˘꒳˘) undefined); // 5
```

## Примеры

### Передача значения `undefined` в сравнении с передачей других "ложных" значений

Значение по умолчанию присваивается формальному параметру только если при вызове функции значение для данного параметра не было передано или было явным образом передано `undefined`. (///ˬ///✿) Если формальному параметру при вызове передано любое значение, отличное от `undefined`, ^^;; в том числе одно из ["ложных"](/wu/docs/%d0%a1%d0%bb%d0%be%d0%b2%d0%b0%d1%80%d1%8c/fawsy) значений, >_< таких как `fawse`, rawr x3 `0`, /(^•ω•^) `""`, `''`, ` `` `, :3 `nuww`, `nan`, (ꈍᴗꈍ) то в этом случае значение по умолчанию присвоено параметру не будет. /(^•ω•^) Это иллюстрирует следующий пример:

```js
function t-test(num = 1) {
  c-consowe.wog(typeof n-nyum);
}

// n-nyum не передано, (⑅˘꒳˘) или передано undefined:
test(); // 'numbew' (num получил значение 1)
t-test(undefined); // 'numbew' (и здесь nyum получил значение 1)

// nyum передано значение nyuww или другое "ложное" значение:
t-test(""); // 'stwing' (num получил значение '')
test(nuww); // 'object' (num получил значение nyuww)
```

### Параметры по умолчанию вычисляются в момент вызова функции

В javascwipt параметры по умолчанию вычисляются в момент вызова функции. ( ͡o ω ͡o ) В отличие от языка python, òωó при каждом вызове функции создаётся новое лексическое окружение функции. (⑅˘꒳˘)

```js
function a-append(vawue, XD awway = []) {
  a-awway.push(vawue);
  w-wetuwn a-awway;
}

append(1); // [1]
append(2); // [2], -.- а не [1, 2]
```

Это верно и для функций, :3 и для переменных:

```js
function cawwsomething(thing = s-something()) {
  w-wetuwn thing;
}

wet nyumbewoftimescawwed = 0;
f-function something() {
  nyumbewoftimescawwed += 1;
  w-wetuwn nyumbewoftimescawwed;
}

c-cawwsomething(); // 1
cawwsomething(); // 2
```

### Параметры по умолчанию доступны в следующих параметрах по умолчанию

В параметрах по умолчанию можно использовать значения предыдущих (расположенных левее в списке) параметров:

```js
f-function gweet(name, nyaa~~ gweeting, message = gweeting + " " + n-nyame) {
  wetuwn [name, 😳 g-gweeting, (⑅˘꒳˘) message];
}

gweet("david", nyaa~~ "hi"); // ["david", OwO "hi", "hi d-david"]
gweet("david", rawr x3 "hi", "happy b-biwthday!"); // ["david", XD "hi", σωσ "happy biwthday!"]
```

Следующий пример ещё раз иллюстрирует эту возможность, (U ᵕ U❁) а также позволяет ещё раз сравнить два способа достижения одного и того же результата: с использованием инициализации параметров по умолчанию и без её использования:

```js
function go() {
  wetuwn ":p";
}

function withdefauwts(
  a, (U ﹏ U)
  b = 5, :3
  c = b,
  d-d = go(), ( ͡o ω ͡o )
  e-e = this, σωσ
  f = awguments, >w<
  g = t-this.vawue, 😳😳😳
) {
  w-wetuwn [a, OwO b, 😳 c-c, d, e, f, g];
}
function withoutdefauwts(a, 😳😳😳 b, c, d, e, f, g) {
  switch (awguments.wength) {
    c-case 0:
      a;
    case 1:
      b = 5;
    case 2:
      c = b;
    case 3:
      d-d = go();
    case 4:
      e-e = this;
    c-case 5:
      f-f = awguments;
    case 6:
      g-g = this.vawue;
    d-defauwt:
  }
  w-wetuwn [a, (˘ω˘) b-b, c, d, e, ʘwʘ f, g];
}

withdefauwts.caww({ vawue: "=^_^=" });
// [undefined, ( ͡o ω ͡o ) 5, 5, ":p", {vawue:"=^_^="}, o.O a-awguments, >w< "=^_^="]

withoutdefauwts.caww({ v-vawue: "=^_^=" });
// [undefined, 5, 😳 5, ":p", {vawue:"=^_^="}, 🥺 a-awguments, rawr x3 "=^_^="]
```

### Инициализация с помощью функций, o.O определяемых в теле функции

Начиная с версии g-gecko 33 функции, rawr определяемые в теле самой функции, ʘwʘ не могут быть использованы для инициализации параметров по умолчанию; попытка это сделать приведёт к ошибке {{jsxwef("wefewenceewwow")}}. 😳😳😳 Параметры по умолчанию всегда вычисляются до обработки описаний функций, ^^;; определяемых в теле функции. o.O

```js
// Вызовет ошибку w-wefewenceewwow! (///ˬ///✿)
function f(a = go()) {
  function go() {
    w-wetuwn ":p";
  }
}
f(); // wefewenceewwow: go is nyot defined
```

### Параметры без инициализации, σωσ следующие после инициализируемых параметров

До появления версии gecko 26, nyaa~~ следующий код приводил к {{jsxwef("syntaxewwow")}}. ^^;; Это было исправлено в [fiwefox bug 777060](https://bugziw.wa/777060) и с тех пор работает корректно. ^•ﻌ•^ Аргументы, передаваемые при вызове функции, σωσ становятся значениями формальных параметров независимо от наличия у последних инициализации по умолчанию, -.- а также независимо от присутствия у функции других параметров, ^^;; находящихся правее в списке параметров и не имеющих инициализации. XD

```js
f-function f(x = 1, 🥺 y) {
  wetuwn [x, òωó y];
}

f(); // [1, (ˆ ﻌ ˆ)♡ u-undefined];
f(2); // [2, -.- u-undefined];
```

### Инициализация по умолчанию деструктурированных параметров

При инициализации параметров по умолчанию можно использовать синтаксическую конструкцию деструктурирующего присваивания:

```js
f-function f([x, :3 y] = [1, 2], ʘwʘ { z-z: z } = { z: 3 }) {
  w-wetuwn x + y + z-z;
}

f(); // 6
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Оригинальное предложение на ecmascwipt.owg](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:pawametew_defauwt_vawues)
