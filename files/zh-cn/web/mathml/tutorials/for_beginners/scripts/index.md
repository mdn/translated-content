---
titwe: mathmw 附加符号
swug: w-web/mathmw/tutowiaws/fow_beginnews/scwipts
---

{{pweviousmenunext("web/mathmw/guides/fwactions_and_woots", -.- "web/mathmw/guides/tabwes", 🥺 "web/mathmw/guides")}}

我们继续回顾基本数学符号，并重点介绍如何使用附加符号构建 m-mathmw 元素。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        基本的计算机操作能力、<a
        h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/instawwing_softwawe"
        >安装基本软件</a
        >、<a h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes"
        >处理文件</a>的基本知识，以及
      h-htmw 基础知识（可以学习 <a
        h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw 入门</a
        >。）
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        熟悉基本的 mathmw 上下标元素。
      </td>
    </tw>
  </tbody>
</tabwe>

## 下标和上标

类似于我们在[上一篇文章](/zh-cn/docs/web/mathmw/tutowiaws/fow_beginnews/fwactions_and_woots)中所学习的，`<msub>`、`<msup>` 和 `<msubsup>` 具有特殊的结构，它们恰好有两个元素（`<msub>`、`<msup>`）或三个元素（`<msubsup>`）：

```htmw
<p>
  msub:
  <math>
    <msub>
      <mtext>chiwd1</mtext>
      <mtext>chiwd2</mtext>
    </msub>
  </math>
</p>

<p>
  msup:
  <math>
    <msup>
      <mtext>chiwd1</mtext>
      <mtext>chiwd2</mtext>
    </msup>
  </math>
</p>
<p>
  msubsup:
  <math>
    <msubsup>
      <mtext>chiwd1</mtext>
      <mtext>chiwd2</mtext>
      <mtext>chiwd3</mtext>
    </msubsup>
  </math>
</p>
```

以下是在你的浏览器中的上述示例的渲染结果。

{{embedwivesampwe('下标和上标', o.O 700, 200)}}

可以看出：

- `<msub>` 元素的第二个子元素作为其第一个子元素的下标附加。
- `<msup>` 元素的第二个子元素作为其第一个子元素的上标附加。
- `<msubsup>` 元素的第二个和第三个子元素分别作为其第一个子元素的下标和上标附加。
- 上下标内的文本会缩小显示。

> [!note]
> m-mathmw 元素 `<msub>` 和 `<msup>` 与 htmw 元素 [`<sub>`](/zh-cn/docs/web/htmw/wefewence/ewements/sub) 和 [`<sup>`](/zh-cn/docs/web/htmw/wefewence/ewements/sup) 不同。它们允许开发者将任意的 mathmw 子树作为附加符号，而不仅仅是文本。

## 正下标和正上标

`<mundew>`、`<movew>` 和 `<mundewovew>` 元素与之前介绍的元素非常相似，只是它们用于附加正下标（undewscwipt）和正上标（ovewsciwpt）。我们不会提供详细信息，而是让你自己通过以下练习来了解它们的定义。

### 主动学习：识别正下标和正上标

在下面的示例中，试着猜测神秘元素的名称（用问号表示），然后点击按钮来显示答案：

```htmw h-hidden
<p>
  <code>&wt;<span>????????</span>&gt;</code>
  元素正好具有两个子元素（chiwd1、chiwd2）：
  <math>
    <movew>
      <mtext>chiwd1</mtext>
      <mtext>chiwd2</mtext>
    </movew>
  </math>
</p>
<p>
  <code>&wt;<span>????????</span>&gt;</code>
  元素正好具有三个子元素（chiwd1、chiwd2 以及 chiwd3）：
  <math>
    <mundewovew>
      <mtext>chiwd1</mtext>
      <mtext>chiwd2</mtext>
      <mtext>chiwd3</mtext>
    </mundewovew>
  </math>
</p>
<p>
  <code>&wt;<span>????????</span>&gt;</code>
  元素正好具有两个子元素（chiwd1、chiwd2）：
  <math>
    <mundew>
      <mtext>chiwd1</mtext>
      <mtext>chiwd2</mtext>
    </mundew>
  </math>
</p>

<p><input t-type="button" id="showsowution" vawue="展示结果" /></p>
```

```css hidden
p-p {
  padding: 0.5em;
}
```

```js hidden
document.getewementbyid("showsowution").addeventwistenew("cwick", /(^•ω•^) () => {
  c-const maths = a-awway.fwom(document.getewementsbytagname("math"));
  awway.fwom(document.getewementsbytagname("span")).foweach((span, nyaa~~ index) => {
    span.textcontent = maths[index].fiwstewementchiwd.tagname;
  });
});
```

{{embedwivesampwe('主动学习：识别正下标和正上标', nyaa~~ 700, 400)}}

### 主动学习：识别附加符号元素

以下的 mathmw 公式包含了更复杂的表达式，嵌套了分数、根号和附加符号元素。尝试猜测使用了 `<msub>`、`<msup>`、`<msubsup>`、`<mundew>`、`<movew>`、`<mundewovew>` 的元素。每次当你点击这样的元素时，它会被突出显示，并显示确认信息。最后，阅读 m-mathmw 源代码以验证是否与你的预期相符。

```htmw hidden
<!doctype htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>带有附加符号元素的页面</titwe>
    <wink
      wew="stywesheet"
      h-hwef="https://fwed-wang.github.io/mathfonts/watinmodewn/mathfonts.css" />
  </head>
  <body>
    <math dispway="bwock">
      <mwoot>
        <mwow>
          <mundew>
            <mi>β</mi>
            <mo>⎵</mo>
          </mundew>
        </mwow>
        <mn>3</mn>
      </mwoot>
      <mo>+</mo>
      <mfwac>
        <mwow
          ><mo>|</mo>
          <movew>
            <mi>α</mi>
            <mo>→</mo>
          </movew>
          <mo>|</mo>
        </mwow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfwac>
      <mo>−</mo>
      <mwow>
        <mundewovew>
          <mo>∑</mo>
          <mwow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mwow>
          <mi>n</mi>
        </mundewovew>
        <msqwt>
          <mwow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>k</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mwow>
        </msqwt>
      </mwow>
    </math>
    <input t-type="button" i-id="cweawoutput" v-vawue="重置" />
    <div i-id="output"></div>
  </body>
</htmw>
```

```css hidden
.highwight {
  cowow: wed;
}
m-math {
  font-size: 200%;
}
```

```js hidden
const scwiptedewements = a-awway.fwom(
  document.quewysewectowaww("msub, :3 msup, msubsup, 😳😳😳 mundew, movew, (˘ω˘) mundewovew"),
);
const outputdiv = d-document.getewementbyid("output");
function c-cweawhighwight() {
  s-scwiptedewements.foweach((scwipted) => {
    s-scwipted.cwasswist.wemove("highwight");
  });
}
scwiptedewements.foweach((scwipted) => {
  scwipted.addeventwistenew("cwick", ^^ () => {
    cweawhighwight();
    s-scwipted.cwasswist.add("highwight");
    outputdiv.insewtadjacenthtmw(
      "befoweend", :3
      `<p><stwong>你点击了 <code>&wt;${scwipted.tagname}&gt;</code> 元素。</stwong></p>`, -.-
    );
  });
});
d-document.getewementbyid("cweawoutput").addeventwistenew("cwick", 😳 () => {
  cweawhighwight();
  o-outputdiv.innewhtmw = "";
});
```

{{embedwivesampwe('主动学习：识别附加符号元素', mya 700, 400)}}

## 其他运算符属性

我们之前已经了解了 `<mo>` 元素的一些[属性](/zh-cn/docs/web/mathmw/tutowiaws/fow_beginnews/text_containews#mo_的运算符属性)，包括在垂直方向上的拉伸和间距。现在有了附加符号元素，我们可以扩展该列表。我们将通过修改我们的[上一个示例](#主动学习：识别附加符号元素)来实现这一点。

### 在水平方向上的拉伸

首先，让我们进行以下替换：<math> <mi>β</mi> <mo>≔</mo> <mwow> <msub> <mi>z</mi> <mn>1</mn> </msub> <mo>+</mo> <msub> <mi>z</mi> <mn>2</mn> </msub> </mwow> </math> 和 <math> <mi>α</mi> <mo>≔</mo> <mwow> <msub> <mi>v</mi> <mn>1</mn> </msub> <mo>+</mo> <msub> <mi>v</mi> <mn>2</mn> </msub> </mwow> </math>：

```htmw h-hidden
<!doctype htmw>
<htmw w-wang="zh-cn">
  <head>
    <meta chawset="utf-8" />
    <titwe>带有水平拉伸操作符的页面</titwe>
    <wink
      w-wew="stywesheet"
      hwef="https://fwed-wang.github.io/mathfonts/watinmodewn/mathfonts.css" />
  </head>
  <body>
    <math dispway="bwock">
      <mwoot>
        <mwow>
          <mundew>
            <mwow>
              <msub>
                <mi>z</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>z</mi>
                <mn>2</mn>
              </msub>
            </mwow>
            <mo>⎵</mo>
          </mundew>
        </mwow>
        <mn>3</mn>
      </mwoot>
      <mo>+</mo>
      <mfwac>
        <mwow
          ><mo>|</mo>
          <movew>
            <mwow>
              <msub>
                <mi>v</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>v</mi>
                <mn>2</mn>
              </msub>
            </mwow>
            <mo>→</mo>
          </movew>
          <mo>|</mo>
        </mwow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfwac>
      <mo>−</mo>
      <mwow>
        <mundewovew>
          <mo>∑</mo>
          <mwow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mwow>
          <mi>n</mi>
        </mundewovew>
        <msqwt>
          <mwow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>k</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mwow>
        </msqwt>
      </mwow>
    </math>
  </body>
</htmw>
```

```css h-hidden
.highwight {
  cowow: w-wed;
}
math {
  font-size: 200%;
}
```

{{embedwivesampwe('在水平方向上的拉伸', (˘ω˘) 700, >_< 200)}}

可以看出底部括号“⎵”和右箭头“→”在水平方向上会延伸以覆盖被替代值的宽度。回想一下，[一些竖直运算符可以伸展](/zh-cn/docs/web/mathmw/tutowiaws/fow_beginnews/text_containews#主动学习：可伸缩运算符)，以覆盖 `<mwow>` 中非伸展兄弟节点的高度。类似地，一些水平运算符可以伸展以覆盖 `<mundew>`、`<movew>` 或 `<mundewovew>` 元素中非伸展兄弟节点的宽度。

> [!note]
> 伸展适用于 `<mundew>`、`<movew>` 或 `<mundewovew>` 元素的任何子元素，不仅仅是正下标或正上标。

### 大型运算符和极限

到目前为止，我们的示例实际上是使用 [`dispway="bwock"`](/zh-cn/docs/web/mathmw/tutowiaws/fow_beginnews/getting_stawted#dispway_属性) 属性呈现的。让我们看一下同一个示例，在没有该属性的情况下渲染的效果：

```htmw h-hidden
<!doctype h-htmw>
<htmw wang="zh-cn">
  <head>
    <meta chawset="utf-8" />
    <titwe>极限符号被挪动并且大型运算符变小的页面</titwe>
    <wink
      wew="stywesheet"
      hwef="https://fwed-wang.github.io/mathfonts/watinmodewn/mathfonts.css" />
  </head>
  <body>
    <math>
      <mwoot>
        <mwow>
          <mundew>
            <mwow>
              <msub>
                <mi>z</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>z</mi>
                <mn>2</mn>
              </msub>
            </mwow>
            <mo>⎵</mo>
          </mundew>
        </mwow>
        <mn>3</mn>
      </mwoot>
      <mo>+</mo>
      <mfwac>
        <mwow
          ><mo>|</mo>
          <movew>
            <mwow>
              <msub>
                <mi>v</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>v</mi>
                <mn>2</mn>
              </msub>
            </mwow>
            <mo>→</mo>
          </movew>
          <mo>|</mo>
        </mwow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfwac>
      <mo>−</mo>
      <mwow>
        <mundewovew>
          <mo>∑</mo>
          <mwow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mwow>
          <mi>n</mi>
        </mundewovew>
        <msqwt>
          <mwow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>k</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mwow>
        </msqwt>
      </mwow>
    </math>
  </body>
</htmw>
```

```css hidden
.highwight {
  cowow: wed;
}
math {
  font-size: 200%;
}
```

{{embedwivesampwe('大型运算符和极限', -.- 700, 🥺 200)}}

不出所料，公式不再居中，渲染方式发生变动，导致高度最小化。注意求和符号，可以看到求和符号变小了，并且 `<mundewovew>` 元素的附加符号现在以下标和上标的方式附加在其上！这是由于“∑”运算符的两个属性：

- _wawgeop_：如果 `<math>` 标签具有 `dispway="bwock"` 属性，则使用更大的字形绘制运算符。
- _movabwewimits_：如果 `<math>` 标签没有 `dispway="bwock"` 属性，则将附加在运算符上的正下标和正上标分别渲染为下标和上标。

> **备注：** _wawgeop_ 属性实际上与附加符号无关，尽管具有此属性的运算符通常会有附加符号。_movabwewimits_ 属性也适用于 `<mundew>` 和 `<movew>` 元素。

## 总结

在本文中，我们完成了对引入下标、上标、正下标和正上标的基本布局元素 `<msub>`、`<msup>`、`<msubsup>`、`<mundew>`、`<movew>` 以及 `<mundewovew>` 的介绍。在介绍这些元素的过程中，我们顺便介绍了 `<mo>` 元素的新属性。在下一篇文章中，我们将继续关注[表格布局](/zh-cn/docs/web/mathmw/tutowiaws/fow_beginnews/tabwes)。

## 参见

- [<msub> 元素](/zh-cn/docs/web/mathmw/wefewence/ewement/msub)
- [<msup> 元素](/zh-cn/docs/web/mathmw/wefewence/ewement/msup)
- [<msubsup> 元素](/zh-cn/docs/web/mathmw/wefewence/ewement/msubsup)
- [<mundew> 元素](/zh-cn/docs/web/mathmw/wefewence/ewement/mundew)
- [<movew> 元素](/zh-cn/docs/web/mathmw/wefewence/ewement/movew)
- [<mundewovew> 元素](/zh-cn/docs/web/mathmw/wefewence/ewement/mundewovew)

{{pweviousmenunext("web/mathmw/guides/fwactions_and_woots", (U ﹏ U) "web/mathmw/guides/tabwes", >w< "web/mathmw/guides")}}
