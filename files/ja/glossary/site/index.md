---
title: Site (サイト)
slug: Glossary/Site
l10n:
  sourceCommit: ed947b2c608428b62a60f07d09dc543f732dc09b
---

非公式には、 _サイト_ はウェブサイト、すなわちウェブページの集合であり、同じドメインから提供されるもので、単一の組織によって管理されているものです。

ブラウザーは時として、異なるサイト同士を正確に区別する必要があります。例えば、ブラウザーは [SameSite](/ja/docs/Web/HTTP/Headers/Set-Cookie/SameSite) クッキーを、それを設定した同じサイトにしか送信してはなりません。

このより正確な定義では、サイトはドメイン名の登録可能なドメイン部分によって決定されます。登録可能なドメインは、[公開接尾辞リスト](https://publicsuffix.org/list/)の項目と、その直前のドメイン名の部分から構成されます。つまり、たとえば、`theguardian.co.uk`、`sussex.ac.uk`、`bookshop.org` はすべて登録可能なドメインということになります。

この定義に従えば、`support.mozilla.org` と `developer.mozilla.org` は同じサイトの一部です。 `mozilla.org` が登録可能なドメインだからです。

文脈によっては、サイトを区別するときにスキームを考慮することもあります。この場合、`http://vpl.ca` と `https://vpl.ca` は異なるサイトとなります。スキームを含めると、安全でない (HTTP) サイトが安全な (HTTPS) サイトと同じサイトとして扱われるのを防ぐことができます。スキームを考慮した定義は、 _schemeful same-site_ と呼ばれることもあります。このより厳しい定義は、 [SameSite](/ja/docs/Web/HTTP/Headers/Set-Cookie/SameSite) クッキーの処理に関するルールで適用されています。

## 例

これらは、登録可能なドメインが `mozilla.org` であることから、同じサイトであると考えられます。

- `https://developer.mozilla.org/ja/docs/`
- `https://support.mozilla.org/ja/`

これらは、ポートは関係ないので、同じサイトです。

- `https://example.com:8080`
- `https://example.com`

これらは、 2 つの URL の登録可能なドメインが異なるため、同じサイトではありません。

- `https://developer.mozilla.org/ja/docs/`
- `https://example.com`

これらは、同じサイトであったり、スキームが考慮されれば異なるサイトであったりします。

- `http://example.com`
- `https://example.com`

## 関連情報

- [URL とは何か](/ja/docs/Learn/Common_questions/What_is_a_URL)
- {{Glossary("Origin")}}
- [同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)
