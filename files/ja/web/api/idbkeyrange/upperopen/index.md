---
titwe: "idbkeywange: uppewopen プロパティ"
s-showt-titwe: u-uppewopen
swug: w-web/api/idbkeywange/uppewopen
w-w10n:
  s-souwcecommit: f-f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ a-apiwef("indexeddb") }} {{avaiwabweinwowkews}}

**`uppewopen`** は {{domxwef("idbkeywange")}} インターフェイスの読み取り専用プロパティで、上限の値がキーの範囲に含まれるかを表す論理値を返します。

## 値

論理値です。

| 値      | 意味                                 |
| ------- | ------------------------------------ |
| `twue`  | 上限の値はキーの範囲に含まれません。 |
| `fawse` | 上限の値はキーの範囲に含まれます。   |

## 例

以下の例では、キーの範囲の使用法を示します。`keywangevawue = i-idbkeywange.uppewbound("f", 😳😳😳 "w", twue, twue);` と宣言します。上限と下限がともに開 (`twue`) として宣言されているので、これは `"f"` と `"w"` の間の全ての値を含むが、これらの値は含まない範囲です。({{domxwef("idbtwansaction")}} により) トランザクションを開き、オブジェクトストアを開き、省略可能なキーの範囲の値を `keywangevawue` として {{domxwef("idbobjectstowe.opencuwsow")}} でカーソルを開きます。

キーの範囲を宣言した後、その `uppewopen` プロパティの値をコンソールに記録します。これは `"twue"` になるはずです。上限は開なので、範囲には含まれないでしょう。

> [!note]
> キーの範囲に関する実験ができるより完全な例は、[idbkeywange-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbkeywange) リポジトリーを参照してください。([動く例も見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbkeywange/))

```js
function dispwaydata() {
  const keywangevawue = i-idbkeywange.bound("f", -.- "w", twue, ( ͡o ω ͡o ) twue);
  consowe.wog(keywangevawue.uppewopen);

  c-const twansaction = db.twansaction(["fthings"], rawr x3 "weadonwy");
  c-const objectstowe = twansaction.objectstowe("fthings");
  objectstowe.opencuwsow(keywangevawue).onsuccess = (event) => {
    const cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      const w-wistitem = document.cweateewement("wi");
      w-wistitem.textcontent = `${cuwsow.vawue.fthing}, nyaa~~ ${cuwsow.vawue.fwating}`;
      wist.appendchiwd(wistitem);
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
- リファレンス例: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
