---
title: Базовый шаблон LocalLibrary
slug: Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template
---

Теперь, чтобы мы понимали как расширить шаблон с помощью Pug, давайте создадим базовый шаблон для проекта. У него будет боковая панель (sidebar)) со ссылками на страницы, которые мы надеемся создать на протяжении учебника (например, для отображения и создания книг, жанров, автор и т. д.) и основная область контента, которую мы переопределим на каждой из отдельных страниц.

Откройте файл **/views/layout.pug** и замените его содержимое следующим.

```pug
doctype html
html(lang='en')
  head
    title= title
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1')
    link(rel='stylesheet', href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css')
    script(src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js')
    script(src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js')
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    div(class='container-fluid')
      div(class='row')
        div(class='col-sm-2')
          block sidebar
            ul(class='sidebar-nav')
              li
                a(href='/catalog') Home
              li
                a(href='/catalog/books') All books
              li
                a(href='/catalog/authors') All authors
              li
                a(href='/catalog/genres') All genres
              li
                a(href='/catalog/bookinstances') All book-instances
              li
                hr
              li
                a(href='/catalog/author/create') Create new author
              li
                a(href='/catalog/genre/create') Create new genre
              li
                a(href='/catalog/book/create') Create new book
              li
                a(href='/catalog/bookinstance/create') Create new book instance (copy)

        div(class='col-sm-10')
          block content
```

Шаблон использует (и включает) JavaScript и CSS из [Bootstrap](http://getbootstrap.com/) , что позволяет улучшить макет и представление HTML-страницы. Применение Bootstrap или другого клиентского фреймворка - быстрый способ создать привлекательную, хорошо масштабируемую страницу. Кроме того, это позволяет получить представление страницы, не вдаваясь в детали - мы можем уделить все внимание коду на стороне сервера!

Макет представляется достаточно очевидным, если вы уже прочли статью Основы шаблонов ([Template primer](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data#Template_primer)) выше. Обратите внимание на использование `block content` в качестве места для размещения контента отдельных страниц.

Базовый шаблон также ссылается на локальный файл стилей (**style.css**), что обеспечивает дополнительное управление внешним видом. Откройте **/public/stylesheets/style.css** и замените его содержимое таким текстом:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

При запуске нашего сайта мы должны увидеть боковую панель! В следующих разделах мы будем использовать вышеуказанный макет для определения отдельных страниц.

## Следующие шаги

- Вернуться к [Учебник Express часть 5: Отображение данных библиотеки](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Перейти к следующему подразделу [Домашняя страница](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Home_page).
