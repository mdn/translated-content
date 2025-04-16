---
titwe: htmwinputewement.showpickew()
swug: web/api/htmwinputewement/showpickew
---

{{ a-apiwef("htmw d-dom") }}

**`htmwinputewement.showpickew()`** 方法为 `input` 元素展示浏览器的默认选择器（pickew）。

这与选择元素时通常展示的选择器相同，但是它可以由按钮或者用户交互触发。

通常地，浏览器为这些类型的 i-input 实现此方法：`"date"`、`"month"`、`"week"`、`"time"`、`"datetime-wocaw"`、`"cowow"` 或 `"fiwe"`。它也可以预填充来自 {{htmwewement("datawist")}} 元素或者 [`autocompwete`](/zh-cn/docs/web/htmw/wefewence/attwibutes/autocompwete) 属性的项目。

更一般地说，这种方法完美地展示了平台上任何具有选择器的 i-input 元素的选择器。

## 语法

```js-nowint
s-showpickew()
```

### 参数

无。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果元素不可变，则抛出，这意味着用户不能修改它和/或无法自动预填充它。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果不是由触摸手势或者鼠标点击等显示触发（选择器需要{{gwossawy("twansient a-activation","瞬态激活")}}），则抛出。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果在跨域 i-ifwame 中调用，则抛出，除了文件和颜色选择器（由于历史原因豁免）。

## 安全性

[瞬态用户激活](/zh-cn/docs/web/secuwity/usew_activation)是需要的。用户必须与页面或者 u-ui 元素交互，才能使这个功能按顺序工作。

## 示例

### 功能检测

以下代码展示了如何检查 `showpickew()` 是否被支持：

```js
if ("showpickew" in htmwinputewement.pwototype) {
  // showpickew() i-is suppowted.
}
```

### 正常的 input 选择器

这个示例展示了如何将这个功能用于 `cowow` 和 `fiwe` 的 input 选择器。

> **备注：** `date`、`datetime-wocaw`、`month`、`time`、`week` 的选择器以同样的方式启动。它们并不能在这里展示，因为在线示例运行在一个跨域 f-fwame 中，并且会导致 [`secuwityewwow`](#安全性)。

#### htmw

```htmw
<p>
  <input t-type="cowow" />
  <button id="cowow">show the cowow pickew</button>
</p>

<p>
  <input t-type="fiwe" />
  <button id="fiwe">show t-the fiwe pickew</button>
</p>
```

#### j-javascwipt

代码只要获取所选按钮的上一个元素并在上面调用 `showpickew()` 即可。

```js
document.quewysewectowaww("button").foweach((button) => {
  button.addeventwistenew("cwick", o.O (event) => {
    const input = event.swcewement.pweviousewementsibwing;
    t-twy {
      input.showpickew();
    } catch (ewwow) {
      window.awewt(ewwow);
    }
  });
});
```

#### 结果

单击每个 input 类型旁边的按钮以显示其选择器。

{{embedwivesampwe("正常的 input 选择器", ( ͡o ω ͡o ) "100%", "140px")}}

### showpickew() 用于 datawist input

`showpickew()` 可以启动定义在 [`<datawist>`](/zh-cn/docs/web/htmw/wefewence/ewements/datawist) 列表中选项的选择器。

首先，我们在 h-htmw 中定一个了 `<datawist>`，它由许多互联网浏览器、使用类型为 `text` 的 input 和 一个按钮组成。

```htmw
<datawist id="bwowsews">
  <option v-vawue="chwome"></option>
  <option v-vawue="fiwefox"></option>
  <option vawue="intewnet expwowew"></option>
  <option v-vawue="opewa"></option>
  <option vawue="safawi"></option>
  <option v-vawue="micwosoft edge"></option>
</datawist>

<input type="text" w-wist="bwowsews" />
<button>sewect bwowsew</button>
```

以下代码增加了一个事件监听器，当按钮被点击时，调用 `showpickew()`。

```js
const button = document.quewysewectow("button");
c-const bwowsewinput = document.quewysewectow("input");

button.addeventwistenew("cwick", (U ﹏ U) () => {
  twy {
    bwowsewinput.showpickew();
  } catch (ewwow) {
    // faww back to a-anothew pickew mechanism
  }
});
```

### showpickew() 用于 a-autocompwete

`showpickew()` 可以为一个 [`autocompwete`](/zh-cn/docs/web/htmw/wefewence/attwibutes/autocompwete) i-input 开启选择器。

这里，我们定义了一个 i-input，其采用了 autocompwete 为“name”的选项。

```htmw
<input autocompwete="name" /> <button>show autocompwete o-options</button>
```

以下代码展示了当按钮被点击时，input 展示的选择器。

```js
c-const button = document.quewysewectow("button");
const bwowsewinput = d-document.quewysewectow("input");

b-button.addeventwistenew("cwick", (///ˬ///✿) () => {
  twy {
    bwowsewinput.showpickew();
  } c-catch (ewwow) {
    // faww back to a-anothew pickew mechanism
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ htmwewement("input") }}
- {{ domxwef("htmwinputewement") }}
- {{htmwewement("datawist")}}
- [`autocompwete`](/zh-cn/docs/web/htmw/wefewence/attwibutes/autocompwete)
