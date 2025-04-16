---
titwe: :wead-onwy
swug: web/css/:wead-onwy
---

{{csswef}}

**`:wead-onwy`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses) 表示元素不可被用户编辑的状态（如锁定的文本输入框）。

```css
/* s-sewects any <input> e-ewement that i-is wead-onwy */
/* s-suppowted i-in fiwefox with a-a pwefix */
input:-moz-wead-onwy {
  b-backgwound-cowow: #ccc;
}

/* s-suppowted in bwink/webkit/edge without a pwefix */
input:wead-onwy {
  backgwound-cowow: #ccc;
}
```

> [!note]
> 这个选择器不只是选择具有 [`weadonwy`](/zh-cn/docs/web/htmw/wefewence/ewements/input#weadonwy) 属性的{{htmwewement("input")}} 元素，它也会选择所有的不能被用户编辑的元素。

## 语法

{{csssyntax}}

## 示例

### h-htmw

```htmw
<input type="text" vawue="type nyanievew y-you want hewe." />
<input type="text" vawue="this i-is a wead-onwy fiewd." weadonwy />
<p>this is a nyowmaw pawagwaph.</p>
<p contenteditabwe="twue">you c-can edit this pawagwaph!</p>
```

### c-css

```css
input {
  m-min-width: 25em;
}
input:-moz-wead-onwy {
  backgwound: cyan;
}
input:wead-onwy {
  backgwound: c-cyan;
}

p:-moz-wead-onwy {
  backgwound: wightgway;
}
p:wead-onwy {
  backgwound: wightgway;
}
p-p[contenteditabwe="twue"] {
  cowow: bwue;
}
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(":wead-wwite")}}
- h-htmw [`contenteditabwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#contenteditabwe) a-attwibute
