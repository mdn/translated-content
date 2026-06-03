---
title: Firefox 111 for developers
slug: Mozilla/Firefox/Releases/111
l10n:
  sourceCommit: 1b4f28b8a92b0839dc7cb0af67166385764a8585
---

このページでは、開発者に影響する Firefox 111 の変更点をまとめています。Firefox 111 は、米国時間 2023 年 3 月 14 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

### HTML

- [`autocapitalize`](/ja/docs/Web/HTML/Reference/Global_attributes/autocapitalize) グローバル属性をデフォルトで有効にしました。属性の既定値は `none` ですので、大文字化を行いません ([Firefox bug 1692007](https://bugzil.la/1692007))。
- [`translate`](/ja/docs/Web/HTML/Reference/Global_attributes/translate) グローバル属性をサポートしました ([Firefox bug 1418449](https://bugzil.la/1418449))。

#### 廃止

### CSS

- CSS 色の関数 `color()`、`lab()`、`lch()`、`oklab()`、`oklch()` をサポートしました。
  これらの機能はデフォルトで無効であり、設定項目 `layout.css.more_color_4.enabled` を true に設定すると有効にできます。
  詳しくは [CSS color value](/ja/docs/Web/CSS/Reference/Values/color_value) の文書をご覧ください ([Firefox bug 1352757](https://bugzil.la/1352757) および [Firefox bug 1128204](https://bugzil.la/1128204))。

#### 廃止

### JavaScript

#### 廃止

### SVG

- `<marker>` 要素内で `context-stroke` および `context-fill` の値をサポートしました。
  これらの値を `fill` および `stroke` プロパティとともに使用する方法について、詳しくは [`<marker>`](/ja/docs/Web/SVG/Reference/Element/marker) の文書をご覧ください ([Firefox bug 752638](https://bugzil.la/752638))。

#### 廃止

### HTTP

- HTTP の [`Authorization`](/ja/docs/Web/HTTP/Reference/Headers/Authorization) ヘッダーを、クロスオリジンのリダイレクトから削除しました。
  詳しくは [Firefox bug 1802086](https://bugzil.la/1802086) をご覧ください。

#### 廃止

### セキュリティ

#### 廃止

### API

- [File System Access API](/ja/docs/Web/API/File_System_API) を使用するときに、[Origin private file system (OPFS)](/ja/docs/Web/API/File_System_API#origin_private_file_system) をサポートしました。
  このファイルシステムのデータはオリジンに固有です。ファイルへアクセスするために許可プロンプトは必須でなく、またサイトやオリジンがストレージを削除するとデータが消去されます。
  OPFS はメインスレッドまたは worker で `navigator.storage.getDirectory()` を呼び出すことにより、{{domxref("StorageManager.getDirectory()")}} メソッドでアクセスできます。
  詳しくは [Firefox bug 1785123](https://bugzil.la/1785123) をご覧ください。
- HTTP の [`Authorization`](/ja/docs/Web/HTTP/Reference/Headers/Authorization) ヘッダーを、クロスオリジンのリダイレクトが発生する [`fetch()`](/ja/docs/Web/API/Window/fetch) および [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) 要求から削除しました (`fetch()` のヘッダーは、[`option.headers`](/ja/docs/Web/API/Window/fetch#headers) 引数を使用して開発者が追加できます)。
  詳しくは [Firefox bug 1802086](https://bugzil.la/1802086) をご覧ください。

#### DOM

- {{domxref("FormData")}} コンストラクターが、送信ボタンを指定するための省略可能な第 2 引数である `submitter` を受け入れるようになりました。ボタンの名前があるか画像ボタンである場合は、それがフォームのデータセットに含まれます。これは、ボタンで送信する普通のフォームと同じデータセットを持つ {{domxref("FormData")}} オブジェクトを作ることを可能にします。詳しくは [Firefox bug 1812696](https://bugzil.la/1812696) をご覧ください。

#### Media、WebRTC、Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/ja/docs/Web/API/RTCInboundRtpStreamStats#trackidentifier) をサポートしました。
  これにより開発者は、{{domxref("RTCPeerConnection.getStats()")}} を使用しているときに `inbound-rtp` 統計値と特定のトラックを関連づけることができます。
  (詳しくは [Firefox bug 1804676](https://bugzil.la/1804676) をご覧ください)

#### 廃止

### WebAssembly

#### 廃止

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- 古くなった要素を確認する処理を、最近更新された WebDriver classic 仕様に基づいて変更しました。詳しくは [Firefox bug 1808894](https://bugzil.la/1808894) をご覧ください。

#### Marionette

- `WebDriver:ExecuteScript` から ShadowRoot が返るときに `cyclic object value` エラーが発生する不具合を修正しました。詳しくは [Firefox bug 1764594](https://bugzil.la/1764594) をご覧ください。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("Find.find")}} API に `matchDiacritics` を追加しました。このオプションは、アクセントつき文字とベース文字を区別して検索することができます。たとえば `true` を設定すると、"résumé" を検索しても "resume" に一致するものが見つかりません。[Firefox bug 1680606](https://bugzil.la/1680606)
- Chromium ベースのブラウザーと互換性がある search API を提供する {{WebExtAPIRef("search.query")}} を追加しました。[Firefox bug 1804357](https://bugzil.la/1804357)
- 新しいタブまたはウィンドウに結果を表示することを可能にする、`disposition` プロパティを {{WebExtAPIRef("search.search")}} に追加しました。[Firefox bug 1811274](https://bugzil.la/1811274)

### 廃止

### その他

## 過去のバージョン

{{Firefox_for_developers(110)}}
