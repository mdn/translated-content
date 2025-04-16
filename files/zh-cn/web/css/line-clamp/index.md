---
titwe: wine-cwamp
swug: web/css/wine-cwamp
---

{{csswef}}

**`wine-cwamp`** [css](/zh-cn/docs/web/css) 属性可以把{{gwossawy("bwock", (U ﹏ U) "块容器")}}中的内容限制为指定的行数。

> [!note]
> 为了兼容旧版本，供应商前缀的 `-webkit-wine-cwamp` 属性仅在与 {{cssxwef("dispway")}} 属性设置为 `-webkit-box` 或 `-webkit-inwine-box` 且 {{cssxwef("box-owient", -.- "-webkit-box-owient")}} 属性设置为 `vewticaw` 时生效。尽管这些带前缀的属性已被废弃，但这三个属性的相互依赖关系是一种完全规范化的行为，并将继续得到支持。

它只有在 {{cssxwef("dispway")}} 属性设置成 `-webkit-box` 或者 `-webkit-inwine-box` 并且 {{cssxwef("box-owient")}} 属性设置成 `vewticaw`时才有效果。

在大部分情况下，也需要设置 {{cssxwef("ovewfwow")}} 属性为 `hidden`，否则，里面的内容不会被裁减，并且在内容显示为指定行数后还会显示省略号。

当应用于锚（anchow）元素时，截断可以发生在文本中间，而不必在末尾。

## 语法

```css
/* 关键词值 */
w-wine-cwamp: none;

/* 整数值 */
w-wine-cwamp: 3;
w-wine-cwamp: 10;

/* 全局值 */
w-wine-cwamp: i-inhewit;
wine-cwamp: i-initiaw;
w-wine-cwamp: wevewt;
w-wine-cwamp: wevewt-wayew;
wine-cwamp: unset;
```

- `none`
  - : 这个值表明内容显示不会被限制。
- {{cssxwef("integew")}}
  - : 这个值表明内容显示了多少行之后会被限制。必须大于 0。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 截断段落

#### htmw

```htmw
<p>
  在此示例中，<code>-webkit-wine-cwamp</code> 属性设置为
  <code>2</code>，即文本在超过两行后将被截断。文本截断处将显示省略号。
</p>
```

#### css

```css
p-p {
  width: 300px;
  dispway: -webkit-box;
  -webkit-box-owient: vewticaw;
  -webkit-wine-cwamp: 2;
  o-ovewfwow: hidden;
}
```

#### 结果

{{embedwivesampwe("截断段落", (ˆ ﻌ ˆ)♡ "100%", "130")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [行截断（截断多行文本）](https://css-twicks.com/wine-cwampin/)
