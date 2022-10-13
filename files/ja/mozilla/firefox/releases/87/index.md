---
title: Firefox 87 for developers
slug: Mozilla/Firefox/Releases/87
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 87 の変更点をまとめています。Firefox 87 は、米国時間 2021 年 3 月 23 日にリリースされました。

> **メモ:** Mozilla Hacks の [In March, we see Firefox 87](https://hacks.mozilla.org/2021/03/in-march-we-see-firefox-87/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- 開発者がオペレーティングシステムをライトモードやダークモードに切り替えることなく、{{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} メディアクエリーのシミュレーションに [インスペクター](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#view_media_rules_for_prefers-color-scheme) を使用できるようになりました ({{bug(1679408)}} および {{bug(1692272)}})。
- [インスペクター](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#viewing_common_pseudo-classes) を使用して、(すでにサポートしている {{cssxref(":hover")}}、{{cssxref(":active")}}、{{cssxref(":focus")}}、{{cssxref(":focus-within")}}、{{cssxref(":focus-visible")}}、{{cssxref(":visited")}} 疑似クラスに加えて) 現在選択されている要素の {{cssxref(":target")}} 疑似クラスを切り替えられるようになりました ({{bug(1689899)}})。
- Firefox 87 は、非活性の CSS 規則に関して [インスペクター](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#rule_display) を改良および不具合修正しました:

  - テーブル以外の要素について、{{cssxref("table-layout")}} プロパティを非活性としてマークするようになりました ({{bug(1551571)}})。
  - スクロールできない要素について、{{cssxref("scroll-padding")}} プロパティを (ショートハンドプロパティ・ロングハンドプロパティともに) 非活性としてマークするようになりました ({{bug(1551577)}})。
  - 以前は{{cssxref("overflow")}} の一部の値で、{{cssxref("text-overflow")}} プロパティが誤って非活性としてマークされていました ({{bug(1671457)}})。

### HTML

_変更なし。_

### CSS

- 例えばオランダ語の `IJ` など、一緒に大文字で書く二重音字を持つ言語があります。{{cssxref("::first-letter")}} 疑似要素がこれらの二重音字に配慮して、1 つの文字として扱うようになりました ({{bug(92176)}})。
- {{HTMLElement("link")}} 要素が {{cssxref(":link")}}、{{cssxref(":visited")}}、{{cssxref(":any-link")}} にマッチしないようになりました。これは Firefox の動作を、Chrome の既存の動作や最近の仕様書の変更に合わせたものです ({{bug(1687538)}})。

#### 廃止

- 以下の Firefox 固有のテーマに関連するメディア特性を、ウェブページで使用できないようにしました ({{bug(787521)}}):

  - `-moz-mac-graphite-theme`
  - `-moz-mac-lion-theme`
  - `-moz-maemo-classic`
  - `-moz-windows-classic`
  - `-moz-windows-compositor`
  - `-moz-windows-default-theme`
  - `-moz-windows-theme`
  - `-moz-scrollbar-end-backward`
  - `-moz-scrollbar-end-forward`
  - `-moz-scrollbar-start-backward`
  - `-moz-scrollbar-start-forward`
  - `-moz-scrollbar-thumb-proportional`
  - `-moz-menubar-drag`

- {{cssxref("caption-side")}} の非標準の値 (`left`、`right`、`top-outside`、`bottom-outside`) を削除して、`layout.css.caption-side-non-standard.enabled` フラグで制御するようにしました ({{bug(1688695)}})。

### JavaScript

_変更なし。_

### HTTP

- 一部の企業向け認証サービスは、TLS クライアント証明書を [CORS のプリフライトリクエストで送信する](/ja/docs/Web/HTTP/CORS#preflight_requests_and_credentials) ことを要求します。これらのサービスのユーザーは設定項目 `network.cors_preflight.allow_client_cert` で、この (仕様書に準拠しない) 動作を有効化できます ({{bug(1511151)}})。
- クロスオリジンリクエストでリファラー情報が漏洩するリスクを低減するため、デフォルトの [`Referrer-Policy`](/ja/docs/Web/HTTP/Headers/Referrer-Policy) を (`no-referrer-when-downgrade` から) [`strict-origin-when-cross-origin`](/ja/docs/Web/HTTP/Headers/Referrer-Policy#strict-origin-when-cross-origin) に変更しました ({{bug(1589074)}})。
- [`Content-Length`](/ja/docs/Web/HTTP/Headers/Content-Length) を、[CORS セーフリストレスポンスヘッダー](/ja/docs/Glossary/CORS-safelisted_response_header) のリストに追加しました ({{bug(1460299)}})。

### セキュリティ

_変更なし。_

### API

#### DOM

- {{domxref("HTMLElement.beforeinput_event", "beforeinput")}} イベントおよび {{domxref('InputEvent.getTargetRanges()', 'getTargetRanges()')}} メソッドをデフォルトで有効化しました。これらはテキスト編集の動作を、ブラウザーが DOM ツリーを変更する前にウェブアプリがオーバーライドして、パフォーマンスを向上するために入力イベントをより細かく制御できます。グローバルの `beforeinput` イベントは {{HTMLElement("input")}} 要素 (または {{htmlattrxref("contenteditable")}} 属性を `true` に設定した任意の要素) へ、要素の値が変わる直前に送信されます。{{domxref("InputEvent")}} インターフェイスの `getTargetRanges()` メソッドは、入力居便がキャンセルされなかった場合に、DOM 変更の影響を受ける静的な範囲の配列を返します。

### WebDriver conformance (Marionette)

- Fission (サイト分離) をサポートするために Marionette を書き直す作業が完了して、古い Marionette の実装を削除しました。また、古い実装と新しい実装を切り替える設定項目 `marionette.actors.enabled` も削除しました ({{bug(1669172)}})。
- フレームのコンテンツの読み込みが完了していない場合に、`WebDriver:SwitchToFrame` の呼び出しに続く WebDriver コマンドが "no such window" エラーで失敗しないようになりました ({{bug(1691348)}})。
- [クロスグループページナビゲーション](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) の後、過去に取得した要素にアクセスすると常に "stale element" エラーが発生するようになりました。この操作により "no such element" エラーが発生する可能性はなくなりました ({{bug(1690308)}})。
- `Addon:Uninstall` でアンインストールするアドオンの ID が不明である場合に、`unknown error` が発生するようになりました ({{bug(1693022)}})。

## アドオン開発者向けの変更点

- [nativeMessaging](/ja/docs/Mozilla/Add-ons/WebExtensions/Native_messaging) が [optional permission](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) になりました ({{bug(1630415)}})。

## 過去のバージョン

{{Firefox_for_developers(86)}}
