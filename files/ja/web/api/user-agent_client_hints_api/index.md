---
title: ユーザーエージェントクライアントヒント API
slug: Web/API/User-Agent_Client_Hints_API
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{DefaultAPISidebar("User-Agent Client Hints API")}}{{SeeCompatTable}}

ユーザーエージェントクライアントヒント API (User-Agent Client Hints API) は、[クライアントヒント](/ja/docs/Web/HTTP/Client_hints)を拡張し、 User-Agent レスポンスおよびリクエストヘッダー、および JavaScript API によってブラウザーとプラットフォーム情報を公開する方法を提供します。

## 概念と使い方

ユーザーエージェント文字列を解釈することは、過去には、ユーザーのブラウザーまたは端末に関する情報を取得するための方法でした。典型的なユーザーエージェント文字列は次の例のようなもので、 Windows 上の Chrome 92 を識別します。

```
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36
```

ユーザーエージェント クライアントヒントは、サーバーが情報の集合をリクエストされるモデルを強制することによって、よりプライバシーを保護した方法でこの情報を提供することを目的としています。何を返すかは、ブラウザーが決定します。この手法は、ユーザーエージェントが、そのようなリクエストからユーザーを特定できるような情報の一部を隠すための設定を提供することができるということです。

何を返すかを決定するために、この API を介してアクセスされる情報は、**低エントロピー**と**高エントロピー**の 2 つのグループに分かれます。低エントロピーヒントは、あまり多くの情報を与えないものであり、 API はリクエストされる度にこれらの情報に簡単にアクセスできるようにしています。高エントロピーヒントは、より多くの情報を提供する可能性があるため、ヒントを提供するかどうかをブラウザーが決定できるような方法で制限されます。この決定はユーザーの環境設定や許可リクエストに基づいて行われることがあります。

### ユーザーエージェントクライアントヒントの用途

想定される用途には、次のようなものがあります。

- ブラウザーにウェブプラットフォームの一部の機能が欠けていることを特定したユーザーに、カスタムメイドのポリフィルを提供する。
- ブラウザーのバグの回避。
- ブラウザー分析の記録。
- ユーザーエージェント情報に基づいてコンテンツを適応させる。
  これには、モバイル端末、特に低消費電力と認識された端末に異なる形でコンテンツを提供することが含まれます。
  また、ユーザーの OS に合わせてインターフェイスのデザインを変更したり、OS 固有のインターフェイスへのリンクを提供したりすることも記載することができます。
- セキュリティ機能として、ユーザーが異なるブラウザーや端末からログインした際に通知する。
- ダウンロードを提供しているサイトで、正しいバイナリー実行ファイルを提供する。
- アプリケーションのエラーを特定するために、ブラウザーや端末に関する情報を収集すること。
- スパマー、ボット、クローラーをブロックする。

## インターフェイス

- {{domxref("NavigatorUAData")}}
  - : ユーザーのブラウザーとオペレーティングシステムに関するデータにアクセスするためのプロパティとメソッドを提供します。

## 例

### ブランドの取得

以下の例は、 {{domxref("NavigatorUAData.brands")}} の値をコンソールに表示するものです。

```js
console.log(navigator.userAgentData.brands);
```

### 高いエントロピーの値の返却

以下の例では、 {{domxref("NavigatorUAData.getHighEntropyValues()")}} メソッドを使用して多くのヒントがリクエストされます。プロミスが解決すると、この情報がコンソールに表示されます。

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

- [Improving user privacy and developer experience with User-Agent Client Hints](https://web.dev/user-agent-client-hints/)
- [Migrate to User-Agent Client Hints](https://web.dev/migrate-to-ua-ch/)
