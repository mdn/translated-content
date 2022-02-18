---
title: Firefox 94 for developers
slug: Mozilla/Firefox/Releases/94
tags:
  - '94'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 94 の変更点をまとめています。Firefox 94 は、2021 年 11 月 2 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

変更なし。

### JavaScript

変更なし。

### API

- 複雑な JavaScript オブジェクトをコピーするための、{{domxref("structuredClone()")}} グローバル関数をサポートしました ({{bug(1722576)}})。

#### DOM

- 開発者が [`HTMLElement.enterkeyhint`](/ja/docs/Web/API/HTMLElement/enterkeyhint) または [`enterkeyhint`](/ja/docs/Web/HTML/Global_attributes/enterkeyhint) グローバル属性を使用して、仮想キーボードで使用する Enter キーのラベルやアイコンのヒントを与えられるようになりました ({{bug(1648332)}})。
- {{domxref("HTMLScriptElement.supports()")}} 静的メソッドをサポートしました。JavaScript モジュールやクラシックスクリプトのような、特定の種類のスクリプトをブラウザーがサポートしているかを確認するための、シンプルかつ統一された手段を提供をします ({{bug(1729239)}})。
- {{domxref("ShadowRoot.delegatesFocus")}} プロパティをサポートしました。[shadow DOM を追加したとき](/ja/docs/Web/API/Element/attachShadow) に `delegatesFocus` プロパティが設定されていたかをコードで確認できます ({{bug(1413836)}})。

### WebDriver conformance (Marionette)

- chrome スコープが有効であるときに、`WebDriver:GetWindowHandle` および `WebDriver:GetWindowHandles` がタブの代わりにブラウザーウィンドウのハンドラーを返すようになりました ({{bug(1729291)}})。

## アドオン開発者向けの変更点一覧

- Cookie がトップレベルサイトで分割された記憶領域にあるときに、Cookie のファーストパーティ URL を表す `partitionKey` を {{WebExtAPIRef('cookies.get')}}、{{WebExtAPIRef('cookies.getAll')}}、{{WebExtAPIRef('cookies.set')}}、{{WebExtAPIRef('cookies.remove')}}、{{WebExtAPIRef('cookies.cookie')}} でサポートしました ({{bug(1669716)}})。
- コンテキストメニューを表示したときに、{{WebExtAPIRef('menus.OnClickData','menus.OnClickData.srcUrl')}} が現在の URL (リダイレクト後) の代わりに、クリックした要素の `src` 属性の値を返すようになりました ({{bug(1659155)}})。

## 過去のバージョン

{{Firefox_for_developers(93)}}
