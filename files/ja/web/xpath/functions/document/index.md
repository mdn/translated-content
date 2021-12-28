---
title: document
slug: Web/XPath/Functions/document
tags:
  - XSLT
  - XSLT_Reference
translation_of: Web/XPath/Functions/document
---
{{ XsltRef() }}

`document` は、外部の文書、または複数の外部の文書からノード集合を見つけ、結果のノード集合を返します。

## 構文

    document(URI [,node-set] )

## 引数

- `URI`
  - : 取得する文書の絶対 URI または相対 URI。 URI にはフラグメント識別子を含むこともあります。
- `node-set` (省略可)
  - : 返却する外部文書内のノードの集合を指す式です。

## 返値

ノード集合です。

## メモ

- URI にフラグメント識別子が含まれ、そのフラグメントが外部文書で識別できる場合、そのフラグメントが `node-set` 引数の式のルートとして扱われます。`node-set` 引数を省略すると、フラグメント全体が返されます。

<!---->

- `URI` 引数がノード集合で第 2 引数が存在する場合、ノード集合の各ノードは別個の URI として評価され、返されたノード集合は `document` 関数が複数回 (毎回、関数呼び出しで指定されたのと同じ 2 番目の引数を使用) 呼び出されたかのようになり、結果のノード集合は 1 つのノード集合に連結されていました。

<!---->

- 他の特定の条件が特定の挙動と共に存在します。詳細については、XSLT 1.0 のマニュアルを参照してください。

<!---->

- URI は XSL 文書に関連するため、`document("")` は現在の文書のルートノードを返します。

この関数は XPath への XSLT 固有の追加です。コア XPath 関数ライブラリの一部ではありません。

## 定義

[XSLT 1.0 12.1](https://www.w3.org/TR/xslt#function-document)

## Gecko の対応

対応済み。
