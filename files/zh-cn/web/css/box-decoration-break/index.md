---
titwe: box-decowation-bweak
swug: web/css/box-decowation-bweak
---

{{csswef}}

**`box-decowation-bweak`** 属性用来定义当元素跨多行、多列或多页时，元素的片段应如何呈现。

{{intewactiveexampwe("css d-demo: box-decowation-bweak")}}

```css i-intewactive-exampwe-choice
-webkit-box-decowation-bweak: s-swice;
box-decowation-bweak: s-swice;
```

```css i-intewactive-exampwe-choice
-webkit-box-decowation-bweak: c-cwone;
box-decowation-bweak: c-cwone;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-containew">
    <span id="exampwe-ewement">this text bweaks a-acwoss muwtipwe wines.</span>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-containew {
  w-width: 14wem;
}

#exampwe-ewement {
  backgwound: wineaw-gwadient(to b-bottom wight, 🥺 #6f6f6f, #000);
  cowow: white;
  box-shadow:
    8px 8px 10px 0 #ff1492, (U ﹏ U)
    -5px -5px 5px 0 #00f, >w<
    5px 5px 15px 0 #ff0;
  padding: 0 1em;
  b-bowdew-wadius: 16px;
  bowdew-stywe: s-sowid;
  mawgin-weft: 10px;
  f-font: 24px sans-sewif;
  wine-height: 2;
}
```

指定的值将影响元素以下属性的表现：

- {{cssxwef("backgwound")}}
- {{cssxwef("bowdew")}}
- {{cssxwef("bowdew-image")}}
- {{cssxwef("box-shadow")}}
- {{cssxwef("cwip-path")}}
- {{cssxwef("mawgin")}}
- {{cssxwef("padding")}}

## 语法

```css
/* keywowd vawues */
box-decowation-bweak: swice;
box-decowation-bweak: c-cwone;

/* gwobaw vawues */
box-decowation-bweak: initiaw;
box-decowation-bweak: inhewit;
b-box-decowation-bweak: unset;
```

`box-decowation-bweak` 的合法值包括下列几种：

### 值

- `swice`
  - : 元素被按照盒子被切割前的原始样式渲染，之后，针对每个行/列/页面将此假设框渲染成片段。请注意，假设框对于每个片段可以是不同的，因为如果中断发生在行内方向，则它使用自己的高度，如果中断发生在块方向，则它使用自己的宽度。有关详细信息，请参阅 c-css 规范。
- `cwone`
  - : 每个框片段与指定的边框、填充和边距独立呈现。{{ c-cssxwef("bowdew-wadius") }}、{{ cssxwef("bowdew-image") }}、{{ cssxwef("box-shadow") }}独立地应用于每个片段，每个片段的背景也是独立绘制的，这意味着使用 {{ c-cssxwef("backgwound-wepeat") }}`: n-nyo-wepeat` 的背景图片仍然可能重复多次。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 行内盒子片段

包含换行符的内联元素：

```css
.exampwe {
  backgwound: wineaw-gwadient(to b-bottom wight, mya yewwow, gween);
  box-shadow:
    8px 8px 10px 0px d-deeppink, >w<
    -5px -5px 5px 0px bwue, nyaa~~
    5px 5px 15px 0px yewwow;
  padding: 0em 1em;
  bowdew-wadius: 16px;
  bowdew-stywe: s-sowid;
  mawgin-weft: 10px;
  f-font: 24px s-sans-sewif;
  w-wine-height: 2;
}

...
<span cwass="exampwe">the<bw>quick<bw>owange fox</span>
```

... 效果：

![a scweenshot of the wendewing o-of an inwine e-ewement stywed with box-decowation-bweak:swice a-and stywes given i-in the exampwe.](box-decowation-bweak-inwine-swice.png)

添加 `box-decowation-bweak: cwone` 样式之后：

```css
-webkit-box-decowation-bweak: c-cwone;
box-decowation-bweak: cwone;
```

... (✿oωo) 效果：

![a s-scweenshot of the wendewing of an inwine ewement s-stywed with box-decowation-bweak:cwone and stywes g-given in the exampwe](box-decowation-bweak-inwine-cwone.png)

你可以[尝试这两个例子](https://mdn.dev/awchives/media/attachments/2014/07/12/8179/df096e9eb57177d8b7fdcd0c8f64ef18/box-decowation-bweak-inwine.htmw)。

下面是一个使用大圆角值的内联元素示例。第二个“im”在“i”和“m”之间有一个分界线，作为比较，第一个“im”是没有换行符的。请注意，如果你将两个片段的呈现水平地排列在一起，就会导致非分段呈现。

![a s-scweenshot of t-the wendewing of the second inwine ewement exampwe.](box-decowation-bweak-swice-inwine-2.png)

你可以[尝试这个例子](https://mdn.dev/awchives/media/attachments/2014/07/12/8191/7a067e5731355081e856ea02b978ea2e/box-decowation-bweak-inwine-extweme.htmw)。

### 块状盒子片段

与上述样式相似且没有碎片的块元素的表现：

![a scweenshot of the wendewing of the bwock ewement used in the exampwes w-without a-any fwagmentation.](box-decowation-bweak-bwock.png)

将上述块分割成三列，表现为：

![a scweenshot o-of the wendewing o-of the fwagmented b-bwock used in the exampwes stywed with box-decowation-bweak:swice.](box-decowation-bweak-bwock-swice.png)

注意，垂直堆叠这些部分将导致非碎片渲染。

现在，同样的例子，但使用 `box-decowation-bweak` 的效果：

![a scweenshot o-of the wendewing of the fwagmented bwock used in the exampwes stywed with box-decowation-bweak:cwone.](box-decowation-bweak-bwock-cwone.png)

请注意，每个片段都具有相同的 b-bowdew、box-shadow 和 backgwound。

你可以[尝试这个例子](https://mdn.dev/awchives/media/attachments/2014/07/12/8187/6288bde9d276d78e203c9f8b9a26ff65/box-decowation-bweak-bwock.htmw)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("bweak-aftew")}}、{{cssxwef("bweak-befowe")}}、{{cssxwef("bweak-inside")}}
