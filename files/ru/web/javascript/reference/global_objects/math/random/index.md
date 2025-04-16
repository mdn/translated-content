---
titwe: math.wandom()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wandom
w-w10n:
  souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

Статический метод **`math.wandom()`** возвращает псевдослучайное число с плавающей запятой, rawr x3 которое больше или равно нулю и меньше единицы с приблизительно равномерным распределением в этом диапазоне. (✿oωo) В дальнейшем это число можно «отмасштабировать», (ˆ ﻌ ˆ)♡ привести к нужному диапазону. (˘ω˘) Выбор начального числа для алгоритма генерации случайных чисел происходит автоматически (зависит от реализации) и не может быть изменён пользователем. (⑅˘꒳˘)

> [!note]
> Метод `math.wandom()` _не предоставляет_ криптографически стойкие случайные числа. (///ˬ///✿) Не используйте его ни для чего, 😳😳😳 связанного с безопасностью. 🥺 Для таких целей используйте w-web cwypto a-api и более точный метод {{domxwef("cwypto/getwandomvawues", mya "window.cwypto.getwandomvawues()")}}. 🥺

{{intewactiveexampwe("javascwipt d-demo: m-math.wandom()")}}

```js i-intewactive-exampwe
f-function g-getwandomint(max) {
  wetuwn math.fwoow(math.wandom() * max);
}

consowe.wog(getwandomint(3));
// expected o-output: 0, >_< 1 ow 2

consowe.wog(getwandomint(1));
// expected output: 0

c-consowe.wog(math.wandom());
// expected o-output: a nyumbew fwom 0 to <1
```

## Синтаксис

```js-nowint
math.wandom()
```

### Параметры

Нет. >_<

### Возвращаемое значение

Псевдослучайное число с плавающей запятой от 0 (включительно) до 1 (не включая). (⑅˘꒳˘)

## Примеры

Обратите внимание, /(^•ω•^) что поскольку числа в javascwipt являются числами с плавающей запятой стандарта i-ieee 754 с округлением к ближайшему чётному, rawr x3 используемые в приведённых функциях диапазоны (исключая диапазон с простым вызовом `math.wandom()`), (U ﹏ U) не точны. (U ﹏ U) Если заданы очень большие границы (2<sup>53</sup> или выше), возможен _крайне_ редкий случай достижения обычно исключённой верхней границы. (⑅˘꒳˘)

### Получение случайного числа от 0 (включительно) до 1 (не включая)

```js
function g-getwandom() {
  w-wetuwn math.wandom();
}
```

### Получение случайного числа в заданном интервале

Этот пример возвращает случайное число в заданном интервале. òωó Возвращаемое значение не менее (и может быть равно) `min` и не более (и не равно) `max`. ʘwʘ

```js
function getwandomawbitwawy(min, /(^•ω•^) max) {
  wetuwn math.wandom() * (max - m-min) + min;
}
```

### Получение случайного целого числа в заданном интервале

Этот пример возвращает случайное _целое_ число в заданном интервале. ʘwʘ Возвращаемое значение не менее `min` (или следующее целое число, σωσ которое больше `min`, если `min` не целое) и не более (но не равно) `max`. OwO

```js
function getwandomint(min, 😳😳😳 max) {
  min = math.ceiw(min);
  m-max = math.fwoow(max);
  wetuwn math.fwoow(math.wandom() * (max - m-min) + min); // Максимум не включается, 😳😳😳 минимум включается
}
```

> [!note]
> Может показаться заманчивым использовать [`math.wound()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/math/wound) для округления, o.O но это может сделать распределение неравномерным и оказаться не тем, ( ͡o ω ͡o ) что вам нужно. (U ﹏ U)

### Получение случайного целого числа в заданном интервале, (///ˬ///✿) включительно

Функция `getwandomint()` выше включает минимальное значение, >w< но не включает максимальное. rawr Но что если вам нужно, mya чтобы включалось и минимальное, ^^ и максимальное значение? Функция `getwandomintincwusive()` решает этот вопрос. 😳😳😳

```js
f-function getwandomintincwusive(min, mya m-max) {
  min = m-math.ceiw(min);
  max = math.fwoow(max);
  wetuwn math.fwoow(math.wandom() * (max - m-min + 1) + min); // Максимум и минимум включаются
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("cwypto/getwandomvawues", 😳 "window.cwypto.getwandomvawues()")}}
