---
title: Firefox 88 for developers
slug: Mozilla/Firefox/Releases/88
---

このページでは、開発者に影響する Firefox 88 の変更点をまとめています。Firefox 88 は、米国時間 2021 年 4 月 19 日にリリースされました。

> [!NOTE]
> Mozilla Hacks の [Never too late for Firefox 88](https://hacks.mozilla.org/2021/04/never-too-late-for-firefox-88/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- 生の応答ビューと整形済みの応答ビューを切り替えるボタンを実装しました ([Firefox バグ 1693147](https://bugzil.la/1693147))。例えば、[ネットワークリクエストの詳細 > 応答タブ](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response_tab) をご覧ください。

### HTML

_変更なし。_

### CSS

- {{cssxref(":user-valid")}} および {{cssxref(":user-invalid")}} 擬似クラスを実装しました ([Firefox バグ 1694141](https://bugzil.la/1694141))。
- {{cssxref("image-set()")}} 関数表記を有効にしました ([Firefox バグ 1698133](https://bugzil.la/1698133))。また、{{cssxref("content")}} および {{cssxref("cursor")}} で使用可能になりました ([Firefox バグ 1695402](https://bugzil.la/1695402) および [Firefox バグ 1695403](https://bugzil.la/1695403))。
- MacOS の既定の `monospace` フォントを Menlo に変更しました ([Firefox バグ 1342741](https://bugzil.la/1342741))。
- {{cssxref("visibility")}} の値 `collapse` を、ルビに実装しました ([Firefox バグ 1697529](https://bugzil.la/1697529))。
- {{cssxref("ruby-position")}} の値 `alternate` を実装して、プロパティの新たな初期値に設定しました ([Firefox バグ 1694748](https://bugzil.la/1694748))。
- {{cssxref("outline")}} CSS プロパティを、{{cssxref("border-radius")}} で作成したアウトラインに従うように更新しました。この作業の一環で、非標準の {{cssxref("-moz-outline-radius")}} プロパティを削除しました。([Firefox バグ 315209](https://bugzil.la/315209) および [Firefox バグ 1694146](https://bugzil.la/1694146).)

#### 廃止

- {{cssxref(":-moz-submit-invalid")}} 擬似クラスを設定項目で無効化したため、ウェブコンテンツで使用できなくなりました ([Firefox バグ 1694129](https://bugzil.la/1694129))。
- 非標準の {{cssxref(":-moz-ui-invalid")}} および {{cssxref(":-moz-ui-valid")}} の、既定のスタイルを削除しました ([Firefox バグ 1693969](https://bugzil.la/1693969))。

### JavaScript

- [RegExp match indices](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) をサポートしました ([Firefox バグ 1519483](https://bugzil.la/1519483))。
- [`Intl.DisplayNames()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames) および [`Intl.ListFormat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat) で、コンストラクターに渡す `options` が [オブジェクト](/ja/docs/Learn_web_development/Core/Scripting/Object_basics) であるかを厳密に確認して、文字列や他のプリミティブ値を使用した場合に例外が発生するようになりました ([Firefox バグ 1696881](https://bugzil.la/1696881))。

### HTTP

- Firefox 90 で FTP を完全に削除するため、すべてのリリースで FTP を無効にしました (設定項目 `network.ftp.enabled` の既定値を `false` にします) ([Firefox バグ 1691890](https://bugzil.la/1691890))。この変更に伴って拡張機能の設定 [`browserSettings.ftpProtocolEnabled`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled) が読み取り専用になり、ブラウザー拡張機能が自身を FTP の [プロトコルハンドラー](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) として登録できるようになります ([Firefox バグ 1626365](https://bugzil.la/1626365))。

### セキュリティ

_変更なし。_

### API

#### DOM

- すでに [`aborted`](/ja/docs/Web/API/AbortSignal/aborted) が設定されている {{domxref("AbortSignal")}} を返す静的メソッド [`AbortSignal.abort()`](/ja/docs/Web/API/AbortSignal/abort_static) が使用可能になりました ([Firefox バグ 1698468](https://bugzil.la/1698468)).

### WebDriver conformance (Marionette)

- `--marionette` コマンドライン引数または `MOZ_MARIONETTE` 環境変数が指定されていなければ、Marionette が有効にならないようになりました。よって、設定項目 `marionette.enabled` を使用しなくなりました。この変更に伴って、`navigator.webdriver` の状態が、Marionette の有効状態を正しく反映するようになりました ([Firefox バグ 1593343](https://bugzil.la/1593343))。
- `down` および `up` 以外のポインターアクションが、不適切にボタンを押す結果になっていた不具合を修正しました ([Firefox バグ 1686361](https://bugzil.la/1686361))。
- `WebDriver:GetCurrentURL` で競合状態が発生して、コマンドが過去に開いたページの URL を返したり、Marionette がハングアップしたりする不具合を修正しました ([Firefox バグ 1664881](https://bugzil.la/1664881))。

## アドオン開発者向けの変更点

- {{WebExtAPIRef("tabs.onUpdated")}} イベントが発生するプロパティを制限するために、`url` を使用できるようになりました ([Firefox バグ 1680279](https://bugzil.la/1680279))。

## 過去のバージョン

{{Firefox_for_developers(87)}}
