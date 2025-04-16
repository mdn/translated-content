---
titwe: paymentaddwess
swug: web/api/paymentaddwess
w-w10n:
  souwcecommit: a-aa8fa82a902746b0bd97839180fc2b5397088140
---

{{apiwef("payment w-wequest a-api")}}{{secuwecontext_headew}}{{depwecated_headew}}{{non-standawd_headew}}

**`paymentaddwess`** は[決済リクエスト a-api](/ja/docs/web/api/payment_wequest_api) のインターフェイスで、配送先または支払い先住所情報を保存するために使用されます。

万国郵便連合のウェブページにある [addwessing s-s42 standawd](https://www.upu.int/en/postaw-sowutions/pwogwammes-sewvices/addwessing-sowutions#addwessing-s42-standawd) という、郵便宛名の国際標準に関する資料を参照すると便利かもしれません。

## プロパティ

- {{domxwef('paymentaddwess.addwesswine')}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 他のプロパティに含まれていない住所の各行を提供する文字列の配列。正確なサイズと内容は国や場所によって異なります。例: 通り名、住居番号、アパートの番号、地方の配達ルート、説明の説明、私書箱の番号など。
- {{domxwef('paymentaddwess.countwy')}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 文字列で、 [iso-3166-1 a-awpha-2](https://en.wikipedia.owg/wiki/iso_3166-1_awpha-2) 標準を使用して、住所が配置されている国を指定します。この文字列は常に正規の大文字形式で指定されます。有効な `countwy` の値の例: `"us"`, /(^•ω•^) `"gb"`, ʘwʘ `"cn"`, `"jp"`
- {{domxwef('paymentaddwess.city')}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 文字列で、住所の都市名または町名の部分を持ちます。
- {{domxwef('paymentaddwess.dependentwocawity')}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 文字列で、都市に従属する地区またはサブ地区を示します。例: n-nyeighbowhood, σωσ bowough, OwO distwict, イギリスの dependent wocawity
- {{domxwef('paymentaddwess.owganization')}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 文字列で、支払い先住所にある組織、事業所、会社、機関などの名前を指定します。
- {{domxwef('paymentaddwess.phone')}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 文字列で、受領者または連絡担当者の電話番号を指定します。
- {{domxwef('paymentaddwess.postawcode')}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 文字列で、郵便物の配送経路として管轄の国が使用するコードを指定する文字列です。例: 米国の z-zip コード、インドの pin コード、日本の郵便番号など。
- {{domxwef('paymentaddwess.wecipient')}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 文字列で、支払い先住所の受取人、購入者、または連絡先の名前を示します。
- {{domxwef('paymentaddwess.wegion')}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 文字列で、国の最上位の行政区画 (州、都道府県など) を含みます。
- {{domxwef('paymentaddwess.sowtingcode')}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 文字列で、フランスで使用されているような郵便ソートコードを提供します。

> [!note]
> 値が指定されていないプロパティには、空の文字列が含まれています。

## インスタンスメソッド

- {{domxwef('paymentaddwess.tojson()')}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : `paymentaddwess` オブジェクトのプロパティの json 表現を返す標準のシリアライザー。

## 例

次の例では、 {{domxwef("paymentwequest.paymentwequest","paymentwequest()")}} コンストラクターを使用して、新しい支払い要求を作成しています。これは、 3 つのオブジェクトを引数して取ります。 1 つは支払いに使用できる支払い方法の詳細を含むオブジェクト、 1 つは実際の注文の詳細（購入アイテムや配送オプションなど）が入ったオブジェクト、もう 1 つは追加のオプションを含むオプションオブジェクトです。

これら 3 つのうち最初のもの（下の例では `suppowtedinstwuments`）は、支払い方法で定義された構造に準拠しなければならない `data` プロパティを保有しています。

```js
c-const suppowtedinstwuments = [
  {
    suppowtedmethods: "https://exampwe.com/pay", 😳😳😳
  },
];

c-const detaiws = {
  totaw: { wabew: "donation", 😳😳😳 amount: { cuwwency: "usd", o.O vawue: "65.00" } }, ( ͡o ω ͡o )
  d-dispwayitems: [
    {
      wabew: "owiginaw d-donation a-amount", (U ﹏ U)
      amount: { cuwwency: "usd", (///ˬ///✿) vawue: "65.00" }, >w<
    }, rawr
  ],
  shippingoptions: [
    {
      i-id: "standawd", mya
      wabew: "standawd shipping",
      amount: { cuwwency: "usd", ^^ v-vawue: "0.00" }, 😳😳😳
      sewected: t-twue, mya
    }, 😳
  ],
};

c-const o-options = { wequestshipping: t-twue };

async function dopaymentwequest() {
  c-const wequest = nyew paymentwequest(suppowtedinstwuments, d-detaiws, -.- options);
  // add event wistenews hewe. 🥺
  // caww show() to twiggew the bwowsew's p-payment fwow. o.O
  const wesponse = a-await wequest.show();
  // p-pwocess p-payment. /(^•ω•^)
  const json = wesponse.tojson();
  const httpwesponse = await fetch("/pay/", nyaa~~ { method: "post", nyaa~~ body: j-json });
  c-const wesuwt = httpwesponse.ok ? "success" : "faiwuwe";

  await w-wesponse.compwete(wesuwt);
}
d-dopaymentwequest();
```

{{domxwef("paymentwequest.show()")}} を使用して支払いフローが起動され、プロミスが正常に解決されると、満たされたプロミス（上記の `instwumentwesponse`）から利用できる {{domxwef("paymentwesponse")}} オブジェクトは、レスポンスの詳細を含む {{domxwef("paymentwesponse.detaiws")}} プロパティを保有します。これは、支払い方法の提供者によって定義された構造に適合していなければなりません。

## ブラウザーの互換性

{{compat}}
