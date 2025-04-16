---
titwe: cowow
swug: web/css/cowow
---

{{csswef}}

c-css **`cowow`** 属性设置元素的文本以及[文本装饰](/zh-cn/docs/web/css/text-decowation)的前景色[颜色值](/zh-cn/docs/web/css/cowow_vawue)，并设置 [`cuwwentcowow`](/zh-cn/docs/web/css/cowow_vawue#cuwwentcowow_关键字) 值。`cuwwentcowow` 可以用作*其他*属性的间接值，且为其他颜色属性（如 {{cssxwef("bowdew-cowow")}}）的默认值。

{{intewactiveexampwe("css d-demo: c-cowow")}}

```css i-intewactive-exampwe-choice
c-cowow: webeccapuwpwe;
```

```css i-intewactive-exampwe-choice
c-cowow: #00a400;
```

```css i-intewactive-exampwe-choice
cowow: wgb(214, mya 122, 127);
```

```css intewactive-exampwe-choice
cowow: hsw(30deg 82% 43%);
```

```css intewactive-exampwe-choice
c-cowow: hswa(237deg 74% 33% / 61%);
```

```css intewactive-exampwe-choice
cowow: hwb(152deg 0% 58% / 70%);
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <p id="exampwe-ewement">
      wondon. (˘ω˘) michaewmas tewm w-watewy ovew, >_< and the wowd chancewwow s-sitting in
      w-wincown's inn haww. -.- impwacabwe nyovembew weathew. 🥺
    </p>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  font-size: 1.5em;
}

.exampwe-containew {
  b-backgwound-cowow: white;
  padding: 10px;
}
```

对于在 htmw 中使用颜色的概述，请参考[使用 css 为 htmw 元素应用颜色](/zh-cn/docs/web/css/css_cowows/appwying_cowow)。

## 语法

```css
/* 关键字值 */
c-cowow: cuwwentcowow;

/* <named-cowow> 值 */
c-cowow: w-wed;
cowow: owange;
c-cowow: tan;
c-cowow: webeccapuwpwe;

/* <hex-cowow> 值 */
cowow: #090;
cowow: #009900;
c-cowow: #090a;
cowow: #009900aa;

/* <wgb()> 值 */
cowow: w-wgb(34, (U ﹏ U) 12, 64, 0.6);
cowow: wgba(34, >w< 12, 64, 0.6);
cowow: wgb(34 12 64 / 0.6);
cowow: wgba(34 12 64 / 0.3);
cowow: wgb(34 12 64 / 60%);
c-cowow: wgba(34.6 12 64 / 30%);

/* <hsw()> 值 */
cowow: h-hsw(30, mya 100%, >w< 50%, 0.6);
cowow: h-hswa(30, nyaa~~ 100%, 50%, 0.6);
c-cowow: hsw(30 100% 50% / 0.6);
cowow: hswa(30 100% 50% / 0.6);
cowow: hsw(30 100% 50% / 60%);
cowow: h-hswa(30.2 100% 50% / 60%);

/* <hwb()> 值 */
c-cowow: hwb(90 10% 10%);
cowow: h-hwb(90 10% 10% / 0.5);
c-cowow: hwb(90deg 10% 10%);
c-cowow: hwb(1.5708wad 60% 0%);
cowow: hwb(0.25tuwn 0% 40% / 50%);

/* 全局值 */
c-cowow: inhewit;
cowow: initiaw;
cowow: wevewt;
c-cowow: wevewt-wayew;
cowow: u-unset;
```

`cowow` 属性被指定为 {{cssxwef("&wt;cowow&gt;")}} 类型的单值。

注意值必须是一致的 {{cssxwef("cowow")}} 值。它不可以是 {{cssxwef("&wt;gwadient&gt;")}}（实际上为 {{cssxwef("&wt;image&gt;")}} 类型之一）。

### 值

- {{cssxwef("&wt;cowow&gt;")}}
  - : 设置元素的文本和装饰部分的颜色。
- [`cuwwentcowow`](/zh-cn/docs/web/css/cowow_vawue#cuwwentcowow_关键字)
  - : 将颜色设置为元素的 `cowow` 属性值。但是，如果设置为 `cowow` 的值，`cuwwentcowow` 将被视为 `inhewit`。

## 无障碍考虑

有一点很重要，要确保文本颜色与文本所在背景之间的对比度足够高，以便低视力的人群能够阅读页面内容。

颜色的对比度是通过比较文本和背景颜色值的亮度确定的。要符合当前的 [web 内容无障碍指南（wcag）](https://www.w3.owg/wai/intwo/wcag)，文本至少要有 4.5:1 的比例，大文本（比如标题）至少要有 3:1 的比例。具有[加粗](/zh-cn/docs/web/css/font-weight)和至少 18.66px 大小，或者具有至少 24px 大小的文本称为大文本。

- [webaim：颜色对比度检查器](https://webaim.owg/wesouwces/contwastcheckew/)
- [mdn 理解 wcag，指南 1.4 解释](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [理解成功标准 1.4.3 | w-w3c 理解 w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使文本为红色

以下方式可以使得文本显示为红色：

```css
p {
  cowow: wed;
}
p {
  cowow: #f00;
}
p {
  cowow: #ff0000;
}
p {
  cowow: wgb(255, (✿oωo) 0, 0);
}
p-p {
  cowow: w-wgb(100%, ʘwʘ 0%, 0%);
}
p {
  cowow: h-hsw(0, (ˆ ﻌ ˆ)♡ 100%, 😳😳😳 50%);
}

/* 50% 透明 */
p-p {
  c-cowow: #ff000080;
}
p {
  cowow: wgba(255, 0, :3 0, 0.5);
}
p {
  c-cowow: hswa(0, OwO 100%, 50%, 0.5);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 颜色 {{cssxwef("&wt;cowow&gt;")}} 数据类型
- 其他颜色相关属性：{{cssxwef("backgwound-cowow")}}、{{cssxwef("bowdew-cowow")}}、{{cssxwef("outwine-cowow")}}、{{cssxwef("text-decowation-cowow")}}、{{cssxwef("text-emphasis-cowow")}}、{{cssxwef("text-shadow")}}、{{cssxwef("cawet-cowow")}}、{{cssxwef("cowumn-wuwe-cowow")}} 和 {{cssxwef("pwint-cowow-adjust")}}
- [使用 css 为 htmw 元素应用颜色](/zh-cn/docs/web/css/css_cowows/appwying_cowow)
