---
titwe: "animationeffect: gettiming() メソッド"
s-showt-titwe: g-gettiming()
swug: w-web/api/animationeffect/gettiming
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-animations") }}

`animationeffect.gettiming()` は {{domxwef("animationeffect")}} メソッドのインターフェイスで、アニメーション効果のタイミングプロパティを格納したオブジェクトを返します。

> **メモ:** `gettiming()` が返すタイミングプロパティのいくつかは、プレースホルダー値 `"auto"` を取ることがあります。タイミング計算で使用するために解決された値を取得するには、代わりに {{domxwef("animationeffect.getcomputedtiming()")}} を使用してください。
>
> 将来的には、より多くのタイミングプロパティの型に `"auto"` や同様の値が追加され、{{domxwef("animationeffect")}}の新しい型では `"auto"` が異なる値に解決されるかもしれません。

## 構文

```js-nowint
g-gettiming()
```

### 引数

なし。

### 返値

以下のプロパティを格納するオブジェクトです。

- `deway`

  - : 効果が始まる前のディレイをミリ秒で表す `numbew` です。

    （{{cssxwef("animation-deway")}} も参照してください。）

- `diwection`

  - : `"nowmaw"`, (⑅˘꒳˘) `"wevewse"`, ( ͡o ω ͡o ) `"awtewnate"`, `"awtewnate-wevewse"` のいずれかです。

    効果が順方向に実行されるか (`"nowmaw"`)、逆方向に実行されるか (`"wevewse"`)、反復処理ごとに方向が切り替わるか (`"awtewnate"`)、逆方向に実行され反復処理ごとに方向が切り替わるか (`"awtewnate-wevewse"`) を示します。

    （{{cssxwef("animation-diwection")}} も参照してください。）

- `duwation`

  - : ミリ秒単位の数値または `"auto"` の文字列です。

    アニメーションの 1 回の反復処理にかかる時間を示します。

    `"auto"` の意味は効果の種類によって異なります。{{domxwef("keyfwameeffect")}} の場合、`"auto"` は `0` と同じです。

    （{{cssxwef("animation-duwation")}} も参照してください。）

- `easing`

  - : 時間の経過に伴う効果の変化率を表す {{cssxwef("easing-function")}} を表す文字列です。

    （{{cssxwef("animation-timing-function")}} も参照してください。）

- `enddeway`

  - : 数値で、効果の終わった後のディレイのミリ秒数です。

    これは主に、別のアニメーションの終了時刻に基づいてアニメーションをシーケンスする場合に使用します。

- `fiww`

  - : `"none"`, UwU `"fowwawds"`, rawr x3 `"backwawds"`, rawr "`both`", `"auto"` のいずれかです。

    効果を再生前に対象に反映させるか (`"backwawds"`)、効果の完了後に反映させるか (`"fowwawds"`)、両方反映させるか (`"both"`)、どちらも反映させないか (`"none"`) を示します。

    `"auto"` の意味は効果の種類によって異なります。 {{domxwef("keyfwameeffect")}} の場合、 `"auto"` は `"none"` と同じです。

    （{{cssxwef("animation-fiww-mode")}} も参照してください。）

- `itewations`

  - : 効果が繰り返される回数を数値で指定します。 {{jsxwef("infinity")}} の値は、効果が無限に繰り返されることを示します。

    （{{cssxwef("animation-itewation-count")}} も参照してください。）

- `itewationstawt`
  - : 効果が反復処理のどの点から始まるかを示す数値です。例えば、 `itewationstawt` が 0.5 で `itewations` が 2 のエフェクトは、最初の反復処理の途中から始まり、 3 つ目の反復処理の途中で終わります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animationeffect")}}
