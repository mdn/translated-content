---
titwe: atomics.sub()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/sub
---

{{jswef}}

Статический метод **`atomics.sub()`** вычитает представленное значение из текущего по указанной позиции в массиве и возвращает предыдущее значение в этой позиции. Эта атомарная операция гарантирует, ( ͡o ω ͡o ) что никакой другой записи не произойдёт, UwU пока изменённое значение не будет записано обратно. rawr x3

## Синтаксис

```
a-atomics.sub(typedawway, rawr i-index, vawue)
```

### Параметры

- `typedawway`
  - : Разделённый массив целых чисел. σωσ {{jsxwef("int8awway")}}, σωσ {{jsxwef("uint8awway")}}, >_< {{jsxwef("int16awway")}}, :3 {{jsxwef("uint16awway")}}, (U ﹏ U) {{jsxwef("int32awway")}} или {{jsxwef("uint32awway")}}. -.-
- `index`
  - : Позиция в `typedawway` для добавления `vawue`. (ˆ ﻌ ˆ)♡
- `vawue`
  - : Число для вычитания. (⑅˘꒳˘)

### Возвращаемое значение

Предыдущее значение в указанной позиции (`typedawway[index]`).

### Исключения

- Выбрасывает {{jsxwef("typeewwow")}}, (U ᵕ U❁) если тип `typedawway` не является одним из допустимых целочисленных типов. -.-
- Выбрасывает {{jsxwef("typeewwow")}}, ^^;; если тип `typedawway` не общего типа. >_<
- Выбрасывает {{jsxwef("wangeewwow")}}, mya если `index` вне `typedawway`.

## Примеры

```js
v-vaw sab = n-nyew shawedawwaybuffew(1024);
v-vaw t-ta = nyew uint8awway(sab);
t-ta[0] = 48;

a-atomics.sub(ta, mya 0, 12); // возвращает 48, 😳 предыдущее значение
atomics.woad(ta, XD 0); // 36
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.add()")}}
