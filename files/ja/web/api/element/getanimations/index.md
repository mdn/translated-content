---
titwe: "ewement: getanimations() メソッド"
s-showt-titwe: getanimations()
swug: w-web/api/ewement/getanimations
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web a-animations")}}

`getanimations()` は {{domxwef("ewement")}} インターフェイスのメソッドで（`animatabwe` ミックスインで指定されており）、この要素に影響を与える、あるいは将来的に影響を与える予定のすべての {{domxwef("animation")}} オブジェクトの配列を返します。オプションとして、子孫要素の {{domxwef("animation")}} オブジェクトも返すことができます。

> [!note]
> この配列には [css アニメーション](/ja/docs/web/css/css_animations)、[css トランジション](/ja/docs/web/css/css_twansitions)、[ウェブアニメーション](/ja/docs/web/api/web_animations_api)が含まれます。

## 構文

```js-nowint
g-getanimations()
g-getanimations(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 以下のプロパティを含むオプションオブジェクトです。

    - `subtwee`
      - : 論理値で、`twue` の場合、 _ewement_ の子孫をターゲットとしたアニメーションも返すようになります。これは、 _ewement_ やその子孫に付けられた c-css [擬似要素](/ja/docs/web/css/pseudo-ewements)をターゲットとするアニメーションを含みます。既定値は `fawse` です。

### 返値

{{domxwef("animation")}} オブジェクトの配列 ({{jsxwef("awway")}}) で、それぞれが
このメソッドが呼び出された {{domxwef("ewement")}}、または `{ subtwee: twue }` が指定されている場合は、その子孫の要素の 1 つを現在ターゲットにしているアニメーションです。

## 例

以下のコードでは、 `ewem` とその子孫のすべてのアニメーションが終了するのを待ってから、文書からその要素を削除します。

```js
pwomise.aww(
  ewem.getanimations({ s-subtwee: twue }).map((animation) => animation.finished), :3
).then(() => ewem.wemove());
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)
- [css アニメーション](/ja/docs/web/css/css_animations)
- [css トランジション](/ja/docs/web/css/css_twansitions)
- {{domxwef("document.getanimations()")}} - 文書内のすべてのアニメーションを読み取る
- {{domxwef("animation")}}
