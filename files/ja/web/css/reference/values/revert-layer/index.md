---
title: revert-layer
slug: Web/CSS/Reference/Values/revert-layer
original_slug: Web/CSS/revert-layer
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

**`revert-layer`** は [CSS 全体のキーワード](/ja/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords)で、[カスケードレイヤー](/ja/docs/Web/CSS/Reference/At-rules/@layer)内のプロパティの値を、前回カスケードレイヤー内の要素に一致した CSS ルール内のプロパティの値にロールバックします。このキーワードが指定されたプロパティの値は、現在のカスケードレイヤーで対象とする要素にルールを指定していないものとして再計算されます。

一致する CSS ルールに対して他に戻すカスケードレイヤーがない場合、プロパティ値は現在のレイヤーから派生した[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)にロールバックします。さらに、現在のレイヤーに一致する CSS ルールがない場合、要素のプロパティ値は、前回の[スタイルオリジン](/ja/docs/Glossary/Style_origin)で定義したスタイルにロールバックされます。

このキーワードは、 CSS の一括指定プロパティ {{cssxref("all")}} を含めるために、あらゆる CSS プロパティに適用することができます。

## revert-layer と revert

`revert-layer` キーワードを使用すると、[作成者オリジン](/ja/docs/Glossary/Style_origin)内の直前のカスケードレイヤーで指定されたスタイルにロールバックすることができます。一方、 {{cssxref("revert")}} キーワードを使用すると、作成者オリジンで適用されたスタイルをユーザーオリジンまたはユーザーエージェントオリジンで指定されたスタイルにロールバックすることができます。

`revert-layer` キーワードは、カスケードレイヤー内のプロパティに適用するのが理想的な意味です。しかし、カスケードレイヤー外のプロパティに適用すると、プロパティ値は表示ヒント（例えば、`width` や `height` 属性、HTML の `<s>` 要素）で設定された任意の値にロールバックされ、ユーザーエージェントのスタイルシートまたはユーザースタイルで設定された値が既定値となります。表示ヒントを作成者オリジンに属するものとして考慮し、それらも元に戻す `revert` キーワードとは異なり、 `revert-layer` キーワードはカスケードレイヤー外の表示ヒントを無視するため、それらを元に戻しません。

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

- {{cssxref("initial")}}
- {{cssxref("inherit")}}
- {{cssxref("revert")}}
- {{cssxref("unset")}}
- {{cssxref("all")}}
- [CSS カスケードと継承](/ja/docs/Web/CSS/Guides/Cascade)モジュール
