---
title: ウェブストレージ API
slug: Web/API/Web_Storage_API
l10n:
  sourceCommit: 9728acc61d855fdbb4983faf21e251456b5e2726
---

{{DefaultAPISidebar("Web Storage API")}}

**ウェブストレージ API** (Web Storage API) は、{{Glossary("Cookie")}} を使用するよりも直観的な方法で、ブラウザーがキーと値のペアを保存できる仕組みを提供します。

## ウェブストレージの概念と用途

ウェブストレージには、以下の 2 種類の仕組みがあります。

- `sessionStorage` は、ページのセッション中（ページの再読み込みや復元を含む、ブラウザーを開いている間）に使用可能な、{{glossary("origin","オリジン")}}ごとに区切られた保存領域を管理します。
  - 1 セッションのデータのみを保存します。つまり、データはブラウザー（またはタブ）が閉じられるまで保存されます。
  - データがサーバーに転送されることはありません。
  - ストレージの上限が Cookie よりも大きいです（最大 5MB）。

- `localStorage` も同様ですが、こちらはブラウザーを閉じたり再び開いたりしても持続します。
  - 有効期限なしでデータを保存し、JavaScript によるクリア、もしくは、ブラウザーキャッシュ/ローカルに保存したデータのクリアによってのみクリアされます。
  - ストレージ制限は 2 つの中で最大です。

これらの仕組みは {{domxref("Window.sessionStorage")}} および {{domxref("Window.localStorage")}} プロパティ（正確には、サポートするブラウザーは `Window` オブジェクトが `WindowLocalStorage` および `WindowSessionStorage` オブジェクトを実装しており、これらに `localStorage` および `sessionStorage` プロパティがあります）を通して使用でき、いずれかのプロパティを使用すると {{domxref("Storage")}} オブジェクトのインスタンスを生成して、データアイテムの保存、取り出し、削除ができます。 同じオリジンに対して `sessionStorage` と `localStorage` は、別の `Storage` オブジェクトを使用します。 これらは別々に制御されて機能します。

> [!NOTE]
> Firefox では、ブラウザーがクラッシュまたは再起動したとき、オリジンごとに保存されるデータ量は 10MB に制限されます。詳しくは、[ブラウザーのストレージ制限と削除基準](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#firefox)を参照してください。

> [!NOTE]
> ユーザーが[サードパーティの Cookie を禁止している](https://support.mozilla.org/ja/kb/third-party-cookies-firefox-tracking-protection)（英語）場合は、サードパーティの iframe からウェブストレージにアクセスできません。

## ウェブストレージインターフェイス

- {{domxref("Storage")}}
  - : 特定のドメインおよびストレージタイプ（セッションまたはローカル）に対して、データを保存、取り出し、削除できます。
- {{domxref("Window")}}
  - : ウェブストレージ API は {{domxref("Window")}} オブジェクトを、{{domxref("Window.sessionStorage")}} および {{domxref("Window.localStorage")}} という 2 つの新たなプロパティで拡張します。これらは、それぞれ現在のドメインのセッションおよびローカルの {{domxref("Storage")}} オブジェクトへのアクセス手段を提供します。 また、保存領域が変更される（例えば新たなアイテムを保存する）と発生する、{{domxref("Window/storage_event", "storage")}} イベントハンドラーもあります。
- {{domxref("StorageEvent")}}
  - : `storage` イベントは、保存領域が変更されたときにドキュメントの `Window` オブジェクトで発生します。

## 例

ウェブストレージの典型的な使用法を示すため、[Web Storage Demo](https://github.com/mdn/dom-examples/tree/main/web-storage) と名づけたシンプルな例を作成しました。[ランディングページ](https://mdn.github.io/dom-examples/web-storage/)には、色、フォント、装飾画像をカスタマイズするためのコントロールがあります。 別の選択肢を選ぶと、即座にページが更新されます。 さらに、選択内容を `localStorage` に保存しますので、別のページに移動した後に再びこのページを読み込むと、選択内容が維持されています。

また、[event output ページ](https://mdn.github.io/dom-examples/web-storage/event.html)も提供します。 このページを別のタブで開くと、ランディングページで選択肢を変更したときに {{domxref("StorageEvent")}} が発生するのに応じて、更新されたストレージの情報が出力されるのを確認できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## プライベートブラウジング / シークレットモード

プライベートウィンドウ、シークレットモード、および同様の名前のプライバシーブラウジングオプションでは、履歴やクッキーのようなデータは格納されません。プライベートモードでは `localStorage` は `sessionStorage` のように扱われます。ストレージ API が利用可能で完全に機能しますが、プライベートウィンドウに格納されたデータはすべてブラウザーまたはブラウザータブが閉じられたときに削除されます。

## 関連情報

- [ウェブストレージ API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [ブラウザーのストレージ制限と削除基準](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
