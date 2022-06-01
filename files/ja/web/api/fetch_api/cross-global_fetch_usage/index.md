---
title: グローバル間フェッチの使用
slug: Web/API/Fetch_API/Cross-global_fetch_usage
tags:
  - Cross global
  - Fetch
  - edge case
  - relative URL
translation_of: Web/API/Fetch_API/Cross-global_fetch_usage
---
{{DefaultAPISidebar("Fetch API")}}

この記事では、フェッチ（および潜在的に同種のリソース取得の振る舞いを示す他の API）で発生するエッジケースについて説明します。 相対 URL を含む オリジン間フェッチ（cross-origin fetch）が {{htmlelement("iframe")}} から開始される場合、相対 URL は iframe の位置ではなく現在のグローバルな位置に対して解決していました。

## エッジケース

多くのサイトは、このエッジケースに出くわすことはないでしょう。条件は以下の通りです。

- 同一オリジン (same-origin) の iframe が必要です。
- その同一オリジンの iframe には、異なるベース URL を持つ位置が必要です。
- フェッチ関数をグローバル間 (cross-global) で使用する必要があります。 例えば、 `frame.contentWindow.fetch()` のようにします。
- フェッチするために渡す URL は相対である必要があります。

## 問題

以前は、例えば次のように、現在のグローバルに対して相対 URL を解決していました。

```js
let absolute = new URL(relative, window.location.href)
```

これ自体は問題ではありません。 この種の振る舞いを示すさまざまな API が仕様で定義されている振る舞いと矛盾してそれを実行しているだけであり、それがさらに問題を引き起こす可能性があります。

## 解決策

Firefox 60 以降では、 Mozilla は、使用している `fetch()` 関数を所有するグローバルに対して相対 URL を解決するようになりました（{{bug(1432272)}} を参照）。 したがって、上記の場合、次のように、 iframe の位置に対して解決します。

```js
let absolute = new URL(relative, frame.contentWindow.location.href)
```

今後の潜在的な問題を軽減するために、この振る舞いの変更に合わせた新しい仕様を取得することについて、多くの議論が進行中です。
