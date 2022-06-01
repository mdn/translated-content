---
title: overflow-y
slug: Web/CSS/overflow-y
tags:
  - CSS
  - CSS プロパティ
  - CSS ボックスモデル
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.overflow-y
translation_of: Web/CSS/overflow-y
---
{{CSSRef}}

**`overflow-y`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ブロックレベル要素の内容が上下の境界からあふれた場合、どのように表示するのかを設定します。表示しないか、スクロールバーを表示するか、あふれさせるかを設定できます。

{{EmbedInteractiveExample("pages/css/overflow-y.html")}}

## 構文

```css
/* キーワード値 */
overflow-y: visible;
overflow-y: hidden;
overflow-y: clip;
overflow-y: scroll;
overflow-y: auto;

/* グローバル値 */
overflow-y: inherit;
overflow-y: initial;
overflow-y: revert;
overflow-y: unset;
```

`overflow-y` プロパティは、以下の値の一覧のうち一つのキーワードで指定します。

{{cssxref("overflow-x")}} が `hidden`, `scroll`, `auto` であり、このプロパティが `visible` (既定値) である場合は、暗黙的に `auto` と計算されます。

### 値

- `visible`
  - : 内容は切り取られず、パディングボックスの上下の辺よりも外側に表示される可能性があります。
- `hidden`
  - : 垂直方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。スクロールバーは表示されません。
- `clip` {{experimental_inline}}
  - : `hidden` と同様に、コンテンツは要素のパディングボックスに合わせて切り取られます。 `clip` と `hidden` の違いは、 `clip` キーワードがプログラム的なスクロールも含め、すべてのスクロールを禁止することです。ボックスはスクロールコンテナーにはならず、新しい整形コンテキストを始めることもありません。新しい整形コンテキストを始めたいのであれば、 {{cssxref("display", "display: flow-root", "#flow-root")}} を使用して実現することができます。
- `scroll`
  - : 垂直方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。ブラウザーは内容が実際に切り取られるかどうかにかかわらず、スクロールバーを表示します。 (これは内容が変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターははみ出す内容を印刷するかもしれません。
- `auto`
  - : ユーザーエージェントに依存します。内容がパディングボックス内に収まる場合は `visible` と同じように表示されますが、新しいブロック整形コンテキストを生成します。内容があふれる場合、デスクトップブラウザーはスクロールバーを表示します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### overflow-y の動作を設定

#### HTML

```html
<ul>
 - <code>overflow-y:hidden</code> — ボックスの外側のテキストを隠す
  <div id="div1">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

 - <code>overflow-y:scroll</code> — 常にスクロールバーを表示
  <div id="div2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

 - <code>overflow-y:visible</code> — 必要に応じてテキストをボックスの外に表示
  <div id="div3">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

 - <code>overflow-y:auto</code> — 多くのブラウザーでは <code>scroll</code> と同じ
  <div id="div4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

#### CSS

```css
#div1,
#div2,
#div3,
#div4 {
  border: 1px solid black;
  width:  250px;
  height: 100px;
}

#div1 { overflow-y: hidden; margin-bottom: 12px;}
#div2 { overflow-y: scroll; margin-bottom: 12px;}
#div3 { overflow-y: visible; margin-bottom: 120px;}
#div4 { overflow-y: auto; margin-bottom: 120px;}
```

### 結果

{{EmbedLiveSample("Setting_overflow-y_behavior", "100%", "780")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-x")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
