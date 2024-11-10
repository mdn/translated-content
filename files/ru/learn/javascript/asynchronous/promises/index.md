---
title: Делаем асинхронное программирование более простым с async и await
slug: Learn/JavaScript/Asynchronous/Promises
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}

В ECMAScript версии 2017 появились [async functions](/ru/docs/Web/JavaScript/Reference/Statements/async_function) и ключевое слово [`await`](/ru/docs/Web/JavaScript/Reference/Operators/await) ([ECMAScript Next support in Mozilla](/ru/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_Next_support_in_Mozilla)). На самом деле, эти функции есть ничего иное как синтаксический сахар над Promises и Generator functions ([ts39](https://tc39.es/ecmascript-asyncawait/)). С их помощью легче писать и читать асинхронный код, ведь они позволяют использовать привычный синхронный стиль написания. В этой статье мы на базовом уровне разберёмся в их устройстве.

| Примечания:     | Чтобы лучше понять материал, желательно перед чтением ознакомиться с основами JavaScript, асинхронными операциями вообще и объектами Promises. |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель материала: | Научить писать современный асинхронный код с использованием Promises и async functions.                                                        |

## Основы async/await

### Ключевое слово async

Ключевое слово `async` позволяет сделать из обычной функции (function declaration или function expression) асинхронную функцию ([async function](/ru/docs/Web/JavaScript/Reference/Statements/async_function)). Такая функция делает две вещи:
\- Оборачивает возвращаемое значение в Promise
\- Позволяет использовать ключевое слово await (см. дальше)

Попробуйте выполнить в консоли браузера следующий код:

```js
function hello() {
  return "Hello";
}
hello();
```

Функция возвращает "Hello" — ничего необычного, верно?

Но что если мы сделаем её асинхронной? Проверим:

```js
async function hello() {
  return "Hello";
}
hello();
```

Как было сказано ранее, вызов асинхронной функции возвращает объект Promise.

Вот пример с [async function expression](/ru/docs/Web/JavaScript/Reference/Operators/async_function):

```js
const hello = async function () {
  return "Hello";
};
hello();
```

Также можно использовать стрелочные функции:

```js
const hello = async () => {
  return "Hello";
};
```

Все они в общем случае делают одно и то же.

Чтобы получить значение, которое возвращает Promise, мы как обычно можем использовать метод `.then()`:

```js
hello().then((value) => console.log(value));
```

или ещё короче

```js
hello().then(console.log);
```

Итак, ключевое слово `async`, превращает обычную функцию в асинхронную и результат вызова функции оборачивает в Promise. Также асинхронная функция позволяет использовать в своём теле ключевое слово `await`, о котором далее.

### Ключевое слово await

Асинхронные функции становятся по настоящему мощными, когда вы используете ключевое слово [`await`](/ru/docs/Web/JavaScript/Reference/Operators/await) — по факту, **`await` работает только в асинхронных функциях**. Мы можем использовать `await` перед promise-based функцией, чтобы остановить поток выполнения и дождаться результата её выполнения (результат Promise). В то же время, остальной код нашего приложения не блокируется и продолжает работать.

Вы можете использовать `await` перед любой функцией, которая возвращает Promise, включая Browser API функции.

Небольшой пример:

```js
async function hello() {
  return (greeting = await Promise.resolve("Hello"));
}

hello().then(alert);
```

Конечно, на практике код выше бесполезен, но в учебных целях он иллюстрирует синтаксис асинхронных функций. Теперь давайте перейдём к реальным примерам.

## Переписываем Promises с использованием async/await

Давайте посмотрим на пример из предыдущей статьи:

```js
fetch("coffee.jpg")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.blob();
    }
  })
  .then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    const image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.log(
      "There has been a problem with your fetch operation: " + e.message,
    );
  });
```

К этому моменту вы должны понимать как работают Promises, чтобы понять все остальное. Давайте перепишем код используя async/await и оценим разницу.

```js
async function myFetch() {
  const response = await fetch("coffee.jpg");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    const myBlob = await response.blob();

    const objectURL = URL.createObjectURL(myBlob);
    const image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
  }
}

myFetch().catch((e) => {
  console.log(
    "There has been a problem with your fetch operation: " + e.message,
  );
});
```

Согласитесь, что код стал короче и понятнее — больше никаких блоков `.then()` по всему скрипту!

Так как ключевое слово `async` заставляет функцию вернуть Promise, мы можем использовать гибридный подход:

```js
async function myFetch() {
  const response = await fetch("coffee.jpg");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return await response.blob();
  }
}

myFetch()
  .then((blob) => {
    const objectURL = URL.createObjectURL(blob);
    const image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch((e) => console.log(e));
```

Можете попрактиковаться самостоятельно, или запустить наш [live example](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-fetch-async-await.html) (а также [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-fetch-async-await.html)).

### Минуточку, а как это все работает?

Вы могли заметить, что мы обернули наш код в функцию и сделали её асинхронной с помощью `async`. Это было обязательно – нам надо создать контейнер, внутри которого будет запускаться асинхронный код, и будет возможность дождаться его результата с помощью await, не блокируя остальной код нашего скрипта.

Внутри `myFetch()` находится код, который слегка напоминает версию на Promise, но есть важные отличия. Вместо того, чтобы писать цепочку блоков `.then()` мы просто использует ключевое слово `await` перед вызовом promise-based функции и присваиваем результат в переменную. Ключевое слово `await` говорит JavaScript runtime приостановить код в этой строке, не блокируя остальной код скрипта за пределами асинхронной функции. Когда вызов promise-based функции будет готов вернуть результат, выполнение продолжится с этой строки дальше.

Пример:

```js
const response = await fetch("coffee.jpg");
```

Значение Promise, которое вернёт `fetch()` будет присвоено переменной `response` только тогда, когда оно будет доступно – парсер делает паузу на данной строке дожидаясь этого момента. Как только значение доступно, парсер переходит к следующей строке, в которой создаётся объект [`Blob`](/ru/docs/Web/API/Blob) из результата Promise. В этой строке, кстати, также используется `await`, потому что метод `.blob()` также возвращает Promise. Когда результат готов, мы возвращаем его наружу из `myFetch()`.

Обратите внимание, когда мы вызываем `myFetch()`, она возвращает Promise, поэтому мы можем вызвать `.then()` на результате, чтобы отобразить его на экране.

К этому моменту вы наверное думаете "Это реально круто!", и вы правы – чем меньше блоков `.then()`, тем легче читать код.

### Добавляем обработку ошибок

Чтобы обработать ошибки у нас есть несколько вариантов.

Мы можем использовать синхронную [`try...catch`](/ru/docs/Web/JavaScript/Reference/Statements/try...catch) структуру с `async`/`await`. Вот изменённая версия первого примера выше:

```js
async function myFetch() {
  try {
    const response = await fetch("coffee.jpg");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const myBlob = await response.blob();
      const objectURL = URL.createObjectURL(myBlob);
      const image = document.createElement("img");
      image.src = objectURL;
      document.body.appendChild(image);
    }
  } catch (e) {
    console.log(e);
  }
}

myFetch();
```

В блок `catch() {}` передаётся объект ошибки, который мы назвали `e`; мы можем вывести его в консоль, чтобы посмотреть детали: где и почему возникла ошибка.

Если вы хотите использовать гибридный подход (пример выше), лучше использовать блок `.catch()` после блока `.then()` вот так:

```js
async function myFetch() {
  const response = await fetch("coffee.jpg");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return await response.blob();
  }
}

myFetch()
  .then((blob) => {
    const objectURL = URL.createObjectURL(blob);
    const image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch((e) => console.log(e));
```

Так лучше, потому что блок `.catch()` словит ошибки как из асинхронной функции, так и из Promise. Если бы мы использовали блок `try`/`catch`, мы бы не словили ошибку, которая произошла в самой `myFetch()` функции.

Вы можете посмотреть оба примера на GitHub:

- [simple-fetch-async-await-try-catch.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-fetch-async-await-try-catch.html) (смотреть [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-fetch-async-await-try-catch.html))
- [simple-fetch-async-await-promise-catch.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-fetch-async-await-promise-catch.html) (смотреть [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-fetch-async-await-promise-catch.html))

## Await и Promise.all()

Как вы помните, асинхронные функции построены поверх [promises](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise), поэтому они совместимы со всеми возможностями последних. Мы легко можем подождать выполнение [`Promise.all()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), присвоить результат в переменную и все это сделать используя синхронный стиль.

Версия с `async`/`await` (смотрите [live demo](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/promise-all-async-await.html) и [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/promise-all-async-await.html)) выглядит так:

```js
async function fetchAndDecode(url, type) {
  const response = await fetch(url);

  let content;

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    if (type === "blob") {
      content = await response.blob();
    } else if (type === "text") {
      content = await response.text();
    }

    return content;
  }
}

async function displayContent() {
  const coffee = fetchAndDecode("coffee.jpg", "blob");
  const tea = fetchAndDecode("tea.jpg", "blob");
  const description = fetchAndDecode("description.txt", "text");

  const values = await Promise.all([coffee, tea, description]);

  const objectURL1 = URL.createObjectURL(values[0]);
  const objectURL2 = URL.createObjectURL(values[1]);
  const descText = values[2];

  const image1 = document.createElement("img");
  const image2 = document.createElement("img");
  image1.src = objectURL1;
  image2.src = objectURL2;
  document.body.appendChild(image1);
  document.body.appendChild(image2);

  const para = document.createElement("p");
  para.textContent = descText;
  document.body.appendChild(para);
}

displayContent().catch((e) => console.log(e));
```

Взгляните на строку с `Promise.all()`:

```js
const values = await Promise.all([coffee, tea, description]);
```

С помощью `await` мы ждём массив результатов всех трёх Promises и присваиваем его в переменную `values`. Это асинхронный код, но он написан в синхронном стиле, за счёт чего он гораздо читабельнее.

Мы должны обернуть весь код в асинхронную функцию, `displayContent()`, и мы не сильно сэкономили на количестве кода, но мы извлекли код блока `.then()`, за счёт чего наш код стал гораздо чище.

Для обработки ошибок мы добавили блок `.catch()` для функции `displayContent()`; Это позволило нам отловить ошибки в обоих функциях.

> [!NOTE]
> Мы также можем использовать синхронный блок [`finally`](/ru/docs/Web/JavaScript/Reference/Statements/try...catch#The_finally_clause) внутри асинхронной функции, вместо асинхронного `.finally()`, чтобы получить информацию о результате нашей операции — смотрите в действии в нашем [live example](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/promise-finally-async-await.html) (смотрите [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/promise-finally-async-await.html)).

## Недостатки async/await

Асинхронные функции с `async`/`await` бывают очень удобными, но есть несколько замечаний, о которых полезно знать.

`async`/`await` позволяет вам писать код в синхронном стиле. Ключевое слово `await` блокирует приостанавливает выполнение promise-based функции до того момента, пока promise примет статус fulfilled. Это не блокирует код за пределами вашей асинхронной функции, тем не менее важно помнить, что внутри асинхронной функции поток выполнения блокируется.

Ваш код может стать медленнее за счёт большого количества awaited promises, которые идут один за другим. Каждый `await` должен дождаться выполнения предыдущего, тогда как на самом деле мы хотим, чтобы наши Promises выполнялись одновременно, как если бы мы не использовали async/await.

Есть подход, который позволяет обойти эту проблему — сохранить все выполняющиеся Promises в переменные, а уже после этого дожидаться (awaiting) их результата. Давайте посмотрим на несколько примеров.

Мы подготовили два примера — [slow-async-await.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/slow-async-await.html) (см. [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/slow-async-await.html)) и [fast-async-await.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/fast-async-await.html) (см. [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/fast-async-await.html)). Они оба начинаются с функции возвращающей promise, имитирующей асинхронность процессов при помощи вызова [`setTimeout()`](/ru/docs/Web/API/setTimeout):

```js
function timeoutPromise(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("done");
    }, interval);
  });
}
```

Далее в каждом примере есть асинхронная функция `timeTest()` ожидающая три вызова `timeoutPromise()`:

```js
async function timeTest() {
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  await timeoutPromise(3000);
}
```

В каждом примере функция записывает время начала исполнения и сколько времени понадобилось на исполнение `timeTest()` промисов, вычитая время в момент запуска функции из времени в момент разрешения промисов:

```js
const startTime = Date.now();
timeTest().then(() => {
  const finishTime = Date.now();
  const timeTaken = finishTime - startTime;
  alert("Time taken in milliseconds: " + timeTaken);
});
```

Далее представлена асинхронная функция `timeTest()` различная для каждого из примеров.

В случае с медленным примером `slow-async-await.html`, `timeTest()` выглядит:

```js
async function timeTest() {
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  await timeoutPromise(3000);
}
```

Здесь мы просто ждём все три `timeoutPromise()` напрямую, блокируя выполнение на данного блока на 3 секунды при каждом вызове. Все последующие вызовы вынуждены ждать пока разрешится предыдущий. Если вы запустите первый пример ([`slow-async-await.html`](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/slow-async-await.html)), то увидите `alert` сообщающий время выполнения около 9 секунд.

Во втором [`fast-async-await.html`](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/fast-async-await.html) примере, функция `timeTest()` выглядит так:

```js
async function timeTest() {
  const timeoutPromise1 = timeoutPromise(3000);
  const timeoutPromise2 = timeoutPromise(3000);
  const timeoutPromise3 = timeoutPromise(3000);

  await timeoutPromise1;
  await timeoutPromise2;
  await timeoutPromise3;
}
```

В данном случае мы храним три объекта `Promise` в переменных, каждый из которых может разрешиться независимо от других.

Ниже мы ожидаем разрешения промисов из объекта в результат. Так как они были запущенны одновременно, блокируя поток, то и разрешатся одновременно. Если вы запустите второй пример вы увидите `alert`, сообщающий время выполнения около 3 секунд.

Важно не забывать о быстродействии применяя `await`, проверяйте количество блокировок.

## Async/await class methods

В качестве последнего замечания, вы можете использовать `async` перед методами классов или объектов, вынуждая их возвращать promises. А также `await` внутри методов объявленных таким образом. Посмотрите на пример [ES class code, который мы видели в статье object-oriented JavaScript](/ru/docs/Learn/JavaScript/Objects/Inheritance#ECMAScript_2015_Classes) и сравните его с модифицированной (асинхронной) `async` версией ниже:

```js
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  async greeting() {
    return await Promise.resolve(`Hi! I'm ${this.name.first}`);
  }

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  }
}

const han = new Person("Han", "Solo", 25, "male", ["Smuggling"]);
```

Первый метод класса теперь можно использовать таким образом:

```js
han.greeting().then(console.log);
```

## Browser support (Поддержка браузерами)

Одним из критериев при принятии решения об использовании `async`/`await` является поддержка старых браузеров. `async`/`await`, как и Promises, доступны в большинстве современных браузеров. В основном, проблемы с поддержкой могут возникнуть в Internet Explorer и Opera Mini.

Если вы хотите использовать `async`/`await`, но при этом беспокоитесь о поддержке старых браузеров, можно рассмотреть возможность использования библиотеки [BabelJS](https://babeljs.io/) — она позволяет писать приложения с использованием новейшего JavaScript и может автоматически предоставлять полифиллы, которые работают в старых браузерах, в качестве запасных вариантов.

## Заключение

Вот пожалуй и все — `async`/`await` позволяют писать асинхронный код, который легче читать и поддерживать. Даже учитывая, что поддержка со стороны браузеров несколько хуже, чем у `promise.then`, всё же стоит обратить на него внимание.

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}
