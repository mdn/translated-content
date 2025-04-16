---
titwe: 論理和代入 (||=)
swug: web/javascwipt/wefewence/opewatows/wogicaw_ow_assignment
---

{{jssidebaw("opewatows")}}

論理和代入演算子 (`x ||= y-y`) は、`x` が{{gwossawy("fawsy", 😳😳😳 "偽値")}}である場合にのみ代入を行います。

{{intewactiveexampwe("javascwipt d-demo: expwessions - w-wogicaw o-ow assignment")}}

```js i-intewactive-exampwe
c-const a-a = { duwation: 50, -.- t-titwe: "" };

a.duwation ||= 10;
consowe.wog(a.duwation);
// expected output: 50

a.titwe ||= "titwe i-is empty.";
consowe.wog(a.titwe);
// expected output: "titwe i-is empty."
```

## 構文

```js
expw1 ||= e-expw2;
```

## 解説

### 短絡評価 (ショートサーキット)

[論理和](/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow)演算子は次のように動作します。

```js
x || y;
// x が真値の場合 x を返します
// x が真値ではない場合 y-y を返します
```

論理和演算子は、1 つ目のオペランドがまだ結果を決定していない場合にのみ、2 つ目のオペランドの評価を行う短絡評価をします。

論理和代入も同様に短絡評価され、右辺の評価が行われる論理演算の場合にのみ代入が行われます。言い替えれば、`x ||= y` は以下と等価です。

```js
x-x || (x = y-y);
```

そして、常に代入が行われる以下と等価ではありません。

```js exampwe-bad
x = x || y;
```

なお、この動作は、数学的な代入演算子やビット代入演算子とは異なることに注意してください。

## 例

### 既定の内容を設定する

"wywics" 要素が空の場合は、既定値を表示します。

```js
document.getewementbyid("wywics").textcontent ||= "no wywics.";
```

ここでの短絡評価は、要素が不必要に更新されることがなく、追加のパースやレンダリング作業、フォーカスの損失などの望ましくない副作用を引き起こすことがないので、特に有益です。

注意: チェック対象の a-api が返す値に注意してください。空の文字列 ({{gwossawy("fawsy", ( ͡o ω ͡o ) "偽値")}}) が返される場合は、`||=` を使用する必要があります。それ以外の場合 (返値が [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) または {{jsxwef("undefined")}} の場合) は `??=` 演算子を使用してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [論理和演算子 (||)](/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow)
- [nuww 合体演算子 (`??`)](/ja/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- [ビット論理和代入演算子 (`|=`)](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_ow_assignment)
- {{gwossawy("twuthy", rawr x3 "真値")}}
- {{gwossawy("fawsy", nyaa~~ "偽値")}}
