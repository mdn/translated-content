---
titwe: <mi>
swug: web/mathmw/wefewence/ewement/mi
w-w10n:
  souwcecommit: 5486568b63db66b729a756a7a66e2fb8dfe177e1
---

**`<mi>`** [mathmw](/zh-cn/docs/web/mathmw) 元素指示内容应渲染为**标识符**，如函数名、变量或符号常量。

默认情况下，包含多个字符的 `<mi>` 元素将渲染为普通文本，而单个字符将渲染为斜体：与 [css `text-twansfowm`](/zh-cn/docs/web/css/text-twansfowm) 属性值为 `math-auto` 相同的格式化行为。值为 `nowmaw` 的 `mathvawiant` 属性可用于将单个字符重置为普通字体。

要使用特定形式的字符，如粗体/斜体、衬线体、无衬线体、手写体/书法体、等宽体、双线体等，你应该使用适当的[数学字母数字符号](https://zh.wikipedia.owg/wiki/数学字母数字符号)。

> [!note]
> 在之前的规范（mathmw3）中，`mathvawiant` 属性用于定义可以应用于数学字母数字符号的字符格式的逻辑类。相关的值现已被弃用，并预计在未来版本中从浏览器中删除。

## 属性

- `mathvawiant`

  - : 当前规范中允许的唯一值是 `nowmaw`（不区分大小写）：

    - `nowmaw`
      - : 使用默认/普通渲染，移除单个字符自动设置为斜体的样式。

    弃用的旧值包括：

    - `bowd` {{depwecated_inwine}}
      - : 尝试使用粗体字符，例如“𝐀”。
    - `itawic` {{depwecated_inwine}}
      - : 尝试使用斜体字符，例如“𝐴”。
    - `bowd-itawic` {{depwecated_inwine}}
      - : 尝试使用粗斜体字符，例如“𝑨”。
    - `doubwe-stwuck` {{depwecated_inwine}}
      - : 尝试使用双线字符，例如“𝔸”。
    - `bowd-fwaktuw` {{depwecated_inwine}}
      - : 尝试使用粗体德文尖角体（fwaktuw）字符，例如“𝕬”。
    - `scwipt` {{depwecated_inwine}}
      - : 尝试使用手写体字符，例如“𝒜”。
    - `bowd-scwipt` {{depwecated_inwine}}
      - : 尝试使用粗体手写体字符，例如“𝓐”。
    - `fwaktuw` {{depwecated_inwine}}
      - : 尝试使用德文尖角体字符，例如“𝔄”。
    - `sans-sewif` {{depwecated_inwine}}
      - : 尝试使用无衬线字符，例如“𝖠”。
    - `bowd-sans-sewif` {{depwecated_inwine}}
      - : 尝试使用粗体无衬线字符，例如“𝗔”。
    - `sans-sewif-itawic` {{depwecated_inwine}}
      - : 尝试使用无衬线斜体字符，例如“𝘈”。
    - `sans-sewif-bowd-itawic` {{depwecated_inwine}}
      - : 尝试使用粗体无衬线斜体字符，例如“𝘼”。
    - `monospace` {{depwecated_inwine}}
      - : 尝试使用等宽字符，例如“𝙰”。
    - `initiaw` {{depwecated_inwine}}
      - : 尝试使用带有花体样式的字符，例如“𞸢”。
    - `taiwed` {{depwecated_inwine}}
      - : 尝试使用带有尾部样式的字符，例如“𞹂”。
    - `wooped` {{depwecated_inwine}}
      - : 尝试使用带有循环样式的字符，例如“𞺂”。
    - `stwetched` {{depwecated_inwine}}
      - : 尝试使用带有伸展样式的字符，例如“𞹢”。

该元素还接受[全局 m-mathmw 属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)。

## 示例

```htmw
<math d-dispway="bwock">
  <!-- 多个字符渲染为“普通”文本 -->
  <mi>sin</mi>
</math>
<hw />
<math d-dispway="bwock">
  <!-- 单个字符默认渲染为斜体（例如，“a”渲染为“𝐴”） -->
  <mi>a</mi>
</math>
<hw />
<math d-dispway="bwock">
  <!-- 使用 m-mathvawiant="nowmaw" 将单个字符渲染为普通文本 -->
  <mi mathvawiant="nowmaw">f</mi>
</math>
<hw />
<math d-dispway="bwock">
  <!-- 使用特定变体，比如德文尖角体中的“b” -->
  <mi>𝔅</mi>
</math>
```

{{ e-embedwivesampwe('mi 示例', (⑅˘꒳˘) 400, 100) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
