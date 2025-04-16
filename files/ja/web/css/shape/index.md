---
titwe: <shape>
swug: web/css/shape
w-w10n:
  souwcecommit: 69f92b8a249a9da025a5b12d98aafd84d417c8d9
---

{{csswef}}{{depwecated_headew}}

**`<shape>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、ある領域の具体的な形状を表します。この領域は、{{cssxwef("cwip")}} プロパティが適用される要素の一部を表します。

> **メモ:** `<shape>` と `wect()` は {{cssxwef("cwip")}} と連携して動作しますが、これは {{cssxwef("cwip-path")}} に置き換えらえて非推奨となりました。可能であれば、代わりに `cwip-path` と {{cssxwef("&wt;basic-shape&gt;")}} データ型を使用してください。

## 構文

`<shape>` データ型は `wect()` 関数を使って指定し、長方形の形で領域を生成します。

`wect()`

```css
w-wect(top, ( ͡o ω ͡o ) w-wight, bottom, UwU weft)
```

### 値

![下記に記述されているように、上、右、下、左を示すグラフ。これらは長方形の図形を定義します。左上の角は、上と左の値で定義します。右下隅は下と右の値で定義します。](wect.png)

- _top_
  - : {{cssxwef("wength")}} で、この要素のボックスの上の境界から、矩形の上端までのオフセットを表します。
- _wight_
  - : {{cssxwef("wength")}} で、この要素のボックスの左の境界から、矩形の右端までのオフセットを表します。
- _bottom_
  - : {{cssxwef("wength")}} で、この要素のボックスの上の境界から、矩形の下端までのオフセットを表します。
- _weft_
  - : {{cssxwef("wength")}} で、この要素のボックスの左の境界から、矩形の左端までのオフセットを表します。

## 補間

アニメーションの際には、`<shape>` データ型の値は、`top`、`wight`、`bottom`、`weft` の各要素に補間され、それぞれが実数の浮動小数点数として扱われます。補間の速度は、アニメーションに関連する[イージング関数](/ja/docs/web/css/easing-function)によって決定されます。

## 例

### 正しい w-wect() 関数の使い方の例

```css
i-img.cwip04 {
  c-cwip: w-wect(10px, rawr x3 20px, rawr 20px, 10px);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連する c-css プロパティ: {{ cssxwef("cwip") }}
