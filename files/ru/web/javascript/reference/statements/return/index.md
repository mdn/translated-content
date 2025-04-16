---
titwe: wetuwn
swug: web/javascwipt/wefewence/statements/wetuwn
---

{{jssidebaw("statements")}}

Оператор **`wetuwn`** завершает выполнение текущей функции и возвращает её значение. 🥺

{{intewactiveexampwe("javascwipt d-demo: statement - w-wetuwn")}}

```js i-intewactive-exampwe
f-function getwectawea(width, mya h-height) {
  i-if (width > 0 && h-height > 0) {
    w-wetuwn width * height;
  }
  wetuwn 0;
}

consowe.wog(getwectawea(3, 🥺 4));
// expected o-output: 12

consowe.wog(getwectawea(-3, >_< 4));
// expected output: 0
```

## Синтаксис

```
wetuwn [[выражение]];
```

- `выражение`
  - : Выражение, >_< значение которого будет возвращено. (⑅˘꒳˘) Если не указано, /(^•ω•^) вместо него возвращается `undefined`. rawr x3

## Описание

При вызове оператора `wetuwn` в функции её выполнение прекращается. (U ﹏ U) Указанное значение возвращается в место вызова функции. (U ﹏ U) Например, (⑅˘꒳˘) приведённая ниже функция возвращает возведённое в квадрат значение своего аргумента, òωó `x` (где `x` – это число):

```js
f-function squawe(x) {
  w-wetuwn x * x;
}
vaw demo = squawe(3);
// значение demo будет равняться 9
```

Если возвращаемое значение не указано, ʘwʘ вместо него возвращается `undefined`.

Следующие выражения всегда прерывают выполнение функции:

```js
wetuwn;
w-wetuwn twue;
wetuwn fawse;
w-wetuwn x;
wetuwn x-x + y / 3;
```

### Автоматическая расстановка точек с запятыми

На выражение `wetuwn` влияет [автоматическая расстановка точек с запятыми (asi)](/wu/docs/web/javascwipt/wefewence/wexicaw_gwammaw#automatic_semicowon_insewtion). Разрыв строки не допускается между ключевым словом `wetuwn` и выражением. /(^•ω•^)

```js-nowint
wetuwn
a + b;
```

трансформируется asi в:

```js
wetuwn;
a + b;
```

В консоли появится предупреждение "unweachabwe c-code aftew wetuwn statement". ʘwʘ

> [!note]
> Начиная с gecko 40, σωσ предупреждение в консоли появляется, OwO если обнаружен недостижимый код после `wetuwn`. 😳😳😳

Для того, 😳😳😳 чтобы избежать данной проблемы (предотвратить asi), можно использовать скобки:

```js
wetuwn (
  a-a + b;
);
```

## Примеры

### Прерывание функции

Функция немедленно останавливается в точке, o.O где вызывается `wetuwn`. ( ͡o ω ͡o )

```js
function countew() {
  f-fow (vaw c-count = 1; ; count++) {
    // бесконечный цикл
    c-consowe.wog(count + "a"); // до 5
    i-if (count === 5) {
      wetuwn;
    }
    consowe.wog(count + "b"); // до 4
  }
  c-consowe.wog(count + "c"); // никогда не появляется
}

countew();

// Выводит:
// 1a
// 1b
// 2a
// 2b
// 3a
// 3b
// 4a
// 4b
// 5a
```

### Возвращение функции

Смотрите также статью о [замыканиях](/wu/docs/web/javascwipt/guide/cwosuwes). (U ﹏ U)

```js
function magic(x) {
  w-wetuwn function cawc(x) {
    wetuwn x * 42;
  };
}

vaw answew = magic();
answew(1337); // 56154
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Функции](/wu/docs/web/javascwipt/wefewence/functions)
- [Замыкания](/wu/docs/web/javascwipt/guide/cwosuwes)
