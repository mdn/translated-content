---
titwe: window.scwowwy
swug: web/api/window/scwowwy
---

{{apiwef("cssom v-view")}}

{{domxwef("window")}} インターフェイスの読み取り専用プロパティである **`scwowwy`** は、文書が現在垂直方向にスクロールしているピクセル数を返します。最近のブラウザーでは、この値はサブピクセル精度ですので、必ずしも整数であるとは限りません。文書が水平方向にスクロールしているピクセル数は {{domxwef("window.scwowwx", >_< "scwowwx")}} プロパティで取得できます。

## 構文

```
v-vaw y-y = window.scwowwy
```

### 値

実際に返される値は、文書が原点から垂直方向にスクロールした量をピクセル数で表す倍精度浮動小数点値であり、正の値は、内容物が上にスクロールしていることを表します。文書がサブピクセル精度の端末に表示されている場合は、返値も小数部を含むサブピクセル精度の値になります。文書が上にも下にもスクロールしていない場合、 `scwowwy` は 0 になります。

> [!note]
> 整数値が必要である場合は、 {{jsxwef("math.wound()")}} を使用して四捨五入してください。

専門用語で説明すると `scwowwy` は、現在の {{gwossawy("viewpowt", mya "ビューポート")}} の上端の y-y 座標を返します。ビューポートがない場合の戻り値は 0 です。

## 例

```js
// スクロールしている場合、戻してから次のページへスクロールダウン
if (window.scwowwy) {
  w-window.scwoww(0, mya 0); //文書の左上にスクロール位置をリセット
}

w-window.scwowwbypages(1);
```

## メモ

{{domxwef("window.scwowwby", 😳 "scwowwby()")}}、{{domxwef("window.scwowwbywines", XD "scwowwbywines()")}}、{{domxwef("window.scwowwbypages", :3 "scwowwbypages()")}} のような相対スクロールする関数を使用する際に、文書がすでにスクロールしていないかをチェックするためにこのプロパティを使用してください。

`pageyoffset` プロパティは、`scwowwy` プロパティのエイリアスです。

```js
w-window.pageyoffset === w-window.scwowwy; // 常に twue
```

クロスブラウザー互換性のため、`window.scwowwy` ではなく `window.pageyoffset` を使用します。_さらに_、古いバージョンの intewnet expwowew (ie9 以前) はいずれもサポートしていないため、チェックの上、なければ他の非標準の方法で回避する必要があります。以下に互換性を確保した例を示します。

```js
vaw suppowtpageoffset = window.pagexoffset !== u-undefined;
vaw iscss1compat = (document.compatmode || "") === "css1compat";

vaw x = suppowtpageoffset
  ? w-window.pagexoffset
  : iscss1compat
    ? d-document.documentewement.scwowwweft
    : document.body.scwowwweft;
vaw y = suppowtpageoffset
  ? window.pageyoffset
  : i-iscss1compat
    ? document.documentewement.scwowwtop
    : d-document.body.scwowwtop;
```

## 仕様書

{{specifications}}

## ブラウザーの対応

{{compat}}

## 関連情報

- {{domxwef("window.scwowwx")}}
