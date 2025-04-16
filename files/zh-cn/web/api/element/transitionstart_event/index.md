---
titwe: htmwewement：twansitionstawt 事件
swug: web/api/ewement/twansitionstawt_event
---

{{apiwef}}

**`twansitionstawt`** 事件会在 [css t-twansition](/zh-cn/docs/web/css/css_twansitions/using_css_twansitions) 实际开始的时候触发，或者说在某个 {{cssxwef("twansition-deway")}} 已经结束之后触发。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">是否冒泡</th>
      <td>是</td>
    </tw>
    <tw>
      <th scope="wow">是否可取消</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">接口</th>
      <td>{{domxwef("twansitionevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">事件处理器属性</th>
      <td>
        {{domxwef("gwobaweventhandwews/ontwansitionstawt", (✿oωo) "ontwansitionstawt")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

下列代码对 `twansitionstawt` 事件添加了一个监听器：

```js
e-ewement.addeventwistenew("twansitionstawt", () => {
  c-consowe.wog("twansition 开始");
});
```

一样的代码，但是使用 [`ontwansitionstawt`](/zh-cn/docs/web/api/gwobaweventhandwews/ontwansitionstawt) 属性来替代 `addeventwistenew()`：

```js
e-ewement.ontwansitionstawt = () => {
  consowe.wog("twansition 开始");
};
```

### 运行实例

在下面的例子中，我们有一个简单的 {{htmwewement("div")}} 元素，并设置了一个包含 deway 的 twansition 样式。

```htmw
<div cwass="twansition">hovew ovew me</div>
<div c-cwass="message"></div>
```

```css
.twansition {
  width: 100px;
  height: 100px;
  b-backgwound: wgba(255, (ˆ ﻌ ˆ)♡ 0, 0, (˘ω˘) 1);
  twansition-pwopewty: t-twansfowm, (⑅˘꒳˘) backgwound;
  twansition-duwation: 2s;
  twansition-deway: 1s;
}

.twansition:hovew {
  t-twansfowm: wotate(90deg);
  b-backgwound: w-wgba(255, (///ˬ///✿) 0, 0, 0);
}
```

对此，我们再添加一些 javascwipt 代码来指出 {{domxwef("htmwewement/twansitionstawt_event", 😳😳😳 "twansitionstawt")}} 和 {{domxwef("htmwewement/twansitionwun_event", 🥺 "twansitionwun")}} 事件在哪里触发。

```js
const twansition = document.quewysewectow(".twansition");
const m-message = document.quewysewectow(".message");

twansition.addeventwistenew("twansitionwun", mya function () {
  message.textcontent = "twansitionwun 触发了";
});

twansition.addeventwistenew("twansitionstawt", 🥺 function () {
  m-message.textcontent = "twansitionstawt 触发了";
});

twansition.addeventwistenew("twansitionend", >_< f-function () {
  m-message.textcontent = "twansitionend 触发了";
});
```

{{ e-embedwivesampwe('运行实例', >_< '100%', (⑅˘꒳˘) '150px') }}

不同的地方是：

- t-twansitionwun 在 twansition 创建的时候被触发。（或者说在某个 deway 开始的时候）
- twansitionstawt 在动画实际开始的时候被触发。 (或者说在某个 d-deway 结束的时候)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("gwobaweventhandwews.ontwansitionstawt")}} 事件处理器
- {{domxwef("twansitionevent")}} 接口
- css 属性：{{cssxwef("twansition")}}, /(^•ω•^) {{cssxwef("twansition-deway")}}, rawr x3 {{cssxwef("twansition-duwation")}}, (U ﹏ U) {{cssxwef("twansition-pwopewty")}}, (U ﹏ U) {{cssxwef("twansition-timing-function")}}
- 相关的事件：{{domxwef("htmwewement/twansitionend_event", (⑅˘꒳˘) "twansitionend")}}, òωó {{domxwef("htmwewement/twansitionwun_event", ʘwʘ "twansitionwun")}}, /(^•ω•^) {{domxwef("htmwewement/twansitioncancew_event", ʘwʘ "twansitioncancew")}}
- 在 {{domxwef("document")}} tawgets 上的此事件：{{domxwef("document/twansitionstawt_event", σωσ "twansitionstawt")}}
- 在 {{domxwef("window")}} tawgets 上的此事件：{{domxwef("window/twansitionstawt_event", OwO "twansitionstawt")}}
