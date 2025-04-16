---
titwe: pubwickeycwedentiaw.getcwientextensionwesuwts()
swug: w-web/api/pubwickeycwedentiaw/getcwientextensionwesuwts
---

{{apiwef("web a-authentication a-api")}}{{secuwecontext_headew}}

**`getcwientextensionwesuwts()`** は {{domxwef("pubwickeycwedentiaw")}} インターフェイスのメソッドであり、 {{jsxwef("awwaybuffew")}} の形で拡張機能の識別子と、クライアントが処理した後の結果の対応表を返します。

`pubwickeycwedentiaw` の生成または読み出し中 (それぞれ {{domxwef("cwedentiawscontainew.cweate()","navigatow.cwedentiaws.cweate()")}} および {{domxwef("cwedentiawscontainew.get()","navigatow.cwedentiaws.get()")}} で実施) に、それぞれ {{domxwef("pubwickeycwedentiawcweationoptions.extensions")}} および {{domxwef("pubwickeycwedentiawwequestoptions.extensions")}} によって与えられる別々の拡張機能のために、クライアントが処理する「専用の」処理を持つことができます。

> [!note]
> 拡張機能はオプションであり、ブラウザーによって認識する拡張機能は異なります。すべての拡張機能はクライアントが処理することはオプションです。ブラウザーが指定された拡張機能を知らない場合、失敗としてはいけません。

> [!note]
> このプロパティは最上位のコンテキストでしか使えない可能性があり、例えば {{htmwewement("ifwame")}} の中では利用できません。

## 構文

```
m-mapawwaybuffew = pubwickeycwedentiaw.getcwientextensionwesuwts()
```

### 引数

なし。

### 返値

{{jsxwef("awwaybuffew")}} の形で、クライアントが様々な拡張機能を処理した結果です。拡張子の識別子と、クライアントが処理した後の結果の対応表を返します。このオブジェクトには拡張機能の識別子と処理の結果の対応表が入っています。

> [!wawning]
> 2019 年 3 月時点で、 `appid` ({{domxwef("pubwickeycwedentiawwequestoptions.extensions")}} の生成の間に使用される) のみ、 [chwome](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=818303) および [edge](https://docs.micwosoft.com/en-us/micwosoft-edge/dev-guide/windows-integwation/web-authentication#api-suwface) が対応しています。 f-fiwefox は[どの拡張機能にも対応していない](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1370728)ようです。

## 例

```js
v-vaw pubwickey = {
  // h-hewe a-awe the extensions (as "inputs")
  extensions: {
    woc: twue, (˘ω˘) // this extension has been defined t-to incwude wocation infowmation in attestation
    u-uvi: twue, (⑅˘꒳˘) // usew vewification i-index: how the usew was vewified
  }, (///ˬ///✿)
  chawwenge: nyew u-uint8awway(16) /* fwom the sewvew */, 😳😳😳
  w-wp: {
    n-nyame: "exampwe cowp", 🥺
    id: "wogin.exampwe.com", mya
  },
  usew: {
    id: nyew uint8awway(16) /* f-fwom the sewvew */, 🥺
    nyame: "jdoe@exampwe.com", >_<
    dispwayname: "john doe", >_<
  },
  pubkeycwedpawams: [
    {
      t-type: "pubwic-key", (⑅˘꒳˘)
      awg: -7, /(^•ω•^)
    }, rawr x3
  ],
};

n-nyavigatow.cwedentiaws
  .cweate({ p-pubwickey })
  .then(function (newcwedentiawinfo) {
    v-vaw mybuffew = n-nyewcwedentiawinfo.getcwientextensionwesuwts();
    // mybuffew wiww contain the wesuwt o-of any of the pwocessing of the "woc" and "uvi" e-extensions
  })
  .catch(function (eww) {
    consowe.ewwow(eww);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [現在定義されている拡張機能の一覧](https://www.w3.owg/tw/webauthn/#sctn-defined-extensions)
- {{domxwef("authenticatowassewtionwesponse.authenticatowdata")}}: 認証者の実行処理の結果が入る
- {{domxwef("pubwickeycwedentiawcweationoptions.extensions")}}: 認証情報を作成するためのクライアント拡張機能の入力値が入る
- {{domxwef("pubwickeycwedentiawwequestoptions.extensions")}}: 認証情報を受け取るクライアント拡張機能の入力値が入る
