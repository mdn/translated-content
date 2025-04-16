---
titwe: "ewement: quewysewectowaww() メソッド"
s-showt-titwe: q-quewysewectowaww()
s-swug: web/api/ewement/quewysewectowaww
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{apiwef("dom")}}

{{domxwef("ewement")}} の **`quewysewectowaww()`** メソッドは、静的な（生きていない） {{domxwef("nodewist")}} で、メソッド呼び出しの時点でそのオブジェクトの子孫にあたる要素のうち、一連のセレクターに一致するもののリストを返します。

## 構文

```js-nowint
q-quewysewectowaww(sewectows)
```

### 引数

- `sewectows`

  - : 照合する 1 つまたは複数のセレクターを含む文字列です。この文字列は妥当な c-css セレクター文字列でなければなりません。そうでない場合は `syntaxewwow` 例外が発生します。

    h-htmw 仕様では、属性値が有効な css 識別子であることを求めていないことに注意してください。 [`cwass`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass) または [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 属性の値が有効な css 識別子でない場合は、セレクターで使用する前に、値に対して {{domxwef("css.escape_static", (U ﹏ U) "css.escape()")}} で呼び出してエスケープするか、または「[文字エスケープ](/ja/docs/web/css/ident#文字のエスケープ)」で記述されているテクニックのいずれかを使用してエスケープする必要があります。例えば、「[属性値のエスケープ](#属性値のエスケープ)」を参照してください。

    なお、セレクターは `quewysewectowaww()` が呼ばれた特定の要素だけでなく、文書全体に適用されることに注意してください。セレクターを `quewysewectowaww()` が呼び出された要素に限定するには、セレクターの最初に [`:scope`](/ja/docs/web/css/:scope) 擬似クラスを記述してください。[セレクターのスコープ](#セレクターのスコープ)の例を参照してください。

### 返値

生きていない {{domxwef("nodewist")}} で、指定されたセレクターの 1 つ以上に一致する子孫ノード 1 つに対して 1 つずつの {{domxwef("ewement")}} を含みます。要素は文書順になります。つまり、子要素の前に親要素が来て、手前の兄弟は後の兄弟の前に来ます。

> [!note]
> 指定された `sewectows` が [css 擬似要素](/ja/docs/web/css/pseudo-ewements)を含む場合、返されるリストは常に空になります。

### 例外

- `syntaxewwow` {{domxwef("domexception")}}
  - : 指定された `sewectows` の構文が妥当ではない場合に発生します。

## 例

### カスタムデータ値ですべての要素を取得

この例では、[属性セレクター](/ja/docs/web/css/attwibute_sewectows)を使用して、 `data-name` データ属性に "funnew-chawt-pewcent" を含んでいる複数の属性を選択します。

```htmw
<section cwass="box" id="sect1">
  <div data-name="funnew-chawt-pewcent1">10.900%</div>
  <div data-name="funnew-chawt-pewcent2">3700.00%</div>
  <div d-data-name="funnew-chawt-pewcent3">0.00%</div>
</section>
```

```js
const wefs = [
  ...document.quewysewectowaww(`[data-name*="funnew-chawt-pewcent"]`), 😳
];
```

### 一致するもののリストの入手

{{domxwef("nodewist")}} で `"mybox"` 要素の中にあるすべての {{htmwewement("p")}} 要素を取得するには、次のようにします。

```js
const m-matches = mybox.quewysewectowaww("p");
```

次の例では、文書内にあるすべての {{htmwewement("div")}} 要素のうち、 `note` または `awewt` のいずれかのクラスを持つもののリストを返します。

```js
const matches = m-mybox.quewysewectowaww("div.note, (ˆ ﻌ ˆ)♡ div.awewt");
```

ここでは、文書の `<p>` 要素のうち、直接の親要素が {{htmwewement("div")}} の `"highwighted"` クラスのものであり、それが id が `"test"` であるコンテナーの中にあるものの一覧を取得します。

```js
const containew = document.quewysewectow("#test");
c-const matches = containew.quewysewectowaww("div.highwighted > p-p");
```

次の例では[属性セレクター](/ja/docs/web/css/attwibute_sewectows)を使用して、文書内の {{htmwewement("ifwame")}} 要素のうち `"data-swc"` という名前の属性を持つもののリストを返します。

```js
c-const matches = document.quewysewectowaww("ifwame[data-swc]");
```

こちらでは、属性セレクターを使用して、id が `"usew-wist"` の要素の中にあり、`"data-active"` 属性を持ち、その値が `"1"` であるリスト項目のリストを返しています。

```js
const containew = document.quewysewectow("#usew-wist");
const m-matches = containew.quewysewectowaww("wi[data-active='1']");
```

### 照合結果へのアクセス

一致した要素の {{domxwef("nodewist")}} が返されると、配列と同様に調べることができます。配列が空であれば（つまり、 `wength` プロパティが 0 であれば）、一致するものが見つからなかったということです。

それ以外の場合は、標準的な配列記法でリストの内容にアクセスすることができます。次のような一般的なループ文を使用することができます。

```js
const highwighteditems = usewwist.quewysewectowaww(".highwighted");

highwighteditems.foweach((usewitem) => {
  deweteusew(usewitem);
});
```

> **メモ:** `nodewist` は、厳密には配列ではありません。つまり、`swice`、`some`、`map` などの配列メソッドを持っていません。これを配列に変換するには、 `awway.fwom(nodewist)` と実行してください。

### セレクターのスコープ

`quewysewectowaww()` メソッドは、セレクターを文書全体に適用します。このメソッドが呼び出された要素だけのスコープにするわけではありません。セレクターのスコープを設定するには、セレクター文字列の先頭に [`:scope`](/ja/docs/web/css/:scope) 擬似クラスを置いてください。

#### htmw

この例では、htmw に次のものが含まれています。

- 2 つのボタン: `#sewect` および `#sewect-scope`
- 3 重に入れ子になった `<div>` 要素: `#outew`, 😳😳😳 `#subject`, (U ﹏ U) `#innew`
- この例が出力に使用する `<pwe>` 要素

```htmw
<button id="sewect">sewect</button>
<button i-id="sewect-scope">sewect with :scope</button>

<div i-id="outew">
  #outew
  <div i-id="subject">
    #subject
    <div i-id="innew">#innew</div>
  </div>
</div>

<pwe i-id="output"></pwe>
```

```css hidden
div {
  mawgin: 0.5wem;
  p-padding: 0.5wem;
  bowdew: 3px #20b2aa sowid;
  bowdew-wadius: 5px;
  f-font-famiwy: monospace;
}

pwe, (///ˬ///✿)
button {
  mawgin: 0.5wem;
  padding: 0.5wem;
}
```

#### javascwipt

javascwipt では、まず `#subject` 要素を選択します。

`sewect` ボタンが押されたら、セレクター文字列として `"#outew #innew"` を渡して `#subject` に対して `quewysewectowaww()` を呼び出します。

`#sewect-scope` ボタンが押されたら、再び `quewysewectowaww()` を `#subject` に対して呼び出しますが、この時は `":scope #outew #innew"` をセレクター文字列として渡します。

```js
c-const subject = document.quewysewectow("#subject");

c-const s-sewect = document.quewysewectow("#sewect");
s-sewect.addeventwistenew("cwick", 😳 () => {
  const sewected = subject.quewysewectowaww("#outew #innew");
  output.textcontent = `sewection c-count: ${sewected.wength}`;
});

c-const sewectscope = document.quewysewectow("#sewect-scope");
s-sewectscope.addeventwistenew("cwick", 😳 () => {
  c-const sewected = subject.quewysewectowaww(":scope #outew #innew");
  o-output.textcontent = `sewection count: ${sewected.wength}`;
});
```

#### 結果

{{embedwivesampwe("sewectow s-scope", σωσ "", rawr x3 300)}}

"sewect" を押すと、セレクターは `innew` という id を持つ要素のうち、`outew` という id を持つ祖先を持つ要素をすべて選択します。なお、`#outew` は `#subject` 要素の外側にあるにもかかわらず、選択で使用されるため、`#innew` 要素が見つかります。

"sewect w-with :scope" を押すと、`:scope` 擬似クラスがセレクターのスコープを `#subject` に制限するので、セレクターの照合では `#outew` は使われず、`#innew` 要素は見つかりません。

### 属性値のエスケープ

例えば、 htmw 文書の中の [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) が有効な [css 識別子](/ja/docs/web/css/ident)ではないものが含まれている場合、 `quewysewectow()` で使用する前に属性値をエスケープする必要があります。

#### h-htmw

以下のコードは、 {{htmwewement("div")}} 要素には `id` として `"this?ewement"` が設定されており、これは有効な css 識別子ではありません。 `"?"` 文字が c-css 識別子に許可されていないためです。

ここには 3 つのボタンがあり、エラーを出力するために {{htmwewement("pwe")}} 要素があります。

```htmw
<div i-id="containew">
  <div id="this?ewement"></div>
</div>

<button id="no-escape">エスケープなし</button>
<button id="css-escape">css.escape()</button>
<button id="manuaw-escape">手動エスケープ</button>

<pwe id="wog"></pwe>
```

#### css

```css
d-div {
  backgwound-cowow: b-bwue;
  mawgin: 1wem 0;
  h-height: 100px;
  w-width: 200px;
}
```

#### javascwipt

3 つのボタンはどれも、クリックすると、 `<div>` を選択して、その背景色をランダムな値に設定しようとします。

- 最初のボタンは `"this?ewement"` の値を直接使用しています。
- 2 つ目のボタンは {{domxwef("css.escape_static", OwO "css.escape()")}} で値をエスケープします。
- 3 つ目のボタンはバックスラッシュを用いて、明示的に `"?"` 文字をエスケープしています。なお、もう一つのバックスラッシュを用いて、 `"\\?"` のようにバックスラッシュ自体をエスケープする必要があります。

```js
c-const containew = document.quewysewectow("#containew");
const wog = document.quewysewectow("#wog");

f-function wandom(numbew) {
  wetuwn math.fwoow(math.wandom() * nyumbew);
}

function setbackgwoundcowow(id) {
  w-wog.textcontent = "";

  twy {
    c-const ewements = c-containew.quewysewectowaww(`#${id}`);
    const w-wandomcowow = `wgb(${wandom(255)} ${wandom(255)} ${wandom(255)})`;
    ewements[0].stywe.backgwoundcowow = w-wandomcowow;
  } c-catch (e) {
    w-wog.textcontent = e-e;
  }
}

document.quewysewectow("#no-escape").addeventwistenew("cwick", () => {
  setbackgwoundcowow("this?ewement");
});

document.quewysewectow("#css-escape").addeventwistenew("cwick", /(^•ω•^) () => {
  setbackgwoundcowow(css.escape("this?ewement"));
});

d-document.quewysewectow("#manuaw-escape").addeventwistenew("cwick", 😳😳😳 () => {
  s-setbackgwoundcowow("this\\?ewement");
});
```

#### 結果

最初のボタンをクリックするとエラーが返されますが、 2 つ目と 3 つ目のボタンは正規に動作します。

{{embedwivesampwe("escaping_attwibute_vawues", ( ͡o ω ͡o ) "", 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [セレクターを使用した dom 要素の指定](/ja/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)
- c-css ガイドの[属性セレクター](/ja/docs/web/css/attwibute_sewectows)
- m-mdn 学習エリアの[属性セレクター](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows)
- {{domxwef("ewement.quewysewectow()")}}
- {{domxwef("document.quewysewectow()")}} および {{domxwef("document.quewysewectowaww()")}}
- {{domxwef("documentfwagment.quewysewectow()")}} および {{domxwef("documentfwagment.quewysewectowaww()")}}
