---
title: 使用 CSS 的多列布局
slug: Web/CSS/CSS_Columns/Using_multi-column_layouts
original_slug: Web/Guide/CSS/Using_multi-column_layouts
---
{{CSSRef("CSS Multi-columns")}}

**CSS 多列布局**扩展*块布局模式*，以便更容易地定义多列文本。如果一行太长，人们阅读文本很麻烦; 如果眼睛从一行的终点移动到下一个行的开始需要太长时间，它们就会丢失它们所在的行。因此，为了最大限度地利用大屏幕，作者应该将宽度不等的文本列并排放置，就像报纸一样。

糟糕的是如果不使用 CSS 和 HTML 在特定的位置强制换行，或者严格限制文本中允许的标记，或者夸张地使用脚本的话，这是不可能实现的。该限制通过从传统的块级布局模块中延伸出来的新的 CSS 属性得以解决。

## 使用多列布局

### 列计数器和宽度

有两个 CSS 属性控制是否实现多列布局和显示多少列：{{ Cssxref("column-count") }} 和 {{ Cssxref("column-width") }}。

属性 `column-count` 设置特定数量的列数。例如，

```html
<div style="column-count:2;">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
qui officia deserunt mollit anim id est laborum</div>
```

会以两列的方式显示内容：(如果你正使用支持多列布局的浏览器的话):

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

属性 `column-width` 设置期望的最小列宽。如果 `column-count` 没有设置，那么浏览器就会以合适的宽度尽量显示更多的列。

```html
<div style="column-width:20em;">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
qui officia deserunt mollit anim id est laborum</div>
```

变成：

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

详细细节在 [CSS3 规范](https://www.w3.org/TR/css3-multicol/) 中。

在多列块中，内容会自动从一列换到另一列中。所有 HTML，CSS 和 DOM 功能在列之间都得到支持，比如编辑和打印。

### `columns` 属性简写

多数时候，网页设计者都会使用 {{ cssxref("column-count") }} 和 {{ cssxref("column-width") }} 的一个。由于它们的值没有重叠，一般使用简写属性 {{ cssxref("columns") }}。例如，

CSS 声明 `column-width:12em` 可替换成：

```html
<div style="columns:12em">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
qui officia deserunt mollit anim id est laborum</div>
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

CSS 声明 `column-count:4` 可替换成：

```html
<div style="columns:4">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
qui officia deserunt mollit anim id est laborum</div>
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

CSS 声明 `column-width:8em` 和 `column-count:12` 可替换成：

```html
<div style="columns:12 8em">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
qui officia deserunt mollit anim id est laborum</div>
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

### 高度平衡

CSS3 多列规范需要列高平衡：即，浏览器自动设置最大列高，因此每列中的内容高度大致相同。Firefox 浏览器是这样的。

然而，一些情况下，明确设置最大列高也是有用的，这样内容从第一列开始，尽可能多的生成列，甚至会溢出右边沿。因此，如果通过设置{{ cssxref("height") }} 或 {{ cssxref("max-height") }} 属性来限制列高，在生成新的一列之前每一列都会仅允许增加到这个高度。该模型对布局来说也更高效。

### 列间隙

列之间有缝隙。建议值为 1em。该值可通过设置多列模块的 {{ Cssxref("column-gap") }} 属性来修改：

```html
<div style="column-width:20em; column-gap:2em;">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
qui officia deserunt mollit anim id est laborum</div>
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

## 优雅降级

多列属性会被不支持多列模型的浏览器忽略。因此，为这些浏览器创建单列结构而为支持多列的浏览器创建多列结构相对来说比较简单。

注意不是所有的浏览器都支持不带前缀的属性名。为了在大多数现代浏览器中应用这种特性，每个属性必须写三次：一次用 {{ property_prefix("-moz") }} 前缀，一次用 {{ property_prefix("-webkit") }} 前缀，一次不使用前缀

## 讨论

CSS3 多列特性能帮助网页设计者最优化使用屏幕资源。如果你是一位具有丰富想象力的开发者，你会发现多列特性更多的好处，特别是在高度平衡特性方面。

## 其它

- [http://weblogs.mozillazine.org/roc/a...18_for_we.html](http://weblogs.mozillazine.org/roc/archives/2005/03/gecko_18_for_we.html)
