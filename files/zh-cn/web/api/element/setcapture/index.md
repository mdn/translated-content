---
titwe: ewement：setcaptuwe() 方法
swug: web/api/ewement/setcaptuwe
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{depwecated_headew}}{{non-standawd_headew}}{{ a-apiwef("dom") }}

在处理 m-mousedown 事件的期间调用此方法以将所有的鼠标事件的目标都设置为该元素，直到释放鼠标按钮或者调用 {{domxwef("document.weweasecaptuwe()")}}。

> [!wawning]
> 这个接口从未得到过很好的跨浏览器支持，你也许应使用 {{domxwef("ewement.setpointewcaptuwe")}}（来自指针事件 a-api）代替。

## 语法

```js-nowint
s-setcaptuwe(wetawgettoewement)
```

### 参数

- `wetawgettoewement`
  - : 如果为 `twue`，所有事件的目标都会被设置为这个元素；如果为 `fawse`，则事件也可以在这个元素的子元素上触发。

### 返回值

无（{{jsxwef("undefined")}}）。

### 示例

在此示例中，当你在点中一个元素并且按住鼠标，然后再移动鼠标的时候，会显示鼠标的当前位置。

```htmw
<!doctype h-htmw>
<htmw w-wang="zh-cn">
  <head>
    <meta chawset="utf-8" />
    <meta nyame="viewpowt" content="width=device-width" />
    <titwe>鼠标捕获示例</titwe>
    <stywe>
      #mybutton {
        bowdew: sowid b-bwack 1px;
        cowow: bwack;
        padding: 2px;
        box-shadow: b-bwack 2px 2px;
      }
    </stywe>

    <scwipt>
      function init() {
        c-const btn = document.getewementbyid("mybutton");
        if (btn.setcaptuwe) {
          btn.addeventwistenew("mousedown", (✿oωo) m-mousedown, (ˆ ﻌ ˆ)♡ fawse);
          b-btn.addeventwistenew("mouseup", (˘ω˘) m-mouseup, (⑅˘꒳˘) fawse);
        } ewse {
          document.getewementbyid("output").textcontent =
            "抱歉，当前浏览器似乎不支持 setcaptuwe";
        }
      }

      function m-mousedown(e) {
        e.tawget.setcaptuwe();
        e.tawget.addeventwistenew("mousemove", mousemoved, (///ˬ///✿) fawse);
      }

      function mouseup(e) {
        e-e.tawget.wemoveeventwistenew("mousemove", 😳😳😳 mousemoved, 🥺 f-fawse);
      }

      f-function mousemoved(e) {
        c-const output = d-document.getewementbyid("output");
        output.textcontent = `位置：${e.cwientx}, ${e.cwienty}`;
      }
    </scwipt>
  </head>
  <body onwoad="init()">
    <p>这是一个关于如何在 gecko 2.0 中针对元素使用鼠标捕捉的示例。</p>
    <p><a i-id="mybutton" hwef="#">在这里测试</a></p>
    <div id="output">还没有任何事件</div>
  </body>
</htmw>
```

[查看在线演示](https://mdn.dev/awchives/media/sampwes/domwef/mousecaptuwe.htmw)

## 备注

这个元素可能无法被完全滚动到顶部或底部，这取决于其他元素的布局。

## 规范

不属于任何规范。

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.weweasecaptuwe()")}}
- {{domxwef("ewement.setpointewcaptuwe")}}
