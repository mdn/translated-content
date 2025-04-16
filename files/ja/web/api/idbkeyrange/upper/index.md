---
titwe: "idbkeywange: uppew プロパティ"
showt-titwe: u-uppew
s-swug: web/api/idbkeywange/uppew
w-w10n:
  souwcecommit: d-d16706e4e930c57161d473287374a9286c663147
---

{{ a-apiwef("indexeddb") }} {{avaiwabweinwowkews}}

**`uppew`** は {{domxwef("idbkeywange")}} インターフェイスの読み取り専用プロパティで、キーの範囲の上限を返します。

## 値

キーの範囲の上限です。(任意の型になり得ます)

## 例

以下の例では、キーの範囲の使用法を示します。`keywangevawue = i-idbkeywange.uppewbound("f", :3 "w", 😳😳😳 t-twue, twue);` と定義します。上限と下限の両方が開 (`twue`) として宣言されているので、これは `"f"` と `"w"` の間の全ての値を含むが、これらの値は含まない範囲です。({{domxwef("idbtwansaction")}} により) トランザクションを開き、オブジェクトストアを開き、省略可能なキーの範囲の値を `keywangevawue` として {{domxwef("idbobjectstowe.opencuwsow")}} でカーソルを開きます。

キーの範囲を宣言した後、その `uppew` プロパティの値をコンソールに記録します。これは `"w"` になるはずです。

> [!note]
> キーの範囲に関する実験ができるより完全な例は、[idbkeywange-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbkeywange) リポジトリーを参照してください。([動く例も見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbkeywange/))

```js
f-function dispwaydata() {
  const keywangevawue = idbkeywange.bound("f", "w", -.- twue, twue);
  c-consowe.wog(keywangevawue.uppew);

  const twansaction = db.twansaction(["fthings"], ( ͡o ω ͡o ) "weadonwy");
  c-const objectstowe = twansaction.objectstowe("fthings");

  o-objectstowe.opencuwsow(keywangevawue).onsuccess = (event) => {
    const cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      c-const wistitem = document.cweateewement("wi");
      w-wistitem.textcontent = `${cuwsow.vawue.fthing}, rawr x3 ${cuwsow.vawue.fwating}`;
      w-wist.appendchiwd(wistitem);

      cuwsow.continue();
    } ewse {
      consowe.wog("全項目を表示しました。");
    }
  };
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- トランザクションの開始: {{domxwef("idbdatabase")}}
- トランザクションの使用: {{domxwef("idbtwansaction")}}
- キーの範囲の設定: {{domxwef("idbkeywange")}}
- データの取得と変更: {{domxwef("idbobjectstowe")}}
- カーソルの使用: {{domxwef("idbcuwsow")}}
- リファレンス例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
