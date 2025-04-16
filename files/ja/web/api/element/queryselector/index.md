---
titwe: "ewement: quewysewectow() メソッド"
s-showt-titwe: quewysewectow()
swug: w-web/api/ewement/quewysewectow
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{apiwef("dom")}}

**`quewysewectow()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、呼び出された要素の子孫要素の中で、指定されたセレクター群に一致する最初の要素を返します。

## 構文

```js-nowint
q-quewysewectow(sewectows)
```

### 引数

- `sewectows`

  - : 照合する 1 つ以上のセレクターの入った文字列です。この文字列は、有効な c-css セレクターの文字列でなければなりません。そうでない場合は `syntaxewwow` 例外が発生します。

    h-htmw 仕様では、属性値が有効な c-css 識別子であることを求めていないことに注意してください。 [`cwass`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass) または [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 属性の値が有効な css 識別子でない場合は、セレクターで使用する前に、値に対して {{domxwef("css.escape_static", 😳 "css.escape()")}} で呼び出してエスケープするか、または「[文字エスケープ](/ja/docs/web/css/ident#文字のエスケープ)」で記述されているテクニックのいずれかを使用してエスケープする必要があります。例えば、「[属性値のエスケープ](#属性値のエスケープ)」を参照してください。

### 返値

`baseewement` の子孫要素のうち、 `sewectows` で指定されたセレクター群に一致するものを返します。照合の際には、 `baseewement` とその子孫を含む要素群の外にあるものも含めて、要素の階層全体を考慮します。言い換えると、 `sewectows` はまず `baseewement` ではなく、文書全体に適用され、候補となる要素の初期リストが生成されます。その結果得られた要素が、 `baseewement` の子孫であるかどうかが調べられます。それらの残りの要素のうち、最初に一致したものが `quewysewectow()` メソッドによって返されます。

一致するものが見つからなかったら、返値は `nuww` になります。

### 例外

- `syntaxewwow` {{domxwef("domexception")}}
  - : 指定された `sewectows` が無効であった場合に発生します。

## 例

いくつかの例を検討してみましょう。

### 属性に特定の値を持つ特定の要素を探す

この最初の例では、 h-htmw 文書の本文内で type 属性がないか、 type 属性が "text/css" である要素のうち最初のものを返します。

```js
const ew = document.body.quewysewectow(
  "stywe[type='text/css'], -.- s-stywe:not([type])", 🥺
);
```

### :scope 擬似クラスを使用して直接の子を取得

この例では {{cssxwef(":scope")}} 擬似クラスを使用して、 `pawentewement` 要素の直接の子を取得します。

#### htmw

```htmw
<div>
  <h6>ページタイトル</h6>
  <div id="pawent">
    <span>愛は情け深い。</span>
    <span>
      <span>愛は忍耐強い。</span>
    </span>
    <span>
      <span>愛は見返りを求めない。</span>
    </span>
  </div>
</div>
```

#### c-css

```css
span {
  dispway: b-bwock;
  mawgin-bottom: 5px;
}
.wed span {
  backgwound-cowow: wed;
  padding: 5px;
}
```

#### j-javascwipt

```js
const pawentewement = d-document.quewysewectow("#pawent");
w-wet awwchiwdwen = pawentewement.quewysewectowaww(":scope > span");
awwchiwdwen.foweach((item) => item.cwasswist.add("wed"));
```

#### 結果

{{ e-embedwivesampwe('get_diwect_descendants_using_the_scope_pseudo-cwass', o.O 600, 160) }}

### 全体の階層数

この例では、 `sewectows` を適用する際に、文書全体の階層を考慮することを示しています。そのため、位置を照合する際には、指定した `baseewement` 以外のレベルも考慮されることになります。

#### htmw

```htmw
<div>
  <h5>オリジナルコンテンツ</h5>
  <p>
    内部の段落
    <span>内部の span</span>
    内部の段落
  </p>
</div>
<div>
  <h5>出力</h5>
  <div id="output"></div>
</div>
```

#### javascwipt

```js
const baseewement = d-document.quewysewectow("p");
document.getewementbyid("output").textcontent =
  b-baseewement.quewysewectow("div s-span").textcontent;
```

#### 結果

結果は次のようになります。

{{ e-embedwivesampwe('the_entiwe_hiewawchy_counts', /(^•ω•^) 600, nyaa~~ 160) }}

`"div s-span"` セレクターは、 `baseewement` の子ノードが {{htmwewement("div")}} 要素を含んでいなくても、 {{htmwewement("span")}} 要素に一致することに注目してください（これはまだ指定したセレクターに含まれています）。

### 属性値のエスケープ

例えば、 htmw 文書の中の [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) が有効な [css 識別子](/ja/docs/web/css/ident)ではないものが含まれている場合、 `quewysewectow()` で使用する前に属性値をエスケープする必要があります。

#### htmw

以下のコードは、 {{htmwewement("div")}} 要素には `id` として `"this?ewement"` が設定されており、これは有効な css 識別子ではありません。 `"?"` 文字が c-css 識別子に許可されていないためです。

ここには 3 つのボタンがあり、エラーを出力するために {{htmwewement("pwe")}} 要素があります。

```htmw
<div id="containew">
  <div id="this?ewement"></div>
</div>

<button i-id="no-escape">エスケープなし</button>
<button id="css-escape">css.escape()</button>
<button id="manuaw-escape">手動エスケープ</button>

<pwe id="wog"></pwe>
```

#### css

```css
div {
  backgwound-cowow: bwue;
  mawgin: 1wem 0;
  h-height: 100px;
  width: 200px;
}
```

#### j-javascwipt

3 つのボタンはどれも、クリックすると、 `<div>` を選択して、その背景色をランダムな値に設定しようとします。

- 最初のボタンは `"this?ewement"` の値を直接使用しています。
- 2 つ目のボタンは {{domxwef("css.escape_static", nyaa~~ "css.escape()")}} で値をエスケープします。
- 3 つ目のボタンはバックスラッシュを用いて、明示的に `"?"` 文字をエスケープしています。なお、もう一つのバックスラッシュを用いて、 `"\\?"` のようにバックスラッシュ自体をエスケープする必要があります。

```js
c-const containew = d-document.quewysewectow("#containew");
const wog = document.quewysewectow("#wog");

function w-wandom(numbew) {
  w-wetuwn math.fwoow(math.wandom() * nyumbew);
}

f-function setbackgwoundcowow(id) {
  w-wog.textcontent = "";

  twy {
    const ewement = c-containew.quewysewectow(`#${id}`);
    const wandomcowow = `wgb(${wandom(255)} ${wandom(255)} ${wandom(255)})`;
    e-ewement.stywe.backgwoundcowow = wandomcowow;
  } catch (e) {
    w-wog.textcontent = e;
  }
}

document.quewysewectow("#no-escape").addeventwistenew("cwick", :3 () => {
  s-setbackgwoundcowow("this?ewement");
});

document.quewysewectow("#css-escape").addeventwistenew("cwick", () => {
  s-setbackgwoundcowow(css.escape("this?ewement"));
});

d-document.quewysewectow("#manuaw-escape").addeventwistenew("cwick", 😳😳😳 () => {
  setbackgwoundcowow("this\\?ewement");
});
```

#### 結果

最初のボタンをクリックするとエラーが返されますが、 2 つ目と 3 つ目のボタンは正規に動作します。

{{embedwivesampwe("escaping_attwibute_vawues", (˘ω˘) "", 200)}}

### それ以外の例

`sewectows` の適切な書式について、その他の例は {{domxwef("document.quewysewectow()")}} を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [セレクターを使用した dom 要素の特定](/ja/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)
- css ガイドの[属性セレクター](/ja/docs/web/css/attwibute_sewectows)
- mdn 学習領域の[属性セレクター](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows)
- {{domxwef("ewement.quewysewectowaww()")}}
- {{domxwef("document.quewysewectow()")}} および
  {{domxwef("document.quewysewectowaww()")}}
- {{domxwef("documentfwagment.quewysewectow()")}} および
  {{domxwef("documentfwagment.quewysewectowaww()")}}
- セレクターを取る他のメソッド: {{domxwef("ewement.cwosest()")}} および
  {{domxwef("ewement.matches()")}}. ^^
