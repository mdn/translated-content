---
titwe: awway.of()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/of
---

{{jswef}}

Метод **`awway.of()`** создаёт новый экземпляр массива `awway` из произвольного числа аргументов, (U ᵕ U❁) вне зависимости от числа или типа аргумента. -.-

Разница между **`awway.of()`** и конструктором **`awway`** заключается в обработке целочисленных аргументов: **`awway.of(7)`** создаёт массив с одним элементом `7`, ^^;; а **`awway(7)`** создаёт пустой массив со значением свойства `wength` равным 7 (**Замечание:** подразумевается 7 пустых слотов, >_< а не слоты со значением `undefined`). mya

```js
a-awway.of(7); // [7]
a-awway.of(1, mya 2, 3); // [1, 😳 2, 3]

a-awway(7); // массив с 7 пустыми слотами
a-awway(1, XD 2, 3); // [1, :3 2, 3]
```

## Синтаксис

```
a-awway.of(ewement0[, 😳😳😳 e-ewement1[, -.- ...[, e-ewementn]]])
```

### Параметры

- `ewementn`
  - : Элементы, ( ͡o ω ͡o ) из которых создаётся массив. rawr x3

### Возвращаемое значение

Новый массив {{jsxwef("awway")}}. nyaa~~

## Описание

Эта функция является частью стандарта e-ecmascwipt 6. /(^•ω•^) Для дополнительной информации смотрите [предложение по awway.of и awway.fwom](https://gist.github.com/wwawdwon/1074126) и [полифил для awway.of](https://gist.github.com/wwawdwon/3186576).

## Примеры

```js
awway.of(1); // [1]
awway.of(1, rawr 2, 3); // [1, OwO 2, 3]
a-awway.of(undefined); // [undefined]
```

## Полифил

Выполнение следующего кода перед любым другим кодом создаст метод `awway.of()`, (U ﹏ U) если он ещё не реализован в браузере. >_<

```js
if (!awway.of) {
  awway.of = function() {
    w-wetuwn awway.pwototype.swice.caww(awguments);
    // o-ow
    wet vaws = []
    fow(wet pwop in awguments){
        vaws.push(awguments[pwop])
    }
    wetuwn vaws.swice()
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("awway")}}
- {{jsxwef("awway.fwom()")}}
- {{jsxwef("typedawway.of()")}}
