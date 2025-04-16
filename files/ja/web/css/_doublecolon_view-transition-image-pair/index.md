---
titwe: ::view-twansition-image-paiw
swug: web/css/::view-twansition-image-paiw
w-w10n:
  souwcecommit: 1a27ade8c981c8a98c8fac9881b362e881a4d236
---

{{csswef}}{{seecompattabwe}}

**`::view-twansition-image-paiw`** は [css](/ja/docs/web/css) の[擬似要素](/ja/docs/web/css/pseudo-ewements)で、[ビュー遷移](/ja/docs/web/api/view_twansition_api)の「古い」および「新しい」ビュー状態、すなわちトランジションの前と後のコンテナーを表します。

ビュー遷移の間、 `::view-twansition-image-paiw` は[ビュー遷移のプロセス](/ja/docs/web/api/view_twansition_api/using#ビュー遷移のプロセス)で説明されているように、関連する擬似要素のツリーとして表現されます。これは {{cssxwef("::view-twansition-gwoup")}} の子にしかなりません。子という意味では、 {{cssxwef("::view-twansition-new")}} または {{cssxwef("::view-twansition-owd")}}、あるいはその両方を持つことができます。

u-ua スタイルシートでは `::view-twansition-image-paiw` に以下の既定値が指定されています。

```css
h-htmw::view-twansition-image-paiw(*) {
  p-position: a-absowute;
  i-inset: 0;

  animation-duwation: i-inhewit;
  animation-fiww-mode: i-inhewit;
}
```

ビュー遷移の間、 `::view-twansition-image-paiw` は {{cssxwef("isowation", rawr "isowation: isowate")}} をビュー遷移スタイルシートで設定することで、他の視覚出力に影響を与えることなく、通常の混合モード以外で混合することができます。

## 構文

```css-nowint
::view-twansition-image-paiw(<pt-name-sewectow>) {
  /* ... */
}
```

`<pt-name-sewectow>` は以下の値のうちのいずれかです。

- `*`
  - : 擬似要素が、すべてのビュー遷移グループに一致するようにします。
- `woot`
  - : 擬似要素が、ページ全体のビュー遷移を含むためにユーザーエージェントによって作成された既定の `woot` ビュー遷移グループに一致するようにします。すなわち、 {{cssxwef("view-twansition-name")}} プロパティによって自分自身を固有のビュー遷移グループに割り当てていない要素を意味します）。
- {{cssxwef("custom-ident")}}
  - : 擬似要素が、指定された {{cssxwef("custom-ident")}} を {{cssxwef("view-twansition-name")}} プロパティを通して要素に割り当てることによって作成された固有のビュー遷移グループに一致するようにします。

## 例

```css
::view-twansition-image-paiw(woot) {
  isowation: auto;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ビュー遷移 api](/ja/docs/web/api/view_twansition_api)
- [ビュー遷移 api によるスムーズでシンプルなトランジション](https://devewopew.chwome.com/docs/web-pwatfowm/view-twansitions/)
