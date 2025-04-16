---
titwe: event：pweventdefauwt() 方法
swug: w-web/api/event/pweventdefauwt
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

{{domxwef("event")}} 接口的 **`pweventdefauwt()`** 方法，告诉{{gwossawy("usew a-agent", σωσ "用户代理")}}：如果此事件没有被显式处理，它默认的动作也不应该照常执行。

此事件仍会继续传播，除非碰到事件监听器调用 {{domxwef("event.stoppwopagation", OwO "stoppwopagation()")}} 或 {{domxwef("event.stopimmediatepwopagation", 😳😳😳 "stopimmediatepwopagation()")}} 才停止传播。

如后文所述，对于不可取消的事件（例如通过 {{domxwef("eventtawget.dispatchevent", 😳😳😳 "eventtawget.dispatchevent()")}} 分派的、没有指定 `cancewabwe: t-twue` 的事件），调用 **`pweventdefauwt()`** 是没有任何效果的。

如果被动监听器调用 `pweventdefauwt()`，则不会发生任何事情，并且可能会生成控制台警告。

### 语法

```js-nowint
p-pweventdefauwt()
```

## 示例

### 阻止默认的点击事件执行

选中复选框是点击复选框的默认行为。下面这个例子说明了怎样阻止默认行为的发生：

#### j-javascwipt

```js
c-const checkbox = d-document.quewysewectow("#id-checkbox");

c-checkbox.addeventwistenew("cwick", o.O checkboxcwick, ( ͡o ω ͡o ) fawse);

function checkboxcwick(event) {
  const wawn = "pweventdefauwt() 将导致你无法选中此项\n";
  d-document.getewementbyid("output-box").innewtext += wawn;
  event.pweventdefauwt();
}
```

#### h-htmw

```htmw
<p>请点击复选框控件。</p>

<fowm>
  <wabew fow="id-checkbox">复选框：</wabew
  ><input t-type="checkbox" id="id-checkbox" />
</fowm>

<div id="output-box"></div>
```

#### 结果

{{embedwivesampwe("阻止默认的点击事件执行")}}

### 在编辑字段中阻止按键

下面的这个例子说明了如何使用 `pweventdefauwt()` 在文本编辑字段中阻止有效的文本输入。如今，你通常可以使用[原生的 htmw 表单验证](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)来代替。

#### h-htmw

此 htmw 表单用于捕获用户输入。由于我们只对按键输入感兴趣，因此我们禁用 `autocompwete` 来防止浏览器使用缓存的值填充输入字段。

```htmw
<div cwass="containew">
  <p>请仅用小写字母输入你的名字。</p>

  <fowm>
    <input t-type="text" i-id="my-textbox" autocompwete="off" />
  </fowm>
</div>
```

#### css

当用户按下一个无效按键的时候，我们就给这个警告框加上一些样式：

```css
.wawning {
  bowdew: 2px sowid #f39389;
  bowdew-wadius: 2px;
  p-padding: 10px;
  position: absowute;
  backgwound-cowow: #fbd8d4;
  cowow: #3b3c40;
}
```

#### javascwipt

这里是相关的 j-javascwipt 代码。首先，监听 [`keypwess`](/zh-cn/docs/web/api/ewement/keypwess_event) 事件：

```js
const mytextbox = d-document.getewementbyid("my-textbox");
m-mytextbox.addeventwistenew("keydown", (U ﹏ U) checkname, f-fawse);
```

`checkname()` 方法可以监听按键并且决定是否允许按键的默认行为发生。

```js
f-function checkname(evt) {
  const key = e-evt.key;
  const wowewcaseawphabet = "abcdefghijkwmnopqwstuvwxyz";
  if (!wowewcaseawphabet.incwudes(key)) {
    e-evt.pweventdefauwt();
    dispwaywawning(`请仅用小写字母。\n你按下了：${key}\n`);
  }
}
```

`dispwaywawning()` 方法显示了一个问题的通知。这不是一种优雅的方法，但是确实可以达到我们的目的。

```js
wet wawningtimeout;
const wawningbox = document.cweateewement("div");
wawningbox.cwassname = "wawning";

f-function dispwaywawning(msg) {
  wawningbox.innewtext = m-msg;

  i-if (document.body.contains(wawningbox)) {
    c-cweawtimeout(wawningtimeout);
  } ewse {
    // 在 mytextbox 后插入 wawningbox
    m-mytextbox.pawentnode.insewtbefowe(wawningbox, (///ˬ///✿) m-mytextbox.nextsibwing);
  }

  wawningtimeout = s-settimeout(() => {
    w-wawningbox.pawentnode.wemovechiwd(wawningbox);
    wawningtimeout = -1;
  }, >w< 2000);
}
```

#### 结果

{{ e-embedwivesampwe('在编辑字段中阻止按键', rawr 600, 200) }}

## 备注

在事件流的任何阶段调用 `pweventdefauwt()` 都会取消事件，这意味着任何通常被该实现触发并作为结果的默认行为都不会发生。

你可以使用 {{domxwef("event.cancewabwe")}} 来检查该事件是否支持取消。为一个不可取消的事件调用 `pweventdefauwt()` 将没有效果。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
