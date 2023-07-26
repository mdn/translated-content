---
title: Firefox 96 for developers
slug: Mozilla/Firefox/Releases/96
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 96 の変更点をまとめています。Firefox 96 は、米国時間 2022 年 1 月 11 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- [CSS の色の値](/ja/docs/Web/CSS/color_value) として使用する [`hwb()`](</ja/docs/Web/CSS/color_value/hwb()>) 関数を実装しました。`hwb()` 関数表記は、色相・白さ・黒さで表現した色を表します。省略可能なアルファ値は、色の透明度を表します ([Firefox バグ 1352755](https://bugzil.la/1352755))。

- Firefox で {{CSSxRef("color-scheme")}} プロパティをサポートしました。これは、要素がどの配色で快適に表示できるかを示すことができます。一般的なオプションは "ライト" と "ダーク"、または "昼間モード" と "夜間モード" です ([Firefox バグ 1576289](https://bugzil.la/1576289))。

- {{CSSxRef("counter-reset")}} プロパティで、_逆順の_ [CSS カウンター](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters) を生成する `reversed()` 関数をサポートしました。これは、降順の番号つき要素を意図するものです。
  これは `list-item` カウンターと合わせて、番号つきリストを自動的に、リスト内の要素の数から始まる逆順にするために使用します。
  (`list-item` は {{HTMLElement("ol")}} を使用して生成したリストのような番号つきリストへ自動的に適用されるカウンターです)。
  Firefox はこの機能を、`<ol>` の [`reversed` 属性](/ja/docs/Web/HTML/Element/ol#attr-reversed) をサポートするため内部的に使用しています
  ([Firefox バグ 1706346](https://bugzil.la/1706346))。

### JavaScript

変更なし。

### HTTP

- 同じドメインであるが異なるスキーム (例えば http と https) で送信された Cookie が、[SameSite](/ja/docs/Web/HTTP/Headers/Set-Cookie/SameSite) ディレクティブについて別のサイトから送信されたものとみなすようになりました。
  加えて、`SameSite` 属性が指定されていない Cookie は暗黙的に `SameSite=Lax`が指定されたとみなすようになり (以前の既定値は `SameSite=None`)、また `SameSite=None` を指定した Cookie は安全なコンテキストが必要になりました ([Firefox バグ 1617609](https://bugzil.la/1617609))。

### API

- {{domxref("navigator.canShare()")}} を Android でサポートしました。特定のターゲットに対して {{domxref("navigator.share()")}} が成功するかをコードから確認できます。
  この機能は、デスクトップオペレーティングシステムでは設定項目で制御されています
  ([Firefox バグ 1666203](https://bugzil.la/1666203))。
- [Web Locks API](/ja/docs/Web/API/Web_Locks_API) をデフォルトで有効にしました。複数のタブや worker で実行されている Web アプリが、使用するリソースを調整できます ([Firefox バグ 1740044](https://bugzil.la/1740044))。

#### Canvas

- [WebP](/ja/docs/Web/Media/Formats/Image_types#webp) 画像形式のエンコーダーをサポートしました。
  canvas 要素が、以下のメソッドを使用して内容物を WebP データとしてエクスポートできます: {{domxref("HTMLCanvasElement.toDataURL()")}}、{{domxref("HTMLCanvasElement.toBlob()")}}、{{domxref("OffscreenCanvas.convertToBlob", "OffscreenCanvas.toBlob")}}
  ([Firefox バグ 1511670](https://bugzil.la/1511670))。

#### DOM

- {{domxref("IntersectionObserver.IntersectionObserver()","IntersectionObserver()")}} コンストラクターが、関連づけられたパラメーターオプションで空文字列が渡された場合に、例外を発生させるのに代わって既定値 `rootMargin` を設定するようになりました ([Firefox バグ 1738791](https://bugzil.la/1738791))。

#### Media、WebRTC、Web Audio

- 複数の非推奨な非標準の静的フィールドを [WebRTC Statistics API](/ja/docs/Web/API/WebRTC_Statistics_API) から削除しました。`bitrateMean`、`bitrateStdDev`、`framerateMean`、`framerateStdDev`、`droppedFrames` が含まれます
  ([Firefox バグ 1367562](https://bugzil.la/1367562))。

### WebDriver conformance (Marionette)

- 指定した要素が持っている shadow root (open または close 状態) を取り出すコマンド `WebDriver:GetElementShadowRoot` を追加しました ([Firefox バグ 1700073](https://bugzil.la/1700073))。
- `WebDriver:ExecuteScript` および `WebDriver:ExecuteAsyncScript` で、要素の `ShadowRoot` を返そうとしたときに `cyclic object value` のエラーが発生する不具合を修正しました ([Firefox バグ 1489490](https://bugzil.la/1489490))。
- `WebDriver:Print` を、文書を PDF として出力するときにページの範囲をサポートするように拡張しました ([Firefox バグ 1678347](https://bugzil.la/1678347))。

## アドオン開発者向けの変更点一覧

- コンテンツスクリプトからグローバルまたは frame 要素のウィンドウのフレーム ID を取得する {{WebExtAPIRef("runtime.getFrameId")}} を追加しました ([Firefox バグ 1733104](https://bugzil.la/1733104))。

## 過去のバージョン

{{Firefox_for_developers(95)}}
