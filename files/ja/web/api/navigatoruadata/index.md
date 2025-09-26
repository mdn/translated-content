---
title: NavigatorUAData
slug: Web/API/NavigatorUAData
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

**`NavigatorUAData`** は{{domxref("User-Agent Client Hints API", "ユーザーエージェントクライアントヒント API", "", "nocode")}} のインターフェイスで、ユーザーのブラウザーとオペレーティングシステムに関する情報を返します。

このオブジェクトのインスタンスは {{domxref("Navigator.userAgentData")}} または {{domxref("WorkerNavigator.userAgentData")}} を呼び出すことによって返されます。そのため、このインターフェイスにはコンストラクターはありません。

> [!NOTE]
> 「高エントロピー」と「低エントロピー」という用語は、これらの値がブラウザーについて明らかにする情報の量を参照しています。プロパティとして返される値は、低エントロピーであり、ユーザーを特定する可能性が低いと判断されます。 {{domxref("NavigatorUAData.getHighEntropyValues()")}} によって返される値は、より多くの情報を明らかにする可能性があります。そのため、これらの値は {{jsxref("Promise")}} によって取得され、ブラウザーがユーザーの許可を要求したり、他のチェックを行ったりするための時間を確保することができます。

## インスタンスプロパティ

- {{domxref("NavigatorUAData.brands")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ブラウザー名とバージョンを格納したブランド情報の配列を返します。
- {{domxref("NavigatorUAData.mobile")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ユーザーエージェントがモバイル端末で動作している場合は `true` を返します。
- {{domxref("NavigatorUAData.platform")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ユーザーエージェントが動作しているプラットフォームのブランドを返します。

## インスタンスメソッド

- {{domxref("NavigatorUAData.getHighEntropyValues()")}} {{Experimental_Inline}}
  - : ユーザーエージェントが返す高エントロピー値を格納した辞書オブジェクトで解決する {{jsxref("Promise")}} を返します。
- {{domxref("NavigatorUAData.toJSON()")}} {{Experimental_Inline}}
  - : `NavigatorUAData` オブジェクトの低エントロピープロパティの JSON 表現を返すシリアライザーです。

## 例

### ブランド名の取得

以下の例は、 {{domxref("NavigatorUAData.brands")}} の値をコンソールに表示するものです。

```js
console.log(navigator.userAgentData.brands);
```

### 高エントロピー値の返却

以下の値では、 {{domxref("NavigatorUAData.getHighEntropyValues()")}} メソッドを使用して、多くのヒントをリクエストしています。プロミスが解決すると、この情報がコンソールに表示されます。

```js
navigator.userAgentData
  .getHighEntropyValues([
    "architecture",
    "model",
    "platform",
    "platformVersion",
    "fullVersionList",
  ])
  .then((ua) => {
    console.log(ua);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
