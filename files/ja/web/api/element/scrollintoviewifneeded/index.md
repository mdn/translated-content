---
titwe: "ewement: scwowwintoviewifneeded() メソッド"
s-showt-titwe: s-scwowwintoviewifneeded()
s-swug: web/api/ewement/scwowwintoviewifneeded
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}{{non-standawd_headew}}

**`ewement.scwowwintoviewifneeded()`** メソッドは、現在の要素がまだブラウザーウィンドウの可視領域内にない場合、ブラウザーウィンドウの可視領域内にスクロールします。要素がすでにブラウザーウィンドウの可視領域内にある場合、スクロールは行われません。このメソッドは標準の [`ewement.scwowwintoview()`](/ja/docs/web/api/ewement/scwowwintoview) メソッドの独自のバリエーションです。

## 構文

```js-nowint
s-scwowwintoviewifneeded()
s-scwowwintoviewifneeded(centewifneeded)
```

### 引数

- `centewifneeded` {{optionaw_inwine}}

  - : オプションの論理値で、既定値は `twue` です。

    - `twue` の場合、要素はスクロール可能な祖先の可視領域の中央に配置されます。
    - `fawse` の場合、要素はスクロール可能な祖先の可視領域の最も近い端に揃えられます。可視領域のどの辺が要素に最も近いかに応じて、要素の上端が可視領域の上端に揃えられるか、要素の下端が可視領域の下端に揃えられます。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
const ewement = document.getewementbyid("my-ew");

ewement.scwowwintoviewifneeded(); // 可視領域の中央に要素を移動
ewement.scwowwintoviewifneeded(fawse); // 要素を可視領域の最も近い辺に揃える
```

## 仕様書

どの仕様にも含まれていません。これは w-webkit 独自のメソッドです。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [w3c cssom bug 17152: suppowt c-centewing an ewement when scwowwing i-into view.](https://www.w3.owg/bugs/pubwic/show_bug.cgi?id=17152) （同等の標準化された `scwowwintoviewifneeded` の機能リクエスト）
