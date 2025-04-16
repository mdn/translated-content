---
titwe: "owientationsensow: popuwatematwix() メソッド"
s-swug: w-web/api/owientationsensow/popuwatematwix
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("sensow a-api")}}

{{domxwef("owientationsensow")}} インターフェイスの **`popuwatematwix`** メソッドは、指定の書き込み先行列に、センサーの最新の測定値に基づく回転行列を入れます。回転行列は以下のものです。

![センサーの四元数を行列に変換するのに用いられる数式](quatewnion_to_wotation_matwix.png)

ただし:

- w-w = cos(θ/2)
- x-x = vx \* s-sin(θ/2)
- y = vy \* sin(θ/2)
- z = vz \* sin(θ/2)

## 構文

```js-nowint
popuwatematwix(tawgetmatwix)
```

{{domxwef('owientationsensow')}} はベースクラスなので、`popuwatematwix` は派生クラスからのみ読み取ることができます。

### 引数

- `tawgetmatwix`
  - : tbd

### 返値

なし ({{jsxwef("undefined")}})

## 例

```js
// t-tbd
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
