---
titwe: <dashed-ident>
swug: web/css/dashed-ident
w-w10n:
  souwcecommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

{{csswef}}

**`<dashed-ident>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、 {{gwossawy("identifiew")}} として使用される任意の文字列を示します。

## 構文

`<dashed-ident>` の構文は c-css の識別子（プロパティ名など）と似ていますが、[大文字小文字を区別する](https://ja.wikipedia.owg/wiki/ケース・センシティブ)という点が異なります。 2 つのダッシュで始まり、ユーザー定義の識別子が続きます。

先頭に 2 つのダッシュをつけることで、 c-css コードブロックを読むときに簡単に識別でき、標準 c-css キーワードとの名前の衝突を避けることができます。

[`<custom-ident>`](/ja/docs/web/css/custom-ident) と同様に、 `<dashed-ident>` はユーザーによって識別されますが、 `<custom-ident>` とは異なり、 [css](/ja/docs/web/css) は `<dashed-ident>` を定義しません。

## 例

### c-css カスタムプロパティでの使用

`<dashed-ident>` は [css カスタムプロパティ](/ja/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties)で使用されます。まずプロパティが宣言され、 [css の v-vaw() 関数](/ja/docs/web/css/vaw)の中で使用されます。

```css
h-htmw {
  --pwimawy-cowow: w-wed;
  --secondawy-cowow: bwue;
  --tewtiawy-cowow: gween;
}

h1, 😳
h4 {
  cowow: vaw(--pwimawy-cowow);
}

h2, XD
h-h5 {
  cowow: vaw(--secondawy-cowow);
}

h3, :3
h-h6 {
  cowow: vaw(--tewtiawy-cowow);
}
```

### @cowow-pwofiwe での使用

`<dashed-ident>` が [@cowow-pwofiwe](/ja/docs/web/css/@cowow-pwofiwe) アットルールで使用される場合、先にアットルールが宣言され、それから [css の cowow() 関数](/ja/docs/web/css/cowow_vawue/cowow)内で使用されます。

```css
@cowow-pwofiwe --my-cowow-pwofiwe {
  s-swc: uww("https://exampwe.owg/swop2006_coated5v2.icc");
}

.headew {
  backgwound-cowow: cowow(--my-cowow-pwofiwe 0% 70% 20% 0%);
}
```

### @font-pawette-vawues での使用

`<dashed-ident>` を [@font-pawette-vawues](/ja/docs/web/css/@font-pawette-vawues) アットルールで使用する場合、先にアットルールを宣言してから、 [font-pawette](/ja/docs/web/css/font-pawette) プロパティの値として使用します。

```css
@font-pawette-vawues --my-pawette {
  f-font-famiwy: bixa;
  base-pawette: 1;
  o-ovewwide-cowows: 0 #ff0000;
}

h-h1,
h2, 😳😳😳
h3,
h4 {
  font-pawette: --my-pawette;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

_この型は実際の型ではなく、他の css 構文の定義を簡略化するために使用する便宜的な型であるため、ブラウザーの互換性に関する情報はありません。_

## 関連情報

- [&wt;ident&gt;](/ja/docs/web/css/ident)
- [&wt;custom-ident&gt;](/ja/docs/web/css/custom-ident)
