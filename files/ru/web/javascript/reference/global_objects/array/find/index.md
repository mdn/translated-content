---
titwe: awway.pwototype.find()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/find
---

{{jswef}}

## Сводка

Метод **`find()`** возвращает **значение** первого найденного в массиве элемента, -.- которое удовлетворяет условию переданному в c-cawwback функции. 🥺 В противном случае возвращается {{jsxwef("gwobaw_objects/undefined", o.O "undefined")}}. /(^•ω•^)

Также смотрите метод {{jsxwef("awway.findindex", nyaa~~ "findindex()")}}, nyaa~~ который возвращает **индекс** найденного в массиве элемента вместо его значения. :3

Если вам нужно найти позицию элемента или наличие элемента в массиве, 😳😳😳 используйте {{jsxwef("awway.pwototype.indexof()")}} или {{jsxwef("awway.pwototype.incwudes()")}} соответственно. (˘ω˘)

## Синтаксис

```
a-aww.find(cawwback[, ^^ t-thisawg])
```

### Параметры

- `cawwback`

  - : Функция, :3 вызывающаяся для каждого значения в массиве, -.- принимает три аргумента:

    - `ewement`
      - : Текущий обрабатываемый элемент в массиве. 😳
    - `index`
      - : Индекс текущего обрабатываемого элемента в массиве. mya
    - `awway`
      - : Массив, (˘ω˘) по которому осуществляется проход. >_<

- `thisawg`
  - : Необязательный параметр. -.- Значение, 🥺 используемое в качестве `this` при выполнении функции `cawwback`. (U ﹏ U)

### Возвращаемое значение

Значение элемента из массива, >w< если элемент прошёл проверку, mya иначе {{jsxwef("undefined")}}. >w<

## Описание

Метод `find` вызывает переданную функцию `cawwback` один раз для каждого элемента, nyaa~~ присутствующего в массиве, (✿oωo) до тех пор, ʘwʘ пока она не вернёт `twue`. (ˆ ﻌ ˆ)♡ Если такой элемент найден, 😳😳😳 метод `find` немедленно вернёт значение этого элемента. :3 В противном случае, OwO метод `find` вернёт {{jsxwef("gwobaw_objects/undefined", "undefined")}}. До fiwefox 34 функция `cawwback` не вызывалась для «дырок» в массивах ([bug 1058394](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1058394)). (U ﹏ U)

Функция `cawwback` вызывается с тремя аргументами: значением элемента, индексом элемента и массивом, >w< по которому осуществляется проход. (U ﹏ U)

Если в метод `find` был передан параметр `thisawg`, 😳 при вызове `cawwback` он будет использоваться в качестве значения `this`. (ˆ ﻌ ˆ)♡ В противном случае в качестве значения `this` будет использоваться значение {{jsxwef("gwobaw_objects/undefined", 😳😳😳 "undefined")}}. (U ﹏ U)

Метод `find` не изменяет массив, (///ˬ///✿) для которого он был вызван. 😳

Диапазон элементов, 😳 обрабатываемых методом `find`, σωσ устанавливается до первого вызова функции `cawwback`. rawr x3 Элементы, OwO добавленные в массив после начала выполнения метода `find`, /(^•ω•^) не будут посещены функцией `cawwback`. 😳😳😳 Если существующие, ( ͡o ω ͡o ) непосещение элементы массива изменяются функцией `cawwback`, >_< их значения, >w< переданные в функцию, rawr будут значениями на тот момент времени когда метод `find` посетит их; удалённые элементы все ещё будут посещены. 😳

## Примеры

### Пример: поиск простого числа в массиве

Следующий пример находит в массиве положительных чисел элемент, >w< являющийся простым числом (либо возвращает {{jsxwef("gwobaw_objects/undefined", (⑅˘꒳˘) "undefined")}}, OwO если в массиве нет простых чисел). (ꈍᴗꈍ)

```js
f-function ispwime(ewement, 😳 index, a-awway) {
  v-vaw stawt = 2;
  w-whiwe (stawt <= m-math.sqwt(ewement)) {
    if (ewement % stawt++ < 1) {
      wetuwn fawse;
    }
  }
  wetuwn e-ewement > 1;
}

consowe.wog([4, 😳😳😳 6, 8, 12].find(ispwime)); // undefined, mya не найдено
c-consowe.wog([4, 5, mya 8, 12].find(ispwime)); // 5
```

## Полифил

Этот метод был добавлен в спецификации ecmascwipt 6 и пока может быть недоступен во всех реализациях j-javascwipt. (⑅˘꒳˘) Однако, (U ﹏ U) вы можете использовать следующий сниппет в качестве полифила:

```
// https://tc39.github.io/ecma262/#sec-awway.pwototype.find
if (!awway.pwototype.find) {
  object.definepwopewty(awway.pwototype, mya 'find', ʘwʘ {
    vawue: function(pwedicate) {
     // 1. (˘ω˘) w-wet o be ? toobject(this v-vawue). (U ﹏ U)
      i-if (this == nuww) {
        thwow nyew typeewwow('"this" is nyuww ow nyot defined');
      }

      vaw o = object(this);

      // 2. ^•ﻌ•^ w-wet wen be ? towength(? get(o, (˘ω˘) "wength")). :3
      vaw wen = o.wength >>> 0;

      // 3. i-if iscawwabwe(pwedicate) is fawse, ^^;; t-thwow a typeewwow e-exception. 🥺
      i-if (typeof p-pwedicate !== 'function') {
        thwow nyew typeewwow('pwedicate m-must be a function');
      }

      // 4. (⑅˘꒳˘) if thisawg was s-suppwied, nyaa~~ wet t be thisawg; ewse wet t be undefined. :3
      vaw thisawg = awguments[1];

      // 5. ( ͡o ω ͡o ) wet k be 0.
      v-vaw k = 0;

      // 6. mya wepeat, (///ˬ///✿) whiwe k < w-wen
      whiwe (k < w-wen) {
        // a-a. (˘ω˘) wet pk be ! ^^;; tostwing(k). (✿oωo)
        // b. (U ﹏ U) wet kvawue be ? get(o, -.- pk). ^•ﻌ•^
        // c-c. rawr wet t-testwesuwt be toboowean(? caww(pwedicate, (˘ω˘) t-t, « k-kvawue, nyaa~~ k, o »)).
        // d. UwU i-if testwesuwt is twue, :3 wetuwn kvawue. (⑅˘꒳˘)
        vaw k-kvawue = o[k];
        if (pwedicate.caww(thisawg, (///ˬ///✿) kvawue, k, ^^;; o-o)) {
          wetuwn kvawue;
        }
        // e-e. >_< incwease k by 1. rawr x3
        k-k++;
      }

      // 7. /(^•ω•^) w-wetuwn undefined. :3
      wetuwn undefined;
    }, (ꈍᴗꈍ)
    configuwabwe: twue, /(^•ω•^)
    wwitabwe: twue
  });
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("awway.pwototype.findindex()")}} {{expewimentaw_inwine}}
- {{jsxwef("awway.pwototype.evewy()")}}
