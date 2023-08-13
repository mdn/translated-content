---
title: itemprop
slug: Web/HTML/Global_attributes/itemprop
---

{{HTMLSidebar("Global_attributes")}}

全局属性 **`itemprop`**被用于向一个物体中添加属性。每一个 HTML 元素都可以指定一个 itemprop 属性，一个`itemprop`属性由 name-value 对组成。每一个键值对称为一个属性，一个元素可以有一个或者多个属性。属性值可以是一个 string 或者一个 URL，并且可以和大部分元素进行组合，包括{{HTMLElement("audio")}}， {{HTMLElement("embed")}}， {{HTMLElement("iframe")}}， {{HTMLElement("img")}}， {{HTMLElement("link")}}， {{HTMLElement("object")}}， {{HTMLElement("source")}} ， {{HTMLElement("track")}}，和 {{HTMLElement("video")}}。

## 样例

下面的样例展示了一组带有`itemprop`属性的源代码，后面的表格展示了产生的结构化数据。

### HTML

```html
<div itemscope itemtype="http://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span
    >Director:
    <span itemprop="director">James Cameron</span>
    (born August 16, 1954)</span
  >
  <span itemprop="genre">Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html" itemprop="trailer"
    >Trailer</a
  >
</div>
```

### Structured data

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="1" rowspan="2"></td>
      <th colspan="2" rowspan="1">Item</th>
    </tr>
    <tr>
      <th><strong>itemprop name</strong></th>
      <th><strong>itemprop value</strong></th>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Avatar</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>director</td>
      <td>James Cameron</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>genre</td>
      <td>Science fiction</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>trailer</td>
      <td>../movies/avatar-theatrical-trailer.html</td>
    </tr>
  </tbody>
</table>

## 属性

属性拥有的值可能是字符串又或者是 URL。当一个字符串值是一个 URL 的时候，它被用 {{HTMLElement("a")}} 及它的属性值 [`href`](/zh-CN/docs/Web/HTML/Element/a#href)、{{HTMLElement("img")}} 及它的属性值 [`src`](/zh-CN/docs/Web/HTML/Element/img#src) 或者其他被链接到或嵌入外部的资源的元素来表述。

### Three properties with values that are strings

```html
<div itemscope>
  <p>My name is <span itemprop="name">Neil</span>.</p>
  <p>My band is called <span itemprop="band">Four Parts Water</span>.</p>
  <p>I am <span itemprop="nationality">British</span>.</p>
</div>
```

### One property, "image", whose value is a URL

```html
<div itemscope>
  <img itemprop="image" src="google-logo.png" alt="Google" />
</div>
```

当一个字符串值不能令人通俗易懂的时候（e.g.，一个长串的数字和字母），它能被用 data 元素的 value 属性表示，用所给元素内容的更易懂的版本（它不是结构化数据的一部分 - 请看下面的例子）。

### An item with a property whose value is a product ID

ID 不是人性化的，所以产品的名字是用的人所能看懂的文字而不是 ID。

```html
<h1 itemscope>
  <data itemprop="product-id" value="9678AOU879">The Instigator 2000</data>
</h1>
```

对于数字数据，meter 元素及它的 value 属性值能够被用来表述。

### A meter element

```html
<div itemscope itemtype="http://schema.org/Product">
  <span itemprop="name">Panasonic White 60L Refrigerator</span>
  <img src="panasonic-fridge-60l-white.jpg" alt="" />
  <div
    itemprop="aggregateRating"
    itemscope
    itemtype="http://schema.org/AggregateRating">
    <meter itemprop="ratingValue" min="0" value="3.5" max="5">
      Rated 3.5/5
    </meter>
    (based on <span itemprop="reviewCount">11</span>
    customer reviews)
  </div>
</div>
```

与此相类似的，对于日期时间相关的数据，time 元素和他的 datetime 属性值能够被使用表示。

### An item with one property, "birthday", whose value is a date

```html
<div itemscope>
  I was born on
  <time itemprop="birthday" datetime="2009-05-10">May 10th 2009</time>.
</div>
```

通过把元素上的 itemscope 属性中声明属性，属性也可以是一个组 name-values 对。每个值既可以是一个字符串又可以是一组 name-values 对（i.e. 一个项）。

### An outer item representing a person, and an inner one representing a band

```html
<div itemscope>
  <p>Name: <span itemprop="name">Amanda</span></p>
  <p>
    Band:
    <span itemprop="band" itemscope>
      <span itemprop="name">Jazz Band</span>
      (<span itemprop="size">12</span> players)</span
    >
  </p>
</div>
```

上面的外层项有两个属性，“name”和“band”。“name”的值是“Amanda”, “band”的值是一个在它右侧的项决定的，它有两个属性，“name”和“size”。乐队的“name”的值是“Jazz Band”，“size”的值是“12”。这个例子的外层项是顶级微数据标签。不是其他项的项被称为顶级微数据项。

### All the properties separated from their items

这个样例和之前一个一摸一样，但是所有的属性都被从它们的项中分离了出来。

```html
<div itemscope id="amanda" itemref="a b"></div>
<p id="a">Name: <span itemprop="name">Amanda</span></p>
<div id="b" itemprop="band" itemscope itemref="c"></div>
<div id="c">
  <p>Band: <span itemprop="name">Jazz Band</span></p>
  <p>Size: <span itemprop="size">12</span> players</p>
</div>
```

这产生了和之前样例相同的结果。第一个项有两个属性，“name“，设置为“Amanda”和“band”，设置到另一个项去了。第二个项有两个更进一步的属性，“name”设置为“Jazz Band”并且“size”设置为“12”。

一个项可以有多个拥有相同名字但是值不同的属性。

### Ice cream with two flavors

```html
<div itemscope>
  <p>Flavors in my favorite ice cream:</p>
  <ul>
    <li itemprop="flavor">Lemon sorbet</li>
    <li itemprop="flavor">Apricot sorbet</li>
  </ul>
</div>
```

这产生了一个物体有两个属性，都拥有名字 "flavor" 但是却有不同的值 "Lemon sorbet" 和 "Apricot sorbet"。

为了当一些属性有相同值的时候避免重复，一个介绍一个属性的元素同样可以一次性介绍多个属性。

### An item with two properties, "favorite-color" and "favorite-fruit", both set to the value "orange"

```html
<div itemscope>
  <span
    itemprop="favorite-color
    favorite-fruit"
    >orange</span
  >
</div>
```

> **备注：** 微数据和被标记微数据的文档的内容之间是没有关系的。

### Same structured data marked up in two different ways

语义上下面的两个样例没有任何区别。

```html
<figure>
  <img src="castle.jpeg" />
  <figcaption>
    <span itemscope><span itemprop="name">The Castle</span></span> (1986)
  </figcaption>
</figure>
```

```html
<span itemscope><meta itemprop="name" content="The Castle" /></span>
<figure>
  <img src="castle.jpeg" />
  <figcaption>The Castle (1986)</figcaption>
</figure>
```

两者都是拥有标题的图，并且都同时，和图完全无关地，有一个 名字是 "name" 并且值是"The Castle"的键值对的物体项。唯一的区别是如果用户把图片标题拖拽出文档的话，这个项会包含在拖拽的数据中。图像相关的项不会被包括。

## 名字和值

一个属性是一个大小写敏感且展示键值对的包含唯一序列的无序集合。属性的值必须有至少一个序列。下面的这个样例中，每个数据格子都是一个序列。

### Names examples

<table class="standard-table">
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="col"></th>
      <th colspan="2" rowspan="1" scope="col">Item</th>
    </tr>
    <tr>
      <th scope="col">itemprop <strong>name</strong></th>
      <th scope="col">itemprop <strong>value</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>itemprop</th>
      <td>country</td>
      <td>Ireland</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>Option</td>
      <td>2</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>https://www.flickr.com/photos/nlireland/6992065114/</td>
      <td>Ring of Kerry</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>img</td>
      <td>https://www.flickr.com/photos/nlireland/6992065114/</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>website</td>
      <td>flickr</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>(token)</td>
      <td>(token)</td>
    </tr>
  </tbody>
</table>

**序列**既可以是字符串也可以是 URL。如果是一个 URL，那么这个项被称为**类型项**。否则它是一个字符串。字符串不能包括句号和冒号（如下）。

1. 如果项是一个类型项它必须满足：

   1. 是一个被定义的属性名
   2. 一个合法的指向语法定义的 URL
   3. 一个合法的被用来当作所有权项属性名的 URL

2. 如果一个项不是类型项，他必须：

   1. 一个不含 "**.**" (U+002E 句号) 和 "**:**" (U+003A 冒号) 并且被用作一个所有权项的属性名（没有公共规范定义的）

**注意：** 上面的规则不允许 ":" 在没有 URL 的值中 是因为否则它们没法和 URL 作区分。带有"." 的值被保留作为将来可能的拓展。空格也不被允许是因为否则值就会被解析为多个序列。

## 值

The property value of a name-value pair is as given for the first matching case in the following list:

- If the element has an **itemscope** attribute

  - The value is the **item** created by the element.

- If the element is a **meta** element

  - The value is the value of the element's **content** attribute

- If the element is an **audio**, **embed**, **iframe**, **img**, **source**, **track**, or **video** element

  - The value is the resulting URL string that results from parsing the value of the element's src attribute relative to the node document (part of the [Microdata DOM API](/zh-CN/docs/Web/API/Microdata_DOM_API)) of the element at the time the attribute is set

- If the element is an **a**, **area**, or **link** element

  - The value is the resulting URL string that results from parsing the value of the element's href attribute relative to the node document of the element at the time the attribute is set

- If the element is an **object** element

  - The value is the resulting URL string that results from parsing the value of the element's data attribute relative to the node document of the element at the time the attribute is set

- If the element is a **data** element

  - The value is the value of the element's value attribute

- If the element is a **meter** element

  - The value is the value of the element's **value** attribute

- If the element is a **time** element

  - The value is the element's **datetime** value

Otherwise

- The value is the element's **textContent**.

If a property's value is a **URL**, the property must be specified using a URL property element. The URL property elements are the **a**, **area**, **audio**, **embed**, **iframe**, **img**, **link**, **object**, **source**, **track**, and **video** elements.

### Name order

Names are unordered relative to each other, but if a particular name has multiple values, they do have a relative order.

#### In the following example, the "a" property has the values "1" and "2", _in that order_, but whether the "a" property comes before the "b" property or not is not important

```html
<div itemscope>
  <p itemprop="a">1</p>
  <p itemprop="a">2</p>
  <p itemprop="b">test</p>
</div>
```

#### The following is equivalent

```html
<div itemscope>
  <p itemprop="b">test</p>
  <p itemprop="a">1</p>
  <p itemprop="a">2</p>
</div>
```

#### As is the following

```html
<div itemscope>
  <p itemprop="a">1</p>
  <p itemprop="b">test</p>
  <p itemprop="a">2</p>
</div>
```

#### And the following

```html
<div id="x">
  <p itemprop="a">1</p>
</div>
<div itemscope itemref="x">
  <p itemprop="b">test</p>
  <p itemprop="a">2</p>
</div>
```

## 其他样例

### HTML

```html
<dl
  itemscope
  itemtype="http://vocab.example.net/book"
  itemid="urn:isbn:0-330-34032-8">
  <dt>Title</dt>
  <dd itemprop="title">The Reality Dysfunction</dd>
  <dt>Author</dt>
  <dd itemprop="author">Peter F. Hamilton</dd>
  <dt>Publication date</dt>
  <dd><time itemprop="pubdate" datetime="1996-01-26">26 January 1996</time></dd>
</dl>
```

### Structured data

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="1" rowspan="14">itemscope</td>
      <td>itemtype: itemid</td>
      <td colspan="2" rowspan="1">
        http://vocab.example.net/book: urn:isbn:0-330-34032-8
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>title</td>
      <td>The Reality Dysfunction</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>author</td>
      <td>Peter F. Hamilton</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>pubdate</td>
      <td>1996-01-26</td>
    </tr>
  </tbody>
</table>

### Result

{{EmbedLiveSample('其他样例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 查看其他

- [其他不同的全局属性](/zh-CN/docs/Web/HTML/Global_attributes)
- 其他，微数据相关的全局属性：

  - [`itemid`](/zh-CN/docs/Web/HTML/Global_attributes#itemid)
  - [`itemprop`](/zh-CN/docs/Web/HTML/Global_attributes#itemprop)
  - [`itemref`](/zh-CN/docs/Web/HTML/Global_attributes#itemref)
  - [`itemscope`](/zh-CN/docs/Web/HTML/Global_attributes#itemscope)
  - [`itemtype`](/zh-CN/docs/Web/HTML/Global_attributes#itemtype)
