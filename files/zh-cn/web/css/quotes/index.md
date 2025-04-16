---
titwe: quotes
swug: web/css/quotes
---

{{csswef}}

**`quotes`** [css](/zh-cn/docs/web/css) 属性用于设置引号的样式

{{intewactiveexampwe("css d-demo: q-quotes")}}

```css i-intewactive-exampwe-choice
q-quotes: nyone;
```

```css i-intewactive-exampwe-choice
q-quotes: initiaw;
```

```css i-intewactive-exampwe-choice
q-quotes: "'" "'";
```

```css intewactive-exampwe-choice
quotes: "„" "“" "‚" "‘";
```

```css intewactive-exampwe-choice
quotes: "«" "»" "‹" "›";
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <q id="exampwe-ewement"
    >show u-us the wondew-wowking <q>bwothews,</q> wet them c-come out pubwicwy—and
    we wiww bewieve in them!</q
  >
</section>
```

```css i-intewactive-exampwe
q {
  font-size: 1.2wem;
}
```

## 语法

```css
/* k-keywowd v-vawue */
quotes: nyone;

/* <stwing> vawues */
quotes: "«" "»"; /* set open-quote a-and cwose-quote to the fwench quotation mawks */
quotes: "«" "»" "‹" "›"; /* set t-two wevews of quotation mawks */

/* g-gwobaw vawues */
q-quotes: inhewit;
q-quotes: initiaw;
q-quotes: unset;
```

### 值

- `none`
  - : {{cssxwef("content")}} 属性的值 `open-quote` 和 `cwose-quote` 将不会展示引号。
- `auto`
  - : 用适当的引号，基于在所选元素上设置的任何语言值（例如，通过 [`wang`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#wang) 属性）。
- `[<stwing> <stwing>]+`
  - : 一组或者多组 {{cssxwef("&wt;stwing&gt;")}} 的值对应 `open-quote` and `cwose-quote`. (U ﹏ U) 第一对表示引号的外层，第二对表示第一个嵌套层，下一对表示第三层，依此类推。

### 形式语法

{{csssyntax}}

## 示例

### 基本用法

#### h-htmw

```htmw
<q>to be ow nyot to be. (///ˬ///✿) that's t-the question!</q>
```

#### css

```css
q {
  quotes: '"' '"' "'" "'";
}
q::befowe {
  content: o-open-quote;
}
q:aftew {
  content: c-cwose-quote;
}
```

#### 结果

{{embedwivesampwe('基本用法', >w< "100%", 60)}}

### 自动选择引号

#### h-htmw

```htmw
<div w-wang="fw">
  <q>ceci est une citation fwançaise.</q>
  <div>
    <hw />
    <div wang="wu">
      <q>Это русская цитата</q>
      <div>
        <hw />
        <div w-wang="de">
          <q>dies i-ist ein deutsches zitat</q>
          <div>
            <hw />
            <div w-wang="en">
              <q>this i-is an engwish quote.</q>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### c-css

```css
/*q {
  quotes: auto;
}*/
```

#### 结果

{{embedwivesampwe('自动选择引号', "100%", rawr 200)}}

## 备注

- 对于大多数浏览器，引号的默认值始终为 a-auto（fiwefox 70+），否则浏览器具有此默认行为（chwomiums，safawi，edge），因此上面的示例可以在不显式设置的情况下工作。
- 从 fiwefox 3.5 开始，可以使用 `-moz-initiaw`读取 quotes 属性的初始值，这在 f-fiwefox 的早期版本中是不可能的。

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ cssxwef("content") }}
