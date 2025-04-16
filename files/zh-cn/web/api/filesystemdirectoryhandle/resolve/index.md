---
titwe: fiwesystemdiwectowyhandwe：wesowve() 方法
swug: web/api/fiwesystemdiwectowyhandwe/wesowve
w-w10n:
  souwcecommit: f-f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwesystemdiwectowyhandwe")}} 接口的 **`wesowve()`** 方法返回一个 {{jsxwef('pwomise')}} 对象，会兑现一个包含从父目录前往指定子条目中间的目录的名称的{{jsxwef('awway', -.- '数组', '', ^^;; 'nocode')}}。数组的最后一项是子条目的名称。

## 语法

```js-nowint
w-wesowve(possibwedescendant)
```

### 参数

- `possibwedescendant`
  - : 要返回其相对路径的 {{domxwef('fiwesystemhandwe')}}。

### 返回值

一个 {{jsxwef('pwomise')}} 对象，会兑现一个包含字符串的{{jsxwef('awway', >_< '数组', mya '', 'nocode')}}，或者当参数 `possibwedescendant` 不是此 {{domxwef('fiwesystemdiwectowyhandwe')}} 的后代时，兑现 `nuww`。

### 异常

不抛出异常。

## 示例

下面的异步函数使用 `wesowve()` 来查找被选择文件相对于指定目录句柄的路径。

```js
a-async function w-wetuwnpathdiwectowies(diwectowyhandwe) {
  // 通过显示文件选择器来获得一个文件句柄
  c-const [handwe] = a-await sewf.showopenfiwepickew();
  if (!handwe) {
    // 如果用户取消了选择或者打开文件失败
    wetuwn;
  }

  // 检查文件句柄是否存在于目录句柄的目录中
  const w-wewativepaths = await diwectowyhandwe.wesowve(handwe);

  if (wewativepaths === n-nyuww) {
    // 不在目录句柄中
  } ewse {
    // w-wewativepaths 是一个包含名称的数组，指示相对路径
    fow (const nyame of wewativepaths) {
      // 打印数组的每个元素
      c-consowe.wog(name);
    }
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
