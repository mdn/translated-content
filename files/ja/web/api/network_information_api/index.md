---
title: ネットワーク情報 API
slug: Web/API/Network_Information_API
l10n:
  sourceCommit: 895129fb017e0bb86c61f688d99ac4c5c75f4934
---

{{DefaultAPISidebar("Network Information API")}} {{AvailableInWorkers}}

**ネットワーク情報 API** はシステムのネットワーク接続に関する情報を、一般的な接続の種類 ('wifi' や 'cellular' など) の観点から提供します。
これは、ユーザーの接続に基づき、高解像度コンテンツや低解像度コンテンツを選択するために使用することができます。

API は単一の {{domxref("NetworkInformation")}} オブジェクトで構成されます。これは {{domxref("Navigator.connection")}} または {{domxref("WorkerNavigator.connection")}} プロパティから返されるインスタンスです。

## インターフェイス

- {{domxref("NetworkInformation")}}
  - : 端末がネットワーク通信に使用している接続方法の情報を提供します。また、接続の種類が変更された場合に、スクリプトへ通知する手段も提供します。 `NetworkInformation` インターフェイスはインスタンス化できません。代わりに、 {{domxref("Navigator")}} または {{domxref("WorkerNavigator")}} インターフェイスを通してアクセスします。

### 他のインターフェイスの拡張

- {{domxref("Navigator.connection")}} {{ReadOnlyInline}}
  - : 端末のネットワーク接続に関する情報を格納する {{domxref("NetworkInformation")}} オブジェクトを返します。
- {{domxref("WorkerNavigator.connection")}} {{ReadOnlyInline}}
  - : 端末のネットワーク接続に関する情報を格納する {{domxref("NetworkInformation")}} オブジェクトを提供します。

## 例

### 接続の変化の検出

以下の例では、ユーザーの接続の変化を監視します。

```js
let type = navigator.connection.effectiveType;

function updateConnectionStatus() {
  console.log(
    `接続の種類が ${type} から ${navigator.connection.effectiveType} に変化`,
  );
  type = navigator.connection.effectiveType;
}

navigator.connection.addEventListener("change", updateConnectionStatus);
```

### 大きなリソースを事前読み込み

接続オブジェクトは、大きな帯域幅やメモリーが使われるリソースを事前読み込みするかどうか決める場合に便利です。以下の例は、ページの読み込み直後に呼び出され、動画の事前読み込みが望ましくない場合の接続の種類を確かめます。携帯電話回線接続が見つかると、 `preloadVideo` フラグは `false` に設定されます。コードをわかりやすくするために、この例ではひとつの接続の種類だけをテストしました。実際に使う場合には、 switch 文その他のやり方で、 {{domxref("NetworkInformation.type")}} の可能な値すべてを確かめることになるでしょう。 `type` の値にかかわらず、 {{domxref("NetworkInformation.effectiveType")}} プロパティを用いて接続速度を見積もることができます。

```js
let preloadVideo = true;
const connection = navigator.connection;
if (connection) {
  if (connection.effectiveType === "slow-2g") {
    preloadVideo = false;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [オンライン／オフラインイベント](/ja/docs/Web/API/Navigator/onLine)
