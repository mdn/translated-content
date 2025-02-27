---
title: Firefox 131 for developers
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: d27be65a297aa82a1eceb024be325b1385a498e5
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 131 の変更点をまとめています。Firefox 131 は、米国時間 [2024 年 10 月 1 日](https://whattrainisitnow.com/release/?version=129) にリリースされました。

## ウェブ開発者向けの変更点一覧

### CSS

- [Anchor Positioning](/ja/docs/Web/CSS/CSS_anchor_positioning) のさらなる実装の準備として、`inset-area` CSS プロパティを {{CSSXRef("position-area")}} に改名しました。現在、このプロパティは値を解析するために内部で使用するのみです。Anchor Positioning の機能は、設定で制御した上で順次ロールアウトしています。詳しくは [Firefox における実験的機能: CSS Anchor Positioning](/ja/docs/Mozilla/Firefox/Experimental_features#css_anchor_positioning) をご覧ください ([Firefox bug 1909358](https://bugzil.la/1909358)、[Firefox bug 1838746](https://bugzil.la/1838746))。

### JavaScript

- {{jsxref("Iterator.prototype.drop()")}}、{{jsxref("Iterator.prototype.every()")}}、{{jsxref("Iterator.prototype.filter()")}}、{{jsxref("Iterator.prototype.find()")}}、{{jsxref("Iterator.prototype.flatMap()")}}、{{jsxref("Iterator.prototype.forEach()")}}、{{jsxref("Iterator.prototype.map()")}}、{{jsxref("Iterator.prototype.reduce()")}}、{{jsxref("Iterator.prototype.some()")}}、{{jsxref("Iterator.prototype.take()")}} を含む、同期イテレーターヘルパーをサポートしました。これらのヘルパーは、中間的な `Array` オブジェクトを作成する必要なくイテレーターで `Array` のような操作を可能にします。また、中間的な `Array` を作成できない大量のデータセットでも使用できます。詳しくは `Iterator` インターフェイスの [Iterator helpers](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) をご覧ください ([Firefox bug 1896390](https://bugzil.la/1896390))。

### HTTP

- [`SameSite=None`](/ja/docs/Web/HTTP/Headers/Set-Cookie#none) の属性値を持つ {{httpheader("Set-Cookie")}} HTTP ヘッダーは、[`Secure`](/ja/docs/Web/HTTP/Headers/Set-Cookie#secure) 属性も持つことが必要になりました。これは、`SameSite=None` を設定した Cookie が HTTPS 接続だけで送信されることを保証します。また、Firefox は値が不特定な `SameSite` を `SameSite=None` とみなすため、`SameSite` を指定していない Cookie も同じ制約があります ([Firefox bug 1909673](https://bugzil.la/1909673))。
- [Cookies Having Independent Partitioned State (CHIPS)](/ja/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies)、いわゆる "Partitioned Cookies" をサポートしました。
  この機能は開発者が {{HTTPHeader("Set-Cookie")}} HTTP ヘッダーの [`partitioned`](/ja/docs/Web/HTTP/Headers/Set-Cookie#partitioned) ディレクティブを使用して、Cookie を分割された記憶領域へ保存できるようにします。これを設定すると Cookie がトップレベルごとに分割された記憶領域に保存されて、同じトップレベルサイトかサブドメインに限り読み取れるようになります。これはクロスサイトトラッキングを防ぎながら、サイトのさまざまなサブドメインにわたって埋め込み地図やチャットウィジェットの状態を維持するなどの、適切なサードパーティ Cookie の利用を可能にします ([Firefox bug 1908160](https://bugzil.la/1908160))。

### API

- {{domxref('PointerEvent')}} インターフェイスの {{domxref('PointerEvent.altitudeAngle','altitudeAngle')}} および {{domxref('PointerEvent.azimuthAngle','azimuthAngle')}} プロパティをサポートしました。- それぞれポインターやスタイラスと画面 (X 軸 -Y 軸の面) の角度、および画面上で X 軸に対するスタイラスの回転角を示します ([Firefox bug 1656377](https://bugzil.la/1656377))。
- [テキストフラグメント](/ja/docs/Web/URI/Fragment/Text_fragments) をサポートしました。ユーザーがウェブページのテキストの一部分にリンクおよびハイライト表示することを可能にします。この機能は[URL フラグメント](/ja/docs/Web/URI/Fragment) で、表示されるテキストのパターンに基づいて対象を識別する特定の構文を使用します。
  開発者は {{domxref("Document.fragmentDirective")}} プロパティ ({{domxref("FragmentDirective")}} インターフェイスのインスタンス) の存在によって、テキストフラグメントをサポートしているか確認できます。また、{{CSSxRef("::target-text")}} 擬似要素を使用して、テキストフラグメントリンクで指定されたテキストの選択およびスタイル設定が可能です ([Firefox bug 1914877](https://bugzil.la/1914877))。
- {{domxref("Document")}} インターフェイスの {{domxref('Document/caretPositionFromPoint','caretPositionFromPoint()')}} メソッドを、キャレットの位置に対応するシャドウルートがメソッドに渡されていればシャドウ DOM におけるキャレット位置のテキストノードとオフセットを返すように更新しました。{{domxref("ShadowRoot")}} オブジェクトは、新たに追加された引数 `options` の `shadowRoots` プロパティを使用してメソッドに渡すことができます ([Firefox bug 1914596](https://bugzil.la/1914596))。

### WebAssembly

- `exnref` の値を持つ新たな例外参照を、WebAssembly と JavaScript の間の双方向の [例外処理](/ja/docs/WebAssembly/JavaScript_interface/Exception) の支援に使用できるようになりました ([Firefox bug 1908375](https://bugzil.la/1908375))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- WebDriver Classic および BiDi の双方で、`keyUp` および `keyDown` アクションが `value` で複数の文字を受け入れないようになりました ([Firefox bug 1910352](https://bugzil.la/1910352))。

#### WebDriver BiDi

- `network.continueResponse` コマンドの残りの引数をサポートしました:
  - 引数 cookies および headers ([Firefox bug 1853887](https://bugzil.la/1853887))。
  - 引数 `statusCode` (例: 200, 304) および `reasonPhrase` (例: "OK"、"Not modified") ([Firefox bug 1913737](https://bugzil.la/1913737))。
- 引数 `wait` が `none` である場合に `browsingContext.navigate` コマンドが返り `beforeunload` プロンプトが発生するようになりました ([Firefox bug 1763134](https://bugzil.la/1763134))。
- 仕様書の要求に従って、ナビゲーションが失敗したすべてのケースで `browsingContext.navigate` コマンドが `unknown error` を返すようになりました ([Firefox bug 1905083](https://bugzil.la/1905083))。
- `session.new` コマンドは、クライアントが引数で指定していない場合に `unhandledPromptBehavior` 機能をレスポンスに含めないようになりました ([Firefox bug 1909455](https://bugzil.la/1909455))。

## アドオン開発者向けの変更点一覧

- Nightly 版のFirefox 131 で、{{WebExtAPIRef("storage.session")}} API で保存するデータに 10 MB の上限が強制されるようになりました。以前の Firefox は上限を実装していませんでした。この制限は Firefox 134 からリリース版にロールアウトします ([Firefox bug 1915688](https://bugzil.la/1915688))。これにより、以前の動作に依存する拡張機能が問題を修正できるようになります ([Firefox bug 1908925](https://bugzil.la/1908925))。
- {{WebExtAPIRef("storage.session")}} が {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}} API および {{WebExtAPIRef("storage.session.QUOTA_BYTES")}} プロパティをサポートしました ([Firefox bug 1908925](https://bugzil.la/1908925))。
- `tabs.update()` で `openerTabId` が変更されたときに {{WebExtAPIRef("tabs.onUpdated")}} が発生するようになりました ([Firefox bug 1409262](https://bugzil.la/1409262))。
- `openerTabId` をクリアーするため、{{WebExtAPIRef("tabs.update")}} で `openerTabId` に `-1` を設定することが可能になりました ([Firefox bug 1409262](https://bugzil.la/1409262))。

## 実験的なウェブ機能

以下の機能は Firefox 131 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **正規表現の (?ims-ims:...) モディファイアー:** `javascript.options.experimental.regexp_modifiers`。

  正規表現の [(?ims-ims:...)](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) モディファイアーは、正規表現パターンの特定の一部分に限って効果がある変更を行えます ([Firefox bug 1899813](https://bugzil.la/1899813))。

- **マイクとカメラの権限:** `permissions.media.query.enabled`。

  マイクやカメラへのアクセスが許可されているか拒否されているか、またはユーザーの承諾が必要な状態かを確認するため、{{domxref("Permissions.query()")}} メソッドで `microphone` および `camera` の [権限](/ja/docs/Web/API/Permissions_API) が使用可能になりました ([Firefox bug 1609427](https://bugzil.la/1609427) および [Firefox bug 1915222](https://bugzil.la/1915222))。

## 過去のバージョン

{{Firefox_for_developers}}
