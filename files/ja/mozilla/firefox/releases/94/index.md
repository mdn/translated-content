---
title: Firefox 94 for developers
slug: Mozilla/Firefox/Releases/94
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

このページでは、開発者に影響する Firefox 94 の変更点をまとめています。Firefox 94 は、2021 年 11 月 2 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

重要な変更なし。

### CSS

重要な変更なし。

### JavaScript

重要な変更なし。

### API

- 複雑な JavaScript オブジェクトをコピーするための、{{domxref("structuredClone()")}} グローバル関数をサポートしました ([Firefox バグ 1722576](https://bugzil.la/1722576))。

#### DOM

- 開発者が [`HTMLElement.enterkeyhint`](/ja/docs/Web/API/HTMLElement/enterKeyHint) または [`enterkeyhint`](/ja/docs/Web/HTML/Reference/Global_attributes/enterkeyhint) グローバル属性を使用して、仮想キーボードで使用する Enter キーのラベルやアイコンのヒントを与えられるようになりました ([Firefox バグ 1648332](https://bugzil.la/1648332))。
- {{domxref("HTMLScriptElement.supports_static", "HTMLScriptElement.supports()")}} 静的メソッドをサポートしました。JavaScript モジュールやクラシックスクリプトのような、特定の種類のスクリプトをブラウザーがサポートしているかを確認するための、シンプルかつ統一された手段を提供をします ([Firefox バグ 1729239](https://bugzil.la/1729239))。
- {{domxref("ShadowRoot.delegatesFocus")}} プロパティをサポートしました。[shadow DOM を追加したとき](/ja/docs/Web/API/Element/attachShadow) に `delegatesFocus` プロパティが設定されていたかをコードで確認できます ([Firefox バグ 1413836](https://bugzil.la/1413836))。

### WebDriver conformance (Marionette)

- chrome スコープが有効であるときに、`WebDriver:GetWindowHandle` および `WebDriver:GetWindowHandles` がタブの代わりにブラウザーウィンドウのハンドラーを返すようになりました ([Firefox バグ 1729291](https://bugzil.la/1729291))。

### HTTP

- [`Clear-Site-Data`](/ja/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) レスポンスヘッダーの `cache` ディレクティブは既定では無効になっています。
  これは環境設定 `privacy.clearsitedata.cache.enabled` ([Firefox bug 1729291](https://bugzil.la/1729291)) を使って有効にできます。

## アドオン開発者向けの変更点一覧

- Cookie がトップレベルサイトで分割された記憶領域にあるときに、Cookie のファーストパーティ URL を表す `partitionKey` を {{WebExtAPIRef('cookies.get')}}、{{WebExtAPIRef('cookies.getAll')}}、{{WebExtAPIRef('cookies.set')}}、{{WebExtAPIRef('cookies.remove')}}、{{WebExtAPIRef('cookies.cookie')}} でサポートしました ([Firefox バグ 1669716](https://bugzil.la/1669716))。
- コンテキストメニューを表示したときに、{{WebExtAPIRef('menus.OnClickData','menus.OnClickData.srcUrl')}} が現在の URL (リダイレクト後) の代わりに、クリックした要素の `src` 属性の値を返すようになりました ([Firefox バグ 1659155](https://bugzil.la/1659155))。

## 過去のバージョン

{{Firefox_for_developers(93)}}
