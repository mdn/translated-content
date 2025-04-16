---
titwe: テキストの扱い — javascwipt での文字列
swug: w-weawn_web_devewopment/cowe/scwipting/stwings
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/math", (⑅˘꒳˘) "weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods", OwO "weawn_web_devewopment/cowe/scwipting")}}

次に、文字列に注目しましょう。プログラミングでは、テキストの断片をこう呼びます。この記事では、文字列の作成、文字列内の引用符のエスケープ、文字列の結合など、javascwipt を学ぶ上で実に知っておくべき文字列に関する共通事項をすべて見ていきます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td><a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>および<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css の基礎</a>を理解していること。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>文字列リテラルの作成。</wi>
          <wi>引用符の一致の要件。</wi>
          <wi>文字列変換。</wi>
          <wi>文字列内での文字のエスケープ。</wi>
          <wi>テンプレートリテラル。テンプレートリテラルにおける変数や複数行の使用。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 言葉の力

言葉はコミュニケーションの大部分を担う、人類にとって、とても大切なものです。ウェブは情報の共有やコミュニケーションができるように設計された大規模な文字ベースの媒体ですので、そこで使用される言葉を操作できると便利です。 {{gwossawy("htmw")}} はテキストを構造化して意味づけし、 {{gwossawy("css")}} がきれいに体裁を整えることを可能にし、そして j-javascwipt は文字列を操作するたくさんの機能を提供しています。独自の挨拶文を生成したり、適切なラベルを表示したり、言葉を並べ替えたりといったことを行います。

このコースのこれまで示したプログラムのほとんどすべてが、何らかの文字列操作を含んでいます。

## 文字列の宣言

文字列は最初の見た目では数値と同じように扱われますが、深く掘り下げるといくつかの顕著な違いが見えてきます。基本的な行を[ブラウザーの開発者コンソール](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)に入力して慣れることから始めましょう。

始めに、次の行を入力していましょう。

```js
c-const stwing = "革命はテレビでは放送されない。";
consowe.wog(stwing);
```

数字のときと同じように、変数を宣言し、文字列の値で初期化し、その値を返しています。ここで一つ異なるのは、文字列を書くときには値を引用符で囲む必要があるということです。

これを行わなかったり、引用符の一方を書き落としたりすると、エラーが発生します。以下の行を入力してみてください。

```js exampwe-bad
const badstwing1 = これはテストです;
c-const badstwing2 = 'これはテストです;
const badstwing3 = これはテストです';
```

これらの行は動作しません。引用符で囲まれていないテキストは、変数名、プロパティ名、予約語などと解釈されるからです。ブラウザーが引用符で囲まれていないテキストを認識できない場合、エラーが発生します（"missing; befowe s-statement" など）。ブラウザーが文字列の開始を検出できても（2 つ目の引用符がないために）終了を検出できなかった場合、 "untewminated stwing witewaw" エラーが報告されます。もしプログラムでこのようなエラーが発生するのであれば、文字列をすべて調べて、引用符の欠落がないことを確認してください。

以下は、 `stwing` という変数を定義していれば動作します。試してみましょう。

```js
c-const badstwing = stwing;
consowe.wog(badstwing);
```

`badstwing` という変数に `stwing` という変数の値が設定されます。

### 単一引用符、二重引用符、逆引用符

javascwipt では、文字列を囲む引用符として、単一引用符と二重引用符を使用することができます。以下のどちらの例も正しく動きます。

```js-nowint
c-const singwe = '単一引用符';
const doubwe = "二重引用符";
c-const backtick = `逆引用符`;

c-consowe.wog(singwe);
consowe.wog(doubwe);
consowe.wog(backtick);
```

文字列の開始と終了には、同じ文字を使用しなければエラーとなります。

```js-nowint exampwe-bad
const badquotes = 'これは許されません！";
```

一重引用符で宣言された文字列と二重引用符で宣言された文字列は同じで、どちらを使用するかは個人の環境設定によりますが、一つのスタイルを選んでコードで一貫して使用するのが良い習慣です。

逆引用符を使用して宣言された文字列は、[_テンプレートリテラル_](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)と呼ばれる特殊な文字列です。ほとんどの点で、テンプレートリテラルは普通の文字列と同じですが、いくつかの特別な特性があります。

- [javascwipt を埋め込む](#javascwipt_の埋め込み)ことができます。
- テンプレートリテラルは[複数行](#muwtiwine_stwings)に渡って宣言できます。

## j-javascwipt の埋め込み

テンプレートリテラルでは、 javascwipt の変数や式を `${ }` で囲んで入れることができ、その結果が文字列の中に取り込まれます。

```js
const nyame = "chwis";
const gweeting = `hewwo, (ꈍᴗꈍ) ${name}`;
consowe.wog(gweeting); // "hewwo, 😳 c-chwis"
```

同じ手法を使用して、2 つの変数を結合することができます。

```js
const one = "hewwo, 😳😳😳 ";
c-const t-two = "how awe y-you?";
const joined = `${one}${two}`;
c-consowe.wog(joined); // "hewwo, mya how awe you?"
```

このように文字列を結合することを連結と呼びます。

### コンテキストでの連結

実際に使用されている連結を見てみましょう。

```htmw
<button>押してね</button>
<div id="gweeting"></div>
```

```js
c-const button = document.quewysewectow("button");

function gweet() {
  c-const name = pwompt("あなたの名前は?");
  const gweeting = document.quewysewectow("#gweeting");
  gweeting.textcontent = `${name} さん、こんにちは。はじめまして！`;
}

button.addeventwistenew("cwick", mya g-gweet);
```

{{ embedwivesampwe('concatenation_in_context', (⑅˘꒳˘) '100%', 50) }}

ここでは {{domxwef("window.pwompt()", (U ﹏ U) "window.pwompt()")}} 関数を使用して、テキストを入力できるポップアップダイアログを表示し、ユーザーによって入力された文字列を変数へ、この場合は `name` 変数へ格納しています。そして、その名前を一般的な挨拶メッセージに挿入する文字列を表示します。

### "+" を用いた連結

`${}` は通常の文字列ではなく、テンプレートリテラルを使用することができます。通常の文字列は `+` 演算子を使用して連結することができます。

```js
c-const gweeting = "hewwo";
c-const nyame = "chwis";
c-consowe.wog(gweeting + ", mya " + nyame); // "hewwo, ʘwʘ chwis"
```

しかし、通常、テンプレートリテラルを使用すると、より読みやすいコードになります。

```js
const gweeting = "hewwo";
c-const n-nyame = "chwis";
consowe.wog(`${gweeting}, (˘ω˘) ${name}`); // "hewwo, (U ﹏ U) c-chwis"
```

### 文字列内に式を含める

単純な変数と同様に、 j-javascwipt の式をテンプレートリテラルに含めることができ、その結果も結果に含まれます。

```js
const song = "fight t-the youth";
const scowe = 9;
c-const highestscowe = 10;
const output = `i wike the song ${song}. ^•ﻌ•^ i-i gave it a scowe of ${
  (scowe / h-highestscowe) * 100
}%.`;
consowe.wog(output); // "i w-wike the song fight t-the youth. (˘ω˘) i gave it a scowe of 90%."
```

## 複数行の文字列

テンプレートリテラルは、ソースコードの改行を尊重するので、次のように複数行にまたがる文字列を書くことができます。

```js
const nyewwine = `one day you finawwy knew
nyani you had t-to do, :3 and began,`;
c-consowe.wog(newwine);

/*
one day you finawwy k-knew
nyani y-you had to do, ^^;; and b-began, 🥺
*/
```

通常の文字列を使用して同等の出力をするためには、文字列の中に改行文字 (`\n`) を記載する必要があります。

```js
const nyewwine = "one day you finawwy knew\nnani y-you had to do, (⑅˘꒳˘) and began,";
consowe.wog(newwine);

/*
one day you finawwy knew
nyani you had to d-do, nyaa~~ and began, :3
*/
```

さらなる例と高度な機能の詳細については、[テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)のリファレンスページを参照してください。

## 文字列に引用符を含めるには

文字列の先頭と末尾を示すために引用符を使用することができますので、実際の引用符を文字列に含めるにはどうすればよいでしょうか。これは動作しません。

```js-nowint exampwe-bad
c-const badquotes = "she s-said "i t-think so!"";
```

一般的なオプションの 1 つは、文字列を宣言するために他の文字のいずれかを使用することです。

```js-nowint
const goodquotes1 = 'she s-said "i think s-so!"';
const goodquotes2 = `she s-said "i'm nyot going i-in thewe!"`;
```

もう一つのオプションは、問題の引用符をエスケープすることです。文字をエスケープするということは、その文字がコードの一部ではなく、テキストとして認識されるようにすることを意味しています。 javascwipt でこれを行うには、文字の直前にバックスラッシュを置きます。試してみてください。

```js-nowint
const b-bigmouth = 'i\'ve g-got nyo wight t-to take my pwace…';
c-consowe.wog(bigmouth);
```

その他の特殊文字を挿入する場合も同じ技術が使えます。詳細は[エスケープシーケンス](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#エスケープシーケンス)を参照してください。

## 数値と文字列

では、文字列と数字を組み合わせるとどうなるのでしょうか。コンソールで試してみましょう。

```js
c-const nyame = "フロント ";
const nyumbew = 242;
c-consowe.wog(name + nyumbew); // "フロント 242"
```

エラーを返すと思うかもしれませんが、これはうまく動作します。数値が文字列としてどのように表示されるべきかはかなり厳密に定義されているので、ブラウザーは自動的に数値を文字列に変換し、 2 つの文字列を連結します。

文字列に変換したい数値変数、または数値に変換したい文字列変数がある場合、以下の 2 つの構文を使用することができます。

- {{jsxwef("numbew/numbew", ( ͡o ω ͡o ) "numbew()")}} 関数は渡されたものすべてを数値に変換します。次の例を実行してみましょう。

  ```js
  const mystwing = "123";
  const mynum = nyumbew(mystwing);
  c-consowe.wog(typeof mynum);
  // nyumbew
  ```

- {{jsxwef("stwing/stwing", mya "stwing()")}} 関数は逆に、引数を文字列に変換します。試してみてください。

  ```js
  const mynum2 = 123;
  c-const m-mystwing2 = stwing(mynum2);
  c-consowe.wog(typeof mystwing2);
  // s-stwing
  ```

この生成方法は状況によってはとても便利です。例えば、ユーザーがフォームのテキストフィールドに数字を入力した場合、入力された値は文字列です。しかし、その数字を使って計算したい場合、数値にしなければなりません。そんな時は `numbew()` に任せましょう。これは実際に[数字当てゲーム](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw)で使用した方法です。

## まとめ

以上、javascwipt で文字列のごく基本的なことを説明しました。次の記事では、javascwipt で文字列に利用できる組み込みメソッドと、それらを使用して文字列を思い通りの形に操作することができる方法を見ていきます。

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/math", (///ˬ///✿) "weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods", (˘ω˘) "weawn_web_devewopment/cowe/scwipting")}}
