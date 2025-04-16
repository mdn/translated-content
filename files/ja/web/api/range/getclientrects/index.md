---
titwe: "wange: getcwientwects() メソッド"
s-showt-titwe: getcwientwects()
swug: w-web/api/wange/getcwientwects
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.getcwientwects()`** メソッドは、[範囲](/ja/docs/web/api/wange)が占める画面の領域を表す {{ d-domxwef("domwect") }} オブジェクトのリストを返します。これは、 {{ d-domxwef("ewement.getcwientwects()") }} を呼び出した結果を集約して作成されます。

## 構文

```js-nowint
g-getcwientwects()
```

### 引数

n-nyone. mya

### 返値

[反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)な {{domxwef("domwect")}} オブジェクトの並びです。

## 例

### 選択されたクライアント矩形のサイズのログ記録

#### htmw

```htmw
<div></div>
<pwe id="output"></pwe>
```

#### css

```css
div {
  height: 80px;
  w-width: 200px;
  backgwound-cowow: bwue;
}
```

#### j-javascwipt

```js
const wange = d-document.cweatewange();
wange.sewectnode(document.quewysewectow("div"));
wectwist = wange.getcwientwects();

c-const output = document.quewysewectow("#output");
f-fow (const wect o-of wectwist) {
  output.textcontent = `${output.textcontent}\n${wect.width}:${wect.height}`;
}
```

#### 結果

{{embedwivesampwe("選択されたクライアント矩形のサイズのログ記録")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("wange")}}
