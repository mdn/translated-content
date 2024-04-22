---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
---

**`prefers-color-scheme`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、ユーザーがシステムに要求したカラーテーマが明色か暗色かを検出するために使用します。

ユーザーはオペレーティングシステムの設定 (ライトまたはダークモードなど) やユーザーエージェントの設定で、この設定を示す場合があります。

## 構文

- `light`
  - : ユーザーがシステムに、明色のテーマを持つインターフェイスにしたいと通知したか、アクティブな設定を示さなかったことを示します。
- `dark`
  - : ユーザーがシステムに、暗色のテーマを持つインターフェイスにしたいと通知したことを示します。

## 例

以下の要素は初期の色のテーマを持っています。これらの要素は、ユーザーの配色の好みに応じて、さらにテーマを設定することができます。

### HTML

```html
<div class="day">Day (initial)</div>
<div class="day light-scheme">Day (changes in light scheme)</div>
<div class="day dark-scheme">Day (changes in dark scheme)</div>
<br />

<div class="night">Night (initial)</div>
<div class="night light-scheme">Night (changes in light scheme)</div>
<div class="night dark-scheme">Night (changes in dark scheme)</div>
```

### CSS

```css
.day {
  background: #eee;
  color: black;
}
.night {
  background: #333;
  color: white;
}

@media (prefers-color-scheme: dark) {
  .day.dark-scheme {
    background: #333;
    color: white;
  }
  .night.dark-scheme {
    background: black;
    color: #ddd;
  }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme {
    background: white;
    color: #555;
  }
  .night.light-scheme {
    background: #eee;
    color: black;
  }
}

.day,
.night {
  display: inline-block;
  padding: 1em;
  width: 7em;
  height: 2em;
  vertical-align: middle;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Firefox での prefers-color-scheme のシミュレーション](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#view_media_rules_for_prefers-color-scheme) (Firefox Page Inspector > Examine and edit CSS)
- [Video tutorial: Coding a Dark Mode for your Website](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Redesigning your product and website for dark mode](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- 色スキームの変更: [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/)、[macOS](https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/dark-mode/)、[Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019)、[その他のプラットフォーム](https://support.mozilla.org/en-US/questions/1271928)

{{QuickLinksWithSubpages("/ja/docs/Web/CSS/@media/")}}
