---
title: ストレージアクセス API の使用
slug: Web/API/Storage_Access_API/Using
l10n:
  sourceCommit: 793bcbe2dd88fc553d2c4c918c4dec4899704022
---

{{DefaultAPISidebar("Storage Access API")}}

[ストレージアクセス API](/ja/docs/Web/API/Storage_Access_API) を使用すると、埋め込まれたクロスサイト文書で、[サードパーティクッキー](/ja/docs/Web/Privacy/Guides/Third-party_cookies)および[パーティション化されていない状態](/ja/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning)へのアクセス権があるかどうかを検証し、アクセス権がない場合はアクセスをリクエストするために使用できます。ここでは、一般的なストレージアクセスシナリオについて簡単に見ていきます。

> [!NOTE]
> ストレージアクセス API のコンテンツでサードパーティクッキーについて言及する場合、それは暗黙のうちに[パーティション化されていない](/ja/docs/Web/API/Storage_Access_API#クッキーのパーティション化と非パーティション化)サードパーティクッキーを指します。

## 使用上の注意

ストレージアクセス API は、ユーザーのブラウザーがすべてのサードパーティのクッキーをブロックするように設定されている場合にブロックされるストレージへのアクセスを埋め込まれたコンテンツが要求できるように設計されています。 埋め込まれたコンテンツはユーザーが使用しているストレージポリシーを認識しないため、ストレージからの読み取りまたは書き込みを試みる前に、常に埋め込まれたフレームにストレージアクセスがあるかどうかを確認するのが最善です。 これは、{{domxref("Document.cookie")}} へのアクセスの場合に特に当てはまります。 サードパーティのクッキーがブロックされると、ブラウザーはしばしば空のクッキージャーを返すためです。

この例では、埋め込まれたクロスオリジン {{htmlelement("iframe")}} が、サードパーティのクッキーをブロックするストレージアクセスポリシーの下でユーザーのクッキーにアクセスする方法を示します。

## サンドボックス化された \<iframe> で API を使用することを許可

まず、`<iframe>` がサンドボックス化されている場合、次のように、埋め込まれたウェブサイトは `allow-storage-access-by-user-activation` [sandbox トークン](/ja/docs/Web/HTML/Reference/Elements/iframe#sandbox)を追加して、ストレージアクセス要求が成功することを許可するとともに、`allow-scripts` と `allow-same-origin` を使用して API の呼び出しを許可し、クッキーを持つことができるオリジンで実行します。

```html
<iframe
  sandbox="allow-storage-access-by-user-activation
                 allow-scripts
                 allow-same-origin">
  …
</iframe>
```

## ストレージへのアクセスの確認とリクエスト

これで、埋め込み文書内で実行されるコードについて見ていきましょう。このコードでは次のことを行います。

1. まず、機能検出 (`if (document.hasStorageAccess) {}`) を使用して、API に対応しているかどうかを確認します。対応していない場合でも、クッキーにアクセスするコードをそのまま実行し、うまくいくことを期待します。いずれにせよ、このような不測の事態に対処できるよう、防御的なコーディングを行うべきです。
2. API に対応している場合は、`document.hasStorageAccess()` を呼び出します。
3. その呼び出しが `true` を返した場合、この {{htmlelement("iframe")}} はすでにアクセス権を取得済みということであり、クッキーや状態にアクセスするコードをすぐに実行できます。
4. その呼び出しが `false` を返した場合、{{domxref("Permissions.query()")}} を呼び出して、サードパーティクッキーおよびパーティション化されていない状態へのアクセス権限がすでに付与されているかどうか（つまり、同じサイトの別の埋め込みに対して）を確認します。このセクション全体を [`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) ブロックで囲んでいます。これは、[一部のブラウザーが `"storage-access"` 権限に対応していない](/ja/docs/Web/API/Storage_Access_API#api.permissions.permission_storage-access)ため、`query()` の呼び出しで例外が発生する可能性があるからです。例外が発生した場合は、コンソールにその旨を報告し、それでもクッキー関連のコードを実行しようと試みます。
5. 権限の状態が `"granted"` の場合は、直ちに `document.requestStorageAccess()` を呼び出します。この呼び出しは自動的に解決されるため、ユーザーの時間を節約でき、その後、クッキーや状態情報にアクセスするコードを実行可能になります。
6. 権限の状態が `"prompt"` の場合、ユーザーの操作後にも `document.requestStorageAccess()` を呼び出します。この呼び出しにより、ユーザーに確認メッセージが表示されることがあります。この呼び出しが成功した場合、クッキーや状態情報にアクセスするコードを実行できます。
7. 権限の状態が `"denied"` の場合、ユーザーはサードパーティクッキーまたはパーティション化されていない状態へのアクセスリクエストを拒否したため、当方のコードではそれらを使用できません。

```js
function doThingsWithCookies() {
  document.cookie = "foo=bar"; // クッキーを設定
}

function doThingsWithLocalStorage(handle) {
  handle.localStorage.setItem("foo", "bar"); // ローカルストレージのキーを設定
}

async function handleCookieAccess() {
  if (!document.hasStorageAccess) {
    // このブラウザーはストレージアクセス API に対応していない
    // とにかく、アクセスできることを期待するしかない
    doThingsWithCookies();
  } else {
    const hasAccess = await document.hasStorageAccess();
    if (hasAccess) {
      // サードパーティクッキーを保有しているので、さっそく始める
      doThingsWithCookies();
      // パーティションが設定されていない状態を変更したい場合は、ハンドルをリクエストする必要がある
      const handle = await document.requestStorageAccess({
        localStorage: true,
      });
      doThingsWithLocalStorage(handle);
    } else {
      // 同じサイト内の別の埋め込みコンテンツに対して、サードパーティ
      // クッキーへのアクセスが許可されているかどうかを調べる
      try {
        const permission = await navigator.permissions.query({
          name: "storage-access",
        });

        if (permission.state === "granted") {
          // その場合は、ユーザー操作を必要とせずに requestStorageAccess() を呼び出すことが可能
          // そうすれば、自動的に解決される
          const handle = await document.requestStorageAccess({
            cookies: true,
            localStorage: true,
          });
          doThingsWithLocalStorage(handle);
          doThingsWithCookies();
        } else if (permission.state === "prompt") {
          // ユーザーの操作の後で、requestStorageAccess() を呼び出す必要がある
          btn.addEventListener("click", async () => {
            try {
              const handle = await document.requestStorageAccess({
                cookies: true,
                localStorage: true,
              });
              doThingsWithLocalStorage(handle);
              doThingsWithCookies();
            } catch (err) {
              // ストレージへのアクセス中にエラーが発生した場合
              console.error(`Error obtaining storage access: ${err}.
                            Please sign in.`);
            }
          });
        } else if (permission.state === "denied") {
          // ユーザーがサードパーティクッキーへのアクセスを拒否したため、
          // 別の対応が必要となる
        }
      } catch (error) {
        console.log(`権限の状態にアクセスできませんでした。エラー: ${error}`);
        doThingsWithCookies(); // やはり、アクセスできることを期待するしかない
      }
    }
  }
}
```

> [!NOTE]
> `requestStorageAccess()` のリクエストは、埋め込みコンテンツが現在、タップやクリックなどのユーザー操作（{{Glossary("transient activation", "一時的な活性化")}}）を処理している場合、または前回、その権限が付与されている場合を除き、自動的に拒否されます。前回、その権限が付与されていない場合は、以上のように、`requestStorageAccess()` のリクエストをユーザー操作に基づくイベントハンドラー内で実行しなければなりません。

### 関連するウェブサイトセット

Chrome 限定の[関連ウェブサイトセット](https://privacysandbox.google.com/cookies/related-website-sets-integration)機能は、ストレージアクセス APIと連携して機能するプログレッシブエンハンスメントの仕組みと考えることができます。この機能を対応しているブラウザーでは、同じセット内のウェブサイト間で、サードパーティクッキーおよびパーティション化されていない状態へのアクセスがデフォルトで許可されます。このことによって、前述のような通常のユーザー許可プロンプトのワークフローを踏む必要がなくなり、セット内のサイトを利用するユーザーにとって、より使いやすい使い勝手が実現されます。

## 埋め込みリソースに代わって、最上位サイトからストレージにアクセスするリクエストを行う

以上の上記ストレージアクセス API の機能により、埋め込み文書は自身のサードパーティクッキーへのアクセスをリクエストすることができます。さらに、{{domxref("Document.requestStorageAccessFor()")}}という実験的なメソッドも利用可能です。これはストレージアクセス API への拡張案であり、トップレベルサイトが特定の関連オリジンに代わってストレージへのアクセスをリクエストできるようにするものです。

`requestStorageAccessFor()` メソッドは、クッキーを要求される別サイトの画像やスクリプトを使用する最上位サイトにおいて、ストレージアクセス API を導入する際の課題に対処するものです。これにより、例えば {{htmlelement("img")}} や {{htmlelement("script")}} 要素などを通じて、最上位サイトに直接埋め込まれているものの、自分自身でストレージへのアクセスをリクエストできない別サイトのリソースに対して、サードパーティクッキーへのアクセスを可能にすることができます。

`requestStorageAccessFor()` が機能するためには、呼び出し元となる最上位ページと、ストレージへのアクセスを要求している埋め込みリソースの両方が、同じ[関連ウェブサイトセット](#関連するウェブサイトセット)に属する必要があります。

`requestStorageAccessFor()` の一般的な使い方は同様に次のようになります（今回は async/await ではなく、通常のプロミススタイルで記述しています）。

```js
navigator.permissions
  .query({
    name: "top-level-storage-access",
    requestedOrigin: "https://example.com",
  })
  .then((permission) => {
    if (permission.state === "granted") {
      // その権限はすでに得られている
      // requestStorageAccessFor() を再度呼び出す必要はない。そのままクッキーを使用して始めてください。
      doThingsWithCookies();
    } else if (permission.state === "prompt") {
      // ユーザーの操作の後で、requestStorageAccessFor() を呼び出す必要がある
      btn.addEventListener("click", () => {
        // ストレージへのアクセスをリクエストする
        rSAFor();
      });
    } else if (permission.state === "denied") {
      // ユーザーがサードパーティクッキーへのアクセスを拒否したため、
      // 別の対応が必要となる
    }
  });

function rSAFor() {
  if ("requestStorageAccessFor" in document) {
    document.requestStorageAccessFor("https://example.com").then(
      (res) => {
        doThingsWithCookies();
      },
      (err) => {
        // エラー処理
      },
    );
  }
}
```

> [!NOTE]
> `requestStorageAccess()` とは異なり、`requestStorageAccessFor()` が呼び出された際、Chrome は過去 30 日間に最上位文書での操作があったかどうかを確認しません。これは、ユーザーがすでにそのページにアクセスしている状態であるためです。この動作の詳細については、[ブラウザーごとの違い > Chrome](/ja/docs/Web/API/Storage_Access_API#chrome) を参照してください。

別のオリジンに代わって行われたストレージアクセスリクエストの権限の状態を照会する場合、使用される権限名は他のストレージ API とは異なり、`"storage-access"` ではなく `"top-level-storage-access"` となります。上記のコードでは、次のような呼び出しを使用しています。

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://example.com",
});
```

そのソースに対して前回アクセス権限が与えられていたか、それともクッキーへのアクセス権限を改めてリクエストする必要があるかを確認するためです。

- 権限の状態が `"granted"` であれば、クッキーの使用を開始できます。`requestStorageAccessFor()` はすでに呼び出されているため、再度呼び出す必要はありません。
- 権限の状態が `"prompt"` の場合は、ボタンのクリックなどのユーザー操作の中で、`document.requestStorageAccessFor("https://example.com")` を呼び出す必要があります。

`"top-level-storage-access"` 権限が付与された後、[CORS](/ja/docs/Web/HTTP/Guides/CORS) または [`crossorigin`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) を含むサイト間リクエストにはクッキーが含まれるため、サイト側ではリクエストを送信する前に待機した方が良い場合があります。このようなリクエストでは、[`credentials: "include"`](/ja/docs/Web/API/RequestInit#credentials) オプションを使用しなければならないし、リソースには `crossorigin="use-credentials"` 属性を含む必要があります。

例を示します。

```js
function checkCookie() {
  fetch("https://example.com/getcookies.json", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((json) => {
      // 何かを行う
    });
}
```
