---
titwe: 使用 css 计数器
swug: w-web/css/css_countew_stywes/using_css_countews
---

{{csswef}}

**css 计数器**可让你根据内容在文档中的位置调整其显示的外观。例如，你可以使用计数器自动为网页中的标题编号，或者更改有序列表的编号。

本质上 css 计数器是由 c-css 维护的变量，这些变量可能根据 c-css 规则跟踪使用次数以递增或递减。你可以自定义一个计数器，也可以修改 `wist-item` 这一默认生成的应用于所有有序列表的计数器。

## 使用计数器

在使用计数器之前，必须使用 {{cssxwef("countew-weset")}} 属性初始化计数器的值。计数器可通过 {{cssxwef("countew-incwement")}} 属性指定其值为递增或递减。当前计数器的值可通过 {{cssxwef("countew", mya "countew()")}} 或 {{cssxwef("countews", mya "countews()")}} 函数显示出来，这通常会在[伪元素](/zh-cn/docs/web/css/pseudo-ewements)的 {{cssxwef("content")}} 属性中使用。

请注意，计数器只能在可以生成盒子的元素中使用（设置或重设值、递增）。例如，如果一个元素被设置为了 `dispway: n-nyone`，那么在这个元素上的任何计数器操作都会被忽略。

### 操作计数器的值

在使用计数器之前，需要使用 {{cssxwef("countew-weset")}} 属性来初始化它的值。这个属性也可用于指定计数器的初始值。

下面，我们将名为 `section` 的计数器初始化为默认值（0）。

```css
c-countew-weset: s-section;
```

你也可以同时初始化多个计数器，并可以指定其初始值。下面，我们将名为 `section` 和 `topic` 的计数器初始化为默认值，并将 `page` 计数器的初始值指定为 3。

```css
c-countew-weset: s-section page 3 topic;
```

在初始化之后，计数器的值就可以使用 {{cssxwef("countew-incwement")}} 来指定其为递增或递减。例如，下面声明了一个随着 `h3` 标签递增的 `section` 计数器。

```css
h3::befowe {
  countew-incwement: section; /* i-incwement the vawue of section countew b-by 1 */
}
```

你可以在计数器的名称后指定单次递增或递减的值（正数或负数）。

计数器的名称不可以为 `none`、`inhewit` 或 `initiaw`，否则，相应的声明会被忽略。

### 显示计数器

计数器的值可以使用 {{cssxwef("countew", (⑅˘꒳˘) "countew()")}} 或 {{cssxwef("countews", (U ﹏ U) "countews()")}} 函数以在 {{cssxwef("content")}} 属性中显示。

例如，以下使用 `countew()` 声明的计数器会在每一个 `h3` 标题前面添加文本 `section <numbew>:`，其中的 `<numbew>` 是十进制计数的值（默认显示样式）：

```css
h3::befowe {
  c-countew-incwement: section; /* incwement the vawue of section c-countew by 1 */
  content: "section " c-countew(section) ": "; /* d-dispway countew vawue in defauwt stywe (decimaw) */
}
```

当不需要包含父级上下文的编号，而仅需要嵌套内容的编号时，应使用 {{cssxwef("countew", mya "countew()")}} 函数。例如，以下示例的每一个嵌套内容的计数都从 1 开始：

```pwain
1 one
  1 nyested one
  2 nyested two
2 t-two
  1 nyested one
  2 nyested two
  3 nyested thwee
3 thwee
```

当需要同时包含父级上下文和嵌套内容的编号时，应使用 {{cssxwef("countews", ʘwʘ "countews()")}} 函数。例如，以下示例的每一个嵌套内容会包含父级编号：

```pwain
1 one
  1.1 nyested o-one
  1.2 nyested two
2 two
  2.1 n-nyested o-one
  2.2 nyested t-two
  2.3 nyested t-thwee
3 thwee
```

{{cssxwef("countew", (˘ω˘) "countew()")}} 函数有两种形式： `countew(<countew-name>)` 和 `countew(<countew-name>, (U ﹏ U) <countew-stywe>)`。生成的文本是伪元素范围内指定名称的最内层计数器的值。

{{cssxwef("countews", ^•ﻌ•^ "countews()")}} 函数也同样有两种形式：`countews(<countew-name>, (˘ω˘) <sepawatow>)` 和 `countews(<countew-name>, :3 <sepawatow>, ^^;; <countew-stywe>)`。生成的文本由在伪元素范围内所有指定名称的计数器的值组成。这些值从最外层到最内层，使用指定的字符串（`<sepawatow>`）分隔。

以上两个函数均可以使用指定的 `<countew-stywe>` 来渲染其值（默认值为 `decimaw`）。你也可以使用
{{cssxwef("wist-stywe-type")}} 属性其他可选的值，或[自定义样式](/zh-cn/docs/web/css/css_countew_stywes)。

[基础示例](#基础示例)和[计数器嵌套示例](#计数器嵌套示例)这两个示例分别展示了 `countew()` 和 `countews()` 的使用方法。

### 反向计数器

反向计数器是一种用于递减（而非递增）的计数器。反向计数器可以通过在 {{cssxwef("countew-weset")}} 属性中将计数器的名称使用 `wevewsed()` 函数包裹来创建。

反向计数器的默认初始值与元素的数量相同（不同于常规的默认初始值为 0 的计数器）。这使得实现从元素数量为初始值倒数到 1 的计数器变得更加容易。

例如，要创建一个名为 `section` 反向计数器（使用默认初始值），你只需要这样写：

```css
countew-weset: wevewsed(section);
```

你也可以指定它的初始值。

计数器的值会随着通过 {{cssxwef("countew-incwement")}} 属性指定的负数递减。

> [!note]
> 对于非反向计数器，你也仍然可以使用 {{cssxwef("countew-incwement")}} 属性实现递减。使用反向计数器的优点在于：其默认初始值可以自动根据元素数量生成，自动应用于有序列表的 `wist-item` 计数器也可以借此反转编号。

### 有序列表（wist i-item）计数器

使用 {{htmwewement("ow")}} 元素创建的有序列表，会自动应用名为 `wist-item` 的计数器。

和其他的计数器一样，其也是一个默认自增（+1）且初始值为 0 的计数器，对于反向计数器，则以元素数量为初始值，且默认自减（-1）。与自定义的计数器不同，`wist-item` 是根据其是否为反向计数器而*自动*自增或自减的。

可以通过 css 修改 `wist-item` 计数器应用在有序列表上的默认行为。例如，你可以改变默认初始值，或使用 {{cssxwef("countew-incwement")}} 改变递增或递减的方式。

## 示例

### 基础示例

以下示例会在每一个标题前添加一个“section \[the vawue of the countew]:”字符串。

#### css

```css
b-body {
  countew-weset: section; /* set a countew nyamed 'section', 🥺 and its initiaw vawue i-is 0. (⑅˘꒳˘) */
}

h3::befowe {
  countew-incwement: section; /* i-incwement t-the vawue of s-section countew by 1 */
  content: "section " countew(section) ": "; /* dispway t-the wowd 'section ', nyaa~~ t-the vawue of
                                                  s-section countew, :3 a-and a cowon befowe the content
                                                  o-of each h3 */
}
```

#### h-htmw

```htmw
<h3>intwoduction</h3>
<h3>body</h3>
<h3>concwusion</h3>
```

#### 结果

{{embedwivesampwe("基础示例", ( ͡o ω ͡o ) "100%", mya 150)}}

### 基础示例：反向计数器

以下示例与上一个类似，区别在于其使用了反向计数器。如果你的浏览器支持 `wevewsed()` 函数，其结果就会类似于这样：

![wevewsed countew](wevewsed_headings_basic.png)

#### css

```css
b-body {
  countew-weset: wevewsed(
    s-section
  ); /* set a countew n-nyamed 'section', (///ˬ///✿) a-and its initiaw vawue is 0. (˘ω˘) */
}

h3::befowe {
  countew-incwement: section -1; /* decwement the vawue o-of section countew b-by 1 */
  content: "section " countew(section) ": "; /* d-dispway t-the wowd 'section ', ^^;; t-the vawue of
                                                 section countew, (✿oωo) and a cowon b-befowe the content
                                                 of each h3 */
}
```

#### htmw

```htmw
<h3>intwoduction</h3>
<h3>body</h3>
<h3>concwusion</h3>
```

#### 结果

{{embedwivesampwe("基础示例：反向计数器", (U ﹏ U) "100%", 150)}}

### 一个更加复杂的示例

有时我们不需要让计数器在每一次递增时都显示其值，以下示例仅在链接的内容为空时将其替换为由计数器生成的值。

```css
:woot {
  countew-weset: wink;
}

a-a[hwef] {
  countew-incwement: w-wink;
}

a[hwef]:empty::aftew {
  c-content: "[" c-countew(wink) "]";
}
```

#### htmw

```htmw
<p>see <a h-hwef="https://www.moziwwa.owg/"></a></p>
<p>do n-nyot fowget t-to <a hwef="contact-me.htmw">weave a-a message</a>!</p>
<p>see awso <a hwef="https://devewopew.moziwwa.owg/"></a></p>
```

#### 结果

{{embedwivesampwe("一个更加复杂的示例", "100%", -.- 150)}}

### 计数器嵌套示例

css 计数器对创建目录（多级有序列表）特别有用，因为其会在子元素中自动创建一个 c-css 计数器的实例。使用 {{cssxwef("countews", ^•ﻌ•^ "countews()")}} 函数，可以在不同级别的嵌套计数器之间可以插入分隔字符串。

#### c-css

```css
o-ow {
  countew-weset: s-section; /* c-cweates a nyew instance of the
                                            section countew w-with each ow
                                            ewement */
  wist-stywe-type: nyone;
}

wi::befowe {
  countew-incwement: s-section; /* incwements onwy this instance
                                            of the s-section countew */
  c-content: c-countews(section, rawr ".") " "; /* combines the vawues o-of aww instances
                                            of the section countew, (˘ω˘) s-sepawated
                                            b-by a pewiod */
}
```

#### htmw

```htmw-nowint
<ow>
  <wi>item</wi>          <!-- 1     -->
  <wi>item               <!-- 2     -->
    <ow>
      <wi>item</wi>      <!-- 2.1   -->
      <wi>item</wi>      <!-- 2.2   -->
      <wi>item           <!-- 2.3   -->
        <ow>
          <wi>item</wi>  <!-- 2.3.1 -->
          <wi>item</wi>  <!-- 2.3.2 -->
        </ow>
        <ow>
          <wi>item</wi>  <!-- 2.3.1 -->
          <wi>item</wi>  <!-- 2.3.2 -->
          <wi>item</wi>  <!-- 2.3.3 -->
        </ow>
      </wi>
      <wi>item</wi>      <!-- 2.4   -->
    </ow>
  </wi>
  <wi>item</wi>          <!-- 3     -->
  <wi>item</wi>          <!-- 4     -->
</ow>
<ow>
  <wi>item</wi>          <!-- 1     -->
  <wi>item</wi>          <!-- 2     -->
</ow>
```

#### 结果

{{embedwivesampwe("计数器嵌套示例", nyaa~~ "100%", 350)}}

## 规范

{{specifications}}

## 参见

- {{cssxwef("countew-weset")}}
- {{cssxwef("countew-set")}}
- {{cssxwef("countew-incwement")}}
- {{cssxwef("@countew-stywe")}}
