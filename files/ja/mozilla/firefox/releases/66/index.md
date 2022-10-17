---
title: Firefox 66 for developers
slug: Mozilla/Firefox/Releases/66
---

{{FirefoxSidebar}}

Firefox 66 は、米国時間 2019 年 3 月 19 日 にリリースされました。このページでは、開発者に影響する Firefox 66 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [ウェブコンソール](/ja/docs/Tools/Web_Console) のオートコンプリートのポップアップから、JavaScript の getter を実行できるようになりました ({{bug(1499289)}})。
- [レスポンシブデザインモード](/ja/docs/Tools/Responsive_Design_Mode) で動作しなくなっていた、Window の {{domxref("Window.alert()", "alert()")}}、{{domxref("Window.prompt()","prompt()")}}、{{domxref("Window.confirm()","confirm()")}} メソッドが再び動作するようになりました ({{bug(1273997)}})。
- コンソールの出力を右クリックして "**表示メッセージをクリップボードにエクスポートする**" を選択すると、コンソールの出力をクリップボードにコピーできます。

### HTML

- `file:` URL から読み込んだ UTF-8 エンコードされた HTML (およびプレーンテキスト) ファイルについて、`<meta charset="utf-8">` または UTF-8 BOM がないものもサポートしました。このようなファイルをサーバーにアップロードする前に、ローカル環境で作業しやすくするためです。サーバーでは、このようなファイルに `Content-Type` HTTP ヘッダーで `charset=utf-8` を送信しなければなりません。ローカルファイルで使用する検出方法は、ネットワーク環境の逐次読み込みで問題が発生します ({{bug(1071816)}})。

#### 廃止

- {{HTMLElement("input")}} 要素から `x-moz-errormessage` 属性を削除しました ({{bug(1513890)}})。独自の検証メッセージを実装するには、代わりに {{domxref("Constraint_validation", "Constraint validation 機能", "", "1")}} を使用してください。

### CSS

- [Scroll anchoring](https://drafts.csswg.org/css-scroll-anchoring/) を、デスクトップ版 Firefox に実装しました (モバイル版は未実装です)。{{cssxref("overflow-anchor")}} プロパティを含みます ({{bug(1305957)}})。
- [属性セレクター](/ja/docs/Web/CSS/Attribute_selectors) で、大文字・小文字の区別に関する修飾子 `s` をサポートしました ({{Bug(1512386)}})。
- いくつかの [論理的プロパティ](/ja/docs/Web/CSS/CSS_Logical_Properties) ショートハンドと、フローに関係する border radius プロパティを実装しました:

  - {{cssxref("padding-block")}} および {{cssxref("padding-inline")}} ({{bug(1519847)}})。
  - {{cssxref("margin-block")}} および {{cssxref("margin-inline")}} ({{bug(1519944)}})。
  - {{cssxref("inset")}}、{{cssxref("inset-block")}}、{{cssxref("inset-inline")}} ({{bug(1520229)}})。
  - {{cssxref("border-block-color")}}、{{cssxref("border-block-style")}}、{{cssxref("border-block-width")}}、{{cssxref("border-inline-color")}}、{{cssxref("border-inline-style")}}、{{cssxref("border-inline-width")}} ({{bug(1520236)}})。
  - {{cssxref("border-block")}}、{{cssxref("border-inline")}} ({{bug(1520396)}})。
  - {{cssxref("border-start-start-radius")}}、{{cssxref("border-start-end-radius")}}、{{cssxref("border-end-start-radius")}}、{{cssxref("border-end-end-radius")}} ({{bug(1520684)}})。

- {{cssxref("@media/overflow-inline", "overflow-inline")}} および {{cssxref("@media/overflow-block", "overflow-block")}} メディアクエリーを実装しました ({{Bug(1422235)}})。
- 仕様書で公表された規則に従って、{{cssxref("grid-template-columns")}} および {{cssxref("grid-template-rows")}} のアニメーションを実装しました ({{Bug(1348519)}})。
- テーブルのセルや列の幅で、パーセンテージを使用した {{cssxref("calc")}} をサポートしました ({{bug(957915)}})。
- `min-content` および `max-content` キーワードが、接頭辞なしで使用可能になりました ({{bug(1322780)}})。これらは以下のプロパティに設定できます:

  - {{cssxref("width")}}
  - {{cssxref("height")}}
  - {{cssxref("flex-basis")}}
  - {{cssxref("min-width")}}
  - {{cssxref("max-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("max-height")}}
  - {{cssxref("min-block-size")}}
  - {{cssxref("min-inline-size")}}
  - {{cssxref("max-block-size")}}
  - {{cssxref("max-inline-size")}}
  - {{cssxref("block-size")}}
  - {{cssxref("inline-size")}}

### SVG

_変更なし。_

#### 廃止

- [`xml:base`](/ja/docs/XML_introduction/xml:base) 属性のサポートを廃止しました ({{Bug(903372)}})。

### JavaScript

_変更なし。_

### API

#### API の追加と変更

- Release 版の Firefox 66 を公開した後すみやかに、音声の自動再生がデフォルトでブロックされます ({{bug(1487844)}}。ロールアウトについては {{bug(1535667)}} をご覧ください)。この機能は、すべてのユーザーへ段階的に適用されます。

#### DOM

- {{domxref("HTMLSlotElement.assignedElements()")}} メソッドを実装しました ({{bug(1425685)}})。
- {{domxref("TextEncoder.encodeInto()")}} メソッドを実装しました ({{bug(1514664)}})。

#### DOM イベント

- {{domxref("InputEvent.inputType")}} プロパティを実装しました ({{bug(1447239)}})。
- {{domxref("Window.event")}} および {{domxref("Event.returnValue")}} プロパティ (元は IE の独自機能であり、互換性の理由でほかのブラザーもサポートしました) を、Firefox 66 で再導入しました。それぞれバージョン 63 や 64 で追加した後、互換性の問題で再び削除していました。
- バージョン 66 より、{{event("keypress")}} イベントオブジェクトの {{domxref("KeyboardEvent.keyCode")}} プロパティが 0 であるとき、値が {{domxref("KeyboardEvent.charCode")}} と同じになります。逆に `charCode` が 0 であるときは、`keyCode` と同じ値になります。このミラーリング動作はほかのブラウザーと一致しており、これに関連する互換性の問題のほとんどが解決すると思われます。ただし 一部の JavaScript ライブラリーで、ブラウザー検出によって新たな問題が発生する可能性があります。仕様書の用語では、_split model_ から _conflated model_ に切り替えました (UI Event 仕様書の [How to determine keyCode for keypress events](https://w3c.github.io/uievents/#determine-keypress-keyCode) をご覧ください)。

#### メディア、Web Audio、WebRTC

- 新しい [AV1 動画コーデック](/ja/docs/Web/Media/Formats/Video_codecs#AV1) を macOS および Windows (Intel プロセッサー用) で、デフォルトで有効にしました。Linux は Firefox 67 でサポートする予定です ({{bug(1521181)}}、{{bug(1452146)}}、{{bug(1534814)}})。
- {{domxref("MediaDevices")}} の {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} メソッド (`navigator.mediaDevices.getDisplayMedia()` として使用可能) を追加して、仕様書に一致させました。このメソッドは、スクリーンまたはスクリーンの一部を {{domxref("MediaStream")}} として取得して、操作または共有できます ({{bug(1321221)}})。
- スクリーンやウィンドウの内容を取得するための、Firefox 独自の {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} に基づくメソッドを最終的に非推奨にする取り組みの一部として、非標準の `mediaSource` 定数を値 `screen` および `window` と同等に扱うようになりました。どちらも、ユーザーが選択するスクリーンやウィンドウのリストを提供します ({{bug(1474376)}})。
- ローカル出力の {{domxref("RTCRTPStreamStats")}} オブジェクトに {{domxref("RTCRtpStreamStats.qpSum", "qpSum")}} を追加しました。これは、ビデオトラックで送受信するすべてのフレームの量子化パラメーターの合計を表します。この値が高ければ、ストリームはより圧縮されていると考えられます ({{bug(1347070)}})。
- 将来の Firefox で Feature Policy をサポートするための取り組みで、コンテンツに適切なオリジンが存在しない状況では {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使用できなくなりました。例えばサンドボックス化された {{HTMLElement("iframe")}}、ユーザーがアドレスバーに入力した `data` URL から呼び出した場合です。詳しくは {{SectionOnPage("/ja/docs/Web/API/MediaDevices/getUserMedia", "Security")}} をご覧ください ({{bug(1371741)}})。

#### 廃止

- WebRTC の古い {{domxref("PeerConnection.getStats()")}} メソッドと、これに関連付けられた型を削除しました ({{bug(1328194)}})。

### ネットワーク

- {{httpheader("Accept")}} ヘッダーの既定値が `*/*` になりました ({{bug(1417463)}})。

### セキュリティ

_変更なし。_

### プラグイン

_変更なし。_

### WebDriver conformance (Marionette)

#### API の変更点

- 新しいブラウジングコンテキストを開く操作をサポートするため `WebDriver:NewWindow` を追加しました。ウィンドウまたはタブのいずれかを開くことができます ({{bug(1504756)}})。
- 指定した要素が現在のブラウジングコンテキストに含まれていない場合に、`WebDriver:SwitchToFrame` で `no such element` エラーが発生するようになりました ({{bug(1517196)}})。
- `WebDriver:ExecuteScript` および `WebDriver:ExecuteAsyncScript` が、仕様書に準拠しない `scriptTimeout` 引数をサポートしないようになりました。代わりに `WebDriver:SetTimeout` または `timeouts` 機能を使用してください ({{bug(1510929)}})。

  - さらに、不定のスクリプトタイムアウトをサポートしました ({{bug(1128997)}})。

- `WebDriver:SetWindowRect` が、応答でウィンドウの状態を返さないようになりました ({{bug(1517587)}})。

#### バグ修正

- `WebDriver:TakeScreenshot` が、ビューポートの寸法に代わって {{domxref("Document.documentElement")}} の {{domxref("Element.clientWidth")}} および {{domxref("Element.clientHeight")}} プロパティを使用するようになりました ({{bug(1385706)}})。
- ウィンドウ操作コマンドがプラットフォームをまたいで確かに動作するようにするため、さまざまな修正を行いました ({{bug(1522408)}}, {{bug(1478358)}}, {{bug(1489955)}})。

## アドオン開発者向けの変更点

### API の変更点

#### メニュー

- {{WebExtAPIRef("menus.ContextType", "type")}} が "bookmark" である拡張機能のメニュー項目が、ブックマークサイドバー (

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>B</kbd>

  ) およびライブラリーウィンドウ (

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>Shift</kbd>

  &#x20;\+&#x20;

  <kbd>B</kbd>

  ) にも表示されるようになりました ({{bug(1419195)}})。

### マニフェストの変更点

_変更なし。_

## 関連情報

- [Firefox 66.0, See All New Features, Updates and Fixes](https://www.mozilla.org/en-US/firefox/66.0/releasenotes/)

## 過去のバージョン

{{Firefox_for_developers(65)}}
