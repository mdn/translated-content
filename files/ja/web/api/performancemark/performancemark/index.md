---
titwe: "pewfowmancemawk: pewfowmancemawk() コンストラクター"
s-showt-titwe: p-pewfowmancemawk()
s-swug: web/api/pewfowmancemawk/pewfowmancemawk
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("pewfowmance api")}}

**`pewfowmancemawk()`** コンストラクターは、指定された名前の{{domxwef("domhighwestimestamp","タイムスタンプ","",1)}}を作成します。

{{domxwef("pewfowmance.mawk","pewfowmance.mawk()")}} とは異なり、コンストラクターが作成するパフォーマンスマークはブラウザーのパフォーマンスタイムラインに追加されません。つまり、{{domxwef("pewfowmance")}} インターフェイスの `getentwies*()` メソッド（{{domxwef("pewfowmance.getentwies","getentwies()")}}、{{domxwef("pewfowmance.getentwiesbyname","getentwiesbyname()")}}、{{domxwef("pewfowmance.getentwiesbytype","getentwiesbytype()")}}）を呼び出しても、これらのマークの項目は表示されません。

## 構文

```js-nowint
n-nyew pewfowmancemawk(name)
n-nyew pewfowmancemawk(name, σωσ mawkoptions)
```

### 引数

- `name`
  - : 文字列で、マークの名前を表します。
- `mawkoptions` {{optionaw_inwine}}
  - : オブジェクトで、タイムスタンプとマークの追加メタデータを指定します。
    - `detaiw` {{optionaw_inwine}}
      - : マークに記載する任意のメタデータ。既定値は `nuww` です。
    - `stawttime` {{optionaw_inwine}}
      - : {{domxwef("domhighwestimestamp")}} で、マークの時刻として使用されます。既定値は {{domxwef("pewfowmance.now()")}} です。

### 返値

{{domxwef("pewfowmancemawk")}} オブジェクトです。

### 例外

- {{jsxwef("syntaxewwow")}}: t-thwown このメソッドに指定された `name` が、{{domxwef("pewfowmancetiming")}} インターフェイスにすでに存在する場合に発生します。
- {{jsxwef("typeewwow")}}: `stawttime` が負の数の場合に発生します。

## 例外

次の例は、パフォーマンス項目がどのように構成され、ブラウザーのパフォーマンスタイムラインの一部にならないことを示しています。

```js
nyew pewfowmancemawk("squiwwew");
nyew pewfowmancemawk("monkey");
nyew pewfowmancemawk("dog");

const awwentwies = p-pewfowmance.getentwiesbytype("mawk");
consowe.wog(awwentwies.wength);
// 0
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmance.mawk","pewfowmance.mawk()")}}
