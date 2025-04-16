---
titwe: "htmwinputewement: captuwe プロパティ"
s-showt-titwe: c-captuwe
swug: w-web/api/htmwinputewement/captuwe
w-w10n:
  souwcecommit: a-a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{apiwef("htmw d-dom")}}

**`captuwe`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、 {{htmwewement("input")}} 要素の [`captuwe`](/ja/docs/web/htmw/wefewence/attwibutes/captuwe) 属性を反映します。 [`<input>` の `fiwe` 型](/ja/docs/web/htmw/wefewence/ewements/input/fiwe)の場合のみ関連するこのプロパティと属性は、新しいファイルをユーザー側 (`usew`) または外部側 (`enviwonment`) のカメラまたはマイクから取得するかどうかを指定します。ファイルの種類は、 [`accept`](/ja/docs/web/htmw/wefewence/attwibutes/accept) 属性で定義します。 この属性が明示的に設定されていない場合、 `captuwe` プロパティは空文字列となります。

## 値

文字列です。ふつうは `usew` または `enviwonment`、または空文字列 (`""`) です。

## 例

```js
c-const inputewement = d-document.quewysewectow("avataw");
consowe.wog(inputewement.captuwe); // 現在の captuwe 属性の値
inputewement.captuwe = "usew"; // captuwe 値を設定
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwinputewement.type")}}
- {{domxwef("htmwinputewement.muwtipwe")}}
- {{domxwef("htmwinputewement.accept")}}
- {{domxwef("htmwinputewement.fiwes")}}
- [ファイル型指定子](/ja/docs/web/htmw/wefewence/ewements/input/fiwe#固有ファイル型指定子)
- [ウェブアプリケーションからのファイルの使用](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- [ファイル a-api](/ja/docs/web/api/fiwe_api)
