---
title: Firefox 76 for developers
slug: Mozilla/Firefox/Releases/76
---

このページでは、開発者に影響する Firefox 76 の変更点をまとめています。Firefox 76 は、[2020 年 5 月 5 日](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates/docs/) にリリースされました。

**付随する hacks ブログの記事「[Firefox 76: Audio worklets and other tricks](https://hacks.mozilla.org/2020/05/firefox-76-audio-worklets-and-other-tricks/)」もご覧ください。**

## ウェブ開発者向けの変更点一覧

### 開発者ツール

#### デバッガー

- [ソースリストペイン](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source_list_pane) のコンテキストメニューで、ソースグループやフォルダーのブラックボックス化や解除が可能になりました ([Firefox バグ 1118152](https://bugzil.la/1118152))。
- [コールスタックペイン](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call_stack) のコンテキストメニュー項目「_スタックトレースをコピー_」で、ファイル名だけでなく URL 全体をコピーするようになりました ([Firefox バグ 1619039](https://bugzil.la/1619039))。

#### ネットワークモニター

- ネットワーク要求の一覧で列の境目をダブルクリックすると、境目の左側の列を内容に合わせてリサイズするようになりました ([Firefox バグ 1615102](https://bugzil.la/1615102))。
- ネットワーク要求のコンテキストメニュー項目「_コピー > [cURL としてコピー](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#copy_as_curl)_ で新たなオプション `--globoff` が利用可能になりました。これはコピーした URL に各括弧文字が含まれている場合に、cURL の globbing (ワイルドカードのマッチング) を抑制します ([Firefox バグ 1549773](https://bugzil.la/1549773))。
- [WebSocket 要求](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_web_sockets/index.html) の詳細ペインにある _メッセージ_ タブに、制御フレームを表示する新たなフィルターである _Control_ を追加しました。また、フィルターが選択リストにグループ分けされました ([Firefox バグ 1566780](https://bugzil.la/1566780))。

#### ウェブコンソール

- [マルチラインモード](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line_mode) で、5 行を超えるコードスニペットを 5 行に省略して先頭に展開用の三角印 (あるいは "twistie")、末尾に省略記号 (…) をつけるようになりました。これらの領域をクリックするとコードを表示できます。もう一度クリックすると折りたたむことができます ([Firefox バグ 1578212](https://bugzil.la/1578212))。
- コンソールに出力した DOM 要素の参照のコンテキストメニュー項目に「インスペクターで確認」を追加しました。これは、[インスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) の HTML ペインで要素を表示します ([Firefox バグ 1612276](https://bugzil.la/1612276))。

#### リモートデバッグ

- 開発ツールのバージョンの違いのため、デスクトップ版の Firefox 69 以降からバージョン 68 ベースの Android 版 Firefox をデバッグすることができません。デバッグしようとするとデスクトップ版 Firefox は、この問題の説明と利用可能な次のステップをユーザーに知らせるメッセージを表示します ([Firefox バグ 1625906](https://bugzil.la/1625906))。詳しくは [Connection to Firefox for Android 68](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connection_to_firefox_for_android_68) をご覧ください。

### HTML

- {{HTMLElement("input")}} 要素の [`min`](/ja/docs/Web/HTML/Reference/Elements/input#min) および [`max`](/ja/docs/Web/HTML/Reference/Elements/input#max) 属性が、値が周期的な (すなわち、ある時点で値が最小値に戻る) コントロールで `min` の値が `max` の値より大きい場合に、正しく動作するようになりました。これは、例えば日付や時刻の入力で午後 11 時から午前 2 時の範囲を指定するようなときに、特に役に立ちます ([Firefox バグ 1608010](https://bugzil.la/1608010))。

### CSS

- [CSS4 system colors](/ja/docs/Web/CSS/Reference/Values/color_value#system_colors) を Firefox でサポートしました ([Firefox バグ 1590894](https://bugzil.la/1590894))。

### SVG

_変更なし。_

### JavaScript

- {{jsxref("Intl.NumberFormat")}}、{{jsxref("Intl.DateTimeFormat")}}、{{jsxref("Intl.RelativeTimeFormat")}} コンストラクターの `numberingSystem`、`calendar` オプションを、デフォルトで有効にしました ([Firefox バグ 1625975](https://bugzil.la/1625975))。

### API

#### 新規 API

- Firefox で、audio worklets と {{domxref("BaseAudioContext.audioWorklet", "AudioContext.audioWorklet")}} をデフォルトでサポートしました。これは、メインスレッドの外部で音声をリアルタイム処理するために {{domxref("AudioWorkletProcessor")}} および {{domxref("AudioWorkletNode")}} インターフェイスを使用可能にします ([Firefox バグ 1616725](https://bugzil.la/1616725))。

#### DOM

- {{domxref("window.open()")}} の引数 `windowFeatures` の UI 部品に関する項目で、UI 部品ごとに表示・非表示を制御できなくなり、ポップアップウィンドウを開くか否かの条件になりました ([Firefox バグ 1507375](https://bugzil.la/1507375))。
- [`location.href`](/ja/docs/Web/API/Location/href) や [`<meta http-equiv="refresh">`](/ja/docs/Web/HTML/Reference/Elements/meta) のような方法を使用して未知のプロトコルへ移動しようとするとブロックされるようになりました ([Firefox バグ 1528305](https://bugzil.la/1528305)、詳しくは [未知のプロトコルへのページ遷移はブロックされます](https://www.fxsitecompat.dev/ja/docs/2020/navigation-to-unknown-protocol-will-be-blocked/) をご覧ください)。
- {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} コンストラクターが、`root` として {{domxref("Element")}} オブジェクトと同様に {{domxref("Document")}} オブジェクトも受け入れるようになりました ([Firefox バグ 1623623](https://bugzil.la/1623623))。これにより、要素間交差の境界としてウィンドウのコンテンツ領域全体を明示的に使用できます。
- [Fetch API](/ja/docs/Web/API/Fetch_API) で、要求の `audioworklet` {{domxref("Request.destination", "destination")}} をサポートしました。これにより、受信したデータが {{domxref("AudioWorklet")}} へ送られます ([Firefox バグ 1402784](https://bugzil.la/1402784))。

#### 廃止

- [Window の `appinstalled` イベント](/ja/docs/Web/API/Window/appinstalled_event) (および関連するハンドラープロパティの [`Window.onappinstalled`](/ja/docs/Web/API/Window/appinstalled_event)) を完全に削除しました。これらは公開されたことがなく、また [Web Manifest 仕様](https://w3c.github.io/manifest/) から削除されました ([Firefox バグ 1625384](https://bugzil.la/1625384))。

### HTTP

_変更なし。_

### セキュリティ

_変更なし。_

### WebDriver conformance (Marionette)

- geckodriver でオートメーションやテストを行っているとき、`navigator.webdriver` が `false` を返さないようになりました ([Firefox バグ 1632556](https://bugzil.la/1632556))。

## アドオン開発者向けの変更点

_変更なし。_

## 過去のバージョン

{{Firefox_for_developers(75)}}
