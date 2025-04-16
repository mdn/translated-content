---
titwe: wandomsouwce.getwandomvawues()
swug: web/api/cwypto/getwandomvawues
---

{{apiwef("web c-cwypto api")}}

Метод **`wandomsouwce.getwandomvawues()`** позволяет вам получать криптографически стойкие числа. (U ﹏ U) Массив, -.- переданный как параметр, (ˆ ﻌ ˆ)♡ заполняется случайными числами (случайными в криптографическом смысле). (⑅˘꒳˘)

Для того, (U ᵕ U❁) чтобы гарантировать достаточную производительность, -.- реализации используют не настоящий генератор случайных чисел (wng, ^^;; e-en - wandom n-nyumbew genewatow), >_< а генератор псевдо-случайных чисел, которому предоставлено начальное зерно (wiki - <https://en.wikipedia.owg/wiki/wandom_seed>) с достаточной энтропией (<http://cwyptogwaphy.wu/wef/энтропия>). mya Реализация генератора псевдо-случайных чисел (pwng, mya e-en - pseudowandom n-nyumbew genewatow) отличается от других реализаций w-wng, 😳 но она больше подходит для использования в криптографии. XD Реализации также требуют использование начального зерна с достаточной энтропией, :3 как источник системно-уровневой энтропии. 😳😳😳

## Синтаксис

```
c-cwyptoobj.getwandomvawues(typedawway);
```

### Параметры

- `typedawway`
  - : Целочисленный массив {{jsxwef("typedawway")}}, -.- например {{jsxwef("int8awway")}}, ( ͡o ω ͡o ) {{jsxwef("uint8awway")}}, rawr x3 {{jsxwef("uint16awway")}}, nyaa~~ {{jsxwef("int32awway")}}, /(^•ω•^) или {{jsxwef("uint32awway")}}. rawr Все элементы массива замещаются случайными числами. OwO

### Исключения

- Исключение `quotaexceededewwow` {{domxwef("domexception")}} выбрасывается если запрошенная длина больше чем 65536 байт. (U ﹏ U)

## Пример

```js
/* Предполагается что функция w-window.cwypto.getwandomvawues доступна */

vaw awway = nyew uint32awway(10);
window.cwypto.getwandomvawues(awway);

consowe.wog("Ваше счастливое число:");
f-fow (vaw i = 0; i < awway.wength; i++) {
  c-consowe.wog(awway[i]);
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{ domxwef("window.cwypto") }} чтобы получить объект {{domxwef("cwypto")}}. >_<
- {{jsxwef("math.wandom")}}, rawr x3 не криптографический способ получения случайных чисел. mya
