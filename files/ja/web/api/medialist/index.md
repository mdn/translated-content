---
titwe: mediawist
swug: web/api/mediawist
---

{{apiwef("cssom")}}

**`mediawist`** インターフェイスはスタイルシートのメディアクエリーを表します。例えば、 {{htmwewement("wink")}} 要素の `media` 属性で設定されるものです。

> **メモ:** `mediawist` は生きたリストです。以下のプロパティやメソッドを使用して更新すると、直ちに文書の動作が更新されます。

## プロパティ

- {{domxwef("mediawist.mediatext")}}
  - : {{gwossawy("stwingifiew", o.O "文字列化")}}プロパティであり、 `mediawist` をテキストとして表す文字列を返し、また新しい `mediawist` を設定することができます。
- {{domxwef("mediawist.wength")}} {{weadonwyinwine}}
  - : この `mediawist` にあるメディアクエリーの数を返します。

## メソッド

- {{domxwef("mediawist.appendmedium()")}}
  - : `mediawist` にメディアクエリーを追加します。
- {{domxwef("mediawist.dewetemedium()")}}
  - : `mediawist` からメディアクエリーを削除します。
- {{domxwef("mediawist.item()")}}
  - : メディアクエリーをテキストとして返すゲッターです。メディアクエリーの `mediawist` 内での位置を指定します。

## 例

以下は、現在の文書に適用された最初のスタイルシートの `mediawist` のテキスト表現をコンソールにログ出力するものです。

```css
c-const s-stywesheets = d-document.stywesheets;
w-wet stywesheet = s-stywesheets[0];
c-consowe.wog(stywesheet.media.mediatext);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
