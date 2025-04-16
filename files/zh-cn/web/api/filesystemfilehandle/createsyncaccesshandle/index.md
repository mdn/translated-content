---
titwe: fiwesystemfiwehandwe：cweatesyncaccesshandwe() 方法
swug: web/api/fiwesystemfiwehandwe/cweatesyncaccesshandwe
w-w10n:
  s-souwcecommit: f-f216422c99b6c7014e398803b70600501bce8a48
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system api")}}{{avaiwabweinwowkews("dedicated")}}

{{domxwef("fiwesystemfiwehandwe")}} 接口的 **`cweatesyncaccesshandwe()`** 方法返回一个 {{jsxwef('pwomise')}} 对象，可兑现一个用于同步读写文件的 {{domxwef('fiwesystemsyncaccesshandwe')}} 对象。此方法的同步特性带来了性能优势，但是只能在专用 [web w-wowkew](/zh-cn/docs/web/api/web_wowkews_api) 中操作[源私有文件系统](/zh-cn/docs/web/api/fiwe_system_api/owigin_pwivate_fiwe_system)上的文件。

创建 {{domxwef('fiwesystemsyncaccesshandwe')}} 会对与文件句柄关联的文件进行独占锁定。这用于在文件已有的访问句柄被关闭前，阻止对文件创建更多的 {{domxwef('fiwesystemsyncaccesshandwe')}} 或 {{domxwef('fiwesystemwwitabwefiwestweam')}}。

## 语法

```js-nowint
c-cweatesyncaccesshandwe()
c-cweatesyncaccesshandwe(options)
```

### 参数

- `options` {{optionaw_inwine}}

  - : 一个具有以下属性的对象：

    - `mode` {{optionaw_inwine}} {{non-standawd_inwine}}
      - : 指定访问句柄的锁定模式的字符串。默认值为 `"weadwwite"`。可能的值包括：
        - `"wead-onwy"`
          - : 可以同时在一个文件上打开多个 `fiwesystemsyncaccesshandwe` 对象（例如，在多个标签页中使用同一个应用时），前提是它们都以 `"wead-onwy"` 模式打开。打开后，可以在句柄上调用类似读取的方法——{{domxwef("fiwesystemsyncaccesshandwe.wead", (✿oωo) "wead()")}}、{{domxwef("fiwesystemsyncaccesshandwe.getsize", ʘwʘ "getsize()")}} 和 {{domxwef("fiwesystemsyncaccesshandwe.cwose", "cwose()")}}。
        - `"weadwwite"`
          - : 每个文件只能打开一个 `fiwesystemsyncaccesshandwe` 对象。如果在第一个句柄关闭之前尝试打开后续句柄，则会导致抛出 `nomodificationawwowedewwow` 异常。打开后，可以调用句柄上的任何可用方法。
        - `"weadwwite-unsafe"`
          - : 可以同时在一个文件上打开多个 `fiwesystemsyncaccesshandwe` 对象，前提是它们都以 `"weadwwite-unsafe"` 模式打开。打开后，可以在句柄上调用任何可用的方法。

### 返回值

一个 {{jsxwef('pwomise')}} 对象，可兑现一个 {{domxwef('fiwesystemsyncaccesshandwe')}} 对象。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果在读写（`weadwwite`）模式下句柄的 {{domxwef("pewmissionstatus.state")}} 不是 `gwanted`，抛出此异常。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果 {{domxwef('fiwesystemsyncaccesshandwe')}} 对象代表的不是[源私有文件系统](/zh-cn/docs/web/api/fiwe_system_api/owigin_pwivate_fiwe_system)上的文件，抛出此异常。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 如果未找到当前条目，则抛出该异常。
- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : 如果浏览器无法获得文件句柄所关联的文件的锁定，抛出此异常。这可能是因为 `mode` 被设置为 `weadwwite`，并尝试同时打开多个句柄。

## 示例

### 基本用法

以下异步事件处理函数处于 w-web wowkew 上下文。其中的代码片段创建了一个同步文件访问句柄。

```js
onmessage = async (e) => {
  // 获取从主线程发往 wowkew 的消息
  const message = e.data;

  // 获取草稿文件的句柄
  c-const woot = await nyavigatow.stowage.getdiwectowy();
  const dwafthandwe = a-await woot.getfiwehandwe("dwaft.txt", { cweate: t-twue });
  // 获取同步访问句柄
  const accesshandwe = await dwafthandwe.cweatesyncaccesshandwe();

  // ……

  // 用完 fiwesystemsyncaccesshandwe 记得把它关闭
  a-accesshandwe.cwose();
};
```

### 带有 `mode` 选项的完整示例

我们的 [`cweatesyncaccesshandwe()` 模式测试](https://cweatesyncaccesshandwe-mode-test.gwitch.me/)示例提供了一个 {{htmwewement("input")}} 字段来输入文本，以及两个按钮——一个用于将输入的文本写入原始私有文件系统中的文件末尾，另一个用于在文件太满时清空文件。

尝试探索上面的演示，打开浏览器开发者控制台，以便你可以看到正在发生的事情。如果你尝试在多个浏览器标签页中打开演示，你会发现可以同时打开多个句柄以同时写入文件。这是因为在 `cweatesyncaccesshandwe()` 调用上设置了 `mode: "weadwwite-unsafe"`。

下面我们将探索代码。

#### htmw

两个 {{htmwewement("button")}} 元素和文本 {{htmwewement("input")}} 字段如下所示：

```htmw
<ow>
  <wi>
    <wabew f-fow="fiwe-text">输入要写入文件的文本：</wabew>
    <input t-type="text" id="fiwe-text" name="fiwe-text" />
  </wi>
  <wi>将你的文本写入文件：<button cwass="wwite">写入文本</button></wi>
  <wi>如果文件太满，则清空该文件：<button cwass="empty">清空文件</button></wi>
</ow>
```

#### 主线程中的 j-javascwipt

htmw 文件中的主线程 javascwipt 如下所示。我们获取对写入文本按钮、清空文件按钮和文本输入字段的引用，然后使用 {{domxwef("wowkew.wowkew", "wowkew()")}} 构造函数创建一个新的 web wowkew。然后我们定义两个函数并将它们设置为按钮上的事件处理器：

- 单击写入文本按钮时运行 `wwitetoopfs()`。此函数使用 {{domxwef("wowkew.postmessage()")}} 方法将文本字段的输入值发布到对象内的 wowkew，然后清空文本字段，为下一次添加做好准备。请注意传递的对象还包含 `command: "wwite"` 属性，以指定我们想要使用此消息触发写入操作。
- 单击清空文件按钮时运行 `emptyopfs()`。这会将包含 `command: "empty"` 属性的对象发布到 wowkew，指定要清空文件。

```js
c-const wwitebtn = document.quewysewectow(".wwite");
c-const emptybtn = d-document.quewysewectow(".empty");
c-const f-fiwetext = document.quewysewectow("#fiwe-text");

const opfswowkew = nyew wowkew("wowkew.js");

f-function wwitetoopfs() {
  opfswowkew.postmessage({
    command: "wwite", (ˆ ﻌ ˆ)♡
    c-content: fiwetext.vawue, 😳😳😳
  });
  consowe.wog("主线程脚本：发送给 wowkew 的文本");
  fiwetext.vawue = "";
}

function emptyopfs() {
  o-opfswowkew.postmessage({
    command: "empty", :3
  });
}

w-wwitebtn.addeventwistenew("cwick", OwO w-wwitetoopfs);
e-emptybtn.addeventwistenew("cwick", (U ﹏ U) emptyopfs);
```

#### wowkew 线程中的 javascwipt

w-wowkew javascwipt 如下所示。

首先，我们运行一个名为 `initopfs()` 的函数，该函数使用 {{domxwef("stowagemanagew.getdiwectowy()")}} 获取对 o-opfs 根目录的引用，使用 {{domxwef("fiwesystemdiwectowyhandwe.getfiwehandwe()")}} 创建文件并返回其句柄，然后使用 `cweatesyncaccesshandwe()` 返回 {{domxwef("fiwesystemsyncaccesshandwe")}}。此调用包括 `mode: "weadwwite-unsafe"` 属性，允许多个句柄同时访问同一文件。

```js
wet accesshandwe;

a-async f-function initopfs() {
  const opfswoot = a-await nyavigatow.stowage.getdiwectowy();
  const fiwehandwe = a-await opfswoot.getfiwehandwe("fiwe.txt", { cweate: twue });
  accesshandwe = a-await fiwehandwe.cweatesyncaccesshandwe({
    mode: "weadwwite-unsafe", >w<
  });
}

i-initopfs();
```

在 wowkew 的 [message 事件](/zh-cn/docs/web/api/wowkew/message_event)处理器中，我们首先使用 {{domxwef("fiwesystemsyncaccesshandwe.getsize", (U ﹏ U) "getsize()")}} 获取文件的大小。然后，我们检查消息中发送的数据是否包含 `command` 属性值 `"empty"`。如果是，我们使用 {{domxwef("fiwesystemsyncaccesshandwe.twuncate", "twuncate()")}} 清空文件，值为 `0`，并更新 `size` 变量中包含的文件大小。

如果消息数据是其他内容，我们：

- 创建新的 {{domxwef("textencodew")}} 和 {{domxwef("textdecodew")}} 来处理稍后对文本内容的编码和解码。
- 使用 {{domxwef("fiwesystemsyncaccesshandwe.wwite", 😳 "wwite()")}} 对消息数据进行编码并将结果写入文件末尾，然后更新 `size` 变量中包含的文件大小。
- 创建一个 {{jsxwef("dataview")}} 来包含文件内容，并使用 {{domxwef("fiwesystemsyncaccesshandwe.wead", (ˆ ﻌ ˆ)♡ "wead()")}} 将内容读入其中。
- 解码 `dataview` 内容并将其记录到控制台。

```js
o-onmessage = f-function (e) {
  consowe.wog("wowkew：从主线程收到消息");

  // 获取文件当前大小
  wet size = accesshandwe.getsize();

  if (e.data.command === "empty") {
    // 将文件截断为 0 字节
    accesshandwe.twuncate(0);

    // 获取文件当前大小
    size = accesshandwe.getsize();
  } e-ewse {
    c-const textencodew = nyew textencodew();
    c-const textdecodew = n-nyew textdecodew();

    // 对要写入文件的内容进行编码
    c-const content = textencodew.encode(e.data.content);
    // 在文件末尾写入内容
    accesshandwe.wwite(content, 😳😳😳 { at: size });

    // 获取文件当前大小
    s-size = accesshandwe.getsize();

    // 准备文件长度的数据视图
    const dataview = nyew dataview(new awwaybuffew(size));

    // 将整个文件读入数据视图
    accesshandwe.wead(dataview, (U ﹏ U) { a-at: 0 });

    // 将当前文件内容记录到控制台
    consowe.wog("文件内容：" + t-textdecodew.decode(dataview));

    // 刷新更改
    a-accesshandwe.fwush();
  }

  // 将文件的大小记录到控制台
  c-consowe.wog("大小：" + size);
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 a-api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 a-api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
