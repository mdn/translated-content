---
title: Firefox 86 for developers
slug: Mozilla/Firefox/Releases/86
l10n:
  sourceCommit: c6dbc4ff96451887b908b46c8e70bcfec1c2c48c
---

このページでは、開発者に影響する Firefox 86 の変更点をまとめています。Firefox 86 は、米国時間 2021 年 2 月 23 日にリリースされました。

> [!NOTE]
> Mozilla Hacks の [A Fabulous February Firefox — 86!](https://hacks.mozilla.org/2021/02/a-fabulous-february-firefox-86/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- Firefox 74 で非推奨になった [ウェブコンソールのヘルパー関数](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) `cd()` を削除しました。[iframe での作業](https://firefox-source-docs.mozilla.org/devtools-user/working_with_iframes/index.html) で説明している `<iframe>` コンテキストピッカーが同じ機能を提供しており、よりよいものです! 詳しくは [Firefox バグ 1607741](https://bugzil.la/1607741) をご覧ください。
- {{cssxref("margin")}} および {{cssxref("padding")}} のさまざまな一括指定プロパティや個別指定プロパティを、テーブル内部の要素で非活性としてマークするようになりました。これらのプロパティは効果がないためです ([Firefox バグ 1551569](https://bugzil.la/1551569))。
- 以前はグリッドアイテムで、{{cssxref("order")}} プロパティが誤って非活性としてマークされていました。この不具合を [Firefox バグ 1579017](https://bugzil.la/1579017) で修正しました。

### HTML

_変更なし。_

### SVG

- SVG フィルターで [`lighter` operator](/ja/docs/Web/SVG/Reference/Attribute/operator#fecomposite) を持つ {{SVGElement("feComposite")}} 要素が使用可能になりました ([Firefox バグ 1518099](https://bugzil.la/1518099))。operator は、2 つのソース画像のピクセルを加算します。

### CSS

- `-webkit-autofill` を別名にして、{{cssxref(":autofill")}} 擬似クラスを有効にしました ([Firefox バグ 1685675](https://bugzil.la/1685675)) および ([Firefox バグ 1475316](https://bugzil.la/1475316))。
- {{cssxref("list-style-image")}} プロパティが、有効な {{cssxref("image")}} を受け入れるようになりました ([Firefox バグ 1685078](https://bugzil.la/1685078))。

### JavaScript

- [`Intl.DisplayNames`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames) ビルトインオブジェクトを、デフォルトで有効にしました。これは言語、地域、文字の表示名で一貫性がある翻訳を可能にします:

  ```js
  // 英語の通貨コードの表示名を取得する
  let currencyNames = new Intl.DisplayNames(["en"], { type: "currency" });
  // 通貨名を取得する
  currencyNames.of("USD"); // "US Dollar"
  currencyNames.of("EUR"); // "Euro"
  ```

  詳しくは [Firefox バグ 1654116](https://bugzil.la/1654116) をご覧ください。

### API

#### DOM

- タブで別のドメインからページを読み込んだときに [`Window.name`](/ja/docs/Web/API/Window/name) プロパティを空文字列にリセットするようになりました。元のページが再読み込みされた場合 (例えば "戻る" ボタンを押す) は、復元します。これは信頼されないページが、前のページがプロパティに保存していた可能性がある情報にアクセスすることを防ぎます (新しいページもこのデータを変更する可能性があり、元のページを再読みした場合にこれを読み取られるかもしれません)。詳しくは [Firefox バグ 1685089](https://bugzil.la/1685089) をご覧ください。
- [`EventTarget.addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) で `signal` オプションをサポートしました。このオプションで、[`AbortSignal`](/ja/docs/Web/API/AbortSignal) をメソッドへ渡すことができます。`AbortSignal` は、後で `abort()` を呼び出すことでリスナーを削除するために使用できます。詳しくは [Firefox バグ 1679204](https://bugzil.la/1679204) をご覧ください。

### WebDriver conformance (Marionette)

- `WebDriver:ElementClick` を更新し、実際の `click` イベントの前に `mousemove` イベントを合成するようにしました ([Firefox バグ 1684002](https://bugzil.la/1684002))。

#### 既知の不具合

- フレームのコンテンツの読み込みが完了していない場合に、`WebDriver:SwitchToFrame` の呼び出しに続く WebDriver コマンドが "no such window" エラーで失敗します ([Firefox バグ 1691348](https://bugzil.la/1691348))。
- [クロスグループページナビゲーション](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) の後、過去に取得した要素にアクセスすると常に "stale element" エラーが発生せず、"no such element" エラーが発生する場合があります。これを防ぐには、設定項目 `marionette.actors.enabled` を `false` に設定してください ([Firefox バグ 1690308](https://bugzil.la/1690308))。

#### 廃止

- 非推奨の `Marionette:ActionChain` および `Marionette:MultiAction` コマンドのサポートを削除しました ([Firefox バグ 1683755](https://bugzil.la/1683755))。

## アドオン開発者向けの変更点

- [Host パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) が、[tabs API](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs) で特権が必要な部分へのアクセスを認められるようになりました ([Firefox バグ 1679688](https://bugzil.la/1679688))。
- [`windows.create()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/windows/create) を呼び出す際のオプションに、`focused: false` を指定しても無視するようになりました ([Firefox バグ 1253129](https://bugzil.la/1253129))。
- {{WebExtAPIRef("identity.getRedirectURL")}} がループバックアドレスに対応するようになりました。詳しくは [URL のリダイレクト](/ja/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url)を参照してください（[Firefox バグ 1614919](https://bugzil.la/1614919)）。
- ページお ID が {{WebExtAPIRef("history.onTitleChanged")}} の一部として返されるようになりました（[Firefox バグ 1678611](https://bugzil.la/1678611)）。

## 過去のバージョン

{{Firefox_for_developers(85)}}
