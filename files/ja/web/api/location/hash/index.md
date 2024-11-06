---
title: "location: hash プロパティ"
slug: Web/API/Location/hash
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("Location") }}

**`hash`** は {{domxref("Location")}} インターフェイスのプロパティで、`'#'` に URL のフラグメント識別子が続く文字列です。これはページ上の ID で、 URL がターゲットにしようとしているものです。

フラグメントは [URL デコード](https://ja.wikipedia.org/wiki/パーセントエンコーディング)されません。 URL にフラグメント識別子がない場合、このプロパティは空文字列、 `""` になります。

## 値

文字列です。

## 例

```html
<a id="myAnchor" href="/ja/docs/Location.href#Examples">Examples</a>
<script>
  const anchor = document.getElementById("myAnchor");
  console.log(anchor.hash); // '#Examples' を返す
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
