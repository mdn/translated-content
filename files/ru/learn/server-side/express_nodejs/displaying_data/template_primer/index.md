---
title: Основы шаблонов
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer
---

Шаблон - это текстовый файл, определяющий _структуру_, или внешний вид выходного файла, с предусмотренными позициями, в которые будут помещаться данные при отображении по шаблону (в _Express_ шаблоны также называют _представлениями_).

## Выбор шаблонов Express

В Express можно использовать много движков отображающих шаблонов ( [template rendering engines](https://expressjs.com/en/guide/using-template-engines.html)). В этом руководстве для шаблонов будет использован [Pug](https://pugjs.org/api/getting-started.html) (ранее известный как Jade) . Это наиболее популярный в Node язык шаблонов, который о себе заявляет так: чистый, чувствительный к пробелам синтаксис для написания HTML, на который сильно повлиял [Haml](http://haml.info/).

Разные языки шаблонов используют различные подходы для определения внешнего вида и разметки позиций для данных—некоторые используют HTML для определения внешнего вида, тогда как другие применяют различные форматы разметки, которые затем должны компилироваться в HTML. Pug - второго типа; он использует _представление_ (_representation)_ HTML, в котором первое слово в каждой строке обычно представляет элемент HTML, а отступы в следующих строках применяются, чтобы представить вложенные элементы. Результатом является определение страницы, которое транслируется непосредственно в HTML, и которое, вероятно, более краткое и легче читается.

> **Примечание:** недостаток применения _Pug_ - это чувствительность к отступам и пробелам (если добавить лишний пробел в "плохом" месте, можно получить невразумительный код ошибки). Однако, если ваши шаблоны уже действуют, их очень легко читать и поддерживать.

## Конфигурация шаблона

Когда создавался каркас ([the skeleton website](/ru/docs/Learn/Server-side/Express_Nodejs/skeleton_website)) веб-сайта _LocalLibrary,_ он был настроен на использование [Pug](https://pugjs.org/api/getting-started.html) . Можно было заметить, что модуль pug включён в зависимости в файле **package.json**, и установлен (app.set(...)) как движок представлений в файле **app.js**. Эта установка показывает,, что движок представлений - pug, и что _Express_ должен искать шаблоны в подкаталоге **/views**.

```js
// View engine setup.
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Если посмотреть содержимое каталога **views**, можно увидеть файлы с расширением .pug, в которых шаблоны представлений по умолчанию. Это представление для домашней страницы (**index.pug**) и базовый шаблон (**layout.pug**), который следует заменить нашим содержимым.

```
/express-locallibrary-tutorial  //the project root
  /views
    error.pug
    index.pug
    layout.pug
```

## Синтаксис шаблонов

Пример файла шаблона (ниже) демонстрирует многие наиболее полезные черты Pug.

Сначала отметим, что файл отражает структуру типового HTML-файла, причём первое слов в (почти) каждой строке является элементом HTML, а отступы используются, чтобы показать вложенные элементы. Так, например, элемент `body` находится внутри элемента `html`, а элементы `p` (параграфы) - внутри элемента `body,` и так далее. Невложенные элементы (т.е. индивидуальные параграфы) располагаются в отдельных строках.

```pug
doctype html
html(lang="en")
  head
    title= title
    script(type='text/javascript').
  body
    h1= title

    p This is a line with #[em some emphasis] and #[strong strong text] markup.
    p This line has un-escaped data: !{'<em> is emphasised</em>'} and escaped data: #{'<em> is not emphasised</em>'}.
      | This line follows on.
    p= 'Evaluated and <em>escaped expression</em>:' + title

    <!-- You can add HTML comments directly -->
    // You can add single line JavaScript comments and they are generated to HTML comments
    //- Introducing a single line JavaScript comment with "//-" ensures the comment isn't rendered to HTML

    p A line with a link
      a(href='/catalog/authors') Some link text
      |  and some extra text.

    #container.col
      if title
        p A variable named "title" exists.
      else
        p A variable named "title" does not exist.
      p.
        Pug is a terse and simple template language with a
        strong focus on performance and powerful features.

    h2 Generate a list

    ul
      each val in [1, 2, 3, 4, 5]
        li= val
```

Атрибуты элементов определены в скобках после соответствующих элементов. В скобках располагается список пар *имя атрибута=значение,*причём элементы списка разделяются запятой или пробелом. Например:

- `script(type='text/javascript')`, `link(rel='stylesheet', href='/stylesheets/style.css')`
- `meta(name='viewport' content='width=device-width initial-scale=1')`

Значения всех атрибутов _экранируются_ (т.е. такие символы как "`>`" заменяются эквивалентными кодами HTML как "`&gt;"`) , чтобы предотвратить JavaScript инъекции и межсайтовые атаки.

Если после тэга стоит знак = , следующий текст рассматривается как _выражение_ JavaScript. Например, ниже в первой строке, содержимое тэга `h1` будет _переменной_ `title` (которая определена в файле или передана в шаблон из Express). Во второй строке содержимое параграфа - это текстовая строка, соединённая с переменной `title` . В каждом из случаев поведение по умолчанию - экранировать строки.

```pug
h1= title
p= 'Evaluated and <em>escaped expression</em>:' + title
```

Если после тэга знак = отсутствует, тогда содержимое рассматривается как обычный текст. Внутри текста можно вставить экранированные или неэкранированные данные, применяя синтаксис `#{}` и `!{}`, как показано ниже. В простой текст можно также вставлять "сырой" HTML.

```pug
p This is a line with #[em some emphasis] and #[strong strong text] markup.
p This line has an un-escaped string: !{'<em> is emphasised</em>'}, an escaped string: #{'<em> is not emphasised</em>'}, and escaped variables: #{title}.
```

> **Примечание:** Почти всегда желательно экранировать данные, полученные от пользователей (при помощи синтаксиса **`#{}`** ). Данные, которым можно верить (т.е. подсчитанное количество записей, могут быть выведены без экранирования значений.

Можно использовать символ конвейера ('**|**') в начале строки, чтобы отметить простой текст ("[plain text](https://pugjs.org/language/plain-text.html)"). Например, дополнительный текст, приведённый ниже, будет показан в той же строке, что и предыдущий, но не будет относиться к ссылке.

```pug
a(href='http://someurl/') Link text
| Plain text
```

Pug позволяет выполнять условные операции `if`, `else` , `else if` и `unless`— пример приведён ниже:

```pug
if title
  p Переменная с именем "title" существует
else
  p Переменной с именем "title" не существует
```

Можно также выполнять циклы (итерации), применяя синтаксис `each-in` или `while` . Фрагмент кода (ниже) содержит цикл по элементам массива, чтобы показать список элементов (отметим применение 'li=' для оценки "val" как переменной). Значение итератора val может быть также передано в шаблон как переменная!

```pug
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```

Синтаксис разрешает также комментарии (которые попадут в результат или нет, по вашему желанию), смеси для создания повторно используемых блоков кода, операторы выбора case, и много другого. Более подробная информация - в документации [The Pug docs](https://pugjs.org/api/getting-started.html).

## Расширение шаблонов

Принято иметь общую структуру для всех страниц сайта, включая стандартную HTML-разметку для заголовка, футера, навигации и т.д. Вместо того, чтобы заставлять разработчиков дублировать эти образцы на каждой странице, _Pug_ позволяет объявить базовой шаблон, а затем модифицировать его, заменяя только те небольшие части, которые различны на каждой конкретной странице.

Например, базовый шаблон **layout.pug,** созданный в каркасе проекта, имеет такой вид:

```pug
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```

Тэг `block` применён для отметки разделов контента, которые могут быть заменены в производных шаблона (если блок не переопределяется, будет использования его реализация в базовом классе).

Умолчание для **index.pug** (созданный для каркаса проекта) показывает, как можно заменить базовый шаблон. Тэг `extends` идентифицирует базовый шаблон, который следует использовать, а затем мы используем `block section_name,` чтобы отметить новый контент раздела, который мы заменяем.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Next steps

- Return to [Express Tutorial Part 5: Displaying library data](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Proceed to the next subarticle of part 5: [The LocalLibrary base template](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template).
