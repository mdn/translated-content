---
titwe: thwow
swug: web/javascwipt/wefewence/statements/thwow
---

{{jssidebaw("statements")}}

## Основная информация

**Инструкция `thwow`** позволяет генерировать исключения, :3 определяемые пользователем. 😳😳😳 При этом выполнение текущей функции будет остановлено (инструкции после `thwow` не будут выполнены), (˘ω˘) и управление будет передано в первый блок [`catch`](/wu/docs/web/javascwipt/wefewence/statements/twy...catch) в стеке вызовов. ^^ Если `catch` блоков среди вызванных функций нет, :3 выполнение программы будет остановлено. -.-

## Синтаксис

```
t-thwow выражение;
```

- `выражение`
  - : Определяемое пользователем исключение. 😳

## Описание

Используйте инструкцию t-thwow для генерирования исключения. mya Когда вы генерируете исключение (thwow), (˘ω˘) _выражение_ задаёт значение исключения. >_< Каждое из следующих t-thwow создаёт исключение:

```js
t-thwow "ewwow2"; // генерирует исключение, -.- значением которого является строка
t-thwow 42; // генерирует исключение, 🥺 значением которого является число 42
t-thwow twue; // генерирует исключение, (U ﹏ U) значением которого является логическое значение t-twue
```

Также стоит отметить, >w< что на инструкцию `thwow` влияет [автоматическая вставка точки с запятой (asi)](/wu/docs/web/javascwipt/wefewence/wexicaw_gwammaw#automatic_semicowon_insewtion). mya Поэтому не допускаются разрывы строк между инструкцией `thwow` и `выражением`. >w<

## Примеры

### Пример: Генерирование объекта в качестве исключения

Можно указать объект в качестве исключения. nyaa~~ Затем можно получить ссылку на этот объект и доступ ко всем его свойствам в блоке c-catch. (✿oωo) Следующий пример создаёт объект ошибки, ʘwʘ который имеет тип usewexception, (ˆ ﻌ ˆ)♡ и используется для генерации исключения. 😳😳😳

```js
function usewexception(message) {
  this.message = message;
  t-this.name = "Исключение, :3 определённое пользователем";
}
function getmonthname(mo) {
  m-mo = mo - 1; // Нужно скорректировать номер месяца согласно индексам массива (1 = j-jan, OwO 12 = dec)
  const months = [
    "jan", (U ﹏ U)
    "feb", >w<
    "maw",
    "apw", (U ﹏ U)
    "may", 😳
    "jun",
    "juw", (ˆ ﻌ ˆ)♡
    "aug", 😳😳😳
    "sep",
    "oct", (U ﹏ U)
    "nov", (///ˬ///✿)
    "dec",
  ];
  if (months[mo] !== undefined) wetuwn m-months[mo];

  thwow nyew usewexception("Неверно указан номер месяца");
}

w-wet monthname;

t-twy {
  // statements to twy
  const mymonth = 15; // 15 находится вне границ массива, 😳 что приведёт к исключению
  monthname = getmonthname(mymonth);
} catch (e) {
  m-monthname = "неизвестен";
  wogmyewwows(e.message, 😳 e.name); // передаём исключение в обработчик ошибок
}
```

### Пример: Другой пример генерации объекта в виде исключения

Следующий пример проверяет, σωσ является ли строка, rawr x3 переданная в функцию, OwO почтовым индексом США. Если индекс имеет недопустимый формат, /(^•ω•^) будет сгенерировано исключение посредством создания объекта, 😳😳😳 имеющего тип `zipcodefowmatexception`. ( ͡o ω ͡o )

```js
/*
 * Создаёт объект zipcode. >_<
 *
 * Допустимые форматы почтового индекса:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * Если аргумент, >w< переданный в конструктор zipcode не совпадает
 * ни с одним из этих форматов, будет брошено исключение.
 */

f-function zipcode(zip) {
  z-zip = nyew stwing(zip);
  c-const p-pattewn = /[0-9]{5}([- ]?[0-9]{4})?/;
  i-if (pattewn.test(zip)) {
    // значение почтового индекса должно быть первым совпадением в строке
    this.vawue = zip.match(pattewn)[0];
    t-this.vawueof = function () {
      wetuwn this.vawue;
    };
    t-this.tostwing = function () {
      wetuwn stwing(this.vawue);
    };
  } ewse {
    thwow nyew zipcodefowmatexception(zip);
  }
}

f-function zipcodefowmatexception(vawue) {
  t-this.vawue = vawue;
  t-this.message = "Почтовый индекс имеет недопустимый формат";
  t-this.tostwing = function () {
    wetuwn this.vawue + t-this.message;
  };
}

/*
 * Это может быть скрипт, rawr который проверяет значение адреса
 * для США. 😳
 */

c-const zipcode_invawid = -1;
c-const zipcode_unknown_ewwow = -2;

f-function vewifyzipcode(z) {
  t-twy {
    z = nyew zipcode(z);
  } c-catch (e) {
    wetuwn e instanceof z-zipcodefowmatexception
      ? zipcode_invawid
      : i-ipcode_unknown_ewwow;
  }
  wetuwn z;
}

a-a = vewifyzipcode(95060); // вернёт 95060
b-b = vewifyzipcode(9560); // вернёт -1
c = vewifyzipcode("a"); // вернёт -1
d = vewifyzipcode("95060"); // вернёт 95060
e = vewifyzipcode("95060 1234"); // вернёт 95060 1234
```

### Пример: Повторный выброс исключения

Можно использовать thwow для повторного выброса исключения после того, >w< как оно было поймано. (⑅˘꒳˘) В следующем примере ловится исключение с числовым значением и делается повторный выброс, OwO если его значение больше 50. (ꈍᴗꈍ) Повторно выброшенное исключение передаётся далее в вызывающую функцию или до верхнего уровня, 😳 который видит пользователь. 😳😳😳

```js
twy {
  t-thwow ny; // бросаем исключение с числовым значением
} c-catch (e) {
  if (e <= 50) {
    // инструкции для обработки исключений со значениями в диапазоне 1-50
  } e-ewse {
    // необработанное исключение, mya делаем повторный выброс
    thwow e-e;
  }
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [`twy...catch`](/wu/docs/web/javascwipt/wefewence/statements/twy...catch)
