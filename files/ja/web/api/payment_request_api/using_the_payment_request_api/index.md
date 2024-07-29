---
title: 決済リクエスト API の使用
slug: Web/API/Payment_Request_API/Using_the_Payment_Request_API
l10n:
  sourceCommit: c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

[決済リクエスト API](/ja/docs/Web/API/Payment_Request_API) は、ユーザーとユーザーが好む決済システムおよびプラットフォームを、商品やサービスの代金を支払いたい販売者に接続するためのブラウザーベースの仕組みを提供します。この記事は、[決済リクエスト API](/ja/docs/Web/API/Payment_Request_API) を使用するためのガイドであり、 例や提案されたベストプラクティスを示します。

## 決済の基本的な考え方

この節では、決済リクエスト API を使用して決済を行うための基本的な方法を詳しく説明します。

> [!NOTE]
> この節のコードスニペットは、[Feature detect support デモ](https://github.com/mdn/dom-examples/blob/main/payment-request/feature-detect-support.html)から引用しています。

### 新しい決済リクエストオブジェクトの作成

決済リクエストは、常に新しい {{domxref("PaymentRequest")}} オブジェクトの作成から始まります。これには {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}} コンストラクターを使用します。これは、2 つの必須の引数、1 つのオプションの引数を取ります。

- `methodData` — 対応している決済手段など、決済事業者に関する情報を含むオブジェクト。
- `details` — 支払総額、税金、送料など、特定の決済に関する情報を格納するオブジェクト。
- `options` （オプション） — 決済に関連する追加オプションを格納したオブジェクト。

例 えば、次のようにすれば、新しい `PaymentRequest` インスタンスを作成することができます。

```js
const request = new PaymentRequest(
  buildSupportedPaymentMethodData(),
  buildShoppingCartDetails(),
);
```

コンストラクターの内部で呼び出される関数は、必要なオブジェクト引数を返します。

```js
function buildSupportedPaymentMethodData() {
  // Example supported payment methods:
  return [{ supportedMethods: "https://example.com/pay" }];
}

function buildShoppingCartDetails() {
  // Hardcoded for demo purposes:
  return {
    id: "order-123",
    displayItems: [
      {
        label: "Example item",
        amount: { currency: "USD", value: "1.00" },
      },
    ],
    total: {
      label: "Total",
      amount: { currency: "USD", value: "1.00" },
    },
  };
}
```

### 決済プロセスの開始

`PaymentRequest` オブジェクトを作成したら、{{domxref("PaymentRequest.show()")}} メソッドを呼び出して、決済リクエストを開始させます。これは、決済が成功した場合に {{domxref("PaymentResponse")}} オブジェクトで履行されるプロミスを返します。

```js
request.show().then((paymentResponse) => {
  // Here we would process the payment. For this demo, simulate immediate success:
  paymentResponse.complete("success").then(() => {
    // For demo purposes:
    introPanel.style.display = "none";
    successPanel.style.display = "block";
  });
});
```

このオブジェクトは、顧客に連絡するためのメールアドレスや、商品を郵送するための配送先など、決済が完了した後に必要な論理的手順を完了するために使用できる詳細情報に開発者がアクセスできるようにします。上のコードでは、{{domxref("PaymentResponse.complete()")}} メソッドを呼び出してやり取りが完了したことを示していますが、これを使用して、ユーザーインターフェイスを更新して取引が完了したことをユーザーに伝えるなど、最終ステップを実行することができます。

### 他の有用な決済リクエスト手段

他にも知っておくと有益な決済リクエストメソッドがいくつかあります。

{{domxref("PaymentRequest.canMakePayment()")}} は、決済処理を始める前に `PaymentRequest` オブジェクトが決済可能かどうか調べるために使用できます。これは、存在するかどうかを示す論理値を履行されたプロミスを返します。例えば次のようになります。

```js
// 決済が可能かどうかを調べるためのダミー決済リクエスト
new PaymentRequest(buildSupportedPaymentMethodData(), {
  total: { label: "Stub", amount: { currency: "USD", value: "0.01" } },
})
  .canMakePayment()
  .then((result) => {
    if (result) {
      // Real payment request
      const request = new PaymentRequest(
        buildSupportedPaymentMethodData(),
        checkoutObject,
      );
      request.show().then((paymentResponse) => {
        // Here we would process the payment.
        paymentResponse.complete("success").then(() => {
          // Finish handling payment
        });
      });
    }
  });
```

必要であれば、 {{domxref("PaymentRequest.abort()")}} で決済リクエストを中止することができます。

## 決済リクエスト API が利用可能かを検出

決済リクエスト API に対応しているかどうかは、ユーザーのブラウザーが {{domxref("PaymentRequest")}} に対応しているかどうか、つまり `if (window.PaymentRequest)` を調べることで効果的に検出することができます。

以下のスニペットでは、販売者のページでこのチェックを行い、`true` が返された場合、チェックアウトボタンを更新して古いウェブフォームの代わりに `PaymentRequest` を使用するようにしています。

```js
const checkoutButton = document.getElementById("checkout-button");
if (window.PaymentRequest) {
  let request = new PaymentRequest(
    buildSupportedPaymentMethodNames(),
    buildShoppingCartDetails(),
  );
  checkoutButton.addEventListener("click", () => {
    request
      .show()
      .then((paymentResponse) => {
        // Handle successful payment
      })
      .catch((error) => {
        // Handle cancelled or failed payment. For example, redirect to
        // the legacy web form checkout:
        window.location.href = "/legacy-web-form-checkout";
      });

    // Every click on the checkout button should use a new instance of
    // PaymentRequest object, because PaymentRequest.show() can be
    // called only once per instance.
    request = new PaymentRequest(
      buildSupportedPaymentMethodNames(),
      buildShoppingCartDetails(),
    );
  });
}
```

> [!NOTE]
> コードの全体は、[Feature detect support デモ](https://mdn.github.io/dom-examples/payment-request/feature-detect-support.html)を参照してください。

## ユーザーが決済できるかを調べる

ユーザーが決済できるかどうかを調べることは、常に有益なことです。ここでは、関連のテクニックをいくつか紹介します。

### 決済ボタンのカスタマイズ

ユーザーが決済できるかどうかによって、決済リクエストボタンをカスタマイズするのも有益なテクニックの1つです。

以下のスニペットは、まさにこれを行うものです。ユーザーがすばやく決済できるか、または最初に決済の資格情報を追加する必要があるかによって、チェックアウトボタンのタイトルは、「W3C による高速チェックアウト」と「W3C チェックアウトのセットアップ」の間で変化します。どちらの場合も、チェックアウトボタンは {{domxref("PaymentRequest.show()")}} を呼び出します。

```js
const checkoutButton = document.getElementById("checkout-button");
checkoutButton.innerText = "Loading…";
if (window.PaymentRequest) {
  const request = new PaymentRequest(
    buildSupportedPaymentMethodNames(),
    buildShoppingCartDetails(),
  );
  request
    .canMakePayment()
    .then((canMakeAFastPayment) => {
      checkoutButton.textContent = canMakeAFastPayment
        ? "Fast Checkout with W3C"
        : "Setup W3C Checkout";
    })
    .catch((error) => {
      // The user may have turned off the querying functionality in their
      // privacy settings. The website does not know whether they can make
      // a fast payment, so pick a generic title.
      checkoutButton.textContent = "Checkout with W3C";
    });
}
```

> [!NOTE]
> コードの全体は、[Customizing the payment button デモ](https://mdn.github.io/dom-examples/payment-request/customize-button-can-make-payment.html)を参照してください。

### 価格がすべて判明する前に調べる

チェックアウトフローが、すべての行とその価格が判明する前に {{domxref("PaymentRequest.canMakePayment()")}} が `true` を返すかどうかを知る必要がある場合、ダミーデータで `PaymentRequest` をインスタンス化して `.canMakePayment()` に事前問い合わせをすることができます。`.canMakePayment()` を複数回呼び出す場合は、`PaymentRequest` コンストラクターの最初の引数に同じメソッド名とデータを格納する必要があることに留意してください。

```js
// The page has loaded. Should the page use PaymentRequest?
// If PaymentRequest fails, should the page fallback to manual
// web form checkout?
const supportedPaymentMethods = [
  /* supported methods */
];

let shouldCallPaymentRequest = true;
let fallbackToLegacyOnPaymentRequestFailure = false;
new PaymentRequest(supportedPaymentMethods, {
  total: { label: "Stub", amount: { currency: "USD", value: "0.01" } },
})
  .canMakePayment()
  .then((result) => {
    shouldCallPaymentRequest = result;
  })
  .catch((error) => {
    console.error(error);

    // The user may have turned off query ability in their privacy settings.
    // Let's use PaymentRequest by default and fallback to legacy
    // web form based checkout.
    shouldCallPaymentRequest = true;
    fallbackToLegacyOnPaymentRequestFailure = true;
  });

// User has clicked on the checkout button. We know
// what's in the cart, but we don't have a `Checkout` object.
function onCheckoutButtonClicked(lineItems) {
  callServerToRetrieveCheckoutDetails(lineItems);
}

// The server has constructed the `Checkout` object. Now we know
// all of the prices and shipping options.
function onServerCheckoutDetailsRetrieved(checkoutObject) {
  if (shouldCallPaymentRequest) {
    const request = new PaymentRequest(supportedPaymentMethods, checkoutObject);
    request
      .show()
      .then((paymentResponse) => {
        // Post the results to the server and call `paymeResponse.complete()`.
      })
      .catch((error) => {
        console.error(error);
        if (fallbackToLegacyOnPaymentRequestFailure) {
          window.location.href = "/legacy-web-form-checkout";
        } else {
          showCheckoutErrorToUser();
        }
      });
  } else {
    window.location.href = "/legacy-web-form-checkout";
  }
}
```

> [!NOTE]
> コードの全体は、[Checking user can make payments before prices are known デモ](https://mdn.github.io/dom-examples/payment-request/check-user-can-make-payment.html)を参照してください。

## ユーザーがアプリを持っていない場合に、決済アプリを推薦する

この販売者ページでデモ決済プロバイダーの BobPay で支払うことを選択すると、`NOTSUPPORTEDERR` 例外で介入している間に、`PaymentRequest.show()` を呼び出そうとします。この決済手段に対応していない場合は、BobPay のサインアップページにリダイレクトされます。

コードは以下のような感じです。

```js
checkoutButton.addEventListener("click", () => {
  const request = new PaymentRequest(
    buildSupportedPaymentMethodData(),
    buildShoppingCartDetails(),
  );
  request
    .show()
    .then((paymentResponse) => {
      // Here we would process the payment. For this demo, simulate immediate success:
      paymentResponse.complete("success").then(() => {
        // For demo purposes:
        introPanel.style.display = "none";
        successPanel.style.display = "block";
      });
    })
    .catch((error) => {
      if (error.code === DOMException.NOT_SUPPORTED_ERR) {
        window.location.href = "https://bobpay.xyz/#download";
      } else {
        // Other kinds of errors; cancelled or failed payment. For demo purposes:
        introPanel.style.display = "none";
        legacyPanel.style.display = "block";
      }
    });
});
```

> [!NOTE]
> コードの全体は、[Recommending a payment app when user has no apps デモ](https://mdn.github.io/dom-examples/payment-request/recommend-payment-app.html)を参照してください。

## 決済成功後の追加ユーザーインターフェイスの表示

販売者が API に属さない追加情報（例えば、追加の配送指示）を収集したい場合、販売者はチェックアウト後に追加の `<input type="text">` フィールドを持つページを示すことができます。

```js
request
  .show()
  .then((paymentResponse) => {
    // Process payment here.
    // Close the UI:
    paymentResponse.complete('success').then(() => {
      // Request additional shipping address details.
      const additionalDetailsContainer = document.getElementById('additional-details-container');
      additionalDetailsContainer.style.display = 'block';
      window.scrollTo(additionalDetailsContainer.getBoundingClientRect().x, 0);
  })
  .catch((error) => {
    // Handle error.
  });
```

> [!NOTE]
> コードの全体は、[Show additional user interface after successful payment デモ](https://mdn.github.io/dom-examples/payment-request/show-additional-ui-after-payment.html)を参照してください。

## トランザクションの事前承認

用途によっては（給油所での燃料の決済など）、決済の事前承認が必要な場合があります。これを行うための方法の一つとして、決済ハンドラー（[決済ハンドラー API](https://w3c.github.io/payment-handler/)を参照）を通じて行うことです。執筆時点では、その仕様は、決済ハンドラーが承認ステータスを返すために使用することができる `CanMakePayment` イベントを含んでいます。

販売者のコードは次のようになります。

```js
const paymentRequest = new PaymentRequest(
  [{ supportedMethods: "https://example.com/preauth" }],
  details,
);

// Send `CanMakePayment` event to the payment handler.
paymentRequest
  .canMakePayment()
  .then((res) => {
    if (res) {
      // The payment handler has pre-authorized a transaction
      // with some static amount, e.g., USD $1.00.
    } else {
      // Pre-authorization failed or payment handler not installed.
    }
  })
  .catch((err) => {
    // Unexpected error occurred.
  });
```

決済ハンドラーには、以下のコードを記載します。

```js
self.addEventListener("canmakepayment", (evt) => {
  // Pre-authorize here.
  const preAuthSuccess = true;
  evt.respondWith(preAuthSuccess);
});
```

この決済ハンドラーは、`https://example.com/preauth` のスコープでサービスワーカーの中に常駐させる必要があります。

> [!NOTE]
> コードの全体は、[Pre-authorizing transactions デモ](https://mdn.github.io/dom-examples/payment-request/pre-authorize-transaction.html)を参照してください。

## 関連情報

- [Google PaymentRequest Samples](https://googlechrome.github.io/samples/paymentrequest/)
