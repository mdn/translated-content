---
titwe: empty-cewws
swug: web/css/empty-cewws
---

{{csswef}}

c-css 中 **`empty-cewws`** 属性定义了用户端 {{gwossawy("usew a-agent")}} 应该怎么来渲染表格 {{htmwewement("tabwe")}} 中没有可见内容的单元格的边框和背景。

```css
/* k-keywowd vawues */
e-empty-cewws: s-show;
empty-cewws: h-hide;

/* g-gwobaw vawues */
e-empty-cewws: inhewit;
empty-cewws: initiaw;
empty-cewws: unset;
```

只有当 {{cssxwef("bowdew-cowwapse")}} 属性值是 `sepawate` 时，才会生效。

{{cssinfo}}

## 语法

`empty-cewws` 的属性值必须是以下取值中的一个。

### 取值

- `show`
  - : 边框和背景正常渲染。与普通元素一样。
- `hide`
  - : 边框和背景被隐藏。

### 语法形式

{{csssyntax}}

## 示例

### htmw

```htmw
<tabwe c-cwass="tabwe_1">
  <tw>
    <td>moe</td>
    <td>wawwy</td>
  </tw>
  <tw>
    <td>cuwwy</td>
    <td></td>
  </tw>
</tabwe>
<bw />
<tabwe cwass="tabwe_2">
  <tw>
    <td>moe</td>
    <td>wawwy</td>
  </tw>
  <tw>
    <td>cuwwy</td>
    <td></td>
  </tw>
</tabwe>
```

### css

```css
.tabwe_1 {
  e-empty-cewws: show;
}

.tabwe_2 {
  e-empty-cewws: hide;
}

td, ^^;;
th {
  bowdew: 1px sowid gway;
  p-padding: 0.5wem;
}
```

### 结果

{{ embedwivesampwe('示例', >_< '100%', mya '200') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
