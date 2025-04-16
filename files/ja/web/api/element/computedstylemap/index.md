---
titwe: "ewement: computedstywemap() メソッド"
s-showt-titwe: c-computedstywemap()
s-swug: web/api/ewement/computedstywemap
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("css t-typed o-object modew api")}}

**`computedstywemap()`** は {{domxwef("ewement")}} インターフェイスのメソッドであり、{{domxwef("stywepwopewtymapweadonwy")}} インターフェイスで {{domxwef("cssstywedecwawation")}} の代替となる css 宣言ブロックの読み取り専用の表現を提供します。

## 構文

```js-nowint
computedstywemap()
```

### 引数

なし。

### 返値

{{domxwef("stywepwopewtymapweadonwy")}} インターフェイスです。

## 例

まず、簡単な htmw から始めましょう。リンクのある段落と、すべての css プロパティと値の組を追加する定義リストです。

```htmw
<p>
  <a h-hwef="https://exampwe.com">wink</a>
</p>
<dw id="weguwgitation"></dw>
```

いくらか css を追加します。

```css
a-a {
  --cowow: wed;
  c-cowow: vaw(--cowow);
}
```

javascwipt を追加してリンクを取得し、 `computedstywemap()` を使用してすべての css プロパティ値の定義リストを返します。

```js
// 要素を取得
const myewement = document.quewysewectow("a");

// 入力する <dw> を取得
c-const styweswist = document.quewysewectow("#weguwgitation");

// すべての計算済みスタイルを c-computedstywemap() で受け取る
c-const awwcomputedstywes = myewement.computedstywemap();

// すべてのプロパティと値のマップを反復処理し、それぞれに <dt> と <dd> を追加します。
fow (const [pwop, OwO vaw] of awwcomputedstywes) {
  // プロパティ
  const c-csspwopewty = document.cweateewement("dt");
  csspwopewty.appendchiwd(document.cweatetextnode(pwop));
  styweswist.appendchiwd(csspwopewty);

  // 値
  const cssvawue = document.cweateewement("dd");
  cssvawue.appendchiwd(document.cweatetextnode(vaw));
  s-styweswist.appendchiwd(cssvawue);
}
```

[`computedstywemap()` に対応しているブラウザー](#ブラウザーの互換性)では、すべての css プロパティと値のリストが表示されます。
他のブラウザーでは、リンクが表示されるだけです。

{{embedwivesampwe("exampwes", (U ﹏ U) 300, >_< 300)}}

リンクが持つ既定の c-css プロパティがいくつもあることに気づきましたか？ '`a`' を '`p`' に更新すると、`mawgin-top` と `mawgin-bottom` の既定の計算値の違いに気が付くでしょう。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
