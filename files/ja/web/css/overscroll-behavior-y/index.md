---
title: overscroll-behavior-y
slug: Web/CSS/overscroll-behavior-y
---

{{CSSRef}}

**`overscroll-behavior-y`** は CSS のプロパティで、スクロール領域の垂直方向の境界に達したときのブラウザーの挙動を設定します。

全体的な説明は {{cssxref("overscroll-behavior")}} を参照してください。

```css
/* キーワード値 */
overscroll-behavior-y: auto; /* 既定値 */
overscroll-behavior-y: contain;
overscroll-behavior-y: none;

/* グローバル値 */
overscroll-behavior-y: inherit;
overscroll-behavior-y: initial;
overscroll-behavior-y: unset;
```

## 構文

`overscroll-behavior-y` プロパティは、次の値の一覧のうち一つのキーワードで指定します。

### 値

- `auto`
  - : スクロールの末端における既定の振る舞いが通常通りに発生します。
- `contain`
  - : この値が設定された要素の内部では、スクロールの末端における既定の振る舞いが見られますが、隣接するスクロール領域に対するスクロール連鎖はありません。例えば、基底となる要素はスクロールしません。
- `none`
  - : 隣接するスクロール領域に対するスクロール連鎖はなく、スクロールの末端における既定の振る舞いが抑制されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 背後にある要素の縦スクロールの抑止

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

完全な例と説明については、 {{cssxref("overscroll-behavior")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [スクロールを制御する: 引いて更新や末端の効果のカスタマイズ](https://developers.google.com/web/updates/2017/11/overscroll-behavior#demo)
- The mapped logical properties: {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-block")}}
