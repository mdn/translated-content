---
title: <xsl:number>
slug: Web/XML/XSLT/Reference/Element/number
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsl:number>` 要素は物事を順番に数えます。 また、番号をすばやく書式化するためにも使用できます。

### 構文

```xml
<xsl:number
  count=EXPRESSION
  level="single" | "multiple" | "any"
  from=EXPRESSION
  value=EXPRESSION
  format=FORMAT-STRING
  lang=XML:LANG-CODE
  letter-value="alphabetic" | "traditional"
  grouping-separator=CHARACTER
  grouping-size=NUMBER  />
```

### 必須属性

なし。

### 任意属性

- `count`
  - : ソースツリー内で連続して番号を付けるべき項目を指定します。XPath 式を使用します。
- `level`
  - : 順序番号を生成する際にソースツリーのレベルをどのように考慮すべきかを定義します。これには 3 つの有効な値があります：`single` 、`multiple` 、`any` 。既定値値は `single` です。
    - `single`
      - : リスト内の項目のように、ノードを兄弟順に番号付けします。プロセッサーは count 属性に一致する [`ancestor-or-self`](/ja/docs/Web/XML/XPath/Reference/Axes#ancestor-or-self) 軸の最初のノードに移動し、そのノードとそれに先行する count 属性にも一致するすべての兄弟 (それが存在する場合は `from` 属性に一致すると停止する) をカウントします。一致するものが見つからない場合、シーケンスは空のリストになります。
    - `multiple`
      - : ノードの階層位置 (例: 1.2.2.5 ) を反映する合成シーケンスとしてのノードの番号付け。 (ネストされた書式は `format` 属性で指定することができます (例：A.1.1) )。プロセッサーは現在のノードおよび現在のノード自体のすべての祖先 ([`ancestors`](/ja/docs/Web/XML/XPath/Reference/Axes#ancestor)) を調べ、 `from` 属性と一致するものに達したときに停止します（存在する場合）。このリスト内の `count` 属性に一致するノードごとに、プロセッサーはそれに先行して一致する兄弟数を数え、ノード自体に 1 を加算します。一致するものが見つからない場合、シーケンスは空のリストになります。
    - `any` (現時点では対応していません)
      - : レベルに関係なく、すべての一致するノードに順番に番号を付けます。 [`ancestor`](/ja/docs/Web/XML/XPath/Reference/Axes#ancestor)、 [`self`](/ja/docs/Web/XML/XPath/Reference/Axes#self)、および [`preceding`](/ja/docs/Web/XML/XPath/Reference/Axes#preceding) 軸すべてが考慮されます。プロセッサーは現在のノードから開始し、逆の文書順に進み、`from` 属性に一致する場合は停止します。 `count` 属性に一致するものが見つからない場合、シーケンスは空のリストになります。このレベルは現時点では対応していません。

- `from`
  - : 番号付けを開始または開始する場所を指定します。シーケンスは `from`属性に一致するノードの最初の子孫で始まります。
- `value`
  - : 与えられた形式を数値に適用します。これは標準 `<xsl:number>` 形式のいずれかでユーザーが入力した番号（ノード順序番号とは対照的に）を簡単にフォーマットする方法です。
- `format`
  - : 生成された番号の形式を定義します。
    - `format="1"`
      - : `1 2 3 . . .` (これは現時点でサポートされている唯一の形式です)
    - `format="01"`
      - : `01 02 03 . . . 09 10 11 . . .`
    - `format="a"`
      - : `a b c . . .y z aa ab . . .`
    - `format="A"`
      - : `A B C . . . Y Z AA AB . . .`
    - `format="i"`
      - : `i ii iii iv v . . .`
    - `format="I"`
      - : `I II III IV V . . .`

- `lang` (現時点ではサポートされていません)
  - : 文字ベースの番号書式で使用する言語のアルファベットを指定します。
- `letter-value`
  - : 文字を使用する番号付けシーケンスの間の曖昧さを解消します。いくつかの言語には文字を使用する複数の番号システムがあります。両方のシステムが同じトークンで始まる場合、あいまいさが発生する可能性があります。この属性の値は `alphabetic` または `traditional` です。既定値は `alphabetic` です。
- `grouping-separator`
  - : どの文字をグループ（たとえば千）の区切り文字として使用するかを指定します。既定値はカンマ (`,`) です。
- `grouping-size`
  - : 数値グループを構成する数字の桁数を示します。既定値は `3` です。

### 種類

命令で、テンプレート内に現れます。

## 仕様書

XSLT, section 7.7

## Gecko の対応

部分的に対応。上記のコメントを参照してください。
