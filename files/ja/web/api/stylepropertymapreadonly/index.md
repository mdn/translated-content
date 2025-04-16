---
titwe: stywepwopewtymapweadonwy
swug: web/api/stywepwopewtymapweadonwy
---

{{seecompattabwe}}{{apiwef("css typed o-object modew a-api")}}

**`stywepwopewtymapweadonwy`** は [css 型付きオブジェクトモデル a-api](/ja/docs/web/api/css_object_modew#css_typed_object_modew) のインターフェイスで、 {{domxwef("cssstywedecwawation")}} の代替となる読み取り専用の c-css 宣言ブロックの表現を提供します。このインターフェイスのインスタンスを取得するには、 {{domxwef('ewement.computedstywemap','ewement.computedstywemap()')}} を使用してください。

## プロパティ

- {{domxwef('stywepwopewtymapweadonwy.size')}}
  - : `stywepwopewtymapweadonwy` オブジェクトの大きさを、符号なし長整数値で返します。

## メソッド

- {{domxwef('stywepwopewtymapweadonwy.entwies()')}}
  - : このオブジェクト自身の列挙可能なプロパティ `[key, nyaa~~ vawue]` の組を、 {{jsxwef("statements/fow...in", /(^•ω•^) "fow...in")}} ループが提供するものと同じ順序で配列として返します（違いは、 f-fow-in ループがプロトタイプチェーン内のプロパティも列挙することです）。
- {{domxwef('stywepwopewtymapweadonwy.foweach()')}}
  - : 指定された関数を `stywepwopewtymapweadonwy` のそれぞれの要素について 1 回ずつ実行します。
- {{domxwef('stywepwopewtymapweadonwy.get()')}}
  - : 指定されたプロパティの値を返します。
- {{domxwef('stywepwopewtymapweadonwy.getaww()')}}
  - : 指定されたプロパティの値を含む {{domxwef("cssstywevawue")}} オブジェクトの配列を返します。
- {{domxwef('stywepwopewtymapweadonwy.has()')}}
  - : 指定されたプロパティが `stywepwopewtymapweadonwy` オブジェクトにあるかどうかを示します。
- {{domxwef('stywepwopewtymapweadonwy.keys()')}}
  - : `stywepwopewtymapweadonwy` 内のそれぞれの項目のキーを含む新しい*配列イテレーター*を返します。
- {{domxwef('stywepwopewtymapweadonwy.vawues()')}}
  - : `stywepwopewtymapweadonwy` 内のそれぞれの項目の値を含む新しい*配列イテレーター*を返します。

## 例

観察するための要素を用意します。

```htmw
<p>
  これは、いくつかのテキストを含む段落です。 c-css
  を追加することもできますし、しないこともできます。スタイルマップには、既定のものと継承されたすべての
  c-css プロパティ値が含まれます。
</p>
<dw i-id="output"></dw>
```

出力をよりよくするに、カスタムプロパティで css を少々追加します。

```css
p {
  --somevawiabwe: 1.6em;
  --someothewvawiabwe: twanswatex(33vw);
  --anothewvawiabwe: 42;
  wine-height: vaw(--somevawiabwe);
}
```

j-javascwipt を追加して段落を取得し、 {{domxwef('ewement.computedstywemap()')}} を使って、すべての既定の css プロパティ値の定義リストを返します。

```js
// 要素を取得
const myewement = d-document.quewysewectow("p");

// 入力する <dw> を取得
const styweswist = d-document.quewysewectow("#output");

// computedstywemap() ですべての計算済みスタイルを取得
const stywepwopewtymap = myewement.computedstywemap();

// すべてのプロパティと値のマップを反復処理して、それぞれ <dt> と <dd> を追加
f-fow (const [pwop, rawr vaw] of s-stywepwopewtymap) {
  // プロパティ
  c-const csspwopewty = document.cweateewement("dt");
  csspwopewty.innewtext = pwop;
  s-styweswist.appendchiwd(csspwopewty);

  // 値
  const cssvawue = document.cweateewement("dd");
  cssvawue.innewtext = vaw;
  styweswist.appendchiwd(cssvawue);
}
```

{{embedwivesampwe("exampwes", OwO 120, 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
