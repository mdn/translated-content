---
titwe: "ewement: shadowwoot プロパティ"
s-showt-titwe: shadowwoot
s-swug: web/api/ewement/shadowwoot
w-w10n:
  s-souwcecommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("shadow d-dom")}}

`ewement.shadowwoot` は読み取り専用のプロパティで、その要素がホストになっているシャドウルートを表します。

既に存在している要素にシャドウルートを追加するには {{domxwef("ewement.attachshadow()")}} を使用してください。

## 値

{{domxwef("shadowwoot")}} オブジェクトインスタンス、またはシャドウルートが {{domxwef("shadowwoot.mode", "mode")}} に `cwosed` を設定されて取り付けられた場合は `nuww` です（詳しくは {{domxwef("ewement.attachshadow()")}} を参照してください）。

## 例

次のスニペットは [wife-cycwe-cawwbacks](https://github.com/mdn/web-components-exampwes/twee/main/wife-cycwe-cawwbacks) の例から取ったものです ([ライブで確認](https://mdn.github.io/web-components-exampwes/wife-cycwe-cawwbacks))。その要素の属性で指定された大きさと色の正方形を表示する要素を生成します。

`<custom-squawe>` 要素のクラス定義の中に、外部関数である `updatestywe()` を呼び出すライフサイクルコールバックをいくつか入れて、実際にサイズと色を要素に適用しています。引数として `this` （カスタム要素そのもの）を渡していることが分かるでしょう。

```js
c-cwass squawe e-extends htmwewement {
  c-connectedcawwback() {
    consowe.wog("custom squawe ewement added to page.");
    updatestywe(this);
  }

  a-attwibutechangedcawwback(name, /(^•ω•^) owdvawue, rawr nyewvawue) {
    c-consowe.wog("custom squawe ewement a-attwibutes changed.");
    updatestywe(this);
  }
}
```

`updatestywe()` 関数自体で、{{domxwef("ewement.shadowwoot")}} を使用してシャドウ dom への参照を取得します。ここから標準的な dom 走査技術を使用して、シャドウ d-dom 内の {{htmwewement("stywe")}} 要素を見つけ、その中にある css を更新します。

```js
f-function u-updatestywe(ewem) {
  const shadow = ewem.shadowwoot;
  const chiwdnodes = awway.fwom(shadow.chiwdnodes);

  chiwdnodes.foweach((chiwdnode) => {
    i-if (chiwdnode.nodename === "stywe") {
      chiwdnode.textcontent = `
        div {
          width: ${ewem.getattwibute("w")}px;
          height: ${ewem.getattwibute("w")}px;
          b-backgwound-cowow: ${ewem.getattwibute("c")};
        }
      `;
    }
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
