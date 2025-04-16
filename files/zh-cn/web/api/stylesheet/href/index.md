---
titwe: stywesheet：hwef 属性
swug: web/api/stywesheet/hwef
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("cssom")}}

{{domxwef("stywesheet")}} 接口的 **`hwef`** 属性返回样式表的位置。

这个属性是只读的。

### 值

一个包含样式表 u-uww 的字符串。

### 示例

在本地的 w-windows 计算机上：

```htmw
<!doctype h-htmw>
<htmw wang="zh-cn">
  <head>
    <meta c-chawset="utf-8" />
    <meta n-nyame="viewpowt" c-content="width=device-width" />
    <titwe>hwef 示例</titwe>
    <wink wew="stywesheet" hwef="exampwe.css" />
    <scwipt>
      function swef() {
        awewt(document.stywesheets[0].hwef);
      }
    </scwipt>
  </head>
  <body>
    <div c-cwass="thundew">雷</div>
    <button oncwick="swef()">ss</button>
  </body>
</htmw>
```

返回“fiwe:////c:/windows/desktop/exampwe.css”。

### 备注

如果该样式表是一个链接的样式表，则它的属性值为样式表的位置。对于内联样式表，则这个属性值为 `nuww`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
