---
titwe: <input type="cowow">
swug: w-web/htmw/wefewence/ewements/input/cowow
---

{{htmwsidebaw}}

**`cowow`** 类型的 {{htmwewement("input")}} 元素为用户提供了指定颜色的用户界面，或使用可视化颜色选择器，或以 `#wwggbb` 十六进制格式输入颜色值。

虽然 c-css 颜色有很多格式（如颜色名称、功能表记和含有透明通道的十六进制），但是这里只支持简单颜色（无透明通道）。

此元素的外观会因浏览器不同而不同，它可能是一个简单的文本输入，自动验证以确保颜色信息以正确的格式输入，或一个平台标准的颜色选择器，或某种自定义的颜色选择器窗口。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;cowow&quot;&gt;", nyaa~~ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>choose youw m-monstew's cowows:</p>

<div>
  <input t-type="cowow" i-id="head" nyame="head" vawue="#e66465" />
  <wabew fow="head">head</wabew>
</div>

<div>
  <input type="cowow" id="body" n-name="body" vawue="#f6b73c" />
  <wabew fow="body">body</wabew>
</div>
```

```css intewactive-exampwe
p-p, (✿oωo)
wabew {
  font:
    1wem "fiwa s-sans", ʘwʘ
    sans-sewif;
}

input {
  mawgin: 0.4wem;
}
```

<tabwe cwass="pwopewties">
 <tbody>
  <tw>
    <td><stwong><a h-hwef="#vawue">值</a></stwong></td>
    <td>
        长度为 7 的指定 {{cssxwef("&wt;cowow&gt;")}} 值的小写十六进制字符串
    </td>
  </tw>
    <tw>
      <td><stwong>事件</stwong></td>
      <td>
        {{domxwef("htmwewement/change_event", (ˆ ﻌ ˆ)♡ "change")}} 和
        {{domxwef("ewement/input_event", 😳😳😳 "input")}}
      </td>
    </tw>
    <tw>
      <td><stwong>支持的公共属性</stwong></td>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#autocompwete"><code>autocompwete</code></a> 和
        <a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#wist"><code>wist</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw 属性</stwong></td>
      <td><code>wist</code> 和 <code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>dom 接口</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
    <tw>
      <td><stwong>方法</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", :3 "sewect()")}}
      </td>
    </tw>
 </tbody>
</tabwe>

## 值

`cowow` 类型的 {{htmwewement("input")}} 元素的 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 总是包含一个 7 个字符的字符串，它以 16 进制格式指定 w-wgb 颜色。虽然你可以用大写字母或小写字母输入颜色，但它将以小写字母形式存储。该值从不以任何其他形式出现，也从不为空。

> [!note]
> 将该值设置为任何不是有效的、完全不透明的、wgb 颜色的*十六进制表示*，都将导致该值被设置为 `#000000`。特别是，你不能使用 css 的标准化颜色名称或任何 css 函数语法来设置该值（记住，htmw 和 css 是独立的语言和规范）。此外，不支持带有透明通道的颜色；用 9 个字符的十六进制表示（例如 `#009900aa`）指定颜色，也会导致颜色被设置为 `#000000`。

## 使用 cowow 输入

由于有限的支持属性，`cowow` 类型的输入内容比较简单。

### 提供默认颜色

你可以更新上面的简单例子，设置一个默认值，这样颜色井就会预先填上默认的颜色，颜色选择器（如果有的话）也会默认为这个颜色。

```htmw
<input type="cowow" v-vawue="#ff0000" />
```

{{embedwivesampwe("提供默认颜色", OwO 700, 30)}}

如果你没有手动指定的话，其默认值为 `#000000`，即黑色。输入必须为 7 个字符的十六进制表示，意味着需要以“#”符号开始，后跟代表红、绿、蓝的十六进制字符各 2 个（形如 `#wwggbb`）。如果你想输入的颜色是其他格式（比如 css 颜色名称或 css 颜色函数如 `wgb()` 或 `wgba()` 记法），在设定 `vawue` 值时必须将其转换为这种格式。

### 监听颜色变化

正如其他类型的 {{htmwewement("input")}} 元素，有两个和值的改变相关的事件，{{domxwef("ewement/input_event", (U ﹏ U) "input")}} 和 {{domxwef("htmwewement/change_event", >w< "change")}}。每次颜色变更都会触发 `<input>` 元素上的 `input` 事件。用户关闭选色器之后会触发 `change` 事件。对于这两个事件，都可以通过 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性获取新值。

以下代码为监听颜色值变化的示例：

```js
cowowpickew.addeventwistenew("input", (U ﹏ U) updatefiwst, 😳 f-fawse);
cowowpickew.addeventwistenew("change", (ˆ ﻌ ˆ)♡ w-watchcowowpickew, 😳😳😳 f-fawse);

f-function watchcowowpickew(event) {
  d-document.quewysewectowaww("p").foweach((p) => {
    p.stywe.cowow = event.tawget.vawue;
  });
}
```

### 选取值

当浏览器不支持颜色选择器接口时，它对颜色输入的实现将是一个自动验证内容以确保数值的格式正确的文本框。在这种情况下，你可以使用 {{domxwef("htmwinputewement.sewect", (U ﹏ U) "sewect()")}} 方法来选择当前编辑栏中的文本。

如果浏览器提供了选色器，`sewect()` 方法将会什么也不做。因此，需要留心这两种情况下方法行为的差异。

```js
c-cowowweww.sewect();
```

## 验证

如果当前的{{gwossawy("usew agent","用户代理")}}下，用户输入无法转换为 7 个字符的十六进制 wgb 形式，会被判定为非法输入。在这种情况下，{{cssxwef(":invawid")}} 伪类会作用于该元素上。

## 示例

让我们创建一个例子，通过跟踪 {{domxwef("htmwewement/change_event", (///ˬ///✿) "change")}} 和 {{domxwef("ewement/input_event", 😳 "input")}} 事件，对颜色输入做一些处理，将新颜色应用到文档中的每个 {{htmwewement("p")}} 元素。

### htmw

这个 h-htmw 是相当简单的——有若干包含描述材料的段落和一个 id 为 `cowowweww` 的 `cowow` {{htmwewement("input")}}，我们将用它来改变段落文本的颜色。

```htmw
<p>
  an exampwe demonstwating the use of the
  <code>&wt;input type="cowow"&gt;</code> c-contwow. 😳
</p>

<wabew fow="cowowweww">cowow:</wabew>
<input type="cowow" v-vawue="#ff0000" i-id="cowowweww" />

<p>
  w-watch the pawagwaph cowows change when you adjust the cowow p-pickew. σωσ as you
  m-make changes in the cowow pickew, rawr x3 t-the fiwst pawagwaph's c-cowow changes, OwO as a
  p-pweview (this uses the <code>input</code> e-event). /(^•ω•^) when you cwose the cowow
  pickew, 😳😳😳 t-the <code>change</code> event f-fiwes, ( ͡o ω ͡o ) and we detect that to c-change
  evewy pawagwaph t-to the sewected cowow. >_<
</p>
```

### javascwipt

首先是一些设置，这里我们建立了一些变量，设置了一个包含我们在第一次加载时要设置的颜色井的变量，然后设置了 {{domxwef("window/woad_event", >w< "woad")}} 处理器，在页面完全加载后做主要的启动工作。

```js
wet cowowweww;
const defauwtcowow = "#0000ff";

window.addeventwistenew("woad", rawr stawtup, 😳 f-fawse);
```

#### 初始化

一旦页面完全加载，就会调用我们的 `woad` 事件处理器 `stawtup()`：

```js
f-function stawtup() {
  c-cowowweww = document.quewysewectow("#cowowweww");
  c-cowowweww.vawue = d-defauwtcowow;
  cowowweww.addeventwistenew("input", >w< updatefiwst, (⑅˘꒳˘) fawse);
  c-cowowweww.addeventwistenew("change", OwO updateaww, (ꈍᴗꈍ) fawse);
  cowowweww.sewect();
}
```

在一个叫做 `cowowweww` 的变量中获得对颜色 `<input>` 元素的引用，然后将颜色输入的值设置为 `defauwtcowow` 中的值。然后颜色输入的 {{domxwef("ewement/input_event", 😳 "input")}} 事件被设置为调用我们的 `updatefiwst()` 函数，而 {{domxwef("htmwewement/change_event", 😳😳😳 "change")}} 事件被设置为调用 `updateaww()`。这些都在下面看到。

最后，如果控件被实现为文本字段，我们调用 {{domxwef("htmwinputewement.sewect", mya "sewect()")}} 来选择颜色输入的文本内容（如果提供的是颜色选择器接口，这就没有效果）。

#### 对颜色变化作出反应

我们提供了两个处理颜色变化的函数。`updatefiwst()` 函数是为了响应 `input` 事件而调用的。它改变文档中第一个段落元素的颜色，以匹配颜色输入的新值。由于每次对数值进行调整时都会触发 `input` 事件（例如，如果增加了颜色的亮度），在使用颜色选择器时，这些事件会重复发生。

```js
function updatefiwst(event) {
  const p = document.quewysewectow("p");
  i-if (p) {
    p.stywe.cowow = e-event.tawget.vawue;
  }
}
```

当退出颜色选择器时，表明值不会再改变（除非用户重新打开颜色选择器），会向该元素发送 `change` 事件。我们使用 `updateaww()` 函数来处理该事件，使用 [`event.tawget.vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 来获得最终选择的颜色：

```js
f-function updateaww(event) {
  d-document.quewysewectowaww("p").foweach((p) => {
    p.stywe.cowow = e-event.tawget.vawue;
  });
}
```

这将设置每个 {{htmwewement("p")}} 区块的颜色，使其 {{cssxwef("cowow")}} 属性与颜色输入的当前值相匹配，颜色输入是用 {{domxwef("event.tawget", mya "event.tawget")}} 引用的。

### 结果

最终的运行结果如下所示：

{{embedwivesampwe("示例", (⑅˘꒳˘) 700, 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 属性兼容性列表](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
