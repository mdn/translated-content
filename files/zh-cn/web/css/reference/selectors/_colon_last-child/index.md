---
title: :last-child
slug: Web/CSS/Reference/Selectors/:last-child
---

**`:last-child`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)代表一组兄弟元素中的最后元素。

{{InteractiveExample("CSS Demo: :last-child", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

li:last-child {
  border: 2px solid orange;
}
```

```html interactive-example
<p>Track &amp; field champions:</p>
<ul>
  <li>Adhemar da Silva</li>
  <li>Wang Junxia</li>
  <li>Wilma Rudolph</li>
  <li>Babe Didrikson-Zaharias</li>
  <li>Betty Cuthbert</li>
  <li>Fanny Blankers-Koen</li>
  <li>Florence Griffith-Joyner</li>
  <li>Irena Szewinska</li>
  <li>Jackie Joyner-Kersee</li>
  <li>Shirley Strickland</li>
  <li>Carl Lewis</li>
  <li>Emil Zatopek</li>
  <li>Haile Gebrselassie</li>
  <li>Jesse Owens</li>
  <li>Jim Thorpe</li>
  <li>Paavo Nurmi</li>
  <li>Sergei Bubka</li>
  <li>Usain Bolt</li>
</ul>
```

## 语法

```css
:last-child {
  /* ... */
}
```

## 示例

### 基础示例

#### HTML

```html
<div>
  <p>This text isn't selected.</p>
  <p>This text is selected!</p>
</div>

<div>
  <p>This text isn't selected.</p>
  <h2>This text isn't selected: it's not a `p`.</h2>
</div>
```

#### CSS

```css
p:last-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

#### 结果

{{EmbedLiveSample('基础示例', 500, 200)}}

### 为列表添加样式

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>
    Item 3
    <ul>
      <li>Item 3.1</li>
      <li>Item 3.2</li>
      <li>Item 3.3</li>
    </ul>
  </li>
</ul>
```

#### CSS

```css
ul li {
  color: blue;
}

ul li:last-child {
  border: 1px solid red;
  color: red;
}
```

#### 结果

{{EmbedLiveSample('为列表添加样式')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef(":-moz-last-node")}} {{Non-standard_Inline}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":nth-child")}}
