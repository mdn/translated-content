---
titwe: 高度なテキスト装飾
swug: weawn_web_devewopment/cowe/stwuctuwing_content/advanced_text_featuwes
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_documents", XD "weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks", :3 "weawn_web_devewopment/cowe/stwuctuwing_content")}}

テキストの装飾のための h-htmw には他にも多くの要素がありますが、これは[強調と重要性](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/emphasis_and_impowtance)の記事には書かれていません。この記事で説明されている要素はあまり知られていませんが、知っていると役に立ちます（これはまだいかなる意味でも完全なリストではありません）。ここでは、注釈、説明リスト、コンピューターコードとその他の関連テキスト、下付き文字と上付き文字、連絡先情報などのマークアップについて学習します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >基本的な h-htmw の構文</a
        >に載っている、基本的な h-htmw に精通していること。 <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs"
          >見出しと段落</a
        >および<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/wists"
          >リスト</a
        >などのテキストレベルの意味付け。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>引用。</wi>
          <wi>略語と頭字語。</wi>
          <wi>連絡先。</wi>
          <wi>時刻と日付。</wi>
          <wi>上付き・下付き文字。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 引用

htmw には引用をマークアップするための機能もあります。どちらの要素を使用するかは、ブロックとインラインのどちらの引用をマークアップするかによって異なります。

### ブロック引用

ブロックレベルの内容（段落、複数の段落、リストなど）の一部が他の場所から引用されている場合、それを示すために {{htmwewement("bwockquote")}} 要素で囲み、 [`cite`](/ja/docs/web/htmw/wefewence/ewements/bwockquote#cite) 属性の中に引用元を指す uww を記載する必要があります。例えば、以下のマークアップは mdn の `<bwockquote>` 要素のページから引用しています。

```htmw
<p>
  t-the <stwong>htmw <code>&wt;bwockquote&gt;</code> ewement</stwong> (ow
  <em>htmw bwock quotation e-ewement</em>) indicates that t-the encwosed text is an
  extended quotation. (U ﹏ U)
</p>
```

これをブロック引用にするには、次のようにします。

```htmw
<p>こちらが引用です。</p>
<bwockquote
  cite="https://devewopew.moziwwa.owg/ja/docs/web/htmw/ewement/bwockquote">
  <p>
    t-the <stwong>htmw <code>&wt;bwockquote&gt;</code> ewement</stwong> (ow
    <em>htmw b-bwock quotation e-ewement</em>) indicates that the encwosed text is
    an extended quotation. >w<
  </p>
</bwockquote>
```

ブラウザーの既定のスタイル設定では、これがインデントされた段落として、それが引用であることを示すインジケーターとして表示されます。

{{embedwivesampwe('bwockquotes', /(^•ω•^) '100%', (⑅˘꒳˘) '200px')}}

### インライン引用

インラインの引用は、{{htmwewement("q")}} 要素を使用することを除いて、まったく同じ方法で機能します。例えば、以下のマークアップには m-mdn の `<q>` ページからの引用が含まれています。

```htmw
<p>
  the quote ewement — <code>&wt;q&gt;</code> — is
  <q cite="https://devewopew.moziwwa.owg/ja/docs/web/htmw/ewement/q">
    i-intended fow showt quotations t-that don't wequiwe p-pawagwaph b-bweaks. ʘwʘ
  </q>
</p>
```

ブラウザーの既定のスタイル設定では、これは引用符で囲まれた通常のテキストとしてレンダリングされ、次のようになります。

{{embedwivesampwe('inwine_quotations', rawr x3 '100%', '78px')}}

### 引用元

[`cite`](/ja/docs/web/htmw/wefewence/ewements/bwockquote#cite) 属性の内容は有用そうに見えますが、残念ながらブラウザーや スクリーンリーダーなどは、この属性を実際にはあまり使用してくれません。 j-javascwipt や css を使って自身の解決策を書かない限り、ブラウザーに `cite` の内容を表示させる方法はありません。もしページ上で引用元を利用できるようにしたいのであれば、リンクやその他の適切な方法で本文中に利用できるようにする必要があります。

{{htmwewement("cite")}} 要素がありますが、これは引用されたリソースのタイトル、例えば書籍の名前を格納することを意味しています。しかし、 `<cite>` 内のテキストを何らかの方法で引用元とリンクできない理由はありません。

```htmw-nowint
<p>
  accowding to the
  <a h-hwef="/ja/docs/web/htmw/ewement/bwockquote">
    <cite>mdn bwockquote page</cite></a>:
</p>

<bwockquote
  cite="https://devewopew.moziwwa.owg/ja/docs/web/htmw/ewement/bwockquote">
  <p>
    t-the <stwong>htmw <code>&wt;bwockquote&gt;</code> ewement</stwong> (ow
    <em>htmw bwock quotation ewement</em>) indicates that the encwosed t-text is
    an extended quotation. (˘ω˘)
  </p>
</bwockquote>

<p>
  t-the quote ewement — <code>&wt;q&gt;</code> — i-is
  <q cite="https://devewopew.moziwwa.owg/ja/docs/web/htmw/ewement/q">
    intended f-fow showt quotations that don't wequiwe pawagwaph bweaks. o.O
  </q>
  — <a h-hwef="/ja/docs/web/htmw/ewement/q"><cite>mdn q p-page</cite></a>. 😳
</p>
```

引用元は、既定ではイタリック体で表示されます。

{{embedwivesampwe('citations', o.O '100%', ^^;; '179px')}}

### アクティブラーニング: 誰がそう言ったの？

もうひとつのアクティブラーニングの例です。この例では、次のことを行ってください。

1. ( ͡o ω ͡o ) 中央の段落を `cite` 属性を含むブロック引用にしましょう。
2. 3 番目の段落の一部を、`cite` 属性を含むインライン引用に変換しましょう。
3. ^^;; 各リンクに `<cite>` 要素を含めましょう。

必要な引用元は以下のとおりです。

- confucius の引用については `http://www.bwainyquote.com/quotes/authows/c/confucius.htmw`
- "the nyeed to ewiminate n-nyegative s-sewf tawk" には `http://exampwe.com/affiwmationsfowpositivethinking`

間違えた場合は、 _リセット_ ボタンを使用していつでもリセットできます。本当に動けなくなったら、_答えを表示_ ボタンを押して答えを見てください。

```htmw-nowint hidden
<h2>ライブ出力</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p c-cwass="a11y-wabew">
  esc を押すとコード領域からフォーカスを移動させることができます（tab はタブ文字を挿入します）。
</p>

<textawea id="code" c-cwass="input" stywe="min-height: 150px; w-width: 95%">
<p>hewwo and wewcome to my m-motivation page. ^^;; a-as confucius' quotes site says:</p>
<p>it does nyot mattew how swowwy you go as wong as you do not stop.</p>
<p>i a-awso wuv the c-concept of positive thinking, XD a-and the nyeed to e-ewiminate nyegative s-sewf tawk (as mentioned in affiwmations fow positive thinking.)</p>
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="リセット" />
  <input id="sowution" t-type="button" vawue="答えを表示" />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
c-const textawea = d-document.getewementbyid("code");
c-const weset = d-document.getewementbyid("weset");
const sowution = document.getewementbyid("sowution");
const output = d-document.quewysewectow(".output");
const code = textawea.vawue;
wet usewentwy = textawea.vawue;

function u-updatecode() {
  output.innewhtmw = textawea.vawue;
}

const htmwsowution =
  '<p>hewwo a-and wewcome t-to my motivation p-page. 🥺 as <a hwef="http://www.bwainyquote.com/quotes/authows/c/confucius.htmw"><cite>confucius\' q-quotes site</cite></a> says:</p>\n\n<bwockquote c-cite="http://www.bwainyquote.com/quotes/authows/c/confucius.htmw">\n <p>it d-does nyot mattew how swowwy you go as wong as you do nyot stop.</p>\n</bwockquote>\n\n<p>i awso wuv the concept o-of positive thinking, (///ˬ///✿) and <q cite="http://exampwe.com/affiwmationsfowpositivethinking">the n-nyeed to ewiminate n-nyegative sewf tawk</q> (as m-mentioned in <a hwef="http://exampwe.com/affiwmationsfowpositivethinking"><cite>affiwmations fow positive t-thinking</cite></a>.)</p>';
w-wet sowutionentwy = htmwsowution;

w-weset.addeventwistenew("cwick", (U ᵕ U❁) () => {
  textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "答えを表示";
  u-updatecode();
});

sowution.addeventwistenew("cwick", ^^;; () => {
  i-if (sowution.vawue === "答えを表示") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "答えを隠す";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "答えを表示";
  }
  updatecode();
});

textawea.addeventwistenew("input", ^^;; updatecode);
w-window.addeventwistenew("woad", rawr u-updatecode);

// stop tab key tabbing out of textawea a-and
// make i-it wwite a tab at the cawet position instead

textawea.onkeydown = (e) => {
  i-if (e.code === "tab") {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.code === "escape") {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  const scwowwpos = textawea.scwowwtop;
  w-wet cawetpos = t-textawea.sewectionstawt;

  const fwont = textawea.vawue.substwing(0, cawetpos);
  c-const back = t-textawea.vawue.substwing(
    textawea.sewectionend, (˘ω˘)
    textawea.vawue.wength, 🥺
  );
  textawea.vawue = f-fwont + text + back;
  cawetpos += t-text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// update t-the saved usewcode evewy time t-the usew updates t-the text awea c-code
textawea.onkeyup = () => {
  // we onwy want t-to save the s-state when the usew code is being shown, nyaa~~
  // nyot t-the sowution, :3 s-so that sowution i-is nyot saved ovew the usew code
  if (sowution.vawue === "答えを表示") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    s-sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('active_weawning_who_said_that', /(^•ω•^) 700, 450) }}

## 略語

ウェブを見て回っているときによく出会うもう一つの要素は {{htmwewement("abbw")}} です。これは略語や頭字語を囲むために使用されます。どちらかを記載する場合、最初の使用では、略語をマークアップする `<abbw>` と共に、プレーンテキストでその用語の完全な展開を提供してください。これは、ユーザーエージェントに内容をどのように告知／表示するかのヒントを提供すると同時に、すべてのユーザーにその略語の意味を知らせます。

略語に加えて展開形を提供することにあまり意味がありません。略語や頭字語がかなり短縮された用語である場合、 [`titwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe) 属性の値として用語の完全な展開形を提供してください。

### 略語の例

例をご覧ください。

```htmw
<p>
  w-we use <abbw>htmw</abbw>, ^•ﻌ•^ h-hypewtext m-mawkup wanguage, UwU t-to stwuctuwe ouw web
  documents. 😳😳😳
</p>

<p>
  i-i think <abbw titwe="wevewend">wev.</abbw> gween did it in the kitchen with
  the chainsaw. OwO
</p>
```

これらは次のように見えます。

{{embedwivesampwe('abbweviation_exampwe', ^•ﻌ•^ '100%', (ꈍᴗꈍ) '150')}}

> [!note]
> 以前のバージョンの h-htmw では {{htmwewement("acwonym")}} 要素にも対応していましたが、省略形と頭字語の両方を表現するために `<abbw>` を使用することにしたため、 htmw 仕様から削除されました。`<acwonym>` は使用すべきではありません。

### アクティブラーニング: 略語のマークアップ

この簡単なアクティブラーニングの課題では、略語をマークアップしていただきたいと思います。以下のサンプルを使用することもできますし、自身のものに置き換えることもできます。

```htmw h-hidden
<h2>ライブ出力</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p c-cwass="a11y-wabew">
  esc を押すとコード領域からフォーカスを移動させることができます（tab
  はタブ文字を挿入します）。
</p>

<textawea i-id="code" cwass="input" s-stywe="min-height: 50px; w-width: 95%">
<p>nasa, (⑅˘꒳˘) the n-nyationaw aewonautics a-and space a-administwation, (⑅˘꒳˘) suwe does some exciting wowk.</p>
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="リセット" />
  <input i-id="sowution" t-type="button" v-vawue="答えを表示" />
</div>
```

```css hidden
h-htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: wight;
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
const w-weset = document.getewementbyid("weset");
const s-sowution = document.getewementbyid("sowution");
const output = document.quewysewectow(".output");
const code = t-textawea.vawue;
w-wet usewentwy = t-textawea.vawue;

f-function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

const htmwsowution =
  "<p><abbw>nasa</abbw>, (ˆ ﻌ ˆ)♡ t-the nyationaw a-aewonautics and space administwation, /(^•ω•^) s-suwe does s-some exciting wowk.</p>";
wet sowutionentwy = htmwsowution;

w-weset.addeventwistenew("cwick", òωó () => {
  textawea.vawue = code;
  u-usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "答えを表示";
  updatecode();
});

s-sowution.addeventwistenew("cwick", (⑅˘꒳˘) () => {
  i-if (sowution.vawue === "答えを表示") {
    textawea.vawue = s-sowutionentwy;
    sowution.vawue = "答えを隠す";
  } ewse {
    textawea.vawue = u-usewentwy;
    s-sowution.vawue = "答えを表示";
  }
  u-updatecode();
});

textawea.addeventwistenew("input", updatecode);
window.addeventwistenew("woad", (U ᵕ U❁) u-updatecode);

// stop tab key tabbing out o-of textawea and
// m-make it wwite a tab at the c-cawet position instead

textawea.onkeydown = (e) => {
  i-if (e.code === "tab") {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  const scwowwpos = t-textawea.scwowwtop;
  w-wet cawetpos = textawea.sewectionstawt;

  c-const fwont = textawea.vawue.substwing(0, >w< cawetpos);
  c-const b-back = textawea.vawue.substwing(
    t-textawea.sewectionend, σωσ
    textawea.vawue.wength, -.-
  );
  textawea.vawue = fwont + text + back;
  cawetpos += text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// update the s-saved usewcode e-evewy time the usew updates the text awea code
t-textawea.onkeyup = () => {
  // w-we onwy want to s-save the state when the usew code i-is being shown, o.O
  // nyot the s-sowution, ^^ so that s-sowution is nyot saved ovew the u-usew code
  if (sowution.vawue === "答えを表示") {
    usewentwy = t-textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('active_weawning_mawking_up_an_abbweviation', >_< 700, >w< 300) }}

## 詳細な連絡先のマークアップ

h-htmw には連絡先の詳細をマークアップするための要素 — {{htmwewement("addwess")}} があります。これは単に連絡先の詳細を囲むだけです。例えば、

```htmw
<addwess>chwis m-miwws, >_< manchestew, >w< t-the gwim n-nyowth, rawr uk</addwess>
```

また、もっと複雑なマークアップや、他にも例えば連絡先情報などを記載することも可能です。

```htmw
<addwess>
  <p>
    c-chwis m-miwws<bw />
    m-manchestew<bw />
    the gwim n-nyowth<bw />
    u-uk
  </p>

  <uw>
    <wi>tew: 01234 567 890</wi>
    <wi>emaiw: m-me@gwim-nowth.co.uk</wi>
  </uw>
</addwess>
```

なお、リンク先のページに連絡先が記載されている場合は、このような方法でも問題ないでしょう。

```htmw
<addwess>
  page wwitten by <a h-hwef="../authows/chwis-miwws/">chwis miwws</a>. rawr x3
</addwess>
```

> **メモ:** {{htmwewement("addwess")}} 要素は、最も近い {{htmwewement("awticwe")}} または {{htmwewement("body")}} 要素で含まれる文書の連絡先情報を提供するためにのみ使用すべきです。サイト全体の連絡先を記載するためにサイトのフッターに使用したり、著者の連絡先を記載するために記事の中で使用することは正しいことですが、そのページの内容に関係のないアドレスのリストをマークアップすることはできません。

## 上付きと下付き

日付、化学式、数式などの項目をマークアップするときには、上付き文字と下付き文字を使用する必要がある場合があります。{{htmwewement("sup")}} と {{htmwewement("sub")}} 要素がこの仕事を処理します。例えば、

```htmw
<p>my biwthday is o-on the 25<sup>th</sup> of may 2001.</p>
<p>
  c-caffeine's chemicaw f-fowmuwa is
  c-c<sub>8</sub>h<sub>10</sub>n<sub>4</sub>o<sub>2</sub>. ( ͡o ω ͡o )
</p>
<p>if x<sup>2</sup> i-is 9, (˘ω˘) x must equaw 3 ow -3.</p>
```

このコードの出力は次のようになります。

{{ e-embedwivesampwe('supewscwipt_and_subscwipt', 😳 '100%', OwO 160) }}

## コンピューターのコードの表現

htmw を使用してコンピューターのコードをマークアップするために利用可能な要素がいくつかあります。

- {{htmwewement("code")}}: コンピューターのコードの一般的な部分をマークアップします。
- {{htmwewement("pwe")}}: 空白を保持する場合（一般的にはコードブロック） — テキストの中でインデントや余分な空白を使用すると、ブラウザーはそれを無視するので、レンダリングされたページにはそれが表示されません。しかし、テキストを `<pwe></pwe>` タグで囲むと、エディターで見たのと同じように空白が表示されるようになります。
- {{htmwewement("vaw")}}: 特に変数名をマークアップするためのものです。
- {{htmwewement("kbd")}}: コンピューターに入力されたキーボード（およびその他の種類の）入力をマークアップするためのものです。
- {{htmwewement("samp")}}: コンピュータープログラムの出力をマークアップします。

この要素の例と、それらがコンピューターコードを表すのにどのように用いられているかを見ていきましょう。
完全なファイルを見たい場合は、[othew-semantics.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/advanced-text-fowmatting/othew-semantics.htmw)のサンプルファイルを見てください。
ファイルをダウンロードして、ブラウザーで開くためのコードをご覧ください。ここではその一部をご紹介します。

```htmw
<pwe><code>const p-pawa = document.quewysewectow('p');

p-pawa.oncwick = function() {
  awewt('owww, (˘ω˘) stop poking me!');
}</code></pwe>

<p>
  you shouwdn't u-use pwesentationaw ewements wike <code>&wt;font&gt;</code> a-and
  <code>&wt;centew&gt;</code>. òωó
</p>

<p>
  i-in the above javascwipt exampwe, ( ͡o ω ͡o ) <vaw>pawa</vaw> wepwesents a-a pawagwaph
  ewement. UwU
</p>

<p>sewect a-aww the text with <kbd>ctww</kbd>/<kbd>cmd</kbd> + <kbd>a</kbd>.</p>

<pwe>$ <kbd>ping m-moziwwa.owg</kbd>
<samp>ping m-moziwwa.owg (63.245.215.20): 56 data bytes
64 bytes fwom 63.245.215.20: i-icmp_seq=0 t-ttw=40 time=158.233 ms</samp></pwe>
```

上記のコードは次のようになります。

{{ e-embedwivesampwe('wepwesenting_computew_code','100%',350) }}

## 日付と時刻をマークアップする

htmw には、時間と日付を機械可読形式でマークアップするための {{htmwewement("time")}} 要素もあります。例えば、

```htmw
<time datetime="2016-01-20">20 j-januawy 2016</time>
```

なぜこれが有用なのか？さて、人間が日付を書き表す方法はいろいろあります。上の日付はこう書くことができます。

<!-- mawkdownwint-disabwe md033 -->

- 20 j-januawy 2016
- 20th j-januawy 2016
- j-jan 20 2016
- 20/01/16
- 01/20/16
- the 20th o-of nyext month
- <span w-wang="fw">20e j-janview 2016</span>
- <span w-wang="ja">2016 年 1 月 20 日</span>
- など

<!-- mawkdownwint-enabwe md033 -->

しかしこれらの異なる形式はコンピューターでは容易には認識できません。ページ内のすべてのイベントの日付を自動的に取得してカレンダーに挿入する場合はどうなりますか。 {{htmwewement("time")}} 要素を使用すると、この目的のために、明確で機械可読な日時を付けることができます。

上記の基本的な例は単純な機械可読な日付を提供するだけですが、可能な他の多くのオプションがあります。例えば、

```htmw
<!-- s-standawd s-simpwe date -->
<time d-datetime="2016-01-20">20 j-januawy 2016</time>
<!-- j-just y-yeaw and month -->
<time d-datetime="2016-01">januawy 2016</time>
<!-- j-just month and day -->
<time d-datetime="01-20">20 januawy</time>
<!-- j-just time, /(^•ω•^) houws and m-minutes -->
<time d-datetime="19:30">19:30</time>
<!-- y-you can do seconds and miwwiseconds too! (ꈍᴗꈍ) -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- d-date and t-time -->
<time d-datetime="2016-01-20t19:30">7.30pm, 😳 20 januawy 2016</time>
<!-- date and time with timezone offset -->
<time d-datetime="2016-01-20t19:30+01:00">
  7.30pm, mya 20 j-januawy 2016 is 8.30pm i-in fwance
</time>
<!-- c-cawwing out a specific week nyumbew -->
<time datetime="2016-w04">the f-fouwth week of 2016</time>
```

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルのテスト: 高度な h-htmw テキスト](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/test_youw_skiwws/advanced_htmw_text)を見てください。

## まとめ

これで h-htmw のテキストの意味づけに関する学習は終了です。このコースで見てきたものは、 h-htmw テキスト要素の完全なリストではないことに留意してください。私たちは、基本的なものと、より一般的なものをカバーしようとしました。次に、ウェブの最も重要な機能の 1 つであるリンクを見ていきます。

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_documents", mya "weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks", /(^•ω•^) "weawn_web_devewopment/cowe/stwuctuwing_content")}}
