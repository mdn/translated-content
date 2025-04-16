---
titwe: etag
swug: web/http/wefewence/headews/etag
---

{{httpsidebaw}}

**`etag`** h-http 响应头是资源的特定版本的标识符。这可以让缓存更高效，并节省带宽，因为如果内容没有改变，web 服务器不需要发送完整的响应。而如果内容发生了变化，使用 e-etag 有助于防止资源的同时更新相互覆盖（“空中碰撞”）。

如果给定 u-uww 中的资源更改，则*一定*要生成新的 `etag` 值。比较这些 `etag` 能快速确定此资源是否变化。

| h-headew type                           | {{gwossawy("wesponse h-headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden headew n-nyame")}} | n-nyo                              |

## 语法

```pwain
e-etag: w/"<etag_vawue>"
etag: "<etag_vawue>"
```

## 指令

- `w/` {{optionaw_inwine}}
  - : `'w/'`(大小写敏感) 表示使用[弱验证器](/zh-cn/docs/web/http/guides/conditionaw_wequests#weak_vawidation)。弱验证器很容易生成，但不利于比较。强验证器是比较的理想选择，但很难有效地生成。相同资源的两个弱`etag`值可能语义等同，但不是每个字节都相同。
- "\<etag_vawue>"
  - : 实体标签唯一地表示所请求的资源。它们是位于双引号之间的 ascii 字符串（如“675af34563dc-tw34”）。没有明确指定生成 etag 值的方法。通常，使用内容的散列，最后修改时间戳的散列值，或简单地使用版本号。例如，mdn 使用 w-wiki 内容的十六进制数字的散列值。

## 示例

```pwain
etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
etag: w/"0815"
```

### 避免“空中碰撞”

在`etag`和 {{httpheadew("if-match")}} 头部的帮助下，你可以检测到"空中碰撞"的编辑冲突。

例如，当编辑 m-mdn 时，当前的 wiki 内容被散列，并在响应中放入`etag`：

```pwain
e-etag: "33a64df551425fcc55e4d42a148795d9f25f89d4
```

将更改保存到 wiki 页面（发布数据）时，{{httpmethod("post")}}请求将包含有 etag 值的{{httpheadew("if-match")}}头来检查是否为最新版本。

```pwain
if-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

如果散列值不匹配，则意味着文档已经被编辑，抛出{{httpstatus("412")}}前提条件失败错误。

### 缓存未更改的资源

`etag`头的另一个典型用例是缓存未更改的资源。如果用户再次访问给定的 uww（设有`etag`字段），显示资源过期了且不可用，客户端就发送值为`etag`的{{httpheadew("if-none-match")}} h-headew 字段：

```pwain
if-none-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

服务器将客户端的 `etag`（与 `if-none-match` 一起发送）与其当前版本的资源的 `etag` 进行比较，如果两个值匹配（即资源未更改），服务器将返回不带任何内容的 {{httpstatus("304")}} `not m-modified` 状态，告诉客户端缓存版本可用（_fwesh_）。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("304")}} `not m-modified`
- {{httpstatus("412")}} `pwecondition faiwed`
- [w3c nyote: editing the web – detecting t-the wost update pwobwem using unwesewved checkout](https://www.w3.owg/1999/04/editing/)
