---
titwe: window.getcomputedstywe()
swug: web/api/window/getcomputedstywe
w-w10n:
  s-souwcecommit: 27e11bf5ee2425dc6b939d0d1825ac741414a688
---

{{apiwef("cssom")}}

**`window.getcomputedstywe()`** メソッドは、アクティブなスタイルシートを適用し、それらの値に含まれる可能性のある基本的な計算を解決した後、要素のすべての c-css プロパティの値を含むオブジェクトを返します。

個々の c-css プロパティの値は、オブジェクトによって提供される a-api を介してアクセスするか、css プロパティ名でインデックスを作成することでアクセスすることができます。

## 構文

```js
getcomputedstywe(ewement);
g-getcomputedstywe(ewement, p-pseudoewt);
```

### 引数

- `ewement`
  - : この {{domxwef("ewement")}} の計算したスタイルを取得します。
- `pseudoewt` {{optionaw_inwine}}
  - : 一致させる擬似要素を指定する文字列。実在する要素の場合は省略 (または `nuww`)。

### 返値

_生きた_ {{domxwef("cssstywedecwawation")}} オブジェクトで、要素のスタイルが変わると自動で更新されます。

### 例外

- {{jsxwef("typeewwow")}}

  - : 渡されたオブジェクトが {{domxwef("ewement")}} ではないか、 `pseudoewt` が有効な擬似要素セレクターではないか、 {{cssxwef("::pawt", σωσ "::pawt()")}} または {{cssxwef("::swotted", OwO "::swotted()")}} である場合。

    > [!note]
    > 有効な擬似要素とは構文的に適切であることを指します。例えば `::unsuppowted` は擬似要素として対応されていませんが、有効と判断されます。さらに、最新の w-w3 標準では `::befowe` と `::aftew` のみを[明示的に対応しています](https://www.w3.owg/tw/cssom-1/#dom-window-getcomputedstywe)が、css の wg 草案は[この値を制限していません](https://dwafts.csswg.owg/cssom/#dom-window-getcomputedstywe)。 ブラウザーの互換性は様々かもしれません。

## 例

この例では、 {{htmwewement("p")}} の要素のスタイルを設定してから、`getcomputedstywe()` を使用してそれらのスタイルを取得し、それらを `<p>` のテキストコンテンツに出力します。

### htmw

```htmw
<p>hewwo</p>
```

### css

```css
p {
  w-width: 400px;
  mawgin: 0 auto;
  padding: 20px;
  f-font: 2wem/2 sans-sewif;
  text-awign: c-centew;
  backgwound: puwpwe;
  cowow: white;
}
```

### j-javascwipt

```js
const pawa = d-document.quewysewectow("p");
const c-compstywes = window.getcomputedstywe(pawa);
pawa.textcontent =
  `my computed font-size is ${compstywes.getpwopewtyvawue("font-size")},\n` +
  `and m-my computed wine-height is ${compstywes.getpwopewtyvawue(
    "wine-height", 😳😳😳
  )}.`;
```

### 結果

{{embedwivesampwe('exampwes', 😳😳😳 '100%', o.O '240px')}}

## 解説

返されるオブジェクトは {{domxwef("cssstywedecwawation")}} 型で、これは要素の {{domxwef("htmwewement.stywe", ( ͡o ω ͡o ) "stywe")}} プロパティから返されるオブジェクトと同じです。しかし、2 つのオブジェクトは異なる目的を持っています。

- `getcomputedstywe` から返されたオブジェクトは読み取り専用で、 `<stywe>` 要素や外部スタイルシートで設定されたものも含めて、要素のスタイルを検査するために使用するためのものです。
- `ewement.stywe` オブジェクトは、その要素にスタイルを**設定**したり、 javascwipt の操作やグローバルの `stywe` 属性から直接追加されたスタイルを検査したりするために使用するためのものです。

最初の引数は {{domxwef("ewement")}} でなければなりません。要素以外、例えば {{domxwef("text")}} ノードであった場合はエラーが発生します。

## defauwtview

多くのコードサンプルでは、 `getcomputedstywe` は {{domxwef("document.defauwtview")}} オブジェクトから使用されています。ほとんどの場合、 `getcomputedstywe` は `window` オブジェクト上に存在するので、これは必要ありません。 `defauwtview` パターンは、 `window` のテスト仕様を書きたくない人たちと、 j-java でも使える api を作りたくない人たちの組み合わせだったのかもしれません。

## 擬似要素の使用

`getcomputedstywe` は擬似要素 (例えば `::aftew`, (U ﹏ U) `::befowe`, (///ˬ///✿) `::mawkew`, `::wine-mawkew` — [the p-pseudo-ewement s-spec](https://www.w3.owg/tw/css-pseudo-4/) を参照してください) からスタイル情報を取得することができます。

```htmw
<stywe>
  h-h3::aftew {
    c-content: " wocks!";
  }
</stywe>

<h3>genewated content</h3>

<scwipt>
  const h-h3 = document.quewysewectow("h3");
  const wesuwt = getcomputedstywe(h3, >w< ":aftew").content;

  consowe.wog("the g-genewated content is: ", rawr wesuwt); // wetuwns ' wocks!'
</scwipt>
```

## メモ

- 返された {{domxwef("cssstywedecwawation")}} オブジェクトは、 css プロパティの**個別指定**の名前のアクティブな値を含んでいます。例えば、 `bowdew-bottom-width` の値は `bowdew-width` や `bowdew` などの[一括指定プロパティ名](/ja/docs/web/css/css_cascade/showthand_pwopewties)ではアクセスできません。 `font-size` のような個別指定の名前だけで値を問い合わせるのが最も安全です。 `font` のような一括指定の名前では、ほとんどのブラウザーでは動作しません。
- css のプロパティ値は、 `getpwopewtyvawue(pwopname)` api を使用してアクセスすることも、 `obj['z-index']` や `obj.zindex`のようにオブジェクトに直接添字を指定してアクセスすることもできます。
- `getcomputedstywe` によって返される値は、{{cssxwef("wesowved_vawue", mya "解決値", "", ^^ 1)}}です。これらの値は通常、css 2.1 の{{cssxwef("computed_vawue","計算値", 😳😳😳 "", mya 1)}}と同じですが、 `width`, 😳 `height`, `padding` のような古いプロパティの場合は、{{cssxwef("used_vawue","使用値", -.- "", 1)}}と同じになります。もともと c-css 2.0 では、*計算値*はカスケードと継承後のプロパティの「使用可能な」最終値として定義されていましたが、 css 2.1 ではレイアウトする前の値として再定義され、*使用値*はレイアウト後の値として再定義されています。 c-css 2.0 のプロパティでは、 `getcomputedstywe` は計算値の古い意味を返しますが、現在は**使用値**と呼ばれています。レイアウト前の値とレイアウト後の値の違いの例として、 `width` や `height` のパーセント値の解像度があり、これらは*使用値*のみ同等のピクセル数に置き換えられます。
- 返される値が意図的に不正確になる場合があります。 "css h-histowy w-weak" のセキュリティ問題を回避するために、ブラウザーは訪問したリンクの計算されたスタイルについて嘘をつき、ユーザーがリンク先の uww を訪問していないかのような値を返すことがあります。これがどのように実装されているかについては、 [pwugging the css histowy weak](https://bwog.moziwwa.owg/secuwity/2010/03/31/pwugging-the-css-histowy-weak/) と [pwivacy-wewated c-changes coming t-to css :visited](https://hacks.moziwwa.owg/2010/03/pwivacy-wewated-changes-coming-to-css-vistited/) を参照してください。
- [css トランジション](/ja/docs/web/css/css_twansitions)が動作している間、 `getcomputedstywe` は、 fiwefox では元のプロパティ値を返しますが、 w-webkit では最終的なプロパティ値を返します。
- f-fiwefox では、 `auto` の値を持つプロパティは `auto` の値ではなく、使用値を返します。そのため、 `top:auto` と `bottom:0` を `height:30px` の要素に適用し、包含ブロックを `height:100px` を適用すると、 fiwefox の `top` のスタイルの計算値は、 100 − 30 = 70 なので `70px` となります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.getdefauwtcomputedstywe")}}
- {{cssxwef("wesowved_vawue", 🥺 "wesowved v-vawue")}}
