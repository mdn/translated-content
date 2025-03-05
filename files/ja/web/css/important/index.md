---
title: "!important"
slug: Web/CSS/important
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

区切り文字 `!` に続く `important` キーワードは、その宣言が重要であることを示します。 `important` フラグは[カスケード](/ja/docs/Web/CSS/Cascade)内の宣言を選択するルールを変更します。 _important_ ではない宣言は _normal_ と呼ばれます。

宣言を重要なものにするには、宣言の値の後に _important フラグ_ (`!important`) を追加します。区切り文字とキーワードの間には空白を入れることができますが、一般的にフラグは空白を入れずに `!important` と書きます。

```css-nolint
selector {
  property: value; /* 通常宣言 */
  property: value !important; /* 重要宣言（推奨） */
  property: value ! important; /* 重要宣言（非推奨） */
}
```

`!important` はプロパティ値のペア宣言の値の後に来ます。 important フラグは宣言の最後のトークンでなければなりません。言い換えれば、フラグと宣言の終わりのセミコロンの間には空白とコメントがあってもかまいませんが、それ以外はありません。

## カスケード上の影響

重要な宣言に関しては、[カスケード元とレイヤーの順序](/ja/docs/Web/CSS/Cascade)が逆になります。 important フラグがないと、作者スタイルシートの宣言がユーザーのスタイルシートの宣言を上書きし、ユーザーエージェントの既定のスタイルシートの宣言を上書きします。

宣言が重要な場合、優先順位は逆になります。ユーザーエージェントスタイルシートで重要であるとマーク付けされた宣言は、ユーザースタイルシートでのすべての重要な宣言を上書きします。同様に、ユーザースタイルシートにおけるすべての重要な宣言は、作者スタイルシートにおけるすべての重要な宣言を上書きします。最後に、すべての重要な宣言は、すべてのアニメーションよりも引き継がれます。

> [!NOTE]
> important 宣言はすべてアニメーションに引き継がれます。[@keyframes アニメーション](/ja/docs/Web/CSS/@keyframes)宣言内では `!important` は無効です。

重要な宣言の優先順位を逆転させることで、パーソナライズされた配色や大きなフォントなどの特別なニーズを持つユーザーが、そのユーザーのスタイルシートでいくつかの宣言を重要なものとしてマークすることにより、必要に応じて作者スタイルを上書きできることを確実に保持します。また、悪意のある拡張機能が重要なユーザーエージェントスタイルを上書きできないようにすることで、機能を破壊したり、セキュリティに悪影響を与えたりしないことも保証します。

重要な宣言に優先するものはあるのでしょうか。はい、[トランジション](/ja/docs/Web/CSS/CSS_transitions)です。 CSS の遷移は、プロパティがある値から別の値に変化する速度を制御する方法です。ある値から別の値へ遷移する間、プロパティは固有の重要宣言と一致しません。

```css
a {
  color: red !important;
  background-color: yellow;
  transition: all 2s linear;
}
a:hover {
  color: blue !important;
  background-color: orange !important;
}
```

この例では、 `color` と `background-color` プロパティは 2 つ目でホバー状態にトランジションします。たとえ既定値が通常の宣言で、ホバー状態が `!important` 宣言であっても、トランジションは発生します。

### カスケードレイヤー

スタイルシートの 3 つのオリジン（作成者、ユーザー、ユーザーエージェント）のそれぞれの中で、レイヤー外のスタイルの通常の宣言は、レイヤーのスタイル宣言を上書きし、最後に宣言されたものがその前に宣言されたレイヤーよりも優先されます。重要な宣言は優先順位を逆にします。最初のレイヤーの重要な宣言は次のレイヤーの重要な宣言に引き継ぎます。また、すべての重要な宣言は、どのレイヤーの外側で行われた重要な宣言よりも優先されます。

### インラインスタイル

インラインスタイルは [`style`](/ja/docs/Web/HTML/Global_attributes/style) 属性を使用して定義するスタイルです。これらは通常または重要にもなりえます。インラインの _normal_ スタイルは、元に関係なく、すべての _normal_ 宣言よりも引き継がれます。インラインの _important_ スタイルは、レイヤーに関係なく、他のすべての _important_ 作成者スタイルよりも優先されますが、ユーザーやユーザーエージェントのスタイルシートやトランジションからの重要なスタイルは、それらを引き継ぎます。

### !important と詳細度

`!important` は詳細度に影響しませんが、関係があります。重要な宣言は、同じ[オリジンとカスケードレイヤー](/ja/docs/Web/CSS/Cascade)にある他の宣言をすべて上書きします。

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

この例では、セレクターを過剰に指定します。セレクターの[詳細度](/ja/docs/Web/CSS/Specificity)が通常の宣言にどれだけ一致しても、同じソースとカスケードレイヤーからの重要な宣言が常に優先されます。この場合、段落は常に赤になります。

同じオリジン、同じレイヤーの 2 つの重要な宣言が同じ要素に適用される場合、ブラウザーは最も詳細度の高い宣言を選択して使用します。

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

この場合、セレクターの詳細度が問題になります。セレクターの詳細度が同じであれば、ソースの順番が問題になります。

## 一括指定プロパティの影響

`important` で一括指定プロパティを宣言すると、サブプロパティをすべて `important` に設定します。以下の 2 つのセレクタースタイルブロックは等価です。

```css
p {
  background: blue !important;
}

p {
  background-image: none !important;
  background-position: 0 0 !important;
  background-size: auto auto !important;
  background-repeat: repeat !important;
  background-origin: padding-box !important;
  background-clip: border-box !important;
  background-attachment: scroll !important;
  background-color: blue !important;
}
```

この例は、一般的に important フラグを避けることが推奨されるいくつかの理由の一つを示しています。

## カスタムプロパティへの影響

`!important` フラグがカスタムプロパティの値宣言に追加されると、その値の割り当てを important にします。 `!important` フラグはカスタムプロパティ値から取り除かれます。 `!important` フラグはカスタムプロパティの値の一部として [`var()`](/ja/docs/Web/CSS/var) 関数に渡されません。

```css
:root {
  --myColor: red !important;
  --myColor: blue;
}
p {
  color: var(--myColor);
}
blockquote {
  color: var(--myColor);
  color: purple;
}
```

```html hidden
<p>これは段落です</p>
<blockquote>これはブロック引用です</blockquote>
```

この例では、カスタムプロパティの値の割り当てが重要なので、段落は青ではなく赤になります。 blockquote は紫色になりますが、これは紫色の通常宣言が通常の赤宣言の後に来るためです。

{{ EmbedLiveSample('Impact_on_custom_properties', '500', '250') }}

## ベストプラクティス

`!important` を使用して詳細度を上書きすることは避けてください。 UI 要件のために意図的に important 宣言を作成する場合は、 CSS コードをコメント入れて、その機能を上書きしてはいけない理由を保守担当者に説明してください。

[id セレクター](/ja/docs/Web/CSS/ID_selectors)で宣言されたサードパーティープラグインのスタイルのように、あなたの支配下にない詳細度の高いスタイルを上書きする作業をする場合でも、 `!important` を使用する必要はありません。代わりに、最初のカスケードレイヤーとして[名前付きまたは無名のレイヤー](/ja/docs/Web/CSS/@layer)にサードパーティのスタイルシートスクリプトをインポートすることを検討してください。外部スタイルに important 宣言が含まれていない限り、固有の度合いに関係なく、あなたのスタイルがウィジェットのスタイルよりも優先されます。

重要な宣言を含む外部スタイルシートを上書きする必要がある場合は、必要なオーバーライドを含むカスケードレイヤーを作成し、そのレイヤーを最初に宣言してください。

### アクセシビリティ

ユーザースタイルシートからの重要なスタイルは、作成者スタイルシートの重要な宣言よりも優先されます。つまり、サイトのスタイルに `!important` フラグを追加しても、大きなフォントなど特別な要求をされる個々のユーザーが、自分自身のユーザースタイルシートに重要なスタイルを追加してスタイルを引き継ぐことを防ぐことはできません。

## ブラウザーの互換性

この機能はすべてのブラウザーで対応しています。

## 関連情報

- [CSS 詳細度](/ja/docs/Web/CSS/Specificity)
- [CSS カスケード](/ja/docs/Web/CSS/Cascade)
