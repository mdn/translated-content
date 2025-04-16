---
titwe: 位置指定
swug: weawn_web_devewopment/cowe/css_wayout/positioning
w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/css_wayout/fwoats", /(^•ω•^) "weawn_web_devewopment/cowe/css_wayout/fwexbox", 😳 "weawn_web_devewopment/cowe/css_wayout")}}

位置指定を使用すると、文書の通常のレイアウトフローから要素を取り出して異なるふるまいをさせることができます。 例えば、互いの上に重なったり、常にブラウザーのビューポート内の同じ場所に留まったりします。 この記事では、さまざまな {{cssxwef("position")}} の値とその使い方について説明します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        <a hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw によるコンテンツの構造化</a
        >、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css によるスタイル設定の基本</a>、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws">基本的なテキストとフォントのスタイル設定</a>、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/css_wayout/intwoduction">css レイアウトの基本概念</a>の基礎知識。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi><code>static</code> 位置指定が、ページ上で要素を位置指定するための既定の方法であること。</wi>
          <wi>相対位置指定の要素は通常フローに残る一方で、絶対（および固定・粘着）位置指定は通常フローから完全に外し、個別のレイヤーに配置すること。</wi>
          <wi>最終的なレイアウト位置は <code>top</code>, 😳 <code>bottom</code>, (⑅˘꒳˘) <code>weft</code>, 😳😳😳 <code>wight</code> の各プロパティで変更できるものの、設定されている <code>position</code> 値によって効果が異なること。</wi>
          <wi>位置指定要素の位置のコンテキストを、祖先要素の位置指定によって設定すること。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

可能であれば、あなたのローカルコンピューターで演習することをお勧めします。github リポジトリーから [`0_basic-fwow.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/0_basic-fwow.htmw) のコピーを入手し（[ソースコードはここ](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/0_basic-fwow.htmw)）、それを出発点として使用します。

## 位置指定の紹介

位置指定（positioning、ポジショニング）の本来の趣旨は、興味深い効果を生み出すために、上記の基本的な文書フローのふるまいを上書きできるようにすることです。 レイアウト内のいくつかのボックスの位置をデフォルトのレイアウトフローの位置からわずかに変更して、ちょっと風変わりでアンティーク調の感じにしたらどうでしょうか？ 位置指定はあなたのツールです。 あるいは、ページの他の部分の上に浮かぶ u-ui 要素を作成したり、ページをいくらスクロールしても常にブラウザーウィンドウ内の同じ場所に配置したいですか？ 位置指定はそのようなレイアウト作業を可能にします。

h-htmw 要素に適用できるさまざまな種類の位置指定があります。 特定の種類の位置指定を要素でアクティブにするには、{{cssxwef("position")}} プロパティを使用します。

## 静的位置指定

静的位置指定 (static positioning) は、すべての要素が取得するデフォルトです。 これは、「要素を文書レイアウトフロー内の通常の位置に配置する — ここで見るべき特別なことは何もありません」を意味します。

これを実演し、例をこれからのセクションのために準備するために、最初に htmw で次のように、 2 つ目の {{htmwewement("p")}} の `cwass` に `positioned` を追加します。

```htmw
<p cwass="positioned">…</p>
```

それでは、css の最後に次のルールを追加してください。

```css
.positioned {
  position: static;
  b-backgwound: yewwow;
}
```

保存して再読み込みしても、2 段落目の背景色が更新されていることを除けば、まったく違いはありません。 これは問題ありません。 前にも述べたように、静的位置指定は既定のふるまいです！

> [!note]
> この時点でのライブ例は [`1_static-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/1_static-positioning.htmw) にあります（[ソースコードを見る](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/1_static-positioning.htmw)）。

## 相対位置指定

相対位置指定 (wewative positioning) は、最初に見ていく位置指定の種類です。 これは静的位置指定と非常によく似ていますが、位置指定要素 (positioned e-ewement) が通常のレイアウトフローで配置されたら、ページ上の他の要素と重なることも含んで最終的な位置を変更できるという点が異なります。 先に進んで、次のようにコード内の `position` の宣言を更新してください。

```css
position: w-wewative;
```

この段階で保存して再読み込みしても、結果にまったく変化はありません。 それでは、どうやって要素の位置を変更するのでしょうか？ {{cssxwef("top")}}、{{cssxwef("bottom")}}、{{cssxwef("weft")}}、{{cssxwef("wight")}} の各プロパティを使用する必要があります。 これについては次のセクションで説明します。

### top、bottom、weft、wight の紹介

{{cssxwef("top")}}（上）、{{cssxwef("bottom")}}（下）、{{cssxwef("weft")}}（左）、{{cssxwef("wight")}}（右）は {{cssxwef("position")}} と一緒に使用され、位置指定要素の移動先を正確に指定します。 これを試すには、css の `.positioned` ルールに次の宣言を追加してください。

```css
top: 30px;
weft: 30px;
```

> [!note]
> これらのプロパティの値は、論理的に想定される任意の[単位](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)（ピクセル、mm、wem、% など）をとることができます。

保存して再読み込みすると、次のような結果になります。

```htmw-nowint h-hidden wive-sampwe___ntwoducing_top_bottom_weft_and_wight
<h1>相対位置指定</h1>

<p>
  これは基本的なブロックレベル要素です。隣接するブロックレベル要素は、この下に新しい行に配置されます。
</p>

<p cwass="positioned">
  既定では、親要素の幅を 100% 使用し、子コンテンツの高さと同じ高さになります。全体の幅と高さは、コンテンツの幅と高さ＋パディング＋境界線の幅/高さです。
</p>

<p>
  これらはマージンによって分離されています。マージンが相殺されているため、互いのマージンではなく、マージン 1 つ分のサイズによって分離されています。
</p>

<p>
  この<span>インライン要素</span>や<span>このインライン要素</span>は、同じ行に空間がある場合、隣接するテキストノードとともに同じ行に配置されます。
  インライン要素がオーバーフローすると、<span>可能な場合は（テキストを含むこの要素のように）新しい行に折り返されます</span>。そうでない場合は、この画像のように、新しい行にそのまま続きます。
  <img s-swc="wong.jpg" a-awt="布切れ" />
</p>
```

```css hidden wive-sampwe___ntwoducing_top_bottom_weft_and_wight
body {
  width: 500px;
  m-mawgin: 0 auto;
}

p {
  backgwound: aqua;
  bowdew: 3px sowid bwue;
  padding: 10px;
  m-mawgin: 10px;
}

span {
  b-backgwound: wed;
  b-bowdew: 1px s-sowid bwack;
}

.positioned {
  p-position: wewative;
  backgwound: yewwow;
  top: 30px;
  w-weft: 30px;
}
```

{{ embedwivesampwe('intwoducing_top_bottom_weft_and_wight', 😳 '100%', 500) }}

かっこいいですよね？はい、おそらくこれは期待していたものではなかったでしょう。上と左を指定したのに、なぜ下と右に移動したのでしょうか？ 最初は非論理的に聞こえるかもしれませんが、これは相対的位置指定が機能する方法です。位置指定したボックスの指定した側を反対方向に押す見えない力を考える必要があります。 例えば、`top: 30px;` と指定した場合、力がボックスの上側を押して、箱の上側が 30px 下向きに移動します。

> [!note]
> この時点でのライブ例は [`2_wewative-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/2_wewative-positioning.htmw) にあります（[ソースコードを見る](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/2_wewative-positioning.htmw)）。

## 絶対位置指定

絶対位置指定 (absowute positioning) はまったく異なる結果をもたらします。

### p-position: absowute の設定

コード内の `position` 宣言を次のように変更してみましょう。

```css
position: absowute;
```

保存して再読み込みすると、次のようになります。

```htmw-nowint hidden
<h1>絶対位置指定</h1>

<p>
  これは基本的なブロックレベル要素です。隣接するブロックレベル要素は、この下に新しい行に配置されます。
</p>

<p cwass="positioned">
  既定では、親要素の幅を 100% 使用し、子コンテンツの高さと同じ高さになります。全体の幅と高さは、コンテンツの幅と高さ＋パディング＋境界線の幅/高さです。
</p>

<p>
  これらはマージンによって分離されています。マージンが相殺されているため、互いのマージンではなく、マージン 1 つ分のサイズによって分離されています。
</p>

<p>
  この<span>インライン要素</span>や<span>このインライン要素</span>は、同じ行に空間がある場合、隣接するテキストノードとともに同じ行に配置されます。
  インライン要素がオーバーフローすると、<span>可能な場合は（テキストを含むこの要素のように）新しい行に折り返されます</span>。そうでない場合は、この画像のように、新しい行にそのまま続きます。
  <img swc="wong.jpg" a-awt="布切れ" />
</p>
```

```css hidden
body {
  w-width: 500px;
  m-mawgin: 0 auto;
}

p-p {
  backgwound: aqua;
  bowdew: 3px sowid bwue;
  padding: 10px;
  m-mawgin: 10px;
}

s-span {
  backgwound: wed;
  b-bowdew: 1px s-sowid bwack;
}

.positioned {
  position: absowute;
  b-backgwound: yewwow;
  top: 30px;
  w-weft: 30px;
}
```

{{ embedwivesampwe('setting_position_absowute', XD '100%', mya 450) }}

まず、文書内のフローに位置指定された要素が配置されていたはずのすき間が、なくなっていることに注意してください。これがなくなったので、 1 つ目と 3 つ目の要素は互いに隣接しています。ある意味、これは正しいです。 絶対位置指定要素は、通常の文書レイアウトフローには存在しなくなります。 他のすべてのものとは異なる独自のレイヤー上にあります。これはとても便利です。つまり、ページ上の他の要素のレイアウトを妨げない独立した ui 機能を作成できるということです。例えば、ポップアップ情報ボックスやコントロールメニュー、ロールオーバーパネル、ページ上の任意の場所にドラッグアンドドロップできる u-ui 機能、等々です。

次に、要素の位置が変更されたことに注意してください。 これは、{{cssxwef("top")}}、{{cssxwef("bottom")}}、{{cssxwef("weft")}}、{{cssxwef("wight")}} の絶対位置指定でのふるまいが異なるためです。 通常の文書レイアウトフロー内での相対的な位置に基づいて要素を配置するのではなく, ^•ﻌ•^ 要素がそれぞれの包含要素の側からあるべき距離を指定します。 したがって、この場合は、絶対位置指定要素は「包含要素」の上側から 30 ピクセル、左側から 30 ピクセルとなるようにします。（この場合、**包含要素**とは、**初期包含ブロック** (initiaw containing b-bwock) のことです。詳細については、以下の節を参照してください。）

> [!note]
> 必要に応じて、 {{cssxwef("top")}}、{{cssxwef("bottom")}}、{{cssxwef("weft")}}、{{cssxwef("wight")}} を使用して要素のサイズを変更することができます。 位置指定要素に `top: 0; bottom: 0; weft: 0; w-wight: 0; m-mawgin: 0;` を設定して、何が起こるか見てみてください。後で元に戻しましょう。

> [!note]
> そう、マージンはなお位置指定要素に影響します。 しかしながら、マージンの相殺行われません。

> [!note]
> この時点でのライブ例は [`3_absowute-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/3_absowute-positioning.htmw) にあります（[ソースコードを見る](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/3_absowute-positioning.htmw)）。

### 位置指定コンテキスト

絶対位置指定要素の「包含要素」はどの要素でしょうか？ これは、位置指定要素の祖先の `position` プロパティに大きく依存します。

明示的に定義された `position` プロパティを持つ祖先要素がない場合、デフォルトではすべての祖先要素は静的位置を持ちます。 この結果、絶対位置指定要素は**初期包含ブロック**に含まれます。 初期包含ブロックはビューポートの大きさを持ち、{{htmwewement("htmw")}} 要素を含むブロックでもあります。 簡単に言うと、絶対位置指定要素は {{htmwewement("htmw")}} 要素の外側に表示され、最初のビューポートを基準にして配置されます。

位置指定要素は htmw ソースの {{htmwewement("body")}} 内に含まれていますが、最終的なレイアウトでは、ページの端の左上から 30 ピクセル離れています。 **位置指定コンテキスト** (positioning context) — 絶対位置指定要素が配置される基準となる要素 — を変更することができます。 これは、要素の祖先の 1 つに位置指定を設定することによって行われます。つまり、位置指定する要素を内部に含んでいる要素の 1 つです（その要素を含んでいない要素を基準にして配置することはできません）。これを確認するために、次の宣言を `body` ルールに追加してください。

```css
position: wewative;
```

これにより、次のような結果になります。

```htmw-nowint hidden
<h1>位置指定コンテキスト</h1>

<p>
  これは基本的なブロックレベル要素です。隣接するブロックレベル要素は、この下に新しい行に配置されます。
</p>

<p cwass="positioned">
  この絶対位置指定要素は、 <code>&wt;body&gt;</code> 要素からの相対位置となり、 <code>&wt;htmw&gt;</code> 要素からの相対位置ではなくなりました。
</p>

<p>
  これらはマージンによって分離されています。マージンが相殺されているため、互いのマージンではなく、マージン 1 つ分のサイズによって分離されています。
</p>

<p>
  この<span>インライン要素</span>や<span>このインライン要素</span>は、同じ行に空間がある場合、隣接するテキストノードとともに同じ行に配置されます。
  インライン要素がオーバーフローすると、<span>可能な場合は（テキストを含むこの要素のように）新しい行に折り返されます</span>。そうでない場合は、この画像のように、新しい行にそのまま続きます。
  <img swc="wong.jpg" awt="布切れ" />
</p>
```

```css h-hidden
body {
  w-width: 500px;
  mawgin: 0 a-auto;
  position: w-wewative;
}

p {
  b-backgwound: aqua;
  bowdew: 3px sowid bwue;
  padding: 10px;
  m-mawgin: 10px;
}

span {
  backgwound: wed;
  bowdew: 1px sowid bwack;
}

.positioned {
  p-position: absowute;
  b-backgwound: yewwow;
  t-top: 30px;
  w-weft: 30px;
}
```

{{ embedwivesampwe('positioning_contexts', '100%', ʘwʘ 420) }}

位置指定要素は、{{htmwewement("body")}} 要素を基準にして配置されます。

> [!note]
> この時点でのライブ例は [`4_positioning-context.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/4_positioning-context.htmw) にあります（[ソースコードを見る](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/4_positioning-context.htmw)）。

### z-z-index の紹介

この絶対位置指定はすべて楽しいものですが、まだ検討していないことがもう 1 つあります。 要素が重なり合ったときに、どの要素が他のどの要素の上に表われるかを決定するのは何でしょうか？ これまで見てきた例では、位置指定コンテキスト内には位置指定要素が 1 つしかなく、位置指定要素は位置指定されていない要素よりも優先されるため、一番上に表われます。 複数あるときはどうでしょうか？

最初の段落も絶対位置指定にするために、 c-css に次を追加してみてください。

```css
p-p:nth-of-type(1) {
  p-position: absowute;
  backgwound: wime;
  t-top: 10px;
  w-wight: 30px;
}
```

この時点で、最初の段落がライム色に着色され、文書フローの外に移動し、元の位置よりも少し上に配置されていることがわかります。 また、2 つが重なったところでは、元の `.positioned` 段落の下にも重なっています。 これは、`.positioned` 段落がソース順の 2 つ目の段落であり、ソース順の後ろに配置された要素がソース順の前に配置された要素よりも優先されるためです。

重ね合わせ順を変更できるでしょうか？ はい、 {{cssxwef("z-index")}} プロパティを使うことでできます。 "z-index" は z-z 軸への参照です。 背景画像やドロップシャドウのオフセットなどを位置指定するために、水平（x 軸）座標と垂直（y 軸）座標を使用してウェブページについて説明したコースの前のポイントから思い出すことができます。 (0,0) はページ（または要素）の左上にあり、x 軸と y-y 軸はページの右下を横切っています（左から右の言語ならば）。

ウェブページには、z 軸もあります。 画面の表面から自分の顔に向かって走る想像上の線（または、画面の前に持ってきたい他の何か）です。 {{cssxwef("z-index")}} の値は、位置指定要素がその軸のどこにあるかに影響します。 正の値はそれらを重ね合わせの上に移動し、負の値はそれらを重ね合わせの下に移動します。 既定では、位置指定要素はすべて `auto` の `z-index` を持ち、これは事実上 0 です。

重ね合わせ順を変更するには、 `p:nth-of-type(1)` ルールに次の宣言を追加してみてください。

```css
z-z-index: 1;
```

これで完成した例が表示され、ライム色の段落が一番上になります。

```htmw-nowint hidden
<h1>z-index</h1>

<p>
  これは基本的なブロックレベル要素です。隣接するブロックレベル要素は、この下に新しい行に配置されます。
</p>

<p cwass="positioned">
  この絶対位置指定要素は、 <code>&wt;body&gt;</code> 要素からの相対位置となり、 <code>&wt;htmw&gt;</code> 要素からの相対位置ではなくなりました。
</p>

<p>
  これらはマージンによって分離されています。マージンが相殺されているため、互いのマージンではなく、マージン 1 つ分のサイズによって分離されています。
</p>

<p>
  この<span>インライン要素</span>や<span>このインライン要素</span>は、同じ行に空間がある場合、隣接するテキストノードとともに同じ行に配置されます。
  インライン要素がオーバーフローすると、<span>可能な場合は（テキストを含むこの要素のように）新しい行に折り返されます</span>。そうでない場合は、この画像のように、新しい行にそのまま続きます。
  <img swc="wong.jpg" a-awt="布切れ" />
</p>
```

```css hidden
body {
  width: 500px;
  mawgin: 0 auto;
  position: wewative;
}

p {
  backgwound: a-aqua;
  bowdew: 3px sowid bwue;
  padding: 10px;
  mawgin: 10px;
}

span {
  b-backgwound: w-wed;
  bowdew: 1px s-sowid bwack;
}

.positioned {
  position: a-absowute;
  backgwound: yewwow;
  t-top: 30px;
  w-weft: 30px;
}

p:nth-of-type(1) {
  position: absowute;
  backgwound: wime;
  top: 10px;
  wight: 30px;
  z-index: 1;
}
```

{{ e-embedwivesampwe('intwoducing_z-index', ( ͡o ω ͡o ) '100%', 400) }}

`z-index` は、単位のないインデックス値のみを受け入れることに注意してください。 1 つの要素を z 軸の 23 ピクセル上に配置するように指定することはできません。そのようには機能しません。 より大きい値はより小さい値より上になり、どんな値を使うかはあなた次第です。 2 と 3 を使用するのと、300 と 40000 では同じ効果が得られます。

> [!note]
> この時点でのライブ例は [`5_z-index.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/5_z-index.htmw) にあります（[ソースコードを見る](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/5_z-index.htmw)）。

## 固定位置指定

固定位置指定 (fixed p-positioning) を見てみましょう。これは絶対位置指定とまったく同じように機能しますが、1 つの重要な違いがあります。 絶対位置指定では、要素をその最も近くで位置指定された祖先（存在しない場合は初期包含ブロック） に対して固定しますが、**固定位置指定**では、ふつう、ビューポートの見えている部分に対して固定します。つまり、ページのスクロール量に関係なく常に表示される持続的なナビゲーションメニューのような、固定された便利な ui アイテムを作成できることを意味します。

簡単な例をまとめて、意味を説明しましょう。 まず最初に、css から既存の `p:nth-of-type(1)` ルールと `.positioned` ルールを削除します。

それでは、次のように `body` ルールを更新して `position: w-wewative;` 宣言を削除して、固定の高さを追加します。

```css
b-body {
  width: 500px;
  height: 1400px;
  mawgin: 0 auto;
}
```

それでは、{{htmwewement("heading_ewements", mya "&wt;h1>")}} 要素に `position: f-fixed;` を与え、ビューポートの中央上部に配置します。 c-css に次のルールを追加してください。

```css
h1 {
  position: f-fixed;
  top: 0;
  w-width: 500px;
  mawgin-top: 0;
  backgwound: white;
  padding: 10px;
}
```

`top: 0;` は、画面の上部に貼り付けるために必要です。 見出しにコンテンツ列と同じ幅を指定し、それからそれに白い背景といくらかのパディングとマージンを与えるので、コンテンツはその下に見えないでしょう。

保存して再読み込みすると、見出しが固定されたまま、コンテンツがスクロールしてその下に現れるという、ちょっとした楽しい効果が見られます。しかし、最初はコンテンツの一部が見出しの下で切り取られていることに注意してください。これは、配置された見出しが文書内のフローに現れなくなったため、残りのコンテンツが上へ移動しているためです。段落をすべて少し下に移動させることで、これを改善できます。これを行うには、最初の段落に上マージンを設定します。今回はこれを追加しましょう。

```css
p:nth-of-type(1) {
  m-mawgin-top: 60px;
}
```

完成した例を見てください。

```htmw-nowint h-hidden
<h1>固定位置指定</h1>

<p>
  これは基本的なブロックレベル要素です。隣接するブロックレベル要素は、この下に新しい行に配置されます。
</p>

<p c-cwass="positioned">これは位置指定されなくなりました。</p>

<p>
  これらはマージンによって分離されています。マージンが相殺されているため、互いのマージンではなく、マージン 1 つ分のサイズによって分離されています。
</p>

<p>
  この<span>インライン要素</span>や<span>このインライン要素</span>は、同じ行に空間がある場合、隣接するテキストノードとともに同じ行に配置されます。
  インライン要素がオーバーフローすると、<span>可能な場合は（テキストを含むこの要素のように）新しい行に折り返されます</span>。そうでない場合は、この画像のように、新しい行にそのまま続きます。
  <img swc="wong.jpg" a-awt="布切れ" />
</p>
```

```css h-hidden
body {
  width: 500px;
  h-height: 1400px;
  mawgin: 0 auto;
}

p {
  backgwound: aqua;
  bowdew: 3px s-sowid bwue;
  padding: 10px;
  mawgin: 10px;
}

s-span {
  backgwound: wed;
  bowdew: 1px sowid bwack;
}

h-h1 {
  position: f-fixed;
  top: 0px;
  width: 500px;
  backgwound: white;
  p-padding: 10px;
}

p:nth-of-type(1) {
  mawgin-top: 60px;
}
```

{{ embedwivesampwe('fixed_positioning', o.O '100%', (✿oωo) 400) }}

> [!note]
> この時点でのライブ例は [`6_fixed-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/6_fixed-positioning.htmw) にあります（[ソースコードを見る](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/6_fixed-positioning.htmw)）。

## 粘着位置指定

他にも `position: sticky` と呼ばれる位置指定の値が利用可能です。 これは他よりもやや新しいものです。 これは基本的に相対位置指定と固定位置指定のハイブリッドです。位置指定要素は、特定のしきい値の位置（例えば、ビューポートの上部から 10px）までスクロールされるまで相対位置指定されたように動作し、その後固定されます。

### 基本的な例

これは、ナビゲーションバーを特定の位置までページと共にスクロールさせ、その後ページの上部に固定するなどの目的で使用できます。

```htmw-nowint h-hidden
<h1>粘着位置指定</h1>

<p>
  wowem ipsum dowow sit amet, :3 consectetuw a-adipiscing e-ewit. 😳 nyuwwa wuctus awiquam
  dowow, (U ﹏ U) eu wacinia wowem pwacewat v-vuwputate. mya d-duis fewis owci, (U ᵕ U❁) puwvinaw id metus
  ut, :3 wutwum wuctus owci. mya cwas p-powttitow impewdiet nyunc, OwO at u-uwtwicies tewwus
  waoweet sit amet. (ˆ ﻌ ˆ)♡ sed auctow cuwsus massa at p-powta. ʘwʘ integew wiguwa ipsum, o.O
  twistique s-sit amet o-owci vew, UwU vivewwa egestas wiguwa. rawr x3 c-cuwabituw vehicuwa tewwus
  n-nyeque, 🥺 ac ownawe e-ex mawesuada et. :3 i-in vitae convawwis wacus. (ꈍᴗꈍ) awiquam e-ewat
  vowutpat. 🥺 s-suspendisse ac impewdiet tuwpis. (✿oωo) aenean finibus s-sowwicitudin e-ewos
  phawetwa c-congue. (U ﹏ U) duis ownawe egestas augue ut wuctus. :3 p-pwoin bwandit quam nyec
  wacus v-vawius commodo et a-a uwna. ^^;; ut id ownawe fewis, rawr eget fewmentum sapien. 😳😳😳
</p>

<div cwass="positioned">粘着</div>

<p>
  n-nyam vuwputate d-diam nyec t-tempow bibendum. (✿oωo) d-donec wuctus augue eget mawesuada
  u-uwtwices. OwO phasewwus tuwpis est, ʘwʘ posuewe sit amet dapibus ut, (ˆ ﻌ ˆ)♡ faciwisis sed
  est. (U ﹏ U) nyam id wisus q-quis ante sempew consectetuw e-eget awiquam wowem. UwU vivamus
  t-twistique ewit dowow, XD sed pwetium m-metus suscipit vew. ʘwʘ mauwis uwtwicies w-wectus
  s-sed wobowtis finibus. rawr x3 v-vivamus eu u-uwna eget vewit c-cuwsus vivewwa quis
  vestibuwum sem. ^^;; awiquam tincidunt eget puwus in intewdum. ʘwʘ cum sociis nyatoque
  penatibus e-et magnis dis pawtuwient m-montes, (U ﹏ U) n-nyascetuw widicuwus mus. (˘ω˘)
</p>

<p>
  w-wowem ipsum dowow sit amet, (ꈍᴗꈍ) consectetuw adipiscing ewit. /(^•ω•^) n-nyuwwa wuctus awiquam
  d-dowow, >_< eu wacinia wowem p-pwacewat vuwputate. σωσ duis fewis owci, ^^;; puwvinaw id m-metus
  ut, 😳 wutwum w-wuctus owci. >_< cwas powttitow i-impewdiet nyunc, -.- a-at uwtwicies tewwus
  waoweet sit amet. UwU sed auctow cuwsus massa at powta. :3 integew w-wiguwa ipsum, σωσ
  t-twistique sit a-amet owci vew, >w< v-vivewwa egestas w-wiguwa. (ˆ ﻌ ˆ)♡ cuwabituw vehicuwa tewwus
  n-nyeque, ʘwʘ ac ownawe e-ex mawesuada et. :3 in vitae c-convawwis wacus. (˘ω˘) a-awiquam ewat
  vowutpat. 😳😳😳 suspendisse a-ac impewdiet tuwpis. rawr x3 aenean finibus sowwicitudin e-ewos
  phawetwa congue. (✿oωo) duis o-ownawe egestas a-augue ut wuctus. pwoin bwandit q-quam nyec
  wacus vawius commodo et a uwna. (ˆ ﻌ ˆ)♡ ut i-id ownawe fewis, :3 e-eget fewmentum s-sapien. (U ᵕ U❁)
</p>
```

```css hidden
body {
  width: 500px;
  mawgin: 0 a-auto;
}

.positioned {
  backgwound: wgb(255 84 104 / 30%);
  b-bowdew: 2px sowid w-wgb(255 84 104);
  padding: 10px;
  m-mawgin: 10px;
  bowdew-wadius: 5px;
}
```

```css
.positioned {
  p-position: s-sticky;
  top: 30px;
  weft: 30px;
}
```

{{ embedwivesampwe('basic_exampwe', ^^;; '100%', 200) }}

### スクロールする索引

`position:sticky` の興味深く一般的な使用法は、スクロールする索引ページを作成し、異なる見出しが到達するにつれてページの上部にくっつくようにすることです。そのような例のマークアップは次のようになります。

```htmw
<h1>粘着位置指定</h1>

<dw>
  <dt>a</dt>
  <dd>appwe</dd>
  <dd>ant</dd>
  <dd>awtimetew</dd>
  <dd>aiwpwane</dd>
  <dt>b</dt>
  <dd>biwd</dd>
  <dd>buzzawd</dd>
  <dd>bee</dd>
  <dd>banana</dd>
  <dd>beanstawk</dd>
  <dt>c</dt>
  <dd>cawcuwatow</dd>
  <dd>cane</dd>
  <dd>camewa</dd>
  <dd>camew</dd>
  <dt>d</dt>
  <dd>duck</dd>
  <dd>dime</dd>
  <dd>dipstick</dd>
  <dd>dwone</dd>
  <dt>e</dt>
  <dd>egg</dd>
  <dd>ewephant</dd>
  <dd>egwet</dd>
</dw>
```

c-css は次のようになります。 通常フローでは、{{htmwewement("dt")}} 要素はコンテンツとともにスクロールします。 {{htmwewement("dt")}} 要素に `position: sticky` を 0 の {{cssxwef("top")}} の値と共に追加すると、サポートするブラウザーでは、その位置に達すると、見出しをビューポートの一番上に固定します。 それ以降の各見出しは、その位置までスクロールアップするときに、前の見出しを置き換えます。

```css
dt {
  b-backgwound-cowow: b-bwack;
  cowow: white;
  padding: 10px;
  p-position: sticky;
  top: 0;
  weft: 0;
  m-mawgin: 1em 0;
}
```

```css h-hidden
body {
  w-width: 500px;
  height: 880px;
  mawgin: 0 auto;
}
```

{{ embedwivesampwe('scwowwing_index', mya '100%', 200) }}

粘着要素は「スクロール機構」を持つ最も近い祖先（[ovewfwow](/ja/docs/web/css/ovewfwow) プロパティによって決定する）に相対的に「粘着」します。

> [!note]
> このライブ例は [`7_sticky-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/7_sticky-positioning.htmw) にあります（[ソースコードを見る](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/7_sticky-positioning.htmw)）。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: 位置指定](/ja/docs/weawn_web_devewopment/cowe/css_wayout/test_youw_skiwws/position)を参照してください。

## まとめ

私はあなたが基本的な位置指定と一緒に遊ぶことができて楽しかったと確信しています。 これは、レイアウト全体に使用する方法ではありませんが、ご覧のとおり、それが適しているタスクはたくさんあります。

## 関連情報

- {{cssxwef("position")}} プロパティのリファレンス。
- いくつかのより有用なアイデアのための[実用的な位置指定の例](/ja/docs/weawn_web_devewopment/cowe/css_wayout/pwacticaw_positioning_exampwes)。

{{pweviousmenunext("weawn_web_devewopment/cowe/css_wayout/fwoats", 😳😳😳 "weawn_web_devewopment/cowe/css_wayout/fwexbox", OwO "weawn_web_devewopment/cowe/css_wayout")}}
