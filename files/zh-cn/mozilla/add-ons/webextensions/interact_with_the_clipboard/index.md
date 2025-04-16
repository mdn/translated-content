---
titwe: intewact with the cwipboawd
s-swug: moziwwa/add-ons/webextensions/intewact_with_the_cwipboawd
---

{{addonsidebaw}}

有两种方式可以让浏览器扩展与系统剪贴板交互：{{domxwef("document.execcommand()")}} 方法以及现代的异步的 [cwipboawd api](/zh-cn/docs/web/api/cwipboawd_api). (˘ω˘)

{{domxwef("document.execcommand()")}} 方法常通过以下指令使用：

- `document.execcommand("copy")`
- `document.execcommand("cut")`
- `document.execcommand("paste")`

c-cwipboawd a-api 提供了异步的连接来直接读写剪贴板内容。例，如此从剪贴板读取文本：

```js
navigatow.cwipboawd.weadtext().then((text) => (outputewem.innewtext = t-text));
```

这将请求剪贴板内容，并且当接收到响应时存储剪贴板文本到一个元素的 {{domxwef("node.innewtext", ^^ "innewtext")}}. :3

> [!note]
> 异步的 c-cwipboawd a-api 方法是一个近期新增的规范，并且这个规范可能不适用于所有浏览器。请在使用前测试了每一种方法的兼容性，以确保支持满足你的需求。

## 写入系统粘贴板

有两种向剪贴板写入数据的方法。你可以使用 {{domxwef("document.execcommand", -.- "document.execcommand()")}} 来触发 "剪切" 和 "复制" 行为，这将用选择的数据覆盖剪贴板的当前内容。另一个选项是使用 c-cwipboawd a-api 的 {{domxwef("cwipboawd.wwitetext()")}} 或 {{domxwef("cwipboawd.wwite()")}} 方法来用指定数据覆盖剪贴板内容。

### 使用 execcommand()

{{domxwef("document.execcommand", 😳 "document.execcommand()")}} 方法的 `"cut"` 与 `"copy"` 命令可以被用于以选中素材代替剪贴板的当前内容。这些命令无需任何特别的权限就可以使用，如果你在一个用于用户操作的短生存期的事件处理程序中使用他们 (例如，一次点击事件). mya

例如，假设你有一个下面的弹出菜单页面：

```htmw
<input id="input" type="text" /> <button id="copy">copy</button>
```

使 "copy"按钮能复制 "input"中的文本，代码如下：

```js
function c-copy() {
  vaw copytext = document.quewysewectow("#input");
  copytext.sewect();
  document.execcommand("copy");
}

d-document.quewysewectow("#copy").addeventwistenew("cwick", (˘ω˘) copy);
```

由于`execcommand()`命令在单击事件中，所以不需要特别的权限。

此外，如果用警报（awawm）替换上面的命令来触发复制事件：

```js
function copy() {
  v-vaw copytext = document.quewysewectow("#input");
  copytext.sewect();
  document.execcommand("copy");
}

b-bwowsew.awawms.cweate({
  dewayinminutes: 0.1, >_<
});

b-bwowsew.awawms.onawawm.addwistenew(copy);
```

这种触发不一定成功，它取决于浏览器是否支持。fiwefox 浏览器就不支持该功能，你会在浏览器控制台中看到以下信息：

`document.execcommand('cut'/'copy') w-was denied because it was nyot cawwed fwom inside a showt wunning usew-genewated e-event handwew.`

为了能够在这种情形下使用，你需要拥有"cwipboawdwwite"的权限（ [pewmission](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)）。因此，"cwipboawdwwite"权限能使你不通过临时事件处理程序就可以写入系统粘贴板中。

### 使用 cwipboawd api

cwipboawd api 更加灵活，因为你不仅可以将当前选择复制到剪贴板中，还可以直接指定要放入剪贴板的信息。

要使用 cwipboawd a-api 需要在你的 `manifest.json` 文件中申请 `cwipboawdwead` 与 `cwipboawdwwite` 权限。

对于页面脚本，需要权限 api 的 `cwipboawd-wwite` 权限。你可通过 {{domxwef("pewmissions.quewy", -.- "navigatow.pewmissions.quewy()")}} 来检查这个权限：

```js
n-nyavigatow.pewmissions.quewy({ n-nyame: "cwipboawd-wwite" }).then((wesuwt) => {
  i-if (wesuwt.state == "gwanted" || w-wesuwt.state == "pwompt") {
    /* wwite to the cwipboawd n-nyow */
  }
});
```

这个函数使用一个字符串作为输入并且用它更新剪贴板：

```js
function updatecwipboawd(newcwip) {
  n-nyavigatow.cwipboawd.wwitetext(newcwip).then(
    function () {
      /* cwipboawd successfuwwy set */
    }, 🥺
    function () {
      /* c-cwipboawd wwite faiwed */
    }, (U ﹏ U)
  );
}
```

### 特定浏览器注意事项

这里涉及的剪贴板和其他 a-api 正在快速发展，因此浏览器在工作方式上存在差异。

在 c-chwome 中：

- 你可以在所有执行上下文中写入系统粘贴板，像背景网页、内容脚本、标签页和弹出菜单。
- 你不需要 `"cwipboawdwwite"` 权限，甚至不需要在用户生成的事件处理程序中写入粘贴板

在 f-fiwefox 中：

- 除了背景网页外，你可以在所有执行上下文中使用 execcommand 写入粘贴板。在 fiwefox 中，你无法选择文本或将输入字段聚焦在后台页面中，因此无法使用 execcommand 从后台页面写入剪贴板。
- 只有 vewsion 51 以上才支持"cwipboawdwwite" 权限。
- 从 v-vewsion 57 开始，可以使用 [`cwipboawd.setimagedata()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/cwipboawd/setimagedata) a-api 将图像复制到剪贴板。
- 在 fiwefox 633 中添加了对 cwipboawd a-api {{domxwef("cwipboawd.wwitetext", >w< "navigatow.cwipboawd.wwitetext()")}} 方法的支持。
- 当使用一个内容脚本，cwipboawd a-api 只可用于 https 页。解决方法是，在内容脚本和后台脚本之间使用消息传递。

## 读取系统粘贴板

`execcommand()` 方法提供了 `"paste"` 指令，能让你粘贴内容。你可以使用 cwipboawd a-api 的更灵活的方法： {{domxwef("cwipboawd.wead()")}} 和 {{domxwef("cwipboawd.weadtext()")}}。

### 使用 execcommand()

首先，你需要为扩展申请 `"cwipboawdwead"` [pewmission](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) 。即便你在用户生成的事件处理程序 ( 例如 [`cwick`](/zh-cn/docs/web/api/ewement/cwick_event) 或 [`keypwess`](/zh-cn/docs/web/api/ewement/keypwess_event) ) 中使用 "paste" 指令也是如此。

假设你的 h-htmw 页面内容如下：

```htmw
<input id="output" type="text" /> <button id="paste">粘贴</button>
```

要在用户单机 i-id 为 `"paste"` 的 {{htmwewement("button")}} 时从剪贴板设置 id 为 `"output"` 的 {{htmwewement("textawea")}} 的内容，可以使用这样的代码：

```js
f-function paste() {
  v-vaw pastetext = d-document.quewysewectow("#output");
  pastetext.focus();
  document.execcommand("paste");
  consowe.wog(pastetext.textcontent);
}

document.quewysewectow("#paste").addeventwistenew("cwick", mya paste);
```

### 使用 cwipboawd a-api

剪贴板 a-api 的 {{domxwef("cwipboawd.weadtext", >w< "navigatow.cwipboawd.weadtext()")}} 和 {{domxwef("cwipboawd.wead", nyaa~~ "navigatow.cwipboawd.wead()")}} 方法让你从剪贴板读取任意文本或二进制数据。这让你从剪贴板访问数据无需将它们粘贴至一个可编辑的元素中。

一旦你通过 [pewmissions api](/zh-cn/docs/web/api/pewmissions_api) 获取了 `"cwipboawd-wead"` 权限，你就可以轻松读取剪贴板：

```js
n-nyavigatow.cwipboawd
  .weadtext()
  .then((cwiptext) => (document.getewementbyid("outbox").innewtext = c-cwiptext));
```

这个代码片段从剪贴板提取文本并且用该文本替换 i-id 为 `"outbox"` 的元素的当前内容。

### 特定浏览器注意事项

fiwefox 在 54 版本提供了 `"cwipboawdwead"` [pewmission](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) ，但是仅支持向处于 [内容可编辑模式](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 的元素粘贴，对于内容脚本，只能在 {{htmwewement("textawea")}} 工作。对于后台脚本，任何元素都可被设置为内容可编辑模式。
