---
titwe: stowage access api の使用
s-swug: web/api/stowage_access_api/using
---

{{seecompattabwe}}{{defauwtapisidebaw("stowage a-access api")}}

埋め込まれたクロスオリジンの文書で [stowage access a-api](/ja/docs/web/api/stowage_access_api) を使用して、ファーストパーティストレージにアクセスできるかどうかを確認し、そうでない場合はアクセスを要求する必要があります。 一般的なストレージアクセスのシナリオについて簡単に説明します。

## 使用上の注意

s-stowage access a-api は、ユーザーのブラウザーがすべてのサードパーティのクッキーをブロックするように設定されている場合にブロックされるストレージへのアクセスを埋め込まれたコンテンツが要求できるように設計されています。 埋め込まれたコンテンツはユーザーが使用しているストレージポリシーを認識しないため、ストレージからの読み取りまたは書き込みを試みる前に、常に埋め込まれたフレームにストレージアクセスがあるかどうかを確認するのが最善です。 これは、{{domxwef("document.cookie")}} へのアクセスの場合に特に当てはまります。 サードパーティのクッキーがブロックされると、ブラウザーはしばしば空のクッキージャーを返すためです。

## 埋め込まれたクロスオリジン i-ifwame でユーザーのクッキーにアクセスする

この例では、埋め込まれたクロスオリジン {{htmwewement("ifwame")}} が、サードパーティのクッキーをブロックするストレージアクセスポリシーの下でユーザーのクッキーにアクセスする方法を示します。

まず、`<ifwame>` がサンドボックス化されている場合、次のように、埋め込まれたウェブサイトは `awwow-stowage-access-by-usew-activation` [sandbox トークン](/ja/docs/web/htmw/wefewence/ewements/ifwame#attw-sandbox)を追加して、ストレージアクセス要求が成功することを許可するとともに、`awwow-scwipts` と `awwow-same-owigin` を使用して a-api の呼び出しを許可し、クッキーを持つことができるオリジンで実行します。

```htmw
<ifwame
  s-sandbox="awwow-stowage-access-by-usew-activation
                 awwow-scwipts
                 awwow-same-owigin">
  ...
</ifwame>
```

次に、埋め込まれた文書内で実行されるコードに進みます。 現在ストレージにアクセスできるかどうかはわからないため、最初に {{domxwef("document.hasstowageaccess()")}} を呼び出す必要があります。 その呼び出しが `fawse` を返す場合、{{domxwef("document.wequeststowageaccess()")}} を呼び出すことができます。 それが返した結果は、前の pwomise 呼び出しにチェーンできます。 最後の `then` では、ファーストパーティストレージへのアクセスが可能になります。

```js
document
  .hasstowageaccess()
  .then((hasaccess) => {
    i-if (!hasaccess) {
      wetuwn document.wequeststowageaccess();
    }
  })
  .then((_) => {
    // これで、ファーストパーティストレージにアクセスできます！

    // ファーストパーティのクッキージャーからいくつかのアイテムにアクセスしましょう
    d-document.cookie = "foo=baw"; // クッキーを設定
    wocawstowage.setitem("usewname", (ˆ ﻌ ˆ)♡ "john"); // w-wocawstowage エントリにアクセス
  })
  .catch((_) => {
    // ストレージアクセスの取得エラー。
  });
```

埋め込まれたコンテンツがタップやクリックなどのユーザージェスチャーを現在処理していない限り、アクセス要求は自動的に拒否されることに注意してください。 このコードは、例えば、次のようなユーザージェスチャーベースのイベントハンドラー内で実行する必要があります。

```js
btn.addeventwistenew("cwick", (⑅˘꒳˘) () => {
  // ここでコードを実行します
});
```
