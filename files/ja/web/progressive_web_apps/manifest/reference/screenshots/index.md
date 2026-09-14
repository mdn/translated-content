---
title: screenshots
slug: Web/Progressive_web_apps/Manifest/Reference/screenshots
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

`screenshots` はマニフェストメンバーで、ウェブアプリケーションのショーケースとなる 1 枚以上の画像を指定することができます。
これらの画像は、ユーザーがアプリストアでウェブアプリのインターフェイスや機能をプレビューするのに役立ちます。

> [!NOTE]
> `screenshots` メンバーは任意であり、アプリストアはアプリを紹介する際にこれらの画像を表示しない場合があります。

## 構文

```json-nolint
/* 単一のスクリーンショット */
"screenshots": [
  {
    "src": "desktop.webp",
    "sizes": "1280x720",
    "type": "image/webp"
  }
]

/* 2 枚のスクリーンショット */
"screenshots": [
  {
    "src": "screenshots/home.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "form_factor": "wide",
    "label": "メインナビゲーションと注目のコンテンツを表示するホーム画面"
  },
  {
    "src": "screenshots/dashboard.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "platform": "ios",
    "label": "キーメトリクスを表示するダッシュボードビュー"
  }
]
```

### 値

- `screenshots`
  - : オブジェクトの配列です。
    各オブジェクトは、一般的な使用シナリオにおけるウェブアプリのスクリーンショットを表します。

    各スクリーンショットオブジェクトには、 1 つ以上のプロパティが設定できます。このうち、 `src` のみが必須です。設定可能なプロパティは以下の通りです。
    - `src`
      - : 画像ファイルへのパスを指定する文字列。
        これは `icons` メンバーの [`src`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/icons#src) プロパティと同じ形式です。

    - `sizes` {{Optional_Inline}}
      - : 1 つ以上の画像のサイズを指定する文字列。
        これは `icons` メンバーの [`sizes`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/icons#sizes) プロパティと同じ形式です。

    - `type` {{Optional_Inline}}
      - : 画像の {{glossary("MIME_type", "MIME タイプ")}}を指定する文字列。
        これは `icons` メンバーの [`type`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/icons#type) プロパティと同じ形式です。

    - `label` {{Optional_Inline}}
      - : スクリーンショットオブジェクトのアクセシブル名を表す文字列。
        レンダリングされたスクリーンショットの代替テキストとして使用される可能性があるため、わかりやすい名前を付けてください。
        アクセシビリティの観点から、すべてのスクリーンショットにこのプロパティを指定することをお勧めします。

    - `form_factor` {{Optional_Inline}}
      - : スクリーンショットが適用される幅広い種類の端末の画面形状を表す文字列。
        スクリーンショットが特定の画面レイアウトに適用される場合にのみ、このプロパティを指定してください。
        `form_factor` が指定されていない場合、そのスクリーンショットはすべての種類の画面に適しているとみなされます。

        有効な値は次のようなものです。
        - `narrow`
          - : モバイル端末などの狭い画面にのみ適用できるスクリーンショットであることを示します。
        - `wide`
          - : デスクトップパソコンなどの広い画面のみに適用されるスクリーンショットであることを示します。

    - `platform`
      - : スクリーンショットが適用されるプラットフォームを表す文字列。
        スクリーンショットが特定の端末や配信プラットフォームにのみ適用される場合にのみ、このプロパティを指定してください。
        `platform` が指定されていない場合、スクリーンショットはすべてのプラットフォームに適していると見なされます。

        有効な値は次のようなものです。

        | 種類                     | 値                 | 説明                                 |
        | ------------------------ | ------------------ | ------------------------------------ |
        | オペレーティングシステム | `android`          | Google Android                       |
        |                          | `chromeos`         | Google ChromeOS                      |
        |                          | `ios`              | Apple iOS                            |
        |                          | `ipados`           | Apple iPadOS                         |
        |                          | `kaios`            | KaiOS                                |
        |                          | `macos`            | Apple macOS                          |
        |                          | `windows`          | Microsoft Windows                    |
        |                          | `xbox`             | Microsoft Xbox                       |
        | 配信プラットフォーム     | `chrome_web_store` | Google Chrome Web Store              |
        |                          | `itunes`           | iTunes App Store                     |
        |                          | `microsoft-inbox`  | Microsoft Windows にプリインストール |
        |                          | `microsoft-store`  | Microsoft Store                      |
        |                          | `play`             | Google Play Store                    |

## 解説

`screenshots` メンバーは、アプリの実行時の動作やブラウザーによるアプリの表示方法には影響しない補助的なメタデータです。
スクリーンショットは、アプリストアやその他の配信プラットフォームで、潜在的なユーザーに対してアプリの機能を紹介するために使用されます。

配信プラットフォームは、表示するスクリーンショットの数を指定することがあります。

以下の画像は Apple App Store のもので、 iPhone アプリのリストにスクリーンショットがどのように表示されるかを示しています。
ギャラリー表示（左の画像）では、ユーザーは複数の画像を横方向にスクロールして閲覧できます。
任意の画像をタップすると、全画面表示（右の画像）で閲覧できます。

<div style="display: flex; justify-content: center; flex-wrap: wrap;">
  <img src="todoist-iphone-gallery.png" alt="Apple App Store の Todoist アプリでは、ユーザーがスクロールできるアプリ画像の横長ギャラリーが表示されている。" width="350">
  <img src="todoist-iphone-fullscreen.png" alt="Todoist アプリの横長ギャラリーの画像を全画面表示" width="350">
</div>

iPad で同じ全画面画像を見ると、狭い端末 (iPhone) と広い端末 (iPad) のフォームファクターに異なるスクリーンショットが必要な理由がわかります。

<div style="display: flex; justify-content: center;">
  <img src="todoist-ipad-fullscreen.png" alt="複数のスクリーンショットを広いギャラリービューで表示する iPad 上の Todoist アプリのリスト">
</div>

## 例

### 献立計画ウェブアプリのプレビューを追加

この例では、異なる端末向けの献立計画アプリのスクリーンショットを追加する方法を示しています。スクリーンショットは、デスクトップとモバイルの両方のビューで、アプリの同じ機能を表示しています。

```json
{
  "name": "Meal Planner",
  "screenshots": [
    {
      "src": "screenshots/desktop-home.webp",
      "sizes": "1920x1080",
      "form_factor": "wide",
      "label": "Desktop view showing weekly meal calendar"
    },
    {
      "src": "screenshots/mobile-home.webp",
      "sizes": "750x1334",
      "form_factor": "narrow",
      "label": "Mobile view showing weekly meal calendar"
    }
  ]
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

`screenshots` マニフェストメンバーは、ウェブアプリの公開やリスト化を行う際にアプリストアによって使用されるため、ブラウザーの互換性は適用されません。
ブラウザーはこのメンバーを解析することがありますが、これは任意であり、アプリの機能や表示には影響しません。
