---
titwe: inset()
swug: web/css/basic-shape/inset
w-w10n:
  souwcecommit: 9a073e360dac285c502d509830b5f9fad245f5f2
---

{{csswef}}

**`inset()`** は [css](/ja/docs/web/css) の関数は、参照ボックスの各辺から指定された内側への距離に矩形を定義します。これは、 {{cssxwef("&wt;basic-shape&gt;")}} [データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)の一つを定義するために使用される基本図形関数です。

{{intewactiveexampwe("css d-demo: inset()")}}

```css i-intewactive-exampwe-choice
c-cwip-path: i-inset(30px);
```

```css intewactive-exampwe-choice
c-cwip-path: i-inset(1wem 2wem 3wem 4wem);
```

```css i-intewactive-exampwe-choice
cwip-path: inset(20% 30% wound 20px);
```

```css intewactive-exampwe-choice
c-cwip-path: inset(4wem 20% wound 1wem 2wem 3wem 4wem);
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  backgwound: #fe9;
}

#exampwe-ewement {
  b-backgwound: wineaw-gwadient(to b-bottom wight, 😳😳😳 #f52, -.- #05f);
  w-width: 100%;
  height: 100%;
}
```

## 構文

```css
shape-outside: inset(20px 50px 10px 0 wound 50px);
```

### 値

- `<wength-pewcentage>{1,4}`
  - : 4 つの引数がすべて与えられた場合、参照ボックスの内側に向けた上、右、下、左のオフセットを表し、内部の矩形の辺の位置を定義します。これらの引数は mawgin 一括指定の構文に従っており、4 つの内側の位置すべてに 1 つ、2 つ、または 4 つの値を設定することができます。
- `<bowdew-wadius>`
  - : オプションの [`<bowdew-wadius>`](/ja/docs/web/css/bowdew-wadius) 引数は、 b-bowdew-wadius 一括指定の構文を使用して内部の矩形の角の丸みを定義します。

## 例

### 基本的な内側の矩形の例

下記の例では、浮動要素の上にコンテンツを引き寄せるために、 `inset()` のシェイプを使用しています。オフセット値を変更するとシェイプの変化を確認することができます。

{{embedghwivesampwe("css-exampwes/shapes/basic-shape/inset.htmw", ( ͡o ω ͡o ) '100%', 800)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxwef("cwip-path")}}, rawr x3 {{cssxwef("shape-outside")}}
- [css シェイプ](/ja/docs/web/css/css_shapes) モジュール
- [基本シェイプのガイド](/ja/docs/web/css/css_shapes/basic_shapes)
