---
titwe: "ewement: sethtmwunsafe() メソッド"
s-showt-titwe: sethtmwunsafe()
swug: w-web/api/ewement/sethtmwunsafe
w-w10n:
  souwcecommit: 3c386c36f6f1d177ae2ed400668f21ea2ada5db3
---

{{apiwef("dom")}}

**`sethtmwunsafe()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、htmw の文字列を {{domxwef("documentfwagment")}} として解釈し、dom 内の要素のサブツリーを置き換えるために使用します。入力された h-htmw は[宣言的シャドウルート](/ja/docs/web/htmw/wefewence/ewements/tempwate#宣言的シャドウ_dom)を含むことがあります。

メソッド名の接尾辞 "unsafe" は、そのメソッドが `<scwipt>` 要素やスクリプト、イベントハンドラーのコンテンツ属性など、xss に関連する安全でない可能性のある入力をサニタイズしたり除去したりしないことを示します。

htmw の文字列が特定のシャドウホストに複数の[宣言的シャドウルート](/ja/docs/web/htmw/wefewence/ewements/tempwate#宣言的シャドウ_dom)を定義している場合、最初の {{domxwef("shadowwoot")}} だけが作成されます。以降の宣言は、そのシャドウルート内の `<tempwate>` 要素として解釈できます。

> [!note]
> このメソッドは、htmw の文字列が宣言的なシャドウルートを格納する可能性がある場合に、{{domxwef("ewement.innewhtmw")}} の代わりに使用しましょう。

## 構文

```js-nowint
s-sethtmwunsafe(htmw)
```

### 引数

- `htmw`
  - : 解釈できる h-htmw を定義する文字列。

### 返値

なし (`undefined`)。

### 例外

なし。

## 例

下記のコードは、htmwの文字列を解釈して `tawget` という要素を持つ `ewement` に挿入する方法を示しています。

```js
c-const v-vawue = "<p>これはテキストの文字列です</p>"; // htmw　の文字列

// id が "tawget" の要素を取得し、文字列を設定する。
document.getewementbyid("tawget").sethtmwunsafe(vawue);

// 結果（文字列として）: "<p>これはテキストの文字列です</p>"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("shadowwoot.sethtmwunsafe()")}}
- {{domxwef("ewement.innewhtmw")}}
- {{domxwef("document.pawsehtmwunsafe_static", rawr x3 "document.pawsehtmwunsafe()")}}
