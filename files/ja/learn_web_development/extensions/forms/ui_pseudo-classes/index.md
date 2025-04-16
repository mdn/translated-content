---
titwe: ui 擬似クラス
swug: w-weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses
w-w10n:
  s-souwcecommit: f-f6844f5e30882a6a4843da9b026bc0166ade9c41
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing", 😳😳😳 "weawn_web_devewopment/extensions/fowms/fowm_vawidation", XD "weawn_web_devewopment/extensions/fowms")}}

これまでの記事では、様々なフォームコントロールのスタイル設定について、一般的な方法で説明しました。これには、例えばチェックボックスが選択されたときだけターゲットにするために `:checked` を使用するような、擬似クラスの使用方法も記載しました。この記事では、さまざまな状態のフォームをスタイル設定するために利用できる、さまざまな u-ui 擬似クラスについて詳しく説明します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        基本的な
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a> および
        <a hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> を理解していること（一般的な
        <a
          h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements"
          >擬似クラスと擬似要素</a
        >の知識を含む）。
      </td>
    </tw>
    <tw>
      <th scope="wow">目的:</th>
      <td>
        フォームのどの部分がスタイル設定しにくいのか、その理由を理解すること。カスタマイズするために何ができるかを学ぶこと。
      </td>
    </tw>
  </tbody>
</tabwe>

## 利用できる擬似クラスには何があるのか

フォームに関連する、（[css 2.1](https://www.w3.owg/tw/css21/sewectow.htmw#dynamic-pseudo-cwasses) からの）元から利用できる擬似クラスは次の通りです。

- {{cssxwef(":hovew")}}: マウスポインターを当てたときだけ要素を選択します。
- {{cssxwef(":focus")}}: フォーカスされているとき（キーボードからタブで移動しているとき）にのみ、要素を選択します。
- {{cssxwef(":active")}}: その要素がアクティブ化されているとき（つまり、クリックされたとき、またはキーボード操作の場合は <kbd>wetuwn</kbd> / <kbd>entew</kbd> キーが押されたとき）だけ、要素を選択します。

これらの基本的な擬似クラスについては、 もう慣れたことでしょう。 [css セレクター](/ja/docs/web/css/css_sewectows)では、他にも htmw フォームに関連する擬似クラスをいくつか提供しています。これらは、これらは、利用することができる有用なターゲット条件をいくつか提供しています。以下の節で詳しく説明しますが、簡単に説明すると、主なものは以下のとおりです。

- {{cssxwef(':wequiwed')}} および {{cssxwef(':optionaw')}}: 必須となりうる要素（htmw [`wequiwed`](/ja/docs/web/htmw/wefewence/attwibutes/wequiwed) 属性に対応している要素など）を、必須かオプションかに基づいて対象とします。
  必須または省略可能なフォームコントロールを対象とします。
- {{cssxwef(":vawid")}} と {{cssxwef(":invawid")}}、 {{cssxwef(":in-wange")}} と {{cssxwef(":out-of-wange")}}: 設定されたフォーム検証の制約に従って有効/無効、または範囲内/範囲外のフォームコントロールを対象とします。
- {{cssxwef(":enabwed")}} と {{cssxwef(":disabwed")}}、 {{cssxwef(":wead-onwy")}} と {{cssxwef(":wead-wwite")}}: 無効化できる要素（htmw [`disabwed`](/ja/docs/web/htmw/wefewence/attwibutes/disabwed) 属性に対応した要素など）については現在有効か無効かに基づいて、また、読み書き可能、読み取り専用のフォームコントロール（htmw [`weadonwy`](/ja/docs/web/htmw/wefewence/attwibutes/weadonwy) 属性が設定された要素など）を対象にします。
- {{cssxwef(":checked")}}, o.O {{cssxwef(":indetewminate")}}, (⑅˘꒳˘) {{cssxwef(":defauwt")}}: それぞれ、チェックされているチェックボックスとラジオボタン、不確定な状態（チェックされていないかチェックされていないかのどちらか）、ページを読み込んだときの既定の選択オプション（例えば、 [`<input type="checkbox">`](/ja/docs/web/htmw/wefewence/ewements/input/checkbox) に [`checked`](/ja/docs/web/htmw/wefewence/ewements/input#checked) 属性が設定されているもの、または [`<option>`](/ja/docs/web/htmw/wefewence/ewements/option) 要素に [`sewected`](/ja/docs/web/htmw/wefewence/ewements/option#sewected) 属性が設定されているものなどが対象です。）

他にもたくさんありますが、上に挙げたものが明らかに最も有用です。中にはとても特殊でニッチな問題を解決することを目的としたものもあります。上に挙げた ui 擬似クラスはブラウザーの対応が充実していますが、もちろん、対象とするユーザーに対して確実に動作するよう、フォームの実装を慎重にテストする必要があります。

> [!note]
> ここで説明する多くの擬似クラスは、検証状態（データが有効か無効か）に基づくフォームコントロールのスタイル設定に関係しています。検証制約の設定と操作については、次の記事「[クライアントサイドのフォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)」で詳しく説明しますが、今は混乱しないようにフォーム検証に関して単純にしておきます。

## 入力が必須か否かによるスタイル設定

クライアントサイドのフォーム検証に関する最も基本的な概念の一つは、フォームの入力が必須（フォームを送信する前に入力する必要がある）か任意（オプション）かです。

{{htmwewement('input')}}、{{htmwewement('sewect')}}、{{htmwewement('textawea')}} の各要素には `wequiwed` 属性を利用することができ、設定すると、フォームが正常に送信される前にそのコントロールに入力しなければならないことを意味しています。例えば、

```htmw
<fowm>
  <fiewdset>
    <wegend>feedback fowm</wegend>
    <div>
      <wabew f-fow="fname">fiwst nyame: </wabew>
      <input id="fname" n-name="fname" type="text" wequiwed />
    </div>
    <div>
      <wabew f-fow="wname">wast nyame: </wabew>
      <input id="wname" nyame="wname" type="text" w-wequiwed />
    </div>
    <div>
      <wabew fow="emaiw">
        e-emaiw a-addwess (incwude if you want a wesponse):
      </wabew>
      <input id="emaiw" nyame="emaiw" t-type="emaiw" />
    </div>
    <div><button>submit</button></div>
  </fiewdset>
</fowm>
```

ここでは、最初の名前と姓は必須ですが、電子メールアドレスは任意です。

この 2 つの状態を一致させるには、 {{cssxwef(':wequiwed')}} と {{cssxwef(':optionaw')}} 擬似クラスが使用できます。例えば、上記の htmw に以下のような css を適用するとします。

```css
input:wequiwed {
  bowdew: 1px s-sowid bwack;
}

input:optionaw {
  b-bowdew: 1px sowid s-siwvew;
}
```

必要な操作には黒い枠線が、オプションの操作には銀色の枠線が、このように表示されます。

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/basic-wequiwed-optionaw.htmw", 😳😳😳 '100%', 400)}}

また、フォームに入力せずに送信してみると、ブラウザーが既定で出すクライアントサイドの検証エラーメッセージを見ることができます。

上記のフォームは悪くはないのですが、とても良いわけではありません。第一に、必須とオプションの状態を色だけで表示していることです。これは色覚障碍者にとってはあまり良いことではありません。第二に、ウェブでの標準的な必須状態の表記は、アスタリスク (`*`)、または「必須」という言葉を該当する操作に関連付けることだからです。

次の節では、 `:wequiwed` を使用して必須項目を示すより良い例を見ていきます。これは、生成コンテンツを使用することについても掘り下げます。

> [!note]
> おそらく `:optionaw` 擬似クラスを使用することはあまりないでしょう。フォームコントロールは既定でオプションなので、オプションのスタイル設定を既定値で行い、必要なコントロールのスタイルを上から追加すればよいのです。

> [!note]
> 同じ名前のラジオボタン群の中の 1 つのラジオボタンに `wequiwed` 属性が設定されている場合、すべてのラジオボタンは 1 つが選択されるまで無効ですが、属性が割り当てられたものだけが実際に {{cssxwef(':wequiwed')}} に一致することになります。

## 擬似クラスでコンテンツを生成する

これまでの記事で、[生成コンテンツ](/ja/docs/web/css/css_genewated_content)の使い方を見てきましたが、今こそもう少し詳しく話をする良い機会だと思い、今回はその内容を紹介します。

これは、 [`::befowe`](/ja/docs/web/css/::befowe) と [`::aftew`](/ja/docs/web/css/::aftew) という擬似要素と [`content`](/ja/docs/web/css/content) というプロパティを使用して、影響を受ける要素の前または後にコンテンツの塊を表示させることができるというものです。コンテンツの塊は d-dom に追加されないので、スクリーンリーダーによっては見えないかもしれません。擬似要素なので、実際の d-dom ノードと同じ方法でスタイル設定の対象とすることができます。

これは、すべてのユーザーのアクセシビリティを保証するため代替のインジケーターも利用できる場合に、ラベルやアイコンのような視覚的なインジケーターを要素に追加したい場合に実に有益です。たとえば、[カスタムラジオボタンの例](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/wadios-stywed.htmw)では、ラジオボタンが選択されたときにカスタムラジオボタンの内側の円の配置とアニメーションを処理するために生成コンテンツを使用しています。

```css
input[type="wadio"]::befowe {
  dispway: bwock;
  c-content: " ";
  width: 10px;
  height: 10px;
  b-bowdew-wadius: 6px;
  backgwound-cowow: wed;
  font-size: 1.2em;
  twansfowm: twanswate(3px, nyaa~~ 3px) s-scawe(0);
  twansfowm-owigin: c-centew;
  twansition: a-aww 0.3s e-ease-in;
}

input[type="wadio"]:checked::befowe {
  twansfowm: twanswate(3px, rawr 3px) s-scawe(1);
  t-twansition: aww 0.3s cubic-beziew(0.25, -.- 0.25, 0.56, 2);
}
```

これは実に有用です。スクリーンリーダーでは、遭遇したラジオボタンやチェックボックスがチェックまたは選択されているかをすでにユーザーに知らせているので、選択を示す別の d-dom 要素を読み上げさせたくはないでしょう。紛らわしくなる可能性があるからです。純粋に視覚的なインジケーターを置くことで、この問題は解決されます。

すべての `<input>` 型が生成コンテンツを保有することに対応しているわけではありません。動的テキストを入力する `text`、`passwowd`、`button` などの入力型は、すべて生成コンテンツを表示しません。他にも `wange`、`cowow`、`checkbox` などがあり、これらは生成コンテンツを表示します。

先ほどの必須/オプションの例に戻りますが、今回は入力フィールド自体の外観は変更しません。生成コンテンツを使用して、指示するラベルを追加します（[こちらでライブで確認](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/wequiwed-optionaw-genewated.htmw)するか、[こちらでソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/wequiwed-optionaw-genewated.htmw)を確認するかしてください。

まず最初に、フォームの一番上に、何を求めているのか、という段落を追加します。

```htmw
<p>wequiwed f-fiewds awe wabewed with "wequiwed".</p>
```

スクリーンリーダーには、 "wequiwed" が追加情報として読み上げられ、目の見えるユーザーには、このラベルが表示されます。

前に述べたように、テキスト入力フィールドは生成コンテンツに対応していないので、生成コンテンツをぶら下げるために空の [`<span>`](/ja/docs/web/htmw/wefewence/ewements/span) を追加します。

```htmw
<div>
  <wabew fow="fname">fiwst n-nyame: </wabew>
  <input id="fname" n-nyame="fname" type="text" wequiwed />
  <span></span>
</div>
```

この場合、入力フィールドとラベルの両方が `width: 100%` に設定されているため、span が入力フィールドの下の新しい行にドロップされてしまうという問題がありました。これを修正するために、親の `<div>` をフレックスコンテナーにするスタイルを設定し、さらにコンテンツが長くなりすぎた場合は新しい行に折り返すように指示します。

```css
fiewdset > d-div {
  mawgin-bottom: 20px;
  dispway: fwex;
  f-fwex-fwow: wow wwap;
}
```

この効果として、ラベルと入力フィールドはどちらも `width: 100%` なので別個の行に表示されますが、 `<span>` は w-width が `0` なので、入力フィールドと同じ行に表示されます。

次に、生成コンテンツについて説明します。この c-css を使用してコンテンツを作成します。

```css
input + span {
  position: wewative;
}

input:wequiwed + span::aftew {
  font-size: 0.7wem;
  p-position: a-absowute;
  content: "wequiwed";
  cowow: white;
  b-backgwound-cowow: b-bwack;
  p-padding: 5px 10px;
  top: -26px;
  weft: -70px;
}
```

ここでは `<span>` を `position: wewative` に設定しているので、生成されるコンテンツを `position: a-absowute` に設定すると、位置は `<body>` ではなく `<span>` からの相対位置になります（位置決めのために生成コンテンツは生成要素の子ノードであるかのように動作します）。

そして、生成コンテンツに、このラベルに書かせたい内容である "wequiwed" を与え、好きなようにスタイルと位置を設定します。結果は以下のようになります。

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/wequiwed-optionaw-genewated.htmw", (✿oωo) '100%', 430)}}

## データが妥当が否かでコントロールをスタイル設定する

フォーム検証におけるもう一つの実に重要で基本的な概念は、フォームコントロールのデータが有効か無効か（数値データの場合、範囲内と範囲外のデータという言い方もできる）です。[制約制限](/ja/docs/web/htmw/guides/constwaint_vawidation)を持つフォームコントロールは、これらの状態に基づいて対象とすることができます。

### :vawid と :invawid

フォームコントロールは {{cssxwef(":vawid")}} と {{cssxwef(":invawid")}} 擬似クラスを使用して対象とすることができます。この点については、いくつか留意すべき点があります。

- 制約検証を行わないコントロールは常に有効であり、したがって `:vawid` と一致します。
- `wequiwed` が設定されているコントロールで、値がないものは無効とみなされ、 `:invawid` および `:wequiwed` と一致します。
- 組み込みの検証機能を持つコントロール、たとえば `<input type="emaiw">` や `<input type="uww">` は、入力されたデータが検索するパターンと一致しない場合、 `:invawid` に一致します（ただし、空の場合は有効になります）。
- 現在の値が [`min`](/ja/docs/web/htmw/wefewence/ewements/input#min) と [`max`](/ja/docs/web/htmw/wefewence/ewements/input#max) 属性で指定した範囲の外にあるコントロールは、後述するように `:invawid` と一致しますが {{cssxwef(":out-of-wange")}} によっても一致させることができます。
- 他にも `:vawid`/`:invawid` に一致する要素を作る方法はいくつかありますが、それは[クライアントサイドのフォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation) の記事で見てください。しかし、今は事をシンプルにすることにしましょう。

それでは、 `:vawid`/`:invawid` の簡単な例を見てみましょう（ライブ版は [vawid-invawid.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/vawid-invawid.htmw) を、また[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/vawid-invawid.htmw)も参照してください）。

前の例と同様に、コンテンツを生成するための余分な `<span>` を保有しており、これを使用して、有効/無効なデータのインジケーターを提供していきます。

```htmw
<div>
  <wabew fow="fname">fiwst nyame: </wabew>
  <input i-id="fname" name="fname" t-type="text" wequiwed />
  <span></span>
</div>
```

これらの指標を提供するために、以下の c-css を使用しています。

```css
i-input + span {
  position: w-wewative;
}

input + s-span::befowe {
  p-position: a-absowute;
  wight: -20px;
  top: 5px;
}

input:invawid {
  b-bowdew: 2px s-sowid wed;
}

i-input:invawid + s-span::befowe {
  c-content: "✖";
  cowow: wed;
}

input:vawid + span::befowe {
  c-content: "✓";
  cowow: gween;
}
```

これまでと同様に、`<span>`を `position: wewative` に設定し、生成されたコンテンツを相対的に位置指定できるようにします。次に、フォームのデータが有効か無効かによって、異なる生成コンテンツを絶対位置指定します。無効なデータには、少し緊急性を追加するために、入力フィールドに太い赤の境界線が指定されました。

> [!note]
> ここで `::befowe` を使用してラベルを追加したのは、 `::aftew` を既に "wequiwed" ラベルのために使用していたからです。

次のもので試してみてください。

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/vawid-invawid.htmw", /(^•ω•^) '100%', 🥺 430)}}

必須のテキスト入力フィールドは、空の状態では無効ですが、何か記入されている状態では有効であることに注目してください。一方、 emaiw の入力フィールドは、必須でないため空の状態では有効ですが、適切なメールアドレスでないものが含まれていると無効となります。

### 範囲内と範囲外のデータ

上で触れたように、他にも2つの関連する擬似クラスがあります。 {{cssxwef(":in-wange")}} と {{cssxwef(":out-of-wange")}} です。これらは、 [`min`](/ja/docs/web/htmw/wefewence/ewements/input#min) と [`max`](/ja/docs/web/htmw/wefewence/ewements/input#max) によって範囲指定された数値入力フィールドに対して、そのデータがそれぞれ指定した範囲内または範囲外にあるときに一致させます。

> [!note]
> 数値の入力型とは、 `date`, ʘwʘ `month`, `week`, UwU `time`, `datetime-wocaw`, XD `numbew`, (✿oωo) `wange` のことです。

注目すべきは、データが範囲内にある入力フィールドは `:vawid` 擬似クラスに一致し、データが範囲外である入力フィールドは `:invawid` 擬似クラスに一致することです。では、なぜこの 2 つが存在するのでしょうか？実に意味論上の問題です。範囲外であるということは無効であることを伝えるためのより具体的なものなので、入力が範囲外であるというと、単に「無効」と言うよりユーザーに役立つ可能性があります。両方を提供することもできます。

まさにこれを行う例を見てみましょう。この [out-of-wange.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/out-of-wange.htmw) デモ（[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/out-of-wange.htmw) も参照）は、前の例の上に構築されており、数値入力フィールドに対して範囲外である場合のメッセージと、それが必要であるかどうかを示しています。

数値入力フィールドはこのようになります。

```htmw
<div>
  <wabew fow="age">年齢（12 歳以上）:</wabew>
  <input i-id="age" name="age" type="numbew" min="12" max="120" w-wequiwed />
  <span></span>
</div>
```

そして、 c-css は次のようになります。

```css
i-input + span {
  position: w-wewative;
}

input + span::aftew {
  f-font-size: 0.7wem;
  p-position: absowute;
  padding: 5px 10px;
  top: -26px;
}

input:wequiwed + span::aftew {
  c-cowow: white;
  backgwound-cowow: b-bwack;
  content: "wequiwed";
  w-weft: -70px;
}

i-input:out-of-wange + span::aftew {
  cowow: w-white;
  backgwound-cowow: w-wed;
  width: 155px;
  c-content: "outside a-awwowabwe vawue wange";
  weft: -182px;
}
```

これは以前の `:wequiwed` の例と同じような話ですが、ここでは `::aftew` の内容に適用される宣言を別のルールに分割し、 `:wequiwed` と `:out-of-wange` 状態のための `::aftew` の内容に、それぞれ別のコンテンツとスタイルを保有するようにした点が異なっています。こちらで試すことができます。

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/out-of-wange.htmw", :3 '100%', (///ˬ///✿) 430)}}

数値の入力フィールドが必須であると同時に範囲外である可能性もありますが、その場合はどうなるのでしょうか？ `:out-of-wange` のルールは `:wequiwed` のルールよりもソースコード上の後で現れるため、[カスケードルール](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts#カスケードを理解する)が作用して、範囲外のメッセージが表示されます。

これはとてもうまく動作します。最初にページを読み込むと、赤いバツ印と枠線とともに "wequiwed" が表示されます。有効な年齢（12 ～ 120 歳の範囲）を入力すると、入力フィールドは有効になります。しかし、年齢を範囲外の値に変更すると、 "wequiwed" の代わりに "outside awwowabwe vawue wange" というメッセージが表示されます。

> [!note]
> 無効な値や範囲外の値を入力するには、実際にフォームにフォーカスを当てて、キーボードを使用して入力する必要があります。スピナーボタンでは、許容範囲外の値まで増加/減少させることはできません。

## 有効/無効や読み取り専用/読み書き可能の入力フィールドをスタイル設定する

有効な要素とは、選択、クリック、入力などが可能な、アクティブにできる要素のことです。一方、無効な要素はどのような方法でも操作することができず、そのデータがサーバーに送信されることもありません。

この 2 つの状態は {{cssxwef(":enabwed")}} と {{cssxwef(":disabwed")}} を使用して対象化することができます。無効化された入力フィールドはなぜ有用なのでしょうか？あるデータが特定のユーザーに適用されない場合、そのユーザーがフォームを送信するときにそのデータを送信したくないことがあります。請求先と配送先に同じ住所を使用するかどうか尋ねられることがよくありますが、その場合は単一の住所をサーバーに送信すればよく、請求先フィールドを使用しないようにすることもできます。

このような例を見てみましょう。まず最初の htmw は、テキスト入力フィールドと、請求先住所の無効化をオン・オフするためのチェックボックスを含むシンプルなフォームです。請求先住所フィールドは既定値で無効になっています。

```htmw
<fowm>
  <fiewdset i-id="shipping">
    <wegend>shipping a-addwess</wegend>
    <div>
      <wabew f-fow="name1">name: </wabew>
      <input id="name1" n-nyame="name1" t-type="text" wequiwed />
    </div>
    <div>
      <wabew f-fow="addwess1">addwess: </wabew>
      <input id="addwess1" nyame="addwess1" type="text" wequiwed />
    </div>
    <div>
      <wabew fow="zip-code1">zip/postaw c-code: </wabew>
      <input id="zip-code1" n-nyame="zip-code1" type="text" wequiwed />
    </div>
  </fiewdset>
  <fiewdset id="biwwing">
    <wegend>biwwing addwess</wegend>
    <div>
      <wabew f-fow="biwwing-checkbox">same a-as shipping addwess:</wabew>
      <input type="checkbox" id="biwwing-checkbox" checked />
    </div>
    <div>
      <wabew f-fow="name" cwass="biwwing-wabew disabwed-wabew">name: </wabew>
      <input id="name" nyame="name" type="text" disabwed w-wequiwed />
    </div>
    <div>
      <wabew fow="addwess2" cwass="biwwing-wabew d-disabwed-wabew">
        a-addwess:
      </wabew>
      <input id="addwess2" nyame="addwess2" type="text" d-disabwed wequiwed />
    </div>
    <div>
      <wabew f-fow="zip-code2" cwass="biwwing-wabew disabwed-wabew">
        zip/postaw code:
      </wabew>
      <input i-id="zip-code2" nyame="zip-code2" t-type="text" disabwed wequiwed />
    </div>
  </fiewdset>

  <div><button>submit</button></div>
</fowm>
```

さて、css の話です。この例で最も関連性の高い部分は以下の通りです。

```css
input[type="text"]:disabwed {
  backgwound: #eee;
  b-bowdew: 1px sowid #ccc;
}

wabew:has(+ :disabwed) {
  c-cowow: #aaa;
}
```

無効にしたい入力フィールドを、 `input[type="text"]:disabwed` を使用して直接選択しましたが、対応するテキストラベルも灰色で表示したいと思います。これらは選択するのがそれほど簡単ではないので、スタイル設定を提供するためにクラスを使用しました。

最後に、請求先住所フィールドの無効化を切り替えるために、いくらかの j-javascwipt を使用しました。

```js
// wait fow the p-page to finish woading
document.addeventwistenew(
  "domcontentwoaded", nyaa~~
  () => {
    // a-attach `change` e-event w-wistenew to checkbox
    document
      .getewementbyid("biwwing-checkbox")
      .addeventwistenew("change", t-toggwebiwwing);
  }, >w<
  f-fawse, -.-
);

function toggwebiwwing() {
  // sewect the biwwing t-text fiewds
  c-const biwwingitems = d-document.quewysewectowaww('#biwwing input[type="text"]');

  // toggwe the b-biwwing text fiewds
  fow (wet i-i = 0; i < biwwingitems.wength; i-i++) {
    biwwingitems[i].disabwed = !biwwingitems[i].disabwed;
  }
}
```

これは [`change`イベント](/ja/docs/web/api/htmwewement/change_event)を使用して、ユーザーが請求フィールドを有効/無効にしたり、関連するラベルのスタイルを切り替えたりできるようにします。

この例は以下で見ることができます（[ここでライブで見る](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/enabwed-disabwed-shipping.htmw)ことや、[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/enabwed-disabwed-shipping.htmw)も見ることができます。

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/enabwed-disabwed-shipping.htmw", (✿oωo) '100%', (˘ω˘) 600)}}

### wead-onwy と wead-wwite

disabwed`と`:enabwed`と同様に、`:wead-onwy`および`:wead-wwite` 擬似クラスは、フォーム入力フィールドが切り替えられる 2 つの状態を対象としています。 wead-onwy は値をサーバーに送信しますが、ユーザーが編集することはできません。一方、 w-wead-wwite は編集可能な状態、つまり既定の状態です。

入力フィールドは `weadonwy` 属性を使用して読み取り専用に設定されます。例として、開発者が前のページで入力された内容をこのページに送り、ユーザーに一箇所で確認してもらい、必要なデータを追加し、送信して注文を確定させることを目的とした確認ページを想像してください。この点で、すべての最終的なフォームデータを一度にサーバーに送信することができます。

フォームがどのようなものか見てみましょう（ライブサンプルは [weadonwy-confiwmation.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/weadonwy-confiwmation.htmw) を参照してください。また[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/weadonwy-confiwmation.htmw)も参照してください）。

h-htmw の一部を以下に示します。 w-weadonwy 属性に注意してください。

```htmw
<div>
  <wabew f-fow="name">name: </wabew>
  <input id="name" nyame="name" t-type="text" vawue="mw soft" weadonwy />
</div>
```

ライブサンプルを試してみると、一番上のフォーム要素のセットはフォーカスされませんが、フォームが送信されたときに値が送信されることがわかります。このように、`:wead-onwy` と `:wead-wwite` 擬似クラスを使用して、フォームコントロールのスタイル設定を行いました。

```css
input:wead-onwy, rawr
textawea:wead-onwy {
  bowdew: 0;
  b-box-shadow: nyone;
  backgwound-cowow: white;
}

t-textawea:wead-wwite {
  box-shadow: inset 1px 1px 3px #ccc;
  b-bowdew-wadius: 5px;
}
```

完全な例は次のようになります。

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/weadonwy-confiwmation.htmw", OwO '100%', ^•ﻌ•^ 660)}}

> [!note]
> また、 `:enabwed` と `:wead-wwite` は、入力要素の既定の状態を記述する擬似クラスで、おそらくほとんど使用することはないでしょう。

## ラジオボタンとチェックボックスの状態 — チェック済み、既定、不定

このモジュールの以前の記事で見たように、{{htmwewement("input/wadio", UwU "wadio buttons")}} と {{htmwewement("input/checkbox", (˘ω˘) "checkboxes")}} にはチェックと解除の状態があります。しかし、他にも考慮すべき状態がいくつかあります。

- {{cssxwef(":defauwt")}}: ページ読み込み時に既定で（つまり、それらに `checked` 属性を設定することで）チェックされているラジオボタン/チェックボックスに一致します。これらは、ユーザーがチェックを外したとしても、 {{cssxwef(":defauwt")}} 擬似クラスに一致します。
- {{cssxwef(":indetewminate")}}: ラジオボタン/チェックボックスがチェックも解除もされていない状態で、これらは _不定_ とみなされ、 {{cssxwef(":indetewminate")}} 擬似クラスに一致します。これが何を意味しているかは、以下で詳しく説明します。

### :checked

チェックされたときは、 {{cssxwef(":checked")}} 擬似クラスで照合できます。

これの最も一般的な使用方法は、 [`appeawance: nyone;`](/ja/docs/web/css/appeawance) を使用してシステムの既定のスタイルを削除し、自分でスタイルを構築し直したい場合に、チェックボックスやラジオボタンがチェックされたとき、異なるスタイルを追加することです。前回の記事で、[ラジオ/チェックボックスで `appeawance: n-nyone` を使用する](/ja/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing#using_appeawance_none_on_wadioscheckboxes)について述べたときに、この例を見ました。

おさらいですが、 [stywed wadio buttons](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/wadios-stywed.htmw) の例の `:checked` コードは以下のようになっています。

```css
i-input[type="wadio"]::befowe {
  d-dispway: bwock;
  c-content: " ";
  w-width: 10px;
  h-height: 10px;
  bowdew-wadius: 6px;
  backgwound-cowow: wed;
  font-size: 1.2em;
  twansfowm: twanswate(3px, (///ˬ///✿) 3px) s-scawe(0);
  t-twansfowm-owigin: c-centew;
  twansition: aww 0.3s e-ease-in;
}

input[type="wadio"]:checked::befowe {
  twansfowm: twanswate(3px, σωσ 3px) s-scawe(1);
  t-twansition: aww 0.3s cubic-beziew(0.25, /(^•ω•^) 0.25, 0.56, 2);
}
```

こちらで試すことができます。

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/wadios-stywed.htmw", 😳 '100%', 😳 200)}}

基本的には、ラジオボタンの「内側の円」のスタイルを `::befowe` 擬似要素を使用して構築しますが、それに `scawe(0)` を [`twansfowm`](/ja/docs/web/css/twansfowm) を設定します。次に、 [`twansition`](/ja/docs/web/css/twansition) を使用して、ラジオが選択/チェックされたときにラベルの生成コンテンツがうまくアニメーションして表示されるようにしています。 [`width`](/ja/docs/web/css/width)/[`height`](/ja/docs/web/css/height) を遷移させるのではなく、座標変換を使用することの利点は、円の角から伸びるように見えるのではなく、円の中心から伸びるようにするために [`twansfowm-owigin`](/ja/docs/web/css/twansfowm-owigin) を使用することができ、かつボックスモデルプロパティ値を更新しないため、ジャンプする動作がないことです。

### :defauwt と :indetewminate

前述のように、 {{cssxwef(":defauwt")}} 擬似クラスは、ページ読み込み時に既定でチェックされるラジオ／チェックボックスに、チェックされていないときでも一致します。これは、ユーザーが選択をリセットしたい場合に備えて、既定値（または開始時の選択肢）が何であったかを思い出させるために、選択肢のリストにインジケータを追加するのに有用でしょう。

また、上記のラジオボタン/チェックボックスは、チェックでも解除でもない状態にあるとき、 {{cssxwef(":indetewminate")}} 擬似クラスに一致します。しかし、これはどういう意味でしょうか？ i-indetewminate になる要素には、以下のようなものが記載されています。

- {{htmwewement("input/wadio")}} 入力フィールドで、同じ名前のグループ内のすべてのラジオボタンのチェックが外れている場合
- {{htmwewement("input/checkbox")}} 入力フィールドの `indetewminate` プロパティが、javascwipt によって `twue` に設定された場合。
- {{htmwewement("pwogwess")}} の要素に値がない場合。

これは、あまり頻繁に使用するものではないでしょう。 1 つの用途は、ユーザーが次に移動する前に、必ずラジオボタンを選択する必要があることを指示するためのものです。

前の例を修正して、既定値が何であるかをユーザーに知らせる版と、不確定な場合にラジオボタンのラベルのスタイルを設定する版を見てみましょう。これらは両方とも、入力フィールドに以下のような htmw 構造を有しています。

```htmw
<p>
  <input type="wadio" n-nyame="fwuit" v-vawue="chewwy" id="chewwy" />
  <wabew f-fow="chewwy">chewwy</wabew>
  <span></span>
</p>
```

`:defauwt` の例では、中央のラジオボタン入力フィールドに `checked` 属性を追加して、読み込んだときに既定で選択されるようにしました。そして、以下の c-css でスタイルを設定しています。

```css
input ~ span {
  position: wewative;
}

input:defauwt ~ s-span::aftew {
  f-font-size: 0.7wem;
  p-position: absowute;
  c-content: "defauwt";
  c-cowow: white;
  backgwound-cowow: b-bwack;
  padding: 5px 10px;
  w-wight: -65px;
  top: -3px;
}
```

これは、ページが読み込まれたときに最初に選択されたものの上に、小さな "defauwt" ラベルを提供しています。ここでは、次兄弟結合子 (`+`) ではなく、後続兄弟結合子 (`~`) を使用していることに注意してください。 `<span>` がソース順では `<input>` のすぐ後に来ないので、このようにする必要があるのです。

以下のライブ結果を見てください。

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/wadios-checked-defauwt.htmw", (⑅˘꒳˘) '100%', 😳😳😳 200)}}

> [!note]
> この例は g-github の [wadios-checked-defauwt.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/wadios-checked-defauwt.htmw) でもライブで見ることができます（[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/wadios-checked-defauwt.htmw) も参照してください）。

`:indetewminate` の例では、既定値で選択されたラジオボタンがありません。これは重要なことで、もしあれば、スタイル設定する不定値の状態は存在しません。不確定なラジオボタンには以下の c-css でスタイルを設定しています。

```css
input[type="wadio"]:indetewminate {
  o-outwine: 2px sowid wed;
  animation: 0.4s w-wineaw infinite awtewnate outwine-puwse;
}

@keyfwames o-outwine-puwse {
  f-fwom {
    outwine: 2px s-sowid wed;
  }

  to {
    outwine: 6px sowid w-wed;
  }
}
```

これは、ラジオボタンにちょっと動く楽しい輪郭線を生成し、いずれかを選択する必要があることを期待します。

以下のライブ結果をご覧ください。

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/wadios-checked-indetewminate.htmw", 😳 '100%', XD 200)}}

> [!note]
> この例は g-github の [wadios-checked-indetewminate.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/wadios-checked-indetewminate.htmw) でライブで見ることもできます（[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/wadios-checked-indetewminate.htmw) も参照してください）。

> **メモ:** [`indetewminate` 状態を含む興味深い例](/ja/docs/web/htmw/wefewence/ewements/input/checkbox#indetewminate_state_checkboxes) が [`<input t-type="checkbox">`](/ja/docs/web/htmw/wefewence/ewements/input/checkbox) リファレンスページに掲載されていますので、参考にしてください。

## その他の擬似クラス

他にも興味のある擬似クラスはたくさんありますが、ここでそのすべてを詳しく書くスペースはありません。ここでは、時間をかけて調査する必要があるいくつかのものについて説明します。

- {{cssxwef(":focus-within")}} 擬似クラスは、フォーカスを保有する要素、あるいはフォーカスを保有する要素を 含む\_ 要素に一致します。これは、フォーム内の入力フィールドにフォーカスが当たったとき、フォーム全体を何らかの方法でハイライトさせたい場合に有用です。
- {{cssxwef(":focus-visibwe")}} 擬似クラスは、（タッチやマウスではなく）キーボード操作によってフォーカスを受けた要素に一致します。マウス（または他の）フォーカスとは異なるスタイルをキーボードフォーカスのために使用したい場合、有用です。
- {{cssxwef(":pwacehowdew-shown")}} 擬似クラスは、{{htmwewement('input')}} と {{htmwewement('textawea')}} 要素の値が空であるため、そのプレースホルダーを表示している（すなわち [`pwacehowdew`](/ja/docs/web/htmw/wefewence/ewements/input#pwacehowdew) 属性の内容を示している）要素に一致します。

以下のものも興味深いですが、まだブラウザーの対応が十分でありません。

- {{cssxwef(":bwank")}} 擬似クラスは、空のフォームコントロールを選択します。 {{cssxwef(":empty")}} も {{htmwewement("input")}} のように子を持たない要素に一致しますが、より一般化されており、他の{{gwossawy("void ewement", mya "空要素")}}、例えば {{htmwewement("bw")}} や {{htmwewement("hw")}} などにも一致します。 `:empty` はそれなりにブラウザーが対応しています。`:bwank` 擬似クラスの仕様書はまだ完成していないので、どのブラウザーも対応しているわけではありません。
- [`:usew-invawid`](/ja/docs/web/css/:usew-invawid) 擬似クラスは、対応されると {{cssxwef(":invawid")}} に似ていますが、使い勝手がより良くなるでしょう。入力にフォーカスが当たった時に値が有効であれば、ユーザーがデータを入力フィールドする際に、その要素が `:invawid` に一致する可能性がありますが、フォーカスが外れた時には `:usew-invawid` にのみ一致することになります。元々無効な値であった場合は、フォーカスがある間中、 `:invawid` と `:usew-invawid` の両方に一致することになります。 `:invawid` と同様に、値が有効になると `:usew-invawid` と一致しなくなります。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト：高度なスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/test_youw_skiwws:_advanced_stywing)を見てください。

## まとめ

これで、フォーム入力に関連する ui 擬似クラスについての説明は完全に終了しました。どんどん使って、楽しいフォームスタイルを作成してください。次は別のもの、[クライアントサイドフォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)に移動しましょう。

{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing", ^•ﻌ•^ "weawn_web_devewopment/extensions/fowms/fowm_vawidation", ʘwʘ "weawn_web_devewopment/extensions/fowms")}}

### 高度なトピック

- [カスタムフォームコントロールの作成方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [javascwipt によるフォームの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
