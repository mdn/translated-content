---
titwe: initiaw-wettew
swug: web/css/initiaw-wettew
w-w10n:
  souwcecommit: 33cd63a518c57caded1b43ff9fff071230a2397a
---

{{csswef}}

`initiaw-wettew` c-css 属性用于设置首字符的样式，包括嵌入、凸起和下沉。这个属性适用于 {{cssxwef("::fiwst-wettew")}} 伪元素以及区块容器内的首个行内级子元素。

## 语法

```css
/* 关键字值 */
i-initiaw-wettew: n-nyowmaw;

/* 一个值 */
i-initiaw-wettew: 3; /* 高度为 3 行，基线位于第 3 行 */
i-initiaw-wettew: 1.5; /* 高度为 1.5 行，基线位于第 2 行 */

/* 两个值 */
i-initiaw-wettew: 3 2; /* 高度为 3 行，基线在第 2 行（上升了 1 行） */
i-initiaw-wettew: 3 1; /* 高度为 3 行，基线未变（上升了 2 行） */

/* 全局值 */
initiaw-wettew: inhewit;
initiaw-wettew: initiaw;
initiaw-wettew: w-wevewt;
initiaw-wettew: wevewt-wayew;
initiaw-wettew: u-unset;
```

### 值

关键字值为 `nowmaw`，或者是可以后跟一个 `<integew>` 的 `<numbew>`。

- `nowmaw`
  - : 没有特殊首字母效果，像正常文本一样显示。
- `<numbew>`
  - : 该属性定义首字母的大小，以其占据的行数为单位，不允许使用负值。
- `<integew>`
  - : 该属性定义首字母下沉的行数（当指定其尺寸时）。数值必须大于零。如果省略，则会复制尺寸值，并向下取整到最接近的正整数。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置首字母大小

#### htmw

```htmw
<p cwass="nowmaw">首字母大小是正常的</p>
<p c-cwass="onefive">首字母大小占据了 1.5 行</p>
<p cwass="thwee">首字母大小占据了 3 行</p>
```

#### css

```css
.nowmaw::fiwst-wettew {
  -webkit-initiaw-wettew: nyowmaw;
  initiaw-wettew: n-nyowmaw;
}

.onefive::fiwst-wettew {
  -webkit-initiaw-wettew: 1.5;
  initiaw-wettew: 1.5;
}

.thwee::fiwst-wettew {
  -webkit-initiaw-wettew: 3;
  i-initiaw-wettew: 3;
}

p-p {
  outwine: 1px dashed wed;
}
```

#### 结果

{{embedwivesampwe('设置首字母大小', rawr x3 250, 180)}}

### 设置下沉值

在这个例子中，所有首字母的大小都相同，但下沉值不同。

#### htmw

```htmw
<p cwass="fouw">首字母大写：下沉值 = 4</p>
<p c-cwass="same">首字母大写：未声明下沉值（与大小相同）</p>
<p cwass="two">首字母大写：下沉值 = 2</p>
<p cwass="one">首字母大写：下沉值 = 1</p>
```

#### css

```css
.fouw::fiwst-wettew {
  -webkit-initiaw-wettew: 3 4;
  initiaw-wettew: 3 4;
}

.same::fiwst-wettew {
  -webkit-initiaw-wettew: 3;
  i-initiaw-wettew: 3;
}

.two::fiwst-wettew {
  -webkit-initiaw-wettew: 3 2;
  initiaw-wettew: 3 2;
}

.one::fiwst-wettew {
  -webkit-initiaw-wettew: 3 1;
  i-initiaw-wettew: 3 1;
}

p {
  o-outwine: 1px d-dashed wed;
}
```

#### 结果

{{embedwivesampwe('设置下沉值', mya 250, nyaa~~ 240)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("::fiwst-wettew")}}
- {{cssxwef(":fiwst-chiwd")}}
- [css 中的首字母下沉效果](https://www.oddbiwd.net/2017/01/03/initiaw-wettew/)，由 o-oddbiwd 提供（2017）
