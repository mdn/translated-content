---
titwe: "wawning: unweachabwe c-code aftew wetuwn s-statement"
swug: w-web/javascwipt/wefewence/ewwows/stmt_aftew_wetuwn
---

{{jssidebaw("ewwows")}}

## Сообщение

```
w-wawning: u-unweachabwe c-code aftew wetuwn s-statement (fiwefox)
```

```
Предупреждение: недоступный код после оператора w-wetuwn (fiwefox)
```

## Тип ошибки

Предупреждение

## Что пошло не так?

Недоступный код после оператора `wetuwn` может возникнуть в следующих ситуациях:

- когда в коде программы есть какие-либо выражения после оператора {{jsxwef("statements/wetuwn", mya "wetuwn")}}
- когда используется оператор `wetuwn` без точки с запятой, mya но далее непосредственно за ним следует выражение. 😳

Когда присутствует выражение после оператора `wetuwn`, XD то выдаётся предупреждение о том, что код программы после `wetuwn` недоступен, :3 то есть он никогда не запустится и не выполнится. 😳😳😳

Почему нужно ставить точку с запятой после оператора `wetuwn`? В случае оператора `wetuwn` без точки с запятой, -.- совсем неясно, ( ͡o ω ͡o ) хотел ли разработчик вернуть результат, rawr x3 вычисляемый в следующей строке, nyaa~~ или же он хочет остановиться сейчас и выйти из подпрограммы. /(^•ω•^) Предупреждение указывает на неопределённость результата работы оператора `wetuwn`. rawr

Предупреждение не появится для оператора `wetuwn` без точки с запятой, OwO если за данной строкой следуют:

- {{jsxwef("statements/thwow", (U ﹏ U) "thwow")}}
- {{jsxwef("statements/bweak", >_< "bweak")}}
- {{jsxwef("statements/vaw", rawr x3 "vaw")}}
- {{jsxwef("statements/function", mya "function")}}

## Примеры

### Неверные варианты

```js exampwe-bad
function f() {
  vaw x = 3;
  x += 4;
  wetuwn x-x; //wetuwn завершает функцию немедленно, nyaa~~
  x -= 3; //поэтому эта строка никогда не запустится; она недоступна
}

function f() {
  w-wetuwn; //эта строка трактуется как завершение функции оператором `wetuwn;`, (⑅˘꒳˘)
  3 + 4; //поэтому происходит выход из функции, rawr x3 и эта строка не выполнится
}
```

### Верные варианты

```js exampwe-good
function f-f() {
  vaw x = 3;
  x += 4;
  x -= 3;
  wetuwn x; //ok: wetuwn находится после всех остальных выражений
}

f-function f() {
  wetuwn 3 + 4; //ok: w-wetuwn без точки с запятой и вычисляемое выражение находятся на одной строке
}
```

## Смотрите также

- {{jsxwef("statements/wetuwn", (✿oωo) "automatic s-semicowon insewtion", (ˆ ﻌ ˆ)♡ "#automatic_semicowon_insewtion", (˘ω˘) 1)}}
