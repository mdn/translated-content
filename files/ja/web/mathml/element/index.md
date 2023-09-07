---
title: MathML 要素リファレンス
slug: Web/MathML/Element
---

これは、MathML **プレゼンテーション** 要素のアルファベット順のリストです。

**プレゼンテーションマークアップ** という用語は、数学的表記のレイアウト構造を記述するために使用するのに対して、**コンテンツマークアップ** という用語は、その基礎をなす数学的な意味を提供します。これは、MarhML パーザーによる描画を想定するものではありません ([Firefox バグ 276028](https://bugzil.la/276028) 参照)。コンテンツマークアップについて詳しく学びたい場合は、 [MathML 3 仕様](http://www.w3.org/TR/MathML3/) の [第 4 章](http://www.w3.org/TR/MathML3/chapter4.html) を調べてください。

### math

- {{ MathMLElement("math") }} (トップレベル要素)

### A

- {{ MathMLElement("maction") }} (部分式にバインドされたアクション)
- {{ MathMLElement("maligngroup") }} (揃えグループ)
- {{ MathMLElement("malignmark") }} (揃えポイント)

### E

- {{ MathMLElement("menclose") }} (囲みコンテンツ)
- {{ MathMLElement("merror") }} (囲み構文エラーメッセージ)

### F

- {{ MathMLElement("mfenced") }} (括弧)
- {{ MathMLElement("mfrac") }} (分数)

### G

- {{ MathMLElement("mglyph") }} (非標準記号の表示)

### I

- {{ MathMLElement("mi") }} (識別子)

### L

- {{ MathMLElement("mlabeledtr") }} (表または行列のラベル付き行)
- {{ MathMLElement("mlongdiv") }} (割り算の筆算表記)

### M

- {{ MathMLElement("mmultiscripts") }} (前置字とテンソル添字)

### N

- {{ MathMLElement("mn") }} (数字)

### O

- {{ MathMLElement("mo") }} (演算子)
- {{ MathMLElement("mover") }} (真上付き)

### P

- {{ MathMLElement("mpadded") }} (コンテンツまわりの空白)
- {{ MathMLElement("mphantom") }} (予約スペースを持つ不可視コンテンツ)

### R

- {{ MathMLElement("mroot") }} (累乗根)
- {{ MathMLElement("mrow") }} (グループ化された部分式)

### S

- {{ MathMLElement("ms") }} (文字列リテラル)
- {{ MathMLElement("mscarries") }} (carries などのアノテーション)
- {{ MathMLElement("mscarry") }} (Single carry, {{ MathMLElement("mscarries") }} の子要素)
- {{ MathMLElement("msgroup") }} ({{ MathMLElement("mstack") }} および {{ MathMLElement("mlongdiv") }} 要素のグループ化された行)
- {{ MathMLElement("msline") }} ({{ MathMLElement("mstack") }} 要素内の水平線)
- {{ MathMLElement("mspace") }} (空白)
- {{ MathMLElement("msqrt") }} (平方根)
- {{ MathMLElement("msrow") }} ({{ MathMLElement("mstack") }} 要素の行)
- {{ MathMLElement("mstack") }} (スタック揃え)
- {{ MathMLElement("mstyle") }} (書式変更)
- {{ MathMLElement("msub") }} (下付き)
- {{ MathMLElement("msup") }} (上付き)
- {{ MathMLElement("msubsup") }} (下付き上付きの組)

### T

- {{ MathMLElement("mtable") }} (表または行列)
- {{ MathMLElement("mtd") }} (表または行列のセル)
- {{ MathMLElement("mtext") }} (テキスト)
- {{ MathMLElement("mtr") }} (表または行列の列)

### U

- {{ MathMLElement("munder") }} (真下付き)
- {{ MathMLElement("munderover") }} (真下付きと真上付きの組)

### 他の要素

- {{ MathMLElement("semantics") }} (セマンティックアノテーション用のコンテナ)
- [`<annotation>`](/ja/docs/MathML/Element/semantics) (Data アノテーション)
- [`<annotation-xml>`](/ja/docs/MathML/Element/semantics) (XML アノテーション)

## 関連情報

- [MathML](/ja/docs/Web/MathML)
- [MathML 属性リファレンス](/ja/docs/Web/MathML/Attribute)
