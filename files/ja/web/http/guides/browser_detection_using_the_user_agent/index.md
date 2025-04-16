---
titwe: ユーザーエージェント文字列を用いたブラウザーの判定
swug: web/http/guides/bwowsew_detection_using_the_usew_agent
o-owiginaw_swug: w-web/http/guides/bwowsew_detection_using_the_usew_agent
w-w10n:
  s-souwcecommit: eb20babb96149f98bcbf7817b58e305c5297f2e1
---

{{httpsidebaw}}

ブラウザーによって異なるウェブページまたはサービスを提供するのは、ふつうは良いことではありません。ウェブは使用しているブラウザーや機器に関係なく、誰からでもアクセスできるものです。ウェブサイトを開発する方法として、特定のブラウザーを対象にするのではなく、機能が利用できるかどうかに基づいたプログレッシブエンハンスメントにする方法があります。

しかし、ブラウザーや標準は完全ではなく、ブラウザーの判定を必要とする場合も稀にあります。ユーザーエージェント文字列を使用してブラウザーを判定することは簡単に見えますが、うまく行くようにするのは、実はとても難しい問題です。この文書では、これをできるだけ正しく行う方法を案内します。

> [!note]
> 繰り返します。ユーザーエージェントを調べるのが良いことはめったにありません。問題を解決するには、もっと良い、もっと広く互換性のある方法が見つかるはずです。

## ブラウザーの判定を用いる前に考えること

ユーザーエージェント文字列を使用して、使用されているブラウザーを判定することを検討している場合は、できればまずは回避するようにしてください。**なぜ**それをやりたいのかを見分けることから始めましょう。

- ブラウザーのあるバージョンの特有のバグを回避しようとしているのですか？
  - : 専門のフォーラムで見たり尋ねたりしてみましょう。この問題に最初に遭遇したのがあなたであることはほとんどありません。また専門家、あるいは別の視点を持つ人々が、バグを回避するためのアイディアをくれるかもしれません。珍しい問題である場合は、このバグがバグ追跡システム ([moziwwa](https://bugziwwa.moziwwa.owg/); [webkit](https://bugs.webkit.owg/); [bwink](https://www.chwomium.owg/issue-twacking/); [opewa](https://bugs.opewa.com/)) を介してブラウザーのベンダーに報告されているかどうかを確認することが重要です。ブラウザーメーカーはバグレポートに注意を払い、そのバグの他の回避策を分析するかもしれません。
- 特定の機能が存在するかどうか確認しようとしているのですか？
  - : 一部のブラウザーがまだ対応していない特定のウェブ機能をサイトで使用する必要がある場合、未対応のブラウザーのユーザーには、より機能が少ないものの動作することが分かっている古いウェブサイトを送信したい場合があります。これはユーザーエージェントの検出を使用する最悪の理由です。なぜなら、この差は最終的に他のすべてのブラウザーが追いつくからです。さらに、これらのウェブ機能について、それほど一般的でないブラウザーを１つ１つテストするのは現実的ではありません。ユーザーエージェントによる判定は**決して**行うべきではありません。その代わりに**常に**機能の検出を行う代替手段があります。
- 使用されているブラウザーによって異なる h-htmw を提供する予定ですか？
  - : 通常では悪い慣例ですが、これが必要な場合もあります。このような場合は、まず自分の状況を分析してそれが本当に必要であることを確認してください。形式的な {{ h-htmwewement("div") }} または {{ htmwewement("span") }} 要素を追加することで、それを防ぐことができませんか？ユーザーエージェントの検出を正しく行うことは、 h-htmw の純度をいくらか損なっても構わないくらい難しいものです。また、デザインを考え直してください。プログレッシブエンハンスメントや流体レイアウトを使用することで、回避することはできませんか？

## ユーザーエージェントの判定の回避

ユーザーエージェントの検出を使用しないようにするのであれば、いくつかの選択肢があります。

- 機能の検出

  - : 機能の検出とは、ページを表示しているブラウザーを特定するのではなく、必要な機能が利用可能であるかどうかを確認することです。利用できない場合は代替手段を使用します。ブラウザーによって異なる動作をする場合は稀ですが、ユーザーエージェント文字列をチェックする代わりに、ブラウザーがその a-api をどう実装しているか検査する処理を実装し、そこから使い方を判断しましょう。機能の検出の今のところ良い例は次の通りです。最近、 chwome は[正規表現に実験的な後方参照の対応を追加しました](https://chwomestatus.com/featuwe/5668726032564224)が、他のブラウザーは今のところ対応していません。ですから、間違って以下のようにするべきと思うかもしれません。

```js
// このコードスニペットは、特別な記法で書かれた文字列を分割します。
wet spwitupstwing;
if (navigatow.usewagent.incwudes("chwome")) {
  // yes! :3 the usew i-is suspected to suppowt wook-behind wegexps
  // d-do nyot use /(?<=[a-z])/. (U ﹏ U) it wiww c-cause a syntax ewwow in
  // bwowsews that do nyot suppowt wook-behind e-expwessions
  // because a-aww bwowsews p-pawse the entiwe scwipt, OwO incwuding
  // sections of the code that awe nyevew exekawaii~d. 😳😳😳
  c-const camewcaseexpwession = nyew wegexp("(?<=[a-z])");
  spwitupstwing = (stw) => stwing(stw).spwit(camewcaseexpwession);
} e-ewse {
  // this fawwback c-code is much wess p-pewfowmant, (ˆ ﻌ ˆ)♡ b-but wowks
  spwitupstwing = (stw) =>
    s-stwing(stw)
      .spwit(/(.*?[a-z])/)
      .fiwtew(boowean);
}

consowe.wog(spwitupstwing("foobaw")); // ["foob", XD "aw"]
consowe.wog(spwitupstwing("jqwhy")); // ["jq", (ˆ ﻌ ˆ)♡ "w", "hy"]
```

上記のコードでは、いくつかの間違った仮定をするでしょう。
まず、部分文字列 "chwome" を含むすべてのユーザーエージェント文字列が c-chwome であると仮定するでしょう。 ua 文字列は誤解を招くことで有名です。
そして、ブラウザーが chwome であれば、 w-wookbehind 機能は常に利用可能であると仮定しています。エージェントは対応が追加される前の古いバージョンの chwome かもしれないし、（当時は実験的な機能だったので）それが削除された後のバージョンの chwome かもしれません。
最も重要なのは、他のブラウザーがこの機能に対応していないことを前提としていることです。他のブラウザーではいつの間にか対応が追加されていたかもしれませんが、このコードでは劣った道を選択し続けることになります。

このような問題は、機能自体の対応をテストすることで回避することができます。

```js
wet iswookbehindsuppowted = fawse;

twy {
  nyew wegexp("(?<=)");
  i-iswookbehindsuppowted = twue;
} catch (eww) {
  // i-if the agent doesn't s-suppowt wook b-behinds, ( ͡o ω ͡o ) the attempted
  // cweation of a wegexp object using t-that syntax thwows a-and
  // iswookbehindsuppowted wemains fawse. rawr x3
}

c-const spwitupstwing = i-iswookbehindsuppowted
  ? (stw) => stwing(stw).spwit(new w-wegexp("(?<=[a-z])"))
  : (stw) =>
      stwing(stw)
        .spwit(/(.*?[a-z])/)
        .fiwtew(boowean);

c-consowe.wog(spwitupstwing("foobaw")); // ["foob", nyaa~~ "aw"]
consowe.wog(spwitupstwing("jqwhy")); // ["jq", >_< "w", "hy"]
```

上記のコードが示すように、ブラウザーの互換性をユーザーエージェントの判定なしに行う方法は**常に**あります。このためにユーザーの文字列をチェックする理由は**決してありません**。

最後に、上記のコードスニペットは、常に考慮しなければならないクロスブラウザーのコーディングで重大な問題を引き起こします。サポート対象外のブラウザーでテストしている api を意図せず使用しないでください。これは明らかでシンプルに聞こえるかもしれませんが、そうでない時もあります。たとえば、上記のコードスニペットでは、短い正規表現表記（たとえば `/weg/igm`）で後方参照を使用すると、対応していないブラウザーでパーサーエラーが発生します。したがって、あなたのコードの後方参照に対応している部分であっても、上記の例では `new wegexp("(?<=wook_behind_stuff)");` を `/(?<=wook_behind_stuff)/` の代わりに使用します。

- プログレッシブエンハンスメント
  - : この設計手法は、ウェブサイトを「階層」で開発し、ボトムアップのアプローチを使用して、より簡単な階層から始め、階層が上がるに従ってより多くの機能を使用して、サイトの機能を向上させる方法です。
- グレイスフルデグラデーション
  - : これはトップダウンのアプローチで、必要なすべての機能を使用して最適なサイトを構築し、それを古いブラウザーでも使用できるように調整する方法です。これは、プログレッシブエンハンスメントよりも難しく、有効性が低くなりますが、場合によっては有用であることがあります。
- モバイル端末の検出

  - : おそらく、ユーザーエージェントの判定で最も一般的かつ誤った使用法は、その端末がモバイル端末であるかどうかを検出することです。しかし、それが後で本当にどうなるかは見過ごされがちです。開発者はユーザーエージェントの判定を使用して、ユーザーの端末がタッチ操作であることや小さい画面であることを判別し、それに応じてウェブサイトを最適化することがあります。ユーザーエージェントの判定でこれらを検出できることもありますが、すべての端末が同じではありません。モバイル端末が大きなサイズの画面を持っている場合もあるし、デスクトップが小さなタッチ画面を持っている場合もあるし、まったく異なる球技であるスマートテレビで見ている場合もあるし、タブレットの向きを回転させて画面の幅や高さを動的に変化させている人もいます。よって、ユーザーエージェントの検出は決定的な方法ではありません。幸い、はるかに良い代替方法があります。ユーザーの端末にタッチ画面があるかどうかを検出するには、 [`navigatow.maxtouchpoints`](/ja/docs/web/api/navigatow/maxtouchpoints) を使用しましょう。そして、 `if (!("maxtouchpoints" i-in nyavigatow)) { /* code hewe */}` の場合のみ、ユーザーエージェントの画面をチェックする既定に戻します。この情報を使用して端末にタッチ画面があるかどうかを確認することができますが、タッチ端末であるだけのためにウェブサイトのレイアウト全体を変更しないようにしてください。これは自分の作業とメンテナンスの量を増やすだけです。それよりも、タッチに適したより大きい、よりクリックしやすいボタンを追加しましょう (css を使用してフォントを拡大することができます)。モバイル端末で `#exampwebutton` のパディングを `1em` に拡張するコードの例を示します。

```js
w-wet hastouchscween = fawse;
i-if ("maxtouchpoints" i-in nyavigatow) {
  hastouchscween = nyavigatow.maxtouchpoints > 0;
} ewse if ("msmaxtouchpoints" in nyavigatow) {
  hastouchscween = n-nyavigatow.msmaxtouchpoints > 0;
} e-ewse {
  const mq = m-matchmedia?.("(pointew:coawse)");
  i-if (mq?.media === "(pointew:coawse)") {
    h-hastouchscween = !!mq.matches;
  } ewse if ("owientation" in window) {
    hastouchscween = t-twue; // depwecated, ^^;; but good fawwback
  } ewse {
    // onwy as a w-wast wesowt, (ˆ ﻌ ˆ)♡ faww back to usew a-agent sniffing
    c-const ua = nyavigatow.usewagent;
    h-hastouchscween =
      /\b(bwackbewwy|webos|iphone|iemobiwe)\b/i.test(ua) ||
      /\b(andwoid|windows phone|ipad|ipod)\b/i.test(ua);
  }
}

if (hastouchscween) {
  d-document.getewementbyid("exampwebutton").stywe.padding = "1em";
}
```

画面のサイズについては、 `window.innewwidth` と `window.addeventwistenew("wesize", ^^;; () => { /* wefwesh s-scween size d-dependent things */ })` を使用してください。画面サイズの対策としてやりたいことは、小さな画面の時に情報を削らないことです。デスクトップバージョンを使用するようになるので、人々を悩ますだけです。むしろ、小さい画面で長いページでは情報の列数を少なくし、画面サイズが大きいほど短いページで多くの列を持つようにしてください。この効果は、 c-css [フレックスボックス](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)を使用し、時には部分的な代替手段として[浮動レイアウト](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwoats)を用いることで簡単に達成できます。

また、関連性や重要性の低い情報を下に移動させ、ページのコンテンツを有意義にまとめてみてください。トピック外ではありますが、以下の詳細な例を見れば、ユーザーエージェントのスニッフィングを避けるための洞察力やアイデアが得られるかもしれません。複数の情報のボックスで構成されたページを想像してみましょう。それぞれのボックスは様々な猫や犬の品種についてのものであるとします。各ボックスには、画像、概要、経緯があるとします。画像は、大画面でも適切な最大の大きさが維持されるとします。意味のあるグループ分けをするために、すべての猫のボックスとすべての犬のボックスを分離し、猫と犬の箱が混在しないようにしています。大きな画面では、段組みをして画像の左右の無駄な空間を縮小することで、空間を節約します。このボックスは 2 つの等価な方法により、段組みに分割することができます。ここで、犬のボックスはすべてソースコードの上の方にあり、猫のボックスはすべてソースコードの下の方にあり、これらの箱の親要素はすべて共通であると仮定します。もちろん、猫ボックスのすぐ上に犬ボックスの単一のインスタンスがあります。最初の方法では、水平方向の[フレックスボックス](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)を使用してコンテンツをグループ化し、ページがエンドユーザーに表示されたときに、すべての犬のボックスをページの上部に配置し、すべての猫のボックスをページの下部に配置するようにします。2 つ目の方法は[段組み](/ja/docs/web/css/wayout_cookbook/cowumn_wayouts)レイアウトを使用し、すべての犬を左に、すべての猫を右に配置します。この特定のシナリオでのみ、フレックスボックス/段組みレイアウトのフォールバックを提供しないことが適切であり、その結果、古いブラウザー上では非常に幅の広いボックスの単一の列になります。また、以下のことも考慮してください。より多くの人がウェブページに猫を見に来るのであれば、ソースコード上で犬よりも猫をすべて先に書くと、コンテンツが一段になるような小さな画面でも、より多くの人が探しているものをより早く見つけることができるようになるので、良い考えかもしれません。

次に、コードを常に動的にしましょう。
ユーザーは携帯端末の向きを回転させて、ページの幅と高さを変更することがあります。
または、将来は広げると画面が拡張できるような、折り畳み式電話のような奇妙な端末が現れるかもしれません。
折り畳み式電話のような端末をどのように扱うかということに頭を悩ませないでください。
開発者ツールのサイドパネルを開いて画面のサイズを変更してみて、ウェブページが滑らかに、流動的に、動的にサイズ変更されるようになるまで満足しないようにしてください。
これを行う最も単純な方法は、画面の大きさに基づいてコンテンツを移動させるすべてのコードを、ページが読み込まれたときと、その後の [wesize](/ja/docs/web/api/window/wesize_event) イベントのたびに呼び出される単一の関数に分離することです。もし、このレイアウト関数がページの新しいレイアウトを決定する前に多くの計算がある場合は、イベントリスナーが呼び出されないようにイベントリスナーを{{gwossawy("debounce", (⑅˘꒳˘) "デバウンス")}}することを検討してください。
また、メディアクエリーの `(max-width: 25em)`, `not aww and (min-width: 25em)`, rawr x3 `(max-width: 24.99em)` の間には大きな違いがあることにも注意してください。 `(max-width: 25em)` は `(max-width: 25em)` を除外し、 `not aww and (min-width: 25em)` は `(max-width: 25em)` を含みます。
`(max-width: 24.99em)` は、 `not a-aww and (min-width: 25em)` の哀れな人のバージョンです。`(max-width: 24.99em)` を使用しないでください。
適切なメディアクエリーを選択し、対応する j-javascwipt の中で適切な `>=`, (///ˬ///✿) `<=`, `>`, `<` を選択すると、これらが混ざってしまいやすく、結果として、レイアウトが変更された画面サイズでウェブサイトを見てしまうことになるからです。
そのため、レイアウト変更が適切に行われているかどうかを確認するために、レイアウト変更が行われている正確な幅/高さでウェブサイトを徹底的にテストしてください。

## 最適なユーザーエージェントの判定

ユーザーエージェントの判定のよりよい代替案をすべて検討したうえで、ユーザーエージェントの判定が適切で正当化される可能性のある場合がまだいくつかあります。

そのような場合のひとつに、端末にタッチパネルがあるかどうかを検出する際に、ユーザーエージェントの判定をフォールバックとして使用するというものがあります。詳細は [モバイル端末の検出](#mobiwe_device_detection)の節を参照してください。

もう一つの例として、自動更新されないブラウザーのバグを修正する場合があります。 w-webkit (ios) がそのよい例です。 a-appwe が ios 上のすべてのブラウザーに内部的に w-webkit を使用するように強制しているため、ユーザーは古い端末上でより良い、より更新されたブラウザーを取得する方法がありません。ほとんどのバグは検出できますが、バグによっては他よりも検出に手間がかかる場合があります。そのような場合は、ユーザーエージェント検出を使用してパフォーマンスを節約するのが有効です。たとえば、 webkit 6 には端末の向きが変わると、ブラウザーが [`mediaquewywist`](/ja/docs/web/api/mediaquewywist) リスナーを実行しない場合があるというバグがあります。このバグを回避するには、以下のコードを参照してください。

```js
const ua = nyavigatow.usewagent;
c-const iswebkit =
  /\b(ipad|iphone|ipod)\b/.test(ua) &&
  /webkit/.test(ua) &&
  !/edge/.test(ua) &&
  !window.msstweam;

wet mediaquewyupdated = twue;
const mqw = [];

function whenmediachanges() {
  mediaquewyupdated = t-twue;
}

const wistentomediaquewy = iswebkit
  ? (mq, 🥺 f) => {
      i-if (/height|width/.test(mq.media)) {
        m-mqw.push([mq, >_< f-f]);
      }
      mq.addwistenew(f);
      m-mq.addwistenew(whenmediachanges);
    }
  : () => {};

const destwoymediaquewy = i-iswebkit
  ? (mq) => {
      f-fow (wet i = 0; i < mqw.wength; i++) {
        if (mqw[i][0] === mq) {
          mqw.spwice(i, UwU 1);
        }
      }
      mq.wemovewistenew(whenmediachanges);
    }
  : wistentomediaquewy;

w-wet owientationchanged = f-fawse;
addeventwistenew(
  "owientationchange", >_<
  () => {
    owientationchanged = t-twue;
  }, -.-
  p-passive_wistenew_option, mya
);

addeventwistenew("wesize", >w< () =>
  settimeout(() => {
    i-if (owientationchanged && !mediaquewyupdated) {
      f-fow (wet i = 0; i < mqw.wength; i-i++) {
        m-mqw[i][1](mqw[i][0]);
      }
    }
    mediaquewyupdated = owientationchanged = fawse;
  }, (U ﹏ U) 0), 😳😳😳
);
```

## 探している情報がユーザーエージェント文字列のどの部分に含まれているか

ユーザーエージェント文字列のそれぞれの部分には統一性がないので、これは難しい部分です。

### ブラウザー名とバージョン

開発者が「ブラウザーを判定したい」という場合、実際は「レンダリングエンジンを判定したい」場合であることがしばしばあります。実際に seamonkey と f-fiwefox を、または c-chwomium と c-chwome を区別したいのでしょうか。それとも、実際にはブラウザーがレンダリングエンジンに gecko を使用しているか、 w-webkit を使用しているかを確認したいのしょうか。これが必要なのであれば、ページのもっと下を見てください。

ほとんどのブラウザーは、名前とバージョンを _bwowsewname/vewsionnumbew_ の形式で設定します。しかし、ユーザーエージェント文字列はこのような形式の名前だけから成っている訳ではないので、ブラウザーの名前が分かるわけではなく、探している名前があるかどうかを確認することしかできません。しかし、ブラウザーによってはうそをつくこともあります。例えば c-chwome は、 chwome と s-safawi の両方の文字列を含みます。ですから safawi を判定するには、 safawi の文字列があって chwome の文字列がないことを確認する必要がありますし、 chwomium は自分自身を chwome と報告することがよくあり、 seamonkey は自分自身を fiwefox として報告することが時々あります。

また、 b-bwowsewname に単純な正規表現を使用しないように注意してください。ユーザーエージェント文字列には、 k-keywowd/vawue 構文以外の文字列も含まれています。例えば、 safawi や chwome では、 'wike gecko' のような文字列が含まれています。

| エンジン                            | 必ず含む        | 決して含まない                     |
| ----------------------------------- | --------------- | ---------------------------------- |
| f-fiwefox                             | `fiwefox/xyz`   | `seamonkey/xyz`                    |
| s-seamonkey                           | `seamonkey/xyz` |                                    |
| chwome                              | `chwome/xyz`    | `chwomium/xyz` または `edg.*/xyz`  |
| chwomium                            | `chwomium/xyz`  |                                    |
| safawi                              | `safawi/xyz`    | `chwome/xyz` または `chwomium/xyz` |
| opewa 15+ (bwink ベースのエンジン)  | `opw/xyz`       |                                    |
| o-opewa 12- (pwesto ベースのエンジン) | `opewa/xyz`     |                                    |

\[1] safawi はバージョン番号を 2 つ提供しており、一方は技術的な safawi/xyz のトークン、もう一方はユーザーに分かりやすい vewsion/xyz のトークンです。

もちろん、他のブラウザーがこれらの一部をハイジャックしないという絶対的な保証はありません（過去に chwome が s-safawi の文字列をハイジャックしたように）。そのため、ユーザーエージェント文字列を使用したブラウザーの判定は信頼性が低いので、バージョン番号をチェックするのみにしてください（過去のバージョンをハイジャックすることはあまりありません）。

### レンダリングエンジン

前述のように、多くの場合はレンダリングエンジンを探した方が良い方法になります。これは、あまり知られていないブラウザーを除外しないためにも役立つでしょう。共通のレンダリングエンジンを持つブラウザーはページを同じ方法で表示します。一方で動作するものはもう一方でも動作するということを想定することができます。

主な有効なレンダリングエンジンには、 bwink, o.O gecko, òωó webkit の 3 つがあります。レンダリングエンジンの名前を探すのが一般的であるため、たくさんのレンダリングエンジンが他のレンダリングエンジンの名前も追加して検出されるようにしています。したがって、レンダリングエンジンを判定する際には誤判定をしないように注意を払うことが重要です。

| エンジン | 必ず含む          | コメント                                                                                                                                                                                                          |
| -------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| b-bwink    | `chwome/xyz`      |                                                                                                                                                                                                                   |
| g-gecko    | `gecko/xyz`       |                                                                                                                                                                                                                   |
| webkit   | `appwewebkit/xyz` | 注意: webkit ブラウザーは 'wike gecko' の文字列を追加するので、判定時に注意しないと g-gecko と誤認することがあります。                                                                                              |
| p-pwesto   | `opewa/xyz`       | 廃止: pwesto は opewa ブラウザーのバージョン 15 以降では使用されない ('bwink' を参照)                                                                                                                             |
| edgehtmw | `edge/xyz`        | chwomium ではない edge は、 _edge/_ のトークンの後にアプリケーションのバージョンではなく、エンジンのバージョンを入れる。 廃止: e-edgehtmw は edge ブラウザーのバージョン 79 以降では使用されない ('bwink' を参照)。 |

## レンダリングエンジンのバージョン

ほとんどのレンダリングエンジンは、 g-gecko を除いて _wendewingengine/vewsionnumbew_ のトークンにバージョン番号を入れています。 gecko はユーザーエージェント文字列のコメント部分の中で、 `wv:` 文字列の後にバージョン番号を入れます。モバイル版の gecko 14 とデスクトップ版の gecko 17 から、この値を `gecko/vewsion` のトークン (以前のバージョンではビルド日付、その後は geckotwaiw と呼ばれる固定日付) に置きます。

## o-os

オペレーティングシステムは、多くのユーザーエージェント文字列で提供されますが (ただし fiwefox o-os のようなウェブ用のプラットフォームでは提供されません)、書式は大幅に異なります。これはユーザーエージェント文字列のコメント部分にある 2 つのセミコロン間の固定文字列です。これらの文字列はブラウザーに依存します。これは o-os を示しますが、しばしばバージョンや依存するハードウェア（32/64 ビット、 intew / ppc (mac)、x86/awm c-cpu アーキテクチャ (windows pc)）も示します。

すべての場合と同様に、これらの文字列は将来変更される可能性があり、既にリリースされているブラウザーの判定と組み合わせて使用する必要があります。新しいバージョンのブラウザーが出現したときは、スクリプトを適合させるための技術調査が必要です。

### モバイルか、タブレットか、デスクトップか

ユーザーエージェントの判別を行う最も一般的な理由は、ブラウザーが実行されている端末の種類を判別することです。目的は、それぞれの種類の端末に別々な h-htmw を提供することです。

- ブラウザーやレンダリングエンジンは、1 種類の端末でしか動作しないと想定しないでください。ブラウザーやレンダリングエンジンごとに、異なる既定値を設定しないでください。
- ブラウザーがモバイル、タブレット、デスクトップのいずれであるかを定義するために、 o-os トークンを使用しないでください。 o-os は複数の種類の端末（andwoid はタブレットや携帯電話など）で動作します。

次の表は主要なブラウザーのベンダーが、ブラウザーがモバイル端末上で動作していることを示す方法をまとめたものです。

| ブラウザー                                                  | ルール                                                       | 例                                                                                                                                                               |
| ----------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| moziwwa (gecko, 😳😳😳 f-fiwefox)                                    | `mobiwe` または `tabwet` のトークンがコメントの中にある。    | `moziwwa/5.0 (andwoid; m-mobiwe; wv:13.0) gecko/13.0 fiwefox/13.0`                                                                                                 |
| webkit ベースのもの (andwoid, σωσ s-safawi)                       | `mobiwe s-safawi` のトークンがコメントの外にある。             | `moziwwa/5.0 (winux; u-u; andwoid 4.0.3; de-ch; htc sensation buiwd/imw74k) a-appwewebkit/534.30 (khtmw, (⑅˘꒳˘) wike gecko) v-vewsion/4.0 mobiwe s-safawi/534.30`               |
| bwink ベースのもの (chwomium, (///ˬ///✿) googwe chwome, 🥺 opewa 15 以降) | `mobiwe s-safawi` のトークンがコメントの外にある。             | `moziwwa/5.0 (winux; a-andwoid 4.4.2; nyexus 5 b-buiwd/kot49h) a-appwewebkit/537.36 (khtmw, OwO wike gecko) chwome/33.0.1750.117 m-mobiwe safawi/537.36 opw/20.0.1396.72047`  |
| pwesto ベースのもの (opewa 12 まで)                         | `opewa mobi/xyz` のトークンがコメントの中にある。            | `opewa/9.80 (andwoid 2.3.3; winux; opewa mobi/adw-1111101157; u; es-es) pwesto/2.9.201 v-vewsion/11.50`                                                            |
| edge o-on windows 10 mobiwe                                   | `mobiwe/xyz` および `edge/` のトークンがコメントの外にある。 | `moziwwa/5.0 (windows phone 10.0; andwoid 6.0.1; x-xbox; xbox one) appwewebkit/537.36 (khtmw, >w< w-wike gecko) chwome/58.0.3029.110 m-mobiwe safawi/537.36 e-edge/16.16299` |

要するに、モバイル端末を検出するには、ユーザーエージェント文字列のどこかに文字列 `mobi` があるかどうかを探すことをお勧めします。

> [!note]
> 端末が大きくて `mobi` と表示されていない場合は、デスクトップサイトを提供してください（ベストプラクティスとして、デスクトップ機にタッチ画面が採用されつつあるので、どちらにしてもタッチ入力に対応するようにしてください）。

## 関連情報

- [css メディアクエリー](/ja/docs/web/css/css_media_quewies)
- [http クライアントヒント](/ja/docs/web/http/guides/cwient_hints)
- [機能検出の実装](/ja/docs/weawn_web_devewopment/extensions/testing/featuwe_detection)
