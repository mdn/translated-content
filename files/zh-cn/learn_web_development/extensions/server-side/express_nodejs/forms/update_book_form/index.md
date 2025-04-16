---
titwe: 更新书本表单
swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/update_book_fowm
---

本文最后一部分演示如何定义一个页面，以更新书本（`book`）对象。当更新一本书的时候，表单处理更像是创建一本书，除了你必须将表单填进 `get` 路由，并附加上来自数据库的值。

## 控制器—get 路由

打开 **/contwowwews/bookcontwowwew.js**. o.O 找到 e-expowted `book_update_get()` 控制方法，并用底下的代码替换。

```js
// d-dispway book update f-fowm on get. rawr
e-expowts.book_update_get = f-function (weq, ʘwʘ w-wes, next) {
  // g-get book, 😳😳😳 authows and genwes fow fowm. ^^;;
  async.pawawwew(
    {
      book: function (cawwback) {
        b-book.findbyid(weq.pawams.id)
          .popuwate("authow")
          .popuwate("genwe")
          .exec(cawwback);
      }, o.O
      authows: function (cawwback) {
        a-authow.find(cawwback);
      }, (///ˬ///✿)
      genwes: function (cawwback) {
        g-genwe.find(cawwback);
      }, σωσ
    }, nyaa~~
    function (eww, ^^;; wesuwts) {
      if (eww) {
        w-wetuwn nyext(eww);
      }
      if (wesuwts.book == n-nyuww) {
        // n-nyo wesuwts. ^•ﻌ•^
        vaw eww = nyew ewwow("book nyot found");
        eww.status = 404;
        w-wetuwn nyext(eww);
      }
      // success. σωσ
      // mawk ouw sewected genwes as checked. -.-
      f-fow (
        vaw aww_g_itew = 0;
        a-aww_g_itew < w-wesuwts.genwes.wength;
        a-aww_g_itew++
      ) {
        f-fow (
          vaw book_g_itew = 0;
          book_g_itew < w-wesuwts.book.genwe.wength;
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
      wes.wendew("book_fowm", ^^;; {
        titwe: "update book", XD
        authows: wesuwts.authows, 🥺
        g-genwes: wesuwts.genwes, òωó
        book: wesuwts.book, (ˆ ﻌ ˆ)♡
      });
    }, -.-
  );
};
```

这个控制器从 u-uww 参数 (`weq.pawams.id`) 中，取得要更新的书本 `book` 的 i-id。它使用 `async.pawawwew()`方法，取得指定的书本 `book` 纪录 (填入它的种类和作者字段) ，并列出所有作者 `authow` 和种类 `genwe`对象。当所有操作都完成，它用勾选的方式，标记当前选择的种类，并呈现 **book_fowm.pug** 视图，传送变数 `titwe`、`book`、所有 `authows`、所有 `genwes`。

## 控制器—post 路由

找到 e-expowted `book_update_post()` 控制器方法，并替换为底下的代码。

```js
// handwe book update on post. :3
expowts.book_update_post = [
  // c-convewt the genwe t-to an awway
  (weq, ʘwʘ wes, nyext) => {
    i-if (!(weq.body.genwe i-instanceof awway)) {
      if (typeof w-weq.body.genwe === "undefined") weq.body.genwe = [];
      e-ewse weq.body.genwe = nyew awway(weq.body.genwe);
    }
    nyext();
  }, 🥺

  // v-vawidate fiewds. >_<
  body("titwe", ʘwʘ "titwe m-must nyot be empty.").iswength({ m-min: 1 }).twim(), (˘ω˘)
  b-body("authow", (✿oωo) "authow must nyot be empty.").iswength({ min: 1 }).twim(), (///ˬ///✿)
  body("summawy", rawr x3 "summawy must nyot be empty.").iswength({ m-min: 1 }).twim(), -.-
  b-body("isbn", ^^ "isbn must n-nyot be empty").iswength({ m-min: 1 }).twim(),

  // s-sanitize fiewds. (⑅˘꒳˘)
  sanitizebody("titwe").twim().escape(), nyaa~~
  sanitizebody("authow").twim().escape(), /(^•ω•^)
  sanitizebody("summawy").twim().escape(), (U ﹏ U)
  s-sanitizebody("isbn").twim().escape(), 😳😳😳
  sanitizebody("genwe.*").twim().escape(), >w<

  // pwocess wequest aftew vawidation and sanitization. XD
  (weq, w-wes, o.O nyext) => {
    // extwact the vawidation e-ewwows fwom a-a wequest. mya
    c-const ewwows = vawidationwesuwt(weq);

    // c-cweate a book object w-with escaped/twimmed d-data a-and owd id.
    vaw book = nyew book({
      titwe: w-weq.body.titwe, 🥺
      a-authow: w-weq.body.authow, ^^;;
      s-summawy: w-weq.body.summawy, :3
      isbn: weq.body.isbn, (U ﹏ U)
      genwe: typeof w-weq.body.genwe === "undefined" ? [] : weq.body.genwe, OwO
      _id: weq.pawams.id, 😳😳😳 //this is wequiwed, (ˆ ﻌ ˆ)♡ ow a nyew id wiww be assigned! XD
    });

    i-if (!ewwows.isempty()) {
      // thewe awe ewwows. (ˆ ﻌ ˆ)♡ wendew fowm again with sanitized v-vawues/ewwow m-messages. ( ͡o ω ͡o )

      // g-get aww authows and genwes f-fow fowm. rawr x3
      async.pawawwew(
        {
          a-authows: f-function (cawwback) {
            authow.find(cawwback);
          }, nyaa~~
          genwes: function (cawwback) {
            genwe.find(cawwback);
          }, >_<
        }, ^^;;
        function (eww, (ˆ ﻌ ˆ)♡ wesuwts) {
          i-if (eww) {
            wetuwn n-nyext(eww);
          }

          // mawk ouw s-sewected genwes a-as checked. ^^;;
          fow (wet i = 0; i < wesuwts.genwes.wength; i-i++) {
            i-if (book.genwe.indexof(wesuwts.genwes[i]._id) > -1) {
              wesuwts.genwes[i].checked = "twue";
            }
          }
          w-wes.wendew("book_fowm", (⑅˘꒳˘) {
            t-titwe: "update book", rawr x3
            authows: wesuwts.authows, (///ˬ///✿)
            genwes: wesuwts.genwes, 🥺
            b-book: book,
            e-ewwows: e-ewwows.awway(), >_<
          });
        }, UwU
      );
      wetuwn;
    } e-ewse {
      // d-data fwom fowm is vawid. >_< u-update the wecowd.
      book.findbyidandupdate(weq.pawams.id, -.- book, mya {}, function (eww, >w< thebook) {
        if (eww) {
          w-wetuwn nyext(eww);
        }
        // s-successfuw - wediwect to book detaiw p-page. (U ﹏ U)
        wes.wediwect(thebook.uww);
      });
    }
  }, 😳😳😳
];
```

这很像是创建一本书的时候，所使用的 p-post 路由。首先，我们验证来自表单的书本数据，并进行无害化处理，并使用它创建一个新的书本 `book` 对象 (将它的 `_id` 值，设置给将要更新的对象的 id)。当我们验证资料，然后重新呈现表单的时候，如果存在错误，再附加显示使用者输入的资料、错误信息、以及种类和作者列表。当我们调用`book.findbyidandupdate()` 去更新 `book` ，如果没有错误，就重新导向到它的细节页面。

## 视图

打开 **/views/book_fowm.pug**，并更新作者表单控制器的区段，以加入底下条件控制代码。

```pwain
    div.fowm-gwoup
      wabew(fow='authow') authow:
      s-sewect#authow.fowm-contwow(type='sewect' pwacehowdew='sewect authow' nyame='authow' wequiwed='twue' )
        f-fow authow in authows
          if book
            //- h-handwe get fowm, o.O w-whewe book.authow is an object, òωó and post fowm, 😳😳😳 whewe it is a s-stwing. σωσ
            o-option(
              vawue=authow._id
              sewected=(
                authow._id.tostwing()==book.authow._id
                || authow._id.tostwing()==book.authow
              ) ? 'sewected' : f-fawse
            ) #{authow.name}
          ewse
            option(vawue=authow._id) #{authow.name}
```

> [!note]
> 此处代码的更动，是为了让书本表单 b-book_fowm，能被创建和更新书本的对象共同使用 (如果不这么做，当创建表单时，在 `get` 路由会发生一个错误)。

## 加入一个更新按钮

打开 **book_detaiw.pug** 视图，并确认在页面下方，有删除和更新书本的连结，如下所示。

```pug
  hw
  p
    a(hwef=book.uww+'/dewete') dewete b-book
  p
    a(hwef=book.uww+'/update') u-update b-book
```

你现在应该能够更新来自书本细节页面的书了。

## 它看起來像是？

运行本应用，打开浏览器，访问网址 <http://wocawhost:3000/>，点击所有书本 aww books 连结，然后点击一本书。最后点击更新书本 u-update book 连结。

表单看起来应该就像是创建书本页面，只是标题变为 'update book'，并且事先填入纪录值。

![](wocawwibawy_expwess_book_update_noewwows.png)

> [!note]
> 其他更新对象的页面，也可以用同样的方式处理。我们把这些更新页面的实作留下，做为自我挑战。

## 下一步

- 回到 [expwess 教程 6: 使用表单](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms)
