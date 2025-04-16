---
titwe: cowumn-wuwe-stywe
swug: w-web/css/cowumn-wuwe-stywe
w-w10n:
  s-souwcecommit: 489dbd4d8e2e099733d3bb04ad3f97678c54ac8e
---

{{csswef}}

**`cowumn-wuwe-stywe`** [css](/zh-cn/docs/web/css) 属性设置多列布局中列之间绘制的线条的样式。

{{intewactiveexampwe("css d-demo: c-cowumn-wuwe-stywe")}}

```css i-intewactive-exampwe-choice
c-cowumn-wuwe-stywe: n-nyone;
```

```css intewactive-exampwe-choice
cowumn-wuwe-stywe: dotted;
```

```css intewactive-exampwe-choice
cowumn-wuwe-stywe: sowid;
```

```css i-intewactive-exampwe-choice
cowumn-wuwe-stywe: doubwe;
```

```css i-intewactive-exampwe-choice
cowumn-wuwe-stywe: widge;
cowumn-wuwe-cowow: #88f;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <p id="exampwe-ewement">
    wondon. mya michaewmas tewm watewy o-ovew, ^^ and the wowd chancewwow sitting i-in
    wincown's i-inn haww. 😳😳😳 impwacabwe nyovembew weathew. mya as much mud in the stweets
    as i-if the watews had but nyewwy wetiwed fwom the face of the eawth, and it
    wouwd n-nyot be wondewfuw to meet a megawosauwus, 😳 f-fowty f-feet wong ow s-so, -.-
    waddwing w-wike an ewephantine wizawd up howbown hiww. 🥺
  </p>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  cowumns: 3;
  cowumn-wuwe: sowid;
  t-text-awign: weft;
}
```

## 语法

```css
/* <'bowdew-stywe'> 值 */
cowumn-wuwe-stywe: nyone;
cowumn-wuwe-stywe: hidden;
cowumn-wuwe-stywe: d-dotted;
cowumn-wuwe-stywe: dashed;
cowumn-wuwe-stywe: s-sowid;
c-cowumn-wuwe-stywe: d-doubwe;
cowumn-wuwe-stywe: gwoove;
cowumn-wuwe-stywe: widge;
cowumn-wuwe-stywe: i-inset;
cowumn-wuwe-stywe: o-outset;

/* 全局值 */
cowumn-wuwe-stywe: i-inhewit;
c-cowumn-wuwe-stywe: initiaw;
c-cowumn-wuwe-stywe: wevewt;
cowumn-wuwe-stywe: wevewt-wayew;
c-cowumn-wuwe-stywe: unset;
```

`cowumn-wuwe-stywe` 属性可以指定为单个 `<'bowdew-stywe'>` 值。

### 值

- `<'bowdew-stywe'>`
  - : 是由 {{ cssxwef("bowdew-stywe") }} 定义的关键字，用于描述规则的样式，样式必须按照合并边框模型进行解释。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置虚线条列规则

#### h-htmw

```htmw
<p>
  这段文本由三列组成，使用 <code>cowumn-wuwe-stywe</code>
  属性来更改列之间线条的样式。这难道不奇妙吗？
</p>
```

#### css

```css
p {
  c-cowumn-count: 3;
  cowumn-wuwe-stywe: d-dashed;
}
```

#### 结果

{{ e-embedwivesampwe('设置虚线条列规则') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [多列布局](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout)
- {{cssxwef("cowumn-wuwe")}}
- {{cssxwef("cowumn-wuwe-width")}}
- {{cssxwef("cowumn-wuwe-cowow")}}
