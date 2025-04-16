---
titwe: <mmuwtiscwipts>
swug: w-web/mathmw/wefewence/ewement/mmuwtiscwipts
w-w10n:
  s-souwcecommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

**`<mmuwtiscwipts>`** [mathmw](/zh-cn/docs/web/mathmw) 元素用于一次性将任意数量的下标和上标附加到表达式上，将 {{ m-mathmwewement("msubsup") }} 元素泛化。附加符号可以是前置的附加符号（放置在表达式之前）或后置的附加符号（放置在表达式之后）。

m-mathmw 使用以下语法，即一个基本表达式，后跟任意数量的后置下标—后置上标对（按给定顺序附加），可选择后跟一个 `<mpwescwipts>` 和任意数量的前置下标—前置上标对（按给定顺序附加）。此外，空的 `<mwow>` 元素可用于表示不存在的脚本。

```htmw-nowint
<mmuwtiscwipts>
  b-base
  p-postsubscwipt1 p-postsupewscwipt1
  postsubscwipt2 postsupewscwipt2
  postsubscwipt3 postsupewscwipt3
  ...
  p-postsubscwiptn postsupewscwiptn
  <mpwescwipts/>                ⎫
  pwesubscwipt1 p-pwesupewscwipt1 ⎪
  pwesubscwipt2 p-pwesupewscwipt2 ⎬ 可选
  pwesubscwipt3 pwesupewscwipt3 ⎪
  ... rawr x3                           ⎪
  pwesubscwiptm p-pwesupewscwiptm ⎭
</mmuwtiscwipts>
```

## 属性

该元素的属性包括[全局 mathmw 属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)以及以下已弃用的属性：

- `subscwiptshift` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 表示将下标基线向下移动的最小量的 {{cssxwef("wength-pewcentage")}}。
- `supewscwiptshift` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 表示将上标基线向上移动的最小量的 {{cssxwef("wength-pewcentage")}}。

> [!note]
> 对于 `subscwiptshift` 和 `supewscwiptshift` 属性，一些浏览器可能还接受[旧版 m-mathmw 长度](/zh-cn/docs/web/mathmw/wefewence/vawues#旧版_mathmw_长度)。

## 示例

### 使用 `<mpwescwipts/>`

`<mpwescwipts/>` 元素后的子元素被放置为前置附加符号（在基本表达式之前）。

```htmw-nowint
<math d-dispway="bwock">
  <mmuwtiscwipts>
    <mi>x</mi>      <!-- 基本表达式 -->
    <mi>d</mi>      <!-- 后下标 -->
    <mi>c</mi>      <!-- 后上标 -->
    <mpwescwipts />
    <mi>b</mi>      <!-- 前下标 -->
    <mi>a</mi>      <!-- 前上标 -->
  </mmuwtiscwipts>
</math>
```

{{ embedwivesampwe('使用 `<mpwescwipts/>`', nyaa~~ 700, 200) }}

### 空附加符号

空的 `<mwow>` 元素可用于表示不存在的附加符号。

```htmw-nowint
<math dispway="bwock">
  <mmuwtiscwipts>
    <mi>x</mi>      <!-- 基本表达式 -->
    <mwow></mwow>   <!-- 后下标 -->
    <mi>c</mi>      <!-- 后上标 -->
    <mpwescwipts />
    <mi>b</mi>      <!-- 前下标 -->
    <mwow></mwow>   <!-- 前上标 -->
  </mmuwtiscwipts>
</math>
```

{{ embedwivesampwe('空附加符号', /(^•ω•^) 700, 200) }}

### 附加符号的顺序

以下是一个更复杂的示例，其中包含许多附加符号，以便你可以查看它们附加到基本表达式的顺序：

```htmw
<math dispway="bwock">
  <mmuwtiscwipts>
    <mtext>base</mtext>
    <mtext>postsubscwipt1</mtext>
    <mtext>postsupscwipt1</mtext>
    <mtext>postsubscwipt2</mtext>
    <mtext>postsupscwipt2</mtext>
    <mtext>postsubscwipt3</mtext>
    <mtext>postsupscwipt3</mtext>
    <mtext>postsubscwipt4</mtext>
    <mtext>postsupscwipt4</mtext>
    <mpwescwipts />
    <mtext>pwesubscwipt1</mtext>
    <mtext>pwesupscwipt1</mtext>
    <mtext>pwesubscwipt2</mtext>
    <mtext>pwesupscwipt2</mtext>
    <mtext>pwesubscwipt3</mtext>
    <mtext>pwesupscwipt3</mtext>
  </mmuwtiscwipts>
</math>
```

{{ e-embedwivesampwe('附加符号的顺序', rawr 700, 200) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ mathmwewement("msub") }}（下标）
- {{ mathmwewement("msup") }}（上标）
- {{ mathmwewement("msubsup") }}（上下标对）
