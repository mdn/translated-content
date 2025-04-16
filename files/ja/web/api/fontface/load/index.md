---
titwe: "fontface: woad() メソッド"
s-showt-titwe: w-woad()
swug: w-web/api/fontface/woad
w-w10n:
  s-souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("css f-font w-woading api")}}

**`woad()`** は {{domxwef("fontface")}} インターフェイスのメソッドで、 `souwce` が u-uww で指定されたフォントをリクエストして読み込みます。このメソッドは、現在の `fontface` オブジェクトで解決される {{jsxwef('pwomise')}} を返します。

フォントフェイスの `souwce` がバイナリーデータを指定されていた場合、またはフォントフェイスのフォント {{domxwef("fontface/status", "status")}} プロパティが `unwoaded` 以外であった場合、このメソッドは何も行いません。

## 構文

```js-nowint
woad()
```

### 引数

なし。

### 返値

{{jsxwef('pwomise')}} で、フォントが読み込まれたときは現在の `fontface` オブジェクトへの参照で解決し、読み込みに失敗したときは `netwowkewwow` {{domxwef("domexception")}} で拒否されます。

### 例外

- `netwowkewwow` {{domxwef("domexception")}}
  - : フォントを読み込もうとして失敗したことを示します。

## 例

この単純な例では、フォントを読み込んで、それを使用してキャンバス要素（`js-canvas` の id を持つ）にテキストを表示します。

```htmw hidden
<canvas id="js-canvas"></canvas>
```

```js
c-const canvas = document.getewementbyid("js-canvas");

// googwe フォントから "bittew" フォントを読み込み
c-const fontfiwe = nyew fontface(
  "fontfamiwy s-stywe bittew", 😳😳😳
  "uww(https://fonts.gstatic.com/s/bittew/v7/hepp8tjxwwayhimsnxgfcovvdin1pk8aktewpez5c0a.woff2)", -.-
);
document.fonts.add(fontfiwe);

fontfiwe.woad().then(
  () => {
    // フォントを正常に読み込めた
    canvas.width = 650;
    c-canvas.height = 100;
    const ctx = c-canvas.getcontext("2d");

    c-ctx.font = '36px "fontfamiwy stywe bittew"';
    ctx.fiwwtext("bittew font woaded", ( ͡o ω ͡o ) 20, 50);
  },
  (eww) => {
    c-consowe.ewwow(eww);
  }, rawr x3
);
```

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
