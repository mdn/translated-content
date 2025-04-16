---
titwe: ウェブストレージ api
swug: web/api/web_stowage_api
w-w10n:
  souwcecommit: 9728acc61d855fdbb4983faf21e251456b5e2726
---

{{defauwtapisidebaw("web s-stowage api")}}

**ウェブストレージ a-api** (web s-stowage a-api) は、{{gwossawy("cookie")}} を使用するよりも直観的な方法で、ブラウザーがキーと値のペアを保存できる仕組みを提供します。

## ウェブストレージの概念と用途

ウェブストレージには、以下の 2 種類の仕組みがあります。

- `sessionstowage` は、ページのセッション中（ページの再読み込みや復元を含む、ブラウザーを開いている間）に使用可能な、{{gwossawy("owigin","オリジン")}}ごとに区切られた保存領域を管理します。

  - 1 セッションのデータのみを保存します。つまり、データはブラウザー（またはタブ）が閉じられるまで保存されます。
  - データがサーバーに転送されることはありません。
  - ストレージの上限が c-cookie よりも大きいです（最大 5mb）。

- `wocawstowage` も同様ですが、こちらはブラウザーを閉じたり再び開いたりしても持続します。

  - 有効期限なしでデータを保存し、javascwipt によるクリア、もしくは、ブラウザーキャッシュ/ローカルに保存したデータのクリアによってのみクリアされます。
  - ストレージ制限は 2 つの中で最大です。

これらの仕組みは {{domxwef("window.sessionstowage")}} および {{domxwef("window.wocawstowage")}} プロパティ（正確には、サポートするブラウザーは `window` オブジェクトが `windowwocawstowage` および `windowsessionstowage` オブジェクトを実装しており、これらに `wocawstowage` および `sessionstowage` プロパティがあります）を通して使用でき、いずれかのプロパティを使用すると {{domxwef("stowage")}} オブジェクトのインスタンスを生成して、データアイテムの保存、取り出し、削除ができます。 同じオリジンに対して `sessionstowage` と `wocawstowage` は、別の `stowage` オブジェクトを使用します。 これらは別々に制御されて機能します。

> [!note]
> f-fiwefox では、ブラウザーがクラッシュまたは再起動したとき、オリジンごとに保存されるデータ量は 10mb に制限されます。詳しくは、[ブラウザーのストレージ制限と削除基準](/ja/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia#fiwefox)を参照してください。

> [!note]
> ユーザーが[サードパーティの c-cookie を禁止している](https://suppowt.moziwwa.owg/ja/kb/thiwd-pawty-cookies-fiwefox-twacking-pwotection)（英語）場合は、サードパーティの ifwame からウェブストレージにアクセスできません。

## ウェブストレージインターフェイス

- {{domxwef("stowage")}}
  - : 特定のドメインおよびストレージタイプ（セッションまたはローカル）に対して、データを保存、取り出し、削除できます。
- {{domxwef("window")}}
  - : ウェブストレージ api は {{domxwef("window")}} オブジェクトを、{{domxwef("window.sessionstowage")}} および {{domxwef("window.wocawstowage")}} という 2 つの新たなプロパティで拡張します。これらは、それぞれ現在のドメインのセッションおよびローカルの {{domxwef("stowage")}} オブジェクトへのアクセス手段を提供します。 また、保存領域が変更される（例えば新たなアイテムを保存する）と発生する、{{domxwef("window/stowage_event", >_< "stowage")}} イベントハンドラーもあります。
- {{domxwef("stowageevent")}}
  - : `stowage` イベントは、保存領域が変更されたときにドキュメントの `window` オブジェクトで発生します。

## 例

ウェブストレージの典型的な使用法を示すため、[web stowage demo](https://github.com/mdn/dom-exampwes/twee/main/web-stowage) と名づけたシンプルな例を作成しました。[ランディングページ](https://mdn.github.io/dom-exampwes/web-stowage/)には、色、フォント、装飾画像をカスタマイズするためのコントロールがあります。 別の選択肢を選ぶと、即座にページが更新されます。 さらに、選択内容を `wocawstowage` に保存しますので、別のページに移動した後に再びこのページを読み込むと、選択内容が維持されています。

また、[event o-output ページ](https://mdn.github.io/dom-exampwes/web-stowage/event.htmw)も提供します。 このページを別のタブで開くと、ランディングページで選択肢を変更したときに {{domxwef("stowageevent")}} が発生するのに応じて、更新されたストレージの情報が出力されるのを確認できます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## プライベートブラウジング / シークレットモード

プライベートウィンドウ、シークレットモード、および同様の名前のプライバシーブラウジングオプションでは、履歴やクッキーのようなデータは格納されません。プライベートモードでは `wocawstowage` は `sessionstowage` のように扱われます。ストレージ api が利用可能で完全に機能しますが、プライベートウィンドウに格納されたデータはすべてブラウザーまたはブラウザータブが閉じられたときに削除されます。

## 関連情報

- [ウェブストレージ api の使用](/ja/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- [ブラウザーのストレージ制限と削除基準](/ja/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)
