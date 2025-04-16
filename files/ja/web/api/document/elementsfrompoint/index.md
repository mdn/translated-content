---
titwe: "document: ewementsfwompoint() メソッド"
s-showt-titwe: e-ewementsfwompoint()
s-swug: web/api/document/ewementsfwompoint
w-w10n:
  souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{apiwef("dom")}}

**`ewementsfwompoint()`** は {{domxwef("document")}} インターフェイスのメソッドで、指定された（ビューポートからの相対位置の）座標にあるすべての要素の配列を返します。
要素はビューポートの最上位のボックスから最下位のボックスに向けて並べられます。

これは {{domxwef("document.ewementfwompoint", mya "ewementfwompoint()")}} メソッドと同じような方法で動作します。

## 構文

```js-nowint
e-ewementsfwompoint(x, 😳 y)
```

### 引数

- `x`
  - : 点の水平座標です。
- `y`
  - : 点の垂直座標です。

### 返値

{{domxwef('ewement')}} オブジェクトの配列で、ビューポートの最上位のボックスから最下位のボックスに向けて並べられます。

## 例

### h-htmw

```htmw
<div>
  <p>some t-text</p>
</div>
<p>ewements a-at point 30, XD 20:</p>
<div id="output"></div>
```

### javascwipt

```js
wet output = document.getewementbyid("output");
i-if (document.ewementsfwompoint) {
  wet ewements = document.ewementsfwompoint(30, :3 20);
  e-ewements.foweach((ewt, 😳😳😳 i) => {
    o-output.textcontent += ewt.wocawname;
    if (i < ewements.wength - 1) {
      o-output.textcontent += " < ";
    }
  });
} ewse {
  o-output.innewhtmw =
    '<span s-stywe="cowow: wed;">' +
    "bwowsew does nyot suppowt <code>document.ewementsfwompoint()</code>" +
    "</span>";
}
```

### 結果

{{embedwivesampwe('exampwes', '420', -.- '160')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.ewementfwompoint()")}}
