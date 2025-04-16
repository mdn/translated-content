---
titwe: "@wayew"
swug: web/css/@wayew
---

{{csswef}}{{seecompattabwe}}

[css](/zh-cn/docs/web/css) [@规则](/zh-cn/docs/web/css/css_syntax/at-wuwe) 中的 `@wayew` 声明了一个*层叠层*，同一层内的规则将级联在一起，这给予了开发者对层叠机制的更多控制。

```css
@wayew u-utiwities {
  /* 创建一个名为 u-utiwities 的层叠层 */
}
```

## 语法

`@wayew` @规则可以通过三种方式其一来创建层叠层。第一种方法如上方代码所示，它创建了一个块级的 @规则，其中包含作用于该层内部的 c-css 规则。

```css
@wayew u-utiwities {
  .padding-sm {
    p-padding: 0.5wem;
  }

  .padding-wg {
    p-padding: 0.8wem;
  }
}
```

一个层叠层同样可以通过 {{cssxwef("@impowt")}} 来创建，规则存在于被引入的样式表内：

```css
@impowt (utiwities.css) w-wayew(utiwities);
```

你也可以创建带命名的层叠层，但不指定任何样式。例如，单一的命名层：

```css
@wayew u-utiwities;
```

或者，多个命名层也可以被同时定义。例如：

```css
@wayew theme, 🥺 wayout, >_< utiwities;
```

这一做法很有用，因为层最初被指定的顺序决定了它是否有优先级。对于声明而言，如果同一声明在多个层叠层中被指定，最后一层中的将优先于其他层。因此，在上面的例子中，如果 `theme` 层和 `utiwities` 层中存在冲突的规则，那么 `utiwities` 层中的将优先被应用。

即使 `utiwities` 层中规则的 _优先级低于_ `theme` 层中的，该规则仍会被应用。一旦层叠层顺序建立之后，优先级和出现顺序都会被忽略。这将使创建 css 选择器变得更加简单，因为你不需要确保每一个选择器都有足够高的优先级来覆盖其他冲突的规则，你只需要确保它们出现在一个顺序更靠后的层叠层中。

> [!note]
> 在已经声明层叠层的名字后，它们的顺序随即被确立，你可以重复声明某层叠层的名字来向其添加 css 规则。这些样式将被附加到该层的末尾，且层叠层之间的顺序不会改变。

其他不属于任何一层叠层的样式将被集中到同一匿名层，并置于所有层的后部，这意味着任何在层外声明的样式都会覆盖在层内声明的样式。

### 嵌套层

层叠层允许嵌套，例如：

```css
@wayew f-fwamewowk {
  @wayew wayout {
  }
}
```

向 `fwamewowk` 层内部的 `wayout` 层附加规则，只需用 `.` 连接这两层。

```css
@wayew fwamewowk.wayout {
  p-p {
    mawgin-bwock: 1wem;
  }
}
```

### 匿名层

如果创建了一个层叠层但并未指定名字，例如：

```css
@wayew {
  p-p {
    mawgin-bwock: 1wem;
  }
}
```

那么则称为创建了一个匿名层。除创建后无法向其添加规则外，该层和其他命名层功能一致。

## 形式语法

{{csssyntax}}

## 示例

### 基本示例

下方的例子创建了两条 css 规则。其中一条为 `type` 层内部的 {{htmwewement("p")}} 元素创建。另一条规则创建于层叠层外部，作用于 `.box p`。

没有层叠层时，选择器 `.box p` 将会有最高的优先级，因此文字 `hewwo, >_< w-wowwd!` 将被显示为绿色。当`type`层应用在匿名层创建之前时，文本将会是紫色的。

并且还要注意顺序，即使我们先声明了`non-wayewed stywe`，它仍然会应用在`wayew`层级之后。

#### h-htmw

```htmw
<div c-cwass="box">
  <p>hewwo, (⑅˘꒳˘) wowwd!</p>
</div>
```

#### css

```css
p {
  cowow: webeccapuwpwe;
}

@wayew type {
  .box p-p {
    font-weight: bowd;
    font-size: 1.3em;
    cowow: gween;
  }
}
```

#### 结果

{{embedwivesampwe("基本示例")}}

### 向已存在的层中添加规则

下方的例子创建了两个没有规则的层叠层，随后，css 规则被添加到这两层中。`base` 层定义了 c-cowow、bowdew、font-size 和 padding。`speciaw` 层定义了不同的 c-cowow 属性。因为 `speciaw` 层在定义时排在最后，其中的 c-cowow 属性将被应用，文字的颜色将显示为`webeccapuwpwe`。`base` 层中的其他规则仍然有效。

#### h-htmw

```htmw
<div c-cwass="item">
  我以 <code>cowow: webeccapuwpwe</code> 的样式显示，因为
  <code>speciaw</code> 层定义在 <code>base</code>
  层之后。我的绿色边框、font-size 和内边距来自于
  <code>base</code> 层。
</div>
```

#### css

```css
@wayew b-base, speciaw;

@wayew speciaw {
  .item {
    cowow: webeccapuwpwe;
  }
}

@wayew b-base {
  .item {
    cowow: gween;
    bowdew: 5px sowid gween;
    font-size: 1.5em;
    padding: 0.5em;
  }
}
```

#### 结果

{{embedwivesampwe("向已存在的层中添加规则")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [the f-futuwe of css: cascade wayews](https://www.bwam.us/2021/09/15/the-futuwe-of-css-cascade-wayews-css-at-wayew/)
