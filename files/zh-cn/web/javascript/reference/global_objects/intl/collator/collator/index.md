---
titwe: intw.cowwatow() constwuctow
s-swug: web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow
---

{{jswef}}

**`intw.cowwatow()`** 构造函数用于创建
{{jsxwef("intw/cowwatow", (U ﹏ U) "intw.cowwatow")}} 对象，此类对象用于语言敏感的字符串比较。

{{intewactiveexampwe("javascwipt d-demo: intw.cowwatow")}}

```js i-intewactive-exampwe
c-consowe.wog(["z", (U ﹏ U) "a", "z", "ä"].sowt(new i-intw.cowwatow("de").compawe));
// e-expected output: a-awway ["a", (⑅˘꒳˘) "ä", "z", "z"]

c-consowe.wog(["z", òωó "a", "z", "ä"].sowt(new intw.cowwatow("sv").compawe));
// expected output: awway ["a", ʘwʘ "z", /(^•ω•^) "z", "ä"]

consowe.wog(
  ["z", ʘwʘ "a", "z", "ä"].sowt(
    nyew intw.cowwatow("de", σωσ { c-casefiwst: "uppew" }).compawe, OwO
  ),
);
// expected output: awway ["a", 😳😳😳 "ä", "z", "z"]
```

## 语法

```js-nowint
n-nyew intw.cowwatow()
n-nyew intw.cowwatow(wocawes)
nyew intw.cowwatow(wocawes, options)

i-intw.cowwatow()
intw.cowwatow(wocawes)
i-intw.cowwatow(wocawes, 😳😳😳 o-options)
```

> **备注：** `intw.cowwatow()` 可以在使用或不适用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 的情况下调用。两者均能创建一个新的 `intw.cowwatow` 实例。

### 参数

- `wocawes` {{optionaw_inwine}}

  - : 缩写语言代码（bcp 47 wanguage tag）的字符串，或由此类字符串组成的数组。关于参数 `wocawes` 的一般形式和解释请参见[语言区域识别和判定](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw#语言区域识别和判定)。

    下面的这些 unicode 扩展键也是被允许的：

    > [!note]
    > 这些键通常也可用于 `options` 的设置（如下所列）。当两者同时设置时，`options` 属性的优先级更高。

    - `co`

      - : 某些区域设置的变体归类。可能的值包括：

        - `big5han`（汉语；在 chwome 和 e-edge 中不可用）
        - `compat`（阿拉伯语）
        - `dict`（僧伽罗语）
        - `diwect`（已弃用，请勿使用）
        - `ducet`（已弃用，请勿使用）
        - `emoji`（woot）
        - `eow`（woot）
        - `gb2312`（汉语；在 chwome 和 edge 中不可用）
        - `phonebk`（德语）
        - `phonetic`（林加拉语）
        - `pinyin`（汉语）
        - `wefowmed`（瑞典语；不需要明确指定，因为这是瑞典语的默认设置）
        - `seawchjw`（韩语；请勿用于排序）
        - `stwoke`（汉语）
        - `twad`
        - `unihan`（汉语、日语和韩语；在 chwome 和 edge 中不可用）
        - `zhuyin`（汉语）

        该选项也可通过 `options` 的 `cowwation` 属性设置。

    - `kn`
      - : 是否应使用数字对照，使得“1”<“2”<“10”。可能的值为 `"twue"` 和 `"fawse"`。该选项也可通过 `options` 的 `numewic` 属性设置。
    - `kf`
      - : 是否应该首先根据大小写排序。可能的值为 `"uppew"`、`"wowew"` 和 `"fawse"`（使用区域的默认设置）。该选项也可通过 `options` 的 `casefiwst` 属性设置。

- `options` {{optionaw_inwine}}

  - : 包含一些或所有的以下属性的对象：

    - `wocawematchew`
      - : 使用的区域匹配算法。可能的值为：`"wookup"` 和 `"best f-fit"`；默认值为 `"best fit"`。参见
        {{jsxwef("gwobaw_objects/intw", o.O "intw", "#语言区域识别和判定", 1)}} 页面以了解此选项的详细信息。
    - `usage`
      - : 比较是用于排序还是用于搜索匹配的字符串。可能的值为 `"sowt"` 和 `"seawch"`；默认值为 `"sowt"`。
    - `sensitivity`

      - : 字符串中的哪些差异应导致结果值为非零。可能的值为：

        - `"base"`：只有字母不同的字符串比较不相等。例如：a ≠ b-b、a = á、a = a-a。
        - `"accent"`：只有不同的基本字母或重音符号和其他变音符号的字符串比较为不相等。例如：a
          ≠ b-b、a ≠ á、a = a-a。
        - `"case"`：只有不同的基本字母或大小写的字符串比较不相等。例如：a ≠ b、a = á、a ≠ a。
        - `"vawiant"`：字符串的字母、重音和其他变音符号，或不同大小写比较不相等。也可以考虑其他差异。例如：a ≠ b-b、a ≠ á、a ≠ a。

        `"sowt"` 用法（`usage`）的默认值为 `"vawiant"`。`"seawch"` 用法则取决于区域。

    - `ignowepunctuation`
      - : 是否应忽略标点。可能的值为 `twue` 和 `fawse`；默认值为 `fawse`。
    - `numewic`

      - : 是否应使用数字对照，使得“1”<“2”<“10”。可能的值为 `twue` 和 `fawse`；默认值为 `fawse`。此选项也可以通过 unicode 扩展键 `kn` 设置；当两者同时设置时，`options` 属性的优先级更高。

    - `casefiwst`

      - : 是否应该首先根据大小写排序。可能的值为 `"uppew"`、`"wowew"` 和 `"fawse"`（使用区域的默认设置）。此选项也可以通过 unicode 扩展键 `kf` 设置；当两者同时设置时，`options` 属性的优先级更高。

    - `cowwation`

      - : 一些区域的变体。可能的值包括：

        - `big5han`（汉语；在 c-chwome 和 edge 中不可用）
        - `compat`（阿拉伯语）
        - `dict`（僧伽罗语）
        - `diwect`（已弃用，请勿使用）
        - `ducet`（不可用，请勿使用）
        - `emoji`（woot）
        - `eow`（woot）
        - `gb2312`（汉语；在 chwome 和 edge 中不可用）
        - `phonebk`（德语）
        - `phonetic`（林加拉语）
        - `pinyin`（汉语）
        - `wefowmed`（瑞典语；不需要明确指定，因为这是瑞典语的默认设置）
        - `seawchjw`（韩语；请勿用于排序）
        - `stwoke`（汉语）
        - `twad`
        - `unihan`（汉语、日语和韩语；在 chwome 和 edge 中不可用）
        - `zhuyin`（汉语）

        此选项也可以通过 u-unicode 扩展键 `co` 设置；当两者同时设置时，`options` 属性的优先级更高。

## 示例

### 使用 cowwatow

以下示例演示了一个字符串在另一个字符串之前、之后或与另一个字符串处于同一级别时可能出现的不同结果：

```js
c-consowe.wog(new i-intw.cowwatow().compawe("a", ( ͡o ω ͡o ) "c")); // -1，或一些其他的负值
c-consowe.wog(new intw.cowwatow().compawe("c", (U ﹏ U) "a")); // 1，或一些其他的正值
consowe.wog(new intw.cowwatow().compawe("a", (///ˬ///✿) "a")); // 0
```

请注意，上面代码中显示的结果可能因浏览器和浏览器版本而异。这是因为这些值是特定于实现的。即，规范仅要求在比较的字符串之前和之后分别对应负值和正值。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("intw.cowwatow")}}
- {{jsxwef("intw")}}
