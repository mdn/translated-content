---
title: appearance
slug: Web/CSS/appearance
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{CSSRef}}

**`appearance`** は CSS のプロパティで、オペレーティングシステムのテーマに基づいた、プラットフォーム固有のスタイル設定で UI 要素を表示するために使用します。

{{EmbedInteractiveExample("pages/css/appearance.html")}}

標準化以前は、このプロパティによって、ボタンやチェックボックスのような要素をウィジェットとして表示できました。しかし、これは誤った機能であると考えられ、現在では標準的なキーワードのみを使用することが推奨されています。

> [!NOTE]
> ウェブサイトでこのプロパティを使いたいのであれば、とても注意深くテストする必要があります。現在のブラウザーのほとんどは対応していますが、その実装は大きく異なります。古いブラウザーでは、 `none` キーワードであっても、ブラウザーによってフォーム要素すべてに同じ効果があるわけではなく、まったく対応していないものもあります。最新のブラウザーでは、その差は小さくなっています。

## 構文

```css
/* CSS 基本ユーザーインターフェイス Level 4 の値 */
appearance: none;
appearance: auto;
appearance: menulist-button;
appearance: textfield;

/* グローバル値 */
appearance: inherit;
appearance: initial;
appearance: revert;
appearance: revert-layer;
appearance: unset;

/* <compat-auto> 値は 'auto' と同じ効果がある */
appearance: button;
appearance: checkbox;
```

### 値

以下のキーワードでは、ユーザーエージェントは要素に基づいて適切なスタイル設定を選択します。
いくつかの例を指定しましたが、リストは完全ではありません。

- `none`

  - : select要素に掲載されている、リストが展開されたことを示す矢印など、ウィジェットの特定の機能を非表示にします。

- `auto`

  - : 特別なスタイル設定のない要素に対しては `none` として動作します。

- `<compat-special>`

  - : `menulist-button` または `textfield` のどちらかです。
    これらの値はどちらも、特別なスタイル設定のない要素では `auto` と等価です。

- `<compat-auto>`

  - : 利用可能な値は `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button`, `textarea` です。
    古いブラウザーとの互換性を保つための `auto` に相当するキーワードです。

#### 標準外のキーワード

以下の値は **`-moz-appearance`** や **`-webkit-appearance`** 接頭辞を利用して過去のブラウザーで動作可能ですが、標準の **`appearance`** プロパティにはないものです。

<details>
<summary>標準外の値</summary>

- Firefox の項目は `-moz-appearance` で対応していることを示します。
- 下記の Chrome、Edge、Safari の項目は、 `-webkit-appearance` ベンダー接頭辞プロパティで使用する値のリリースバージョン対応を示しています。
- アスタリスク (\*) が付いた値は、除去される意図が明確であることを示します。
- それぞれのセルにはブラウザーのバージョンと値があります。
  - `Y{version}`: `{version}` を含むそれ以降で対応していることを示します
  - `N{version}`: 対応は `{version}` より前のリリースで取り除かれました
  - 空のセルは、対応が追加されていないことを表します

| 値                                     | Safari  | Firefox | Chrome    | Edge   |
| -------------------------------------- | ------- | ------- | --------- | ------ |
| `attachment`                           | Y(13.1) |         |           |        |
| `borderless-attachment`                | Y(13.1) |         |           |        |
| `button-bevel`                         | Y(13.1) | N(75)   |           | N(80)  |
| `caps-lock-indicator`                  | Y(13.1) |         |           | N(80)  |
| `caret`                                | Y(13.1) | N(75)   | Y(73)     | N(80)  |
| `checkbox-container`                   |         | N(75)   |           |        |
| `checkbox-label`                       |         | N(75)   |           |        |
| `checkmenuitem`                        |         | N(75)   |           |        |
| `color-well`                           | Y(13.1) |         |           |        |
| `continuous-capacity-level-indicator`  | Y(13.1) |         |           |        |
| `default-button`                       | Y(13.1) |         |           | N(80)  |
| `discrete-capacity-level-indicator`    | Y(13.1) |         |           |        |
| `inner-spin-button`                    | Y(13.1) | N(75)   | Y(118) \* | Y(119) |
| `image-controls-button`                | Y(13.1) |         |           |        |
| `list-button`                          | Y(13.1) |         |           |        |
| `listitem`                             | Y(13.1) | N(75)   | Y(73)     | N(80)  |
| `media-enter-fullscreen-button`        | Y(13.1) |         | Y(73)     |        |
| `media-exit-fullscreen-button`         | Y(13.1) |         | Y(73)     |        |
| `media-fullscreen-volume-slider`       | Y(13.1) |         |           |        |
| `media-fullscreen-volume-slider-thumb` | Y(13.1) |         |           |        |
| `media-mute-button`                    | Y(13.1) |         |           | N(80)  |
| `media-play-button`                    | Y(13.1) |         |           | N(80)  |
| `media-overlay-play-button`            | Y(13.1) |         | Y(73)     |        |
| `media-return-to-realtime-button`      | Y(13.1) |         |           |        |
| `media-rewind-button`                  | Y(13.1) |         |           |        |
| `media-seek-back-button`               | Y(13.1) |         | N(73)     |        |
| `media-seek-forward-button`            | Y(13.1) |         | N(73)     |        |
| `media-toggle-closed-captions-button`  | Y(13.1) |         | Y(73)     |        |
| `media-slider`                         | Y(13.1) |         | Y(117)    | Y(80)  |
| `media-sliderthumb`                    | Y(13.1) |         | Y(117)    | Y(80)  |
| `media-volume-slider-container`        | Y(13.1) |         | Y(73)     |        |
| `media-volume-slider-mute-button`      | Y(13.1) |         |           |        |
| `media-volume-slider`                  | Y(13.1) |         | Y(117)    | Y(80)  |
| `media-volume-sliderthumb`             | Y(13.1) |         | Y(117)    | Y(80)  |
| `media-controls-background`            | Y(13.1) |         | Y(73)     |        |
| `media-controls-dark-bar-background`   | Y(13.1) |         |           |        |
| `media-controls-fullscreen-background` | Y(13.1) |         | Y(73)     |        |
| `media-controls-light-bar-background`  | Y(13.1) |         |           |        |
| `media-current-time-display`           |         |         | Y(73)     |        |
| `media-time-remaining-display`         | Y(13.1) |         | Y(73)     |        |
| `menulist-text`                        | Y(13.1) | N(75)   | Y(73)     | N(80)  |
| `menulist-textfield`                   | Y(13.1) | N(75)   | Y(73)     | N(80)  |
| `meterbar`                             |         | Y(100)  |           |        |
| `number-input`                         |         | Y(75)   |           |        |
| `progress-bar-value`                   | Y(13.1) |         | Y(73)     |        |
| `progressbar`                          |         | Y(100)  |           |        |
| `progressbar-vertical`                 |         | Y(75)   |           |        |
| `range`                                |         | Y(75)   |           |        |
| `range-thumb`                          |         | Y(75)   |           |        |
| `rating-level-indicator`               | Y(13.1) |         |           |        |
| `relevancy-level-indicator`            | Y(13.1) |         |           |        |
| `scale-horizontal`                     |         | Y(75)   |           |        |
| `scalethumbend`                        |         | Y(75)   |           |        |
| `scalethumb-horizontal`                |         | Y(75)   |           |        |
| `scalethumbstart`                      |         | Y(75)   |           |        |
| `scalethumbtick`                       |         | Y(75)   |           |        |
| `scalethumb-vertical`                  |         | Y(75)   |           |        |
| `scale-vertical`                       |         | Y(75)   |           |        |
| `scrollbarthumb-horizontal`            |         | Y(75)   |           |        |
| `scrollbarthumb-vertical`              |         | Y(75)   |           |        |
| `scrollbartrack-horizontal`            |         | Y(75)   |           |        |
| `scrollbartrack-vertical`              |         | Y(75)   |           |        |
| `searchfield-decoration`               | Y(13.1) |         |           | N(80)  |
| `searchfield-results-decoration`       | Y(13.1) | N(75)   | N(73)     | N(80)  |
| `searchfield-results-button`           | Y(13.1) |         |           | N(80)  |
| `searchfield-cancel-button`            | Y(13.1) | N(75)   | Y(118) \* | Y(119) |
| `snapshotted-plugin-overlay`           | Y(13.1) |         |           |        |
| `sheet`                                |         |         |           |        |
| `slider-vertical`                      |         |         | Y(118) \* | Y(119) |
| `sliderthumb-horizontal`               |         |         | Y(117)    | Y(80)  |
| `sliderthumb-vertical`                 |         |         | Y(117)    | Y(80)  |
| `textfield-multiline`                  |         | Y(100)  |           |        |
| `-apple-pay-button`                    | Y(13.1) |         |           |        |

</details>

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 独自のスタイル付けの適用

次の例は、チェックボックスと select 要素から既定のスタイルを除去し、独自のスタイルを適用する方法を示しています。
チェックボックスの外観を円に変更し、 select 要素はリストが展開されることを示す矢印を除去する方法を示しています。

#### HTML

```html
<input type="checkbox" />
<input type="checkbox" checked />

<select>
  <option>default</option>
  <option>option 2</option>
</select>
<select class="none">
  <option>appearance: none</option>
  <option>option 2</option>
</select>
```

#### CSS

```css
input {
  appearance: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  background: red;
}
input:checked {
  border-radius: 50%;
  background: green;
}

select {
  border: 1px solid black;
  font-size: 1em;
}

select.none {
  appearance: none;
}
```

#### 結果

{{EmbedLiveSample("Apply_custom_styling", 1050, 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`prefers-color-scheme`](/ja/docs/Web/CSS/@media/prefers-color-scheme)
