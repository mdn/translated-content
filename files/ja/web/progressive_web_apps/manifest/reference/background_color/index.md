---
title: background_color
slug: Web/Progressive_web_apps/Manifest/Reference/background_color
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

`background_color` メンバーは、スタイルシートが読み込まれる前に表示するアプリケーションページの背景色を定義します。
この色は、スタイルシートが読み込まれる前にマニフェストが利用可能な場合、ショートカットの背景色を描画するために、ユーザーエージェントが使用します。

## 構文

```json-nolint
/* 名前付きの色を使用 */
"background_color": "aliceblue"

/* 16 進の値を使用 */
"background_color": "#f0fbff"

/* RGB 値を使用 */
"background_color": "rgb(240 248 255)"
```

### 値

- `background_color`
  - : 有効な[色値](/ja/docs/Web/CSS/Reference/Values/color_value)を指定する文字列です。

## 解説

`background_color` メンバーは、以下の目的を果たします。

- アプリの初期起動から完全に読み込まれた状態へのスムーズな視覚的移行を提供します。
- ネットワーク経由でアプリファイルを読み込み中、またはストレージメディアからアクセスされるときの使用感を向上させます。
- インストールされたプログレッシブウェブアプリ (PWA) が起動した際の、一部のブラウザーおよびオペレーティングシステムにおけるスプラッシュ画面の表示に寄与します。

マニフェストの `background_color` メンバーに指定する色値は、アプリケーションのスタイルシートの {{cssxref("background-color")}} プロパティの値と一致させることをお勧めします。
これにより、初期表示（該当する場合はスプラッシュ画面も含む）と完全に読み込まれたアプリケーションとの間で視覚的な一貫性が確保されます。
これらの色を揃えることで、ユーザーに洗練されたシームレスな使用感を提供することができます。

アプリケーションが読み込まれた後では、スタイルシートの `background-color` が優先されます。
マニフェストの `background_color` は、初期読み込み段階における一時的な措置として、また一部の環境におけるスプラッシュ画面の生成のみに使用されます。

> [!NOTE]
> ブラウザーは、アプリの CSS で定義された [`prefers-color-scheme`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) メディアクエリーに対応するために、マニフェストの `background_color` の値を上書きすることがあります。

## 例

### アプリに一貫した背景色を設定する

天気予報アプリを開発していると想像してください。アプリのスタイルシートの背景色が以下のように設定されているとします。

```css
body {
  background-color: #87ceeb;
}
```

アプリの起動から読み込み完了まで、ユーザーに一貫した背景色を表示させるには、アプリのマニフェストファイルに同じ背景色を設定します。以下のように設定します。

```json
{
  "name": "WeatherPro",
  "display": "standalone",
  "background_color": "#87ceeb",
  "theme_color": "#4682b4",
  "icons": [
    {
      "src": "icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`display`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/display) マニフェストメンバー
- [`theme_color`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) マニフェストメンバー
- PWA 構築時の[アプリのテーマと背景色のカスタマイズ](/ja/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors)
