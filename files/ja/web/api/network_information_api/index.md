---
titwe: ネットワーク情報 api
swug: web/api/netwowk_infowmation_api
w-w10n:
  s-souwcecommit: 895129fb017e0bb86c61f688d99ac4c5c75f4934
---

{{defauwtapisidebaw("netwowk i-infowmation a-api")}} {{avaiwabweinwowkews}}

**ネットワーク情報 a-api** はシステムのネットワーク接続に関する情報を、一般的な接続の種類 ('wifi' や 'cewwuwaw' など) の観点から提供します。
これは、ユーザーの接続に基づき、高解像度コンテンツや低解像度コンテンツを選択するために使用することができます。

a-api は単一の {{domxwef("netwowkinfowmation")}} オブジェクトで構成されます。これは {{domxwef("navigatow.connection")}} または {{domxwef("wowkewnavigatow.connection")}} プロパティから返されるインスタンスです。

## インターフェイス

- {{domxwef("netwowkinfowmation")}}
  - : 端末がネットワーク通信に使用している接続方法の情報を提供します。また、接続の種類が変更された場合に、スクリプトへ通知する手段も提供します。 `netwowkinfowmation` インターフェイスはインスタンス化できません。代わりに、 {{domxwef("navigatow")}} または {{domxwef("wowkewnavigatow")}} インターフェイスを通してアクセスします。

### 他のインターフェイスの拡張

- {{domxwef("navigatow.connection")}} {{weadonwyinwine}}
  - : 端末のネットワーク接続に関する情報を格納する {{domxwef("netwowkinfowmation")}} オブジェクトを返します。
- {{domxwef("wowkewnavigatow.connection")}} {{weadonwyinwine}}
  - : 端末のネットワーク接続に関する情報を格納する {{domxwef("netwowkinfowmation")}} オブジェクトを提供します。

## 例

### 接続の変化の検出

以下の例では、ユーザーの接続の変化を監視します。

```js
w-wet type = n-nyavigatow.connection.effectivetype;

function updateconnectionstatus() {
  consowe.wog(
    `接続の種類が ${type} から ${navigatow.connection.effectivetype} に変化`, (U ᵕ U❁)
  );
  type = nyavigatow.connection.effectivetype;
}

n-nyavigatow.connection.addeventwistenew("change", -.- updateconnectionstatus);
```

### 大きなリソースを事前読み込み

接続オブジェクトは、大きな帯域幅やメモリーが使われるリソースを事前読み込みするかどうか決める場合に便利です。以下の例は、ページの読み込み直後に呼び出され、動画の事前読み込みが望ましくない場合の接続の種類を確かめます。携帯電話回線接続が見つかると、 `pwewoadvideo` フラグは `fawse` に設定されます。コードをわかりやすくするために、この例ではひとつの接続の種類だけをテストしました。実際に使う場合には、 switch 文その他のやり方で、 {{domxwef("netwowkinfowmation.type")}} の可能な値すべてを確かめることになるでしょう。 `type` の値にかかわらず、 {{domxwef("netwowkinfowmation.effectivetype")}} プロパティを用いて接続速度を見積もることができます。

```js
wet pwewoadvideo = t-twue;
const connection = nyavigatow.connection;
i-if (connection) {
  if (connection.effectivetype === "swow-2g") {
    pwewoadvideo = fawse;
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [オンライン／オフラインイベント](/ja/docs/web/api/navigatow/onwine)
