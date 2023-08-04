---
title: "-moz-user-input"
slug: Web/CSS/-moz-user-input
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

Mozilla アプリケーションでは、 **`-moz-user-input`** はある要素がユーザの入力を受け付けるかどうかを決定します。

```css
/* キーワード値 */
-moz-user-input: none;
-moz-user-input: enabled;
-moz-user-input: disabled;

/* グローバル値 */
-moz-user-input: inherit;
-moz-user-input: initial;
-moz-user-input: unset;
```

{{HTMLElement("textarea")}} のようなユーザーからの入力を通常受け付ける要素では `-moz-user-input` の初期値は `enabled` です。

> **メモ:** `-moz-user-input` は、 CSS 3 の {{cssxref("user-input")}} プロパティの先行実装案の一つでしたが、これはまだ (実装を要求する) 勧告候補に達していません。類似のプロパティ `user-focus` が [CSS3 UI 仕様の前身であった初期の草稿](https://www.w3.org/TR/2000/WD-css3-userint-20000216) で提案されましたが、作業グループによって却下されました。

## 構文

### 値

- none
  - : 要素はユーザーからの入力に反応せず {{CSSxRef(":active")}} にならない。
- enabled
  - : 要素はユーザーからの入力を受け付ける。テキストボックスではこれが標準の動作。**この値は Firefox 60 以降は対応していませんので注意してください ([Firefox バグ 1405087](https://bugzil.la/1405087))。**
- disabled
  - : 要素はユーザーからの入力を受け付けない。しかし、これは `disabled` を true にするのとは等しくなく、要素は普通に (無効にならずに) 描画される。**この値は Firefox 60 以降は対応していませんので注意してください ([Firefox バグ 1405087](https://bugzil.la/1405087))。**

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 要素のユーザー入力の無効化

```css
input.example {
  /* ユーザーはテキストの選択はできますが変更はできません。 */
  -moz-user-input: disabled;
}
```

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("-moz-user-focus")}}
- {{CSSxRef("user-modify", "-moz-user-modify")}}
- {{CSSxRef("user-select", "-moz-user-select")}}
