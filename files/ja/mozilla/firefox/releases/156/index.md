---
title: Firefox 156 release notes for developers (Stable)
short-title: Firefox 156 (Stable)
slug: Mozilla/Firefox/Releases/156
l10n:
  sourceCommit: e1d75786a9ba2607af68a3fe2ef8dc3aaba99661
---

このページでは、開発者に影響する Firefox 156 の変更点をまとめています。
Firefox 156 は、米国時間 [2026 年 9 月 15 日](https://whattrainisitnow.com/release/?version=156) にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- インスペクターのハイライト表示でのビューポートのサイズ読み取りで、幅や高さの値を丸めないようになりました。以前は倍率が小数のズームや高画素密度ディスプレイにおいて、誤解を招くサイズを報告していました ([Firefox bug 2055445](https://bugzil.la/2055445))。
- 開発ツールがクライアントより 3 つまで古いバージョンのデバッガーサーバーに接続できるように、以前の制限から引き上げました。これは、古い Firefox や GeckoView ビルドのリモートデバッグを行う場合に関係があります ([Firefox bug 2064221](https://bugzil.la/2064221))。

### HTML

変更なし。

### SVG

- {{domxref("MouseEvent.offsetX")}} および {{domxref("MouseEvent.offsetY")}} が、{{SVGElement("tspan")}} を対象とするイベントにおいてもっとも外側の {{SVGElement("svg")}} 要素の原点から計測するようになりました。以前は誤った原点を使用していました ([Firefox bug 2066045](https://bugzil.la/2066045))。
- 仕様書での要求に従って、{{domxref("SVGSVGElement.currentScale")}} セッターが入れ子になった `<svg>` 要素で何も行わないようになりました。もっとも外側の `<svg>` 要素では引き続き動作します ([Firefox bug 2063188](https://bugzil.la/2063188))。

### CSS

- 非標準の {{cssxref("::-webkit-scrollbar")}} 擬似要素が、すべてのサイトにおいて {{cssxref("@supports")}} 条件で未サポートと報告されるようになりました。よって `@supports selector(::-webkit-scrollbar)` には `false`、`@supports not (selector(::-webkit-scrollbar))` には `true` を返します。これは [Firefox 155](/ja/docs/Mozilla/Firefox/Releases/155#css) で導入した設定項目 `layout.css.fake-webkit-scrollbar.enabled-domains` に記載されたサイトも含みます。Firefox はこれらのサイトで引き続き `::-webkit-scrollbar` 規則を実行しますが、擬似要素をサポートしていると報告しなくなります。サイトはこの確認を `::-webkit-scrollbar-*` ファミリー全体をサポートしている指標として使用しますが、Firefox はこのファミリーのほかの擬似要素をサポートしていません。`@supports not (selector(::-webkit-scrollbar))` によって標準のスクロールバーのスタイルを保護しているサイトは、Firefox でもそれらのスタイルが適用されるようになりました ([Firefox bug 2062782](https://bugzil.la/2062782))。
- {{cssxref("text-box-trim")}} および {{cssxref("text-box-edge")}} プロパティが、以前は誤った結果を生成していたいくつかのケースにおいて正しく切り取るようになりました。
  切り取りを適用する場合は、{{cssxref("::first-line")}} のフォントメトリクスを使用します ([Firefox bug 2063835](https://bugzil.la/2063835))。
  最終行でインラインボックスが分割される場合は、正しい行を切り取ります ([Firefox bug 2063909](https://bugzil.la/2063909))。
  また、インラインボックスの切り取りでボーダーやパディングを除去しないようになりました ([Firefox bug 2064596](https://bugzil.la/2064596))。
  なお {{cssxref("text-box-trim")}} は、{{cssxref("line-clamp")}} と組み合わせた場合に依然として効果がありません。

### JavaScript

- {{jsxref("Promise.try()")}} はコールバックから返された値を、`PromiseResolve` を使用して解決するようになりました。これによりコールバックから返されるプロミスは新たなプロミスにラップされず、そのまま渡されます。
  `Promise.try(() => p)` は、`p` がネイティブなプロミスである場合に `p` と同じプロミスになります。これは仕様書の規範的な変更に従うものです ([Firefox bug 2062293](https://bugzil.la/2062293))。
- [`using`](/ja/docs/Web/JavaScript/Reference/Statements/using) 宣言は再代入ができなくなり、仕様書で要求されている const のようなセマンティクスに合致します。以前は、このようなバインディングが暗黙的に変更される場合がありました ([Firefox bug 2040286](https://bugzil.la/2040286))。

### セキュリティ

- `ffdhe2048` および `ffdhe3072` の有限体 Diffie-Hellman グループが、TLS ハンドシェイクにおいてデフォルトで提供されなくなりました。
  これらのグループのみサポートするサーバーは、接続のネゴシエーションが失敗します。代わりに、ほぼすべてのサーバーは ECDHE 鍵交換をサポートしています ([Firefox bug 1992340](https://bugzil.la/1992340))。

### API

- {{domxref("SubtleCrypto.deriveBits()")}} で、引数 `length` に渡された値が `NaN`、`Infinity`、負の値、2<sup>32</sup>−1 より大きい値である場合に {{jsxref("TypeError")}} が発生するようになりました。
  以前はこれらの値が受け入れられるか、返されたプロミスが `OperationError` で拒否されていました ([Firefox bug 2065212](https://bugzil.la/2065212))。
- {{domxref("Scheduler.yield()")}} が、解決済みのプロミス、プロミスではない値、決定済みプロミスの `then()` コールバックといった、同期的に決定される `await` を越えて包含するタスクの優先度や中止シグナルを継承するようになりました。
  以前はこのような場合に継続性が継承された状態が失われて、デフォルトの `user-visible` 優先度へ暗黙的にフォールバックしていました。

#### DOM

- {{domxref("Range.deleteContents()")}} および {{domxref("Range.extractContents()")}} が、フラットツリーではなく DOM ツリーで動作するようになりました。
  その結果、[シャドウルート](/ja/docs/Web/API/ShadowRoot) の境界をまたがる範囲は、その範囲がシャドウツリーの内部で開始または終了する場合を含めて、仕様で要求されるノードを削除および抽出するようになりました。
  以前はこのような範囲で、ホストの未割り当ての子ノードを残したままシャドウツリーの内部のコンテンツを削除して、断片を返すのではなく {{domxref("Range.extractContents()")}} が発生する場合がありました。
  同様の修正が {{domxref("Selection.deleteFromDocument()")}} にも適用されます ([Firefox bug 2053997](https://bugzil.la/2053997))。

#### Media、WebRTC、Web Audio

- {{domxref("RTCPeerConnection.RTCPeerConnection", "RTCPeerConnection()")}} コンストラクターに渡す構成オブジェクトの `alwaysNegotiateDataChannels` メンバーをサポートしました。これは `true` に設定すると、接続によって作成される SDP にデータチャネルの m-line が常に含まれるため、ネゴシエーションの新たなラウンドを必要とせずに、後で {{domxref("RTCPeerConnection.createDataChannel()")}} を呼び出すことができます。メンバーのデフォルト値は `false` であり、{{domxref("RTCPeerConnection.getConfiguration()")}} によって返されますが {{domxref("RTCPeerConnection.setConfiguration()")}} で変更することはできません ([Firefox bug 2062561](https://bugzil.la/2062561))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- Marionette および RemoteAgent は、サーバーの開始に失敗したときに個別の終了コード (69) を使用するようになりました ([Firefox bug 2040974](https://bugzil.la/2040974))。
- 継続時間が 0 より大きいアクションの中間イベントのタイミングを改善して 16 ミリ秒間隔に近づけることで、コンテンツプロセスが過負荷でも全体の継続時間が増大することを回避しました ([Firefox bug 2054442](https://bugzil.la/2054442))。

#### WebDriver BiDi

- `browsingContext.startScreencast` が有効なダウンロードフォルダーを安全に選択するようになり、デフォルトのダウンロードフォルダー (`DfltDwnld`) が使用できない場合も例外が発生しなくなります ([Firefox bug 2066782](https://bugzil.la/2066782))。
- Mozilla 独自の `moz:debugging` モジュールを、入れ子になった一時停止を正しく処理するように修正しました ([Firefox bug 2060460](https://bugzil.la/2060460))。

#### Marionette

- `WebDriver:GetElementTagName` コマンドを [最新の仕様書の変更](https://github.com/w3c/webdriver/pull/1968) に合わせて更新しました。DOM 要素の [修飾名](https://dom.spec.whatwg.org/#concept-element-qualified-name) を返すようになります。このコマンドは以前、戻り値が常に小文字でした。実際には、この変更は HTML 要素との後方互換性がありますが、SVG 要素など大文字と小文字を区別する修飾名を持つ要素とは後方互換性がない変更になります ([Firefox bug 2026697](https://bugzil.la/2026697))。

## アドオン開発者向けの変更点一覧

- [`theme`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) マニフェストキーに `backgrounds_area` プロパティを追加しました。このプロパティで、背景の画像やグラデーションを描画する位置をテーマから指定できます。これを `"window"` に設定するとブラウザーのウィンドウ全体に渡って描画されます。一方、`"top_toolbars"` に設定するとウィンドウ上部の水平ツールバーに制限します。`backgrounds_area` を省略または `"auto"` に設定すると、Firefox は `properties.additional_backgrounds_alignment` に基づいて領域を選択します ([Firefox bug 2059526](https://bugzil.la/2059526))。

## 実験的なウェブ機能

以下の機能は Firefox 156 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **スコープ付きカスタム要素レジストリー** (Nightly): `dom.scoped-custom-element-registries.enabled`

  [スコープ付きカスタム要素レジストリー](/ja/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) をサポートしました。これによりシャドウルートが、グローバルレジストリーで定義されたものと衝突しないカスタム要素を定義できます。
  このリリースでは、Nightly ビルドにおいてデフォルトで機能を有効化します ([Firefox bug 2064333](https://bugzil.la/2064333))。

- **`named-feature()` サポートクエリー**: `layout.css.anchor-positioning.follows-transforms.enabled`

  {{cssxref("@supports")}} アットルールの `named-feature()` 関数により、ほかに検出可能な構文がない機能をブラウザーがサポートしているかを確認できます。例: `@supports named-feature(anchor-position-follows-transforms)` ([Firefox bug 2042977](https://bugzil.la/2042977)、[Firefox bug 2055354](https://bugzil.la/2055354))。

- **Container Timing API**: `dom.enable_container_timing`

  Container Timing API はコンテナー要素の内容が描画されたタイミングを報告するため、ビューポート全体ではなくページの一部の領域の描画時間を測定できます ([Firefox bug 1940240](https://bugzil.la/1940240))。
