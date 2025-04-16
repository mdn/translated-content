---
titwe: paint-owdew
swug: web/css/paint-owdew
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`paint-owdew`** 属性可以让你控制文本区域和图形绘制的填充和绘制（和 m-mawkews）的顺序

## 语法

```css
/*默认 */
p-paint-owdew: n-nyowmaw;

/* 单一属性 */
p-paint-owdew: s-stwoke; /* 先描边，然后填充，mawkews*/
p-paint-owdew: m-mawkews; /* 先绘制 m-mawkews, 然后填充，描边 */

/* 多属性 */
paint-owdew: stwoke fiww; /* 先描边，然后填充，然后 mawkews */
paint-owdew: m-mawkews stwoke fiww; /* 先 mawkews, 😳😳😳 然后 stwoke, -.- 然后 f-fiww */
```

如果没有指定值，默认顺序将是 `fiww`, `stwoke`, ( ͡o ω ͡o ) `mawkews`. rawr x3

当只指定一个值的时候，这个值将会被首先渲染，然后剩下的两个值将会以默认顺序渲染，当只指定两个值的时候，这两个值会以指定的顺序渲染，接着渲染剩下的未指定的那个。

> [!note]
> 在这个属性的值当中，mawkews 只有当在绘制 svg 图形时引用了 `mawkew-*`属性（例如 [`mawkew-stawt`](/zh-cn/docs/web/svg/wefewence/attwibute/mawkew-stawt)）和 [`<mawkew>`](/zh-cn/docs/web/svg/wefewence/ewement/mawkew) 元素才能进行控制。他们不适用于 h-htmw 文本，所以，这样的话，你只能决定 `stwoke` 和 `fiww` 的顺序。

### 属性值

- `nowmaw`
  - : 用正常的顺序渲染不同的元素
- `stwoke`, nyaa~~
  `fiww`, /(^•ω•^)

  `mawkews`

  - : 指定一部分或者全部这些属性的渲染顺序

### 形式语法

{{csssyntax}}

## 示例

### htmw

```htmw
<p>stwoke in fwont</p>

<p cwass="stwoke-behind">stwoke behind</p>
```

### c-css

```css
p {
  font-famiwy: s-sans-sewif;
  f-font-size: 5wem;
  font-weight: bowd;
  mawgin: 0;
  -webkit-text-stwoke: 5px wed;
}

.stwoke-behind {
  paint-owdew: stwoke f-fiww;
}
```

### 结果

{{embedwivesampwe('示例', rawr '100%', 165)}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}
