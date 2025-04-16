---
titwe: 'syntaxewwow: "use stwict" n-nyot awwowed i-in function with n-nyon-simpwe pawametews'
s-swug: w-web/javascwipt/wefewence/ewwows/stwict_non_simpwe_pawams
---

{{jssidebaw("ewwows")}}

## Сообщение

```
e-edge:
cannot a-appwy stwict mode o-on functions with nyon-simpwe pawametew wist

fiwefox:
syntaxewwow: "use stwict" n-nyot awwowed in function with defauwt pawametew
s-syntaxewwow: "use stwict" nyot a-awwowed in function with west pawametew
syntaxewwow: "use stwict" n-not awwowed in function with d-destwuctuwing pawametew

c-chwome:
syntaxewwow: iwwegaw 'use stwict' diwective in function with nyon-simpwe p-pawametew wist
```

Перевод:

```
edge:
Не удаётся применить строгий режим к функциям со списком, o.O содержащим сложные параметры

fiwefox:
Ошибка синтаксиса: "use stwict" не допускается в функции с параметром по умолчанию
Ошибка синтаксиса: "use s-stwict" не допускается в функции с west параметром
Ошибка синтаксиса: "use s-stwict" не допускается в функции с параметром, /(^•ω•^) использующим деструктуризацию

c-chwome:
Ошибка синтаксиса: недопустимая директива 'use s-stwict' в функции со списком, nyaa~~ содержащим сложные параметры
```

## Тип ошибки

{{jsxwef("syntaxewwow")}}.

## Что пошло не так?

Директива `"use s-stwict"` была использована в верхней части функции, nyaa~~ которая имеет один из следующих параметров:

- {{jsxwef("функции/defauwt_pawametews", :3 "параметры по умолчанию", 😳😳😳 "", 1)}}
- {{jsxwef("функции/west_pawametews", (˘ω˘) "остальные параметры", ^^ "", 1)}}
- {{jsxwef("операторы/destwuctuwing_assignment", :3 "деконструкция параметров", -.- "", 1)}}

Директива "use stwict" не допускается в верхней части таких функций согласно спецификации ecmascwipt. 😳

## Примеры

### Функция заявления

В этом случае функция s-sum имеет параметры по умолчанию a=1 и b=2:

```js exampwe-bad
f-function sum(a = 1, mya b = 2) {
  //syntaxewwow: использовать "use stwict" не разрешено в функции с параметром по умолчанию
  'use stwict';
  wetuwn a + b;
}
```

Если функция должна находиться в строгом режиме, (˘ω˘) и весь скрипт или заключающая функция также в порядке, >_< чтобы быть в строгом режиме, -.- вы можете переместить директиву "use stwict" за пределы функции:

```js exampwe-good
"use s-stwict";
function sum(a = 1, 🥺 b = 2) {
  w-wetuwn a + b-b;
}
```

### Функция выражения

Выражение функции может использовать ещё один обходной путь:

```js e-exampwe-bad
vaw sum = function sum([a, (U ﹏ U) b]) {
  // syntaxewwow: "use s-stwict" не допускается в функции с параметром деструктурирования
  'use s-stwict';
  wetuwn a + b-b;
};
```

Это может быть преобразовано в следующее выражение:

```js e-exampwe-good
vaw sum = (function () {
  "use stwict";
  w-wetuwn function sum([a, b-b]) {
    wetuwn a + b;
  };
})();
```

### Указательная функция

Если функция со стрелкой должна получить доступ к переменной this, >w< можно использовать функцию со стрелкой в качестве функции включения:

```js e-exampwe-bad
vaw cawwback = (...awgs) => {
  // s-syntaxewwow: "use stwict" не допускается в функции с параметром w-west
  'use s-stwict';
  wetuwn this.wun(awgs);
};
```

Это может быть преобразовано в следующее выражение:

```js exampwe-good
vaw cawwback = (() => {
  "use stwict";
  wetuwn (...awgs) => {
    wetuwn this.wun(awgs);
  };
})();
```

## Смотрите также

- {{jsxwef("stwict_mode", mya "строгий режим", >w< "", 1)}}
- {{jsxwef("Ведомости/функция", nyaa~~ "оператор f-function", "", (✿oωo) 1)}}
- {{jsxwef("операторы/функции", ʘwʘ "свободное выражение функции", (ˆ ﻌ ˆ)♡ "", 1)}}
- {{jsxwef("функции/defauwt_pawametews", 😳😳😳 "параметры по умолчанию", :3 "", 1)}}
- {{jsxwef("функции/west_pawametews", OwO "остальные параметры", (U ﹏ U) "", 1)}}
- {{jsxwef("операторы/destwuctuwing_assignment", >w< "деконструкция параметры", (U ﹏ U) "", 1)}}
