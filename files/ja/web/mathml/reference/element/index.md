---
title: MathML 要素リファレンス
short-title: 要素
slug: Web/MathML/Reference/Element
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

これは MathML 要素のアルファベット順リストです。これらはすべて {{domxref("MathMLElement")}} クラスを実装しています。

> [!NOTE]
> [MathML](/ja/docs/Web/MathML) のメインページで説明されているように、 MDN は [MathML Core](https://w3c.github.io/mathml-core/) を参照仕様として使用しています。しかし、一部のブラウザーでまだ実装されている古い機能も文書化しています。 [MathML 4](https://w3c.github.io/mathml/) には、これらの機能やその他の機能の詳細が記載されています。

## MathML 要素（アルファベット順）

### math

- {{MathMLElement("math")}} （最上位要素）

### A

- {{MathMLElement("maction")}} {{deprecated_inline}} （部分式にバインドされたアクション）
- {{MathMLElement("annotation")}} （データ注釈）
- {{MathMLElement("annotation-xml")}} （XML 注釈）

### E

- {{MathMLElement("menclose")}} {{non-standard_inline}} （囲みコンテンツ）
- {{MathMLElement("merror")}} ）（囲み構文エラーメッセージ）

### F

- {{MathMLElement("mfenced")}} {{non-standard_inline}}{{deprecated_inline}} （括弧）
- {{MathMLElement("mfrac")}} （分数）

### I

- {{MathMLElement("mi")}} （識別子）

### M

- {{MathMLElement("mmultiscripts")}} （前置字とテンソル添字）

### N

- {{MathMLElement("mn")}} （数字）

### O

- {{MathMLElement("mo")}} （演算子）
- {{MathMLElement("mover")}} （真上付き）

### P

- {{MathMLElement("mpadded")}} （コンテンツまわりの空白）
- {{MathMLElement("mphantom")}} （予約スペースを持つ不可視コンテンツ）
- {{MathMLElement("mprescripts")}} （前置文字の区切り文字）

### R

- {{MathMLElement("mroot")}} （累乗根）
- {{MathMLElement("mrow")}} （グループ化された部分式）

### S

- {{MathMLElement("ms")}} （文字列リテラル）
- {{MathMLElement("semantics")}} （意味的注釈用のコンテナー）
- {{MathMLElement("mspace")}} （空白）
- {{MathMLElement("msqrt")}} （平方根）
- {{MathMLElement("mstyle")}} （書式変更）
- {{MathMLElement("msub")}} （下付き）
- {{MathMLElement("msup")}} （上付き）
- {{MathMLElement("msubsup")}} （下付き上付きの組）

### T

- {{MathMLElement("mtable")}} （表または行列）
- {{MathMLElement("mtd")}} （表または行列のセル）
- {{MathMLElement("mtext")}} （テキスト）
- {{MathMLElement("mtr")}} （表または行列の列）

### U

- {{MathMLElement("munder")}} （真下付き）
- {{MathMLElement("munderover")}} （真下付きと真上付きの組）

## MathML 要素（カテゴリー別）

### 最上位要素

- {{MathMLElement("math")}} （最上位要素）

### トークン要素

- {{MathMLElement("mi")}} （識別子）
- {{MathMLElement("mn")}} （数字）
- {{MathMLElement("mo")}} （演算子）
- {{MathMLElement("ms")}} （文字列リテラル）
- {{MathMLElement("mspace")}} （空白）
- {{MathMLElement("mtext")}} （テキスト）

### 一般レイアウト

- {{MathMLElement("menclose")}} {{non-standard_inline}} （囲みコンテンツ）
- {{MathMLElement("merror")}} ）（囲み構文エラーメッセージ）
- {{MathMLElement("mfenced")}} {{non-standard_inline}}{{deprecated_inline}} （括弧）
- {{MathMLElement("mfrac")}} （分数）
- {{MathMLElement("mpadded")}} （コンテンツまわりの空白）
- {{MathMLElement("mphantom")}} （予約スペースを持つ不可視コンテンツ）
- {{MathMLElement("mroot")}} （累乗根）
- {{MathMLElement("mrow")}} （グループ化された部分式）
- {{MathMLElement("msqrt")}} （平方根）
- {{MathMLElement("mstyle")}} （書式変更）

### スクリプトと制限要素

- {{MathMLElement("mmultiscripts")}} （前置字とテンソル添字）
- {{MathMLElement("mover")}} （真上付き）
- {{MathMLElement("mprescripts")}} （前置文字の区切り文字）
- {{MathMLElement("msub")}} （下付き）
- {{MathMLElement("msubsup")}} （下付き上付きの組）
- {{MathMLElement("msup")}} （上付き）
- {{MathMLElement("munder")}} （真下付き）
- {{MathMLElement("munderover")}} （真下付きと真上付きの組）

### 表形式の数式

- {{MathMLElement("mtable")}} （表または行列）
- {{MathMLElement("mtd")}} （表または行列のセル）
- {{MathMLElement("mtr")}} （表または行列の列）

### カテゴリー外の要素

- {{MathMLElement("maction")}} {{deprecated_inline}} （部分式にバインドされたアクション）

## 意味的注釈

- {{MathMLElement("annotation")}} （データ注釈）
- {{MathMLElement("annotation-xml")}} （XML 注釈）
- {{MathMLElement("semantics")}} （意味的注釈用のコンテナー）

## 関連情報

- [MathML](/ja/docs/Web/MathML)
- [MathML 属性リファレンス](/ja/docs/Web/MathML/Reference/Attribute)
