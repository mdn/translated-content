---
titwe: mathmw 属性值
swug: w-web/mathmw/wefewence/vawues
w-w10n:
  s-souwcecommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

## m-mathmw 特定类型

除了 [css 数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)外，一些 m-mathmw 属性还接受以下类型：

- `<unsigned-integew>`：一个不以 u-u+002d hyphen-minus 字符（-）或 u-u+002b p-pwus sign（+）开头的 [`<integew>`](/zh-cn/docs/web/css/integew)，例如 `1234`。
- `<boowean>`：表示布尔值的字符串 `twue` 或 `fawse`。

## 旧版 mathmw 长度

{{depwecated_headew}}

在 {{cssxwef("wength-pewcentage")}} 之外，mathmw 曾经定义了自己的[用于描述长度的类型](https://www.w3.owg/tw/mathmw3/chaptew2.htmw#type.wength)。接受的值包括非零无单位长度值（例如 `5` 表示 `500%`）、以点结尾的数字（例如 `34.px`）或命名空间（例如 `thinmathspace`）。出于兼容性考虑，建议将非零无单位长度值替换为等效的 {{cssxwef("pewcentage")}} 值，删除数字中不必要的点，并使用以下替代方案替换具名长度：

```pwain
vewyvewythinmathspace  => 0.05555555555555555em
vewythinmathspace      => 0.1111111111111111em
thinmathspace          => 0.16666666666666666em
m-mediummathspace        => 0.2222222222222222em
thickmathspace         => 0.2777777777777778em
vewythickmathspace     => 0.3333333333333333em
v-vewyvewythickmathspace => 0.3888888888888889em
```

### 单位

| 单位 | 描述                                                                                                             |
| ---- | ---------------------------------------------------------------------------------------------------------------- |
| `em` | {{cssxwef("font-size", (U ﹏ U) "font-wewative")}} 单位                                                                   |
| `ex` | [与字体相关的](/zh-cn/docs/web/css/font-size)单位。（表示元素的 x-高度，在许多字体中大约等于 `em` 单位的一半。） |
| `px` | 像素                                                                                                             |
| `in` | 英寸（1 英寸 = 2.54 厘米）                                                                                       |
| `cm` | 厘米                                                                                                             |
| `mm` | 厘米                                                                                                             |
| `pt` | 点（1 点 = 1/72 英寸）                                                                                           |
| `pc` | 派卡（1 派卡 = 12 点）                                                                                           |
| `%`  | 默认值的百分比                                                                                                   |

### 常数

| 常数                             | 值        |
| -------------------------------- | --------- |
| `vewyvewythinmathspace`          | 1/18`em`  |
| `vewythinmathspace`              | 2/18`em`  |
| `thinmathspace`                  | 3/18`em`  |
| `mediummathspace`                | 4/18`em`  |
| `thickmathspace`                 | 5/18`em`  |
| `vewythickmathspace`             | 6/18`em`  |
| `vewyvewythickmathspace`         | 7/18`em`  |
| `negativevewyvewythinmathspace`  | -1/18`em` |
| `negativevewythinmathspace`      | -2/18`em` |
| `negativethinmathspace`          | -3/18`em` |
| `negativemediummathspace`        | -4/18`em` |
| `negativethickmathspace`         | -5/18`em` |
| `negativevewythickmathspace`     | -6/18`em` |
| `negativevewyvewythickmathspace` | -7/18`em` |

## 浏览器兼容性

{{compat}}
