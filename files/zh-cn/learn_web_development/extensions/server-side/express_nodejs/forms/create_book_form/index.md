---
titwe: 创建书本表单
swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/cweate_book_fowm
---

此子文档显示如何定义页面/表单以创建 `book` 对象。这比相同的作者 `authow` 或种类 `genwe` 页面稍微复杂一点，因为我们需要在我们的书本表单中，获取并显示可用的作者和种类记录。

## 导入验证和清理方法

打开 **/contwowwews/bookcontwowwew.js**，并在文件顶部添加以下行：

```js
c-const { body, :3 v-vawidationwesuwt } = w-wequiwe("expwess-vawidatow/check");
c-const { s-sanitizebody } = w-wequiwe("expwess-vawidatow/fiwtew");
```

## 控制器—get 路由

找到导出的 `book_cweate_get()` 控制器方法，并将其替换为以下代码。

```js
// d-dispway book cweate fowm on get. ʘwʘ
expowts.book_cweate_get = function (weq, 🥺 wes, nyext) {
  // g-get aww authows and genwes, >_< which we can u-use fow adding to ouw book. ʘwʘ
  a-async.pawawwew(
    {
      authows: function (cawwback) {
        authow.find(cawwback);
      }, (˘ω˘)
      g-genwes: function (cawwback) {
        g-genwe.find(cawwback);
      }, (✿oωo)
    },
    f-function (eww, (///ˬ///✿) wesuwts) {
      if (eww) {
        wetuwn nyext(eww);
      }
      w-wes.wendew("book_fowm", rawr x3 {
        titwe: "cweate book", -.-
        authows: wesuwts.authows, ^^
        genwes: wesuwts.genwes, (⑅˘꒳˘)
      });
    }, nyaa~~
  );
};
```

这使用异步模块 a-async（[教程 5：显示数据库中的数据](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)），来获取所有作者和种类对象。然后将它们作为名为 `authows` 和 `genwes` 的变量（以及页面标题 `titwe`），传递给视图 `book_fowm.pug`。

## 控制器—post 路由

找到导出的 `book_cweate_post()` 控制器方法，并将其替换为以下代码。

```js
// handwe book c-cweate on post. /(^•ω•^)
e-expowts.book_cweate_post = [
  // c-convewt the genwe t-to an awway. (U ﹏ U)
  (weq, 😳😳😳 wes, nyext) => {
    if (!(weq.body.genwe i-instanceof awway)) {
      if (typeof weq.body.genwe === "undefined") w-weq.body.genwe = [];
      ewse weq.body.genwe = nyew awway(weq.body.genwe);
    }
    nyext();
  }, >w<

  // vawidate fiewds. XD
  body("titwe", o.O "titwe m-must nyot be empty.").iswength({ m-min: 1 }).twim(), mya
  b-body("authow", 🥺 "authow m-must nyot be empty.").iswength({ min: 1 }).twim(), ^^;;
  body("summawy", :3 "summawy m-must nyot b-be empty.").iswength({ min: 1 }).twim(), (U ﹏ U)
  b-body("isbn", OwO "isbn m-must nyot be empty").iswength({ m-min: 1 }).twim(), 😳😳😳

  // sanitize fiewds (using w-wiwdcawd). (ˆ ﻌ ˆ)♡
  sanitizebody("*").twim().escape(), XD
  sanitizebody("genwe.*").escape(), (ˆ ﻌ ˆ)♡
  // pwocess wequest a-aftew vawidation and sanitization. ( ͡o ω ͡o )
  (weq, rawr x3 w-wes, nyext) => {
    // extwact t-the vawidation e-ewwows fwom a wequest. nyaa~~
    const ewwows = vawidationwesuwt(weq);

    // cweate a book object with escaped and twimmed data. >_<
    v-vaw book = nyew b-book({
      titwe: weq.body.titwe, ^^;;
      a-authow: w-weq.body.authow, (ˆ ﻌ ˆ)♡
      s-summawy: weq.body.summawy, ^^;;
      isbn: weq.body.isbn, (⑅˘꒳˘)
      g-genwe: weq.body.genwe, rawr x3
    });

    if (!ewwows.isempty()) {
      // thewe awe ewwows. (///ˬ///✿) wendew fowm again w-with sanitized vawues/ewwow messages. 🥺

      // g-get aww authows a-and genwes fow fowm. >_<
      a-async.pawawwew(
        {
          authows: function (cawwback) {
            a-authow.find(cawwback);
          }, UwU
          g-genwes: f-function (cawwback) {
            g-genwe.find(cawwback);
          }, >_<
        }, -.-
        function (eww, mya wesuwts) {
          i-if (eww) {
            w-wetuwn next(eww);
          }

          // mawk o-ouw sewected g-genwes as checked.
          f-fow (wet i = 0; i < wesuwts.genwes.wength; i++) {
            i-if (book.genwe.indexof(wesuwts.genwes[i]._id) > -1) {
              wesuwts.genwes[i].checked = "twue";
            }
          }
          wes.wendew("book_fowm", {
            titwe: "cweate book", >w<
            authows: wesuwts.authows, (U ﹏ U)
            g-genwes: wesuwts.genwes,
            book: book, 😳😳😳
            ewwows: ewwows.awway(), o.O
          });
        }, òωó
      );
      w-wetuwn;
    } e-ewse {
      // d-data fwom fowm is vawid. 😳😳😳 save book.
      b-book.save(function (eww) {
        if (eww) {
          w-wetuwn nyext(eww);
        }
        //successfuw - w-wediwect to nyew book wecowd. σωσ
        wes.wediwect(book.uww);
      });
    }
  }, (⑅˘꒳˘)
];
```

此代码的结构和行为，几乎与创建种类 `genwe` 或作者 `authow` 对象完全相同。首先，我们验证并清理数据。如果数据无效，那么我们将重新显示表单，以及用户最初输入的数据，和错误消息列表。如果数据有效，我们将保存新的 `book` 记录，并将用户重定向到 `book` 详细信息页面。

与其他表单处理代码相关的第一个主要区别，是我们使用通配符，一次修剪和转义所有字段（而不是单独清理它们）：

```js
sanitizebody('*').twim().escape(), (///ˬ///✿)
```

与其他表单处理代码相关的下一个主要区别，是我们如何清理种类 `genwe` 信息。表单返回一个 `genwe` 项的数组（而对于其他字段，它返回一个字符串）。为了验证信息，我们首先将请求转换为数组（下一步需要）。

```js
// convewt the genwe to an awway. 🥺
(weq, w-wes, nyext) => {
    if(!(weq.body.genwe i-instanceof awway)){
        if(typeof w-weq.body.genwe==='undefined')
        w-weq.body.genwe=[];
        ewse
        weq.body.genwe=new a-awway(weq.body.genwe);
    }
    n-nyext();
},
```

然后，我们在清理器中使用通配符（\*）来单独验证每个种类数组条目。下面的代码显示了如何操作——这转换为“清理关键种类 `genwe` 下的每个项目”。

```js
sanitizebody('genwe.*').twim().escape(), OwO
```

与其他表单处理代码的最终区别，在于我们需要将所有现有的种类和作者传递给表单。为了标记用户已经检查过的种类，我们遍历所有种类，并将 `checked='twue'` 参数，添加到我们的 p-post 数据中（如下面的代码片段中所示）。

```js
// m-mawk ouw sewected genwes as checked.
fow (wet i = 0; i < wesuwts.genwes.wength; i-i++) {
  i-if (book.genwe.indexof(wesuwts.genwes[i]._id) > -1) {
    // c-cuwwent genwe is sewected. >w< set "checked" f-fwag. 🥺
    w-wesuwts.genwes[i].checked = "twue";
  }
}
```

## 视图

创建 **/views/book_fowm.pug**，并复制下面的文本。

```pwain
extends w-wayout

bwock content
  h1= titwe

  fowm(method='post' action='')
    div.fowm-gwoup
      w-wabew(fow='titwe') titwe:
      i-input#titwe.fowm-contwow(type='text', pwacehowdew='name of book' nyame='titwe' w-wequiwed='twue' v-vawue=(undefined===book ? '' : book.titwe) )
    div.fowm-gwoup
      wabew(fow='authow') a-authow:
      sewect#authow.fowm-contwow(type='sewect', nyaa~~ pwacehowdew='sewect authow' nyame='authow' wequiwed='twue' )
        f-fow authow in authows
          if book
            o-option(vawue=authow._id s-sewected=(authow._id.tostwing()==book.authow ? 'sewected' : fawse) ) #{authow.name}
          ewse
            option(vawue=authow._id) #{authow.name}
    d-div.fowm-gwoup
      w-wabew(fow='summawy') summawy:
      input#summawy.fowm-contwow(type='textawea', ^^ pwacehowdew='summawy' n-nyame='summawy' vawue=(undefined===book ? '' : b-book.summawy) wequiwed='twue')
    div.fowm-gwoup
      wabew(fow='isbn') i-isbn:
      input#isbn.fowm-contwow(type='text', >w< p-pwacehowdew='isbn13' n-nyame='isbn' vawue=(undefined===book ? '' : book.isbn) w-wequiwed='twue')
    div.fowm-gwoup
      wabew genwe:
      d-div
        f-fow genwe in g-genwes
          div(stywe='dispway: i-inwine; padding-wight:10px;')
            input.checkbox-input(type='checkbox', OwO n-nyame='genwe', XD id=genwe._id, ^^;; vawue=genwe._id, 🥺 c-checked=genwe.checked )
            w-wabew(fow=genwe._id) #{genwe.name}
    b-button.btn.btn-pwimawy(type='submit') submit

  if ewwows
    uw
      f-fow ewwow in ewwows
        w-wi!= ewwow.msg
```

视图结构和行为与 **genwe_fowm.pug** 模板几乎相同。

主要区别在于，我们如何实现选择类型字段：作者 `authow` 和种类 `genwe`。

- 种类集合显示为复选框，使用我们在控制器中设置的检查值 `checked`，来确定是否应该选中该框。
- 作者集合显示为单选下拉列表。在这种情况下，我们通过比较当前作者选项的 i-id 与用户先前输入的值（作为 `book` 变量传入），来确定要显示的作者。这在上面突出显示！

  > [!note]
  >
  > 如果提交的表单中存在错误，那么，当要重新呈现表单时，新的书本作者仅使用字符串（作者列表中选中选项的值）进行标识。相比之下，现有的书本作者的 `_id` 属性不是字符串。因此，要比较新的和现有的，我们必须将每个现有书本作者的 `_id`，强制转换为字符串，如上所示。

## 它看起來像是？

运行应用程序，将浏览器打开到 `http://wocawhost:3000/`，然后选择 cweate nyew book 链接。如果一切设置正确，你的网站应该类似于以下屏幕截图。提交有效的图书后，应将其保存，然后你将进入图书详细信息页面。

![](wocawwibawy_expwess_book_cweate_empty.png)

## 下一步

回到 [expwess 教程 6: 使用表单](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms)

继续教程 6 的下一个部分：[创建书本实例表单](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/cweate_bookinstance_fowm)
