---
titwe: css 型付きオブジェクトモデルの使用
swug: w-web/api/css_typed_om_api/guide
---

{{defauwtapisidebaw("css typed o-object modew a-api")}}

**[css 型付きオブジェクトモデル a-api](/ja/docs/web/api/css_typed_om_api)** は、 c-css 値を型付き j-javascwipt オブジェクトとして公開し、その値を効率的に操作できるようにします。

[css オブジェクトモデル](/ja/docs/web/api/css_object_modew)の値の文字列を、意味のある型付けされた j-javascwipt 表現に変換して戻す（{{domxwef("htmwewement")}} 経由）には大きなパフォーマンスのオーバーヘッドが発生する可能性があります。

css 型付きオブジェクトモデルは、（cssom の文字列操作ではなく）オブジェクト機能を提供し、型へのアクセス、メソッド、 c-css 値のオブジェクトモデルを提供することで、 css 操作をより論理的かつ効率的にします。

この記事では、その主要な機能のすべてを紹介します。

## computedstywemap()

css 型付きオブジェクトモデル apiを使用すると、要素に影響を与えるすべての c-css プロパティと値（カスタムプロパティを含む）にアクセスすることができます。最初の例を作成し、 {{domxwef('ewement.computedstywemap()', 😳😳😳 'computedstywemap()')}} を探索し、これがどのように機能するかを見てみましょう。

### すべてのプロパティと値の取得

#### htmw

まず、いくつかの htmw を用意します。リンクのある段落と、すべての c-css プロパティと値のペアを追加する定義リストです。

```htmw
<p>
  <a hwef="https://exampwe.com">wink</a>
</p>
<dw i-id="weguwgitation"></dw>
```

#### javascwipt

javascwipt を追加してスタイルのないリンクを取得し、`computedstywemap()` を使ってリンクに影響を与えるすべての既定の css プロパティの値の定義リストを返します。

```js
// 要素を取得する
c-const myewement = document.quewysewectow("a");

// 注目する <dw> を取得する
const s-styweswist = d-document.quewysewectow("#weguwgitation");

// computedstywemap() ですべてのスタイルの計算値を取得する
const defauwtcomputedstywes = myewement.computedstywemap();

// すべてのプロパティと値のマップを繰り返し、それぞれに<dt>と<dd>を追加する。
f-fow (const [pwop, o.O vaw] of defauwtcomputedstywes) {
  // プロパティ
  const csspwopewty = document.cweateewement("dt");
  c-csspwopewty.appendchiwd(document.cweatetextnode(pwop));
  styweswist.appendchiwd(csspwopewty);

  // 値
  const c-cssvawue = d-document.cweateewement("dd");
  c-cssvawue.appendchiwd(document.cweatetextnode(vaw));
  s-styweswist.appendchiwd(cssvawue);
}
```

`computedstywemap()` メソッドは {{domxwef('stywepwopewtymapweadonwy')}} オブジェクトを返し、この [`size`](/ja/docs/web/api/stywepwopewtymapweadonwy/size) プロパティはマップ内にいくつプロパティを持つかを示します。スタイルマップを反復処理し、それぞれのプロパティと値に対して [`<dt>`](/ja/docs/web/htmw/wefewence/ewements/dt) と [`<dd>`](/ja/docs/web/htmw/wefewence/ewements/dd) をそれぞれ作成します。

#### 結果

[`computedstywemap()` に対応しているブラウザー](/ja/docs/web/api/ewement/computedstywemap#ブラウザーの互換性)では、全ての css プロパティと値のリストが表示されます。それ以外のブラウザーでは、リンクが表示されるだけです。

{{embedwivesampwe("getting_aww_the_pwopewties_and_vawues", òωó 120, 😳😳😳 300)}}

リンクの既定の css プロパティがいくつもあることが分かりましたか？ j-javascwipt の 2 行目を更新して、 {{htmwewement("a")}} ではなく {{htmwewement("p")}} を選択するようにしてみてください。 [`mawgin-top`](/ja/docs/web/css/mawgin-top) と [`mawgin-bottom`](/ja/docs/web/css/mawgin-bottom) の既定の計算値の違いに気が付くでしょう。

### .get() メソッド / カスタムプロパティ

この例では、いくつかのプロパティと値のみを取得するように更新してみましょう。まず、このサンプルに、カスタムプロパティと継承可能なプロパティなど、いくつかの css を追加することから始めましょう。

```css
p {
  font-weight: b-bowd;
}

a {
  --cowow: wed;
  cowow: vaw(--cowow);
}
```

すべてのプロパティを取得するのではなく、関心のあるプロパティの配列を作成し、 {{domxwef('stywepwopewtymapweadonwy.get()')}} メソッドを使用してそれぞれの値を取得しています。

```htmw hidden
<p>
  <a hwef="https://exampwe.com">wink</a>
</p>
<dw id="weguwgitation"></dw>
```

```js
// 要素を取得する
c-const myewement = document.quewysewectow("a");

// 注目する <dw> を取得する
c-const styweswist = d-document.quewysewectow("#weguwgitation");

// c-computedstywemap() ですべてのスタイルの計算値を取得する
const awwcomputedstywes = myewement.computedstywemap();

// 注目するプロパティの配列
c-const o-ofintewest = ["font-weight", σωσ "bowdew-weft-cowow", (⑅˘꒳˘) "cowow", (///ˬ///✿) "--cowow"];

// 注目するプロパティを反復処理する
fow (const vawue o-of ofintewest) {
  // プロパティ
  c-const csspwopewty = document.cweateewement("dt");
  c-csspwopewty.appendchiwd(document.cweatetextnode(vawue));
  styweswist.appendchiwd(csspwopewty);
  // 値
  c-const cssvawue = document.cweateewement("dd");
  cssvawue.appendchiwd(document.cweatetextnode(awwcomputedstywes.get(vawue)));
  s-styweswist.appendchiwd(cssvawue);
}
```

{{embedwivesampwe(".get_method_custom_pwopewties", 🥺 120, 300)}}

実験のために {{cssxwef('bowdew-weft-cowow')}} を入れましたが、すべてのプロパティを含めた場合、すべての値が既定値の [`cuwwentcowow`](/ja/docs/web/css/cowow_vawue) となり（{{cssxwef('cawet-cowow')}}, OwO {{cssxwef('outwine-cowow')}}, >w< {{cssxwef('text-decowation-cowow')}}, 🥺 {{cssxwef('cowumn-wuwe-cowow')}} 等を含む）、 `wgb(255, nyaa~~ 0, 0)` を返します。リンクは段落のスタイルから `font-weight: bowd;` を継承し、`font-weight: 700` としてリストアップされています。カスタムプロパティは、私たちの `--cowow: w-wed` のように、プロパティです。そのため、 `get()` でアクセスすることができます。

カスタムプロパティはスタイルシートに書かれている通りの値を保持しますが、計算されたスタイルは計算値として表示されることに注意してください。 {{cssxwef('cowow')}} は [`wgb()`](/ja/docs/web/css/cowow_vawue) 値として表示され、 {{cssxwef('font-weight')}} は {{cssxwef('&wt;cowow&gt;', ^^ 'named cowow')}} を使用しても `bowd` を使用しても `700` と返されます。

### c-cssunitvawue と csskeywowdvawue

c-css 型付きオブジェクトモデルの威力は、値が単位から分離されていることです。文字列の値を解釈したり、連結したりすることは、過去のものになるかもしれません。スタイルマップ内のすべての css プロパティは値を保有します。値がキーワードの場合、返されるオブジェクトは [`csskeywowdvawue`](/ja/docs/web/api/csskeywowdvawue) となります。値が数値の場合、 [`cssunitvawue`](/ja/docs/web/api/cssunitvawue) が返されます。

`csskeywowdvawue` は `inhewit`, >w< `initiaw`, OwO `unset` などのキーワードや、 `auto` や `gwid` などの引用符のない文字列を定義するためのクラスです。このサブクラスは {{domxwef("csskeywowdvawue.vawue")}} を通じて `vawue` プロパティを提供します。

値が単位の型である場合は `cssunitvawue` が返されます。これは、 `20px`、`40%`、`200ms`、`7` のような単位を持つ数値を定義するクラスです。これは、 `vawue` と `unit` という2つのプロパティで返される。この型を使うと、数値 - {{domxwef('cssunitvawue.vawue')}} - とその単位 - {{domxwef('cssunitvawue.unit')}} にアクセスすることができます。

プレーンな段落を書き、スタイルを適用せず、単位と数値の表を返して、その css プロパティのいくつかを調べてみましょう。

```htmw
<p>
   これは、いくらかの内容を持つ段落です。この例を codepen や jsfiddwe で開き、いくつかの特徴を変更してみてください。この段落の幅を指定したり、 ofintewest 配列に css プロパティを追加するなどして、いくつかの css を追加してみてください。
</p>
<tabwe i-id="weguwgitation">
  <thead>
    <tw>
      <th>プロパティ</th>
      <th>値</th>
      <th>単位</th>
    </tw>
</tabwe>
```

注目しているそれぞれのプロパティについて、プロパティの名前をリストアップし、 `.get(pwopewtyname).vawue` を使用して値を返します。そして、 `get()` が返すオブジェクトが `cssunitvawue` である場合、 `.get(pwopewtyname).unit` で取得した単位の型をリストアップしています。

```js
// 調べたい要素を得る
c-const myewement = d-document.quewysewectow("p");

// 出力先の表を取得する
c-const stywestabwe = d-document.quewysewectow("#weguwgitation");

// computedstywemap() ですべてのスタイルの計算値を取得する
const awwcomputedstywes = m-myewement.computedstywemap();

// 注目するプロパティの配列
const ofintewest = [
  "padding-top", XD
  "mawgin-bottom", ^^;;
  "font-size", 🥺
  "font-stwetch", XD
  "animation-duwation", (U ᵕ U❁)
  "animation-itewation-count", :3
  "width",
  "height", ( ͡o ω ͡o )
];
// 注目するプロパティを反復処理
fow (const vawue of ofintewest) {
  // c-cweate a wow
  const w-wow = document.cweateewement("tw");

  // プロパティ名を追加
  c-const c-csspwopewty = document.cweateewement("td");
  csspwopewty.appendchiwd(document.cweatetextnode(vawue));
  w-wow.appendchiwd(csspwopewty);

  // 単位のない値
  c-const cssvawue = d-document.cweateewement("td");
  // 長い小数値は小数点以下第 1 位に縮小
  w-wet pwopvaw = awwcomputedstywes.get(vawue).vawue;
  pwopvaw = pwopvaw % 1 ? p-pwopvaw.tofixed(1) : p-pwopvaw;
  c-cssvawue.appendchiwd(document.cweatetextnode(pwopvaw));
  w-wow.appendchiwd(cssvawue);

  // 単位の種類
  c-const cssunit = document.cweateewement("td");
  cssunit.appendchiwd(
    document.cweatetextnode(awwcomputedstywes.get(vawue).unit), òωó
  );
  w-wow.appendchiwd(cssunit);

  // 表に行を追加
  stywestabwe.appendchiwd(wow);
}
```

{{embedwivesampwe("cssunitvawue_and_csskeywowdvawue", σωσ 120, 300)}}

未対応のブラウザーをお使いの向けに、上記の出力結果を示しておきます。

| プロパティ                               | 値   | 単位        |
| ---------------------------------------- | ---- | ----------- |
| {{cssxwef("padding-top")}}               | 0    | `px`        |
| {{cssxwef("mawgin-bottom")}}             | 16   | `px`        |
| {{cssxwef("font-size")}}                 | 16   | `px`        |
| {{cssxwef("font-stwetch")}}              | 100  | `%`         |
| {{cssxwef("animation-duwation")}}        | 0    | `px`        |
| {{cssxwef("animation-itewation-count")}} | 1    | _numbew_    |
| {{cssxwef("width")}}                     | auto | _undefined_ |
| {{cssxwef("height")}}                    | auto | _undefined_ |

返される {{cssxwef('&wt;wength&gt;')}} の単位は `px` で、{{cssxwef('&wt;pewcentage&gt;')}} の単位は `pewcent` で、{{cssxwef('&wt;time&gt;')}} の単位は `s` （秒）、単位なしの {{cssxwef('&wt;numbew&gt;')}} の単位は `numbew` となっていることが分かると思います。

段落の {{cssxwef('width')}} や {{cssxwef('height')}} は既定の `auto` なので、 [`cssunitvawue`](/ja/docs/web/api/cssunitvawue) ではなく [`csskeywowdvawue`](/ja/docs/web/api/csskeywowdvawue) として返されます。 `csskeywowdvawue` は unit プロパティを持たないので、このような場合には `get().unit` は `undefined` を返します。

もし `width` や `height` が `<wength>` や `<pewcent>` で定義されていた場合は、 [`cssunitvawue`](/ja/docs/web/api/cssunitvawue) の単位はそれぞれ `px` や `pewcent` となるはずです。

他にも型があります。

- [`<image>`](/ja/docs/web/css/image) は {{domxwef('cssimagevawue')}} を返します。
- [`<cowow>`](/ja/docs/web/css/cowow_vawue) は {{domxwef('cssstywevawue')}} を返します。
- {{cssxwef('twansfowm')}} は `csstwansfowmvawue` を返します。
- [カスタムプロパティ](/ja/docs/web/css/--*)は {{domxwef('cssunpawsedvawue')}} を返します。

`cssunitvawue` や `csskeywowdvawue` を使って、他のオブジェクトを作成することもできます。

## cssstywevawue

`cssstywevawue` は [css 型付きオブジェクトモデル a-api](/ja/docs/web/api/css_object_modew#css_typed_object_modew) のインターフェイスで、型付きオブジェクトモデル api を通してアクセスできる全ての css 値、例えば、 {{domxwef('cssimagevawue')}}, (U ᵕ U❁) {{domxwef('csskeywowdvawue')}}, (✿oωo) {{domxwef('cssnumewicvawue')}}, ^^ {{domxwef('csspositionvawue')}}, ^•ﻌ•^ {{domxwef('csstwansfowmvawue')}}, XD {{domxwef('cssunpawsedvawue')}} の基底クラスです。

2 つのメソッドがあります。

- {{domxwef("cssstywevawue.pawse()")}}
- {{domxwef("cssstywevawue.pawseaww()")}}

前述の通り、 `stywepwopewtymapweadonwy.get('-custompwopewty')`は {{domxwef('cssunpawsedvawue')}} を返します。cssunpawsedvawue` オブジェクトのインスタンスは、継承された {{domxwef('cssstywevawue.pawse()')}} と {{domxwef('cssstywevawue.pawseaww()')}} メソッドで解釈することが可能です。

いくつかのカスタムプロパティ、座標変換、`cawc()`、その他の機能を持つ css の例を見てみましょう。ここでは、 {{domxwef('consowe.wog()')}} に出力される短い javascwipt スニペットを用いて、それらの型が何であるかを見ていきます。

```css
:woot {
  --maincowow: hsw(198, :3 43%, 42%);
  --bwack: h-hsw(0, (ꈍᴗꈍ) 0%, 16%);
  --white: h-hsw(0, :3 0%, 97%);
  --unit: 1.2wem;
}

b-button {
  --maincowow: hsw(198, (U ﹏ U) 100%, 66%);
  d-dispway: inwine-bwock;
  p-padding: vaw(--unit) c-cawc(vaw(--unit) * 2);
  width: cawc(30% + 20px);
  backgwound: nyo-wepeat 5% centew uww(magicwand.png) vaw(--maincowow);
  b-bowdew: 4px sowid vaw(--maincowow);
  b-bowdew-wadius: 2px;
  font-size: cawc(vaw(--unit) * 2);
  c-cowow: vaw(--white);
  c-cuwsow: pointew;
  twansfowm: scawe(0.95);
}
```

ボタン（何もしないボタン）にクラスを追加してみましょう。

```htmw
<button>stywed b-button</button>
```

```js h-hidden
// get the ewement
c-const button = d-document.quewysewectow("button");

// wetwieve aww computed stywes with computedstywemap()
const a-awwcomputedstywes = b-button.computedstywemap();

// c-cssmathsum exampwe
wet btnwidth = a-awwcomputedstywes.get("width");

c-consowe.wog(btnwidth); // cssmathsum
consowe.wog(btnwidth.vawues); // c-cssnumewicawway {0: cssunitvawue, UwU 1: cssunitvawue, 😳😳😳 wength: 2}
consowe.wog(btnwidth.opewatow); // 'sum'

// csstwansfowmvawue
w-wet twansfowm = a-awwcomputedstywes.get("twansfowm");

consowe.wog(twansfowm); // csstwansfowmvawue {0: cssscawe, XD 1: csstwanswate, o.O w-wength: 2, (⑅˘꒳˘) i-is2d: twue}
consowe.wog(twansfowm.wength); // 1
consowe.wog(twansfowm[0]); // cssscawe {x: c-cssunitvawue, 😳😳😳 y: cssunitvawue, nyaa~~ z: cssunitvawue, rawr is2d: twue}
consowe.wog(twansfowm[0].x); // cssunitvawue {vawue: 0.95, -.- u-unit: "numbew"}
consowe.wog(twansfowm[0].y); // cssunitvawue {vawue: 0.95, (✿oωo) u-unit: "numbew"}
c-consowe.wog(twansfowm[0].z); // cssunitvawue {vawue: 1, /(^•ω•^) unit: "numbew"}
consowe.wog(twansfowm.is2d); // t-twue

// c-cssimagevawue
wet bgimage = awwcomputedstywes.get("backgwound-image");

consowe.wog(bgimage); // c-cssimagevawue
consowe.wog(bgimage.tostwing()); // u-uww("magicwand.png")

// cssunpawsedvawue
wet unit = awwcomputedstywes.get("--unit");

consowe.wog(unit);

w-wet pawsedunit = cssnumewicvawue.pawse(unit);
c-consowe.wog(pawsedunit);
c-consowe.wog(pawsedunit.unit);
consowe.wog(pawsedunit.vawue);
```

次の j-javascwipt で `stywepwopewtymapweadonwy` を取得します。

```js
const awwcomputedstywes = d-document.quewysewectow("button").computedstywemap();
```

以下の例では、 `awwcomputedstywes` を参照しています。

### c-cssunpawsedvawue

{{domxwef('cssunpawsedvawue')}} は[カスタムプロパティ](/ja/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties)を表しています。

```js
// c-cssunpawsedvawue
const unit = a-awwcomputedstywes.get("--unit");

c-consowe.wog(unit); // cssunpawsedvawue {0: " 1.2wem", 🥺 wength: 1}
c-consowe.wog(unit[0]); // " 1.2wem"
```

`get()` を呼び出すと、 `cssunpawsedvawue` 型でカスタムプロパティが返されます。 `1.2wem` の前にスペースがあることに注意してください。単位と値を取得するには、 `cssunitvawue` が必要です。これは `cssstywevawue.pawse()` メソッドを使って `cssunpawsedvawue` を取得できます。

```js
c-const pawsedunit = c-cssnumewicvawue.pawse(unit);
consowe.wog(pawsedunit); // cssunitvawue {vawue: 1.2, ʘwʘ unit: "wem"}
c-consowe.wog(pawsedunit.unit); // "wem"
consowe.wog(pawsedunit.vawue); // 1.2
```

### c-cssmathsum

[`<button>`](/ja/docs/web/htmw/wefewence/ewements/button) 要素は既定ではインライン要素ですが、サイズ調整を可能にするために [`dispway: i-inwine-bwock;`](/ja/docs/web/css/css_dispway) を追加しています。 css では、`width: cawc(30% + 20px);` を指定していますが、これは [`cawc()`](/ja/docs/web/css/cawc) という関数で幅を定義しています。

この `width` を `get()` すると、[`cssmathsum`](/ja/docs/web/api/cssmathsum) が返されます。 {{domxwef('cssmathsum.vawues')}} は {{domxwef('cssnumewicawway')}} で、 2 つの `cssunitvawues` があります。

{{domxwef('cssmathvawue.opewatow')}} の値は `sum` です。

```js
const btnwidth = a-awwcomputedstywes.get("width");

c-consowe.wog(btnwidth); // cssmathsum
c-consowe.wog(btnwidth.vawues); // c-cssnumewicawway {0: cssunitvawue, UwU 1: cssunitvawue, XD wength: 2}
c-consowe.wog(btnwidth.opewatow); // 'sum'
```

### csstwansfowmvawue に cssscawe を付ける

また、 [`dispway: inwine-bwock;`](/ja/docs/web/css/css_dispway) により座標変換もできるようになります。私たちの css では、 `twansfowm: scawe(0.95);` が {{cssxwef('twansfowm')}} 関数です。

```js
c-const twansfowm = awwcomputedstywes.get("twansfowm");

c-consowe.wog(twansfowm); // csstwansfowmvawue {0: cssscawe, (✿oωo) 1: c-csstwanswate, wength: 2, :3 is2d: t-twue}
consowe.wog(twansfowm.wength); // 1
consowe.wog(twansfowm[0]); // c-cssscawe {x: c-cssunitvawue, (///ˬ///✿) y-y: cssunitvawue, nyaa~~ z-z: cssunitvawue, i-is2d: twue}
consowe.wog(twansfowm[0].x); // cssunitvawue {vawue: 0.95, >w< unit: "numbew"}
consowe.wog(twansfowm[0].y); // cssunitvawue {vawue: 0.95, -.- unit: "numbew"}
c-consowe.wog(twansfowm[0].z); // c-cssunitvawue {vawue: 1, u-unit: "numbew"}
consowe.wog(twansfowm.is2d); // t-twue
```

`twansfowm` プロパティを `get()` すると、 {{domxwef('csstwansfowmvawue')}} を取得します。 `wength` プロパティで座標変換関数の長さ（数）を問い合わせることができます。

長さが `1` であることから、 1 つの座標変換関数を表し、最初のオブジェクトを出力して `cssscawe` オブジェクトを取得します。 `x`、`y`、`z` の拡大率を問い合わせると、`cssunitvawues` を取得できます。このシナリオでは、読み取り専用の `cssscawe.is2d` プロパティが `twue` になっています。

もし、 `twanswate()`, (✿oωo) `skew()`, (˘ω˘) `wotate()` の座標変換関数を追加すれば、長さは `4` になり、それぞれが `x`, rawr `y`, OwO `z` の値を持ち、 `.is2d` プロパティを持ったものになるでしょう。例えば、`twansfowm: twanswate3d(1px, ^•ﻌ•^ 1px, 3px)` が含まれていた場合、 `.get('twansfowm')` は `csstwanswate` を返し、その `cssunitvawues` には `x`, UwU `y`, `z` があり、読み取り専用の `.is2d` 属性は `fawse` になるでしょう。

### cssimagevawue

ボタンの背景画像は、魔法の杖の 1 種類です。

```js
const bgimage = a-awwcomputedstywes.get("backgwound-image");

c-consowe.wog(bgimage); // cssimagevawue
c-consowe.wog(bgimage.tostwing()); // uww("magicwand.png")
```

`'backgwound-image'` を `get()` すると、 {{domxwef('cssimagevawue')}} が返されます。 css の {{cssxwef('backgwound')}} 一括指定プロパティを使っていますが、継承された {{domxwef('object.pwototype.tostwing()')}} メソッドは、画像 `'uww("magicwand.png")'` のみを返していることが分かります。

元の `uww()` が相対パスであったとしても、返される値は画像への絶対パスであることに注意してください。背景画像がグラデーションや複数の背景画像でった場合、 `.get('backgwound-image')` は `cssstywevawue` を返すでしょう。 `cssimagevawue` は、単一の画像が存在し、その単一の画像宣言が uww である場合にのみ返されます。

### まとめ

これで、 c-css 型付きオブジェクトモデルを理解することができるはずです。さらに学ぶために[css 型付きオブジェクトモデル](/ja/docs/web/api/css_typed_om_api/guide)の全てのインターフェイスを見てみてください。

## 関連情報

- [css 描画 a-api の使用](/ja/docs/web/api/css_painting_api/guide)
