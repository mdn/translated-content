---
title: robots.txt の構成
slug: Web/Security/Practical_implementation_guides/Robots_txt
l10n:
  sourceCommit: a3693d282028046f4e0dadf0b1aa068b407d1158
---

[`robots.txt`](/ja/docs/Glossary/Robots.txt) は、ロボット（検索エンジンのインデックス作成など）に対して、ウェブサイト上の特定のパスをクロールしないよう指示することで、その動作を指定するテキストファイルです。これはウェブサイトのルートディレクトリー内に配置されます。

## 問題

ウェブサイトの負荷を高める要因は数多くありますが、その一つにウェブクローラーが挙げられます。さらに、サイト全体に対するクロールを許可した場合、ウェブクローラーによって、検索対象となることが好ましくないリソースが検索結果に混入し、検索の利便性を低下させるおそれがあります。

## 解決策

`robots.txt` を使用すると、ウェブサイトの負荷を縮小し、検索結果に不適切なコンテンツが現れるのを防ぐことができます。このファイルの使用は任意であり、これらの目的のためにのみ使用しましょう。個人情報の漏洩を防ぐためや、ウェブサイトの一部を非表示にするために使用してはなりません。

このファイルを使用することで、検索エンジンの検索結果にページが現れないようにすることはできますが、攻撃者からウェブサイトを保護するものではありません。それどころか、意図せず攻撃者を手助けしてしまう可能性もあります。`robots.txt` は誰でもアクセスできるため、機密性の高いページのパスをそこに追加することで、潜在的な攻撃者にその場所を示してしまうことになるからです。

同時に、マルウェアロボットやメールアドレス収集ロボットなど、一部のロボットは `robots.txt` ファイルを無視することにも注意してください。

## 例

すべての検索エンジンによるサイトのクロールを停止するには、次のようにします。

```http
User-agent: *
Disallow: /
```

特定のディレクトリーのみを隠す場合は次のようにします（推奨されません）。

```http example-bad
User-agent: *
Disallow: /secret/admin-interface
```

## 関連情報

- HTTP {{HTTPHeader("X-Robots-Tag")}} ヘッダー
- HTML [`<meta name="robots">`](/ja/docs/Web/HTML/Reference/Elements/meta/name/robots) 要素（「ロボットタグ」）
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [About /robots.txt](https://www.robotstxt.org/robotstxt.html) - `robotstxt.org`
