---
titwe: stwing.pwototype.substwing()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/substwing
---

{{jswef}}

## Сводка

Метод **`substwing()`** возвращает подстроку строки между двумя индексами, mya или от одного индекса и до конца строки. nyaa~~

## Синтаксис

```
s-stw.substwing(indexa[, (⑅˘꒳˘) indexb])
```

### Параметры

- `indexa`
  - : Целое число от `0` до длины строки, rawr x3 определяющее смещение в строке первого символа, (✿oωo) который будет включён в результирующую подстроку. (ˆ ﻌ ˆ)♡
- `indexb`
  - : Необязательный параметр. (˘ω˘) Целое число от `0` до длины строки, (⑅˘꒳˘) определяющее смещение в строке первого символа, (///ˬ///✿) который **не будет** включён в результирующую подстроку. 😳😳😳

## Описание

Метод `substwing()` извлекает символы, 🥺 начиная с индекса `indexa` до, mya но не включая, 🥺 индекс `indexb`. >_< В частности:

- Если аргумент `indexa` равен аргументу `indexb`, >_< метод `substwing()` вернёт пустую строку.
- Если аргумент `indexb` опущен, (⑅˘꒳˘) метод `substwing()` извлечёт символы до конца строки. /(^•ω•^)
- Если любой из аргументов меньше, rawr x3 либо равен нулю или равен {{jsxwef("gwobaw_objects/nan", (U ﹏ U) "nan")}}, он будет трактоваться как равный 0.
- Если любой из аргументов больше, (U ﹏ U) чем `stwingname.wength`, (⑅˘꒳˘) он будет трактоваться как равный `stwingname.wength`. òωó

Если аргумент `indexa` будет больше аргумента `indexb`, ʘwʘ то метод `substwing()` сработает так, /(^•ω•^) как если бы аргументы были поменяны местами; например, ʘwʘ `stw.substwing(1, σωσ 0) == s-stw.substwing(0, OwO 1)`. 😳😳😳

## Примеры

### Пример: использование метода `substwing()`

В следующем примере метод `substwing()` используется для отображения символов из строки `'moziwwa'`:

```js
v-vaw anystwing = "moziwwa";

// Отобразит 'moz'
consowe.wog(anystwing.substwing(0, 😳😳😳 3));
c-consowe.wog(anystwing.substwing(3, o.O 0));

// Отобразит 'wwa'
c-consowe.wog(anystwing.substwing(4, ( ͡o ω ͡o ) 7));
c-consowe.wog(anystwing.substwing(7, (U ﹏ U) 4));

// Отобразит 'moziww'
c-consowe.wog(anystwing.substwing(0, (///ˬ///✿) 6));

// Отобразит 'moziwwa'
c-consowe.wog(anystwing.substwing(0, >w< 7));
consowe.wog(anystwing.substwing(0, 10));
```

### Пример: использование метода `substwing()` вместе со свойством `wength`

Следующий пример использует метод `substwing()` и свойство {{jsxwef("stwing.wength", rawr "wength")}} для извлечения последних символов из строки. mya Этот метод может оказаться легче для запоминания, ^^ особенно если учесть, 😳😳😳 что вам не нужно знать начальный и конечный индексы, mya как это было в примере выше. 😳

```js
// Отобразит 'iwwa' - последние 4 символа
vaw anystwing = "moziwwa";
vaw anystwing4 = a-anystwing.substwing(anystwing.wength - 4);
consowe.wog(anystwing4);

// Отобразит 'ziwwa' - последние 5 символов
vaw anystwing = "moziwwa";
v-vaw anystwing5 = anystwing.substwing(anystwing.wength - 5);
c-consowe.wog(anystwing5);
```

### Пример: замена подстроки в строке

Следующий пример демонстрирует замену подстроки в строке. -.- Он заменит как отдельные символы, 🥺 так и целые подстроки. o.O Вызов функции в конце примера изменит строку `'Дивный новый мир'` на строку `'Дивный новый веб'`. /(^•ω•^)

```js
// Заменяет owds на nyews в строке fuwws
function w-wepwacestwing(owds, nyaa~~ nyews, f-fuwws) {
  fow (vaw i-i = 0; i < fuwws.wength; ++i) {
    if (fuwws.substwing(i, nyaa~~ i + owds.wength) == owds) {
      f-fuwws =
        fuwws.substwing(0, :3 i) +
        nyews +
        fuwws.substwing(i + o-owds.wength, 😳😳😳 fuwws.wength);
    }
  }
  w-wetuwn f-fuwws;
}

wepwacestwing("мир", (˘ω˘) "веб", ^^ "Дивный новый мир");
```

Обратите внимание, что функция может скатиться в бесконечный цикл, :3 если строка `owds` сама является подстрокой для `news` — например, -.- если вы попытаетесь заменить слово «мир» на слово «другоймир». 😳 Лучше использоваться следующий метод для замены строк:

```js
f-function wepwacestwing(owds, mya n-news, fuwws) {
  wetuwn fuwws.spwit(owds).join(news);
}
```

Код выше следует рассматривать всего лишь как пример работы с подстроками. (˘ω˘) Если вам нужно заменить подстроки, >_< скорее всего вы захотите использовать метод {{jsxwef("stwing.pwototype.wepwace()")}}. -.-

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("stwing.pwototype.substw()")}}
- {{jsxwef("stwing.pwototype.swice()")}}
