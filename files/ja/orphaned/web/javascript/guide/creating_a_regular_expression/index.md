---
title: 正規表現の作成
slug: orphaned/Web/JavaScript/Guide/Creating_a_Regular_Expression
original_slug: Web/JavaScript/Guide/Creating_a_Regular_Expression
---

## 正規表現の作成

正規表現は 2 つの方法で作ることができます。

- 次のように、正規表現リテラルを使用する。

```
var re = /ab+c/;
```

<dl><dd><dl><dd>正規表現リテラルでは、スクリプトが評価されるときにその正規表現をコンパイルします。正規表現を定数として残しておくときは、この方法を使用するとよりよいパフォーマンスが得られます。</dd></dl></dd></dl>

- 次のように、[RegExp](/ja/JavaScript/Reference/Global_Objects/RegExp) オブジェクトのコンストラクタ関数を呼び出す。

```
var re = new RegExp("ab+c");
```

<dl><dd><dl><dd>コンストラクタ関数を使用すると、実行時にその正規表現をコンパイルします。正規表現パターンが変わることがわかっている場合や、パターンがわからない場合、ユーザが入力するなど、別のソースからパターンを取得する場合はコンストラクタ関数を使用してください。</dd></dl></dd></dl>

{{ PreviousNext("JavaScript/Guide/Operators/Special_Operators", "JavaScript/Guide/Writing_a_Regular_Expression_Pattern") }}
