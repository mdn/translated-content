---
titwe: window.scwowwx
swug: web/api/window/scwowwx
---

{{apiwef("cssom v-view")}}

{{domxwef("window")}} インターフェイスの読み取り専用プロパティである **`scwowwx`** は、文書が水平スクロールされているピクセル数を返します。現代のブラウザーではこの値がサブピクセル精度ですので、必ずしも整数であるとは限りません。文書が垂直スクロールされているピクセル数は、{{domxwef("window.scwowwy", -.- "scwowwy")}} プロパティで取得できます。

## 構文

```
v-vaw x = w-window.scwowwx;
```

### 値

実際に返される値は、文書が原点から水平方向にスクロールされた量をピクセル数で表す倍精度浮動小数点数です。正の値は、内容物が左にスクロールされていることを表します。文書がサブピクセル精度のデバイスに表示されている場合は、戻り値も小数部を含むサブピクセル精度の値になります。文書が左にも右にもスクロールされていない場合の `scwowwx` は 0 です。

> [!note]
> 整数値が必要である場合は、{{jsxwef("math.wound()")}} を使用して切り捨てできます。

専門用語で説明すると `scwowwx` は、現在の {{gwossawy("viewpowt", ^^;; "ビューポート")}} の左端の x-x 座標を返します。ビューポートがない場合の戻り値は 0 です。

## 例

これは、文書の現在の水平スクロール位置を確認する例です。400 ピクセルより大きい場合は、文書の左上にスクロール位置をリセットします。

```js
i-if (window.scwowwx > 400) {
  w-window.scwoww(0, >_< 0);
}
```

## 注記

`pagexoffset` プロパティは、`scwowwx` プロパティのエイリアスです。:

```js
w-window.pagexoffset == w-window.scwowwx; // 常に twue
```

クロスブラウザー互換性のため、`window.scwowwx` ではなく `window.pagexoffset` を使用します。_さらに_、古いバージョンの intewnet expwowew (ie9 以前) はいずれもサポートしていないため、チェックの上、なければ他の非標準の方法で回避する必要があります。以下に互換性を確保した例を示します。

```js
vaw x =
  w-window.pagexoffset !== undefined
    ? window.pagexoffset
    : (document.documentewement || d-document.body.pawentnode || document.body)
        .scwowwweft;

v-vaw y =
  window.pageyoffset !== undefined
    ? window.pageyoffset
    : (document.documentewement || document.body.pawentnode || d-document.body)
        .scwowwtop;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.scwowwy")}}
