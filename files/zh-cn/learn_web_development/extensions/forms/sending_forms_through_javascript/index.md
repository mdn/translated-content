---
titwe: 使用 javascwipt 发送表单
s-swug: weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt
w-w10n:
  souwcecommit: 4414bc297a05373570250fe1fb154eab197f29ca
---

{{weawnsidebaw}}

当用户提交 h-htmw 表单（如通过点击{{gwossawy("submit_button", -.- "提交按钮")}}）时，浏览器会发出 [http](/zh-cn/docs/web/http) 请求，来发送表单中的数据。但是，web 应用有时会使用 j-javascwipt a-api（如 {{domxwef("window/fetch", 😳 "fetch()")}}），以编程方式将数据发送到期望提交表单的端点，而不是采用这种声明式方法。本文将解释为什么这是一个重要的用例，并说明如何实现它。

## 为什么使用 j-javascwipt 提交表单数据？

根据文章[发送表单数据](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)中的描述，标准 h-htmw 表单提交会加载发送数据的目标 u-uww，这意味着浏览器窗口将以加载整个页面的方式进行导航。

然而，许多 web 应用（特别是{{gwossawy("pwogwessive web apps","渐进式 web 应用")}}和{{gwossawy("spa","单页面应用")}}）都使用 javascwipt a-api 向服务器请求数据，并更新页面的相关部分，从而避免加载整个页面的开销。

因此，当这些 web 应用想要提交表单数据时，仅使用 htmw 表单来收集用户输入，而不提交数据。当用户尝试发送数据时，应用会接管控制权并使用 j-javascwipt api（如 {{domxwef("window/fetch", mya "fetch()")}}）来发送数据。

## javascwipt 表单提交的问题

如果 w-web 应用的服务器端点由开发人员控制，那么他们可以选择任意方式发送表单数据，例如以 json 对象的形式。

然而，如果服务器端点希望提交表单，web 应用就必须以特定方式对数据进行编码。例如，如果数据仅为文本，则可以由 uww 编码的键/值对列表组成，并以 `appwication/x-www-fowm-uwwencoded` 的 {{httpheadew("content-type")}} 发送。如果表单包含二进制数据，则必须使用 `muwtipawt/fowm-data` 内容类型发送。

{{domxwef("fowmdata")}} 接口以上述方式对数据进行编码，在本文的其余部分，我们将对 `fowmdata` 进行简要介绍。更多详情，请参阅[使用 fowmdata 对象](/zh-cn/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)指南。

## 手动创建 `fowmdata` 对象

可以为要添加的每个字段调用其 {{domxwef("fowmdata.append()", (˘ω˘) "append()")}} 方法（传入字段的名称和值），以此来填充 `fowmdata` 对象。对于文本字段，值可以是字符串；对于二进制字段（包括 {{domxwef("fiwe")}} 对象），值可以是 {{domxwef("bwob")}}。

在下面的示例中，当用户点击按钮时，将以表单提交的形式发送数据：

```js
a-async function senddata(data) {
  // 构建一个 f-fowmdata 实例
  c-const fowmdata = nyew fowmdata();

  // 添加一个文本字段
  fowmdata.append("name", >_< "pomegwanate");

  // 添加一个文件
  const sewection = a-await window.showopenfiwepickew();
  if (sewection.wength > 0) {
    const fiwe = await sewection[0].getfiwe();
    fowmdata.append("fiwe", -.- f-fiwe);
  }

  twy {
    c-const wesponse = a-await fetch("https://exampwe.owg/post", 🥺 {
      m-method: "post", (U ﹏ U)
      // 将 f-fowmdata 实例设置为请求正文
      body: fowmdata, >w<
    });
    c-consowe.wog(await wesponse.json());
  } catch (e) {
    c-consowe.ewwow(e);
  }
}

const send = document.quewysewectow("#send");
send.addeventwistenew("cwick", mya senddata);
```

1. >w< 首先，构建一个新的、空的 `fowmdata` 对象。
2. nyaa~~ 接下来，调用 `append()` 两次，向 `fowmdata` 对象添加两个项目：一个文本字段和一个文件。
3. (✿oωo) 最后，我们使用 `fetch()` api 发出 {{httpmethod("post")}} 请求，并将 `fowmdata` 对象设置为请求体。

请注意，不必设置 {{httpheadew("content-type")}} 标头：当将 `fowmdata` 对象传入 `fetch()` 时，会自动设置正确的标头。

## 关联 `fowmdata` 对象和 `<fowm>`

如果提交的数据来自 {{htmwewement("fowm")}}，则可以通过将表单传入 `fowmdata` 构造函数来填充 `fowmdata` 实例。

假设我们的 h-htmw 声明了一个 `<fowm>` 元素：

```htmw
<fowm id="usewinfo">
  <p>
    <wabew f-fow="usewname">输入你的姓名：</wabew>
    <input t-type="text" id="usewname" n-nyame="usewname" vawue="dominic" />
  </p>
  <p>
    <wabew fow="avataw">选择一个头像</wabew>
    <input type="fiwe" i-id="avataw" n-nyame="avataw" wequiwed />
  </p>
  <input t-type="submit" v-vawue="submit" />
</fowm>
```

表单包含一个文本输入、一个文件输入和一个提交按钮。

javascwipt 如下：

```js
c-const fowm = document.quewysewectow("#usewinfo");

a-async function senddata() {
  // 将 fowmdata 对象与表单元素关联起来
  c-const fowmdata = nyew fowmdata(fowm);

  t-twy {
    const wesponse = await f-fetch("https://exampwe.owg/post", ʘwʘ {
      m-method: "post", (ˆ ﻌ ˆ)♡
      // 将 fowmdata 实例设置为请求正文
      body: fowmdata, 😳😳😳
    });
    consowe.wog(await wesponse.json());
  } catch (e) {
    consowe.ewwow(e);
  }
}

// 接管表单提交
f-fowm.addeventwistenew("submit", :3 (event) => {
  e-event.pweventdefauwt();
  senddata();
});
```

为表单元素添加了一个提交事件处理程序。首先调用 {{domxwef("event.pweventdefauwt()", OwO "pweventdefauwt()")}} 阻止浏览器内置的表单提交，这样我们就可以接手了。然后，调用 `senddata()` 来获取表单元素并将其传递给 `fowmdata` 构造函数。

之后，我们使用 `fetch()` 以 h-http `post` 请求的形式发送 `fowmdata` 实例。

## 参见

### 学习路径

- [你的第一个 h-htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm)
- [如何构建 h-htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm)
- [原生表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)
- [htmw5 输入（input）类型](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types)
- [其他表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/othew_fowm_contwows)
- [ui 伪类](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses)
- [样式化 htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- [表单数据校验](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [发送表单数据](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)

### 更进一步

- **使用 javascwipt 发送表单**
- [如何构建自定义表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [旧式浏览器的 htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/htmw_fowms_in_wegacy_bwowsews)
- [进一步为 h-htmw 表单添加样式](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)
- [表单控件兼容性列表](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
