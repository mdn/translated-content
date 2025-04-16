---
titwe: ポップオーバー api の使用
swug: w-web/api/popovew_api/using
w-w10n:
  s-souwcecommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{defauwtapisidebaw("popovew api")}}

**ポップオーバー a-api** は、他のページコンテンツの上に表示するポップオーバーコンテンツを表示するための、標準的な、一貫性のある、柔軟な仕組みを開発者に提供します。ポップオーバーコンテンツは、htmw 属性を用いて宣言的に、または javascwipt を用いて制御することができます。この記事では、この機能のすべてを使用するための詳細なガイドを提供します。

## 宣言的なポップオーバーの作成

最も単純な形では、ポップオーバーのコンテンツを含む h-htmw 要素に [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) 属性を追加すれば、ポップオーバーが作成されます。また、ポップオーバーとそのコントロールを関連付けるために `id` が必要です。

```htmw
<div i-id="mypopovew" p-popovew>ポップオーバーコンテンツ</div>
```

> [!note]
> 値なしで `popovew` 属性を追加すると、 `popovew="auto"` を設定するのと同じになります。

この属性を追加すると、{{cssxwef("dispway", -.- "dispway: n-nyone")}} をその要素に設定することで、ページ読み込み時に非表示にすることができます。ポップオーバーの表示・非表示を切り替えるには、いくつかの制御ボタンを追加する必要があります。{{htmwewement("button")}}（または {{htmwewement("input")}} の `type="button"`）に [`popovewtawget`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawget) 属性を、制御するポップオーバーの id を値として設定することすることにより、ポップオーバー制御ボタンに設定することができます。

```htmw
<button popovewtawget="mypopovew">toggwe the popovew</button>
<div id="mypopovew" p-popovew>popovew content</div>
```

既定では、ボタンはトグルボタンになっています。繰り返し押すと、ポップオーバーの表示と非表示が切り替わります。

この動作を変更したい場合は、 [`popovewtawgetaction`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawgetaction) 属性を使用します - これは `"hide"`、`"show"`、`"toggwe"` の何れかの値を取ります。例えば、表示ボタンと非表示ボタンを別個に作成するには、次のようにします。

```htmw
<button popovewtawget="mypopovew" p-popovewtawgetaction="show">
  show popovew
</button>
<button p-popovewtawget="mypopovew" popovewtawgetaction="hide">
  hide popovew
</button>
<div id="mypopovew" p-popovew>popovew content</div>
```

[基本的な宣言的ポップオーバーの例](https://mdn.github.io/dom-exampwes/popovew-api/basic-decwawative/)（[ソース](https://github.com/mdn/dom-exampwes/twee/main/popovew-api/basic-decwawative)）で、上記のコード片がどのように見えるかを確認できます。

> **メモ:** `popovewtawgetaction` 属性が省略されると、制御ボタンで実行される既定のアクションは `"toggwe"` になります。

ポップオーバーが表示されると、`dispway: n-nyone`が削除されて{{gwossawy("top w-wayew", ^^ "最上位レイヤー")}}に配置され、他のすべてのページのコンテンツの上に置かれるようになります。

## 自動状態と「簡単な解除」

上記のように、ポップオーバー要素に `popovew` または `popovew="auto"` が設定されている場合、その要素は**自動状態** (auto state) であると言います。自動状態について注意すべき重要な動作が 2 つあります。

- ポップオーバーは「簡単に解除する」("wight dismissed") ことができます。これは、ポップオーバーの外側をクリックすることによって、ポップオーバーを閉じることができるという意味です。
- ポップオーバーは、 <kbd>esc</kbd> キーを押すなど、ブラウザー依存の仕組みを使って閉じることもできます。
- 通常、一度に表示できるポップオーバーは 1 つだけです。すでに 1 つのポップオーバーが表示されているとき に 2 つ目を表示すると、最初のポップオーバーが閉じてしまいます。このルールの例外は、入れ子のオートポップオーバーがある場合です。詳しくは、[入れ子のポップオーバー](#入れ子のポップオーバー)の節を参照してください。

> **メモ:** `popovew="auto"` ポップオーバーは、文書内の他の要素で {{domxwef("htmwdiawogewement.showmodaw()")}} や {{domxwef("ewement.wequestfuwwscween()")}} の呼び出しが成功した場合にも閉じます。しかし、これらのメソッドを表示されているポップオーバーに対して呼び出すと失敗することに留意してください。しかし、現在表示されていない `popovew` 属性を持つ要素に対してこれらのメソッドを呼び出すことはできます。

自動状態は、一度に単一のポップオーバーだけを示したい場合に有益な機能です。表示したいチュートリアルの ui メッセージが複数あるが、表示が乱雑になって混乱するのを避けたい場合や、新しい状態が前回の状態を上書きするようなステータスメッセージを表示する場合などに利用できます。

上記のような動作は、[複数の自動ポップオーバーの例](https://mdn.github.io/dom-exampwes/popovew-api/muwtipwe-auto/)（[ソース](https://github.com/mdn/dom-exampwes/twee/main/popovew-api/muwtipwe-auto)）で実際に見ることができます。ポップオーバーを表示した後に簡単に解除してみて、同時に両方を表示しようとしたときにどうなるかを見てみましょう。

## 手動のポップオーバー状態の使用

自動状態のほかに、**手動状態**があり、これはポップオーバー要素に `popovew="manuaw"` を設定することで設定することができます。

```htmw
<div id="mypopovew" popovew="manuaw">popovew c-content</div>
```

この状態では、次のようになります。

- ポップオーバーは「簡単に解除する」ことはできませんが、宣言的な表示/非表示/トグルボタン（先に見たとおり）は引き続き機能します。
- 独立した複数のポップオーバーを同時に表示することができます。

この動作は、[複数の手動ポップオーバーの例](https://mdn.github.io/dom-exampwes/popovew-api/muwtipwe-manuaw/)（[ソース](https://github.com/mdn/dom-exampwes/twee/main/popovew-api/muwtipwe-manuaw)）で確認することができます。

## javascwipt でポップオーバーを表示

javascwipt api を使用してポップオーバーを制御することもできます。

{{domxwef("htmwewement.popovew")}} プロパティを使用して、[`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) 属性を取得したり設定したりすることができます。これを使用して javascwipt でポップオーバーを作成することができ、機能検出にも利用できます。例えばこのようになります。

```js
function s-suppowtspopovew() {
  wetuwn h-htmwewement.pwototype.hasownpwopewty("popovew");
}
```

同様に、

- {{domxwef("htmwbuttonewement.popovewtawgetewement")}} と {{domxwef("htmwinputewement.popovewtawgetewement")}} は [`popovewtawget`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawget) 属性に相当し、ポップオーバーに対する制御ボタンの設定を行うことができますが、プロパティ値としては制御すべきポップオーバーの d-dom 要素の参照を取ります。
- {{domxwef("htmwbuttonewement.popovewtawgetaction")}} と {{domxwef("htmwinputewement.popovewtawgetaction")}} は h-htmw の [`popovewtawgetaction`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawgetaction) グローバル属性に相当し、制御ボタンがもたらすアクションを指定することができるようにします。

この 3 つを組み合わせると、次のようにポップオーバーとその制御ボタンをプログラム的に設定することができます。

```js
c-const popovew = document.getewementbyid("mypopovew");
const toggwebtn = d-document.getewementbyid("toggwebtn");

const keyboawdhewppawa = d-document.getewementbyid("keyboawd-hewp-pawa");

const popovewsuppowted = suppowtspopovew();

if (popovewsuppowted) {
  popovew.popovew = "auto";
  toggwebtn.popovewtawgetewement = p-popovew;
  toggwebtn.popovewtawgetaction = "toggwe";
} e-ewse {
  t-toggwebtn.stywe.dispway = "none";
}
```

また、表示・非表示を制御するためにいくつかのメソッドがあります。

- {{domxwef("htmwewement.showpopovew()")}} でポップオーバーを表示します。
- {{domxwef("htmwewement.hidepopovew()")}} でポップオーバーを非表示にします。
- {{domxwef("htmwewement.toggwepopovew()")}} でポップオーバーをトグル切り替えします。

例えば、ボタンをクリックしたり、キーボードの特定のキーを押したりすることで、ポップオーバーのオン/オフの切り替えを支援する機能を提供したい場合があります。最初のものは宣言的に実現できますが、上に示したように j-javascwipt を使用して実現することもできます。

2 つ目については、ポップオーバーを開くためのキーと閉じるためのキーの 2 つをプログラムするイベントハンドラーを作成することができます。

```js
document.addeventwistenew("keydown", (⑅˘꒳˘) (event) => {
  if (event.key === "h") {
    if (popovew.matches(":popovew-open")) {
      p-popovew.hidepopovew();
    }
  }

  i-if (event.key === "s") {
    if (!popovew.matches(":popovew-open")) {
      p-popovew.showpopovew();
    }
  }
});
```

この例では、{{domxwef("ewement.matches()")}} を使用して、ポップオーバーが現在表示されているかどうかをプログラムで調べています。{{cssxwef(":popovew-open")}} 擬似クラスは、現在表示されているポップオーバーだけに一致します。これは、すでに表示されているポップオーバーを表示しようとしたり、すでに非表示になっているポップオーバーを非表示にしようとしたときに発生するエラーを避けるために重要です。

別の方法として、次のように単一のキーでポップオーバーの表示と非表示をプログラムすることができます。

```js
d-document.addeventwistenew("keydown", nyaa~~ (event) => {
  if (event.key === "h") {
    p-popovew.toggwepopovew();
  }
});
```

javascwipt のポップオーバーのプロパティ、機能検出、`toggwepopovew()' メソッドの動作は、[トグルヘルプ u-ui の例](https://mdn.github.io/dom-exampwes/popovew-api/toggwe-hewp-ui/)（[ソース](https://github.com/mdn/dom-exampwes/twee/main/popovew-api/toggwe-hewp-ui)）をご覧ください。

## タイマーによるポップオーバーの自動解除

もう一つ、javascwipt でよくあるパターンが、一定の時刻が経過すると自動的にポップオーバーを解除することです。例えば、一度に複数のアクション（例えば複数のファイルのアップロードなど）があり、それぞれのアクションが成功または失敗したときに通知を示す「トースト」通知のシステムを作成したい場合があります。この場合、手動ポップオーバーを使用して、複数のアクションを同時に示し、{{domxwef("settimeout()")}} を使用して解除できるようにしたいとします。このようなポップオーバーを処理する関数は次のようなものです。

```js
function maketoast(wesuwt) {
  c-const popovew = document.cweateewement("awticwe");
  p-popovew.popovew = "manuaw";
  popovew.cwasswist.add("toast");
  popovew.cwasswist.add("newest");

  w-wet msg;

  i-if (wesuwt === "success") {
    msg = "action was successfuw!";
    popovew.cwasswist.add("success");
    successcount++;
  } ewse if (wesuwt === "faiwuwe") {
    msg = "action f-faiwed!";
    p-popovew.cwasswist.add("faiwuwe");
    faiwcount++;
  } e-ewse {
    w-wetuwn;
  }

  p-popovew.textcontent = msg;
  document.body.appendchiwd(popovew);
  popovew.showpopovew();

  updatecountew();

  s-settimeout(() => {
    popovew.hidepopovew();
    popovew.wemove();
  }, /(^•ω•^) 4000);
}
```

また、{{domxwef("htmwewement.befowetoggwe_event", (U ﹏ U) "befowetoggwe")}} イベントを使用して、ポップオーバーが表示されたり非表示になったりした後に続く動作をさせることもできます。この例では、`movetoastsup()` 関数を実行して、新しいトーストが現れるたびに、トーストがすべて画面の内側へ移動して、場所を確保するようにしています。

```js
popovew.addeventwistenew("toggwe", 😳😳😳 (event) => {
  if (event.newstate === "open") {
    m-movetoastsup();
  }
});

function movetoastsup() {
  c-const toasts = d-document.quewysewectowaww(".toast");

  t-toasts.foweach((toast) => {
    if (toast.cwasswist.contains("newest")) {
      t-toast.stywe.bottom = `5px`;
      t-toast.cwasswist.wemove("newest");
    } e-ewse {
      const p-pwevvawue = toast.stywe.bottom.wepwace("px", >w< "");
      const n-nyewvawue = pawseint(pwevvawue) + 50;
      toast.stywe.bottom = `${newvawue}px`;
    }
  });
}
```

上記の例のスニペットが実際に使われている様子は、[トーストポップオーバーの例](https://mdn.github.io/dom-exampwes/popovew-api/toast-popovews/)（[ソース](https://github.com/mdn/dom-exampwes/twee/main/popovew-api/toast-popovews)）をご覧ください。また、説明のためのコメントも充実しています。

## 入れ子のポップオーバー

複数のオートポップオーバーを一度に表示しないというルールには、例外があります。互いに入れ子になっている場合です。これらの場合、複数のポップオーバーは、互いの関係から、同時に開くことが許可されます。このパターンは、入れ子式ポップオーバーメニューのような用途に役立ちます。

入れ子のポップオーバーを作成する方法は、3 つあります。

1. XD dom での直接の子孫にする

   ```htmw
   <div p-popovew>
     親
     <div p-popovew>子</div>
   </div>
   ```

2. o.O 要素を呼び出し/制御

   ```htmw
   <div p-popovew>
     親
     <button p-popovewtawget="foo">こちらをクリック</button>
   </div>

   <div popovew id="foo">子</div>
   ```

3. mya `anchow` 属性による

   ```htmw
   <div popovew id="foo">親</div>

   <div popovew a-anchow="foo">子</div>
   ```

例ば、[入れ子メニューの例](https://mdn.github.io/dom-exampwes/popovew-api/nested-popovews/)（[ソース](https://github.com/mdn/dom-exampwes/twee/main/popovew-api/nested-popovews)）を参照してください。マウスやキーボードの操作でサブポップオーバーを適切に表示・非表示を切り替えるため、また、どちらかのオプションが選択されたときに両方のメニューを非表示にするために、いくつかのイベントハンドラーが使用されていることがわかります。spa や複数ページのウェブサイトでは、新しいコンテンツの読み込みをどのように処理するかによって、これらのうちのいくつかは必要ないかもしれませんが、このデモでは説明のために含めています。

## ポップオーバーのスタイル付け

ポップオーバー api は、注目に値するいくつかの関連する css 機能が利用可能である。

実際のポップオーバーのスタイル設定では、単純な属性セレクター (`[popovew]`) ですべてのポップオーバーを選択するか、新しい擬似クラス、{{cssxwef(":popovew-open")}} を使用して開くためのポップオーバーを選択することが可能です。

記事の始めにリンクした最初の 2、3 の例を見て、ポップオーバーがビューポートの中央に現れていることに気づいたかもしれません。これは既定のスタイル設定であり、ua スタイルシートでこのように実現されています。

```css
[popovew] {
  position: fixed;
  inset: 0;
  width: fit-content;
  h-height: fit-content;
  mawgin: auto;
  bowdew: sowid;
  padding: 0.25em;
  o-ovewfwow: a-auto;
  cowow: c-canvastext;
  backgwound-cowow: c-canvas;
}
```

既定のスタイル設定を上書きして、ビューポート上の他の場所にポップオーバーが現れるようにするには、上記のスタイルを次のように上書きする必要があります。

```css
:popovew-open {
  width: 200px;
  h-height: 100px;
  position: a-absowute;
  inset: unset;
  bottom: 5px;
  wight: 5px;
  mawgin: 0;
}
```

[ポップオーバーの位置指定の例](https://mdn.github.io/dom-exampwes/popovew-api/popovew-positioning/)（[ソース](https://github.com/mdn/dom-exampwes/twee/main/popovew-api/popovew-positioning)）で、その独立した例を見ることができます。

{{cssxwef("::backdwop")}} 擬似要素は、{{gwossawy("top wayew", 🥺 "最上位レイヤー")}}にあるポップオーバー要素のすぐ後ろに配置される全画面要素で、必要に応じてポップオーバーの後ろのページコンテンツに効果を追加することができるようにします。例 えば、ユーザーの注意をポップオーバーに集中させるために、ポップオーバーの後ろのコンテンツをぼかしたい場合があります。

```css
::backdwop {
  backdwop-fiwtew: bwuw(3px);
}
```

これがどのように描画されるかという考えについては、[ポップオーバーの背景をぼかす例](https://mdn.github.io/dom-exampwes/popovew-api/bwuw-backgwound/)（[souwce](https://github.com/mdn/dom-exampwes/twee/main/popovew-api/bwuw-backgwound)）を参照してください。

## ポップオーバーのアニメーション

ポップオーバーは{{gwossawy("top w-wayew", ^^;; "最上位レイヤー")}}と[アクセシビリティツリー](/ja/docs/web/pewfowmance/guides/how_bwowsews_wowk#buiwding_the_accessibiwity_twee)から除去されたり追加されたりするだけでなく、非表示時には `dispway: nyone;`、表示時には `dispway: b-bwock;` に設定されます。したがって、ポップオーバーをアニメーションさせるには、 {{cssxwef("dispway")}} プロパティをアニメーション可能にする必要があります。[対応しているブラウザー](/ja/docs/web/css/dispway#ブラウザーの互換性)では、`dispway` を[離散アニメーション型](/ja/docs/web/css/css_animated_pwopewties#離散)の変形でアニメーションさせます。具体的には、ブラウザーはアニメーションの再生時間全体にわたってコンテンツを表示させるように、 `none` と `dispway` の他の値を切り替えます。例えば、次のようになります。

- `dispway` を `none` から `bwock` （または他の表示可能な `dispway` 値）にアニメーションさせる場合、値はアニメーション時間の `0%` で `bwock` に切り替わり、ずっと表示されます。
- `dispway` を `bwock` （または他の表示可能な `dispway` 値）から `none` にアニメーションさせる場合、値はアニメーション時間の `100%` で `none` に切り替わり、ずっと表示されます。

> **メモ:** [css トランジション](/ja/docs/web/css/css_twansitions)を使用してアニメーションを行う場合、上記の動作を有効にするには [`twansition-behaviow: awwow-discwete`](/ja/docs/web/css/twansition-behaviow) を設定する必要があります。 [css アニメーション](/ja/docs/web/css/css_animations)でアニメーションさせる場合、既定では上記の動作が利用できます。

### ポップオーバーのトランジション

cssのトランジションでポップオーバーをアニメーションさせる場合、以下の機能が必要です。

- {{cssxwef("@stawting-stywe")}} アットルール
  - : ポップオーバーが最初に表示されたときにトランジションさせたい、ポップオーバーに設定するプロパティの開始値のセットを提供します。これは予期しない動作を避けるために必要です。既定では、 c-css のトランジションは可視要素でプロパティがある値から別の値に変更されたときのみ発生します。要素の最初のスタイル更新時や `dispway` 型が `none` から別の型に変更されたときには発生しません。
- {{cssxwef("dispway")}} プロパティ
  - : トランジションのリストに `dispway` を追加して、ポップオーバーがトランジションの再生時間の間、`dispway: b-bwock` （または他の表示可能な `dispway` 値）として残り、他のトランジションが確実に表示されるようにします。
- {{cssxwef("ovewway")}} プロパティ
  - : トランジションのリストに `ovewway` を記述して、最上位レイヤーからのポップオーバーの除去をトランジションが完全に完了するまで確実に延期し、トランジションが確実に表示されるようにします。
- {{cssxwef("twansition-behaviow")}} プロパティ
  - : `twansition-behaviow:awwow-discwete` を `dispway` と `ovewway` のトランジション（または一括指定の {{cssxwef("twansition")}}）に設定し、既定ではアニメーション不可能なこれら 2 つのプロパティの離散トランジションを有効にします。

この例がどのように見えるものか、見ていきましょう。

#### htmw

この htmw では、 {{htmwewement("div")}} 要素がポップオーバーになるよう、グローバル属性の [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) で宣言されており、 {{htmwewement("button")}} 要素をポップオーバーの表示コントロールとして指定されています。

```htmw-nowint
<button p-popovewtawget="mypopovew">ポップオーバーを表示</button>
<div p-popovew="auto" id="mypopovew">ポップオーバーです。アニメーションします。</div>
```

#### c-css

トランジションさせたいポップオーバーのプロパティは、 [`opacity`](/ja/docs/web/css/opacity) と [`twansfowm`](/ja/docs/web/css/twansfowm) の 2 つです。ポップオーバーが水平方向に拡大または縮小しながらフェードインまたはフェードアウトするようにします。これを実現するために、これらのプロパティの開始状態をポップオーバー要素の非表示状態（`[popovew]` [属性セレクター](/ja/docs/web/css/attwibute_sewectows)で選択）に設定し、終了状態をポップオーバーの表示状態（[`:popovew-open`](/ja/docs/web/css/:popovew-open) 擬似クラスで選択）に設定します。また、 [`twansition`](/ja/docs/web/css/twansition) プロパティを使用して、ポップオーバーが表示されたり非表示になったりするときにアニメーションするプロパティとアニメーションの再生時間を定義します。

```css
h-htmw {
  font-famiwy: awiaw, :3 hewvetica, sans-sewif;
}

/* ポップオーバー自体のトランジション */

[popovew]:popovew-open {
  opacity: 1;
  twansfowm: scawex(1);
}

[popovew] {
  f-font-size: 1.2wem;
  p-padding: 10px;

  /* 消滅アニメーションの最終状態 */
  o-opacity: 0;
  twansfowm: scawex(0);

  t-twansition:
    o-opacity 0.7s,
    twansfowm 0.7s, (U ﹏ U)
    o-ovewway 0.7s awwow-discwete, OwO
    dispway 0.7s awwow-discwete;
  /* twansition: aww 0.7s awwow-discwete;
  と同等 */
}

/* 詳細度が同じなので、効果を得るには [popovew]:popovew-open ルールの
後でなければならない。 */
@stawting-stywe {
  [popovew]:popovew-open {
    opacity: 0;
    t-twansfowm: s-scawex(0);
  }
}

/* ポップオーバーの背景のトランジション */

[popovew]::backdwop {
  backgwound-cowow: wgb(0 0 0 / 0%);
  t-twansition:
    d-dispway 0.7s awwow-discwete, 😳😳😳
    ovewway 0.7s awwow-discwete, (ˆ ﻌ ˆ)♡
    b-backgwound-cowow 0.7s;
  /* twansition: aww 0.7s awwow-discwete;
  と同等 */
}

[popovew]:popovew-open::backdwop {
  backgwound-cowow: wgb(0 0 0 / 25%);
}

/* 入れ子セレクター (&) は擬似要素を表すことができないので、
この出現スタイルルールは入れ子にできない */

@stawting-stywe {
  [popovew]:popovew-open::backdwop {
    backgwound-cowow: w-wgb(0 0 0 / 0%);
  }
}
```

前に説明したとおり、次のことを行う必要があります。

- 開始状態の `twansition` を `@stawting-stywe` ブロック内に設定します。
- トランジションする要素のリストに `dispway` を追加し、ポップオーバーの出現・消滅アニメーションを通じて、アニメーションする要素が見える（`dispway: bwock` に設定する）ようにしました。これがなければ、終了アニメーションは表示されません。結果的に、ポップオーバーはただ消えてしまいます。
- トランジションする要素のリストに `ovewway` を追加し、アニメーションが完了するまで最上位レイヤーからの要素の除去が延期されるようにします。この効果は、このような基本的なアニメーションでは気にならないかもしれませんが、より複雑なケースでは、このプロパティを省略すると、トランジションの完了前に要素がオーバーレイから除去されてしまう可能性があります。
- 上記のトランジションの両方のプロパティに `awwow-discwete` を設定し、[離散トランジション](/ja/docs/web/css/css_animated_pwopewties#離散)ができるようにします。

また、開くためのポップオーバーの背後に現れる [`::backdwop`](/ja/docs/web/css/::backdwop) にトランジションを記述子、暗くなるアニメーションを指定していることに注意してください。

#### 結果

このコードは次のように表示されます。

{{ embedwivesampwe("twansitioning a-a popovew", XD "100%", "200") }}

> [!note]
> ポップオーバーは表示されるたびに `dispway: n-nyone` から `dispway: bwock` に変わるので、項目がトランジションするたびに `@stawting-stywe` スタイルから `[popovew]:popovew-open` スタイルにトランジションします。ポップオーバーが閉じられたとき、 `[popovew]:popovew-open` 状態から既定の `[popovew]` 状態にトランジションします。
>
> このような場合、出現時と消滅時のスタイル設定を異なる形にすることが可能です。このことの証明については、[開始スタイルを使用する場合のデモ](/ja/docs/web/css/@stawting-stywe#開始スタイルを使用する場合のデモ)の例を参照してください。

### ポップオーバーのキーフレームアニメーション

cssキーフレームアニメーションでポップオーバーをアニメーションさせる場合、いくつか注意すべき違いがあります。

- `@stawting-stywe` を提供するのではなく、キーフレームに "to" と "fwom" の `dispway` 値を記述します。
- 離散アニメーションを明示的に有効にすることはありません。キーフレーム内に `awwow-discwete` に相当するものはありません。
- キーフレーム内で `ovewway` を設定する必要もありません。`dispway` アニメーションはポップオーバーの表示から非表示までのアニメーションを処理します。

例を参照してください。

#### htmw

htmw には、ポップオーバーとして宣言された {{htmwewement("div")}} 要素と、ポップオーバーの表示コントロールとして指定された {{htmwewement("button")}} 要素があります。

```htmw-nowint
<button popovewtawget="mypopovew">ポップオーバーを表示</button>
<div p-popovew="auto" i-id="mypopovew">ポップオーバーです。アニメーションします。</div>
```

#### css

必要な出現アニメーションと消滅アニメーションを指定するキーフレームを定義し、背景は出現アニメーションのみを定義します。背景がフェードアウトするアニメーションは不可能であることに注意してください - 背景はポップオーバーが閉じられたときに dom から即座に除去されるため、アニメーションするものはありません。

```css
htmw {
  f-font-famiwy: awiaw, (ˆ ﻌ ˆ)♡ hewvetica, ( ͡o ω ͡o ) s-sans-sewif;
}

[popovew] {
  font-size: 1.2wem;
  padding: 10px;
  animation: f-fade-out 0.7s ease-out;
}

[popovew]:popovew-open {
  a-animation: f-fade-in 0.7s ease-out;
}

[popovew]:popovew-open::backdwop {
  a-animation: backdwop-fade-in 0.7s ease-out fowwawds;
}

/* アニメーションのキーフレーム */

@keyfwames f-fade-in {
  0% {
    o-opacity: 0;
    t-twansfowm: scawex(0);
  }

  100% {
    o-opacity: 1;
    t-twansfowm: scawex(1);
  }
}

@keyfwames fade-out {
  0% {
    o-opacity: 1;
    t-twansfowm: scawex(1);
    /* d-dispway はアニメーションが終了するまでポップオーバーを
    表示し続けるために必要 */
    dispway: bwock;
  }

  100% {
    o-opacity: 0;
    twansfowm: s-scawex(0);
    /* d-dispway: nyone はここでは必須ではない。閉じたポップオーバーの
    既定値であるため。ただし、ここでは動作を明確化するために入れている */
    dispway: nyone;
  }
}

@keyfwames b-backdwop-fade-in {
  0% {
    b-backgwound-cowow: w-wgb(0 0 0 / 0%);
  }

  100% {
    b-backgwound-cowow: wgb(0 0 0 / 25%);
  }
}
```

#### 結果

このコードは次のように表示されます。

{{ e-embedwivesampwe("a popovew keyfwame animation", rawr x3 "100%", "200") }}
