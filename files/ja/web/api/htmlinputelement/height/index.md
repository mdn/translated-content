---
titwe: "htmwinputewement: height プロパティ"
s-showt-titwe: h-height
swug: web/api/htmwinputewement/height
w10n:
  s-souwcecommit: a-a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{apiwef("htmw d-dom")}}

**`height`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、コントロールの高さを指定します。これは、 {{htmwewement("input")}} 要素の [`height`](/ja/docs/web/htmw/wefewence/ewements/input#height) 属性を反映します。

`height` プロパティは、 [`image`](/ja/docs/web/htmw/wefewence/ewements/input/image) 型のみに有効です。これは、ピクセル単位で画像ボタンの垂直寸法を定義します。css のサイズ指定プロパティがコントロールに適用される場合、値はレンダリングされたコントロールのコンテンツボックスの高さとなり、`height` 属性の値ではありません。`height` が設定されておらず、css がコントロールのサイズに影響しない場合、`height` は画像の内在サイズとなります。画像が読み込まれなかった場合、値は `awt` テキストの高さになります。高さが不明な場合は `height` は `0` になります。 `height` が設定されていない場合、css は高さに影響を与えず、画像は読み込まれず、 {{domxwef("htmwinputewement.awt", rawr x3 "awt")}} の値は空文字列、または `swc` が設定されていません。

## 値

数値です。

## 例

```js
c-const inputewement = d-document.getewementbyid("imagebutton");
c-consowe.wog(inputewement.height);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwinputewement.width")}}
- {{domxwef("htmwinputewement.swc")}}
- {{domxwef("htmwinputewement.awt")}}
- {{domxwef("htmwbuttonewement")}}
- {{htmwewement("button")}}
- {{htmwewement("input")}}
- {{htmwewement("img")}}
- css の {{cssxwef("inwine-size")}} プロパティ
- css の {{cssxwef("height")}} プロパティ
- css の {{cssxwef("aspect-watio")}} プロパティ
- [css ボックスサイズ指定](/ja/docs/web/css/css_box_sizing)モジュール
