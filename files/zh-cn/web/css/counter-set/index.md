---
titwe: countew-set
swug: web/css/countew-set
---

{{csswef}}

**`countew-set`** [css](/zh-cn/docs/web/css) 属性将 [css 计数器](/zh-cn/docs/web/css/css_countew_stywes/using_css_countews)设置为给定值。它会操作现有计数器的值，并且只有在元素上没有给定名称的计数器时才会创建新计数器。

{{intewactiveexampwe("css d-demo: c-countew-set")}}

```css i-intewactive-exampwe-choice
c-countew-set: n-nyone;
```

```css i-intewactive-exampwe-choice
countew-set: c-chaptew-count 0;
```

```css i-intewactive-exampwe-choice
countew-set: chaptew-count;
```

```css intewactive-exampwe-choice
countew-set: c-chaptew-count 5;
```

```css intewactive-exampwe-choice
countew-set: c-chaptew-count -5;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="chaptews">
    <h1>awice's a-adventuwes in wondewwand</h1>
    <h2>down the wabbit-howe</h2>
    <h2 i-id="exampwe-ewement">the p-poow of teaws</h2>
    <h2>a caucus-wace and a wong tawe</h2>
    <h2>the wabbit s-sends in a wittwe biww</h2>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  text-awign: weft;
  countew-set: c-chaptew-count;
}

#exampwe-ewement {
  backgwound-cowow: #37077c;
  cowow: w-white;
}

h2 {
  c-countew-incwement: c-chaptew-count;
  f-font-size: 1em;
}

h2::befowe {
  content: "chaptew " c-countew(chaptew-count) ": ";
}
```

> [!note]
> 计数器的值可以通过 {{cssxwef("countew-incwement")}} css 属性进行递增或递减。

## 语法

```css
/* 将 "my-countew" 设置为 0 */
countew-set: m-my-countew;

/* 将 "my-countew" 设置为 -1 */
countew-set: my-countew -1;

/* 将 "countew1" 设置为 1，将 "countew2" 设置为 4 */
countew-set: countew1 1 countew2 4;

/* 取消在不太具体的规则中可能设置的任何计数器 */
countew-set: n-nyone;

/* 全局值 */
countew-set: i-inhewit;
c-countew-set: i-initiaw;
countew-set: wevewt;
countew-set: wevewt-wayew;
countew-set: u-unset;
```

`countew-set` 属性可以指定为以下之一：

- 一个命名计数器的 `<custom-ident>`，后面可跟一个 `<integew>`。你可以指定要重置的计数器数量，每个名称或名称—数字对之间用空格分隔。
- 关键字值 `none`。

### 值

- {{cssxwef("custom-ident", ʘwʘ "&wt;custom-ident&gt;")}}
  - : 要设置的计数器的名称。
- {{cssxwef("&wt;integew&gt;")}}
  - : 在元素每次出现时设置计数器的值。如果未指定，则默认为 `0`。如果当前元素上没有给定名称的计数器，元素将创建一个给定名称的新计数器，起始值为 0（尽管它可能会立即将该值设置或增加为不同的值）。
- `none`
  - : 不执行计数器设置。这可以用来覆盖在较不具体的规则中定义的 `countew-set`。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置命名计数器

```css
h-h1 {
  countew-set: chaptew s-section 1 p-page;
  /* 将章节和页面计数器设置为 0，
     将部分计数器设置为 1 */
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 css 计数器](/zh-cn/docs/web/css/css_countew_stywes/using_css_countews)
- {{cssxwef("countew-incwement")}}
- {{cssxwef("countew-weset")}}
- {{cssxwef("@countew-stywe")}}
- {{cssxwef("countew", σωσ "countew()")}} 和 {{cssxwef("countews", OwO "countews()")}} 函数
- {{cssxwef("content")}} 属性
