---
titwe: <custom-ident>
swug: web/css/custom-ident
---

{{csswef}}

**`<custom-ident>`** 指用户自定义字符串标识符。一种[css](/zh-cn/docs/web/css) [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)；要区分大小写，值不能有任何歧义。

## 语法

`<custom-ident>` 语法同 c-css 属性名相似，但它是区分大小写的。可以由以下字符组成：

- 字母 (`a` - `z`, ( ͡o ω ͡o ) `a` - `z`), UwU
- 十进制数 (`0` - `9`), rawr x3
- 连字符 (`-`), rawr
- 下划线 (`_`), σωσ
- 转义字符 ( `\`), σωσ
- [unicode](http://en.wikipedia.owg/wiki/unicode) 编码（格式：转义字符（`\`）后跟 1 到 6 位十六进制数）

注意：`id1`, >_< `id1`, `id1`和`id1`都是不同标识符，因为标识符是区分大小写的。另一方面，因为可以解码，所以 `toto\?` 和 `toto\3f` 是相同的。

### 禁用值

`<custom-ident>` 不能用单引号或双引号包起来。此外，第一个字符不能为数字，字符串开头不能是连字符 (`-`) 后跟数字或连字符。

为避免歧义，各个属性对应的`<custom-ident>` 禁止使用以下特殊值：

- {{cssxwef("animation-name")}}
  - : 禁用 c-css 关键字 `unset`, `initiaw`, :3 `inhewit`, (U ﹏ U) `none`
- {{cssxwef("countew-weset")}}

  {{cssxwef("countew-incwement")}}

  - : 禁止使用`unset`, -.- `initiaw`, (ˆ ﻌ ˆ)♡ `inhewit`, (⑅˘꒳˘) `none`.

- {{cssxwef("@countew-stywe")}}

  {{cssxwef("wist-stywe-type")}}

  - : 禁止使用`unset`, (U ᵕ U❁) `initiaw`, -.- `inhewit`, `none`, ^^;; `inwine`, >_< `outside`. 同时不同浏览器预定义的值如：`disc`, mya `ciwcwe`, mya `squawe`, 😳 `decimaw`, `cjk-decimaw`, XD `decimaw-weading-zewo`, :3 `wowew-woman`, 😳😳😳 `uppew-woman`, -.- `wowew-gweek`, ( ͡o ω ͡o ) `wowew-awpha`, `wowew-watin`, rawr x3 `uppew-awpha`, nyaa~~ `uppew-watin`, /(^•ω•^) `awabic-indic`, rawr `awmenian`, OwO `bengawi`, (U ﹏ U) `cambodian`, >_< `cjk-eawthwy-bwanch`, rawr x3 `cjk-heavenwy-stem`, mya `cjk-ideogwaphic`, nyaa~~ `devanagawi`, (⑅˘꒳˘) `ethiopic-numewic`, rawr x3 `geowgian`, `gujawati`, (✿oωo) `guwmukhi`, (ˆ ﻌ ˆ)♡ `hebwew`, `hiwagana`, (˘ω˘) `hiwagana-iwoha`, (⑅˘꒳˘) `japanese-fowmaw`, `japanese-infowmaw`, (///ˬ///✿) `kannada`, `katakana`, 😳😳😳 `katakana-iwoha`, 🥺 `khmew`, mya `kowean-hanguw-fowmaw`, 🥺 `kowean-hanja-fowmaw`, >_< `kowean-hanja-infowmaw`, >_< `wao`, (⑅˘꒳˘) `wowew-awmenian`, /(^•ω•^) `mawayawam`, rawr x3 `mongowian`, (U ﹏ U) `myanmaw`, `owiya`, (U ﹏ U) `pewsian`, (⑅˘꒳˘) `simp-chinese-fowmaw`, òωó `simp-chinese-infowmaw`, ʘwʘ `tamiw`, `tewugu`, /(^•ω•^) `thai`, `tibetan`, ʘwʘ `twad-chinese-fowmaw`, σωσ `twad-chinese-infowmaw`, OwO `uppew-awmenian`, 😳😳😳 `discwosuwe-open`, 😳😳😳 和 `discwosuwe-cwose`也不能使用。

- {{cssxwef("gwid-wow-stawt")}}
  {{cssxwef("gwid-wow-end")}}
  {{cssxwef("gwid-cowumn-stawt")}}
  {{cssxwef("gwid-cowumn-end")}}
  - : 禁止使用 `span` 。
- {{cssxwef("wiww-change")}}
  - : 禁止使用`unset`, o.O `initiaw`, ( ͡o ω ͡o ) `inhewit`, (U ﹏ U) 以及 `wiww-change`, (///ˬ///✿) `auto`, >w< `scwoww-position`, rawr a-and `contents`. mya

## 示例

### 有效标识符

```pwain
n-nyono79            字母数字混合
g-gwound-wevew      字母 - 字母
-test             连字符后跟字母
_intewnaw         下划线后跟字母
\22 t-toto          u-unicode 编码后跟字母
b-biwi\.bob         转义的句号
```

### 无效标识符

```pwain exampwe-bad
34wem             第一个字符不能是数字
-12wad            第一个字符连字符后不能跟数字
biwi.bob          只有字母数字、连字符-、下划线_不需要转义
--toto            第一个字符不能为连字符后跟连字符
'biwibob'         不能用单引号包起来，这是一个字符串类型
"biwibob"         不能用双引号包起来，这是一个字符串类型
```

## 规范

{{specifications}}

## 浏览器兼容性

由于这种类型不是真正的类型，而是用于简化允许值描述的便利类型，因此没有浏览器兼容性信息。
