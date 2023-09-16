---
title: Storage Access API の使用
slug: Web/API/Storage_Access_API/Using
---

{{seecompattable}}{{DefaultAPISidebar("Storage Access API")}}

埋め込まれたクロスオリジンの文書で [Storage Access API](/ja/docs/Web/API/Storage_Access_API) を使用して、ファーストパーティストレージにアクセスできるかどうかを確認し、そうでない場合はアクセスを要求する必要があります。 一般的なストレージアクセスのシナリオについて簡単に説明します。

## 使用上の注意

Storage Access API は、ユーザーのブラウザーがすべてのサードパーティのクッキーをブロックするように設定されている場合にブロックされるストレージへのアクセスを埋め込まれたコンテンツが要求できるように設計されています。 埋め込まれたコンテンツはユーザーが使用しているストレージポリシーを認識しないため、ストレージからの読み取りまたは書き込みを試みる前に、常に埋め込まれたフレームにストレージアクセスがあるかどうかを確認するのが最善です。 これは、{{domxref("Document.cookie")}} へのアクセスの場合に特に当てはまります。 サードパーティのクッキーがブロックされると、ブラウザーはしばしば空のクッキージャーを返すためです。

## 埋め込まれたクロスオリジン iframe でユーザーのクッキーにアクセスする

この例では、埋め込まれたクロスオリジン {{htmlelement("iframe")}} が、サードパーティのクッキーをブロックするストレージアクセスポリシーの下でユーザーのクッキーにアクセスする方法を示します。

まず、`<iframe>` がサンドボックス化されている場合、次のように、埋め込まれたウェブサイトは `allow-storage-access-by-user-activation` [sandbox トークン](/ja/docs/Web/HTML/Element/iframe#attr-sandbox)を追加して、ストレージアクセス要求が成功することを許可するとともに、`allow-scripts` と `allow-same-origin` を使用して API の呼び出しを許可し、クッキーを持つことができるオリジンで実行します。

```html
<iframe
  sandbox="allow-storage-access-by-user-activation
                 allow-scripts
                 allow-same-origin">
  ...
</iframe>
```

次に、埋め込まれた文書内で実行されるコードに進みます。 現在ストレージにアクセスできるかどうかはわからないため、最初に {{domxref("Document.hasStorageAccess()")}} を呼び出す必要があります。 その呼び出しが `false` を返す場合、{{domxref("Document.requestStorageAccess()")}} を呼び出すことができます。 それが返した結果は、前の Promise 呼び出しにチェーンできます。 最後の `then` では、ファーストパーティストレージへのアクセスが可能になります。

```js
document
  .hasStorageAccess()
  .then((hasAccess) => {
    if (!hasAccess) {
      return document.requestStorageAccess();
    }
  })
  .then((_) => {
    // これで、ファーストパーティストレージにアクセスできます！

    // ファーストパーティのクッキージャーからいくつかのアイテムにアクセスしましょう
    document.cookie = "foo=bar"; // クッキーを設定
    localStorage.setItem("username", "John"); // localStorage エントリにアクセス
  })
  .catch((_) => {
    // ストレージアクセスの取得エラー。
  });
```

埋め込まれたコンテンツがタップやクリックなどのユーザージェスチャーを現在処理していない限り、アクセス要求は自動的に拒否されることに注意してください。 このコードは、例えば、次のようなユーザージェスチャーベースのイベントハンドラー内で実行する必要があります。

```js
btn.addEventListener("click", () => {
  // ここでコードを実行します
});
```
