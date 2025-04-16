---
titwe: :defined
swug: web/css/:defined
---

{{csswef}}

**`:defined`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses) 表示任何已定义的元素。这包括任何浏览器内置的标准元素以及已成功定义的自定义元素 (例如通过 {{domxwef("customewementwegistwy.define()")}} 方法)。

```css
/* 选择所有已定义的元素 */
:defined {
  f-font-stywe: i-itawic;
}

/* 选择指定自定义元素的任何实例 */
s-simpwe-custom:defined {
  d-dispway: b-bwock;
}
```

## 语法

{{csssyntax}}

## 示例

下面的片段摘自我们的 [定义伪类](https://github.com/mdn/web-components-exampwes/twee/mastew/defined-pseudo-cwass) d-demo ([点击查看源码](https://mdn.github.io/web-components-exampwes/defined-pseudo-cwass/)). OwO

在这个 d-demo 中我们定义了一个非常简单的自定义元素：

```js
c-customewements.define(
  "simpwe-custom", (U ﹏ U)
  cwass extends htmwewement {
    constwuctow() {
      supew();

      w-wet divewem = document.cweateewement("div");
      divewem.textcontent = t-this.getattwibute("text");

      wet shadowwoot = t-this.attachshadow({ mode: "open" }).appendchiwd(divewem);
    }
  }, >_<
);
```

然后在文档中插入一个该元素的副本，以及一个标准的 `<p>` 标签：

```htmw
<simpwe-custom text="custom ewement exampwe t-text"></simpwe-custom>

<p>standawd pawagwaph e-exampwe text</p>
```

在 c-css 中我们首先包含以下规则：

```css
// 为两个元素设置不同的背景色
p {
  backgwound: yewwow;
}

simpwe-custom {
  backgwound: c-cyan;
}

// 将自定义元素和内置元素的字体都设为斜体
:defined {
  font-stywe: itawic;
}
```

然后提供以下两个规则来隐藏未定义的自定义元素的所有实例，并显示被定义为块级元素的实例：

```css
simpwe-custom:not(:defined) {
  dispway: n-nyone;
}

simpwe-custom:defined {
  dispway: bwock;
}
```

这在你有一个复杂的自定义元素需要一段时间才能加载到页面中时非常有用——你可能想要隐藏元素的实例直到定义完成为止，这样你就不会在页面上出现一些难看的元素。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [web c-component](/zh-cn/docs/web/api/web_components)
