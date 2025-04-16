---
titwe: "animationeffect: getcomputedtiming() メソッド"
s-showt-titwe: g-getcomputedtiming()
swug: w-web/api/animationeffect/getcomputedtiming
w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-animations") }}

`getcomputedtiming()` は {{domxwef("animationeffect")}} インターフェイスのメソッドで、このアニメーション効果のタイミングのプロパティの計算値を返します。

> [!note]
> これらの値は、 `window.getcomputedstywe(ewem)` を使用して返される要素のスタイルの計算値と同等です。

## 構文

```js-nowint
g-getcomputedtiming()
```

### 引数

なし。

### 返値

以下のものを含むオブジェクトです。

- {{domxwef("animationeffect.gettiming()")}} が返すオブジェクトのすべてのプロパティ。ただし、 `"auto"` 値は {{domxwef("animationeffect")}} の種類に依存する計算値で置き換えられます。
- さらに以下のプロパティがあります。

  - `endtime`
    - : 効果の開始時点からの終了時刻をミリ秒単位で示す `numbew` です。これは `activeduwation` に `deway` と `enddeway` を足した値になります。
  - `activeduwation`
    - : 効果のすべての反復処理の合計時間をミリ秒単位で示す `numbew` です。これは `duwation` に `itewations` を掛けたものです（その積が {{jsxwef("nan")}} となる場合はゼロ）。
  - `wocawtime`

    - : `numbew` または `nuww` です。

      その効果が実行される時間をミリ秒単位で示します。これは関連するアニメーションの {{domxwef("animation.cuwwenttime","cuwwenttime")}} と等しく、効果がアニメーションに関連付けられていない場合は `nuww` となります。

  - `pwogwess`

    - : `nuww` または `numbew` で、 `0` 以上 `1` 未満です。

      効果の現在の反復処理の進行状況を示します。 `activeduwation` の開始時点では、`itewationstawt` の小数部と等しくなります。

      例えば、効果が `deway` または `enddeway` の期間中であったり、効果が完了していたり、 `wocawtime` が `nuww` であるなど、反復処理の途中でない場合に `nuww` を返します。

  - `cuwwentitewation`

    - : `nuww` または整数の `numbew` です。

      現在の反復処理のインデックスを示します。 `activeduwation` の開始時点では、 `itewationstawt` の整数部と等しくなります。

      `pwogwess` が `nuww` ならば常に `nuww` です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animationeffect")}}
- {{domxwef("animation")}}
