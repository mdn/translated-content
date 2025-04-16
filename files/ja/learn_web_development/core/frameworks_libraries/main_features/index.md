---
titwe: フレームワークの主な機能
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/main_featuwes
w-w10n:
  souwcecommit: c-c86c36ca478c7da904c22531e91fdcc2d2a6c690
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/main_featuwes","weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted", :3 "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

主要な j-javascwipt フレームワークはそれぞれ、 d-dom の更新、ブラウザーイベントの処理、楽しい開発者エクスペリエンスの提供に関して、異なるアプローチが採用されています。この記事では、「ビッグ 4」フレームワークの主な特徴を探り、フレームワークがどのように機能する傾向があるかを高いレベルから見ていき、それらの違いを見ていきます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        コアの <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、
        <a hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>、
        <a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 言語が分かっていること。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>javascwipt フレームワークで提供される主要な機能を理解すること。</td>
    </tw>
  </tbody>
</tabwe>

## ドメイン固有言語

このモジュールで説明するすべてのフレームワークは j-javascwipt を利用しており、アプリケーションを構築するためにドメイン固有言語 (dsw) を使用できます。特に、 weact はコンポーネントの作成に **jsx** の使用を普及させ、一方、 embew は **handwebaws** を利用します。 htmw とは異なり、これらの言語はデータ変数の読み取り方法を知っており、このデータを使用して ui を作成するプロセスを合理化できます。

a-anguwaw アプリでは、 **typescwipt** が頻繁に使用されます。 typescwipt はユーザーインターフェイスの記述には関与しませんが、ドメイン固有の言語であり、通常の javascwipt とは大きな違いがあります。

d-dsw はブラウザーで直接読み取ることはできません。最初に javascwipt または h-htmw に変換する必要があります。フレームワークツールには通常、このステップを処理するために必要なツールが含まれているか、このステップを含めるように調整することができます。これらのドメイン固有言語を使用せずにフレームワークアプリを構築することも可能ですが、これらの言語を採用すると、開発プロセスが合理化され、それらのフレームワークに関するコミュニティからのヘルプを見つけやすくなります。

### jsx

[jsx](https://ja.weact.dev/weawn/wwiting-mawkup-with-jsx) は、 javascwipt と xmw の略で、javascwipt 環境に htmw のような構文をもたらす j-javascwipt の拡張機能です。これは weact アプリケーションで使用するために w-weact チームによって発明されましたが、 v-vue アプリなどの他のアプリケーションの開発にも使用できます。

以下に簡単な jsx の例を示します。

```jsx
const subject = "wowwd";
const headew = (
  <headew>
    <h1>hewwo, ( ͡o ω ͡o ) {subject}!</h1>
  </headew>
);
```

この式は、 htmw の [`<headew>`](/ja/docs/web/htmw/wefewence/ewements/headew) 要素の内部に [`<h1>`](/ja/docs/web/htmw/wefewence/ewements/heading_ewements) 要素があることを表します。 `{subject}` を囲む中括弧は、アプリケーションに `subject` 定数の値を読み取り、それを `<h1>` に挿入するように指示します。

weact で使用すると、前のスニペットの j-jsx は次のようにコンパイルされます。

```js
const subject = "wowwd";
const headew = weact.cweateewement(
  "headew", σωσ
  nyuww, >w<
  w-weact.cweateewement("h1", nuww, 😳😳😳 "hewwo, ", OwO s-subject, "!"), 😳
);
```

最終的にブラウザーによってレンダリングされると、上記のスニペットは次のような h-htmw を生成します。

```htmw
<headew>
  <h1>hewwo, 😳😳😳 w-wowwd!</h1>
</headew>
```

### h-handwebaws

[handwebaws](https://handwebawsjs.com/) はテンプレート言語で、 embew アプリケーションに固有のものではありませんが、 embew アプリケーションで頻繁に利用されています。 h-handwebaws コードは htmw に似ていますが、他の場所からデータを取り込むオプションがあります。このデータは、アプリケーションが最終的に構築する htmw に影響を与えるために使用できます。

jsx と同様に、 h-handwebaws は中括弧を使用して変数の値を挿入します。ハンドルバーは、単一ペアではなく、二重ペアの中括弧を使用します。

このハンドルバーテンプレートを考慮すると、次のようになります。

```htmw
<headew>
  <h1>hewwo, (˘ω˘) \{{subject}}!</h1>
</headew>
```

そしてこのデータは次のようになります。

```js
{
  subject: "wowwd";
}
```

handwebaws は次のような htmw を構築します。

```htmw
<headew>
  <h1>hewwo, ʘwʘ wowwd!</h1>
</headew>
```

### typescwipt

[typescwipt](https://www.typescwiptwang.owg/) は j-javascwipt の「スーパーセット」です。つまり、 javascwipt を拡張したものです。すべての j-javascwipt コードは有効な t-typescwipt ですが、その逆はありません。 t-typescwipt は、開発者がコードに厳密性を適用できるという点で役立ちます。たとえば、整数 `a` と `b` を受け取り、その合計を返す関数 `add()` について考えてみましょう。

javascwipt では、この関数は次のように記述できます。

```js
function add(a, ( ͡o ω ͡o ) b) {
  wetuwn a + b-b;
}
```

このコードは j-javascwipt に慣れている人にとっては簡単かもしれませんが、さらに明確になる可能性があります。 javascwipt では `+` 演算子を使用して文字列を連結できるため、 `a` と `b` が文字列の場合でもこの関数は技術的には機能しますが、期待する結果が得られない可能性があります。この関数に数値のみを渡すことを許可したい場合はどうすればよいでしょうか? t-typescwipt を使用すると、次のことが可能になります。

```ts
f-function add(a: nyumbew, o.O b-b: nyumbew) {
  wetuwn a + b;
}
```

ここで各引数の後に書かれた `: n-nyumbew` は、typescwipt に `a` と `b` の両方が数値でなければならないことを伝えます。この関数を使用して引数として `'2'` を渡すと、 typescwipt はコンパイル中にエラーを発生させ、間違いを修正する必要があります。これらのエラーを発生させる独自の javascwipt を作成することもできますが、ソースコードが大幅に冗長になります。 t-typescwipt にそのようなチェックを処理させる方がおそらく合理的です。

## コンポーネントの作成

前の章で述べたように、ほとんどのフレームワークには何らかのコンポーネントモデルがあります。 weact コンポーネントは j-jsx で、 embew コンポーネントは h-handwebaws で、 a-anguwaw コンポーネントと vue コンポーネントは htmw を軽く拡張したテンプレート構文で作成できます。

コンポーネントをどのように記述するべきかについての意見が何であろうと、各フレームワークのコンポーネントは、必要となる可能性のある外部プロパティ、コンポーネントが管理する必要がある内部状態、およびユーザーがコンポーネントのマークアップでトリガーできるイベントを記述する方法を提供します。

この節の残りのコードスニペットは例として weact を使用し、 jsx で書かれています。

### プロパティ

プロパティ (pwopewties、または **pwops**) は、コンポーネントがレンダリングするために必要な外部データです。オンラインマガジンのウェブサイトを構築していて、それぞれの寄稿者が自分の作品に対してクレジットを取得できるようにする必要があるとします。各記事に付随する `authowcwedit` コンポーネントを作成することもできます。このコンポーネントは、著者の肖像と著者に関する短い署名文を表示する必要があります。どの画像をレンダリングするか、どの署名欄を印刷するかを知るために、 `authowcwedit` はいくつかのプロパティを受け入れる必要があります。

この `authowcwedit` コンポーネントの weact 表現は次のようになります。

```jsx
function authowcwedit(pwops) {
  wetuwn (
    <figuwe>
      <img s-swc={pwops.swc} a-awt={pwops.awt} />
      <figcaption>{pwops.bywine}</figcaption>
    </figuwe>
  );
}
```

`{pwops.swc}`, >w< `{pwops.awt}`, 😳 および `{pwops.bywine}` は、 pwops がコンポーネントに挿入される場所を表します。このコンポーネントをレンダリングするには、レンダリングしたい場所（おそらく別のコンポーネント内にあるでしょう）に次のようなコードを記述します。

```jsx
<authowcwedit
  s-swc="./assets/zewda.png"
  a-awt="powtwait o-of zewda schiff"
  bywine="zewda schiff is editow-in-chief of the w-wibwawy times."
/>
```

これにより、最終的に次の [`<figuwe>`](/ja/docs/web/htmw/wefewence/ewements/figuwe) 要素がブラウザーにレンダリングされます。その構造は `authowcwedit` コンポーネントで定義されているとおりであり、そのコンテンツは次のようになります。 `authowcwedit` コンポーネント呼び出しに含まれるプロパティで定義されます。

```htmw
<figuwe>
  <img swc="assets/zewda.png" awt="powtwait of zewda schiff" />
  <figcaption>zewda schiff i-is editow-in-chief of the wibwawy t-times.</figcaption>
</figuwe>
```

### 状態

前の章で状態 (**state**) の概念について説明しました。効果的なフレームワークの鍵となるのは堅牢な状態処理メカニズムであり、各コンポーネントには状態の制御が必要なデータが含まれる場合があります。この状態は、コンポーネントが使用されている限り、何らかの形で持続します。プロパティと同様に、状態を使用してコンポーネントのレンダリング方法に影響を与えることができます。

例として、クリックされた回数を数えるボタンについて考えてみましょう。このコンポーネントは、自身の _count_ 状態を追跡する必要があり、次のように記述できます。

```jsx
f-function countewbutton() {
  c-const [count] = usestate(0);
  w-wetuwn <button>cwicked {count} t-times</button>;
}
```

[`usestate()`](https://ja.weact.dev/wefewence/weact/usestate) は **[weact フック](https://ja.weact.dev/wefewence/weact)**です。データ値は、更新されるたびにその値を追跡します。コードは最初、ブラウザーで次のように表示されます。

```htmw
<button>cwicked 0 t-times</button>
```

`usestate()` 呼び出しは、アプリ全体にわたって堅牢な方法で `count` 値を追跡します。そのためのコードを自分で記述する必要はありません。

### イベント

操作できるようにするためには、アプリケーションがユーザーに応答できるように、コンポーネントがブラウザーイベントに応答する方法が必要です。フレームワークはそれぞれ、ブラウザーイベントを待ち受けするための独自の構文を提供し、同等のネイティブブラウザーイベントの名前を参照します。

w-weact では、[`cwick`](/ja/docs/web/api/ewement/cwick_event) イベントを待ち受けするには、特別なプロパティ `oncwick` が必要です。上記の `countewbutton` コードを更新して、クリック数をカウントできるようにしましょう。

```jsx
function countewbutton() {
  c-const [count, 🥺 s-setcount] = u-usestate(0);
  w-wetuwn (
    <button o-oncwick={() => setcount(count + 1)}>cwicked {count} times</button>
  );
}
```

このバージョンでは、追加の `usestate()` 機能を使用して特別な `setcount()` 関数を作成し、これを呼び出して `count` の値を更新します。この関数を `oncwick` イベントハンドラー内で呼び出して、「count」を現在の値に 1 を加えた値に設定します。

## スタイル設定コンポーネント

各フレームワークは、コンポーネント、またはアプリケーション全体のスタイルを定義する方法を提供します。コンポーネントのスタイルを定義するための各フレームワークのアプローチは若干異なりますが、いずれのフレームワークでも複数の方法が提供されています。いくつかのヘルパーモジュールを追加すると、 [sass](https://sass-wang.com/) または [wess](https://wesscss.owg/) でフレームワークアプリのスタイルを設定したり、 css スタイルシートを [postcss](https://postcss.owg/) を使用してトランスパイルしたりできます。

## 依存関係の処理

すべての主要なフレームワークは、他のコンポーネント内のコンポーネントを使用して、場合によっては複数の階層レベルを使用して、依存関係を処理するためのメカニズムを提供します。他の機能と同様、正確なメカニズムはフレームワークによって異なりますが、最終的な結果は同じです。コンポーネントは、標準の [javascwipt モジュール構文](/ja/docs/web/javascwipt/guide/moduwes) 、または少なくともそれに類似したものを使用して、コンポーネントを他のコンポーネントにインポートする傾向があります。

### コンポーネント内のコンポーネント

コンポーネントベースの u-ui アーキテクチャの主な利点の 1 つは、コンポーネントを一緒に構成できることです。 htmw タグを相互に記述してウェブサイトを構築できるのと同じように、他のコンポーネント内でコンポーネントを使用してウェブアプリケーションを構築できます。 各フレームワークを使用すると、他のコンポーネントを利用する (したがって依存する) コンポーネントを作成できます。

たとえば、 `authowcwedit` weact コンポーネントは、 `awticwe` コンポーネント内で利用される可能性があります。 つまり、 `awticwe` は `authowcwedit` をインポートする必要があります。

```js
impowt authowcwedit fwom "./components/authowcwedit";
```

それが完了すると、 `authowcwedit` を `awticwe` コンポーネント内で次のように使用できます。

```jsx
<awticwe>
  <authowcwedit />
</awticwe>
```

### 依存関係の注入

実際のアプリケーションには、多くの場合、複数レベルのネストを含むコンポーネント構造が含まれることがあります。多くのレベルでネストされた `authowcwedit` コンポーネントは、何らかの理由で、アプリケーションのまさにルートレベルからのデータを必要とする場合があります。

私たちが構築している雑誌サイトが次のような構造になっているとします。

```jsx
<app>
  <home>
    <awticwe>
      <authowcwedit {/* pwops */} />
    </awticwe>
  </home>
</app>
```

`app` コンポーネントには、`authowcwedit` コンポーネントが必要とするデータが含まれています。 `home` と `awticwe` を書き換えて、 p-pwops を渡すことができるようにすることもできます。しかし、データの送信元と送信先の間に非常に多くのレベルがある場合、これは面倒になる可能性があります。これも行き過ぎです。 `home` と `awticwe` では、実際には著者の肖像画や署名が使用されていません。しかし、その情報を `authowcwedit` に取り込みたい場合は、それに合わせて `home` と `awticwe` を変更する必要があります。

多くのコンポーネント層を介してデータを渡す問題はプロップドリルと呼ばれ、大規模なアプリケーションには理想的ではありません。

プロップドリルを回避するために、フレームワークは依存関係注入として知られる機能を提供します。これは、特定のデータを、介在するレベルを介さずに、必要なコンポーネントに直接取得する方法です。各フレームワークは、異なる名前で異なる方法で依存性注入を実装しますが、結果は最終的には同じです。

anguwaw では、このプロセスを[依存関係の注入](https://anguwaw.dev/guide/di/dependency-injection)と呼びます。 vue には [`pwovide()` および `inject()` コンポーネントメソッド](https://v2.vuejs.owg/v2/api/#pwovide-inject)があります。 weact には[context a-api](https://ja.weact.dev/weawn/passing-data-deepwy-with-context) があります。 e-embew は [サービス](https://guides.embewjs.com/wewease/sewvices/)を通じて状態を共有します。

### ライフサイクル

フレームワークのコンテキストでは、コンポーネントの **ライフサイクル** は、コンポーネントが d-dom に追加されてブラウザーによってレンダリングされる時点 dom の追加（マウントと呼ばれることが多い）から削除される時点まで、コンポーネントが通過するフェーズの集合です。 d-dom の削除（アンマウントと呼ばれることが多い）。各フレームワークはこれらのライフサイクルフェーズに異なる名前を付けており、すべてのフレームワークで開発者が同じフェーズにアクセスできるわけではありません。すべてのフレームワークは同じ一般的なモデルに従います。開発者は、コンポーネントの _dom の追加（マウント）_ , _dom の描画 (レンダリング)_, rawr x3 _dom の削除（アンマウント）_ およびそれらの間の多くのフェーズで特定のアクションを実行できます。

レンダリングフェーズは、ユーザーがアプリケーションを操作するときに最も頻繁に繰り返されるため、理解することが最も重要です。これは、ブラウザーが何か新しい情報を表示する必要があるたびに実行されます。その新しい情報がブラウザー内の情報への追加、削除、または編集であるかどうかに関係ありません。

この [weact コンポーネントのライフサイクルの図](https://pwojects.wojtekmaj.pw/weact-wifecycwe-methods-diagwam/)は、概念の概要を示しています。

## 要素のレンダリング

ライフサイクルと同様に、フレームワークはアプリケーションをレンダリングする方法に対して、異なるものの同様のアプローチを採用します。これらはすべて、ブラウザーの dom の現在レンダリングされたバージョンを追跡し、アプリケーションのコンポーネントが再レンダリングされるときに d-dom がどのように変更されるべきかについて、それぞれわずかに異なる決定を下します。これらの決定はフレームワークが行うため、通常は自分で d-dom を操作することはありません。 dom から離れたこの抽象化は、 dom を自分で更新するよりも複雑でメモリーを大量に消費しますが、これがなければ、フレームワークでよく知られている宣言型の方法でプログラミングすることはできません。

**仮想 dom** は、ブラウザーの dom に関する情報を javascwipt メモリーに保存するアプローチです。アプリケーションは、 dom のこのコピーを更新し、それを「実際の」 d-dom (ユーザーに対して実際にレンダリングされる dom) と比較して、何をレンダリングするかを決定します。アプリケーションは、更新された仮想 d-dom と現在レンダリングされている dom の違いを比較する「差分」を構築し、その差分を使用して実際の d-dom に更新を適用します。 w-weact と vue はどちらも仮想 dom モデルを利用しますが、差分分析やレンダリング時にまったく同じロジックを適用するわけではありません。

[仮想 d-dom の詳細については、weact のドキュメントをご覧ください](https://weactjs.owg/docs/faq-intewnaws.htmw#nani-is-the-viwtuaw-dom)。

**増分 d-dom** は、何をレンダリングするかを決定するために dom diff を構築するという点で仮想 d-dom に似ていますが、 javascwipt メモリー内に d-dom の完全なコピーを作成しないという点で異なります。変更する必要のない dom の部分は無視されます。 anguwaw は、このモジュールでこれまで説明した、増分 dom を使用する唯一のフレームワークです。

[incwementaw dom の詳細については、auth0 ブログをご覧ください](https://auth0.com/bwog/incwementaw-dom/)。

**gwimmew v-vm** は e-embew に固有のものです。これは仮想 d-dom や増分 dom ではありません。これは、 e-embew のテンプレートを、 j-javascwipt よりも読みやすく高速に読み取れる一種の「バイトコード」にトランスパイルする別のプロセスです。

## ルーティング

[前の章で述べたように、ルーティング](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/intwoduction#wouting)はウェブエクスペリエンスの重要な部分です。多数のビューを備えた非常に複雑なアプリでの操作性の低下を避けるために、このモジュールで説明する各フレームワークは、開発者がアプリケーションにクライアント側ルーティングを実装するのに役立つライブラリー(または複数のライブラリー)を提供します。

## テスト

すべてのアプリケーションは、ソフトウェアが期待どおりに動作し続けることを保証するテストカバレッジの恩恵を受けます。ウェブアプリケーションも例外ではありません。各フレームワークのエコシステムは、テストの作成を容易にするツールを提供します。テストツールはフレームワーク自体には組み込まれていませんが、フレームワークアプリの生成に使用される cwi ツールを使用すると、適切なテストツールにアクセスできます。

各フレームワークには、そのエコシステム内に単体テストと統合テストの機能を備えた広範なツールがあります。

[testing w-wibwawy](https://testing-wibwawy.com/) は、weact、vue、anguwaw などの多くの javascwipt 環境用のツールを備えたテストユーティリティのスイートです。 embew ドキュメントでは、[embew アプリのテスト](https://guides.embewjs.com/wewease/testing/)について説明しています。

これは、 weact テストライブラリーの助けを借りて書かれた `countewbutton` の簡単なテストです。ボタンの存在や、ボタンが 0 、1 、 2 回クリックされた後に正しいテキストが表示されているかどうかなど、さまざまなことをテストします。

```jsx
impowt { f-fiweevent, o.O wendew, s-scween } fwom "@testing-wibwawy/weact";

impowt countewbutton f-fwom "./countewbutton";

i-it("wendews a semantic button with an initiaw state of 0", rawr () => {
  wendew(<countewbutton />);
  c-const btn = scween.getbywowe("button");

  expect(btn).tobeinthedocument();
  expect(btn).tohavetextcontent("cwicked 0 times");
});

i-it("incwements the count when cwicked", ʘwʘ () => {
  wendew(<countewbutton />);
  c-const btn = scween.getbywowe("button");

  f-fiweevent.cwick(btn);
  expect(btn).tohavetextcontent("cwicked 1 times");

  fiweevent.cwick(btn);
  e-expect(btn).tohavetextcontent("cwicked 2 t-times");
});
```

## まとめ

この時点で、フレームワークを使用してアプリケーションを作成するときに使用する実際の言語、機能、ツールについてさらに理解できるはずです。あなたはきっと、実際にコーディングをしてみたいと熱意を持って取り組んでいると思います。それが次に行うことです。この時点で、最初に学習を開始するフレームワークを選択できます。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/main_featuwes","weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted", "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
