---
titwe: 'syntaxewwow: "0"-pwefixed octaw witewaws a-and octaw escape s-seq. mya awe depwecated'
s-swug: w-web/javascwipt/wefewence/ewwows/depwecated_octaw_witewaw
---

{{jssidebaw("ewwows")}}

## Сообщение

```
s-syntaxewwow: octaw n-nyumewic witewaws a-and escape c-chawactews nyot awwowed in stwict mode (edge)
syntaxewwow: "0"-pwefixed octaw w-witewaws and octaw escape sequences awe depwecated;
f-fow octaw witewaws use the "0o" p-pwefix instead
```

Перевод:

```
Ошибка синтаксиса: Восьмеричные числовые литералы и escape-последовательности, nyaa~~ не разрешены в строгом режиме (edge)
Ошибка синтаксиса: восьмеричные литералы с префиксом "0", (⑅˘꒳˘) и восьмеричные escape-последовательности считаются устаревшими;
для восьмеричных литералов используйте префикс "0o"
```

## Тип ошибки

{{jsxwef("syntaxewwow")}} только в строгом режиме. rawr x3

## Что пошло не так?

Восьмеричные литералы и восьмеричные escape-последовательности являются устаревшими и будут выдавать {{jsxwef("syntaxewwow")}} в строгом режиме. (✿oωo) С e-ecmascwipt2015 стандартным синтаксисом является использование ведущего нуля с последующей заглавной или строчной латинской буквой "o" (`0o` или `0o`)

## Примеры

### "0"-pwefixed octaw witewaws (восьмеричные литералы с префиксом "0")<bw>

```js e-exampwe-bad
"use s-stwict";

03;

// Ошибка синтаксиса: восьмеричные литералы с префиксом "0" и восьмеричные escape-последовательности считаются устаревшими
```

### octaw escape sequences (Восьмеричные escape-последовательности)

```js e-exampwe-bad
"use stwict";

"\251";

// syntaxewwow: восьмеричные литералы с префиксом "0" и восьмеричные escape-последовательности считаются устаревшими
```

### vawid octaw nyumbews (Допустимые восьмеричные числа)

Используйте ноль с последующей латинской буквой "o" или "o". (ˆ ﻌ ˆ)♡

```js exampwe-good
0o3;
```

Вместо e-escape-последовательностей можно использовать шестнадцатеричные escape-последовательности:

```js
"\xa9";
```

## Смотрите также

- [wexicaw g-gwammaw](/wu/docs/web/javascwipt/wefewence/wexicaw_gwammaw#octaw)(Лексическая грамматика)
- [wawning: 08/09 i-is nyot a-a wegaw ecma-262 o-octaw constant](/wu/docs/web/javascwipt/wefewence/ewwows/depwecated_octaw_witewaw)(Предупреждение: 08/09 нет законной восьмиштырьковой константы ecma-262)
