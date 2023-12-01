---
title: Работа с JSON
slug: Learn/JavaScript/Objects/JSON
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}

Обозначение объектов JavaScript (JSON - JavaScript Object Notation) - стандартный текстовый формат для представления структурированных данных на основе синтаксиса объекта JavaScript. Он обычно используется для передачи данных в веб-приложениях (например, отправка некоторых данных с сервера клиенту,таким образом чтобы это могло отображаться на веб-странице или наоборот). Вы будете сталкиваться с этим довольно часто, поэтому в этой статье мы даём вам все, что вам нужно для работы с JSON используя JavaScript, включая парсинг JSON, чтобы вы могли получить доступ к данным внутри него при создании JSON.

| Необходимые знания: | Базовая компьютерная грамотность, базовые знания HTML и CSS, знакомство с основами JavaScript (см. [First steps](/ru/docs/Learn/JavaScript/First_steps) и [Building blocks](/ru/docs/Learn/JavaScript/Building_blocks)) и основами OOJS (see [Introduction to objects](/ru/docs/Learn/JavaScript/Object-oriented/Introduction)). |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:               | Понять, как работать с данными, хранящимися в JSON, и создавать свои собственные объекты JSON.                                                                                                                                                                                                                                   |

## Нет, действительно, что такое JSON?

{{glossary("JSON")}} - текстовый формат данных, следующий за синтаксисом объекта JavaScript, который был популяризирован [Дугласом Крокфордом](https://en.wikipedia.org/wiki/Douglas_Crockford). Несмотря на то, что он очень похож на буквенный синтаксис объекта JavaScript, его можно использовать независимо от JavaScript, и многие среды программирования имеют возможность читать (анализировать) и генерировать JSON.

JSON существует как строка,что необходимо при передаче данных по сети. Он должен быть преобразован в собственный объект JavaScript, если вы хотите получить доступ к данным. Это не большая проблема. JavaScript предоставляет глобальный объект [JSON](/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON), который имеет методы для преобразования между ними.

> **Примечание:** Преобразование строки в родной объект называется десериализацией (преобразование из последовательной формы в параллельную*)*, в то время как преобразовании родного объекта в строку, таким образом ,чтобы он мог быть передан через сеть, называется сериализацией(преобразование в последовательную форму).

Объект JSON может быть сохранён в собственном файле, который в основном представляет собой текстовый файл с расширением `.json` и {{glossary("MIME type")}} `application/json`.

### Структура JSON

Как описано выше, JSON представляет собой строку, формат которой очень похож на буквенный формат объекта JavaScript. Вы можете включать одни и те же базовые типы данных внутри JSON, так же как и в стандартном объекте JavaScript - строки, числа, массивы, булевы и другие объектные литералы. Это позволяет построить иерархию данных, к примеру, так:

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

Если бы мы загрузили этот объект в программу JavaScript, создали переменную с названием `superHeroes`, мы могли бы затем получить доступ к данным внутри неё, используя те же самые точечную и скобочную нотации, которые мы рассмотрели в статье [JavaScript object basics](/ru/docs/Learn/JavaScript/Objects/Basics). Например:

```js
superHeroes.homeTown;
superHeroes["active"];
```

Чтобы получить доступ к последующим данным по иерархии, вам просто нужно объединить требуемые имена свойств и индексы массивов. Например, чтобы получить доступ к третьей сверхспособности второго героя, указанного в списке участников, вы должны сделать следующее:

```js
superHeroes["members"][1]["powers"][2];
```

1. Сначала у нас есть имя переменной - `superHeroes`.
2. Внутри мы хотим получить доступ к свойству `members`, поэтому мы используем `['members']`.
3. `members` содержат массив, заполненный объектами. Мы хотим получить доступ ко второму объекту внутри массива, поэтому мы используем `[1]`.
4. Внутри этого объекта мы хотим получить доступ к свойству `powers`, поэтому мы используем `['powers']`.
5. Внутри свойства `powers` находится массив, содержащий сверхспособности выбранного героя. Нам нужен третий, поэтому мы используем `[2]`.

> **Примечание:** . Мы сделали JSON, видимый выше, доступным внутри переменной в нашем примере [JSONTest.html](http://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) (см. [исходный код](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/JSONTest.html)). Попробуйте загрузить это, а затем получить доступ к данным внутри переменной через консоль JavaScript вашего браузера.

### Массивы как JSON

Выше мы упоминали ,что JSON текст выглядит практически так же как и JavaScript объект,и это почти правильно.Причина,по которой мы говорим почти правильно заключается в том ,что массив также валиден JSON например:

```json
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

Вышесказанное вполне справедливо для JSON. Вам просто нужно получить доступ к элементам массива (в его анализируемой версии), начиная с индекса массива, например `[0]["powers"][0]`.

### Другие примечания

- JSON - это чисто формат данных - он содержит только свойства, без методов.
- JSON требует двойных кавычек, которые будут использоваться вокруг строк и имён свойств. Одиночные кавычки недействительны.
- Даже одна неуместная запятая или двоеточие могут привести к сбою JSON-файла и не работать. Вы должны быть осторожны, чтобы проверить любые данные, которые вы пытаетесь использовать (хотя сгенерированный компьютером JSON с меньшей вероятностью включает ошибки, если программа генератора работает правильно). Вы можете проверить JSON с помощью приложения вроде [JSONLint](http://jsonlint.com/).
- JSON может принимать форму любого типа данных, допустимого для включения в JSON, а не только массивов или объектов. Так, например, одна строка или номер будут действительным объектом JSON.
- В отличие от кода JavaScript, в котором свойства объекта могут не заключаться в двойные кавычки, в JSON в качестве свойств могут использоваться только строки заключённые в двойные кавычки.

## Активное обучение: Работа с примером JSON

Итак, давайте рассмотрим пример, чтобы показать то, как мы можем использовать некоторые данные JSON на веб-сайте.

### Начало работы

Для начала создайте локальные копии наших файлов [heroes.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes.html) и [style.css](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/style.css). Последний содержит простой CSS для стилизации нашей страницы, в то время как первый содержит очень простой HTML-код сущности:

```html
<header></header>

<section></section>
```

Плюс {{HTMLElement("script")}}, чтобы содержать код JavaScript, который мы будем писать в этом упражнении. На данный момент он содержит только две строки, которые захватывают ссылки на элементы {{HTMLElement("header")}} и {{HTMLElement("section")}} и сохраняют их в переменных:

```js
var header = document.querySelector("header");
var section = document.querySelector("section");
```

Мы предоставили данные JSON на нашем GitHub, на <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json>.

Мы собираемся загрузить его на нашу страницу и использовать некоторые изящные манипуляции DOM, чтобы отобразить их, например:

![](json-superheroes.png)

### Получение JSON

Чтобы получить JSON, мы будем использовать API, называемый {{domxref("XMLHttpRequest")}} (часто называемый **XHR**). Это очень полезный объект JavaScript, который позволяет нам делать сетевые запросы для извлечения ресурсов с сервера через JavaScript (например, изображения, текст, JSON, даже фрагменты HTML), что означает, что мы можем обновлять небольшие разделы контента без необходимости перезагрузки всей страницы. Это привело к более отзывчивым веб-страницам и звучит захватывающе, но, к сожалению, выходит за рамки этой статьи, чтобы изучить это гораздо более подробно.

1. Начнём с того, что мы собираемся сохранить URL-адрес JSON, который мы хотим получить в переменной. Добавьте нижеследующий код JavaScript:

   ```js
   var requestURL =
     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
   ```

2. Чтобы создать запрос, нам нужно создать новый экземпляр объекта запроса из конструктора `XMLHttpRequest`, используя ключевое слово `new`. Добавьте следующую ниже свою последнюю строку:

   ```js
   var request = new XMLHttpRequest();
   ```

3. Теперь нам нужно открыть новый запрос, используя метод [`open()`](/ru/docs/Web/API/XMLHttpRequest/open). Добавьте следующую строку:

   ```js
   request.open("GET", requestURL);
   ```

   Это занимает не менее двух параметров - есть другие доступные параметры. Нам нужно только два обязательных для этого простого примера:

   - Метод HTTP, который следует использовать при выполнении сетевого запроса. В этом случае [`GET`](/ru/docs/Web/HTTP/Methods/GET) самый подходящий, так как мы просто извлекаем некоторые простые данные.
   - URL-адрес для запроса - это URL-адрес файла JSON, который мы сохранили ранее.

4. Затем добавьте следующие две строки: здесь мы устанавливаем [`responseType`](/ru/docs/Web/API/XMLHttpRequest/responseType) в JSON, так что XHR знает, что сервер будет возвращать JSON и, что это должно быть преобразовано за кулисами в объект JavaScript. Затем мы отправляем запрос методом [`send()`](/ru/docs/Web/API/XMLHttpRequest/send):

   ```js
   request.responseType = "json";
   request.send();
   ```

5. Последний бит этого раздела предполагает ожидание ответа на возврат с сервера, а затем работы с ним. Добавьте следующий код ниже вашего предыдущего кода:

   ```js
   request.onload = function () {
     var superHeroes = request.response;
     populateHeader(superHeroes);
     showHeroes(superHeroes);
   };
   ```

Здесь мы сохраняем ответ на наш запрос (доступный в свойстве [`response`](/ru/docs/Web/API/XMLHttpRequest/response)) в переменной `superHeroes`; эта переменная теперь будет содержать объект JavaScript, основанный на JSON! Затем мы передаём этот объект двум вызовам функций - первый из них заполнит `<header>` правильными данными, а второй создаст информационную карту для каждого героя в команде и вставляет её в `<section>`.

Мы свернули код в обработчик событий, который запускается, когда событие загрузки запускается в объекте запроса (см. [`onload`](/ru/docs/Web/API/XMLHttpRequestEventTarget/onload)) - это связано с тем, что событие загрузки запускается, когда ответ успешно возвращается; поступая таким образом,это гарантия того, что `request.response` определённо будет доступен, когда мы начнём работу с ним.

Заполнение заголовка

Теперь мы извлекли данные JSON и превратили его в объект JavaScript, давайте воспользуемся им, написав две функции, на которые мы ссылались выше. Прежде всего, добавьте следующее определение функции ниже предыдущего кода:

```js
function populateHeader(jsonObj) {
  var header = document.querySelector("header");
  var myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["squadName"];
  header.appendChild(myH1);

  var myPara = document.createElement("p");
  myPara.textContent =
    "Hometown: " + jsonObj["homeTown"] + " // Formed: " + jsonObj["formed"];
  header.appendChild(myPara);
}
```

Мы назвали параметр `jsonObj`, чтобы напомнить себе, что этот объект JavaScript возник из JSON. Здесь мы сначала создаём элемент {{HTMLElement("h1")}} с [`createElement()`](/ru/docs/Web/API/Document/createElement), устанавливаем его [`textContent`](/ru/docs/Web/API/Node/textContent) равным свойству `squadName` объекта, а затем добавляем его в заголовок с помощью [`appendChild()`](/ru/docs/Web/API/Node/appendChild). Затем мы выполняем очень похожую операцию с абзацем: создаём его, устанавливаем его текстовое содержимое и добавляем его в заголовок. Единственное различие заключается в том, что его текст задан, как конкатенированная строка, содержащая как `homeTown`, так и `formed` свойства объекта.

### Создание информационных карт героя

Затем добавьте следующую функцию внизу кода, которая создаёт и отображает карты супергероев:

```js
function showHeroes(jsonObj) {
  var section = document.querySelector("section");
  var heroes = jsonObj["members"];

  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement("article");
    var myH2 = document.createElement("h2");
    var myPara1 = document.createElement("p");
    var myPara2 = document.createElement("p");
    var myPara3 = document.createElement("p");
    var myList = document.createElement("ul");

    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "Superpowers:";

    var superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
```

Для начала сохраним свойство `members` объекта JavaScript в новой переменной. Этот массив содержит несколько объектов, которые содержат информацию для каждого героя.

Затем мы используем [for loop](/ru/docs/Learn/JavaScript/Building_blocks/Looping_code#The_standard_for_loop) для циклического прохождения каждого объекта в массиве. Для каждого из них мы:

1. Создаём несколько новых элементов: `<article>`, `<h2>`, три `<p>` и `<ul>`.
2. Устанавливаем `<h2>`, чтобы содержать `name` текущего героя.
3. Заполняем три абзаца своей `secretIdentity`, `age` и строкой, в которой говорится: «Суперспособности:», чтобы ввести информацию в список.
4. Сохраняем свойство `powers` в другой новой переменной под названием `superPowers` - где содержится массив, в котором перечислены сверхспособности текущего героя.
5. Используем другой цикл `for`, чтобы прокрутить сверхспособности текущего героя , для каждого из них мы создаём элемент `<li>`, помещаем в него сверхспособности, а затем помещаем `listItem` внутри элемента `<ul>` (`myList`) с помощью `appendChild()`.
6. Последнее, что мы делаем, это добавляем `<h2>`, `<p>` и `<ul>` внутри `<article>` (`myArticle`), а затем добавляем `<article>` в `<section>`. Важное значение имеет порядок, в котором добавляются элементы, так как это порядок, который они будут отображать внутри HTML.

> **Примечание:** . Если вам не удаётся заставить этот пример работать, попробуйте обратиться к нашему исходному коду [heroes-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes-finished.html) (см. также он работает [в режиме live](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html)).

> **Примечание:** . Если у вас возникли проблемы после нотации точек / скобок, которые мы используем для доступа к объекту JavaScript, в этом поможет открытие файла [superheroes.json](http://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) на другой вкладке или в текстовом редакторе ,и обращаться к нему каждый раз, когда вам нужен JavaScript. Вы также можете обратиться к нашей статье [JavaScript objectbasics](/ru/docs/Learn/JavaScript/Objects/Basics) чтобы получить дополнительную информацию о нотации точек и скобок.

## Преобразование между объектами и текстом

Вышеприведённый пример был прост с точки зрения доступа к объекту JavaScript, потому что мы задали XHR-запрос для прямого преобразования ответа JSON в объект JavaScript, используя:

```js
request.responseType = "json";
```

Но иногда нам не так везёт - иногда мы получаем сырую строку JSON и нам нужно преобразовать её в объект самостоятельно. И когда мы хотим отправить объект JavaScript по сети, нам нужно преобразовать его в JSON (строку) перед отправкой. К счастью, эти две проблемы настолько распространены в веб-разработке, что встроенный объект [JSON](/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON) доступен в браузерах, которые содержат следующие два метода:

- [`parse()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): принимает строку JSON в качестве параметра и возвращает соответствующий объект JavaScript.
- [`stringify()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): принимает объект, как параметр и возвращает эквивалентную строковую JSON строку.

Вы можете увидеть первый метод в действии в нашем примере [heroes-finished-json-parse.html](http://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) (см. [исходный код](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes-finished-json-parse.html)) - это то же самое, что и в примере, который мы создали ранее, за исключением того, что мы установили XHR для возврата сырого JSON текста, затем используется `parse()`, чтобы преобразовать его в фактический объект JavaScript. Ключевой фрагмент кода находится здесь:

```js
request.open("GET", requestURL);
request.responseType = "text"; // now we're getting a string!
request.send();

request.onload = function () {
  var superHeroesText = request.response; // get the string from the response
  var superHeroes = JSON.parse(superHeroesText); // convert it to an object
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};
```

Как вы могли догадаться, `stringify()` работает обратным образом. Попробуйте ввести следующие строки в консоль JavaScript браузера один за другим, чтобы увидеть его в действии:

```js
var myJSON = { name: "Chris", age: "38" };
myJSON;
var myString = JSON.stringify(myJSON);
myString;
```

Здесь мы создаём объект JavaScript, затем проверяем, что он содержит, а затем преобразуем его в строку JSON, используя `stringify()` , сохраняя возвращаемое значение в новой переменной, а затем снова проверяем его.

## Резюме

В этой статье мы предоставили вам простое руководство по использованию JSON в ваших программах, в том числе о том, как создавать и анализировать JSON, и как получить доступ к данным, заблокированным внутри него. В следующей статье мы рассмотрим объектно-ориентированный JavaScript.

## Смотрите также

- [JSON object reference page](/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [XMLHttpRequest object reference page](/ru/docs/Web/API/XMLHttpRequest)
- [Using XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTTP request methods](/ru/docs/Web/HTTP/Methods)
- [Official JSON web site with link to ECMA standard](http://json.org)

{{PreviousMenuNext("Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}

## В этом модуле

- [Основы объекта](/ru/docs/Learn/JavaScript/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B)
- [Объектно-ориентированный JavaScript для начинающих](/ru/docs/Learn/JavaScript/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/Object-oriented_JS)
- [Прототипы объектов](/ru/docs/Learn/JavaScript/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/Object_prototypes)
- [Наследование в JavaScript](/ru/docs/Learn/JavaScript/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/Inheritance)
- [Работа с данными JSON](/ru/docs/Learn/JavaScript/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/JSON)
- [Практика построения объектов](/ru/docs/Learn/JavaScript/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/Object_building_practice)
- [Добавление функций в нашу демонстрацию прыгающих шаров](/ru/docs/Learn/JavaScript/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/Adding_bouncing_balls_features)
