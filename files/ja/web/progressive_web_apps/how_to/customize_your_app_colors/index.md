---
title: アプリのテーマと背景色をカスタマイズする
slug: Web/Progressive_web_apps/How_to/Customize_your_app_colors
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PWASidebar}}

[プログレッシブウェブアプリ (PWA)](/ja/docs/Web/Progressive_web_apps) を構築する際には、アプリのコンテンツの外観だけでなく、アプリがインストールされた後のユーザーの端末上でのアプリの表示方法も考慮することが重要です。

アプリが表示されるウィンドウをカスタマイズするには、 [`theme_color`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) と [`background_color`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/background_color) という[ウェブアプリマニフェスト](/ja/docs/Web/Progressive_web_apps/Manifest)のメンバーを使用します。

PWA マニフェストで `theme_color` と `background_color` メンバーを定義することで、ユーザーにより洗練された体験を提供できます。これらの小さな詳細が、 PWA を OS ネイティブアプリのような感覚に近づけ、ユーザーにとってより親しみやすいものにするのに役立ちます。

## アプリウィンドウの背景色のカスタマイズ

[`background_color`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/background_color) マニフェストメンバーは、アプリのスタイルシートが読み込まれる前にアプリケーションウィンドウに表示される色を定義します。

この色はスタイルシートが読み込まれる前に表示されるため、その値をアプリケーションのスタイルシート内の `background-color` プロパティと同じ色値に設定してください。これにより、ウェブアプリケーションの起動とコンテンツの読み込みの間でスムーズな視覚的な移行が確保されます。

値は有効な CSS の [`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) です。このウェブアプリのマニフェストファイルの例では、アプリケーションの背景色は[名前付き色](/ja/docs/Web/CSS/Reference/Values/named-color)である `peachpuff` に設定されています。

```json
{
  "name": "My app",
  "start_url": "/",
  "icons": [
    {
      "src": "icon.webp",
      "sizes": "256x256",
      "type": "image/webp"
    }
  ],
  "display": "standalone",
  "background_color": "peachpuff"
}
```

このアプリケーションは、 body 要素の背景色に同じ色を適用するスタイルシートも読み込みます。

```css
body {
  background-color: peachpuff;
}
```

次のスクリーンショットは、上記のコードが動作している様子を示しています。このコードを使用する PWA は Windows にインストールされており、スクリーンショットはアプリの内容が読み込まれる前のアプリケーションウィンドウの表示状態を示しています。

![Windows 上のアプリウィンドウに、 peachpuff の背景色が表示されています。](./background-color-windows.png)

## テーマ色の定義

PWA マニフェスト内の [`theme_color`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) メンバーは、アプリケーション内で使用されるオペレーティングシステムとブラウザーの UI 要素の既定の色を定義します。

端末、オペレーティングシステム、ブラウザーが異なると、`theme_color` メンバーが適用される方法も代わります。

- モバイル端末では、テーマカラーがステータスバーに適用されます。
- デスクトップオペレーティングシステムでは、テーマカラーは[スタンドアロンアプリウィンドウ](/ja/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)のタイトルバーをカスタマイズするために使用されます。

`theme_color` は、 PWA の全体的なデザインとブランドイメージに調和し、さまざまな端末やプラットフォームで一貫したユーザー体験を提供できるように、適切に選択してください。

`background_color` と同様に、任意の [`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) 値が有効です。このウェブアプリマニフェストファイルの例では、 `theme_color` は `rgb(255 218 185)` に設定されており、これは `peachpuff` の [RGB](/ja/docs/Web/CSS/Reference/Values/color_value/rgb) 相当値です。

```json
{
  "name": "My app",
  "start_url": "/",
  "icons": [
    {
      "src": "icon.webp",
      "sizes": "48x48",
      "type": "image/webp"
    }
  ],
  "display": "standalone",
  "background_color": "peachpuff",
  "theme_color": "rgb(255 218 185)"
}
```

次のスクリーンショットは、アプリが Windows にインストールされた際に上記のコードが動作する様子です。この際、 `theme_color` マニフェストメンバーがタイトルバーの色として使用されています。

![Windows でのアプリウィンドウのタイトルバーにテーマカラーが表示されています。](./background-theme-colors-windows.png)

### `theme-color` のメタ要素の値との関係

[`theme-color`](/ja/docs/Web/HTML/Reference/Elements/meta/name/theme-color) 属性値は、 [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name) 属性を持つ {{htmlelement("meta")}} 要素を使用して、各ウェブページごとのテーマカラーを定義できます。これは、アプリ全体で一度だけグローバルに定義する`theme_color` マニフェストメンバーとは異なります。

両方が設定されている場合、`theme-color` メタ要素の値が `theme_color` マニフェストメンバーの値を上書きします。これにより、アプリ全体でグローバルな色を定義し、特定のページで上書きすることが可能です。

一部のブラウザー、たとえば macOS の Safari や Android の Chrome などでは、 `theme-color` メタ要素の値がブラウザーの UI のスタイル設定にも使用されます。

## 関連情報

- [ウェブアプリマニフェスト](/ja/docs/Web/Progressive_web_apps/Manifest)
- [Meta Theme Color and Trickery on css-tricks.com](https://css-tricks.com/meta-theme-color-and-trickery/) (2021)
- [Recommended fields on web.dev](https://web.dev/learn/pwa/web-app-manifest#recommended_fields)
