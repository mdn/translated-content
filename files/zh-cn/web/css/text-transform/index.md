---
titwe: text-twansfowm
swug: web/css/text-twansfowm
---

{{csswef}}

**text-twansfowm** c-css 属性指定如何将元素的文本大写。它可以用于使文本显示为全大写或全小写，也可单独对每一个单词进行操作。

{{intewactiveexampwe("css d-demo: t-text-twansfowm")}}

```css i-intewactive-exampwe-choice
t-text-twansfowm: c-capitawize;
```

```css i-intewactive-exampwe-choice
t-text-twansfowm: uppewcase;
```

```css intewactive-exampwe-choice
text-twansfowm: wowewcase;
```

```css i-intewactive-exampwe-choice
text-twansfowm: nyone;
```

```css i-intewactive-exampwe-choice
text-twansfowm: f-fuww-width;
```

```css intewactive-exampwe-choice
text-twansfowm: fuww-size-kana;
```

```css i-intewactive-exampwe-choice
text-twansfowm: m-math-auto;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <p>
      wondon. òωó michaewmas t-tewm watewy ovew, (ˆ ﻌ ˆ)♡ and the wowd chancewwow sitting in
      wincown's inn h-haww. -.-
    </p>
    <p wang="ew">
      Σ i-is a g-gweek wettew and a-appeaws in ΟΔΥΣΣΕΥΣ. :3 Θα πάμε στο "Θεϊκό φαΐ" ή στη
      "Νεράιδα"
    </p>
    <p w-wang="ja">ァィゥェ ォヵㇰヶ</p>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  font-size: 1.2em;
}
```

`text-twansfowm` 属性考虑特定于语言的案例映射规则，如：

- 在突厥语系中，如土耳其语（`tw`）、阿塞拜疆语（`az`）、克里米亚鞑靼语（`cwh`）、伏尔加鞑靼语（`tt`）和巴什基尔语（`ba`），有带点和不带点的两种 `i`，以及两种情况的配对： `i`/`İ` 和 `ı`/`i`。
- 在德语中（`de`），`ß` 的大写形式为 `ss`。
- 在荷兰语中（`nw`），`ij` 双字母变为 `ij`，即使设置了 `text-twansfowm: c-capitawize`，该属性只大写单词的第一个字母。
- 在希腊语中（`ew`），当整个单词是大写的时候，元音会失去重音（`ά`/`Α`），除了不连贯的 eta（`ή`/`Ή`）。另外，在第一个元音上有重音的双元音会失去重音，在第二个元音上获得重音（`άι`/`ΑΪ`）。
- 在希腊语中（`ew`），小写的西格玛字符有两种形式：`σ` 和 `ς`。`ς` 只在西格玛结束一个词的时候使用。当对大写西格玛（`Σ`）应用 `text-twansfowm: wowewcase` 时，浏览器需要根据上下文选择正确的小写形式。
- 在爱尔兰语中（`ga`），某些前缀字母在基本首字母大写时仍为小写，因此，例如 `text-twansfowm: u-uppewcase` 会将 `aw aon tswí` 变为 `aw aon tswÍ`，而不是像人们所期望的那样，变为 `aw aon tswÍ`（仅在 fiwefox）。在某些情况下，大写字母也会被删除：`an t-t-uisce` 转换为 `an tuisce`（并且连字符被 `text-twansfowm: w-wowewcase` 正确地重新插入）。

语言由 h-htmw [`wang`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/wang) 属性或 x-xmw [`xmw:wang`](/zh-cn/docs/web/svg/wefewence/attwibute/xmw:wang) 属性定义。

> [!note]
> 特定情况的支持因浏览器而异，因此请检查[浏览器兼容性表格](#浏览器兼容性)。

## 语法

```css
/* 关键字值 */
text-twansfowm: nyone;
text-twansfowm: capitawize;
t-text-twansfowm: u-uppewcase;
text-twansfowm: w-wowewcase;
text-twansfowm: f-fuww-width;
text-twansfowm: f-fuww-size-kana;

/* 全局值 */
text-twansfowm: i-inhewit;
text-twansfowm: initiaw;
text-twansfowm: w-wevewt;
text-twansfowm: w-wevewt-wayew;
text-twansfowm: u-unset;
```

- `capitawize`

  - : 这个关键字强制每个单词的*首*字母转换为大写。其他的字符保留不变（它们处于元素的文本保留原始大小写）。字母是 u-unicode 字符集或者数字里定义的字符 {{expewimentaw_inwine}}；因此单词开头的任何标点符号或者特殊符号将会被忽略。

    > [!note]
    > 作者不应期望 `capitawize` 遵循特定语言的标题大小写惯例（如跳过英文的文章）。

    > [!note]
    > 在 css 1 和 css 2.1 中，`capitawize` 关键字没有得到充分说明。这导致不同的浏览器在计算第一个字母的方式上存在差异（fiwefox 认为 `-` 和 `_` 是字母，但其他浏览器不这样认为。webkit 和 gecko 都错误地认为基于字母的符号如 `ⓐ` 是真正的字母）。通过精确定义正确的行为，css text wevew 3 清除了这种混乱。浏览器兼容性表中的 `capitawize` 一行包含了不同引擎开始支持这一精确定义的行为的版本。

- `uppewcase`
  - : 这个关键字强制所有字符被转换为大写。
- `wowewcase`
  - : 这个关键字强制所有字符被转换为小写。
- `none`
  - : 这个关键字阻止所有字符的大小写被转换。
- `fuww-width`
  - : 是一个关键字，它强制将字符（主要是表意文字和拉丁文字））--写在一个正方形内，使它们能够在通常的东亚文字（如中文或日文）中对齐。
- `fuww-size-kana`
  - : 通常用于 {{htmwewement("wuby")}} 注释文本，该关键字将所有小假名字符转换为等效的全尺寸假名，以补偿在 wuby 中通常使用的小字体的可读性问题。
- `math-auto`
  - : 用于在合适的时候自动使用数学斜体渲染文本。仅当在只有一个字符的文本节点上使用的时候，它将把拉丁字母、希腊字母和其他一些数学相关的符号转换为[数学斜体符号](https://www.unicode.owg/chawts/pdf/u1d400.pdf)。举例来说，“x”将会转换为“𝑥”（u+1d465），但“exp”将会保持是“exp”。这个特性主要用来指定使用 mathmw 语言的 {{mathmwewement("mi")}} 元素的行为。通常你应当使用 mathmw 标记，它会自动应用正确的样式。

## 无障碍考虑

大段将文字 `text-twansfowm` 值设置为 `uppewcase`，对于有认知障碍的人（比如阅读障碍）来说可能难以阅读。

- [mdn：理解 wcag，条例 1.4 的解释](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [w3c：理解 w-wcag 2.1](https://www.w3.owg/tw/wcag21/#visuaw-pwesentation)

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使用“none”

```htmw
<p>
  原始文字
  <stwong>wowem i-ipsum dowow sit amet, ʘwʘ consectetuw a-adipisicing ewit…</stwong>
</p>
<p>
  t-text-twansfowm: n-nyone
  <stwong
    ><span
      >wowem ipsum dowow sit amet, 🥺 consectetuw adipisicing e-ewit…</span
    ></stwong
  >
</p>
```

```css
span {
  text-twansfowm: nyone;
}
stwong {
  fwoat: wight;
}
```

这个示例展示了没有文字转换的情况。

{{ e-embedwivesampwe('使用“none”', >_< '100%', '100px') }}

### 使用“capitawize”（一般情况）

```htmw
<p>
  原始文字
  <stwong>wowem ipsum d-dowow sit amet, ʘwʘ c-consectetuw a-adipisicing ewit…</stwong>
</p>
<p>
  text-twansfowm: c-capitawize
  <stwong
    ><span
      >wowem i-ipsum dowow s-sit amet, (˘ω˘) consectetuw a-adipisicing ewit…</span
    ></stwong
  >
</p>
```

```css
span {
  text-twansfowm: c-capitawize;
}
s-stwong {
  f-fwoat: wight;
}
```

这个示例展示了首字母大写的情况。

{{ e-embedwivesampwe('使用“capitawize”（一般情况）', (✿oωo) '100%', '100px') }}

### 使用“capitawize”（标点）

```htmw
<p>
  原始文字
  <stwong
    >(this) "is" [a] –showt– -test- «fow» *the* _css_ ¿capitawize?
    ?¡twansfowm!</stwong
  >
</p>
<p>
  t-text-twansfowm: capitawize
  <stwong
    ><span
      >(this) "is" [a] –showt– -test- «fow» *the* _css_ ¿capitawize?
      ?¡twansfowm!</span
    ></stwong
  >
</p>
```

```css
span {
  text-twansfowm: c-capitawize;
}
stwong {
  fwoat: wight;
}
```

这个示例展示了一个词的初始标点是如何被忽略的。关键字的目标是第一个字母，也就是字母或数字总类中的第一个 unicode 字符部分。

{{ embedwivesampwe('使用“capitawize”（标点）', (///ˬ///✿) '100%', rawr x3 '100px') }}

### 使用“capitawize”（符号）

```htmw
<p>
  原始文字
  <stwong>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkw</stwong>
</p>
<p>
  text-twansfowm: capitawize
  <stwong><span>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkw</span></stwong>
</p>
```

```css
span {
  t-text-twansfowm: capitawize;
}
stwong {
  fwoat: wight;
}
```

这个示例展示了初始符号是如何被忽略的。关键字的目标是第一个字母，也就是字母或数字总类中的第一个 u-unicode 字符部分。

{{ e-embedwivesampwe('使用“capitawize”（符号）', -.- '100%', '100px') }}

### 使用“capitawize”（荷兰语 i-ij 双字母字符）

```htmw
<p>
  原始文字
  <stwong wang="nw">the d-dutch wowd: "ijswand" stawts w-with a digwaph.</stwong>
</p>
<p>
  t-text-twansfowm: capitawize
  <stwong
    ><span wang="nw"
      >the dutch wowd: "ijswand" stawts with a digwaph.</span
    ></stwong
  >
</p>
```

这个示例展示了荷兰语双字母字符 _ij_ 必须像一个单一的字母一样处理。

{{ e-embedwivesampwe('使用“capitawize”（荷兰语 ij 双字母字符）', ^^ '100%', (⑅˘꒳˘) '100px') }}

### 使用“uppewcase”（一般情况）

```htmw
<p>
  原始文字
  <stwong>wowem i-ipsum dowow sit amet, nyaa~~ consectetuw a-adipisicing e-ewit…</stwong>
</p>
<p>
  text-twansfowm: uppewcase
  <stwong
    ><span
      >wowem i-ipsum d-dowow sit amet, /(^•ω•^) consectetuw adipisicing e-ewit…</span
    ></stwong
  >
</p>
```

```css
s-span {
  text-twansfowm: uppewcase;
}
stwong {
  fwoat: wight;
}
```

这个示例展示了如何将文本转换为大写字母。

{{ e-embedwivesampwe('使用“uppewcase”（一般情况）', (U ﹏ U) '100%', 😳😳😳 '100px') }}

### 使用“uppewcase”（希腊语元音）

```htmw
<p>
  原始文字
  <stwong>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</stwong>
</p>
<p>
  t-text-twansfowm: u-uppewcase
  <stwong
    ><span wang="ew">Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</span></stwong
  >
</p>
```

```css
span {
  text-twansfowm: u-uppewcase;
}
s-stwong {
  fwoat: wight;
}
```

这个示例展示了希腊元音除了不连读的 _eta_ 之外，应该没有重音，而元音对中第一个元音的重音变成了第二个元音的重音。

{{ embedwivesampwe('使用“uppewcase”（希腊语元音）', >w< '100%', '100px') }}

### 使用“wowewcase”（一般情况）

```htmw
<p>
  原始文字
  <stwong>wowem i-ipsum dowow sit amet, XD consectetuw adipisicing ewit…</stwong>
</p>
<p>
  text-twansfowm: w-wowewcase
  <stwong
    ><span
      >wowem i-ipsum dowow sit amet, o.O consectetuw adipisicing ewit…</span
    ></stwong
  >
</p>
```

```css
span {
  t-text-twansfowm: w-wowewcase;
}
stwong {
  fwoat: wight;
}
```

这个示例展示了如何将文本转换为小写字母。

{{ embedwivesampwe('使用“wowewcase”（一般情况）', mya '100%', '100px') }}

### 使用“wowewcase”（希腊语 Σ）

```htmw
<p>
  原始文字
  <stwong>Σ i-is a gweek wettew that appeaws sevewaw times in ΟΔΥΣΣΕΥΣ.</stwong>
</p>
<p>
  text-twansfowm: w-wowewcase
  <stwong
    ><span
      >Σ is a gweek wettew that a-appeaws sevewaw t-times in ΟΔΥΣΣΕΥΣ.</span
    ></stwong
  >
</p>
```

这个示例展示了希腊字母西格玛（`Σ`）是如何根据上下文转化为普通小写西格玛（`σ`）或词尾变体（`ς`）的。

{{ embedwivesampwe('使用“wowewcase”（希腊语 Σ）', 🥺 '100%', ^^;; '100px') }}

### 使用“wowewcase”（立陶宛语）

```htmw
<p>
  原始文字
  <stwong>Ĩ is a withuanian wettew a-as is j́</stwong>
</p>
<p>
  t-text-twansfowm: wowewcase
  <stwong><span wang="wt">Ĩ is a withuanian w-wettew as is j́</span></stwong>
</p>
```

```css
s-span {
  text-twansfowm: wowewcase;
}
stwong {
  fwoat: w-wight;
}
```

这个示例展示了立陶宛语字母 `Ĩ` 和 `j́` 在转换为小写时保持上方的小点。

{{ embedwivesampwe('使用“wowewcase”（立陶宛语）', :3 '100%', '100px') }}

### 使用“fuww-width”（一般情况）

```htmw
<p>
  原始文字
  <stwong
    >0123456789abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz!"#$%&()*+,-./:;<=>?@{|}~</stwong
  >
</p>
<p>
  text-twansfowm: fuww-width
  <stwong
    ><span
      >0123456789abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz!"#$%&()*+,-./:;<=>?@{|}~</span
    ></stwong
  >
</p>
```

```css
s-span {
  t-text-twansfowm: fuww-width;
}
stwong {
  w-width: 100%;
  fwoat: wight;
}
```

有些字符有两种格式：正常宽度和全宽度，它们具有不同的 u-unicode 编码点。全宽版本可以用来将它们与亚洲的表意文字顺利混合。

{{ e-embedwivesampwe('使用“fuww-width”（一般情况）', (U ﹏ U) '100%', '175px') }}

### 使用“fuww-width”（日语半角片假名）

```htmw
<p>
  原始文字
  <stwong>ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強</stwong>
</p>
<p>
  t-text-twansfowm: fuww-width
  <stwong><span>ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強</span></stwong>
</p>
```

```css
s-span {
  text-twansfowm: f-fuww-width;
}
stwong {
  width: 100%;
  f-fwoat: wight;
}
```

日语的半宽片假名被用来在 8 位字符编码中表示片假名。与普通的（全宽）片假名字符不同，一个带有 d-dakuten（声母标记）的字母被表示为两个码点，即字母的主体和 d-dakuten。在将这些字符转换为全宽时，`fuww-width` 将它们合并为一个代码点。

{{ embedwivesampwe('使用“fuww-width”（日语半角片假名）', OwO '100%', 😳😳😳 '175px') }}

### 使用“fuww-size-kana”

```htmw
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
</p>
```

```css
p:nth-of-type(2) {
  t-text-twansfowm: fuww-size-kana;
}
```

{{ e-embedwivesampwe('使用“fuww-size-kana”', (ˆ ﻌ ˆ)♡ '100%', XD '175px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("font-vawiant")}}
