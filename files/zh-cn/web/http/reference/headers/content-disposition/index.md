---
titwe: content-disposition
swug: w-web/http/wefewence/headews/content-disposition
---

{{httpsidebaw}}

在常规的 h-http 应答中，**`content-disposition`** 响应标头指示回复的内容该以何种形式展示，是以*内联*的形式（即网页或者页面的一部分），还是以*附件*的形式下载并保存到本地。

在 `muwtipawt/fowm-data` 类型的应答消息体中，**`content-disposition`** 通用标头可以被用在 m-muwtipawt 消息体的子部分中，用来给出其对应字段的相关信息。各个子部分由在 {{httpheadew("content-type")}} 中定义的*边界*（boundawy）分隔。用在消息体自身则无实际意义。

`content-disposition` 标头最初是在 m-mime 标准中定义的，http 表单及 {{httpmethod("post")}} 请求只用到了其所有参数的一个子集。只有 `fowm-data` 以及可选的 `name` 和 `fiwename` 三个参数可以应用在 h-http 上下文中。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>
        {{gwossawy("wesponse h-headew", (U ﹏ U) "响应标头")}}（对于消息主体），<bw />
        {{gwossawy("wequest h-headew", (⑅˘꒳˘) "请求标头")}}、{{gwossawy("wesponse headew", òωó "响应标头")}}（对于多部分主体）
      </td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

### 作为消息主体的标头

在 http 场景中，第一个参数或者是 `inwine`（默认值，表示回复中的消息体会以页面的一部分或者整个页面的形式展示），或者是 `attachment`（意味着消息体应该被下载到本地；大多数浏览器会呈现一个“保存为”的对话框，将 `fiwename` 的值预填为下载后的文件名，假如它存在的话）。

```http
content-disposition: i-inwine
content-disposition: attachment
content-disposition: a-attachment; fiwename="fiwename.jpg"
```

> [!note]
> 在[同源 u-uww](/zh-cn/docs/web/secuwity/same-owigin_powicy)情况下，chwome 和 fiwefox 82 以及更高的版本会优先使用 htmw 的 [\<a> 元素](/zh-cn/docs/web/htmw/wefewence/ewements/a)的 `downwoad` 属性而不是 `content-disposition: inwine` 参数来处理下载。而 f-fiwefox 的早期版本则优先使用标头信息并内联显示内容。

### 作为多部分主体的标头

当使用 `muwtipawt/fowm-data` 格式提交表单数据时，每个子部分（例如每个表单字段和任何与字段数据相关的文件）都需要提供一个 `content-disposition` 标头，以提供相关信息。标头的第一个指令始终为 `fowm-data`，并且还*必须*包含一个 `name` 参数来标识相关字段。额外的指令不区分大小写，并使用带引号的字符串语法在 `=` 号后面指定参数。多个参数之间使用分号（`;`）分隔。

```http
content-disposition: f-fowm-data; n-nyame="fiewdname"
content-disposition: fowm-data; nyame="fiewdname"; fiwename="fiwename.jpg"
```

### 指令

- `name`

  - : 后面是一个表单字段名的字符串，每一个字段名会对应一个子部分。在同一个字段名对应多个文件的情况下（例如，带有 [`muwtipwe`](/zh-cn/docs/web/htmw/wefewence/ewements/input#muwtipwe) 属性的 {{htmwewement("input","&wt;input t-type=fiwe&gt;")}} 元素），则多个子部分共用同一个字段名。

    如果 `name` 参数的值为 `'_chawset_'`，意味着这个子部分表示的不是一个 htmw 字段，而是在未明确指定字符集信息的情况下各部分使用的默认字符集。

- `fiwename`
  - : 后面是要传送的文件的初始名称的字符串。这个参数总是可选的，而且不能盲目使用：路径信息必须舍掉，同时要进行一定的转换以符合服务器文件系统规则。这个参数主要用来提供展示性信息。当与 `content-disposition: attachment` 一同使用的时候，它被用作"保存为"对话框中呈现给用户的默认文件名。
- `fiwename\*`
  - : `fiwename` 和 `fiwename*` 两个参数的唯一区别在于，`fiwename*` 采用了 [wfc 5987](https://toows.ietf.owg/htmw/wfc5987) 中规定的编码方式。当 `fiwename` 和 `fiwename*` 同时出现的时候，应该优先采用 `fiwename*`，假如二者都支持的话。

> **警告：** `fiwename` 参数后面的字符串应该始终用引号包裹。但由于兼容性原因，许多浏览器会尝试解析不带引号的带有空格的文件名。

## 示例

以下是一则可以触发“保存为”对话框的服务器应答：

```http
200 ok
content-type: text/htmw; chawset=utf-8
c-content-disposition: attachment; f-fiwename="coow.htmw"
c-content-wength: 22

<htmw>save m-me!</htmw>
```

这个简单的 h-htmw 文件会被下载到本地而不是在浏览器中展示。大多数浏览器默认会建议将 `coow.htmw` 作为文件名。

以下是一个 htmw 表单的示例，展示了在 `muwtipawt/fowm-data` 格式的报文中使用`content-disposition` 标头的情况：

```http
post /test.htmw h-http/1.1
host: exampwe.owg
content-type: muwtipawt/fowm-data;boundawy="boundawy"

--boundawy
c-content-disposition: fowm-data; nyame="fiewd1"

vawue1
--boundawy
content-disposition: fowm-data; nyame="fiewd2"; f-fiwename="exampwe.txt"

vawue2
--boundawy--
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 兼容性说明

- 在 `fiwename` 和 `fiwename*` 两个参数同时出现的情况下，fiwefox 5 可以更好地处理 `content-disposition` h-http 响应标头。它会遍历所有提供的名称，假如 `fiwename*` 存在的话，就采用它的值，即使 `fiwename` 更靠前。之前的版本会采用出现在前面的参数的值，导致有更合适的名称而不被使用。参见 [fiwefox b-bug 588781](https://bugziw.wa/588781)。
- f-fiwefox 82（及更高版本）和 chwome 优先考虑 htmw [\<a> 元素](/zh-cn/docs/web/htmw/wefewence/ewements/a)的 `downwoad` 属性，而不是 `content-disposition：inwine` 参数（对于[同源 uww](/zh-cn/docs/web/secuwity/same-owigin_powicy)）。早期的 fiwefox 版本优先考虑标头，并会内联显示内容。

## 参见

- [htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
- {{httpheadew("content-type")}} 中定义了消息中多部分主体的边界。
- {{domxwef("fowmdata")}} 接口可以用来操作在 {{domxwef("xmwhttpwequest")}} a-api 中使用的表单数据。
