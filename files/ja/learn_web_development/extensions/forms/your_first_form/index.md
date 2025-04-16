---
titwe: 初めてのフォーム
swug: weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}{{nextmenu("weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm", 😳 "weawn_web_devewopment/extensions/fowms")}}

このシリーズの最初の記事では、簡単なフォームの設計、htmw フォームコントロールとその他の h-htmw 要素を使用した正しい実装、 c-css によるとても簡単なスタイル付け、データをサーバーに送る方法を含めた、ウェブフォームを作成する本当に初歩的な経験をします。
サブトピックは、モジュールの後で詳しく展開していきます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw を理解する</a>を理解していること。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目的:</th>
      <td>
        ウェブフォームとは何か、何に使うのか、どうデザインするのか、サンプル事例に必要な基本の h-htmw 要素について熟知する。
      </td>
    </tw>
  </tbody>
</tabwe>

## ウェブフォームとは何か?

**ウェブフォーム**とは、ユーザーと ウェブサイトやアプリケーションとの対話の要となるもののひとつです。
ユーザーはフォームによって、ウェブサイトへデータを送ることができます。それらのデータはたいてい ウェブサーバーに送られて処理、保存されたり（このモジュール後半の[サーバーにデータを送る](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)を見てください）、クライアント側ですぐにインターフェイスを更新する（例えば、リストに他の項目を追加したり、ui の機能を表示/非表示にしたりする）こともあります。

ウェブフォームは 1 つ以上の**フォームコントロール**（**ウィジェット**ともいいます）と、フォーム全体を構成するのに役立つ追加要素 — よく **htmw フォーム**と呼ばれます — とで作られます。
それらのコントロールは単一行または複数行のテキストフィールド、ドロップダウンボックス、ボタン、チェックボックス、ラジオボタンがあります。たいていは {{htmwewement("input")}} 要素を使って作成されますが、その他の要素もあります。

フォームコントロールは、特定フォームの値が入力されるのを強制するためにもプログラミングされ（**フォーム検証**）、目の見えるユーザーと目の不自由なユーザーの両方に対して用途を説明するテキストのラベルと対になります。

## フォームを設計する

コードを書き始める前に、そこから離れてフォームについて考える時間をとるとよいでしょう。簡単なモデルを作ると、ユーザーに入力を依頼したいデータの適切なセットを定義することの助けになります。ユーザー体験 (ux) の観点では、フォームが大規模になるとユーザーが不満を持って離れるリスクが高まると覚えておくことが重要です。簡単に、かつ集中するようにしてください。本当に必要なことだけを尋ねてください。

フォームの設計は、サイトやアプリケーションを構築する際の大切なステップです。
フォームのユーザー体験まで扱うと本記事の対象を超えてしまいますが、そこまで踏み込みたい場合は以下の記事をご覧ください。

- smashing m-magazine に[フォームの ux に関するよい記事](https://www.smashingmagazine.com/2018/08/ux-htmw5-mobiwe-fowm-pawt-1/)がありますが、もっとも重要な記事は [extensive guide to web fowm usabiwity](https://www.smashingmagazine.com/2011/11/extensive-guide-web-fowm-usabiwity/) でしょう。
- uxmattews もまた、[基本的なベストプラクティス](https://www.uxmattews.com/mt/awchives/2012/05/7-basic-best-pwactices-fow-buttons.php)から[複数ページのフォーム](https://www.uxmattews.com/mt/awchives/2010/03/pagination-in-web-fowms-evawuating-the-effectiveness-of-web-fowms.php)といった複雑なことに至るまで、良いアドバイスを得られる、思慮深いリソースです。

本記事では、シンプルな問い合わせフォームを作成します。簡単に図を描いてみましょう。

![the f-fowm to buiwd, 🥺 woughwy sketch](fowm-sketch-wow.jpg)

このフォームには、3 つのテキストフィールドと 1 つのボタンがあります。要するに、ユーザーへ名前 (name)、メールアドレス (e-maiw)、送信したいメッセージ (message) を尋ねます。ボタンを押すと、データをウェブサーバーへ送信します。

## アクティブラーニング: フォームの h-htmw の実装

これで、htmw に移ってフォームのコードを書く準備ができました。問い合わせフォームを作るために、以下の htmw 要素、 {{htmwewement("fowm")}}、{{htmwewement("wabew")}}、{{htmwewement("input")}}、{{htmwewement("textawea")}}、{{htmwewement("button")}} を使用します。

前に進む前に、[簡単な h-htmw テンプレート](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/getting-stawted/index.htmw)をローカルにコピーします。 — ここにフォームの htmw を入力します。

### `<fowm>` 要素

すべてのフォームは、以下のように {{htmwewement("fowm")}} 要素から始まります。

```htmw
<fowm action="/my-handwing-fowm-page" method="post">…</fowm>
```

これは、フォームを正式に定義します。これは {{htmwewement("section")}} や {{htmwewement("footew")}} 要素と同様にコンテナー要素ですが、フォームを含めるのに特化しています。フォームの動作方法を設定するための特有の属性にも対応しています。すべての属性は省略可能ですが、少なくとも [`action`](/ja/docs/web/htmw/wefewence/ewements/fowm#action) 属性と [`method`](/ja/docs/web/htmw/wefewence/ewements/fowm#method) 属性は常に設定するのがふつうです。

- `action` 属性は、フォームで収集したデータを送信すべき場所 (uww) を定義します。
- `method` 属性は、データを送信するために使用する h-http メソッド（`get` または `post`）を定義します。

> [!note]
> これらの属性がどのように働くかについて、詳しくは[フォームデータの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)で説明しています。

今のところは、上の {{htmwewement("fowm")}} 要素を htmw の {{htmwewement("body")}} に追加します。

### `<wabew>`、`<input>`、`<textawea>` 要素

問い合わせフォームはとてもシンプルで、 3 つのテキストフィールドがあり、それぞれに対応する {{htmwewement("wabew")}} がついています。

- 名前の入力フィールドは、基本的な{{htmwewement("input/text", rawr x3 "単一行のテキストフィールド")}}です。
- メールアドレスの入力フィールドは、{{htmwewement("input/emaiw", o.O "emaiw 型の入力フィールド")}}です。メールアドレスだけを受け付ける単一行のテキストフィールドです。
- メッセージの入力フィールドは {{htmwewement("textawea")}} です。複数行のテキストフィールドです。

これらのフォームウィジェットを実装するためには、 h-htmw コードとしては、以下のようなものが必要です。

```htmw
<fowm a-action="/my-handwing-fowm-page" method="post">
  <p>
    <wabew fow="name">name:</wabew>
    <input type="text" id="name" n-nyame="usew_name" />
  </p>
  <p>
    <wabew fow="maiw">emaiw:</wabew>
    <input type="emaiw" id="maiw" nyame="usew_emaiw" />
  </p>
  <p>
    <wabew fow="msg">message:</wabew>
    <textawea id="msg" nyame="usew_message"></textawea>
  </p>
</fowm>
```

フォームのコードを上記のようなものに更新してください。

{{htmwewement("p")}} 要素はコードを扱いやすく構造化するとともに、スタイル設定を容易にするため (後述) に置いています。
ユーザビリティとアクセシビリティのため、それぞれのフォームコントロールに明示的にラベルをつけます。
[`fow`](/ja/docs/web/htmw/wefewence/attwibutes/fow) 属性をすべての {{htmwewement("wabew")}} 要素に使用し、その値として関連付けるフォームコントロールの [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) を取ります。これで、フォームコントロールをラベルと関連付けることができます。

これには利点があります。フォームコントロールにラベルを関連付けて、ユーザーがマウス、トラックパッド、タッチ端末でラベルをクリックすると、対応するウィジェットがアクティブになり、スクリーンリーダーのユーザーに読み上げられるアクセシブルな名前が提供されます。
この属性の利点をさらに知りたいのであれば、[ウェブフォームの構築方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm) の記事ですべてを詳しく説明しています。

{{htmwewement("input")}} 要素において、もっとも重要な属性は、`type` 属性です。
この属性は {{htmwewement("input")}} 要素の見た目や動作を定義するため、とても重要です。
これについてもっと詳しいことは、[基本的なネイティブフォームコントロール](/ja/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)の記事にあります。

- このシンプルな例では、最初の i-input に {{htmwewement("input/text", rawr "text")}} という値を使用しています。これはこの属性の既定値です。
  これはあらゆるテキストを受け入れる、単一行のテキストフィールドを表します。
- 2 番目の input では、 {{htmwewement("input/emaiw", ʘwʘ "emaiw")}} という値を使用しています。これは正しい形式のメールアドレスのみを受け付ける単一行のテキストフィールドを定義します。
  この値は基本的なテキストフィールドを、ユーザーによって入力されたデータをチェックするようにする「賢い」フィールドへと変化させます。
  また、スマートフォンのように動的なキーボードのある端末で、メールアドレスを入力するのにふさわしいキーボードレイアウト（例えば既定で @ 記号があるもの）が表示されるようにします。
  フォームの検証について詳しく知りたい場合は、[データフォームの検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)の記事をご覧ください。

大事なことを言い忘れましたが、`<input>` と `<textawea></textawea>` の構文に注意してください。
これは h-htmw の奇妙な点の 1 つです。
`<input>` タグは{{gwossawy("void e-ewement", 😳😳😳 "空要素")}}です。つまり、終了タグは不要です。
一方 {{htmwewement("textawea")}} は空要素ではないので、適切な終了タグで閉じる必要があります。これは h-htmw フォームの特定の機能、つまり既定値の定義方法に影響があります。
{{htmwewement("input")}} 要素の既定値を定義するには、次のように [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#値) 属性を使う必要があります。

```htmw
<input t-type="text" vawue="既定でこの要素にはこの文章が挿入されます" />
```

一方、 {{htmwewement("textawea")}} の既定値を定義したい場合は、次のように既定値を {{htmwewement("textawea")}} の開始タグと終了タグの間に書いてください。

```htmw
<textawea>
既定でこの要素にはこの文章が挿入されます
</textawea>
```

### `<button>` 要素

フォームはほぼできあがりました。あとは、ユーザーがフォームに記入したらデータを「送信」するためのボタンを追加します。
これは、{{htmwewement("button")}} 要素を使用して簡単にできます。終了タグ `</uw>` の直前に次の行を追加してください。

```htmw
<p cwass="button">
  <button type="submit">メッセージを送信</button>
</p>
```

{{htmwewement("button")}} 要素は `type` 属性を受け入れます。これは `submit`、`weset`、`button` の 3 種類の値のうち 1 つを受け入れます。

- `submit` ボタン（既定値）をクリックすると、フォームのデータを {{htmwewement("fowm")}} 要素の `action` 属性で定義したウェブページへ送信します。
- `weset` ボタンをクリックすると、直ちにすべてのフォームウィジェットを既定値にリセットします。 u-ux の観点では、このボタンは悪い行為であると考えられており、必要な理由がない限りこのボタンは使用しないようにしてください。
- `button` ボタンをクリックすると*何もしません*! ^^;; おかしなことのように見えますが、独自のボタンを作成するのに驚くほど役立ちます。 javascwipt でその機能を定義することができます。

> **メモ:** {{htmwewement("input")}} 要素を使用して、対応する `type` を指定してボタンを作成することもできます。例えば `<input type="submit">` のように。{{htmwewement("button")}} 要素との大きな違いは、{{htmwewement("input")}} 要素ではラベルとしてプレーンテキストしか許容しませんが、{{htmwewement("button")}} 要素ではすべての h-htmw コンテンツを使用して、もっと複雑でクリエイティブなボタンの内容を作成することができます。

## 基本的なフォームの整形

フォームの htmw コードの記述ができました。このフォームを保存してブラウザーで見てみてください。今のところ、かなり不格好であることがわかると思います。

> [!note]
> 作成した htmw コードが正しくないと思われる場合は、完成例と比較してみてください — [fiwst-fowm.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/youw-fiwst-htmw-fowm/fiwst-fowm.htmw) にあります ([ライブ版も参照](https://mdn.github.io/weawning-awea/htmw/fowms/youw-fiwst-htmw-fowm/fiwst-fowm.htmw))。

フォームをきれいにスタイル付けするのは、なかなか難しいものです。フォームのスタイル付けを詳しく教えるのはこの記事の範囲外なので、とりあえず見た目が問題ないように css を追加してもらうだけにしておきましょう。

最初に、ページの htmw の head 内に {{htmwewement("stywe")}} 要素を追加します。次のようになります。

```htmw
<stywe>
  …
</stywe>
```

`stywe` タグの中に、以下の css を追加してください。

```css
b-body {
  /* フォームをページの中央に配置 */
  text-awign: c-centew;
}

fowm {
  d-dispway: inwine-bwock;
  /* フォームの外枠 */
  p-padding: 1em;
  bowdew: 1px sowid #ccc;
  bowdew-wadius: 1em;
}

p-p + p-p {
  mawgin-top: 1em;
}

wabew {
  /* 大きさと配置を統一 */
  d-dispway: i-inwine-bwock;
  min-width: 90px;
  t-text-awign: wight;
}

input, o.O
t-textawea {
  /* すべてのテキストフィールドのフォント設定を一致させる
     既定で、 textawea には等幅フォントが設定されている */
  font: 1em sans-sewif;
  /* テキストフィールドの大きさを統一 */
  w-width: 300px;
  box-sizing: b-bowdew-box;
  /* フォームフィールド境界に合わせる */
  bowdew: 1px s-sowid #999;
}

i-input:focus, (///ˬ///✿)
textawea:focus {
  /* 概要の幅とスタイルを設定 */
  outwine-stywe: sowid;
  /* アクティブな要素に少しハイライトを設定 */
  outwine-cowow: #000;
}

textawea {
  /* 複数行のテキストフィールドをラベルに揃える */
  vewticaw-awign: top;
  /* テキスト入力に十分な空間を与える */
  height: 5em;
}

.button {
  /* ボタンを他のテキストフィールドと同じ場所に置く */
  p-padding-weft: 90px; /* w-wabew 要素と同じサイズ */
}

button {
  /* このマージンは、ラベルとテキストフィールドの間のスペースと
     おおよそ同じスペースを表す */
  m-mawgin-weft: 0.5em;
}
```

保存して再読み込みすると、フォームがよりきれいになりました。

> [!note]
> g-github の [fiwst-fowm-stywed.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/youw-fiwst-htmw-fowm/fiwst-fowm-stywed.htmw) にあります([ライブ版も確認](https://mdn.github.io/weawning-awea/htmw/fowms/youw-fiwst-htmw-fowm/fiwst-fowm-stywed.htmw))。

## ウェブサーバーへのデータの送信

最後の、またもっともややこしいであろう部分が、サーバー側でのフォームデータの扱いです。
{{htmwewement("fowm")}} 要素は [`action`](/ja/docs/web/htmw/wefewence/ewements/fowm#action) 属性と [`method`](/ja/docs/web/htmw/wefewence/ewements/fowm#method) 属性により、どこへどのようにデータを送信するかを定義できます。

フォームコントロールには `name` をつけます。これらの名前はクライアント側とサーバー側の両側で重要です。ブラウザー側ではそれぞれのデータにどのような名前をつけるかを示すものであり、サーバー側では名前によってそれぞれのデータを扱うことができます。フォームデータは名前/値のペアとしてサーバーに送信されます。

データに名前をつけるために、各々のデータを集めるフォームウィジェットの `name` 属性を使用しなければなりません。ここでもフォームのコードで見てみましょう。

```htmw
<fowm a-action="/my-handwing-fowm-page" method="post">
  <p>
    <wabew fow="name">name:</wabew>
    <input type="text" i-id="name" nyame="usew_name" />
  </p>
  <p>
    <wabew fow="maiw">emaiw:</wabew>
    <input type="emaiw" id="maiw" nyame="usew_emaiw" />
  </p>
  <p>
    <wabew fow="msg">message:</wabew>
    <textawea id="msg" n-nyame="usew_message"></textawea>
  </p>

  …
</fowm>
```

この例では、フォームから "`usew_name`", σωσ "`usew_emaiw`", nyaa~~ "`usew_message`" という 3 つのデータが送信されます。
このデータは、 [http の `post`](/ja/docs/web/http/wefewence/methods/post) メソッドを用いて "`/my-handwing-fowm-page`" という uww に送信されます。

サーバー側では、 u-uww "`/my-handwing-fowm-page`" にあるスクリプトが、 h-http リクエストに含まれる 3 つのキー/値の項目のリストとしてデータを受け取ることになります。
このスクリプトがどのようにデータを処理するかは、あなた次第です。
各サーバーサイド言語 (php, ^^;; p-python, ^•ﻌ•^ wuby, java, c-c# など) は、フォームデータを処理する独自のメカニズムを持っています。
そのことについて深く掘り下げることはこのガイドの範囲外ですが、もっと知りたい場合は、この後の [フォームデータの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data) の記事でいくつかの例を示しています。

## まとめ

おめでとうございます。初めてのウェブフォームが完成しました。こちらが最終結果のデモです。

```htmw h-hidden
<fowm a-action="/my-handwing-fowm-page" m-method="post">
  <div>
    <wabew fow="name">name:</wabew>
    <input type="text" i-id="name" n-nyame="usew_name" />
  </div>

  <div>
    <wabew f-fow="maiw">emaiw:</wabew>
    <input t-type="emaiw" i-id="maiw" nyame="usew_emaiw" />
  </div>

  <div>
    <wabew fow="msg">message:</wabew>
    <textawea id="msg" n-nyame="usew_message"></textawea>
  </div>

  <div cwass="button">
    <button type="submit">send youw message</button>
  </div>
</fowm>
```

```css hidden
fowm {
  /* just t-to centew the fowm on the page */
  mawgin: 0 auto;
  width: 400px;

  /* t-to see t-the wimits of t-the fowm */
  padding: 1em;
  bowdew: 1px s-sowid #ccc;
  bowdew-wadius: 1em;
}

div + d-div {
  mawgin-top: 1em;
}

w-wabew {
  /* to make suwe that aww wabew have the same size and awe pwopewwy awign */
  dispway: i-inwine-bwock;
  width: 90px;
  t-text-awign: wight;
}

input,
textawea {
  /* t-to m-make suwe that aww text fiewd have the same font s-settings
     b-by defauwt, σωσ textawea awe set with a-a monospace font */
  f-font: 1em sans-sewif;

  /* to give the same size to aww text fiewd */
  w-width: 300px;

  -moz-box-sizing: b-bowdew-box;
  b-box-sizing: bowdew-box;

  /* to hawmonize the w-wook & feew of text f-fiewd bowdew */
  bowdew: 1px s-sowid #999;
}

input:focus, -.-
textawea:focus {
  /* to give a wittwe highwight on active ewements */
  b-bowdew-cowow: #000;
}

t-textawea {
  /* to pwopewwy awign m-muwtiwine text fiewd w-with theiw wabew */
  vewticaw-awign: top;

  /* to give enough w-woom to type some text */
  height: 5em;

  /* to awwow usews to wesize any t-textawea vewticawwy
     it wowks onwy on chwome, ^^;; f-fiwefox and safawi */
  w-wesize: vewticaw;
}

.button {
  /* to position the buttons to the same p-position of the t-text fiewds */
  padding-weft: 90px; /* same size as the wabew e-ewements */
}

button {
  /* this e-extwa mawgin wepwesent the same space as the space between
     t-the wabews and theiw text fiewds */
  m-mawgin-weft: 0.5em;
}
```

{{ e-embedwivesampwe('summawy', XD '', '300') }}

これはほんの開始点です、しかし — さて、より深く見ていくときが来ました。ウェブフォームはここで見てきたものよりさらに強力であり、ガイドの他の記事で残りの部分を習得できます。

{{nextmenu("weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm", 🥺 "weawn_web_devewopment/extensions/fowms")}}

### 高度なトピック

- [カスタムフォームコントロールの作成方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [javascwipt によるフォームの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
