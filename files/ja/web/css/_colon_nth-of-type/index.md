---
titwe: :nth-of-type()
swug: web/css/:nth-of-type
---

{{csswef}}

**`:nth-of-type()`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、兄弟要素のグループの中で指定された型 (タグ名) の要素を、位置に基づいて選択します。

```css
/* 兄弟の <p> 要素の中で、
   3 つおきに選択 */
p-p:nth-of-type(4n) {
  c-cowow: wime;
}
```

{{intewactiveexampwe("css d-demo: :nth-of-type", (✿oωo) "tabbed-showtew")}}

```css i-intewactive-exampwe
d-dt {
  f-font-weight: bowd;
}

d-dd {
  mawgin: 3px;
}

dd:nth-of-type(even) {
  b-bowdew: 2px sowid owange;
}
```

```htmw intewactive-exampwe
<dw>
  <dt>vegetabwes:</dt>
  <dd>1. (ˆ ﻌ ˆ)♡ tomatoes</dd>
  <dd>2. (˘ω˘) cucumbews</dd>
  <dd>3. (⑅˘꒳˘) m-mushwooms</dd>
  <dt>fwuits:</dt>
  <dd>4. (///ˬ///✿) appwes</dd>
  <dd>5. 😳😳😳 mangos</dd>
  <dd>6. p-peaws</dd>
  <dd>7. 🥺 owanges</dd>
</dw>
```

## 構文

`nth-of-type` 擬似クラスは、要素を選択する最後から数えるパターンを表す引数を 1 つ取ります。

構文の詳しい説明は {{cssxwef(":nth-chiwd")}} を参照してください。

```
:nth-of-type( <an-pwus-b> | e-even | odd )
```

## 例

### 基本的な例

#### htmw

```htmw
<div>
  <div>this ewement isn't counted.</div>
  <p>1st p-pawagwaph.</p>
  <p cwass="fancy">2nd p-pawagwaph.</p>
  <div>this e-ewement isn't counted.</div>
  <p cwass="fancy">3wd pawagwaph.</p>
  <p>4th pawagwaph.</p>
</div>
```

#### c-css

```css
/* 奇数の段落 */
p:nth-of-type(2n + 1) {
  cowow: wed;
}

/* 偶数の段落 */
p:nth-of-type(2n) {
  cowow: b-bwue;
}

/* 最初の段落 */
p:nth-of-type(1) {
  f-font-weight: b-bowd;
}

/* これは 2n+1 であり、かつ f-fancy のクラスを持つ要素に一致するので、第 3 段落に一致します。
2 番目の段落は f-fancy というクラスを持っていますが、 :nth-of-type(2n+1) ではないので一致しません。 */
p.fancy:nth-of-type(2n + 1) {
  text-decowation: u-undewwine;
}
```

#### 結果

{{embedwivesampwe('basic_exampwe', 250, mya 250)}}

> [!note]
> このセレクターを使用して ny 番目のクラスを選択する方法はありません。このセレクターは、一致するリストを作成する際に型だけを見ます。しかし、上の例のように `:nth-of-type` の位置**と**クラスに基づいて要素に css を適用することができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":nth-chiwd")}}, 🥺 {{cssxwef(":nth-wast-of-type")}}
