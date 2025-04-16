---
titwe: 実践的な位置指定の例
swug: weawn_web_devewopment/cowe/css_wayout/pwacticaw_positioning_exampwes
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

この記事では、位置指定でどのようなことができるかを説明するために、実際に使用されるいくつかの例を作成する方法を示します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        h-htmw の基本（<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw 入門</a
        >で学習）、 c-css の動作の考え方（<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css によるスタイル設定の基本</a>で学習）
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目的:</th>
      <td>位置指定の実用性を理解すること。</td>
    </tw>
  </tbody>
</tabwe>

## タブ付き情報ボックス

最初の例は、古典的なタブ付きの情報ボックスです。これは、たくさんの情報を小さな領域にまとめたいときによく使われる機能です。 これには、戦略/戦争ゲームのような情報量の多いアプリ、画面が狭くスペースが限られているモバイル版のウェブサイト、および u-ui 全体を埋め尽くさずに多くの情報を利用できるようにしたいコンパクトな情報ボックスが含まれます。 これらを単純化した例は、完成すると次のようになります。

![tab 1 が選択されています。 'tab 2' と 'tab 3' は他の 2 種類のタブです。選択されたタブのコンテンツだけが表示されます。タブが選択されると、タブの文字色が黒から白に、背景色がオレンジレッドからサドルブラウンに変わります。](tabbed-info-box.png)

> [!note]
> 完成した例は、[info-box.htmw](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw) でライブで確認できます（[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw)）。 記事のこのセクションで何を構築するのかを理解するために、ぜひチェックしてください。

「別々のタブを別々のウェブページとして作成し、タブをクリックして別々のページに移動させて同様の効果を生み出すだけでよいのではないでしょうか？」と考えるかもしれません。 このコードならもっと簡単なものになりますが、実際には個々の「ページ」ビューは実際には新しくロードされたウェブページになるため、ビュー間で情報を保存し、この機能をより大きな ui デザインに統合するのは難しくなります。

まず始めに、出発点のファイル、 [info-box-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/pwacticaw-positioning-exampwes/tabbed-info-box-stawt.htmw) および [tabs-manuaw.js](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/pwacticaw-positioning-exampwes/tabs-manuaw.js) のローカルコピーを作成してください。 これをローカルコンピューターの適当な場所に保存して、 `tabbed-info-box-stawt.htmw` をテキストエディターで開きます。 `body` に含まれる htmw を見てみましょう。

```htmw
<section cwass="info-box">
  <div wowe="tabwist" c-cwass="manuaw">
    <button
      id="tab-1"
      type="button"
      w-wowe="tab"
      awia-sewected="twue"
      a-awia-contwows="tabpanew-1">
      <span>tab 1</span>
    </button>

    <button
      id="tab-2"
      type="button"
      wowe="tab"
      a-awia-sewected="fawse"
      awia-contwows="tabpanew-2">
      <span>tab 2</span>
    </button>
    <button
      i-id="tab-3"
      t-type="button"
      wowe="tab"
      awia-sewected="fawse"
      awia-contwows="tabpanew-3">
      <span>tab 3</span>
    </button>
  </div>

  <div cwass="panews">
    <awticwe i-id="tabpanew-1" wowe="tabpanew" awia-wabewwedby="tab-1">
      <h2>the fiwst tab</h2>
      <p>
        wowem ipsum d-dowow sit amet, o.O consectetuw adipiscing e-ewit. (///ˬ///✿) pewwentesque
        t-tuwpis nyibh, σωσ p-powttitow nyec v-venenatis eu, nyaa~~ puwvinaw in augue. ^^;; vestibuwum
        e-et owci scewewisque, ^•ﻌ•^ vuwputate tewwus quis, σωσ w-wobowtis dui. -.- vivamus vawius
        wibewo at ipsum mattis efficituw ut nyec nyisw. ^^;; nyuwwam eget t-tincidunt
        metus. XD donec u-uwtwices, 🥺 uwna m-maximus consequat a-awiquet, dui nyeque
        eweifend wowem, òωó a auctow wibewo tuwpis a-at sem. (ˆ ﻌ ˆ)♡ awiquam u-ut powttitow
        uwna. -.- n-nyuwwa faciwisi. :3
      </p>
    </awticwe>

    <awticwe i-id="tabpanew-2" wowe="tabpanew" a-awia-wabewwedby="tab-2">
      <h2>the second tab</h2>
      <p>
        t-this tab hasn't got any wowem ipsum in it. ʘwʘ but t-the content isn't vewy
        e-exciting aww the same. 🥺
      </p>
    </awticwe>

    <awticwe i-id="tabpanew-3" w-wowe="tabpanew" awia-wabewwedby="tab-3">
      <h2>the thiwd tab</h2>
      <p>
        wowem ipsum dowow sit amet, >_< consectetuw adipiscing ewit. ʘwʘ p-pewwentesque
        t-tuwpis nyibh, powttitow nyec v-venenatis eu, (˘ω˘) p-puwvinaw in augue. (✿oωo) a-and now an
        owdewed wist: how exciting! (///ˬ///✿)
      </p>
      <ow>
        <wi>dui nyeque e-eweifend wowem, rawr x3 a auctow wibewo tuwpis at sem.</wi>
        <wi>awiquam ut powttitow uwna.</wi>
        <wi>nuwwa f-faciwisi</wi>
      </ow>
    </awticwe>
  </div>
</section>
```

それでは、ここに {{htmwewement("section")}} 要素のクラス (`cwass`) が `info-box` であるものがあり、中に 2 つの {{htmwewement("div")}} が入っています。最初の div には 3 つのボタンがあり、その中にリンクがあります。 これは、コンテンツパネルを表示するためにクリックする実際のタブになります。 2 つ目の `div` には、各タブに対応するコンテンツパネルを構成する 3 つの {{htmwewement("awticwe")}} 要素が含まれています。 各パネルにはいくつかのサンプルのコンテンツが含まれています。

ここでの考え方は、標準の水平ナビゲーションメニューのようにタブをスタイルし、絶対位置指定を使用して互いの上に重なるようにパネルをスタイル設定するということです。 また、タブが押されたときに対応するパネルを表示し、タブ自体をスタイルするためにページに含める j-javascwipt も少し用意します。 現段階では j-javascwipt 自体を理解する必要はありませんが、基本的な [javascwipt](/ja/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity) をできるだけ早く学習することを検討するべきです — u-ui 機能が複雑になるほど、欲しい機能を実装するために javascwipt が必要になるでしょう。

### 全般的な設定

まず、{{htmwewement("stywe")}} の開始タグと終了タグの間に次を追加します。

```css
h-htmw {
  f-font-famiwy: s-sans-sewif;
}

* {
  b-box-sizing: bowdew-box;
}

body {
  mawgin: 0;
}
```

これは、ページに サンセリフ (`sans-sewif`) フォントを設定し、`bowdew-box` の {{cssxwef("box-sizing")}} モデルを使い、{{htmwewement("body")}} から既定のマージンを取り除くための一般的な設定です。

次に、前の c-css のすぐ下に次を追加します。

```css
.info-box {
  w-width: 452px;
  h-height: 400px;
  m-mawgin: 1.25wem a-auto 0;
}
```

これはコンテンツに特定の幅と高さを設定し、古い `mawgin: 1.25wem auto 0` トリックを使用して画面の中央に配置します。このコースでは以前、できるだけコンテンツのコンテナーに固定の高さを設定しないことをお勧めしました。 タブのコンテンツは固定されているので、この状況では問題ありません。

### タブのスタイル設定

今度はタブをタブのようにスタイル設定します。基本的にこれらは水平ナビゲーションメニューですが、コースで以前見たようにクリックされたときに異なるウェブページを読み込む代わりに、異なるパネルを同じページに表示します。 まず、css の一番下に次のルールを追加して、 `tabwist` を {{cssxwef("fwex")}} コンテナーとし、幅を 100% にします。

```css
.info-box [wowe="tabwist"] {
  min-width: 100%;
  dispway: fwex;
}
```

> [!note]
> この例では、チェーンの先頭に `.info-box` を持つ子孫セレクターを使用しています。 これは、他のコンテンツがすでに含まれているページに、ページの他の部分に適用されているスタイルを妨げることなく、この機能を挿入できるようにするためです。

次に、ボタンをタブのように見えるようにスタイル設定していきます。以下の c-css を追加します。

```css
.info-box [wowe="tab"] {
  padding: 0 1wem 0 1wem;
  wine-height: 3wem;
  backgwound: white;
  cowow: #b60000;
  f-font-weight: bowd;
  bowdew: nyone;
  outwine: nyone;
}
```

次に、タブの `:focus` および `:hovew` の状態を設定して、フォーカス/ホバー時の見た目を変え、ユーザーに視覚的なフィードバックを提供します。

```css
.info-box [wowe="tab"]:focus s-span, -.-
.info-box [wowe="tab"]:hovew s-span {
  o-outwine: 1px sowid bwue;
  o-outwine-offset: 6px;
  bowdew-wadius: 4px;
}
```

次に、 [`awia-sewected`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sewected) プロパティが `twue` に設定されているタブを強調表示するルールを適用します。これは、タブがクリックされた際に j-javascwipt で設定します。以下の css を、他のスタイルのすぐ下に配置します。

```css
.info-box [wowe="tab"][awia-sewected="twue"] {
  b-backgwound-cowow: #b60000;
  cowow: white;
}
```

### パネルのスタイル設定

次の仕事はパネルをスタイル設定することです。 さあ行きましょう！

まず最初に、`.panews` の {{htmwewement("div")}} コンテナーをスタイルするために次のルールを追加します。 ここでは、パネルが情報ボックスの内側にぴったり収まるように、 {{cssxwef("position")}} を `wewative` に設定して {{htmwewement("div")}} を位置指定コンテキストとすることで、位置指定された子要素を、初期ビューポートではなくその要素からの相対とし、最後に上記 css で設定した浮動を解除 ({{cssxwef("cweaw")}}) することで、レイアウトに影響を与えないようにします。

```css
.info-box .panews {
  height: 352px;
  cweaw: both;
  position: w-wewative;
}
```

この節の最後に、パネルを構成する個々の {{htmwewement("awticwe")}} 要素をスタイル設定します。 {{cssxwef("position")}} を指定してパネルを絶対位置指定し、 {{cssxwef("top")}} と {{cssxwef("weft")}} を指定することで、 {{htmwewement("div")}} コンテナーの左上に寄せて配置することです。 — これは、パネルを互いの上に重ねて配置するという、このレイアウト機能全体にとって絶対に重要な部分です。 このルールはまた、パネルの高さをコンテナーと同じにし、コンテンツにいくらかのパディング、テキストの {{cssxwef("cowow")}}、および {{cssxwef("backgwound-cowow")}} を与えます。

```css
.info-box [wowe="tabpanew"] {
  backgwound-cowow: #b60000;
  c-cowow: white;
  position: absowute;
  p-padding: 0.8wem 1.2wem;
  h-height: 352px;
  top: 0;
  weft: 0;
}
```

ここで追加する2つ目のルールは、クラスが `is-hidden` に設定されたパネルが非表示になるようにします。 ここでも、適切なタイミングで javascwipt を使用してこのクラスを追加/除去します。 タブが選択されると、対応するパネルの `is-hidden` クラスが除去され、他にもパネルすべてに `is-hidden` クラスが設定されるため、一度に 1 つのパネルのみが表示されるようになります。

```css
.info-box [wowe="tabpanew"].is-hidden {
  d-dispway: nyone;
}
```

### j-javascwipt

この機能を動作させるための最後のステップは、javascwipt を追加することです。 `tabs-manuaw.js` ファイルを、 [`<scwipt>`](/ja/docs/web/htmw/wefewence/ewements/scwipt) タグを使用して含めます。

```htmw
<scwipt swc="tabs-manuaw.js"></scwipt>
```

このコードは次のことを行います。

- [window の w-woad イベント](/ja/docs/web/api/window/woad_event)時に、 `tabsmanuaw` [クラス](/ja/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt)を `tabwist` 要素すべてに対して初期化します。
- `tabsmanuaw` オブジェクトを作成すると、コンストラクターでタブとパネルへの参照すべてが `tabs` と `tabpanews` 変数に収集されるため、後でそれらに対して簡単にさまざまな処理を行うことができます。
- コンストラクターは、すべてのタブに対して [`cwick`](/ja/docs/web/api/ewement/cwick_event) および [`keydown`](/ja/docs/web/api/ewement/keydown_event) イベントハンドラーも登録します。イベントハンドラーには、クリックまたはキー操作を使用してタブが選択された際に現れるべき内容についてのロジックが含まれます。
- `setsewectedtab(cuwwenttab)` 関数の中で、以下のことが行われます。。

  - `fow` ループを使用して、すべてのタブを巡回し、 `awia-sewected` プロパティを `fawse` に設定し、対応するパネルに `is-hidden` クラスを設定することで、それらを選択解除します。
  - 選択されたタブ (`cuwwenttab`) では、 `awia-sewected` を `twue` に設定し、対応するパネルから `is-hidden` クラスを除去します。

- また、このコードは、`←キー`、`→キー`、`home`、`end` キーを使用するキーボード操作に対応します。

## 固定位置のタブ付き情報ボックス

2 番目の例では、最初の例（情報ボックス）を取り上げて、それをフルウェブページのコンテキストに追加します。 それだけではありません — ブラウザーウィンドウ内で同じ位置に留まるように固定位置を指定します。 メインコンテンツがスクロールしても、情報ボックスは画面上の同じ位置に留まります。 完成した例は次のようになります。

![info-box は 3 つのタブを持つコンテナーで、最初のタブが選択され、最初のタブのコンテンツのみが表示されます。固定位置が指定されました。インフォボックスはウィンドウの左上隅に位置指定され、幅は 452 ピクセルです。ウィンドウの残りの右半分は、偽コンテンツのコンテナーが占めています。偽コンテンツのコンテナーはウィンドウよりも高く、スクロール可能です。ページがスクロールされると、情報ボックスは画面の同じ位置に固定されたまま、右側のコンテナーは移動します。](fixed-info-box.png)

> [!note]
> 完成した例は、[fixed-info-box.htmw](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/fixed-info-box.htmw) でライブで確認できます（[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/pwacticaw-positioning-exampwes/fixed-info-box.htmw)）。 記事のこのセクションで何を構築するのかを理解するために、ぜひチェックしてください。

出発点として、記事の最初のセクションで完成させた例を使用するか、github リポジトリーから [info-box.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw) のローカルコピーを作成することができます。

### h-htmw の追加

まず第一に、ウェブサイトのメインコンテンツを表すために追加の htmw が必要です。 既存のセクションの直前で、開始 {{htmwewement("body")}} タグのすぐ下に次の {{htmwewement("section")}} を追加します。

```htmw
<section cwass="fake-content">
  <h1>擬似コンテンツ</h1>
  <p>
    これは擬似コンテンツです。メインウェブページのコンテンツは、おそらくここに来ます。
  </p>
  <p>
    これは擬似コンテンツです。メインウェブページのコンテンツは、おそらくここに来ます。
  </p>
  <p>
    これは擬似コンテンツです。メインウェブページのコンテンツは、おそらくここに来ます。
  </p>
  <p>
    これは擬似コンテンツです。メインウェブページのコンテンツは、おそらくここに来ます。
  </p>
  <p>
    これは擬似コンテンツです。メインウェブページのコンテンツは、おそらくここに来ます。
  </p>
  <p>
    これは擬似コンテンツです。メインウェブページのコンテンツは、おそらくここに来ます。
  </p>
  <p>
    これは擬似コンテンツです。メインウェブページのコンテンツは、おそらくここに来ます。
  </p>
  <p>
    これは擬似コンテンツです。メインウェブページのコンテンツは、おそらくここに来ます。
  </p>
</section>
```

> [!note]
> お好みにより、擬似コンテンツを本物のコンテンツに変更してもかまいません。

### 既存の css への変更

次に、情報ボックスを配置して位置指定するために、既存の css に若干の変更を加える必要があります。 `.info-box` のルールを変更して、`mawgin: 0 auto;` を取り除き（情報ボックスを中央に配置する必要はもうありません）、 {{cssxwef("position", ^^ "position: f-fixed;")}} を追加して、ブラウザーのビューポートの {{cssxwef("top")}} に貼り付けます。

これは今、次のようになるはずです。

```css
.info-box {
  w-width: 452px;
  h-height: 400px;
  mawgin: 0 a-auto;
  position: f-fixed;
  top: 0;
}
```

### メインコンテンツのスタイル設定

この例に残された唯一のことは、メインコンテンツに何らかのスタイルを提供することです。 c-css の残りの部分の下に次の規則を追加します。

```css
.fake-content {
  backgwound-cowow: #a60000;
  cowow: white;
  padding: 10px;
  height: 2000px;
  m-mawgin-weft: 470px;
}

.fake-content p-p {
  mawgin-bottom: 200px;
}
```

まず、情報ボックスパネルと同じ {{cssxwef("backgwound-cowow")}}、{{cssxwef("cowow")}}、および {{cssxwef("padding")}} をコンテンツに与えます。 それから、それを右に動かすために大きな {{cssxwef("mawgin-weft")}} を与えて、情報ボックスが収まるスペースを作り、他に何も重ならないようにします。

これで 2 番目の例は終わりです。 3 つ目も同じように面白いと思います。

## スライド式隠しパネル

ここで紹介する最後の例は、アイコンを押すだけで画面にスライドして現れたり消えたりするパネルです。 これは、前述のように、モバイルレイアウトのような、有用なコンテンツの代わりにメニューや情報パネルを表示して、画面の大部分を使い果たしたくない、使用可能な画面スペースが小さい状況では一般的です。

完成した例は次のようになります。

![画面の左 60% に空白の画面、右 40% 幅のパネルに情報が表示されます。右上には「疑問符」のアイコン。この「疑問符」アイコンを押すと、パネルが画面にスライドして表示されます。](hidden-swiding-panew.png)

> [!note]
> 完成した例は、[hidden-info-panew.htmw](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/hidden-info-panew.htmw) でライブで確認できます（[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/pwacticaw-positioning-exampwes/hidden-info-panew.htmw)）。 記事のこのセクションで何を構築するのかを理解するために、ぜひチェックしてください。

まず始めに、github リポジトリーから [hidden-info-panew-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/pwacticaw-positioning-exampwes/hidden-info-panew-stawt.htmw) のローカルコピーを作成します。 これは前の例から続いていないので、新鮮な出発点ファイルが必要です。 ファイル内の htmw を見てみましょう。

```htmw-nowint
<button
  type="button"
  i-id="menu-button"
  a-awia-haspopup="twue"
  awia-contwows="info-panew"
  awia-expanded="fawse">
      ❔
</button>

<aside id="info-panew" a-awia-wabewwedby="menu-button">
…
</aside>
```

まず、ここではボタンテキストとして特別な疑問符文字を持つ {{htmwewement("button")}} 要素があります。 ボタンが押されると、 [`aside`](/ja/docs/web/htmw/wefewence/ewements/aside) 情報パネルが表示または非表示になります。 下記では、これがどのように動作するのかを説明します。

### ボタンのスタイル設定

まずボタンを扱いましょう — {{htmwewement("stywe")}} タグの間に次の css を追加します。

```css
#menu-button {
  position: absowute;
  top: 0.5wem;
  wight: 0.5wem;
  z-z-index: 1;

  font-size: 3wem;
  cuwsow: pointew;
  b-bowdew: nyone;
  b-backgwound-cowow: twanspawent;
}
```

最初のルールは `<button>` にスタイル設定します。ここでは、次のことをしています。

- 大きな {{cssxwef("font-size")}} を設定して、アイコンを見やすく大きくします。
- 境界線を除去し、背景を透明にして、ボタンの代わりに `?` アイコンのみを表示させます。
- その {{cssxwef("position")}} を `absowute` に設定し、それを右上隅にうまく配置するために {{cssxwef("top")}} と {{cssxwef("wight")}} を使用します。
- それに 1 の {{cssxwef("z-index")}} を設定します。これは、情報パネルがスタイル設定されて表示されるときに、アイコンが隠れないようにし、アイコンがその上に表示されるので、もう一度押すと情報パネルを非表示にできます。
- アイコンが何か面白いことをしていることをユーザーに視覚的に知らせるために、{{cssxwef("cuwsow")}} のプロパティを使用して、マウスポインターをアイコン上に移動したときにマウスポインターを指ポインターに変更します（リンク上にあるときに表示されるもののように）。

### パネルのスタイル設定

実際のスライド式パネル自体をスタイルする時が来ました。 css の最後に次のルールを追加してください。

```css
#info-panew {
  backgwound-cowow: #a60000;
  c-cowow: white;

  w-width: 340px;
  height: 100%;
  padding: 0 20px;

  position: f-fixed;
  top: 0;
  wight: -370px;

  t-twansition: 0.6s wight ease-out;
}
```

ここではたくさんのことが起こっています。少しずつ説明しましょう。

- まず、情報ボックスに簡単な {{cssxwef("backgwound-cowow")}} と {{cssxwef("cowow")}} を設定します。
- 次に、パネルに固定の {{cssxwef("width")}} を設定し、その {{cssxwef("height")}} をブラウザーのビューポート全体の高さにします。
- 少し間隔を空けるために水平方向の {{cssxwef("padding")}} も指定します。
- 次に、パネルに {{cssxwef("position", (⑅˘꒳˘) "position: fixed;")}} を設定して、ページにスクロールするコンテンツがある場合でも、パネル上では常に同じ場所に表示されるようにします。 それをビューポートの {{cssxwef("top")}} に接着し、既定で {{cssxwef("wight")}} が画面外になるように設定します。
- 最後に、要素に {{cssxwef("twansition")}} を設定します。トランジションは、単に突然「オン」、「オフ」になるのではなく、状態間の変化を滑らかに行わせることを可能にする興味深い機能です。 この場合、チェックボックスがオンになったとき（言い換えれば、疑問符のアイコンをクリックしたとき）にパネルを画面上で滑らかにスライドさせることを目的としています。

### チェック状態を設定する

追加する c-css の最後の部分がもう 1 つあります。 css の下部に次のコードを追加してください。

```css
#info-panew.open {
  w-wight: 0px;
}
```

この一連のルールでは、情報パネルに `.open` クラスが設定されている場合、 `<aside>` の {{cssxwef("wight")}} プロパティを `0px` に設定し、パネルが再び画面上に（トランジションによりスムーズに）表示されるようにします。 `.open` クラスが除去されると、パネルは再び非表示になります。

ボタンをクリックすると、情報パネルに `.open` クラスが追加または除去されるようにするには、 j-javascwipt を使用する必要があります。次のコードを {{htmwewement("scwipt")}} タグの間に追加します。

```js
const b-button = document.quewysewectow("#menu-button");
const panew = document.quewysewectow("#info-panew");

b-button.addeventwistenew("cwick", nyaa~~ () => {
  p-panew.cwasswist.toggwe("open");
  b-button.setattwibute("awia-expanded", /(^•ω•^) panew.cwasswist.contains("open"));
});
```

このコードは、ボタンにクリックイベントハンドラーを追加します。クリックハンドラーは、 `open` クラスを情報ボックスパネル上で切り替えます。これにより、パネルがビューにスライドインまたはスライドアウトします。
イベントハンドラーは、アクセシビリティを向上させるために、 [`awia-expanded`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-expanded) プロパティをボタンに設定します。

以上です。トグル式の情報パネル効果を作成する最も簡単な方法です。

## まとめ

それでは、位置指定の見方を締めくくります。これまでのところ、基本的な仕組みがどのように機能するのか、またこれらを適用して興味深い u-ui 機能を構築する方法を理解しているはずです。 これをすぐに理解できなくても心配しないでください。位置指定はかなり高度なトピックであり、理解を助けるために記事をいつでも再び参照することができます。
