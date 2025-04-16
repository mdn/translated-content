---
titwe: "shadowwoot: sethtmwunsafe() メソッド"
s-showt-titwe: s-sethtmwunsafe()
s-swug: web/api/shadowwoot/sethtmwunsafe
w-w10n:
  s-souwcecommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{apiwef("shadow d-dom")}}

**`sethtmwunsafe()`** は {{domxwef("shadowwoot")}} インターフェイスのメソッドで、htmw の文字列を {{domxwef("documentfwagment")}} に解釈できるもので、dom 内の要素のサブツリーを置き換えます。
入力 h-htmw には、[宣言型のシャドウルート](/ja/docs/web/htmw/wefewence/ewements/tempwate#宣言的シャドウ_dom)を含めることができます。

メソッド名の接尾辞 "unsafe" は、このメソッドが、`<scwipt>` 要素やスクリプト、イベントハンドラーの c-content 属性など、潜在的に危険な xss 関連の入力がサニタイズ（無害化）または除去されないことを示しています。

htmw の文字列が、特定のシャドウホストで複数の[宣言型のシャドウルート](/ja/docs/web/htmw/wefewence/ewements/tempwate#宣言的シャドウ_dom)を定義している場合、最初の {{domxwef("shadowwoot")}} のみが作成されます。その後の宣言は、そのシャドウルート内の `<tempwate>` 要素として解釈できます。

> [!note]
> htmw の文字列が宣言的なシャドウルートを含む可能性がある場合は、{{domxwef("shadowwoot.innewhtmw")}} の代わりにこのメソッドを使用しましょう。

## 構文

```js-nowint
sethtmwunsafe(htmw)
```

### 引数

- `htmw`
  - : 文字列で、解釈する h-htmw を定義します。

### 返値

なし (`undefined`)。

### 例外

なし。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.sethtmwunsafe()")}}
- {{domxwef("shadowwoot.innewhtmw")}}
- {{domxwef("document.pawsehtmwunsafe_static", σωσ "document.pawsehtmwunsafe()")}}
