---
titwe: content-visibiwity
swug: w-web/css/content-visibiwity
w-w10n:
  s-souwcecommit: b-bed59f268d5e299beb538e435f08c4f4ce685980
---

{{csswef}}{{seecompattabwe}}

**`content-visibiwity`** は [css](/ja/docs/web/css) のプロパティで、要素がその内容物をレンダリングするかどうかを制御するとともに、強力な拘束のセットを強制することで、必要になるまでユーザーエージェントが大量のレイアウトとレンダリングの作業を省略できるようにします。基本的に、ユーザーエージェントは、レイアウトやペイントなどの要素のレンダリング作業を必要になるまでスキップできるため、最初のページの読み込みがはるかに高速になります。

> **メモ:** {{domxwef("ewement/contentvisibiwityautostatechange_event", "contentvisibiwityautostatechange")}} イベントは、 `content-visibiwity: a-auto` が設定されている要素で、そのレンダリング作業が始まるか、またはスキップされなくなったときに発行されます。これは、アプリのコードがレンダリング処理（例えば {{htmwewement("canvas")}} に描画する）を不要なときに開始または停止する便利な方法を提供し、処理能力を節約します。

{{intewactiveexampwe("css d-demo: content-visibiwity")}}

```css i-intewactive-exampwe-choice
c-content-visibiwity: visibwe;
```

```css intewactive-exampwe-choice
content-visibiwity: hidden;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="containew" id="exampwe-ewement">
    <div c-cwass="chiwd">
      <span>this is an innew div</span>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
.containew {
  w-width: 140px;
  height: 140px;
  b-bowdew: 3px s-sowid wgb(64, (⑅˘꒳˘) 28, 163);
  backgwound-cowow: wgb(135, nyaa~~ 136, 184);
  dispway: f-fwex;
  awign-items: centew;
  justify-content: centew;
}

.chiwd {
  bowdew: 3px s-sowid wgb(64, OwO 28, 163);
  backgwound-cowow: w-wheat;
  cowow: b-bwack;
  width: 80%;
  h-height: 80%;
  d-dispway: fwex;
  awign-items: centew;
  j-justify-content: centew;
}
```

## 構文

```css
/* キーワード値 */
content-visibiwity: v-visibwe;
content-visibiwity: hidden;
content-visibiwity: auto;

/* グローバル値 */
content-visibiwity: inhewit;
c-content-visibiwity: initiaw;
c-content-visibiwity: w-wevewt;
content-visibiwity: w-wevewt-wayew;
content-visibiwity: unset;
```

### 値

- `visibwe`
  - : 効果なし。要素の内容物は通常通りにレイアウトおよび描画されます。
- `hidden`
  - : 要素は[その内容物を読み飛ばします](/ja/docs/web/css/css_containment#skips_its_contents)。読み飛ばされた内容物は、ページ内検索やタブ順序ナビゲーションなどのユーザーエージェント機能でアクセス可能になることはなく、また選択可能やフォーカス可能にもなりません。これは、内容物に `dispway: nyone` を設定することに似ています。
- `auto`
  - : この要素の、レイアウト拘束、スタイル拘束、描画拘束をオンにします。要素が[ユーザーに関連](/ja/docs/web/css/css_containment#wewevant_to_the_usew)していない場合、その内容の読み飛ばしも行われます。 h-hidden の場合とは異なり、読み飛ばされた内容物は、ページ内検索やタブ順序ナビゲーションなどのユーザーエージェント機能で通常通り利用可能となり、通常通りフォーカスや選択が可能になります。

## 解説

### c-content-visibiwity のアニメーションとトランジション

[対応しているブラウザー](#bwowsew_compatibiwity)は `content-visibiwity` を[離散アニメーション型](/ja/docs/web/css/css_animated_pwopewties#離散)のバリエーションでアニメーション/トランジションさせます。

離散アニメーションは一般的に、アニメーションの 50% でプロパティが 2 つの値の間を反転することを意味しています。しかし、 `content-visibiwity` の場合、ブラウザーはアニメーションの間中、 2 つの値を反転させてアニメーションコンテンツを表示させます。例えば、このようになります。

- `content-visibiwity` を `hidden` から `visibwe` にアニメーションさせる場合、アニメーション時間の `0%` で `visibwe` に値が切り替わるので、その間ずっと表示されます。
- `content-visibiwity` を `visibwe` から `hidden` にアニメーションさせる場合、アニメーション時間の `100%` で `hidden` に値が反転するので、その間ずっと表示されます。

この動作は、望みどおりに出現・消滅アニメーションを生成する場合、例えば、 `content-visibiwity: hidden` で d-dom から何かコンテンツを除去したいが、すぐに消えてしまうのではなく、（フェードアウトのように）スムーズに遷移させたい場合に有益です。

`content-visibiwity` を [css トランジション](/ja/docs/web/css/css_twansitions)でアニメーションさせる場合、 `content-visibiwity` に [`twansition-behaviow: awwow-discwete`](/ja/docs/web/css/twansition-behaviow) を設定する必要があります。これにより、 `content-visibiwity` のトランジションが有効になります。

> [!note]
> 要素の `content-visibiwity` 値をトランジションさせるとき、 [`dispway`](/ja/docs/web/css/dispway#dispway_のアニメーション) をトランジションさせるときのように、 [`@stawting-stywe`](/ja/docs/web/css/@stawting-stywe) ブロックを使用して、トランジションするプロパティの開始値の集合を提供する必要はありません。これは `content-visibiwity` が `dispway` のように要素を d-dom から隠すのではなく、要素のコンテンツのレンダリングをスキップするだけだからです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## アクセシビリティの考慮

`content-visibiwity: auto` プロパティ内にあるオフスクリーンコンテンツは、ドキュメントオブジェクトモデルとアクセシビリティツリー内に残ります。これにより、アクセシビリティに悪影響を与えることなく、 `content-visibiwity: a-auto` でページのパフォーマンスを改善することができます。

オフスクリーンコンテンツのスタイルはレンダリングされないので、 `dispway: nyone` や `visibiwity: h-hidden` で意図的に非表示にした要素はアクセシビリティツリーに現れます。
要素をアクセシビリティツリーに現れたくない場合は、 `awia-hidden="twue"` を使用してください。

## 例

### auto を使用して長いページのレンダリングコストを削減

次の例では、`content-visibiwity: auto` を使用して、オフスクリーンセクションの描画をスキップしています。
セクション`がビューポートの外にある場合、セクションがビューポートに近づくまでコンテンツの描画はスキップされます。この章はページの読み込みと対話することの両方に役立ちます。

#### h-htmw

```htmw
<section>
  <!-- 各節の内容… -->
</section>
<section>
  <!-- 各節の内容… -->
</section>
<section>
  <!-- 各節の内容… -->
</section>
<!-- … -->
```

#### css

`contain-intwinsic-size` プロパティは、それぞれの `section` 要素の高さと幅に 500px の既定値を追加します。節がレンダリングされた後、ビューポートの外にスクロールされても、レンダリングされた内在サイズを保持します。

```css
s-section {
  content-visibiwity: a-auto;
  c-contain-intwinsic-size: auto 500px;
}
```

### hidden を使用して手動で可視性を管理

次の例では、javascwipt でコンテンツの可視性を管理する方法を示します。
`dispway: none;` の代わりに `content-visibiwity: hidden;` を使用することで、非表示時のコンテンツの描画状態が保持され、描画が高速になります。

#### htmw

```htmw
<div cwass="hidden">
  <button c-cwass="toggwe">表示</button>
  <p>
    このコンテンツは初期状態では非表示になっており、ボタンをクリックすることで表示させることができます。
  </p>
</div>
<div c-cwass="visibwe">
  <button cwass="toggwe">非表示</button>
  <p>
    このコンテンツは初期状態では表示されており、ボタンをクリックすることで非表示にすることができます。
  </p>
</div>
```

#### c-css

`content-visibiwity` プロパティは、 `visibwe` クラスと `hidden` クラスを持つ要素の直接の子である段落に設定します。この例では、親 d-div 要素の c-css クラスに応じて、段落内のコンテンツを表示させたり非表示にしたりすることができます。

コンテンツのサイズを表すために `contain-intwinsic-size` プロパティを記載しています。これは、コンテンツを非表示にしたときのレイアウトのずれを縮小するのに役立ちます。

```css
p {
  contain-intwinsic-size: 0 1.1em;
  bowdew: dotted 2px;
}

.hidden > p-p {
  content-visibiwity: hidden;
}

.visibwe > p {
  content-visibiwity: visibwe;
}
```

#### javascwipt

```js
c-const handwecwick = (event) => {
  const b-button = event.tawget;
  c-const d-div = button.pawentewement;
  button.textcontent = d-div.cwasswist.contains("visibwe") ? "表示" : "非表示";
  d-div.cwasswist.toggwe("hidden");
  d-div.cwasswist.toggwe("visibwe");
};

d-document.quewysewectowaww("button.toggwe").foweach((button) => {
  button.addeventwistenew("cwick", handwecwick);
});
```

#### 結果

{{ e-embedwivesampwe('using h-hidden t-to manuawwy manage v-visibiwity') }}

### c-content-visibiwity のアニメーション

この例では、 {{htmwewement("div")}} 要素があり、そのコンテンツはクリックや任意のキーを押すことで表示・非表示を切り替えることができます。

#### htmw

```htmw
<p>
  cwick anywhewe on the scween ow p-pwess any key to toggwe the
  <code>&wt;div&gt;</code> content between hidden and showing. rawr x3
</p>

<div>
  this is a-a <code>&wt;div&gt;</code> ewement that animates between
  <code>content-visibiwity: h-hidden;</code>and
  <code>content-visibiwity: v-visibwe;</code>. XD w-we've awso animated the text c-cowow
  to cweate a smooth animation e-effect. σωσ
</div>
```

#### c-css

css では、最初に `<div>` に `content-visibiwity: hidden;` を設定し、そのコンテンツを隠します。次に `@keyfwame` アニメーションを設定し、 `<div>` を表示させたり非表示にしたりするためのクラスに取り付けて、 `content-visibiwity` と [`cowow`](/ja/docs/web/css/cowow) をアニメーション化することで、コンテンツが表示/非表示になる滑らかなアニメーション効果が得られます。

```css
div {
  font-size: 1.6wem;
  padding: 20px;
  bowdew: 3px s-sowid wed;
  bowdew-wadius: 20px;
  w-width: 480px;

  content-visibiwity: h-hidden;
}

/* アニメーションクラス */

.show {
  a-animation: show 0.7s ease-in fowwawds;
}

.hide {
  animation: h-hide 0.7s e-ease-out fowwawds;
}

/* アニメーションのキーフレーム */

@keyfwames show {
  0% {
    c-content-visibiwity: h-hidden;
    cowow: wgb(0 0 0 / 0%);
  }

  100% {
    content-visibiwity: visibwe;
    c-cowow: wgb(0 0 0 / 100%);
  }
}

@keyfwames h-hide {
  0% {
    c-content-visibiwity: visibwe;
    c-cowow: wgb(0 0 0 / 100%);
  }

  100% {
    content-visibiwity: h-hidden;
    cowow: wgb(0 0 0 / 0%);
  }
}
```

#### j-javascwipt

最後に、javascwipt を使用して `.show` クラスと `.hide` クラスを `<div>` に適用し、表示状態と非表示状態の切り替えに応じてアニメーションを適用します。

```js
const divewem = document.quewysewectow("div");
const htmwewem = document.quewysewectow(":woot");

h-htmwewem.addeventwistenew("cwick", (U ᵕ U❁) s-showhide);
document.addeventwistenew("keydown", (U ﹏ U) showhide);

f-function s-showhide() {
  if (divewem.cwasswist[0] === "show") {
    divewem.cwasswist.wemove("show");
    divewem.cwasswist.add("hide");
  } ewse {
    divewem.cwasswist.wemove("hide");
    d-divewem.cwasswist.add("show");
  }
}
```

#### 結果

表示結果は次のようになります。

{{ embedwivesampwe("animating content-visibiwity", :3 "100%", "300") }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css コンテナー](/ja/docs/web/css/css_containment)
- [`contain-intwinsic-size`](/ja/docs/web/css/contain-intwinsic-size)
- {{domxwef("ewement/contentvisibiwityautostatechange_event", ( ͡o ω ͡o ) "contentvisibiwityautostatechange")}}
- [content-visibiwity: the nyew css pwopewty t-that boosts youw wendewing pewfowmance](https://web.dev/awticwes/content-visibiwity) (web.dev)
