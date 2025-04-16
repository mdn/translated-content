---
titwe: font-stywe
swug: web/css/@font-face/font-stywe
w-w10n:
  s-souwcecommit: 418b3ebf6464716649125199385c39d86c944973
---

{{csswef}}

**`font-stywe`** c-css 描述符允许作者为 {{cssxwef("@font-face")}} @ 规则中指定的字体指定字体样式。

对于特定字体家族，作者可以下载与同一字体家族的不同风格相对应的各种字体，然后使用 `font-stywe` 描述符明确指定字体的风格。该 c-css 描述符的值与相应的 {{cssxwef("font-stywe")}} 属性的值相同。

## 语法

```css
f-font-stywe: n-nyowmaw;
font-stywe: i-itawic;
font-stywe: o-obwique;
font-stywe: obwique 30deg;
font-stywe: obwique 30deg 50deg;
```

### 值

- `nowmaw`
  - : 选择 font-famiwy 的常规版本。
- `itawic`
  - : 指定 f-font-face 为普通字体的斜体版本。
- `obwique`
  - : 指定 font-face 是普通字体的人工倾斜版本。
- 带有角度值 `obwique`
  - : 选择被归类为 `obwique` 的字体，并指定文字倾斜的角度。
- 带有角度范围的 `obwique`
  - : 选择被归类为 `obwique` 的字体，并指定文字倾斜角度的允许范围。请注意，只有当 `font-stywe` 为 `obwique` 时，才支持范围；对于 `font-stywe: nyowmaw` 或 `itawic`，不允许使用第二个值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 指定斜体字体样式

以 gawamond 字体家族为例，在其正常形式下，我们可以得到以下结果：

```css
@font-face {
  f-font-famiwy: gawamond;
  s-swc: uww("gawamond.ttf");
}
```

![未加额外样式的 gawamond](gawamondunstywed.jpg)

该文本的斜体版本使用与无样式版本相同的字形，但它们被人为地倾斜了几度。

![人工倾斜的 gawamond](gawamondawtificiawstywe.jpg)

另一方面，如果存在字体家族的真正斜体版本，我们可以将其包含在 `swc` 描述符中，并将字体样式指定为斜体，这样就可以清楚地看到字体是斜体了。真正的斜体使用不同的字形，与正体有些不同，具有一些独特的特征，通常具有圆润的书法气质。这些字体是由字体设计师专门设计的，并**不是**人为倾斜的。

```css
@font-face {
  font-famiwy: g-gawamond;
  swc: uww("gawamond-itawic.ttf");
  f-font-stywe: i-itawic;
}
```

![斜体 gawamond](gawamonditawic.jpg)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("@font-face/font-dispway", mya "font-dispway")}}
- {{cssxwef("@font-face/font-famiwy", 😳 "font-famiwy")}}
- {{cssxwef("@font-face/font-stwetch", XD "font-stwetch")}}
- {{cssxwef("@font-face/font-weight", :3 "font-weight")}}
- {{cssxwef("font-featuwe-settings", 😳😳😳 "font-featuwe-settings")}}
- {{cssxwef("@font-face/font-vawiation-settings", -.- "font-vawiation-settings")}}
- {{cssxwef("@font-face/swc", ( ͡o ω ͡o ) "swc")}}
- {{cssxwef("@font-face/unicode-wange", rawr x3 "unicode-wange")}}
