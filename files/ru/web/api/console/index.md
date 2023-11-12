---
title: Console
slug: Web/API/console
---

{{APIRef("Console API")}}

Объект **Console** служит для доступа к средствам отладки браузера (например, [Web Console (Веб-консоль)](/ru/docs/Tools/Web_Console) в Firefox). Работа с ним отличается в разных браузерах, но эти методы и свойства по факту поддерживаются всеми браузерами.

Доступ к **Console** можно получить через свойство глобального объекта, то есть: {{domxref("Window")}} в браузере (в JavaScript), {{domxref("WorkerGlobalScope")}} — в `workers` это специальный способ доступа через свойство `console`. Он известен как {{domxref("Window.console")}}, и на него ссылаются для простоты так: "`console`".

```js
console.log("Failed to open the specified link");
```

Ниже описаны [методы](#Methods), доступные в объекте Console и приведены несколько примеров их [использования](#Usage).

{{AvailableInWorkers}}

## Методы

- {{domxref("console.assert()")}}
  - : Выводит в консоль (имеется ввиду веб-консоль) сообщение и стек вызова метода, если первый аргумент `false`.
- {{domxref("console.clear()")}}
  - : Очистка консоли.
- {{domxref("console.count()")}}
  - : Выводит количество вызовов метода с определённой меткой (передаётся в параметре метода)

<!---->

- {{domxref("console.countReset()")}}
  - : Обнуляет значение счётчика с заданным значением.

<!---->

- {{domxref("console.debug()")}}
  - : Синоним для `log()`
- {{domxref("console.dir()")}} {{Non-standard_inline}}
  - : Отображает интерактивный список свойств указанного объекта JavaScript. Этот список позволит вам посмотреть дочерние объекты и их свойства.
- {{domxref("console.dirxml()")}} {{Non-standard_inline}}
  - : Отображает представление указанного объекта в XML/HTML-виде, если это возможно. Если нет - в виде JavaScript-объекта (как в виде "console.dir()").
- {{domxref("console.error()")}}
  - : Выводит сообщение об ошибке. Для форматирования вы можете использовать [подстановочные символы (маски)](/ru/docs/Web/API/console#Using_string_substitutions) с дополнительными параметрами.
- {{domxref("console._exception()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Синоним для `error();`
- {{domxref("console.group()")}}
  - : Создаёт новую [группировку](/ru/docs/Web/API/console#Using_groups_in_the_console) сообщений, сдвигая все следующие выводимые строки вправо на один уровень. Для завершения [группы](/ru/docs/Web/API/console#Using_groups_in_the_console) вызовите `groupEnd()`.
- {{domxref("console.groupCollapsed()")}}
  - : Создаёт новую [группировку](/ru/docs/Web/API/console#Using_groups_in_the_console) сообщений, сдвигая все следующие сообщения вправо на один уровень; в отличие от `group()` вывод происходи в свёрнутую [группу](/ru/docs/Web/API/console#Using_groups_in_the_console), требующую раскрыть её вручную по кнопке. Для завершения [группы](/ru/docs/Web/API/console#Using_groups_in_the_console)вызовите `groupEnd()`.
- {{domxref("console.groupEnd()")}}
  - : Выход из текущей [группы](/ru/docs/Web/API/console#Using_groups_in_the_console).
- {{domxref("console.info()")}}
  - : Информационное сообщение. Для форматирования вы можете использовать [подстановочные символы (маски)](/ru/docs/Web/API/console#Using_string_substitutions) с дополнительными параметрами.
- {{domxref("console.log()")}}
  - : Общий метод вывода информации. Для форматирования вы можете использовать [подстановочные символы (маски)](/ru/docs/Web/API/console#Using_string_substitutions) с дополнительными параметрами.
- {{domxref("console.profile()")}} {{Non-standard_inline}}
  - : Запускает профайлер, встроенный в браузер (например, [Firefox performance tool](/ru/docs/Tools/Производительность)). Вы можете указать метку профиля (по желанию).
- {{domxref("console.profileEnd()")}} {{Non-standard_inline}}
  - : Останавливает профайлер.Вы можете посмотреть результат в инструментах анализа производительности браузера (например, [Firefox performance tool](/ru/docs/Tools/Производительность)).
- {{domxref("console.table()")}}
  - : Отображает табличные данные в виде таблицы.
- {{domxref("console.time()")}}
  - : Запускает [таймер](/ru/docs/Web/API/console#Timers) с именем из переданного параметра. Можно запустить одновременно до 10,000 таймеров на странице.
- {{domxref("console.timeEnd()")}}
  - : Останавливает указанный [таймер](/ru/docs/Web/API/console#Timers) и записывает в лог, сколько прошло секунд от его старта.
- {{domxref("console.timeStamp()")}} {{Non-standard_inline}}
  - : Ставит маркер в браузерном инструменте измерения производительности [Timeline](https://developer.chrome.com/devtools/docs/timeline) или [Waterfall](/ru/docs/Tools/Производительность/Waterfall).
- {{domxref("console.trace()")}}
  - : Вывод [трассировки стека](/ru/docs/Web/API/console#Stack_traces).
- {{domxref("console.warn()")}}
  - : Выводит предупреждающее сообщение. Для форматирования вы можете использовать [подстановочные символы (маски)](/ru/docs/Web/API/console#Using_string_substitutions) с дополнительными параметрами.

## Использование

### Вывод текста в консоль

Чаще всего Консоль используется для вывода строк текста и других типов данных. Существует четыре категории вывода, которые вы можете создавать, используя функции {{domxref("console.log()")}}, {{domxref("console.info()")}}, {{domxref("console.warn()")}}, {{domxref("console.error()")}}. Их вывод стилизован по-разному, и вы можете использовать фильтры, предоставляемые браузером, чтобы видеть только интересующие вас вещи.

Есть два пути использования функций вывода; можно просто передать список объектов, чьё строковое представление сольётся в одну строку, после чего выведется в консоль, или вы можете использовать строку с подстановочными символами и списком объектов-параметров для подстановки в них.

#### Вывод одного объекта

Простейший способ для вывода одного объекта:

```js
var someObject = { str: "Some text", id: 5 };
console.log(someObject);
```

Вывод будет таким:

```
[09:27:13.475] ({str:"Some text", id:5})
```

#### Вывод нескольких объектов

Вы можете выводить несколько объектов, просто перечисляя их в вызываемой функции:

```js
var car = "Dodge Charger";
var someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is: ", someObject);
```

Вывод будет таким:

```
[09:28:22.711] My first car was a Dodge Charger . The object is:  ({str:"Some text", id:5})
```

#### Преобразование строк с использованием масок

Gecko 9.0 ввёл поддержку подстановочных символов (масок). При передаче строки одному из методов вы можете использовать следующие символы:

| Подстановочный символ | Описание                                                                                                                                                         |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| %o или %O             | Выводит ссылку на JavaScript-объект. Нажатие на ссылку приведёт к открытию инспектора кода.                                                                      |
| %d или %i             | Выведет целое число. Поддерживается форматирование, например, console.log("АБВГД %.2d", 1.1) выведет число как две значащих цифры с лидирующим нулём: АБВГД 01   |
| %s                    | Выводит строку.                                                                                                                                                  |
| %f                    | Выводит число с плавающей точкой. Поддерживается форматирование, например, console.log("АБВГД %.2f", 1.1) выведет число до двух знаков после запятой: АБВГД 1.10 |

Каждая из масок выбирает следующий аргумент из списка параметров. Пример:

```
for (var i=0; i<5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i+1);
}
```

Вывод будет таким:

```
[13:14:13.481] Hello, Bob. You've called me 1 times.
[13:14:13.483] Hello, Bob. You've called me 2 times.
[13:14:13.485] Hello, Bob. You've called me 3 times.
[13:14:13.487] Hello, Bob. You've called me 4 times.
[13:14:13.488] Hello, Bob. You've called me 5 times.
```

#### Стилизация вывода консоли

Можно использовать директиву `"%c"` для применения стилей CSS при выводе в консоль. Часть текста до директивы не затрагивается стилем, а часть после - будет стилизована:

```js
console.log(
  "This is %cMy stylish message",
  "color: yellow; font-style: italic; background-color: blue; padding: 2px;",
);
```

![](css-styling.png)

> **Примечание:** Поддерживается довольно много свойств стилей CSS; но вам необходимо поэкспериментировать и посмотреть, что окажется более полезным.

### Группирование вывода в консоли

Вы можете использовать вложенные группы для организации вывода, визуально комбинируя связанный материал. Для создания вложенного блока вызовите `console.group()`. Метод `console.groupCollapsed()` похожий, но создаёт новый блок свёрнутым, что потребует нажать на кнопку, для своего раскрытия для чтения.

> **Примечание:** Свёрнутые группы не поддерживаются пока в Gecko; в настоящее время `метод groupCollapsed()` работает так же как и `group()`.

Для выхода из текущей группы просто вызовите `console.groupEnd()`. Пример:

```js
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.debug("Back to the outer level");
```

Вывод будет таким:

![nesting.png](/@api/deki/files/6082/=nesting.png)

### Таймеры

Для расчёта длительности определённых операций в Gecko 10 введена поддержка таймеров в объекте `console`. Для запуска таймера вызовите функцию `console.time()`, при этом в качестве параметра передайте название таймера. Для остановки таймера и для получения прошедшего времени в миллисекундах вызовите `console.timeEnd()`, передав в качестве параметра имя таймера. На странице можно запустить до 10000 таймеров одновременно.

Рассмотрим пример:

```js
console.time("answer time");
alert("Click to continue");
console.timeEnd("answer time");
```

этот код запишет в веб-консоль время необходимое пользователю для того, чтобы закрыть окно `alert`:

![timerresult.png](/@api/deki/files/6084/=timerresult.png)

Заметьте, что имя таймера отображено и при старте таймера и при его остановке.

> **Примечание:** Это важно: если вы используете таймер для записи таймингов сетевого трафика, то таймер отобразит общее время для операции, в то время как время, отображаемое в панели "Сеть" это только время, требуемое для заголовка. Если у вас включено логирование времени тела ответа, то время ответа для заголовка и для тела должно соответствовать времени, которое вы у видите в консоли.

### Трассировка стека вызова

Консоль также поддерживает вывод трассировки стека; она покажет вам весь путь вызовов функций, пройденный до момента, когда вы вызвали {{domxref("console.trace()")}}. Например, такой код:

```
foo();

function foo() {
  function bar() {
    console.trace();
  }
  bar();
}
```

Вывод в консоль будет похож на этот:

![](api-trace2.png)

## Замечания

- По крайней мере в Firefox, если страница определяет свой объект `console`, то этот объект переопределяет объект `console`, встроенный в Firefox.
- До Gecko 12.0, методы объекта `console` работали только, если открыта панель "Веб-консоль" (Web Console). Начиная с Gecko 12.0, вывод кешируется до тех пор, пока панель Веб-консоль не откроется, и сразу отобразится в ней.
- Стоит отметить, что встроенный в Firefox объект `console` совместим с таким же объектом, предоставляемым плагином [Firebug](http://getfirebug.com/).

## Смотрите также

- [Tools](/ru/docs/Tools)
- [Веб-консоль](/ru/docs/Tools/Web_Console) - как Веб-консоль в Firefox обрабатывает вызовы API-консоли
- [Удалённая отладка](/ru/docs/Tools/Remote_Debugging)- как посмотреть вывод в консоль, когда цель отладки находится на мобильном устройстве
- [Отладка приложений в Firefox OS](/ru/Firefox_OS/Using_the_App_Manager) - использование Менеджера приложений для отладки приложений, запущенных на Firefox OS
- [On-device console logging](/ru/docs/Mozilla/Firefox_OS/Debugging/On-device_console_logging) - как сделать логирование на устройствах на Firefox OS

### Реализации в браузерах

- [Google Chrome DevTools](https://developers.google.com/chrome-developer-tools/docs/console-api)
- [Firebug](http://getfirebug.com/wiki/index.php/Console_API)
- [Internet Explorer](<http://msdn.microsoft.com/ru/library/hh772173(v=vs.85).aspx>)
- [Safari](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)
