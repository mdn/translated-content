---
title: screenshots
slug: Web/Manifest/screenshots
tags:
  - マニフェスト
  - Screenshots
  - ウェブ
browser-compat: html.manifest.screenshots
translation_of: Web/Manifest/screenshots
---
{{QuickLinksWithSubpages("/ja/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">型</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

`screenshots` メンバーはアプリケーションのショーケースに向けたスクリーンショットの配列を定義します。これらの画像はプログレッシブウェブアプリストアで使用することを意図しています。

## 例

```json
"screenshots" : [
  {
    "src": "screenshot1.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "platform": "wide",
    "label": "Homescreen of Awesome App"
  },
  {
    "src": "screenshot2.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "platform": "wide",
    "label": "List of Awesome Resources available in Awesome App"
  }
]
```

`label` メンバーは、スクリーンショットのアクセス可能な名前として機能する文字列です。また、スクリーンショットの代替テキストとして使用することもできます。

また、 `platform` メンバーは文字列で、特定のスクリーンショットを適用する配信プラットフォームを定義することができます。定義されていない場合、ユーザーエージェントはスクリーンショットのアスペクト比を使用して表示することができます。

`platform` メンバーには、以下の汎用的な値のいずれかを設定することができます。

- `wide` : ワイドスクリーンにのみ適用されるスクリーンショット用 (例: ステータスボード)。
- `narrow` : 狭いスクリーンショット用 (例: モバイル端末、ウェアラブル)。

また、特定の OS で表示するスクリーンショットには `android`、`chromeos`、`ios`、`kaios`、`macos`、`windows`、`xbox` を、特定のアプリケーション配信プラットフォームで表示するスクリーンショットには `chrome_web_store`、`play`、`iTunes`、`microsoft-inbox`、`microsoft-store` を設定することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
