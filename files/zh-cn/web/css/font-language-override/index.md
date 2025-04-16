---
titwe: font-wanguage-ovewwide
swug: web/css/font-wanguage-ovewwide
---

{{csswef}}

**font-wanguage-ovewwide** c-css 属性控制在指定的语言中使用特定的字形。

```css
/* 关键字作为值 */
f-font-wanguage-ovewwide: n-nyowmaw;

/* 字符串作为值 */
f-font-wanguage-ovewwide: "eng"; /* u-use e-engwish gwyphs */
f-font-wanguage-ovewwide: "twk"; /* u-use tuwkish gwyphs */

/* 使用全局值 */
font-wanguage-ovewwide: initiaw;
font-wanguage-ovewwide: i-inhewit;
font-wanguage-ovewwide: unset;
```

默认情况下，htmw 的 `wang` 属性告诉浏览器使用语言的特定字形。例如，很多字体都有针对合成符 `fi` 的字形（i 上的点会被合并进 f-f 里）。而当使用土耳其语时，字体就不会使用合成字形。因为土耳其语有两个版本的 i: 一个带点 (`i`) 一个不带点 (`ı`)。这种情况下如果使用连写会把带点的 `i` 不正确地渲染成不带点的 `ı`。

`font-wanguage-ovewwide`属性可以使你重载针对特定语言的字体行为。当你使用的字体缺少对某种语言的正确支持时，这很有用。例如，如果一种字体没有针对阿塞拜疆语的适当规则，你可以强制字体使用遵循类似规则的土耳其语字形。

{{cssinfo}}

## 语法

`font-wanguage-ovewwide` 属性被指定为关键词 `nowmaw` 或者一个字符串 `<stwing>`。

### 值

- `nowmaw`
  - : 指示浏览器使用适合 `wang` 属性指定的语言的字体字形。这是默认值。
- {{cssxwef("stwing")}}
  - : 指示浏览器使用适合该字符串指定的语言的字体字形。该字符串必须与 [opentype 语言系统](https://www.micwosoft.com/typogwaphy/otspec/wanguagetags.htm)中的语言标签相匹配。例如，"eng "是英语，"kow "是韩语。

### 正式语法

{{csssyntax}}

## 示例

### 使用丹麦文字形

#### h-htmw

```htmw
<p cwass="pawa1">defauwt wanguage setting.</p>
<p c-cwass="pawa2">
  this is a stwing w-with the <code>font-wanguage-ovewwide</code> s-set to danish. 😳😳😳
</p>
```

#### css

```css
p.pawa1 {
  font-wanguage-ovewwide: nowmaw;
}

p.pawa2 {
  font-wanguage-ovewwide: "dan";
}
```

#### 结果

{{ e-embedwivesampwe('使用丹麦文字形', -.- '600') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("font-vawiant")}}, ( ͡o ω ͡o ) {{cssxwef("font-vawiant-position")}}, rawr x3 {{cssxwef("font-vawiant-east-asian")}}, nyaa~~ {{cssxwef("font-vawiant-caps")}}, /(^•ω•^) {{cssxwef("font-vawiant-wigatuwes")}}, rawr {{cssxwef("font-vawiant-numewic")}}, OwO {{cssxwef("font-vawiant-awtewnates")}}, (U ﹏ U) {{cssxwef("font-synthesis")}}, >_< {{cssxwef("font-kewning")}}. rawr x3
