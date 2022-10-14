---
title: Firefox 45 for developers
slug: Mozilla/Firefox/Releases/45
---

{{FirefoxSidebar}}

Firefox の最新の開発者向け機能を試すには、 Firefox Developer Edition をインストールしてください。Firefox 45 は、米国時間 2016 年 3 月 8 日にリリースされました。この記事では、ウェブ開発者だけでなく、 Firefox や Gecko の開発者、アドオン開発者にとっても有用な主な変更点を挙げています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

主要なもの:

- [ページインスペクターでの全文検索](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#searching)
- [メモリーツールでのヒープスナップショットの差分](https://firefox-source-docs.mozilla.org/devtools-user/memory/basic_operations/index.html#comparing-snapshots)
- [DomContentLoaded と load イベントのネットワークモニタへの表示](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#timeline)
- [アニメーションインスペクターの改良](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)

[Firefox 43 と Firefox 44 の間で修正された開発ツールのすべてのバグ。](https://bugzilla.mozilla.org/buglist.cgi?bug_status=RESOLVED&bug_status=VERIFIED&chfield=resolution&chfieldfrom=2015-10-29&chfieldto=2015-12-14&chfieldvalue=FIXED&classification=Client%20Software&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&resolution=FIXED&list_id=12753878)

### HTML

- Content Security Policy を {{HTMLElement("meta")}} 要素で直接設定できるようになりました ({{bug(663570)}})。
- {{HTMLElement("img")}} 要素、{{HTMLElement("area")}} 要素、{{HTMLElement("a")}} 要素、{{HTMLElement("iframe")}} 要素の `referrer` 属性を、`referrerpolicy` に改名しました ({{bug(1187357)}})。
- ビューポートの変化やリサイズにより `<img srcset>` のレスポンシブ画像の再選択が発生するようになりました ({{bug(1166138)}})。

### CSS

- {{cssxref("word-spacing")}} でパーセント値に対応しました ({{bug(1038663)}})。
- CSS グリッドの実装が向上し、実験的な状態ではないと判断しました。これらを Nightly および Developer Edition で既定で有効にしましたが、Beta および Release では無効です ({{bug(1000592)}})。

  - 溝 (`grid-column-gap`, `grid-row-gap`, `grid-gap` プロパティ) を実装しました ({{bug(1176792)}})。
  - グリッドアイテムの最小サイズ ({{cssxref("min-width")}} や {{cssxref("min-height")}} の値 `auto` の特殊な動作) を実装しました ({{bug(1176775)}})。
  - グリッドレイアウトで {{cssxref("align-self")}} および {{cssxref("justify-self")}} に対応しました ({{bug(1151213)}})。
  - グリッドレイアウトで {{cssxref("align-content")}} および {{cssxref("justify-content")}} に対応しました ({{bug(1151214)}})。
  - grid-template-columns、grid-template-rows の解決値の単位がピクセルになりました ({{bug(978212)}})。
  - 関連機能である {{cssxref("display")}}: contents は [Firefox 37](/ja/docs/Mozilla/Firefox/Releases/37) から対応しています。

- CSS グリッド向けの CSS ボックス配置に完全対応するため、 `start`、`end`、`self-start`、`self-end`、`left`、`right`、`last-baseline`、`space-evenly` ({{bug(1176782)}})。現在、 CSS ボックス配置は CSS フレックスボックスおよび CSS グリッドにのみ適用されています。
- \[css-grid]\[css-flexbox] \<fieldset> のグリッドレイアウトおよびフレックスレイアウトを実装しました ({{bug(1230207)}})。
- {{cssxref("float")}} および {{cssxref("clear")}} で、値 `inline-start` および `inline-end` に対応しました ({{bug(1122918)}})。Nightly、Aurora (Dev edition)、Firefox OS では、既定で有効です。Release および Beta で有効化するには設定項目 `layout.css.float-logical-values.enabled` を `true` に変更してください。
- {{cssxref("text-emphasis")}}、{{cssxref("text-emphasis-style")}}、{{cssxref("text-emphasis-color")}}、{{cssxref("text-emphasis-position")}} を実装しました。既定値は無効です (有効化するには `layout.css.text-emphasis.enabled` を true に設定してください) ({{bug(1040668)}})。
- ウェブの互換性のためにいくつかの `-webkit` 接頭辞付きプロパティおよび値に対応しました設定項目 `layout.css.prefixes.webkit` で制御しており、既定値は `false` です。

  - ウェブ互換性のため、 `-webkit-backface-visibility`, `-webkit-perspective`, `-webkit-perspective-origin` を追加しました。設定項目 `layout.css.prefixes.webkit` で制御しており、既定値は `false` です ({{bug(1179444)}})。

### JavaScript

- ES2015 (ES6) の [クラス](/ja/docs/Web/JavaScript/Reference/Classes) を既定で有効にしました ({{bug(1197932)}})。
- {{jsxref("Operators/Expression_closures", "式クロージャ", "", 1)}} が非推奨になり、コンソールに警告を表示するようになりました ({{bug(995610)}})。
- {{jsxref("String.prototype.replace")}} は関数の引数を実行した後、{{jsxref("Global_Objects/RegExp/n", "RegExp の静的プロパティ", "", 1)}} に値を復元しないようになりました ({{bug(1226936)}})。
- {{jsxref("Math.random()")}} を XorShift128+ アルゴリズムにアップグレードしました ({{bug(322529)}})。

### インターフェイス/API/DOM

#### DOM & HTML DOM

- 互換性のため、標準外のプロパティ [`Node.innerText`](/ja/docs/Web/API/HTMLElement/innerText) を実装しました ({{bug(264412)}})。
- {{domxref("HTMLImageElement.srcset")}} がリサイズやビューポートの変化に反応しない問題を修正しました ({{bug(1166138)}})。
- {{domxref("Element.getAttributeNames()")}} を実装しました ({{bug(1228634)}})。

#### WebGL

WebGL2 の実装が進展しました。

- プログラムやシェーダーに対応しました ({{bug(1048743)}})。
- ユニフォームや属性に対応しました ({{bug(1048745)}})。
- Framebuffer オブジェクトを実装しました ({{bug(1048732)}})。
- Renderbuffer オブジェクトを実装しました ({{bug(1048733)}})。

#### IndexedDB

_変更なし。_

#### サービスワーカー

- {{domxref("Clients.get()")}} および {{domxref("FetchEvent.clientId")}} を実装しました ({{bug(1222464)}})。
- {{domxref("Clients.openWindow()")}} を実装しました ({{bug(1172870)}})。
- {{domxref("Clients.matchAll()")}} を呼び出す際に引数として渡すことができる options オブジェクトに、`includeUncontrolled` プロパティを含めることが可能になりました。これは論理値です。`true` を設定すると、比較操作により現在のサービスワーカーと同じオリジンを共有するすべてのサービスワーカークライアントを返します。それ以外の場合は、サービスワーカーによって制御されるサービスワーカークライアントのみを返します。既定値は `false` です。

#### WebRTC

_変更なし。_

#### 新規 API

_変更なし。_

#### その他

- [ウェブ音声合成 API](/ja/docs/Web/API/Web_Speech_API) を、デスクトップ版 Firefox で実装しました ({{bug(1003439)}})。
- {{domxref("Window.onstorage")}} イベントハンドラーを追加しました。
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) の実験的な実装で、{{domxref("ComputedTiming")}} インターフェイスを追加しました ({{bug(1108055)}})。
- {{domxref("GlobalEventHandlers/onselectionchange", "Document.onselectionchange")}} イベントハンドラーを追加しました ({{bug(1231193)}})。
- {{domxref("MediaStream.removeTrack()")}} を呼び出してメディアストリームから映像トラックを削除した後に、{{domxref("MediaStream.addTrack()")}} を使用して別の映像トラックを追加して、再生することが可能になりました ({{bug(1223696)}})。

### MathML

_変更なし。_

### SVG

- Moz2D のバックエンドが cairo であるときに、 SVG stroke hit-testing でバグが多い問題を修正しました ({{bug(676001)}})。
- transform / translate の値が大きい要素と対話できない問題を修正しました ({{bug(1217012)}})。

### Audio/Video

- 修正: 継続時間の丸め誤差により、音声再生が途切れることがある不具合（Firefox 41 以降）。 ({{bug(1222866)}})。

## HTTP

- ウェブコンテンツにアクセスした際に、`jar:` プロトコルが既定で無効になりました。`jar:` プロトコルを有効化したい場合は、設定項目 `network.jar.block-remote-files` を `false` に変更してください ({{bug(1215235)}})。

## セキュリティ

- {{HTTPHeader("Content-Security-Policy")}} を {{HTMLElement("meta")}} 要素で指定できるようになりました ({{bug(663570)}})。
- CSP のポリシーディレクティブ {{CSP("child-src")}} を実装しました ({{bug(1045891)}})。
- 有効期間が 27 か月を超える EV 証明書は、DV 証明書として判断され、取り扱われるようになりました ({{bug(1222903)}})。

## アドオン開発者と Mozilla 開発者向けの変更点

### インターフェイス

_変更なし。_

### XUL

- タブグループを [削除しました](https://support.mozilla.org/kb/tab-groups-removal)。

### JavaScript コードモジュール

_変更なし。_

### XPCOM

_変更なし。_

### 検索プラグイン

- Firefox 45 より、ユーザープロファイルの `searchplugins` ディレクトリー内にある検索プラグインは起動時に自動的に読み込みません。代わりにユーザーがインストールしたプラグインの一覧が整備され、リスト内にあるプラグインのみ読み込みます。事実上、新たな検索プラグインをインストールする方法は、Firefox の UX でユーザーがインストールする (例えば [OpenSearch による検出](/ja/docs/Mozilla/Add-ons/Creating_OpenSearch_plugins_for_Firefox)) か、アドオンによるインストールに限られます。また新しいプラグインをインストールしたとき、プロファイルのデバッグやクリーニングツールで将来使用するために、プラグインのインストール元に関する付加情報を記録します。

### その他

- chrome コンテキストでは、WebIDL コンストラクターを [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子なしで呼び出せました。Firefox 30 より、ウェブコンテンツではそのようなコードで [`TypeError`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypeError) が発生するようになりました。例えば `var req = XMLHttpRequest();` は `var req = new XMLHttpRequest();` としなければなりません。

## 過去のバージョン

{{Firefox_for_developers(44)}}
