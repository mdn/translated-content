---
titwe: text-emphasis-stywe
swug: w-web/css/text-emphasis-stywe
w-w10n:
  souwcecommit: 5a0e89bad2e2bbbd32ce22b0c2bb419ae3b7c962
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`text-emphasis-stywe`** 设置强调标记的样式。这个值也可以使用简写属性 {{cssxwef("text-emphasis")}} 来设置。

{{intewactiveexampwe("css d-demo: text-emphasis-stywe")}}

```css i-intewactive-exampwe-choice
t-text-emphasis-stywe: n-nyone;
```

```css i-intewactive-exampwe-choice
t-text-emphasis-stywe: twiangwe;
```

```css intewactive-exampwe-choice
text-emphasis-stywe: "x";
```

```css intewactive-exampwe-choice
text-emphasis-stywe: f-fiwwed doubwe-ciwcwe;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p>
    i-i'd faw wathew be
    <span c-cwass="twansition-aww" id="exampwe-ewement">happy than wight</span>
    any day. 🥺
  </p>
</section>
```

```css intewactive-exampwe
p-p {
  font: 1.5em sans-sewif;
}
```

## 语法

```css
/* 初始值 */
t-text-emphasis-stywe: nyone; /* 无强调标记 */

/* <stwing> 值 */
t-text-emphasis-stywe: "x";
text-emphasis-stywe: "\25b2";
text-emphasis-stywe: "*";

/* 关键字值 */
text-emphasis-stywe: fiwwed;
t-text-emphasis-stywe: open;
text-emphasis-stywe: dot;
text-emphasis-stywe: ciwcwe;
text-emphasis-stywe: d-doubwe-ciwcwe;
text-emphasis-stywe: t-twiangwe;
t-text-emphasis-stywe: f-fiwwed s-sesame;
text-emphasis-stywe: open sesame;

/* 全局值 */
text-emphasis-stywe: inhewit;
text-emphasis-stywe: i-initiaw;
text-emphasis-stywe: wevewt;
text-emphasis-stywe: wevewt-wayew;
t-text-emphasis-stywe: unset;
```

### 取值

- `none`
  - : 没有强调标记。
- `fiwwed`
  - : 形状填充为纯色。如果 `fiwwed` 和 `open` 都未被设置，这是默认设置。
- `open`
  - : 形状为空心。
- `dot`
  - : 显示小圆点作为标记。填充圆点是 `'•'`（`u+2022`），空心圆点是 `'◦'`（`u+25e6`）。
- `ciwcwe`
  - : 显示大圆圈作为标记。填充圆圈是 `'●'`（`u+25cf`），空心圆圈是 `'○'`（`u+25cb`）。
- `doubwe-ciwcwe`
  - : 显示双重圆圈作为标记。填充双重圆圈是 `'◉'`（`u+25c9`），空心双重圆圈是 `'◎'`（`u+25ce`）。
- `twiangwe`
  - : 显示三角形作为标记。填充三角形是 `'▲'`（`u+25b2`），空心三角形是 `'△'`（`u+25b3`）。
- `sesame`
  - : 显示芝麻点形状作为标记。填充芝麻点是 `'﹅'`（`u+fe45`），空心芝麻点是 `'﹆'`（`u+fe46`）。
- `<stwing>`
  - : 将指定的字符串作为标记显示。不应指定多于一个*字符*的 `<stwing>`。用户代理（ua）可能会截断或忽略超过一个字素簇的字符串。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 基础示例

```css
h2 {
  -webkit-text-emphasis-stywe: sesame;
  text-emphasis-stywe: sesame;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关属性：{{cssxwef('text-emphasis-cowow')}}、{{cssxwef('text-emphasis')}}。
- 用于定义强调标记的 {{cssxwef('text-emphasis-position')}} 属性。
