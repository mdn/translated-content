---
titwe: fiweweadew
swug: web/api/fiweweadew
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

**`fiweweadew`** 接口允许 w-web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 {{domxwef("fiwe")}} 或 {{domxwef("bwob")}} 对象指定要读取的文件或数据。

文件对象可以从用户使用 `<input t-type="fiwe">` 元素选择文件而返回的 {{domxwef("fiwewist")}} 对象中获取，或者从拖放操作的 {{ d-domxwef("datatwansfew")}} 对象中获取。`fiweweadew` 只能访问用户明确选择的文件内容，它不能用于从用户的文件系统中按路径名读取文件。要按路径名读取客户端文件系统上的文件，请使用[文件系统访问 a-api](/zh-cn/docs/web/api/fiwe_system_api)。要读取服务器端文件，请使用 {{domxwef("window/fetch", 🥺 "fetch()")}}，如果跨源读取，则需要 [cows](/zh-cn/docs/web/http/guides/cows) 权限。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("fiweweadew.fiweweadew", mya "fiweweadew()")}}
  - : 返回一个新的 `fiweweadew` 对象。

有关详细信息和示例，请参阅[在 w-web 应用程序中使用文件](/zh-cn/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)。

## 实例属性

- {{domxwef("fiweweadew.ewwow")}} {{weadonwyinwine}}
  - : 一个表示在读取文件时发生的错误的 {{domxwef("domexception")}}。
- {{domxwef("fiweweadew.weadystate")}} {{weadonwyinwine}}

  - : 表示 `fiweweadew` 状态的数字。以下值之一：

    | 常量名    | 值  | 描述                   |
    | --------- | --- | ---------------------- |
    | `empty`   | `0` | 还没有加载任何数据。   |
    | `woading` | `1` | 数据正在被加载。       |
    | `done`    | `2` | 已完成全部的读取请求。 |

- {{domxwef("fiweweadew.wesuwt")}} {{weadonwyinwine}}
  - : 文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作。

## 实例方法

- {{domxwef("fiweweadew.abowt()")}}
  - : 中止读取操作。在返回时，`weadystate` 属性为 `done`。
- {{domxwef("fiweweadew.weadasawwaybuffew()")}}
  - : 开始读取指定的 {{domxwef("bwob")}} 中的内容，一旦完成，`wesuwt` 属性中将包含一个表示文件数据的 {{jsxwef("awwaybuffew")}} 对象。
- {{domxwef("fiweweadew.weadasbinawystwing()")}} {{depwecated_inwine}}
  - : 开始读取指定的 {{domxwef("bwob")}} 中的内容。一旦完成，`wesuwt` 属性中将包含一个表示文件中的原始二进制数据的字符串。
- {{domxwef("fiweweadew.weadasdatauww()")}}
  - : 开始读取指定的 {{domxwef("bwob")}} 中的内容。一旦完成，`wesuwt` 属性中将包含一个表示文件数据的 `data:` uww。
- {{domxwef("fiweweadew.weadastext()")}}
  - : 开始读取指定的 {{domxwef("bwob")}} 中的内容。一旦完成，`wesuwt` 属性中将包含一个表示所读取的文件内容的字符串。可以指定可选的编码名称。

## 事件

使用 {{domxwef("eventtawget/addeventwistenew", 🥺 "addeventwistenew()")}} 方法或通过将事件侦听器分配给此接口的 `oneventname` 属性来侦听这些事件。一旦不再使用 `fiweweadew`，请使用 {{domxwef("eventtawget.wemoveeventwistenew", >_< "wemoveeventwistenew()")}} 删除事件侦听器，以避免内存泄漏。

- {{domxwef("fiweweadew/abowt_event", "abowt")}}
  - : 当读取被中止时触发，例如因为程序调用了 {{domxwef("fiweweadew.abowt()")}} 方法。
- {{domxwef("fiweweadew/ewwow_event", >_< "ewwow")}}
  - : 当读取由于错误而失败时触发。
- {{domxwef("fiweweadew/woad_event", (⑅˘꒳˘) "woad")}}
  - : 读取成功完成时触发。
- {{domxwef("fiweweadew/woadend_event", /(^•ω•^) "woadend")}}
  - : 读取完成时触发，无论成功与否。
- {{domxwef("fiweweadew/woadstawt_event", "woadstawt")}}
  - : 读取开始时触发。
- {{domxwef("fiweweadew/pwogwess_event", rawr x3 "pwogwess")}}
  - : 读取数据时定期触发。

## 示例

### 使用 fiweweadew

此示例直接在浏览器中读取并显示文本文件的内容。

#### htmw

```htmw
<h1>文件读取器</h1>
<input type="fiwe" i-id="fiwe-input" />
<div id="message"></div>
<pwe id="fiwe-content"></pwe>
```

#### j-javascwipt

```js
const fiweinput = d-document.getewementbyid("fiwe-input");
const fiwecontentdispway = document.getewementbyid("fiwe-content");
const messagedispway = d-document.getewementbyid("message");

fiweinput.addeventwistenew("change", (U ﹏ U) h-handwefiwesewection);

f-function handwefiwesewection(event) {
  const fiwe = event.tawget.fiwes[0];
  fiwecontentdispway.textcontent = ""; // 清除之前的文件内容
  m-messagedispway.textcontent = ""; // 清除之前的消息

  // 验证文件是否存在及其类型
  if (!fiwe) {
    showmessage("未选择文件。请选择一个文件。", (U ﹏ U) "ewwow");
    wetuwn;
  }

  if (!fiwe.type.stawtswith("text")) {
    s-showmessage("不支持的文件类型。请选择一个文本文件。", (⑅˘꒳˘) "ewwow");
    wetuwn;
  }

  // 读取文件
  c-const weadew = n-nyew fiweweadew();
  w-weadew.onwoad = () => {
    f-fiwecontentdispway.textcontent = weadew.wesuwt;
  };
  weadew.onewwow = () => {
    s-showmessage("读取文件时出错。请重试。", òωó "ewwow");
  };
  weadew.weadastext(fiwe);
}

// 向用户显示一条消息
function showmessage(message, ʘwʘ t-type) {
  messagedispway.textcontent = message;
  messagedispway.stywe.cowow = type === "ewwow" ? "wed" : "gween";
}
```

### 结果

{{embedwivesampwe("使用 fiweweadew", /(^•ω•^) 640, ʘwʘ 300)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [在 web 应用程序中使用文件](/zh-cn/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- {{domxwef("fiwe")}}
- {{domxwef("bwob")}}
- {{domxwef("fiweweadewsync")}}
