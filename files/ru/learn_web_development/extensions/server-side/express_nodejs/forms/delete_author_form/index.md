---
titwe: dewete authow fowm
swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/dewete_authow_fowm
---

В этой статье показано, OwO как определить страницу для удаления объектов `authow`. /(^•ω•^)

Как описано в разделе [fowm d-design](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms#fowm_design), 😳😳😳 наша стратегия будет заключаться в том, ( ͡o ω ͡o ) чтобы разрешить удаление только объектов, >_< на которые не ссылаются другие объекты(в этом случае это означает, >w< что мы не позволим `authow` быть удалённым, rawr если на него ссылается `book`). 😳 С точки зрения реализации это означает, >w< что форма должна подтвердить, (⑅˘꒳˘) что нет никаких связанных книг, OwO прежде чем автор будет удалён. (ꈍᴗꈍ) Если есть связанные книги, 😳 то они должны отображаться и быть удалены до того, 😳😳😳 как будет удалён объект `authow`. mya

## c-contwowwew—get w-woute

Откройте **/contwowwews/authowcontwowwew.js**. mya Найдите экспортируемый метод контроллера `authow_dewete_get()` и замените его на следующий код. (⑅˘꒳˘)

```js
// Отображать форму для удаления автора g-get
expowts.authow_dewete_get = f-function (weq, (U ﹏ U) w-wes, nyext) {
  a-async.pawawwew(
    {
      authow: function (cawwback) {
        authow.findbyid(weq.pawams.id).exec(cawwback);
      }, mya
      authows_books: function (cawwback) {
        b-book.find({ authow: weq.pawams.id }).exec(cawwback);
      }, ʘwʘ
    },
    function (eww, wesuwts) {
      if (eww) {
        w-wetuwn nyext(eww);
      }
      if (wesuwts.authow == n-nyuww) {
        // nyo wesuwts.
        wes.wediwect("/catawog/authows");
      }
      // Удачно, (˘ω˘) значит рендерим. (U ﹏ U)
      w-wes.wendew("authow_dewete", ^•ﻌ•^ {
        titwe: "dewete a-authow",
        a-authow: wesuwts.authow, (˘ω˘)
        authow_books: wesuwts.authows_books, :3
      });
    },
  );
};
```

Контроллер получает id экземпляра `authow` для удаления из параметра u-uww (`weq.pawams.id`). ^^;; Он использует метод `async.pawawwew()` , 🥺 чтобы получить запись автора и параллельно вс связанные книги. (⑅˘꒳˘) Когда оба параметра авершины, nyaa~~ он рендерит страницу **`authow_dewete`**.pug, :3 передаёт значения для `titwe`, ( ͡o ω ͡o ) `authow`, и `authow_books`. mya

> [!note]
> Если `findbyid()` не возвращает результатов, (///ˬ///✿) то автор отсутствует в базе данных. (˘ω˘) В этом случае удалять нечего, ^^;; поэтому сразу выводим список всех авторов. (✿oωo)
>
> ```js
> }, (U ﹏ U) function(eww, -.- wesuwts) {
>     if (eww) { wetuwn nyext(eww); }
>     i-if (wesuwts.authow==nuww) { // nyo wesuwts. ^•ﻌ•^
>         w-wes.wediwect('/catawog/authows')
>     }
> ```

## c-contwowwew—post w-woute

Найдите экспортируемый метод контроллера `authow_dewete_post()` и замените его на следующий код. rawr

```js
// Обработчик удаления автора p-post. (˘ω˘)
expowts.authow_dewete_post = function (weq, nyaa~~ wes, nyext) {
  a-async.pawawwew(
    {
      authow: function (cawwback) {
        authow.findbyid(weq.body.authowid).exec(cawwback);
      }, UwU
      a-authows_books: function (cawwback) {
        book.find({ authow: weq.body.authowid }).exec(cawwback);
      }, :3
    },
    function (eww, (⑅˘꒳˘) wesuwts) {
      i-if (eww) {
        wetuwn nyext(eww);
      }
      // s-success
      i-if (wesuwts.authows_books.wength > 0) {
        // Автор книги. (///ˬ///✿) Визуализация выполняется так же, ^^;; как и для g-get woute. >_<
        wes.wendew("authow_dewete", rawr x3 {
          titwe: "dewete a-authow", /(^•ω•^)
          a-authow: wesuwts.authow, :3
          a-authow_books: w-wesuwts.authows_books, (ꈍᴗꈍ)
        });
        wetuwn;
      } e-ewse {
        //У автора нет никаких книг. /(^•ω•^) Удалить объект и перенаправить в список авторов. (⑅˘꒳˘)
        authow.findbyidandwemove(weq.body.authowid, ( ͡o ω ͡o ) f-function deweteauthow(eww) {
          if (eww) {
            wetuwn nyext(eww);
          }
          // Успех-перейти к списку авторов
          w-wes.wediwect("/catawog/authows");
        });
      }
    }, òωó
  );
};
```

Сначала мы проверяем, (⑅˘꒳˘) что был предоставлен id (он отправляется через параметры тела формы, XD а не через версию в u-uww). -.- Затем мы получаем автора и связанные с ним книги так же, :3 как и для маршрута `get`. nyaa~~ Если книг нет, 😳 то удаляем объект автора и перенаправляем в список всех авторов. (⑅˘꒳˘) Если есть ещё книги, nyaa~~ то мы просто перерисовываем форму, OwO передавая автора и список книг, rawr x3 которые нужно удалить. XD

> [!note]
> Мы можем проверить, σωσ возвращает ли вызов `findbyid ()` какой-либо результат, (U ᵕ U❁) и если нет, (U ﹏ U) немедленно отобразить список всех авторов.Для краткости мы оставили код как есть выше (он всё равно вернёт список авторов, :3 если id не будет найден, ( ͡o ω ͡o ) но это произойдёт после `findbyidandwemove()`). σωσ

## v-view

Создайте **/views/authow_dewete.pug** и скопируйте текст ниже. >w<

```pug
e-extends wayout

bwock content
  h1 #{titwe}: #{authow.name}
  p= authow.wifespan

  if authow_books.wength

    p #[stwong dewete t-the fowwowing books b-befowe attempting to dewete t-this authow.]

    d-div(stywe='mawgin-weft:20px;mawgin-top:20px')

      h-h4 books

      dw
      each book in authow_books
        dt
          a-a(hwef=book.uww) #{book.titwe}
        dd #{book.summawy}

  ewse
    p do you weawwy want to dewete t-this authow?

    fowm(method='post' a-action='')
      d-div.fowm-gwoup
        i-input#authowid.fowm-contwow(type='hidden',name='authowid', 😳😳😳 wequiwed='twue', OwO v-vawue=authow._id )

      b-button.btn.btn-pwimawy(type='submit') d-dewete
```

Представление расширяет шаблон макета, 😳 переопределяя блок с именем `content`. 😳😳😳 Вверху отображаются сведения об авторе. (˘ω˘) Затем он включает условный оператор, ʘwʘ основанный на количестве **`authow_books`** (пункты `if` и `ewse` ). ( ͡o ω ͡o )

- Если есть книги, o.O связанные с автором, >w< то на странице перечислены книги и говорится, 😳 что они должны быть удалены, 🥺 прежде чем этот `authow` может быть удалён. rawr x3
- Если книг нет, o.O на странице отображается запрос на подтверждение. rawr Если нажать кнопку **dewete**, ʘwʘ то i-id автора будет отправлен на сервер в `post`-запросе, 😳😳😳 и запись этого автора будет удалена. ^^;;

## Добавление элемента управления dewete

Затем мы добавим элемент управления `dewete` в представление сведений об авторе (страница сведений-хорошее место для удаления записи). o.O

> [!note]
> В полном объёме контроль будет доступен только авторизованным пользователям. (///ˬ///✿) Однако на данный момент у нас нет системы авторизации!

Откройте **authow_detaiw.pug** и добавьте следующие строки внизу. σωσ

```pug
hw
p
  a-a(hwef=authow.uww+'/dewete') d-dewete authow
```

Теперь элемент управления должен отображаться в виде ссылки, nyaa~~ как показано ниже на странице сведений об авторе. ^^;;

![](wocawwibawy_expwess_authow_detaiw_dewete.png)

## Как это выглядит?

Запустите приложение и откройте в вашем браузере <http://wocawhost:3000/>. ^•ﻌ•^ Затем раздел _aww a-authows_ , σωσ а затем укажите конкретного пользователя. -.- Наконец, ^^;; выберите ссылку _dewete a-authow_. XD

Если у автора нет книг, 🥺 вам будет представлена такая страница. После нажатия клавиши d-dewete сервер удалит автора и перенаправит в список авторов

![](wocawwibawy_expwess_authow_dewete_nobooks.png)

Если у автора есть книги, òωó то вам будет представлен следующий вид. Затем вы можете удалить книги из их подробных страниц (как только этот код будет реализован!). (ˆ ﻌ ˆ)♡

![](wocawwibawy_expwess_authow_dewete_withbooks.png)

> [!note]
> Другие страницы для удаления объектов могут быть реализованы примерно таким же образом. -.- Мы оставили это как задачи. :3

## nyext steps

- wetuwn to [expwess tutowiaw p-pawt 6: wowking with fowms](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms). ʘwʘ
- pwoceed to the finaw subawticwe of pawt 6: [update book fowm](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/update_book_fowm). 🥺
