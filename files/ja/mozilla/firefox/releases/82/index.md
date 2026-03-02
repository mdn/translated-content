---
title: Firefox 82 for developers
slug: Mozilla/Firefox/Releases/82
---

このページでは、開発者に影響する Firefox 82 の変更点をまとめています。Firefox 82 は、2020 年 10 月 20 日にリリースされました。

> [!NOTE]
> Mozilla Hacks の [Coming through with Firefox 82](https://hacks.mozilla.org/2020/10/coming-through-with-firefox-82/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [ネットワークモニター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) を使用して [server-sent events を調査できる](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_server-sent_events/index.html) ようになりました ([Firefox バグ 1640857](https://bugzil.la/1640857))。
- ネットワークモニターの*メッセージ*パネルを*応答*パネルに統合しました。メッセージ (例えば WebSockets や server-sent events) を応答の一覧で確認できます ([Firefox バグ 1636421](https://bugzil.la/1636421))。

### HTML

- [`<input type="color">`](/ja/docs/Web/HTML/Reference/Elements/input/color) で使用するカラーピッカーが、キーボードで操作可能になりました ([Firefox バグ 1526820](https://bugzil.la/1526820))。
- [`<iframe sandbox>`](/ja/docs/Web/HTML/Reference/Elements/iframe) 属性の `allow-downloads` フラグをサポートしました ([Firefox バグ 1656212](https://bugzil.la/1656212))。

### CSS

- {{CSSxRef("::file-selector-button", "::file-selector-button")}} 擬似要素を新たにサポートしました。この擬似要素は、[`<input type="file">`](/ja/docs/Web/HTML/Reference/Elements/input/file) 要素の内部にあるファイル選択ボタンを表します ([Firefox バグ 1635675](https://bugzil.la/1635675), [Firefox バグ 1662478](https://bugzil.la/1662478))。
- {{CSSxRef(":is", ":is()")}} および {{CSSxRef(":where", ":where()")}} 擬似クラスのエラー回復を改良しました。これらの擬似クラスは寛容なセレクターリストを受け入れるようになり、リスト内に無効なセレクターがあってもリスト全体が無効にはなりません ([Firefox バグ 1664718](https://bugzil.la/1664718))。
- `appearance: button` をボタンのみに適用するようになりました。従って、{{CSSxRef("appearance")}} の値 `button` は `auto` のように動作します ([Firefox バグ 1662703](https://bugzil.la/1662703))。

#### 廃止

- 独自仕様である [`:-moz-user-disabled`](/ja/docs/Web/CSS/:-moz-user-disabled) 擬似クラスを削除しました ([Firefox バグ 1664432](https://bugzil.la/1664432))。

### HTTP

- HTML [`<a>`](/ja/docs/Web/HTML/Reference/Elements/a) 要素で `download` 属性が設定されている場合 ([同一オリジンの URL](/ja/docs/Web/Security/Defenses/Same-origin_policy)) に、[`Content-Disposition`](/ja/docs/Web/HTTP/Reference/Headers/Content-Disposition) ヘッダーの `inline` ディレクティブが無視されるようになりました。`Content-Disposition` ヘッダーの `filename` を設定すると、`download` 属性で指定したファイル名より優先して使用されますので注意してください ([Firefox バグ 1658877](https://bugzil.la/1658877))。

### API

#### 新規 API

- [Media Session API](/ja/docs/Web/API/Media_Session_API) をデフォルトで有効にしました ([Firefox バグ 1665496](https://bugzil.la/1665496))。

#### DOM

- [`Document.execCommand()`](/ja/docs/Web/API/Document/execCommand) の入れ子または再帰的な呼び出しのサポートを廃止して、`false` が返るようになりました ([Firefox バグ 1634262](https://bugzil.la/1634262))。
- [仕様書](https://w3c.github.io/pointerevents/#setting-pointer-capture) に従って、[`Element.setPointerCapture()`](/ja/docs/Web/API/Element/setPointerCapture) でポインターの `id` が無効である場合に `NotFoundError` 例外が発生するようになりました ([Firefox バグ 1662124](https://bugzil.la/1662124))。以前は誤って `InvalidPointerId` 例外が発生していました。
- タブで別のドメインからページを読み込んだときに [`window.name`](/ja/docs/Web/API/Window/name) プロパティを空文字列リセットして、元のページが (例えば "戻る" ボタンで) 再読み込みされたときに復元するようになりました。これは信頼されないページが、前のページが変数に保存していた可能性がある情報にアクセスすることを防ぎます。この変更は、ドメイン間のメッセージ送信に `window.name` を使用するフレームワークに影響があります ([Firefox バグ 444222](https://bugzil.la/444222))。

### WebDriver conformance (Marionette)

- より現実的なユーザーナビゲーションをシミュレートするため、サポートされるすべてのナビゲーションコマンドを親プロセスに移動しました ([Firefox バグ 1612831](https://bugzil.la/1612831))。
- WebDriver 仕様書との適合性を向上させるため、すべてのコマンドで現在またはトップレベルの閲覧コンテキストの確認を更新しました ([Firefox バグ 1493108](https://bugzil.la/1493108))。
- `WebDriver:ElementClick` で、click イベントが実際に合成される前にコマンドが返る場合がある不具合を修正しました ([Firefox バグ 1394354](https://bugzil.la/1394354))。

## アドオン開発者向けの変更点

- [`tabs.captureTab()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab) および [`tabs.captureVisibleTab()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureVisibleTab) メソッドで、与えた [`options`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails) オブジェクトの `rect` プロパティで関連するタブのコンテンツ領域を取得する、あるいはオブジェクトを与えない場合にタブで見えている領域を取得することが可能になりました ([Firefox バグ 1636508](https://bugzil.la/1636508))。以前は `rect` プロパティが使用できず、これらのメソッドは常に関連するタブで見ている領域を取得していました。

## 過去のバージョン

{{Firefox_for_developers(81)}}
