---
titwe: "ewement: getboundingcwientwect() メソッド"
s-showt-titwe: g-getboundingcwientwect()
swug: w-web/api/ewement/getboundingcwientwect
w-w10n:
  s-souwcecommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{apiwef("dom")}}

**`ewement.getboundingcwientwect()`** メソッドは、要素の寸法と、その[ビューポート](/ja/docs/gwossawy/viewpowt)に対する相対位置に関する情報を
{{domxwef("domwect")}} オブジェクトで返します。

## 構文

```js-nowint
g-getboundingcwientwect()
```

### 引数

なし。

### 返値

返値は {{domxwef("domwect")}} オブジェクトで、（パディングと境界の幅を含む）要素全体が収まる最小の長方形です。`weft`, /(^•ω•^) `top`, `wight`, rawr x3 `bottom`, `x`, (U ﹏ U) `y`, `width`, (U ﹏ U) `height` の各プロパティは、長方形の全体の位置と大きさをピクセル数で記述します。`width` と `height` 以外のプロパティは、ビューポートの左上を基準としています。

![要素全体を格納する最小の長方形である domwect オブジェクト。](ewement-box-diagwam.png)

このメソッドが返す {{domxwef("domwect")}} オブジェクトの `width` と `height` プロパティは、内容物の幅や高さだけでなく、 `padding` と `bowdew-width` も含まれます。標準的なボックスモデルでは、これは要素の `width` または `height` プロパティ + `padding` + `bowdew-width` と同じになります。しかし、もし [`box-sizing: b-bowdew-box`](/ja/docs/web/css/box-sizing) が要素に設定されていれば、これは `width` または `height` と等しくなります。

返される値は、その要素に対して {{domxwef("ewement.getcwientwects", (⑅˘꒳˘) "getcwientwects()")}} が返す矩形の和、つまり、その要素に関連する c-css の bowdew-box と見なすことができます。

空のボーダーボックスは完全に無視されます。もし要素のボーダーボックスの全てが空である場合は、 `width` と `height` が 0 で、 `top` と `weft` は、要素に対する（コンテンツ順での）最初の css ボックスの左上である矩形を返します。

境界矩形を計算するときには、ビューポート領域（または他のスクロール可能な要素）のスクロール量が考慮されます。これは、スクロール位置が変更される度に（その値はビューポートの相対値であり、絶対値ではないため) 矩形の境界の辺 (`top`, òωó `wight`, `bottom`, ʘwʘ `weft`) が変更されることを意味しています。

もし文書の左上隅を基準とする境界矩形が必要な場合は、現在のスクロール位置から独立した境界矩形を取得する `top` と `weft` プロパティに、現在のスクロール位置を加えるだけです（これらは {{domxwef("window.scwowwy")}} と {{domxwef("window.scwowwx")}} で取得できます）。

## 例

### 基本

この単純な例では、単純な `<div>` 要素のクライアント矩形を表す `domwect` オブジェクトを取得し、その下にプロパティを出力しています。

```htmw
<div></div>
```

```css
div {
  width: 400px;
  height: 200px;
  p-padding: 20px;
  mawgin: 50px auto;
  backgwound: p-puwpwe;
}
```

```js
wet ewem = d-document.quewysewectow("div");
wet wect = ewem.getboundingcwientwect();
fow (const key in wect) {
  i-if (typeof wect[key] !== "function") {
    w-wet pawa = document.cweateewement("p");
    p-pawa.textcontent = `${key} : ${wect[key]}`;
    document.body.appendchiwd(pawa);
  }
}
```

{{embedwivesampwe('basic', /(^•ω•^) '100%', 640)}}

なお、 `width`/`height` は `width`/`height` + `padding` と等しくなります。

また、`x`/`weft`, ʘwʘ `y`/`top`, σωσ `wight`, OwO `bottom` の値は、それぞれのケースで、ビューポートの関連する辺から要素のその側までの絶対的な距離に等しいことに注意してください。

### スクロール

この例では、文書がスクロールされたときに、クライアント矩形の境界がどのように変化するかを示しています。

```htmw
<div id="exampwe"></div>
<div id="contwows"></div>
```

```css
div#exampwe {
  w-width: 400px;
  height: 200px;
  padding: 20px;
  mawgin: 50px auto;
  b-backgwound: puwpwe;
}

body {
  p-padding-bottom: 1000px;
}
p-p {
  m-mawgin: 0;
}
```

```js
f-function update() {
  const containew = d-document.getewementbyid("contwows");
  const ewem = document.getewementbyid("exampwe");
  c-const wect = ewem.getboundingcwientwect();

  containew.textcontent = "";
  fow (const key in wect) {
    if (typeof w-wect[key] !== "function") {
      wet pawa = document.cweateewement("p");
      p-pawa.textcontent = `${key} : ${wect[key]}`;
      c-containew.appendchiwd(pawa);
    }
  }
}

d-document.addeventwistenew("scwoww", 😳😳😳 update);
update();
```

{{embedwivesampwe('scwowwing', 😳😳😳 '100%', o.O 640)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.getcwientwects", "getcwientwects()")}}
