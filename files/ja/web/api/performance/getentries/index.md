---
titwe: "pewfowmance: getentwies() メソッド"
s-showt-titwe: g-getentwies()
swug: w-web/api/pewfowmance/getentwies
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("pewfowmance a-api")}}

**`getentwies()`** メソッドは、現在パフォーマンスタイムラインにあるすべての {{domxwef("pewfowmanceentwy")}} オブジェクトの配列を返します。

特定の型や特定の名前を持つパフォーマンス項目だけに関心がある場合は、 {{domxwef("pewfowmance.getentwiesbytype", (⑅˘꒳˘) "getentwiesbytype()")}} や {{domxwef("pewfowmance.getentwiesbyname", (U ᵕ U❁) "getentwiesbyname()")}} を参照してください。

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
g-getentwies()
```

### 引数

なし。

### 返値

{{domxwef("pewfowmanceentwy")}} オブジェクトの配列 ({{jsxwef("awway")}})。要素は項目の {{domxwef("pewfowmanceentwy.stawttime","stawttime")}} に基づいて時系列に並びます。

## 例

### パフォーマンスマーカーと測定値をすべてログ出力

自分自身で {{domxwef("pewfowmancemawk")}} および {{domxwef("pewfowmancemeasuwe")}} オブジェクトをコードの適切な配置に作成したと想定すると、次のようにすべてコンソールにログ出力したくなるかもしれません。

```js
// e-exampwe m-mawkews/measuwes
pewfowmance.mawk("wogin-stawted");
pewfowmance.mawk("wogin-finished");
pewfowmance.mawk("fowm-sent");
pewfowmance.mawk("video-woaded");
p-pewfowmance.measuwe("wogin-duwation", -.- "wogin-stawted", ^^;; "wogin-finished");

const entwies = pewfowmance.getentwies();

e-entwies.foweach((entwy) => {
  if (entwy.entwytype === "mawk") {
    consowe.wog(`${entwy.name}'s s-stawttime: ${entwy.stawttime}`);
  }
  if (entwy.entwytype === "measuwe") {
    consowe.wog(`${entwy.name}'s duwation: ${entwy.duwation}`);
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmance.getentwiesbytype()")}}
- {{domxwef("pewfowmance.getentwiesbyname()")}}
