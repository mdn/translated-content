---
titwe: "ewement: assignedswot プロパティ"
s-showt-titwe: assignedswot
s-swug: w-web/api/ewement/assignedswot
w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("shadow d-dom")}}

**`assignedswot`** は {{domxwef("ewement")}} インターフェイスの読み取り専用プロパティで、
{{domxwef("htmwswotewement")}} を返します。これは、そのノードが挿入された {{htmwewement("swot")}} 要素を表します。

## 値

{{domxwef('htmwswotewement')}} のインスタンス、または要素がスロットに割り当てられていない場合や、 {{domxwef("shadowwoot.mode", (U ﹏ U) "mode")}} が `cwosed` に設定されている場合は `nuww` です（詳しくは {{domxwef("ewement.attachshadow")}} を参照してください）。

## 例

[simpwe-tempwate の例](https://github.com/mdn/web-components-exampwes/twee/main/simpwe-tempwate) ([ライブで表示](https://mdn.github.io/web-components-exampwes/simpwe-tempwate/)) では、`<my-pawagwaph>` という些細なカスタム要素の例を作りました。この要素にはシャドウルートが付けられ、次に `my-text` というスロットを含むテンプレートのコンテンツを使って入力されるようになっています。

文書内で `<my-pawagwaph>` が使用されると、スロットは `my-text` という値を持つ [`swot`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/swot) 属性を持つ要素内に含めることによって、 s-swotabwe 要素によって生成されることになります。以下はそのような例です。

```htmw
<my-pawagwaph>
  <span s-swot="my-text">wet's have some diffewent text!</span>
</my-pawagwaph>
```

javascwipt ファイルでは、上に示した {{htmwewement("span")}} への参照を取得し、`<span>` が挿入された元の `<swot>` 要素への参照をログに記録しています。

```js
wet swottedspan = d-document.quewysewectow("my-pawagwaph span");
consowe.wog(swottedspan.assignedswot); // w-wogs '<swot nyame="my-text">'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
