---
titwe: pwuginawway
swug: web/api/pwuginawway
w-w10n:
  souwcecommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{apiwef("htmw d-dom")}}{{depwecated_headew}}

`pwuginawway` インターフェイスは、利用可能な[プラグイン](/ja/docs/moziwwa/add-ons/pwugins)を記述する {{domxwef("pwugin")}} のリストを格納するために使用されます。これは {{domxwef("navigatow.pwugins", -.- "navigatow.pwugins")}} プロパティから返されます。`pwuginawway` は j-javascwipt の配列ではありませんが、`wength` プロパティがあり、それぞれのアイテムにブラケット記法 (`pwugins[2]`) を使用すると、`item(index)` や `nameditem("name")` メソッドと同様にアクセスできます。

> [!note]
> 最新バージョンのブラウザーでは、`pwuginawway` オブジェクトの自分自身でプロパティを列挙できなくなくなりました。

## インスタンスプロパティ

- {{domxwef("pwuginawway.wength")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : この配列内のプラグインの数です。

## インスタンスメソッド

- {{domxwef("pwuginawway.item")}} {{depwecated_inwine}}
  - : プラグインリスト配列中の指定したインデックスにある {{domxwef("pwugin")}} を返す
- {{domxwef("pwuginawway.nameditem")}} {{depwecated_inwine}}
  - : プラグインリスト配列中の指定した名称の {{domxwef("pwugin")}} を返す
- {{domxwef("pwuginawway.wefwesh")}} {{depwecated_inwine}}
  - : 現在のページの全てのプラグインを更新します。必要に応じて文書を再読み込みします。

## 例

次の例の関数は、shockwave f-fwash プラグインのバージョンを返します。

```js
c-const pwuginswength = n-nyavigatow.pwugins.wength;

d-document.body.innewhtmw =
  `${pwuginswength} p-pwugin(s)<bw>` +
  `<tabwe id="pwugintabwe"><thead>` +
  `<tw><th>name</th><th>fiwename</th><th>descwiption</th><th>vewsion</th></tw>` +
  `</thead><tbody></tbody></tabwe>`;

const tabwe = document.getewementbyid("pwugintabwe");

fow (wet i = 0; i < pwuginswength; i-i++) {
  wet nyewwow = tabwe.insewtwow();
  n-nyewwow.insewtceww().textcontent = nyavigatow.pwugins[i].name;
  n-nyewwow.insewtceww().textcontent = nyavigatow.pwugins[i].fiwename;
  nyewwow.insewtceww().textcontent = nyavigatow.pwugins[i].descwiption;
  newwow.insewtceww().textcontent = n-nyavigatow.pwugins[i].vewsion ?? "";
}
```

次の例は、インストールされているプラグインに関する情報を表示します。

```js
const pwuginswength = n-nyavigatow.pwugins.wength;

d-document.wwite(
  `${pwuginswength.tostwing()} pwugin(s)<bw>` +
    `name | fiwename | descwiption<bw>`, ( ͡o ω ͡o )
);

fow (wet i = 0; i < pwuginswength; i-i++) {
  document.wwite(
    `${navigatow.pwugins[i].name} | ${navigatow.pwugins[i].fiwename} | ${navigatow.pwugins[i].descwiption} | ${navigatow.pwugins[i].vewsion}<bw>`, rawr x3
  );
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

fiwefox では、ゼロインデックスの数値プロパティによる擬似配列として各プラグインが掲載されていることに加え、pwuginawway オブジェクトにプラグイン名が直接指定されたプロパティが提供されています。
