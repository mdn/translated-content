---
title: CSS 環境変数
short-title: 環境変数
slug: Web/CSS/Guides/Environment_variables
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS 環境変数** (CSS environment variables) モジュールは、環境変数の概念と {{cssxref("env")}} 関数を定義します。環境変数は、[カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) や {{cssxref("var")}} 関数と同様に機能しますが、グローバルに定義される点が異なります。これらは文書全体にスコープを持つグローバル変数です。これらはブラウザーやオペレーティングシステムによって提供されるユーザーエージェント値であり、{{cssxref("env")}} 関数を使用してアクセスできます。これにより、ユーザーの端末やコンテキストに合わせてスタイルを適応させることが可能になります。

環境変数は、ユーザーエージェントがアクセス可能な情報（タイトルバーのサイズ、動的キーボード、安全領域インセットなど）に基づいてページ上で使用できる値を提供します。安全領域インセットは、ビューポートの端からの距離に基づいて、矩形以外のディスプレイでも確実に表示される矩形領域を定義します。ユーザーエージェントのサイズをスタイルに組み込むことで、表示可能な動的キーボードの隣や、表示されているタイトルバーに隣接する安全領域矩形内の利用可能な空間に基づいて、重要なコンテンツのレイアウトを変更できるようになります。

## リファレンス

### 関数

- {{cssxref("env")}}

### データ型

- [`<environment-variable-name>`](/ja/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables)

## ガイド

- [Using environment variables](/ja/docs/Web/CSS/Guides/Environment_variables/Using)
  - : 環境変数とは何か、ブラウザー定義の環境変数、`env()` 関数の使用方法についての概要です。

## 関連概念

- [CSS メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)モジュール
- [カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("var")}}
- {{domxref("VirtualKeyboard")}} インターフェイス
- [`display_override`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) マニフェストフィールド
  [ウィンドウコントロールオーバーレイ API](/ja/docs/Web/API/Window_Controls_Overlay_API) および {{domxref("WindowControlsOverlay")}} インターフェイス

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 値関数](/ja/docs/Web/CSS/Reference/Values/Functions)ガイド
- [CSS プロパティと値 API](/ja/docs/Web/CSS/Guides/Properties_and_values_API) モジュール
- [カスケード変数のための CSS カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables)モジュール
