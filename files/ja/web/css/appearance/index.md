---
title: appearance
slug: Web/CSS/appearance
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{CSSRef}}

**`appearance`** は CSS のプロパティで、 OS のテーマに基づいたプラットフォームネイティブのスタイル付けを使用して要素を表示するために使用されます。

{{EmbedInteractiveExample("pages/css/appearance.html")}}

標準化以前は、このプロパティによって、ボタンやチェックボックスのような単純な要素をウィジェットとして表示できました。
しかし、これは誤った機能であると考えられ、現在では標準的なキーワードのみを使用することが推奨されています。

> **メモ:** ウェブサイトでこのプロパティを使いたいのであれば、とても注意深くテストする必要があります。現在のブラウザーのほとんどは対応していますが、その実装は大きく異なります。古いブラウザーでは、 `none` キーワードであっても、ブラウザーによってフォーム要素すべてに同じ効果があるわけではなく、まったく対応していないものもあります。最新のブラウザーでは、その差は小さくなっています。

## 構文

```css
/* CSS 基本ユーザーインターフェイス Level 4 の値 */
appearance: none;
appearance: auto;
appearance: menulist-button;
appearance: textfield;

/* "Compat-auto" の値は 'auto' と同じ効果 */
appearance: button;
appearance: searchfield;
appearance: textarea;
appearance: push-button;
appearance: slider-horizontal;
appearance: checkbox;
appearance: radio;
appearance: square-button;
appearance: menulist;
appearance: listbox;
appearance: meter;
appearance: progress-bar;

/* Gecko で使用できる値の一部 */
-moz-appearance: scrollbarbutton-up;
-moz-appearance: button-bevel;

/* WebKit/Blink (Gecko や Edge も同様) で使用できる値の一部 */
-webkit-appearance: media-mute-button;
-webkit-appearance: caret;

/* グローバル値 */
appearance: inherit;
appearance: initial;
appearance: revert;
appearance: unset;
```

### 値

#### 標準キーワード

<table class="standard-table">
  <tbody>
    <tr>
      <th>値</th>
      <th>ブラウザー</th>
      <th>説明</th>
    </tr>
    <tr>
      <td><code>none</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>select要素に表示されるリストが拡張可能であることを示す矢印など、ウィジェットの特定の機能を非表示にします。</td>
    </tr>
    <tr>
      <td><code>auto</code></td>
      <td>Firefox Chrome</td>
      <td>
        ユーザーエージェントが要素に基づいて適切で特別なスタイルを選択します。特別なスタイルがない要素では <code>none</code> として動作します。
      </td>
    </tr>
    <tr>
      <td><code>menulist-button</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>textfield</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="3">
        以下の値は <code>auto</code> と同等のものとして扱われます。
      </td>
    </tr>
    <tr>
      <td><code>button</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>この要素がボタンのように表示されます。</td>
    </tr>
    <tr>
      <td><code>checkbox</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>
        この要素がチェックボックスのように表示されます。実際の「チェックボックス」の部分のみが含まれます。
      </td>
    </tr>
    <tr>
      <td><code>listbox</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>menulist</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>meter</code></td>
      <td>Chrome Safari Firefox</td>
      <td></td>
    </tr>
    <tr>
      <td><code>progress-bar</code></td>
      <td>Chrome Safari Firefox</td>
      <td></td>
    </tr>
    <tr>
      <td><code>push-button</code></td>
      <td>Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>radio</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>
        この要素がラジオボタンのように表示されます。実際の「ラジオボタン」の部分のみが含まれます。
      </td>
    </tr>
    <tr>
      <td><code>searchfield</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>slider-horizontal</code></td>
      <td>Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>square-button</code></td>
      <td>Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>textarea</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
  </tbody>
</table>

#### 標準外のキーワード

以下の値は **`-moz-appearance`** や **`-webkit-appearance`** 接頭辞を利用して過去のブラウザーで動作可能ですが、標準の **`appearance`** プロパティにはないものです。

| 値                                     | ブラウザー                 | 説明                                                                                                                                                                               |
| -------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attachment`                           | Safari                     |                                                                                                                                                                                    |
| `borderless-attachment`                | Safari                     |                                                                                                                                                                                    |
| `button-bevel`                         | Firefox Chrome Safari Edge |                                                                                                                                                                                    |
| `caps-lock-indicator`                  | Safari Edge                |                                                                                                                                                                                    |
| `caret`                                | Firefox Chrome Safari Edge |                                                                                                                                                                                    |
| `checkbox-container`                   | Firefox                    | この要素がチェックボックスのコンテナーのように表示されます。一部のプラットフォームではプリライティングの背景効果を含むことがあります。通常は、ラベルとチェックボックスを含みます。 |
| `checkbox-label`                       | Firefox                    |                                                                                                                                                                                    |
| `checkmenuitem`                        | Firefox                    |                                                                                                                                                                                    |
| `color-well`                           | Safari                     | `input type=color`                                                                                                                                                                 |
| `continuous-capacity-level-indicator`  | Safari                     |                                                                                                                                                                                    |
| `default-button`                       | Safari Edge                |                                                                                                                                                                                    |
| `discrete-capacity-level-indicator`    | Safari                     |                                                                                                                                                                                    |
| `inner-spin-button`                    | Firefox Chrome Safari      |                                                                                                                                                                                    |
| `image-controls-button`                | Safari                     |                                                                                                                                                                                    |
| `list-button`                          | Safari                     | データリスト                                                                                                                                                                       |
| `listitem`                             | Firefox Chrome Safari Edge |                                                                                                                                                                                    |
| `media-enter-fullscreen-button`        | Chrome Safari              |                                                                                                                                                                                    |
| `media-exit-fullscreen-button`         | Chrome Safari              |                                                                                                                                                                                    |
| `media-fullscreen-volume-slider`       | Safari                     |                                                                                                                                                                                    |
| `media-fullscreen-volume-slider-thumb` | Safari                     |                                                                                                                                                                                    |
| `media-mute-button`                    | Chrome Safari Edge         |                                                                                                                                                                                    |
| `media-play-button`                    | Chrome Safari Edge         |                                                                                                                                                                                    |
| `media-overlay-play-button`            | Chrome Safari              |                                                                                                                                                                                    |
| `media-return-to-realtime-button`      | Safari                     |                                                                                                                                                                                    |
| `media-rewind-button`                  | Safari                     |                                                                                                                                                                                    |
| `media-seek-back-button`               | Safari Edge                |                                                                                                                                                                                    |
| `media-seek-forward-button`            | Safari Edge                |                                                                                                                                                                                    |
| `media-toggle-closed-captions-button`  | Chrome Safari              |                                                                                                                                                                                    |
| `media-slider`                         | Chrome Safari Edge         |                                                                                                                                                                                    |
| `media-sliderthumb`                    | Chrome Safari Edge         |                                                                                                                                                                                    |
| `media-volume-slider-container`        | Chrome Safari              |                                                                                                                                                                                    |
| `media-volume-slider-mute-button`      | Safari                     |                                                                                                                                                                                    |
| `media-volume-slider`                  | Chrome Safari              |                                                                                                                                                                                    |
| `media-volume-sliderthumb`             | Chrome Safari              |                                                                                                                                                                                    |
| `media-controls-background`            | Chrome Safari              |                                                                                                                                                                                    |
| `media-controls-dark-bar-background`   | Safari                     |                                                                                                                                                                                    |
| `media-controls-fullscreen-background` | Chrome Safari              |                                                                                                                                                                                    |
| `media-controls-light-bar-background`  | Safari                     |                                                                                                                                                                                    |
| `media-current-time-display`           | Chrome Safari              |                                                                                                                                                                                    |
| `media-time-remaining-display`         | Chrome Safari              |                                                                                                                                                                                    |
| `menulist-text`                        | Firefox Chrome Safari Edge |                                                                                                                                                                                    |
| `menulist-textfield`                   | Firefox Chrome Safari Edge | この要素がメニューリストのテキストフィールドとしてスタイル付けされます。 (Windows プラットフォームでは実装されていません)                                                          |
| `meterbar`                             | Firefox                    | 代わりに `meter` を使用してください。                                                                                                                                              |
| `number-input`                         | Firefox                    |                                                                                                                                                                                    |
| `progress-bar-value`                   | Chrome Safari              |                                                                                                                                                                                    |
| `progressbar`                          | Firefox                    | この要素がプログレスバーのようにスタイル付けされます。代わりに `progress-bar` を使用してください。                                                                                 |
| `progressbar-vertical`                 | Firefox                    |                                                                                                                                                                                    |
| `range`                                | Firefox                    |                                                                                                                                                                                    |
| `range-thumb`                          | Firefox                    |                                                                                                                                                                                    |
| `rating-level-indicator`               | Safari                     |                                                                                                                                                                                    |
| `relevancy-level-indicator`            | Safari                     |                                                                                                                                                                                    |
| `scale-horizontal`                     | Firefox                    |                                                                                                                                                                                    |
| `scalethumbend`                        | Firefox                    |                                                                                                                                                                                    |
| `scalethumb-horizontal`                | Firefox                    |                                                                                                                                                                                    |
| `scalethumbstart`                      | Firefox                    |                                                                                                                                                                                    |
| `scalethumbtick`                       | Firefox                    |                                                                                                                                                                                    |
| `scalethumb-vertical`                  | Firefox                    |                                                                                                                                                                                    |
| `scale-vertical`                       | Firefox                    |                                                                                                                                                                                    |
| `scrollbarthumb-horizontal`            | Firefox                    |                                                                                                                                                                                    |
| `scrollbarthumb-vertical`              | Firefox                    |                                                                                                                                                                                    |
| `scrollbartrack-horizontal`            | Firefox                    |                                                                                                                                                                                    |
| `scrollbartrack-vertical`              | Firefox                    |                                                                                                                                                                                    |
| `searchfield-decoration`               | Safari Edge                |                                                                                                                                                                                    |
| `searchfield-results-decoration`       | Chrome Safari Edge         | (Windows 7 の Chrome 51 で動作)                                                                                                                                                    |
| `searchfield-results-button`           | Safari Edge                |                                                                                                                                                                                    |
| `searchfield-cancel-button`            | Chrome Safari Edge         |                                                                                                                                                                                    |
| `snapshotted-plugin-overlay`           | Safari                     |                                                                                                                                                                                    |
| `sheet`                                | なし                       |                                                                                                                                                                                    |
| `slider-vertical`                      | Chrome Safari Edge         |                                                                                                                                                                                    |
| `sliderthumb-horizontal`               | Chrome Safari Edge         |                                                                                                                                                                                    |
| `sliderthumb-vertical`                 | Chrome Safari Edge         |                                                                                                                                                                                    |
| `textfield-multiline`                  | Firefox                    | 代わりに `textarea` を使用してください。                                                                                                                                           |
| `-apple-pay-button`                    | Safari                     | **iOS および macOS のみ**。ウェブでは iOS 10.1 および macOS 10.12.1 から使用可能。                                                                                                 |

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### メニューリストボタンのように見える要素を作成

```css
.exampleone {
  -webkit-appearance: menulist-button;
  -moz-appearance: menulist-button;
  appearance: menulist-button;
}
```

### 独自のスタイル付けの適用

#### HTML

```html
<select class="none">
  <option>appearance: none</option>
</select>
<select class="auto">
  <option>appearance: auto</option>
</select>
```

#### CSS

```css
.none {
  appearance: none;
}
.auto {
  appearance: auto;
}
```

#### 結果

{{EmbedLiveSample("Apply_custom_styling", 1050, 70)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS Basic User Interface Module Level 4 での `appearance` の定義](https://drafts.csswg.org/css-ui/#appearance-switching)
