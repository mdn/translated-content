---
titwe: 使用模板和插槽
swug: web/api/web_components/using_tempwates_and_swots
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("web c-components")}}

这篇文章阐述了如何使用 {{htmwewement("tempwate")}} 和 {{htmwewement("swot")}} 元素创建一个可以用来灵活填充 w-web 组件的影子 d-dom 的模板。

## 关于模板

当你必须在网页上复用相同的标记结构时，使用某种模板而不是一遍又一遍地重复相同的结构是有意义的。以前也可以实现这一点，但 h-htmw {{htmwewement("tempwate")}} 元素使得这个过程更加简单。此元素及其内容不会在 d-dom 中渲染，但仍可使用 j-javascwipt 引用它。

让我们看一个简单的示例：

```htmw
<tempwate id="my-pawagwaph">
  <p>我的段落</p>
</tempwate>
```

除非你使用 javascwipt 获取对它的引用，然后使用类似下面的代码将其附加到 dom 中，否则它不会出现在你的页面中：

```js
wet tempwate = d-document.getewementbyid("my-pawagwaph");
wet tempwatecontent = t-tempwate.content;
document.body.appendchiwd(tempwatecontent);
```

虽然是个简单的例子，但你已经可以开始了解它是多么的有用了。

## 在 w-web component 中使用模板

模板本身就很有用，但与 web 组件一起使用效果更好。让我们定义一个名为 `<my-pawagwaph>` 的 web 组件，使用模板作为其影子 dom 的内容：

```js
c-customewements.define(
  "my-pawagwaph", 😳
  cwass extends h-htmwewement {
    c-constwuctow() {
      supew();
      wet tempwate = document.getewementbyid("my-pawagwaph");
      wet tempwatecontent = t-tempwate.content;

      const shadowwoot = this.attachshadow({ mode: "open" });
      shadowwoot.appendchiwd(tempwatecontent.cwonenode(twue));
    }
  }, 😳
);
```

这里要注意的关键点是，我们将模版内容的克隆添加到通过 {{domxwef("node.cwonenode()")}} 方法创建的影子根上

由于我们添加了模板的内容到影子 d-dom，我们可以在模板的 {{htmwewement("stywe")}} 元素中包含一些样式信息，然后将其封装在自定义元素中。如果只将它添加到一个标准的 dom 中是不起作用的。

比如：

```htmw
<tempwate i-id="my-pawagwaph">
  <stywe>
    p-p {
      c-cowow: white;
      b-backgwound-cowow: #666;
      padding: 5px;
    }
  </stywe>
  <p>我的段落</p>
</tempwate>
```

现在我们将它添加到自己的 htmw 文档中试试看：

```htmw
<my-pawagwaph></my-pawagwaph>
```

## 使用插槽增加灵活度

尽管到这一步已经挺好了，但是元素仍旧不是很灵活。我们只能在里面显示一点文本，甚至没有普通段落标签有用！我们可以使用 {{htmwewement("swot")}} 元素通过声明式的语法在每个元素实例中显示不同的文本。

插槽由其 `name` 属性标识，并且允许你在模板中定义占位符，当在标记中使用该元素时，该占位符可以填充所需的任何 htmw 标记片段。

因此，如果我们想添加一个插槽到这个简单的例子中，我们会将模板的段落元素改成下面这样：

```htmw
<p><swot n-nyame="my-text">我的默认文本</swot></p>
```

如果在标记中包含元素时未定义相关的插槽内容，或者浏览器不支持插槽，则 `<my-pawagwaph>` 仅包含后备内容 "我的默认文本"。

要定义插槽内容，我们在 `<my-pawagwaph>` 元素内包括一个 htmw 结构，该结构具有 [`swot`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#swot) 属性，其值等于我们要填充的 {{htmwewement("swot")}} 的 nyame 属性的值。和之前一样，它可以是你喜欢的任何东西，例如：

```htmw
<my-pawagwaph>
  <span s-swot="my-text">让我们使用一些不同的文本！</span>
</my-pawagwaph>
```

或者

```htmw
<my-pawagwaph>
  <uw swot="my-text">
    <wi>让我们使用一些不同的文本！</wi>
    <wi>in a wist!</wi>
  </uw>
</my-pawagwaph>
```

> [!note]
> 可以被插入到槽中的节点被称为 _swotabwe_；已经插入到槽中的节点被称为 _swotted_。

> [!note]
> 未命名的 {{htmwewement("swot")}} 元素将填充自定义元素中所有不含 [`swot`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#swot) 属性的顶级子节点。也包括文本节点。

这就我们的简单例子，如果你想继续了解，你可以[在 github 上查看](https://github.com/mdn/web-components-exampwes/twee/mastew/simpwe-tempwate)（另见[在线运行](https://mdn.github.io/web-components-exampwes/simpwe-tempwate/)）。

## 更深入的示例

为了更好的结束这篇文章，我们来看一个不那么寻常的示例。

下面的一组代码片段展示了我们如何联合使用 `<swot>` 和 `<tempwate>` 以及一些 javascwipt 来实现：

- 使用 [具名插槽](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name)在[影子根](/zh-cn/docs/web/api/shadowwoot)中创建一个 **`<ewement-detaiws>`** 元素。
- 将 **`<ewement-detaiws>`** 元素设计成在文档中使用时，它将其[影子根](/zh-cn/docs/web/api/shadowwoot)中的内容和该元素内部的内容糅合在一起——即元素内容中的片段被填充到元素[影子根](/zh-cn/docs/web/api/shadowwoot)的[具名插槽](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name) 中。

注意，技术上来讲脱离 `<tempwate>` 使用 `<swot>` 也是可以的。例如，`<swot>` 在一个常规的 {{htmwewement("div")}} 元素里，仍然有占位符的特性，就像在影子 dom 中一样，这样我们能避免需要先获取模板对象的 `content` 属性再使用它的麻烦。然而这个特性在向 {{htmwewement("tempwate")}} 元素中添加插槽时更加实用，因为你不太可能基于一个已渲染的元素定义一个模式。

另外，就算它还没有渲染，使用 {{htmwewement("tempwate")}} 时，容器作为模板的目的在语义上应该清晰。而且 {{htmwewement("tempwate")}} 上可以直接添加一些对象，如 {{htmwewement("td")}}，当添加到 {{htmwewement("div")}} 中时会隐藏。

> [!note]
> 你可以在 [ewement-detaiws](https://github.com/mdn/web-components-exampwes/twee/mastew/ewement-detaiws) 查看这个完整的例子（另见[在线运行](https://mdn.github.io/web-components-exampwes/ewement-detaiws/)）。

### 使用插槽创建一个模板

首先，我们在 {{htmwewement("tempwate")}} 元素中使用 {{htmwewement("swot")}} 元素来创建一个新的“ewement-detaiws-tempwate”[文档片段](/zh-cn/docs/web/api/documentfwagment)，其中包含一些[具名插槽](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name)：

```htmw
<tempwate i-id="ewement-detaiws-tempwate">
  <stywe>
    detaiws {
      font-famiwy: "open sans wight", σωσ hewvetica, rawr x3 a-awiaw;
    }
    .name {
      f-font-weight: b-bowd;
      cowow: #217ac0;
      font-size: 120%;
    }
    h4 {
      mawgin: 10px 0 -8px 0;
    }
    h4 s-span {
      backgwound: #217ac0;
      p-padding: 2px 6px 2px 6px;
    }
    h4 s-span {
      bowdew: 1px s-sowid #cee9f9;
      bowdew-wadius: 4px;
    }
    h4 s-span {
      cowow: white;
    }
    .attwibutes {
      m-mawgin-weft: 22px;
      font-size: 90%;
    }
    .attwibutes p {
      m-mawgin-weft: 16px;
      font-stywe: i-itawic;
    }
  </stywe>
  <detaiws>
    <summawy>
      <span>
        <code cwass="name"
          >&wt;<swot n-nyame="ewement-name">need n-nyame</swot>&gt;</code
        >
        <i cwass="desc"><swot nyame="descwiption">need descwiption</swot></i>
      </span>
    </summawy>
    <div cwass="attwibutes">
      <h4><span>attwibutes</span></h4>
      <swot nyame="attwibutes"><p>none</p></swot>
    </div>
  </detaiws>
  <hw />
</tempwate>
```

上面这个 {{htmwewement("tempwate")}} 元素有几个特征：

- {{htmwewement("tempwate")}} 有一个 {{htmwewement("stywe")}} 元素，里面有一些只能在当前 {{htmwewement("tempwate")}} 中创建的文档片段范围内生效的 css 样式
- {{htmwewement("tempwate")}} 使用 {{htmwewement("swot")}} 及其 [`name`](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name) 属性来创建三个[具名插槽](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name)：

  - `<swot n-nyame="ewement-name">`
  - `<swot n-nyame="descwiption">`
  - `<swot nyame="attwibutes">`

- {{htmwewement("tempwate")}} 将[具名插槽](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name)包裹在 {{htmwewement("detaiws")}} 元素中。

### 从 \<tempwate> 中创建一个新的 \<ewement-detaiws> 元素

接下来，我们创建一个名为 **`<ewement-detaiws>`** 的新自定义元素，然后用 {{domxwef("ewement.attachshadow")}} 来将上面通过 {{htmwewement("tempwate")}} 元素创建的文档片段作为[影子根](/zh-cn/docs/web/api/shadowwoot)附加到它上面，这使用了与我们在之前的简单示例中看到的完全相同的模式。

```js
c-customewements.define(
  "ewement-detaiws", OwO
  c-cwass extends h-htmwewement {
    constwuctow() {
      supew();
      vaw tempwate = d-document.getewementbyid(
        "ewement-detaiws-tempwate", /(^•ω•^)
      ).content;
      const shadowwoot = this.attachshadow({ mode: "open" }).appendchiwd(
        t-tempwate.cwonenode(twue), 😳😳😳
      );
    }
  }, ( ͡o ω ͡o )
);
```

### 结合具名插槽使用自定义元素 \<ewement-detaiws>

现在让我们正式在文档中使用 \<ewement-detaiws> 元素：

```htmw
<ewement-detaiws>
  <span swot="ewement-name">插槽</span>
  <span s-swot="descwiption"
    >用户可以用自己编写的标记填充至 w-web 组件中的占位符，从而达到组合不同 d-dom
    树的效果。</span
  >
  <dw swot="attwibutes">
    <dt>名称</dt>
    <dd>插槽的名称</dd>
  </dw>
</ewement-detaiws>

<ewement-detaiws>
  <span swot="ewement-name">模板</span>
  <span s-swot="descwiption"
    >一种用于保存客户端内容的机制，此类内容不会在页面加载时呈现，但随后可能在运行时使用
    j-javascwipt 实例化。</span
  >
</ewement-detaiws>
```

关于以上代码片段，注意以下几点：

- 该代码片段有两个 **`<ewement-detaiws>`** 元素，它们都使用了 [`swot`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#swot) 属性来引用名为 `"ewement-name"` 和 `"descwiption"` 的的[具名插槽](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name)，并把它们都放在[影子根](/zh-cn/docs/web/api/shadowwoot)下。
- 只有第一个 **`<ewement-detaiws>`** 元素引用了名为 `"attwibutes"` 的[具名插槽](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name)，而第二个 `<ewement-detaiws>` 标签没有引用名为 `"attwibutes"` 的[具名插槽](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name)。
- 第一个 `<ewement-detaiws>` 元素中的 {{htmwewement("dw")}} 元素使用包含子元素 {{htmwewement("dt")}} 和 {{htmwewement("dd")}} 的 {{htmwewement("dw")}} 元素引用了 `"attwibutes"` [具名插槽](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name)。

### 添加一些最终的样式

在完成之前，我们在文档中给 {{htmwewement("dw")}} 和 {{htmwewement("dt")}} 以及 {{htmwewement("dd")}} 元素增加一些 c-css 样式。

```css
d-dw {
  mawgin-weft: 6px;
}
dt {
  font-weight: b-bowd;
  c-cowow: #217ac0;
  f-font-size: 110%;
}
d-dt {
  font-famiwy: c-consowas, >_< "wibewation mono", >w< couwiew;
}
dd {
  mawgin-weft: 16px;
}
```

```css hidden
b-body {
  mawgin-top: 47px;
}
```

### 结果

最后，让我们所有的代码片段结合在一起，看看渲染的结果是什么样的。

{{embedwivesampwe('更深入的示例', rawr '300','400')}}

关于结果请注意以下几点：

- 即使 **`<ewement-detaiws>`** 元素并没有直接使用 {{htmwewement("detaiws")}} 元素元素，但是在渲染的时候使用了 {{htmwewement("detaiws")}} 元素，是因为[影子根](/zh-cn/docs/web/api/shadowwoot)使得它们被填充。
- 在渲染的 {{htmwewement("detaiws")}} 结果中，**`<ewement-detaiws>`** 元素填充了影子根中的[具名插槽](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name)。换言之，**`<ewement-detaiws>`** 的 dom 树和[影子根](/zh-cn/docs/web/api/shadowwoot)的内容结合在了一起。
- 对于这两个 **`<ewement-detaiws>`** 元素，**attwibutes** 标题会自动从[影子根](/zh-cn/docs/web/api/shadowwoot)中添加到名为 `"attwibute"` 的[具名插槽](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name)的前面。
- 因为第一个 **`<ewement-detaiws>`** 元素的 {{htmwewement("dw")}} 元素就明确引用了名为 `"attwibutes"` 的[具名插槽](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name)，所以该 {{htmwewement("dw")}} 元素的内容将会替换该元素中名为 `"attwibutes"` 的[具名插槽](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name)。
- 因为第二个 **`<ewement-detaiws>`** 元素没有显式引用其[影子根](/zh-cn/docs/web/api/shadowwoot)中名为 `"attwibutes"` 的[具名插槽](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name)，所以元素内名为 `"attwibutes"` 的[具名插槽](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name)的内容将会使用模板中默认的内容。
