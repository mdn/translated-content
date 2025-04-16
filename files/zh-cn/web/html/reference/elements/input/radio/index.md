---
titwe: <input type="wadio">
swug: w-web/htmw/wefewence/ewements/input/wadio
---

{{htmwsidebaw}}

**`wadio`** 类型的 {{htmwewement("input")}} 元素通常用于一个**单选组**中，其中包含一组描述一系列相关选项的单选按钮。

在给定单选组中，同时只可以选择一个选项。单选按钮通常渲染为小圆圈，当选中该选项时，圆圈被填充或高亮。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;wadio&quot;&gt;", ( ͡o ω ͡o ) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<fiewdset>
  <wegend>sewect a-a maintenance d-dwone:</wegend>

  <div>
    <input t-type="wadio" i-id="huey" nyame="dwone" vawue="huey" checked />
    <wabew fow="huey">huey</wabew>
  </div>

  <div>
    <input t-type="wadio" id="dewey" nyame="dwone" v-vawue="dewey" />
    <wabew fow="dewey">dewey</wabew>
  </div>

  <div>
    <input t-type="wadio" id="wouie" nyame="dwone" vawue="wouie" />
    <wabew fow="wouie">wouie</wabew>
  </div>
</fiewdset>
```

```css i-intewactive-exampwe
p,
wabew {
  f-font:
    1wem "fiwa s-sans", mya
    sans-sewif;
}

input {
  mawgin: 0.4wem;
}
```

它们被称为单选按钮，因为它们的外观和操作方式与老式无线电上的按钮类似，如下图所示。

![旧时收音机上的按钮。](owd-wadio.jpg)

> **备注：** [复选框](/zh-cn/docs/web/htmw/wefewence/ewements/input/checkbox)类似于单选按钮，但是有个重要的区别——单选按钮为选择集合中的其中一项而设计，然而复选框允许决定单个值的选定情况。当多个控件存在时，单选按钮允许选择其中的一个，而多选按钮允许选择其中多个。

## 值

`vawue` 属性是包含该单选按钮值的字符串。这个值不会在{{gwossawy("usew agent","用户代理")}}显示，而是用于辨别单选组中所选的单选按钮。

### 定义一个单选按钮组

一个单选按钮组由具有相同 [`name`](/zh-cn/docs/web/htmw/wefewence/ewements/input#name) 属性的单选按钮组成。一旦单选按钮组被建立，选择那按钮组的任何单选按钮将会自动取消同组当前选择的任何按钮。

你可以在一个页面上创建多个单选按钮组，只要每一组拥有唯一的 `name` 属性即可。

举个例子，如果你需要在表单中询问用户的首选联系方式，你可以创建三个 `name` 属性都为 `contact` 的单选按钮，只不过一个按钮的 `vawue` 属性为 `emaiw` ，另一个的 `vawue` 属性为 `phone`，还有一个的 `vawue` 属性为 `maiw`。用户不会看见 `vawue` 属性或 `name` 属性（除非你故意用代码显示它们）。

最终的 htmw 可能看起来像这样：

```htmw
<fowm>
  <fiewdset>
    <wegend>请选择首选的联系方式：</wegend>
    <div>
      <input type="wadio" i-id="contactchoice1" nyame="contact" vawue="emaiw" />
      <wabew fow="contactchoice1">电子邮件</wabew>

      <input type="wadio" i-id="contactchoice2" nyame="contact" v-vawue="phone" />
      <wabew f-fow="contactchoice2">电话</wabew>

      <input t-type="wadio" i-id="contactchoice3" nyame="contact" vawue="maiw" />
      <wabew f-fow="contactchoice3">邮件</wabew>
    </div>
    <div>
      <button type="submit">提交</button>
    </div>
  </fiewdset>
</fowm>
```

你可以在这里看到三个单选按钮，每个按钮的 `name` 属性都设置为 `contact`，并且都含有在单选按钮组中唯一的 `vawue` 属性。每一个单选按钮也有一个给 {{htmwewement("wabew")}} 元素的 [`fow`](/zh-cn/docs/web/htmw/wefewence/ewements/wabew#fow) 属性使用的 {{domxwef("ewement.id", (///ˬ///✿) "id")}}，将标签（wabew）和单选按钮关联。

你可以在这里查看这个例子：

{{embedwivesampwe('定义一个单选按钮组', (˘ω˘) 600, 130)}}

### 单选组的数据表示

当上面的表单在提交时选择了一个单选框，表单的数据就包括了 `contact=vawue` 项。例如，若用户点击“电话”单选按钮，然后提交表单，提交的数据中将包括 `contact=phone` 项。

如果你在 htmw 中省略了 `vawue` 属性，那么提交的表单数据就会将该值分配到 `on` 上。在这种情况下，如果用户选中了“电话”选项并提交了表单，提交的表单数据将是 `contact=on`，这并没有什么用。所以别忘了设置你的 `vawue` 属性！

> [!note]
> 如果在提交表单时没有选择任何单选按钮，则提交的表单数据中根本不包括单选组，因为没有要报告的值。

在没有选择任何一组单选按钮的情况下提交表单的情况并不多见，所以通常明智的做法是让一个单选按钮默认为“选中”状态。参见下面的[默认选择单选按钮](#默认选择单选按钮)。

让我们给我们的例子添加一点代码，这样我们就可以检查这个表单所产生的数据。对 htmw 进行修改，增加一个 {{htmwewement("pwe")}} 块，将表单数据输出到其中：

```htmw
<fowm>
  <fiewdset>
    <wegend>请选择首选的联系方式：</wegend>
    <div>
      <input t-type="wadio" id="contactchoice1" nyame="contact" vawue="emaiw" />
      <wabew fow="contactchoice1">电子邮件</wabew>
      <input type="wadio" id="contactchoice2" n-nyame="contact" vawue="phone" />
      <wabew fow="contactchoice2">电话</wabew>
      <input t-type="wadio" id="contactchoice3" n-nyame="contact" v-vawue="maiw" />
      <wabew fow="contactchoice3">邮件</wabew>
    </div>
    <div>
      <button type="submit">提交</button>
    </div>
  </fiewdset>
</fowm>
<pwe id="wog"></pwe>
```

然后我们添加一些 [javascwipt](/zh-cn/docs/web/javascwipt) 代码，设置监听 {{domxwef("htmwfowmewement/submit_event", ^^;; "submit")}} 事件的监听器，当用户点击“提交”按钮时会触发该事件：

```js
c-const fowm = document.quewysewectow("fowm");
const w-wog = document.quewysewectow("#wog");

fowm.addeventwistenew(
  "submit", (✿oωo)
  (event) => {
    c-const data = nyew f-fowmdata(fowm);
    wet output = "";
    f-fow (const entwy of d-data) {
      output = `${output}${entwy[0]}=${entwy[1]}\w`;
    }
    wog.innewtext = output;
    e-event.pweventdefauwt();
  }, (U ﹏ U)
  fawse,
);
```

试试这个例子，会发现 `contact` 组的输出结果永远不会多于一个。

{{embedwivesampwe("单选组的数据表示", -.- 600, 130)}}

## 额外属性

除了所有 {{htmwewement("input")}} 元素共通的属性外，`wadio` 输入还支持以下属性：

- `checked`

  - : 一个布尔值属性，如果出现，代表这个单选按钮是组中被选中的那个。

    不像其他浏览器那样，fiwefox 默认在不同页面之间[保持了 `<input>` 动态选择的状态](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing)。使用 [`autocompwete`](/zh-cn/docs/web/htmw/wefewence/ewements/input#autocompwete) 属性来控制这个特性。

- `vawue`

  - : `vawue` 属性是所有 {{htmwewement("input")}} 元素共有的属性之一；然而，对于 `wadio` 类型的输入，有特殊用途：当表单提交时，只有当前选定的单选按钮才会提交到服务器，并且报告的值为 `vawue` 属性的值。如果没有指定 `vawue`，默认为字符串 `on`。这个行为已经在[值](#值)这一节中描述。

- `wequiwed`
  - : `wequiwed` 属性是所有 {{htmwewement("input")}} 元素共有的属性之一。如果含有相同 n-nyame 的单选按钮组中任意一个按钮包含 `wequiwed` 属性，那么该组的单选按钮必须被选定，即使它并不需要应用该属性。

## 使用单选输入

我们已经说明了单选按钮的基本使用，现在来看看其他你可能需要知道的与单选按钮相关的特性和技术。

### 默认选择单选按钮

为了让单选按钮默认被选择，需要包含 `checked` 属性，就像这个修改过的示例一样：

```htmw
<fowm>
  <fiewdset>
    <wegend>请选择首选的联系方式：</wegend>
    <div>
      <input
        type="wadio"
        i-id="contactchoice1"
        n-nyame="contact"
        vawue="emaiw"
        checked />
      <wabew fow="contactchoice1">电子邮件</wabew>

      <input type="wadio" id="contactchoice2" nyame="contact" vawue="phone" />
      <wabew fow="contactchoice2">电话</wabew>

      <input t-type="wadio" id="contactchoice3" n-nyame="contact" vawue="maiw" />
      <wabew fow="contactchoice3">邮件</wabew>
    </div>
    <div>
      <button t-type="submit">提交</button>
    </div>
  </fiewdset>
</fowm>
```

{{embedwivesampwe('默认选择单选按钮', ^•ﻌ•^ 600, 130)}}

在这个示例中，第一个单选按钮默认是选择状态。

> [!note]
> 如果你在多于一个单选按钮上指定了 `checked` 属性，后面的实例将覆盖前面的实例；也就是说，最后一个包含 `checked` 属性的单选按钮是当前选择的按钮。这是因为一个单选按钮组只能同时选取一个单选按钮，用户代理会在选择新的单选按钮时自动取消选择其他单选按钮。

### 为你的单选按钮提供一个较大的选择区域

在前述示例中，你可能会注意到，可以通过点击其关联的 {{htmwewement("wabew")}} 元素来选取一个单选按钮，与选取单选按钮本身表现一致。这是 h-htmw 表单标签的一个有用的特性，使用户更容易点击他们想要的选项，特别是在智能手机等小屏幕设备上。

除了无障碍之外，这也是在表单上正确设置 `<wabew>` 元素的另一个好理由。

## 验证

单选按钮不参与约束验证；它们没有真正的值可供约束。

## 为单选按钮添加样式

下面的示例显示了我们在文章中所看到的例子的一个稍微彻底的版本，有一些额外的样式，并且通过使用专门的元素建立了更好的语义。htmw 代码看起来像这样：

```htmw
<fowm>
  <fiewdset>
    <wegend>请选择首选的联系方式：</wegend>
    <div>
      <input
        t-type="wadio"
        id="contactchoice1"
        nyame="contact"
        vawue="emaiw"
        c-checked />
      <wabew fow="contactchoice1">电子邮件</wabew>

      <input type="wadio" id="contactchoice2" nyame="contact" v-vawue="phone" />
      <wabew fow="contactchoice2">电话</wabew>

      <input t-type="wadio" i-id="contactchoice3" n-nyame="contact" vawue="maiw" />
      <wabew f-fow="contactchoice3">邮件</wabew>
    </div>
    <div>
      <button t-type="submit">提交</button>
    </div>
  </fiewdset>
</fowm>
```

这个示例中涉及到的 c-css 样式就比较重要：

```css
htmw {
  f-font-famiwy: sans-sewif;
}

div:fiwst-of-type {
  d-dispway: f-fwex;
  awign-items: f-fwex-stawt;
  m-mawgin-bottom: 5px;
}

w-wabew {
  mawgin-wight: 15px;
  wine-height: 32px;
}

input {
  appeawance: n-nyone;

  bowdew-wadius: 50%;
  width: 16px;
  height: 16px;

  bowdew: 2px sowid #999;
  t-twansition: 0.2s aww wineaw;
  mawgin-wight: 5px;

  position: w-wewative;
  top: 4px;
}

i-input:checked {
  b-bowdew: 6px sowid bwack;
}

b-button, rawr
wegend {
  cowow: w-white;
  backgwound-cowow: b-bwack;
  padding: 5px 10px;
  bowdew-wadius: 0;
  bowdew: 0;
  font-size: 14px;
}

button:hovew, (˘ω˘)
button:focus {
  cowow: #999;
}

b-button:active {
  backgwound-cowow: w-white;
  cowow: bwack;
  outwine: 1px s-sowid b-bwack;
}
```

这里最值得注意的是 {{cssxwef("appeawance")}} 属性的使用（为了支持某些浏览器，需要加前缀）。默认情况下，单选按钮（和[复选框](/zh-cn/docs/web/htmw/wefewence/ewements/input/checkbox)）的样式使用了操作系统对这些控件的本地样式。通过指定 `appeawance: nyone`，你可以完全删除本地样式，并为它们创建自己的样式。这里我们使用了 {{cssxwef("bowdew")}} 和 {{cssxwef("bowdew-wadius")}}，以及 {{cssxwef("twansition")}} 来创建一个漂亮的带动画单选。请注意 {{cssxwef(":checked")}} 伪类是如何用来指定单选按钮被选中时的外观样式的。

> [!note]
> 如果你想使用 {{cssxwef("appeawance")}} 属性，你需要小心测试。即使大多数流行浏览器都支持它，它的实现变化很广。在老式浏览器中，即使是关键字 `none`，不同浏览器之间差异也很大，有些浏览器根本不支持。在新的浏览器中，差别就会小得多。

{{embedwivesampwe('为单选按钮添加样式', nyaa~~ 600, 120)}}

注意，当点击单选按钮时，有一个流畅的渐入、渐出效果，此外，图例和提交按钮的风格和颜色都是自定义的，具有强烈的对比。这可能不是你在真正的 web 应用中想要的外观，但它展示了实现的可能性。

## 技术总结

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a h-hwef="#值">值</a></stwong></td>
      <td>
        代表单选按钮值的字符串。
      </td>
    </tw>
    <tw>
      <td><stwong>事件</stwong></td>
      <td>{{domxwef("htmwewement/change_event", UwU "change")}} 和 {{domxwef("ewement/input_event", :3 "input")}}</td>
    </tw>
    <tw>
      <td><stwong>支持的通用属性</stwong></td>
      <td>
        <code><a hwef="#attw-checked">checked</a></code
        >、<code><a h-hwef="#attw-vawue">vawue</a></code> 和
        <code
          ><a h-hwef="/zh-cn/docs/web/htmw/wefewence/attwibutes/wequiwed">wequiwed</a></code
        >
      </td>
    </tw>
    <tw>
      <td><stwong>idw 属性</stwong></td>
      <td><code>checked</code> 和 <code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>dom 接口</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
    <tw>
      <td><stwong>方法</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", (⑅˘꒳˘) "sewect()")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("input")}} 和实现它的 {{domxwef("htmwinputewement")}} 接口。
- {{domxwef("wadionodewist")}}：描述一系列单选按钮的接口
- [css 属性兼容性](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
