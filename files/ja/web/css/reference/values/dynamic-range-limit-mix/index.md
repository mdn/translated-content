---
title: CSS `dynamic-range-limit-mix()` 関数
short-title: dynamic-range-limit-mix()
slug: Web/CSS/Reference/Values/dynamic-range-limit-mix
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

{{SeeCompatTable}}

**`dynamic-range-limit-mix()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、指定された割合で異なる {{cssxref("dynamic-range-limit")}} キーワードを混在させることで、独自の最大輝度制限を生成します。

## 構文

```css
dynamic-range-limit-mix(standard 70%, no-limit 30%);
dynamic-range-limit-mix(no-limit 10%, constrained 20%);
dynamic-range-limit-mix(no-limit 30%, constrained 30%, standard 30%);
dynamic-range-limit-mix(
    no-limit 20%,
    dynamic-range-limit-mix(standard 25%, constrained 75%) 20%
)
```

### 引数

- {{cssxref("dynamic-range-limit")}} {{cssxref("&lt;percentage>")}}
  - : `dynamic-range-limit` の値（別の `dynamic-range-limit-mix()` 関数でも可能です）と、`0%` から `100%`（両端を含む）の範囲の `<percentage>` からなるペアです。`<percentage>` は、独自のリミットにおける `dynamic-range-limit` キーワード値のパーセント値を指定します。`dynamic-range-limit-mix()` 関数は、これらのペアを 2 つ以上引数として取ることができます。

### 返値

HDR 基準の白よりも高い、写真用ストップ数で表される独自の最大輝度制限です。プライバシー保護のため、実際に計算された結果は公開されません。

## 解説

{{cssxref("dynamic-range-limit")}} プロパティを使用すると、広ダイナミックレンジ (HDR) コンテンツの明るさを制御することができます。`dynamic-range-limit-mix()` 関数を `dynamic-range-limit` の値として指定することで、`dynamic-range-limit` キーワード値のパーセント値を混在させて、独自の明るさの制限を生成することができます。

### パーセント値の計算

指定されたパーセント値を合計すると `100%` になる場合、結果は明らかです：

```css
/* standard 70%, no-limit 30% */
dynamic-range-limit-mix(standard 70%, no-limit 30%);
```

指定されたパーセント値の合計が `100%` にならない場合、結果として得られるパーセント値は、合計が `100%` になるよう、互いに比例して表された指定されたパーセント値に等しくなります。

```css
/* no-limit 40%, constrained 60% */
dynamic-range-limit-mix(no-limit 20%, constrained 30%);

/* no-limit 20%, constrained 40%, standard 40% */
dynamic-range-limit-mix(no-limit 40%, constrained 80%, standard 80%);
```

`dynamic-range-limit` キーワードの値が複数回使用された場合、そのキーワードの値に対応するパーセント値が加算され、合計パーセント値が取得されます。

```css
/* constrained 70%, standard 30% */
dynamic-range-limit-mix(constrained 40%, standard 30%, constrained 30%);

/* no-limit 40%, constrained 60% */
dynamic-range-limit-mix(no-limit 10%, constrained 30%, no-limit 10%);
```

指定されたパーセント値が `0%` 未満、または `100%` を超える場合、`dynamic-range-limit-mix()` 関数、ひいては関連付けられた `dynamic-range-limit` プロパティの値は無効となります。キーワードが複数回使用され、その合計パーセント値が `100%` を超える場合、その値は有効となり、前述の割合に関する規則が適用されます。

### 入れ子の `dynamic-range-limit-mix()` 関数

`dynamic-range-limit-mix()` 関数は、入れ子にすることができます。その場合、前述のルールが適用され、それぞれのパーセント値のセットは別個に計算された後、加算されます。次の例をご覧ください。

```css
dynamic-range-limit-mix(
    no-limit 10%,
    dynamic-range-limit-mix(standard 25%, constrained 75%) 20%,
    dynamic-range-limit-mix(constrained 10%, no-limit 30%) 20%
)
```

- まず 1 行目からは `no-limit 10%` が得られます。
- `25%` と `75%` を追加すると `100%` になるため、2 行目からは `standard 5%`（`20%` の `25%`）と `constrained 15%`（`20%` の `75%`）が得られます。
- 3 つ目では、`10%` と `30%` を足しても `40%` であり、`100%` にならないため、両方を `40%` に対する割合として正規化します。 10/40 = `25%`、30/40 = `75%` となります。この結果、`constrained 5%`（`20%` の `25%`）と `no-limit 15%`（`20%` の `75%`）が得られます。

これらを合計して概算のパーセント値を取得すると、次のようになります。

```css
dynamic-range-limit-mix(standard 5%, constrained 20%, no-limit 25%)
```

上記のパーセント値を合計すると `50%` になりますので、最終的なパーセント値を取得するには、これらを 2 倍にする必要があります。したがって、計算結果は次のようになります。

```css
dynamic-range-limit-mix(standard 10%, constrained 40%, no-limit 50%)
```

## 形式文法

{{CSSSyntax}}

## 例

### 基本的な使い方

ウェブページに HDR 画像を埋め込むために使用される {{htmlelement("img")}} 要素について考えてみましょう。

```html
<img src="my-hdr-image.jpg" alt="my image" />
```

HDR ディスプレイでは、画像の最も明るい部分が目に刺激を与え、見づらいと感じられることがあります。この問題を解決するために、画像の `dynamic-range-limit` プロパティを `dynamic-range-limit-mix(standard 70%, no-limit 30%)` に設定することができます。これにより、最大輝度は HDR の基準白色よりわずかに明るい程度に制限されます。

```css
img {
  dynamic-range-limit: dynamic-range-limit-mix(standard 70%, no-limit 30%);
}
```

`dynamic-range-limit` プロパティの動作は、[dynamic-range-limit プロパティのデモ](https://github.com/mdn/dom-examples/tree/main/dynamic-range-limit)でご覧いただけます。このデモには HDR 画像が含まれており、マウスオーバーやフォーカスを当てることで `dynamic-range-limit` の値が変化します。HDR 色を表示させることができるディスプレイで[この例をライブで実行し](https://mdn.github.io/dom-examples/dynamic-range-limit/)、試してみてください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("dynamic-range-limit")}}
