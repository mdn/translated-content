---
title: Site (サイト)
slug: Glossary/Site
l10n:
  sourceCommit: d7a0ef33dfce20818a160557b5a72d6565cec254
---

非公式には、 _サイト_ はウェブサイト、すなわちウェブページの集合であり、同じドメインから提供されるもので、単一の組織によって管理されているものです。

ブラウザーは時として、異なるサイト同士を正確に区別する必要があります。例えば、ブラウザーは [`SameSite`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) クッキーを、それを設定した同じサイトにしか送信してはなりません。

このより正確な定義では、サイトはドメイン名の登録可能なドメイン部分によって決定されます。登録可能なドメインは、[公開接尾辞リスト](https://publicsuffix.org/list/)の項目と、その直前のドメイン名の部分から構成されます。つまり、たとえば、`theguardian.co.uk`、`sussex.ac.uk`、`bookshop.org` はすべて登録可能なドメインということになります。

この定義に従えば、`support.mozilla.org` と `developer.mozilla.org` は同じサイトの一部です。 `mozilla.org` が登録可能なドメインだからです。

文脈によっては、サイトを区別するときにスキームを考慮することもあります。この場合、`http://vpl.ca` と `https://vpl.ca` は異なるサイトとなります。スキームを含めると、安全でない (HTTP) サイトが安全な (HTTPS) サイトと同じサイトとして扱われるのを防ぐことができます。スキームを考慮した定義は、 _schemeful same-site_ と呼ばれることもあります。このより厳しい定義は、[`SameSite`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) クッキーの処理に関するルールで適用されています。

> [!NOTE]
> ブラウザーは、リソースの{{Glossary("Origin", "オリジン")}}に基づいて、セキュリティ上の判断（例えば、スクリプトがアクセスできるリソースを決定するなど）を行うことがあります。これは「サイト」という概念よりも制限が厳しく、スキーム、ドメイン全体、およびポートを含みます。詳しくは[同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)も参照してください。

## 例

これらは、登録可能なドメインが `mozilla.org` であることから、同じサイトであるとみなされます。

- `https://developer.mozilla.org/ja/docs/`
- `https://support.mozilla.org/ja/`

ポート番号はサイトの判定時には無視されるため、これらは同じサイトであるとみなされます。

- `https://example.com:8080`
- `https://example.com`

これらは、 2 つの URL の登録可能なドメインが異なるため、同じサイトではありません。

- `https://developer.mozilla.org/ja/docs/`
- `https://example.com`

これらは、同じサイトであったり、スキームが考慮されれば異なるサイトであったりします。

- `http://example.com`
- `https://example.com`

## 関連情報

- [URL とは何か](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- 関連用語:
  - {{Glossary("Origin", "オリジン")}}
  - {{Glossary("Registrable domain", "登録可能なドメイン")}}
- [同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)
