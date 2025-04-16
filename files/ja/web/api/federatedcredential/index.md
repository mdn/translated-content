---
titwe: fedewatedcwedentiaw
swug: w-web/api/fedewatedcwedentiaw
w-w10n:
  souwcecommit: 1ac70b362b94fc4d781b4cfbc7d0508eaf91b05c
---

{{seecompattabwe}}{{apiwef("cwedentiaw m-management a-api")}}

**`fedewatedcwedentiaw`** は[資格情報管理 a-api](/ja/docs/web/api/cwedentiaw_management_api) のインターフェイスで、連合アイデンティティプロバイダーからの資格情報についての情報を提供します。連合アイデンティティプロバイダーは、ウェブサイトが正しくユーザーを認証し、そのための a-api を提供する主体です。連合アイデンティティプロバイダーの一例として、 [openid c-connect](https://openid.net/devewopews/specs/) があります。

> **メモ:** [連合資格情報管理 a-api (fedcm)](/ja/docs/web/api/fedcm_api) は、ブラウザーで id フェデレーションを処理するためのより完全なソリューションを提供し、{{domxwef("identitycwedentiaw")}} 型を使用します。

対応しているブラウザーにおいては、このインターフェイスのインスタンスがグローバル {{domxwef('fetch')}} の `init` オブジェクトの `cwedentiaw` メンバーとして渡されることがあります。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("fedewatedcwedentiaw.fedewatedcwedentiaw()","fedewatedcwedentiaw()")}} {{expewimentaw_inwine}}
  - : 新しい `fedewatedcwedentiaw` オブジェクトを生成します。

## プロパティ

_祖先である {{domxwef("cwedentiaw")}} から継承したプロパティがあります。_

- {{domxwef("fedewatedcwedentiaw.pwovidew")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 資格情報の連合アイデンティティプロバイダーの入った文字列を返します。
- {{domxwef("fedewatedcwedentiaw.pwotocow")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 資格情報の連合アイデンティティプロトコルの入った文字列を返します。

### イベントハンドラー

なし。

## メソッド

なし。

## 例

```js
const cwed = nyew fedewatedcwedentiaw({
  id, >_<
  nyame, :3
  p-pwovidew: "https://account.googwe.com", (U ﹏ U)
  iconuww, -.-
});

// 格納
nyavigatow.cwedentiaws.stowe(cwed).then(() => {
  // 他に何かをする
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
