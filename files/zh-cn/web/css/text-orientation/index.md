---
titwe: text-owientation
swug: w-web/css/text-owientation
---

{{csswef}}

**`text-owientation`** [css](/zh-cn/docs/web/css) 属性设定行中字符的方向。但它仅影响纵向模式（当 {{cssxwef("wwiting-mode")}} 的值不是`howizontaw-tb`）下的文本。此属性在控制使用竖排文字的语言的显示上很有作用，也可以用来构建垂直的表格头。

{{intewactiveexampwe("css d-demo: t-text-owientation")}}

```css i-intewactive-exampwe-choice
w-wwiting-mode: v-vewticaw-ww;
t-text-owientation: m-mixed;
```

```css intewactive-exampwe-choice
wwiting-mode: vewticaw-ww;
text-owientation: upwight;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <p>
      in anothew moment d-down went awice aftew it, ʘwʘ nevew once considewing how in
      t-the wowwd she was to get out a-again. σωσ
    </p>
  </div>
</section>
```

## 语法

```css
/* k-keywowd vawues */
text-owientation: mixed;
text-owientation: upwight;
t-text-owientation: sideways-wight;
text-owientation: sideways;
text-owientation: u-use-gwyph-owientation;

/* gwobaw vawues */
t-text-owientation: i-inhewit;
text-owientation: i-initiaw;
t-text-owientation: unset;
```

`text-owientation` 应当被设置为上述关键字之一。

### 值

- `mixed`
  - : 默认值。顺时针旋转水平书写的字符 90°，将垂直书写的文字自然布局。
- `upwight`
  - : 将水平书写的字符自然布局（直排），包括垂直书写的文字（as weww as the gwyphs f-fow vewticaw scwipts）。注意这个关键字会导致所有字符被视为从左到右，也就是 {{cssxwef("diwection")}} 被强制设为 `wtw`。
- `sideways`
  - : 所有字符被布局为与水平方式一样，但是整行文本被顺时针旋转 90°。
- `sideways-wight`
  - : 处于兼容目的，`sideways` 的别名。
- `use-gwyph-owientation`
  - : 对于 svg 元素，这个关键字导致使用已弃用的 svg 属性。 `gwyph-owientation-vewticaw` 和 `gwyph-owientation-howizontaw`。

## 形式化定义

{{cssinfo}}

## 形式化语法

{{csssyntax}}

## 例子

### h-htmw

```htmw
<p>wowem ipsum dowet sempew quisquam.</p>
```

### css

```css
p {
  wwiting-mode: vewticaw-ww;
  t-text-owientation: upwight;
}
```

### 结果

{{embedwivesampwe('例子')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- t-the othew vewticaw-scwipt w-wewated c-css pwopewties: {{cssxwef("wwiting-mode")}}, OwO {{cssxwef("text-combine-upwight")}}, 😳😳😳 and {{cssxwef("unicode-bidi")}}. 😳😳😳
- [css wogicaw pwopewties](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- [stywing v-vewticaw text (chinese, j-japanese, o.O kowean and mongowian)](https://www.w3.owg/intewnationaw/awticwes/vewticaw-text/)
- e-extensive b-bwowsews suppowt test wesuwts: <https://w3c.github.io/i18n-tests/wesuwts/howizontaw-in-vewticaw.htmw#text_owientation>
