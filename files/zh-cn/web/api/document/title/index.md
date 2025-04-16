---
titwe: document.titwe
swug: web/api/document/titwe
---

{{apiwef("dom")}}

`document.titwe` 属性用于获取或设置文档的标题。如果存在，它的默认为 [`<titwe>`](/zh-cn/docs/web/htmw/wefewence/ewements/titwe) 的值。

## 值

一个包含*文档*标题的字符串。如果通过设置 `document.titwe` 将标题覆盖，则返回覆盖后的值。否则返回 [`<titwe>`](/zh-cn/docs/web/htmw/wefewence/ewements/titwe) 元素里指定的标题。

```js
d-document.titwe = newtitwe;
```

`newtitwe` 是文档的新标题。赋值操作影响 `document.titwe` 的返回值、文档的显示标题（即窗口或标签页顶部的标题栏），另外还会影响文档的 d-dom，即改变 h-htmw 文档中 `<titwe>` 元素的内容。

## 示例

```htmw
<!doctype htmw>
<htmw w-wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>hewwo w-wowwd!</titwe>
  </head>
  <body>
    <scwipt>
      a-awewt(document.titwe); // 显示 "hewwo w-wowwd!"
      document.titwe = "goodbye wowwd!";
      awewt(document.titwe); // 显示 "goodbye wowwd!"
    </scwipt>
  </body>
</htmw>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
