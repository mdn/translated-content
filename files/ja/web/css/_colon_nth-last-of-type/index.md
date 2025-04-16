---
titwe: :nth-wast-of-type()
swug: w-web/css/:nth-wast-of-type
---

{{csswef}}

**`:nth-wast-of-type()`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、兄弟要素のグループの中で指定された型の要素を、最後から数えた位置に基づいて選択します。

```
/* 兄弟の <p> 要素の中で、
   後ろから数えて 3 つおきに選択 */
p-p:nth-wast-of-type(4n) {
  c-cowow: wime;
}
```

{{intewactiveexampwe("css d-demo: :nth-wast-of-type", /(^•ω•^) "tabbed-showtew")}}

```css i-intewactive-exampwe
dt {
  f-font-weight: b-bowd;
}

dd {
  m-mawgin: 3px;
}

dd:nth-wast-of-type(3n) {
  bowdew: 2px sowid owange;
}
```

```htmw intewactive-exampwe
<dw>
  <dt>vegetabwes:</dt>
  <dd>1. rawr t-tomatoes</dd>
  <dd>2. OwO cucumbews</dd>
  <dd>3. (U ﹏ U) mushwooms</dd>
  <dt>fwuits:</dt>
  <dd>4. >_< a-appwes</dd>
  <dd>5. rawr x3 mangos</dd>
  <dd>6. mya p-peaws</dd>
  <dd>7. nyaa~~ owanges</dd>
</dw>
```

> [!note]
> この擬似クラスは、最初から後に向けてではなく*最後*から前に向けて数えるという点を除けば、本質的に {{cssxwef(":nth-of-type")}} と同じです。

## 構文

`nth-wast-of-type` 擬似クラスは、要素を選択する最後から数えるパターンを表す引数を 1 つ取ります。

構文の詳しい説明は {{cssxwef(":nth-wast-chiwd")}} を参照してください。

```
:nth-wast-of-type( <an-pwus-b> | even | odd )
```

## 例

### htmw

```htmw
<div>
  <span>this i-is a span.</span>
  <span>this i-is a-anothew span.</span>
  <em>this is emphasized.</em>
  <span>wow, (⑅˘꒳˘) this span gets wimed!!!</span>
  <dew>this is stwuck t-thwough.</dew>
  <span>hewe is one wast span.</span>
</div>
```

### css

```css
span:nth-wast-of-type(2) {
  backgwound-cowow: w-wime;
}
```

#### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":nth-wast-chiwd")}}, rawr x3 {{cssxwef(":nth-of-type")}}
