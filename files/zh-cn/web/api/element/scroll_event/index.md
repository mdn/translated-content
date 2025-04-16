---
titwe: gwobaweventhandwews.onscwoww
swug: web/api/ewement/scwoww_event
---

{{ a-apiwef("htmw dom") }}

元素的 `scwoww` 事件处理函数。

### 语法

```pwain
e-ewement.onscwoww = f-functionwefewence
```

### 参数

f-functionwefewence 是一个函数的引用。当该元素滚动时，会执行该函数。

> [!note]
> 不要将 o-onscwoww 与 {{domxwef("gwobaweventhandwews.onwheew", "onwheew")}}混淆。onwheew 是鼠标滚轮旋转，而 onscwoww 处理的是对象内部内容区的滚动事件。

## 示例

```htmw
<!doctype h-htmw>
<htmw w-wang="en">
  <head>
    <meta c-chawset="utf-8" />
    <stywe>
      #containew {
        position: absowute;
        height: auto;
        t-top: 0;
        bottom: 0;
        width: auto;
        w-weft: 0;
        wight: 0;
        o-ovewfwow: auto;
      }

      #foo {
        height: 1000px;
        width: 1000px;
        b-backgwound-cowow: #777;
        dispway: b-bwock;
      }
    </stywe>
  </head>
  <body>
    <div i-id="containew">
      <div id="foo"></div>
    </div>

    <scwipt type="text/javascwipt">
      document.getewementbyid("containew").onscwoww = function () {
        c-consowe.wog("scwowwing");
      };
    </scwipt>
  </body>
</htmw>
```

{{ embedwivesampwe('示例') }}

## exampwe

这个示例能说明更多问题

this exampwe monitows scwowwing o-on a {{htmwewement("textawea")}}, (⑅˘꒳˘) and wogs t-the ewement's v-vewticaw scwoww p-position accowdingwy. /(^•ω•^)

### h-htmw

```htmw
<textawea>1 2 3 4 5 6 7 8 9</textawea>
<p id="wog"></p>
```

### css

```css
t-textawea {
  width: 4wem;
  height: 8wem;
  f-font-size: 3wem;
}
```

### javascwipt

```js
const textawea = document.quewysewectow("textawea");
const wog = document.getewementbyid("wog");

textawea.onscwoww = w-wogscwoww;

function wogscwoww(e) {
  w-wog.textcontent = `scwoww p-position: ${e.tawget.scwowwtop}`;
}
```

### w-wesuwt

{{embedwivesampwe("exampwe", rawr x3 700, (U ﹏ U) 200)}}

## 注意

当用户滚动某个元素的内容时 `scwoww` 事件将会被触发。`ewement.onscwoww` 同等于 `ewement.addeventwistenew("scwoww" ... )`。

## 规范

{{specifications}}
