---
title: location.reload()
slug: Web/API/Location/reload
tags:
  - API
  - HTML DOM
  - Location
  - メソッド
  - リファレンス
browser-compat: api.Location.reload
translation_of: Web/API/Location/reload
---
{{ APIRef("HTML DOM") }}

**`location.reload()`** メソッドは、再読み込みボタンのように現在の URL を再読み込みします。

再読み込みはブロックされ、 `SECURITY_ERROR` の {{domxref("DOMException")}} が発生する可能性があります。これは、 `location.reload()` を呼び出すスクリプトの{{Glossary("origin", "オリジン")}}が、 {{domxref("Location")}} オブジェクトを保持するページのオリジンと異なる場合に発生します。詳細については、[同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)を参照してください。

## 構文

```js
location.reload();
```

## location.reload() には引数がない

Firefox は標準外の[論理値の `forceGet` 引数](https://searchfox.org/mozilla-central/source/dom/base/Location.cpp#551) を `location.reload()` で対応しており、 Firefox にキャッシュをバイパスして現在の文書を強制的に再読み込みするように指示することができます。しかし、他のすべてのブラウザーでは、`location.reload()` の呼び出しで指定した引数は無視され、いかなる効果も持ちません。

しかし、すべてのブラウザーで強制再読み込みの効果が発生することを前提に書かれた既存のコードで `location.reload(true)` のインスタンスに出会うことがあるかもしれません。 GitHub で "`location.reload(true)`" を検索すると、[数十万件の結果](https://github.com/search?q=%22location.reload%28true%29%22&type=code)が得られます。ということは、既存のコードの中にもそれがあるものがたくさんあるのです。

その歴史は、 Netscape Navigator のある版で対応が追加され、それが最終的に Firefox で取り上げられたようです。そして、あるとき W3C Web APIs Working Group が `location.reload()` の仕様に追加することを検討するための[課題を取り上げました](https://www.w3.org/2005/06/tracker/webapi/issues/69)。しかし、実際に追加されることはありませんでした。

つまり、論理値の引数は現在の `location.reload()` の仕様には含まれていませんし、実際、これまでに発表された `location.reload()` の仕様には含まれていません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("Location")}} インターフェイス
- 同様のメソッド: {{domxref("Location.assign()")}} および {{domxref("Location.replace()")}}
