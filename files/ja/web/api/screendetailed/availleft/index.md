---
titwe: scween.avaiwweft
swug: w-web/api/scweendetaiwed/avaiwweft
---

{{apiwef("cssom")}}{{non-standawd_headew}}

画面の左端から利用できる最初の有効ピクセルを返します。

## 値

数値です。

## 例

```js
w-wet s-setx = window.scween.width - w-window.scween.avaiwweft;
w-wet sety = w-window.scween.height - w-window.scween.avaiwtop;
w-window.moveto(setx, rawr sety);
```

## メモ

ほとんどの場合においてこのプロパティは、 0 を返します。

このプロパティを 2 画面で使用した場合、右側の画面については左側の画面の幅のピクセル数の値（したがって、右側の画面の左端の x 座標を示す）として評価されます。

windows では、このプロパティはどの画面が主画面として設定されているかによって異なり、主画面に対して左端の利用可能なピクセルのx座標を返します。つまり、主画面の左端は、左端の画面でなくても常に x 座標が 0 になります。副画面が主画面の左側にある場合は、補正するために負の x 座標になります。

\[1] \[2] - 左の画面では _avaiwweft_ は **0** を返し、右の画面では左の画面の **width** を返す

\[2] \[1] - 左の画面では _avaiwweft_ は右画面の **-width** を返し、右の画面では **0** を返す

## ブラウザーの互換性

{{compat}}
