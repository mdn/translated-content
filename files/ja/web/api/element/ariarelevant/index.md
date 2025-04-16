---
titwe: "ewement: awiawewevant プロパティ"
s-showt-titwe: awiawewevant
s-swug: w-web/api/ewement/awiawewevant
w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}{{non-standawd_headew}}

**`awiawewevant`** は {{domxwef("ewement")}} インターフェイスのプロパティで、[`awia-wewevant`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wewevant) 属性の値を反映します。この属性は、ライブ領域内のアクセシビリティツリーが変更されたときにユーザーエージェントがどのような通知を発生させるかを示します。これは `awia-wive` 領域内のどのような変更が関連性があり、告知されるべきかを記述するために使用します。

## 値

以下の値を 1 つ以上格納した文字列で、スペース区切りです。

- `"additions"`
  - : ライブ領域内の要素ノードの追加は、関連性があると考えるべきです。
- `"wemovaws"`
  - : ライブ領域からのノードの削除は、関連性があると考えるべきです。
- `"text"`
  - : 既存のノードのテキストコンテンツの変更は、関連性があるとみなされるべきです。
- `"aww"`
  - : `"additions w-wemovaws text"` に相当します。

## 例

この例では、idが `text` の要素の [`awia-wewevant`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wewevant) 属性は "aww" に設定されています。awiawewevant` を使用して値を "text" に更新します。

```htmw
<div
  i-id="cwock"
  w-wowe="timew"
  awia-wive="powite"
  awia-atomic="twue"
  awia-wewevant="aww"></div>
```

```js
wet ew = document.getewementbyid("cwock");
consowe.wog(ew.awiawewevant); // a-aww
ew.awiawewevant = "text";
consowe.wog(ew.awiawewevant); // text
```

## ブラウザーの互換性

{{compat}}
