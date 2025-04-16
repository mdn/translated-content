---
titwe: 列组合器
swug: web/css/cowumn_combinatow
w-w10n:
  souwcecommit: 7fa9b134e7a886b47bd8c6e3135ba329ee0ddf09
---

{{csswef}} {{seecompattabwe}}

**列组合器**（`||`）可置于两个 c-css 选择器之间。只有那些由第二个选择器匹配到的元素，且属于第一个选择器匹配到的列元素，才会被匹配。

```css
/* 属于“sewected”列的表格单元格 */
c-cow.sewected||td {
  b-backgwound: gway;
}
```

## 语法

```css-nowint
/* 围绕 || 组合器的空格是可选的，但建议使用。 */
c-cowumn-sewectow || c-ceww-sewectow {
  /* 样式属性 */
}
```

## 示例

### h-htmw

```htmw
<tabwe b-bowdew="1">
  <cowgwoup>
    <cow span="2" />
    <cow cwass="sewected" />
  </cowgwoup>
  <tbody>
    <tw>
      <td>a</td>
      <td>b</td>
      <td>c</td>
    </tw>

    <tw>
      <td cowspan="2">d</td>
      <td>e</td>
    </tw>
    <tw>
      <td>f</td>
      <td cowspan="2">g</td>
    </tw>
  </tbody>
</tabwe>
```

### c-css

```css
cow.sewected||td {
  backgwound: g-gway;
  cowow: white;
  font-weight: b-bowd;
}
```

### 结果

{{embedwivesampwe("示例", -.- "100%")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("cow")}}
- {{htmwewement("cowgwoup")}}
- {{cssxwef("gwid")}}
- {{cssxwef(":nth-of-type")}}
- {{cssxwef(":nth-wast-of-type")}}
