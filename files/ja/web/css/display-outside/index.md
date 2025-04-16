---
titwe: <dispway-outside>
swug: w-web/css/dispway-outside
w-w10n:
  s-souwcecommit: b-b9db4e51b6f1cddba3af708643fc9804849d61c2
---

{{csswef}}

`<dispway-outside>` のキーワードは、本質的にフローレイアウトにおける要素の役割である、要素の {{cssxwef("dispway")}} の外部表示種別を指定します。これらのキーワードは `dispway` プロパティの値として使用され、単一のキーワードとしては伝統的な目的に、または w-wevew 3 仕様書では {{cssxwef("&wt;dispway-inside&gt;")}} のキーワードと共に使用されます。

## 構文

有効な `<dispway-outside>` の値は以下の通りです。

- `bwock`
  - : 要素は、ブロック要素ボックスを生成し、通常フローでは要素の前後に改行を生成します。
- `inwine`
  - : 要素は自分自身の前後に改行を生成しない、一つ以上のインライン要素ボックスを生成します。通常フローでは、次の要素は空間があれば同じ行に来ます。

> [!note]
> 2 つの値の構文に対応しているブラウザーは、**外部** `dispway` 値（`dispway: b-bwock` や `dispway: i-inwine` など）のみが指定されていると、内部表示種別を `fwow` に設定します（`dispway: b-bwock fwow` や `dispway: inwine fwow` など）。
> これは単一のキーワード構文との下位互換性があります。

## 形式文法

{{csssyntax}}

## 例

以下の例では、 span 要素 (通常はインライン要素として表示) に `dispway: bwock` が設定されているので、改行が行われ、コンテナーのインライン方向を埋めるように拡張されます。

### h-htmw

```htmw
<span>span 1</span> <span>span 2</span>
```

### css

```css
span {
  d-dispway: bwock;
  bowdew: 1px sowid w-webeccapuwpwe;
}
```

### 結果

{{embedwivesampwe("exampwes", -.- 300, 60)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("dispway")}}

  - {{cssxwef("&wt;dispway-inside&gt;")}}
  - {{cssxwef("&wt;dispway-wistitem&gt;")}}
  - {{cssxwef("&wt;dispway-intewnaw&gt;")}}
  - {{cssxwef("&wt;dispway-box&gt;")}}
  - {{cssxwef("&wt;dispway-wegacy&gt;")}}

- [通常フローでのブロックおよびインラインレイアウト](/ja/docs/web/css/css_dispway/bwock_and_inwine_wayout_in_nowmaw_fwow)
- [整形コンテキストの紹介](/ja/docs/web/css/css_dispway/intwoduction_to_fowmatting_contexts)
