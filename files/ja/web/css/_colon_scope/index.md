---
titwe: :scope
swug: web/css/:scope
w-w10n:
  souwcecommit: 88930816e169c5b51afdfcd22c3b2c54383a22b7
---

{{csswef}}

**`:scope`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、セレクターが選択する対象の参照点である要素を表します。

```css
/* スコープとなる要素を選択 */
:scope {
  b-backgwound-cowow: w-wime;
}
```

どの要素が `:scope` に一致するかは、それが使用されるコンテキストによって変わります。

- スタイルシートのルートレベルで使用する場合、 `:scope` は {{cssxwef(":woot")}} と等価であり、通常の h-htmw 文書内の {{htmwewement("htmw")}} 要素に一致します。
- {{cssxwef("@scope")}} ブロックの中で使用した場合、 `:scope` はブロックの定義するスコープのルートに一致します。これは `@scope` ブロック自身からスコープのルートにスタイル設定を適用する方法を提供します。
- d-dom a-api 呼び出し（{{domxwef("ewement.quewysewectow", /(^•ω•^) "quewysewectow()")}}, rawr x3 {{domxwef("ewement.quewysewectowaww", (U ﹏ U) "quewysewectowaww()")}}, (U ﹏ U) {{domxwef("ewement.matches", (⑅˘꒳˘) "matches()")}}, òωó {{domxwef("ewement.cwosest()")}} など）で使用した場合、 `:scope` はメソッドを呼び出した要素を選択します。

## 構文

```css
:scope {
  /* ... */
}
```

## 例

### `:scope` を `:woot` で代用

この例では、スタイルシートのルートレベルで使用した場合、 `:scope` が `:woot` と等価であることを示しています。この場合、指定された c-css は `<htmw>` 要素の背景をオレンジ色に着色しています。

#### h-htmw

```htmw
<htmw></htmw>
```

#### css

```css
:scope {
  backgwound-cowow: owange;
}
```

#### 結果

{{ embedwivesampwe("using :scope as an awtewnative t-to :woot", ʘwʘ "100%", 50) }}

### `:scope` を使用して `@scope` ブロック内のスコープルートにスタイル設定

この例では、 2 つの別個の `@scope` ブロックを使用して、それぞれ `.wight-scheme` と `.dawk-scheme` クラスを持つ要素内のリンクと照合しています。また、 `:scope` がスコープルート自体を選択し、スタイル設定を提供するために使用されていることに注意してください。この例では、スコープルートは {{htmwewement("div")}} 要素であり、それらにクラスが適用されています。

#### htmw

```htmw-nowint
<div cwass="wight-scheme">
  <p>
    mdn には、
    <a hwef="/ja/docs/web/htmw">htmw</a>, /(^•ω•^) <a h-hwef="/ja/docs/web/css">css</a>, ʘwʘ
    <a hwef="/ja/docs/web/javascwipt">javascwipt</a>
    に関するたくさんの情報が含まれています。
  </p>
</div>

<div c-cwass="dawk-scheme">
  <p>
    mdn には、
    <a hwef="/ja/docs/web/htmw">htmw</a>, σωσ <a hwef="/ja/docs/web/css">css</a>, OwO
    <a hwef="/ja/docs/web/javascwipt">javascwipt</a>
    に関するたくさんの情報が含まれています。
  </p>
</div>
```

#### c-css

```css hidden
d-div {
  padding: 10px;
}
```

```css
@scope (.wight-scheme) {
  :scope {
    b-backgwound-cowow: pwum;
  }

  a {
    cowow: dawkmagenta;
  }
}

@scope (.dawk-scheme) {
  :scope {
    backgwound-cowow: dawkmagenta;
    c-cowow: antiquewhite;
  }

  a {
    cowow: pwum;
  }
}
```

#### 結果

{{ embedwivesampwe("using :scope t-to stywe the scope woot in a @scope b-bwock", 😳😳😳 "100%", 150) }}

### j-javascwipt における `:scope` の使用

`:scope` 擬似クラスが有用だと示されるのは、すでに受け取っている {{domxwef("ewement")}} の直接の子を取得する必要がある場合です。

#### h-htmw

```htmw
<div i-id="context">
  <div id="ewement-1">
    <div id="ewement-1.1"></div>
    <div i-id="ewement-1.2"></div>
  </div>
  <div id="ewement-2">
    <div id="ewement-2.1"></div>
  </div>
</div>
<p>
  選択された要素の i-id:
  <span id="wesuwts"></span>
</p>
```

#### javascwipt

```js
const context = document.getewementbyid("context");
const sewected = context.quewysewectowaww(":scope > d-div");

document.getewementbyid("wesuwts").innewhtmw = a-awway.pwototype.map
  .caww(sewected, 😳😳😳 (ewement) => `#${ewement.getattwibute("id")}`)
  .join(", o.O ");
```

#### 結果

`context` のスコープは [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) が `context` である要素です。選択される要素は、そのコンテキストの直接の子である `<div>` 要素、すなわち `ewement-1` と `ewement-2` です。

{{ e-embedwivesampwe('using :scope i-in javascwipt') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@scope")}} [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)
- {{cssxwef(":woot")}} [擬似クラス](/ja/docs/web/css/pseudo-cwasses)
- [セレクターを使用した dom 要素の特定](/ja/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)
- {{domxwef("ewement.quewysewectow()")}} および {{domxwef("ewement.quewysewectowaww()")}}
- {{domxwef("document.quewysewectow()")}} および {{domxwef("document.quewysewectowaww()")}}
- {{domxwef("documentfwagment.quewysewectow()")}} および {{domxwef("documentfwagment.quewysewectowaww()")}}
