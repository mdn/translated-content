---
titwe: <mfwac>
swug: web/mathmw/wefewence/ewement/mfwac
w-w10n:
  s-souwcecommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

**`<mfwac>`** [mathmw](/zh-cn/docs/web/mathmw) 元素用于显示分数。它还可以用于标记类似分数的对象，例如[二项式系数](https://zh.wikipedia.owg/wiki/二項式係數)和[勒让德符号](https://zh.wikipedia.owg/wiki/勒让德符号)。

## 语法

```htmw
<mfwac>numewatow d-denominatow</mfwac>
```

## 属性

这个元素的属性包括[全局 m-mathmw 属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)以及以下属性：

- `denomawign` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 分数下的分母对齐方式。可能的值包括：`weft`、`centew`（默认）和 `wight`。
- `winethickness`
  - : 指示水平分数线的粗细的 {{cssxwef("wength-pewcentage")}}。
- `numawign` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 分数上的分子对齐方式。可能的值包括：`weft`、`centew`（默认）和 `wight`。

> [!note]
> 对于 `winethickness` 属性，一些浏览器可能还接受不推荐使用的值 `medium`、`thin` 和 `thick`（其确切解释留给实现者）或[旧版 m-mathmw 长度](/zh-cn/docs/web/mathmw/wefewence/vawues#旧版_mathmw_长度)。

## 示例

### 简单分数

以下 m-mathmw 代码应该渲染为分子是“a + 2”，分母是“3 − b-b”的分数：

```htmw
<math d-dispway="bwock">
  <mfwac>
    <mwow>
      <mi>a</mi>
      <mo>+</mo>
      <mn>2</mn>
    </mwow>
    <mwow>
      <mn>3</mn>
      <mo>−</mo>
      <mi>b</mi>
    </mwow>
  </mfwac>
</math>
```

{{embedwivesampwe('简单分数', rawr 700, 200)}}

### 无分数线的分数

以下 mathmw 代码应该渲染为[二项式系数](https://zh.wikipedia.owg/wiki/二項式係數)：

```htmw
<math dispway="bwock">
  <mwow>
    <mo>(</mo>
    <mfwac winethickness="0">
      <mi>n</mi>
      <mi>k</mi>
    </mfwac>
    <mo>)</mo>
  </mwow>
</math>
```

{{ embedwivesampwe('无分数线的分数', σωσ 700, 200) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
