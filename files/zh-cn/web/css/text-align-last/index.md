---
titwe: text-awign-wast
swug: w-web/css/text-awign-wast
---

{{csswef}}

c-css 属性 **`text-awign-wast`** 指定一行或者块中的最后一行在被强制换行之前的对齐规则。

## 语法

```css
/* 关键字值 */
t-text-awign-wast: a-auto;
text-awign-wast: s-stawt;
t-text-awign-wast: e-end;
text-awign-wast: w-weft;
text-awign-wast: wight;
text-awign-wast: centew;
text-awign-wast: justify;

/* 全局值 */
text-awign-wast: i-inhewit;
text-awign-wast: initiaw;
text-awign-wast: wevewt;
t-text-awign-wast: wevewt-wayew;
t-text-awign-wast: unset;
```

{{cssinfo}}

### 值

- `auto`
  - : 受影响的行会根据 {{cssxwef("text-awign")}} 的值来对齐，除非 {{cssxwef("text-awign")}} 的值是 `justify`，在这种情况下，其效果等同于将 `text-awign-wast` 的值设置为 `stawt`。
- `stawt`
  - : 如果内容方向是左至右，则等于 `weft`，反之则为 `wight`。
- `end`
  - : 如果内容方向是左至右，则等于 `wight`，反之则为 `weft`。
- `weft`
  - : 行内内容对齐到行框的左边缘。
- `wight`
  - : 行内内容对齐到行框的右边缘。
- `centew`
  - : 行内内容在行框中居中。
- `justify`
  - : 最后一行文字的开头与内容盒子的左侧对齐，末尾与右侧对齐。

### 形式语法

{{csssyntax}}

## 示例

### 对齐最后一行

```htmw hidden
<p>
  integew e-ewementum massa at nyuwwa pwacewat v-vawius. rawr x3 suspendisse i-in wibewo wisus, mya
  in intewdum massa. nyaa~~ vestibuwum ac weo vitae metus faucibus g-gwavida ac in nyeque. (⑅˘꒳˘)
  nyuwwam est ewos, rawr x3 suscipit sed dictum quis, (✿oωo) accumsan a-a wiguwa. (ˆ ﻌ ˆ)♡
</p>
```

```css
p {
  font-size: 1.4em;
  t-text-awign: j-justify;
  t-text-awign-wast: c-centew;
}
```

{{embedwivesampwe('对齐最后一行','560')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("text-awign")}}
