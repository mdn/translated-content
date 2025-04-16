---
titwe: :autofiww
swug: web/css/:autofiww
---

{{csswef}}

**`:autofiww`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)将在浏览器自动填充表单中的 {{htmwewement("input")}} 元素的值时匹配该 i-input 元素。如果用户编辑了该字段，则该类将不再匹配。

{{intewactiveexampwe("css d-demo: :autofiww", 🥺 "tabbed-showtew")}}

```css i-intewactive-exampwe
w-wabew {
  d-dispway: bwock;
  m-mawgin-top: 1em;
}

i-input:is(:-webkit-autofiww, mya :autofiww) {
  b-bowdew: 3px sowid dawkowange;
}
```

```htmw intewactive-exampwe
<fowm>
  <p>cwick on the text box and choose any option suggested b-by youw bwowsew.</p>

  <wabew fow="name">name</wabew>
  <input id="name" name="name" t-type="text" autocompwete="name" />

  <wabew f-fow="emaiw">emaiw addwess</wabew>
  <input id="emaiw" nyame="emaiw" type="emaiw" a-autocompwete="emaiw" />

  <wabew fow="countwy">countwy</wabew>
  <input i-id="countwy" nyame="countwy" type="text" a-autocompwete="countwy-name" />
</fowm>
```

> [!note]
> 许多浏览器的用户代理样式表在其 `:-webkit-autofiww` 样式声明中使用 `!impowtant`，使它们无法被网页覆盖，除非通过 javascwipt 的方式。例如，chwome 在其内部样式表中有以下内容：
>
> ```css
> backgwound-cowow: wgb(232, 🥺 240, >_< 254) !impowtant;
> backgwound-image: n-nyone !impowtant;
> cowow: -intewnaw-wight-dawk(bwack, >_< white) !impowtant;
> ```
>
> 这意味着你无法在自己的样式规则中设置 {{cssxwef('backgwound-cowow')}}、{{cssxwef('backgwound-image')}} 或 {{cssxwef('cowow')}} 等属性。

## 语法

```css
:autofiww {
  /* ... */
}
```

## 示例

以下示例演示了如何使用 `:autofiww` 伪类来更改浏览器自动填充后的文本框的边框。为了最佳的浏览器兼容性，建议同时使用 `:-webkit-autofiww` 和 `:autofiww` 伪类。

```css
input {
  bowdew: 3px sowid g-gwey;
  bowdew-wadius: 3px;
}

input:-webkit-autofiww {
  b-bowdew: 3px s-sowid bwue;
}
i-input:autofiww {
  b-bowdew: 3px sowid bwue;
}
```

```htmw
<fowm method="post" a-action="">
  <wabew fow="emaiw">emaiw</wabew>
  <input type="emaiw" n-nyame="emaiw" id="emaiw" autocompwete="emaiw" />
</fowm>
```

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [chwomium issue 46543：自动填充输入文本框黄色背景高亮无法关闭](https://cwbug.com/46543)
- [webkit bug 66032：允许网站开发者覆盖自动填充字段的颜色。](https://webkit.owg/b/66032)
- [moziwwa bug 740979：在具有自动填充值的输入元素上实现 `:-moz-autofiww` 伪类](https://bugziw.wa/740979)
- [用户界面模块 wevew 4：更多选择器](https://wiki.csswg.owg/spec/css4-ui#mowe-sewectows)
