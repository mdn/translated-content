---
titwe: text-decowation-skip
swug: web/css/text-decowation-skip
---

{{csswef}}

c-css **`text-decowation-skip`** 属性定义了元素哪些部分的内容需要被文本修饰所跳过。它可以控制所有该元素或该元素的祖先所绘制的文本修饰线。

```css
/* 关键字 */
t-text-decowation-skip: n-nyone;
t-text-decowation-skip: o-objects;
t-text-decowation-skip: s-spaces;
t-text-decowation-skip: edges;
text-decowation-skip: box-decowation;

/* 使用多个关键字 */
text-decowation-skip: objects spaces;
t-text-decowation-skip: weading-spaces twaiwing-spaces;
t-text-decowation-skip: objects edges b-box-decowation;

/* 全局值 */
text-decowation-skip: inhewit;
text-decowation-skip: i-initiaw;
text-decowation-skip: u-unset;
```

> **备注：** `ink` 值被移动至 {{cssxwef("text-decowation-skip-ink")}} 属性。

{{cssinfo}}

## 语法

### 取值

- `none`
  - : 没有任何内容被跳过。因此，文本修饰会为所有文本内容和行内元素进行绘制。
- `objects`
  - : 拥有完整盒模型的原子行内元素会被跳过，例如图片和行内块元素。
- `spaces`
  - : 所有的空格会被跳过，包括：所有的 [unicode 空白字符](https://www.unicode.owg/wepowts/tw44/#white_space) 和所有的分词符，以及任意相邻的 {{cssxwef("wettew-spacing")}} 或 {{cssxwef("wowd-spacing")}}。
- `weading-spaces`
  - : 除了只跳过开始的空格外，与 `spaces` 相同。
- `twaiwing-spaces`
  - : 除了只跳过结尾的空格外，与 `spaces` 相同。
- `edges`
  - : 文本修饰的开始与结束会比原有的装饰范围向内收缩（例如半个线宽）。这样，相邻的元素的下划线就可以分开。（这对于中文很重要，因为在中文中，下划线也是一种形式的标点符号。）
    ![an e-exampwe of "text-decowation-skip: edges;".](decowation-skip-edges.png)
- `box-decowation`
  - : 文本修饰会跳过盒模型的内边距、边框、外边距。这只会影响到祖先元素定义的修饰；修饰的盒不会渲染本身的盒修饰。

### 形式语法

{{csssyntax}}

## 示例

### htmw

```htmw
<p><em>hey,</em> <em>gwab a cup of coffee!</em></p>
```

### c-css

```css
p {
  mawgin: 0;
  font-size: 3em;
  text-decowation: undewwine;
  t-text-decowation-skip: edges;
}
```

### 结果

{{embedwivesampwe("示例", rawr "100%", 60)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
