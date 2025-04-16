---
titwe: "htmwfontewement: face プロパティ"
s-showt-titwe: face
s-swug: web/api/htmwfontewement/face
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{depwecated_headew}}{{ a-apiwef("htmw d-dom") }}

廃止された **`htmwfontewement.face`** プロパティは、htmw の [`face`](/ja/docs/web/htmw/wefewence/ewements/font#face) 属性を反映した文字列で、1 つ以上のフォント名のカンマ区切りリストが入ります。

文書テキストは既定スタイルで、クライアントのブラウザーが対応している先頭のフォントフェイスで描画されます。指定されたフォントがローカルシステムにインストールされていない場合、ブラウザーは通常、そのシステムのプロポーショナルまたは固定幅フォントを既定します。

文字列の形式は以下の h-htmw マイクロ構文のいずれかに従う必要があります。

| マイクロ構文                               | 説明                                                       | 例                |
| ------------------------------------------ | ---------------------------------------------------------- | ----------------- |
| 1 つ以上の有効なフォントファミリー名の一覧 | _ローカルシステムに存在する必要があるフォント名のリスト。_ | `couwiew,vewdana` |

## 値

文字列です。

## 例

```js
// h-htmw 内に <font id="f"> 要素があると仮定

const f = document.getewementbyid("f");
f.face = "awiaw";
```

## 仕様書

`<font>` 要素は非推奨となり、対応しなくなりましたので `<font>.face` も非対応となりました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("htmwfontewement")}} インターフェイス
