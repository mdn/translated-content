---
title: MIME タイプの検証
slug: Web/Security/Practical_implementation_guides/MIME_types
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

[`X-Content-Type-Options`](/ja/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options) ヘッダーは、サーバーが正しい [MIMEタイプ](/ja/docs/Glossary/MIME_type) を示さない限り、スクリプトやスタイルシートを読み込まないようブラウザーに指示します。

## 課題

適切な MIME タイプの検証が行われない場合、ブラウザーはスクリプトやスタイルシートではないファイルを、誤ってスクリプトやスタイルシートとして検出してしまうことがあります。このエラーにより、{{htmlelement("script")}} および {{htmlelement("link")}} 要素を介して、悪意のあるファイルがクロスサイトスクリプティング（{{Glossary("Cross-site_scripting", "XSS")}}）攻撃の一環として読み込まれる可能性があります。

## 解決策

すべてのサイトは、`X-Content-Type-Options` ヘッダーの値を `nosniff` に設定し、配信するファイルに対して適切な MIME タイプを（つまり、[`Content-Type`](/ja/docs/Web/HTTP/Reference/Headers/Content-Type) ヘッダーを介して）設定しなければなりません。

`nosniff` は、リクエストの出力先が以下のいずれかに該当する場合、そのリクエストをブロックします。

- type が `style` であり、MIME タイプが `text/css` ではない場合。
- type が `script` であり、MIME タイプが有効な [JavaScript MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types#textjavascript)ではない場合。

## 例

ブラウザーが、スタイルシートではないものをスタイルシートとして、またスクリプトではないものをスクリプトとして誤って検出するのを防ぐには、次のようにします。

```http
X-Content-Type-Options: nosniff
```

## 関連情報

- [MIME タイプ（IANA メディア種別）: MIME スニッフィング](/ja/docs/Web/HTTP/Guides/MIME_types#mime_スニッフィング)
- [サーバーで MIME タイプを正しく設定する](/ja/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
