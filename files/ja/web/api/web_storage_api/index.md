---
title: Web Storage API
slug: Web/API/Web_Storage_API
---

{{DefaultAPISidebar("Web Storage API")}}

**Web Storage API** は、{{Glossary("Cookie")}} を使用するよりも直感的な方法で、ブラウザーがキーと値のペアを保存できる仕組みを提供します。

## Web Storage の概念と使用方法

Web Storage には、以下の 2 種類の仕組みがあります:

- `sessionStorage` は、ページのセッション中 (ページの再読み込みや復元を含む、ブラウザーを開いている間) に使用可能な、{{glossary("origin","オリジン")}}ごとに区切られた保存領域を管理します。

  - セッションデータのみを保存します。つまり、データはブラウザー（またはタブ）が閉じられるまで保存されます。
  - データがサーバーに転送されることはありません。
  - ストレージの上限が Cookie よりも大きいです（最大 5MB ）。

- `localStorage` も同様ですが、こちらはブラウザーを閉じたり再び開いたりしても持続します。

  - 有効期限なしでデータを保存し、JavaScript によるクリア、もしくは、ブラウザーキャッシュ/ローカルに保存したデータのクリアによってのみクリアされます。
  - ストレージ制限は 3 つの中で最大です。

これらの仕組みは {{domxref("Window.sessionStorage")}} および {{domxref("Window.localStorage")}} プロパティ (正確には、サポートするブラウザーは `Window` オブジェクトが `WindowLocalStorage` および `WindowSessionStorage` オブジェクトを実装しており、これらに `localStorage` および `sessionStorage` プロパティがあります) を通して使用でき、いずれかのプロパティを使用すると {{domxref("Storage")}} オブジェクトのインスタンスを生成して、データアイテムの保存、取り出し、削除ができます。 同じオリジンに対して `sessionStorage` と `localStorage` は、別の `Storage` オブジェクトを使用します。 これらは別々に制御されて機能します。

> **メモ:** Firefox 45 より、ブラウザーがクラッシュまたは再起動したとき、オリジンごとに保存されるデータ量は 10MB に制限されます。 Web Storage の使用量が過大であることによって発生するメモリの問題を避けるために、制限を設定しました。

> **メモ:** ユーザーが[サードパーティの Cookie を禁止している](https://support.mozilla.org/kb/disable-third-party-cookies)（英語）場合は、サードパーティの iframe から Web Storage にアクセスできません ([Firefox 43](/ja/docs/Mozilla/Firefox/Releases/43) から、この動作を実装しています)。

> **メモ:** Web Storage は、[mozStorage](/ja/docs/Storage) (SQLite 用の、Mozilla の XPCOM インターフェイス) や [Session store API](/ja/docs/Session_store_API) (拡張機能で使用するための、[XPCOM](/ja/docs/XPCOM) ストレージユーティリティ) とは異なります。

## Web Storage インターフェイス

- {{domxref("Storage")}}
  - : 特定のドメインおよびストレージタイプ (セッションまたはローカル) に対して、データを保存、取り出し、削除できます。
- {{domxref("Window")}}
  - : Web Storage API は {{domxref("Window")}} オブジェクトを、{{domxref("Window.sessionStorage")}} および {{domxref("Window.localStorage")}} という新たなプロパティで拡張します。 これらは、それぞれ現在のドメインのセッションおよびローカルの {{domxref("Storage")}} オブジェクトへのアクセス手段を提供します。 また、保存領域が変更される (例えば新たなアイテムを保存する) と発生する、{{domxref("Window.onstorage")}} イベントハンドラもあります。
- {{domxref("StorageEvent")}}
  - : `storage` イベントは、保存領域が変更されたときにドキュメントの `Window` オブジェクトで発生します。

## 例

Web Storage の典型的な使用法を示すため、想像力豊かに [Web Storage Demo](https://github.com/mdn/dom-examples/tree/master/web-storage) と名づけたシンプルな例を作成しました。[ランディングページ](https://mdn.github.io/dom-examples/web-storage/)には、色、フォント、装飾画像をカスタマイズするためのコントロールがあります。 別の選択肢を選ぶと、即座にページが更新されます。 さらに、選択内容を `localStorage` に保存しますので、別のページに移動した後に再びこのページを読み込むと、選択内容が維持されています。

また、[event output ページ](https://mdn.github.io/dom-examples/web-storage/event.html)も提供します。 このページを別のタブで開くと、ランディングページで選択肢を変更したときに {{domxref("StorageEvent")}} が発生するのに応じて、更新されたストレージの情報が出力されるのを確認できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

### `Window.localStorage`

{{Compat("api.Window.localStorage")}}

### `Window.sessionStorage`

{{Compat("api.Window.sessionStorage")}}

## プライベートブラウジング / シークレットモード

ほとんどの現行ブラウザーは「シークレット」や「プライベートブラウジング」などと呼ばれる、履歴や Cookie といったデータを保存しないプライバシーモードをサポートしています。 これらは明白な理由で、Web Storage とは根本的に互換性がありません。 それでもブラウザーベンダーは、この非互換性をどのように扱うかを、さまざまなシナリオで実験しています。

ほとんどのブラウザーは Storage API を有効にして、見かけ上完全に機能する方針をとっていますが、保存したデータはすべて、ブラウザーを閉じた後に消去されることが大きな違いです。 これらのブラウザーでは、既存の保存済みデータ (通常のブラウジングセッションで保存したもの) をどう扱うかについて、まださまざまな解釈が存在します。 このデータはプライベートモードで読み出せるべきでしょうか? 一部のブラウザー、特に Safari ではストレージは使用できますが空であり、また割り当てられたクォータが 0 バイトであるため事実上データを書き込めないという解決策をとっています。

開発者はこれらのさまざまな実装を意識して、Web Storage API に依存する Web サイトを開発する際に考慮するべきです。 詳しくはこのトピックを扱った、[WHATWG のブログ記事](https://blog.whatwg.org/tag/localstorage)（英語）をご覧ください。

## 関連情報

- [Web Storage API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [ブラウザーのストレージ制限と削除基準](/ja/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria)
- [HTML5 Storage API By Venkatraman](https://medium.com/@ramsunvtech/onfocus-html5-storage-apis-b45d92aa424b)
