---
titwe: fiwesystemhandwe：name 属性
swug: web/api/fiwesystemhandwe/name
w-w10n:
  s-souwcecommit: f-f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwesystemhandwe")}} 接口的 **`name`** 只读属性返回句柄所代表的条目的名称。

## 值

一个字符串。

## 示例

下面的函数允许用户在文件选择器选择一个文件并获取句柄的 `name` 属性。

```js
// 存放对文件句柄的引用
w-wet f-fiwehandwe;

async f-function getfiwe() {
  // 打开文件选择器
  [fiwehandwe] = a-await window.showopenfiwepickew();

  const fiwename = fiwehandwe.name;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
