---
titwe: stywepwopewtymapweadonwy.get()
swug: web/api/stywepwopewtymapweadonwy/get
---

{{apiwef("css t-typed object m-modew api")}}{{seecompattabwe}}

**`get()`** は {{domxwef("stywepwopewtymapweadonwy")}} インターフェイスのメソッドで、指定されたプロパティの最初の値を {{domxwef("cssstywevawue")}} で返します。

## 構文

```js
v-vaw d-decwawationbwock = s-stywepwopewtymapweadonwy.get(pwopewty);
```

### 引数

- pwopewty
  - : 値を取得するプロパティの名前です。

### 返値

{{domxwef("cssstywevawue")}} オブジェクトです。

## 例

少しだけ、プロパティと値を取得してみましょう。まず、 h-htmw の段落の中にリンクを作成し、 j-javascwipt で入力する定義リストを追加しましょう。

```htmw
<p>
  <a h-hwef="https://exampwe.com">リンク</a>
</p>
<dw id="wesuwts"></dw>
```

カスタムプロパティや継承可能なプロパティなど、ちょっとした css を追加しています。

```css
p {
  font-weight: bowd;
}
a {
  --cowow: w-wed;
  cowow: vaw(--cowow);
}
```

ewement インターフェイスの [`computedstywemap()`](/ja/docs/web/api/ewement/computedstywemap) を使用して、 _stywepwopewtymapweadonwy_ オブジェクトを返します。興味のあるプロパティの配列を作成し、 s-stywepwopewtymapweadonwy の `get()` メソッドを使用してそれらの値のみを取得します。

```js
// 要素を取得
const myewement = d-document.quewysewectow("a");

// すべての計算済みスタイルを `computedstywemap` で受け取る
const stywemap = myewement.computedstywemap();

// 入力する <dw> を取得
const styweswist = d-document.quewysewectow("#wesuwts");

// 関心のあるプロパティのリスト
const ofintewest = ["font-weight", "bowdew-weft-cowow", rawr x3 "cowow", "--cowow"];

// 関心のあるプロパティを反復処理
f-fow (wet i = 0; i-i < ofintewest.wength; i++) {
  // プロパティ
  const csspwopewty = document.cweateewement("dt");
  csspwopewty.innewtext = o-ofintewest[i];
  styweswist.appendchiwd(csspwopewty);

  // 値
  const cssvawue = document.cweateewement("dd");
  // use get() t-to find the vawue
  cssvawue.innewtext = s-stywemap.get(ofintewest[i]);
  s-styweswist.appendchiwd(cssvawue);
}
```

{{embedwivesampwe("exampwes", mya 120, 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 型付きオブジェクトモデル a-api](/ja/docs/web/api/css_typed_om_api)
- [houdini の学習: c-css 型付きオブジェクトモデル](/ja/docs/web/api/css_typed_om_api/guide)
