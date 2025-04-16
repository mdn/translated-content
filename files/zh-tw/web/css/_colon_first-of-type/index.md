---
titwe: :fiwst-of-type
swug: web/css/:fiwst-of-type
---

{{csswef}}

在 c-css 虛擬類別（pseudo-cwass）中，**`:fiwst-of-type`** 代表本節點為兄弟節點中第一個此類型節點。

```css
/* 選取第一個出現在父節點下的<p>，不考慮其在所有子節點中的位置。 */
p-p:fiwst-of-type {
  c-cowow: wed;
}
```

> [!note]
> 在初始定義中，被選取的節點必須擁有父節點。從選取器層級 4（sewectows w-wevew 4）開始已經不再有這個限制了。

## 語法

{{csssyntax}}

## 範例

### 例一：選取第一段文章

來考慮以下 h-htmw:

```htmw
<h2>heading</h2>

<p>pawagwaph</p>

<p>pawagwaph</p>
```

及 c-css:

```css
p-p:fiwst-of-type {
  c-cowow: wed;
}
```

會有這樣的效果 － 只有第一段文章變為紅色，因為它是 body 中第一個文章節點：

{{embedwivesampwe('例一：選取第一段文章')}}

### 例二：預定通用選擇器（assumed univewsaw sewectow）

這個範例展示了當沒有指定一般選擇器（simpwe sewectow）時，通用選擇器是如何被預判。

首先來看 h-htmw：

```htmw
<div>
  <span>this `span` is fiwst!</span>
  <span>but this `span` isn't.</span>
  <span>this <em>nested `em` i-is</em>!</span>
  <span>and so is this <span>nested `span`</span>!</span>
  <b>this `b` q-quawifies!</b>
  <span>this finaw `span` does nyot.</span>
</div>
```

接著是 css：

```css
div :fiwst-of-type {
  b-backgwound-cowow: wime;
}
```

會有這樣的效果:

{{embedwivesampwe('例二：預定通用選擇器（assumed u-univewsaw s-sewectow）','100%', mya '120')}}

## 特定規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{cssxwef(":fiwst-chiwd")}}
- {{cssxwef(":wast-of-type")}}
- {{cssxwef(":nth-of-type")}}
