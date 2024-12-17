---
title: Firefox 103 for developers
slug: Mozilla/Firefox/Releases/103
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 103 の変更点をまとめています。Firefox 103 は、2022 年 7 月 26 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

#### 廃止

### MathML

#### 廃止

- 非推奨の `scriptminsize` および `scriptsizemultiplier` 属性を削除しました ([Firefox バグ 1772697](https://bugzil.la/1772697))。

### CSS

- {{CSSxRef("backdrop-filter")}} プロパティ (要素の背後の領域に、ぼかしや色変化のようなグラフィック効果を適用するために使用できます) がデフォルトで有効になりました。以前は設定項目で無効にしていました ([Firefox バグ 1578503](https://bugzil.la/1578503))。
- {{CSSxRef("scroll-snap-stop")}} プロパティが使用可能になりました ([Firefox バグ 1312165](https://bugzil.la/1312165))。速くスクロールするときでもスナップ位置を通り過ぎることを許可するかどうかを指定するために、このプロパティの値 `always` および `normal` を使用できます。
- {{CSSxRef(":modal")}} 擬似クラスをサポートしました。これはインタラクションが却下されるまでの間、他の要素とのすべてのインタラクションを除外する状態にある要素を選択します ([Firefox バグ 1768535](https://bugzil.la/1768535))。
- `contain` プロパティの値 [`style`](/ja/docs/Web/CSS/contain#style) をサポートしました。この値は、ある要素とその子孫以外に影響を及ぼす可能性のあるプロパティに対して、包含している要素の外に影響を与えないようにするために使用できます。詳しくは [Firefox バグ 1463600](https://bugzil.la/1463600) をご覧ください。

#### 廃止

### JavaScript

- [構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) を使用して、ネイティブのエラー型をシリアライズできるようになりました。
  これには {{JSxRef("Error")}}、{{JSxRef("EvalError")}}、{{JSxRef("RangeError")}}、{{JSxRef("ReferenceError")}}、{{JSxRef("SyntaxError")}}、{{JSxRef("TypeError")}}、{{JSxRef("URIError")}}、{{JSxRef("AggregateError")}} が含まれます。
  シリアライズしたプロパティには [`name`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/name)、[`message`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/message)、[`cause`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)、[`fileName`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName)、[`lineNumber`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber)、[`columnNumber`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber) が含まれます。
  {{JSxRef("AggregateError")}} 向けには `message`、`name`、`cause`、`errors` プロパティがシリアライズされます。
  詳しくは [Firefox バグ 1556604](https://bugzil.la/1556604) をご覧ください。

#### 廃止

### HTTP

#### 廃止

### セキュリティ

#### 廃止

### API

- [`ReadableStream`](/ja/docs/Web/API/ReadableStream)、[`WritableStream`](/ja/docs/Web/API/WritableStream)、[`TransformStream`](/ja/docs/Web/API/TransformStream) が [移譲可能なオブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects) になりました。これは、`postMessage` を使用して window と worker でオブジェクト共有するときや、オブジェクトをコピーするために [structuredClone()](/ja/docs/Web/API/Window/structuredClone) を使用するときに、所有権を渡せることを意味します。
  転送後は、元のオブジェクトを使用できなくなります。
  詳しくは [Firefox バグ 1659025](https://bugzil.la/1659025) をご覧ください。

- [`caches`](/ja/docs/Web/API/Window/caches)、[`CacheStorage`](/ja/docs/Web/API/CacheStorage)、[`Cache`](/ja/docs/Web/API/Cache) で [安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts) が必要になりました。安全でないコンテキストで使用すると、プロパティやインターフェイスが定義されません。
  以前の `cache` は、安全なコンテキストの外で使用すると例外が発生する `CacheStorage` を返していました。
  詳しくは [Firefox バグ 1112134](https://bugzil.la/1112134) をご覧ください。

#### DOM

#### Media、WebRTC、Web Audio

#### 廃止

### WebAssembly

#### 廃止

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- 実験的な BiDi のコマンドやイベントを無効にする設定項目である `remote.experimental.enabled` を追加しました ([Firefox バグ 1777951](https://bugzil.la/1777951))。
- `evaluate` コマンドの実験的な実装とともに `script` モジュールを追加しました。`remote.experimental.enabled` を `true` に設定した場合に使用できます ([Firefox バグ 1742979](https://bugzil.la/1742979))。
- たとえば `log.entryAdded` のイベントデータや `script.evaluate` の戻り値で使用される、単純な値と複雑なオブジェクトのコレクションのシリアライズをサポートしました ([Firefox バグ 1770752](https://bugzil.la/1770752))。
- キャッシュされた画像へナビゲーションするときに `browsingContext.navigate` でエラーが発生する場合があるエッジケースを修正しました ([Firefox バグ 1763133](https://bugzil.la/1763133))。

#### Marionette

- `platformVersion` 機能を、`moz:platformVersion` として返されるように更新しました ([Firefox バグ 1771760](https://bugzil.la/1771760))。
- `ChromeElement` のサポートを廃止しました。すべての要素が `WebElement` としてシリアライズされます ([Firefox バグ 1775036](https://bugzil.la/1775036) および [Firefox バグ 1775064](https://bugzil.la/1775064))。

## アドオン開発者向けの変更点一覧

#### 廃止

- WebExtensions で ServiceWorker API を削除しました (拡張機能の内部で実行するときに `'serviceWorker' in navigator` が false を返すようになりました) ([Firefox バグ 1593931](https://bugzil.la/1593931))。

### その他

## 過去のバージョン

{{Firefox_for_developers(102)}}
