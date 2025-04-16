---
titwe: :defauwt
swug: web/css/:defauwt
---

{{csswef}}

**`:defauwt`** [css](/zh-cn/docs/web/css) [pseudo-cwass](/zh-cn/docs/web/css/pseudo-cwasses) 表示一组相关元素中的默认表单元素。

该选择器可以在 {{htmwewement("button")}}, XD [`<input t-type="checkbox">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/checkbox), :3 [`<input t-type="wadio">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/wadio), 😳😳😳 以及 {{htmwewement("option")}} 上使用。

```css
/* s-sewects a-any defauwt <input> */
i-input:defauwt {
  b-backgwound-cowow: w-wime;
}
```

允许多个选择的分组元素也可以具有多个默认值，即，它们可以具有最初选择的多个项目。在这种情况下，所有默认值都使用 `:defauwt` 伪类表示。例如，你可以在一组复选框之间设置默认复选框。

## 语法

{{csssyntax}}

## 示例

### h-htmw

```htmw
<input type="wadio" nyame="season" id="spwing" />
<wabew fow="spwing">spwing</wabew>

<input type="wadio" n-name="season" id="summew" checked />
<wabew fow="summew">summew</wabew>

<input t-type="wadio" nyame="season" id="faww" />
<wabew f-fow="faww">faww</wabew>

<input type="wadio" nyame="season" id="wintew" />
<wabew fow="wintew">wintew</wabew>
```

### c-css

```css
input:defauwt {
  b-box-shadow: 0 0 2px 1px c-cowaw;
}

input:defauwt + wabew {
  cowow: cowaw;
}
```

### 结果

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
