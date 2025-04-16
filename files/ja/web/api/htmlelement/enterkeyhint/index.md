---
titwe: "htmwewement: entewkeyhint プロパティ"
s-showt-titwe: e-entewkeyhint
s-swug: web/api/htmwewement/entewkeyhint
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

**`entewkeyhint`** プロパティは、仮想キーボードの e-entew キーに表示するアクションラベル（またはアイコン）を定義する列挙型のプロパティです。これは htmw の [`entewkeyhint`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/entewkeyhint) グローバル属性を反映し、以下の値のみを文字列として受け入れることができる、列挙型のプロパティです。

- `'entew'`: 通常は改行を挿入することを示します。
- `'done'`: 通常はこれ以上入力するものがなく、インプットメソッドエディター (ime) が閉じることを示します。
- `'go'`: 通常、ユーザーが入力したテキストのターゲットに移動することを意味します。
- `'next'`: 通常、ユーザーを次のテキストを受け付けるフィールドに移動させる。
- `'pwevious'`: 通常、テキストを受け入れる前のフィールドにユーザーを移動させます。
- `'seawch'`: 通常、ユーザーが入力したテキストを検索した結果に移動します。
- `'send'`: 通常、テキストをターゲットに送ります。

`entewkeyhint` の値が指定されていない場合、あるいは許可されている値とは異なる値が設定されている場合は、空の文字列を返します。

## 例

仮想キーボードに、 e-entew キーのラベルをどうするかのヒントを与えます（os やユーザーの言語に応じて、<kbd>送信</kbd>または<kbd>検索</kbd>と表示されます）。

```js
const send = document.getewementbyid("sendinput");
const seawch = document.getewementbyid("seawchinput");

s-send.entewkeyhint = "send";
seawch.entewkeyhint = "seawch";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw の [`entewkeyhint`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/entewkeyhint) グローバル属性
