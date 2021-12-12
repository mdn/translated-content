---
title: Firefox 95 for developers
slug: Mozilla/Firefox/Releases/95
tags:
  - '95'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 95 の変更点をまとめています。
Firefox 95 は、2021 年 12 月 7 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- [`inputmode`](/ja/docs/Web/HTML/Global_attributes/inputmode) グローバル属性を、Android だけでなくすべてのプラットフォームでサポートしました。
  これは、特定の要素を編集するときにどの種類の仮想キーボードが最適であるかのヒントをブラウザーに与えるものです ({{bug(1205133)}})。

### CSS

- CSS の [`cursor`](/ja/docs/Web/CSS/cursor) プロパティを、Android 版 Firefox でサポートしました。
  マウスを使用する Android ユーザーは、どの要素がクリックできるかを見分けやすくなります ({{bug(1672609)}})。

### JavaScript

変更なし。

### API

- {{domxref("Crypto.randomUUID()")}} 関数をサポートしました。これは暗号的に強い 36 文字固定長の UUID を返します ({{bug(1723674)}})。

#### Media、WebRTC、Web Audio

- 仕様書の更新に合わせて、{{domxref("SpeechSynthesisEvent.elapsedTime")}} が経過時間をミリ秒単位ではなく秒単位で返すようになりました ({{bug(1732498)}})。


### WebDriver conformance (Marionette)

- Marionette が使用する `port` を、プロファイルディレクトリーの `MarionetteActivePort` ファイルへ書き込むようになりました。これを使用すると `port` を容易に取得できます。以前はプロファイルの `prefs.js` ファイルを解析することだけで可能でした ({{bug(1735162)}})。
- window proxy が意図せずアンロードされることを防ぐため、最初のタブが完全に読み込まれるまで `WebDriver:NewSession` が待つようになりました ({{bug(1736323)}})。

## アドオン開発者向けの変更点一覧

- 設定項目 `layout.css.prefers-color-scheme.content-override` の制御を可能にする `overrideContentColorScheme` を {{WebExtAPIRef("browserSettings")}} に追加しました。ブラウザーのテーマから独立して、ページが好むカラースキーム (ライトまたはダーク) を設定できます ({{bug(1733461)}})。

## 過去のバージョン

{{Firefox_for_developers(94)}}
