---
title: caret-shape
slug: Web/CSS/Reference/Properties/caret-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

**`caret-shape`** は [CSS](/ja/docs/Web/CSS) プロパティで、編集可能な要素に現れるマーカーである**挿入カーソル**の形状を設定します。このマーカーは、次の文字が挿入または削除される位置を示します。

{{InteractiveExample("CSS デモ: caret-shape")}}

```css interactive-example-choice
caret-shape: auto;
```

```css interactive-example-choice
caret-shape: bar;
```

```css interactive-example-choice
caret-shape: block;
```

```css interactive-example-choice
caret-shape: underscore;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div>
    <label for="example-element">テキストフィールドを編集:</label>
    <input id="example-element" type="text" value="サンプルテキスト" />
  </div>
</section>
```

```css interactive-example
div {
  text-align: left;
}

#example-element {
  font-size: 1.2rem;
  padding: 8px;
  width: 300px;
}
```

## 構文

```css
/* キーワード値 */
caret-shape: auto;
caret-shape: bar;
caret-shape: block;
caret-shape: underscore;

/* グローバル値 */
caret-shape: inherit;
caret-shape: initial;
caret-shape: revert;
caret-shape: revert-layer;
caret-shape: unset;
```

### 値

- `auto`
  - : デフォルト値です。ブラウザーがカーソルの形状を決定します。これは通常、プラットフォームの慣習に従いますが、コンテキストによって変更されることがあります。

- `bar`
  - : キャレットは挿入位置に細い垂直線として現れ、文字の上ではなく文字の間に配置されます。

- `block`
  - : キャレットは、挿入位置の直後の文字と重なる矩形として現れます。 次の文字がない場合、最後の文字の後に出現します。

- `underscore`
  - : キャレットは、挿入位置の直後の文字の下に細い水平線として現れます。次の文字がない場合、最後の文字の後に出現します。

## 解説

挿入キャレットは、入力時にテキストが挿入される位置を示す点滅するカーソルです。 様々なキャレットの形状は、現在の編集モードに関する視覚的なフィードバックを提供したり、視覚的なカスタマイズを可能にします。

### 編集モードとキャレットの形状

テキストエディターは通常、次の 2 つのモードのどちらかで操作します。

- **挿入モード**: 新しい文字はキャレットの位置に挿入され、既存のテキストは行末方向へと押し出されます。この動作はほとんどの現行のアプリケーションにおけるデフォルトの動作です。
- **上書きモード**: 新しい文字は既存の文字の間に挿入されるのではなく、キャレット位置の既存の文字を置き換えます。このモードは多くの場合、<kbd>Insert</kbd> キーで切り替えられます。

さまざまなキャレットの形状には、次のような伝統的な用途があります。

- **線形キャレット**は文字間に配置され、現行のインターフェイスで最も一般的です。
- **箱型キャレット**は次の文字の上に重なり、多くの場合、ターミナルアプリケーションや上書きモードを示すために使用されています。
- **下線キャレット**は文字の下に現れ、タイプライターを模倣したり下線付きテキスト入力スタイルを再現するなど、特定のデザイン美学に有益です。

### キャレットの位置指定と動作

`caret-shape` プロパティはキャレットの視覚的な表示方法に影響を与えますが、テキスト内の論理的な位置は変更しません。キャレットは、その視覚的な形状にかかわらず、常に文字間の挿入位置を表します。

### 書字方向との関係

キャレットの形状は、テキストの {{cssxref("writing-mode")}} に適応します。縦書きモードでは、線形キャレットは水平になり、下線キャレットはテキストの方向に対して相対的に適切に位置に調整されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### アニメーションキャレットのあるレトロなターミナル

この例では、`caret-shape: block` とアニメーション付きキャレット色を使用して、境界線を使用する従来の手法に置き換えるヴィンテージ風ターミナルインターフェイスを作成する方法を示しています。

重要な点は、従来の境界線ベースの手法ではなく、現行のキャレットのプロパティを使用することです。キャレットをブロック図形に設定し、デフォルトの点滅を無効にし、自分自身で独自のカスタムアニメーションを作成します。

#### HTML

```html
<label for="terminal">コマンドを入力</label>
<div class="old-screen">
  <span>></span>
  <textarea id="terminal" class="terminal-input"></textarea>
</div>
```

#### CSS

```css hidden
label {
  background: #092104;
  display: block;
  padding: 10px 20px;
  color: #00ad00;
  font-weight: bold;
  font-family: monospace;
}

.old-screen {
  background: repeating-linear-gradient(
    #092104,
    #092104 2px,
    #123208 2px,
    #123208 4px
  );
  height: 140px;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  font-family: monospace;
}

span {
  display: inline-block;
  padding: 2px 5px;
  color: #00ad00;
  font-weight: bold;
  margin-right: 8px;
}

.terminal-input {
  background: transparent;
  height: 100%;
  border: none;
  color: #00ad00;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  flex: 1;
  resize: none;
}
```

```css
.terminal-input {
  caret-shape: block;
  caret-animation: manual;
  animation: old-caret 2s infinite;
}

@keyframes old-caret {
  0%,
  50% {
    caret-color: #00ad00;
  }
  75%,
  100% {
    caret-color: transparent;
  }
}
```

#### 結果

{{EmbedLiveSample('Retro_terminal_with_animated_caret', 550, 215)}}

### 下線キャレットのコンソールインターフェイス

この例では、`caret-shape: underscore` を 使用して、下線カーソルがターミナルの美学を補完するコンソールスタイルのインターフェイスを作成する方法を示しています。

#### HTML

```html
<label for="console">コマンドを入力</label>
<div class="console-demo">
  <div class="console-output">
    <p>user@host:css-ui-4 $ ls -a</p>
    <p>. .. Overview.bs Overview.html</p>
  </div>
  <div class="console-input">
    <span class="prompt">user@host:css-ui-4 $ </span>
    <input type="text" id="console" class="console" value="cd" />
  </div>
</div>
```

#### CSS

```css hidden
label {
  background: #2a2a2c;
  color: white;
  display: block;
  padding: 10px 20px;
  font-weight: bold;
  font-family: monospace;
}

.console-demo {
  background: black;
  color: white;
  font-family: monospace;
  padding: 10px 20px;
  height: 60px;
}

.console-output {
  margin-bottom: 0.5rem;
}

.console-output p {
  margin: 0 0.25rem;
}

.console-input {
  display: flex;
  align-items: center;
}

.prompt {
  margin-right: 0;
}

.console {
  background: transparent;
  border: none;
  color: white;
  padding-left: 1ch;
  font-family: inherit;
  outline: none;
  flex: 1;
}
```

```css
.console {
  caret-shape: underscore;
}
```

#### 結果

{{EmbedLiveSample('Console_interface_with_underscore_caret', 550, 115)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("caret-color")}}, {{cssxref("caret-animation")}}
- {{cssxref("caret")}} 一括指定
- [CSS 基本ユーザーインターフェイス](/ja/docs/Web/CSS/Guides/Basic_user_interface)モジュール
