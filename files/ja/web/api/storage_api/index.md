---
title: Storage API
slug: Web/API/Storage_API
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{securecontext_header}}{{DefaultAPISidebar("Storage")}} {{AvailableInWorkers}}

[ストレージ標準](https://storage.spec.whatwg.org/) は、ウェブサイトがユーザーのブラウザーにデータを保存するために使えるあらゆる API や技術によって使われることを想定した、共有ストレージシステムを定義しています。

ストレージ標準によって管理されるウェブサイトのデータには、通常 [IndexedDB データベース](/ja/docs/Web/API/IndexedDB_API)や [Cache API のデータ](/ja/docs/Web/API/Cache)が含まれますが、[ウェブストレージ API](/ja/docs/Web/API/Web_Storage_API)のような、サイトからアクセスできるその他の種類のデータが含まれる場合もあります。

Storage API を使うと、ウェブサイトは使える容量や現在の使用量を知れるほか、他のデータのために {{Glossary("user agent", "ユーザーエージェント")}} がデータを捨てる際、事前に通知する必要があるかどうかを制御できます。

この記事では、ユーザーエージェントがウェブサイトのデータを保存・管理する仕組みの概要を説明します。ストレージの制限や削除（エビクション）に関する詳細は、[ブラウザーのストレージ割り当てと削除基準](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)を見てください。

この記事では、サイトの使えるストレージ容量を推定するために使われる {{domxref("StorageManager")}} インターフェイスの概要も説明します。

## 概念と使用法

### ストレージバケット

サイトデータが格納されるストレージ標準で定義されているストレージシステムは、通常、{{Glossary("origin", "オリジン")}} ごとに 1 つの _バケット_ で構成されます。

基本的に、すべてのウェブサイトは、データが格納される独自のストレージ領域を持っています。ただし、場合によっては、ユーザーエージェントが単一のオリジンのデータを複数の異なるバケットに格納することを決めることがあります。例えば、そのオリジンが複数のサードパーティオリジンに埋め込まれている場合です。

詳しくは、[ブラウザーでは、異なるウェブサイトのデータをどのように区切るのか](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#ブラウザーでは、異なるウェブサイトのデータをどのように区切るのか) を見てください。

### バケットモード

各サイトのストレージバケットには、そのバケットのデータ保持ポリシーを決める「モード」があります。モードには以下の 2 種類があります。

- `"best-effort"`（最大限の努力）
  - : ユーザーエージェントは、バケット内のデータをできる限り保とうとしますが、ストレージ容量が足らず、その圧迫を解消するためにバケットをクリアする必要が生じた場合でも、_ユーザーへの警告は行いません_。
- `"persistent"`（永続的）
  - : ユーザーエージェントはできる限りデータを保ち、`"persistent"`（永続的）とマークされたバケットの削除を考える前に、`"best-effort"`（ベストエフォート）のバケットをすべて消します。永続的なバケットの削除を考える必要が生じた場合、ユーザーエージェントはユーザーに通知し、必要に応じて 1 つまたは複数の永続的なバケットを消す手段を提供します。

{{domxref("StorageManager.persist", "navigator.storage.persist()")}} メソッドを使うと、オリジンのストレージバケットモードを変えられます。このメソッドには `"persistent-storage"` [ユーザー権限](/ja/docs/Web/API/Permissions_API) が必要です。

```js
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().then((persistent) => {
    if (persistent) {
      console.log("明示的なユーザー操作がない限り、ストレージは消されません");
    } else {
      console.log("ストレージが足らない時、UA によってストレージが消されるかもしれません"
    }
  });
}
```

{{domxref("StorageManager.persisted", "navigator.storage.persisted()")}} メソッドを使って、あるオリジンのストレージが永続的かどうかを確かめられます。

```js
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persisted().then((persistent) => {
    if (persistent) {
      console.log("明示的なユーザー操作がない限り、ストレージは消されません");
    } else {
      console.log(
        "ストレージが足らない時、UA によってストレージが消されるかもしれません",
      );
    }
  });
}
```

詳しくは [ブラウザーに格納されるデータは維持されるか](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#ブラウザーに格納されるデータは維持されるか) を見てください。

### クォータと使用量の推定

ユーザーエージェントは、選んだ任意のメカニズムを使って、特定のサイトが使えるストレージの最大量を決めます。この最大値がオリジンの**クォータ**（quota）です。サイトが使っているスペースの量は、その**使用量**（usage）と呼ばれます。これらの値は両方とも推定値です。正確でない理由は次のようにいくつかあります。

- ユーザーエージェントは、特定のオリジンが使うデータの正確なサイズを隠す方が良いです。これは、それらの値が[Fingerprinting (フィンガープリンティング)](/ja/docs/Glossary/Fingerprinting)目的で使われるのを防ぐためです。
- 格納されたデータの物理的サイズを小さくするために重複排除、圧縮、およびその他の方法が使われることがあります。
- クォータは、オリジンが使えるスペースの控えめな概算値であり、オーバーランを防ぐためにデバイスで使えるスペースより小さくなければなりません。

特定のオリジンにおける推定クォータと使用量を調べるには、{{domxref("StorageManager.estimate", "navigator.storage.estimate()")}} メソッドを使います。このメソッドは Promise を返し、解決されると、これらの数を含むオブジェクトを受け取ります。例えば:

```js
navigator.storage.estimate().then((estimate) => {
  // estimate.quota は見積もりクォータです
  // estimate.usage は見積もり使用バイト数です
});
```

オリジンが保存できるデータ量の詳しくは、[どれだけのデータが格納できるか](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#どれだけのデータが格納できるか) を見てください。

### データ削除

データ削除とは、ユーザーエージェントがオリジンに保存されているデータを消すプロセスです。これは、 データの保存に使われているデバイスのストレージ容量が足りていない場合に起きます。

オリジンに保存されているデータをクリアする場合、オリジンのバケットは単一のエンティティとして扱われます。このオリジンに保存されているデータはすべてクリアされます。

バケットが `"persistent"` としてマークされている場合、データのオリジン自体またはユーザーが明示的に消さない限り、ユーザーエージェントによってバケットの内容はクリアされません。これには、ユーザーが 「キャッシュをクリア」 または 「最近の履歴をクリア」 オプションを選んだ場合などが含まれます。ユーザーには、永続的なサイトストレージバケットを消すための許可を具体的に求められます。

詳しくは [データが退去されるのはいつか](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#データが退去されるのはいつか) を見てください。

## インターフェイス

- {{domxref("StorageManager")}}
  - : 永続化の権限を管理し、使えるストレージ容量を推定するためのインターフェイスを提供します。

### 他のインターフェイスへの拡張

- {{domxref("Navigator.storage")}} {{ReadOnlyInline}}
  - : サイトやアプリごとに、永続化の権限を管理し、使えるストレージ容量を推定するために使われるシングルトンの {{domxref("StorageManager")}} オブジェクトを返します。
- {{domxref("WorkerNavigator.storage")}} {{ReadOnlyInline}}
  - : 永続化の権限を管理し、使えるストレージ容量を推定するための {{domxref("StorageManager")}} インターフェイスを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Permissions API の使用](/ja/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [web.dev のウェブ向けのストレージ](https://web.dev/articles/storage-for-the-web?hl=ja) 
- [web.dev の永続ストレージ](https://web.dev/articles/persistent-storage?hl=ja)
- [Chrome の Web ストレージとクォータの概念](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/edit) (英語)
