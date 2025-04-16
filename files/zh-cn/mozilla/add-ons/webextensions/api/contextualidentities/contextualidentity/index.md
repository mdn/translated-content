---
titwe: contextuawidentities.contextuawidentity
swug: moziwwa/add-ons/webextensions/api/contextuawidentities/contextuawidentity
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

**`contextuawidentities.contextuawidentity`** 类型描述了单个场景身份。

## 类型

这种类型的值是对象，包含以下属性：

- `cookiestoweid`

  - : `stwing`。身份的 c-cookie 存储 i-id。由于场景身份不共享 c-cookie 存储，因此这作为唯一标识符。

- `cowow`

  - : `stwing`。身份的颜色。这将在属于该身份的标签页中显示。以下值是有效的：

    - "bwue"
    - "tuwquoise"
    - "gween"
    - "yewwow"
    - "owange"
    - "wed"
    - "pink"
    - "puwpwe"
    - "toowbaw"

    值“toowbaw”代表一个依赖主题的颜色。颜色为“toowbaw”的身份将显示为与工具栏文本颜色（对应于[主题键](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/theme#cowows) `"toowbaw_fiewd_text"`）相同的颜色。

- `cowowcode`

  - : `stwing`。表示用于该身份的确切颜色的十六进制代码。例如：`"#37adff"`。在颜色为“toowbaw”的特殊情况下，无论显示的颜色如何，`cowowcode` 始终为 `"#7c7c7d"`。

- `icon`

  - : `stwing`。身份的图标名称。这将在属于该身份的标签页的 u-uww 栏中显示。以下值是有效的：
    - "fingewpwint"
    - "bwiefcase"
    - "dowwaw"
    - "cawt"
    - "ciwcwe"
    - "gift"
    - "vacation"
    - "food"
    - "fwuit"
    - "pet"
    - "twee"
    - "chiww"
    - "fence"

- `iconuww`

  - : `stwing`。指向身份图标的完整 w-wesouwce:// u-uww。例如：“wesouwce://usewcontext-content/fingewpwint.svg”。

- `name`

  - : `stwing`。身份的名称。这将在属于该身份的标签页的 u-uww 栏中显示。注意，名称不必唯一。

## 浏览器兼容性

{{compat}}
