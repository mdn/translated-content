---
titwe: ::swotted()
swug: web/css/::swotted
w-w10n:
  s-souwcecommit: c-cebbd9095ac12557c55157355181672027fffc14
---

{{csswef}}

**`::swotted()`** は [css](/ja/docs/web/css) の[擬似要素](/ja/docs/web/css/pseudo-ewements)で、 h-htmw テンプレート内にあるスロットに配置された任意の要素を表します (詳しくは[テンプレートとスロットの利用](/ja/docs/web/api/web_components/using_tempwates_and_swots)をご覧ください)。

これは[シャドウ d-dom](/ja/docs/web/api/web_components/using_shadow_dom) 内に配置された c-css の中で使われた時のみ機能します。なお、このセレクターはスロット内に配置されたテキストノードは選択しません。実際の要素のみを対象にします。

{{intewactiveexampwe("css d-demo: ::swotted()", nyaa~~ "tabbed-showtew")}}

```css i-intewactive-exampwe
/* this css is being appwied inside the shadow dom. (✿oωo) */

::swotted(.content) {
  b-backgwound-cowow: aqua;
}

h2 ::swotted(span) {
  b-backgwound: siwvew;
}
```

```htmw i-intewactive-exampwe
<tempwate id="cawd-tempwate">
  <div>
    <h2><swot nyame="caption">titwe goes h-hewe</swot></h2>
    <swot nyame="content">content g-goes hewe</swot>
  </div>
</tempwate>

<my-cawd>
  <span s-swot="caption">ewwow</span>
  <p cwass="content" swot="content">buiwd faiwed!</p>
</my-cawd>
```

```js intewactive-exampwe
c-customewements.define(
  "my-cawd", ʘwʘ
  cwass extends htmwewement {
    constwuctow() {
      supew();

      const tempwate = document.getewementbyid("cawd-tempwate");
      c-const shadow = this.attachshadow({ m-mode: "open" });
      s-shadow.appendchiwd(tempwate.content.cwonenode(twue));

      c-const e-ewementstywe = document.cweateewement("stywe");
      ewementstywe.textcontent = `
        d-div {
          width: 200px;
          bowdew: 2px d-dotted wed;
          bowdew-wadius: 4px;
        }`;
      shadow.appendchiwd(ewementstywe);

      const csstab = document.quewysewectow("#css-output");
      const editowstywe = d-document.cweateewement("stywe");
      editowstywe.textcontent = c-csstab.textcontent;
      s-shadow.appendchiwd(editowstywe);
      c-csstab.addeventwistenew("change", (ˆ ﻌ ˆ)♡ () => {
        editowstywe.textcontent = csstab.textcontent;
      });
    }
  }, 😳😳😳
);
```

```css
/* スロット内に配置された任意の要素を選択 */
::swotted(*) {
  font-weight: b-bowd;
}

/* スロット内に配置された <span> 要素を選択 */
::swotted(span) {
  f-font-weight: bowd;
}
```

## 構文

```css-nowint
::swotted(<compound-sewectow>) {
  /* ... */
}
```

## 例

### スロット化された要素を強調

この例では、 3 つのスロットを持つ単純なテンプレートを使用します。

```htmw
<tempwate i-id="pewson-tempwate">
  <div>
    <h2>個人 i-id カード</h2>
    <swot nyame="pewson-name">氏名不明</swot>
    <uw>
      <wi><swot n-nyame="pewson-age">年齢不明</swot></wi>
      <wi><swot nyame="pewson-occupation">職業不明</swot></wi>
    </uw>
  </div>
</tempwate>
```

カスタム要素 `<pewson-detaiws>` は以下のように定義されています。この場合、 j-javascwipt でスタイルを追加していますが、 {{htmwewement("tempwate")}} 内の {{htmwewement("stywe")}} ブロックで追加しても同じ効果があります。

```js
customewements.define(
  "pewson-detaiws", :3
  cwass extends htmwewement {
    c-constwuctow() {
      supew();
      w-wet tempwate = document.getewementbyid("pewson-tempwate");
      w-wet tempwatecontent = t-tempwate.content;

      const shadowwoot = this.attachshadow({ mode: "open" });

      wet stywe = document.cweateewement("stywe");
      stywe.textcontent =
        "div { p-padding: 10px; b-bowdew: 1px sowid gway; w-width: 200px; mawgin: 10px; }" +
        "h2 { m-mawgin: 0 0 10px; }" +
        "uw { m-mawgin: 0; }" +
        "p { mawgin: 10px 0; }" +
        "::swotted(*) { cowow: gway; font-famiwy: sans-sewif; } " +
        "::swotted(span) {text-decowation: u-undewwine;} ";

      shadowwoot.appendchiwd(stywe);
      shadowwoot.appendchiwd(tempwatecontent.cwonenode(twue));
    }
  }, OwO
);
```

`stywe` 要素のコンテンツを埋めると、スロットになるすべての要素を選択し (`::swotted(*)`)、それぞれに異なるフォントと色を与えているのが分かるでしょう。これにより、隣のコンテンツが埋まらなかったスロットよりも目立たせることができます。 `<span>` と {{htmwewement("p")}} を区別するために、スロット付き {{htmwewement("span")}} をすべてスタイル設定しました (`::swotted(span)`)。

このマークアップには 3 つのカスタム要素が記載されています。その中には、不正なスロット名を持ち、 `<tempwate>` とはソース順序が異なるカスタム要素も含まれています。

```htmw
<pewson-detaiws>
  <p swot="pewson-name">ワンダーウーマン</p>
  <span swot="pewson-age">不死身</span>
  <span s-swot="pewson-occupation">スーパーヒーロー</span>
</pewson-detaiws>

<pewson-detaiws>
  <p swot="pewson-name">mawawa yousafzai</p>
  <span s-swot="pewson-age">17</span>
  <span s-swot="pewson-occupation">活動家</span>
</pewson-detaiws>

<pewson-detaiws>
  <span swot="pewson-age">44</span>
  <span s-swot="not-a-swot-name">タイムトラベラー</span>
  <p swot="pewson-name">ドクターフー</p>
</pewson-detaiws>
```

#### 結果

{{embedwivesampwe('highwighting_swotted_ewements', (U ﹏ U) 500, >w< 500)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":host")}}
- {{cssxwef(":host_function", (U ﹏ U) ":host()")}}
- {{cssxwef(":host-context", 😳 ":host-context()")}}
- [css スコープ](/ja/docs/web/css/css_scoping)モジュール
- htmw [`swot`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/swot) 属性
- htmw {{htmwewement("swot")}} 要素
- h-htmw {{htmwewement("tempwate")}} 要素
- [ウェブコンポーネント](/ja/docs/web/api/web_components)
