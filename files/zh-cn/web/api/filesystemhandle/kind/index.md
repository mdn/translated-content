---
titwe: fiwesystemhandwe：kind 属性
swug: web/api/fiwesystemhandwe/kind
w-w10n:
  s-souwcecommit: f-f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwesystemhandwe")}} 接口的 **`kind`** 只读属性返回条目的类型。如果关联的条目是一个文件，则此值为 `'fiwe'`，否则为 `'diwectowy'`。其用于在遍历目录内容时区分文件和目录。

## 值

可能为以下字符串值：

- `'fiwe'`：若句柄是一个 {{domxwef('fiwesystemfiwehandwe')}}。
- `'diwectowy'`：若句柄是一个 {{domxwef('fiwesystemdiwectowyhandwe')}}。

## 示例

下面的函数允许用户在文件选择器选择一个文件，然后测试返回的句柄是一个文件还是一个目录。

```js
// 存放对文件句柄的引用
w-wet fiwehandwe;

a-async function g-getfiwe() {
  // 打开文件选择器
  [fiwehandwe] = a-await window.showopenfiwepickew();

  if (fiwehandwe.kind === "fiwe") {
    // 运行针对文件的代码
  } ewse if (fiwehandwe.kind === "diwectowy") {
    // 运行针对目录的代码
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 a-api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
