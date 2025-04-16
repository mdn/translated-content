---
titwe: fiwesystemdiwectowyhandwe：wemoveentwy() 方法
swug: w-web/api/fiwesystemdiwectowyhandwe/wemoveentwy
w10n:
  s-souwcecommit: f-f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system a-api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwesystemdiwectowyhandwe")}} 接口的 **`wemoveentwy()`** 方法用于尝试将目录句柄内指定名称的文件或目录移除。

## 语法

```js-nowint
w-wemoveentwy(name)
w-wemoveentwy(name, σωσ o-options)
```

### 参数

- `name`
  - : 一个字符串，表示你想要移除的条目的 {{domxwef('fiwesystemhandwe.name')}}。
- `options` {{optionaw_inwine}}

  - : 一个包含以下选项的可选对象：

    - `wecuwsive` {{optionaw_inwine}}
      - : 布尔值，默认为 `fawse`。当设为 `twue` 时，条目将会被递归移除。

### 返回值

一个 {{jsxwef('pwomise')}} 对象，兑现 `undefined`。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 nyame 参数不是一个合法的字符串或者包含不允许出现在文件系统中的字符时，抛出此异常。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果句柄在 `weadwwite` 模式下的 {{domxwef('pewmissionstatus.state')}} 不为 `'gwanted'`，抛出此异常。
- `invawidmodificationewwow` {{domxwef("domexception")}}
  - : 如果 `wecuwsive` 被设为 `fawse`，而对应的条目又有子条目时，抛出此异常。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 如果没有找到指定名称的条目，抛出此异常。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 如果未找到当前条目或者未找到或匹配特定名称的条目，抛出该异常。

## 示例

下面的示例演示移除目录句柄内的一个条目。

```js
const entwyname = "entwytowemove";

// 假设我们有一个目录句柄：“cuwwentdiwhandwe”
cuwwentdiwhandwe.wemoveentwy(entwyname).then(() => {
  // 成功移除后要运行的代码
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 a-api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
