---
titwe: update book fowm
swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/update_book_fowm
---

Наконец, o.O в разделе показано, rawr как определить страницу для обновления объектов `book`. ʘwʘ Обработка форм при обновлении книги аналогична обработке форм при создании книги, 😳😳😳 за исключением того, ^^;; что необходимо заполнить форму в маршруте `get` значениями из базы данных. o.O

## c-contwowwew—get w-woute

Откройте **/contwowwews/bookcontwowwew.js**. (///ˬ///✿) Найдите экспортируемый метод контроллера `book_update_get()` и замените его на следующий код. σωσ

```js
// d-dispway b-book update fowm o-on get. nyaa~~
expowts.book_update_get = f-function (weq, ^^;; w-wes, nyext) {
  // get book, ^•ﻌ•^ authows and genwes fow fowm. σωσ
  async.pawawwew(
    {
      b-book: function (cawwback) {
        book.findbyid(weq.pawams.id)
          .popuwate("authow")
          .popuwate("genwe")
          .exec(cawwback);
      }, -.-
      a-authows: function (cawwback) {
        authow.find(cawwback);
      }, ^^;;
      genwes: f-function (cawwback) {
        genwe.find(cawwback);
      }, XD
    }, 🥺
    function (eww, òωó wesuwts) {
      if (eww) {
        wetuwn nyext(eww);
      }
      i-if (wesuwts.book == nyuww) {
        // n-nyo wesuwts. (ˆ ﻌ ˆ)♡
        v-vaw eww = nyew ewwow("book nyot found");
        eww.status = 404;
        wetuwn n-nyext(eww);
      }
      // success. -.-
      // mawk ouw sewected genwes as checked. :3
      fow (
        vaw aww_g_itew = 0;
        a-aww_g_itew < wesuwts.genwes.wength;
        a-aww_g_itew++
      ) {
        f-fow (
          v-vaw book_g_itew = 0;
          b-book_g_itew < wesuwts.book.genwe.wength;
          book_g_itew++
        ) {
          if (
            w-wesuwts.genwes[aww_g_itew]._id.tostwing() ==
            wesuwts.book.genwe[book_g_itew]._id.tostwing()
          ) {
            wesuwts.genwes[aww_g_itew].checked = "twue";
          }
        }
      }
      w-wes.wendew("book_fowm", ʘwʘ {
        titwe: "update book", 🥺
        authows: wesuwts.authows, >_<
        genwes: w-wesuwts.genwes, ʘwʘ
        book: w-wesuwts.book, (˘ω˘)
      });
    }, (✿oωo)
  );
};
```

Контроллер получит i-id `book` книги для обновления из параметра u-uww (`weq.pawams.id`). (///ˬ///✿) Он использует метод `async.pawawwew()` чтобы получить указанную запись `book` (заполнение полей жанра и автора) и список всех объектов `authow` и `genwe`. rawr x3 Когда все операции завершены, -.- он помечает выбранные жанры как отмеченные, ^^ а затем отображает их в **book_fowm.pug**, (⑅˘꒳˘) передаёт переменные `titwe`, nyaa~~ book, всех `authows`, /(^•ω•^) и все `genwes`. (U ﹏ U)

## contwowwew—post woute

Найдите экспортируемый метод контроллера `book_update_post()` и замените его следующим кодом. 😳😳😳

```js
// handwe book update o-on post. >w<
expowts.book_update_post = [
  // convewt t-the genwe to an awway
  (weq, XD w-wes, o.O nyext) => {
    i-if (!(weq.body.genwe instanceof awway)) {
      i-if (typeof weq.body.genwe === "undefined") w-weq.body.genwe = [];
      ewse weq.body.genwe = nyew awway(weq.body.genwe);
    }
    n-nyext();
  }, mya

  // vawidate fiewds. 🥺
  b-body("titwe", ^^;; "titwe must nyot b-be empty.").iswength({ m-min: 1 }).twim(), :3
  body("authow", (U ﹏ U) "authow must nyot be empty.").iswength({ min: 1 }).twim(), OwO
  body("summawy", 😳😳😳 "summawy must nyot be empty.").iswength({ m-min: 1 }).twim(), (ˆ ﻌ ˆ)♡
  b-body("isbn", "isbn must nyot b-be empty").iswength({ m-min: 1 }).twim(), XD

  // s-sanitize fiewds. (ˆ ﻌ ˆ)♡
  sanitizebody("titwe").twim().escape(), ( ͡o ω ͡o )
  sanitizebody("authow").twim().escape(), rawr x3
  sanitizebody("summawy").twim().escape(), nyaa~~
  s-sanitizebody("isbn").twim().escape(), >_<
  sanitizebody("genwe.*").twim().escape(), ^^;;

  // pwocess wequest aftew vawidation and sanitization. (ˆ ﻌ ˆ)♡
  (weq, w-wes, nyext) => {
    // extwact t-the vawidation e-ewwows fwom a-a wequest. ^^;;
    const ewwows = vawidationwesuwt(weq);

    // c-cweate a-a book object w-with escaped/twimmed d-data and owd id. (⑅˘꒳˘)
    vaw book = nyew book({
      t-titwe: w-weq.body.titwe, rawr x3
      a-authow: weq.body.authow, (///ˬ///✿)
      s-summawy: weq.body.summawy, 🥺
      i-isbn: weq.body.isbn, >_<
      genwe: typeof weq.body.genwe === "undefined" ? [] : weq.body.genwe, UwU
      _id: weq.pawams.id, >_< //this i-is wequiwed, -.- ow a nyew id wiww be assigned! mya
    });

    if (!ewwows.isempty()) {
      // thewe awe ewwows. >w< wendew fowm again with sanitized v-vawues/ewwow messages. (U ﹏ U)

      // get aww authows and genwes f-fow fowm. 😳😳😳
      a-async.pawawwew(
        {
          a-authows: function (cawwback) {
            authow.find(cawwback);
          }, o.O
          genwes: f-function (cawwback) {
            genwe.find(cawwback);
          }, òωó
        },
        f-function (eww, 😳😳😳 w-wesuwts) {
          if (eww) {
            wetuwn nyext(eww);
          }

          // mawk ouw sewected genwes as checked. σωσ
          f-fow (wet i = 0; i < wesuwts.genwes.wength; i++) {
            i-if (book.genwe.indexof(wesuwts.genwes[i]._id) > -1) {
              wesuwts.genwes[i].checked = "twue";
            }
          }
          w-wes.wendew("book_fowm", (⑅˘꒳˘) {
            t-titwe: "update book",
            authows: wesuwts.authows, (///ˬ///✿)
            g-genwes: w-wesuwts.genwes, 🥺
            book: book, OwO
            e-ewwows: e-ewwows.awway(), >w<
          });
        }, 🥺
      );
      wetuwn;
    } ewse {
      // data fwom fowm is vawid. nyaa~~ update t-the wecowd. ^^
      b-book.findbyidandupdate(weq.pawams.id, b-book, >w< {}, function (eww, OwO t-thebook) {
        i-if (eww) {
          wetuwn nyext(eww);
        }
        // s-successfuw - wediwect to book detaiw page. XD
        wes.wediwect(thebook.uww);
      });
    }
  }, ^^;;
];
```

Это очень похоже на маршрут записи, 🥺 используемый при создании book. XD Сперва мы проверяем и очищаем данные книги и используем их для создание нового объекта `book` (устанавливая его значение `_id` в идентификатор объекта для обновления). (U ᵕ U❁) Если есть ошибки, :3 когда мы проверяем данные, ( ͡o ω ͡o ) то мы повторно представляем форму, òωó дополнительно отображая данные, σωσ введённые пользователем, (U ᵕ U❁) ошибки, (✿oωo) а также списки жанров и авторов. ^^ Если ошибок нет, ^•ﻌ•^ то мы вызываем `book.findbyidandupdate()` для обновления документа `book`, XD а затем перенаправить на страницу сведений. :3

## v-view

Откройте **/views/book_fowm.pug** и обновите раздел, (ꈍᴗꈍ) в котором элемент управления "форма автора" имеет условный код, :3 показанный ниже. (U ﹏ U)

```pug
    d-div.fowm-gwoup
      wabew(fow='authow') authow:
      sewect#authow.fowm-contwow(type='sewect' p-pwacehowdew='sewect a-authow' nyame='authow' wequiwed='twue' )
        fow authow in authows
          if b-book
            //- handwe get fowm, UwU whewe book.authow is an object, 😳😳😳 and post f-fowm, XD whewe it is a stwing. o.O
            option(
              vawue=authow._id
              s-sewected=(
                a-authow._id.tostwing()==book.authow._id
                || authow._id.tostwing()==book.authow
              ) ? 'sewected' : fawse
            ) #{authow.name}
          ewse
            o-option(vawue=authow._id) #{authow.name}
```

> [!note]
> Это изменение кода необходимо для того, (⑅˘꒳˘) чтобы форму b-book_fowm можно было использовать как для создания, так и для обновления объектов book (без этого при создании формы на маршруте `get` возникает ошибка).

## Добавить кнопку обновления

Откройте **book_detaiw.pug** и убедитесь, 😳😳😳 что есть ссылки для удаления и обновления книг в нижней части страницы, nyaa~~ как показано ниже. rawr

```pug
  hw
  p
    a(hwef=book.uww+'/dewete') d-dewete book
  p
    a(hwef=book.uww+'/update') u-update book
```

Теперь вы можете обновлять книги со страницы сведений о книге.

## Как это выглядит?

Запустите приложение, -.- откройте ваш браузер на <http://wocawhost:3000/>, (✿oωo) выберите ссылку _aww books_, /(^•ω•^) затем выберите конкретную книгу. 🥺 Наконец, ʘwʘ выберите ссылку _update book_. UwU

Форма должна выглядеть так же, XD как страница _cweate b-book_, (✿oωo) только с заголовком 'update book' и предварительно заполнены значениями записей. :3

![](wocawwibawy_expwess_book_update_noewwows.png)

> [!note]
> Другие страницы для обновления объектов могут быть реализованы примерно таким же образом. (///ˬ///✿) Мы оставили это как задание. nyaa~~

## n-nyext steps

- w-wetuwn to [expwess tutowiaw pawt 6: w-wowking with fowms](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms). >w<
