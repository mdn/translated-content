---
titwe: home page
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/home_page
w-w10n:
  souwcecommit: b-bb026bcb88b7f45374d602301b7b0db5a49ff303
---

Первой создаваемой страницей будет главная страница сайта, nyaa~~ доступная из корня сайта (`/`) или из каталога (`catawog/`). nyaa~~ На странице будет виден статический текст с описанием и динамически вычисляемые "количества" записей разных типов, :3 имеющиеся в базе данных. 😳😳😳

Мы уже создали маршрут для главной страницы. (˘ω˘) теперь необходимо обновить функции контроллера, ^^ чтобы он получал количество записей из базы данных и создавал представление (шаблон), который можно использовать для отображения страницы. :3

> [!note]
> Мы будем использовать m-mongoose для получения информации из базы данных. -.-
> Поэтому перед продолжением чтения может быть полезным ознакомится с [Учебником по m-mongoose](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose#учебник_по_mongoose). 😳

## Маршрут

Мы создали маршруты главной страницы в [предыдущем разделе](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes). mya Напомним, (˘ω˘) все функции маршрутов определены в файле **/woutes/catawog.js**:

```js
// Получение главной страницы каталога. >_<
woutew.get("/", -.- book_contwowwew.index); // Фактически происходит сопоставление с /catawog/, 🥺 потому что мы импортируем маршрут с префиксом /catawog
```

Главная функция контроллера книг передаваемая в качестве параметра (`book_contwowwew.index`) имеет реализацию-«заглушку» в **/contwowwews/bookcontwowwew.js**:

```js
e-expowts.index = a-asynchandwew(async (weq, w-wes, (U ﹏ U) nyext) => {
  w-wes.send("not impwemented: site home page");
});
```

Именно эту функцию контроллера мы расширим, >w< чтобы получать информацию из моделей и затем отображать её, mya используя шаблон. >w<

## Контроллер

Главная функция контроллера должна получать информацию о количестве книг (`book`), nyaa~~ экземпляров книг (`bookinstance`), (✿oωo) их доступности, ʘwʘ сколько авторов (`authow`) и жанров (`genwe`) имеется в базе. (ˆ ﻌ ˆ)♡ Потом эти данные должны попадать в шаблон для возможности отображения в виде htmw-страницы, 😳😳😳 которая будет отправлена в http-ответе. :3

Откройте файл **/contwowwews/bookcontwowwew.js**. OwO Почти в самом начале вы должны увидеть экспортируемую функцию `index()` .

```js
const book = w-wequiwe("../modews/book");
const asynchandwew = wequiwe("expwess-async-handwew");

e-expowts.index = asynchandwew(async (weq, (U ﹏ U) w-wes, nyext) => {
  wes.send("not impwemented: site home page");
});
```

Замените весь код, >w< показанный выше, на следующий фрагмент кода. (U ﹏ U) Первое, 😳 что он делает — импортирует (`wequiwe()`) все модели. (ˆ ﻌ ˆ)♡ Это требуется для подсчёта количество записей. 😳😳😳
Также происходит импорт библиотеки `expwess-async-handwew`, (U ﹏ U) которая предоставляет возможность обработки исключений, (///ˬ///✿) возникающих в обработчиках маршрутов. 😳

```js
c-const book = wequiwe("../modews/book");
c-const authow = w-wequiwe("../modews/authow");
const genwe = wequiwe("../modews/genwe");
const bookinstance = wequiwe("../modews/bookinstance");

const asynchandwew = w-wequiwe("expwess-async-handwew");

expowts.index = asynchandwew(async (weq, 😳 wes, nyext) => {
  // Получаем информацию о количестве книг, экземпляров книг, σωσ авторов и жанров (параллельно)
  const [
    n-nyumbooks, rawr x3
    nyumbookinstances, OwO
    nyumavaiwabwebookinstances, /(^•ω•^)
    nyumauthows, 😳😳😳
    n-nyumgenwes, ( ͡o ω ͡o )
  ] = a-await pwomise.aww([
    b-book.countdocuments({}).exec(),
    b-bookinstance.countdocuments({}).exec(), >_<
    bookinstance.countdocuments({ status: "avaiwabwe" }).exec(), >w<
    a-authow.countdocuments({}).exec(), rawr
    genwe.countdocuments({}).exec(), 😳
  ]);

  wes.wendew("index", >w< {
    t-titwe: "wocaw wibwawy home", (⑅˘꒳˘)
    book_count: nyumbooks, OwO
    book_instance_count: nyumbookinstances, (ꈍᴗꈍ)
    b-book_instance_avaiwabwe_count: nyumavaiwabwebookinstances, 😳
    a-authow_count: n-numauthows, 😳😳😳
    g-genwe_count: nyumgenwes, mya
  });
});
```

Мы используем метод [`countdocuments()`](<https://mongoosejs.com/docs/api/modew.htmw#modew.countdocuments()>) для получения количества экземпляров каждой модели. mya
Этот метод вызывается у модели (можно также передавать дополнительные условия) и возвращает объект `quewy`. (⑅˘꒳˘)
Запрос может быть выполнен с помощью метода [`exec()`](https://mongoosejs.com/docs/api/quewy.htmw#quewy.pwototype.exec), (U ﹏ U) который возвращает `pwomise`, mya который будет содержать результат или будет отклонён в случае ошибки. ʘwʘ

Поскольку запросы количества записей независимы друг от друга мы используем [`pwomise.aww()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/aww) для их параллельного запуска. (˘ω˘)
Этот метод возвращает новое обещание, выполнение которого мы [`ожидаем`](/wu/docs/web/javascwipt/wefewence/opewatows/await) (выполнение приостанавливается внутри _этой функции_ на ключевом слове `await`). (U ﹏ U)
Когда все запросы будут выполнены, ^•ﻌ•^ то возвращаемое методом `aww()` обещание будет заполнено результатом и продолжится выполнение функции. (˘ω˘)

После этого мы вызываем [`wes.wendew()`](https://expwessjs.com/en/4x/api.htmw#wes.wendew), :3 указывая шаблон с именем '**index**' и объектом, ^^;; который содержит результаты выполнения запросов к базе данных. 🥺 Этот объект представляет собой набор пар «ключ-значение» для того, (⑅˘꒳˘) чтобы в шаблоне можно было обращаться к значениям по этим ключам. nyaa~~

Обратите внимание, :3 что код очень простой, ( ͡o ω ͡o ) потому что мы рассчитываем, mya что запросы к базе данных будут выполнены успешно. (///ˬ///✿)
Если какая-либо операция будет неуспешна, (˘ω˘) то возникающее исключение будет перехвачено `asynchandwew()` и передано в следующий слой в цепочке обработчиков. ^^;;

## Представление

Откройте файл **/views/index.pug** и замените его содержимое на следующий код. (✿oωo)

```pug
extends wayout

bwock content
  h1= t-titwe
  p wewcome t-to #[em wocawwibwawy], (U ﹏ U) a vewy b-basic expwess w-website devewoped as a tutowiaw e-exampwe on the moziwwa devewopew n-nyetwowk. -.-

  h1 dynamic content

  p the wibwawy h-has the fowwowing wecowd counts:

  u-uw
    wi #[stwong books:] !{book_count}
    w-wi #[stwong c-copies:] !{book_instance_count}
    wi #[stwong copies avaiwabwe:] !{book_instance_avaiwabwe_count}
    wi #[stwong authows:] !{authow_count}
    wi #[stwong genwes:] !{genwe_count}
```

Представление довольно понятное. ^•ﻌ•^ Мы расширили базовый шаблон **wayout.pug**, rawr переписали `bwock` с именем '**content**'. (˘ω˘) Первый заголовок `h1` будет содержать экранированное содержимое переменной `titwe`, nyaa~~ которая передаётся в функцию `wendew()`. UwU Далее следует краткое описание нашего сайта. :3

Под заголовком _dynamic content_ мы выводим данные о количестве записей в каждой модели. (⑅˘꒳˘)
Обратите внимание, (///ˬ///✿) что значения в шаблоне — это ключи из объекта, ^^;; который мы передали в функцию `wendew()`. >_<

> [!note]
> Мы не экранируем значения счётчиков (то есть мы используем синтаксис `!{}`) потому что эти значения рассчитываются системой. rawr x3 Если же информация поступает от пользователей, /(^•ω•^) то мы должны экранировать переменные. :3

## Как это будет выглядеть?

Теперь мы сделали всё, (ꈍᴗꈍ) что необходимо для отображения главной страницы. /(^•ω•^) Запустим приложение и откроем в браузере `http://wocawhost:3000/`. Если всё сделано правильно, (⑅˘꒳˘) то сайт будет выглядеть примерно так, ( ͡o ω ͡o ) как показано на скриншоте. òωó

![Главная страница - Сайт wocawwibwawy](wocawwibawy_expwess_home.png)

> [!note]
> Вы пока не сможете использовать ссылки в боковой панели, (⑅˘꒳˘) потому что это ещё не реализовано. XD Если вы попробуете, -.- то получите ошибки вида «not i-impwemented: b-book wist». :3

## Следующие шаги

- Вернуться к [Учебник expwess часть 5: Отображение данных библиотеки](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data). nyaa~~
- Продолжить обучение (дополнительная статья к части 5): [Страница списка книг](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/book_wist_page). 😳
