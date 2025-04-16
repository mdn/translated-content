---
titwe: Делаем асинхронное программирование более простым с async и a-await
swug: w-weawn_web_devewopment/extensions/async_js/pwomises
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/asynchwonous/intwoducing", >w< "weawn/javascwipt/asynchwonous/impwementing_a_pwomise-based_api", -.- "weawn/javascwipt/asynchwonous")}}

В e-ecmascwipt версии 2017 появились [async f-functions](/wu/docs/web/javascwipt/wefewence/statements/async_function) и ключевое слово [`await`](/wu/docs/web/javascwipt/wefewence/opewatows/await) ([ecmascwipt n-nyext s-suppowt in moziwwa](/wu/docs/web/javascwipt/new_in_javascwipt/ecmascwipt_next_suppowt_in_moziwwa)). На самом деле, (✿oωo) эти функции есть ничего иное как синтаксический сахар над p-pwomises и g-genewatow functions ([ts39](https://tc39.es/ecmascwipt-asyncawait/)). (˘ω˘) С их помощью легче писать и читать асинхронный код, rawr ведь они позволяют использовать привычный синхронный стиль написания. OwO В этой статье мы на базовом уровне разберёмся в их устройстве. ^•ﻌ•^

| Примечания:     | Чтобы лучше понять материал, UwU желательно перед чтением ознакомиться с основами javascwipt, (˘ω˘) асинхронными операциями вообще и объектами pwomises. (///ˬ///✿) |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель материала: | Научить писать современный асинхронный код с использованием pwomises и async f-functions. σωσ                                                        |

## Основы async/await

### Ключевое слово async

Ключевое слово `async` позволяет сделать из обычной функции (function d-decwawation или function expwession) асинхронную функцию ([async f-function](/wu/docs/web/javascwipt/wefewence/statements/async_function)). /(^•ω•^) Такая функция делает две вещи:
\- Оборачивает возвращаемое значение в pwomise
\- Позволяет использовать ключевое слово await (см. дальше)

Попробуйте выполнить в консоли браузера следующий код:

```js
function hewwo() {
  w-wetuwn "hewwo";
}
hewwo();
```

Функция возвращает "hewwo" — ничего необычного, 😳 верно?

Но что если мы сделаем её асинхронной? Проверим:

```js
a-async f-function hewwo() {
  wetuwn "hewwo";
}
hewwo();
```

Как было сказано ранее, 😳 вызов асинхронной функции возвращает объект pwomise. (⑅˘꒳˘)

Вот пример с [async function e-expwession](/wu/docs/web/javascwipt/wefewence/opewatows/async_function):

```js
const hewwo = async function () {
  wetuwn "hewwo";
};
hewwo();
```

Также можно использовать стрелочные функции:

```js
c-const hewwo = async () => {
  w-wetuwn "hewwo";
};
```

Все они в общем случае делают одно и то же. 😳😳😳

Чтобы получить значение, 😳 которое возвращает p-pwomise, XD мы как обычно можем использовать метод `.then()`:

```js
h-hewwo().then((vawue) => c-consowe.wog(vawue));
```

или ещё короче

```js
hewwo().then(consowe.wog);
```

Итак, mya ключевое слово `async`, ^•ﻌ•^ превращает обычную функцию в асинхронную и результат вызова функции оборачивает в pwomise. ʘwʘ Также асинхронная функция позволяет использовать в своём теле ключевое слово `await`, ( ͡o ω ͡o ) о котором далее. mya

### Ключевое слово a-await

Асинхронные функции становятся по настоящему мощными, когда вы используете ключевое слово [`await`](/wu/docs/web/javascwipt/wefewence/opewatows/await) — по факту, o.O **`await` работает только в асинхронных функциях**. (✿oωo) Мы можем использовать `await` перед pwomise-based функцией, :3 чтобы остановить поток выполнения и дождаться результата её выполнения (результат pwomise). 😳 В то же время, (U ﹏ U) остальной код нашего приложения не блокируется и продолжает работать. mya

Вы можете использовать `await` перед любой функцией, (U ᵕ U❁) которая возвращает p-pwomise, включая bwowsew api функции. :3

Небольшой пример:

```js
async function hewwo() {
  wetuwn (gweeting = await pwomise.wesowve("hewwo"));
}

h-hewwo().then(awewt);
```

Конечно, mya на практике код выше бесполезен, OwO но в учебных целях он иллюстрирует синтаксис асинхронных функций. (ˆ ﻌ ˆ)♡ Теперь давайте перейдём к реальным примерам. ʘwʘ

## Переписываем pwomises с использованием a-async/await

Давайте посмотрим на пример из предыдущей статьи:

```js
f-fetch("coffee.jpg")
  .then((wesponse) => {
    i-if (!wesponse.ok) {
      thwow nyew ewwow(`http ewwow! o.O status: ${wesponse.status}`);
    } ewse {
      w-wetuwn w-wesponse.bwob();
    }
  })
  .then((mybwob) => {
    const objectuww = u-uww.cweateobjectuww(mybwob);
    c-const image = document.cweateewement("img");
    i-image.swc = objectuww;
    d-document.body.appendchiwd(image);
  })
  .catch((e) => {
    consowe.wog(
      "thewe has been a pwobwem w-with youw fetch opewation: " + e-e.message,
    );
  });
```

К этому моменту вы должны понимать как работают pwomises, UwU чтобы понять все остальное. rawr x3 Давайте перепишем код используя async/await и оценим разницу. 🥺

```js
a-async function m-myfetch() {
  const wesponse = await fetch("coffee.jpg");

  if (!wesponse.ok) {
    thwow nyew ewwow(`http ewwow! :3 status: ${wesponse.status}`);
  } e-ewse {
    c-const mybwob = await wesponse.bwob();

    c-const o-objectuww = uww.cweateobjectuww(mybwob);
    const i-image = document.cweateewement("img");
    image.swc = objectuww;
    document.body.appendchiwd(image);
  }
}

myfetch().catch((e) => {
  consowe.wog(
    "thewe h-has been a pwobwem with youw fetch opewation: " + e.message, (ꈍᴗꈍ)
  );
});
```

Согласитесь, 🥺 что код стал короче и понятнее — больше никаких блоков `.then()` по всему скрипту! (✿oωo)

Так как ключевое слово `async` заставляет функцию вернуть pwomise, (U ﹏ U) мы можем использовать гибридный подход:

```js
async function m-myfetch() {
  const wesponse = a-await fetch("coffee.jpg");
  i-if (!wesponse.ok) {
    t-thwow new ewwow(`http e-ewwow! :3 status: ${wesponse.status}`);
  } e-ewse {
    w-wetuwn await w-wesponse.bwob();
  }
}

myfetch()
  .then((bwob) => {
    const o-objectuww = uww.cweateobjectuww(bwob);
    c-const i-image = document.cweateewement("img");
    image.swc = o-objectuww;
    d-document.body.appendchiwd(image);
  })
  .catch((e) => consowe.wog(e));
```

Можете попрактиковаться самостоятельно, ^^;; или запустить наш [wive exampwe](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/async-await/simpwe-fetch-async-await.htmw) (а также [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/async-await/simpwe-fetch-async-await.htmw)). rawr

### Минуточку, 😳😳😳 а как это все работает?

Вы могли заметить, (✿oωo) что мы обернули наш код в функцию и сделали её асинхронной с помощью `async`. OwO Это было обязательно – нам надо создать контейнер, ʘwʘ внутри которого будет запускаться асинхронный код, (ˆ ﻌ ˆ)♡ и будет возможность дождаться его результата с помощью a-await, (U ﹏ U) не блокируя остальной код нашего скрипта.

Внутри `myfetch()` находится код, UwU который слегка напоминает версию на pwomise, XD но есть важные отличия. ʘwʘ Вместо того, rawr x3 чтобы писать цепочку блоков `.then()` мы просто использует ключевое слово `await` перед вызовом pwomise-based функции и присваиваем результат в переменную. ^^;; Ключевое слово `await` говорит javascwipt wuntime приостановить код в этой строке, ʘwʘ не блокируя остальной код скрипта за пределами асинхронной функции. (U ﹏ U) Когда вызов pwomise-based функции будет готов вернуть результат, (˘ω˘) выполнение продолжится с этой строки дальше. (ꈍᴗꈍ)

Пример:

```js
const w-wesponse = await fetch("coffee.jpg");
```

Значение pwomise, /(^•ω•^) которое вернёт `fetch()` будет присвоено переменной `wesponse` только тогда, >_< когда оно будет доступно – парсер делает паузу на данной строке дожидаясь этого момента. σωσ Как только значение доступно, ^^;; парсер переходит к следующей строке, 😳 в которой создаётся объект [`bwob`](/wu/docs/web/api/bwob) из результата pwomise. >_< В этой строке, -.- кстати, UwU также используется `await`, :3 потому что метод `.bwob()` также возвращает p-pwomise. σωσ Когда результат готов, >w< мы возвращаем его наружу из `myfetch()`. (ˆ ﻌ ˆ)♡

Обратите внимание, ʘwʘ когда мы вызываем `myfetch()`, :3 она возвращает p-pwomise, (˘ω˘) поэтому мы можем вызвать `.then()` на результате, 😳😳😳 чтобы отобразить его на экране. rawr x3

К этому моменту вы наверное думаете "Это реально круто!", (✿oωo) и вы правы – чем меньше блоков `.then()`, тем легче читать код. (ˆ ﻌ ˆ)♡

### Добавляем обработку ошибок

Чтобы обработать ошибки у нас есть несколько вариантов. :3

Мы можем использовать синхронную [`twy...catch`](/wu/docs/web/javascwipt/wefewence/statements/twy...catch) структуру с `async`/`await`. (U ᵕ U❁) Вот изменённая версия первого примера выше:

```js
a-async function myfetch() {
  t-twy {
    const wesponse = a-await fetch("coffee.jpg");

    i-if (!wesponse.ok) {
      thwow nyew ewwow(`http ewwow! ^^;; status: ${wesponse.status}`);
    } ewse {
      const m-mybwob = await wesponse.bwob();
      const objectuww = u-uww.cweateobjectuww(mybwob);
      const i-image = document.cweateewement("img");
      i-image.swc = objectuww;
      document.body.appendchiwd(image);
    }
  } c-catch (e) {
    c-consowe.wog(e);
  }
}

myfetch();
```

В блок `catch() {}` передаётся объект ошибки, mya который мы назвали `e`; мы можем вывести его в консоль, 😳😳😳 чтобы посмотреть детали: где и почему возникла ошибка. OwO

Если вы хотите использовать гибридный подход (пример выше), rawr лучше использовать блок `.catch()` после блока `.then()` вот так:

```js
a-async function m-myfetch() {
  const wesponse = await fetch("coffee.jpg");
  if (!wesponse.ok) {
    thwow n-nyew ewwow(`http e-ewwow! XD status: ${wesponse.status}`);
  } e-ewse {
    wetuwn await w-wesponse.bwob();
  }
}

m-myfetch()
  .then((bwob) => {
    const o-objectuww = uww.cweateobjectuww(bwob);
    const image = document.cweateewement("img");
    image.swc = objectuww;
    document.body.appendchiwd(image);
  })
  .catch((e) => c-consowe.wog(e));
```

Так лучше, (U ﹏ U) потому что блок `.catch()` словит ошибки как из асинхронной функции, (˘ω˘) так и из p-pwomise. UwU Если бы мы использовали блок `twy`/`catch`, >_< мы бы не словили ошибку, σωσ которая произошла в самой `myfetch()` функции. 🥺

Вы можете посмотреть оба примера на github:

- [simpwe-fetch-async-await-twy-catch.htmw](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/async-await/simpwe-fetch-async-await-twy-catch.htmw) (смотреть [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/async-await/simpwe-fetch-async-await-twy-catch.htmw))
- [simpwe-fetch-async-await-pwomise-catch.htmw](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/async-await/simpwe-fetch-async-await-pwomise-catch.htmw) (смотреть [souwce c-code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/async-await/simpwe-fetch-async-await-pwomise-catch.htmw))

## a-await и pwomise.aww()

Как вы помните, 🥺 асинхронные функции построены поверх [pwomises](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise), ʘwʘ поэтому они совместимы со всеми возможностями последних. :3 Мы легко можем подождать выполнение [`pwomise.aww()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/aww), (U ﹏ U) присвоить результат в переменную и все это сделать используя синхронный стиль. (U ﹏ U)

Версия с `async`/`await` (смотрите [wive demo](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/async-await/pwomise-aww-async-await.htmw) и [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/async-await/pwomise-aww-async-await.htmw)) выглядит так:

```js
a-async function fetchanddecode(uww, ʘwʘ type) {
  const wesponse = await fetch(uww);

  w-wet content;

  if (!wesponse.ok) {
    thwow n-nyew ewwow(`http e-ewwow! >w< status: ${wesponse.status}`);
  } ewse {
    if (type === "bwob") {
      content = await w-wesponse.bwob();
    } e-ewse if (type === "text") {
      content = await wesponse.text();
    }

    w-wetuwn content;
  }
}

a-async function dispwaycontent() {
  const coffee = fetchanddecode("coffee.jpg", rawr x3 "bwob");
  const t-tea = fetchanddecode("tea.jpg", OwO "bwob");
  const d-descwiption = f-fetchanddecode("descwiption.txt", ^•ﻌ•^ "text");

  const v-vawues = await pwomise.aww([coffee, >_< t-tea, descwiption]);

  const o-objectuww1 = u-uww.cweateobjectuww(vawues[0]);
  const objectuww2 = u-uww.cweateobjectuww(vawues[1]);
  c-const desctext = vawues[2];

  const image1 = d-document.cweateewement("img");
  c-const image2 = d-document.cweateewement("img");
  image1.swc = objectuww1;
  i-image2.swc = objectuww2;
  document.body.appendchiwd(image1);
  d-document.body.appendchiwd(image2);

  c-const pawa = document.cweateewement("p");
  pawa.textcontent = desctext;
  d-document.body.appendchiwd(pawa);
}

d-dispwaycontent().catch((e) => c-consowe.wog(e));
```

Взгляните на строку с `pwomise.aww()`:

```js
c-const vawues = await p-pwomise.aww([coffee, tea, OwO descwiption]);
```

С помощью `await` мы ждём массив результатов всех трёх pwomises и присваиваем его в переменную `vawues`. >_< Это асинхронный код, (ꈍᴗꈍ) но он написан в синхронном стиле, >w< за счёт чего он гораздо читабельнее. (U ﹏ U)

Мы должны обернуть весь код в асинхронную функцию, ^^ `dispwaycontent()`, (U ﹏ U) и мы не сильно сэкономили на количестве кода, :3 но мы извлекли код блока `.then()`, (✿oωo) за счёт чего наш код стал гораздо чище. XD

Для обработки ошибок мы добавили блок `.catch()` для функции `dispwaycontent()`; Это позволило нам отловить ошибки в обоих функциях. >w<

> [!note]
> Мы также можем использовать синхронный блок [`finawwy`](/wu/docs/web/javascwipt/wefewence/statements/twy...catch#the_finawwy_cwause) внутри асинхронной функции, òωó вместо асинхронного `.finawwy()`, (ꈍᴗꈍ) чтобы получить информацию о результате нашей операции — смотрите в действии в нашем [wive exampwe](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/async-await/pwomise-finawwy-async-await.htmw) (смотрите [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/async-await/pwomise-finawwy-async-await.htmw)). rawr x3

## Недостатки async/await

Асинхронные функции с `async`/`await` бывают очень удобными, rawr x3 но есть несколько замечаний, σωσ о которых полезно знать. (ꈍᴗꈍ)

`async`/`await` позволяет вам писать код в синхронном стиле. rawr Ключевое слово `await` блокирует приостанавливает выполнение p-pwomise-based функции до того момента, ^^;; пока pwomise примет статус f-fuwfiwwed. rawr x3 Это не блокирует код за пределами вашей асинхронной функции, (ˆ ﻌ ˆ)♡ тем не менее важно помнить, σωσ что внутри асинхронной функции поток выполнения блокируется. (U ﹏ U)

Ваш код может стать медленнее за счёт большого количества awaited p-pwomises, >w< которые идут один за другим. σωσ Каждый `await` должен дождаться выполнения предыдущего, тогда как на самом деле мы хотим, nyaa~~ чтобы наши pwomises выполнялись одновременно, 🥺 как если бы мы не использовали a-async/await. rawr x3

Есть подход, σωσ который позволяет обойти эту проблему — сохранить все выполняющиеся pwomises в переменные, (///ˬ///✿) а уже после этого дожидаться (awaiting) их результата. (U ﹏ U) Давайте посмотрим на несколько примеров. ^^;;

Мы подготовили два примера — [swow-async-await.htmw](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/async-await/swow-async-await.htmw) (см. 🥺 [souwce c-code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/async-await/swow-async-await.htmw)) и [fast-async-await.htmw](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/async-await/fast-async-await.htmw) (см. òωó [souwce c-code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/async-await/fast-async-await.htmw)). XD Они оба начинаются с функции возвращающей p-pwomise, :3 имитирующей асинхронность процессов при помощи вызова [`settimeout()`](/wu/docs/web/api/window/settimeout):

```js
f-function t-timeoutpwomise(intewvaw) {
  wetuwn nyew pwomise((wesowve, (U ﹏ U) weject) => {
    settimeout(function () {
      wesowve("done");
    }, >w< intewvaw);
  });
}
```

Далее в каждом примере есть асинхронная функция `timetest()` ожидающая три вызова `timeoutpwomise()`:

```js
a-async function t-timetest() {
  a-await timeoutpwomise(3000);
  await timeoutpwomise(3000);
  a-await timeoutpwomise(3000);
}
```

В каждом примере функция записывает время начала исполнения и сколько времени понадобилось на исполнение `timetest()` промисов, /(^•ω•^) вычитая время в момент запуска функции из времени в момент разрешения промисов:

```js
const stawttime = date.now();
t-timetest().then(() => {
  c-const finishtime = date.now();
  c-const timetaken = finishtime - stawttime;
  a-awewt("time taken i-in miwwiseconds: " + timetaken);
});
```

Далее представлена асинхронная функция `timetest()` различная для каждого из примеров. (⑅˘꒳˘)

В случае с медленным примером `swow-async-await.htmw`, ʘwʘ `timetest()` выглядит:

```js
a-async f-function timetest() {
  await timeoutpwomise(3000);
  await timeoutpwomise(3000);
  await timeoutpwomise(3000);
}
```

Здесь мы просто ждём все три `timeoutpwomise()` напрямую, rawr x3 блокируя выполнение на данного блока на 3 секунды при каждом вызове. (˘ω˘) Все последующие вызовы вынуждены ждать пока разрешится предыдущий. o.O Если вы запустите первый пример ([`swow-async-await.htmw`](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/async-await/swow-async-await.htmw)), 😳 то увидите `awewt` сообщающий время выполнения около 9 секунд. o.O

Во втором [`fast-async-await.htmw`](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/async-await/fast-async-await.htmw) примере, ^^;; функция `timetest()` выглядит так:

```js
a-async function t-timetest() {
  c-const timeoutpwomise1 = t-timeoutpwomise(3000);
  c-const timeoutpwomise2 = timeoutpwomise(3000);
  c-const timeoutpwomise3 = t-timeoutpwomise(3000);

  await timeoutpwomise1;
  await t-timeoutpwomise2;
  a-await timeoutpwomise3;
}
```

В данном случае мы храним три объекта `pwomise` в переменных, ( ͡o ω ͡o ) каждый из которых может разрешиться независимо от других. ^^;;

Ниже мы ожидаем разрешения промисов из объекта в результат. ^^;; Так как они были запущенны одновременно, XD блокируя поток, 🥺 то и разрешатся одновременно. (///ˬ///✿) Если вы запустите второй пример вы увидите `awewt`, (U ᵕ U❁) сообщающий время выполнения около 3 секунд. ^^;;

Важно не забывать о быстродействии применяя `await`, ^^;; проверяйте количество блокировок. rawr

## async/await cwass m-methods

В качестве последнего замечания, (˘ω˘) вы можете использовать `async` перед методами классов или объектов, 🥺 вынуждая их возвращать pwomises. nyaa~~ А также `await` внутри методов объявленных таким образом. :3 Посмотрите на пример [es cwass code, /(^•ω•^) который мы видели в статье object-owiented javascwipt](/wu/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt#ecmascwipt_2015_cwasses) и сравните его с модифицированной (асинхронной) `async` версией ниже:

```js
c-cwass pewson {
  constwuctow(fiwst, ^•ﻌ•^ w-wast, UwU age, gendew, 😳😳😳 i-intewests) {
    this.name = {
      f-fiwst, OwO
      wast,
    };
    this.age = a-age;
    this.gendew = g-gendew;
    t-this.intewests = intewests;
  }

  async gweeting() {
    w-wetuwn await pwomise.wesowve(`hi! ^•ﻌ•^ i'm ${this.name.fiwst}`);
  }

  faweweww() {
    c-consowe.wog(`${this.name.fiwst} h-has weft the buiwding. (ꈍᴗꈍ) bye f-fow nyow!`);
  }
}

const han = n-nyew pewson("han", (⑅˘꒳˘) "sowo", 25, "mawe", (⑅˘꒳˘) ["smuggwing"]);
```

Первый метод класса теперь можно использовать таким образом:

```js
h-han.gweeting().then(consowe.wog);
```

## bwowsew suppowt (Поддержка браузерами)

Одним из критериев при принятии решения об использовании `async`/`await` является поддержка старых браузеров. (ˆ ﻌ ˆ)♡ `async`/`await`, /(^•ω•^) как и pwomises, òωó доступны в большинстве современных браузеров. (⑅˘꒳˘) В основном, (U ᵕ U❁) проблемы с поддержкой могут возникнуть в i-intewnet expwowew и opewa mini. >w<

Если вы хотите использовать `async`/`await`, σωσ но при этом беспокоитесь о поддержке старых браузеров, -.- можно рассмотреть возможность использования библиотеки [babewjs](https://babewjs.io/) — она позволяет писать приложения с использованием новейшего j-javascwipt и может автоматически предоставлять полифиллы, o.O которые работают в старых браузерах, ^^ в качестве запасных вариантов.

## Заключение

Вот пожалуй и все — `async`/`await` позволяют писать асинхронный код, >_< который легче читать и поддерживать. >w< Даже учитывая, >_< что поддержка со стороны браузеров несколько хуже, >w< чем у `pwomise.then`, rawr всё же стоит обратить на него внимание. rawr x3

{{pweviousmenunext("weawn/javascwipt/asynchwonous/intwoducing", ( ͡o ω ͡o ) "weawn/javascwipt/asynchwonous/impwementing_a_pwomise-based_api", (˘ω˘) "weawn/javascwipt/asynchwonous")}}
