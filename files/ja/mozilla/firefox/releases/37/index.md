---
title: Firefox 37 for developers
slug: Mozilla/Firefox/Releases/37
---

Firefox 37 は、米国時間 2015 年 3 月 31 日にリリースされました。このページでは、開発者に影響する Firefox 37 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [ネットワークモニタの Security パネル](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#security)
- [インスペクターのアニメーションパネル](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox_37)
- [WebIDE でカスタムビルドステップの実行をサポート](/ja/docs/Tools/WebIDE/Running_and_debugging_apps#Running_a_custom_build_step)

[Firefox 36 から Firefox 37 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-01-12&chfield=resolution&query_format=advanced&chfieldfrom=2014-11-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=11892733)

### CSS

- {{cssxref("display")}}`: contents` をデフォルトで有効にしました ([Firefox バグ 1102374](https://bugzil.la/1102374) および [Firefox バグ 1105369](https://bugzil.la/1105369))。
- [CSS マルチカラムレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout/Using)が、{{cssxref("display")}}`: table-caption` を適用した要素で動作するようになりました ([Firefox バグ 1109571](https://bugzil.la/1109571))。
- テーブルセルの相対配置 ({{cssxref("position")}}`: relative`) を実装しました ([Firefox バグ 35168](https://bugzil.la/35168))。
- Quirks モードで、{{cssxref("empty-cells")}} の動作を削除しました。Standard モードと同様に、デフォルトが `show` になります ([Firefox バグ 1020400](https://bugzil.la/1020400))。

### HTML

- リンクを新しいタブで開く場合でも、`<a rel="noreferrer">` が機能するようになりました ([Firefox バグ 1031264](https://bugzil.la/1031264))。
- `<input accept>` で、`'.'` の後に拡張子を記載する形式を受け入れるようになりました。これを指定するとファイル選択ダイアログをユーザーに提示するとき、指定した拡張子でフィルターします ([Firefox バグ 826176](https://bugzil.la/826176))。

### JavaScript

- {{jsxref("Map")}}、{{jsxref("Set")}}、{{jsxref("WeakMap")}}、{{jsxref("WeakSet")}} コンストラクターは、引数 iterable で値 null を無視するようになりました ([Firefox バグ 1092538](https://bugzil.la/1092538))。
- {{jsxref("Map")}}、{{jsxref("Set")}}、{{jsxref("WeakMap")}}、{{jsxref("WeakSet")}} コンストラクターで、モンキーパッチを使用した `prototype.set` または `prototype.add` をサポートしました ([Firefox バグ 804279](https://bugzil.la/804279))。
- 非標準の {{jsxref("String.quote","String.prototype.quote()")}} メソッドを削除しました ([Firefox バグ 1103181](https://bugzil.la/1103181))。
- {{jsxref("RegExp.prototype.flags")}} プロパティを実装しました ([Firefox バグ 1108467](https://bugzil.la/1108467))。
- {{jsxref("Array")}} のメソッドのいくつかを、[Typed Array](/ja/docs/Web/JavaScript/Guide/Typed_arrays) にも実装しました:
  - {{jsxref("TypedArray.every", "every()")}} および {{jsxref("TypedArray.some", "some()")}} メソッド ([Firefox バグ 1116390](https://bugzil.la/1116390))。
  - {{jsxref("TypedArray.find", "find()")}} および {{jsxref("TypedArray.findIndex", "findIndex()")}} メソッド ([Firefox バグ 1078975](https://bugzil.la/1078975))。
  - {{jsxref("TypedArray.fill", "fill()")}} メソッド ([Firefox バグ 1113722](https://bugzil.la/1113722))。
  - {{jsxref("TypedArray.indexOf", "indexOf()")}} および {{jsxref("TypedArray.lastIndexOf", "lastIndexOf()")}} メソッド ([Firefox バグ 1107601](https://bugzil.la/1107601))。
  - {{jsxref("TypedArray.join", "join()")}} メソッド ([Firefox バグ 1115817](https://bugzil.la/1115817))。
  - {{jsxref("TypedArray.reduce", "reduce()")}} および {{jsxref("TypedArray.reduceRight", "reduceRight()")}} メソッド ([Firefox バグ 1117350](https://bugzil.la/1117350))。
  - {{jsxref("TypedArray.reverse", "reverse()")}} メソッド ([Firefox バグ 1111516](https://bugzil.la/1111516))。
  - {{jsxref("TypedArray.keys", "keys()")}}、{{jsxref("TypedArray.values", "values()")}}、{{jsxref("TypedArray.entries", "entries()")}} メソッド ([Firefox バグ 1119217](https://bugzil.la/1119217))。

- ES6 Proxy の {{jsxref("Global_Objects/Proxy/handler/enumerate", "enumerate")}} トラップを実装しました ([Firefox バグ 783829](https://bugzil.la/783829))。
- ES6 仕様書に基づき、{{jsxref("Function.length")}} プロパティの `configurable` 属性を `true` に変更しました ([Firefox バグ 911142](https://bugzil.la/911142))。
- [ParallelJS (PJS)](http://wiki.ecmascript.org/doku.php?id=strawman:data_parallelism) の開発を中止しました。将来性の乏しさ、関心の薄さ、コードの複雑さが理由です。`Array.prototype.mapPar`、`filterPar`、`reducePar` メソッドといった、Nightly チャンネルのみで有効であった実験的な実装は全面的に削除しました。

### インターフェイス/API/DOM

- {{domxref("StereoPannerNode")}} [Web Audio](/ja/docs/Web/API/Web_Audio_API) ノードを実装しました ([Firefox バグ 1100349](https://bugzil.la/1100349))。
- {{jsxref("Promise")}} ベースの {{domxref("OfflineAudioContext")}} が使用可能になりました ([Firefox バグ 1087944](https://bugzil.la/1087944))。
- [Service Worker](/ja/docs/Web/API/Service_Worker_API) の実験的な実装 (デフォルトで無効) を進めています。{{domxref("ServiceWorkerGlobalScope.update()")}} を実装しました ([Firefox バグ 1065366](https://bugzil.la/1065366))。
- [Web workers](/ja/docs/Web/API/Web_Workers_API) で [IndexedDB API](/ja/docs/Web/API/IndexedDB_API) を使用できるようになりました ([Firefox バグ 701634](https://bugzil.la/701634))。
- WebGL 2.0 の実験的な実装を進めています!
  - バッファーオブジェクトへのアクセス機能を提供する、{{domxref("WebGL2RenderingContext.getBufferSubData()")}} メソッドを実装しました ([Firefox バグ 1048731](https://bugzil.la/1048731))。

- `KeyboardEvent.key` のキー名の一部を、[最新の DOM Level 3 Events 仕様](https://dvcs.w3.org/hg/dom3events/raw-file/tip/html/DOM3Events-key.html)に準拠するよう変更しました。[MDN で KeyboardEvent.key の値の一覧表](/ja/docs/Web/API/KeyboardEvent/key#key_values)をご覧ください。緑色のセルが新たな値です。また、紫色の値は変更される可能性があります。これらの値を使用する場合は注意してください (キー名の変更に関するメタバグは [Firefox バグ 900372](https://bugzil.la/900372) です)。
- {{domxref("Console")}} インターフェイスが {{domxref("ServiceWorker")}} および {{domxref("SharedWorker")}} で動作するようになりました。これらは以前から使用できましたが、動作しない状態でした ([Firefox バグ 1058644](https://bugzil.la/1058644))。

### MathML

_変更なし。_

### SVG

- SVG2 の `<marker orient="auto-start-reverse">` を実装しました ([Firefox バグ 1107584](https://bugzil.la/1107584))。

### Audio/Video

_変更なし。_

## ネットワーク

- WebSockets で `permessage` 圧縮法をサポートしました ([Firefox バグ 792831](https://bugzil.la/792831))。サーバーが対応していれば使用できます。

## セキュリティ

- SSL 3.0 や RC4 といった弱いプロトコルや暗号方式をサイトで使用していることを警告するため、それらが使用されたことをコンソールに記録するようになりました ([Firefox バグ 1092835](https://bugzil.la/1092835))。
- [CSP](/ja/docs/Web/HTTP/Guides/CSP) 1.1 の `referrer` [ディレクティブ](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)をサポートしました ([Firefox バグ 965727](https://bugzil.la/965727))。

## アドオン開発者と Mozilla 開発者向けの変更点

### Add-on SDK

_変更なし。_

### XUL

_変更なし。_

## 関連情報

- [Firefox 37 リリースノート](http://www.mozilla.jp/firefox/37.0/releasenotes/)
- [Firefox 37 アドオン互換性情報](https://dev.mozilla.jp/2015/02/firefox-37-addon-compatibility/)

## 過去のバージョン

{{Firefox_for_developers('36')}}
