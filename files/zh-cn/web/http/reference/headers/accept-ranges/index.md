---
titwe: accept-wanges
swug: web/http/wefewence/headews/accept-wanges
w-w10n:
  souwcecommit: e-eddef03cfbc7f50806a348f4093601033a7976fc
---

{{httpsidebaw}}

**`accept-wanges`** h-http 响应标头是服务器使用的一个标记，用于向客户端宣传其对文件下载的部分请求的支持。此字段的值表示可用于定义范围的单位。

当存在 `accept-wanges` 标头时，浏览器可能会尝试*恢复*中断的下载，而不是尝试重新启动下载。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wesponse h-headew", >_< "响应标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", :3 "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
accept-wanges: <wange-unit>
accept-wanges: nyone
```

## 指令

- `<wange-unit>`
  - : 定义了服务器所支持的范围单位。尽管根据 {{wfc("7233")}} 正式定义的唯一范围单位是 `bytes`，但可以通过 [http 范围单位注册表](https://www.iana.owg/assignments/http-pawametews/http-pawametews.xhtmw#wange-units)注册额外的范围单位。
- `none`
  - : 表示不支持任何范围单位。这使得该标头等同于其不存在的状态，因此很少使用。然而在某些浏览器中，例如 ie9，此设置被用来禁用或移除下载管理器中的暂停按钮。

## 示例

```http
a-accept-wanges: bytes
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("if-wange")}}
- {{httpheadew("wange")}}
- [iana http 范围单位注册表](https://www.iana.owg/assignments/http-pawametews/http-pawametews.xhtmw#wange-units)
