---
title: Network Information API
slug: Web/API/Network_Information_API
---

{{DefaultAPISidebar("Network Information API")}}{{SeeCompatTable}}

Network Information API はシステムのネットワーク接続に関する情報を、一般的な接続タイプ (例: 'wifi' や 'cellular' など) の観点から提供します。これは、ユーザーの接続を元に高解像度コンテンツまたは低解像度コンテンツを選択するために使用することができます。API の全体像は {{domxref("NetworkInformation")}} インターフェイスの追加と、{{domxref("Navigator")}} インターフェイスに追加された 1 個のプロパティ {{domxref("Navigator.connection")}} で構成されます。

{{AvailableInWorkers}}

## 例

### 接続の変化の検出

以下の例では、ユーザーの接続の変化を監視します。

```js
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var type = connection.effectiveType;

function updateConnectionStatus() {
  console.log("接続タイプが" + type + "から" + connection.effectiveType + "に変化");
  type = connection.effectiveType;
}

connection.addEventListener('change', updateConnectionStatus);
```

### 大きなリソースを事前読み込み

接続オブジェクトは、大きな帯域幅やメモリが使われるリソースを事前読み込みするかどうか決める場合に便利です。以下の例は、ページの読み込み直後に呼び出され、動画の事前読み込みが望ましくない場合の接続タイプを確かめます。携帯電話回線接続が見つかると、 `preloadVideo` フラグは `false` に設定されます。コードをわかりやすくするために、この例ではひとつの接続タイプだけをテストしました。実際に使う場合には、 `switch` 文その他のやり方で、 {{domxref("NetworkInformation.type")}} の可能な値すべてを確かめることになるでしょう。 `type` の値にかかわらず、 {{domxref("NetworkInformation.effectiveType")}} プロパティを用いて接続速度を見積もることができます。

```js
let preloadVideo = true;
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (connection) {
  if (connection.effectiveType === 'slow-2g') {
    preloadVideo = false;
  }
}
```

## インターフェイス

- {{domxref("NetworkInformation")}}
  - : 端末がネットワーク通信に使用している接続方法の情報を提供します。また、接続タイプが変更された場合に、スクリプトへ通知する手段も提供します。 `NetworkInformation` インターフェイスはインスタンス化できません。代わりに、 {{domxref("Navigator")}} インターフェイスを通してアクセスします。

## 仕様書

| 仕様書                                                                                   | 状態                                         | 備考     |
| ---------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName('Network Information', '', 'Network Information API')}} | {{Spec2('Network Information')}} | 初回定義 |

## ブラウザーの互換性

### NetworkInformation

{{Compat("api.NetworkInformation")}}

### Navigator.connection

{{Compat("api.Navigator.connection")}}

## 関連情報

- {{spec("http://w3c.github.io/netinfo/", "Network Information API Specification", "ED")}}
- [Online and offline events](/ja/docs/Online_and_offline_events)
- {{domxref("Navigator.connection", "window.navigator.connection")}}
