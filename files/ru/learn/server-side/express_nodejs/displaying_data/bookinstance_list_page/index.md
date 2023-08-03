---
title: Список экземпляров книг
slug: Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page
---

Далее мы реализуем список всех имеющихся в библиотеке копий книги (`BookInstance`) . Эта страница должна включать название книги из `Book`, с которой связаны экземпляры `BookInstance` (linked to its detail page), а также дополнительную информацию, имеющуюся в модели `BookInstance`, включая статус, издание, и уникальный идентификатор каждой копии. Уникальное значение идентификатора копии должно быть связано со страницей детальной информации `BookInstance`.

## Контроллер

Функция контроллера списка `BookInstance` требуется для получения списка всех экземпляров некоторой книги, для получения информации, связанной с книгой, и для передачи полученного списка в шаблон для отображения.

Откройте файл **/controllers/bookinstanceController.js**. Найдите экспортируемый метод `bookinstance_list()` контроллера и замените его следующим кодом (изменённый код выделен жирным).

```js
// Display list of all BookInstances.
exports.bookinstance_list = function (req, res, next) {
  BookInstance.find()
    .populate("book")
    .exec(function (err, list_bookinstances) {
      if (err) {
        return next(err);
      }
      // Successful, so render
      res.render("bookinstance_list", {
        title: "Book Instance List",
        bookinstance_list: list_bookinstances,
      });
    });
};
```

Чтобы вернуть все объекты `BookInstance,` метод использует функцию `find()` модели. Далее в цепочке вызывается метод `populate()` с аргументом - полем `book,` что приводит к замене идентификатора id, хранящегося для каждого экземпляра `BookInstance` полным документом `Book`.

При удаче, колбэк-функция, переданная запросу, заполняет шаблон **bookinstance_list**(.pug), передав переменные `title` и `bookinstance_list`.

## Представление

Создайте файл **/views/bookinstance_list.pug** и скопируйте в него текст, приведённый ниже.

```js
extends layout

block content
  h1= title

  ul
    each val in bookinstance_list
      li
        a(href=val.url) #{val.book.title} : #{val.imprint} -
        if val.status=='Available'
          span.text-success #{val.status}
        else if val.status=='Maintenance'
          span.text-danger #{val.status}
        else
          span.text-warning #{val.status}
        if val.status!='Available'
          span  (Due: #{val.due_back} )

    else
      li There are no book copies in this library.
```

This view is much the same as all the others. It extends the layout, replacing the _content_ block, displays the `title` passed in from the controller, and iterates through all the book copies in `bookinstance_list`. For each copy we display its status (colour coded) and if the book is not available, its expected return date. One new feature is introduced—we can use dot notation after a tag to assign a class. So `span.text-success` will be compiled to `<span class="text-success">` (and might also be written in Pug as `span(class="text-success")`.

## What does it look like?

Run the application, open your browser to <http://localhost:3000/>, then select the _All book-instances_ link. If everything is set up correctly, your site should look something like the following screenshot.

![BookInstance List Page - Express Local Library site](locallibary_express_bookinstance_list.png)

## Next steps

- Return to [Express Tutorial Part 5: Displaying library data](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Proceed to the next subarticle of part 5: [Date formatting using moment](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment).
