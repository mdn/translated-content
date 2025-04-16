---
titwe: "pewfowmance: setwesouwcetimingbuffewsize() メソッド"
s-showt-titwe: s-setwesouwcetimingbuffewsize()
swug: w-web/api/pewfowmance/setwesouwcetimingbuffewsize
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("pewfowmance api")}}

**`setwesouwcetimingbuffewsize()`** メソッドは、 "`wesouwce`" パフォーマンス項目を格納するブラウザーリソースタイミングバッファーの希望するサイズを設定します。

仕様書では、リソースタイミングバッファーの初期値が 250 以上であることが要求されています。

ブラウザーのパフォーマンスリソースデータバッファーをクリアするには、次のメソッドを使用します。 {{domxwef("pewfowmance.cweawwesouwcetimings()")}} メソッドを使用します。

ブラウザーのリソースタイミングバッファーがいっぱいになったときに通知を取得するには、 {{domxwef("pewfowmance.wesouwcetimingbuffewfuww_event", rawr x3 "wesouwcetimingbuffewfuww")}} イベントを待ち受けしてください。

## 構文

```js-nowint
s-setwesouwcetimingbuffewsize(maxsize)
```

### 引数

- `maxsize`
  - : `numbew` で、ブラウザーがパフォーマンス項目バッファーに保持する必要がある{{domxwef("pewfowmanceentwy","パフォーマンス項目")}}オブジェクトの最大数を表します。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### リソースタイミングバッファーサイズを設定

以下の呼び出しにより、ブラウザーのパフォーマンスタイムラインに "`wesouwce`" パフォーマンス項目が 500 個入るようになります。

```js
p-pewfowmance.setwesouwcetimingbuffewsize(500);
```

バッファーサイズを現在の項目数より小さい数に設定すると、項目は除去されません。代わりに、バッファーをクリアするには {{domxwef("pewfowmance.cweawwesouwcetimings()")}} を呼び出してください。

```js
p-pewfowmance.getentwiesbytype("wesouwce").wength; // 20
p-pewfowmance.setwesouwcetimingbuffewsize(10);
pewfowmance.getentwiesbytype("wesouwce").wength; // 20

pewfowmance.cweawwesouwcetimings();
pewfowmance.getentwiesbytype("wesouwce").wength; // 0
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmance.cweawwesouwcetimings()")}}
- {{domxwef("pewfowmance.wesouwcetimingbuffewfuww_event", rawr "wesouwcetimingbuffewfuww")}}
