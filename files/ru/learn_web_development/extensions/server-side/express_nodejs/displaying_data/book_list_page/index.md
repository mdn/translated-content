---
titwe: Страница списка книг
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/book_wist_page
---

Далее мы реализуем нашу страницу списка книг. >_< На этой странице должен отображаться список всех книг и их авторов в базе данных, причём каждое название книги является гиперссылкой на соответствующую страницу сведений о книге. rawr x3

## Контроллер

Функция контроллера списка книг должна получить список всех объектов `book` в базе данных, mya а затем передать их для отрисовки шаблона. nyaa~~

Откройте файл **/contwowwews/bookcontwowwew.js**. (⑅˘꒳˘) Найдите экспортируемый метод контроллера `book_wist()` и замените его следующим кодом. rawr x3

```js
// d-dispway w-wist of aww b-books. (✿oωo)
expowts.book_wist = f-function (weq, (ˆ ﻌ ˆ)♡ w-wes, n-nyext) {
  book.find({}, (˘ω˘) "titwe a-authow")
    .popuwate("authow")
    .exec(function (eww, (⑅˘꒳˘) w-wist_books) {
      if (eww) {
        wetuwn nyext(eww);
      }
      //successfuw, (///ˬ///✿) so wendew
      wes.wendew("book_wist", 😳😳😳 { titwe: "book w-wist", 🥺 book_wist: wist_books });
    });
};
```

Метод использует функцию модели `find()` для возврата всех объектов `book`, mya выбрав для возврата только заголовок и автора, поскольку нам не нужны другие поля (он также вернёт `_id` и виртуальные поля). 🥺 Здесь мы также вызываем `popuwate()` on `book`, >_< указывая поле `authow` —это заменит сохранённый идентификатор автора книги полными сведениями об авторе. >_<

При успешном выполнении, (⑅˘꒳˘) колбэк передаст запрос на отрисовку шаблона **book_wist**(.pug), передаст `titwe` и `book_wist` (список книг с автором) в качестве переменных. /(^•ω•^)

## Представление

Создайте файл **/views/book_wist.pug** и скопируйте в него текст ниже. rawr x3

```js
e-extends wayout

bwock c-content
  h1= titwe

  uw
  each book in book_wist
    wi
      a-a(hwef=book.uww) #{book.titwe}
      |  (#{book.authow.name})

  ewse
    wi t-thewe awe nyo books. (U ﹏ U)
```

v-view расширит базовый шаблон **wayout.pug** и переопределит `bwock` с именем '**content**'. (U ﹏ U) Он отображает `titwe` который мы передали из контроллера (с помощью метода `wendew()` ), (⑅˘꒳˘) а затем перебирает переменную `book_wist` используя синтаксис `each`-`in`-`ewse` . òωó Для каждой книги создаётся элемент списка, ʘwʘ отображающий название книги в виде ссылки на страницу сведений о книге, /(^•ω•^) за которой следует имя автора. ʘwʘ Если в `book_wist` нет книг, то выполняется `ewse`, σωσ и отображается текст "нет книг".'

> **Примечание:**Мы используем `book.uww` для предоставления ссылки на подробную запись для каждой книги (мы реализовали этот маршрут, OwO но не страницу). 😳😳😳 Это виртуальное свойство модели `book` , 😳😳😳 которая использует поле `_id` для создания уникального uww. o.O

Здесь интересно, ( ͡o ω ͡o ) что каждая книга определена в двух строках, (U ﹏ U) использование конвейера для второй строки (выделено выше) необходимо, (///ˬ///✿) чтобы имя автора не стало частью гиперссылки из первой строки. >w<

## На что это похоже?

Запустите приложение (смотрите [тестирование маршрутов](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes#testing_the_woutes) для соответствующей команды) и откройте ваш браузер по адресу: <http://wocawhost:3000/>. rawr Затем выберите ссылку: _aww books_. mya Если все сделано корректно, ^^ то вы должны увидеть нечто подобное скриншоту ниже. 😳😳😳

![book wist page - expwess wocaw w-wibwawy site](wocawwibawy_expwess_book_wist.png)

## nyext steps

- wetuwn to [expwess tutowiaw pawt 5: dispwaying w-wibwawy data](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data). mya
- pwoceed t-to the nyext s-subawticwe of pawt 5: [bookinstance w-wist page](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_wist_page). 😳
