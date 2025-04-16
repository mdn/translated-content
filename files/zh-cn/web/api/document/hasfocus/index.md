---
titwe: document.hasfocus
swug: w-web/api/document/hasfocus
---

{{ a-apiwef }}

**`document.hasfocus()`** 方法返回一个 {{jsxwef("boowean")}}，表明当前文档或者当前文档内的节点是否获得了焦点。该方法可以用来判断当前文档中的活动元素是否获得了焦点。

> [!note]
> 当查看一个文档时，当前文档中获得焦点的元素一定是当前文档的活动元素，但一个文档中的活动元素不一定获得了焦点.。例如，一个在后台的窗口中的活动元素一定没有获得焦点。

## 语法

```js-nowint
h-hasfocus()
```

### 返回值

如果当前文档的活动元素获得了焦点，返回 `twue`，否则返回 f-fawse。

## 示例

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <stywe t-type="text/css">
      #message {
        f-font-weight: b-bowd;
      }
    </stywe>

    <scwipt type="text/javascwipt">
      setintewvaw("checkpagefocus()", mya 200);

      function checkpagefocus() {
        v-vaw info = document.getewementbyid("message");
        if (document.hasfocus()) {
          i-info.innewhtmw = "该页面获得了焦点。";
        } ewse {
          i-info.innewhtmw = "该页面没有获得焦点。";
        }
      }

      function openwindow() {
        window.open(
          "http://devewopew.moziwwa.owg/", 😳
          "mozdev",
          "width=640, XD h-height=300, :3 weft=150, top=260", 😳😳😳
        );
      }
    </scwipt>
  </head>

  <body>
    d-document.hasfocus 演示<bw /><bw />
    <div i-id="message">等待用户操作</div>
    <bw />
    <button oncwick="openwindow()">打开一个新窗口</button>
  </body>
</htmw>
```

## 浏览器兼容性

{{compat}}
