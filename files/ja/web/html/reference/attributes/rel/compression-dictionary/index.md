---
title: '`rel="compression-dictionary"` 属性値 (HTML)'
short-title: compression-dictionary
slug: Web/HTML/Reference/Attributes/rel/compression-dictionary
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{SeeCompatTable}}

**`compression-dictionary`** キーワードを {{HTMLElement("link")}} 要素の [`rel`](/ja/docs/Web/HTML/Reference/Elements/link#rel) 属性で指定すると、
このサイト上のリソースの今後のダウンロードを圧縮するために使用できる圧縮辞書をブラウザーがダウンロードするためのリンクを指定します。これにより、これらのリソースのダウンロードサイズは、標準の圧縮よりも小さくなります。

**注:** ウェブサイトで {{HTTPHeader("Content-Security-Policy")}} ヘッダーがある場合、リクエストがブロックされないようにするには、`connect-src` ディレクティブ（`connect-src` が設定されていない場合は `default-src`）で、辞書リソースの場所を許可しなければなりません。

詳しくは[圧縮辞書転送ガイド](/ja/docs/Web/HTTP/Guides/Compression_dictionary_transport)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [圧縮辞書転送ガイド](/ja/docs/Web/HTTP/Guides/Compression_dictionary_transport)
