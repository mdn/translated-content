---
title: Document.requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
tags:
  - API
  - DOM
  - Document
  - メソッド
  - Reference
  - Storage Access API
  - requestStorageAccess
browser-compat: api.Document.requestStorageAccess
translation_of: Web/API/Document/requestStorageAccess
---
{{APIRef}}

**`requestStorageAccess()`** は {{domxref("Document")}} インターフェイスのメソッドで、ファーストパーティのストレージへのアクセスが許可されたら解決し、アクセスが拒否されたら拒否される {{jsxref("Promise")}} を返します。

## ストレージへのアクセスが許可される条件

ストレージへのアクセスは、以下の一連のチェックに基づいて許可されます。

1.  文書がすでにアクセスを許可されていれば、解決。
2.  文書のオリジンが null であれば、拒否。
3.  文書のフレームが主フレームであれば、解決。
4.  副フレームのオリジンが主フレームのものと同じであれば、解決。
5.  副フレームがサンドボックス化されていなければ、 7 へ飛ぶ。
6.  副フレームにトークン `allow-storage-access-by-user-activation` がなければ、拒否。
7.  副フレームの親フレームが最上位フレームでなければ、拒否。
8.  ブラウザーがユーザージェスチャーを処理中でなければ、拒否。
9.  ブラウザーが持っている追加の規則をチェック。例えば、ホワイトリスト、ブラックリスト、端末上の分類、ユーザー設定、クリックジャック防止の推測、ユーザーへの明示的な権限の確認など。いくつかの規則が満たされていなければ、拒否。
10. 文書にクッキーやその他のサイトストレージへのアクセスを許可し、将来の {{domxref("Document.hasStorageAccess()")}} および `requestStorageAccess()` の呼び出しのためにその事実を保存。

上記のすべての要件が満たされていると仮定すると、Firefox は、ユーザーセッション存続期間の最大 24 時間で、現在のセッションのファーストパーティのオリジンのしきい値数まで、要求側のオリジンへのストレージアクセスを自動的に許可します。 要求側のオリジンがストレージアクセス許可の最大許容数を超えた後、同じ閲覧セッション中に `requestStorageAccess()` を呼び出すと、ユーザーに確認します。

オリジンが取得できる同時ストレージアクセス許可の最大数は、現在のセッションでアクセスしている最上位のオリジンの数の 1% または 5 のいずれか大きい方として現在定義されている正の整数です。しきい値は eTLD+1 のレベルで適用されるため、例えば、`foo.example.com` と `bar.example.com` に対する 2 つのストレージアクセス許可は、制限に対する単一の例外としてのみカウントされます。

`requestStorageAccess()` 呼び出しの時点で、要求側のオリジンがストレージアクセスを持っている場合...

...オリジン数が最大値より少ない場合:

- ユーザーに確認しません。
- オリジンには、現在の最上位オリジンに対する一時的なストレージアクセス許可が与えられます。
- 要求側のオリジンのストレージにアクセスできるオリジンの数は、 1 ずつ増加します。

  - この数は、[互換性ヒューリスティック](/ja/docs/Mozilla/Firefox/Privacy/Storage_access_policy#Automatic_storage_access_upon_interaction)によって自動アクセス許可が与えられたときにも増加することに注意してください。

- 一時ストレージアクセス許可は次のとおりです。

  - ブラウザーセッションの終了時に無効になります。
  - ディスクに永続化されません（例えば、ブラウザーがクラッシュすると持続しません）。
  - 長時間のブラウザーセッションの場合は、24時間後にリセットします。
 
...オリジン数が最大値以上の場合:

- ユーザーに確認します。
- ユーザーが「許可」または「任意のサイトで許可」をクリックすると、要求は解決されます。
- ユーザーが「許可しない」をクリックすると、ストレージアクセス要求は拒否され、要求側のオリジンは別のユーザーインタラクションを受け取ると再要求できます。
- ユーザーがストレージを許可する場合、要求側のオリジンは現在の最上位オリジンの永続ストレージアクセス許可を与えられます。
- 要求側のオリジンのストレージにアクセスできるオリジンの数は、 1 ずつ増加します。
- 永続ストレージアクセスの権限は次のとおりです。

  - ディスクに永続化され、将来のブラウザーセッションで有効のままになります。
  - 30 日後にリセットします。

一時的または永続的なストレージアクセス許可が期限切れになると、要求側のオリジンのストレージアクセスを持つオリジンの数が1ずつ減ります。

> **Note:** 要求側のオリジンが[追跡オリジン (tracking origin) として分類](/ja/docs/Web/Privacy/Storage_Access_Policy#Tracking_protection_explained)されていない場合、アクセス要求には、ページが再読み込みされると消滅する一時的なストレージアクセス許可が自動的に付与されます。 この場合、ユーザーにはプロンプトが表示されないため、`requestStorageAccess()` を呼び出しても、{{domxref("Document.hasStorageAccess()")}} によって返される値を変更する以外に副作用はありません。

## デバッグ

ストレージアクセス許可のしきい値により、Firefox がユーザーにアクセスをプロンプトする条件の下でウェブサイトをテストすることがより難しくなる場合があります。 テストを簡単にするために、`about:config` に次の 2 つの設定を追加して `requestStorageAccess()` 呼び出し時のプロンプトを制御できるようにしました。

- `dom.storage_access.auto_grants` を `false` に設定して、一時ストレージアクセス許可の自動許可を無効にすることができます。 追跡者 (trackers) として分類されたオリジンによる `requestStorageAccess()` の呼び出しはすべて、プロンプトを起動します。
- `dom.storage_access.max_concurrent_auto_grants` は、ユーザーがプロンプトを受け取り始めるストレージアクセス許可のしきい値数を制御します。 例えば、`requestStorageAccess()` が呼び出される最初のサイトでアクセスを自動的に許可し、その後プロンプトを表示するように Firefox を構成した場合、`dom.storage_access.max_concurrent_auto_grants` 設定の値を 1 に調整する必要があります。

## 構文

```js
var promise = document.requestStorageAccess();
```

### 引数

なし。

### 返値

ファーストパーティのストレージへのアクセスが許可されたら `undefined` で履行され、アクセスが拒否されたら拒否される {{jsxref("Promise")}} です。

プロミスが解決されると、プロミスが履行されたか拒否されたかに関わらず、ユーザージェスチャーが処理されているかのように解決ハンドラーが実行されます。

- 前者の場合、コードはユーザーのアクティベーションを必要とする API の呼び出しを開始でき、物事を前に進めることができます。
- 後者の場合、コードはユーザーになぜ要求に失敗したのか、何を続けることができるかを知らせるために実行することができます (例えば、必要な場合はログインを促すなど)。

## 例

```js
document.requestStorageAccess().then(
  () => { console.log('access granted') },
  () => { console.log('access denied') }
);
```

## 仕様書

この API はまだ提案段階にあります。 — 標準化プロセスはまだ始まっていません。現在のところ、この API の詳細の仕様書は、アップルのブログ記事の [Introducing
Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/)、および [Storage Access API proposal in the
Privacy CG](https://github.com/privacycg/storage-access) で見ることができます。

## ブラウザーの互換性

{{Compat}}

## 関連情報

[Storage Access API](/en-US/docs/Web/API/Storage_Access_API)
