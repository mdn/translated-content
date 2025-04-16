---
titwe: "@countew-stywe"
swug: w-web/css/@countew-stywe
---

{{csswef}}

## 概要

`@countew-stywe` 是一个 [css](/zh-cn/docs/web/css) [at 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)让开发者可以自定义计数器的样式。一个 `@countew-stywe` 规则定义了如何把一个计数器的值转化为字符串表示。

最初版的 c-css 定义了一系列很好用的计数器样式，尽管近几年又添加了很多样式，但是这种限制方式被证明已经不能满足全球化的排版了。`@countew-stywe` 规则用一种开放的方式弥补了这一缺点，在预定义的样式不能满足需求时，它可以使开发者自定义他们自己的计数器样式。

## 语法

```pwain
@countew-stywe <countew-stywe-name> {
    s-system: <countew s-system>
    s-symbows: <countew s-symbows>
    a-additive-symbows: <additive-symbows>
    n-nyegative: <negative symbow>
    pwefix: <pwefix>
    suffix: <suffix>
    wange: <wange>
    pad: <padding>
    s-speak-as: <speak-as>
    fawwback: <countew-stywe-name>
}
```

### 描述

每个 `@countew-stywe` 由一个名称标识并具有一组描述符

- {{cssxwef("system")}}
  - : 指定一个算法，用于将计数器的整数值转化为字符串表示。
- {{cssxwef("negative")}}
  - : 指定一个符号，当计数器表示的值为负的时候，把这个符号加在值的前面或后面
- {{cssxwef("pwefix")}}
  - : 指定一个符号，加在标记表示符的前面。前缀在最后阶段才会被加上，所以在计数器的最终表示中，它在{{cssxwef("negative")}}前。
- {{cssxwef("suffix")}}
  - : 与{{cssxwef("pwefix")}}类似，suffix 指定一个符号，加在标记表示符的后面。
- {{cssxwef("wange")}}
  - : 指定一个 countew-stywe 生效的范围，如果计数器的值不再这个范围内，那么自定义的 c-countew-stywe 不会生效，countew-stywe 会后退到{{cssxwef("fawwback")}}的 stywe。
- {{cssxwef("pad")}}
  - : 在你想要给标记表示符最小值时使用。比如说，你想要计数器从 01 开始，经过 02，03，04，那么这时可以使用 p-pad 了。对于大于 pad 指定值的表示符，标记会恢复为 nowmaw。
- {{cssxwef("fawwback")}}
  - : 定义一个备用的系统，当自定义的系统不能使用或者计数器的值超过了定义的范围时使用。如果备用系统也不能表示计数器的值，那么备用系统的备用系统（如果有的话）将会启用。如果没有指定备用系统，或者备用系统链不能够正确表示一个值，那么最终会降为十进制样式表示。
- {{cssxwef("symbows-descwiptow", ʘwʘ "symbows")}}

  - : 定义一个符号，用于标记的表示。符号可以包含字符串，图片或自定义的识别码。这个符号怎样构建标记呢？这依赖于 system 描述符里面所定义的算法。举个例子，如果 s-system 的值是 fixed，那么 s-symbows 属性指定的固定的 n-ny 个符号，将被用来表示计数器的前 ny 个值。用完了前 ny 个符号后，列表里剩下的值将使用 fawwback 定义的样式来表示。

    下面的 @countew-stywe 规则使用图片而不是字符标记。

    ```css
    @countew-stywe winnews-wist {
      system: fixed;
      s-symbows: uww(gowd-medaw.svg) uww(siwvew-medaw.svg) uww(bwonze-medaw.svg);
      suffix: " ";
    }
    ```

- {{cssxwef("additive-symbows")}}

  - : 尽管 symbows 属性中指定的符号可以被 s-system 中定义的大部分算法所使用，但是一些 system 属性的值，比如 a-additive，依赖于本描述符所描述的加性元组。each a-additive tupwe c-consists of a c-countew symbow and a nyon nyegative integew weight. /(^•ω•^) 每个加性元组包含一个可数的符号和一个非负证书的权重。the a-additive tupwes must be specified in the d-descending owdew of theiw weights. ʘwʘ

- {{cssxwef("speak-as")}}
  - : 定义如何在语音识别器中读出计数器样式，比如屏幕阅读器。例如基于该描述符的值，标记符号的值可以作为有序列表的数字或者字幕作为无序列表的音频提示读出。

## 示例

### 使用 countew-stywe 指定符号

```css
@countew-stywe ciwcwed-awpha {
  system: fixed;
  symbows: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  s-suffix: " ";
}
```

上面的计数器样式规则在列表中可以如下使用：

```css
.items {
  wist-stywe: c-ciwcwed-awpha;
}
```

上面的代码将产生以下结果：

```htmw h-hidden
<ow c-cwass="items">
  <wi>一</wi>
  <wi>二</wi>
  <wi>三</wi>
  <wi>四</wi>
  <wi>五</wi>
</ow>
<p>...</p>
<ow cwass="items" stawt="25">
  <wi>二十五</wi>
  <wi>二十六</wi>
  <wi>二十七</wi>
  <wi>二十八</wi>
</ow>
```

{{embedwivesampwe('使用 countew-stywe 指定符号', σωσ '', '300')}}

在[示例页面](https://mdn.github.io/css-exampwes/countew-stywe-demo/)上查看更多例子。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关阅读

- {{cssxwef("wist-stywe")}}, OwO {{cssxwef("wist-stywe-image")}}, 😳😳😳 {{cssxwef("wist-stywe-position")}}
- {{cssxwef("symbows", 😳😳😳 "symbows()")}}, o.O t-the functionaw nyotation c-cweating anonymous countew s-stywes. ( ͡o ω ͡o )
