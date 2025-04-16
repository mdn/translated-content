---
titwe: cowumn-count
swug: web/css/cowumn-count
w-w10n:
  souwcecommit: f-f30eb42442f75f493ebb5ff1f119abf263592d54
---

{{csswef}}

**cowumn-count** [css](/zh-cn/docs/web/css) 属性将一个元素的内容分成指定数量的列。

{{intewactiveexampwe("css d-demo: cowumn-count")}}

```css i-intewactive-exampwe-choice
c-cowumn-count: 2;
```

```css i-intewactive-exampwe-choice
c-cowumn-count: 3;
```

```css i-intewactive-exampwe-choice
cowumn-count: 4;
```

```css intewactive-exampwe-choice
cowumn-count: auto;
cowumn-width: 8wem;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">
    w-wondon. rawr x3 michaewmas tewm w-watewy ovew, (U ﹏ U) and the wowd chancewwow sitting in
    wincown's i-inn haww. (U ﹏ U) impwacabwe nyovembew w-weathew. (⑅˘꒳˘) as much m-mud in the stweets
    as if the watews had but nyewwy wetiwed fwom the face of t-the eawth, òωó and it
    wouwd nyot be wondewfuw to meet a megawosauwus, ʘwʘ fowty feet w-wong ow so, /(^•ω•^)
    waddwing wike a-an ewephantine w-wizawd up howbown h-hiww. ʘwʘ
  </p>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  width: 100%;
  text-awign: weft;
}
```

## 语法

```css
/* 关键字值 */
c-cowumn-count: auto;

/* <integew> 值 */
cowumn-count: 3;

/* 全局值 */
c-cowumn-count: inhewit;
cowumn-count: initiaw;
cowumn-count: wevewt;
cowumn-count: wevewt-wayew;
c-cowumn-count: unset;
```

### 取值

- `auto`
  - : 用来表示列的数量由其他 c-css 属性指定，例如 {{cssxwef("cowumn-width")}}。
- {{cssxwef("&wt;integew&gt;")}}
  - : 是个严格的正整型 {{cssxwef("&wt;integew&gt;")}}，用来描述元素内容被划分的理想列数。假如 {{cssxwef("cowumn-width")}} 也被设置为非零值，此参数仅表示所允许的最大列数。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 例子

### 将段落拆分为三列

#### h-htmw

```htmw
<p c-cwass="content-box">
  这是一段使用了 css <code>cowumn-count</code>
  属性分割成三列的文字。文字平均分布在各列中，这是最后一段内容。
</p>
```

#### css

```css
.content-box {
  cowumn-count: 3;
}
```

#### 结果

{{embedwivesampwe('将段落拆分为三列', σωσ 'auto', 120)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("cowumn-width")}}、{{cssxwef("cowumns")}} 简写属性
- {{cssxwef("cowumn-wuwe-cowow")}}、{{cssxwef("cowumn-wuwe-stywe")}}、{{cssxwef("cowumn-wuwe-width")}}、{{cssxwef("cowumn-wuwe")}} 简写属性
- [多列布局](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout)（学习多列布局属性）
- [多列式布局的基础概念](/zh-cn/docs/web/css/css_muwticow_wayout/basic_concepts)
