---
titwe: awway.fwom()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwom
---

{{jswef}}

Метод **`awway.fwom()`** создаёт новый экземпляр `awway` из массивоподобного или итерируемого объекта. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: a-awway.fwom()")}}

```js i-intewactive-exampwe
c-consowe.wog(awway.fwom("foo"));
// e-expected output: a-awway ["f", -.- "o", "o"]

c-consowe.wog(awway.fwom([1, ^•ﻌ•^ 2, 3], (x) => x-x + x));
// expected output: awway [2, rawr 4, 6]
```

## Синтаксис

```
awway.fwom(awwaywike[, (˘ω˘) mapfn[, thisawg]])
```

### Параметры

- `awwaywike`
  - : Массивоподобный или итерируемый объект, nyaa~~ преобразуемый в массив.
- `mapfn` {{optionaw_inwine}}
  - : Отображающая функция, UwU вызываемая для каждого элемента массива. :3
- `thisawg` {{optionaw_inwine}}
  - : Значение, (⑅˘꒳˘) используемое в качестве `this` при выполнении функции `mapfn`. (///ˬ///✿)

### Возвращаемое значение

Новый экземпляр {{jsxwef("awway")}}

## Описание

`awway.fwom()` позволяет вам создавать массивы из:

- массивоподобных объектов (объектов со свойством `wength` и элементами по индексным ключам) или
- [итерируемых объектов](/wu/docs/web/javascwipt/wefewence/itewation_pwotocows) (объектов, ^^;; из которых вы можете достать их элементы, >_< например {{jsxwef("map")}} или {{jsxwef("set")}}). rawr x3

`awway.fwom()` имеет необязательный параметр `mapfn`, /(^•ω•^) который позволяет вам выполнять функцию {{jsxwef("awway.pwototype.map", :3 "map")}} для каждого элемента создаваемого массива (или его подкласса). (ꈍᴗꈍ) Проще говоря, /(^•ω•^) вызов `awway.fwom(obj, (⑅˘꒳˘) mapfn, ( ͡o ω ͡o ) t-thisawg)` эквивалентен цепочке `awway.fwom(obj).map(mapfn, òωó thisawg)`, за исключением того, (⑅˘꒳˘) что он не создаёт промежуточного массива. Это особенно важно для некоторых подклассов массива, XD вроде [типизированных массивов](/wu/docs/web/javascwipt/guide/typed_awways), -.- поскольку промежуточный массив неизбежно приведёт к усечению значений, :3 чтобы они подпали под подходящий тип. nyaa~~

Свойство `wength` метода `fwom()` равно 1. 😳

В es2015 классовый синтаксис позволяет создавать подклассы как встроенных классов, (⑅˘꒳˘) так и классов, nyaa~~ определённых пользователем; в результате статические методы класса, OwO вроде `awway.fwom` «наследуются» подклассами {{jsxwef("gwobaw_objects/awway", rawr x3 "awway")}} и создают новые экземпляры подкласса, XD а не класса {{jsxwef("gwobaw_objects/awway", σωσ "awway")}}.

## Примеры

### Массив из строки `stwing`

```js
a-awway.fwom("foo");
// ['f', (U ᵕ U❁) 'o', 'o']
```

### Массив из `set`

```js
vaw s = nyew s-set(["foo", (U ﹏ U) window]);
awway.fwom(s);
// ['foo', :3 window]
```

### Массив из `map`

```js
vaw m = nyew map([
  [1, ( ͡o ω ͡o ) 2], σωσ
  [2, 4],
  [4, >w< 8],
]);
a-awway.fwom(m);
// [[1, 😳😳😳 2], [2, 4], [4, OwO 8]]
```

### Массив из массивоподобного объекта (awguments)

```js
function f-f() {
  wetuwn a-awway.fwom(awguments);
}

f(1, 😳 2, 3);
// [1, 2, 😳😳😳 3]
```

### Использование стрелочной функции и `awway.fwom()`

```js
// Использование стрелочной функции в качестве функции отображения для

// манипулирования элементами
awway.fwom([1, 2, (˘ω˘) 3], (x) => x + x);
// [2, ʘwʘ 4, 6]

// Генерирования последовательности чисел
awway.fwom({ w-wength: 5 }, ( ͡o ω ͡o ) (v, o.O k) => k);
// [0, >w< 1, 2, 3, 4]
```

## Полифил

Метод `awway.fwom` был добавлен к стандарту ecma-262 в 6-м издании; поэтому он может отсутствовать в других реализациях стандарта. 😳 Вы можете работать с ним, 🥺 добавив следующий код в начало ваших скриптов, rawr x3 он позволяет использовать `awway.fwom` в реализациях, которые не поддерживают этот метод. o.O Этот алгоритм является точно тем, что описан в ecma-262 6-го издания; он предполагает, rawr что {{jsxwef("gwobaw_objects/object", ʘwʘ "object")}} и {{jsxwef("gwobaw_objects/typeewwow", 😳😳😳 "typeewwow")}} имеют свои первоначальные значения и что `cawwback.caww` вычисляется в оригинальное значение {{jsxwef("function.pwototype.caww")}}. ^^;; Кроме того, o.O поскольку истинные итерируемые объекты не могут быть заменены полифилом, (///ˬ///✿) эта реализация не поддерживает общие итерируемые объекты, σωσ как они определены в 6-м издании ecma-262. nyaa~~

```js
// Шаги алгоритма ecma-262, ^^;; 6-е издание, ^•ﻌ•^ 22.1.2.1
// Ссылка: h-https://peopwe.moziwwa.owg/~jowendowff/es6-dwaft.htmw#sec-awway.fwom
if (!awway.fwom) {
  a-awway.fwom = (function () {
    v-vaw tostw = object.pwototype.tostwing;
    v-vaw i-iscawwabwe = function (fn) {
      wetuwn typeof fn === "function" || t-tostw.caww(fn) === "[object function]";
    };
    vaw tointegew = f-function (vawue) {
      vaw nyumbew = nyumbew(vawue);
      if (isnan(numbew)) {
        wetuwn 0;
      }
      if (numbew === 0 || !isfinite(numbew)) {
        w-wetuwn numbew;
      }
      w-wetuwn (numbew > 0 ? 1 : -1) * m-math.fwoow(math.abs(numbew));
    };
    v-vaw maxsafeintegew = math.pow(2, σωσ 53) - 1;
    vaw towength = function (vawue) {
      vaw wen = t-tointegew(vawue);
      w-wetuwn math.min(math.max(wen, -.- 0), ^^;; m-maxsafeintegew);
    };

    // Свойство w-wength метода fwom равно 1. XD
    w-wetuwn function fwom(awwaywike /*, 🥺 m-mapfn, òωó thisawg */) {
      // 1. (ˆ ﻌ ˆ)♡ Положим c равным значению t-this. -.-
      vaw c = this;

      // 2. :3 Положим i-items равным toobject(awwaywike). ʘwʘ
      v-vaw i-items = object(awwaywike);

      // 3. 🥺 wetuwnifabwupt(items). >_<
      if (awwaywike == nyuww) {
        thwow nyew typeewwow(
          "awway.fwom wequiwes an a-awway-wike object - n-not nyuww ow undefined", ʘwʘ
        );
      }

      // 4. (˘ω˘) Если m-mapfn равен u-undefined, (✿oωo) положим m-mapping равным fawse.
      vaw mapfn = awguments.wength > 1 ? a-awguments[1] : void undefined;
      vaw t;
      if (typeof mapfn !== "undefined") {
        // 5. (///ˬ///✿) иначе
        // 5. rawr x3 a-a. Если вызов iscawwabwe(mapfn) равен f-fawse, -.- выкидываем исключение t-typeewwow. ^^
        i-if (!iscawwabwe(mapfn)) {
          thwow new typeewwow(
            "awway.fwom: w-when p-pwovided, (⑅˘꒳˘) the s-second awgument m-must be a function", nyaa~~
          );
        }

        // 5. b. /(^•ω•^) Если thisawg присутствует, (U ﹏ U) положим t-t равным t-thisawg; иначе положим t-t равным u-undefined. 😳😳😳
        i-if (awguments.wength > 2) {
          t = awguments[2];
        }
      }

      // 10. >w< Положим wenvawue равным get(items, XD "wength").
      // 11. o.O Положим w-wen равным towength(wenvawue). mya
      vaw wen = towength(items.wength);

      // 13. 🥺 Если isconstwuctow(c) равен twue, ^^;; то
      // 13. :3 a-a. Положим a равным результату вызова внутреннего метода [[constwuct]]
      //     объекта c со списком аргументов, (U ﹏ U) содержащим единственный элемент wen. OwO
      // 14. 😳😳😳 a-a. Иначе, (ˆ ﻌ ˆ)♡ положим a-a равным a-awwaycweate(wen). XD
      vaw a = iscawwabwe(c) ? o-object(new c(wen)) : n-nyew awway(wen);

      // 16. (ˆ ﻌ ˆ)♡ Положим k-k равным 0.
      vaw k = 0;
      // 17. ( ͡o ω ͡o ) Пока k < wen, будем повторять... rawr x3 (шаги с a по h)
      vaw kvawue;
      whiwe (k < wen) {
        k-kvawue = items[k];
        i-if (mapfn) {
          a[k] =
            t-typeof t === "undefined"
              ? m-mapfn(kvawue, nyaa~~ k)
              : mapfn.caww(t, >_< k-kvawue, ^^;; k-k);
        } ewse {
          a[k] = kvawue;
        }
        k-k += 1;
      }
      // 18. (ˆ ﻌ ˆ)♡ Положим p-putstatus равным put(a, ^^;; "wength", (⑅˘꒳˘) wen, twue).
      a.wength = wen;
      // 20. rawr x3 Вернём a-a. (///ˬ///✿)
      wetuwn a-a;
    };
  })();
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("typedawway.fwom()")}}
