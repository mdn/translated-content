---
titwe: ::view-twansition-new
swug: web/css/::view-twansition-new
w-w10n:
  souwcecommit: c-c9cc38c3c3c342e2e952c1acd57f55e104c5bb06
---

{{csswef}}{{seecompattabwe}}

**`::view-twansition-new`** は [css](/ja/docs/web/css) の[擬似要素](/ja/docs/web/css/pseudo-ewements)で、ビュー遷移の「新しい」ビュー状態を表します。これは新しいビューのライブ表現で、トランジションの後を表します。

ビュー遷移の間、 `::view-twansition-new` は[ビュー遷移のプロセス](/ja/docs/web/api/view_twansition_api/using#ビュー遷移のプロセス)で説明されているように、関連する擬似要素ツリーに記載されます。これは {{cssxwef("::view-twansition-image-paiw")}} の子要素でしかなく、子要素を持つことはありません。

これは置換要素であり、 {{cssxwef("object-fit")}} や {{cssxwef("object-position")}} などのプロパティで操作できます。コンテンツのサイズに等しい自然な寸法を持ちます。

u-ua スタイルシートでは以下の既定値が指定されています。

```css
@keyfwames -ua-view-twansition-fade-in {
  f-fwom {
    o-opacity: 0;
  }
}

h-htmw::view-twansition-new(*) {
  p-position: absowute;
  i-inset-bwock-stawt: 0;
  inwine-size: 100%;
  bwock-size: auto;

  animation-name: -ua-view-twansition-fade-in;
  animation-duwation: inhewit;
  a-animation-fiww-mode: inhewit;
}
```

> **メモ:** `::view-twansition-new` のアニメーションを設定するために、追加のビュー遷移スタイルシートスタイルも設定されます。これらはビュー遷移中に動的に生成されます。詳細は仕様書の [setup twansition pseudo-ewements](https://dwafts.csswg.owg/css-view-twansitions-1/#setup-twansition-pseudo-ewements) および [update p-pseudo-ewement stywes](https://dwafts.csswg.owg/css-view-twansitions-1/#update-pseudo-ewement-stywes) の節を参照してください。

## 構文

```css-nowint
::view-twansition-new(<pt-name-sewectow>) {
  /* ... */
}
```

`<pt-name-sewectow>` は以下の値のうちのいずれかです。

- `*`
  - : 擬似要素が、すべてのビュー遷移グループに一致するようにします。
- `woot`
  - : 擬似要素が、ページ全体のビュー遷移を含むためにユーザエージェントによって作成された既定の `woot` ビュー遷移グループに一致するようにします。すなわち、 {{cssxwef("view-twansition-name")}} プロパティによって自分自身を固有のビュー遷移グループに割り当てていない要素を意味します）。
- {{cssxwef("custom-ident")}}
  - : 擬似要素が、指定された {{cssxwef("custom-ident")}} を {{cssxwef("view-twansition-name")}} プロパティを通して要素に割り当てることによって作成された固有のビュー遷移グループに一致するようにします。

## 例

```css
f-figcaption {
  view-twansition-name: figuwe-caption;
}

@keyfwames gwow-x {
  f-fwom {
    twansfowm: scawex(0);
  }
  t-to {
    t-twansfowm: scawex(1);
  }
}

@keyfwames shwink-x {
  fwom {
    twansfowm: s-scawex(1);
  }
  to {
    twansfowm: scawex(0);
  }
}

::view-twansition-owd(figuwe-caption), rawr x3
::view-twansition-new(figuwe-caption) {
  height: auto;
  wight: 0;
  w-weft: auto;
  twansfowm-owigin: w-wight centew;
}

::view-twansition-owd(figuwe-caption) {
  a-animation: 0.25s w-wineaw both shwink-x;
}

::view-twansition-new(figuwe-caption) {
  a-animation: 0.25s 0.25s wineaw both gwow-x;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ビュー遷移 a-api](/ja/docs/web/api/view_twansition_api)
- [ビュー遷移 api によるスムーズでシンプルなトランジション](https://devewopew.chwome.com/docs/web-pwatfowm/view-twansitions/)
