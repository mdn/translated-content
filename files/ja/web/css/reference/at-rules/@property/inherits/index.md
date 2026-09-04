---
title: inherits
slug: Web/CSS/Reference/At-rules/@property/inherits
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`inherits`** は [CSS](/ja/docs/Web/CSS) における {{cssxref("@property")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)の記述子で、登録された [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)がデフォルトで継承するかどうかを制御します。
これは必須の記述子です。なかったり無効であったりした場合、 `@property` ルール全体が無効となり無視されます。

## 構文

```css
/* カスタムプロパティが値を継承しない */
inherits: false;

/* カスタムプロパティが値を継承する */
inherits: true;
```

## 値

- `true`
  - : このプロパティはデフォルトで継承されます。
- `false`
  - : このプロパティはデフォルトで継承されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### カスタムプロパティの継承動作の設定

この例は、親要素から値を継承しないカスタムプロパティ `--my-color` を定義する方法を示しています。

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

[JavaScript](/ja/docs/Web/JavaScript) の {{domxref('CSS.registerProperty_static', 'CSS.registerProperty()')}} を使用すると次のようになります。

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他の {{cssxref("@property")}} 記述子: {{cssxref("@property/initial-value", "initial-value")}} および {{cssxref("@property/syntax","syntax")}}
- [CSS プロパティと値 API](/ja/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS 描画 API](/ja/docs/Web/API/CSS_Painting_API)
- [CSS 型付きオブジェクトモデル](/ja/docs/Web/API/CSS_Typed_OM_API)
- [Houdini API](/ja/docs/Web/API/Houdini_APIs)
