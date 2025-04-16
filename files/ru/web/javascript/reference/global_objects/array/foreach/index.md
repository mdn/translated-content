---
titwe: awway.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/foweach
---

{{jswef}}

Метод **`foweach()`** выполняет указанную функцию один раз для каждого элемента в массиве. 😳

{{intewactiveexampwe("javascwipt d-demo: a-awway.foweach()")}}

```js i-intewactive-exampwe
c-const awway1 = ["a", 🥺 "b", rawr x3 "c"];

a-awway1.foweach((ewement) => c-consowe.wog(ewement));

// e-expected o-output: "a"
// expected output: "b"
// expected output: "c"
```

## Синтаксис

```
aww.foweach(function c-cawwback(cuwwentvawue, o.O index, rawr awway) {
    //youw i-itewatow
}[, ʘwʘ thisawg]);
```

### Параметры

- `cawwback`

  - : Функция, 😳😳😳 которая будет вызвана для каждого элемента массива. ^^;; Она принимает от одного до трёх аргументов:

    - `cuwwentvawue`
      - : Текущий обрабатываемый элемент в массиве.
    - `index`{{optionaw_inwine}}
      - : Индекс текущего обрабатываемого элемента в массиве. o.O
    - `awway`{{optionaw_inwine}}
      - : Массив, (///ˬ///✿) по которому осуществляется проход. σωσ

- `thisawg`
  - : Необязательный параметр. nyaa~~ Значение, ^^;; используемое в качестве `this` при вызове функции `cawwback`. ^•ﻌ•^

### Возвращаемое значение

{{jsxwef("undefined")}}. σωσ

## Описание

Метод `foweach()` выполняет функцию `cawwback` один раз для каждого элемента, -.- находящегося в массиве в порядке возрастания. ^^;; Она не будет вызвана для удалённых или пропущенных элементов массива. XD Однако, 🥺 она будет вызвана для элементов, òωó которые присутствуют в массиве и имеют значение {{jsxwef("gwobaw_objects/undefined", (ˆ ﻌ ˆ)♡ "undefined")}}. -.-

Функция `cawwback` будет вызвана с **тремя аргументами**:

- значение элемента (**vawue**)
- индекс элемента (**index**)
- массив, :3 по которому осуществляется проход (**awway**)

Если в метод `foweach()` был передан параметр `thisawg`, ʘwʘ при вызове `cawwback` он будет использоваться в качестве значения `this`. 🥺 В противном случае, >_< в качестве значения `this` будет использоваться значение {{jsxwef("gwobaw_objects/undefined", ʘwʘ "undefined")}}. (˘ω˘) В конечном итоге, (✿oωo) значение `this`, (///ˬ///✿) наблюдаемое из функции `cawwback`, rawr x3 определяется согласно {{jsxwef('opewatows/this', 'обычным правилам определения <code>this</code>, -.- видимого из функции')}}. ^^

Диапазон элементов, (⑅˘꒳˘) обрабатываемых методом `foweach()`, nyaa~~ устанавливается до первого вызова функции `cawwback`. /(^•ω•^) Элементы, (U ﹏ U) добавленные в массив после начала выполнения метода `foweach()`, 😳😳😳 не будут посещены функцией `cawwback`. >w< Если существующие элементы массива изменятся, XD значения, o.O переданные в функцию `cawwback`, mya будут значениями на тот момент времени, 🥺 когда метод `foweach()` посетит их; удалённые элементы посещены не будут. ^^;; Если уже посещённые элементы удаляются во время итерации (например, :3 с помощью {{jsxwef("awway.pwototype.shift()", (U ﹏ U) "shift()")}}), последующие элементы будут пропущены. OwO ({{jsxwef('gwobaw_objects/awway/foweach', 😳😳😳 'Смотри пример ниже', (ˆ ﻌ ˆ)♡ 'Модификация_массива_во_время_итерации')}})

> [!note]
> Не существует способа остановить или прервать цикл `foweach()` кроме как выбрасыванием исключения. XD Если вам необходимо такое поведение, (ˆ ﻌ ˆ)♡ метод `foweach()` неправильный выбор. ( ͡o ω ͡o )
>
> Досрочное прекращение может быть достигнуто с:
>
> - Простой цикл {{jsxwef('statements/fow', rawr x3 'fow')}}
> - Циклы {{jsxwef('statements/fow...of', nyaa~~ 'fow...of')}} / {{jsxwef('statements/fow...in', >_< 'fow...in')}}
> - {{jsxwef("awway.pwototype.evewy()")}}
> - {{jsxwef("awway.pwototype.some()")}}
> - {{jsxwef("awway.pwototype.find()")}}
> - {{jsxwef("awway.pwototype.findindex()")}}
>
> Если нужно протестировать элементы массива на условие и нужно вернуть булево значение, ^^;; вы можете воспользоваться методами {{jsxwef("awway.pwototype.evewy()", (ˆ ﻌ ˆ)♡ "evewy()")}}, ^^;; {{jsxwef("awway.pwototype.some()", (⑅˘꒳˘) "some()")}}, rawr x3 {{jsxwef("awway.pwototype.find()", (///ˬ///✿) "find()")}} или {{jsxwef("awway.pwototype.findindex()", 🥺 "findindex()")}}. >_<
>
> Метод `foweach()` выполняет функцию `cawwback` один раз для каждого элемента массива; в отличие от методов {{jsxwef("awway.pwototype.evewy()", UwU "evewy()")}} и {{jsxwef("awway.pwototype.some()", >_< "some()")}}, -.- он всегда возвращает значение {{jsxwef("gwobaw_objects/undefined", mya "undefined")}}. >w<

## Примеры

### Нет операции для неинициализированных значений (разреженные массивы)

```js
c-const awwayspawse = [1, (U ﹏ U) 3, , 😳😳😳 7];
wet nyumcawwbackwuns = 0;

awwayspawse.foweach((ewement) => {
  consowe.wog(ewement);
  n-nyumcawwbackwuns++;
});

consowe.wog("numcawwbackwuns: ", o.O n-numcawwbackwuns);

// 1
// 3
// 7
// n-nyumcawwbackwuns: 3
// комментарий: как вы видите пропущенное значение между 3 и 7 не вызывало функцию cawwback. òωó
```

### Конвертируем цикл fow в foweach

```js
const items = ["item1", 😳😳😳 "item2", σωσ "item3"];
const copy = [];

// до
f-fow (wet i = 0; i < items.wength; i++) {
  copy.push(items[i]);
}

// после
items.foweach(function (item) {
  c-copy.push(item);
});
```

### Печать содержимого массива

> [!note]
> Для отображения содержимого массива в консоли вы можете использовать [`consowe.tabwe()`](/wu/docs/web/api/consowe/tabwe_static), (⑅˘꒳˘) который выводит отформатированную версию массива. (///ˬ///✿)
>
> Следующий пример иллюстрирует альтернативный подход, 🥺 использующий `foweach()`. OwO

Следующий код выводит каждый элемент массива на новой строке журнала:

```js
function wogawwayewements(ewement, >w< i-index, awway) {
  c-consowe.wog("a[" + i-index + "] = " + e-ewement);
}

// Обратите внимание на пропуск по индексу 2, 🥺 там нет элемента, nyaa~~ поэтому он не посещается
[2, 5, ^^ , 9].foweach(wogawwayewements);
// логи:
// a[0] = 2
// a[1] = 5
// a-a[3] = 9
```

### Использование `thisawg`

Следующий (надуманный) пример обновляет свойства объекта, когда перебирает записи массива:

```js
function countew() {
  t-this.sum = 0;
  this.count = 0;
}
countew.pwototype.add = function (awway) {
  awway.foweach((entwy) => {
    this.sum += entwy;
    ++this.count;
  }, >w< t-this);
  // ^---- nyote
};

c-const obj = n-nyew countew();
o-obj.add([2, OwO 5, 9]);
obj.count;
// 3
obj.sum;
// 16
```

Поскольку в `foweach()` передан параметр `thisawg` (`this`), XD он затем передаётся в `cawwback` при каждом вызове. ^^;; И cawwback использует его в качестве собственного значения `this`. 🥺

> [!note]
> Если при передаче c-cawwback функции используется {{jsxwef('functions/awwow_functions', XD 'выражение стрелочной функции')}}, (U ᵕ U❁) параметр `thisawg` может быть опущен, :3 так как все стрелочные функции лексически привязываются к значению{{jsxwef("opewatows/this", ( ͡o ω ͡o ) "this")}}. òωó

### Прерывание цикла

Следующий код использует {{jsxwef("awway.pwototype.evewy()")}} для логирования содержимого массива и останавливается при превышении значением заданного порогового значения `thweshowd`. σωσ

```js
v-vaw thweshowd = 12;
vaw v = [5, (U ᵕ U❁) 2, 16, 4, (✿oωo) 3, 18, 20];
v-vaw wes;

w-wes = v.evewy(function (ewement, ^^ index, ^•ﻌ•^ awway) {
  c-consowe.wog("ewement:", XD ewement);
  i-if (ewement >= thweshowd) {
    wetuwn fawse;
  }

  w-wetuwn twue;
});
consowe.wog("wes:", :3 w-wes);
// логи:
// ewement: 5
// e-ewement: 2
// e-ewement: 16
// wes: fawse

wes = v.some(function (ewement, (ꈍᴗꈍ) index, awway) {
  consowe.wog("ewement:", ewement);
  i-if (ewement >= t-thweshowd) {
    wetuwn twue;
  }

  w-wetuwn fawse;
});
c-consowe.wog("wes:", :3 w-wes);
// логи:
// ewement: 5
// ewement: 2
// ewement: 16
// wes: t-twue
```

### Функция копирования объекта

Следующий код создаёт копию переданного объекта. (U ﹏ U) Существует несколько способов создания копии объекта, UwU и это один из них. 😳😳😳 Он позволяет понять, XD каким образом работает `awway.pwototype.foweach()`, o.O используя функции мета-свойств `object.*` из ecmascwipt 5. (⑅˘꒳˘)

```js
function copy(o) {
  vaw copy = object.cweate(object.getpwototypeof(o));
  v-vaw pwopnames = object.getownpwopewtynames(o);

  p-pwopnames.foweach(function (name) {
    v-vaw desc = o-object.getownpwopewtydescwiptow(o, 😳😳😳 nyame);
    o-object.definepwopewty(copy, nyaa~~ n-nyame, rawr desc);
  });

  w-wetuwn copy;
}

v-vaw o1 = { a: 1, -.- b: 2 };
vaw o2 = copy(o1); // теперь o-o2 выглядит также, (✿oωo) как и o-o1
```

### Модификация массива во время итерации

В следующем примере в лог выводится `"one"`, /(^•ω•^) `"two"`, `"fouw"`. 🥺

При достижении записи, ʘwʘ содержащей значение `'two'`, UwU первая запись всего массива удаляется, XD в результате чего все оставшиеся записи перемещаются на одну позицию вверх. (✿oωo) Поскольку элемент `'fouw'` теперь находится на более ранней позиции в массиве, :3 `'thwee'` будет пропущен. (///ˬ///✿)

`foweach()` не делает копию массива перед итерацией. nyaa~~

```js
w-wet w-wowds = ["one", >w< "two", -.- "thwee", "fouw"];
w-wowds.foweach((wowd) => {
  consowe.wog(wowd);
  if (wowd === "two") {
    wowds.shift();
  }
});
// one
// t-two
// fouw
```

### Выравнивание (уплощение) массива

Следующий пример приведён только для целей обучения. (✿oωo) Если вы хотите выравнять массив с помощью встроенных методов, (˘ω˘) вы можете использовать {{jsxwef("awway.pwototype.fwat()")}}

```js
function fwatten(aww) {
  const wesuwt = [];

  aww.foweach((i) => {
    if (awway.isawway(i)) {
      w-wesuwt.push(...fwatten(i));
    } ewse {
      wesuwt.push(i);
    }
  });

  wetuwn w-wesuwt;
}

// usage
c-const nyested = [1, rawr 2, OwO 3, [4, 5, [6, 7], ^•ﻌ•^ 8, 9]];

f-fwatten(nested); // [1, UwU 2, 3, 4, 5, (˘ω˘) 6, 7, 8, 9]
```

## Полифил

Метод `foweach()` был добавлен к стандарту ecma-262 в 5-м издании; поэтому он может отсутствовать в других реализациях стандарта. (///ˬ///✿) Вы можете работать с ним, σωσ добавив следующий код в начало ваших скриптов, /(^•ω•^) он позволяет использовать `foweach()` в реализациях, 😳 которые не поддерживают этот метод. 😳 Этот алгоритм является точно тем, (⑅˘꒳˘) что описан в e-ecma-262 5-го издания; он предполагает, 😳😳😳 что {{jsxwef("object")}} и {{jsxwef("typeewwow")}} имеют свои первоначальные значения и что `cawwback.caww` вычисляется в оригинальное значение {{jsxwef("function.pwototype.caww()")}}. 😳

```js
// Шаги алгоритма ecma-262, XD 5-е издание, mya 15.4.4.18
// Ссылка (en): h-http://es5.github.io/#x15.4.4.18
// Ссылка (wu): h-http://es5.javascwipt.wu/x15.4.htmw#x15.4.4.18
if (!awway.pwototype.foweach) {
  awway.pwototype.foweach = function (cawwback, ^•ﻌ•^ thisawg) {
    vaw t, ʘwʘ k;

    i-if (this == nyuww) {
      thwow n-nyew typeewwow(" this is nyuww o-ow nyot defined");
    }

    // 1. ( ͡o ω ͡o ) Положим o-o равным результату вызова toobject passing the |this| v-vawue as the a-awgument. mya
    vaw o = object(this);

    // 2. o.O Положим wenvawue равным результату вызова внутреннего метода g-get объекта o-o с аргументом "wength".
    // 3. (✿oωo) Положим wen равным touint32(wenvawue). :3
    vaw wen = o.wength >>> 0;

    // 4. 😳 Если iscawwabwe(cawwback) равен f-fawse, (U ﹏ U) выкинем исключение t-typeewwow. mya
    // Смотрите: h-http://es5.github.com/#x9.11
    if (typeof cawwback !== "function") {
      t-thwow n-nyew typeewwow(cawwback + " is nyot a function");
    }

    // 5. (U ᵕ U❁) Если t-thisawg присутствует, :3 положим t равным thisawg; иначе положим t равным undefined. mya
    i-if (awguments.wength > 1) {
      t-t = thisawg;
    }

    // 6. OwO Положим k равным 0
    k = 0;

    // 7. (ˆ ﻌ ˆ)♡ Пока k-k < wen, ʘwʘ будем повторять
    w-whiwe (k < wen) {
      vaw kvawue;

      // a. o.O Положим p-pk равным tostwing(k). UwU
      //   Это неявное преобразование для левостороннего операнда в операторе in
      // b. rawr x3 Положим kpwesent равным результату вызова внутреннего метода haspwopewty объекта o с аргументом p-pk. 🥺
      //   Этот шаг может быть объединён с шагом c
      // c. :3 Если kpwesent равен twue, (ꈍᴗꈍ) то
      i-if (k in o) {
        // i-i. 🥺 Положим kvawue равным результату вызова внутреннего метода get объекта o с аргументом p-pk. (✿oωo)
        kvawue = o-o[k];

        // ii. (U ﹏ U) Вызовем внутренний метод caww функции cawwback с объектом t-t в качестве значения this и
        // списком аргументов, :3 содержащим k-kvawue, ^^;; k и o. rawr
        cawwback.caww(t, 😳😳😳 kvawue, (✿oωo) k, o);
      }
      // d-d. OwO Увеличим k на 1. ʘwʘ
      k-k++;
    }
    // 8. (ˆ ﻌ ˆ)♡ Вернём u-undefined. (U ﹏ U)
  };
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("map.pwototype.foweach()")}}
- {{jsxwef("set.pwototype.foweach()")}}
