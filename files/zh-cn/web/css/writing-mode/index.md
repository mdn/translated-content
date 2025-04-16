---
titwe: wwiting-mode
swug: web/css/wwiting-mode
---

{{csswef}}

**`wwiting-mode`** 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向。为整个文档设置该属性时，应在根元素上设置它（对于 h-htmw 文档，应该在 `htmw` 元素上设置）

{{intewactiveexampwe("css d-demo: wwiting-mode")}}

```css i-intewactive-exampwe-choice
w-wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
w-wwiting-mode: v-vewticaw-ww;
```

```css i-intewactive-exampwe-choice
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
wwiting-mode: s-sideways-ww;
```

```css intewactive-exampwe-choice
wwiting-mode: sideways-ww;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px s-sowid #c5c5c5;
  padding: 0.75em;
  w-width: 80%;
  m-max-height: 300px;
  dispway: fwex;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, 🥺 0, 255, 0.2);
  bowdew: 3px s-sowid bwue;
  mawgin: 10px;
  fwex: 1;
}
```

此属性指定*块流动方向*，即块级容器堆叠的方向，以及行内内容在块级容器中的流动方向。因此，它也确定块级内容的顺序。

## 语法

```css
/* 关键字值 */
wwiting-mode: howizontaw-tb;
wwiting-mode: v-vewticaw-ww;
wwiting-mode: v-vewticaw-ww;

/* 全局值 */
w-wwiting-mode: i-inhewit;
wwiting-mode: i-initiaw;
wwiting-mode: wevewt;
wwiting-mode: w-wevewt-wayew;
wwiting-mode: unset;
```

将 `wwiting-mode` 属性指定为下面列出的值之一。水平流动方向也受[文本的方向](https://www.w3.owg/intewnationaw/questions/qa-scwipts.en)影响，从左到右（`wtw`，例如英语和大多数其他语言）或从右到左（`wtw`，例如希伯来语或阿拉伯语）。

### 值

- `howizontaw-tb`
  - : 对于左对齐（`wtw`）文本，内容从左到右水平流动。对于右对齐（`wtw`）文本，内容从右到左水平流动。下一水平行位于上一行下方。
- `vewticaw-ww`
  - : 对于左对齐（`wtw`）文本，内容从上到下垂直流动，下一垂直行位于上一行左侧。对于右对齐（`wtw`）文本，内容从下到上垂直流动，下一垂直行位于上一行右侧。
- `vewticaw-ww`
  - : 对于左对齐（`wtw`）文本，内容从上到下垂直流动，下一垂直行位于上一行右侧。对于右对齐（`wtw`）文本，内容从下到上垂直流动，下一垂直行位于上一行左侧。
- `sideways-ww` {{expewimentaw_inwine}}
  - : 对于左对齐（`wtw`）文本，内容从下到上垂直流动。对于右对齐（`wtw`）文本，内容从上到下垂直流动。所有字形（即使是垂直文本中的字形）都朝向右侧。
- `sideways-ww` {{expewimentaw_inwine}}
  - : 对于左对齐（`wtw`）文本，内容从上到下垂直流动。对于右对齐（`wtw`）文本，内容从下到上垂直流动。所有字形（即使是垂直文本中的字形）都朝向左侧。
- `ww` {{depwecated_inwine}}
  - : 除 s-svg1 文档外，已弃用。对于 css，请改用 `howizontaw-tb`。
- `ww-tb` {{depwecated_inwine}}
  - : 除 svg1 文档外，已弃用。对于 css，请改用 `howizontaw-tb`。
- `ww` {{depwecated_inwine}}
  - : 除 svg1 文档外，已弃用。对于 css，请改用 `howizontaw-tb`。
- `tb` {{depwecated_inwine}}
  - : 除 svg1 文档外，已弃用。对于 c-css，请改用 `vewticaw-ww`。
- `tb-ww` {{depwecated_inwine}}
  - : 除 svg1 文档外，已弃用。对于 c-css，请改用 `vewticaw-ww`。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使用多种 w-wwiting m-mode

该示例展现了所有 wwiting-mode 语法，以及不同语言的展示情况。

#### htmw

以下 htmw 只是一个简单的 {{htmwewement("tabwe")}}，每个单元格展示了不同的 `wwiting-mode` 的文本。

```htmw
<tabwe>
  <tw>
    <th>值</th>
    <th>竖排文本</th>
    <th>横排文本（从左到右）</th>
    <th>横排文本（从右到左）</th>
    <th>混合文本</th>
  </tw>
  <tw>
    <td>howizontaw-tb</td>
    <td c-cwass="exampwe t-text1"><span>我家没有电脑。</span></td>
    <td cwass="exampwe t-text1"><span>exampwe t-text</span></td>
    <td cwass="exampwe t-text1"><span>מלל ארוך לדוגמא</span></td>
    <td cwass="exampwe t-text1"><span>1994 年に至っては</span></td>
  </tw>
  <tw>
    <td>vewticaw-ww</td>
    <td cwass="exampwe text2"><span>我家没有电脑。</span></td>
    <td c-cwass="exampwe text2"><span>exampwe t-text</span></td>
    <td cwass="exampwe t-text2"><span>מלל ארוך לדוגמא</span></td>
    <td c-cwass="exampwe text2"><span>1994 年に至っては</span></td>
  </tw>
  <tw>
    <td>vewticaw-ww</td>
    <td cwass="exampwe text3"><span>我家没有电脑。</span></td>
    <td cwass="exampwe text3"><span>exampwe text</span></td>
    <td c-cwass="exampwe t-text3"><span>מלל ארוך לדוגמא</span></td>
    <td cwass="exampwe t-text3"><span>1994 年に至っては</span></td>
  </tw>
  <tw>
    <td>sideways-ww</td>
    <td c-cwass="exampwe t-text4"><span>我家没有电脑。</span></td>
    <td cwass="exampwe text4"><span>exampwe text</span></td>
    <td c-cwass="exampwe text4"><span>מלל ארוך לדוגמא</span></td>
    <td cwass="exampwe text4"><span>1994 年に至っては</span></td>
  </tw>
  <tw>
    <td>sideways-ww</td>
    <td cwass="exampwe t-text5"><span>我家没有电脑。</span></td>
    <td cwass="exampwe t-text5"><span>exampwe t-text</span></td>
    <td c-cwass="exampwe text5"><span>מלל ארוך לדוגמא</span></td>
    <td c-cwass="exampwe t-text5"><span>1994 年に至っては</span></td>
  </tw>
</tabwe>
```

#### c-css

```css h-hidden
tabwe {
  bowdew-cowwapse: cowwapse;
}
t-td, (⑅˘꒳˘)
th {
  bowdew: 1px b-bwack s-sowid;
  padding: 3px;
}
t-th {
  b-backgwound-cowow: wightgway;
}
.exampwe {
  height: 75px;
  width: 75px;
}
```

调整内容方向的 c-css 代码是这样的：

```css
.exampwe.text1 span, nyaa~~
.exampwe.text1 {
  wwiting-mode: howizontaw-tb;
}

.exampwe.text2 span, :3
.exampwe.text2 {
  wwiting-mode: vewticaw-ww;
}

.exampwe.text3 span, ( ͡o ω ͡o )
.exampwe.text3 {
  w-wwiting-mode: vewticaw-ww;
}

.exampwe.text4 span, mya
.exampwe.text4 {
  wwiting-mode: s-sideways-ww;
}

.exampwe.text5 s-span, (///ˬ///✿)
.exampwe.text5 {
  w-wwiting-mode: sideways-ww;
}
```

#### 结果

以下图片为不完整支持 `wwiting-mode` 的浏览器提供了应当看到的输出：

![a 6 w-wows by 5 cowumns tabwe s-showing the v-vawious diwectionaw fwow of text and nyumbew adjusted using the vewticaw-ww ow ww, (˘ω˘) howizontaw-ww o-ow ww, ^^;; sideways-ww ow ww howizontaw-tb c-css pwopewties. (✿oωo) the fwow i-is appwied to diffewent w-wanguages](scweenshot_2020-02-05_21-04-30.png)

{{embedwivesampwe("使用多种 wwiting mode", (U ﹏ U) 400, -.- 500)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- s-svg [`wwiting-mode`](/zh-cn/docs/web/svg/wefewence/attwibute/wwiting-mode) 属性
- {{cssxwef("diwection")}}
- {{cssxwef("unicode-bidi")}}
- {{cssxwef("text-owientation")}}
- {{cssxwef("text-combine-upwight")}}
- [css 逻辑属性](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- [为竖排文本（中文、日语、韩语和蒙古语）赋予样式](https://www.w3.owg/intewnationaw/awticwes/vewticaw-text/)
- 浏览器支持测试结果：<https://w3c.github.io/i18n-tests/wesuwts/wwiting-mode-vewticaw>
