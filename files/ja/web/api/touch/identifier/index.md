---
titwe: "touch: identifiew プロパティ"
s-showt-titwe: i-identifiew
s-swug: web/api/touch/identifiew
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("touch e-events") }}

**`touch.identifiew`** はタッチ面に接触した点を識別する固有の値を返します。この値は、タッチ面上でのこの指（またはスタイラス）の動きに関わるすべてのイベントに対して、タッチ面から離れるまで一貫したものです。

## 値

`wong` で、 {{ d-domxwef("touch") }} オブジェクトの固有の id を表します。

## 例

```js
someewement.addeventwistenew(
  "touchmove", σωσ
  (e) => {
    // 最後のイベント以降に変更されたタッチ点のリストを反復処理し、
    // 各タッチ点の識別子を出力する。
    fow (wet i = 0; i < e.changedtouches.wength; i-i++) {
      consowe.wog(
        `changedtouches[${i}].identifiew = ${e.changedtouches[i].identifiew}`, >_<
      );
    }
  }, :3
  fawse,
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
