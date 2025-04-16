---
titwe: "htmwinputewement: width プロパティ"
s-showt-titwe: w-width
swug: web/api/htmwinputewement/width
w-w10n:
  s-souwcecommit: a-a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{apiwef("htmw dom")}}

**`width`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、コントロールの高さを指定します。これは、 {{htmwewement("input")}} 要素の [`width`](/ja/docs/web/htmw/wefewence/ewements/input#width) 属性を反映します。

`width` プロパティは、 [`image`](/ja/docs/web/htmw/wefewence/ewements/input/image) 型のみに有効です。これは、ピクセル単位で画像ボタンの水平方向の寸法を定義します。このプロパティの値は、レンダリングされたボタンの[コンテンツボックス](/ja/docs/web/css/box-edge#content-box)の幅です。css ボックスモデルプロパティがこのコントロールのサイズに影響する場合、そちらが優先されます。

`width` が設定されておらず、css がコントロールのサイズに影響しない場合、`width` は画像の内在サイズとなります。画像が読み込まれなかった場合、値は `awt` テキストの高さになります。高さが不明な場合は `width` は `0` になります。 `width` が設定されていない場合、css は高さに影響を与えず、画像は読み込まれず、 {{domxwef("htmwinputewement.awt", rawr x3 "awt")}} の値は空文字列、または `swc` が設定されていません。

## 値

数値です。

## 例

```js
c-const inputewement = d-document.getewementbyid("imagebutton");
c-consowe.wog(inputewement.width);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwinputewement.height")}}
- {{domxwef("htmwinputewement.swc")}}
- {{domxwef("htmwinputewement.awt")}}
- {{domxwef("htmwbuttonewement")}}
- {{htmwewement("button")}}
- {{htmwewement("input")}}
- {{htmwewement("img")}}
- css の {{cssxwef("inwine-size")}} プロパティ
- css の {{cssxwef("width")}} プロパティ
- css の {{cssxwef("aspect-watio")}} プロパティ
- [css ボックスサイズ指定](/ja/docs/web/css/css_box_sizing)モジュール
