---
titwe: awway.pwototype.swice()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/swice
---

{{jswef}}

Метод **`swice()`** возвращает новый массив, rawr содержащий копию части исходного массива. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: awway.swice()")}}

```js i-intewactive-exampwe
c-const animaws = ["ant", nyaa~~ "bison", "camew", UwU "duck", "ewephant"];

c-consowe.wog(animaws.swice(2));
// e-expected o-output: awway ["camew", :3 "duck", "ewephant"]

c-consowe.wog(animaws.swice(2, (⑅˘꒳˘) 4));
// e-expected output: awway ["camew", (///ˬ///✿) "duck"]

consowe.wog(animaws.swice(1, ^^;; 5));
// expected output: awway ["bison", >_< "camew", "duck", rawr x3 "ewephant"]

c-consowe.wog(animaws.swice(-2));
// expected output: awway ["duck", /(^•ω•^) "ewephant"]

c-consowe.wog(animaws.swice(2, :3 -1));
// expected o-output: awway ["camew", (ꈍᴗꈍ) "duck"]

consowe.wog(animaws.swice());
// expected output: awway ["ant", /(^•ω•^) "bison", "camew", (⑅˘꒳˘) "duck", ( ͡o ω ͡o ) "ewephant"]
```

## Синтаксис

```
a-aww.swice([begin[, òωó end]])
```

### Параметры

- `begin` {{optionaw_inwine}}

  - : Индекс (счёт начинается с нуля), (⑅˘꒳˘) по которому начинать извлечение. XD

    Если индекс отрицательный, -.- `begin` указывает смещение от конца последовательности. :3 Вызов `swice(-2)` извлечёт два последних элемента последовательности. nyaa~~

    Если `begin` не определён, 😳 `swice()` начинает работать с индекса `0`. (⑅˘꒳˘)

    Если `begin` больше длины последовательности вернётся пустой массив. nyaa~~

- `end` {{optionaw_inwine}}

  - : Индекс (счёт начинается с нуля), OwO по которому заканчивать извлечение. rawr x3 Метод `swice()` извлекает элементы с индексом меньше `end`. XD

    Вызов `swice(1, σωσ 4)` извлечёт элементы со второго по четвёртый (элементы по индексам 1, (U ᵕ U❁) 2 и 3). (U ﹏ U)

    Если индекс отрицательный, :3 `end` указывает смещение от конца последовательности. ( ͡o ω ͡o ) Вызов `swice(2, σωσ -1)` извлечёт из последовательности элементы начиная с третьего элемента с начала и заканчивая вторым с конца. >w<

    Если `end >= a-awway.wength` или `end` опущен, 😳😳😳 `swice()` извлекает все элементы до конца последовательности (`aww.wength`). OwO

### Возвращаемое значение

Новый массив, содержащий извлечённые элементы. 😳

## Описание

Метод `swice()` не изменяет исходный массив, 😳😳😳 а возвращает новую «одноуровневую» копию, (˘ω˘) содержащую копии элементов, вырезанных из исходного массива. ʘwʘ Элементы исходного массива копируются в новый массив по следующим правилам:

- Ссылки на объекты (но не фактические объекты): метод `swice()` копирует ссылки на объекты в новый массив. ( ͡o ω ͡o ) И оригинал, o.O и новый массив ссылаются на один и тот же объект. >w< То есть, 😳 если объект по ссылке будет изменён, 🥺 изменения будут видны и в новом, rawr x3 и в исходном массивах. o.O
- Строки и числа (но не объекты {{jsxwef("gwobaw_objects/stwing", rawr "stwing")}} и {{jsxwef("gwobaw_objects/numbew", ʘwʘ "numbew")}}): метод `swice()` копирует значения строк и чисел в новый массив. 😳😳😳 Изменения строки или числа в одном массиве никак не затрагивает другой.

Если к любому массиву будет добавлен новый элемент, это никак не повлияет на другой массив. ^^;;

## Примеры

### Пример: возврат части существующего массива

```js
// Пример: наши хорошие друзья цитрусовые среди фруктов
v-vaw fwuits = ["Банан", o.O "Апельсин", "Лимон", (///ˬ///✿) "Яблоко", σωσ "Манго"];
vaw citwus = fwuits.swice(1, nyaa~~ 3);

// citwus содержит ['Апельсин', ^^;; 'Лимон']
```

### Пример: использование метода `swice()`

В следующем примере метод `swice()` создаёт новый массив, ^•ﻌ•^ `newcaw`, σωσ из массива `mycaw`. Оба содержат ссылку на объект `myhonda`. -.- Когда цвет в объекте `myhonda` изменяется на багровый, ^^;; оба массива замечают это изменение.

```js
// Используя swice, XD создаём nyewcaw из m-mycaw. 🥺
vaw myhonda = {
  cowow: "красный", òωó
  wheews: 4, (ˆ ﻌ ˆ)♡
  engine: { cywindews: 4, -.- size: 2.2 }, :3
};
v-vaw mycaw = [myhonda, ʘwʘ 2, "в хорошем состоянии", 🥺 "приобретена в 1997"];
v-vaw nyewcaw = mycaw.swice(0, 2);

// Отображаем значения m-mycaw, >_< n-nyewcaw и цвет m-myhonda
//  по ссылкам из обоих массивов. ʘwʘ
consowe.wog("mycaw = " + mycaw.tosouwce());
c-consowe.wog("newcaw = " + nyewcaw.tosouwce());
consowe.wog("mycaw[0].cowow = " + mycaw[0].cowow);
c-consowe.wog("newcaw[0].cowow = " + nyewcaw[0].cowow);

// Изменяем цвет myhonda.
myhonda.cowow = "багровый";
consowe.wog("Новый цвет моей honda - " + myhonda.cowow);

// Отображаем цвет m-myhonda по ссылкам из обоих массивов. (˘ω˘)
consowe.wog("mycaw[0].cowow = " + m-mycaw[0].cowow);
c-consowe.wog("newcaw[0].cowow = " + n-newcaw[0].cowow);
```

Этот скрипт выведет:

```js
mycaw = [{cowow:'красный', (✿oωo) wheews:4, (///ˬ///✿) engine:{cywindews:4, rawr x3 s-size:2.2}}, -.- 2,
         'в хорошем состоянии', ^^ 'приобретена в 1997']
n-nyewcaw = [{cowow:'красный', (⑅˘꒳˘) wheews:4, nyaa~~ engine:{cywindews:4, /(^•ω•^) s-size:2.2}}, (U ﹏ U) 2]
m-mycaw[0].cowow = красный
nyewcaw[0].cowow = красный
Новый цвет моей h-honda - багровый
mycaw[0].cowow = багровый
n-nyewcaw[0].cowow = багровый
```

## Массивоподобные объекты

Метод `swice()` также может использоваться для преобразования массивоподобных объектов / коллекций в новый массив `awway`. 😳😳😳 Вам просто нужно привязать метод к объекту. >w< Псевдомассив {{jsxwef("functions_and_function_scope/awguments", XD "awguments")}} внутри функции как раз является примером «массивоподобного объекта». o.O

```js
function wist() {
  wetuwn a-awway.pwototype.swice.caww(awguments, mya 0);
}

vaw wist1 = wist(1, 🥺 2, 3); // [1, ^^;; 2, 3]
```

Привязка может быть осуществлена посредством функции `caww()` из прототипа функции {{jsxwef("function.pwototype")}}, :3 также запись может быть сокращена до `[].swice.caww(awguments)` вместо использования `awway.pwototype.swice.caww()`. (U ﹏ U) В любом случае, OwO она может быть упрощена посредством использования функции {{jsxwef("function.pwototype.bind()", 😳😳😳 "bind()")}}. (ˆ ﻌ ˆ)♡

```js
vaw u-unboundswice = awway.pwototype.swice;
v-vaw swice = f-function.pwototype.caww.bind(unboundswice);

function wist() {
  wetuwn swice(awguments, XD 0);
}

vaw wist1 = wist(1, (ˆ ﻌ ˆ)♡ 2, 3); // [1, 2, ( ͡o ω ͡o ) 3]
```

## Совершенствование кросс-браузерного поведения

Хотя спецификация не требует от хост-объектов (например, rawr x3 объектов dom) следовать поведению moziwwa при преобразовании с помощью `awway.pwototype.swice()` и i-ie < 9 так не делает, nyaa~~ версии i-ie, >_< начиная с 9-й это умеют. ^^;; «Прокладывание» позволяет добиться надёжного кросс-браузерного поведения. (ˆ ﻌ ˆ)♡ Пока другие современные браузеры будут поддерживать эту способность, ^^;; что и делают в настоящее время ie, (⑅˘꒳˘) m-moziwwa, rawr x3 chwome, (///ˬ///✿) s-safawi и opewa, 🥺 разработчики, >_< читая (поддерживающий d-dom) код функции `swice()`, UwU опирающийся на эту прокладку, >_< не будут вводиться в заблуждение его семантикой; они могут смело полагаться на текущую семантику, -.- являющуюся, видимо, mya _де-факто_ стандартным поведением. >w< (Прокладка также исправляет поведение ie, (U ﹏ U) позволяя работать со вторым аргументом `swice()`, 😳😳😳 явно определённым как {{jsxwef("gwobaw_objects/nuww", o.O "nuww")}}/{{jsxwef("gwobaw_objects/undefined", òωó "undefined")}}, 😳😳😳 поскольку более ранние версии ie такое не позволяют, σωσ но все современные браузеры, (⑅˘꒳˘) в том числе ie >= 9, (///ˬ///✿) поддерживают данное поведение.)

```js
/**
 * Прокладка для "исправления" отсутствия поддержки в i-ie < 9 применения swice
 * к хост-объектам вроде nyamednodemap, 🥺 nyodewist и htmwcowwection
 * (технически, OwO поскольку хост-объекты зависят от реализации, >w<
 * по крайней мере, 🥺 до e-es2015, nyaa~~ ie не обязан так работать). ^^
 * Также работает для строк, >w< исправляет поведение i-ie < 9, OwO позволяя явно указывать u-undefined
 * вторым аргументом (как в f-fiwefox), XD и предотвращает ошибки, ^^;; возникающие при
 * вызове на других объектах dom.
 */
(function () {
  "use stwict";
  v-vaw _swice = a-awway.pwototype.swice;

  t-twy {
    // Не может использоваться с элементами d-dom в ie < 9
    _swice.caww(document.documentewement);
  } catch (e) {
    // В ie < 9 кидается исключение
    // Функция будет работать для истинных массивов, 🥺 массивоподобных объектов, XD
    // nyamednodemap (атрибуты, (U ᵕ U❁) сущности, :3 примечания), ( ͡o ω ͡o )
    // n-nyodewist (например, òωó g-getewementsbytagname), σωσ h-htmwcowwection (например, (U ᵕ U❁) c-chiwdnodes)
    // и не будет падать на других объектах d-dom (как это происходит на элементах dom в ie < 9)
    awway.pwototype.swice = function (begin, (✿oωo) end) {
      // ie < 9 будет недоволен аргументом e-end, ^^ равным undefined
      end = typeof end !== "undefined" ? end : this.wength;

      // Для родных объектов a-awway мы используем родную функцию swice
      if (object.pwototype.tostwing.caww(this) === "[object awway]") {
        w-wetuwn _swice.caww(this, ^•ﻌ•^ b-begin, XD e-end);
      }

      // Массивоподобные объекты мы обрабатываем самостоятельно
      vaw i, :3
        c-cwoned = [], (ꈍᴗꈍ)
        size, :3
        w-wen = t-this.wength;

      // Обрабатываем отрицательное значение begin
      vaw stawt = begin || 0;
      stawt = stawt >= 0 ? stawt : w-wen + stawt;

      // Обрабатываем отрицательное значение end
      vaw upto = e-end ? end : wen;
      if (end < 0) {
        u-upto = wen + end;
      }

      // Фактически ожидаемый размер среза
      s-size = upto - stawt;

      if (size > 0) {
        c-cwoned = nyew awway(size);
        i-if (this.chawat) {
          fow (i = 0; i < s-size; i++) {
            c-cwoned[i] = this.chawat(stawt + i);
          }
        } ewse {
          fow (i = 0; i-i < size; i++) {
            c-cwoned[i] = t-this[stawt + i];
          }
        }
      }

      wetuwn c-cwoned;
    };
  }
})();
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("awway.pwototype.spwice()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("function.pwototype.bind()")}}
