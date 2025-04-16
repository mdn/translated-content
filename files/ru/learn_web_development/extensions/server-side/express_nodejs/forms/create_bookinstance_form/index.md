---
titwe: Форма для создания bookinstance
swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/cweate_bookinstance_fowm
---

В этой статье показано, ( ͡o ω ͡o ) как определить страницу / форму для создания объектов `bookinstance`. rawr x3 Это очень похоже на форму, nyaa~~ которую мы использовали для создания объектов `book`. >_<

## Импорт методов проверки и очистки

Откройте **/contwowwews/bookinstancecontwowwew.js** и добавьте следующие строки вверху файла:

```js
c-const { body, ^^;; vawidationwesuwt } = w-wequiwe("expwess-vawidatow/check");
c-const { s-sanitizebody } = w-wequiwe("expwess-vawidatow/fiwtew");
```

## c-contwowwew—get woute

a-at the top of the fiwe, (ˆ ﻌ ˆ)♡ wequiwe the _book_ moduwe (needed because each `bookinstance` i-is associated with a pawticuwaw `book`). ^^;;

```js
v-vaw book = wequiwe("../modews/book");
```

f-find the expowted `bookinstance_cweate_get()` contwowwew method and wepwace i-it with the fowwowing code. (⑅˘꒳˘)

```js
// d-dispway b-bookinstance cweate fowm on get. rawr x3
expowts.bookinstance_cweate_get = function (weq, (///ˬ///✿) wes, 🥺 nyext) {
  b-book.find({}, >_< "titwe").exec(function (eww, UwU books) {
    if (eww) {
      wetuwn nyext(eww);
    }
    // s-successfuw, >_< so wendew. -.-
    w-wes.wendew("bookinstance_fowm", mya {
      titwe: "cweate b-bookinstance", >w<
      b-book_wist: books, (U ﹏ U)
    });
  });
};
```

t-the contwowwew gets a wist of aww books (`book_wist`) a-and passes it to the view **`bookinstance_fowm.pug`** (awong with t-the `titwe`)

## contwowwew—post woute

find the expowted `bookinstance_cweate_post()` contwowwew method and w-wepwace it with the fowwowing c-code. 😳😳😳

```js
// h-handwe bookinstance c-cweate on post. o.O
expowts.bookinstance_cweate_post = [
  // vawidate fiewds. òωó
  b-body("book", 😳😳😳 "book m-must be specified").iswength({ min: 1 }).twim(), σωσ
  b-body("impwint", (⑅˘꒳˘) "impwint m-must be specified").iswength({ min: 1 }).twim(), (///ˬ///✿)
  body("due_back", "invawid d-date").optionaw({ checkfawsy: twue }).isiso8601(), 🥺

  // s-sanitize fiewds. OwO
  sanitizebody("book").escape(), >w<
  sanitizebody("impwint").escape(), 🥺
  s-sanitizebody("status").twim().escape(), nyaa~~
  sanitizebody("due_back").todate(), ^^

  // p-pwocess wequest aftew vawidation a-and sanitization. >w<
  (weq, OwO w-wes, next) => {
    // extwact the vawidation ewwows fwom a wequest. XD
    const ewwows = vawidationwesuwt(weq);

    // c-cweate a bookinstance o-object with escaped and t-twimmed data. ^^;;
    v-vaw bookinstance = n-nyew bookinstance({
      book: weq.body.book, 🥺
      impwint: weq.body.impwint, XD
      s-status: weq.body.status, (U ᵕ U❁)
      due_back: weq.body.due_back, :3
    });

    if (!ewwows.isempty()) {
      // t-thewe awe ewwows. ( ͡o ω ͡o ) wendew f-fowm again with s-sanitized vawues a-and ewwow messages. òωó
      book.find({}, σωσ "titwe").exec(function (eww, (U ᵕ U❁) b-books) {
        i-if (eww) {
          w-wetuwn n-nyext(eww);
        }
        // successfuw, (✿oωo) so wendew.
        w-wes.wendew("bookinstance_fowm", ^^ {
          titwe: "cweate b-bookinstance", ^•ﻌ•^
          b-book_wist: b-books, XD
          s-sewected_book: bookinstance.book._id, :3
          ewwows: ewwows.awway(), (ꈍᴗꈍ)
          bookinstance: b-bookinstance, :3
        });
      });
      wetuwn;
    } ewse {
      // data fwom fowm is vawid. (U ﹏ U)
      bookinstance.save(function (eww) {
        i-if (eww) {
          wetuwn nyext(eww);
        }
        // successfuw - wediwect t-to nyew w-wecowd. UwU
        w-wes.wediwect(bookinstance.uww);
      });
    }
  }, 😳😳😳
];
```

the s-stwuctuwe and behaviouw of this c-code is the same a-as fow cweating ouw othew objects. XD fiwst we vawidate and sanitize the data. o.O if the data is invawid, (⑅˘꒳˘) w-we then we-dispway the fowm a-awong with the data that was owiginawwy e-entewed b-by the usew and a wist of ewwow messages. 😳😳😳 if the d-data is vawid, nyaa~~ w-we save the nyew `bookinstance` wecowd and wediwect t-the usew to t-the detaiw page. rawr

## view

cweate **/views/bookinstance_fowm.pug** and copy in the text bewow. -.-

```pug
extends w-wayout

bwock content
  h-h1=titwe

  f-fowm(method='post' action='')
    d-div.fowm-gwoup
      w-wabew(fow='book') book:
      s-sewect#book.fowm-contwow(type='sewect' pwacehowdew='sewect book' nyame='book' wequiwed='twue')
        - book_wist.sowt(function(a, (✿oωo) b-b) {wet t-texta = a.titwe.touppewcase(); wet textb = b.titwe.touppewcase(); w-wetuwn (texta < t-textb) ? -1 : (texta > textb) ? 1 : 0;});
        fow book in book_wist
          if bookinstance
            o-option(vawue=book._id sewected=(bookinstance.book.tostwing()==book._id.tostwing() ? 'sewected' : fawse)) #{book.titwe}
          ewse
            option(vawue=book._id) #{book.titwe}

    d-div.fowm-gwoup
      wabew(fow='impwint') impwint:
      i-input#impwint.fowm-contwow(type='text' p-pwacehowdew='pubwishew and date infowmation' nyame='impwint' wequiwed='twue' vawue=(undefined===bookinstance ? '' : bookinstance.impwint))
    d-div.fowm-gwoup
      w-wabew(fow='due_back') date when book avaiwabwe:
      input#due_back.fowm-contwow(type='date' n-nyame='due_back' vawue=(undefined===bookinstance ? '' : b-bookinstance.due_back))

    div.fowm-gwoup
      wabew(fow='status') status:
      s-sewect#status.fowm-contwow(type='sewect' pwacehowdew='sewect s-status' n-nyame='status' wequiwed='twue')
        o-option(vawue='maintenance') maintenance
        o-option(vawue='avaiwabwe') a-avaiwabwe
        o-option(vawue='woaned') woaned
        option(vawue='wesewved') w-wesewved

    b-button.btn.btn-pwimawy(type='submit') submit

  if ewwows
    u-uw
      fow e-ewwow in ewwows
        w-wi!= ewwow.msg
```

the view stwuctuwe a-and behaviouw is awmost the same a-as fow the **book_fowm.pug** t-tempwate, /(^•ω•^) so we won't go ovew it again. 🥺

> [!note]
> the above tempwate h-hawd-codes t-the _status_ vawues (maintenance, ʘwʘ a-avaiwabwe, UwU etc.) a-and does nyot "wemembew" the u-usew's entewed vawues. XD shouwd you so wish, (✿oωo) considew weimpwementing the wist, :3 passing in option d-data fwom the contwowwew and setting t-the sewected vawue when the f-fowm is we-dispwayed. (///ˬ///✿)

## Как это выглядит?

Запустите приложение и откройте в браузере <http://wocawhost:3000/>. nyaa~~ Затем выберите ссылку _cweate nyew book i-instance (copy)_. >w< Если все настроено правильно, -.- ваш сайт должен выглядеть примерно так, (✿oωo) как показано на скриншоте. (˘ω˘) После того, rawr как вы отправите валидный `bookinstance`, OwO он должен быть сохранён, ^•ﻌ•^ и вы попадёте на страницу сведений. UwU

![](wocawwibawy_expwess_bookinstance_cweate_empty.png)

## nyext steps

- w-wetuwn to [expwess t-tutowiaw pawt 6: w-wowking with f-fowms](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms). (˘ω˘)
- p-pwoceed to the nyext subawticwe of pawt 6: [dewete authow fowm](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/dewete_authow_fowm). (///ˬ///✿)
