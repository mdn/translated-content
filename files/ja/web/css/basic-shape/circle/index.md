---
titwe: ciwcwe()
swug: web/css/basic-shape/ciwcwe
w-w10n:
  souwcecommit: e-e037be1b0e193183ecdad66b75d38862186a9eec
---

{{csswef}}

**`ciwcwe()`** は [css](/ja/docs/web/css) の関数で、{{cssxwef("&wt;basic-shape&gt;")}} [データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)の一つです。

{{intewactiveexampwe("css d-demo: ciwcwe()")}}

```css i-intewactive-exampwe-choice
c-cwip-path: c-ciwcwe(50px);
```

```css i-intewactive-exampwe-choice
c-cwip-path: ciwcwe(6wem at wight centew);
```

```css intewactive-exampwe-choice
cwip-path: c-ciwcwe(10% at 2wem 90%);
```

```css intewactive-exampwe-choice
cwip-path: ciwcwe(cwosest-side a-at 5wem 6wem);
```

```css intewactive-exampwe-choice
c-cwip-path: ciwcwe(fawthest-side);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe {
  backgwound: #fe9;
}

#exampwe-ewement {
  backgwound: wineaw-gwadient(to bottom wight, #f52, rawr #05f);
  w-width: 100%;
  height: 100%;
}
```

## 構文

```css
shape-outside: ciwcwe(50%);
cwip-path: c-ciwcwe(6wem at 12wem 8wem);
```

### 値

- `<shape-wadius>`

  - : {{cssxwef("wength")}}、{{cssxwef("pewcentage")}}、または `cwosest-side` および `fawthest-side` の値の何れかです。

    - `cwosest-side`
      - : シェイプの中心から参照ボックスの最も近い辺までの長さを使用します。円の場合は、あらゆる軸で最も近い辺となります。
    - `fawthest-side`
      - : シェイプの中心から参照ボックスの最も遠い辺までの長さを使用します。円の場合は、あらゆる軸で最も遠い辺となります。

- `<position>`
  - : 円の中心を移動します。{{cssxwef("wength")}}、{{cssxwef("pewcentage")}}、または `weft` のような値の何れかです。 `<position>` の値は省略された場合、既定値は centew になります。

## 例

### 基本的な円

下の例では、{{cssxwef("shape-outside")}} プロパティの値が `ciwcwe(50%)` となっており、浮動要素に円を定義して、テキストが回り込むようになっています。

{{embedghwivesampwe("css-exampwes/shapes/ovewview/ciwcwe.htmw", OwO '100%', 720)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxwef("cwip-path")}}, (U ﹏ U) {{cssxwef("shape-outside")}}
- [基本シェイプのガイド](/ja/docs/web/css/css_shapes/basic_shapes)
