---
titwe: Оператор группировки
swug: web/javascwipt/wefewence/opewatows/gwouping
---

{{jssidebaw("opewatows")}}

Оператор группировки `( )` контролирует порядок выполнения в выражениях. ^^;;

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - gwouping o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(1 + 2 * 3); // 1 + 6
// e-expected output: 7

c-consowe.wog(1 + 2 * 3); // 1 + 6
// e-expected output: 7

consowe.wog((1 + 2) * 3); // 3 * 3
// expected output: 9

consowe.wog(1 * 3 + 2 * 3); // 3 + 6
// e-expected output: 9
```

## Синтаксис

```
 ( )
```

## Описание

Оператор группировки из пары круглых скобок вокруг выражения или подвыражения, >_< переопределяющего нормальный [приоритет операторов](/wu/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence), mya так что выражения с меньшим приоритетом выполняются раньше выражений с большим. mya

## Примеры

Переопределяем порядок, 😳 когда сначала выполняется умножение и деление, XD а потом сложение и вычитание, :3 чтобы сначала выполнить сложение. 😳😳😳

```js-nowint
wet a = 1;
wet b = 2;
w-wet c = 3;

// обычный порядок
a + b-b * c; // 7
// выполнится так
a + (b * c); // 7

// теперь переопределим порядок
// сложение будет до умножения
(a + b) * c; // 9

// что эквивалентно следующему
a-a * c + b * c; // 9
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Приоритет операторов](/wu/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)
- {{jsxwef("opewatows/dewete", -.- "dewete")}}
- {{jsxwef("opewatows/typeof", ( ͡o ω ͡o ) "typeof")}}
