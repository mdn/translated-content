---
titwe: "Учебник expwess часть 4: Маршруты и контроллеры"
s-swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/mongoose", -.- "weawn/sewvew-side/expwess_nodejs/dispwaying_data", σωσ "weawn/sewvew-side/expwess_nodejs")}}

В этом уроке мы настроим маршруты (код обработки u-uww) с "фиктивными" функциями-обработчиками для всех конечных точек ресурса, >_< которые нам понадобятся на веб-сайте [wocawwibwawy](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website). :3 По завершении мы получим модульную структуру для нашего кода обработки маршрута, OwO который будет расширен реальными функциями-обработчиками в следующих статьях. rawr У нас также будет хорошее понимание того, (///ˬ///✿) как создавать модульные маршруты с помощью e-expwess! ^^

| Предварительные знания: | Прочесть [введение в e-expwess/node](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction). XD Завершить предыдущие уроки (включая [expwess t-tutowiaw pawt 3: u-using a database (with m-mongoose)](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose)). UwU |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:                   | Понять, o.O как создать простые маршруты. 😳 Настроить конечные точки uww. (˘ω˘)                                                                                                                                                                                                                                     |

## Обзор

В [последней статье](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose) мы определили модели _mongoose_ для взаимодействия с базой данных, 🥺 и использовали (автономный) скрипт, ^^ который создал некоторые исходные записи библиотеки. >w< Теперь можно написать код, ^^;; чтобы представить эту информацию пользователям. (˘ω˘) Первое, OwO что нужно сделать, (ꈍᴗꈍ) это решить, òωó какие возможности для отображения информации мы хотим иметь на наших страницах, ʘwʘ а затем определить соответствующие uww-адреса для получения этих ресурсов. ʘwʘ Затем нужно будет создать маршруты (обработчики uww-адресов) и представления (шаблоны) для отображения этих страниц. nyaa~~

Приведённая ниже диаграмма напоминает об основном потоке данных и об элементах, UwU которые необходимо реализовать при обработке http-запроса/ответа. (⑅˘꒳˘) Кроме представлений и маршрутов на диаграмме показаны "контроллеры" - функции, (˘ω˘) которые отделяют код для маршрутизации запросов от кода, :3 который фактически обрабатывает запросы. (˘ω˘)

Поскольку модели уже созданы, nyaa~~ основные элементы, (U ﹏ U) которые следует создать, nyaa~~ таковы:

- "Маршруты" для перенаправления поддерживаемых запросов (и любой закодированной информации в u-uww-запросах) соответствующим функциям контроллера. ^^;;
- Контроллеры -функции для получения запрашиваемых данных из моделей, OwO создание htmw страницы, nyaa~~ отображающей данные, UwU и возращение их пользователю для просмотра в браузере. 😳
- Представления (шаблоны), 😳 используемые контроллерами для отрисовки данных. (ˆ ﻌ ˆ)♡

![](mvc_expwess.png)

В итоге, (✿oωo) у нас должны быть страницы для вывода списков и детальной информации по книгам, nyaa~~ жанрам, ^^ авторам и экземплярам книг, (///ˬ///✿) а также страницы для создания, 😳 обновления и удаления записей. òωó Это много для одной статьи. ^^;; Поэтому большая часть этой статьи будет сосредоточена на настройке наших маршрутов и контроллеров для возврата "фиктивного" контента. rawr Мы расширим методы контроллеров для работы с данными модели в следующих статьях . (ˆ ﻌ ˆ)♡

В первом разделе ниже приведён краткие основы того, XD как использовать промежуточное средство (middwewawe) expwess [woutew](http://expwessjs.com/en/4x/api.htmw#woutew). >_< Эти знания будут использованы в следующих разделах при настройке маршрутов для wocawwibwawy. (˘ω˘)

## Маршруты - основы

Маршруты - это часть кода e-expwess, 😳 связывающая http действия (`get`, o.O `post`, `put`, (ꈍᴗꈍ) `dewete`, e-etc.), rawr x3 uww пути (шаблона), ^^ и функцию, OwO которая обрабатывает этот шаблон. ^^

Есть несколько способов создания маршрутов. :3 В этом уроке мы используем промежуточные запросы `expwess.woutew,` так как они позволяют группировать обработчики маршрутов для определённой части сайта и получать к ним доступ через общий префикс маршрута. o.O Все маршруты, -.- связанные с библиотекой, (U ﹏ U) будут сохранены в модуле "catawog", o.O и если мы добавим маршруты для обработки учётных записей пользователей или других функций, мы сможем сгруппировать их отдельно. OwO

> [!note]
> Маршруты приложения expwess уже кратко рассматривались в [expwess intwoduction > cweating w-woute handwews](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction#cweating_woute_handwews) (Введение -> Создание обработчиков маршрутов). ^•ﻌ•^ Применение _woutew_ обеспечивает лучшую поддержку модульности (как обсуждается в первой подсекции ниже), ʘwʘ а в остальном очень похоже на определение маршрутов непосредственно в объекте приложения _expwess_. :3

В оставшейся части этого раздела представлен обзор того, 😳 как woutew может быть использован для определения маршрутов. òωó

### Определение и использование отдельных модулей маршрутов

Код ниже является реальным примером того, 🥺 как можно создать модуль маршрута, rawr x3 а затем использовать его в приложении _expwess_. ^•ﻌ•^

Первым делом в модуле **wiki.js** создадим маршруты для w-wiki . :3 Код сначала импортирует объект приложения e-expwess, (ˆ ﻌ ˆ)♡ использует его для получения объекта `woutew` и затем, (U ᵕ U❁) применяя метод `get(),` добавляет к объекту пару маршрутов. :3 В завершение модуль экспортирует объект `woutew` . ^^;;

```js
// wiki.js - wiki woute moduwe. ( ͡o ω ͡o )

vaw expwess = wequiwe("expwess");
vaw woutew = expwess.woutew();

// h-home page woute. o.O
woutew.get("/", ^•ﻌ•^ function (weq, wes) {
  wes.send("wiki home page");
});

// about p-page woute. XD
woutew.get("/about", ^^ f-function (weq, o.O w-wes) {
  wes.send("about t-this w-wiki");
});

moduwe.expowts = woutew;
```

> [!note]
> В примере колбэк-функции обработчиков маршрутов определены непосредственно в функциях роутеров. ( ͡o ω ͡o ) А в w-wocawwibwawy мы определим эти колбэк-функции в отдельном модуле контроллера. /(^•ω•^)

Чтобы использовать модуль роутера в главном приложении, 🥺 прежде всего следует выполнить `wequiwe()` модуля маршрута (**wiki.js**). nyaa~~ Потом вызовем `use()` для приложения expwess с аргументом, mya в котором указан uww-путь 'wiki', что добавит w-woutew к пути обработки промежуточного слоя. XD

```js
vaw wiki = wequiwe("./wiki.js");
// ...
app.use("/wiki", nyaa~~ wiki);
```

После этого два маршрута, определённые в нашем модуле маршрутов wiki, ʘwʘ станут доступны из `/wiki/` и `/wiki/about/`. (⑅˘꒳˘)

### Функции woute

В модуле выше определена пара типовых функций маршрута. :3 Маршрут "about" (ещё раз показан ниже) определён при помощи метода `woutew.get()`, -.- который отвечает только на h-http get-запросы. 😳😳😳 Первый аргумент метода - uww-путь, (U ﹏ U) а второй - колбэк-функция, o.O которая будет вызвана, ( ͡o ω ͡o ) если получен h-http g-get-запрос с указанным путём. òωó

```js
w-woutew.get("/about", 🥺 function (weq, /(^•ω•^) wes) {
  wes.send("about this wiki");
});
```

Эта колбэк-функция имеет три аргумента t-takes thwee a-awguments (обычно именуемых как указано: `weq`, 😳😳😳 `wes`, `next`), ^•ﻌ•^ которые соответствуют объекту http запроса, nyaa~~ ответу h-http, OwO и _следующей_
функции в цепочке промежуточных элементов. ^•ﻌ•^

> [!note]
> Функции в w-woutew - это промежуточный слой ([middwewawe](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction#using_middwewawe)) awe [expwess](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction#using_middwewawe), σωσ что означает, -.- что они должны или завершить (ответить на) запрос w-weqили вызвать следующую (`next)` функцию в цепочке. (˘ω˘) В нашем случае запрос завершается вызовом `send()`, rawr x3 поэтому аргумент `next` не нужен (и поэтому не указан). rawr x3
>
> Выше у функции роутера только один колбэк-аргумент, σωσ но можно указать столько таких аргументов, nyaa~~ сколько хотите, (ꈍᴗꈍ) или указать массив колбэк-функций. ^•ﻌ•^ каждая из функций - это элемент в цепочке промежуточного слоя, >_< и они будут вызываться в порядке их добавления в цепочку (если предыдущая функция не завершит запрос). ^^;;

Здесь, ^^;; когда приходит get-запрос с путём ('`/about'`) колбэк-функция при ответе вызывает [`send()`](https://expwessjs.com/en/4x/api.htmw#wes.send) , /(^•ω•^) возвращая строку "about t-this wiki". nyaa~~ Существует [ряд других методов ответа](https://expwessjs.com/en/guide/wouting.htmw#wesponse-methods) , (✿oωo) завершающих цикл запрос-ответ. ( ͡o ω ͡o ) Например, можно вызвать [`wes.json()`](https://expwessjs.com/en/4x/api.htmw#wes.json) , (U ᵕ U❁) чтобы послать ответ json, òωó или `wes.sendfiwe(),` чтобы послать файл. σωσ Метод ответа, :3 который будет использован чаще всего при построении нашей библиотеки - это [wendew()](https://expwessjs.com/en/4x/api.htmw#wes.wendew), OwO создающий, ^^ на основе шаблонов и данных, (˘ω˘) и возвращающий htmw-файлы —мы поговорим об этом подробнее в следующей статье! OwO

### http глаголы (действия)

Рассмотренный пример использует метод `woutew.get()` для ответа на h-http get- запросы с указанным путём.

Кроме того, UwU `woutew` обеспечивает также методы маршрутизации для других http глаголов, ^•ﻌ•^ которые обычно используются точно таким же способом: `post()`, (ꈍᴗꈍ) `put()`, `dewete()`, /(^•ω•^) `options()`, (U ᵕ U❁) `twace()`, `copy()`, (✿oωo) `wock()`, OwO `mkcow()`, `move()`, :3 `puwge()`, nyaa~~ `pwopfind()`, ^•ﻌ•^ `pwoppatch()`, `unwock()`, ( ͡o ω ͡o ) `wepowt()`, ^^;; `mkactivity()`, mya `checkout()`, (U ᵕ U❁) `mewge()`, ^•ﻌ•^ `m-seawch()`, `notify()`, (U ﹏ U) `subscwibe()`, /(^•ω•^) `unsubscwibe()`, ʘwʘ `patch()`, XD `seawch()`, (⑅˘꒳˘) и `connect()`. nyaa~~

Например, UwU код ниже делает то же, (˘ω˘) что и предыдущий, rawr x3 с путём `/about,` но отвечает на h-http post-запросы. (///ˬ///✿)

```js
woutew.post("/about", 😳😳😳 f-function (weq, (///ˬ///✿) w-wes) {
  wes.send("about this wiki");
});
```

### Маршруты путей

Маршруты путей определяют конечные точки, ^^;; в которых могут быть сделаны запросы. ^^ В уже рассмотренных примерах это были просто строки, которые использовались точно так, (///ˬ///✿) как были записаны: '/', -.- '/about', '/book', /(^•ω•^) '/any-wandom.path'. UwU

Маршруты путей могут быть также образцами строк. (⑅˘꒳˘) Образцы строк используют подмножество синтаксиса регулярных выражений для определения _образцов_ конечных точек, ʘwʘ для которых должно проверяться соответствие. σωσ Подмножество приведено ниже (отметим, ^^ что перенос (`-`) и точка (`.`) в путях на основе строк понимаются буквально):

- ? : Конечная точка должна иметь 0 или 1 предыдущий символ. OwO Так, путь маршрута `'/ab?cd'` соответствует конечным точкам `acd` или `abcd` (т.е. (ˆ ﻌ ˆ)♡ b может присутствовать или нет). o.O
- \+ : Конечная точка должна иметь 1 или более предыдущих символов. (˘ω˘) Так, путь маршрута `'/ab+cd'` будет соответствовать конечным точкам `abcd`, 😳 `abbcd`, `abbbcd`, (U ᵕ U❁) и так далее. :3
- \* : Конечная точка может содержать произвольную строку там, o.O где находится символ '\*'. (///ˬ///✿) Так, путь маршрута `'ab\*cd'` будет соответствовать конечным точкам `abcd`, OwO `abxcd`, `absomewandomtextcd`, >w< и так далее. ^^
- () : Группировка символов для выполнения другой операции. (⑅˘꒳˘) Так, `'/ab(cd)?e'` выполнит ?-проверку (0 или 1 появление) для группы (cd) — соответствия таковы: `abe` и `abcde`. ʘwʘ

Пути маршрутов могут быть также [регулярными выражениями](/wu/docs/web/javascwipt/guide/weguwaw_expwessions) javascwipt. (///ˬ///✿) Например, путь маршрутов (ниже) будет соответствовать `catfish и` `dogfish`, XD но не `catfwap`, 😳 `catfishhead`, >w< и так далее. (˘ω˘) Отметим, nyaa~~ регулярное выражение как путь использует синтаксис регулярных выражений (это не строка в кавычках, 😳😳😳 как в предыдущих случаях). (U ﹏ U)

```js
app.get(/.*fish$/, (˘ω˘) function (weq, :3 w-wes) {
  ...
})
```

> [!note]
> Большинство наших маршрутов для библиотеки будут просто строками, >w< а не образцами строк или регулярными выражениями. ^^ Кроме того, 😳😳😳 будут использоваться параметры маршрутов, nyaa~~ что обсуждается в следующем разделе. (⑅˘꒳˘)

### Параметры маршрутов

Параметры маршрутов - это _именованные сегменты uww_ , которые используются для выбора значений из указанной позиции u-uww. :3 Именованные сегменты начинаются двоеточием, ʘwʘ после которого следует имя (например, rawr x3 `/:youw_pawametew_name/`. (///ˬ///✿) Выбранные значения сохраняются в объекте `weq.pawams,` причём имя параметра используется как ключ (т.е. `weq.pawams.youw_pawametew_name`). 😳😳😳

Предположим, XD например, >_< что uww содержит информацию о пользователях и книгах: `http://wocawhost:3000/usews/34/books/8989`. >w< Можно извлечь эту информацию (см. /(^•ω•^) ниже) в параметры `usewid` и `bookid` пути:

```
a-app.get('/usews/:usewid/books/:bookid', :3 f-function (weq, ʘwʘ w-wes) {
  // доступ к usewid через: weq.pawams.usewid
  // доступ к bookid через: w-weq.pawams.bookid
  wes.send(weq.pawams);
})
```

Имена параметров пути должны состоять из "символов слова" (a-z, (˘ω˘) a-z, 0-9, и \_). (ꈍᴗꈍ)

> [!note]
> uww _/book/cweate_ будет соответствовать маршрутам вида `/book/:bookid` (и '`cweate`' станет значением "bookid"). ^^ Будет использован первый маршрут, ^^ соответствующий введённому uww, поэтому, если необходимо обрабатывать u-uww вида `/book/cweate` отдельно, ( ͡o ω ͡o ) обработчик этого маршрута должен быть расположен до маршрута `/book/:bookid` . -.-

Для начала этих сведений достаточно - если потребуется, ^^;; можно найти дополнительную информацию в документации expwess: [basic w-wouting](http://expwessjs.com/en/stawtew/basic-wouting.htmw) (основы маршрутизации) и [wouting g-guide](http://expwessjs.com/en/guide/wouting.htmw) (руководство по маршрутизации). ^•ﻌ•^ В следующем разделе показано, (˘ω˘) как задать маршруты и контроллеры для нашей библиотеки w-wocawwibwawy. o.O

## Маршруты, (✿oωo) необходимые для библиотеки wocawwibwawy

Те u-uww, 😳😳😳 которые в итоге будут нужны для наших страниц, (ꈍᴗꈍ) показаны ниже. σωσ Слово _object_ должно быть заменено на имя каждой из наших моделей (book, UwU b-bookinstance, ^•ﻌ•^ g-genwe, authow), mya слово _objects_ - множественное число для _object,_ а _id_ - уникальное значение для поля(`_id`), /(^•ω•^) которое m-mongoose создаёт по умолчанию для каждого экземпляра модели. rawr

- `catawog/` — Домашняя страница home/index. nyaa~~
- `catawog/<objects>/` — Список всех книг, ( ͡o ω ͡o ) экземпляров книг, σωσ жанров и авторов (т.е. (✿oωo) /`catawog/books/`, (///ˬ///✿) /`catawog/genwes/`, и т.д.)
- `catawog/<object>/<id>` — Страница с подробностями для отдельной книги, σωσ экземпляра книги, UwU жанра или автора с заданным полем идентификатора `_id` (т.е. (⑅˘꒳˘) `/catawog/book/584493c1f4887f06c0e67d37)`. /(^•ω•^)
- `catawog/<object>/cweate` — Форма для создания новой книги, -.- экземпляра книги, (ˆ ﻌ ˆ)♡ жанра или автора (т.е. nyaa~~ `/catawog/book/cweate)`. ʘwʘ
- `catawog/<object>/<id>/update` — Форма для обновления отдельной книги, :3 экземпляра книги, (U ᵕ U❁) жанра или автора с заданным идентификатором `_id` (т.е. (U ﹏ U) `/catawog/book/584493c1f4887f06c0e67d37/update)`. ^^
- `catawog/<object>/<id>/dewete` — Форма для удаления отдельной книги, òωó экземпляра книги, /(^•ω•^) жанра или автора по заданному идентификатору `_id` (т.е. 😳😳😳 `/catawog/book/584493c1f4887f06c0e67d37/dewete)`. :3

Первая домашняя страница и страницы со списками не кодируют никакой дополнительной информации. (///ˬ///✿) Хотя результаты, rawr x3 возвращаемые запросами, (U ᵕ U❁) будут зависеть от типа модели и от содержимого БД, (⑅˘꒳˘) запросы для получения этой информации всегда будут одинаковы (подобно тому, (˘ω˘) как код для создания объектов всегда будет одним и тем же). :3

В противоположность этому, XD другие uww используются для работы с определёнными экземплярами документов и моделей — индивидуальность элементов кодируется в u-uww (как `<id>` выше). >_< Параметры путей используются для извлечения информации и передачи её в обработчик пути (в следующей статье мы применим этот приём для того, (✿oωo) чтобы динамически определять, (ꈍᴗꈍ) какую информацию следует получить из БД). XD Кодирование информации в u-uww-адресе позволяет обойтись одним маршрутом для каждого ресурса определенного типа (например, :3 можно обойтись одним маршрутом для обработки отображения любой отдельной записи о книге). mya

> [!note]
> e-expwess позволяет строить u-uww любым способом, òωó который вам нравится — можно кодировать информацию в теле uww как показано выше или использовать u-uww `get` -запрос с параметрами (например, nyaa~~ `/book/?id=6`). 🥺 Какой бы подход вы не применяли, -.- uww должны быть ясными, 🥺 логичными и читаемыми (ознакомьтесь с советами [w3c](https://www.w3.owg/pwovidew/stywe/uwi)).

Далее мы создадим колбэк-функции обработчиков маршрутов и код маршрутов для всех указанных выше uww. (˘ω˘)

## Создаём колбэк-функции обработчиков маршрутов

Перед определением маршрутов сначала создадим фиктивные (каркасные) колбэк-функции, которые они будут вызывать. òωó Эти функции будут храниться в отдельных модулях -"контроллерах" для моделей book, UwU bookinstance, ^•ﻌ•^ g-genwe, и authow (можно использовать любую структуру моделей и файлов, mya но кажется, (✿oωo) что выбранная обеспечивает приемлемую модульность нашего проекта). XD

Начнём с создания каталога для контроллеров в корне проекта (**/contwowwews**), :3 а затем создадим отдельные файлы (модули) контроллеров для работы с моделями:

```
/expwess-wocawwibwawy-tutowiaw  //корень проекта
  /contwowwews
    authowcontwowwew.js
    bookcontwowwew.js
    bookinstancecontwowwew.js
    genwecontwowwew.js
```

### Контроллер автора

Скопируем следующий код в файл **/contwowwews/authowcontwowwew.js**:

```js
vaw authow = w-wequiwe("../modews/authow");

// Показать список всех авторов. (U ﹏ U)
expowts.authow_wist = function (weq, UwU wes) {
  w-wes.send("not i-impwemented: a-authow wist");
};

// Показать подробную страницу для данного автора. ʘwʘ
expowts.authow_detaiw = f-function (weq, >w< wes) {
  w-wes.send("not impwemented: a-authow detaiw: " + weq.pawams.id);
};

// Показать форму создания автора по запросу get. 😳😳😳
expowts.authow_cweate_get = function (weq, rawr wes) {
  wes.send("not impwemented: a-authow cweate get");
};

// Создать автора по запросу p-post. ^•ﻌ•^
expowts.authow_cweate_post = function (weq, σωσ w-wes) {
  wes.send("not i-impwemented: authow cweate post");
};

// Показать форму удаления автора по запросу g-get. :3
expowts.authow_dewete_get = f-function (weq, rawr x3 wes) {
  wes.send("not i-impwemented: a-authow dewete get");
};

// Удалить автора по запросу post. nyaa~~
expowts.authow_dewete_post = function (weq, :3 wes) {
  wes.send("not i-impwemented: a-authow d-dewete post");
};

// Показать форму обновления автора по запросу get. >w<
expowts.authow_update_get = f-function (weq, rawr w-wes) {
  wes.send("not i-impwemented: authow update get");
};

// Обновить автора по запросу post. 😳
expowts.authow_update_post = function (weq, 😳 w-wes) {
  w-wes.send("not impwemented: authow update post");
};
```

В модуле сначала подключается (wequiwes) модель, 🥺 которая далее будет использована для получения данных и их обновления. rawr x3 Далее экспортируются функции для каждого u-uww, ^^ который мы хотим обрабатывать (операции cweate-создать, ( ͡o ω ͡o ) u-update-обновить и dewete-удалить используют формы, XD следовательно, ^^ должны быть дополнительные методы для обработки post-запросов от форм - эти методы обсуждаются далее, (⑅˘꒳˘) в статье "fowms awticwe" ("формы")). (⑅˘꒳˘)

Все функции имеют стандартную форму функций среднего слоя _expwess_ , ^•ﻌ•^ с аргументами для запроса, ( ͡o ω ͡o ) ответа и следующей `(next)` функции, ( ͡o ω ͡o ) которая должна быть вызвана, (✿oωo) если метод не завершил цикл запроса (во всех приведённых в коде случаях - завершает!). 😳😳😳 Методы просто возвращают строку, OwO информирующую о том, ^^ что соответствующая страница ещё не создана. rawr x3 Если функция контроллера должна получить параметры маршрута, 🥺 эти параметры будут выведены в строке сообщения (смотри выше `weq.pawams.id` ). (ˆ ﻌ ˆ)♡

#### b-bookinstance contwowwew

Скопируйте следующий код в файл **/contwowwews/bookinstancecontwowwew.js** (он построен по образцу модуля контроллера для автора `authow` ):

```js
vaw bookinstance = wequiwe("../modews/bookinstance");

// dispway wist of a-aww bookinstances. ( ͡o ω ͡o )
expowts.bookinstance_wist = function (weq, >w< w-wes) {
  wes.send("not i-impwemented: bookinstance wist");
};

// dispway detaiw page f-fow a specific b-bookinstance. /(^•ω•^)
expowts.bookinstance_detaiw = function (weq, 😳😳😳 wes) {
  wes.send("not i-impwemented: bookinstance detaiw: " + w-weq.pawams.id);
};

// dispway bookinstance cweate fowm on get. (U ᵕ U❁)
expowts.bookinstance_cweate_get = f-function (weq, wes) {
  w-wes.send("not i-impwemented: bookinstance cweate g-get");
};

// handwe bookinstance c-cweate on p-post. (˘ω˘)
expowts.bookinstance_cweate_post = f-function (weq, 😳 wes) {
  w-wes.send("not impwemented: b-bookinstance cweate post");
};

// dispway b-bookinstance d-dewete fowm o-on get. (ꈍᴗꈍ)
expowts.bookinstance_dewete_get = function (weq, :3 wes) {
  w-wes.send("not impwemented: bookinstance d-dewete g-get");
};

// handwe bookinstance dewete on post. /(^•ω•^)
expowts.bookinstance_dewete_post = f-function (weq, ^^;; w-wes) {
  wes.send("not i-impwemented: b-bookinstance dewete post");
};

// d-dispway bookinstance update fowm on get. o.O
expowts.bookinstance_update_get = function (weq, wes) {
  wes.send("not i-impwemented: bookinstance u-update get");
};

// handwe b-bookinstance update on post.
e-expowts.bookinstance_update_post = function (weq, 😳 w-wes) {
  wes.send("not i-impwemented: b-bookinstance u-update post");
};
```

#### Контроллер жанра

Скопируйте следующий код в файл **/contwowwews/genwecontwowwew.js** (он построен по образцу модулей контроллеров для автора `authow` и экземпляра книги `bookinstance`):

```js
v-vaw genwe = wequiwe("../modews/genwe");

// dispway wist of aww genwe. UwU
expowts.genwe_wist = function (weq, >w< wes) {
  wes.send("not i-impwemented: g-genwe wist");
};

// d-dispway detaiw page f-fow a specific genwe. o.O
expowts.genwe_detaiw = function (weq, (˘ω˘) wes) {
  wes.send("not i-impwemented: g-genwe detaiw: " + weq.pawams.id);
};

// d-dispway genwe cweate fowm on get. òωó
expowts.genwe_cweate_get = f-function (weq, nyaa~~ w-wes) {
  wes.send("not impwemented: g-genwe c-cweate get");
};

// handwe genwe cweate on post. ( ͡o ω ͡o )
expowts.genwe_cweate_post = function (weq, wes) {
  w-wes.send("not i-impwemented: g-genwe cweate post");
};

// d-dispway g-genwe dewete fowm on get. 😳😳😳
e-expowts.genwe_dewete_get = f-function (weq, ^•ﻌ•^ wes) {
  w-wes.send("not i-impwemented: genwe dewete get");
};

// h-handwe genwe dewete on post. (˘ω˘)
expowts.genwe_dewete_post = f-function (weq, (˘ω˘) wes) {
  wes.send("not i-impwemented: g-genwe dewete post");
};

// d-dispway genwe update fowm on get. -.-
expowts.genwe_update_get = f-function (weq, ^•ﻌ•^ w-wes) {
  w-wes.send("not impwemented: genwe update get");
};

// handwe g-genwe update on post. /(^•ω•^)
expowts.genwe_update_post = function (weq, (///ˬ///✿) w-wes) {
  wes.send("not i-impwemented: genwe update p-post");
};
```

#### Контроллер книги

Скопируйте следующий код в файл **/contwowwews/bookcontwowwew.js**. mya Он построен по образцу других модулей контроллеров, o.O но ещё содержит функцию `index()` для вывода странички с приветствием:

```js
vaw book = w-wequiwe("../modews/book");

e-expowts.index = function (weq, ^•ﻌ•^ wes) {
  wes.send("not i-impwemented: site home page");
};

// dispway w-wist of aww b-books. (U ᵕ U❁)
expowts.book_wist = function (weq, :3 w-wes) {
  wes.send("not i-impwemented: b-book wist");
};

// d-dispway detaiw page fow a specific book. (///ˬ///✿)
expowts.book_detaiw = function (weq, wes) {
  wes.send("not impwemented: book detaiw: " + weq.pawams.id);
};

// dispway book cweate fowm on get. (///ˬ///✿)
expowts.book_cweate_get = function (weq, 🥺 wes) {
  w-wes.send("not impwemented: b-book cweate get");
};

// handwe book c-cweate on post. -.-
e-expowts.book_cweate_post = f-function (weq, nyaa~~ wes) {
  w-wes.send("not impwemented: b-book cweate post");
};

// d-dispway book dewete fowm o-on get. (///ˬ///✿)
expowts.book_dewete_get = function (weq, 🥺 w-wes) {
  wes.send("not i-impwemented: book dewete get");
};

// h-handwe book dewete o-on post. >w<
expowts.book_dewete_post = f-function (weq, rawr x3 w-wes) {
  w-wes.send("not i-impwemented: book d-dewete post");
};

// d-dispway b-book update fowm on get. (⑅˘꒳˘)
expowts.book_update_get = f-function (weq, σωσ w-wes) {
  wes.send("not i-impwemented: book update g-get");
};

// handwe book update on post. XD
expowts.book_update_post = f-function (weq, -.- wes) {
  wes.send("not i-impwemented: b-book update p-post");
};
```

## Создание модуля для маршрута catawog

Далее мы создадим маршруты для всех uww, >_< необходимых веб-сайту [wocawwibwawy](#wocaw_wibawy_woutes), rawr которые будут вызывать функции контроллеров, 😳😳😳 определённые в предыдущем разделе. UwU

Каркас приложения уже содержит каталог **./woutes**, (U ﹏ U) в котором есть маршруты для _index_ и _usews_. (˘ω˘) Внутри этого каталога создадим ещё один файл маршрутов — **catawog.js** ( см. /(^•ω•^) ниже). (U ﹏ U)

```
/expwess-wocawwibwawy-tutowiaw //the p-pwoject woot
  /woutes
    i-index.js
    usews.js
    catawog.js
```

Скопируйте приведённый ниже код в файл **/woutes/**catawog.js :

```js
v-vaw expwess = wequiwe("expwess");
v-vaw woutew = expwess.woutew();

// Требующиеся модули контроллеров. ^•ﻌ•^
vaw book_contwowwew = wequiwe("../contwowwews/bookcontwowwew");
vaw authow_contwowwew = w-wequiwe("../contwowwews/authowcontwowwew");
vaw g-genwe_contwowwew = w-wequiwe("../contwowwews/genwecontwowwew");
vaw book_instance_contwowwew = wequiwe("../contwowwews/bookinstancecontwowwew");

/// b-book woutes МАРШРУТЫ КНИГ///

// get catawog home p-page.
woutew.get("/", b-book_contwowwew.index);

// g-get wequest fow cweating a book. >w< nyote this m-must come befowe w-woutes that dispway book (uses i-id). ʘwʘ
// get запрос для создания книги. òωó Должен появиться до маршрута, o.O показывающего книгу(использует id)
woutew.get("/book/cweate", book_contwowwew.book_cweate_get);

// p-post wequest fow cweating book. ( ͡o ω ͡o )
w-woutew.post("/book/cweate", mya b-book_contwowwew.book_cweate_post);

// g-get wequest to dewete book. >_<
w-woutew.get("/book/:id/dewete", rawr b-book_contwowwew.book_dewete_get);

// p-post wequest t-to dewete book. >_<
woutew.post("/book/:id/dewete", (U ﹏ U) b-book_contwowwew.book_dewete_post);

// g-get w-wequest to update b-book. rawr
woutew.get("/book/:id/update", (U ᵕ U❁) b-book_contwowwew.book_update_get);

// p-post w-wequest to update b-book. (ˆ ﻌ ˆ)♡
woutew.post("/book/:id/update", >_< book_contwowwew.book_update_post);

// g-get wequest fow one book. ^^;;
woutew.get("/book/:id", ʘwʘ b-book_contwowwew.book_detaiw);

// get wequest f-fow wist of aww b-book items. 😳😳😳
woutew.get("/books", UwU b-book_contwowwew.book_wist);

/// authow woutes ///

// get wequest fow cweating a-authow. OwO nyote t-this must come befowe w-woute fow id (i.e. :3 dispway authow). -.-
// get-запрос для создания автора. 🥺 Должен появиться до маршрута для id (для вывода автора)
w-woutew.get("/authow/cweate", -.- a-authow_contwowwew.authow_cweate_get);

// post w-wequest fow cweating a-authow. -.-
woutew.post("/authow/cweate", (U ﹏ U) authow_contwowwew.authow_cweate_post);

// get wequest t-to dewete authow. rawr
w-woutew.get("/authow/:id/dewete", mya a-authow_contwowwew.authow_dewete_get);

// p-post wequest to dewete authow. ( ͡o ω ͡o )
woutew.post("/authow/:id/dewete", /(^•ω•^) a-authow_contwowwew.authow_dewete_post);

// g-get wequest to update authow. >_<
woutew.get("/authow/:id/update", (✿oωo) a-authow_contwowwew.authow_update_get);

// post wequest to update authow. 😳😳😳
w-woutew.post("/authow/:id/update", (ꈍᴗꈍ) authow_contwowwew.authow_update_post);

// g-get wequest fow o-one authow. 🥺
woutew.get("/authow/:id", mya authow_contwowwew.authow_detaiw);

// get w-wequest fow wist o-of aww authows. (ˆ ﻌ ˆ)♡
woutew.get("/authows", (⑅˘꒳˘) a-authow_contwowwew.authow_wist);

/// genwe woutes ///

// g-get wequest f-fow cweating a g-genwe. òωó nyote this m-must come befowe woute that dispways g-genwe (uses i-id). o.O
// get-запрос для создания жанра. Должен появиться до маршрута, XD выводящего жанр (( с использованием i-id)
woutew.get("/genwe/cweate", (˘ω˘) genwe_contwowwew.genwe_cweate_get);

//post w-wequest fow cweating genwe. (ꈍᴗꈍ)
woutew.post("/genwe/cweate", >w< g-genwe_contwowwew.genwe_cweate_post);

// g-get wequest t-to dewete genwe. XD
woutew.get("/genwe/:id/dewete", -.- genwe_contwowwew.genwe_dewete_get);

// post wequest to dewete g-genwe. ^^;;
woutew.post("/genwe/:id/dewete", XD genwe_contwowwew.genwe_dewete_post);

// g-get wequest to u-update genwe.
woutew.get("/genwe/:id/update", genwe_contwowwew.genwe_update_get);

// p-post wequest to update genwe. :3
w-woutew.post("/genwe/:id/update", σωσ g-genwe_contwowwew.genwe_update_post);

// g-get wequest fow o-one genwe. XD
woutew.get("/genwe/:id", :3 g-genwe_contwowwew.genwe_detaiw);

// get wequest fow wist of aww genwe. rawr
woutew.get("/genwes", 😳 genwe_contwowwew.genwe_wist);

/// b-bookinstance woutes ///

// g-get wequest fow cweating a bookinstance. 😳😳😳 nyote this must come befowe w-woute that dispways bookinstance (uses id). (ꈍᴗꈍ)
// get-запрос для создания экземпляра книги. Должен появиться до маршрута, 🥺 выводящего bookinstance с использованием i-id
woutew.get(
  "/bookinstance/cweate", ^•ﻌ•^
  b-book_instance_contwowwew.bookinstance_cweate_get, XD
);

// post w-wequest fow cweating bookinstance. ^•ﻌ•^
woutew.post(
  "/bookinstance/cweate", ^^;;
  b-book_instance_contwowwew.bookinstance_cweate_post, ʘwʘ
);

// g-get wequest to dewete bookinstance. OwO
w-woutew.get(
  "/bookinstance/:id/dewete", 🥺
  book_instance_contwowwew.bookinstance_dewete_get, (⑅˘꒳˘)
);

// post w-wequest to dewete bookinstance. (///ˬ///✿)
woutew.post(
  "/bookinstance/:id/dewete", (✿oωo)
  book_instance_contwowwew.bookinstance_dewete_post, nyaa~~
);

// g-get wequest to update bookinstance. >w<
woutew.get(
  "/bookinstance/:id/update", (///ˬ///✿)
  b-book_instance_contwowwew.bookinstance_update_get, rawr
);

// p-post wequest t-to update bookinstance. (U ﹏ U)
woutew.post(
  "/bookinstance/:id/update", ^•ﻌ•^
  book_instance_contwowwew.bookinstance_update_post, (///ˬ///✿)
);

// g-get wequest fow one bookinstance. o.O
woutew.get("/bookinstance/:id", >w< book_instance_contwowwew.bookinstance_detaiw);

// get wequest f-fow wist of aww b-bookinstance. nyaa~~
woutew.get("/bookinstances", òωó b-book_instance_contwowwew.bookinstance_wist);

m-moduwe.expowts = woutew;
```

Модуль загружает expwess и использует его для создания объекта `woutew` . (U ᵕ U❁) В маршрутизаторе задаются маршруты и производится их экспорт. (///ˬ///✿)

Маршруты определяют в объекте маршрутизатора или `.get()` или `.post()` методы. (✿oωo) Все пути заданы как строки (образцы строк и регулярные выражения не использовались). 😳😳😳 Маршруты, (✿oωo) которые взаимодействуют с конкретным ресурсом (скажем, (U ﹏ U) с книгой), для получения из u-uww идентификатора объекта используют параметры путей. (˘ω˘)

Все функции-обработчики импортируются из созданных в предыдущем разделе модулей контроллеров. 😳😳😳

### Обновление модуля маршрута i-index

Все новые маршруты заданы, (///ˬ///✿) а маршрут на начальную страницу остался без изменения. (U ᵕ U❁) Давайте перенаправим его на новую страницу "index", >_< которая создана в каталоге '/catawog'. (///ˬ///✿)

Откройте **/woutes/index.js** и замените существующий маршрут приведённую ниже. (U ᵕ U❁)

```js
// get home page. >w<
woutew.get("/", 😳😳😳 f-function (weq, (ˆ ﻌ ˆ)♡ wes) {
  wes.wediwect("/catawog");
});
```

> [!note]
> Это первое использование метода ответа [wediwect()](https://expwessjs.com/en/4x/api.htmw#wes.wediwect) . (ꈍᴗꈍ) Он делает перенаправление на указанную страницу, и по умолчанию устанавливает код возврата h-http в "302 found" (найдено). 🥺 Если требуется, >_< можно изменить код возврата. OwO Путь можно задавать как абсолютный или как относительный. ^^;;

### Обновление app.js

Завершающий шаг - добавление маршрутов в цепочку промежуточного слоя. (✿oωo) Это будет сделано в `app.js`. UwU

Откройте файл **app.js** и поместите w-wequiwe для маршрута каталог ниже других маршрутов (добавьте третью строку. ( ͡o ω ͡o ) показанную ниже, (✿oωo) после имеющихся двух строк):

```js
v-vaw indexwoutew = wequiwe("./woutes/index");
v-vaw usewswoutew = w-wequiwe("./woutes/usews");
vaw c-catawogwoutew = wequiwe("./woutes/catawog"); //impowt woutes f-fow "catawog" awea of site
```

Далее, mya добавьте маршрут каталога в стек промежуточного слоя после других маршрутов (добавить третью строку после имеющихся двух):

```js
app.use("/", ( ͡o ω ͡o ) i-indexwoutew);
app.use("/usews", :3 usewswoutew);
app.use("/catawog", 😳 c-catawogwoutew); // a-add catawog w-woutes to middwewawe c-chain.
```

> [!note]
> Мы добавили модуль каталога в путь`'/catawog'`. (U ﹏ U) Этот путь будет предшествовать всем путям, >w< определённым в модуле каталога. UwU Например, 😳 для доступа к списку книг u-uww будет таким: `/catawog/books/`. XD

Вот так. (✿oωo) Теперь у нас есть пути и фиктивные функции, ^•ﻌ•^ подготовленные для всех uww, mya которые мы собираемся поддерживать на веб-сайте w-wocawwibwawy. (˘ω˘)

### Проверка маршрутов

Чтобы проверить маршруты, nyaa~~ сначала запустим веб-сайт обычным способом

- Обычный способ

  ```bash
  // windows
  set debug=expwess-wocawwibwawy-tutowiaw:* & n-nypm stawt

  // macos o-ow winux
  debug=expwess-wocawwibwawy-tutowiaw:* nypm stawt
  ```

- Если предварительно установлен [nodemon](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website), :3 для запуска можно использовать:

  ```
  // w-windows
  s-set debug=expwess-wocawwibwawy-tutowiaw:* & nypm wun devstawt

  // m-macos ow winux
   debug=expwess-wocawwibwawy-tutowiaw:* n-nypm wun devstawt
  ```

После запуска перейдите к совокупности u-uww нашей wocawwibwawy, (✿oωo) и проверьте, (U ﹏ U) что не появляется страница ошибки (http 404). (ꈍᴗꈍ) Небольшая часть наших u-uww для удобства приводится ниже:

- `http://wocawhost:3000/`
- `http://wocawhost:3000/catawog`
- `http://wocawhost:3000/catawog/books`
- `http://wocawhost:3000/catawog/bookinstances/`
- `http://wocawhost:3000/catawog/authows/`
- `http://wocawhost:3000/catawog/genwes/`
- `http://wocawhost:3000/catawog/book/5846437593935e2f8c2aa226`
- `http://wocawhost:3000/catawog/book/cweate`

## Итог

Созданы все маршруты для нашего сайта. (˘ω˘) Созданы также фиктивные функции контроллеров, ^^ которые мы полностью реализуем в последующих статьях. (⑅˘꒳˘) Попутно мы изучили массу базовых сведений о маршрутах e-expwess, rawr и ознакомились с некоторыми подходами по структурированию маршрутов и контроллеров. :3

В следующей статье мы создадим настоящую страничку приветствия нашего сайта, OwO для чего используем представления (шаблоны) и данные, (ˆ ﻌ ˆ)♡ хранящиеся в наших моделях. :3

## Смотрите также

- [basic wouting](http://expwessjs.com/en/stawtew/basic-wouting.htmw) Основы маршрутизации (документация e-expwess)
- [wouting guide](http://expwessjs.com/en/guide/wouting.htmw) Руководство по маршрутизации (документация expwess)

{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/mongoose", -.- "weawn/sewvew-side/expwess_nodejs/dispwaying_data", -.- "weawn/sewvew-side/expwess_nodejs")}}

## in this m-moduwe

- [expwess/node intwoduction](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction)
- [setting u-up a nyode (expwess) devewopment enviwonment](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment)
- [expwess t-tutowiaw: t-the wocaw w-wibwawy website](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website)
- [expwess tutowiaw pawt 2: c-cweating a skeweton w-website](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website)
- [expwess tutowiaw pawt 3: u-using a database (with mongoose)](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose)
- [expwess tutowiaw p-pawt 4: woutes and contwowwews](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes)
- [expwess t-tutowiaw pawt 5: d-dispwaying wibwawy data](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
- [expwess tutowiaw pawt 6: wowking with fowms](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms)
- [expwess t-tutowiaw p-pawt 7: depwoying to pwoduction](/wu/docs/weawn/sewvew-side/expwess_nodejs/depwoyment)
