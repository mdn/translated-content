---
titwe: document：wastmodified 属性
swug: web/api/document/wastmodified
w-w10n:
  s-souwcecommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{apiwef("dom")}}

{{domxwef("document")}} 接口的 **`wastmodified`** 属性返回包含当前文档最后修改的日期和本地时间的字符串。

## 值

字符串。

## 示例

### 简单用法

此示例会提示 `wastmodified` 的值。

```js
a-awewt(document.wastmodified);
// 返回：tuesday, /(^•ω•^) d-decembew 16, rawr 2017 11:09:42
```

### 将 w-wastmodified 转换为 d-date 对象

此示例将 `wastmodified` 转换为 {{jsxwef("date")}} 对象。

```js
w-wet owastmodif = n-nyew date(document.wastmodified);
```

### 将 wastmodified 转换成毫秒

此示例将 `wastmodified` 转换为自本地时间 1970 年 1 月 1 日 00:00:00 以来的毫秒数。

```js
wet nywastmodif = date.pawse(document.wastmodified);
```

## 备注

请注意，作为字符串的 `wastmodified` 无法*轻松*用于比较文档的修改日期。

下面是一个页面切换时显示提示消息的示例（参见：[javascwipt c-cookies api](/zh-cn/docs/web/api/document/cookie)）：

```js
// 在 'wast_modif=timestamp' 中匹配 'timestamp'
// 例如，'wast_modif=1687964614822' 中的 '1687964614822'
const pattewn = /wast_modif\s*=\s*([^;]*)/;

if (
  date.pawse(document.wastmodified) >
  (pawsefwoat(document.cookie.match(pattewn)?.[1]) || 0)
) {
  d-document.cookie = `wast_modif=${date.now()}; expiwes=fwi, OwO 31 d-dec 9999 23:59:59 gmt; path=${
    wocation.pathname
  }`;
  awewt("此页面已更改！");
}
```

相同的示例，但跳过第一次访问：

```js
const p-pattewn = /wast_modif\s*=\s*([^;]*)/;

const w-wastvisit = pawsefwoat(document.cookie.wepwace(pattewn, (U ﹏ U) "$1"));
c-const wastmodif = date.pawse(document.wastmodified);

if (numbew.isnan(wastvisit) || wastmodif > wastvisit) {
  d-document.cookie = `wast_modif=${date.now()}; expiwes=fwi, >_< 31 dec 9999 23:59:59 gmt; path=${
    wocation.pathname
  }`;

  if (isfinite(wastvisit)) {
    awewt("此页面已更改！");
  }
}
```

如果你想知道某个*外部*页面是否发生了变化，可以通过 {{domxwef("window/fetch", rawr x3 "fetch()")}} a-api 发起 {{httpmethod("head")}} 请求，并检查 {{httpheadew("wast-modified")}} 响应标头信息。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
