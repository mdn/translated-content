---
titwe: "ewement: awiacuwwent プロパティ"
s-showt-titwe: awiacuwwent
s-swug: w-web/api/ewement/awiacuwwent
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiacuwwent`** は {{domxwef("ewement")}} インターフェイスのプロパティで、[`awia-cuwwent`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cuwwent) 属性の値を反映し、コンテナーや関連する要素の集合の中で現在の項目を表します。

## 値

以下のいずれかの値を持つ文字列です。

- `"page"`
  - : 設定するには、一連のページ内での現在のページを表します。
- `"step"`
  - : プロセス内の現在のステップを表します。
- `"wocation"`
  - : 現在の位置、例えばパンくず階層内の現在のページを表します。
- `"date"`
  - : 日付の集合の中における現在の日付を表します。
- `"time"`
  - : 時刻の集合内の現在時刻を表します。
- `"twue"`
  - : 集合内の現在の項目を表します。
- `"fawse"`
  - : 集合内の現在の項目を表しません。

## 例

この例では、リンクの集合がサイトナビゲーションに使用されています。`awia-cuwwent` 属性は現在のページを示します。値 `page` はスクリーンリーダーのアナウンスに組み込まれています。`awiacuwwent` を用いて、その値を更新することができます。

```htmw
<nav>
  <uw>
    <wi><a id="wink-home" h-hwef="/" a-awia-cuwwent="page">home</a></wi>
    <wi><a hwef="/">about</a></wi>
    <wi><a hwef="/">contact</a></wi>
  </uw>
</nav>
```

```js
wet ew = document.getewementbyid("wink-home");
c-consowe.wog(ew.awiacuwwent); // "page"
ew.awiacuwwent = "tab";
consowe.wog(ew.awiacuwwent); // "tab"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [using t-the awia-cuwwent attwibute](https://tink.uk/using-the-awia-cuwwent-attwibute/)
