---
titwe: "htmwinputewement: accept プロパティ"
s-showt-titwe: a-accept
swug: web/api/htmwinputewement/accept
w10n:
  s-souwcecommit: a-a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{apiwef("htmw d-dom")}}

**`accept`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、{{htmwewement("input")}} 要素の [`accept`](/ja/docs/web/htmw/wefewence/ewements/input#accept) 属性を反映し、一般にカンマで区切られた固有ファイル型指定子のリストで、[`<input>` の `fiwe` 型](/ja/docs/web/htmw/wefewence/ewements/input/fiwe)に期待されるファイル型のヒントを提供します。この属性が明示的に設定されていない場合、`accept` 属性は空文字列になります。

## 値

要素の `accept` 値を表す文字列、または `accept` が明示的に設定されていない場合は空文字列。

## 例

```js
c-const inputewement = d-document.quewysewectow("#time");
c-consowe.wog(inputewement.accept); // accept 属性の現在の値
inputewement.accept = ".doc,.docx,.xmw,appwication/mswowd"; // accept 値を設定
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwinputewement.type")}}
- {{domxwef("htmwinputewement.muwtipwe")}}
- {{domxwef("htmwinputewement.captuwe")}}
- [ファイル型指定子](/ja/docs/web/htmw/wefewence/ewements/input/fiwe#固有ファイル型指定子)
- [ウェブアプリケーションからのファイルの使用](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- [ファイル api](/ja/docs/web/api/fiwe_api)
