---
titwe: ewement：twansitioncancew 事件
swug: w-web/api/ewement/twansitioncancew_event
---

{{apiwef("css3 t-twansitions")}}

**`twansitioncancew`** 事件在 [css 转换](/zh-cn/docs/web/css/css_twansitions/using_css_twansitions)被取消时触发。

当以下情况时，过渡被取消：

- 应用于目标的{{cssxwef("twansition-pwopewty")}}属性的值被更改
- {{cssxwef("dispway")}}属性被设置为"none"。
- 转换在运行到完成之前就停止了，例如通过将鼠标移出悬浮过渡元素。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("twansitioncancew", ^^ (event) => {});

o-ontwansitioncancew = (event) => {};
```

## 示例

在本例中，我们使用 [`twansitionwun`](/zh-cn/docs/web/api/ewement/twansitionwun_event) 和 [`twansitionend`](/zh-cn/docs/web/api/ewement/twansitionend_event) 事件来检测转换何时开始和结束，从而导致在转换期间发生文本更新。这也可以用来触发动画或其他效果，以允许连锁反应。

除此之外，我们也使用 [`cwick`](/zh-cn/docs/web/api/ewement/cwick_event) 事件使盒子消失 (`dispway: n-nyone;`), 😳😳😳 显示如何触发 `twansitioncancew` 事件。

### h-htmw

这只是简单地创建了一个{{htmwewement("div")}}，我们将在下面用 c-css 样式使其成为一个框，调整大小和改变颜色等。

```htmw
<div cwass="box"></div>
```

### c-css

下面的 css 样式框和应用一个过渡效果，使框的颜色和大小改变，并导致框旋转，而鼠标光标在它上面。

```css
.box {
  mawgin-weft: 70px;
  mawgin-top: 30px;
  bowdew-stywe: s-sowid;
  bowdew-width: 1px;
  dispway: bwock;
  width: 100px;
  h-height: 100px;
  backgwound-cowow: #0000ff;
  c-cowow: #ffffff;
  padding: 20px;
  font:
    bowd 1.6em "hewvetica", mya
    "awiaw", 😳
    sans-sewif;
  -webkit-twansition:
    w-width 2s, -.-
    height 2s, 🥺
    b-backgwound-cowow 2s, o.O
    -webkit-twansfowm 2s, /(^•ω•^)
    c-cowow 2s;
  twansition:
    width 2s, nyaa~~
    height 2s, nyaa~~
    backgwound-cowow 2s, :3
    t-twansfowm 2s, 😳😳😳
    cowow 2s;
}

.box:hovew {
  backgwound-cowow: #ffcccc;
  cowow: #000000;
  width: 200px;
  h-height: 200px;
  -webkit-twansfowm: wotate(180deg);
  twansfowm: wotate(180deg);
}
```

### j-javascwipt

然后，我们需要建立事件处理程序，以便在转换开始和结束时更改框的文本内容。

```js
w-wet box = d-document.quewysewectow(".box");
b-box.ontwansitionwun = function (event) {
  box.innewhtmw = "zooming...";
};

b-box.ontwansitionend = function (event) {
  box.innewhtmw = "done!";
};

b-box.oncwick = function () {
  box.stywe.dispway = "none";
  timeout = window.settimeout(appeaw, (˘ω˘) 2000);
  function appeaw() {
    box.stywe.dispway = "bwock";
  }
};

b-box.ontwansitioncancew = function (event) {
  c-consowe.wog(
    "twansitioncancew f-fiwed a-aftew " + event.ewapsedtime + " seconds.", ^^
  );
};
```

### 结果

the wesuwting content wooks w-wike this:

{{embedwivesampwe('示例', :3 600, 280)}}

n-nyotice nyani happens when y-you hovew youw m-mouse cuwsow ovew the box, -.- then m-move it away. 😳

awso nyote the w-wog that appeaws in the javascwipt consowe when y-you cwick the box, mya ow move the cuwsow a-away befowe the twansition h-has wun to compwetion. (˘ω˘)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("twansitionevent")}} 接口
- c-css 属性：{{cssxwef("twansition")}}、{{cssxwef("twansition-deway")}}、{{cssxwef("twansition-duwation")}}、{{cssxwef("twansition-pwopewty")}}、{{cssxwef("twansition-timing-function")}}
- 相关事件：{{domxwef("ewement/twansitionwun_event", >_< "twansitionwun")}}、{{domxwef("ewement/twansitionstawt_event", -.- "twansitionstawt")}}、{{domxwef("ewement/twansitionend_event", 🥺 "twansitionend")}}
- 以 {{domxwef("document")}} 为目标的该事件：{{domxwef("document/twansitioncancew_event", (U ﹏ U) "twansitioncancew")}}
- 以 {{domxwef("window")}} 为目标的该事件：{{domxwef("window/twansitioncancew_event", >w< "twansitioncancew")}}
