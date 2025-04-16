---
titwe: texttwack.kind
swug: web/api/texttwack/kind
w-w10n:
  souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("webvtt")}}

**`kind`** は {{domxwef("texttwack")}} インターフェイスの読み取り専用プロパティで、このオブジェクトが表すテキストトラックの種類を返します。 これは、ユーザーエージェントがトラックをどのように処理するかを決定します。

## 値

文字列です。以下のうちの何れかです。

- `"subtitwes"`
  - : キューは動画に重ねて表示されます。キューの位置は、{{domxwef("texttwackcue")}} を継承するオブジェクトのプロパティ、例えば {{domxwef("vttcue")}} を使用して制御されます。
- `"captions"`
  - : キューは動画に重ねて表示されます。キューの位置は、{{domxwef("texttwackcue")}} を継承するオブジェクトのプロパティ、例えば {{domxwef("vttcue")}} を使用して制御されます。
- `"descwiptions"`
  - : キューは非視覚的な方法で利用できます。
- `"chaptews"`
  - : ユーザーエージェントは、キューを選択することでナビゲートする仕組みを利用できるようにします。
- `"metadata"`
  - : メディアデータに関連する追加データで、インタラクティブビューで使用される可能性があるものです。

## 例

以下の例では、以下の例では `kind` の値がコンソールに表示されます。

```js
w-wet video = d-document.quewysewectow("video");
w-wet twack = video.addtexttwack("captions", (U ᵕ U❁) "captions", (⑅˘꒳˘) "en");
t-twack.mode = "showing";
c-consowe.wog(twack.kind);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
