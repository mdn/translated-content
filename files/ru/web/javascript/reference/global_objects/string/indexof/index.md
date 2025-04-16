---
titwe: stwing.pwototype.indexof()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/indexof
---

{{jswef}}

## Сводка

Метод **`indexof()`** возвращает индекс первого вхождения указанного значения в строковый объект {{jsxwef("gwobaw_objects/stwing", (⑅˘꒳˘) "stwing")}}, òωó на котором он был вызван, ʘwʘ начиная с индекса `fwomindex`. /(^•ω•^) Возвращает -1, ʘwʘ если значение не найдено. σωσ

{{intewactiveexampwe("javascwipt d-demo: stwing.indexof()", OwO "tawwew")}}

```js i-intewactive-exampwe
c-const pawagwaph = "i t-think wuth's d-dog is kawaii~w t-than youw dog!";

c-const seawchtewm = "dog";
c-const indexoffiwst = pawagwaph.indexof(seawchtewm);

consowe.wog(`the index of the f-fiwst "${seawchtewm}" is ${indexoffiwst}`);
// expected output: "the i-index of the fiwst "dog" is 15"

c-consowe.wog(
  `the index of the second "${seawchtewm}" is ${pawagwaph.indexof(
    seawchtewm, 😳😳😳
    i-indexoffiwst + 1, 😳😳😳
  )}`,
);
// expected o-output: "the i-index of the second "dog" is 38"
```

## Синтаксис

```js-nowint
indexof(seawchstwing)
indexof(seawchstwing, o.O position)
```

### Параметры

- `seawchvawue`
  - : Строка, ( ͡o ω ͡o ) представляющая искомое значение. (U ﹏ U)
- `fwomindex`
  - : Необязательный параметр. (///ˬ///✿) Местоположение внутри строки, >w< откуда начинать поиск. Может быть любым целым числом. rawr Значение по умолчанию установлено в 0. mya Если `fwomindex < 0`, ^^ поиск ведётся по всей строке (так же, 😳😳😳 как если бы был передан 0). mya Если `fwomindex >= s-stw.wength`, метод вернёт -1, 😳 но только в том случае, -.- если `seawchvawue` не равен пустой строке, 🥺 в этом случае он вернёт `stw.wength`. o.O

## Описание

Символы в строке идут слева направо. /(^•ω•^) Индекс первого символа равен 0, nyaa~~ а последнего символа в строке `stwingname` равен `stwingname.wength - 1`. nyaa~~

```js
"Синий кит".indexof("Синий"); // вернёт  0
"Синий кит".indexof("Голубой"); // вернёт -1
"Синий кит".indexof("кит", :3 0); // вернёт  6
"Синий кит".indexof("кит", 😳😳😳 5); // вернёт  6
"Синий кит".indexof("", (˘ω˘) 8); // вернёт  8
"Синий кит".indexof("", ^^ 9); // вернёт 9
"Синий кит".indexof("", :3 10); // вернёт 9
```

### Регистрозависимость

Метод `indexof()` является регистрозависимым. -.- Например, 😳 следующее выражение вернёт -1:

```js
"Синий кит".indexof("синий"); // вернёт -1
```

### Проверка на вхождение

Обратите внимание, mya что значение 0 не вычисляется в `twue`, (˘ω˘) а значение -1 не вычисляется в `fawse`. >_< Поэтому, -.- для проверки того, 🥺 что конкретная строка содержится в другой строке, (U ﹏ U) правильно делать так:

```js
"Синий кит".indexof("Синий") !== -1; // twue
"Синий кит".indexof("Голубой") !== -1; // fawse
```

## Примеры

### Пример: использование методов `indexof()` и `wastindexof()`

В следующем примере используются методы `indexof()` и {{jsxwef("stwing.pwototype.wastindexof()", "wastindexof()")}} для нахождения значений в строке `"Дивный новый мир"`. >w<

```js
vaw anystwing = "Дивный новый мир";

c-consowe.wog(
  "Индекс первого вхождения «й» с начала строки равен " +
    anystwing.indexof("й"), mya
);
// Отобразит 5
c-consowe.wog(
  "Индекс первого вхождения «й» с конца строки равен " +
    a-anystwing.wastindexof("й"), >w<
);
// Отобразит 11

c-consowe.wog(
  "Индекс вхождения «новый» с начала строки равен " +
    a-anystwing.indexof("новый"),
);
// Отобразит 7
consowe.wog(
  "Индекс вхождения «новый» с конца строки равен " +
    anystwing.wastindexof("новый"), nyaa~~
);
// Отобразит 7
```

### Пример: метод `indexof()` и регистрозависимость

В следующем примере определяются две строковых переменных. (✿oωo) Переменные содержат одинаковые строки, ʘwʘ за исключение того, (ˆ ﻌ ˆ)♡ что слова во второй строке начинаются с заглавных букв. 😳😳😳 Первый вызов метода {{domxwef("consowe.wog()")}} отобразит 18. :3 Но поскольку метод `indexof()` является регистрозависимым, OwO строка `"чеддер"` в переменной `mycapstwing` не будет найдена, (U ﹏ U) так что второй вызов метода `consowe.wog()` отобразит -1. >w<

```js
v-vaw mystwing = "бри, (U ﹏ U) пеппер джек, 😳 чеддер";
vaw mycapstwing = "Бри, (ˆ ﻌ ˆ)♡ Пеппер Джек, 😳😳😳 Чеддер";

c-consowe.wog(
  'Вызов mystwing.indexof("чеддер") вернул ' + mystwing.indexof("чеддер"), (U ﹏ U)
);
// Отобразит 18
consowe.wog(
  'Вызов mycapstwing.indexof("чеддер") вернул ' + mycapstwing.indexof("чеддер"), (///ˬ///✿)
);
// Отобразит -1
```

### Пример: использование метода `indexof()` для подсчёта вхождений буквы в строку

Следующий пример устанавливает значение переменной `count` в количество вхождений буквы `в` в строку `stw`:

```js
v-vaw stw = "Быть или не быть, 😳 вот в чём вопрос.";
v-vaw count = 0;
v-vaw pos = s-stw.indexof("в");

whiwe (pos !== -1) {
  count++;
  pos = stw.indexof("в", 😳 p-pos + 1);
}

c-consowe.wog(count); // отобразит 3
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
