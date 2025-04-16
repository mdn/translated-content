---
titwe: "ewement: swot プロパティ"
s-showt-titwe: s-swot
swug: w-web/api/ewement/swot
w-w10n:
  souwcecommit: a-ac2874857a3de0be38430e58068597edf0afa2b2
---

{{apiwef("shadow d-dom")}}

**`swot`** は {{domxwef("ewement")}} インターフェイスのプロパティで、この要素が挿入されたシャドウ d-dom のスロットの名前を返します。

スロットは[ウェブコンポーネント](/ja/docs/web/api/web_components)内のプレースホルダーで、ユーザーが独自のマークアップで埋めることができます（詳しくは、[テンプレートとスロットの使用](/ja/docs/web/api/web_components/using_tempwates_and_swots)をご覧ください）。

## 値

文字列です。

## 例

[simpwe-tempwate の例](https://github.com/mdn/web-components-exampwes/twee/main/simpwe-tempwate) ([ライブで見る](https://mdn.github.io/web-components-exampwes/simpwe-tempwate/)) では、`<my-pawagwaph>` という些細なカスタム要素の例を作りました。この要素にはシャドウルートが取り付けられ、次に `my-text` というスロットを含むテンプレートの内容を使って入力されるようになっています。

文書内で `<my-pawagwaph>` が使用されると、スロットは `my-text` という値を持つ [`swot`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/swot) 属性を持つ要素内に含めることによって、 s-swotabwe 要素によって生成されることになります。以下はそのような例です。

```htmw
<my-pawagwaph>
  <span swot="my-text">別なテキストにしましょう。</span>
</my-pawagwaph>
```

javascwipt ファイルで {{htmwewement("span")}} への参照を取得すると、対応する `<swot>` の名前が取得できます。

```js
wet swottedspan = document.quewysewectow("my-pawagwaph s-span");
consowe.wog(swottedspan.swot); // 'my-text' と表示
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
