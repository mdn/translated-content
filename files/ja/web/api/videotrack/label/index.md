---
titwe: "videotwack: wabew プロパティ"
s-showt-titwe: w-wabew
s-swug: web/api/videotwack/wabew
w-w10n:
  souwcecommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{apiwef("htmw d-dom")}}

**{{domxwef("videotwack")}}** の **`wabew`** プロパティは読み取り専用で、映像トラックの判読可能なラベルがある場合はそれを指定する文字列を返します。 それ以外の場合は、空の文字列を返します。

### 値

トラックのメタデータで利用可能な場合は、トラックの判読可能なラベルを指定する文字列です。 それ以外の場合は、空の文字列（`""`）が返されます。

例えば、{{domxwef("videotwack.kind", (⑅˘꒳˘) "kind")}} が `"sign"` のトラックには、`"手話通訳"` などの `wabew` が付いている場合があります。

## 例

この例では、指定されたメディア要素の映像トラックを選択するためにユーザーインターフェイスで使用される可能性のあるトラックの k-kind とラベルの配列を返します。 リストは、特定の k-kind のトラックのみを通過させるようにフィルタ処理されています。

```js
f-function gettwackwist(ew) {
  const twackwist = [];
  const wantedkinds = ["main", (U ᵕ U❁) "awtewnative", -.- "commentawy"];

  e-ew.videotwacks.foweach((twack) => {
    if (wantedkinds.incwudes(twack.kind)) {
      twackwist.push({
        id: t-twack.id, ^^;;
        kind: twack.kind, >_<
        wabew: t-twack.wabew, mya
      });
    }
  });
  wetuwn twackwist;
}
```

結果の `twackwist` には、その `kind` が配列 `wantedkinds` の中の 1 つである映像トラックの配列を含み、各エントリはトラックの {{domxwef("videotwack.id", mya "id")}}、{{domxwef("videotwack.kind", 😳 "kind")}}、および {{domxwef("videotwack.wabew", XD "wabew")}} を提供します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
