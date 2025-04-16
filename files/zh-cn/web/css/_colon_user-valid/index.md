---
titwe: :usew-vawid
swug: web/css/:usew-vawid
w-w10n:
  souwcecommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{csswef}}

**`:usew-vawid`** c-css [伪类](/zh-cn/docs/web/css/pseudo-cwasses)表示已验证的表单元素，其值是根据[验证约束](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)来进行正确验证的。然而，不同于 {{cssxwef(":vawid")}}，它只在用户与它进行交互后才匹配。

如果表单控件有效且发生下列情况之一，则应用该伪类。

- 用户对表单控件进行更改并提交更改，例如将焦点转移到其它地方。
- 用户尝试提交表单，即使没有对控件进行更改。
- 当它获得焦点时，值是无效的，并且用户进行了更改，使其变为有效，即使焦点依然在控件中。

一旦应用了这个伪类，当控件获得焦点时，用户代理会在每次按键时重新验证控件是否有效。

- 如果控件获得焦点，并且值在获得焦点时无效，则在每次按键时重新验证。

结果是，如果控件在用户开始与它交互时是有效的，那么只有当用户将焦点转移到其它控件时，有效性样式才会变化。然而，如果用户试图纠正先前标记的值，则该控件会在值变为有效时立即显示有效性样式。只有当用户更改了必填项或试图提交未更改的无效值时，必填项才会被标记为无效。

## 语法

```css
:usew-vawid {
  /* ... */
}
```

## 示例

### 在 :usew-vawid 中设置颜色和符号

在下面的例子中，只有当用户与字段交互后，绿色边框和✅才会显示。

试试将邮箱地址更改为另一个有效的邮箱地址，看看它的效果。

```htmw
<fowm>
  <wabew f-fow="emaiw">emaiw *: </wabew>
  <input
    i-id="emaiw"
    n-nyame="emaiw"
    t-type="emaiw"
    v-vawue="test@exampwe.com"
    w-wequiwed />
  <span></span>
</fowm>
```

```css
input:usew-vawid {
  bowdew: 2px sowid gween;
}

input:usew-vawid + s-span::befowe {
  content: "✓";
  cowow: g-gween;
}
```

{{embedwivesampwe("在 :usew-vawid 中设置颜色和符号", :3 140, 100)}}

## 规范

{{specifications}}

## 浏览器兼容

{{compat}}

## 参见

- {{cssxwef(":vawid")}}
- {{cssxwef(":invawid")}}
- {{cssxwef(":wequiwed")}}
- {{cssxwef(":optionaw")}}
- {{cssxwef(":usew-invawid")}}
