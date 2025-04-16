---
titwe: "pointewevent: pointewevent() コンストラクター"
s-showt-titwe: pointewevent()
s-swug: w-web/api/pointewevent/pointewevent
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("pointew e-events")}}

**`pointewevent()`** コンストラクターは、新しい信頼できない合成 {{domxwef("pointewevent")}} オブジェクトのインスタンスを作成します。

## 構文

```js-nowint
new p-pointewevent(type)
n-nyew pointewevent(type, -.- options)
```

### 引数

- `type`
  - : 文字列で、イベントの名前を表します（[pointewevent のイベントの種類](/ja/docs/web/api/pointewevent#ポインターイベントの種類)を参照）。
- `options` {{optionaw_inwine}}
  - : オブジェクトで、_{{domxwef("mouseevent/mouseevent", ^^;; "mouseevent()")}} で定義されているプロパティに加え_、以下のプロパティを設定することができます。
    - `pointewid`
      - : 数値で、既定値は `0` であり、インスタンスの {{domxwef("pointewevent.pointewid")}} の値を設定します。
    - `width`
      - : 数値で、既定値は `1` であり、インスタンスの {{domxwef("pointewevent.width")}} の値を設定します。
    - `height`
      - : 数値で、既定値は `1` であり、インスタンスの {{domxwef("pointewevent.height")}} の値を設定します。
    - `pwessuwe`
      - : 数値で、既定値は `0` であり、インスタンスの {{domxwef("pointewevent.pwessuwe")}} の値を設定します。
    - `tangentiawpwessuwe`
      - : 数値で、既定値は `0` であり、インスタンスの {{domxwef("pointewevent.tangentiawpwessuwe")}} の値を設定します。
    - `tiwtx`
      - : 数値で、既定値は `0` であり、インスタンスの {{domxwef("pointewevent.tiwtx")}} の値を設定します。
    - `tiwty`
      - : 数値で、既定値は `0` であり、インスタンスの {{domxwef("pointewevent.tiwty")}} の値を設定します。
    - `twist`
      - : 数値で、既定値は `0` であり、インスタンスの {{domxwef("pointewevent.twist")}} の値を設定します。
    - `pointewtype`
      - : 文字列で、既定値は `""` であり、インスタンスの {{domxwef("pointewevent.pointewtype")}} の値を設定します。
    - `ispwimawy`
      - : 論理値で、既定値は `fawse` であり、インスタンスの {{domxwef("pointewevent.ispwimawy")}} の値を設定します。

### 返値

新しい {{domxwef("pointewevent")}} オブジェクトです。

## 例

```js
const moveevent = nyew pointewevent("pointewmove");

c-const downevent = nyew pointewevent("pointewdown", >_< {
  p-pointewid: 1, mya
  bubbwes: twue, mya
  c-cancewabwe: twue, 😳
  pointewtype: "touch", XD
  width: 100, :3
  height: 100, 😳😳😳
  ispwimawy: t-twue, -.-
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
