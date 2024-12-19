---
title: Firefox 97 for developers
slug: Mozilla/Firefox/Releases/97
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 97 の変更点をまとめています。Firefox 97 は、米国時間 2022 年 2 月 8 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- CSS の {{cssxref("&lt;length&gt;")}} および {{cssxref("&lt;length-percentage&gt;")}} データ型で使用する単位 `cap` および `ic` をサポートしました。
  詳しくは [Firefox バグ 1702924](https://bugzil.la/1702924) および [Firefox バグ 1531223](https://bugzil.la/1531223) をご覧ください。

- CSS の `color-adjust` プロパティを、関連がある仕様書に合わせて {{cssxref("print-color-adjust")}} へ改名しました。
  短縮名の `color-adjust` は非推奨になります。
  詳しくは [Firefox バグ 747595](https://bugzil.la/747595) をご覧ください。

- CSS カスケードレイヤーをデフォルトで有効にしました。[`@layer`](/ja/docs/Web/CSS/@layer) ルールでカスケードレイヤーを宣言します。カスケードレイヤーではスタイルの宣言や、`layer()` 関数を使用して [`@import`](/ja/docs/Web/CSS/@import) ルールでインポートすることができます。詳しくは [Firefox バグ 1699217](https://bugzil.la/1699217) をご覧ください。

- カスケードレイヤーのプロパティの値を前のカスケードレイヤーでマッチする規則にロールバックできる、{{cssxref("revert-layer")}} グローバル CSS キーワードを追加しました。このキーワードは CSS のショートハンドプロパティ {{cssxref("all")}} を含む、任意のプロパティで適用できます。詳しくは [Firefox バグ 1699220](https://bugzil.la/1699220) をご覧ください。

- CSS の [`scrollbar-gutter`](/ja/docs/Web/CSS/scrollbar-gutter) プロパティをサポートしました。これはスクロールバーのために予約された領域を開発者が制御できるようにして、コンテンツの増加による不必要なレイアウトの変化を防ぐことができます。
  詳しくは [Firefox バグ 1715112](https://bugzil.la/1715112) をご覧ください。

### JavaScript

変更なし。

### SVG

- SVG で描画するパスを定義するために使用する {{SVGAttr('d')}} 属性を、CSS でプロパティとして使用できるようになりました。
  これは [path()](</ja/docs/Web/CSS/path()>) または `none` の値を受け入れます。(詳しくは [Firefox バグ 1744599](https://bugzil.la/1744599) をご覧ください)

#### 廃止

- いくつかの `SVGPathSeg` API を、設定項目によってデフォルトで無効化しました。これらは将来のバージョンで削除される見込みです。
  対象は `SVGPathSegList`、[SVGPathElement.getPathSegAtLength()](/ja/docs/Web/API/SVGPathElement)、`SVGAnimatedPathData` です。
  (詳しくは [Firefox バグ 1388931](https://bugzil.la/1388931) をご覧ください)。

### API

- [`DedicatedWorkerGlobalScope`](/ja/docs/Web/API/DedicatedWorkerGlobalScope) で `AnimationFrameProvider` が使用可能になりました。これは、専用ワーカーで [`requestAnimationFrame`](/ja/docs/Web/API/Window/requestAnimationFrame) および [`cancelAnimationFrame`](/ja/docs/Web/API/Window/cancelAnimationFrame) メソッドが使用できることを意味します
  (詳しくは [Firefox バグ 1388931](https://bugzil.la/1388931) をご覧ください)。

#### DOM

- 中断シグナルの理由を、{{domxref("AbortController.abort()")}} (または {{domxref("AbortSignal.abort()")}}) を使用して設定できるようになりました。また、{{domxref("AbortSignal.reason")}} プロパティで使用できるようになりました。
  この理由はデフォルトで "AbortError" {{domxref("DOMException")}} になります。
  この理由は必要に応にて、promise の拒否を通してスローまたは処理することができます
  ([Firefox バグ 1737771](https://bugzil.la/1737771))。
- シグナルが中断したかを確認して、そうである場合に {{domxref("AbortSignal.reason()")}} をスローする便利なメソッドである {{domxref("AbortSignal.throwIfAborted()")}} が使用可能になりました。
  これはシグナルを中断可能なメソッドへ単純に渡すことができないコードで、開発者が中断シグナルを処理することを容易にします ([Firefox バグ 1745372](https://bugzil.la/1745372))。

### WebDriver conformance (Marionette)

- `Marionette:Quit` が、Firefox をセーフモードで再起動するための新たなブーリアン型の引数である `safeMode` を受け入れるようになりました ([Firefox バグ 1144075](https://bugzil.la/1144075))。
- 現在または初期のドキュメントの読み込みを待っているときの、`WebDriver:NewSession` および `WebDriver:NewWindow` の安定性が向上しました ([Firefox バグ 1739369](https://bugzil.la/1739369)、[Firefox バグ 1747359](https://bugzil.la/1747359))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("tabs.query")}} の `cookieStoreId` で、文字列の配列をサポートしました。これは複数の Cookie ストア ID に対して、マッチするタブを問い合わせることを可能にします ([Firefox バグ 1730931](https://bugzil.la/1730931))。
- {{WebExtAPIRef("contentScripts.register")}} に `cookieStoreId` を追加しました。これは、拡張機能がコンテナー固有のコンテンツスクリプトを登録することを可能にします ([Firefox バグ 1470651](https://bugzil.la/1470651))。

## 過去のバージョン

{{Firefox_for_developers(96)}}
