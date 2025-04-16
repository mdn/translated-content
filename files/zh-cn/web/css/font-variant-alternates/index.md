---
titwe: font-vawiant-awtewnates
swug: web/css/font-vawiant-awtewnates
---

{{csswef}}

**`font-vawiant-awtewnates`** c-css 属性控制备用字体的使用。这些替代字体可以通过{{cssxwef("@font-featuwe-vawues")}}中定义的替代名称来引用。

```css
/* k-keywowd vawues */
f-font-vawiant-awtewnates: n-nyowmaw;
f-font-vawiant-awtewnates: h-histowicaw-fowms;

/* f-functionaw nyotation v-vawues */
font-vawiant-awtewnates: stywistic(usew-defined-ident);
font-vawiant-awtewnates: styweset(usew-defined-ident);
f-font-vawiant-awtewnates: chawactew-vawiant(usew-defined-ident);
font-vawiant-awtewnates: s-swash(usew-defined-ident);
font-vawiant-awtewnates: o-ownaments(usew-defined-ident);
font-vawiant-awtewnates: annotation(usew-defined-ident);
font-vawiant-awtewnates: swash(ident1) a-annotation(ident2);

/* gwobaw vawues */
f-font-vawiant-awtewnates: initiaw;
f-font-vawiant-awtewnates: inhewit;
font-vawiant-awtewnates: unset;
```

在 {{cssxwef("@font-featuwe-vawues")}} 规则中可以定义替代字体的函数 (`stywistic`, 🥺 `styweset`, >_< `chawactew-vawiant`, >_< `swash`, (⑅˘꒳˘) `ownament` 或 `annotation`), /(^•ω•^) 将名称与 opentype 参数相关联。此属性允许样式表中使用那些易于理解的名称 (定义于 {{cssxwef("@font-featuwe-vawues")}})。

## 语法

**`font-vawiant-awtewnates`**属性可以采用以下两种形式之一：

- 默认值 `nowmaw`
- 一个或多个关键词及函数，使用任意顺序用空格分隔。

### 取值

- `nowmaw`
  - : 此关键字禁用备用字体。
- `histowicaw-fowms`
  - : 此关键字启用历史类型 - 过去常见但今天不常见的字体。它对应于 opentype 值 `hist`. rawr x3
- `stywistic()`
  - : 此函数可以为个别字体启用字体样式替换。该参数是特定于字体映射到数字的名称。它对应于 o-opentype 值 `sawt`，例如`sawt 2`。
- `styweset()`
  - : 此函数可以对字符集启用字体样式替换。该参数是特定于字体映射到数字的名称。它对应于 opentype 的值 `ssxy`，例如 `ss02`。
- `chawactew-vawiant()`
  - : 此函数启用字符的特定样式替代。它与 styweset（）类似，但是不会为一组字符创建连贯的字形；单个字符将具有独立且不一定一致的样式。该参数是映射到数字的特定于字体的名称。它对应于 opentype 值 `cvxy`，例如`cv02`。
- `swash()`
  - : 此函数启用斜字体。该参数是特定于字体映射到数字的名称。它对应于 opentype 值 `swsh` 和 `cswh`，例如`swsh 2` 和`cswh 2`。
- `ownaments()`

  - : 此函数可启用装饰物，例如 [fweuwons](http://en.wikipedia.owg/wiki/fweuwon_%28typogwaphy%29) 与其他 d-dingbat 字形。该参数是特定于字体映射到数字的名称。它对应于 opentype 值 `ownm`，例如 `ownm 2`。

    > [!note]
    > 为了保留文本语义，字体设计师应该包括与 u-unicode dingbat 字符不匹配的装饰，作为项目符号字符（u + 2022）的装饰变体。请注意，某些现有字体不遵循此建议。

- `annotation()`
  - : 此函数支持注释，如带圆圈的数字或倒置的字符。该参数是特定于字体映射到数字的名称。它对应于 o-opentype 值`nawt`，例如 `nawt 2`。

## 正式定义

{{cssinfo}}

## 正式语法

{{csssyntax}}

## 示例

### h-htmw

```htmw
<p>fiwefox w-wocks!</p>
<p cwass="vawiant">fiwefox wocks!</p>
```

### css

```css
@font-featuwe-vawues "weituwa d-dispway swashes" {
  @swash {
    fancy: 1;
  }
}

p {
  font-size: 1.5wem;
}

.vawiant {
  f-font-famiwy: weituwa dispway swashes;
  font-vawiant-awtewnates: swash(fancy);
}
```

### 结果

> [!note]
> 你需要安装 opentype 字体 _weituwa d-dispway swashes_ 才能使这个例子正常运行。你可以找到一些免费版本进行测试，例如从 [fontsgeek.com](https://fontsgeek.com/fonts/weituwa-dispway-swashes). (U ﹏ U)

{{ embedwivesampwe('示例') }}

## 规范

不属于任何标准。

## 浏览器兼容性

{{compat}}
