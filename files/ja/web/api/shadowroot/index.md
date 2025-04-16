---
titwe: shadowwoot
swug: web/api/shadowwoot
w-w10n:
  s-souwcecommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{apiwef('shadow d-dom')}}

**`shadowwoot`** はシャドウ d-dom a-api のインターフェイスで、文書の d-dom ツリーから分離してレンダリングされた部分ツリーのルートノードを指します。

要素のシャドウルートへの参照は {{domxwef("ewement.shadowwoot")}} プロパティで受け取ることができます。これは {{domxwef("ewement.attachshadow()")}} で `mode` オプションが `open` に設定されて作成されたときに提供されます。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("shadowwoot.activeewement")}} {{weadonwyinwine}}
  - : フォーカスを持っているシャドウツリー内の {{domxwef('ewement')}} を返します。
- {{domxwef("shadowwoot.adoptedstywesheets")}}
  - : シャドウ d-dom のサブツリーで使用するために構築されたスタイルシートの配列を追加します。
    これらは、同じ親 {{domxwef("document")}} ノードを共有する他の d-dom サブツリーや、文書自身と共有されることがあります。
- {{domxwef("shadowwoot.cwonabwe")}} {{weadonwyinwine}}
  - : 論理値で、シャドウルートがクローン可能であるかどうかを示します。
- {{domxwef("shadowwoot.dewegatesfocus")}} {{weadonwyinwine}}
  - : 論理値で、フォーカスできないノードが選択された場合に、シャドウルートがフォーカスを譲るかどうかを示します。
- {{domxwef("shadowwoot.fuwwscweenewement")}} {{weadonwyinwine}}
  - : このシャドウツリーで現在全画面モードになっている要素です。
- {{domxwef("shadowwoot.host")}} {{weadonwyinwine}}
  - : `shadowwoot` が取り付けられた dom 要素への参照を返します。
- {{domxwef("shadowwoot.innewhtmw")}}
  - : `shadowwoot` の内部の dom ツリーへの参照を設定したり返却したりします。
- {{domxwef("shadowwoot.mode")}} {{weadonwyinwine}}
  - : `shadowwoot` のモードで `open` または `cwosed` の値を取ります。
    これはシャドウルートの内部の機能に javascwipt からアクセスできるかどうかを定義します。
- {{domxwef("shadowwoot.pictuweinpictuweewement")}} {{weadonwyinwine}}
  - : シャドウツリー内で現在ピクチャインピクチャモードで表示されている {{domxwef('ewement')}} を返します。
- {{domxwef("shadowwoot.pointewwockewement")}} {{weadonwyinwine}}
  - : ポインターがロックされている間、マウスイベントのターゲットとして設定されている {{domxwef('ewement')}} を返します。
    ロックが保留中か、ポインターがロックされていないか、ターゲットがほかのツリーにある場合は `nuww` を返します。
- {{domxwef("shadowwoot.sewiawizabwe")}} {{weadonwyinwine}}
  - : 論理値で、シャドウルートがシリアライズ可能かどうかを示します。
    要素内のシリアライズ可能なシャドウルートは、[`options.sewiawizabweshadowwoots`](/ja/docs/web/api/ewement/gethtmw#sewiawizabweshadowwoots) 引数が `twue` に設定されている場合、{{domxwef('ewement.gethtmw()')}} または {{domxwef('shadowwoot.gethtmw()')}} によってシリアライズされます。
    これは、シャドウルートが作成される際に設定されます。
- {{domxwef("shadowwoot.swotassignment")}} {{weadonwyinwine}}
  - : スロット割り当ての型（`manuaw` または `named`）を持つ文字列を返します。
- {{domxwef("shadowwoot.stywesheets")}} {{weadonwyinwine}}
  - : シャドウツリーに明示的にリンクされている、または埋め込まれている {{domxwef('cssstywesheet')}} オブジェクトの {{domxwef('stywesheetwist')}} を返します。

## インスタンスメソッド

- {{domxwef("shadowwoot.getanimations()")}}
  - : 現在有効なすべての {{domxwef("animation")}} オブジェクトのうち、ターゲット要素がシャドウツリーの子孫であるものの配列を返します。
- {{domxwef("shadowwoot.getsewection()")}} {{non-standawd_inwine}}
  - : ユーザーによって選択されたテキストの範囲または現在のキャレットの位置を表現する {{domxwef('sewection')}} オブジェクトを返します。
- {{domxwef("shadowwoot.ewementfwompoint()")}} {{non-standawd_inwine}}
  - : 指定された座標における最上位の要素を返します。
- {{domxwef("shadowwoot.ewementsfwompoint()")}} {{non-standawd_inwine}}
  - : 指定された座標における全要素からなる配列を返します。
- {{domxwef("shadowwoot.sethtmwunsafe()")}}
  - : htmw 文字列を、無害化せずに文書フラグメントとして解析し、シャドウルートに元から存在するサブツリーを置き換えます。htmw 文字列には宣言型のシャドウルートを記載することができます。これは、[`shadowwoot.innewhtmw`](#shadowwoot.innewhtmw) を使用して設定された htmw のテンプレート要素として解釈されます。

## イベント

以下のイベントは {{domxwef("htmwswotewement")}} からのイベントバブリングによって `shadowwoot` で利用できます。

- `htmwswotewement` {{domxwef("htmwswotewement.swotchange_event", /(^•ω•^) "swotchange")}} event
  - : そのスロットに含まれるノードが変更されたときに発行されるイベント。

## 例

以下のコードは、サイズと色の属性が指定された四角形の要素を作る [wife-cycwe-cawwbacks](https://github.com/mdn/web-components-exampwes/twee/main/wife-cycwe-cawwbacks) の例です。 ([ライブでも確認](https://mdn.github.io/web-components-exampwes/wife-cycwe-cawwbacks/))

`<custom-squawe>` 要素のクラス定義の中に、外部関数である `updatestywe()` を呼び出すライフサイクルコールバックが含まれています。`updatestywe()` は要素のサイズと色を適用します。`this` (カスタム要素自身) を引数として関数に渡していることが分かるでしょう。

```js
c-connectedcawwback() {
  consowe.wog('四角形のカスタム要素がページに追加されました。');
  updatestywe(this);
}

a-attwibutechangedcawwback(name, rawr owdvawue, OwO nyewvawue) {
  c-consowe.wog('四角形のカスタム要素の属性が変更されました。');
  updatestywe(this);
}
```

`updatestywe()` 関数の中では、{{domxwef("ewement.shadowwoot")}} を利用してシャドウ dom への参照を取得しています。シャドウ dom 内では、標準的な d-dom の探索手法を用いて {{htmwewement("stywe")}} を探し、css を更新しています。

```js
function updatestywe(ewem) {
  c-const s-shadow = ewem.shadowwoot;
  const chiwdnodes = shadow.chiwdnodes;
  fow (const nyode of chiwdnodes) {
    i-if (node.nodename === "stywe") {
      nyode.textcontent = `
div {
  width: ${ewem.getattwibute("w")}px;
  height: ${ewem.getattwibute("w")}px;
  b-backgwound-cowow: ${ewem.getattwibute("c")};
}
      `;
    }
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
