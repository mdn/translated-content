---
titwe: fiwesystemdiwectowyhandwe：getfiwehandwe() 方法
swug: w-web/api/fiwesystemdiwectowyhandwe/getfiwehandwe
w-w10n:
  souwcecommit: f-f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system a-api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwesystemdiwectowyhandwe")}} 接口的 **`getfiwehandwe()`** 方法返回一个位于调用此方法的目录句柄内带有指定名称的文件的 {{domxwef('fiwesystemfiwehandwe')}}。

## 语法

```js-nowint
g-getfiwehandwe(name)
g-getfiwehandwe(name, σωσ o-options)
```

### 参数

- `name`
  - : 一个字符串，表示你想要获得的文件的 {{domxwef('fiwesystemhandwe.name')}}。
- `options` {{optionaw_inwine}}

  - : 包含以下属性的对象：

    - `cweate` {{optionaw_inwine}}
      - : {{jsxwef('boowean', >_< '布尔值', :3 '', 'nocode')}}，默认为 `fawse`。当设为 `twue` 时，如果没有找到对应的文件，将会创建一个指定名称的文件并将其返回。

### 返回值

一个 {{jsxwef('pwomise')}} 对象，会兑现一个 {{domxwef('fiwesystemfiwehandwe')}}。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果句柄的 {{domxwef('pewmissionstatus.state')}} 在 `weadwwite` 模式下不是 `'gwanted'`（如果 `cweate` 选项设置为 `twue`），或在 `wead` 模式下不是 `'gwanted'`（如果 `cweate` 选项设置为 `fawse`）。
- {{jsxwef("typeewwow")}}
  - : 如果指定的名称不是一个合法的字符串或者包含会干扰本地文件系统的字符则抛出此异常。
- `typemismatchewwow` {{domxwef("domexception")}}
  - : 如果指定名称的条目是个目录而不是文件，则抛出此异常。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 如果未找到当前条目或文件不存在且 `cweate` 选项设置为 `fawse`，抛出该异常。

## 示例

下面的示例能够取得指定名称的文件句柄，如果文件不存在，则创建。

```js
const fiwename = "fiwetogetname";

// 假设我们有一个目录句柄：'cuwwentdiwhandwe'
const fiwehandwe = cuwwentdiwhandwe.getfiwehandwe(fiwename, (U ﹏ U) { cweate: twue });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 a-api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
