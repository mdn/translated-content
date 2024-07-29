---
title: revert-layer
slug: Web/CSS/revert-layer
l10n:
  sourceCommit: 0053e22667809069b5a62c3de80122cdb65d611c
---

{{CSSRef}}{{SeeCompatTable}}

**`revert-layer`** は CSS のキーワードで、{{cssxref("@layer", "カスケードレイヤー")}}内のプロパティの値を、前回カスケードレイヤー内の要素に一致した CSS ルール内のプロパティの値にロールバックします。このキーワードが指定されたプロパティの値は、現在のカスケードレイヤーで対象とする要素にルールを指定していないものとして再計算されます。

一致する CSS ルールに対して他に戻すカスケードレイヤーがない場合、プロパティ値は現在のレイヤーから派生した{{cssxref("computed_value", "計算値")}}にロールバックします。さらに、現在のレイヤーに一致する CSS ルールがない場合、要素のプロパティ値は、前回の[スタイルオリジン](/ja/docs/Glossary/Style_origin)で定義したスタイルにロールバックされます。

このキーワードは、 CSS の一括指定プロパティ {{cssxref("all")}} を含めるために、あらゆる CSS プロパティに適用することができます。

## revert-layer と revert

`revert-layer` キーワードを使うと、スタイルを前回のカスケードレイヤーで指定したものにロールバックすることができます。すべてのカスケードレイヤーは[作者オリジン](/ja/docs/Glossary/Style_origin)に存在します。それに比べて {{cssxref("revert")}} キーワードは、作成オリジンで適用されたスタイルを除去され、ユーザーオリジンまたはユーザーエージェントオリジンのスタイルにロールバックすることができます。

`revert-layer` キーワードは理想的にはレイヤー内のプロパティに適用することを意味しています。しかし、 `revert-layer` キーワードがレイヤーの外側のプロパティに設定された場合、プロパティの値はユーザーエージェントのスタイルシート（またはユーザースタイルが存在する場合はユーザースタイル）で設定された既定値にロールバックされます。つまり、このシナリオでは `revert-layer` キーワードは {{cssxref("revert")}} キーワードのように動作します。

## 例

### 既定のカスケードレイヤーの動作

下記の例では、`base` と `special` の 2 つのカスケードレイヤーが CSS で定義されています。既定では、 `@layer` 宣言文の `base` の後に `special` が記載されているため、 `special` レイヤーのルールが `base` レイヤーの競合するルールを上書きします。

#### HTML

```html
<p>この例にはリストがあります。</p>

<ul>
  <li class="item feature">Item one</li>
  <li class="item">Item two</li>
  <li class="item">Item three</li>
</ul>
```

#### CSS

```css
@layer base, special;

@layer special {
  .item {
    color: red;
  }
}

@layer base {
  .item {
    color: blue;
  }
  .feature {
    color: green;
  }
}
```

#### 結果

{{EmbedLiveSample('Default_cascade_layer_behavior')}}

すべての `<li>` 要素が `special` レイヤーの `item` ルールに一致し、赤くなります。これは既定でのカスケードレイヤーの動作で、 `special` レイヤーのルールが `base` レイヤーのルールよりも引き継がれます。

### スタイルを直前のカスケードレイヤーに戻す

`revert-layer` キーワードが既定値でカスケードレイヤーの動作をどのように変更するかを見てみましょう。この例では、 `special` レイヤーに最初の `<li>` 要素をターゲットとする `feature` ルールが追加格納されています。このルールの `color` プロパティは `revert-layer` に設定されています。

#### HTML

```html
<p>この例にはリストがあります。</p>

<ul>
  <li class="item feature">Item one</li>
  <li class="item">Item two</li>
  <li class="item">Item three</li>
</ul>
```

#### CSS

```css
@layer base, special;

@layer special {
  .item {
    color: red;
  }
  .feature {
    color: revert-layer;
  }
}

@layer base {
  .item {
    color: blue;
  }
  .feature {
    color: green;
  }
}
```

#### 結果

{{EmbedLiveSample('Revert_to_style_in_previous_cascade_layer')}}

`color` を `revert-layer` に設定すると、 `color` プロパティの値は直前のレイヤー `base` で一致した `feature` ルールの値にロールバックされるので、 'Item one' は緑色になります。

### 直前のオリジンでのスタイルに戻す

この例では、戻す先のカスケードレイヤーがなく、かつ現在のレイヤーにプロパティ値の継承元となる一致する CSS ルールがない場合の `revert-layer` キーワードの動作を示します。

#### HTML

```html
<p>この例にはリストがあります。</p>

<ul>
  <li class="item feature">Item one</li>
  <li class="item">Item two</li>
  <li class="item">Item three</li>
</ul>
```

#### CSS

```css
@layer base {
  .item {
    color: revert-layer;
  }
}
```

#### 結果

{{EmbedLiveSample('Revert_to_style_in_previous_origin')}}

すべての `<li>` 要素のスタイル設定は、ユーザーエージェントオリジンの既定値にロールバックされます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("initial")}} を使用すると、プロパティを初期値に設定します。
- {{cssxref("inherit")}} キーワードを使用すると、要素のプロパティを親と同じ値にします。
- {{cssxref("revert")}} キーワードを使用すると、プロパティをユーザーエージェントのスタイルシート（またはもしあれば、ユーザーのスタイル）で設定された値に初期化します。
- {{cssxref("unset")}} キーワードを使用すると、継承プロパティは継承値に、それ以外は初期値に設定します。
- {{cssxref("all")}} プロパティは、すべてのプロパティを一度に initial, inherit, revert, unset の状態にします。
