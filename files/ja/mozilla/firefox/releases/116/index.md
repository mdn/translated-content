---
title: Firefox 116 for developers
slug: Mozilla/Firefox/Releases/116
l10n:
  sourceCommit: 1d477db7a926b2648d0449de97e19689e3ccacab
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 116 の変更点をまとめています。Firefox 116 は、2023 年 8 月 1 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- [`input`](/ja/docs/Web/HTML/Element/input#dirname) および [`textarea`](/ja/docs/Web/HTML/Element/textarea#dirname) 要素で [`dirname`](/ja/docs/Web/HTML/Element/input#dirname) 属性をサポートしました。
  この属性は、フォームをサーバーに送信するときにテキストの書字方向の情報 (`ltr` または `rtl`) を渡すことができます ([Firefox bug 675943](https://bugzil.la/675943))。

### CSS

- 要素がたどる経路を定義するために使用する {{cssxref("offset-path")}} プロパティの構文を更新しました。新しい構文では `none`、または `<offset-path>` か `<coord-box>` のいずれかの値を設定できます。新しい `<offset-path>` の値は `<ray()>`、`<url>`、`<basic-shape>` を指定できます。[`<coord-box>`](/ja/docs/Web/CSS/box-edge) の値は旧来の `<geometry-box>` の値を置き換えるもので、要素のボックスモデルに基づく経路の形状を指定できます。`<basic-shape>` および `<coord-box>` の値を使用するには、それぞれ `layout.css.motion-path-basic-shapes.enabled` および `layout.css.motion-path-coord-box.enabled` の設定を有効にすることが必要です ([Firefox bug 1598156](https://bugzil.la/1598156))、([Firefox bug 1837305](https://bugzil.la/1837305))。

### Accessibility (ARIA)

- [`image`](/ja/docs/Web/Accessibility/ARIA/Roles/img_role) ロールを `img` の同義語としてサポートしました。
  これにより、完全な単語または完全な単語を連結したものである多くのロール名との一貫性が保たれます ([Firefox bug 1829269](https://bugzil.la/1829269))。

### JavaScript

- [`Intl.NumberFormat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) で新しい [コンストラクターのオプション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) をサポートしました。数値の丸め方を制御するオプション (`roundingIncrement`、`roundingMode`、`roundingPriority`)、整数で末尾のゼロを表示する方法を制御するオプション (`trailingZeroDisplay`)、千や百万などを示す区切り文字を使用するかを制御するオプション (`useGrouping`) を使用できます。
  また、数値の範囲を整形する [`formatRange()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange) および [`formatRangeToParts()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts) メソッドも新たにサポートしました ([Firefox bug 1795756](https://bugzil.la/1795756))。
- [`Intl.PluralRules`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) で、(`Intl.NumberFormat` の一連の変更の一部として) `roundingIncrement`、`roundingMode`、`roundingPriority`、`trailingZeroDisplay` の [コンストラクターのオプション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) および [`selectRange()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) メソッドをサポートしました ([Firefox bug 1795756](https://bugzil.la/1795756))。

### SVG

- [長さの単位](/ja/docs/Web/SVG/Content_type#length) `q` (`1q = 1cm の 40 分の 1`) をサポートしました ([Firefox bug 1836995](https://bugzil.la/1836995))。

### HTTP

- [Content-Security-Policy](/ja/docs/Web/HTTP/CSP) の構成で、[ハッシュを使用して外部 JavaScript ファイルをホワイトリストに登録する](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#whitelisting_external_scripts_using_hashes) 指定方法をサポートしました。以前は、インラインスクリプトに限りハッシュを使用してホワイトリストに登録できました ([Firefox bug 1409200](https://bugzil.la/1409200))。

### API

#### DOM

- {{domxref("TextMetrics.fontBoundingBoxAscent")}} および {{domxref("TextMetrics.fontBoundingBoxDescent")}} プロパティをサポートしました。
  これらのメトリックはそれぞれ、{{domxref("CanvasRenderingContext2D.textBaseline")}} からテキストの描画に使用するすべてのフォントが外接する矩形までの、上側および下側の距離を返します ([Firefox bug 1801198](https://bugzil.la/1801198))。

#### Media、WebRTC、Web Audio

- [Audio Output Devices API](/ja/docs/Web/API/Audio_Output_Devices_API) を、Android を除くすべてのプラットフォームでサポートしました。
  この API は、ウェブアプリケーションがブラウザーや OS が既定で使用すべきデバイスでなく、許可された Bluetooth ヘッドセット、スピーカーフォン、あるいは他のデバイスへ音声出力をリダイレクトすることを可能にします。
  影響を受ける API には {{domxref("MediaDevices.selectAudioOutput()")}}、{{domxref("MediaDevices.enumerateDevices()")}}、[`HTMLMediaElement.setSinkId()`](/ja/docs/Web/API/HTMLMediaElement/setSinkId)、[`HTMLMediaElement.sinkId`](/ja/docs/Web/API/HTMLMediaElement/sinkId) および [`Permissions-Policy: speaker-selection`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) 許可ポリシーが含まれます [Firefox bug 1498512](https://bugzil.la/1498512")。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- ユーザーが自動化セッションを終了できる `session.end` コマンドをサポートしました。以前、これは WebDriver Classic と WebDriver BiDi の両方を使用するセッションに限り使用できました。現在は WebDriver BiDi だけのセッションでも使用可能になりました ([Firefox bug 1829337](https://bugzil.la/1829337))。
- `session.new` コマンドで [capability matching](/ja/docs/Web/WebDriver/Capabilities) をサポートしました。ブラウザー名やプラットフォーム名など、対象ブラウザーに関する想定値を定義できます。また、たとえば安全でない証明書を受け入れるかを指定するなど、セッションの設定にも使用できます ([Firefox bug 1731730](https://bugzil.la/1731730))。
- シャドウルートが、戻り値のルートであるときに正しくシリアライズされるようになりまし ([Firefox bug 1836514](https://bugzil.la/1836514))。
- `network` イベントの開始時刻の情報の名前を `originTime` から `timeOrigin` に変更しました ([Firefox bug 1836926](https://bugzil.la/1836926))。
- `network` の `network.responseCompleted` イベントが、リダイレクトを伴うナビゲーション要求でも正しく発生するようになりました ([Firefox bug 1838238](https://bugzil.la/1838238))。

#### Marionette

- `moz:useNonSpecCompliantPointerOrigin` 機能のサポートを廃止しました。引き続きこの機能が必要なユーザーは、サポートが続く限り Firefox 115 ESR リリースを使用できます。問題を発見した場合は [Remote Protocol :: Marionette](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Marionette) にバグを報告してください ([Firefox bug 1490258](https://bugzil.la/1490258))。
- 指定されたブラウジングコンテクストで古くなった要素 (ページで以前見たことがある DOM 要素) と未知の要素を見分けることを妨げていたリグレッションを修正しました ([Firefox bug 1822466](https://bugzil.la/1822466))。
- 新しいセッションを生成する際に、最初のコンテンツが読み込まれることを適切に待つようになりました ([Firefox bug 1838381](https://bugzil.la/1838381))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("runtime.setUninstallURL")}} で提供される、拡張機能がアンインストールされたときに訪れていたページの URL の最大文字数が 255 から 1023 に増加しました ([Firefox bug 1835723](https://bugzil.la/1835723))。
- 拡張機能のブラウザーアクションのユーザー指定設定を提供する、{{WebExtAPIRef("action.getUserSettings")}} を追加しました ([Firefox bug 1814905](https://bugzil.la/1814905))。
- {{WebExtAPIRef("tabs.Tab")}}、{{WebExtAPIRef("tabs.onUpdated")}}、{{WebExtAPIRef("tabs.update")}}、{{WebExtAPIRef("tabs.query")}} で `autoDiscardable` をサポートしました ([Firefox bug 1809094](https://bugzil.la/1809094))。

## Developer Tools

- [カスタムフォーマッター](https://firefox-source-docs.mozilla.org/devtools-user/custom_formatters/index.html) をサポートしました ([Firefox bug 1752760](https://bugzil.la/1752760))。
- マークアップビューで、`container-type` プロパティが `size` または `inline-size` である要素に "container" バッジを追加しました ([Firefox bug 1789193](https://bugzil.la/1789193))。
- カスタム要素ルートに設定した CSS カスタムプロパティがインスペクターで表示されない不具合を修正しました ([Firefox bug 1836755](https://bugzil.la/1836755))。
- ネットワークモニターで、要求が DNS over HTTPS で名前解決されたかを表示するようになりました ([Firefox bug 1810195](https://bugzil.la/1810195))。
- ネットワークモニターで `Proxy-Authorization` ヘッダーを削除しました ([Firefox bug 1816115](https://bugzil.la/1816115))。

## 過去のバージョン

{{Firefox_for_developers(115)}}
