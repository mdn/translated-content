---
title: Firefox 3 での DOM の改良
slug: Mozilla/Firefox/Releases/3/DOM_improvements
l10n:
  sourceCommit: a35e5b74ecbe13a768edf765a4666fb81a5153a1
---

{{FirefoxSidebar}}

Firefox 3 では、特に、他のブラウザーによる独自 DOM 拡張 のサポートに関するものを含む、多くの [Document Object Model](/ja/docs/Web/API/Document_Object_Model) (DOM) 実装が追加されました。この記事は、これらの実装の一覧と詳細なドキュメントへのリンクを提供します。

- Internet Explorer の [`clientTop`](/ja/docs/Web/API/Element/clientTop) と [`clientLeft`](/ja/docs/Web/API/Element/clientLeft) DOM 拡張がサポートされました。
- [`window.fullScreen`](/ja/docs/Web/API/Window/fullScreen) プロパティは、たとえウェブコンテンツから読み出されても常に正確に計算されるようになりました。以前は不正確に `false` を返していたでしょう。([Firefox バグ 127013](https://bugzil.la/127013))
- [`getClientRects`](/ja/docs/Web/API/Element/getClientRects) と [`getBoundingClientRect`](/ja/docs/Web/API/Element/getBoundingClientRect) DOM 拡張がサポートされました。([Firefox バグ 174397](https://bugzil.la/174397) を参照)
- Internet Explorer の [`elementFromPoint`](/ja/docs/Web/API/Document/elementFromPoint) DOM 拡張がサポートされました。 ([Firefox バグ 199692](https://bugzil.la/199692))
- Internet Explorer の [`oncut`](/ja/docs/Web/API/HTMLElement/cut_event)、[`oncopy`](/ja/docs/Web/API/HTMLElement/copy_event)、 [`onpaste`](/ja/docs/Web/API/HTMLElement/paste_event) DOM 拡張がサポートされました ([Firefox バグ 280959](https://bugzil.la/280959))。
- 特権コード限定のゲッター `Node.nodePrincipal`、`Node.baseURIObject`、`document.documentURIObject` が追加されました。Chrome コードは、([`XPCNativeWrapper`](/ja/XPCNativeWrapper) の `wrappedJSObject` などの) ラップされていないコンテンツオブジェクトに対して、これらのプロパティに触れては (取得または設定をしては) いけません。詳細は [Firefox バグ 324464](https://bugzil.la/324464) を参照してください。
- Web Applications 1.0 (HTML5) の [`getElementsByClassName()`](/ja/docs/Web/API/Document/getElementsByClassName) DOM メソッドがサポートされました。
- Web Applications 1.0 (HTML5) の [`window.postMessage`](/ja/docs/Web/API/Window/postMessage) DOM メソッドがサポートされました。このメソッドは、制限された、同じドメインに限らないウィンドウ間でのクライアントサイド通信を行う選択フォームを可能にします。
- アクセラレーションキーが押された場合、`keypress` イベントの `charCode` の値は ASCII 文字に変更されます。それ以外の場合、 `charCode` はそのままの文字です (<kbd>Shift</kbd> 状態を除く)。[Gecko Keypress Event](/ja/Gecko_Keypress_Event) を参照してください。

### 関連情報

- [Firefox 3 for developers](/ja/docs/Mozilla/Firefox/Releases/3)
- [CSS improvements in Firefox 3](/ja/docs/CSS_improvements_in_Firefox_3)
- [DOM](/ja/docs/Web/API/Document_Object_Model)
