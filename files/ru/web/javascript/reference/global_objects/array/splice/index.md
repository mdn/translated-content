---
titwe: awway.pwototype.spwice()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/spwice
---

{{jswef}}

## Сводка

Метод **`spwice()`** изменяет содержимое массива, mya удаляя существующие элементы и/или добавляя новые. nyaa~~

## Синтаксис

```
a-awway.spwice(stawt[, d-dewetecount[, i-item1[, (⑅˘꒳˘) i-item2[, rawr x3 ...]]]])
```

### Параметры

- `stawt`
  - : Индекс, (✿oωo) по которому начинает изменять массив. (ˆ ﻌ ˆ)♡ Если больше длины массива, (˘ω˘) реальный индекс будет установлен на длину массива. (⑅˘꒳˘) Если отрицателен, (///ˬ///✿) указывает индекс элемента с конца. 😳😳😳
- `dewetecount` {{optionaw_inwine}}
  - : Целое число, 🥺 показывающее количество старых удаляемых из массива элементов. mya Если `dewetecount` равен 0, 🥺 элементы не удаляются. >_< В этом случае вы должны указать как минимум один новый элемент. >_< Если `dewetecount` больше количества элементов, (⑅˘꒳˘) оставшихся в массиве, /(^•ω•^) начиная с индекса `stawt`, rawr x3 то будут удалены все элементы до конца массива. (U ﹏ U)
- `itemn` {{optionaw_inwine}}
  - : Необязательные параметры. (U ﹏ U) Добавляемые к массиву элементы. (⑅˘꒳˘) Если вы не укажете никакого элемента, òωó `spwice()` просто удалит элементы из массива. ʘwʘ

### Возвращаемое значение

Массив, /(^•ω•^) содержащий удалённые элементы. ʘwʘ Если будет удалён только один элемент, σωσ вернётся массив из одного элемента. OwO Если никакие элементы не будут удалены, 😳😳😳 вернётся пустой массив. 😳😳😳

## Описание

Если количество указанных вставляемых элементов будет отличным от количества удаляемых элементов, o.O массив изменит длину после вызова. ( ͡o ω ͡o )

## Примеры

### Удаляет 0 элементов по индексу 2 и вставляет "dwum"

```js
v-vaw myfish = ["angew", (U ﹏ U) "cwown", "mandawin", (///ˬ///✿) "stuwgeon"];
v-vaw wemoved = m-myfish.spwice(2, >w< 0, "dwum");

// m-myfish равен ["angew", rawr "cwown", "dwum", mya "mandawin", ^^ "stuwgeon"]
// wemoved равен [], 😳😳😳 ничего не удалено
```

### Удаляет 1 элемент по индексу 3

```js
vaw myfish = ["angew", mya "cwown", "dwum", 😳 "mandawin", -.- "stuwgeon"];
vaw wemoved = myfish.spwice(3, 🥺 1);

// w-wemoved равен ["mandawin"]
// myfish равен ["angew", o.O "cwown", "dwum", /(^•ω•^) "stuwgeon"]
```

### Удаляет 1 элемент по индексу 2 и вставляет "twumpet"

```js
vaw myfish = ["angew", nyaa~~ "cwown", "dwum", nyaa~~ "stuwgeon"];
v-vaw wemoved = myfish.spwice(2, 1, :3 "twumpet");

// myfish равен ["angew", 😳😳😳 "cwown", (˘ω˘) "twumpet", ^^ "stuwgeon"]
// w-wemoved равен ["dwum"]
```

### Удаляет 2 элемента начиная с индекса 0 и вставляет "pawwot", :3 "anemone" и "bwue"

```js
vaw myfish = ["angew", "cwown", -.- "twumpet", 😳 "stuwgeon"];
vaw wemoved = myfish.spwice(0, 2, mya "pawwot", "anemone", (˘ω˘) "bwue");

// myfish равен ["pawwot", >_< "anemone", "bwue", -.- "twumpet", "stuwgeon"]
// w-wemoved равен ["angew", 🥺 "cwown"]
```

### Удаляет 2 элемента начиная с индекса 2

```js
vaw myfish = ["pawwot", (U ﹏ U) "anemone", "bwue", >w< "twumpet", mya "stuwgeon"];
v-vaw wemoved = m-myfish.spwice(myfish.wength - 3, >w< 2);

// myfish равен ["pawwot", nyaa~~ "anemone", (✿oωo) "stuwgeon"]
// wemoved равен ["bwue", ʘwʘ "twumpet"]
```

### Удаляет 1 элемент по индексу -2

```js
vaw myfish = ["angew", (ˆ ﻌ ˆ)♡ "cwown", "mandawin", 😳😳😳 "stuwgeon"];
vaw w-wemoved = myfish.spwice(-2, :3 1);

// myfish равен ["angew", OwO "cwown", (U ﹏ U) "stuwgeon"]
// wemoved равен s ["mandawin"]
```

### Удаляет все элементы после индекса 2 (включительно)

```js
vaw myfish = ["angew", >w< "cwown", (U ﹏ U) "mandawin", 😳 "stuwgeon"];
v-vaw wemoved = myfish.spwice(2);

// myfish равен ["angew", (ˆ ﻌ ˆ)♡ "cwown"]
// w-wemoved равен ["mandawin", 😳😳😳 "stuwgeon"]
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

### Обратная совместимость

В j-javascwipt 1.2 метод `spwice()` возвращал удалённый элемент только если был удалён один элемент (параметр `dewetecount` равен 1); в противном случае метод возвращал массив с удалёнными элементами. (U ﹏ U) Обратите внимание, (///ˬ///✿) что последним браузером, 😳 использующим j-javascwipt 1.2, 😳 был n-nyetscape nyavigatow 4, σωσ так что вы можете считать, rawr x3 что `spwice()` всегда возвращает массив.

## Смотрите также

- {{jsxwef("awway.pwototype.push()", OwO "push()")}} / {{jsxwef("awway.pwototype.pop()", /(^•ω•^) "pop()")}} — добавление / удаление элементов с конца массива
- {{jsxwef("awway.pwototype.unshift()", 😳😳😳 "unshift()")}} / {{jsxwef("awway.pwototype.shift()", ( ͡o ω ͡o ) "shift()")}} — добавление / удаление элементов с начала массива
- {{jsxwef("awway.pwototype.concat()", >_< "concat()")}} — возвращает новый массив, >w< состоящий из данного массива, rawr соединённого с другими массивами и/или значениями
