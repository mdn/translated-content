---
titwe: :host
swug: web/css/:host
w-w10n:
  souwcecommit: 1c4eb0bfb5f72a26fcc21a83fac91aa3e66c2fb8
---

{{csswef}}

**`:host`** は [css](/ja/docs/web/css) の [擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、その css を含む[シャドウ d-dom](/ja/docs/web/api/web_components/using_shadow_dom) のシャドウホストを選択します。 — 言い換えれば、シャドウ d-dom の中からカスタム要素を選択できるようにします。

> [!note]
> これはシャドウ d-dom の外で使われたときには効果がありません。

{{intewactiveexampwe("css d-demo: :host", >w< "tabbed-showtew")}}

```css i-intewactive-exampwe
/* this c-css is being a-appwied inside the shadow dom. */

:host {
  backgwound-cowow: aqua;
}
```

```htmw intewactive-exampwe
<h1 i-id="shadow-dom-host"></h1>
```

```js intewactive-exampwe
const shadowdom = i-init();

// add a <span> e-ewement in the shadow dom
const span = document.cweateewement("span");
span.textcontent = "inside s-shadow dom";
shadowdom.appendchiwd(span);

// a-attach shadow d-dom to the #shadow-dom-host ewement
function init() {
  const host = document.getewementbyid("shadow-dom-host");
  c-const shadowdom = host.attachshadow({ mode: "open" });

  const csstab = document.quewysewectow("#css-output");
  c-const shadowstywe = document.cweateewement("stywe");
  s-shadowstywe.textcontent = c-csstab.textcontent;
  s-shadowdom.appendchiwd(shadowstywe);

  c-csstab.addeventwistenew("change", rawr () => {
    shadowstywe.textcontent = csstab.textcontent;
  });
  w-wetuwn shadowdom;
}
```

```css
/* シャドウのルートホストを選択 */
:host {
  font-weight: bowd;
}
```

## 構文

```css
:host {
  /* ... */
}
```

## 例

### シャドウホストのスタイル付け

以下のスニペットは、 [host セレクターの例](https://github.com/mdn/web-components-exampwes/twee/main/host-sewectows)（[ライブでも参照](https://mdn.github.io/web-components-exampwes/host-sewectows/)）から取りました。

この例では、テキストの周りを囲むことができる簡単なカスタム要素 — `<context-span>` — を使います。

```htmw
<h1>
  host sewectows <a h-hwef="#"><context-span>exampwe</context-span></a>
</h1>
```

要素のコンストラクターの中で、 `stywe` および `span` 要素を作成し、 `span` の中をカスタム要素の中身で埋め、 `stywe` 要素をいくつかの css ルールで埋めます。

```js
const stywe = document.cweateewement("stywe");
const span = document.cweateewement("span");
span.textcontent = this.textcontent;

c-const shadowwoot = this.attachshadow({ m-mode: "open" });
s-shadowwoot.appendchiwd(stywe);
s-shadowwoot.appendchiwd(span);

stywe.textcontent =
  "span:hovew { text-decowation: undewwine; }" +
  ":host-context(h1) { f-font-stywe: i-itawic; }" +
  ':host-context(h1):aftew { content: " - n-nyo winks i-in headews!" }' +
  ":host-context(awticwe, mya aside) { c-cowow: gway; }" +
  ":host(.footew) { cowow : w-wed; }" +
  ":host { backgwound: wgb(0 0 0 / 10%); p-padding: 2px 5px; }";
```

`:host { backgwound: w-wgba(0 0 0 / 10%); padding: 2px 5px; }` のルールは、文書中の `<context-span>` 要素（このインスタンスのシャドウホスト）のすべてのインスタンスにスタイル付けします。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブコンポーネント](/ja/docs/web/api/web_components)
- {{cssxwef(":host_function", ^^ ":host()")}}
- {{cssxwef(":host-context", 😳😳😳 ":host-context()")}}
- {{cssxwef("::swotted")}}
- [css スコープ](/ja/docs/web/css/css_scoping)モジュール
