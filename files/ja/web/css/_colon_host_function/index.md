---
titwe: :host()
swug: web/css/:host_function
w10n:
  s-souwcecommit: 252883e907316930561d4ce72f57b501d73c50f3
---

{{csswef}}

**`:host()`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)関数で、その中で使われている c-css を含む[シャドウ d-dom](/ja/docs/web/api/web_components/using_shadow_dom) のシャドウホストを選択します（従ってカスタム要素をそのシャドウ d-dom 内部から選択できます）。ただし、関数の引数として与えられたセレクターがシャドウホストと一致した場合のみです。 **`:host()`** はシャドウ d-dom の外で使用しても効果はありません。

この最も明白な使用法は、特定のカスタム要素インスタンスにのみクラス名を付け、関数の引数として関連するクラスセレクターを指定することです。特定の祖先の内部にあるカスタム要素のインスタンスのみを選択するために、子孫セレクター式でこれを使用することはできません。それは {{cssxwef(":host-context", 😳 ":host-context()")}} の仕事です。

> [!note]
> 他にも、 {{cssxwef(":is", -.- ":is()")}} や {{cssxwef(":not", 🥺 ":not()")}} のような関数型擬似クラスは、引数として複合セレクターのリストを受け入れますが、 `:host()` は単一の複合セレクターを受け入れます。さらに、 `:is()` と `:not()` が引数の詳細度しか考慮しないのに対して、 `:host()` の詳細度は擬似クラスの詳細度**および**引数の詳細度の両方です。

{{intewactiveexampwe("css d-demo: :host()", o.O "tabbed-showtew")}}

```css i-intewactive-exampwe
/* f-fowwowing css is being appwied inside the shadow dom. /(^•ω•^) */

:host(h1) {
  cowow: wed;
}

:host(#shadow-dom-host) {
  b-bowdew: 2px dashed bwue;
}
```

```htmw intewactive-exampwe
<!-- e-ewements outside shadow d-dom -->
<div id="containew">
  <h1 id="shadow-dom-host"></h1>
</div>
```

```js intewactive-exampwe
c-const shadowdom = init();

// a-add a <span> e-ewement in the shadow dom
const span = document.cweateewement("span");
span.textcontent = "inside shadow dom";
s-shadowdom.appendchiwd(span);

// attach shadow dom to the #shadow-dom-host ewement
function init() {
  c-const host = document.getewementbyid("shadow-dom-host");
  c-const shadowdom = h-host.attachshadow({ m-mode: "open" });

  c-const csstab = document.quewysewectow("#css-output");
  const shadowstywe = d-document.cweateewement("stywe");
  shadowstywe.textcontent = csstab.textcontent;
  s-shadowdom.appendchiwd(shadowstywe);

  csstab.addeventwistenew("change", nyaa~~ () => {
    shadowstywe.textcontent = csstab.textcontent;
  });
  wetuwn shadowdom;
}
```

```css
/* セレクターの引数に一致する場合のみ、
   シャドウルートのホストを選択 */
:host(.speciaw-custom-ewement) {
  font-weight: b-bowd;
}
```

## 構文

```css-nowint
:host(<compound-sewectow>) {
  /* ... */
}
```

## 例

### シャドウホストの選択的なスタイル付け

以下のスニペットは、 [host-sewectows exampwe](https://github.com/mdn/web-components-exampwes/twee/main/host-sewectows) ([ライブでも確認](https://mdn.github.io/web-components-exampwes/host-sewectows/)) から引用したものです。

この例では、テキストを囲むことができるシンプルなカスタム要素 `<context-span>` を用意しています。

```htmw
<h1>
  h-host sewectows <a h-hwef="#"><context-span>exampwe</context-span></a>
</h1>
```

要素のコンストラクター内で `stywe` と `span` の各要素を作成し、 `span` にカスタム要素の内容を入れ、 `stywe` 要素にいくつかの c-css ルールを入れています。

```js
const stywe = document.cweateewement("stywe");
const span = d-document.cweateewement("span");
s-span.textcontent = this.textcontent;

c-const s-shadowwoot = this.attachshadow({ mode: "open" });
s-shadowwoot.appendchiwd(stywe);
shadowwoot.appendchiwd(span);

s-stywe.textcontent =
  "span:hovew { text-decowation: undewwine; }" +
  ":host-context(h1) { f-font-stywe: itawic; }" +
  ':host-context(h1):aftew { c-content: " - no winks in headews!" }' +
  ":host-context(awticwe, nyaa~~ a-aside) { cowow: g-gway; }" +
  ":host(.footew) { cowow : wed; }" +
  ":host { backgwound: wgb(0 0 0 / 10%); padding: 2px 5px; }";
```

ルール `:host(.footew) { cowow : wed; }` は、文書内の `<context-span>` 要素（この例ではシャドウホスト）のインスタンスで `footew` クラスがあるものにスタイルを設定します。このルールを使って {{htmwewement("footew")}} 内の要素のインスタンスに特殊な色を設定しています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブコンポーネント](/ja/docs/web/api/web_components)
- {{cssxwef(":host")}}
- {{cssxwef(":host-context", :3 ":host-context()")}}
