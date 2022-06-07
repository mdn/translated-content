---
title: Fetch directive (フェッチディレクティブ)
slug: Glossary/Fetch_directive
tags:
  - CSP
  - HTTP
  - セキュリティ
translation_of: Glossary/Fetch_directive
---
**{{Glossary("CSP")}} のフェッチディレクティブ**は {{HTTPHeader("Content-Security-Policy")}} ヘッダーで使用され、特定のリソース種別の読み込み先を制御します。たとえば、 {{CSP("script-src")}} では、開発者は信頼できるスクリプトのソースを許可してページ上で実行できるようし、 {{CSP("font-src")}} では、ウェブフォントのソースを制御できます。

すべてのフェッチディレクティブは {{CSP("default-src")}} で代替することができます。つまり、フェッチディレクティブが CSP ヘッダーにない場合、ユーザーエージェントは `default-src` ディレクティブを探します。

完全な一覧については[フェッチディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives)を参照してください。

## 関連情報

- [用語集](/ja/docs/Glossary)

  - {{Glossary("CSP")}}
  - {{Glossary("Reporting directive", "報告ディレクティブ")}}
  - {{Glossary("Document directive", "文書ディレクティブ")}}
  - {{Glossary("Navigation directive", "ナビゲーションディレクティブ")}}

- リファレンス

  - <https://www.w3.org/TR/CSP/#directives-fetch>
  - {{HTTPHeader("Content-Security-Policy/upgrade-insecure-requests", "upgrade-insecure-requests")}}
  - {{HTTPHeader("Content-Security-Policy/block-all-mixed-content", "block-all-mixed-content")}}
  - {{HTTPHeader("Content-Security-Policy/require-sri-for", "require-sri-for")}} {{Deprecated_Inline}}
  - {{HTTPHeader("Content-Security-Policy")}}
