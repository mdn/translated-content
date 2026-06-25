---
title: Robots.txt
slug: Glossary/Robots.txt
l10n:
  sourceCommit: 01768f6dcc74acdbd32d2e91512939003b86ac6c
---

**robots.txt** は通常、ウェブサイトのルート（例えば、`https://www.example.com/robots.txt`）に配置されているファイルです。
このファイルは、{{Glossary("crawler", "クローラー")}} からウェブサイト全体または指定されたリソースへのアクセスを許可するか、禁止するかを決定します。
厳格な `robots.txt` ファイルを設定することで、クローラーによる帯域幅の消費を防ぐことができます。

サイト管理者は、クローラーが特定のパス（およびそのパス内のすべてのファイル）や特定のファイルを検出できないように設定できます。
これは、これらのリソースが検索エンジンにインデックス登録されたり、検索結果として表示されたりすることを防ぐために行われることがよくあります。

クローラーによるリソースへのアクセスが許可されている場合、それらのリソースに対して[`<meta name="robots">`](/ja/docs/Web/HTML/Reference/Elements/meta/name/robots) 要素（一般に「robots タグ」と呼ばれます）や HTTP の {{HTTPHeader("X-Robots-Tag")}} ヘッダーを通じて、それらのリソースに対する[インデックス作成ルール](/ja/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#directives)を定義できます。
検索関連のクローラーは、これらのルールを使用して、リソースをどのようにインデックス化し検索結果に表示するか、あるいは特定のリソースに対するクロール頻度を時間経過とともに調整するかを決定します。

## 関連情報

- [robots.txt の設定](/ja/docs/Web/Security/Practical_implementation_guides/Robots_txt)セキュリティガイド
- {{Glossary("Search engine", "検索エンジン")}} - 用語
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [How Google interprets the robots.txt specification](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec) - developers.google.com
- https://www.robotstxt.org
- [Robots.txt](https://ja.wikipedia.org/wiki/Robots.txt) - ウィキペディア
