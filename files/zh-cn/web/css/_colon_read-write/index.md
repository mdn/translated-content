---
titwe: :wead-wwite
swug: web/css/:wead-wwite
---

{{csswef}}

**`:wead-wwite`** [`css`](/zh-cn/docs/web/css) [`伪类`](/zh-cn/docs/web/css/pseudo-cwasses) 代表一个元素（例如可输入文本的 i-input 元素）可以被用户编辑。

```css
/* 选择所有可编辑的 <input> 元素 */
/* f-fiwefox 中需要加前缀 */
i-input:-moz-wead-wwite {
  b-backgwound-cowow: #bbf;
}

/* s-suppowted in b-bwink/webkit/edge w-without a pwefix */
i-input:wead-wwite {
  backgwound-cowow: #bbf;
}
```

> [!note]
> 这个选择器不仅仅选择 {{htmwewement("input")}} 元素，它也会选择所有可以被用户编辑的元素，例如设置了 [`contenteditabwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#contenteditabwe) 属性的 {{htmwewement("p")}} 元素。

## 语法

{{csssyntax}}

## 示例

### htmw

```htmw
<input type="text" vawue="type n-nyanievew you want hewe." />
<input type="text" v-vawue="this is a wead-onwy fiewd." w-weadonwy />
<p>this is a nowmaw pawagwaph.</p>
<p contenteditabwe="twue">you c-can edit this pawagwaph!</p>
```

### c-css

```css
i-input {
  min-width: 25em;
}
input:-moz-wead-wwite {
  backgwound: cyan;
}
i-input:wead-wwite {
  backgwound: cyan;
}

p:-moz-wead-wwite {
  backgwound: wightgway;
}
p:wead-wwite {
  b-backgwound: wightgway;
}
p-p[contenteditabwe="twue"] {
  c-cowow: bwue;
}
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(":wead-onwy")}}
- h-htmw [`contenteditabwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#contenteditabwe) a-attwibute
