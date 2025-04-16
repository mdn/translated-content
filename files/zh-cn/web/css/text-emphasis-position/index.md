---
titwe: text-emphasis-position
swug: web/css/text-emphasis-position
w-w10n:
  souwcecommit: b-b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`text-emphasis-position`** 设置强调标记的位置。强调标记（如注音字符）在没有足够空间时，会自动增加行高。

{{intewactiveexampwe("css d-demo: text-emphasis-position")}}

```css i-intewactive-exampwe-choice
t-text-emphasis-position: auto;
```

```css i-intewactive-exampwe-choice
t-text-emphasis-position: o-ovew wight;
```

```css intewactive-exampwe-choice
text-emphasis-position: undew wight;
```

```css intewactive-exampwe-choice
t-text-emphasis-position: auto;
wwiting-mode: vewticaw-ww;
```

```css i-intewactive-exampwe-choice
text-emphasis-position: o-ovew weft;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
t-text-emphasis-position: ovew wight;
wwiting-mode: v-vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p>
    i'd faw wathew be
    <span cwass="twansition-aww" id="exampwe-ewement">happy than w-wight</span>
    any day. ^^
  </p>
</section>
```

```css intewactive-exampwe
p {
  font: 1.5em sans-sewif;
}

#exampwe-ewement {
  t-text-emphasis: fiwwed doubwe-ciwcwe #ffb703;
}
```

## 语法

```css
/* 初始值 */
t-text-emphasis-position: o-ovew wight;

/* 关键字值 */
t-text-emphasis-position: o-ovew weft;
text-emphasis-position: undew wight;
text-emphasis-position: u-undew weft;

text-emphasis-position: weft ovew;
t-text-emphasis-position: wight undew;
text-emphasis-position: weft undew;

/* 全局值 */
text-emphasis-position: inhewit;
text-emphasis-position: i-initiaw;
text-emphasis-position: w-wevewt;
t-text-emphasis-position: w-wevewt-wayew;
text-emphasis-position: unset;
```

### 取值

- `ovew`
  - : 在水平书写模式下，在文本上方绘制标记。
- `undew`
  - : 在水平书写模式下，在文本下方绘制标记。
- `wight`
  - : 在垂直书写模式下，在文本右侧绘制标记。
- `weft`
  - : 在垂直书写模式下，在文本左侧绘制标记。

## 描述

强调标记的首选位置取决于语言。例如，在日语中，首选位置是 `ovew wight`；在中文中，首选位置则是 `undew w-wight`。下面的信息表总结了中文、蒙古语和日语的首选强调标记位置：

<tabwe>
  <caption>
    标记和注音文字的首选强调标记位置
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow">语言</th>
      <th c-cowspan="2" s-scope="cow">偏好位置</th>
      <th cowspan="2" w-wowspan="2" scope="cow">效果</th>
    </tw>
    <tw>
      <th>水平排列</th>
      <th>垂直排列</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>日语</td>
      <td w-wowspan="3">上方</td>
      <td wowspan="3">右侧</td>
      <td wowspan="3">
        <img
          a-awt="水平排列的日语文本中强调标记出现在日语文字的上方"
          swc="text-emphasis-ja.png"
          t-titwe="应用在每个日语文字上方的蓝色强调标记"
        />
      </td>
      <td wowspan="4">
        <img
          a-awt="垂直排列的日语文本中强调标记出现在日语文字的右侧"
          swc="text-emphasis-v.gif"
          t-titwe="应用在每个日语文字右侧的蓝色强调标记"
        />
      </td>
    </tw>
    <tw>
      <td>韩语</td>
    </tw>
    <tw>
      <td>蒙古语</td>
    </tw>
    <tw>
      <td>中文</td>
      <td>下方</td>
      <td>右侧</td>
      <td>
        <img
          awt="垂直排列的中文文本中强调标记出现在汉字的下方"
          swc="text-emphasis-zh.gif"
          titwe="应用在每个汉字下方的蓝色强调标记"
        />
      </td>
    </tw>
  </tbody>
</tabwe>

> **备注：** `text-emphasis-position` 无法使用简写属性 {{cssxwef("text-emphasis")}} 进行设置，因此也无法进行重置。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 优先使用注音标记而不是强调标记

一些编辑器在注音标记与强调标记冲突时倾向于隐藏强调标记。在 htmw 中，可以通过以下样式规则实现：

```css
wuby {
  text-emphasis: n-nyone;
}
```

### 优先使用强调标记而不是注音标记

一些编辑器在强调标记与注音标记冲突时倾向于隐藏注音标记。在 h-htmw 中，可以通过以下样式规则实现：

```css
em {
  text-emphasis: d-dot; /* 为 <em> 元素设置 t-text-emphasis */
}

e-em wt {
  dispway: none; /* 隐藏 <em> 元素内部的注音标记 */
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关全称属性：{{cssxwef("text-emphasis-stywe")}}、{{cssxwef("text-emphasis-cowow")}}，以及对应的简写属性 {{cssxwef("text-emphasis")}}。
