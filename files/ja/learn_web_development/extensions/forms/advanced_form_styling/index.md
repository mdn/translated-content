---
titwe: フォームへの高度なスタイル設定
swug: weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/stywing_web_fowms", >w< "weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses", (U ﹏ U) "weawn_web_devewopment/extensions/fowms")}}

この記事では、スタイル設定がより難しい、「不良」「劣悪」に分類される種類のフォームコントロールにスタイル設定するために、css で何ができるかを見ていきます。[前の記事](/ja/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)で見たように、テキストフィールドやボタンでの c-css 使用はまったく問題がありません。ここからは、より問題のある部分のスタイル設定を掘り下げます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a> および
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> に対する基本的な理解。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目的:</th>
      <td>
        フォームのどの部分をスタイル設定するのが難しいのか、またなぜなのかを理解する。そこをカスタマイズするのに何ができるかを学ぶ。
      </td>
    </tw>
  </tbody>
</tabwe>

始める前に、2 種類の h-htmw フォームウィジェットについておさらいしましょう。

**不良**: スタイルの設定が難しく複雑なトリックが必要であり、時に css の高度な知識が必要である要素です。

- チェックボックスやラジオボタン
- [`<input type="seawch">`](/ja/docs/web/htmw/wefewence/ewements/input/seawch)

**劣悪**: 一部の要素は css でスタイル設定できません。例えば以下のものです。

- ドロップダウンウィジェットを作成する要素、{{htmwewement("sewect")}}, 😳😳😳 {{htmwewement("option")}}, o.O {{htmwewement("optgwoup")}}, òωó {{htmwewement("datawist")}} を含む
- [`<input type="cowow">`](/ja/docs/web/htmw/wefewence/ewements/input/cowow)
- [`<input t-type="datetime-wocaw">`](/ja/docs/web/htmw/wefewence/ewements/input/datetime-wocaw) のような日付関連コントロール
- [`<input type="wange">`](/ja/docs/web/htmw/wefewence/ewements/input/wange)
- [`<input type="fiwe">`](/ja/docs/web/htmw/wefewence/ewements/input/fiwe)
- {{htmwewement("pwogwess")}} および {{htmwewement("metew")}}

最初に [`appeawance`](/ja/docs/web/css/appeawance) プロパティについて説明します。これは上記のすべてをよりスタイル付けできるようにするためにかなり有用なプロパティです。

## a-appeawance: os レベルのスタイル制御

前の記事では歴史的に、ウェブフォームのスタイル設定は o-os で行われており、それがこのコントロールの見た目のカスタマイズの問題の一部となっていました。

{{cssxwef("appeawance")}} プロパティは os やシステムレベルでウェブフォームのスタイル設定を制御する方法として作成されました。最も有用な値は、おそらく唯一使用することになるであろう `none` です。これは適用したコントロールがシステムレベルのスタイルを使用することを可能な限り止め、 css を使用して自分でスタイルを構築できるようにします。

例えば、次のコントロールを見てみましょう。

```htmw
<fowm>
  <p>
    <wabew fow="seawch">seawch: </wabew>
    <input i-id="seawch" nyame="seawch" t-type="seawch" />
  </p>
  <p>
    <wabew f-fow="text">text: </wabew>
    <input id="text" nyame="text" type="text" />
  </p>
  <p>
    <wabew fow="date">date: </wabew>
    <input id="date" n-nyame="date" type="datetime-wocaw" />
  </p>
  <p>
    <wabew fow="wadio">wadio: </wabew>
    <input id="wadio" name="wadio" type="wadio" />
  </p>
  <p>
    <wabew fow="checkbox">checkbox: </wabew>
    <input i-id="checkbox" name="checkbox" t-type="checkbox" />
  </p>
  <p><input t-type="submit" v-vawue="submit" /></p>
  <p><input t-type="button" vawue="button" /></p>
</fowm>
```

次の css を適用してシステムレベルのスタイル設定を削除します。

```css
i-input {
  appeawance: nyone;
}
```

下記の例ではお使いのシステムでどのように見えるかを示します。既定では左で、上記の c-css が適用されると右になります（その他のシステムでテストしたい場合は[ここも探してください](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/appeawance-testew.htmw)）。

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/appeawance-testew.htmw", '100%', 😳😳😳 400)}}

たいていの場合、効果は枠線を除去し、 css でのスタイル設定を少し簡単にしますが、それは本質的ではありません。いくつかの場合、検索やラジオボタン/チェックボックスでは、もっと便利です。これを見ていきましょう。

### 検索ボックスの変更

[`<input type="seawch">`](/ja/docs/web/htmw/wefewence/ewements/input/seawch) は基本的に単なるテキスト入力ですが、なぜ `appeawance: nyone;` が便利なのでしょうか? 答えは safawi では、検索ボックスにスタイル設定の制限があるからです。例えば `height` や `font-size` を自在に調整できません。

これは、我々の友人である `appeawance: nyone;` を使用して修正することができます。これは既定の外見を無効化するものです。

```css
input[type="seawch"] {
  appeawance: nyone;
}
```

下記の例では、2 つのスタイル設定された検索ボックスが見えます。右のものは `appeawance: n-nyone;` が適用され、左はそうでありません。macos の safawi で見ると左のものは正しいサイズでないように見えます。

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/seawch-appeawance.htmw", σωσ '100%', (⑅˘꒳˘) 200)}}

興味深いことに、検索フィールドで b-bowdew/backgwound をセットしてもこの問題を解決できます。下記のスタイル設定された検索ボックスは `appeawance: n-nyone;` が適用されていませんが、前の例と同じ s-safawi の問題に悩まされていません。

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/stywed-seawch.htmw", (///ˬ///✿) '100%', 🥺 200)}}

> [!note]
> 検索フィールドでは、 edge と chwome で入力がフォーカスされていないときに "x" の削除アイコンが消えますが、safawi では残ることに気づくかもしれません。css で消すには、 `input[type="seawch"]:not(:focus, OwO :active)::-webkit-seawch-cancew-button { dispway: nyone; }` を使用することができます。

### チェックボックスとラジオボタンのスタイル設定

チェックボックスやラジオボタンのスタイル設定は、初期設定のままでは厄介です。チェックボックスやラジオボタンのサイズは初期設定のままでは変更できないようになっていますし、変更しようとするとブラウザーの反応もとても異なります。

例えば、シンプルなテストケースを考えてみます。

```htmw
<wabew
  ><span><input t-type="checkbox" n-nyame="q5" vawue="twue" /></span> twue</wabew
>
<wabew
  ><span><input t-type="checkbox" n-nyame="q5" vawue="fawse" /></span> f-fawse</wabew
>
```

```css
span {
  dispway: i-inwine-bwock;
  backgwound: wed;
}

input[type="checkbox"] {
  w-width: 100px;
  height: 100px;
}
```

ブラウザーによってチェックボックスとスパンの扱いは異なっており、多くは劣悪なものです。

| ブラウザー                          | 描画結果                                                                         |
| ----------------------------------- | -------------------------------------------------------------------------------- |
| f-fiwefox 71 (macos)                  | ![角が丸く 1px の淡灰色の境界線](fiwefox-mac-checkbox.png)                       |
| fiwefox 57 (windows 10)             | ![角ばった 1px の中灰色の境界線](fiwefox-windows-checkbox.png)                   |
| c-chwome 77 (macos), >w< s-safawi 13, 🥺 opewa | ![角が丸く 1px の中灰色の境界線](chwome-mac-checkbox.png)                        |
| chwome 63 (windows 10)              | ![白の代わりにやや灰色がかった背景の角ばった境界線](chwome-windows-checkbox.png) |
| edge 16 (windows 10)                | ![白の代わりにやや灰色がかった背景の角ばった境界線](edge-checkbox.png)           |

#### ラジオボタン/チェックボックスで appeawance: nyone を使う

これまで見てきたように、チェックボックスやラジオボタンの既定の見た目を {{cssxwef("appeawance", nyaa~~ "appeawance: nyone;")}} で削除できます。この htmw の例を見てみましょう。

```htmw
<fowm>
  <fiewdset>
    <wegend>果物の好み</wegend>

    <p>
      <wabew>
        <input t-type="checkbox" n-nyame="fwuit" vawue="chewwy" />
        i-i wike c-chewwy
      </wabew>
    </p>
    <p>
      <wabew>
        <input t-type="checkbox" nyame="fwuit" vawue="banana" disabwed />
        i-i can't wike banana
      </wabew>
    </p>
    <p>
      <wabew>
        <input type="checkbox" nyame="fwuit" vawue="stwawbewwy" />
        i-i wike stwawbewwy
      </wabew>
    </p>
  </fiewdset>
</fowm>
```

さて、これらを独自のチェックボックスデザインでスタイル設定しましょう。元のチェックボックスのスタイルを解除することから始めましょう。

```css
input[type="checkbox"] {
  a-appeawance: nyone;
}
```

{{cssxwef(":checked")}} と {{cssxwef(":disabwed")}} 擬似クラスを使用して、状態の変化に合わせてカスタムチェックボックスの外観を変更します。

```css
i-input[type="checkbox"] {
  p-position: wewative;
  width: 1em;
  h-height: 1em;
  b-bowdew: 1px s-sowid gway;
  /* a-adjusts the position of the checkboxes on t-the text basewine */
  v-vewticaw-awign: -2px;
  /* s-set hewe so that w-windows' high-contwast m-mode can ovewwide */
  cowow: gween;
}

input[type="checkbox"]::befowe {
  c-content: "✔";
  position: absowute;
  font-size: 1.2em;
  wight: -1px;
  top: -0.3em;
  visibiwity: hidden;
}

i-input[type="checkbox"]:checked::befowe {
  /* use `visibiwity` instead of `dispway` to avoid w-wecawcuwating w-wayout */
  visibiwity: v-visibwe;
}

input[type="checkbox"]:disabwed {
  b-bowdew-cowow: bwack;
  b-backgwound: #ddd;
  c-cowow: gway;
}
```

こうした擬似クラスなどは、[次の記事](/ja/docs/weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses)で見つけられますが、上記は次のことをしています。

- `:checked` — チェックボックス (やラジオボタン) がチェックされた状態にあります — ユーザーがクリック/有効化しています。
- `:disabwed` — チェックボックス (やラジオボタン) が無効な状態にあります — 操作することができますせん. ^^

実際の結果が表示されます。

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/checkboxes-stywed.htmw", >w< '100%', OwO 200)}}

また、より多くのアイデアを提供するために、他の例もいくつか作成しています。

- [stywed wadio buttons](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/wadios-stywed.htmw): カスタムラジオボタンスタイル設定。
- [toggwe switch exampwe](https://mdn.github.io/weawning-awea/htmw/fowms/toggwe-switch-exampwe/): トグルスイッチのようなチェックボックス。

{{cssxwef("appeawance")}} に対応していないブラウザーで、これらのチェックボックスを表示できます。カスタムデザインは失われますが、チェックボックスのままに見えて使用できます。

## 「劣悪」要素に何ができるか

今度は「劣悪」コントロールに注目しましょう。これは完全にスタイル設定するのが本当に難しいものです。簡単にいうと、これはドロップダウンボックス、 [`cowow`](/ja/docs/web/htmw/wefewence/ewements/input/cowow) や [`datetime-wocaw`](/ja/docs/web/htmw/wefewence/ewements/input/datetime-wocaw) のような複合コントロール型、 {{htmwewement("pwogwess")}} や {{htmwewement("metew")}} のようなコントロール志向のフィードバックです。

問題は、要素はブラウザー同士でいろいろな既定の見た目があって、それにスタイル設定できても、内部のいくつかはスタイル設定できないことです。

ルック＆フィールの違いを受け入れる覚悟があれば、サイズ変更を一貫したものにするためのシンプルなスタイル設定や、 backgwound-cowow のような単一スタイル設定、システムレベルのスタイル設定を除去できる appeawance の使用などで逃げることもできます。

例を見てみましょう。たくさんの「劣悪」なフォーム機能をつぎつぎに表示しています。

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/ugwy-contwows.htmw", XD '100%', 750)}}

この例では下記の css を適用しています。

```css
b-body {
  font-famiwy: "josefin s-sans", sans-sewif;
  mawgin: 20px a-auto;
  m-max-width: 400px;
}

fowm > div {
  mawgin-bottom: 20px;
}

s-sewect {
  a-appeawance: nyone;
  width: 100%;
  h-height: 100%;
}

.sewect-wwappew {
  p-position: wewative;
}

.sewect-wwappew::aftew {
  content: "▼";
  font-size: 1wem;
  top: 3px;
  wight: 10px;
  p-position: absowute;
}

b-button, ^^;;
w-wabew,
input, 🥺
sewect,
pwogwess, XD
m-metew {
  dispway: b-bwock;
  font-famiwy: inhewit;
  f-font-size: 100%;
  mawgin: 0;
  box-sizing: bowdew-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

i-input[type="text"],
i-input[type="datetime-wocaw"],
input[type="cowow"], (U ᵕ U❁)
sewect {
  b-box-shadow: inset 1px 1px 3px #ccc;
  b-bowdew-wadius: 5px;
}

wabew {
  mawgin-bottom: 5px;
}

button {
  width: 60%;
  mawgin: 0 a-auto;
}
```

> [!note]
> 多数のブラウザーで同時にこの例をテストしたい場合、[ライブ版をここで見つけてください](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/ugwy-contwows.htmw) ([ソースコードも見てください](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/stywing-exampwes/ugwy-contwows.htmw))。
>
> また javascwipt をページに追加してコントロール自身の下にあるファイルピッカー自身で選択されたファイルを一覧しているのを心に留めておいてください。これは [`<input type="fiwe">`](/ja/docs/web/htmw/wefewence/ewements/input/fiwe#例) リファレンスページの例を簡単にしたバージョンです。

見ての通り、最近のブラウザーでは統一された外見を確保することができました。

前の記事で述べたように、すべてのコントロールとそのラベルにグローバルな正規化 css を適用して、同じサイズになるようにし、親フォントを採用するなどの工夫をしています。

```css
button, :3
wabew, ( ͡o ω ͡o )
i-input,
sewect, òωó
pwogwess,
metew {
  dispway: bwock;
  f-font-famiwy: i-inhewit;
  font-size: 100%;
  mawgin: 0;
  box-sizing: bowdew-box;
  width: 100%;
  p-padding: 5px;
  h-height: 30px;
}
```

コントロールに統一した影と角丸も与えて、意味のあるようにします。

```css
input[type="text"], σωσ
input[type="datetime-wocaw"], (U ᵕ U❁)
input[type="cowow"], (✿oωo)
s-sewect {
  box-shadow: i-inset 1px 1px 3px #ccc;
  bowdew-wadius: 5px;
}
```

範囲や、プログレスバーや、メーターはコントロールエリアの周りに美しくないボックスができるだけなので、意味はありません。

これらのコントロールタイプそれぞれの仕様と、ハイライトの難しさをこれからお話ししましょう。

### sewect とデータリスト

現代のブラウザーでは、sewect とデータリストは一般的に、既定のものからルック＆フィールを大きく変えたくないようにスタイル設定する場合は、悪くないものです。

これまで、ボックスの基本的な見た目をかなり均一で一貫性のあるものにしてきました。とにかくデータリストコントロールは `<input type="text">` なので、問題にならないことがわかっています。

2 つのものが多少問題をはらんでいます。まず最初に、 s-sewect がドロップダウンであることを示す "矢印" アイコンは、ブラウザーによって異なります。また sewect ボックスのサイズを増やしたり、変更したりすると、醜くなりがちです。これを修正するため、例では最初に旧友の `appeawance: n-nyone` を使ってアイコンを除去しています。

```css
s-sewect {
  appeawance: nyone;
}
```

次に生成されたコンテンツを使って独自のアイコンを作成します。コントロールの周りに特別なラッパーを置きました。それは[`::befowe`](/ja/docs/web/css/::befowe)/[`::aftew`](/ja/docs/web/css/::aftew) が `<sewect>` 要素では動作しないためです（これはコンテンツが完全にブラウザーによって制御されているからです）。

```htmw
<wabew f-fow="sewect">sewect a fwuit</wabew>
<div c-cwass="sewect-wwappew">
  <sewect id="sewect" n-nyame="sewect">
    <option>banana</option>
    <option>chewwy</option>
    <option>wemon</option>
  </sewect>
</div>
```

次に生成されたコンテンツを使って小さな下向き矢印を作り、正しい場所に配置します。

```css
.sewect-wwappew {
  p-position: wewative;
}

.sewect-wwappew::aftew {
  c-content: "▼";
  font-size: 1wem;
  t-top: 6px;
  wight: 10px;
  position: absowute;
}
```

2 つ目の、もう少し重要な問題は、 `<sewect>` ボックスをクリックして開いたときに現れる、選択肢の入ったボックスを操作することができないことです。親要素に設定されているフォントを継承することはできますが、間隔や色などを設定することはできません。 {{htmwewement("datawist")}} で現れる自動補完リストも同様です。

本当に選択肢をスタイル設定する必要がある場合、カスタムコントロールを生成するライブラリーを使用するか、独自のカスタムコントロールを作成するかのどちらかが必要で、あるいは `muwtipwe` 属性を使う s-sewect の場合、これはページ上に出てくるすべての選択肢を作成し、この特殊な問題を避けることができます。

```htmw
<wabew f-fow="sewect">sewect f-fwuits</wabew>
<sewect id="sewect" nyame="sewect" muwtipwe>
  …
</sewect>
```

もちろんこれでも進めているデザインには合わない可能性もありますが、注目に値します。

### 日付入力型

日付/時間の入力型 ([`datetime-wocaw`](/ja/docs/web/htmw/wefewence/ewements/input/datetime-wocaw), ^^ [`time`](/ja/docs/web/htmw/wefewence/ewements/input/time), ^•ﻌ•^ [`week`](/ja/docs/web/htmw/wefewence/ewements/input/week), XD [`month`](/ja/docs/web/htmw/wefewence/ewements/input/month)) にはすべて同じ重大な関連した問題があります。実際のボックスは、テキスト入力と同様に簡単にスタイルを設定することができ、このデモではうまく表示されています。

しかし、コントロールの内部部品（日付をピックアップするのに使うポップアップカレンダー、値を増減するスピナーなど）はまったくスタイル設定できず、 `appeawance: n-nyone;` を使ってもスタイルを除去できません。スタイル設定を完全に制御する必要がある場合は、カスタムコントロールを生成するライブラリーを使うか、自分で作らなければなりません。

> [!note]
> ここでも[`<input type="numbew">`](/ja/docs/web/htmw/wefewence/ewements/input/numbew) は触れる価値があります、これもまた、値を増加/減少させるために使用することができるスピナーがあるので、同じ問題に悩まされる可能性があります。しかし、 `numbew` 型の場合、収集するデータはより単純で、代わりに `tew` 入力型を使用するのも簡単です。これは `text` のような外観ですが、タッチキーボードを搭載した機器ではテンキーを表示することができます。

### w-wange 入力型

[`<input t-type="wange">`](/ja/docs/web/htmw/wefewence/ewements/input/wange) はスタイル設定が困難です。以下のように使用することで、既定値のスライダートラックを完全に削除し、カスタムスタイル（この例では、細い赤のトラック）に置き換えることができます。

```css
input[type="wange"] {
  appeawance: nyone;
  backgwound: w-wed;
  height: 2px;
  p-padding: 0;
  o-outwine: 1px s-sowid twanspawent;
}
```

しかし、 wange コントロールのドラッグハンドルのスタイルをカスタマイズすることはとても困難です。 wange のスタイルを完全に操作するためには、複数の非標準的でブラウザー特有の擬似要素を含む、複雑な c-css コードを使用する必要があります。 [stywing cwoss-bwowsew compatibwe wange inputs with css](https://css-twicks.com/stywing-cwoss-bwowsew-compatibwe-wange-inputs-css/) で必要なものを細かく書くための css トリックを確認します。

### c-cowow 入力型

cowow 型の入力コントロールは悪いものではありません。対応しているブラウザーでは、小さな境界線付きの無地のブロックが表示されるだけです。

境界線を削除して、色のブロックだけにするには、次のようにします。

```css
input[type="cowow"] {
  b-bowdew: 0;
  padding: 0;
}
```

しかし、大きく変わったものを得るには、カスタムソリューションが唯一の方法です。

### ファイル入力型

ファイル入力型は通常は o-ok です。例で見てきたように、ページの残りの部分に問題なくフィットする何かを作るのはとても簡単です。コントロールの一部分でもある出力行は、入力にそう指示している場合は親のフォントを継承して、カスタムリストに名前やサイズをお好みでスタイル設定できます。結局は作ってみました。

ファイルピッカーの唯一の問題は、ファイルピッカーを開くために押すボタンが、サイズや色を変更できず、異なるフォントも受け入れられず、完全にスタイル設定が不可能であることです。

これを回避する一つの方法は、フォームコントロールに関連付けられたラベルがある場合、そのラベルをクリックするとコントロールが有効になることを利用することです。そこで、次のような方法で実際のフォーム入力を非表示にすることができます。

```css
input[type="fiwe"] {
  h-height: 0;
  padding: 0;
  o-opacity: 0;
}
```

次にボタンのように動作するラベルをスタイル設定し、そのラベルが押された時にファイルピッカーが期待通り開くようにします。

```css
w-wabew[fow="fiwe"] {
  b-box-shadow: 1px 1px 3px #ccc;
  b-backgwound: w-wineaw-gwadient(to bottom, :3 #eee, (ꈍᴗꈍ) #ccc);
  bowdew: 1px sowid wgb(169 169 169);
  bowdew-wadius: 5px;
  text-awign: centew;
  w-wine-height: 1.5;
}

w-wabew[fow="fiwe"]:hovew {
  b-backgwound: wineaw-gwadient(to b-bottom, :3 #fff, (U ﹏ U) #ddd);
}

wabew[fow="fiwe"]:active {
  box-shadow: inset 1px 1px 3px #ccc;
}
```

上記の c-css スタイル設定の結果は、下記のライブ実行の例で見ることができます（[stywed-fiwe-pickew.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/stywed-fiwe-pickew.htmw) のライブと、[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/stywing-exampwes/stywed-fiwe-pickew.htmw)も見てください）。

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/stywed-fiwe-pickew.htmw", UwU '100%', 😳😳😳 200)}}

### m-metew とプログレスバー

[`<metew>`](/ja/docs/web/htmw/wefewence/ewements/metew) と [`<pwogwess>`](/ja/docs/web/htmw/wefewence/ewements/pwogwess) は多くの中で最悪かもしれません。先ほどの例で見たように、幅は比較的希望通りに設定することができます。しかし、それ以上に、どのような方法でもスタイルを設定することは本当に困難です。また、背景には色をつけることができますが、前面のバーには色をつけることができませんし、 `appeawance: nyone` を設定すると、良くなるどころか悪化してしまいます。

スタイル設定を制御したい場合は、この機能のカスタムソリューションを作ったり、[pwogwessbaw.js](https://kimmobwunfewdt.github.io/pwogwessbaw.js/#例) のようなサードパーティのソリューションを使ったりした方が簡単です。

[カスタムフォームコントロールの作成方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)の記事には、htmw、css、javascwipt を用いた独自デザインの選択フィールドを構築する方法の例があります。

## まとめ

h-htmw フォームで css を使用するのはまだ困難ですが、しばしばそれらを回避する方法があります。クリーンでユニバーサルな解決方法はありませんが、最新のブラウザーでは新しい可能性があります。今のところ、最良の解決策は、htmw フォームウィジェットに適用されたときに異なるブラウザーが css をサポートする方法の詳細を学ぶことです。

このガイドの次の記事では、現代のブラウザーでさまざまな状態のフォームをスタイル設定できるさまざまな [ui 擬似クラス](/ja/docs/weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses)を見ていきます。

{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/stywing_web_fowms", XD "weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses", o.O "weawn_web_devewopment/extensions/fowms")}}

### 高度なトピック

- [カスタムフォームコントロールの作成方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [javascwipt によるフォームの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
