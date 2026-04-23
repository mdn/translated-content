---
title: "ARIA: math ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/math_role
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

`math` ロールは、コンテンツが数式を表すことを示します。

## 説明

`math` ロールを持つコンテンツは、[MathML](/ja/docs/Web/MathML) などのアクセシブルな形式、またはブラウザーやポリフィルライブラリーによってアクセシブルな形式に変換できる他の種類のテキスト表現でマークアップされることを意図しています。

残念ながら、MathML のブラウザーサポートは普遍的ではありません。数式の画像を使用することは最適ではありませんが、画像を使用する場合は、`math` ロールを使用してください。
数式の画像には、数式が話されるときと同じように数式を説明する `alt` 属性でラベル付けするようにしてください。

math 要素が表示のみの子要素を持ち、アクセシブル名が数式を伝えることを意図している場合、数式を表す文字列を提供するために [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用してください。math 要素に数式を伝えるナビゲート可能なコンテンツが含まれており、その数式に可視ラベルが存在する場合は、[`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を使用してください。それ以外の場合は、`aria-label` を使用して数式に名前を付けてください（例：`aria-label="ピタゴラスの定理"`）。

## 例

画像や非セマンティックな HTML を使用して等式を作成する場合は、`math` ロールを使用してください。

<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
   a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>

上記のピタゴラスの定理は、アクセシブルに以下のように書かれています：

```html
<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
  a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>
```

画像が使用された場合、`alt` 属性が `math` ロールと一緒に使用されます：

```html
<img src="pythagorean_theorem.gif" alt="a^{2} + b^{2} = c^{2}" role="math" />
```

## 仕様書

{{Specifications}}

## 関連情報

- [MDN の MathML](/ja/docs/Web/MathML) と [`<math>`](/ja/docs/Web/MathML/Reference/Element/math) 要素（HTML ではない）
- [MathML 仕様書](https://w3c.github.io/mathml/spec.html)
