---
title: "PaymentRequest: show() メソッド"
short-title: show()
slug: Web/API/PaymentRequest/show
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

**{{domxref('PaymentRequest')}}** インターフェイスの **`show()`** メソッドは、ユーザーエージェントに対して、決済リクエストのためのユーザーインターフェイスをユーザーに示し、処理する処理を始めるように指示します。

すべての文書において、一度に処理することができる決済リクエストは 1 つだけです。一度 `PaymentRequest` の `show()` メソッドが呼び出されると、他の `show()` の呼び出しに対しては、返すプロミスが決済リクエストの結果を示す {{domxref("PaymentResponse") }} で履行されるか、エラーで拒否されるまで `AbortError` によって拒否されるようになります。

> [!NOTE]
> 現実には、詳細仕様ではできないことになっているにもかかわらず、Firefox を含むいくつかのブラウザーでは、一度に複数のアクティブな決済リクエストに対応しています。

アーキテクチャが `show()` を呼び出して決済インターフェイスをインスタンス化した時点で、必ずしもすべてのデータが準備できているとは限らない場合、`detailsPromise` 引数を指定して、データが準備できた時点で履行される {{jsxref("Promise")}} を提供します。これを指定された場合、`show()`はプロミスが履行されるまでユーザーが決済インターフェイスと対話することを許可しないので、ユーザーが決済プロセスに関与する前にデータを更新することができます。

結果を処理し、必要に応じて {{domxref("PaymentResponse.retry()")}} を呼び出して失敗した支払いを再試行することは、ニーズに応じて、すべて非同期または同期で行うことができます。良い使い勝手を得るためには、通常、非同期のソリューションが最適です。MDNや他の場所にあるほとんどの例では、[`async`](/ja/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) を使用して結果が検証されている間など非同期に待機します。

## 構文

```js-nolint
show()
show(details)
```

### 引数

- `details` {{optional_inline}}
  - : オブジェクトまたはオブジェクトに解決するプロミス ({{jsxref("Promise")}}) のどちらかです。アーキテクチャにより、決済インターフェイスのインスタンス化とユーザーによる操作開始の間に決済リクエストの詳細を更新する必要がある場合は、これを指定してください。オブジェクトには更新された情報を含める必要があります。
    - `displayItems` {{optional_inline}}
      - : オブジェクトの配列で、それぞれが決済リクエストの 1 つの行を記述しています。これらは領収書や請求書の行を表し、それぞれ以下のプロパティを持ちます。
        - `amount`
          - : アイテムの金銭的価値を記述しているオブジェクトです。このオブジェクトには、以下のフィールドが記載されます。
            - `currency`
              - : 文字列で、決済の `value` に使用する通貨を示す有効な 3 文字の [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) 通貨識別子（[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)）が入ります。
            - `value`
              - : 文字列で、決済額を構成する通貨の金額を表す有効な 10 進数値を格納したものです。この文字列は、負の値を示すオプションの先頭の "-" と、0 から 9 までの 1 桁以上の数字、そしてオプションの小数点（"."、ロケールに関係なく）と、少なくとも 1 桁以上の数字が続くものだけを格納しなければなりません。空白は許されません。
        - `label`
          - : 課金されるアイテムやサービスの、人間が読み取り可能な名称や説明を指定する文字列。インターフェイスのデザインによっては、{{Glossary("user agent", "ユーザーエージェント")}}によってユーザーに表示されることもあります。
        - `pending`
          - : 指定した `amount` がまだ確定していない場合に `true` となる論理値を指定します。これは、配送先住所や配送オプションなどの選択に依存する送料や税金の金額などの項目を示すために使用することができます。ユーザーエージェントはこの情報を示すことができますが、そうする必要はありません。

    - `error` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : 文字列で、ユーザーに表示するエラーメッセージを指定します。{{domxref("PaymentRequestUpdateEvent.updateWith", "updateWith()")}} を呼び出すとき、更新データに `error` を記載すると、{{Glossary("user agent", "ユーザーエージェント")}}に一般的なエラーメッセージとしてテキストを表示するようにします。アドレスフィールド固有のエラーについては、`shippingAddressErrors` フィールドを使用してください。

    - `modifiers` {{optional_inline}}
      - : オブジェクトの配列で、それぞれが具体的な決済手段識別子用の修飾子を表しており、それぞれに以下のプロパティがあります。
        - `supportedMethods`
          - : 決済手段識別子を表す文字列です。決済手段の識別子は、ユーザーがこの決済手段を選択した場合のみ適用されます。
        - `total` {{optional_inline}}
          - : ユーザーがこの決済手段を選択した場合に、`detailsPromise` パラメーターの `total` プロパティを上書きするオブジェクト。このプロパティは、`detailsPromise` パラメーターの `total` プロパティと同じ入力値を取ります。
        - `additionalDisplayItems` {{optional_inline}}
          - : オブジェクトの配列 ({{jsxref("Array")}}) は、ユーザーがこの決済手段を選択した場合に、`detailsPromise` パラメーターの `displayItems` プロパティに追加される表示項目を指定します。 このプロパティは、ユーザーエージェントが表示する選択された決済手段の合計金額が異なる理由を示す割引または追加料金の行項目を追加するために一般的に使用されます。 このプロパティは、`detailsPromise` パラメーターの `displayItems` プロパティと同じ入力を受け取ります。
        - `data` {{optional_inline}}
          - : 対応している決済手段で必要となる可能性があるオプション情報を提供する、シリアライズ可能なオブジェクト。

        例えば、選択した決済手段に基づく支払合計額を調整するために、これを使用することができます（「5% の現金割引!」）。

    - `shippingAddressErrors` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : 配送先住所の各プロパティで検証できなかったエラーメッセージを含めることができるオブジェクト。
    - `shippingOptions` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : オブジェクトの配列。それぞれのオブジェクトは、ユーザーが選ぶことができる利用できる配送オプションの 1 つを記述します。
    - `total` {{optional_inline}}
      - : `displayItems` のオブジェクトと同じプロパティを持つオブジェクトで、決済のための更新された合計を提供します。これが `displayItems` のすべてのアイテムの合計と等しいことを確認してください。これは自動的に計算されるものではありません。決済の合計金額が変わるたびに、この値を自分で更新する必要があります。これにより、税金や割引、その他の請求金額の合計を調整するようなことを処理するための柔軟性を持つことができます。

### 返値

最終的に {{domxref("PaymentResponse")}} で解決される {{jsxref("Promise")}} です。
プロミスは、ユーザーが決済リクエストを受け入れると解決します（ブラウザーの決済シートの「Pay」ボタンをクリックするなど）。

### 例外

例外は発生せず、{{jsxref("Promise")}} が拒否されたときに返されます。

- `AbortError` {{domxref("DOMException")}}
  - : {{Glossary("user agent", "ユーザーエージェント")}} が既に決済パネルを表示している場合に返されます。ユーザーエージェントが読み込んだすべての文書において、一度に表示できる決済パネルは 1 つだけです。

    ユーザーが決済リクエストをキャンセルした場合、プロミスは `AbortError` で拒否されます。

- `InvalidStateError` {{domxref("DOMException")}}
  - : このリクエストに対して同じ決済が既に示されている場合（既に示されているため、その状態は `interactive` ）に返されます。
- `NotSupportedError` {{domxref("DOMException")}}
  - : {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest")}} コンストラクターが呼び出されたときに指定した決済手段にユーザーエージェントが対応していない場合に返します。
- `SecurityError` {{domxref("DOMException")}}
  - : `show()` の呼び出しが、{{domxref("Element/click_event", "click")}} または {{domxref("Element/keyup_event", "keyup")}} イベントなどのユーザー操作に応答していない場合に、この値が返されます。他にも `SecurityError` が発生する理由はユーザーエージェントの判断によるもので、短時間に多くの `show()` を呼び出したり、ペアレンタルコントロールによって決済リクエストがブロックされているときに `show()` を呼び出したりするような状況を含むことがあります。

## セキュリティ

[単発のユーザー活性化](/ja/docs/Web/Security/Defenses/User_activation)が必要です。動作するためには、ユーザーがページや UI 要素と対話する必要があります。

## 使用上の注意

`show()` を使用するよくあるパターンは、[`async`](/ja/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) 構文を使用するか、レスポンスと拒否の可能性を処理するために `show().then().catch()` を使用しているかのいずれかです。それらは次のようにあります。

### async/await 構文

プロミスの解決を待つために `await` を使用すると、決済を処理するコードを特にきれいに書くことができる。

```js
async function processPayment() {
  try {
    const payRequest = new PaymentRequest(methodData, details, options);

    payRequest.onshippingaddresschange = (ev) =>
      ev.updateWith(checkAddress(payRequest));
    payRequest.onshippingoptionchange = (ev) =>
      ev.updateWith(checkShipping(payRequest));

    const response = await payRequest.show();
    await validateResponse(response);
  } catch (err) {
    /* handle the error; AbortError usually means a user cancellation */
  }
}
```

このコードでは、`checkAddress()` メソッドと `checkShipping()` メソッドが、それぞれ配送先住所と配送オプションの変更を調べ、オブジェクトかそれを返すプロミスをレスポンスとして与えます。このオブジェクトには、{{domxref("PaymentResponse")}} 内の変更したまたは変更する必要があるフィールドを格納します。

下記の `validateResponse()` メソッドは、`show()` が返されると呼び出され、返された `response` を見て、支払いを送信するか、失敗として支払いを拒否するかを決定するために使用されます。

```js
async function validateResponse(response) {
  try {
    if (await checkAllValues(response)) {
      await response.complete("success");
    } else {
      await response.complete("fail");
    }
  } catch (err) {
    await response.complete("fail");
  }
}
```

ここでは、`checkAllValues()` という独自の関数が `response` の各値を調べて、それらが有効であることを確実に保持し、すべてのフィールドが有効であれば `true`、有効でないものがあれば `false` を返します。すべてのフィールドが有効な場合のみ、{{domxref("PaymentResponse.complete", "complete()")}} メソッドが文字列 `"success"` を伴ってレスポンスに呼び出され、すべてが有効であることを示し、それに応じて決済を完了できるようにします。

許容できない値があるフィールドがある場合、または前回のコードで例外が発生した場合は、`complete()`が文字列 `"fail"` で呼び出され、決済処理が完了し、失敗したことを示します。

すぐに失敗する代わりに、レスポンスオブジェクトに {{domxref("PaymentResponse.retry", "retry()")}} を呼び出して、ユーザーエージェントに決済処理のやり直しを依頼することもできます。これは通常、ユーザーが注文に必要な修正を行った後にのみ行われるべきです。

決済処理を始めるには、結局のところ `processPayment()` メソッドを呼び出すだけでよいのです。

### then/catch 構文

また、旧来のプロミスベースの手法で決済を作業することもでき、`show()`が返すプロミスに対して {{jsxref("Promise.then", "then()")}} と {{jsxref("Promise.catch", "catch()")}} 関数を使用します。

```js
function processPayment() {
  const payRequest = new PaymentRequest(methodData, details, options);

  payRequest.onshippingaddresschange = (ev) =>
    ev.updateWith(checkAddress(payRequest));
  payRequest.onshippingoptionchange = (ev) =>
    ev.updateWith(checkShipping(payRequest));

  payRequest
    .show()
    .then((response) => validateResponse(response))
    .catch((err) => handleError(err));
}
```

これは、`await` 構文を使用した `processPayment()` メソッドと機能的に同等です。

```js
function validateResponse(response) {
  checkAllValues(response)
    .then((response) => response.complete("success"))
    .catch((response) => response.complete("fail"));
}
```

`checkAllValues()` を同期関数とすることもできますが、その場合、パフォーマンス上、避けたい影響があるかもしれません。

```js
function validateResponse(response) {
  if (checkAllValues(response)) {
    response.complete("success");
  } else {
    response.complete("fail");
  }
}
```

プロミスの動作についてより詳しい情報が必要な場合は、[プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)の記事を参照してください。

## 例

次の例では、`show()` メソッドが呼び出される前に `PaymentRequest` オブジェクトがインスタンス化されています。このメソッドは、ユーザーから決済情報を取得するためのユーザーエージェントの組み込み処理を発生させます。`show()` メソッドは、ユーザーとの対話が完了すると {{jsxref('Promise')}} を返して {{domxref("PaymentResponse")}} オブジェクトに解決する。その後、開発者は `PaymentResponse` オブジェクトの情報を使用して、決済データを形式化してサーバーに送信します。決済情報を非同期にサーバーに送信して、{{domxref("paymentResponse.complete()")}} の最後の呼び出しで決済の成功・失敗を示すことができるようにする必要があります。

```js
button.onclick = async function handlePurchase() {
  // Initialization of PaymentRequest arguments are excerpted for the sake of
  // brevity.
  const payment = new PaymentRequest(methods, details, options);
  try {
    const response = await payment.show();
    // Process response here, including sending payment instrument
    // (e.g., credit card) information to the server.
    // paymentResponse.methodName contains the selected payment method
    // paymentResponse.details contains a payment method specific response
    await response.complete("success");
  } catch (err) {
    console.error("Uh oh, something bad happened", err.message);
  }
};
```

次の例は、エンドユーザーを説明しているときに決済シートを更新する方法を示しています。

```js
async function requestPayment() {
  // We start with AU$0 as the total.
  const initialDetails = {
    total: {
      label: "Total",
      amount: { value: "0", currency: "AUD" },
    },
  };
  const request = new PaymentRequest(methods, initialDetails, options);
  // Check if the user supports the `methods`
  if (!(await request.canMakePayment())) {
    return; // no, so use a web form instead.
  }
  // Let's update the total as the sheet is shown
  const updatedDetails = {
    total: {
      label: "Total",
      amount: { value: "20", currency: "AUD" },
    },
  };
  const response = await request.show(updatedDetails);
  // Check response, etc.
}

document.getElementById("buyButton").onclick = requestPayment;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [決済リクエスト API](/ja/docs/Web/API/Payment_Request_API)
- [決済リクエスト API の使用](/ja/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- {{domxref('PaymentRequest.abort()')}}
- {{domxref("PaymentResponse")}}
- {{domxref("PaymentResponse.retry()")}}
- {{domxref("PaymentResponse.complete()")}}
