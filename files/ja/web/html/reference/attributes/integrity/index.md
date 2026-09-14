---
title: "HTML 属性: integrity"
short-title: integrity
slug: Web/HTML/Reference/Attributes/integrity
l10n:
  sourceCommit: fef6630e9b90f9794d3194ea8389ff70599c6884
---

**`integrity`** 属性は、開発者がリンクされたスクリプトやスタイルシートに特定のコンテンツを持っていることを保証するための仕組みを提供します。ブラウザーは、そのリソースに実際にそのコンテンツを持っているかどうかを調べ、持っていない場合はリソースの読み込みを拒否します。

この防御策は、攻撃者がスクリプトやスタイルシートを提供するドメインへのアクセス権を取得し、本来提供されるべきリソースを悪意のあるものに置き換えるという[サプライチェーン攻撃](/ja/docs/Web/Security/Attacks/Supply_chain_attacks)に対する防御策です。

## 解説

この属性は、{{htmlelement("script")}} または {{htmlelement("link")}} 要素にのみ適用できます。

この属性は 1 つ以上の要素で構成されており、それぞれの要素は以下の要素で構成されています。

- {{glossary("hash function", "暗号ハッシュ関数")}}の識別子。3 つのハッシュ関数に対応しています。強度の低い順に、SHA-256、SHA-384、SHA-512 となります。
- 指定されたハッシュ関数を用いてリソースのコンテンツをハッシュ化した結果。

ブラウザーが `integrity` 属性が設定されたリソースをダウンロードする際、まず、利用可能な中で最も強力なハッシュ関数を使用して生成されたハッシュのセットを選択します。つまり、この属性に SHA-256 と SHA-384 で生成された値が含まれている場合、SHA-384 を使用して生成されたハッシュのみが使用されます。

その後、ブラウザーは指定された関数を使用してリソースのコンテンツのハッシュ値を計算し、その結果を指定されたすべての値と比較します。実際の値が指定された値のいずれかと一致する場合、ブラウザーはそのリソースを読み込みますが、一致しない場合は読み込みを拒否します。

詳しくは、[サブリソース完全性](/ja/docs/Web/Security/Defenses/Subresource_Integrity)ガイドをご覧ください。

## 値

この属性の値は、空白で区切られた成分のリストで構成され、それぞれの成分は次のいずれかの形式をとります。

- `sha256-HASH_VALUE`
- `sha384-HASH_VALUE`
- `sha512-HASH_VALUE`

それぞれの場合で、`-` の前にある部分は、使用されている{{glossary("hash function", "ハッシュ関数")}}を識別するものであり、`HASH_VALUE` は、指定されたハッシュ関数を用いてリソースをハッシュ化した結果の {{glossary("base64")}} エンコード方式です。

## 例

### 様々なハッシュ関数を設定

以下の {{htmlelement("script")}} 要素には、`integrity` 属性が含まれており、その値は SHA-256、SHA-384、SHA-512 を使用してそれぞれ計算された 3 つの値となっています。

ブラウザーは、自身が対応している最も強力なアルゴリズムを用いて計算された値を選択します。現行ブラウザーはすべて SHA-512 に対応しているため、ブラウザーは `sha512-` という値を選択することになります。ブラウザーはファイルの内容を SHA-512 でハッシュ化し、その結果を `sha512-` という値と比較し、両者が一致する場合にのみファイルを読み込みます。

この場合、複数の値を指定することで、すべてのハッシュ関数を対応していないブラウザーでもウェブサイトが正常に動作することができるようになります。

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha256-NmUxNTFiMDUzZGIwZjcwZDIyYTc5NTA4ZmQyNT
  sha384-Tk2Yjg3YmYzMWNkZTdhMTFkM2FlNDg4ZjE3MzEzNTk3ZDlh
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"
  crossorigin="anonymous"></script>
```

なお、この例および以降の例では、簡潔にするためにハッシュ値の一部を省略しています。

### 異なるハッシュ値を設定

以下の {{htmlelement("script")}} 要素には、SHA-512 アルゴリズムを用いて計算された 2 つの異なる値が記載されている `integrity` 属性が設定されています。これらの異なる値は、リンク先のファイルの代替コンテンツを反映しています。

リンク先のファイルの SHA-512 ハッシュが、指定された値のいずれかと一致する場合、ブラウザーはそのファイルを読み込みます。

これにより、`cdn.example.com` のサーバーは、そのファイルの 2 つのバージョンのいずれかを返することができる。

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha512-ZmQ5NjNiYWJjYTM3MjRhMGI4MTQzNWRmZTZkZGYyMzQyOGYYTZkYjBm
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"
  crossorigin="anonymous"></script>
```

### `<link>` 要素に `integrity` 属性を設定

以下の {{htmlelement("link")}} 要素は、このスタイルシートを読み込み、`integrity` 属性を記載しています。この属性には 6 つの値があり、リンク先のファイルの 2 つの可能性のあるコンテンツ（それぞれ 3 つの異なるハッシュ関数を用いて計算されたもの）を反映しています。

ブラウザーは、自身が対応している最も強力なハッシュ関数を使用して計算された値のセットを選択します。現行のブラウザーでは、これは 2 つの `sha512-` 値となります。

その後、ダウンロードしたファイルのハッシュ値を SHA-512 を使用して計算し、その結果を両方の `sha512-` 値と比較します。どちらかと一致した場合、ブラウザーはそのリソースを読み込みます。

```html
<link
  rel="stylesheet"
  href="https://cdn.example.com/style.css"
  integrity="
  sha256-NmUxNTFiMDUzZGIwZjcwZDIyYTc5NTA4ZmQyNT
  sha256-OTcyMGZkY2Y3NGZhZjUwNWU5NGQ0ZWJhYWVhND
  sha384-Tk2Yjg3YmYzMWNkZTdhMTFkM2FlNDg4ZjE3MzEzNTk3ZDlh
  sha384-ZTdhYjQ2NTE5OTg0Yjc2ZDU2MDMxMDUxY2Y5NDMxYzI5NjA
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2
  sha512-IxZTcwZjE2ZjU3MzE4NWM5ODU4ZmJkYjBlYzBhYzFkYzU0OGJmM2ZkN"
  crossorigin="anonymous" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サブリソース完全性](/ja/docs/Web/Security/Defenses/Subresource_Integrity)
- [サプライチェーン攻撃](/ja/docs/Web/Security/Attacks/Supply_chain_attacks)
