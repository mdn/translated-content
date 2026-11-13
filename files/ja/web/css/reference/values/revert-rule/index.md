---
title: revert-rule
slug: Web/CSS/Reference/Values/revert-rule
l10n:
  sourceCommit: c8990ddd46c4605793660e16edf6dda79300ca90
---

**`revert-rule`** は [CSS 全体のキーワード](/ja/docs/Web/CSS/Reference/Values/Data_types#css_全体のキーワード)で、プロパティのカスケードされた値を、現在の[スタイルルール](/ja/docs/Web/CSS/Guides/Syntax/Introduction#css_のルールセット)が存在しない場合に持っていたであろう値に戻します。その後、カスケードによって残りの宣言から値が決定されます。これは、同じ[カスケードレイヤー](/ja/docs/Web/CSS/Reference/At-rules/@layer)内の別のルール、異なる層のルール、異なる[スタイルオリジン](/ja/docs/Glossary/Style_origin)にあるルール、あるいは[デフォルト値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#デフォルト設定)（`inherited` または `initial`）である可能性があります。

[CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)の中で使用された場合（アニメーションオリジン）、`revert-rule` キーワードは {{cssxref("revert-layer")}} と同様に動作します。

このキーワードは、CSS 一括指定プロパティの {{cssxref("all")}} を含む、あらゆる CSS プロパティに適用できます。

## revert-rule と revert-layer と revert

`revert-rule`、{{cssxref("revert-layer")}}、{{cssxref("revert")}} の各キーワードは、それぞれカスケードを元に戻しますが、その粒度は異なります。

- {{cssxref("revert")}} は、現在の[スタイルオリジン](/ja/docs/Glossary/Style_origin)からすべての宣言を除去し、前のオリジンに（例えば、作成者スタイルからユーザーエージェントスタイルに）戻します。
- {{cssxref("revert-layer")}} は、現在の[カスケードレイヤー](/ja/docs/Web/CSS/Reference/At-rules/@layer)からすべての宣言を除去し、同じオリジン内の前のレイヤーに戻します。
- `revert-rule` は、現在のスタイルルールからの宣言のみが除去されます。同じカスケードレイヤーにあるその他のルールは、引き続き適用されます。

これにより、`revert-rule` は、同じレイヤー内にある他のルールの宣言はそのまま尊重しつつ、特定のルール内の特定の宣言を条件付きで無視するのに有益です。

## 例

### 以前のルールへ戻す

この例では、2 つのルールが同じ要素を対象としています。2 つ目のルールでは、`color` プロパティに対して `revert-rule` を使用しています。これにより、カスケード処理において、あたかも `p.special` ルールが存在しないかのように値が決定され、最初のルールで設定された値に戻ることになります。

#### HTML

```html
<p class="special">この段落には特別なスタイルが設定されています。</p>
```

#### CSS

```css hidden
body {
  font-family: system-ui;
}

@supports not (color: revert-rule) {
  body::before {
    content: "このブラウザーはまだ revert-rule キーワードに対応していません。";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

```css
p {
  color: blue;
  font-weight: bold;
}

p.special {
  color: revert-rule;
  border: 1px solid currentcolor;
}
```

#### 結果

{{EmbedLiveSample('Rolling back to the previous rule', '100%', 120)}}

この段落のテキストが `p` ルールに従って青色になっているのは、`color: revert-rule` によって `p.special` 内で行った `color` 宣言を無視するからです。`font-weight` および `border` の宣言には影響がありません。

### style 属性から戻す

`revert-rule` を [style 属性](/ja/docs/Web/HTML/Reference/Global_attributes/style)内で使用すると、その style 属性が存在しないかのようにカスケードが動作します。これは、style 属性が独自のスタイルルールとして扱われるためです。

#### HTML

```html-nolint
<p style="color: revert-rule">このテキストはスタイルシートの色を使用しています。</p>
```

#### CSS

```css hidden
body {
  font-family: system-ui;
}

@supports not (color: revert-rule) {
  body::before {
    content: "このブラウザーはまだ revert-rule キーワードに対応していません。";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

```css
p {
  color: green;
}
```

#### 結果

{{EmbedLiveSample('Reverting from a style attribute', '100%', 120)}}

段落のテキストが緑色になっているのは、`revert-rule` がカスケードを発生させ、style 属性の宣言を無視し、`p` ルールが適用されるためです。

### 複数の `revert-rule` 値を連ねる

同じプロパティに対して複数のルールが `revert-rule` を使用している場合、カスケードはそれぞれのルールを順番に無視し、具体的な値を探すまで前のルールへと遡っていきます。

#### HTML

```html-nolint
<p class="a b">このテキストは、一連の revert-rule 値によってスタイル設定されています。</p>
```

#### CSS

```css hidden
body {
  font-family: system-ui;
}

@supports not (color: revert-rule) {
  body::before {
    content: "このブラウザーはまだ revert-rule キーワードに対応していません。";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

```css
p {
  color: red;
}
p.a {
  color: revert-rule;
}
p.b {
  color: revert-rule;
}
```

#### 結果

{{EmbedLiveSample('Chaining multiple revert-rule values', '100%', 120)}}

`p.b` ルールも `p.a` ルールも `revert-rule` によって無視されます。カスケードは `p` ルールまで適用されるため、テキストは赤色になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("initial")}}
- {{cssxref("inherit")}}
- {{cssxref("revert")}}
- {{cssxref("revert-layer")}}
- {{cssxref("unset")}}
- {{cssxref("all")}}
- [CSS カスケードと継承](/ja/docs/Web/CSS/Guides/Cascade)モジュール
