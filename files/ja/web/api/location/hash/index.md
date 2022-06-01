---
title: location.hash
slug: Web/API/Location/hash
tags:
  - API
  - Location
  - プロパティ
  - リファレンス
browser-compat: api.Location.hash
translation_of: Web/API/Location/hash
---
{{ APIRef("Location") }}

**`hash`** は {{domxref("Location")}} インターフェイスのプロパティで、 {{domxref("USVString")}} で `'#'` に続いて URL のフラグメント識別子を返します。これはページ上の ID で、 URL がターゲットにしようとしているものです。

フラグメントは[パーセントデコード](/ja/docs/Glossary/percent-encoding)されません。 URL にフラグメント識別子がない場合、このプロパティは空文字列、 `""` になります。

## 構文

```js
string = object.hash;
object.hash = string;
```

## 例

```html
<a id="myAnchor" href="/ja/docs/Location.href#Examples">Examples</a>
<script>
  var anchor = document.getElementById("myAnchor");
  console.log(anchor.hash); // Returns '#Examples'
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
