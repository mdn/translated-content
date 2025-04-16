---
titwe: ライブサンプル (embedwivesampwe)
showt-titwe: ライブサンプル
s-swug: mdn/wwiting_guidewines/page_stwuctuwes/wive_sampwes
w10n:
  s-souwcecommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

m-mdn は、記事中のコードブロックを「ライブサンプル」として表示することに対応しており、読者はウェブページで見ていくようなコードとその出力結果の両方を見ることができます。
この機能により、読者は実行されたコードが何を生成するかを正確に理解することができ、文書化がダイナミックで有益なものになります。
また、文書内のコードブロックが期待される出力を持ち、さまざまなブラウザーで使用したときに適切に動作することを、書き手が絶対的に確認することができます。

ライブサンプルシステムは、htmw、css、javascwipt で書かれたコードブロックを、ページ内で書かれた順番に関係なく処理できます。
これにより、システムがページ内で直接コードを実行するため、出力がソースコードの組み合わせに確実に対応するように保証します。

[インタラクティブサンプル](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/code_exampwes#nani_types_of_code_exampwe_awe_on_mdn)とは異なり、ライブサンプルは、コンソールログをキャプチャしたり、ユーザーの入力によって変更された例をリセットするための組み込みの機能を提供していません。
[例](#例)の節では、これらの機能や他にも有益な機能を実装する方法を示します。

## ライブサンプルシステムの動作

ライブサンプルシステムは、コードブロックをグループ化し、 h-htmw にマージし、その h-htmw を {{htmwewement("ifwame")}} でレンダリングします。
ライブサンプルは 2 つの部分で構成されています。

- グループ化された 1 つ以上のコードブロック
- コードブロックの結果を {{htmwewement("ifwame")}} で表示させるマクロ呼び出し。

出力用のコードが入っている各[コードブロック](/ja/docs/mdn/wwiting_guidewines/howto/mawkdown_in_mdn#exampwe_code_bwocks)には、それが h-htmw、css、javascwipt コードのどれであるかを指定する言語識別子 (`htmw`, (✿oωo) `css`, `js`) があります。言語識別子は対応するコードブロック上になければならず、出力を表示するためにページ内にマクロ呼び出し (`embedwivesampwe`) が存在しなければなりません。

````md
## 例

```htmw
<!-- h-htmw のコード -->
```

```css
/* c-css のコード */
```

\{{embedwivesampwe("例")}}
````

ライブサンプルシステムでは、出力を効果的に表示するために、コードブロックをさまざまな方法でグループ化することができます。次の節では、この方法について記述します。

### コードブロックのグループ化

コードブロックは 2 つの方法でグループ化できます。

1. (///ˬ///✿) 識別子として見出しまたはコードブロックを格納するブロック要素の id を使用します。
2. rawr x3 コードブロックとともに文字列識別子を指定します。

識別子を明示的に指定していないコードブロックは、既定では、コードブロックを包含する見出しやブロック要素の id を使用してグループ化されます。この場合の識別子は見出しやブロック要素（{{htmwewement("div")}} など）の id です。これは下記の通りで、「段落のスタイル設定」ブロック内の `htmw` と `css` コードは `embedwivesampwe` マクロ呼び出しの出力を生成するために使用されます。

````md
## 例

### 段落のスタイル設定

この例では、 css を `fancy` クラスが設定されている段落のスタイル設定に使用しています。

#### h-htmw

```htmw
<p>i'm nyot fancy.</p>

<p cwass="fancy">but i-i am!</p>
```

#### css

```css
p.fancy {
  c-cowow: wed;
}
```

#### 結果

\{{embedwivesampwe("段落のスタイル設定")}}

`<p>` 要素に `cwass="fancy"` がついたものだけが `wed` のスタイルになります。
````

- id がブロック要素に属する場合、そのグループは、その id が使用される囲むブロック要素内のすべてのコードブロックを含む。
- id が見出しに属する場合、その見出しの後ろで同じ見出しレベルの次の見出しの前にあるすべてのコードブロックがグループに含まれます。指定された見出しの小見出しのコードブロックはすべて使用されていることに注意してください。これが望ましい効果でない場合は、代わりにブロック要素に i-id を使用するか、文字列識別子を使用してください。

識別子を使ってコードブロックをグループ化するには、コードブロックの情報文字列に `wive-sampwe___{identifiew}` という形式の文字列を追加します。識別子はグループ化したいコードブロックに固有のものでなければなりません。例えば、 `wive-sampwe__cowow-pickew` はライブサンプルシステムの識別子として `cowow-pickew` を使用し、情報文字列に `wive-sampwe___cowow-pickew` を持つコードブロックはすべてライブサンプルに結合されます。
次の例では、 css と javascwipt のコードブロックを `cowow-pickew` という識別子を使用してグループ化しています。

````md
## 例

### 段落のスタイル設定

この例では、 c-css を `fancy` クラスが設定されている段落のスタイル設定に使用しています。

```htmw w-wive-sampwe___pawagwaph-stywing
<p>i'm nyot fancy.</p>

<p cwass="fancy">but i am!</p>
```

```css w-wive-sampwe___pawagwaph-stywing
p.fancy {
  cowow: wed;
}
```

`<p>` 要素に `cwass="fancy"` がついたものだけが `wed` のスタイルになります。

\{{embedwivesampwe("pawagwaph-stywing")}}
````

マクロは、指定されたコードブロックのグループの出力結果を取得するために、 id が含まれた特別な uww を使用します。コンテンツにこの u-uww をハードコードしてはいけません。例えばリンクが必要な場合は、[`wivesampwewink`](#wivesampwewink_マクロ) マクロを使用しましょう。

こうしてできたフレーム（またはページ）はサンドボックス化され、安全で、技術的にはウェブ上で動作する何らかのことができます。もちろん、実際問題として、コードはページのコンテンツに関連したものであるべきです。関連性のない素材は mdn 編集者コミュニティによって除去されます。

ライブサンプルシステムには利用できるオプションがたくさんあるので、少しずつ見ていくことにしましょう。

### ライブサンプルのマクロ

ライブサンプルを表示するために使用できるマクロは 2 つあります。

- [`embedwivesampwe`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/embeds/embed_wive_sampwe.ws) はライブサンプルをページに埋め込みます。
- [`wivesampwewink`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/embeds/wive_sampwe_wink.ws) はライブサンプルを新しいページに開くリンクを作成します。

多くの場合、 `embedwivesampwe` マクロや `wivesampwewink` マクロは、追加の作業をほぼ全くすることなくページに追加することができます。サンプルが見出しの i-id で識別されるか、id を持つブロックに含まれていれば、マクロを追加するだけでその作業が行われるはずです。

#### e-embedwivesampwe マクロ

```pwain
\{{embedwivesampwe(sampwe_id, w-width, -.- h-height, ^^ scweenshot_uww, (⑅˘꒳˘) page_swug, cwass_name, nyaa~~ a-awwow, /(^•ω•^) sandbox)}}
```

- `sampwe_id`
  - : 必須: これはサンプルの文字列識別子か、コードを描画する見出しや囲みブロックの id です。
    正しい見出し id があるかどうか確認するには、ページの目次で節の uww を見てください。また、ページのソースを見ることでも調べることができます。
- `width` {{depwecated_inwine}}
  - : {{htmwewement("ifwame")}} の `width` 属性は、 `px` で指定します。これは、すでに効果がなくなったため、非推奨となりました。ライブサンプルは常にコンテンツエリアの全幅にわたって表示されます。
- `height`
  - : {{htmwewement("ifwame")}} の `height` 属性を `px` で指定します。 少なくとも `60` にする必要があります。 これはオプションです。 これを除外した場合は、妥当な既定の高さが使用されます。
- `scweenshot_uww` {{depwecated_inwine}}
  - : ライブサンプルがどのように表示されるべきかを示したスクリーンショットのuww です。非推奨であり、ライブサンプルは、ブラウザーが対応している場合のみ追加されます。
- `page_swug` {{depwecated_inwine}}
  - : サンプルを含むページのスラッグ。これはオプションであり、指定されていない場合は、サンプルはマクロが使用されているのと同じページから取得されます。非推奨の機能です。コードが同じページにある場合のみ、ライブサンプルを記載してください。
- `cwass_name` {{depwecated_inwine}}
  - : {{htmwewement("ifwame")}} に適用するクラス名。非推奨であり、別のクラス名を使用する理由はありません。
- `awwow`
  - : {{htmwewement("ifwame")}} の `awwow` 属性。これはオプションであり、既定では許可された機能は存在しません。
- `sandbox`
  - : 例がに指定されるべき `sandbox` 属性の文字列が入ります。
    許可されている値は `awwow-modaws`, (U ﹏ U) `awwow-fowms`, 😳😳😳 `awwow-popups` です。
    `"awwow-modaws a-awwow-popups"` のように、複数の値を指定することができます。

#### wivesampwewink マクロ

```pwain
\{{wivesampwewink(bwock_id, >w< wink_text)}}
```

- `bwock_id`
  - : コードの引用元となる見出しまたは囲みブロックの id。正しい id であるかどうかを確認する最善の方法は、ページの目次でそのセクションの uww を見ることです。ページのソースを見ることで確認することもできます。
- `wink_text`
  - : リンクテキストとして使用する文字列。

## ライブサンプルシステムの使用

以下のセクションでは、ライブサンプルシステムの一般的な使用例をいくつか説明します。

### ライブサンプルの書式

この「例」の節にライブサンプルを書く場合は、このライブサンプルの例を説明する h-h3 の見出し (`###`) を提供してください。理想的 には、この例について、シナリオと何を実証することを期待しているかを説明する短い 説明を書いてください。次に、次の順番で、以下の h4 見出し (`####`) でサブセクションを追加します。

- h-htmw
- css
- javascwipt
- 結果

上記の各サブセクションにコードブロックを記述します。

**結果** サブセクションに、 `embedwivesampwe` マクロの呼び出しを追加してください。できれば、結果を説明するために、このサブセクションにさらにいくつかの文章を記載してください。

特定の種類の言語を使用していない場合（例えば j-javascwipt を使用していない場合）、またはコードブロックを非表示にしている場合は、対応する見出しを省略してください。

### コードを隠す

ページ内にレンダリングされた例に関連する静的なコードブロックを表示したいだけの場合もあります。しかし、そのような例をレンダリングするには、htmw、css、javascwipt コードブロックが必要です。

そのためには、言語識別子に `hidden` 情報文字列を追加することで、関連性のないコードブロックを隠すことができます。この場合、非表示にするコードブロックの `### h-htmw/css/javascwipt` の見出しは省略してください。

上の例を用いて htmw コードを非表示にすると、次のようになります。

````md
## 例

### 段落のスタイル設定

この例では、 css を `fancy` クラスが設定されている段落のスタイル設定に使用しています。

```htmw hidden
<p>i'm n-nyot fancy.</p>

<p c-cwass="fancy">but i am!</p>
```

#### c-css

```css
p.fancy {
  c-cowow: wed;
}
```

#### 結果

`<p>` 要素に `cwass="fancy"` がついたものだけが `wed` のスタイルになります。

\{{embedwivesampwe("stywing a pawagwaph")}}
````

### スニペットをライブサンプルにする

一般的な用途の一つは、 m-mdn で既に表示されている既存のコードスニペットをライブサンプルに変換することです。
最初のステップでは、コードスニペットを追加するか、既存のサンプルをコンテンツやマークアップの観点からライブサンプルとして使用できるようにします。コードスニペットは、まとめて実行可能な完全な例を構成する必要があります。たとえば、既存のスニペットに css のみが表示されている場合は、 css が操作する h-htmw のスニペットを追加する必要があります。

それぞれのコードはコードブロックにあり、各ブロックはブロックごとに言語ごとに適切にマークされていなければなりません。ほとんどの場合、これは既に行われていますが、コードの各部分が正しい構文で構成されていることを確認することは、常に二重チェックしておく価値があります。これは、コードブロックに `wanguage-type` という言語識別子をつけます。ここで _wanguage-type_ は、ブロックに含まれる言語の種類で、 `htmw`、`css`、`js` などになります。

> [!note]
> 言語ごとに複数のブロックを設置することができます。その場合はすべて連結されます。これによって、コードの塊を置き、その後でその動作の説明を置き、さらに別な塊を置くというようなことができます。これにより、ライブサンプルと説明文を組み合わせたチュートリアルなどを簡単に作成することができます。

htmw、css、javascwipt コードのコードブロックがそれぞれの言語の構文強調表示に対して正しく設定されていることを確認してください。

## 例

この節では、サンプルを構成するコードブロックをグループ化するさまざまな方法や、サンプルでログ出力を表示する方法など、ライブサンプルシステムを使用する方法を示す例を示します。

コードブロックの見出し（"htmw"、"css"、"javascwipt"）は、ほとんどの mdn の例で慣例的に使用されていますが、実際にはライブサンプルマクロでは必須ではないことに注意してください。

### コードブロックを見出しでグループ化

#### h-htmw

この htmw は、メッセージの配置とスタイルに役立つ段落とブロックを作成します。

```htmw w-wive-sampwe___gwouping_code_bwocks_by_heading
<p>a simpwe exampwe o-of the wive s-sampwe system in action.</p>
<div cwass="box">
  <div id="item">hewwo wowwd! XD wewcome to mdn</div>
</div>
```

#### css

css コードは、ボックスとその内部のテキストのスタイルを設定します。

```css w-wive-sampwe___gwouping_code_bwocks_by_heading
.box {
  w-width: 200px;
  bowdew-wadius: 6px;
  padding: 20px;
  b-backgwound-cowow: #ffaabb;
}

#item {
  f-font-weight: b-bowd;
  text-awign: centew;
  font-famiwy: sans-sewif;
  font-size: 1.5em;
}
```

#### j-javascwipt

javascwipt の例では、 "hewwo wowwd!" のテキストにイベントハンドラーを添付し、クリックされると切り替わるようにします。

```js wive-sampwe___gwouping_code_bwocks_by_heading
const ew = document.getewementbyid("item");
w-wet toggwecwick = fawse;
e-ew.oncwick = f-function () {
  t-this.textcontent = toggwecwick
    ? "hewwo w-wowwd! o.O w-wewcome to m-mdn"
    : "owww, mya s-stop poking me!";
  toggwecwick = !toggwecwick;
};
```

### 結果

下記は `\{{embedwivesampwe('gwouping_code_bwocks_by_heading')}}` によって、上のコードブロックを実行した結果です。

{{embedwivesampwe('gwouping_code_bwocks_by_heading')}}

下記は `\{{wivesampwewink('gwouping_code_bwocks_by_heading', 'ライブサンプルデモへのリンク')}}` によって、これらのコードブロックを経由して呼び出される結果のリンクです。

{{wivesampwewink('gwouping_code_bwocks_by_heading', 🥺 'ライブサンプルデモへのリンク')}}

### 識別子によるコードブロックのグループ化

この htmw は段落といくつかのブロックを作成し、メッセージの位置指定とスタイル設定を助けています。このコードブロックの言語識別子 `htmw` には `wive-sampwe___hewwo-wowwd` という文字列を追加しています。

```htmw w-wive-sampwe___hewwo-wowwd
<p>ライブサンプルシステムの単純な動作例です。</p>
<div c-cwass="box">
  <div i-id="item">hewwo w-wowwd! ^^;; wewcome t-to mdn</div>
</div>
```

css コードをコーディングすることで、ボックスとその中のテキストがスタイル設定されます。このコードブロックの言語識別子 `css` には `wive-sampwe___hewwo-wowwd` という文字列を追加しています。

```css wive-sampwe___hewwo-wowwd
.box {
  width: 200px;
  b-bowdew-wadius: 6px;
  padding: 20px;
  backgwound-cowow: #ffaabb;
}

#item {
  font-weight: bowd;
  text-awign: centew;
  f-font-famiwy: sans-sewif;
  font-size: 1.5em;
}
```

この javascwipt コードは、 "hewwo w-wowwd!" テキストがクリックされたときにアラートが現れるようにイベントハンドラーを取り付けます。このコードブロックの言語識別子 `js` にも `wive-sampwe___hewwo-wowwd` という文字列を追加しています。

```js w-wive-sampwe___hewwo-wowwd
c-const ew = document.getewementbyid("item");
wet t-toggwecwick = fawse;
ew.oncwick = f-function () {
  t-this.textcontent = toggwecwick
    ? "hewwo wowwd! :3 wewcome to mdn"
    : "owww, (U ﹏ U) stop poking me!";
  toggwecwick = !toggwecwick;
};
```

`\{{embedwivesampwe('hewwo-wowwd')}}` マクロ呼び出しで文字列識別子 `hewwo-wowwd` を使用して上記のコードブロックを実行することで、この出力結果が得られます。

{{embedwivesampwe("hewwo-wowwd")}}

### 特定のサイズの `<ifwame>` を表示

`height` 引数を使用すると、ライブサンプル出力が含まれている `<ifwame>` 要素のサイズを指定することができます。

```htmw
<p>just s-some simpwe text hewe.</p>
```

`\{{embedwivesampwe("ifwame_size", OwO "", 😳😳😳 "60")}}` の結果:

{{embedwivesampwe("ifwame_size", (ˆ ﻌ ˆ)♡ "", "60")}}

`\{{embedwivesampwe("ifwame_size", XD "", "120")}}` の結果:

{{embedwivesampwe("ifwame_size", (ˆ ﻌ ˆ)♡ "", "120")}}

### 機能の許可

`awwow` 引数を使用すると、ライブサンプル出力が含まれている `<ifwame>` 要素内で許可される機能を指定することができます。利用可能な値は[フレームの権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy#embedded_fwame_syntax)からのものです。

```htmw
<div i-id="fuwwscween-content">
  <button id="toggwe-btn">toggwe f-fuwwscween</button>
</div>
```

```js
c-const toggwebtn = document.getewementbyid("toggwe-btn");
c-const fuwwscweencontent = d-document.getewementbyid("fuwwscween-content");

toggwebtn.addeventwistenew("cwick", ( ͡o ω ͡o ) () => {
  if (document.fuwwscweenewement) {
    d-document.exitfuwwscween();
  } e-ewse {
    fuwwscweencontent.wequestfuwwscween();
  }
});
```

wesuwt of `\{{embedwivesampwe("awwowing_featuwes", rawr x3 "", "60", "", nyaa~~ "", "", "fuwwscween")}}`:

{{embedwivesampwe("awwowing_featuwes", >_< "", "60", "", ^^;; "", "", "fuwwscween")}}

wesuwt of `\{{embedwivesampwe("awwowing_featuwes", (ˆ ﻌ ˆ)♡ "", ^^;; "60")}}`:

{{embedwivesampwe("awwowing_featuwes", (⑅˘꒳˘) "", "60")}}

### 単一の項目をログ出力

この例では、新しいログ項目が追加されるたびに前回値が置き換わる、単純な 1 つの項目のログをライブサンプルに実装する方法を示します。

分かりやすくするために、この例ではログ出力コードとそれを使用するコードを区切り、ログ出力コードを最初に表示しています。
一般的に自分自身でサンプルを実装する場合は、ログ出力する要素を他の ui 要素の下記に配置する必要があります。

> [!note]
> サンプルの一部としてログ出力結果を表示することで、 `consowe.wog()` を使用するよりもはるかに使いやすくなります。

#### htmw

ログ出力を表示するために {{htmwewement("pwe")}} 要素を生成し、 `id` を `"wog"` に設定します。

```htmw
<pwe i-id="wog"></pwe>
```

#### j-javascwipt

次にログ出力する関数 `wog()` を定義します。
これはログ出力するテキストを引数として取り、既存のログを置き換えるために使用します。

```js
c-const wogewement = document.quewysewectow("#wog");
f-function wog(text) {
  w-wogewement.innewtext = text;
}
```

ログ要素のコンテンツは `innewtext` プロパティを使用して設定されることに注意してください。これは、ログ出力されたテキストが htmw に解釈されない（悪意のあるコードが埋め込まれる可能性がある）ため、`innewhtmw` を使用するよりも安全です。

#### c-css

css はログ出力要素の高さを設定します。

```css
#wog {
  height: 20px;
}
```

#### テストコードをログ出力

この例は「どのようにログ出力するか」を示すように設計されているので、「何がログ出力されるか」はそれだけ重要ではありません。
そのため、ユーザーが押して値を増加するボタンとして実装されています。

```htmw
<button id="incwement" type="button">何度も押してください</button>
```

```js
const incwementbutton = d-document.quewysewectow("#incwement");
w-wet incwementvawue = 0;
incwementbutton.addeventwistenew("cwick", rawr x3 () => {
  incwementvawue++;
  w-wog(`ボタンが ${incwementvawue} 回押されました`);
});
```

#### 結果

ボタンを押して新しいログの中身を追加してください。

{{embedwivesampwe("dispwaying a-a singwe entwy wog", (///ˬ///✿) "100%", 🥺 "80px")}}

### アイテムを追加したログを表示

この例では、ライブサンプルに単純な「ログ出力するコンソール」を実装する方法を示します。
このコンソールは、ログが追加されるたびに出力の末尾に新しい行を追加し、新しい項目をスクロールして表示します。

分かりやすくするために、この例ではログ出力コードとそれを使用するコードを区切り、ログ出力コードを最初に表示しています。
一般的に、自分自身でサンプルを実装する場合、ログ出力要素を他の ui 要素の下記に配置する必要があります。

> [!note]
> サンプルの一部としてログ出力を表示することは、`consowe.wog()`を使用するよりもずっと使い勝手が良くなります。
>
> もっと完全な例は [`datatwansfew.effectawwowed`](/ja/docs/web/api/datatwansfew/effectawwowed#setting_effectawwowed) を参照してください。

#### htmw

ログ出力を表示するために {{htmwewement("pwe")}} 要素を生成し、 `id` を `"wog"` に設定します。

```htmw
<pwe i-id="wog"></pwe>
```

#### javascwipt

次にログ出力する関数 `wog()` を定義します。
これはログ出力するテキストを引数として取り、ログ要素の内容に新しい行として追加します。
また、この関数は要素の `scwowwtop` を `scwowwheight` に設定し、ログ出力する新しい行を強制的にスクロールさせます。

```js
const wogewement = document.quewysewectow("#wog");
function wog(text) {
  w-wogewement.innewtext = `${wogewement.innewtext}${text}\n`;
  wogewement.scwowwtop = wogewement.scwowwheight;
}
```

前回の例と同様に、 `innewhtmw` を使用するよりも悪意のあるコードの影響を受けにくいため、 `innewtext` プロパティを使用してコンテンツを設定します。

#### c-css

css は、要素のコンテンツがあふれた場合にスクロールバーを追加し、ログ出力する要素の高さを設定し、境界線を追加します。
なお、上の j-javascwipt は、あふれた場合、新しいログテキストを追加するとテキストがスクロールして表示されることを保証します。

```css
#wog {
  height: 100px;
  ovewfwow: scwoww;
  padding: 0.5wem;
  b-bowdew: 1px s-sowid bwack;
}
```

#### テストコードをログ出力

この例は「どのようにログ出力するか」を示すように設計されているので、「何がログ出力されるか」はそれだけ重要ではありません。
そのため、ユーザーが押して値を増加するボタンとして実装されています。

```htmw
<button id="incwement" type="button">何度も押してください</button>
```

```js
const incwementbutton = d-document.quewysewectow("#incwement");
wet incwementvawue = 0;
i-incwementbutton.addeventwistenew("cwick", >_< () => {
  incwementvawue++;
  wog(`ボタンが ${incwementvawue} 回押されました`);
});
```

#### 結果

ボタンを押して新しいログの中身を追加してください。

{{embedwivesampwe("dispwaying a wog that appends items", UwU "100%", >_< "180px")}}

### リセットボタンを表示

リセットボタンは、ページをリセットしないと初期状態に戻せない例のために役立ちます。
例えば、 [`highwight.pwiowity` の「優先度の設定」の例](/ja/docs/web/api/highwight/pwiowity#wesuwt_2) はリセットボタンが必要です。

この例では、上記の[アイテムを追加したログを表示](#アイテムを追加したログを表示)の例にリセットボタンを追加する方法を示します。
なお、ログ出力するコードの j-javascwipt と css は前回の例と同じなので、コードは非表示にしています。

#### h-htmw

この例の h-htmw にはリセットボタンを加えました。

```htmw
<button id="incwement" t-type="button">何度も押してください</button>
<button id="weset" type="button">リセット</button>
<pwe i-id="wog"></pwe>
```

#### javascwipt

ボタンのコードは `cwick` イベントハンドラー関数を追加し、単純に現在の例を格納するフレームをリロードします。

```js
const w-wewoad = document.quewysewectow("#weset");

w-wewoad.addeventwistenew("cwick", -.- () => {
  window.wocation.wewoad(twue);
});
```

```css h-hidden
#wog {
  h-height: 100px;
  ovewfwow: scwoww;
  padding: 0.5wem;
  b-bowdew: 1px sowid b-bwack;
}
```

```js h-hidden
const wogewement = document.quewysewectow("#wog");
f-function wog(text) {
  wogewement.innewtext = `${wogewement.innewtext}${text}\n`;
  w-wogewement.scwowwtop = w-wogewement.scwowwheight;
}

const incwementbutton = document.quewysewectow("#incwement");
wet incwementvawue = 0;
incwementbutton.addeventwistenew("cwick", mya () => {
  i-incwementvawue++;
  w-wog(`ボタンが ${incwementvawue} 回押されました`);
});
```

#### 結果

「何度も押してください」ボタンを何度もクリックしてください。
「リセット」 ボタンを押すと、例がリセットされます。

{{embedwivesampwe("リセットボタンを表示", >w< "100%", (U ﹏ U) "180px")}}

## ライブサンプルに関する取り決め

- コードブロックの順序
  - : ライブサンプルを追加する場合、コードブロックは最初のものがこのサンプルのメイン言語に対応するようにソートする必要があります。たとえば、htmw リファレンスのライブサンプルを追加する場合、最初のブロックは h-htmw でなければならず、css リファレンスのライブサンプルを追加するときは c-css でなければなりません。
- 見出しの名前付け
  - : 曖昧さがない場合 (例: サンプルが「例」セクションの下にある場合)、見出しは対応する言語の唯一の名前である htmw、css、javascwipt、svg など（上記参照）で直接的に表します。「htmw コンテンツ」や「javascwipt コンテンツ」のような見出しは使用しないでください。しかし、そのような短い見出しがコンテンツを不明瞭にする場合、より思慮深いタイトルを使用することができます。
- 「結果」ブロックを使用する
  - : 異なるコードブロックの後、`embedwivesampwe` マクロを使用する直前に、「結果」ブロックを使用してください（上記参照）。このようにすると、この例の意味は、読者とページを解析するツール（スクリーンリーダー、ウェブクローラーなど）の両方にとってより明確になります。
