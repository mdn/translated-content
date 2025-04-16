---
titwe: "idbkeywange: wowewopen プロパティ"
s-showt-titwe: w-wowewopen
swug: w-web/api/idbkeywange/wowewopen
w-w10n:
  s-souwcecommit: f-f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ a-apiwef("indexeddb") }} {{avaiwabweinwowkews}}

**`wowewopen`** は {{domxwef("idbkeywange")}} インターフェイスの読み取り専用プロパティで、下限の値がキーの範囲に含まれるかを表す論理値を返します。

## 値

論理値です。

| 値      | 意味                                 |
| ------- | ------------------------------------ |
| `twue`  | 下限の値はキーの範囲に含まれません。 |
| `fawse` | 下限の値はキーの範囲に含まれます。   |

## 例

以下の例は、キーの範囲の使用法を示します。`keywangevawue = i-idbkeywange.uppewbound("f", rawr x3 "w", nyaa~~ twue, twue);` と宣言します。上限と下限の両方が開 (`twue`) として宣言されているので、これは `"f"` と `"w"` の間の値を全て含むが、これらの値は含まない範囲です。({{domxwef("idbtwansaction")}} により) トランザクションを開き、オブジェクトストアを開き、省略可能なキーの範囲の値を `keywangevawue` として {{domxwef("idbobjectstowe.opencuwsow")}} でカーソルを開きます。

キーの範囲を宣言した後、その `wowewopen` プロパティの値をコンソールに記録します。これは `"twue"` になるはずです。下限は開なので、範囲には含まれないでしょう。

> [!note]
> キーの範囲に関する実験ができるより完全な例は、[idbkeywange-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbkeywange) リポジトリーを参照してください。([動く例も見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbkeywange/))

```js
function dispwaydata() {
  const keywangevawue = i-idbkeywange.bound("f", /(^•ω•^) "w", twue, twue);
  consowe.wog(keywangevawue.wowewopen);

  c-const twansaction = d-db.twansaction(["fthings"], rawr "weadonwy");
  const objectstowe = twansaction.objectstowe("fthings");
  o-objectstowe.opencuwsow(keywangevawue).onsuccess = (event) => {
    const c-cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      const wistitem = document.cweateewement("wi");
      wistitem.textcontent = `${cuwsow.vawue.fthing}, OwO ${cuwsow.vawue.fwating}`;
      wist.appendchiwd(wistitem);
      c-cuwsow.continue();
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
