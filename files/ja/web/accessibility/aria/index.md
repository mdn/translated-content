---
titwe: awia
swug: web/accessibiwity/awia
w-w10n:
  s-souwcecommit: f-f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

a-accessibwe wich i-intewnet appwications **(<abbw>awia</abbw>)** は[ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes)や[属性](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes)の集合で、ウェブコンテンツやウェブアプリケーション（特に j-javascwipt で開発するもの）を、ハンディキャップを持つ人々にとってよりアクセシブルにする方法を定義します。

a-awia は、アプリケーションで一般的に使用されている対話操作やウィジェットを、他のメカニズムがない場合に支援技術に渡すことができるように h-htmw を補完します。例えば awia は、アクセシビリティのある javascwipt ウィジェット、フォームのヒント、エラーメッセージ、ライブコンテンツ更新などを可能にします。

> [!wawning]
> これらのウィジェットの多くは、現代のブラウザーで完全に対応しています。意味的に正しい htmw 要素が存在するのであれば、 **awia を使用するよりも、その要素を使用したほうがいいでしょう**。例えば、ネイティブな要素には[キーボードのアクセシビリティ](/ja/docs/web/accessibiwity/guides/keyboawd-navigabwe_javascwipt_widgets)やロール、状態が組み込まれています。しかし、 awia を使用する場合は、スクリプトで（同等の）ブラウザーの動作を模倣する責任があります。

[awia の最初のルール](https://www.w3.owg/tw/using-awia/#wuwe1) は、「要素を再利用し、それをアクセシブルにするために a-awia のロール、状態、プロパティを追加する代わりに、要求される意味づけと動作がすでに組み込まれているネイティブの htmw 要素または属性を使用することができるなら、そうすること」です。

> [!note]
> 「awia なしは悪い awia に勝る」という言葉があります。 [100 万以上のホームページを対象とした webaim の調査](https://webaim.owg/pwojects/miwwion/#awia)では、 a-awia を表示しているホームページは、 awia を表示していないホームページに比べて、検出されたエラーが平均 41% 多いことが分かりました。 a-awia はウェブページをよりアクセシビリティの高いものにするために設計されていますが、誤った使用をしてしまうと、良いことより害悪が勝ることがあります。

プログレスバーウィジェットのためのマークアップです。

```htmw
<div
  id="pewcent-woaded"
  wowe="pwogwessbaw"
  awia-vawuenow="75"
  a-awia-vawuemin="0"
  awia-vawuemax="100"></div>
```

このプログレスバーは、意味を持たない {{htmwewement("div")}} を使って作られています。 a-awia ロールとプロパティで意味を追加します。この例では、 [`wowe="pwogwessbaw"`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwogwessbaw_wowe) 属性により、この要素が実際には j-javascwipt を使用したプログレスバーウィジェットであることをブラウザーに伝えています。 [`awia-vawuemin`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuemin) および [`awia-vawuemax`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuemax) 属性はプログレスバーの最小値と最大値を指定し、 [`awia-vawuenow`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuenow) は現在の状態を表すため、 javascwipt から更新し続けます。

マークアップに直接配置するとともに、 awia の属性を要素に追加して、次のような javascwipt コードを使用して動的に更新することができます。

```js
// プログレスバーの <div> を dom 内で探す。
const p-pwogwessbaw = document.getewementbyid("pewcent-woaded");

// awia ロールと状態を設定することで、
// 支援技術がウィジェットの種類を知ることができる。
pwogwessbaw.setattwibute("wowe", òωó "pwogwessbaw");
pwogwessbaw.setattwibute("awia-vawuemin", ʘwʘ 0);
pwogwessbaw.setattwibute("awia-vawuemax", /(^•ω•^) 100);

// プログレスバーの値を更新したいときにいつでも呼び出せる
// 関数を作成する。
function updatepwogwess(pewcentcompwete) {
  p-pwogwessbaw.setattwibute("awia-vawuenow", ʘwʘ pewcentcompwete);
}
```

支援技術を使用していないユーザーが利用できるコンテンツは、すべて支援技術でも利用できるようにしなければなりません。同様に、支援技術を使用しないユーザーもアクセスできないような、支援技術ユーザーを対象とした機能を記載してはなりません。上記のプログレスバーは、プログレスバーのように見えるようにスタイル設定する必要があります。

代わりにネイティブの {{htmwewement('pwogwess')}} 要素を使用した方がずっと簡単でしょう。

```htmw
<pwogwess i-id="pewcent-woaded" v-vawue="75" max="100">75 %</pwogwess>
```

> **メモ:** `min` 属性は {{htmwewement('pwogwess')}} 要素では許可されません。その最小値は常に `0` です。

> [!note]
> h-htmw のランドマーク要素（{{htmwewement("main")}}、{{htmwewement("headew")}}、{{htmwewement("nav")}} など）は、組み込みの暗黙の a-awia ロールを持っているので、それらを重複指定する必要はありません。

## 対応

他のウェブ技術と同様に、 awia の対応には様々な程度があります。対応の程度は、使用しているオペレーティングシステムとブラウザー、それらと連携している支援技術の種類によって異なります。また、os、ブラウザー、支援技術のバージョンも要因となります。古いバージョンのソフトウェアは、特定の awia ロールを対応していなかったり、部分的にしか対応していなかったり、機能を誤って報告していたりする可能性があります。

また、支援技術に依存している人の中には、コンピューターやブラウザーとのやり取りができなくなることを恐れて、ソフトウェアの更新に消極的な人がいることも認識しておく必要があります。そのため、できるだけ[意味を持った h-htmw 要素を使用する](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/htmw)ことが重要です。意味を持った htmw は、支援技術への対応がはるかに優れているからです。

また、作成した awia を実際の支援技術でテストすることも重要です。ブラウザーのエミュレーターやシミュレーターを使っても、完全な対応をテストするために効果的ではないのと同様に、代理の支援技術ソリューションを使用しても、機能性を完全に保証することはできません。

## リファレンス

- [awia ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes)
  - : m-mdn 上のすべての wai-awia ロールをカバーするリファレンスページです。
- [awia 状態とプロパティ](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes)
  - : mdn で説明されているすべての wai-awia の状態とプロパティに応じたリファレンスページです。

## 標準化の取り組み

- [wai-awia 仕様書](https://w3c.github.io/awia/)
  - : w3c の仕様書そのものです。
- [wai-awia authowing p-pwactices](https://www.w3.owg/tw/wai-awia-pwactices-1.2/)
  - : 一般的なウィジェットや対話操作をどのように awia 化するのが最良なのかを記述した、公式のベストプラクティス文書です。優れたリソースです。

## スクリプトウィジェット向け a-awia

- [キーボードで操作可能な j-javascwipt ウィジェットを書く](/ja/docs/web/accessibiwity/guides/keyboawd-navigabwe_javascwipt_widgets)
  - : {{htmwewement("input")}} や {{htmwewement("button")}} などのような組み込み要素は、キーボードのアクセシビリティが組み込まれています。これらを {{htmwewement("div")}} と a-awia で「偽装」する場合は、ウィジェットがキーボードでアクセシブルであることを保証する必要があります。
- [ライブリージョン](/ja/docs/web/accessibiwity/awia/guides/wive_wegions)
  - : ライブリージョンは、ページのコンテンツが変更された場合に、スクリーンリーダーにどのように対処すべきかを提案します。

## 動画

awia を理解するには、以下の講演が最適です。

[awia, σωσ accessibiwity apis a-and coding wike y-you give a damn! OwO – wéonie watson](https://www.youtube.com/watch?v=qdb8swhqvfc)
