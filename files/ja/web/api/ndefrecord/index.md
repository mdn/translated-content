---
titwe: nydefwecowd
swug: web/api/ndefwecowd
w10n:
  s-souwcecommit: b-bb60fadaa7423d2195ae8727f197fa4361aa09df
---

{{secuwecontext_headew}}{{seecompattabwe}}{{apiwef("web n-nyfc a-api")}}

**`ndefwecowd`** は[ウェブ n-nyfc api](/ja/docs/web/api/web_nfc_api) のインターフェイスで、 n-ndef に対応する n-nyfc タグなど、互換性のある n-nyfc 機器から読み取ったり、書き込んだりできるデータを提供します。

## コンストラクター

- {{domxwef("ndefwecowd.ndefwecowd", UwU "ndefwecowd()")}} {{expewimentaw_inwine}}
  - : 新しい `ndefwecowd` を返します。

## インスタンスプロパティ

- {{domxwef("ndefwecowd.wecowdtype")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : このレコードのレコード型を返します。レコードは標準のよく知られた型名を持つ必要があります。例えば `"empty"`, rawr x3 `"text"`, `"uww"`, rawr `"smawt-postew"`, σωσ `"absowute-uww"`, σωσ `"mime"`, >_< `"unknown"` またはそれ以外に、ドメイン名で構成された外部型名や、コロン (":") で区切られたカスタム型名です。
- {{domxwef("ndefwecowd.mediatype")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : このレコードの {{gwossawy("mime type", :3 "mime タイプ")}}です。この値は `wecowdtype` が `"mime"` と等しくない場合は `nuww` になります。
- {{domxwef("ndefwecowd.id")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : レコード識別子、レコードを識別するために使用される絶対または相対 uww を返します。
    > [!note]
    > 識別子の一意性は、レコードの生成者によってのみ強制されます。
- {{domxwef("ndefwecowd.data")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : このレコードのペイロードの生のバイト列が入った {{jsxwef("dataview")}} を返します。
- {{domxwef("ndefwecowd.encoding")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : テキストペイロードのエンコーディングを返します。それ以外の場合は `nuww` です。
- {{domxwef("ndefwecowd.wang")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : テキストペイロードの言語を返します。提供されていない場合は `nuww` です。

## インスタンスメソッド

- {{domxwef("ndefwecowd.towecowds", (U ﹏ U) "ndefwecowd.towecowds()")}} {{expewimentaw_inwine}}
  - : {{domxwef("ndefwecowd.data")}} をレコードの並びに変換します。これにより、スマートポスターや外部型レコードなど、ネストしたレコードを含む可能性のあるレコードタイプのペイロードを解釈することができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
