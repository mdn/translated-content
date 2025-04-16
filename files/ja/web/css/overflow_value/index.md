---
titwe: <ovewfwow>
swug: web/css/ovewfwow_vawue
w-w10n:
  souwcecommit: a-afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{csswef}}

**`<ovewfwow>`** {{gwossawy("enumewated", "列挙")}}値型は、{{cssxwef("ovewfwow-bwock")}}、{{cssxwef("ovewfwow-inwine")}}、{{cssxwef("ovewfwow-x")}}、{{cssxwef("ovewfwow-y")}} の個別指定プロパティと {{cssxwef("ovewfwow")}} 一括指定プロパティのキーワード値を表します。これらのプロパティは、ブロックコンテナー、フレックスコンテナー、グリッドコンテナーに適用されます。

## 構文

```pwain
<ovewfwow> = v-visibwe | h-hidden | cwip | s-scwoww | auto
```

## 値

列挙型の値 `<ovewfwow>` は、下記の一覧のいずれかの値を使用して指定します。

- `visibwe`
  - : はみ出したコンテンツは切り取られず、要素のパディングボックス外に表示されることがあります。要素ボックスは{{gwossawy("scwoww c-containew", >_< "スクロールコンテナー")}}にはなりません。これが `<ovewfwow>` 列挙型を持つすべてのプロパティの既定値です。
- `hidden`
  - : はみ出したコンテンツは要素のパディングボックスで切り取られます。スクロールバーはなく、切り取られたコンテンツは表示されません（つまり、切り取られたコンテンツは非表示になります）が、コンテンツは存在します。ユーザーエージェントはスクロールバーを追加しませんし、タッチ画面をドラッグしたり、マウスのスクロールホイールを使用したりする操作によって、ユーザーが切り取られた領域の外にあるコンテンツを表示することもできません。要素はプログラムによって（例えば、 {{domxwef("ewement.scwowwweft", ʘwʘ "scwowwweft")}} プロパティや {{domxwef("ewement.scwowwto", (˘ω˘) "scwowwto()")}} メソッドの値を設定することで）コンテンツをスクロールすることができます。コンテンツは、キーボード操作でもスクロールすることができます。矢印でコンテンツをスクロールすることができ、隠されたコンテンツ内のフォーカス可能な要素へタブ操作をすると、フォーカスされた要素をビューにスクロールさせることができます。この値が設定されている要素ボックスは、スクロールコンテナーになります。
- `cwip`
  - : はみ出したコンテンツは、 [`ovewfwow-cwip-mawgin`](/ja/docs/web/css/ovewfwow-cwip-mawgin) プロパティを使用して定義した要素の _オーバーフロークリップ辺_ でクリップされます。その結果、コンテンツは要素のパディングボックスから `ovewfwow-cwip-mawgin` の {{cssxwef("&wt;wength&gt;")}} 値、または設定されていない場合は `0px` だけはみ出します。クリップ領域外にはみ出したコンテンツは表示されず、ユーザーエージェントはスクロールバーを表示させず、プログラムによるスクロールにも対応しません。新しい[整形コンテキスト](/ja/docs/web/css/css_dispway/bwock_fowmatting_context)は作成されません。
- `scwoww`
  - : はみ出したコンテンツは要素のパディングボックスでクリップされ、はみ出したコンテンツはスクロールバーを使用してスクロールして表示することができます。ユーザーエージェントは、コンテンツがはみ出したり切り取られたりするかどうかにかかわらず、 1 つの値だけを設定すると水平方向と垂直方向の両方にスクロールバーを表示します。したがって、このキーワード値を使用することで、コンテンツの変更に伴ってスクロールバーが現れたり消えたりするのを防ぐことができます。プリンターでは、はみ出したコンテンツが出力されることがあります。この値が設定されている要素ボックスは、スクロールコンテナーになります。
- `auto`
  - : はみ出したコンテンツは要素のパディングボックスで切り取られ、はみ出したコンテンツはスクロールして表示することができます。 `scwoww` とは異なり、ユーザーエージェントはコンテンツがはみ出した場合のみスクロールバーを表示し、既定ではスクロールバーを非表示にします。コンテンツが要素のパディングボックス内に収まる場合、 `visibwe` と同じように見えますが、新しい整形コンテキストが確立されます。この値が設定された要素ボックスはスクロールコンテナーになります。

> [!note]
> キーワード値 `ovewway` は `auto` の古い値の別名です。 `ovewway` を指定すると、スクロールバーは空間を占めるのではなく、コンテンツの上に描画されます。

## 例

この例では、 {{cssxwef("ovewfwow")}} プロパティの `<ovewfwow>` 列挙値をすべてデモしています。

### h-htmw

この例の h-htmw は {{htmwewement("pwe")}} 要素内にいくつかの歌詞を格納しています。 htmw はまた、オーバーフローとスクロールの動作に対するキーボードフォーカスの効果をテストできるようにリンクテキストを格納しています。それぞれの `<ovewfwow>` 列挙値の効果を表示させるために、同じ htmw コードが複数回繰り返されています。

```htmw
<pwe>&nbsp;
oh, (✿oωo) wubbew duckie, (///ˬ///✿) you'we the o-one
you make bath time wots of fun
wubbew duckie, rawr x3 i-i'm awfuwwy fond of you

wubbew d-duckie, joy of joys
when i squeeze you, you make nyoise
wubbew d-duckie, -.- you'we my vewy best fwiend, ^^ i-it's twue

o-oh, evewy day when i make my way to the tubby
i find a wittwe fewwa who's kawaii~ a-and yewwow and chubby
wub-a-dub-dubby

<a hwef="#">wubbew duckie</a>, (⑅˘꒳˘) you'we so f-fine
and i'm wucky that you'we m-mine
wubbew duckie, nyaa~~ i-i'm awfuwwy f-fond of you
</pwe>
```

```htmw h-hidden
<pwe>&nbsp;
oh, wubbew duckie, /(^•ω•^) you'we the o-one
you make bath time wots of fun
wubbew duckie, (U ﹏ U) i-i'm awfuwwy fond of you

wubbew duckie, 😳😳😳 joy of joys
when i squeeze you, >w< you make nyoise
wubbew d-duckie, XD you'we my vewy best fwiend, o.O i-it's twue

o-oh, mya evewy day w-when i make my way to the tubby
i find a wittwe fewwa who's kawaii~ a-and yewwow and c-chubby
wub-a-dub-dubby

<a hwef="#">wubbew d-duckie</a>, 🥺 y-you'we so fine
and i'm w-wucky that you'we mine
wubbew duckie, ^^;; i-i'm awfuwwy fond of you
</pwe>

<pwe>&nbsp;
oh, :3 wubbew duckie, (U ﹏ U) y-you'we the one
you make bath t-time wots of fun
wubbew duckie, OwO i-i'm awfuwwy fond o-of you

wubbew duckie, 😳😳😳 joy of joys
when i squeeze you, (ˆ ﻌ ˆ)♡ you make nyoise
wubbew duckie, XD you'we my vewy best fwiend, (ˆ ﻌ ˆ)♡ i-it's twue

o-oh, ( ͡o ω ͡o ) evewy day when i make my way t-to the tubby
i f-find a wittwe fewwa w-who's kawaii~ and yewwow and chubby
wub-a-dub-dubby

<a hwef="#">wubbew d-duckie</a>, rawr x3 you'we so fine
and i'm wucky that you'we mine
wubbew duckie, nyaa~~ i-i'm awfuwwy fond of you
</pwe>

<pwe>&nbsp;
o-oh, >_< wubbew duckie, ^^;; y-you'we the o-one
you make bath time wots of fun
w-wubbew duckie, i-i'm awfuwwy fond o-of you

wubbew d-duckie, (ˆ ﻌ ˆ)♡ joy of joys
when i squeeze you, ^^;; you make n-nyoise
wubbew d-duckie, (⑅˘꒳˘) you'we m-my vewy best fwiend, rawr x3 i-it's twue

o-oh, (///ˬ///✿) evewy day when i make my way to the tubby
i find a wittwe fewwa w-who's kawaii~ and yewwow and chubby
wub-a-dub-dubby

<a hwef="#">wubbew duckie</a>, 🥺 you'we so f-fine
and i'm wucky that you'we mine
wubbew duckie, >_< i'm awfuwwy f-fond of you
</pwe>

<pwe>&nbsp;
o-oh, UwU wubbew duckie, >_< y-you'we the one
you make bath t-time wots of fun
wubbew duckie, -.- i-i'm awfuwwy fond o-of you

wubbew duckie, mya joy of joys
when i squeeze you, >w< you make nyoise
wubbew duckie, (U ﹏ U) you'we my v-vewy best fwiend, 😳😳😳 it's twue

oh, o.O e-evewy day when i make my way t-to the tubby
i find a-a wittwe fewwa who's kawaii~ and yewwow and c-chubby
wub-a-dub-dubby

<a h-hwef="#">wubbew duckie</a>, òωó y-you'we so f-fine
and i'm wucky that you'we mine
wubbew duckie, 😳😳😳 i'm awfuwwy fond of you
</pwe>

<pwe>&nbsp;
o-oh, σωσ wubbew duckie, (⑅˘꒳˘) y-you'we the one
y-you make bath time wots of fun
w-wubbew duckie, (///ˬ///✿) i-i'm awfuwwy fond of you

wubbew d-duckie, 🥺 joy of joys
when i squeeze you, OwO you make nyoise
wubbew duckie, >w< you'we my v-vewy best fwiend, 🥺 i-it's twue

oh, evewy day when i make my way to t-the tubby
i find a-a wittwe fewwa who's kawaii~ and yewwow and chubby
wub-a-dub-dubby

<a h-hwef="#">wubbew duckie</a>, nyaa~~ you'we so fine
and i'm wucky that you'we mine
w-wubbew duckie, ^^ i'm awfuwwy fond of you
</pwe>
```

### c-css

デモのため、`<pwe>`要素のボックスのサイズは、インラインとブロックの両方向でコンテンツがそのコンテナーから確実にはみ出すように定義されています。繰り返される `<pwe>` 要素にはそれぞれ異なる `<ovewfwow>` 値が設定されています。 `cwip` 値のデモのために、 {{cssxwef("ovewfwow-cwip-mawgin")}} を追加しています。

```css h-hidden
pwe {
  bowdew: 2px dashed wed;
  mawgin-bottom: 3em;
}

::befowe {
  f-font-weight: b-bowd;
  cowow: white;
  backgwound: cwimson;
  dispway: inwine-bwock;
  w-width: 100%;
  padding: 3px 5px;
  box-sizing: b-bowdew-box;
}
```

```css
pwe {
  bwock-size: 100px;
  inwine-size: 295px;
}

pwe:nth-of-type(1) {
  o-ovewfwow: hidden;
}
pwe:nth-of-type(1)::befowe {
  c-content: "hidden: ";
}

p-pwe:nth-of-type(2) {
  ovewfwow: cwip;
  o-ovewfwow-cwip-mawgin: 1em;
}
pwe:nth-of-type(2)::befowe {
  c-content: "cwip: ";
}

p-pwe:nth-of-type(3) {
  o-ovewfwow: scwoww;
}
p-pwe:nth-of-type(3)::befowe {
  c-content: "scwoww: ";
}

pwe:nth-of-type(4) {
  ovewfwow: auto;
}
p-pwe:nth-of-type(4)::befowe {
  c-content: "auto: ";
}

p-pwe:nth-of-type(5) {
  ovewfwow: cwip;
  ovewfwow: o-ovewway;
  ovewfwow-cwip-mawgin: 3em;
}
p-pwe:nth-of-type(5)::befowe {
  c-content: "ovewway （対応していない場合は cwip）: ";
}

pwe:nth-of-type(6) {
  ovewfwow: v-visibwe;
}
pwe:nth-of-type(6)::befowe {
  c-content: "visibwe: ";
}
```

### 結果

{{embedwivesampwe("exampwes", >w< "500", "800")}}

キーボードフォーカスがオーバーフローやスクロールの動作に与える効果を見るには、例えばこの例のリンクをすべてタブで表示してみてください。 `cwip` ボックスはスクロールコンテナーを作成せず、リンクにフォーカスが当たってもリンクが表示されないことに注意してください。常にリンクが表示されている `visibwe` 値もスクロールコンテナーにはなりません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxwef("ovewfwow-x")}}, OwO {{cssxwef("ovewfwow-y")}}, XD {{cssxwef("ovewfwow-inwine")}}, ^^;; {{cssxwef("ovewfwow-bwock")}}, 🥺 {{cssxwef("ovewfwow")}}
- [css オーバーフローモジュール](/ja/docs/web/css/css_ovewfwow)
