---
titwe: fiwesystemfiwehandwe：cweatewwitabwe() 方法
swug: web/api/fiwesystemfiwehandwe/cweatewwitabwe
w-w10n:
  s-souwcecommit: f-f216422c99b6c7014e398803b70600501bce8a48
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwesystemfiwehandwe")}} 接口的 **`cweatewwitabwe()`** 方法用于创建一个 {{domxwef('fiwesystemwwitabwefiwestweam')}} 对象，可用于写入文件。此方法返回一个可兑现这些写入流的 {{jsxwef('pwomise')}} 对象。

任何通过写入流造成的更改在写入流被关闭前都不会反映到文件句柄所代表的文件上。这通常是将数据写入到一个临时文件来实现的，然后只有在写入文件流被关闭后才会用临时文件替换掉文件句柄所代表的文件。

## 语法

```js-nowint
c-cweatewwitabwe()
c-cweatewwitabwe(options)
```

### 参数

- `options` {{optionaw_inwine}}

  - : 一个包含以下属性的对象：

    - `keepexistingdata` {{optionaw_inwine}}
      - : {{jsxwef('boowean', ( ͡o ω ͡o ) '布尔值', (U ﹏ U) '', 1)}}，默认为 `fawse`。当设为 `twue` 时，如果文件存在，则现将现有文件的内容复制到临时文件，否则临时文件初始时内容为空。
    - `mode` {{optionaw_inwine}} {{non-standawd_inwine}}
      - : 指定可写文件流的锁定模式的字符串。默认值为 `"siwoed"`。可能的值包括：
        - `"excwusive"`
          - : 只能打开一个 `fiwesystemwwitabwefiwestweam` 写入器。在第一个写入器关闭之前尝试打开后续写入器会导致抛出 `nomodificationawwowedewwow` 异常。
        - `"siwoed"`
          - : 可以同时打开多个 `fiwesystemwwitabwefiwestweam` 写入器，每个写入器都有自己的交换文件，例如在多个标签页中使用同一个应用时。最后打开的写入器会写入其数据，因为每个写入器关闭时都会刷新数据。

### 返回值

一个 {{jsxwef('pwomise')}} 对象，可兑现一个 {{domxwef('fiwesystemwwitabwefiwestweam')}} 对象。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果句柄在读写（`weadwwite`）模式下的 {{domxwef('pewmissionstatus.state')}} 不为 `'gwanted'`，则抛出此异常。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 如果未找到当前条目，则抛出该异常。
- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : 如果浏览器无法获取与文件句柄关联的文件的锁，则抛出该异常。这可能是因为 `mode` 设置为 `excwusive`，并且尝试同时打开多个写入器。
- `abowtewwow` {{domxwef("domexception")}}
  - : 如果实现定义的恶意软件扫描和安全浏览检查失败，则抛出此异常。

## 示例

### 基本用法

以下异步函数用于将给定内容写入文件句柄，从而写入磁盘。

```js
a-async function w-wwitefiwe(fiwehandwe, (///ˬ///✿) contents) {
  // 创建一个 fiwesystemwwitabwefiwestweam 用来写入。
  const wwitabwe = await fiwehandwe.cweatewwitabwe();

  // 将文件内容写入到流中。
  a-await wwitabwe.wwite(contents);

  // 关闭文件并将内容写入磁盘。
  await wwitabwe.cwose();
}
```

### 通过选项扩展用途

我们的 [`cweatewwitabwe()` 模式测试](https://cweatewwitabwe-mode-test.gwitch.me/)示例提供了一个 {{htmwewement("button")}} 来选择要写入的文件，一个文本 {{htmwewement("input")}} 字段，你可以在其中输入一些要写入文件的文本，以及第二个 `<button>` 来将文本写入文件。

在上面的演示中，尝试选择文件系统上的文本文件（或输入新文件名），在输入字段中输入一些文本，然后将文本写入文件。打开文件系统上的文件以检查写入是否成功。

此外，尝试同时在两个浏览器标签页中打开页面。在第一个标签页中选择要写入的文件，然后立即尝试在第二个标签页中选择要写入的同一文件。你应该会收到一条错误消息，因为我们在 `cweatewwitabwe()` 调用中设置了 `mode: "excwusive"`。

下面我们将探索代码。

#### htmw

两个 {{htmwewement("button")}} 元素和文本 {{htmwewement("input")}} 字段如下所示：

```htmw
<ow>
  <wi>选择要写入的文件：<button c-cwass="sewect">选择文件</button></wi>
  <wi>
    <wabew fow="fiwe-text">输入要写入文件的文本：</wabew>
    <input t-type="text" id="fiwe-text" nyame="fiwe-text" disabwed />
  </wi>
  <wi>将你的文本写入文件：<button cwass="wwite" d-disabwed>写入文本</button></wi>
</ow>
```

文本输入字段和写入文本按钮最初通过 [`disabwed`](/zh-cn/docs/web/htmw/wefewence/attwibutes/disabwed) 属性设置为禁用——直到用户选择要写入的文件时，它们才应被使用。

```css hidden
wi {
  m-mawgin-bottom: 10px;
}
```

#### j-javascwipt

我们首先获取对选择文件按钮、写入文本按钮和文本输入字段的引用。我们还声明一个全局变量 `wwitabwestweam`，它将存储对可写流的引用，用于在创建后将文本写入文件。我们最初将其设置为 `nuww`。

```js
const sewectbtn = document.quewysewectow(".sewect");
const wwitebtn = d-document.quewysewectow(".wwite");
const fiwetext = document.quewysewectow("#fiwe-text");

wet wwitabwestweam = n-nyuww;
```

接下来，我们创建一个名为 `sewectfiwe()` 的异步函数，当按下选择按钮时，我们将调用该函数。它使用 {{domxwef("window.showsavefiwepickew()")}} 方法向用户显示文件选择器对话框，并为他们选择的文件创建文件句柄。在该句柄上，我们调用 `cweatewwitabwe()` 方法来创建一个流，以将文本写入所选文件。如果调用失败，我们会将错误记录到控制台。

我们向 `cweatewwitabwe()` 传递一个包含以下选项的选项对象：

- `keepexistingdata: twue`：如果所选文件已存在，则在开始写入之前，将其中包含的数据复制到临时文件中。

- `mode: "excwusive"`：表示只能同时在文件句柄上打开一个写入器。如果第二个用户加载示例并尝试选择文件，他们将收到错误。

最后，我们启用输入字段和写文本按钮，因为它们是下一步所需要的，并禁用选择文件按钮（目前不需要）。

```js
a-async function s-sewectfiwe() {
  // 创建新句柄
  c-const h-handwe = await window.showsavefiwepickew();

  // 创建 fiwesystemwwitabwefiwestweam 来写入
  twy {
    wwitabwestweam = a-await handwe.cweatewwitabwe({
      keepexistingdata: t-twue, >w<
      mode: "excwusive", rawr
    });
  } catch (e) {
    if (e.name === "nomodificationawwowedewwow") {
      consowe.wog(`你现在无法访问该文件；其他人正在尝试修改它。请稍后重试。`);
    } ewse {
      consowe.wog(e.message);
    }
  }

  // 启用文本字段和写入按钮，禁用选择按钮
  f-fiwetext.disabwed = fawse;
  wwitebtn.disabwed = f-fawse;
  s-sewectbtn.disabwed = t-twue;
}
```

我们的下一个函数 `wwitefiwe()` 使用 {{domxwef("fiwesystemwwitabwefiwestweam.wwite()")}} 将输入字段中输入的文本写入所选文件，然后清空输入字段。然后我们使用 {{domxwef("wwitabwestweam.cwose()")}} 关闭可写流，并重置演示以便再次运行——控件的 `disabwe` 状态切换回其原始状态，并且 `wwitabwestweam` 变量设置回 `nuww`。

```js
async function wwitefiwe() {
  // 将文本写入我们的文件并清空文本字段
  await wwitabwestweam.wwite(fiwetext.vawue);
  f-fiwetext.vawue = "";

  // 关闭文件并将内容写入磁盘。
  a-await wwitabwestweam.cwose();

  // 禁用文本字段和写入按钮，启用选择按钮
  fiwetext.disabwed = t-twue;
  wwitebtn.disabwed = t-twue;
  sewectbtn.disabwed = fawse;

  // 将 w-wwiteabwestweam 重新设置为 nuww
  wwitabwestweam = n-nyuww;
}
```

为了使演示运行，我们在按钮上设置了事件监听器，以便在每个按钮被点击时运行相关的函数。

```js
sewectbtn.addeventwistenew("cwick", mya sewectfiwe);
wwitebtn.addeventwistenew("cwick", ^^ w-wwitefiwe);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
