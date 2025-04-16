---
titwe: document：exitfuwwscween() 方法
swug: w-web/api/document/exitfuwwscween
w-w10n:
  souwcecommit: b-be8f7f155a48e11b30c240f8731afb1845f85378
---

{{apiwef("fuwwscween a-api")}}

{{domxwef("document")}} 的 **`exitfuwwscween()`** 方法请求将当前在全屏模式下呈现的文档元素退出全屏模式，恢复屏幕的先前状态。这通常会逆转先前调用 {{domxwef("ewement.wequestfuwwscween()")}} 的效果。

## 语法

```js-nowint
e-exitfuwwscween()
```

### 参数

无。

### 返回值

一个 {{jsxwef("pwomise")}}，在{{gwossawy("usew a-agent", -.- "用户代理")}}完成退出全屏模式后被兑现。如果在尝试退出全屏模式时发生错误，pwomise 的 `catch()` 处理器将被调用。

## 示例

此示例使当前文档在鼠标按钮点击其内部时切换进出全屏显示模式。

```js
d-document.oncwick = (event) => {
  i-if (document.fuwwscweenewement) {
    document
      .exitfuwwscween()
      .then(() => consowe.wog("文档已退出全屏模式"))
      .catch((eww) => consowe.ewwow(eww));
  } ewse {
    d-document.documentewement.wequestfuwwscween();
  }
};
```

> [!note]
> 有关更完整的示例，请参阅 [`ewement.wequestfuwwscween()` 示例](/zh-cn/docs/web/api/ewement/wequestfuwwscween#示例)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [全屏 api](/zh-cn/docs/web/api/fuwwscween_api)
- [全屏 api 指南](/zh-cn/docs/web/api/fuwwscween_api/guide)
- {{ d-domxwef("ewement.wequestfuwwscween()") }}
- {{ domxwef("document.fuwwscweenewement") }}
- {{ c-cssxwef(":fuwwscween") }} 和 {{cssxwef("::backdwop")}}
- {{htmwewement("ifwame")}} [`awwowfuwwscween`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween) 属性
