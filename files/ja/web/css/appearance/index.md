---
title: appearance (-moz-appearance, -webkit-appearance)
slug: Web/CSS/appearance
tags:
  - '-moz-appearance'
  - '-webkit-appearance'
  - CSS
  - CSS プロパティ
  - CSS 基本ユーザーインターフェイス
  - Reference
  - appearance
  - recipe:css-property
browser-compat: css.properties.appearance
translation_of: Web/CSS/appearance
---
{{CSSRef}}

**`appearance`** は CSS のプロパティで、 OS のテーマに基づいたプラットフォームネイティブのスタイル付けを使用して要素を表示するために使用されます。**`-moz-appearance`** および **`-webkit-appearance`** はこのプロパティの標準外のバージョンで、(それぞれ) Gecko (Firefox) と Webkit ベース (Safari など) や Blink ベース (Chrome、Opera など) のブラウザーで同じことを実現するために使用されます。なお、 Firefox や Edge もまた、互換性の理由から **`-webkit-appearance`** に対応しています。

{{EmbedInteractiveExample("pages/css/appearance.html")}}

**`-moz-appearance`** プロパティは [XUL](/ja/docs/Mozilla/Tech/XUL/Tutorial) スタイルシート内で、プラットフォーム固有のカスタムウィジェットをデザインするために頻繁に使用されていました。また、 Mozilla プラットフォームに搭載するウィジェットの [XBL](/ja/docs/XBL) 実装でも使用されていました。Gecko/Firefox 80 以降では、これらの使い方は **`-moz-default-appearance`** に変更され、内部スタイルシートの外では使用するべきではなくなりました。

> **Note:** ウェブサイトでこのプロパティを使いたいのであれば、とても注意深くテストする必要があります。現在のブラウザーのほとんどは対応していますが、その実装は大きく異なります。古いブラウザーでは、 `none` キーワードであっても、ブラウザーによってフォーム要素すべてに同じ効果があるわけではなく、まったく対応していないものもあります。最新のブラウザーでは、その差は小さくなっています。

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
      <td>特別なスタイルは適用されません。これが既定です。</td>
    </tr>
    <tr>
      <td><code>auto</code></td>
      <td>Firefox Chrome</td>
      <td>
        ユーザーエージェントが要素に基づいて適切で特別なスタイルを選択します。特別なスタイルがない要素では `none` として動作します。
      </td>
    </tr>
    <tr>
      <td><code>menulist-button</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>
        この要素がメニューリストを開くことができるようなボタンとしてのスタイルになります。
      </td>
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

以下の値は接頭辞つきのプロパティのみで実装されていますが、標準の **`appearance`** プロパティにはないものです。

| 値                                     | ブラウザー                 | 説明                                                                                                                                                                        |
| -------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attachment`                           | Safari                     |                                                                                                                                                                                    |
| `borderless-attachment`                | Safari                     |                                                                                                                                                                                    |
| `button-bevel`                         | Firefox Chrome Safari Edge |                                                                                                                                                                                    |
| `caps-lock-indicator`                  | Safari Edge                |                                                                                                                                                                                    |
| `caret`                                | Firefox Chrome Safari Edge |                                                                                                                                                                                    |
| `checkbox-container`                   | Firefox                    | この要素がチェックボックスのコンテナーのように表示されます。一部のプラットフォームではプリライティングの背景効果を含むことがあります。通常は、ラベルとチェックボックスを含みます。|
| `checkbox-label`                       | Firefox                    |                                                                                                                                                                                    |
| `checkmenuitem`                        | Firefox                    |                                                                                                                                                                                    |
| `color-well`                           | Safari                     | `input type=color`                                                                                                                                                                 |
| `continuous-capacity-level-indicator`  | Safari                     |                                                                                                                                                                                    |
| `default-button`                       | Safari Edge                |                                                                                                                                                                                    |
| `discrete-capacity-level-indicator`    | Safari                     |                                                                                                                                                                                    |
| `inner-spin-button`                    | Firefox Chrome Safari      |                                                                                                                                                                                    |
| `image-controls-button`                | Safari                     |                                                                                                                                                                                    |
| `list-button`                          | Safari                     | データリスト                                                                                                                                                                           |
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
| `menulist-textfield`                   | Firefox Chrome Safari Edge | この要素がメニューリストのテキストフィールドとしてスタイル付けされます。 (Windows プラットフォームでは実装されていません) |
| `meterbar`                             | Firefox                    | 代わりに `meter` を使用してください。                                                                                                                                                             |
| `number-input`                         | Firefox                    |                                                                                                                                                                                    |
| `progress-bar-value`                   | Chrome Safari              |                                                                                                                                                                                    |
| `progressbar`                          | Firefox                    | この要素がプログレスバーのようにスタイル付けされます。代わりに `progress-bar` を使用してください。                                                                                                              |
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
| `searchfield-results-decoration`       | Chrome Safari Edge         | (Windows 7 の Chrome 51 で動作)                                                                                                                                                  |
| `searchfield-results-button`           | Safari Edge                |                                                                                                                                                                                    |
| `searchfield-cancel-button`            | Chrome Safari Edge         |                                                                                                                                                                                    |
| `snapshotted-plugin-overlay`           | Safari                     |                                                                                                                                                                                    |
| `sheet`                                | None                       |                                                                                                                                                                                    |
| `slider-vertical`                      | Chrome Safari Edge         |                                                                                                                                                                                    |
| `sliderthumb-horizontal`               | Chrome Safari Edge         |                                                                                                                                                                                    |
| `sliderthumb-vertical`                 | Chrome Safari Edge         |                                                                                                                                                                                    |
| `textfield-multiline`                  | Firefox                    | 代わりに `textarea` を使用してください。                                                                                                                                                            |
| `-apple-pay-button`                    | Safari                     | **iOS および macOS のみ**。ウェブでは iOS 10.1 および macOS 10.12.1 から使用可能。                                                                                               |

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

<h3 id="Apply_custom_styling">独自のスタイル付けの適用</h3>

#### HTML

```html
<p><input type="checkbox" id="check"><label for="check">同意します</label></p>
```

#### CSS

```css
input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  vertical-align: middle;
}

input[type="checkbox"] {
  border: 2px solid #555;
  width: 20px;
  height: 20px;
  padding: 4px;
}
input[type="checkbox"]:checked {
  background: #555;
  background-clip: content-box;
}
label {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 -2px 8px;
}
```

#### 結果

{{EmbedLiveSample("Apply_custom_styling", 1050, 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 3 基本ユーザーインターフェイスでの `appearance` の定義](https://www.w3.org/TR/2004/CR-css3-ui-20040511/#appearance) (2004-05-11 より勧告候補)。
- [UI 仕様 4 から削除された CSS3 機能](https://wiki.csswg.org/spec/css4-ui#dropped-css3-features)
