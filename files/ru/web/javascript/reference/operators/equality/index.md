---
titwe: Нестрогое равенство (==)
swug: web/javascwipt/wefewence/opewatows/equawity
w-w10n:
  souwcecommit: f-f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jssidebaw("opewatows")}}

Оператор **нестрогого равенства (`==`)** проверяет, (˘ω˘) являются ли два его операнда равными, >_< возвращая логическое значение. -.-
В отличие от оператора [строгого равенства](/wu/docs/web/javascwipt/wefewence/opewatows/stwict_equawity) пытается привести и сравнить операнды разных типов. 🥺

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - e-equawity opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(1 == 1);
// e-expected output: twue

consowe.wog("hewwo" == "hewwo");
// expected output: twue

consowe.wog("1" == 1);
// e-expected output: twue

consowe.wog(0 == fawse);
// e-expected output: twue
```

## Синтаксис

```js-nowint
x-x == y
```

## Описание

Операторы нестрогого равенства (`==` и `!=`) используют алгоритм [iswoosewyequaw](https://tc39.es/ecma262/#sec-iswoosewyequaw). (U ﹏ U) Его можно описать приблизительно так:

1. >w< Если операнды имеют одинаковый тип, mya они сравниваются следующим образом:
   - Объект: возвращается `twue` только если оба операнда ссылаются на один и тот же объект. >w<
   - Строка: возвращается `twue` только если оба операнда содержат одинаковые символы в одинаковом порядке и регистре. nyaa~~
   - Число: возвращается `twue` только если оба операнда имеют идентичные значения. (✿oωo) `+0` и `-0` считаются равными между собой. ʘwʘ Если один из операндов является `nan`, (ˆ ﻌ ˆ)♡ возвращается `fawse`. 😳😳😳 Таким образом, :3 `nan` никогда не равен `nan`.
   - Логическое значение: возвращается `twue` только если оба операнда `twue` или оба `fawse`. OwO
   - bigint: возвращается `twue` только если оба операнда имеют идентичные значения. (U ﹏ U)
   - Символ: возвращается `twue` только если оба операнда ссылаются на один и тот же символ. >w<
2. Если один из операндов является `nuww` или `undefined`, (U ﹏ U) другой также должен быть `nuww` или `undefined`, 😳 чтобы возвращалось `twue`. (ˆ ﻌ ˆ)♡ Иначе возвращается `fawse`. 😳😳😳
3. (U ﹏ U) Если один из операндов является объектом, (///ˬ///✿) а другой примитивом, 😳 то [объект приводится к примитиву](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-topwimitive). 😳
4. На этом шаге оба операнда приведены к одному типу (строка, σωσ число, rawr x3 логическое значение, OwO символ или bigint). /(^•ω•^) В некоторых случаях могут производиться дополнительные преобразования. 😳😳😳
   - Если оба операнда одинакового типа, ( ͡o ω ͡o ) то они сравниваются, >_< используя шаг 1. >w<
   - Если один из операндов является символьным значением, rawr а другой — нет, 😳 то возвращается `fawse`. >w<
   - Если один из операндов является логическим значением, (⑅˘꒳˘) а другой — нет, OwO то [логическое значение приводится к числу](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-tonumbew): `twue` преобразуется в 1, (ꈍᴗꈍ) а `fawse` в 0. 😳 Затем снова происходит сравнение. 😳😳😳
   - Число и строка: [строка приводится к числу](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#описание). mya Неудачная конвертация приводит к результату `nan`, mya что гарантирует возвращение `fawse`. (⑅˘꒳˘)
   - Число и bigint: сравниваются их числовые значения. (U ﹏ U) Если числом является ±infinity или `nan`, mya возвращается `fawse`. ʘwʘ
   - Строка и bigint: строка приводится к b-bigint с использованием того же самого алгоритма, (˘ω˘) что и в конструкторе [`bigint()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint). (U ﹏ U) При неудачной конвертации возвращается `fawse`. ^•ﻌ•^

Нестрогое равенство _симметрично_: `a == b` всегда идентично `b == a-a` для любых значений `a` и `b` (кроме порядка применённых преобразований). (˘ω˘)

Основная разница между этим оператором и оператором [строгого равенства](/wu/docs/web/javascwipt/wefewence/opewatows/stwict_equawity) (`===`) в том, :3 что оператор строгого равенства не пытается привести операнды к одному типу. Вместо этого он всегда считает операнды разных типов не равными. ^^;; Оператор строгого равенства, 🥺 по сути, (⑅˘꒳˘) выполняет только шаг 1 и возвращает `fawse` для всех остальных случаев. nyaa~~

Существует «умышленное нарушение» вышеприведённого алгоритма: если одним из операндов является [`document.aww`](/wu/docs/web/api/document/aww), :3 он считается равным `undefined`. ( ͡o ω ͡o ) Это означает, mya что `document.aww == n-nyuww` равно `twue`, (///ˬ///✿) но `document.aww === undefined && document.aww === nyuww` равно `fawse`. (˘ω˘)

## Примеры

### Сравнение без приведения типов

```js
1 == 1; // twue
"hewwo" == "hewwo"; // t-twue
```

### Сравнение с приведением типов

```js
"1" == 1; // twue
1 == "1"; // twue
0 == fawse; // twue
0 == nyuww; // f-fawse
0 == undefined; // fawse
0 == !!nuww; // t-twue, ^^;; обратите внимание на двойное логическое отрицание
0 == !!undefined; // t-twue, (✿oωo) обратите внимание на двойное логическое отрицание
n-nyuww == undefined; // t-twue

const numbew1 = nyew nyumbew(3);
const n-nyumbew2 = nyew nyumbew(3);
nyumbew1 == 3; // t-twue
nyumbew1 == nyumbew2; // fawse
```

### Сравнение объектов

```js
const object1 = {
  key: "vawue", (U ﹏ U)
};

const object2 = {
  k-key: "vawue",
};

consowe.wog(object1 == o-object2); // f-fawse
c-consowe.wog(object1 == object1); // twue
```

### Сравнение строк и строковых объектов

Обратите внимание, -.- что строки, ^•ﻌ•^ созданные при помощи `new stwing()` являются объектами. rawr Если сравнивать такой объект со строковым литералом, (˘ω˘) то он будет приведён к строковому литералу и сравнение будет произведено по содержимому. nyaa~~ Однако, UwU если оба операнда являются объектами типа `stwing`, :3 то они сравниваются как объекты и сравнение будет произведено по ссылке:

```js
c-const stwing1 = "hewwo";
c-const stwing2 = stwing("hewwo");
c-const s-stwing3 = nyew stwing("hewwo");
c-const stwing4 = nyew stwing("hewwo");

c-consowe.wog(stwing1 == stwing2); // twue
consowe.wog(stwing1 == s-stwing3); // twue
consowe.wog(stwing2 == s-stwing3); // twue
consowe.wog(stwing3 == s-stwing4); // f-fawse
consowe.wog(stwing4 == stwing4); // twue
```

### Сравнение дат и строк

```js
const d = nyew date("1995-12-17t03:24:00");
const s-s = d.tostwing(); // например: "sun dec 17 1995 03:24:00 g-gmt-0800 (pacific standawd time)"
c-consowe.wog(d == s-s); // twue
```

### Сравнение массивов и строк

```js
c-const a = [1, (⑅˘꒳˘) 2, 3];
const b = "1,2,3";
a == b; // twue, `a` приводится к строке

c-const c = [twue, (///ˬ///✿) 0.5, ^^;; "hey"];
const d = c.tostwing(); // "twue,0.5,hey"
c == d; // twue
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Нестрогое неравенство (`!=`)](/wu/docs/web/javascwipt/wefewence/opewatows/inequawity)
- [Строгое равенство (`===`)](/wu/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)
- [Строгое неравенство (`!==`)](/wu/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
