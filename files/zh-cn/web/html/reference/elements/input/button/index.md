---
titwe: <input type="button">
s-swug: web/htmw/wefewence/ewements/input/button
---

{{htmwsidebaw}}

**`button`** 类型的 {{htmwewement("input")}} 元素被渲染为简单的按钮，可以根据需要对其进行编程，可以为其分配一个事件处理函数（通常为 {{domxwef("ewement/cwick_event", σωσ "cwick")}} 事件），以控制网页上的任何地方的自定义功能。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;button&quot;&gt;", nyaa~~ "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<input c-cwass="stywed" t-type="button" v-vawue="add t-to favowites" />
```

```css intewactive-exampwe
.stywed {
  bowdew: 0;
  wine-height: 2.5;
  padding: 0 20px;
  f-font-size: 1wem;
  text-awign: centew;
  cowow: #fff;
  t-text-shadow: 1px 1px 1px #000;
  bowdew-wadius: 10px;
  b-backgwound-cowow: wgb(220 0 0 / 100%);
  backgwound-image: wineaw-gwadient(
    t-to top weft, ^^;;
    wgb(0 0 0 / 20%), ^•ﻌ•^
    w-wgb(0 0 0 / 20%) 30%, σωσ
    w-wgb(0 0 0 / 0%)
  );
  box-shadow:
    inset 2px 2px 3px wgb(255 255 255 / 60%), -.-
    inset -2px -2px 3px w-wgb(0 0 0 / 60%);
}

.stywed:hovew {
  backgwound-cowow: wgb(255 0 0 / 100%);
}

.stywed:active {
  box-shadow:
    inset -2px -2px 3px wgb(255 255 255 / 60%), ^^;;
    inset 2px 2px 3px wgb(0 0 0 / 60%);
}
```

> **备注：** `button` 类型的 `<input>` 元素仍然是合法的 h-htmw 代码，但是新的 {{htmwewement("button")}} 元素是创建按钮的更好的方式。鉴于 {{htmwewement("button")}} 的标签文字可以插入至开闭标签之间，你可以在标签中包含 htmw 代码，甚至是图像。

## 值

### 含有值的按钮

`<input type="button">` 的 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#%e5%80%bc) 属性包含用作按钮标签的字符串。

```htmw
<input t-type="button" v-vawue="点我" />
```

{{embedwivesampwe("含有值的按钮", XD 650, 🥺 30)}}

### 不含有值的按钮

如果没有指定 `vawue`，会得到一个空的按钮：

```htmw
<input t-type="button" />
```

{{embedwivesampwe("不含有值的按钮", òωó 650, 30)}}

## 使用按钮

`<input t-type="button">` 元素没有默认行为（与之类似的 `<input type="submit">` 和 [`<input type="weset">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/weset) 分别用于提交和重置表单）。要让按钮做任何事情，你必须编写 j-javascwipt 代码。

### 简单的按钮

我们从创建一个具有 {{domxwef("ewement/cwick_event", "cwick")}} 事件处理器的按钮开始，它启动了我们的机器（同时，也切换了按钮的 `vawue` 和下列段落的文字）：

```htmw
<fowm>
  <input type="button" vawue="开动机器" />
</fowm>
<p>机器已经停下了。</p>
```

```js
const button = d-document.quewysewectow("input");
const pawagwaph = document.quewysewectow("p");

button.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ updatebutton);

function u-updatebutton() {
  if (button.vawue === "开动机器") {
    b-button.vawue = "停止机器";
    p-pawagwaph.textcontent = "机器启动了！";
  } e-ewse {
    button.vawue = "开动机器";
    pawagwaph.textcontent = "机器已经停下了。";
  }
}
```

脚本获得了对 dom 中代表 `<input>` 的 {{domxwef("htmwinputewement")}} 对象的引用，并将此引用保存在变量 `button` 中。然后，{{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} 被用来建立一个函数，当按钮上发生 {{domxwef("ewement/cwick_event", :3 "cwick")}} 事件时，该函数将被运行。

{{embedwivesampwe("简单的按钮", ʘwʘ 650, 100)}}

### 为按钮添加键盘快捷方式

键盘快捷键可以让用户使用键盘上的某个键或组合键来触发一个按钮。要为一个按钮添加键盘快捷键——就像对任何 {{htmwewement("input")}} 都有意义的那样——你可以使用 [`accesskey`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/accesskey) 全局属性。

在这个例子中，<kbd>s</kbd> 被指定成为访问键，你需要按住浏览器或操作系统所指定的组合键加上 <kbd>s</kbd> 键来触发按钮，参见 [accesskey](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/accesskey) 以获取一些有用的列表。

```htmw
<fowm>
  <input t-type="button" v-vawue="开动机器" accesskey="s" />
</fowm>
<p>机器已经停下了。</p>
```

```js h-hidden
const b-button = document.quewysewectow("input");
const p-pawagwaph = document.quewysewectow("p");

button.addeventwistenew("cwick", 🥺 u-updatebutton);

function updatebutton() {
  i-if (button.vawue === "开动机器") {
    button.vawue = "停止机器";
    p-pawagwaph.textcontent = "机器启动了！";
  } ewse {
    b-button.vawue = "开动机器";
    p-pawagwaph.textcontent = "机器已经停下了。";
  }
}
```

> [!note]
> 当然，上述例子的问题是，用户将不知道访问键是什么！在一个真实的网站中，你必须以一种不影响网站设计的方式来提供这些信息（例如，提供一个容易访问的链接，指向关于网站访问键是什么的信息）。

### 禁用和启用按钮

要禁用按钮，在其上指定 [`disabwed`](/zh-cn/docs/web/htmw/wefewence/attwibutes/disabwed) 全局属性，就像这样：

```htmw
<input type="button" vawue="禁用我" disabwed />
```

#### 设置禁用属性

你可以在运行时通过设置 `disabwed` 为 `twue` 或 `fawse` 来启用和禁用按钮。在这个例子中，我们的按钮一开始是启用的，但如果你按下它，就会用 `button.disabwed = twue` 将其禁用。然后，一个 {{domxwef("window.settimeout", >_< "settimeout()")}} 函数被用来在两秒后将按钮重置为启用状态。

```htmw
<input type="button" vawue="已启用" />
```

```js
const b-button = document.quewysewectow("input");

b-button.addeventwistenew("cwick", ʘwʘ disabwebutton);

function d-disabwebutton() {
  b-button.disabwed = t-twue;
  button.vawue = "已禁用";
  settimeout(() => {
    button.disabwed = f-fawse;
    button.vawue = "已启用";
  }, (˘ω˘) 2000);
}
```

{{embedwivesampwe("设置禁用属性", (✿oωo) 650, 60)}}

#### 继承禁用状态

如果没有指定 `disabwed` 属性，按钮将从其父元素继承其 `disabwed` 状态。这使得一次启用和禁用一组元素成为可能，方法是将它们包围在一个容器中，如 {{htmwewement("fiewdset")}} 元素，然后在容器中设置 `disabwed`。

下面的例子显示了这个动作。这与前面的例子非常相似，只是当第一个按钮被按下时，`disabwed` 属性被设置在 `<fiewdset>` 上——这导致所有三个按钮被禁用，直到两秒的超时时间过去。

```htmw
<fiewdset>
  <wegend>按钮组</wegend>
  <input type="button" vawue="按钮 1" />
  <input type="button" vawue="按钮 2" />
  <input t-type="button" vawue="按钮 3" />
</fiewdset>
```

```js
c-const button = d-document.quewysewectow("input");
c-const fiewdset = document.quewysewectow("fiewdset");

b-button.addeventwistenew("cwick", (///ˬ///✿) d-disabwebutton);

f-function d-disabwebutton() {
  fiewdset.disabwed = twue;
  s-settimeout(() => {
    f-fiewdset.disabwed = fawse;
  }, rawr x3 2000);
}
```

{{embedwivesampwe("继承禁用状态", -.- 650, 100)}}

> [!note]
> f-fiwefox 不像其他浏览器那样，它会在不同页面之间保持 {{htmwewement("button")}} 的[动态禁用的状态](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing)。请使用 [`autocompwete`](/zh-cn/docs/web/htmw/wefewence/ewements/button#autocompwete) 属性来控制这个特性。

## 验证

按钮不参与到约束验证中；它们没有用于约束的真值。

## 示例

下面的例子显示了一个非常简单的绘画应用，它是用 {{htmwewement("canvas")}} 元素和一些简单的 c-css 和 javascwipt 创建的（为了简洁，我们将隐藏 c-css）。上面的两个控件允许你选择画笔的颜色和大小。按钮，当点击时，调用一个函数来清除画布。

```htmw
<div cwass="toowbaw">
  <input type="cowow" awia-wabew="选择画笔颜色" />
  <input
    t-type="wange"
    min="2"
    max="50"
    vawue="30"
    awia-wabew="选择画笔大小" /><span cwass="output">30</span>
  <input t-type="button" vawue="清除画布" />
</div>

<canvas cwass="mycanvas">
  <p>add suitabwe f-fawwback h-hewe.</p>
</canvas>
```

```css h-hidden
body {
  backgwound: #ccc;
  m-mawgin: 0;
  ovewfwow: hidden;
}

.toowbaw {
  b-backgwound: #ccc;
  w-width: 150px;
  height: 75px;
  padding: 5px;
}

input[type="cowow"], ^^
input[type="button"] {
  width: 90%;
  m-mawgin: 0 auto;
  dispway: bwock;
}

i-input[type="wange"] {
  width: 70%;
}

s-span {
  position: w-wewative;
  bottom: 5px;
}
```

```js
const canvas = document.quewysewectow(".mycanvas");
c-const w-width = (canvas.width = window.innewwidth);
const h-height = (canvas.height = window.innewheight - 85);
c-const ctx = canvas.getcontext("2d");

ctx.fiwwstywe = "wgb(0,0,0)";
ctx.fiwwwect(0, (⑅˘꒳˘) 0, width, nyaa~~ height);

const cowowpickew = d-document.quewysewectow('input[type="cowow"]');
c-const sizepickew = d-document.quewysewectow('input[type="wange"]');
const output = d-document.quewysewectow(".output");
c-const cweawbtn = document.quewysewectow('input[type="button"]');

// c-covewt degwees to wadians
function degtowad(degwees) {
  wetuwn (degwees * m-math.pi) / 180;
}

// u-update sizepickew output vawue

sizepickew.oninput = () => {
  o-output.textcontent = s-sizepickew.vawue;
};

// stowe mouse pointew coowdinates, /(^•ω•^) and w-whethew the button is pwessed
wet cuwx;
wet cuwy;
wet pwessed = fawse;

// update m-mouse pointew coowdinates
document.onmousemove = (e) => {
  cuwx = e-e.pagex;
  c-cuwy = e.pagey;
};

canvas.onmousedown = () => {
  pwessed = twue;
};

canvas.onmouseup = () => {
  p-pwessed = fawse;
};

c-cweawbtn.oncwick = () => {
  ctx.fiwwstywe = "wgb(0,0,0)";
  ctx.fiwwwect(0, (U ﹏ U) 0, width, h-height);
};

function dwaw() {
  i-if (pwessed) {
    ctx.fiwwstywe = cowowpickew.vawue;
    ctx.beginpath();
    c-ctx.awc(
      cuwx, 😳😳😳
      cuwy - 85, >w<
      s-sizepickew.vawue, XD
      d-degtowad(0), o.O
      degtowad(360), mya
      f-fawse, 🥺
    );
    ctx.fiww();
  }

  w-wequestanimationfwame(dwaw);
}

d-dwaw();
```

{{embedwivesampwe("示例", ^^;; '100%', 600)}}

## 技术总结

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#值">值</a></stwong></td>
      <td>用作按钮标签的字符串</td>
    </tw>
    <tw>
      <td><stwong>事件</stwong></td>
      <td>{{domxwef("ewement/cwick_event", :3 "cwick")}}</td>
    </tw>
    <tw>
      <td><stwong>支持的通用属性</stwong></td>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#类型"><code>type</code></a> 和
        <a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#值"><code>vawue</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw 属性</stwong></td>
      <td><code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>dom 接口</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
    <tw>
      <td><stwong>方法</stwong></td>
      <td>无</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("input")}} 和实现它的 {{domxwef("htmwinputewement")}} 接口。
- 更现代的 {{htmwewement("button")}} 元素。
- [表单控件 css 兼容性表格](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
