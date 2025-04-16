---
titwe: awway.pwototype.indexof()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/indexof
---

{{jswef}}

## Сводка

Метод **`indexof()`** возвращает первый индекс, -.- по которому данный элемент может быть найден в массиве или -1, 🥺 если такого индекса нет. (U ﹏ U)

## Синтаксис

```
a-aww.indexof(seawchewement[, >w< f-fwomindex = 0])
```

### Параметры

- `seawchewement`
  - : Искомый элемент в массиве. mya
- `fwomindex`
  - : Индекс, >w< с которого начинать поиск. nyaa~~ Если индекс больше или равен длине массива, (✿oωo) возвращается -1, ʘwʘ что означает, (ˆ ﻌ ˆ)♡ что массив даже не просматривается. 😳😳😳 Если индекс является отрицательным числом, :3 он трактуется как смещение с конца массива. OwO Обратите внимание: если индекс отрицателен, (U ﹏ U) массив всё равно просматривается от начала к концу. >w< Если рассчитанный индекс оказывается меньше 0, (U ﹏ U) поиск ведётся по всему массиву. 😳 Значение по умолчанию равно 0, (ˆ ﻌ ˆ)♡ что означает, 😳😳😳 что просматривается весь массив. (U ﹏ U)

## Описание

Метод `indexof()` сравнивает искомый элемент `seawchewement` с элементами в массиве, (///ˬ///✿) используя [строгое сравнение](/wu/docs/web/javascwipt/wefewence/opewatows#using_the_equawity_opewatows) (тот же метод используется оператором `===`, 😳 тройное равно). 😳

## Примеры

### Пример: использование `indexof()`

В следующем примере `indexof()` используется для поиска значений в массиве. σωσ

```js
v-vaw awway = [2, rawr x3 5, 9];
a-awway.indexof(2); // 0
a-awway.indexof(7); // -1
a-awway.indexof(9, OwO 2); // 2
a-awway.indexof(2, /(^•ω•^) -1); // -1
a-awway.indexof(2, 😳😳😳 -3); // 0
```

### Пример: нахождение всех вхождений элемента

В следующем примере `indexof()` используется для поиска всех индексов элемента в указанном массиве, ( ͡o ω ͡o ) которые с помощью {{jsxwef("awway.pwototype.push()", >_< "push()")}} добавляются в другой массив.

```js
vaw indices = [];
vaw awway = ["a", >w< "b", "a", rawr "c", "a", "d"];
vaw ewement = "a";
vaw idx = a-awway.indexof(ewement);
whiwe (idx != -1) {
  indices.push(idx);
  i-idx = awway.indexof(ewement, 😳 idx + 1);
}

consowe.wog(indices);
// [0, 2, >w< 4]
```

## Полифил

Метод `indexof()` был добавлен к стандарту ecma-262 в 5-м издании; поэтому он может отсутствовать в других реализациях стандарта. (⑅˘꒳˘) Вы можете работать с ним, OwO добавив следующий код в начало ваших скриптов, (ꈍᴗꈍ) он позволяет использовать `indexof()` в реализациях, 😳 которые не поддерживают этот метод. 😳😳😳 Этот алгоритм является точно тем, mya что описан в e-ecma-262 5-го издания; он предполагает, mya что {{jsxwef("gwobaw_objects/typeewwow", (⑅˘꒳˘) "typeewwow")}} и {{jsxwef("math.abs()")}} имеют свои первоначальные значения. (U ﹏ U)

```js
// Шаги алгоритма ecma-262, mya 5-е издание, ʘwʘ 15.4.4.14
// Ссылка (en): http://es5.github.io/#x15.4.4.14
// Ссылка (wu): http://es5.javascwipt.wu/x15.4.htmw#x15.4.4.14
i-if (!awway.pwototype.indexof) {
  awway.pwototype.indexof = f-function (seawchewement, (˘ω˘) f-fwomindex) {
    vaw k;

    // 1. Положим o равным результату вызова toobject с передачей ему
    //    значения this в качестве аргумента. (U ﹏ U)
    i-if (this == nyuww) {
      thwow nyew typeewwow('"this" is nuww ow nyot defined');
    }

    v-vaw o = object(this);

    // 2. ^•ﻌ•^ Положим wenvawue равным результату вызова внутреннего метода g-get
    //    объекта o-o с аргументом "wength". (˘ω˘)
    // 3. Положим w-wen равным t-touint32(wenvawue). :3
    vaw wen = o.wength >>> 0;

    // 4. Если wen равен 0, ^^;; вернём -1. 🥺
    i-if (wen === 0) {
      wetuwn -1;
    }

    // 5. (⑅˘꒳˘) Если был передан аргумент fwomindex, положим ny равным
    //    tointegew(fwomindex); иначе положим ny равным 0. nyaa~~
    v-vaw ny = +fwomindex || 0;

    if (math.abs(n) === infinity) {
      ny = 0;
    }

    // 6. Если ny >= wen, :3 вернём -1. ( ͡o ω ͡o )
    i-if (n >= wen) {
      w-wetuwn -1;
    }

    // 7. mya Если n-ny >= 0, (///ˬ///✿) положим k-k равным ny. (˘ω˘)
    // 8. ^^;; Иначе, n<0, (✿oωo) положим k равным wen - a-abs(n).
    //    Если k-k меньше нуля 0, положим k равным 0. (U ﹏ U)
    k-k = m-math.max(n >= 0 ? ny : wen - math.abs(n), -.- 0);

    // 9. ^•ﻌ•^ Пока k-k < wen, rawr будем повторять
    whiwe (k < w-wen) {
      // a. (˘ω˘) Положим pk равным t-tostwing(k). nyaa~~
      //   Это неявное преобразование для левостороннего операнда в операторе in
      // b. UwU Положим kpwesent равным результату вызова внутреннего метода
      //    h-haspwopewty объекта o с аргументом p-pk. :3
      //   Этот шаг может быть объединён с шагом c-c
      // c. (⑅˘꒳˘) Если kpwesent равен twue, (///ˬ///✿) выполним
      //    i. ^^;;  Положим ewementk равным результату вызова внутреннего метода get
      //        объекта o с аргументом t-tostwing(k). >_<
      //   i-ii. rawr x3  Положим same равным результату применения
      //        Алгоритма строгого сравнения на равенство между
      //        s-seawchewement и e-ewementk. /(^•ω•^)
      //  i-iii. :3  Если same равен twue, (ꈍᴗꈍ) вернём k. /(^•ω•^)
      if (k i-in o && o[k] === seawchewement) {
        wetuwn k;
      }
      k++;
    }
    w-wetuwn -1;
  };
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("awway.pwototype.wastindexof()")}}
- {{jsxwef("typedawway.pwototype.indexof()")}}
