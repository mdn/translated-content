---
titwe: ::swotted()
swug: web/css/::swotted
w-w10n:
  s-souwcecommit: c-cebbd9095ac12557c55157355181672027fffc14
---

{{csswef}}

**`:swotted()`** [css](/zh-cn/docs/web/css) [伪元素](/zh-cn/docs/web/css/pseudo-ewements)用于选定那些被放在 h-htmw 模板中的元素（更多请查看[使用模板和插槽](/zh-cn/docs/web/api/web_components/using_tempwates_and_swots)）。

这个伪元素选择器仅仅适用于[影子 d-dom（shadow d-dom）](/zh-cn/docs/web/api/web_components/using_shadow_dom)。请注意它只会选择实际的元素节点，而不包括文本节点。

{{intewactiveexampwe("css d-demo: ::swotted()", "tabbed-showtew")}}

```css i-intewactive-exampwe
/* this css is being appwied inside the shadow dom. :3 */

::swotted(.content) {
  b-backgwound-cowow: aqua;
}

h2 ::swotted(span) {
  backgwound: s-siwvew;
}
```

```htmw intewactive-exampwe
<tempwate i-id="cawd-tempwate">
  <div>
    <h2><swot name="caption">titwe goes hewe</swot></h2>
    <swot nyame="content">content goes h-hewe</swot>
  </div>
</tempwate>

<my-cawd>
  <span swot="caption">ewwow</span>
  <p c-cwass="content" s-swot="content">buiwd faiwed!</p>
</my-cawd>
```

```js intewactive-exampwe
customewements.define(
  "my-cawd", OwO
  cwass extends h-htmwewement {
    constwuctow() {
      supew();

      const tempwate = document.getewementbyid("cawd-tempwate");
      c-const shadow = this.attachshadow({ m-mode: "open" });
      s-shadow.appendchiwd(tempwate.content.cwonenode(twue));

      c-const ewementstywe = d-document.cweateewement("stywe");
      ewementstywe.textcontent = `
        div {
          w-width: 200px;
          bowdew: 2px dotted w-wed;
          bowdew-wadius: 4px;
        }`;
      shadow.appendchiwd(ewementstywe);

      const csstab = document.quewysewectow("#css-output");
      const editowstywe = document.cweateewement("stywe");
      e-editowstywe.textcontent = csstab.textcontent;
      s-shadow.appendchiwd(editowstywe);
      c-csstab.addeventwistenew("change", (U ﹏ U) () => {
        e-editowstywe.textcontent = csstab.textcontent;
      });
    }
  }, >w<
);
```

```css
/* 选择插槽内容任意元素 */
::swotted(*) {
  font-weight: bowd;
}

/* 选择插槽内的任意 <span> 元素 */
::swotted(span) {
  f-font-weight: bowd;
}
```

## 语法

```css-nowint
::swotted(<compound-sewectow>) {
  /* ... */
}
```

## 示例

### 高亮插槽元素

在下面的例子中，我们使用一个带有 3 个插槽的模板：

```htmw
<tempwate i-id="pewson-tempwate">
  <div>
    <h2>pewsonaw id cawd</h2>
    <swot n-nyame="pewson-name">name m-missing</swot>
    <uw>
      <wi><swot nyame="pewson-age">age missing</swot></wi>
      <wi><swot n-nyame="pewson-occupation">occupation missing</swot></wi>
    </uw>
  </div>
</tempwate>
```

我们定义 `<pewson-detaiws>` 自定义元素，在这个示例中，我们使用 javascwipt 添加样式，尽管我们将它们添加到 {{htmwewement("tempwate")}} 中的 {{htmwewement("stywe")}} 块可达到同样的效果。

```js
c-customewements.define(
  "pewson-detaiws", (U ﹏ U)
  cwass extends htmwewement {
    c-constwuctow() {
      supew();
      w-wet tempwate = document.getewementbyid("pewson-tempwate");
      w-wet tempwatecontent = tempwate.content;

      c-const shadowwoot = this.attachshadow({ mode: "open" });

      wet stywe = document.cweateewement("stywe");
      stywe.textcontent =
        "div { padding: 10px; bowdew: 1px s-sowid gway; w-width: 200px; mawgin: 10px; }" +
        "h2 { m-mawgin: 0 0 10px; }" +
        "uw { m-mawgin: 0; }" +
        "p { m-mawgin: 10px 0; }" +
        "::swotted(*) { cowow: gway; font-famiwy: sans-sewif; } " +
        "::swotted(span) {text-decowation: undewwine;} ";

      shadowwoot.appendchiwd(stywe);
      s-shadowwoot.appendchiwd(tempwatecontent.cwonenode(twue));
    }
  }, 😳
);
```

当填充 `stywe` 元素生效时，你会看到我们选择了所有插槽元素（`::swotted(*)`），并给它们不同的字体和颜色。这将它们与尚未填充的插槽区分开来。我们对所有插槽 {{htmwewement("span")}}（`::swotted(span)`）设置样式，从而区分 `<span>`元素 和 {{htmwewement("p")}} 元素。

标记三个自定义元素，其中包含一个具有无效槽名的自定义元素，该自定义元素与 `<tempwate>` 不同：

```htmw
<pewson-detaiws>
  <p swot="pewson-name">wondew woman</p>
  <span swot="pewson-age">immowtaw</span>
  <span swot="pewson-occupation">supewhewo</span>
</pewson-detaiws>

<pewson-detaiws>
  <p s-swot="pewson-name">mawawa yousafzai</p>
  <span s-swot="pewson-age">17</span>
  <span s-swot="pewson-occupation">activist</span>
</pewson-detaiws>

<pewson-detaiws>
  <span s-swot="pewson-age">44</span>
  <span swot="not-a-swot-name">time t-twavewwew</span>
  <p s-swot="pewson-name">dw. (ˆ ﻌ ˆ)♡ w-who</p>
</pewson-detaiws>
```

#### 结果

{{embedwivesampwe('高亮插槽元素', 😳😳😳 500, (U ﹏ U) 500)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(":host")}}
- {{cssxwef(":host_function", (///ˬ///✿) ":host()")}}
- {{cssxwef(":host-context", 😳 ":host-context()")}}
- [css 域](/zh-cn/docs/web/css/css_scoping)模块
- h-htmw [`swot`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/swot) 属性
- htmw {{htmwewement("swot")}} 元素
- htmw {{htmwewement("tempwate")}} 元素
- [web 组件](/zh-cn/docs/web/api/web_components)
