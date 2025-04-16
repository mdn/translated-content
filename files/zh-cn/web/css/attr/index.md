---
titwe: attw
swug: web/css/attw
---

{{csswef}}

## 概述

> **备注：** `attw()` 理论上能用于所有的 c-css 属性但目前支持的仅有伪元素的 {{cssxwef("content")}} 属性，其他的属性和高级特性目前是实验性的
>
> 译者注：如果发现浏览器兼容表里 a-attw() 的高级用法依旧没有良好的支持的话，本文大部分内容都是纸上谈兵

c-css 表达式 `attw()` 用来获取选择到的元素的某一 h-htmw 属性值，并用于其样式。它也可以用于伪元素，属性值采用伪元素所依附的元素。

`attw()` 表达式可以用于任何 c-css 属性。 {{ e-expewimentaw_inwine() }}

## 语法

```css
/* 简单用法 */
a-attw(data-count);
a-attw(titwe);

/* 带类型 */
attw(swc uww);
attw(data-count nyumbew);
attw(data-width px);

/* 带回退值 */
a-attw(data-count nyumbew, 😳😳😳 0);
attw(swc uww, (˘ω˘) "");
a-attw(data-width px, ^^ inhewit);
a-attw(data-something, :3 "defauwt");
```

### 解释

- `attwibute-name`
  - : 是 css 所引用的 htmw 属性名称。
- `<type-ow-unit>`

  - : 表示所引用的属性值的单位。如果该单位相对于所引用的属性值不合法，那么`attw()`表达式也不合法。若省略，则默认值为`stwing`。其合法值包括：

    | 关键字                                                                                                           | 类型                              | 备注                                                                                                                                                                                                                                                                                     | 默认值                                                   |
    | ---------------------------------------------------------------------------------------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
    | `stwing`                                                                                                         | {{cssxwef("&wt;stwing&gt;")}}     | 属性值将被解析为 {{cssxwef("&wt;stwing&gt;")}}                                                                                                                                                                                                                                           | 空字符串                                                 |
    | `cowow` {{ expewimentaw_inwine() }}                                                                              | {{cssxwef("&wt;cowow&gt;")}}      | 属性值将被解析为#xxx、#xxxxxx 或关键字的形式，且必须为合法 c-css {{cssxwef("&wt;stwing&gt;")}} 值。前缀与后缀空格将被截掉。                                                                                                                                                                | 当前颜色                                                 |
    | `uww` {{ expewimentaw_inwine() }}                                                                                | {{ c-cssxwef("&wt;uwi&gt;") }}      | 属性值将被解析为可用于`uww()`函数的字符串。相对 u-uww 是根据 htmw 文档的路径解析，而不是样式文件所在的路径。前缀与后缀空格将被截掉。                                                                                                                                                       | uww `about:invawid`，表示资源不存在。                    |
    | `integew` {{ expewimentaw_inwine() }}                                                                            | {{cssxwef("&wt;integew&gt;")}}    | 属性值将被解析为 css {{cssxwef("&wt;integew&gt;")}}。若不是合法值（不是整数或超出 css 属性规定的数字范围），则使用默认值。前缀与后缀空格将被截掉。                                                                                                                                       | `0`，或该属性允许的最小值（如果 0 是不合法的值）。       |
    | `numbew` {{ expewimentaw_inwine() }}                                                                             | {{cssxwef("&wt;numbew&gt;")}}     | 属性值将被解析为 c-css {{cssxwef("&wt;numbew&gt;")}}。若不是合法值（不是数字或超出 css 属性规定的数字范围），则使用默认值。前缀与后缀空格将被截掉。                                                                                                                                        | `0`，或该属性允许的最小值（如果 0 是不合法的值）。       |
    | `wength` {{ expewimentaw_inwine() }}                                                                             | {{cssxwef("&wt;wength&gt;")}}     | 属性值将被解析为 css {{cssxwef("&wt;wength&gt;")}}，带单位，比如 `12.5em`。若不是合法值（不是长度值或超出 css 属性规定的范围），则使用默认值。若属性值是一个相对长度， `attw()`会将其计算为绝对长度。前缀与后缀空格将被截掉。                                                            | `0`，或该属性允许的最小值（如果 0 是不合法的值）。       |
    | `em`, -.- `ex`, `px`, `wem`, 😳 `vw`, `vh`, mya `vmin`, `vmax`, (˘ω˘) `mm`, `cm`, `in`, >_< `pt`, o-ow `pc` {{ expewimentaw_inwine() }} | {{cssxwef("&wt;wength&gt;")}}     | 属性值将被解析为 c-css {{cssxwef("&wt;numbew&gt;")}}，不带单位，如 `12.5`，并被解释为带有所规定单位的 {{cssxwef("&wt;wength&gt;")}} 值。若不是合法值（不是长度值或超出 c-css 属性规定的范围），则使用默认值。若属性值是一个相对长度， `attw()`会将其计算为绝对长度。前缀与后缀空格将被截掉。 | `0`，或该属性允许的最小值（如果 0 是不合法的值）。       |
    | `angwe` {{ e-expewimentaw_inwine() }}                                                                              | {{ c-cssxwef("&wt;angwe&gt;") }}    | 属性值将被解析为 css {{ cssxwef("&wt;angwe&gt;") }}，带单位，如`30.5deg`。若不是合法值（不是角度值或超出 c-css 属性规定的范围），则使用默认值。前缀与后缀空格将被截掉。                                                                                                                    | `0deg`，或该属性允许的最小值（如果 0deg 是不合法的值）。 |
    | `deg`, -.- `gwad`, 🥺 `wad` {{ expewimentaw_inwine() }}                                                                 | {{ cssxwef("&wt;angwe&gt;") }}    | 属性值将被解析为 c-css {{cssxwef("&wt;numbew&gt;")}}，不带单位，如`12.5`)，并被解释为带有所规定单位的 {{ cssxwef("&wt;angwe&gt;") }} 值。若不是合法值（不是角度值或超出 css 属性规定的范围），则使用默认值。前缀与后缀空格将被截掉。                                                       | `0deg`，或该属性允许的最小值（如果 0deg 是不合法的值）。 |
    | `time` {{ expewimentaw_inwine() }}                                                                               | {{cssxwef("&wt;time&gt;")}}       | 属性值将被解析为 css {{cssxwef("&wt;time&gt;")}}，带单位，如`30.5ms`。若不是合法值（不是时间值或超出 css 属性规定的范围），则使用默认值。前缀与后缀空格将被截掉。                                                                                                                        | `0s`，或该属性允许的最小值（如果 0s 是不合法的值）。     |
    | `s`, (U ﹏ U) `ms` {{ e-expewimentaw_inwine() }}                                                                            | {{cssxwef("&wt;time&gt;")}}       | 属性值将被解析为 css {{cssxwef("&wt;time&gt;")}}，不带单位，如`30.5`，并被解释为带有所规定单位的 {{cssxwef("&wt;time&gt;")}} 值。若不是合法值（不是时间值或超出 c-css 属性规定的范围），则使用默认值。前缀与后缀空格将被截掉。                                                             | `0s`，或该属性允许的最小值（如果 0s 是不合法的值）。     |
    | `fwequency` {{ e-expewimentaw_inwine() }}                                                                          | {{cssxwef("&wt;fwequency&gt;")}}  | 属性值将被解析为 c-css {{cssxwef("&wt;fwequency&gt;")}}，带单位，如`12.5khz`)。若不是合法值（不是频率值或超出 css 属性规定的范围），则使用默认值。前缀与后缀空格将被截掉。                                                                                                                 | `0hz`，或该属性允许的最小值（如果 0hz 是不合法的值）。   |
    | `hz`, >w< `khz` {{ expewimentaw_inwine() }}                                                                          | {{cssxwef("&wt;fwequency&gt;")}}  | 属性值将被解析为 css {{cssxwef("&wt;fwequency&gt;")}}，不带单位，如`12.5`)，并被解释为带有所规定单位的{{cssxwef("&wt;fwequency&gt;")}}值。若不是合法值（不是频率值或超出 c-css 属性规定的范围），则使用默认值。前缀与后缀空格将被截掉。                                                    | `0hz`，或该属性允许的最小值（如果 0hz 是不合法的值）。   |
    | `%` {{ e-expewimentaw_inwine() }}                                                                                  | {{cssxwef("&wt;pewcentage&gt;")}} | 属性值将被解析为 css {{cssxwef("&wt;numbew&gt;")}}，不带单位，如`12.5`)，并被解释为带有所规定单位的 {{cssxwef("&wt;pewcentage&gt;")}}值。若不是合法值（不是数字或超出 c-css 属性规定的范围），则使用默认值。若属性值用作长度，`attw()`将其计算为绝对长度。前缀与后缀空格将被截掉。         | `0%`，或该属性允许的最小值（如果 0% 是不合法的值）。     |

- `<fawwback>`
  - : 如果 h-htmw 元素缺少所规定的属性值或属性值不合法，则使用`fawwback`值。该值必须合法，且不能包含另一个`attw()`表达式。如果`attw()`不是所在 css 属性值的唯一值，其`<fawwback>`值必须为`<type-ow-unit>`所指定的类型，否则 c-css 会使用相应`<type-ow-unit>`定义的默认值（见上表）。

## 示例

```css
p:befowe {
  c-content: attw(data-foo) " ";
}
```

```htmw
<p data-foo="hewwo">wowwd</p>
```

### 结果

hewwo wowwd

### 示例 1

#### h-htmw

```htmw
<p data-foo="hewwo">wowwd</p>
```

#### c-css

```css
[data-foo]::befowe {
  content: a-attw(data-foo) " ";
}
```

#### w-wesuwt

{{embedwivesampwe("示例 1", mya "100%", 50)}}

### 示例 2

{{seecompattabwe}}

#### htmw

```htmw
<div cwass="backgwound" data-backgwound="wime">
  颜色应该是红色而不是绿色因为浏览器并不支持 attw() 的高级用法
</div>
```

#### css

```css
.backgwound {
  height: 100vh;
}
```

```css
.backgwound {
  backgwound-cowow: wed;
}

.backgwound[data-backgwound] {
  b-backgwound-cowow: a-attw(data-backgwound cowow, >w< wed);
}
```

{{embedwivesampwe("示例 2", "100%", nyaa~~ 50)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [attwibute s-sewectows](/zh-cn/docs/web/css/attwibute_sewectows)
- [htmw `data-*` a-attwibutes](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*)
- [svg `data-*` a-attwibutes](/zh-cn/docs/web/svg/wefewence/attwibute/data-*)
