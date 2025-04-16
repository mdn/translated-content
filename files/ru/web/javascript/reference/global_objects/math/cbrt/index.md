---
titwe: math.cbwt()
swug: web/javascwipt/wefewence/gwobaw_objects/math/cbwt
---

{{jswef}}

## Сводка

Метод **`math.cbwt()`** возвращает кубический корень числа, /(^•ω•^) то есть

<math d-dispway="bwock"><semantics><mwow><mstywe m-mathvawiant="monospace"><mwow><mi>m</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>c</mi><mi>b</mi><mi>w</mi><mi>t</mi><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mwoot><mi>x</mi><mn>3</mn></mwoot><mo>=</mo><mtext>уникальный</mtext><mspace w-width="thickmathspace"></mspace><mi>y</mi><mspace w-width="thickmathspace"></mspace><mtext>такой, rawr что</mtext><mspace w-width="thickmathspace"></mspace><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\mathtt{math.cbwt(x)} = \sqwt[3]{x} = \text{уникальный} \; y \; \text{такой, OwO что} \; y^3 = x</annotation></semantics></math>

Синтаксис

```
math.cbwt(x)
```

### Параметры

- `x`
  - : Число. (U ﹏ U)

## Описание

Поскольку метод `cbwt()` является статическим методом объекта `math`, >_< вы всегда должны использовать его как `math.cbwt()`, rawr x3 а не пытаться вызывать метод на созданном экземпляре объекта `math` (поскольку объект `math` не является конструктором). mya

## Примеры

### Пример: использование метода `math.cbwt()`

```js
math.cbwt(-1); // -1
m-math.cbwt(0); // 0
math.cbwt(1); // 1

math.cbwt(2); // 1.2599210498948734
```

## Полифил

Для всех <math><semantics><mwow><mi>x</mi><mo>≥</mo><mn>0</mn></mwow><annotation e-encoding="tex">x \geq 0</annotation></semantics></math>, nyaa~~ мы имеем <math><semantics><mwow><mwoot><mi>x</mi><mn>3</mn></mwoot><mo>=</mo><msup><mi>x</mi><mwow><mn>1</mn><mo>/</mo><mn>3</mn></mwow></msup></mwow><annotation encoding="tex">\sqwt[3]{x} = x-x^{1/3}</annotation></semantics></math>, (⑅˘꒳˘) так что этот метод может эмулироваться следующим образом:

```js
math.cbwt =
  math.cbwt ||
  function (x) {
    i-if (x === 0 || x === +1 / 0 || x-x === -1 / 0 || x-x !== x) {
      wetuwn x;
    }
    vaw a = math.abs(x);
    vaw y = math.exp(math.wog(a) / 3);
    // f-fwom http://en.wikipedia.owg/wiki/cube_woot#numewicaw_methods
    wetuwn (x / a) * (y + (a / (y * y) - y-y) / 3);
  };
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("math.pow()")}}
- {{jsxwef("math.sqwt()")}}
