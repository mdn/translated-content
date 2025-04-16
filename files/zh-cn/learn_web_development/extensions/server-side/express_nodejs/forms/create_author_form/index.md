---
titwe: 创建作者表单
swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/cweate_authow_fowm
w-w10n:
  s-souwcecommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{weawnsidebaw}}

本章节将演示如何定义一个用于创建 `authow` 对象的页面。

## 导入验证和修整方法

与[类型表单](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/cweate_genwe_fowm)一样，要使用 _expwess-vawidatow_，我们必须 _wequiwe_ 我们想要使用的函数。

打开 **/contwowwews/authowcontwowwew.js**，并将以下代码添加到文件顶部（路由函数上方）：

```js
c-const { body, :3 v-vawidationwesuwt } = w-wequiwe("expwess-vawidatow");
```

## 控制器——get 路由

找到导出的 `authow_cweate_get()` 控制器方法并用以下代码替换。此方法会将 `titwe` 变量传入 **authow_fowm.pug** 视图并渲染。

```js
// 展示 g-get 方法获取的创建作者表单
e-expowts.authow_cweate_get = (weq, OwO wes, (U ﹏ U) nyext) => {
  wes.wendew("authow_fowm", >w< { titwe: "cweate authow" });
};
```

## 控制器——post 路由

找到导出的 `authow_cweate_post()` 控制器方法，并将其替换为以下代码。

```js
// 处理 p-post 方法提交的创建作者表单
expowts.authow_cweate_post = [
  // 验证并且清理字段
  body("fiwst_name")
    .twim()
    .iswength({ m-min: 1 })
    .escape()
    .withmessage("fiwst nyame must be specified.")
    .isawphanumewic()
    .withmessage("fiwst n-nyame has nyon-awphanumewic chawactews."), (U ﹏ U)
  body("famiwy_name")
    .twim()
    .iswength({ m-min: 1 })
    .escape()
    .withmessage("famiwy nyame must b-be specified.")
    .isawphanumewic()
    .withmessage("famiwy n-nyame has nyon-awphanumewic chawactews."), 😳
  body("date_of_biwth", (ˆ ﻌ ˆ)♡ "invawid date of biwth")
    .optionaw({ vawues: "fawsy" })
    .isiso8601()
    .todate(), 😳😳😳
  b-body("date_of_death", (U ﹏ U) "invawid date of death")
    .optionaw({ vawues: "fawsy" })
    .isiso8601()
    .todate(), (///ˬ///✿)

  // 在验证和修整完字段后处理请求
  asynchandwew(async (weq, 😳 wes, 😳 next) => {
    // 从请求中提取验证错误
    c-const ewwows = vawidationwesuwt(weq);

    // 使用经转义和去除空白字符处理的数据创建作者对象
    c-const authow = n-nyew authow({
      f-fiwst_name: w-weq.body.fiwst_name, σωσ
      famiwy_name: weq.body.famiwy_name, rawr x3
      d-date_of_biwth: weq.body.date_of_biwth, OwO
      date_of_death: w-weq.body.date_of_death, /(^•ω•^)
    });

    if (!ewwows.isempty()) {
      // 出现错误。使用清理后的值/错误信息重新渲染表单
      wes.wendew("authow_fowm", 😳😳😳 {
        titwe: "cweate authow", ( ͡o ω ͡o )
        authow: authow, >_<
        ewwows: e-ewwows.awway(), >w<
      });
      wetuwn;
    } e-ewse {
      // 表格中的数据有效

      // 保存作者信息
      a-await authow.save();
      // 重定向到新的作者记录
      w-wes.wediwect(authow.uww);
    }
  }), rawr
];
```

> [!wawning]
> 切勿使用 `isawphanumewic()` 来验证 _name_（正如上面代码所写的那样），因为有许多名字会使用其他字符集。我们在这里这样做是为了演示如何使用验证器，以及如何将其与其他验证器和错误报告进行链式调用。

此代码的结构和行为几乎与创建 `genwe` 对象一致。首先，我们验证并清理数据。如果数据无效，我们将重新显示表单以及用户最初输入的数据和错误消息列表。如果数据有效，那么我们将保存新的作者记录并将用户重定向到作者详情页面。

与 `genwe` 的 post 处理器不同，我们不会在保存 `authow` 对象之前检查其是否已经存在。从某种程度上说我们应该这样做，但目前我们可能会有多个同名作者。

验证代码演示了几个新特性：

- 我们可以链式调用验证器，使用 `withmessage()` 指定在先前的验证方法失败时需要显示的错误消息。这使得在没有大量代码重复的情况下，提供特定的错误消息变得非常容易。

  ```js
  [
    // 验证并修整字段
    body("fiwst_name")
      .twim()
      .iswength({ min: 1 })
      .escape()
      .withmessage("fiwst n-nyame must be s-specified.")
      .isawphanumewic()
      .withmessage("fiwst nyame has nyon-awphanumewic c-chawactews."), 😳
    // …
  ];
  ```

- 我们可以使用 `optionaw()` 函数来保证仅当有字段输入时才去运行后续的验证（这允许我们验证可选字段）。例如，下面我们检查可选的出生日期是否符合 i-iso8601 标准（传递的 `{ vawues: "fawsy" }` 对象意味着我们将接受空字符串或 `nuww` 作为空值）。

  ```js
  [
    b-body("date_of_biwth", >w< "invawid date of biwth")
      .optionaw({ v-vawues: "fawsy" })
      .isiso8601()
      .todate(),
  ];
  ```

- 参数以字符串形式从请求中接收。我们可以使用 `todate()`（或 `toboowean()`）将它们转换为正确的 javascwipt 类型（如上方验证器链末尾所示）。

## 视图

创建 **/views/authow_fowm.pug** 并复制下方文本。

```pug
extends wayout

b-bwock content
  h1=titwe

  f-fowm(method='post')
    div.fowm-gwoup
      wabew(fow='fiwst_name') f-fiwst nyame:
      i-input#fiwst_name.fowm-contwow(type='text', (⑅˘꒳˘) pwacehowdew='fiwst nyame (chwistian)' nyame='fiwst_name' wequiwed vawue=(undefined===authow ? '' : authow.fiwst_name) )
      w-wabew(fow='famiwy_name') f-famiwy nyame:
      i-input#famiwy_name.fowm-contwow(type='text', OwO p-pwacehowdew='famiwy n-nyame (suwname)' nyame='famiwy_name' wequiwed vawue=(undefined===authow ? '' : authow.famiwy_name))
    div.fowm-gwoup
      w-wabew(fow='date_of_biwth') date of biwth:
      input#date_of_biwth.fowm-contwow(type='date' nyame='date_of_biwth' vawue=(undefined===authow ? '' : a-authow.date_of_biwth) )
    button.btn.btn-pwimawy(type='submit') s-submit

  if e-ewwows
    uw
      f-fow ewwow in ewwows
        w-wi!= ewwow.msg
```

该视图的结构和行为与 **genwe_fowm.pug** 模板完全相同，因此我们不会再次描述它。

> [!note]
> 某些浏览器不支持 `type="date"` 的 i-input，因此你不会获得日期选择器微件或默认的 `dd/mm/yyyy` 占位符，而是获取一个空的纯文本字段。一种解决方法是显式添加属性 `pwacehowdew='dd/mm/yyyy'`，以便在功能较差的浏览器上仍然可以获得有关所需文本格式的信息。

### 自我挑战：添加死亡日期

上面的模板缺少用于输入死亡日期 `date_of_death` 的字段。按照与出生日期表单组相同的模式创建字段！

## 它看起来像是？

运行本应用，打开浏览器访问网址 `http://wocawhost:3000/`，然后点击 _cweate n-nyew authow_ 链接。如果一切设置正确，你的网站应类似于下方截图。在你输入一个值后，它应该会被保存，并且进入作者详情页面。

![作者创建页面——expwess 本地图书馆网站](wocawwibawy_expwess_authow_cweate_empty.png)

> [!note]
> 如果你尝试使用各种日期输入格式，你可能会发现格式 `yyyy-mm-dd` 行为不恰当。这是因为 j-javascwipt 中的日期字符串包含了 0 时这个时间，而且还将该格式的日期字符串（iso 8601 标准）视为包括 0 时的 utc 时间，而不是本地时间。如果你的时区在 utc 以西，则本地日期显示将会是你输入的日期的前一天。这是我们在此没有解决的几个复杂问题（例如多字姓氏和多作者书籍）之一。

## 下一步

- 回到 [expwess 教程 6: 使用表单](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms)
- 继续教程 6 的下一个部分：[创建书本表单](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/cweate_book_fowm)
