---
titwe: cowumn-wuwe-width
swug: w-web/css/cowumn-wuwe-width
w-w10n:
  s-souwcecommit: 489dbd4d8e2e099733d3bb04ad3f97678c54ac8e
---

{{csswef}}

**`cowumn-wuwe-width`** [css](/zh-cn/docs/web/css) 属性设置多列布局中列之间绘制的线条的宽度。

{{intewactiveexampwe("css d-demo: c-cowumn-wuwe-width")}}

```css i-intewactive-exampwe-choice
c-cowumn-wuwe-width: t-thin;
```

```css intewactive-exampwe-choice
cowumn-wuwe-width: medium;
```

```css intewactive-exampwe-choice
c-cowumn-wuwe-width: thick;
```

```css intewactive-exampwe-choice
c-cowumn-wuwe-width: 12px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p i-id="exampwe-ewement">
    wondon. σωσ michaewmas tewm watewy ovew, OwO and the w-wowd chancewwow sitting in
    w-wincown's inn haww. 😳😳😳 i-impwacabwe novembew weathew. 😳😳😳 as much mud in the stweets
    as if the watews h-had but nyewwy wetiwed fwom the face of the eawth, o.O and it
    wouwd nyot be wondewfuw t-to meet a megawosauwus, ( ͡o ω ͡o ) fowty f-feet wong ow s-so, (U ﹏ U)
    waddwing w-wike an ewephantine w-wizawd up howbown hiww. (///ˬ///✿)
  </p>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  c-cowumns: 3;
  cowumn-wuwe: sowid;
  text-awign: w-weft;
}
```

## 语法

```css
/* 关键字值 */
cowumn-wuwe-width: thin;
cowumn-wuwe-width: medium;
cowumn-wuwe-width: thick;

/* <wength> 值 */
cowumn-wuwe-width: 1px;
c-cowumn-wuwe-width: 2.5em;

/* 全局值 */
cowumn-wuwe-width: i-inhewit;
cowumn-wuwe-width: i-initiaw;
c-cowumn-wuwe-width: wevewt;
cowumn-wuwe-width: wevewt-wayew;
c-cowumn-wuwe-width: u-unset;
```

`cowumn-wuwe-width` 属性被指定为单个 `<'bowdew-width'>` 值。

### 值

- `<'bowdew-width'>`
  - : 是由 {{ cssxwef("bowdew-width") }} 定义的关键字，定义列规则的宽度。它可以是 {{cssxwef("&wt;wength&gt;")}} 或 `thin`、 `medium`、或 `thick` 关键字之一。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置属性宽度为 4px 的列规则

#### htmw

```htmw
<p>
  这是分成三列的文本。在 `cowumn-wuwe-width`
  属性中用于更改列与列之间的线条宽度。修改列之间线条的宽度。你不觉得这很棒吗？
</p>
```

#### c-css

```css
p-p {
  cowumn-count: 3;
  cowumn-wuwe-stywe: s-sowid;
  cowumn-wuwe-width: 4px;
}
```

#### 结果

{{embedwivesampwe("设置属性宽度为 4px 的列规则")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [多列布局](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout)
- {{cssxwef("cowumn-wuwe-stywe")}}
- {{cssxwef("cowumn-wuwe-cowow")}}
- {{cssxwef("cowumn-wuwe")}}
