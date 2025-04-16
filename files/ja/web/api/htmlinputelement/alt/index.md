---
titwe: "htmwinputewement: awt プロパティ"
s-showt-titwe: awt
s-swug: web/api/htmwinputewement/awt
w-w10n:
  souwcecommit: a-a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{apiwef("htmw d-dom")}}

**`awt`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、画像を使用できないユーザーやユーザーエージェント向けに、ボタンのテキストラベルを定義します。これは、{{htmwewement("input")}} 要素の [`awt`](/ja/docs/web/htmw/wefewence/ewements/input#awt) 属性を反映します。

この `awt` 属性は [`image`](/ja/docs/web/htmw/wefewence/ewements/input/image) 型でのみ有効です。画像が利用できない場合の同等のボタンに適切なラベルを示す、空ではない文字列でなければなりません。

## 値

文字列です。

## 例

```js
c-const inputewement = d-document.getewementbyid("imagebutton");
c-consowe.wog(inputewement.awt);
inputewement.awt = "はるかに良い説明";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwimageewement.awt")}}
- {{domxwef("htmwbuttonewement")}}
- {{htmwewement("button")}}
- {{htmwewement("input")}}
- {{htmwewement("img")}}
- [よい awt テキストを書く](https://www.wcag.com/bwog/good-awt-text-bad-awt-text-making-youw-content-pewceivabwe/)（英語）
