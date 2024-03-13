---
title: The Importance of Correct HTML Commenting
slug: orphaned/The_Importance_of_Correct_HTML_Commenting
---

HTML を [標準モード](/ja/Mozilla's_DOCTYPE_sniffing) で記述する場合、不正確に書かれたコメントによってページの表示が崩れ、コンテンツの一部または全体がコメントアウトされた状態になってしまいます。XHTML や XML を記述する場合、不正確なコメントが含まれると、ドキュメントそのものが表示できなくなります。

### HTML 4.01

_[W3C HTML 4.01 Recommendation Section 3.2.4 - Comments](http://www.w3.org/TR/html4/intro/sgmltut.html#h-3.2.4) より引用:_

> マークアップ宣言の開始区切り文字 ("\<!") とコメント開始区切り文字 ("--") の間に空白を含むことはできませんが、コメント終了区切り文字 ("--") とマークアップ宣言の終了区切り文字 (">") の間に含めることはできます。一般的な間違いとして、ハイフンの連続 ("---") をコメント内に含んでしまうことがあります。ページ作者は、コメント内に 2 つ以上の連続するハイフンを含めないよう注意すべきです。

#### 例

以下のコメントは HTML では適切なコメントです。

```
<!-- valid html comment -->
<!-- valid html comment -- >
```

以下のコメントは HTML では不適切なコメントです。

```
<!-- invalid -- html comment -->
```

### XML

_[W3C XML 1.0 Recommendation Section 2.5 - Comments](http://www.w3.org/TR/REC-xml#sec-comments) より:_

> **定義:** コメントは、ドキュメント内で他のマークアップの外側のどの箇所にも出現することができます。さらに、文法によって許可されている場所であれば、ドキュメントタイプ宣言の内部に出現することも可能です。コメントはドキュメントの文字データには含まれません。XML プロセッサは、アプリケーションがコメント内のテキストを取得できるようにする場合がありますが、それは必須ではありません。互換性のため、文字列 "--" (二重ハイフン) をコメント内に含めることはできません。パラメータ実体参照はコメント内では認識されるべきではありません。
>
> ```
> [15] Comment ::= '<!--' ((Char - '-') | ('-' (Char - '-')))* '-->'
> ```

XML におけるコメントの文法に書かれている通り、コメントは以下のような形式になります。

```
<!-- characters excluding adjacent dashes -->
```

#### 例

以下のコメントは XML および XHTML では適切なコメントです。

```
<!-- valid xml/xhtml comment -->
```

以下のコメントは XML および XHTML では不適切なコメントです。

```
<!-- invalid -- xml comment -->
<!-- invalid xml comment --->
<!-- invalid xml comment -- >
```

### 参考資料

- [HTML 4.01 Recommendation: 3.2.4 - Comments](http://www.w3.org/TR/html4/intro/sgmltut.html#h-3.2.4)
- [XML Recommendation: 2.5 - Comments](http://www.w3.org/TR/REC-xml#sec-comments)
- [Firefox バグ 144432](https://bugzil.la/144432)
- [Firefox バグ 102127](https://bugzil.la/102127)

### 原文書の情報

- 最終更新日: May 19th, 2003
- 著作権: Copyright © 2001-2003 Netscape. All rights reserved.
