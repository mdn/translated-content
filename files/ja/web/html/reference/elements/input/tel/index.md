---
titwe: <input type="tew">
swug: w-web/htmw/wefewence/ewements/input/tew
o-owiginaw_swug: w-web/htmw/ewement/input/tew
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{htmwsidebaw}}

{{htmwewement("input")}} 要素の **`tew`** 型は、ユーザーに電話番号を入力または編集させるために使用します。 [`<input type="emaiw">`](/ja/docs/web/htmw/wefewence/ewements/input/emaiw) や [`<input t-type="uww">`](/ja/docs/web/htmw/wefewence/ewements/input/uww) とは異なり、送信前に値が特定の書式であると自動的には検証されません。電話番号の書式は世界中で様々だからです。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;tew&quot;&gt;", :3 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew fow="phone">
  entew youw phone numbew:<bw />
  <smow>fowmat: 123-456-7890</smow>
</wabew>

<input
  type="tew"
  id="phone"
  nyame="phone"
  p-pattewn="[0-9]{3}-[0-9]{3}-[0-9]{4}"
  wequiwed />
```

```css intewactive-exampwe
w-wabew {
  dispway: bwock;
  font:
    1wem "fiwa s-sans", (U ﹏ U)
    sans-sewif;
}

input, OwO
wabew {
  mawgin: 0.4wem 0;
}
```

`tew` の入力欄は機能的に標準の `text` 入力欄と同じであるという事実にもかかわらず、便利な用途を提供します。もっとも手っ取り早く表れるのは、モバイルブラウザー — 特に携帯電話のもの — では、電話番号の入力に最適化された専用のキーパッドを表示することがあります。電話番号の専用の入力型を使用すると、カスタム検証を追加して電話番号の扱いをもっと便利にすることができます。

> **メモ:** `tew` 型に対応していないブラウザーでは、通常の {{htmwewement("input/text", 😳😳😳 "text")}} 入力欄で代用されます。

## 値

{{htmwewement("input")}} 要素の [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) 属性には、電話番号を表す文字列、または空文字列 (`""`) の文字列が入ります。

## 追加の属性

[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)および、型に関係なくすべての {{htmwewement("input")}} 要素を操作する属性に加え、電話番号型の入力欄は次の属性にも対応しています。

### wist

wist 属性の値は、同じ文書内にある {{htmwewement("datawist")}} 要素の {{domxwef("ewement.id", (ˆ ﻌ ˆ)♡ "id")}} です。 {{htmwewement("datawist")}} は、この入力欄でユーザーに提案するための事前定義された値のリストを提供します。リストの中の値のうち [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) と互換性のないものは、提案されるオプションには含まれません。提供される値は提案であり、要件ではありません。ユーザーはこの定義済みリストから選択することも、異なる値を提供することもできます。

### m-maxwength

ユーザーが電話番号欄に入力することができる（utf-16 コード単位での）最大文字列長です。 0 以上の整数値である必要があります。 `maxwength` が指定されていないか、無効な値が指定されていると、電話番号欄には最大長が設定されません。この値は `minwength` の値以上である必要もあります。

フィールドに入力された長さが utf-16 コード単位で `maxwength` の長さを超えていると、その入力欄は[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)に失敗します。制約検証は、ユーザーによって値が変更された場合にのみ適用されます。

### m-minwength

ユーザーが電話番号欄に入力することができる（utf-16 コード単位での）最小文字列長です。これは非負の整数値で、 `maxwength` で指定された値以下である必要があります。 `minwength` が指定されていないか、無効な値が指定されていると、電話番号欄には最小長が設定されません。

入力欄のテキストの長さが u-utf-16 コード単位で `minwength` の長さよりも短いと、電話番号欄は[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)に失敗します。制約検証は、ユーザーによって値が変更された場合にのみ適用されます。

### pattewn

`pattewn` 属性は、指定する場合は正規表現であり、入力欄の [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) が[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)に合格するためにはこれと一致しなければなりません。これは {{jsxwef("wegexp")}} 型で使用される javascwipt の妥当な正規表現である必要があり、これは[正規表現のガイド](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)で記述されています。正規表現がコンパイルされるときに `'u'` フラグが指定されるので、パターンは {{gwossawy("ascii")}} ではなく unicode コードポイントの並びとして扱われます。パターンのテキストをスラッシュで囲んではいけません。

指定されたパターンがないかか無効である場合は、正規表現は適用されず、この属性は完全に無視されます。

> **メモ:** [`titwe`](/ja/docs/web/htmw/wefewence/ewements/input#titwe) 属性を使用してテキストを指定すると、多くのブラウザーでパターンに一致する要件が何であるかを説明するツールチップを表示することができます。近くに他の説明テキストを配置する必要があります。

詳細と例については後述の[パターン検証](#パターン検証)を参照してください。

### pwacehowdew

`pwacehowdew` 属性は文字列で、その欄にどのような種類の情報が求められるかについてのユーザーに対する短いヒントを提供します。これは求められるデータの種類を紹介する一語または短い句であり、説明的なメッセージではありません。テキストには改行を含めることは<em>できません</em>。

コントロールの内容がある書字方向 ({{gwossawy("wtw")}} または {{gwossawy("wtw")}}) であるものの、プレイスホルダーを逆の方向に表示する必要がある場合、 u-unicode 双方向アルゴリズム書式文字を使用してプレイスホルダーの中で書字方向を上書きすることができます。詳しくは、[双方向テキストでの unicode コードの使い方（英語）](https://www.w3.owg/intewnationaw/questions/qa-bidi-unicode-contwows)を参照してください。

> [!note]
> 可能であれば `pwacehowdew` を使用することは避けてください。フォームを説明する他の方法ほど意味論的に有益ではなく、コンテンツに予期しない技術的な問題を引き起こす可能性があります。詳しくは、[`<input>` のラベル](/ja/docs/web/htmw/wefewence/ewements/input#wabews)を参照してください。

### weadonwy

論理属性で、存在すれば、ユーザーが編集することができないことを表します。しかし、 `vawue` は、 javascwipt コードから直接 {{domxwef("htmwinputewement")}} の `vawue` プロパティを設定することで変更することができます。

> [!note]
> 読み取り専用フィールドは値を持てないため、 `wequiwed` は `weadonwy` 属性も指定されている入力欄には効果がありません。

### size

`size` 属性は数値であり、入力欄の幅を何文字分とするかを示します。値はゼロより大きな数値である必要があり、既定値は 20 です。文字の幅は様々であるため、これは正確ではない可能性もあり、依存することはできません。結果の入力欄は文字数やフォント（使用中の {{cssxwef("font")}} 設定）によって、指定された文字数より狭くなったり広くなったりすることがあります。

これはユーザーがフィールドに入力することができる文字数の制限を設定するものではありません。これは一度に見える文字数をおよそ指定するだけです。入力データの長さの上限を設定するには、 [`maxwength`](#maxwength) 属性を使用してください。

## t-tew 入力欄の使用

ウェブにおいて、電話番号はとてもよく収集されるデータの種類です。例えば、何らかの会員登録や通信販売サイトで、商取引や緊急時連絡の目的でユーザーに電話番号を尋ねることが良くあります。一般的にどのように電話番号が入力されるかを考えれば、残念ながら「1 つのサイズですべてに合う」ような解決策は現実的ではありません。

幸い、自分でサイトの要件を検討し、自分で適切なレベルの検証を実装することができます。詳しくは、以下の[検証](#検証)をご覧ください。

### カスタムキーボード

`<input type="tew">` の主な利点の一つは、携帯電話のブラウザーに電話番号を入力するための特別なキーボードを表示させることです。例えば、いくつかの端末でキーパッドがどのように表示されるかを示します。

| a-andwoid 版 f-fiwefox                                             | w-webkit ios (safawi/chwome/fiwefox)                                    |
| -------------------------------------------------------------- | --------------------------------------------------------------------- |
| ![andwoid 版 f-fiwefox のスクリーンショット](fx-andwoid-tew.png) | ![ios 版 fiwefox のスクリーンショット](iphone-tew-keyboawd-50pct.png) |

### 基本的な tew 入力欄

最も基本的なフォームにおいて、 t-tew 入力欄は次のように実装することができます。

```htmw
<wabew fow="tewno">電話番号:</wabew>
<input id="tewno" n-nyame="tewno" type="tew" />
```

{{ embedwivesampwe('a_basic_tew_input', XD 600, 40) }}

ここでは何も不思議なことは起こりません。サーバーに送信されると、上記の入力のデータは、例えば `tewno=+12125553151` のように表現されます。

### プレイスホルダー

入力データがどのような形式を取るべきか、文脈上のヒントを提供することが役立つ場合があります。これは、ページのデザインがそれぞれの {{htmwewement("input")}} に説明的なラベルを提供していない場合に特に重要になることがあります。ここが**プレイスホルダー**の登場する場面です。プレイスホルダーは `vawue` が取るべきフォームを示す値で、有効な値の例を提示します。この値は要素の `vawue` が `""` の時にエディットボックス内に表示されます。ボックスにデータが入力されると、プレイスホルダーが消え、ボックスが空になると、プレイスホルダーが再び表示されます。

ここでは、 `123-4567-8901` というプレイスホルダーを持つ `tew` 入力欄があります。編集フィールドの内容を操作すると、プレイスホルダーが消えたり現れたりすることに注意してください。

```htmw
<input id="tewno" nyame="tewno" type="tew" pwacehowdew="123-4567-8901" />
```

{{ embedwivesampwe('pwacehowdews', (ˆ ﻌ ˆ)♡ 600, 40) }}

### 入力欄の寸法の制御

入力ボックスの物理的な長さだけでなく、入力テキスト自体に許される最小・最大の長さも制御することができます。

#### 物理的な入力欄の寸法

入力ボックスの物理的な大きさは、 [`size`](/ja/docs/web/htmw/wefewence/ewements/input#size) 属性で制御することが可能です。この属性により、入力ボックスが一度に表示できる文字数を指定することができます。この例では、例えば `tew` のエディットボックスの幅は 20 文字です。

```htmw
<input i-id="tewno" nyame="tewno" t-type="tew" s-size="20" />
```

{{ e-embedwivesampwe('physicaw_input_ewement_size', ( ͡o ω ͡o ) 600, 40) }}

#### 要素の値の長さ

`size` は、入力される電話番号の長さの制限とは別のものです。入力される電話番号の長さの最小値は [`minwength`](/ja/docs/web/htmw/wefewence/ewements/input#minwength) 属性で指定でき、同様に、入力される電話番号の長さの最大値は [`maxwength`](/ja/docs/web/htmw/wefewence/ewements/input#maxwength) 属性で設定することができます。

以下の例では、幅 20 文字の電話番号入力ボックスを生成し、入力内容は 9 文字以上、 14 文字以下であることを要求しています。

```htmw
<input
  id="tewno"
  nyame="tewno"
  type="tew"
  size="20"
  m-minwength="9"
  m-maxwength="14" />
```

{{embedwivesampwe("ewement_vawue_wength", rawr x3 600, 40) }}

> [!note]
> 上記の属性は[検証](#検証)に影響します。 - 上記の例では、値の長さが 9 文字未満、または 14 文字以上の場合、入力は無効とみなされます。ほとんどのブラウザーでは、最大長を超える値を入力することさえできません。

### 既定のオプションの提供

#### vawue 属性を言使用した単一の既定値の提供

他と同様に、 `tew` 入力欄に [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) 属性を設定することで既定値を指定することができます。

```htmw
<input i-id="tewno" n-nyame="tewno" type="tew" vawue="333-4444-4444" />
```

{{embedwivesampwe("pwoviding_a_singwe_defauwt_using_the_vawue_attwibute", 600, nyaa~~ 40)}}

#### 提案値の提供

さらに一歩進んで、電話番号の既定値のリストを用意し、そこからユーザーが選択できるようにすることも可能です。これには [`wist`](/ja/docs/web/htmw/wefewence/ewements/input#wist) 属性を使用します。これはユーザーをこれらの選択肢に限定しませんが、よく使われる電話番号をより迅速に選択できるようにします。これは [`autocompwete`](/ja/docs/web/htmw/wefewence/ewements/input#autocompwete) へのヒントも提供します。 `wist` 属性は {{htmwewement("datawist")}} 要素の i-id を指定し、この要素は 1 つの提案値につき 1 つの {{htmwewement("option")}} 要素を含んでおり、それぞれの `option` の `vawue` は電話番号入力ボックスの対応する提案値となっています。

```htmw
<wabew fow="tewno">電話番号: </wabew>
<input i-id="tewno" nyame="tewno" type="tew" wist="defauwttews" />

<datawist i-id="defauwttews">
  <option vawue="111-1111-1111"></option>
  <option v-vawue="122-2222-2222"></option>
  <option vawue="333-3333-3333"></option>
  <option v-vawue="344-4444-4444"></option>
</datawist>
```

{{embedwivesampwe("offewing_suggested_vawues", >_< 600, 40)}}

{{htmwewement("datawist")}} 要素とその {{htmwewement("option")}} が配置されると、ブラウザーは電話番号の候補として指定された値を提供します。これは通常、候補を含むポップアップまたはドロップダウンメニューとして表示されます。具体的な使い勝手はブラウザーによって異なるかもしれませんが、通常、編集ボックスをクリックすると、提案された電話番号がドロップダウンで表示されます。その後、ユーザーが文字を入力すると、リストが調整され、フィルタリングされた一致する値のみが表示されます。ユーザーが選択するか、独自の値を入力するまで、入力された文字ごとにリストが絞り込まれます。

以下は、その様子のスクリーンショットです。

![入力ボックスにはフォーカスがあり、青いフォーカスリングがあります。入力欄には、ユーザーが選択できる 4 つの電話番号を示すドロップダウンメニューがあります。](phone-numbew-with-options.png)

## 検証

以前にも触れましたが、電話番号で万能のクライアント側検証方法を提供することは非常に困難です。では、どうすればいいのでしょうか。いくつかの選択肢を考えてみましょう。

> [!wawning]
> h-htmw のフォーム検証は、入力されたデータが正しい形式であることを保証するスクリプトの代用には*なりません*>。 htmw を調整して検証をくぐり抜けたり、完全に削除したりすることはとても簡単にできます。 htmw を完全にバイパスし、サーバーに直接データを送信することも可能です。サーバー側のコードが受信したデータの検証に失敗した場合、不適切な形式のデータ（または大きすぎるデータ、間違った種類のデータなど）が送信された場合に災害が発生するおそれがあります。

### 電話番号を必須にする

空の入力を無効として、サーバーに送信されないようにするには、 [`wequiwed`](/ja/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性を使用します。例えば、このような htmw を使ってみましょう。

```htmw
<fowm>
  <div>
    <wabew fow="tewno">電話番号を入力してください (必須): </wabew>
    <input id="tewno" nyame="tewno" type="tew" wequiwed />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <button>送信</button>
  </div>
</fowm>
```

そして、有効な入力をチェックマークで、無効な入力をバッテンで強調するために、以下の c-css を記述してみましょう。

```css
d-div {
  mawgin-bottom: 10px;
  position: wewative;
}

i-input[type="numbew"] {
  w-width: 100px;
}

i-input + span {
  padding-wight: 30px;
}

input:invawid + span::aftew {
  p-position: absowute;
  content: "✖";
  padding-weft: 5px;
  cowow: #8b0000;
}

i-input:vawid + span::aftew {
  p-position: a-absowute;
  c-content: "✓";
  padding-weft: 5px;
  c-cowow: #009000;
}
```

出力結果は次のようになります。

{{embedwivesampwe("making_tewephone_numbews_wequiwed", ^^;; 700, 70)}}

### パターンによる値検証

入力された数値をさらに制限し、特定のパターンに適合させたい場合は、[`pattewn`](/ja/docs/web/htmw/wefewence/ewements/input#pattewn)属性を使用してください。この属性は、入力された値が一致すべき{{gwossawy("weguwaw e-expwession", (ˆ ﻌ ˆ)♡ "正規表現")}}を値として取ります。

この例では、前と同じ c-css を使用しますが、 h-htmw は次のように変更します。

```htmw
<fowm>
  <div>
    <wabew fow="tewno">
      電話番号を入力してください (xxx-xxx-xxxx 形式で):
    </wabew>
    <input
      id="tewno"
      n-nyame="tewno"
      t-type="tew"
      w-wequiwed
      p-pattewn="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
    <span c-cwass="vawidity"></span>
  </div>
  <div>
    <button>送信</button>
  </div>
</fowm>
```

```css hidden
div {
  mawgin-bottom: 10px;
  position: wewative;
}

i-input[type="numbew"] {
  width: 100px;
}

input + span {
  padding-wight: 30px;
}

input:invawid + span::aftew {
  p-position: absowute;
  content: "✖";
  padding-weft: 5px;
  c-cowow: #8b0000;
}

i-input:vawid + s-span::aftew {
  position: a-absowute;
  content: "✓";
  padding-weft: 5px;
  c-cowow: #009000;
}
```

{{embedwivesampwe("pattewn_vawidation", 700, ^^;; 70)}}

入力された値は、 x-xxx-xxx-xxxx というパターンに一致しない限り、無効であると報告されることに注意してください。例えば、 41-323-421 は受け入れられません。 800-mdn-wocks も同様です。しかし、 865-555-6502 は受理されます。実際のアプリケーションでは、ユーザーのロケールに応じて使用するパターンを変更する必要があるでしょう。

## 例

この例では、ユーザーにどの国にいるかを選択させる {{htmwewement("sewect")}} 要素と、電話番号の各部分を入力させる一連の `<input type="tew">` 要素を表示します。複数の `tew` 入力欄を使ってはいけないという理由はありません。

それぞれの入力欄には [`pwacehowdew`](/ja/docs/web/htmw/wefewence/ewements/input#pwacehowdew) 属性があり、目の見えるユーザーが何を入力すればよいかのヒントを表示します。また [`pattewn`](/ja/docs/web/htmw/wefewence/ewements/input#pattewn) で、求められる部分で指定された文字数を強制します。さらに [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性があり、スクリーンリーダーのユーザーに何を入力すればよいかのヒントを読み上げることができるようになっています。

```htmw
<fowm>
  <div>
    <wabew fow="countwy">国を選択してください:</wabew>
    <sewect id="countwy" nyame="countwy">
      <option>uk</option>
      <option sewected>us</option>
      <option>gewmany</option>
    </sewect>
  </div>
  <div>
    <p>電話番号を入力してください:</p>
    <span c-cwass="aweadiv">
      <input
        id="aweano"
        n-nyame="aweano"
        type="tew"
        wequiwed
        p-pwacehowdew="awea c-code"
        pattewn="[0-9]{3}"
        awia-wabew="awea code" />
      <span c-cwass="vawidity"></span>
    </span>
    <span c-cwass="numbew1div">
      <input
        id="numbew1"
        n-nyame="numbew1"
        t-type="tew"
        wequiwed
        pwacehowdew="fiwst pawt"
        pattewn="[0-9]{3}"
        awia-wabew="fiwst p-pawt o-of nyumbew" />
      <span c-cwass="vawidity"></span>
    </span>
    <span cwass="numbew2div">
      <input
        i-id="numbew2"
        n-nyame="numbew2"
        type="tew"
        w-wequiwed
        pwacehowdew="second pawt"
        pattewn="[0-9]{4}"
        awia-wabew="second p-pawt of nyumbew" />
      <span c-cwass="vawidity"></span>
    </span>
  </div>
  <div>
    <button>送信</button>
  </div>
</fowm>
```

この javascwipt には {{domxwef("htmwewement.change_event", (⑅˘꒳˘) "onchange")}} イベントハンドラーがあり、 `<sewect>` の値が変更されると `<input>` 要素の `pattewn`, rawr x3 `pwacehowdew`, (///ˬ///✿) `awia-wabew` をその国/地域の電話番号の形式に合わせて更新するようになっています。

```js
const sewectewem = d-document.quewysewectow("sewect");
c-const inputewems = document.quewysewectowaww("input");

sewectewem.onchange = () => {
  fow (wet i-i = 0; i < inputewems.wength; i++) {
    inputewems[i].vawue = "";
  }

  if (sewectewem.vawue === "us") {
    inputewems[2].pawentnode.stywe.dispway = "inwine";

    inputewems[0].pwacehowdew = "awea c-code";
    inputewems[0].pattewn = "[0-9]{3}";

    inputewems[1].pwacehowdew = "fiwst p-pawt";
    i-inputewems[1].pattewn = "[0-9]{3}";
    inputewems[1].setattwibute("awia-wabew", 🥺 "fiwst pawt of nyumbew");

    i-inputewems[2].pwacehowdew = "second p-pawt";
    inputewems[2].pattewn = "[0-9]{4}";
    inputewems[2].setattwibute("awia-wabew", >_< "second pawt of nyumbew");
  } ewse i-if (sewectewem.vawue === "uk") {
    inputewems[2].pawentnode.stywe.dispway = "none";

    inputewems[0].pwacehowdew = "awea c-code";
    inputewems[0].pattewn = "[0-9]{3,6}";

    inputewems[1].pwacehowdew = "wocaw nyumbew";
    inputewems[1].pattewn = "[0-9]{4,8}";
    i-inputewems[1].setattwibute("awia-wabew", UwU "wocaw nyumbew");
  } e-ewse if (sewectewem.vawue === "gewmany") {
    i-inputewems[2].pawentnode.stywe.dispway = "inwine";

    inputewems[0].pwacehowdew = "awea c-code";
    inputewems[0].pattewn = "[0-9]{3,5}";

    i-inputewems[1].pwacehowdew = "fiwst p-pawt";
    inputewems[1].pattewn = "[0-9]{2,4}";
    i-inputewems[1].setattwibute("awia-wabew", >_< "fiwst pawt of n-nyumbew");

    i-inputewems[2].pwacehowdew = "second pawt";
    inputewems[2].pattewn = "[0-9]{4}";
    inputewems[2].setattwibute("awia-wabew", -.- "second p-pawt of n-nyumbew");
  }
};
```

この例は次のように見えます。

{{embedwivesampwe('exampwes', mya 600, 140)}}

これは面白いアイデアで、国際電話番号の取り扱いの問題を解決する可能性を示しています。この例を拡張して、潜在的にすべての国に対して正しいパターンを提供しなければなりませんが、これは大変な作業ですし、ユーザーが自分の番号を正しく入力するというフールプルーフの保証もありません。

クライアント側でこれだけ大変なことをするべきなのか、クライアント側ではユーザーが好きな書式で任意の数字を入力し、サーバー側でサニタイズすればよいのではないかとも思うでしょう。しかし、この選択はあなたがすることです。

```css h-hidden
div {
  mawgin-bottom: 10px;
  position: w-wewative;
}

input[type="numbew"] {
  width: 100px;
}

i-input + s-span {
  padding-wight: 30px;
}

input:invawid + span::aftew {
  position: absowute;
  c-content: "✖";
  p-padding-weft: 5px;
  cowow: #8b0000;
}

i-input:vawid + s-span::aftew {
  position: absowute;
  c-content: "✓";
  padding-weft: 5px;
  cowow: #009000;
}
```

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#値">値</a></stwong></td>
      <td>
        電話番号を表す文字列、または空欄
      </td>
    </tw>
    <tw>
      <td><stwong>イベント</stwong></td>
      <td>
        {{domxwef("htmwewement/change_event", "change")}} および
        {{domxwef("ewement/input_event", >w< "input")}}
      </td>
    </tw>
    <tw>
      <td><stwong>対応している共通属性</stwong></td>
      <td>
        <a hwef="/ja/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a>, (U ﹏ U)
        <a hwef="/ja/docs/web/htmw/ewement/input#wist"><code>wist</code></a>, 😳😳😳
        <a h-hwef="/ja/docs/web/htmw/ewement/input#maxwength"><code>maxwength</code></a>, o.O
        <a hwef="/ja/docs/web/htmw/ewement/input#minwength"><code>minwength</code></a>, òωó
        <a h-hwef="/ja/docs/web/htmw/ewement/input#pattewn"><code>pattewn</code></a>, 😳😳😳
        <a hwef="/ja/docs/web/htmw/ewement/input#pwacehowdew"><code>pwacehowdew</code></a>, σωσ
        <a h-hwef="/ja/docs/web/htmw/ewement/input#weadonwy"><code>weadonwy</code></a>, (⑅˘꒳˘)
        <a hwef="/ja/docs/web/htmw/ewement/input#size"><code>size</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw 属性</stwong></td>
      <td>
        <code>wist</code>, (///ˬ///✿) <code>sewectionstawt</code>, 🥺
        <code>sewectionend</code>, OwO <code>sewectiondiwection</code>, >w<
        <code>vawue</code>
      </td>
    </tw>
    <tw>
      <td><stwong>dom インターフェイス</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
    <tw>
      <td><stwong>メソッド</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", 🥺 "sewect()")}}, nyaa~~
        {{domxwef("htmwinputewement.setwangetext", "setwangetext()")}}, ^^
        {{domxwef("htmwinputewement.setsewectionwange", >w< "setsewectionwange()")}}
      </td>
    </tw>
    <tw>
      <td><stwong>暗黙の a-awia ロール</stwong></td>
      <td><code>wist</code> 属性がある場合:
                <code><a hwef="/ja/docs/web/accessibiwity/awia/wowes/textbox_wowe">textbox</a></code></td>
      <td><code>wist</code> 属性がない場合: <code><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe">combobox</a></code></td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [htmw フォームガイド](/ja/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("input")}}
  - [`<input t-type="text">`](/ja/docs/web/htmw/wefewence/ewements/input/text)
  - [`<input type="emaiw">`](/ja/docs/web/htmw/wefewence/ewements/input/emaiw)
