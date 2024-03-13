---
title: ":target"
slug: Web/CSS/:target
---

{{CSSRef}}

**`:target`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)表示一个唯一的元素（_目标元素_），其 [`id`](/zh-CN/docs/Web/HTML/Global_attributes#id) 与当前 URL 片段匹配。

```css
/* 选择一个 ID 与当前 URL 片段匹配的元素*/
:target {
  border: 2px solid black;
}
```

例如，以下 URL 具有一个片段（由 # 符号表示），指向名为 `section2` 的元素：

```
http://www.example.com/index.html#section2
```

若当前 URL 等于上面的 URL 时，以下元素将被 `:target` 选择器被选中：

```html
<section id="section2">Example</section>
```

## 语法

```css
:target {
  /* ... */
}
```

## 示例

### 一个目录

`:target` 伪类可用于高亮显示页面中可从目录中链接到的部分。

#### HTML

```html
<h3>目录</h3>
<ol>
  <li><a href="#p1">跳转到第一个段落！</a></li>
  <li><a href="#p2">跳转到第二个段落！</a></li>
  <li><a href="#nowhere">此链接不会跳转，因为目标不存在。</a></li>
</ol>

<h3>我的趣味文章</h3>
<p id="p1">你可以使用 URL 片段定位此<i>段落</i>。点击上面的链接试试吧！</p>
<p id="p2">这是<i>另一个段落</i>，也可以从上面的链接访问。这不是很愉快吗？</p>
```

#### CSS

```css
p:target {
  background-color: gold;
}

/* 在目标元素中增加一个伪元素*/
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: 0.25em;
}

/*在目标元素中使用 italic 样式*/
p:target i {
  color: red;
}
```

#### 结果

{{EmbedLiveSample('一个目录', 500, 300)}}

### 纯 CSS 高亮

你可以不使用任何 Javascript 代码，只使用 `:target` 伪类创建一个高亮框。该技术依赖于初始化时就隐藏在页面中的链接到指定元素的锚。一旦定位，CSS 就会更改其 `display` 以便显示它们。

> **备注：** 一个基于 `:target` 伪类的更为完善的纯 CSS 高亮框可以在 [GitHub](https://github.com/madmurphy/takefive.css/)（[demo](https://madmurphy.github.io/takefive.css/)）上找到。

#### HTML

```html
<ul>
  <li><a href="#example1">打开示例 #1</a></li>
  <li><a href="#example2">打开示例 #2</a></li>
</ul>

<div class="lightbox" id="example1">
  <figure>
    <a href="#" class="close"></a>
    <figcaption>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis enim,
      placerat id eleifend eu, semper vel sem.
    </figcaption>
  </figure>
</div>

<div class="lightbox" id="example2">
  <figure>
    <a href="#" class="close"></a>
    <figcaption>
      Cras risus odio, pharetra nec ultricies et, mollis ac augue. Nunc et diam
      quis sapien dignissim auctor. Quisque quis neque arcu, nec gravida magna.
    </figcaption>
  </figure>
</div>
```

#### CSS

```css
/* Unopened lightbox */
.lightbox {
  display: none;
}

/* Opened lightbox */
.lightbox:target {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Lightbox content */
.lightbox figcaption {
  width: 25rem;
  position: relative;
  padding: 1.5em;
  background-color: lightpink;
}

/* Close button */
.lightbox .close {
  position: relative;
  display: block;
}

.lightbox .close::after {
  right: -1rem;
  top: -1rem;
  width: 2rem;
  height: 2rem;
  position: absolute;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 50%;
  color: white;
  content: "×";
  cursor: pointer;
}

/* Lightbox overlay */
.lightbox .close::before {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  content: "";
  cursor: default;
}
```

#### 结果

{{EmbedLiveSample('纯 CSS 高亮', 500, 220)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在选择器中使用 :target 伪类](/zh-CN/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)
