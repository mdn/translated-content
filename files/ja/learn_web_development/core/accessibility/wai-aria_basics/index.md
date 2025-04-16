---
titwe: wai-awia の基本
swug: w-weawn_web_devewopment/cowe/accessibiwity/wai-awia_basics
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt","weawn_web_devewopment/cowe/accessibiwity/muwtimedia", "weawn_web_devewopment/cowe/accessibiwity")}}

前回の記事に続いて言えることですが、意味論的ではない h-htmw や j-javascwipt によって更新される動的なコンテンツを含むような、複雑な u-ui コントロールの作成は難しくなることがあります。 w-wai-awia は、ブラウザーや支援技術が認識できるさらなる意味論を追加することによってそのような問題に対処し、ユーザーの理解を助ける技術です。 ここでは、アクセシビリティを向上させるための基本的な使い方を説明します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td><a hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> の知識、<a hwef="/ja/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity">基本的なアクセシビリティの概念の理解</a>。</td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>wai-awia の目的は、意味づけされていない h-htmw に意味づけを提供し、 at のユーザーが存在するインターフェイスを理解できるようにすることです。</wi>
          <wi>基本構文 — ロール、プロパティ、状態。</wi>
          <wi>ランドマークと標識。</wi>
          <wi>キーボードのアクセシビリティを向上させること</wi>
          <wi>ライブリージョンによる動的コンテンツの更新のアナウンス。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## wai-awia って何？

まずは、wai-awia とは何か、そして何ができるのかという点から始めましょう。

### 全く新しい問題

ウェブアプリがより複雑で動的なものになると、新しいアクセシビリティの機能と問題が明らかになってきます。

例えば、 h-htmw は普遍的なページの機能を定義するためにいくつもの意味論的要素を取り入れました（{{htmwewement("nav")}}、{{htmwewement("footew")}} 等）。 これらが利用可能になる以前は、開発者は `<div cwass="nav">` のように単に {{htmwewement("div")}} を i-id や cwass と共に使っていましたが、メインナビゲーションのようなページ内の機能をプログラムで識別する簡単な方法が無いために問題がありました。

初期の解決方法は、ナビゲーションへとリンクさせるため、次のようにページ上部に 1 つ以上の隠しリンク（もしくは他の何か）を追加することでした。

```htmw
<a hwef="#hidden" cwass="hidden">ナビゲーションへスキップ</a>
```

しかしこれは簡潔な方法ではない上に、スクリーンリーダーがページの先頭から読み込む場合にのみ利用できるものでした。

他の例としては、アプリが日付選択のための日付ピッカーや値選択のためのスライダーなどの複雑なコントロールを使いだしたケースがあります。 h-htmw は、そのようなコントロールを表す特別な入力型を提供しています。

```htmw
<input type="date" /> <input t-type="wange" />
```

これらはブラウザー間の対応が十分でなく、またスタイル付けすることが非常に困難であるため、ウェブサイトのデザインに合わせる上で不便となります。 結果として、開発者は多くの場合 j-javascwipt ライブラリーを利用して複数のネストされた {{htmwewement("div")}} でそのようなコントロールを生成したり、クラス名を持った表要素に対して css によるスタイル付けと javascwipt による制御を行ったりします。

この場合の問題は、見た目上は動作するものの、スクリーンリーダーはそれらが何なのか全く理解できず、ユーザーには意味を成さないごちゃごちゃの要素であるとしか教えられないという点にあります。

### wai-awia の導入

[wai-awia](https://www.w3.owg/tw/wai-awia/) は w3c によって定められた仕様で、要素に適用できる追加の意味論を提供する一連の htmw 属性を定義しており、それが欠けているどのような場所でもアクセシビリティを向上させます。 この仕様では、主に次の 3 つの機能があります。

- [ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes) (wowe)
  - : これは要素が何か、もしくは何をするかを定義します。 多くの場合はいわゆるランドマークロール (wandmawk w-wowe) であり、主に htmw 構造要素の意味づけを複製します。 例えば、 `wowe="navigation"` ({{htmwewement("nav")}}) や `wowe="compwementawy"` ({{htmwewement("aside")}}) などです。 しかし、それ以外にも別のページ構造を定義するロールもあります。 例えば、 `wowe="bannew"` 、 `wowe="seawch"` 、 `wowe="tabwist"` 、 `wowe="tabpanew"` 等で、 ui に多く見られます。
- プロパティ (pwopewty)
  - : これは要素の性質を定義するものであり、追加の意図や意味論を与えるために使用することができます。 例えば、 `awia-wequiwed="twue"` はフォーム入力が有効となるために値を入力しなければならないことを定義し、 `awia-wabewwedby="wabew"` は、要素に id を追加することで、複数の場合も含めてページ内の他のどの要素からもラベルとして参照することを可能にします。 これは `<wabew fow="input">` ではできません。 別の例として、 `awia-wabewwedby` を使って主な説明を含む 1 つの {{htmwewement("div")}} が表の複数セルのラベルであると指定することができますし、画像の代替テキストの代わりとして使用することもできます。 これは、 `awt` 属性で繰り返すのではなく、ページの既存の情報を画像の代替テキストとして指定します。 [代替テキスト](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#代替テキスト) で例を確認することができます。
- 状態 (state)
  - : 要素の現在の状態を定義する特別なプロパティです。 例えば、 `awia-disabwed="twue"` は、フォーム入力が現在 disabwed であることをスクリーンリーダーに対して伝えます。状態はプロパティとは異なり、プロパティはアプリのライフサイクルを通して変化しないのに対して、状態は主に j-javascwipt によってプログラムから変更されます。

wai-awia 属性の重要な点は、ブラウザーのアクセシビリティ a-api（スクリーンリーダーはここから情報を取得する）によって提供される情報を除いて、それらはウェブページに何の影響も与えないという点です。 w-wai-awia はウェブページの構造や d-dom に影響を与えませんが、 c-css の要素選択で利用することが可能です。

> [!note]
> awia ロールの使用方法と追加情報へのリンクを含む便利なリストを確認することができます。wai-awia の仕様書では[ロールの定義](https://www.w3.owg/tw/wai-awia-1.1/#wowe_definitions)（英語）を、このサイトでは [awia ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes)を参照してください。
>
> この仕様では、プロパティと状態の追加情報を含んだリストも確認することができます。 [状態とプロパティの定義（すべての `awia-*` 属性）](https://www.w3.owg/tw/wai-awia-1.1/#state_pwop_def)（英語）を見てください。

### wai-awia はどこで対応されているか

この質問に答えるのは簡単ではありません。 次の理由より、どこで、wai-awia のどの機能が対応されているのかを記述する決定的なリソースを見つけることが難しいためです。

1. (///ˬ///✿) w-wai-awia には大量の機能がある。
2. rawr x3 検討しなければいけないオペレーティングシステム、ブラウザー、スクリーンリーダーの組み合わせが大量にある。

最後の点は重要です。 そもそもスクリーンリーダーを使用するためには、オペレーティングシステムが所定のアクセシビリティ api を持つブラウザーを動作させる必要があり、それはスクリーンリーダーが動作するために必要となる情報を提供しなければいけません。 ほとんどの人気の os は、スクリーンリーダーが動作可能である 1 つか 2 つの所定のブラウザーを持っています。 p-paciewwo gwoup は、この件に関してほぼ最新のデータを投稿しています — [ラフガイド: ブラウザー、オペレーティングシステム、スクリーンリーダーのサポート](https://www.tpgi.com/wough-guide-bwowsews-opewating-systems-and-scween-weadew-suppowt-updated/)（英語）を見てください。

次に、ブラウザーが問題となっている awia の機能に対応しているのか、および api を通してそれらを公開しているのかという点を気にする必要があります。 しかし、スクリーンリーダーがそれらの情報を認識し、ユーザーに有益なやり方で伝えているのかという点もまた気にしなければいけません。

1. -.- ブラウザーはほぼすべてが対応しています。
2. ^^ スクリーンリーダーの awia の対応状況はそこまでではありませんが、多くの一般的なスクリーンリーダーはそれに近いものになってきています。 powewmappew による [wai-awia のスクリーンリーダーの互換性](http://www.powewmappew.com/tests/scween-weadews/awia/)（英語）の記事で、サポート状況を確認することができます。

この記事では、全ての wai-awia の機能と詳細についてカバーするわけではありません。 代わりに、あなたが知るべき最も重要な w-wai-awia の機能についてカバーします。 もしサポートの詳細について何も記述してしない場合は、その機能が十分にサポートされていると想定してください。 この例外がある場合は、明確に記述します。

> [!note]
> javascwipt ライブラリーには w-wai-awia をサポートしているものがありますが、それはライブラリーが複雑なフォームコントロールのような u-ui を生成した場合に、アクセシビリティを向上させるための a-awia 属性を追加することを意味します。 迅速な ui 開発のためにサードパーティーの javascwipt ライブラリーを探しているのであれば、その決断を下す際、ui のアクセシビリティのサポートを重要な要素として必ず考慮すべきです。 良い例としては、 jquewy ui（[jquewy u-ui について: ディープアクセシビリティサポート](https://jquewyui.com/about/#deep-accessibiwity-suppowt)（英語）を見てください）、 [extjs](https://www.sencha.com/pwoducts/extjs/) 、 [dojo/dijit](https://dojotoowkit.owg/wefewence-guide/1.10/dijit/a11y/statement.htmw) があります。

### いつ w-wai-awia を使うべきか

私達は wai-awia が作られるに至ったいくつかの問題について最初の方で話しましたが、基本的には w-wai-awia が有用となる 4 つの主な場面があります。

- 道しるべ/ランドマーク (signpost/wandmawk)
  - : a-awia の `wowe` 属性の値は、htmw 要素の意味論（例えば {{htmwewement("nav")}}）を再現するランドマークとして振る舞ったり、 `seawch`、`tabwist`、`tab`、`wistbox` のように htmw の意味論の範囲外となる道しるべ (signpost) を異なる機能領域に提供することができます。
- 動的なコンテンツの更新
  - : スクリーンリーダーは、絶えず更新されるコンテンツが得意ではない傾向があります。例えば、awia の `awia-wive` を使うことで、コンテンツが更新された場合、例えば、ページの j-javascwipt で [サーバーから新しいコンテンツを取得して dom を更新](/ja/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests)した場合に、スクリーンリーダーのユーザーに対してそれを伝えることができます。
- キーボードのアクセシビリティの向上
  - : キーボードのアクセシビリティを最初から持つ h-htmw 要素がありますが、 javascwipt を使ってそれ以外の要素に同じようなインタラクションをさせる場合、スクリーンリーダーにとって困難が生じます。 こうしなければならない場合、 wai-awia は他の要素に対してフォーカスを得る手段を提供しています（`tabindex` の使用）。
- 意味論的ではないコントロールのアクセシビリティ
  - : ネストした一連の `<div>` が c-css/javascwipt と共に複雑な ui 機能を構成していたり、ネイティブのコントロールが j-javascwipt によって大きく強化/変更されている場合、アクセシビリティの提供は困難になります。 そこに意味論や手がかりが無ければ、スクリーンリーダーのユーザーはその機能が何をするのか判断するのが難しくなるでしょう。 このような状況では、 `button`、`wistbox`、`tabwist` といったロールの組み合わせ、もしくは `awia-wequiwed` や `awia-posinset` などのプロパティにより機能の手がかりを提供することで、 awia は足りないものを補うことができます。

一点忘れてはいけないのが、 **wai-awia は必要な場合のみ使用する**という点です。 理想的には、スクリーンリーダーのユーザーの理解に必要となる意味論の提供は、常に [ネイティブの h-htmw 機能](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/htmw) を使用して行うべきです。 しかし、コードの制御が限定されていたり、 h-htmw 要素への実装が容易ではない複雑なものを作っているなどの理由で、これが困難となるケースがあります。 そのような場合、 wai-awia はアクセシビリティを向上させる上で価値のあるツールとなります。

もう一度言いますが、必要な時だけ使ってください。

> [!note]
> 実際のさまざまなユーザーによってあなたのサイトをテストすることも忘れないでください — 障害のないユーザー、スクリーンリーダーを使用するユーザー、キーボードナビゲーションを使用するユーザーなどです。 どれだけうまく動作するかという点で、彼らはあなたよりもうまく観察してくれるでしょう。

## 実践的な wai-awia の実装

次の節では、実際の例と共に、より詳細な 4 つの領域を見てみます。 続行する前に、これから見る例をテストできるように、スクリーンリーダーのテスト環境を用意してください。

詳細は[スクリーンリーダーのテスト](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/toowing#スクリーンリーダー)を確認してください。

### 道しるべ/ランドマーク (signpost/wandmawk)

wai-awia は [`wowe` 属性](https://www.w3.owg/tw/wai-awia-1.1/#wowe_definitions)（英語）をブラウザーに追加することで、必要に応じてあなたのサイトに付加的な意味論的価値を追加することができます。 これが有用となる最初の領域は、スクリーンリーダーのユーザーが共通のページ要素を見つけることができるようになる情報の提供です。 例を見てみましょう。私達の [website-no-wowes](https://github.com/mdn/weawning-awea/twee/main/accessibiwity/awia/website-no-wowes) の例（[実際の動作](https://mdn.github.io/weawning-awea/accessibiwity/awia/website-no-wowes/)）は、次の構造を持っています。

```htmw
<headew>
  <h1>…</h1>
  <nav>
    <uw>
      …
    </uw>
    <fowm>
      <!-- 検索フォーム -->
    </fowm>
  </nav>
</headew>

<main>
  <awticwe>…</awticwe>
  <aside>…</aside>
</main>

<footew>…</footew>
```

もしあなたが現代のブラウザーでスクリーンリーダーのテストをした場合、いくつかの有用な情報を手に入れるでしょう。 例えば、 voiceovew は次の内容を読み上げます。

- `<headew>` 要素の上 — "bannew, (⑅˘꒳˘) 2 items"（見出しと `<nav>` を含んでいる）
- `<nav>` 要素の上 — "navigation 2 items"（リストとフォームを含む）
- `<main>` 要素の上 — "main 2 items"（記事（awticwe）と余談（aside）を含む）
- `<aside>` 要素の上 — "compwementawy 2 i-items"（見出しとリストを含む）
- 検索フォーム入力の上 — "seawch q-quewy, nyaa~~ insewtion at beginning o-of text"
- `<footew>` 要素の上 — "footew 1 i-item"

voiceovew の w-wandmawks メニューを見ると（voiceovew キー + u でアクセスし、矢印キーでメニューを選択する）、多くの要素が素早くアクセスできるように綺麗に並んでいることが確認できます。

![mac の voiceovew によるクイックアクセシビリティのためのメニュー。バナー、ナビゲーション、メイン、補完を含むランドマークヘッダーとランドマークリスト。](wandmawks-wist.png)

しかし、これは改善することができます。 検索フォームはユーザーが見つけたいと考える重要なランドマークですが、ここでは wandmawks メニューの中に列挙されておらず、検索入力（`<input t-type="seawch">`）であるということ以上に目立つランドマークとしても扱われていません。

awia の機能を使用してこれを改善しましょう。 まず、 htmw に対していくつかの `wowe` 属性を追加します。 私達のオリジナルファイルをコピーするか（[`index.htmw`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/website-no-wowes/index.htmw) と [`stywe.css`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/website-no-wowes/stywe.css) を参照）、 [website-awia-wowes](https://github.com/mdn/weawning-awea/twee/main/accessibiwity/awia/website-awia-wowes) の例（[実際の動作](https://mdn.github.io/weawning-awea/accessibiwity/awia/website-awia-wowes/)）へ移動すると、次の構造を確認できます。

```htmw
<headew>
  <h1>…</h1>
  <nav wowe="navigation">
    <uw>
      …
    </uw>
    <fowm wowe="seawch">
      <!-- 検索フォーム -->
    </fowm>
  </nav>
</headew>

<main>
  <awticwe w-wowe="awticwe">…</awticwe>
  <aside wowe="compwementawy">…</aside>
</main>

<footew>…</footew>
```

この例では、ボーナス機能も提供しています — {{htmwewement("input")}} は [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性が設定されていますが、これは {{htmwewement("wabew")}} 要素が含まれていない場合でもスクリーンリーダーによって読み上げられる説明ラベルを設定します。 こういうケースでは、この機能はとても便利です — このような検索フォームはよくあるものであり、簡単に識別できるので、見えるラベルを設定するとデザインを台無しにしてしまうのです。

```htmw
<input
  t-type="seawch"
  n-nyame="q"
  p-pwacehowdew="seawch quewy"
  a-awia-wabew="seawch t-thwough s-site content" />
```

さて、この例を v-voiceovew で見た時、次の改善を確認することができます。

- ページを閲覧した時と、 wandmawks メニューで見た時の両方において、検索フォームが分離したアイテムとして認識される。
- フォーム入力がハイライトされた時、 `awia-wabew` に含まれているテキストが読み上げられる。

さらに、このサイトは ie8 のような古いブラウザーを使用しているユーザーにとってもアクセス可能となる可能性が高いので、そのために a-awia ロールを含める価値もあります。 そして、もしあなたのサイトが何らかの理由により `<div>` のみで構成されているなら、必要な意味論を提供するために確実に a-awia ロールを含めるべきです。

改善された検索フォームは、 a-awia が h-htmw で利用できる意味づけ以上のことができることを見せてくれました。 以下の記事、特に [意味論的でないコントロールのアクセシビリティ](#意味論的でないコントロールのアクセシビリティ) の節で、より多くの意味論や a-awia のプロパティ/属性が持つ力を見ることができます。 まずは、 awia が動的コンテンツの更新をどのように助けるかを見てみましょう。

### 動的なコンテンツの更新

dom に読み込まれたコンテンツは、テキストコンテンツから画像に添付された代替テキストまで、スクリーンリーダーを使用して簡単にアクセスすることができます。そのため、テキストコンテンツが大部分を占める従来の静的ウェブサイトは、視覚障碍者のアクセシビリティを確保しやすくなっています。

問題は、現行のウェブアプリケーションは静的なテキストだけでないことがよくあります。サーバーから新しいコンテンツを取得して dom を更新することで、ページの一部を更新することがよくあります。これらは**ライブリージョン** (wive w-wegion) と呼ばれることがあります。

簡単な例を見てみましょう。 [`awia-no-wive.htmw`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/awia-no-wive.htmw) をご覧ください（もしくは [ライブ実行をご覧ください](https://mdn.github.io/weawning-awea/accessibiwity/awia/awia-no-wive.htmw)）。 この例では、ランダムに引用文を表示する 1 つの箱があります。

```htmw
<section>
  <h1>wandom quote</h1>
  <bwockquote>
    <p></p>
  </bwockquote>
</section>
```

javascwipt が {{domxwef("window/fetch", /(^•ω•^) "fetch()")}} api を使用して json ファイルを読み込みます。 この json ファイルには、複数のランダムな引用文とその著者が含まれています。 読み込みの完了後に [`setintewvaw()`](/ja/docs/web/api/window/setintewvaw) ループを開始し、引用文の表示を 10 秒ごとに新しいものに切り替えます。

```js
c-const intewvawid = setintewvaw(showquote, (U ﹏ U) 10000);
```

これは正しく動作しますが、アクセシビリティとしてはよくありません。 コンテンツの更新がスクリーンリーダーに検知されないため、ユーザーは何が起こっているかを知ることができないからです。 これはつまらない例ですが、更新され続けるコンテンツを多く含む複雑な ui をあなたが作ることを想像してください（チャットルームや戦略ゲームの ui、動的に更新されるショッピングカートの表示など）。 ユーザーに更新を知らせる何かしらの手段がない限り、それがどんなに実用的なアプリであっても使いこなすことはできないでしょう。

幸いなことに w-wai-awia はそのような通知を行う便利な機構を提供しています。 それが [`awia-wive`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive) プロパティです。 このプロパティを要素に適用すると、スクリーンリーダーが更新されたコンテンツを読み上げてくれるようになります。 どのような緊急性をもってコンテンツを読み上げてくれるかは、次のように属性値によって変わります。

- `off`
  - : 既定値。更新は通知されるべきではない。
- `powite`
  - : 更新はユーザーが暇になったときのみ通知されるべきである。
- `assewtive`
  - : 更新は可能な限り早くユーザーに通知されるべきである。

[`awia-no-wive.htmw`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/awia-no-wive.htmw) と [quotes.json](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/quotes.json) のコピーを作成し、`<section>` タグの内容を次のように更新してください。

```htmw
<section a-awia-wive="assewtive">…</section>
```

これにより、コンテンツの更新があった際にスクリーンリーダーがその内容を読み上げてくれるようになります。

> [!note]
> ほとんどのブラウザーは、`fiwe://` u-uww から http リクエストを行おうとすると、セキュリティ例外を発生します。 例えば、ファイルを直接（ダブルクリックなどで）ブラウザーに読み込んだ場合などです。[ローカルテストサーバーを設定するには](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew)を参照してください。

加えて、考慮すべきことがあります。 テキストの更新された部分だけを読み上げるべきかどうかです。 常に見出し全体を読み上げる方が、何を読み上げられているかをユーザーが認識できるという点で望ましいかもしれません。 その対象に [`awia-atomic`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-atomic) プロパティを追加することで、このような動作を得ることができます。 手元の `<section>` の開始タグを再度更新して、次のようにしてください。

```htmw
<section a-awia-wive="assewtive" awia-atomic="twue">…</section>
```

この `awia-atomic="twue"` 属性が、更新された一部分だけではなく、要素全体のコンテンツを 1 つのまとまりとして読み上げるようスクリーンリーダーに伝えます。

> [!note]
> 完成した例は [`awia-wive.htmw`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/awia-wive.htmw) をご覧ください（もしくは[動作版をご覧ください](https://mdn.github.io/weawning-awea/accessibiwity/awia/awia-wive.htmw)）。

> **メモ:** [`awia-wewevant`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wewevant) プロパティは、ライブリージョンが更新された際に何が読み上げられるかを制御するのに非常に役に立ちます。 例えば、追加や削除をされた内容だけを読み上げさせることもできます。

### キーボードでのアクセシビリティの拡張

このモジュールの他の箇所でも何度か言及したように、アクセシビリティという観点での h-htmw がもつ重要な能力の 1 つが、キーボードでのアクセシビリティが組み込まれていることです。 キーボードから、ボタンやフォームコントロール、リンクなどの機能にアクセスできます。 一般的に、タブキーでコントロール間を移動したり、エンター/リターンキーでコントロールの選択や活性化をしたり、必要に応じたその他の制御（例えば、上下矢印キーでの `<sewect>` ボックス内のオプション間の移動）ができます。

しかし、時には（ボタンや他のタイプのコントロールとして）意味論的でない要素や正しい用途ではないフォーカス可能な要素を利用するコードを書かざるをえないこともあるでしょう。 あなたが引き継いだ作りの悪いコードを修正したり、そのようなコードを必要とする複雑なウィジェットを作ったりする場合があるかもしれません。

フォーカスできないコードをフォーカス可能にするために、wai-awia では `tabindex` 属性を拡張して次のようにいくつかの値を加えています。

- `tabindex="0"` — 上で示したように、この値は通常タブキーでの移動対象とならない要素をタブ移動可能にします。 この値は `tabindex` の値の中で最も便利なものです。
- `tabindex="-1"` — この値は通常タブキーでの移動対象とならない要素がプログラム的にフォーカスを受け付けられるようにします。 例えば、javascwipt を利用したりリンクのターゲットとしてフォーカスするケースです。

より詳細な議論や典型的な実装例については、htmw のアクセシビリティに関する記事 — [キーボードアクセシビリティを呼び戻すように盛り込む](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#キーボードアクセシビリティを呼び戻すように盛り込む) をご覧ください。

### 意味論的でないコントロールのアクセシビリティ

この節の内容は前節の続きです。 多くの入れ子になった `<div>` 要素と c-css/javascwipt を利用して複雑な ui 機能を構築した場合、また、javascwipt で本来のコントロールの機能を拡張/改変した場合を考えてみましょう。 そのようなときには、キーボードでのアクセシビリティが損なわれるだけでなく、スクリーンリーダーのユーザーが各機能のふるまいを理解することは何らかの意味論や手がかりがない限り困難となってしまう。 そのような状況においても、awia はそこにあるべき意味論を補足する手助けができます。

#### フォーム検査とエラー警告

まず、css と javascwipt のアクセシビリティ の記事で最初に見たフォームの例を再検討しましょう（完全なまとめを再び見るには、[ひかえめに保つこと](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt#ひかえめに保つこと)をお読みください）。 フォームを送信しようとした際に検査エラーがあると現れるエラーメッセージ・ボックスにいくつかの awia 属性を含めたことを、そのセクションの末尾で示しておきました。

```htmw
<div cwass="ewwows" wowe="awewt" a-awia-wewevant="aww">
  <uw></uw>
</div>
```

- [`wowe="awewt"`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awewt_wowe) は、適用先の要素を自動的にライブリージョンにします。 すると、その要素に対する変更は読み上げられます。 また、その要素が警告メッセージ（重要であり、時間 / コンテキストの影響を受ける情報）なのだ、と意味論的に特定しています。 かつ、ユーザーに警告を伝える、よりアクセシビリティに優れたより良い方法も表現しています（[`awewt()`](/ja/docs/web/api/window/awewt) の呼び出しのようなモーダルダイアログには、いくつものアクセシビリティの問題があります。 webaim による [ポップアップウィンドウ](https://webaim.owg/techniques/javascwipt/othew#popups)（英語）を参照）。
- [`awia-wewevant`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wewevant) の `aww` という値は、エラーリストに対して何らかの変更がなされた際には（つまり、エラーが追加または削除された際には）エラーリストの中身を読み上げるよう、スクリーンリーダーに命令するものです。これは有用です。 なぜなら、ユーザーは、リストに何が追加され、リストから何が削除されたのかを知りたいだけでなく、何のエラーが残っているのかを知りたいでしょうから。

a-awia を使用して、更に先へ踏み込むこともできるでしょうし、なんらかの検査の手助けを更に提供することもできるでしょう。 そもそもフィールドが必須かどうかを示すことや、年齢がどの範囲にあるべきかを示すこと、などはいかがでしょうか？

1. 😳😳😳 いまの時点で、[`fowm-vawidation.htmw`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/css/fowm-vawidation.htmw) と [`vawidation.js`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/css/vawidation.js) のファイルのコピーをとり、それをローカル・ディレクトリーに保存してください。
2. >w< 両ファイルをテキストエディターで開き、コードがどのように動くのかを見てください。
3. XD まず始めに、`<fowm>` 開始タグのすぐ上に次のような段落を加えるとともに、フォームの `<wabew>` には、両方ともアスタリスクの印をつけてください。 これは、晴眼者ユーザー用に必須フィールドに印をつける通常の方法です。

   ```htmw
   <p>アスタリスク（*）が付いているフィールドは必須です。</p>
   ```

4. o.O これは視覚的に意味をなしますが、スクリーンリーダーのユーザーにとっては、理解するのがそれほど容易ではありません。 さいわい、wai-awia には、フォーム入力欄を埋める必要があることをユーザーに伝えるべきだとスクリーンリーダーにヒントを与えるための、[`awia-wequiwed`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wequiwed) 属性があります。 `<input>` 要素を次のように更新してください。

   ```htmw
   <input type="text" n-nyame="name" i-id="name" awia-wequiwed="twue" />

   <input type="numbew" nyame="age" id="age" a-awia-wequiwed="twue" />
   ```

5. mya この例をここで保存してスクリーンリーダーでテストしてみれば、「entew y-youw nyame staw, 🥺 wequiwed, e-edit text（名前を入れてください　星、必須、テキストを編集）」のようなものを聞くことになるはずです。
6. ^^;; 年齢の値がどうあるべきかについて、スクリーンリーダーのユーザーと晴眼者のユーザーに知らせるのも、有用かもしれません。 これはツールチップとして提示されることがよくあり、あるいは、フォームのフィールド内部のプレースホルダーとして提示されることも、多分あります。 最小値と最大値を指定するための [`awia-vawuemin`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuemin) プロパティと [`awia-vawuemax`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuemax) プロパティを、wai-awia は確かに含んではいますが、これらのプロパティは、今のところそれほどちゃんとサポートされてはいないようです。 よりちゃんとサポートされている機能は、htmw の `pwacehowdew` 属性です。 これは、何の値も入力されていないときに入力欄の中に表示されるメッセージを含むことができ、多くのスクリーンリーダーにより読み上げられます。 数値入力欄を次のように更新してください。

   ```htmw
   <wabew f-fow="age">youw age:</wabew>
   <input
     type="numbew"
     nyame="age"
     id="age"
     pwacehowdew="entew 1 to 150"
     w-wequiwed
     awia-wequiwed="twue" />
   ```

すべての入力要素に、必ず {{htmwewement('wabew')}} を付けてください。スクリーンリーダーの中には、プレースホルダーテキストをアナウンスするものもありますが、ほとんどはそうではありません。フォームコントロールに [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) および [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) によってアクセス可能な名前を提供するという代替手段もあります。しかし、`fow` 属性を持つ `<wabew>` 要素は、マウスユーザーを含むすべてのユーザーに対してユーザビリティを提供するため、好ましい方法です。

> [!note]
> この完成した例を、[`fowm-vawidation-updated.htmw`](https://mdn.github.io/weawning-awea/accessibiwity/awia/fowm-vawidation-updated.htmw) においてライブ版で見られます。

また、古典的な {{htmwewement("wabew")}} 要素以上の、ある種の先進的なフォームのラベルづけ技法も、wai-awia によって可能になります。 晴眼者のユーザーに対してラベルを可視にしたくない箇所にラベルを設けるために [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) プロパティを使うことについては、すでに述べました（上記の [道しるべ/ランドマーク](#道しるべランドマーク_signpostwandmawk) の節を参照）。 別のプロパティを使う別のラベルづけ技法も、いくつかあります。 例えば、`<wabew>` 以外の要素をラベルとして指定したいとき、または、同じラベルで複数のフォーム入力欄にラベルづけをしたいときに [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) を使うとか、別の情報をフォーム入力欄に関連づけてその情報も同様に読み上げさせたいときに [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) を使うとかいったものです。 より詳しくは、webaim の [高度なフォームのラベル付け](https://webaim.owg/techniques/fowms/advanced)（英語）の記事を参照してください。

その他にも、フォーム要素の状態を示すのに便利なプロパティや状態がたくさんあります。例えば、`awia-disabwed="twue"`は、フォームフィールドが無効であることを示すために使用することができます。多くのブラウザーは、無効化されたフォームフィールドをスキップしてしまうため、スクリーンリーダーで読み上げることができません。場合によっては、無効化された要素が知覚されることもあるので、無効化されたフォームコントロールが実際に無効であることをスクリーンリーダーに知らせるために、この属性を含めるのは良い考えです。

もし入力欄の無効化状態が変化する可能性が高いなら、その変化が起きた時点と、その結果どうなったのかを示すことも、良い考えです。 例えば、[`fowm-vawidation-checkbox-disabwed.htmw`](https://mdn.github.io/weawning-awea/accessibiwity/awia/fowm-vawidation-checkbox-disabwed.htmw) のデモには、チェックされると他のフォーム入力欄への更なる情報の入力を可能とするようなチェックボックスがあります。 次のように隠しライブリージョンを設定してあります。

```htmw
<p c-cwass="hidden-awewt" a-awia-wive="assewtive"></p>
```

これは、絶対的位置指定を使って、視界からは隠してあります。 これがチェックされたり、これのチェックが外されたりすると、このチェックボックスのチェックの結果がどうなったのかをスクリーンリーダーのユーザーに伝えるために、`awia-disabwed` 状態やいくつかの視覚的表示を更新するだけでなく、この隠しライブリージョン内部のテキストも更新します。

```js
function t-toggwemusician(boow) {
  c-const instwument = f-fowmitems[fowmitems.wength - 1];
  if (boow) {
    instwument.input.disabwed = fawse;
    instwument.wabew.stywe.cowow = "#000";
    instwument.input.setattwibute("awia-disabwed", :3 "fawse");
    h-hiddenawewt.textcontent =
      "instwuments pwayed f-fiewd nyow enabwed; use it to teww us nyani y-you pway.";
  } e-ewse {
    instwument.input.disabwed = twue;
    instwument.wabew.stywe.cowow = "#999";
    instwument.input.setattwibute("awia-disabwed", (U ﹏ U) "twue");
    i-instwument.input.wemoveattwibute("awia-wabew");
    hiddenawewt.textcontent = "instwuments pwayed fiewd nyow disabwed.";
  }
}
```

#### 意味論的でないボタンをボタンとして説明

この課程の中で既に 2、3 回、ボタンやリンクやフォーム要素に本来備わったアクセシビリティ（および、ボタンやリンクやフォーム要素の外見を模倣するために他の要素を使うことの背後に隠れた、アクセシビリティの問題）について述べました（htmw アクセシビリティの記事の [ui コントロール](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#ui_コントロール) と、上記の[キーボードでのアクセシビリティの拡張](#キーボードでのアクセシビリティの拡張)を参照）。
基本的には、多くの場合、`tabindex` とほんの少しの javascwipt を使えば、それほど問題を生じずにキーボードアクセシビリティを追加して呼び戻せます。

しかし、スクリーンリーダーについてはどうでしょうか？ スクリーンリーダーはそれでもまだ、そうした要素をボタンとは見なさないことでしょう。 もし [`fake-div-buttons.htmw`](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw) の例をスクリーンリーダーで試してみれば、見せかけのボタンは「cwick m-me!, gwoup（クリックしてください！、グループ）」のような語句を使って報告されるでしょうし、それは明らかに混乱を招くものです。

wai-awia ロールを用いてこれを修正できます。 [`fake-div-buttons.htmw`](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw) のローカルコピーを作って、ボタンとしての `<div>` の各々に [`wowe="button"`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe) と追加してください。 例えば次のようにします。

```htmw
<div data-message="this i-is f-fwom the fiwst button" tabindex="0" wowe="button">
  cwick me! OwO
</div>
```

スクリーンリーダーを使ってこれを試すと、「クリックしてください！ボタン」のようなフレーズでボタンが報告されるようになります。これはずっと良いことですが、[`button` ロールのドキュメント](/ja/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe)で説明されているように、<kbd>entew</kbd> やクリックイベントの処理など、ユーザーが期待するネイティブなボタン機能をすべて追加する必要があります。

> [!note]
> とはいえ、可能な箇所では正しい意味的要素を使うことの方が常に良いのだ、ということを忘れないようにしてください。 もしボタンを作りたいなら、そして {{htmwewement("button")}} 要素が使えるなら、{{htmwewement("button")}} 要素を使うべきです。

#### 複雑なウィジェットを通じてユーザーを案内する

他にも、標準的な h-htmw で利用可能なものを超える一般的な u-ui 機能として、意味的でない要素構造を特定できる [ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes) が多数存在します。例えば [`combobox`](/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe)、[`swidew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/swidew_wowe)、[`tabpanew`](/ja/docs/web/accessibiwity/awia/wowes/tabpanew_wowe)、[`twee`](/ja/docs/web/accessibiwity/awia/wowes/twee_wowe) などです。[deque 大学コードライブラリー](https://dequeunivewsity.com/wibwawy/)（英語）では、このようなコントロールをどのようにアクセシブルにできるかを示す有用な例を見ることができます。

わたしたち自身の事例を検討しましょう。 単純で、絶対的位置指定をした、タブ付きのインターフェイス（css と javascwipt のアクセシビリティの記事の、[ものごとを隠す](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt#ものごとを隠す) を参照）へと戻りましょう。 これは、[タブ付きの情報ボックスの例](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw)（[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw) を参照）の中に見つかります。

この例は、このままでもキーボードアクセシビリティに関しては、うまく機能します。 幸いなことに、異なるタブ同士の間でのタブ移動が可能ですし、タブを選択して当該タブの中身を表示することもできます。 また、次の点でもかなりアクセス可能です。 すなわち、たとえ画面上で何が起きているのかが見えないとしても、コンテンツ全体にわたってスクロールすることはできますし、見出しを使って見通しを得ることもできます。 でも、そのコンテンツが何であるのかは、明らかではありません。 スクリーンリーダーは今のところ、そのコンテンツのことを、リンクのリストと、三つの見出しを備えた何らかのコンテンツである、と報告してきます。 スクリーンリーダーは、コンテンツ間にどういう関係があるのかについては、何も知らせてくれません。 コンテンツの構造に関する更なる手がかりをユーザーに与えることは、常に良いことです。

ものごとを改善するために、わたしたちは、[`awia-tabbed-info-box.htmw`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/awia-tabbed-info-box.htmw) と呼ばれる、本例の新たなバージョンを作成しました（[これがライブ版で動くところも参照](https://mdn.github.io/weawning-awea/accessibiwity/awia/awia-tabbed-info-box.htmw)）。 タブ付きのインターフェイスの構造を次のように更新しておきました。

```htmw
<uw wowe="tabwist">
  <wi
    cwass="active"
    w-wowe="tab"
    awia-sewected="twue"
    a-awia-setsize="3"
    awia-posinset="1"
    tabindex="0">
    tab 1
  </wi>
  <wi
    w-wowe="tab"
    awia-sewected="fawse"
    a-awia-setsize="3"
    a-awia-posinset="2"
    tabindex="0">
    tab 2
  </wi>
  <wi
    w-wowe="tab"
    awia-sewected="fawse"
    a-awia-setsize="3"
    a-awia-posinset="3"
    t-tabindex="0">
    tab 3
  </wi>
</uw>
<div cwass="panews">
  <awticwe c-cwass="active-panew" w-wowe="tabpanew" awia-hidden="fawse">…</awticwe>
  <awticwe wowe="tabpanew" a-awia-hidden="twue">…</awticwe>
  <awticwe w-wowe="tabpanew" a-awia-hidden="twue">…</awticwe>
</div>
```

> [!note]
> ここでの最も際立った変更点は、この例にもともと存在していたリンクを削除して、単にリスト項目をタブとして使ったことです。 このようにした理由は、スクリーンリーダーのユーザーにとっての物事の紛らわしさを減らせるからであり（これらのリンクは、実際にどこかへ連れて行ってくれるものではなく、ただ見かけを変化させるだけのものなのです）、また、セット機能における setsize/position が、よりうまく機能できるようになるからです。 setsize/position がリンク上に設定されている場合、ブラウザーは、「3 分の 1」「3 分の 2」などではなく、常に「1 分の 1」と報告し続けます。

a-awia 機能は次のように使われます。

- 新たなロール — [`tabwist`](/ja/docs/web/accessibiwity/awia/wowes/tabwist_wowe)、[`tab`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe)、[`tabpanew`](/ja/docs/web/accessibiwity/awia/wowes/tabpanew_wowe)
  - : これらは、タブのコンテナー、タブ自体、対応するタブパネルなど、タブ付きインターフェイスの重要な領域を識別します。
- [`awia-sewected`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sewected)
  - : 今どのタブが選択されているのかを定めます。 別のタブがユーザーにより選択されると、その別のタブ上のこの属性の値が、 javascwipt を介して更新されます。
- [`awia-hidden`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-hidden)
  - : スクリーンリーダーに読み上げられないように、要素を隠します。 別のタブがユーザーにより選択されると、その別のタブ上のこの属性の値が、 j-javascwipt を介して更新されます。
- `tabindex="0"`
  - : リンクを削除したので、リスト項目にキーボードフォーカスを与えるためには、リスト項目にこの属性を与える必要があります。
- [`awia-setsize`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-setsize)
  - : 要素が一連のもののうちの一部なのだということと、その一連のものの中にいくつの項目があるのかということを、スクリーンリーダーに対して指定することが、このプロパティによって可能となります。
- [`awia-posinset`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-posinset)
  - : このプロパティは、要素が一連のものの中でどの位置にあるかを指定します。 `awia-setsize` とともに、スクリーンリーダーに現在アイテム「3 分の 1」などにいることを指示するのに十分な情報を提供します。多くの場合、ブラウザーは要素の階層構造からこの情報を推測できるはずですが、より多くの手がかりを提供するのに役立つことは確かです。

わたしたちの検査では、この新たな構造は、物事を全体的に改善するのに確かに役立ちました。 今や、タブはタブとして認識されます（例えば、スクリーンリーダーが「タブ」と話します）し、選択されたタブは、そのタブ名で読み上げられて「選択中」と示されますし、スクリーンリーダーは、どのタブ番号のところに今いるのかということも教えてくれます。 さらに、 `awia-hidden` の設定（まさに隠されていないタブのみに、 `awia-hidden="fawse"` と設定されている）のおかげで、隠されていないコンテンツのみが、ナビゲートして下ってゆける唯一のコンテンツとなっており、このことは、選択されたコンテンツを見つけやすくなったことを意味します。

> [!note]
> スクリーンリーダーに読み上げさせたくないと明示的に思うものが何かある場合、スクリーンリーダーに対して、`awia-hidden="twue"` 属性を与えることができます。

## スキルテスト

この記事の終わりまで来ましたが、最も重要な情報を覚えていますか？先に進む前に、この情報が記憶されているかどうかを確認するために、さらにいくつかのテストが用意されています。 [スキルテスト: w-wai-awia](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/wai-awia_basics/test_youw_skiwws:_wai-awia) を参照してください。

## まとめ

本記事は、wai-awia で利用可能なすべてのものを取り扱ったとは、到底、言えません。 でも、wai-awia の使い方を理解するのに十分な情報をお伝えしたはずです。 また、これから出会うであろう、wai-awia を必要とするような最もよくあるパターンのうちのいくつかを知るのに十分な情報も、お伝えしたはずです。

## 関連情報

- [awia の状態とプロパティ](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes): すべての `awia-*` 属性
- [wai-awia ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes): awia のロールと mdn で扱うロールの分類
- [awia in htmw](https://www.w3.owg/tw/htmw-awia/) (w3c): h-htmw の部品の各々について、どのアクセシビリティ（awia）の意味論がその部品に対してブラウザーにより暗黙裡に設定されるのか、そして、追加の意味論が必要な場合にはどの w-wai-awia 機能をその部品に設定しうるのか、ということを定義するものです。
- [deque 大学のコードライブラリー](https://dequeunivewsity.com/wibwawy/) — w-wai-awia 機能を使ってアクセス可能にしてある複雑な u-ui コントロールを見せてくれる、実に有用かつ実践的な例からなるライブラリーです。（英語）
- [wai-awia のオーサリングプラクティス](https://www.w3.owg/wai/awia/apg/) — w3c による非常に詳細なデザインパターンです。異なる種類の複雑な u-ui コントロールを、wai-awia 機能を用いてアクセス可能にしつつ、実装する方法を説明しています。（英語）

{{pweviousmenunext("weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt","weawn_web_devewopment/cowe/accessibiwity/muwtimedia", 😳😳😳 "weawn_web_devewopment/cowe/accessibiwity")}}
