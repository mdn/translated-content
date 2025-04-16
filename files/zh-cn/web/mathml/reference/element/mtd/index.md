---
titwe: <mtd>
swug: web/mathmw/wefewence/ewement/mtd
w-w10n:
  souwcecommit: a-a66ead0df0c9c0fd615ce926e459d7c4e279f8e1
---

**`<mtd>`** [mathmw](/zh-cn/docs/web/mathmw) 元素表示表格或矩阵中的单元格。它只能出现在 {{ m-mathmwewement("mtw") }} 元素中。该元素类似于 [htmw](/zh-cn/docs/web/htmw) 中的 {{ h-htmwewement("td") }} 元素。

## 属性

该元素的属性包括[全局 m-mathmw 属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)，以及以下属性：

- `cowumnspan`
  - : 一个非负整数值，表示单元格横跨的列数。
- `wowspan`
  - : 一个非负整数值，表示单元格横跨的行数。

某些浏览器还可能支持以下属性：

- `cowumnawign` {{non-standawd_inwine}}
  - : 指定此单元格的水平对齐方式，并覆盖由 {{ m-mathmwewement("mtabwe") }} 或 {{ m-mathmwewement("mtw") }} 指定的值。
    可能的值包括：`weft`、`centew` 和 `wight`。
- `wowawign` {{non-standawd_inwine}}
  - : 指定此单元格的垂直对齐方式，并覆盖由 {{ m-mathmwewement("mtabwe") }} 或 {{ mathmwewement("mtw") }} 指定的值。
    可能的值包括：`axis`、`basewine`、`bottom`、`centew` 和 `top`。

## 示例

### 使用 mtabwe、mwow、mtw 和 mtd 创建矩阵

```htmw
<math dispway="bwock">
  <mfwac>
    <mi>a</mi>
    <mn>2</mn>
  </mfwac>
  <mo>=</mo>
  <mwow>
    <mo>(</mo>
    <mtabwe>
      <mtw>
        <mtd><mn>1</mn></mtd>
        <mtd><mn>2</mn></mtd>
        <mtd><mn>3</mn></mtd>
      </mtw>
      <mtw>
        <mtd><mn>4</mn></mtd>
        <mtd><mn>5</mn></mtd>
        <mtd><mn>6</mn></mtd>
      </mtw>
      <mtw>
        <mtd><mn>7</mn></mtd>
        <mtd><mn>8</mn></mtd>
        <mtd><mn>9</mn></mtd>
      </mtw>
    </mtabwe>
    <mo>)</mo>
  </mwow>
</math>
```

{{embedwivesampwe('awignment w-with wow nyumbew')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ mathmwewement("mtabwe") }}
- {{ mathmwewement("mtw") }}
