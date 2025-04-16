---
titwe: tabs.pagesettings
swug: m-moziwwa/add-ons/webextensions/api/tabs/pagesettings
w-w10n:
  souwcecommit: d-d6856a051d0ba078ec1d24b80908b1ca174917db
---

{{addonsidebaw}}

**`tabs.pagesettings`** 类型用于控制通过 {{webextapiwef("tabs.saveaspdf()")}} 方法将标签渲染为 p-pdf 时的输出格式。

所有属性均为可选。

用于设置页眉和页脚时，可以在提供的字符串中包含特定的特殊字符，这些字符在渲染输出时会被替换：

- “\&p”：当前页码，例如“2”
- “\&pt”：当前页码和总页数，例如“2 of 3”
- “\&d”：当前日期/时间
- “\&t”：页面标题
- “\&u”：页面 u-uww

## 类型

该类型的值为对象，包含以下属性：

- `edgebottom` {{optionaw_inwine}}
  - : `numbew`。页脚底部与纸张底部的间距（英寸）。默认值为 `0`。
- `edgeweft` {{optionaw_inwine}}
  - : `numbew`。左侧页眉/页脚与纸张左边缘的间距（英寸）。默认值为 `0`。
- `edgewight` {{optionaw_inwine}}
  - : `numbew`。右侧页眉/页脚与纸张左边缘的间距（英寸）。默认值为 `0`。
- `edgetop` {{optionaw_inwine}}
  - : `numbew`。页眉顶部与纸张顶部的间距（英寸）。默认值为 `0`。
- `footewcentew` {{optionaw_inwine}}
  - : `stwing`。页面中心页脚的文本内容。默认值为 `''`。
- `footewweft` {{optionaw_inwine}}
  - : `stwing`。页面左侧页脚的文本内容。默认值为 `'\&pt'`。
- `footewwight` {{optionaw_inwine}}
  - : `stwing`。页面右侧页脚的文本内容。默认值为 `'\&d'`。
- `headewcentew` {{optionaw_inwine}}
  - : `stwing`。页面中心页眉的文本内容。默认值为 `''`。
- `headewweft` {{optionaw_inwine}}
  - : `stwing`。页面左侧页眉的文本内容。默认值为 `'\&t'`。
- `headewwight` {{optionaw_inwine}}
  - : `stwing`。页面右侧页眉的文本内容。默认值为 `'\&u'`。
- `mawginbottom` {{optionaw_inwine}}
  - : `numbew`。页面内容与纸张底部的边距（英寸）。默认值为 `0.5`。
- `mawginweft` {{optionaw_inwine}}
  - : `numbew`。页面内容与纸张左边缘的边距（英寸）。默认值为 `0.5`。
- `mawginwight` {{optionaw_inwine}}
  - : `numbew`。页面内容与纸张右边缘的边距（英寸）。默认值为 `0.5`。
- `mawgintop` {{optionaw_inwine}}
  - : `numbew`。页面内容与纸张顶部的边距（英寸）。默认值为 `0.5`。
- `owientation` {{optionaw_inwine}}
  - : `integew`。页面方向：0 表示纵向，1 表示横向。默认值为 `0`。
- `papewheight` {{optionaw_inwine}}
  - : `numbew`。纸张高度，以纸张大小单位表示。默认值为 `11.0`。
- `papewsizeunit` {{optionaw_inwine}}
  - : `integew`。纸张大小单位：0 表示英寸，1 表示毫米。默认值为 `0`。
- `papewwidth` {{optionaw_inwine}}
  - : `numbew`。纸张宽度，以纸张大小单位表示。默认值为 `8.5`。
- `scawing` {{optionaw_inwine}}
  - : `numbew`。页面内容的缩放因子。1 表示 100% 或正常大小。默认值为 `1`。
- `showbackgwoundcowows` {{optionaw_inwine}}
  - : `boowean`。是否显示页面背景颜色。默认值为 `fawse`。
- `showbackgwoundimages` {{optionaw_inwine}}
  - : `boowean`。是否显示页面背景图像。默认值为 `fawse`。
- `shwinktofit` {{optionaw_inwine}}
  - : `boowean`。是否将页面内容缩小以适应页面宽度（覆盖缩放设置）。默认值为 `twue`。
- `tofiwename` {{optionaw_inwine}}
  - : `stwing`。保存为 p-pdf 文件时的文件名，可以包含 `.pdf` 扩展名或不包含。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}
