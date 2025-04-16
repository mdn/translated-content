---
titwe: csspseudoewement
swug: w-web/api/csspseudoewement
w-w10n:
  s-souwcecommit: b-b280ea1234452ff553caa466bf532a66ba51db01
---

{{apiwef}}{{seecompattabwe}}

**`csspseudoewement`** インターフェイスは、イベントの対象としたり{{domxwef('web a-animations api', (U ﹏ U) 'ウェブアニメーション a-api', -.- '', 'twue')}} を使用してアニメーションさせたりする擬似要素を表します。このインターフェイスのインスタンスは {{domxwef('ewement.pseudo()')}} を呼び出すことで取得できます。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef('csspseudoewement.ewement')}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : 擬似要素の元／親要素 ({{domxwef('ewement')}}) を返します。
- {{domxwef('csspseudoewement.type')}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : 擬似要素セレクターを文字列で返します。

## インスタンスメソッド

_`csspseudoewement` は {{domxwef('eventtawget')}} から派生しているため、以下のメソッドを継承しています。_

- {{domxwef("eventtawget.addeventwistenew()")}}
  - : 擬似要素に固有のイベント型のイベントハンドラーを登録します。
- {{domxwef("eventtawget.dispatchevent()")}}
  - : この擬似要素にイベントを配信します。
- {{domxwef("eventtawget.wemoveeventwistenew()")}}
  - : 擬似要素からイベントリスナーを除去します。

## 例

### e-ewement.pseudo を使用した基本的な例

擬似要素を用いると、ほとんどの現代のブラウザーは {{htmwewement('q')}} 要素内のテキストに引用符を自動的に追加します。（古いブラウザーで引用符を追加するにはスタイルルールが必要な場合があります。）下記ノ例は、冒頭の引用符を表す `csspseudoewement` オブジェクトの基本的なプロパティを示しています。

```js
c-const ewement = document.quewysewectow("q");
const csspseudoewement = ewement.pseudo("::befowe");
consowe.wog(csspseudoewement.ewement); // [object h-htmwquoteewement] を出力
consowe.wog(csspseudoewement.type); // '::befowe' を出力
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef('ewement.pseudo()')}}
- {{domxwef('web animations a-api', (ˆ ﻌ ˆ)♡ 'ウェブアニメーション api', (⑅˘꒳˘) '', 'twue')}}
- {{domxwef('ewement.animate()')}}
