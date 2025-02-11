---
title: PI パラメーター
slug: Web/XML/XSLT/Guides/PI_Parameters
original_slug: Web/XSLT/Guides/PI_Parameters
l10n:
  sourceCommit: 9f325923caffac2d0239773d4562303fd02ea30a
---

{{XsltSidebar}}

### 概要

XSLT は実行時にパラメーターをスタイルシートに渡すという概念に対応しています。これにより当面は JavaScript で {{domxref("XSLTProcessor")}} を使用することが可能です。しかし、 `<?xml-stylesheet?>` 処理命令 (PI) を使用するときは、パラメーターを提供する方法がありませんでした。

これを解決するために 2 つの新しい PI 、つまり `<?xslt-param?>` および `<?xslt-param-namespace?>` が [Firefox 2](/ja/docs/Mozilla/Firefox/Releases/2)（詳細については[対応バージョン](#対応バージョン)を参照）で実装されています。どちらの PI にも、`xml-stylesheet` PI と同じ方法で「擬似属性」を含めることができます。

次のドキュメントは "color" と "size" の 2 つのパラメーターをスタイルシート "style.xsl" に渡します。

```xml
<?xslt-param name="color" value="blue"?>
<?xslt-param name="size" select="2"?>
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

これらの PI は JavaScript で `XSLTProcessor` オブジェクトを使用して変換が行われても効果がありません。

### 処理の指示

`xslt-param` および `xslt-param-namespace` PI の属性は、[xml-stylesheet](https://www.w3.org/TR/xml-stylesheet/) で定義されている規則を使用して解析されます。認識できない属性はすべて無視する必要があります。属性の解析は、 `xml-stylesheet` の構文に従う限り、認識できない属性が存在するせいで失敗してはなりません。

`xslt-param` と `xslt-param-namespace` PI の両方はドキュメントのプロローグ、つまり最初の要素タグの前になければなりません。プロローグ内のすべての PI は、`xml-stylesheet` PI の前後に発生する必要があります。

複数の `xml-stylesheet` PI がある場合、パラメーターはすべてのスタイルシートに適用され、その結果すべてのスタイルシートが XSLT 仕様に従って単一のスタイルシートにインポートされます。複数の `xml-stylesheet` XSLT PI は現在 Firefox では対応していません。

#### xslt-param

`xslt-param` PI は 4 つの属性をサポートしています。

- `name`
  - : パラメーター名のローカル名部分。属性の構文チェックは行われませんが、有効な [NCName](https://www.w3.org/TR/REC-xml-names/#NT-NCName) でない場合は、スタイルシートのどのパラメーターにも一致しません。
- `namespace`
  - : パラメーター名の名前空間。属性の構文チェックは行われません。
- `value`
  - : パラメーターの文字列値を格納します。属性の値はパラメーターの値として使用されます。データ型は常に最適です。
- `select`
  - : パラメーターの [XPath](/ja/docs/Web/XPath) 式。属性の値は XPath 式として解析されます。式を評価した結果はパラメーターの値として使用されます。

`name` 属性がないか空の場合、PI は無視されます。

`namespace` 属性がないか空の場合、null 名前空間が使用されます。

スタイルシートに存在しない (またはスタイルシート内の変数である) パラメーター名を指定するのはエラーではありません。PI は単に無視されます。

`value` と `select` の両方が存在する場合、または `value` も `select` も存在しない場合、PI は無視されます。

`value="..."` はアポストロフィと引用文字の両方を含むことができるので、厳密には `select="'...'"` と等しくないことに注意してください。

##### 例

パラメーター 'color' を文字列 'red' に設定します。

```xml
<?xslt-param name="color" value="red"?>
```

パラメーター 'columns' を 2 に設定します。

```xml
<?xslt-param name="columns" select="2"?>
```

パラメーター 'books' を null 名前空間のすべての `<book>` 要素を含むノードセットに設定します。

```xml
<?xslt-param name="books" select="//book"?>
```

パラメーター 'show-toc' を真偽値 `true` に設定します。

```xml
<?xslt-param name="show-toc" select="true()"?>
```

##### select 属性コンテキスト

次のコンテキストは、**select** 属性の式の解析と評価に使用されます。

- コンテキストノードは、スタイルシートを実行するときに使用される初期カレントノードとして使用されるノードです
- コンテキストポジションは、スタイルシートを実行する際に使用される初期カレントノードリスト内のコンテキストノードの位置です
- コンテキストサイズは、スタイルシートを実行する際に使用される初期の現在のノードリストのサイズです
- 変数はありません
- 関数ライブラリーは標準の XPath 関数ライブラリーです。
- 名前空間宣言は `xslt-param-namespace` PI によって決まります。以下を参照してください

**select** 属性が解析または実行に失敗した場合、PI は無視されます (特に、**value** 属性に戻ることはありません)。

#### xslt-param-namespace

`xslt-param-namespace` は 2 つの属性を使用します。

- prefix
  - : マッピングされている接頭辞
- namespace
  - : 接頭辞がマップされる名前空間

`xslt-param-namespace` PI は、それに続くすべての `xslt-param` の select 属性の式に影響します。 これは、`xslt-param-namespace` と `xslt-param` PI の間にコメントや他の PI などの他のノードがある場合でも適用されます。

複数の PI が同じ接頭辞を使用するのはエラーではなく、新しい PI はすべて接頭辞がマップする名前空間を変更するだけです。

**接頭辞**がないか、空もしくは無効な NCName と等しい場合、PI は無視されます。

**名前空間**がない場合、PI は無視されます。**名前空間**が空の場合、接頭辞マッピングは削除されます。

##### 例

パラメーター 'books' を 'http\://www\.example.org/myNamespace' 名前空間のすべての `<book>` 要素を含むノードセットに設定します。

```xml
<?xslt-param-namespace prefix="my" namespace="http://www.example.org/myNamespace"?>
<?xslt-param name="books" select="//my:book"?>
```

### 対応バージョン

Firefox 2.0.0.1 以降で対応しています。**value** 属性は Firefox 2 では対応していますが、2.0 リリースの一部の式では **select** 属性がクラッシュします。

### 可能性のある将来の開発

式に XSLT 関数を許可する必要がありますか？ `document()` は役に立ちそうですが、`generate-id()` が同じ文書に対して同じ文字列を生成しなければならない不変条件を維持するのは難しいようです。

XSLT スタイルシートで URL パラメーターをクエリーするとどうなりますか？ 例えば、それらを指定された \<xsl:param>に渡します。
