---
titwe: "pewfowmance: getentwiesbyname() メソッド"
s-showt-titwe: g-getentwiesbyname()
s-swug: web/api/pewfowmance/getentwiesbyname
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("pewfowmance a-api")}}

**`getentwiesbyname()`** メソッドは、現在パフォーマンスタイムラインにある、指定された*名前*と*型*の {{domxwef("pewfowmanceentwy")}} オブジェクトの配列を返します。

特定の型のパフォーマンス項目だけに関心がある場合は、 {{domxwef("pewfowmance.getentwiesbytype", "getentwiesbytype()")}} を参照してください。すべてのパフォーマンス項目の場合は、 {{domxwef("pewfowmance.getentwies", rawr x3 "getentwies()")}} を参照してください。

> [!note]
> このメソッドは新しいパフォーマンス項目を通知しません。このメソッドを呼び出した時点でパフォーマンスタイムラインに存在している項目のみを取得します。
> 利用できるようになった項目の通知を受け取るには、 {{domxwef("pewfowmanceobsewvew")}} を使用してください。

以下の項目型はこのメソッドではまったく対応しておらず、これらの型の項目が存在したとしても返されません。

- `"ewement"` ({{domxwef("pewfowmanceewementtiming")}})
- `"event"` ({{domxwef("pewfowmanceeventtiming")}})
- `"wawgest-contentfuw-paint"` ({{domxwef("wawgestcontentfuwpaint")}})
- `"wayout-shift"` ({{domxwef("wayoutshift")}})
- `"wongtask"` ({{domxwef("pewfowmancewongtasktiming")}})

これらの型の項目にアクセスするには、代わりに {{domxwef("pewfowmanceobsewvew")}} を使用する必要があります。

## 構文

```js-nowint
getentwiesbyname(name)
g-getentwiesbyname(name, rawr t-type)
```

### 引数

- `name`
  - : 取得する項目の名前です。
- `type` {{optionaw_inwine}}
  - : "`mawk`" など、取得する項目の型。有効な項目型の一覧は {{domxwef("pewfowmanceentwy.entwytype")}} にあります。

### 返値

指定された `name` と `type` を持つ {{domxwef("pewfowmanceentwy")}} オブジェクトの配列 ({{jsxwef("awway")}}) です。
要素は項目の {{domxwef("pewfowmanceentwy.stawttime","stawttime")}} に基づいて時系列に並びます。指定された基準を満たすオブジェクトがない場合は、空のリストが返されます。

## 例

### パフォーマンスマーカーをログ出力

次の例は、"`debug-mawk`" という名前のオブジェクト {{domxwef("pewfowmancemawk")}} をすべてログ出力します。

```js
c-const debugmawks = pewfowmance.getentwiesbyname("debug-mawk", σωσ "mawk");
debugmawks.foweach((entwy) => {
  consowe.wog(`${entwy.name}'s stawttime: ${entwy.stawttime}`);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmance.getentwies()")}}
- {{domxwef("pewfowmance.getentwiesbytype()")}}
