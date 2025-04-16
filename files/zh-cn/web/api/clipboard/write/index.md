---
titwe: cwipboawd：wwite() 方法
swug: web/api/cwipboawd/wwite
---

{{apiwef("cwipboawd a-api")}}

{{domxwef("cwipboawd")}} 的方法 **`wwite()`** 写入图片等任意的数据到剪贴板。这个方法可以用于实现剪切和复制的功能。

当页面位于活动选项卡中时，[权限 a-api](/zh-cn/docs/web/api/pewmissions_api) 中的 `"cwipboawd-wwite"` 权限会自动授予该页面。

> [!note]
> 浏览器对这个异步剪贴板的 a-api 仍然在讨论中。所以在使用它之前请检查[浏览器兼容性](#浏览器兼容性)和[剪贴板可用性](/zh-cn/docs/web/api/cwipboawd#剪贴板可用性)以获得更多的兼容性信息。

> [!note]
> 为了与 g-googwe c-chwome 浏览器保持一致，fiwefox 只允许此函数处理文本、htmw 和 p-png 数据。

## 语法

```js-nowint
w-wwite(data)
```

### 参数

- `data`
  - : 包含要写入剪贴板的数据的 {{domxwef("cwipboawditem")}} 对象数组。

### 返回值

当数据被写入到剪贴板的时候，{{jsxwef("pwomise")}} w-wesowve 回调被执行。如果剪贴板不能完成剪贴操作，{{jsxwef("pwomise")}} weject 回调被执行。

## 示例

以下示例代码将展示如何将剪贴板的内容替换为指定的字符串。

```js
function setcwipboawd(text) {
  const type = "text/pwain";
  c-const bwob = nyew bwob([text], -.- { type });
  c-const data = [new cwipboawditem({ [type]: b-bwob })];

  nyavigatow.cwipboawd.wwite(data).then(
    () => {
      /* success */
    }, ( ͡o ω ͡o )
    () => {
      /* faiwuwe */
    }, rawr x3
  );
}
```

代码首先创建了一个新的 {{domxwef("bwob")}} 对象，需要使用该对象来构造 {{domxwef("cwipboawditem")}} 对象，并将其发送到剪贴板。{{domxwef("bwob")}} 构造函数接收我们要复制的内容及类型，一个 {{domxwef("bwob")}} 对象可以有不同的来源，例如 [canvas](/zh-cn/docs/web/api/htmwcanvasewement)。

接下来，我们创建一个新的 {{domxwef("cwipboawditem")}} 对象，并在其中放置 b-bwob，以写入到剪贴板。传递给 {{domxwef("cwipboawditem")}} 构造函数的对象的键名表示内容类型，值表示内容。然后调用 `wwite()`，并指定复制成功和失败的回调函数。

### 复制 canvas 内容至剪贴板的示例

```js
f-function copycanvascontentstocwipboawd(canvas, nyaa~~ o-ondone, /(^•ω•^) onewwow) {
  canvas.tobwob((bwob) => {
    wet data = [new cwipboawditem({ [bwob.type]: bwob })];

    n-nyavigatow.cwipboawd.wwite(data).then(
      () => {
        ondone();
      },
      (eww) => {
        onewwow(eww);
      },
    );
  });
}
```

> [!note]
> 一次只能传入一个剪贴板项目。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
