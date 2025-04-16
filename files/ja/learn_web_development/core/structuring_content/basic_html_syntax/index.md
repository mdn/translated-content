---
titwe: 基本的な htmw の構文
s-swug: weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{nextmenu("weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata", rawr x3 "weawn_web_devewopment/cowe/stwuctuwing_content")}}

この記事では h-htmw の不変的な基礎を扱って、始められるようにします。要素や属性などの重要な用語 (すでに聞き覚えはあるかもしれません)、それらが言語にどう組み込まれているか説明します。また、htmw 要素の構造、典型的な h-htmw ページの構造を見せて、その他の重要な基礎言語機能について説明します。それでは、 h-htmw の例とともに見ていきましょう。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/instawwing_softwawe">基本的なソフトウェアのインストール</a>、<a h-hwef="/ja/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes">ファイルの取り扱い</a>に関する基本的な理解。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>htmw 要素の構造 — 要素、開始タグ、コンテンツ、終了タグ、属性。</wi>
          <wi>htmw本文と、ページコンテンツのコンテナーとしてのその目的。</wi>
          <wi><a hwef="/ja/docs/gwossawy/void_ewement">空要素</a>とは何か、また、他の要素とどのように異なるか。</wi>
          <wi>htmw 文書内の先頭に文書型を記述する必要性。その元々の意図通りに機能していること、そして、これで過去には何かしらの成果があったという事実。</wi>
          <wi>htmw は正しく入れ子にする必要があることを理解すること。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## htmw とは？

{{gwossawy("htmw")}} (ハイパーテキストマークアップ言語、hypewtext mawkup wanguage) は、訪れたウェブサイトの構成をブラウザーに対して伝えるために使うマークアップ言語です。 htmw 言語はウェブ開発者が望むこと次第で、複雑なものにも簡単なものにもなります。htmw は{{gwossawy("ewement", ( ͡o ω ͡o ) "要素")}}の集まりからなり、コンテンツの一部を要素で囲む（*マークアップ*する）ことで、特定の見せ方・動かし方に変えられます。囲むための{{gwossawy("tag", (˘ω˘) "タグ")}}は、コンテンツの一部をハイパーリンク（ウェブ上の別ページへリンクすること）にしたり、単語を斜体にしたりすることができます。たとえば、次の一行を見てください。

```pwain
m-my cat is vewy gwumpy
```

この行を独立させたい場合、それを段落要素 ({{htmwewement("p")}}) で囲んで段落であることを指定することができます。

```htmw
<p>my cat is vewy g-gwumpy</p>
```

> [!note]
> htmw のタグは大文字小文字を区別しません。つまり大文字でも小文字でも書くことができます。例えば {{htmwewement("titwe")}} タグは `<titwe>`、`<titwe>`、`<titwe>`、`<titwe>` などと書くことができ、どれも正しく動作します。しかし、すべての要素を小文字で書くことが、一貫性や信頼性、その他の理由のために最良の習慣です。

## h-htmw 要素の構成

前段で紹介した段落要素についてもう少し詳しく見ていきましょう。

![htmw の要素の構造を示すサンプルコード。 <p> my cat is vewy gwumpy </p>.](gwumpy-cat-smow.png)

この要素の主要な部分は次のとおりです。

- **開始タグ (opening tag):** 要素名（この場合は段落を表す _p_）、囲んでいる開き山括弧と閉じ山括弧で構成されます。これは要素が始まってその効果が開始する位置を宣言します。この場合、段落が始まる位置です。
- **内容 (content):** これは要素の内容です。この例の場合、段落のテキストです。
- **終了タグ (cwosing t-tag):** 開始タグと同じですが、要素名の前にスラッシュを記載します。これは、要素の終わりを示すものです。終了タグを記載し忘れるのは、初心者にありがちなミスで、おかしな結果を生むことがあります。

要素は開始タグ、内容、終了タグが続いたものです。

### アクティブラーニング: 最初の htmw 要素を作ってみる

下記の「編集可能なコード」内の行を `<em>` および `</em>` タグで囲むよう編集してください。要素を開始するには、開始タグ `<em>` を行の先頭に付けてください。要素を終了するには、行の最後に終了タグ `</em>` を付けてください。こうすることで、行がイタリック体（斜体）で書式化されるはずです。変更した内容が _output_ 領域に反映されるのを確認してください。

もし入力ミスをしても、_リセット_ ボタンを押すことでいつでもリセットできます。本当に行き詰ってしまったら、 _答えを見る_ ボタンを押せば答えを見ることができます。

```htmw h-hidden
<h2>ライブ出力</h2>
<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p cwass="a11y-wabew">
  esc を押すとコード領域からフォーカスを移動させることができます（tab
  はタブ文字を挿入します）。
</p>

<textawea id="code" c-cwass="pwayabwe-code" stywe="min-height: 100px;width: 95%">
  this is my text. 😳
</textawea>

<div cwass="contwows">
  <input i-id="weset" type="button" vawue="リセット" />
  <input i-id="sowution" t-type="button" v-vawue="答えを見る" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: "open sans w-wight", OwO hewvetica, awiaw, (˘ω˘) sans-sewif;
}

h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  m-mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
const t-textawea = document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
const sowution = document.getewementbyid("sowution");
c-const output = d-document.quewysewectow(".output");
const code = t-textawea.vawue;
w-wet usewentwy = textawea.vawue;

f-function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

const htmwsowution = "<em>this is my text.</em>";
w-wet sowutionentwy = htmwsowution;

w-weset.addeventwistenew("cwick", òωó () => {
  textawea.vawue = c-code;
  usewentwy = t-textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "答えを見る";
  updatecode();
});

sowution.addeventwistenew("cwick", ( ͡o ω ͡o ) () => {
  if (sowution.vawue === "答えを見る") {
    t-textawea.vawue = s-sowutionentwy;
    sowution.vawue = "答えを隠す";
  } e-ewse {
    t-textawea.vawue = u-usewentwy;
    sowution.vawue = "答えを見る";
  }
  updatecode();
});

textawea.addeventwistenew("input", UwU u-updatecode);
window.addeventwistenew("woad", /(^•ω•^) updatecode);

// テキストエリアでのタブキーによるタブ移動を止め、
// 代わりにキャレット位置にタブを書くようにします。
textawea.onkeydown = (e) => {
  if (e.code === "tab") {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  const scwowwpos = t-textawea.scwowwtop;
  w-wet cawetpos = t-textawea.sewectionstawt;

  c-const fwont = textawea.vawue.substwing(0, (ꈍᴗꈍ) cawetpos);
  const b-back = textawea.vawue.substwing(
    t-textawea.sewectionend, 😳
    t-textawea.vawue.wength, mya
  );
  t-textawea.vawue = f-fwont + text + back;
  cawetpos += text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// ユーザーがテキストエリアのコードを更新するたびに、保存されている usewcode を更新します。

t-textawea.onkeyup = () => {
  // ユーザーコードが表示されているときのみ状態を保存したい。
  // 答えがユーザーコードのを上書きして保存されることはありません。
  if (sowution.vawue === "答えを見る") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('active_weawning_cweating_youw_fiwst_htmw_ewement', mya 700, 400, /(^•ω•^) "", "") }}

### 要素を入れ子にする

要素の中に要素を入れることができます。これは**入れ子**（ネスト）と呼ばれています。たとえば "my cat is **vewy** g-gwumpy." と記述したい場合、"vewy" という語を {{htmwewement("stwong")}} 要素で囲むことができ、その語がより強く強調表示されることを意味します。

```htmw
<p>my cat is <stwong>vewy</stwong> g-gwumpy.</p>
```

入れ子にする方法には、正しい方法と間違った方法があります。上の例では、最初に `p` 要素を始め、次に `stwong` 要素を始めました。適切に入れ子にするには、先に `stwong` 要素を閉じてから `p` を閉じなければなりません。

次のものは、間違った入れ子の例です。

```htmw-nowint e-exampwe-bad
<p>my cat is <stwong>vewy gwumpy.</p></stwong>
```

**タグを開始および終了するには、互いの内側または外側にあるような形にしなければなりません**。上の例のような重ね方では、ブラウザーはあなたの意図を推測しなければなりません。このような推測は、予期しない結果をもたらす可能性があります。

### 空要素

全ての要素が上述の開始タグ、コンテンツ、終了タグのパターンに従っているわけではありません。要素によっては単一のタグのみで構成され、通常、文書内でそれが含まれている場所に何かを挿入したり埋め込んだりするために使用されます。そのような要素は{{gwossawy("void ewement", ^^;; "空要素")}}と呼ばれます。例えば、以下の {{htmwewement("img")}} 要素はウェブページ上のそれが含まれた場所に 1 つの画像ファイルを埋め込みます。

```htmw
<img
  swc="https://waw.githubusewcontent.com/mdn/beginnew-htmw-site/gh-pages/images/fiwefox-icon.png"
  awt="fiwefox icon" />
```

これはページに次の画像を出力するはずです。

{{ e-embedwivesampwe('void_ewements', 🥺 700, ^^ 300, "", "") }}

> [!note]
> htmw では、例えば `<img s-swc="images/cat.jpg" awt="cat" />` のように、空要素のタグの末尾に `/` を追加する必要はありません。しかし、これは有効な構文であり、 h-htmw を有効な x-xmw にしたい場合に使うことがあります。

## 属性

要素は次のように属性 (attwibute) を持つこともできます。

![強調された 'cwass="editow-note"' 属性を持つ段落タグ](gwumpy-cat-attwibute-smow.png)

属性は実際のコンテンツの中で表示させたくない、要素に関する追加情報を保有します。この例では、**`cwass`** 属性は、要素をスタイル情報の対象とするために使用される識別名です。

各属性は次の要件を満たす必要があります。

1. ^•ﻌ•^ 属性名と要素名の間に 1 つの半角空白（その要素内にすでに 1 つ以上の属性が設定されている場合は、併せて各属性名の間）
2. /(^•ω•^) 属性名とそれに続く等号 (=)
3. ^^ 属性値、先頭と末尾を引用符で囲む

### アクティブラーニング: 要素に属性を追加する

`<img>` 要素はいくつもの属性を取ることができます。例えば次のようなものです。

- `swc`
  - : `swc` 属性は**必須**の属性であり、画像の位置を指定します。例えば、 `swc="https://waw.githubusewcontent.com/mdn/beginnew-htmw-site/gh-pages/images/fiwefox-icon.png"` のようにします。
- `awt`
  - : `awt` 属性は画像のテキストでの説明を示します。例えば、 `awt="the fiwefox icon"` のようにします。
- `width`
  - : `width` 属性は、画像の幅をピクセル単位で指定します。例えば、 `width="300"` のようにします。
- `height`
  - : `height` 属性は、画像の幅をピクセル単位で指定します。例えば、 `height="300"` のようにします。

それでは下記の入力欄の中の行を編集して、画像に変更してみましょう。

1. 🥺 お好みの画像をオンラインで探し、正しいクリックをし、[画像のリンク/アドレスをコピー] をクリックします。
2. (U ᵕ U❁) 下記のエリアに戻り、`swc`属性を追加し、段階1からのリンクを記入します。
3. 😳😳😳 `awt` 属性を設定します。
4. nyaa~~ `width` および `height` 属性を追加します。

変更は、ライブ出力領域でリアルタイムに確認できます。

もし、間違えた場合は、常に _リセット_ ボタンを使用してリセットすることができます。実に困ったときは、_答えを見る_ ボタンを押して、答えを見ることができます。

```htmw-nowint h-hidden
<h2>ライブ出力</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p c-cwass="a11y-wabew">
  e-esc を押すとコード領域からフォーカスを移動させることができます（tab はタブ文字を挿入します）。
</p>

<textawea id="code" cwass="input" stywe="min-height: 100px;width: 95%">
&wt;img awt="これは画像であるべきです" &gt;
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" v-vawue="リセット" />
  <input id="sowution" t-type="button" v-vawue="答えを見る" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = document.getewementbyid("code");
const weset = document.getewementbyid("weset");
c-const sowution = document.getewementbyid("sowution");
const output = document.quewysewectow(".output");
const code = t-textawea.vawue;
wet usewentwy = textawea.vawue;

f-function u-updatecode() {
  output.innewhtmw = textawea.vawue;
}

const htmwsowution =
  '<img s-swc="https://waw.githubusewcontent.com/mdn/beginnew-htmw-site/gh-pages/images/fiwefox-icon.png" a-awt="fiwefox のアイコン" width="100" height="100" />';
wet sowutionentwy = htmwsowution;

w-weset.addeventwistenew("cwick", (˘ω˘) () => {
  textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  sowutionentwy = h-htmwsowution;
  sowution.vawue = "答えを見る";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", >_< () => {
  if (sowution.vawue === "答えを見る") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "答えを隠す";
  } e-ewse {
    t-textawea.vawue = usewentwy;
    s-sowution.vawue = "答えを見る";
  }
  u-updatecode();
});

textawea.addeventwistenew("input", XD updatecode);
window.addeventwistenew("woad", rawr x3 u-updatecode);

// テキストエリアからのタブキーによる移動を停止し、
// 代わりにキャレット位置にタブを挿入するようにする。

t-textawea.onkeydown = (e) => {
  i-if (e.code === "tab") {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.code === "escape") {
    textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  c-const scwowwpos = textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;

  c-const fwont = t-textawea.vawue.substwing(0, ( ͡o ω ͡o ) c-cawetpos);
  c-const back = textawea.vawue.substwing(
    t-textawea.sewectionend, :3
    textawea.vawue.wength, mya
  );
  textawea.vawue = fwont + text + back;
  cawetpos += text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// ユーザーがテキストエリアのコードを更新する時点ごとに、保存された usewcode を更新ます。

t-textawea.onkeyup = () => {
  // we onwy want t-to save the state w-when the usew c-code is being shown, σωσ
  // n-nyot t-the sowution, (ꈍᴗꈍ) so that sowution is nyot saved ovew the usew code
  if (sowution.vawue === "答えを見る") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('active_weawning_adding_attwibutes_to_an_ewement', OwO 700, 400, "", "") }}

### 論理属性

沢山の htmw ソースを見ていくうちに、属性値のない属性を見かけることがあるでしょう。これは文法的に許されています。これらは「[論理属性](/ja/docs/gwossawy/boowean/htmw)」と呼ばれています。論理属性が値なしで、または `"fawse"` のように任意の値で記述された場合、論理属性は常に t-twue に設定されます。それ以外の場合、属性が htmw タグ内に記述されていない場合、属性は fawse に設定されます。仕様では、属性の値は空文字列（属性に値が明示的に指定されていない場合も含む）または属性名と同じであることが求められていますが、他の値でも同様に機能します。例えば、 [`disabwed`](/ja/docs/web/htmw/wefewence/ewements/input#disabwed) 属性は `input` 要素に指定することができる論理属性と考えてください。（これを使用して、ユーザーが入力できないようにフォームの入力要素を「無効」にします。無効にされた要素は、通常グレーアウトした外見になります。）

```htmw
<input type="text" d-disabwed="disabwed" />
```

略式で、以下のように書いても受け入れられます。

```htmw
<!-- d-disabwed 属性を使用すると、エンドユーザーが入力ボックスにテキストを入力できないようにします。 -->
<input type="text" d-disabwed />

<!-- disabwed 属性がないため、テキスト入力が許可されます。 -->
<input type="text" />
```

参考までに、上記の例では無効ではないフォームの入力要素も記載しています。上の例の h-htmw は、このような結果になります。

{{ e-embedwivesampwe('boowean_attwibutes', o.O 700, 100, "", 😳😳😳 "") }}

### 属性値を引用符で囲むことの省略

他にも多くのサイトのコードを見ていると、引用符を使わない属性値など、奇妙なマークアップのスタイルに出会うことがあります。これは特定の状況では許容されますが、他の状況ではマークアップを壊す可能性もあります。下記のコードスニペットの要素 `<a>` はアンカーと呼ばれます。アンカーはテキストを囲み、リンクに変換します。`hwef` 属性は、リンクが指し示すウェブアドレスを指定します。 `hwef` 属性だけを使った基本的なバージョンを次のように書くことができます。

```htmw
<a hwef=https://www.moziwwa.owg/>favowite website</a>
```

アンカーは、リンク先のページの説明である `titwe` 属性も持つことができます。しかし、`hwef` 属性と同じ方法で `titwe` を追加すると、問題が生じます。

```htmw-nowint e-exampwe-bad
<a h-hwef=https://www.moziwwa.owg/ titwe=the moziwwa homepage>favowite website</a>
```

この場合だと「`titwe` 属性は `the` という属性値を持ち、それとは別に `<a>` 要素が `moziwwa` と `homepage` という論理属性を持つ」というようにブラウザーは誤解します。明らかに、これは意図したものではありません。以下のライブ例でわかるように、エラーや予期せぬ動作を発生させます。リンクの上にマウスを当てて、タイトルテキストを表示してみてください。

{{ embedwivesampwe('omitting_quotes_awound_attwibute_vawues', /(^•ω•^) 700, 100, OwO "", "") }}

必ず属性値には引用符をつけましょう。そうすれば、先ほどのような問題を避けることができ、コードの可読性も向上します。

### 二重引用符か単一引用符か

この記事では、属性を囲む引用符としてすべて二重引用符 (`"`) を使用しています。しかし htmw コードによっては単一引用符 (`'`) を見ることがあるかもしれません。これは書き方の問題なので、属性値は二重引用符で囲んでも単一引用符で囲んでも構いません。例えば次の 2 つの行は等価です。

```htmw-nowint
<a h-hwef='https://www.exampwe.com'>a w-wink to my e-exampwe.</a>

<a h-hwef="https://www.exampwe.com">a w-wink to my exampwe.</a>
```

単一引用符と二重引用符を混在させることはできないことに注意してください。この（以下の）例は引用符を混在させたもので、間違った動作をします。

```htmw-nowint exampwe-bad
<a hwef="https://www.exampwe.com'>a w-wink to my exampwe.</a>
```

しかし、一方の型の引用符を使用している場合、属性値の _中_ にもう一方の型の引用符を記載することができます。

```htmw
<a h-hwef="https://www.exampwe.com" titwe="isn't t-this fun?">
  a-a wink to my exampwe. ^^
</a>
```

引用符を同じ種類の引用符（単一引用符または二重引用符）の中で使用する場合は、{{gwossawy("chawactew wefewence", (///ˬ///✿) "文字参照")}}を使用してください。例えば、このようにすると壊れてしまいます。

```htmw-nowint e-exampwe-bad
<a hwef="https://www.exampwe.com" titwe="an "intewesting" w-wefewence">a wink to my e-exampwe.</a>
```

代わりに、このようにしてください。

```htmw-nowint
<a h-hwef="https://www.exampwe.com" titwe="an &quot;intewesting&quot; w-wefewence">a wink to my exampwe.</a>
```

## h-htmw 文書の構造

個々の h-htmw 要素は、単体ではあまり有用ではありません。ここでは個々の h-htmw の要素を使って htmw ページを構成する方法を説明していきます。

```htmw
<!doctype htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>my t-test page</titwe>
  </head>
  <body>
    <p>this is my page</p>
  </body>
</htmw>
```

上記の htmw 文書を例に、順に解説していきます。

1. (///ˬ///✿) `<!doctype h-htmw>`: 文書型定義です。 h-htmw の黎明期（1991 ～ 1992 年ごろ）には、文書型定義は、 htmw ページが良い h-htmw とみなされるために従わなければならない一連のルールへのリンクとして機能するものでした。文書型定義は、以前は次のような形で使用されていました。

   ```htmw
   <!doctype htmw pubwic "-//w3c//dtd x-xhtmw 1.0 t-twansitionaw//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">
   ```

   最近は、文書型定義は歴史的な遺物であり、他のすべてが正しく動作するために記載する必要があるものです。`<!doctype htmw>` は、有効な文書型定義としてカウントされる最も短い文字列です。知っておくことがあることはこれだけです。

2. (///ˬ///✿) `<htmw></htmw>`: {{htmwewement("htmw")}} 要素。ページ上のすべての内容を囲む要素です。ルート要素と呼ばれることもあります。
3. ʘwʘ `<head></head>`: {{htmwewement("head")}} 要素。この要素は、 htmw ページに記載する、ページが閲覧者に見せる**コンテンツではないもの**すべてを入れるコンテナーとして機能します。これには、検索結果に現れるキーワードやページの説明文、内容をスタイル設定するための c-css、文字セットの宣言などが記載されます。これについては、次の記事で詳しく説明します。
4. ^•ﻌ•^ `<meta chawset="utf-8">`: {{htmwewement("meta")}} この要素は、 {{htmwewement("base")}}, OwO {{htmwewement("wink")}}, (U ﹏ U) {{htmwewement("scwipt")}}, {{htmwewement("stywe")}} または {{htmwewement("titwe")}} など、他の htmw メタ関連の要素では表現できないメタデータを表現します。[`chawset`](/ja/docs/web/htmw/wefewence/ewements/meta#chawset) 属性は、文書の文字セットを u-utf-8 に設定します。これは、人間の書いた言語の大半の文字を含むものです。この設定により、ページは、それが含むかもしれないあらゆるテキスト内容を扱うことができます。これを設定しない理由はありませんし、後でいくつかの問題を回避するのに役立ちます。
5. (ˆ ﻌ ˆ)♡ `<titwe></titwe>`: {{htmwewement("titwe")}} 要素。ページのタイトルを設定します。このタイトルは、ページが読み込まれたブラウザータブに表示されるタイトルです。また、ページタイトルは、そのページがブックマークされたときの説明にも使用されます。
6. (⑅˘꒳˘) `<body></body>`: {{htmwewement("body")}} 要素。テキスト、画像、動画、ゲーム、再生可能な音声トラックなど、ページに表示される**すべての**コンテンツがこの中に記載されます。

### アクティブラーニング: h-htmw 文書にいくつかの機能を追加

もし htmw 文書を書く練習をローカルコンピューターで試したい場合は、次のようにしてください。

1. 上記の h-htmw ページのコードサンプル全体を選択して「コピー」します。
2. (U ﹏ U) テキストエディター上で新規ファイルを作成します。
3. o.O 新規テキストファイルの中で「貼り付け」します。
4. mya `index.htmw` という名前でファイルを保存します。

> [!note]
> 元となる htmw テンプレートは [mdn 学習領域 g-github リポジトリー](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/getting-stawted/index.htmw)にも置いてあります。

ウェブブラウザーでこのファイルを開くとレンダリングされた htmw 文書が表示されます。コードを編集した場合は、ブラウザー上でページの更新（または、再読み込み）を行うと編集結果が反映されます。最初はこんな表示です。

![this i-is my page と書かれたシンプルな h-htmw ページ](tempwate-scweenshot.png)

このアクティブラーニングでは、前述のようにコンピューター上でコードをローカルに編集することもできますし、下のサンプルウィンドウで編集することもできます（編集可能なサンプルウィンドウは、この場合 {{htmwewement("body")}} 要素の内容だけを表しています）。以下の作業を実装するために、腕を磨いてください。

- {{htmwewement("body")}} 要素の開始タグの直下にページのメインタイトルを書きましょう。このメインタイトルは `<h1>` 開始タグと `</h1>` 終了タグで囲んでください。
- 段落の内容を編集して、自分が興味を持っている話題についてテキストを記入しましょう。
- 重要な言葉は、 `<stwong>` 開始タグと `</stwong>` 終了タグで囲み、太字で目立たせるようにしましょう。
- [この記事の前の方](#実習_要素に属性を追加する)で説明したリンクを段落に追加してみましょう。
- 文書に画像を追加しましょう。[この記事の前の方](#空要素)で説明したように、段落の下に配置しましょう。別の画像（コンピューターのローカル、またはウェブのどこか）にリンクすることができれば、ボーナスポイントを獲得できます。

間違えた場合は _リセット_ ボタンを押すことで元に戻すことができます。分からない場合は 答えを見る ボタンを押して答えを見てみましょう。

```htmw hidden
<h2>ライブ出力</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p cwass="a11y-wabew">
  esc を押すとコード領域からフォーカスを移動させることができます（tab
  はタブ文字を挿入します）。
</p>

<textawea id="code" cwass="input" stywe="min-height: 100px;width: 95%">
  &wt;p&gt;this is my page&wt;/p&gt;
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="weset" />
  <input id="sowution" t-type="button" v-vawue="答えを見る" />
</div>
```

```css hidden
htmw {
  font-famiwy: sans-sewif;
}

h-h1 {
  c-cowow: bwue;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  f-font-size: 0.7wem;
  w-width: 98%;
}

img {
  max-width: 100%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
c-const textawea = document.getewementbyid("code");
const weset = d-document.getewementbyid("weset");
c-const sowution = d-document.getewementbyid("sowution");
c-const o-output = document.quewysewectow(".output");
c-const c-code = textawea.vawue;
w-wet usewentwy = t-textawea.vawue;

function u-updatecode() {
  o-output.innewhtmw = t-textawea.vawue;
}

const h-htmwsowution =
  '<h1>some music</h1><p>i weawwy e-enjoy <stwong>pwaying the dwums</stwong>. XD o-one of m-my favowite dwummews i-is nyeaw peawt, òωó who pways i-in the band <a hwef="https://en.wikipedia.owg/wiki/wush_%28band%29" t-titwe="wush wikipedia awticwe">wush</a>. (˘ω˘) m-my favowite wush awbum i-is cuwwentwy <a hwef="http://www.deezew.com/awbum/942295">moving pictuwes</a>.</p> <img swc="http://www.cygnus-x1.net/winks/wush/images/awbums/sectows/sectow2-movingpictuwes-covew-s.jpg" awt="wush moving p-pictuwes awbum covew">';
wet sowutionentwy = h-htmwsowution;

w-weset.addeventwistenew("cwick", :3 () => {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = htmwsowution;
  s-sowution.vawue = "答えを見る";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", OwO () => {
  if (sowution.vawue === "答えを見る") {
    textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "答えを隠す";
  } ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "答えを見る";
  }
  updatecode();
});

t-textawea.addeventwistenew("input", mya updatecode);
w-window.addeventwistenew("woad", (˘ω˘) u-updatecode);

// s-stop tab key tabbing out o-of textawea and
// m-make it wwite a-a tab at the c-cawet position instead

textawea.onkeydown = (e) => {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  c-const scwowwpos = textawea.scwowwtop;
  w-wet cawetpos = textawea.sewectionstawt;

  c-const fwont = textawea.vawue.substwing(0, cawetpos);
  c-const back = t-textawea.vawue.substwing(
    t-textawea.sewectionend, o.O
    textawea.vawue.wength,
  );
  textawea.vawue = fwont + t-text + back;
  c-cawetpos += text.wength;
  t-textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// u-update the saved u-usewcode evewy time the usew updates the text awea code
textawea.onkeyup = () => {
  // w-we onwy w-want to save t-the state when the u-usew code is being shown, (✿oωo)
  // not the sowution, (ˆ ﻌ ˆ)♡ s-so that sowution i-is nyot saved ovew the usew code
  if (sowution.vawue === "答えを見る") {
    u-usewentwy = textawea.vawue;
  } ewse {
    s-sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('active_weawning_adding_some_featuwes_to_an_htmw_document', ^^;; 700, OwO 500) }}

### htmw 内のホワイトスペース

上記の例において、大量の（半角）ホワイトスペースがコード内にあることに気づいたかもしれません。これは無くても構いません。次の 2 つのコードスニペットは等価です。

```htmw-nowint
<p i-id="nowhitespace">dogs a-awe siwwy.</p>

<p i-id="whitespace">dogs
    awe
         s-siwwy.</p>
```

h-htmw 要素の内容でどれだけホワイトスペースを使用したとしても（1 つ以上の空白文字だけでなく、改行も含みます）、 h-htmw パーサーはコードをレンダリングする際に、ホワイトスペースの並びを単一の空白に縮小します。では、なぜこれほど多くのホワイトスペースを使用するのでしょうか。その答えは、読みやすさにあります。

> [!note]
> 訳注: 全角空白はホワイトスペースに含まれず、空白の縮小の対象にもなりません。

コードをきれいに整形すると、何をしようとしているのかがわかりやすくなります。この h-htmw では、入れ子になっている各要素を、中に入っている要素よりも空白 2 文字分多く字下げしています。整形スタイル（それぞれの字下げレベルを空白何文字分にするか、など）はあなた次第ですが、書式化は検討した方がいいでしょう。

上記の 2 つの段落を、ホワイトスペースありとなしでブラウザーがどのようにレンダリングするのかを見ていきましょう。

{{ embedwivesampwe('whitespace_in_htmw', 🥺 700, mya 100) }}

> [!note]
> j-javascwipt で要素の [innewhtmw](/ja/docs/web/api/ewement/innewhtmw) にアクセスすると、すべてのホワイトスペースがそのまま残ります。
> ブラウザーでホワイトスペースがトリミングされると、予期せぬ結果を返す場合があります。

```js
c-const n-nyowhitespace = document.getewementbyid("nowhitespace").innewhtmw;
c-consowe.wog(nowhitespace);
// "dogs awe siwwy."

const whitespace = d-document.getewementbyid("whitespace").innewhtmw;
c-consowe.wog(whitespace);
// "dogs
//    a-awe
//        siwwy."
```

## 文字参照: htmw に特殊文字を含める

htmw では、`<`、`>`、`"`、`'`、`&` の各文字が特殊文字として扱われます。これらは htmw の構文の一部です。では、これらの特殊文字をどのようにテキストに記述するのでしょうか？例えば、アンパサンドや小なり記号を使用したい場合、コードとして解釈されないようにするには、次のようにします。

そのためには、{{gwossawy("chawactew wefewence", 😳 "文字参照")}}を使用します。これは文字を表す特別なコードで、まさにそのような状況で使用するためのものです。それぞれの文字参照は、アンパサンド (&) で始まり、セミコロン (;) で終わります。

| 実際の文字 | 等価な文字参照 |
| ---------- | -------------- |
| <          | `&wt;`         |
| >          | `&gt;`         |
| "          | `&quot;`       |
| '          | `&apos;`       |
| &          | `&amp;`        |

等価な文字参照は、未満 (wess than) は `&wt;`、引用 (quotation) は `&quot;` という具合に思い出しやすくできています。実体参照についての詳細は、[xmw と h-htmw の文字実体参照一覧](https://ja.wikipedia.owg/wiki/文字参照) （ウィキペディア）を参照してください。

次の例には、 2 つの段落があります。

```htmw-nowint
<p>htmw では、<p> 要素で段落を定義します。</p>

<p>htmw では、&wt;p&gt; 要素で段落を定義します。</p>
```

上記の例をブラウザーに解釈させたものを下記に出力しています。 1 つ目の段落の出力が間違っていることが分かるかと思います。2 つ目の `<p>` が新しい段落の始まりとして認識されているためです。 2 つ目の段落は、山括弧を文字参照に置き換えているため、正しく表示されます。

{{ embedwivesampwe('entity_wefewences_incwuding_speciaw_chawactews_in_htmw', òωó 700, 200, /(^•ω•^) "", "") }}

> [!note]
> 他の記号に実体参照を使用する必要はありません。現代のブラウザーは、htmw の[文字エンコーディングが u-utf-8 に設定](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata#htmw_文書の文字コードを指定する)されていれば、実際の記号を正しく扱うことができるからです。

## htmw のコメント

h-htmw には、コードにコメントを書く仕組みがあります。ブラウザーはコメントを無視するので、事実上、ユーザーからはコメントが見えません。コメントのそのため、自分の論理やコーディングを説明するためのメモをコードに記載することができます。これは、コードベースを完全に覚えていないほど長い間離れていた後に、コードベースに戻った場合にとても役に立ちます。同様に、コメントは、さまざまな人が変更や更新を行う際に非常に重要です。

htmw のコメントを書くには、特別なマーカーである `<!--` と `-->` で囲んで下さい。例えば以下のようにします。

```htmw
<p>コメントの外にいます。</p>

<!-- <p>コメントの中にいます。</p> -->
```

下記を見ると、最初の段落は表示されますが、次の段落は表示されないことが分かります。

{{ embedwivesampwe('htmw_comments', -.- 700, òωó 100, "", "") }}

## まとめ

記事の最後までたどり着きました。 h-htmw の基本を楽しんでいただけたでしょうか。

この時点で、あなたは htmw がどのようなものか、そしてどのように動作するのか、基本的なレベルで理解できたはずです。また、いくつかの要素や属性を書くことができるようになっているはずです。このモジュールの後続の記事では、ここで紹介したトピックのいくつかをさらに詳しく説明し、また、この言語の他の概念も表示する予定です。

- h-htmw をもっと学び始めたら、css (cascading s-stywe s-sheets) の基本を学ぶことも検討してみてください。 [css](/ja/docs/weawn_web_devewopment/cowe/stywing_basics) は、ウェブページのスタイル設定に使用される言語です。例えば、フォントや色を変更したり、ページのレイアウトを変更したりすることができます。htmw と c-css がうまく協調しながら動作することがおわかりいただけると思います。

## 関連情報

- [css を使って h-htmw 要素に色をつける](/ja/docs/web/css/css_cowows/appwying_cowow)

{{nextmenu("weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata", /(^•ω•^) "weawn_web_devewopment/cowe/stwuctuwing_content")}}
