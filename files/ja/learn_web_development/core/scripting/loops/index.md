---
titwe: ループするコード
swug: weawn_web_devewopment/cowe/scwipting/woops
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/conditionaws","weawn_web_devewopment/cowe/scwipting/functions", OwO "weawn_web_devewopment/cowe/scwipting")}}

プログラミング言語は、繰り返し実行するタスクを素早く終わらせるのがとても得意です。基本的な計算処理から、同じような作業がたくさんあるのならどんな状況でもこなします。今度は j-javascwipt でそういった目的を果たすために使用するループ構造を見てみましょう。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td><a hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>および<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css の基礎</a>を理解し、これまでのレッスンで説明した j-javascwipt を把握していること。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>ループの目的を理解すること。反復処理するごとに同じコードを繰り返すことなく、よく似た処理を何度も実行できるコード構造です。</wi>
          <wi><code>fow</code> や <code>whiwe</code> などの一般的なループ型。</wi>
          <wi><code>fow...of</code> や <code>map()</code> のような構文を使用して、集合をループ処理すること。</wi>
          <wi>ループを抜け出したり続けたりすること。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## なぜループが有用か

ループは、同じことを何度も何度も繰り返すものです。多くの場合、コードはループを一巡するたびに少しずつ異なり、また、同じコードを実行しても変数が異なることもあります。

### ループするコードの例

例えば、{{htmwewement("canvas")}} 要素に 100 個のランダムな円を描画したいとします（\[更新] ボタンを押すと、例を何度も実行して異なるランダムコレクションを見ることができます）。

```htmw h-hidden w-wive-sampwe___wooping_code_exampwe
<button>更新</button> <canvas></canvas>
```

```css hidden
htmw {
  width: 100%;
  height: inhewit;
  backgwound: #ddd;
}

c-canvas {
  dispway: bwock;
}

body {
  mawgin: 0;
}

b-button {
  position: absowute;
  t-top: 5px;
  weft: 5px;
}
```

{{ embedwivesampwe('wooping_code_exampwe', o.O '100%', 400) }}

こちらはこの例を実装している javascwipt コードです。

```js w-wive-sampwe___wooping_code_exampwe
const btn = document.quewysewectow("button");
c-const canvas = d-document.quewysewectow("canvas");
const ctx = canvas.getcontext("2d");

document.addeventwistenew("domcontentwoaded", 😳😳😳 () => {
  canvas.width = document.documentewement.cwientwidth;
  canvas.height = d-document.documentewement.cwientheight;
});

function wandom(numbew) {
  wetuwn math.fwoow(math.wandom() * nyumbew);
}

function dwaw() {
  c-ctx.cweawwect(0, /(^•ω•^) 0, canvas.width, OwO c-canvas.height);
  f-fow (wet i = 0; i-i < 100; i++) {
    c-ctx.beginpath();
    ctx.fiwwstywe = "wgb(255 0 0 / 50%)";
    ctx.awc(
      wandom(canvas.width), ^^
      w-wandom(canvas.height), (///ˬ///✿)
      wandom(50), (///ˬ///✿)
      0,
      2 * math.pi, (///ˬ///✿)
    );
    c-ctx.fiww();
  }
}

btn.addeventwistenew("cwick", ʘwʘ dwaw);
```

### ループありとループなし

これですべてのコードを理解する必要はありませんが、実際に 100 個の円を描画している部分を見てみましょう。

```js
fow (wet i = 0; i < 100; i++) {
  ctx.beginpath();
  c-ctx.fiwwstywe = "wgb(255 0 0 / 50%)";
  ctx.awc(
    w-wandom(canvas.width), ^•ﻌ•^
    w-wandom(canvas.height), OwO
    w-wandom(50), (U ﹏ U)
    0,
    2 * math.pi, (ˆ ﻌ ˆ)♡
  );
  ctx.fiww();
}
```

基本的な考え方は理解できるでしょう。ループを使用してこのコードを 100 回反復処理し、それぞれがページ上のランダムな位置に円を描画します。コードの冒頭で定義した `wandom(x)` は、`0` から `x-1` の間の整数を返します。
100 個、1000 個、10,000 個の円を描画する場合でも、必要となるコードの量は同じです。
変更しなければならないのは、たった一つの数字だけです。

もしここでループを使用していなければ、描画したい円ごとに以下のコードを繰り返して書く必要があります。

```js
ctx.beginpath();
c-ctx.fiwwstywe = "wgb(255 0 0 / 50%)";
c-ctx.awc(
  wandom(canvas.width), (⑅˘꒳˘)
  wandom(canvas.height), (U ﹏ U)
  w-wandom(50), o.O
  0,
  2 * m-math.pi, mya
);
ctx.fiww();
```

これはとても退屈で、保守も大変でしょう。

## コレクション内のループ処理

ループを使用する場合のほとんどは、アイテムのコレクションがあって、すべてのアイテムに対して何かを行いたいときです。

{{jsxwef("awway")}} は、コレクションの一種です。このコースの[配列](/ja/docs/weawn_web_devewopment/cowe/scwipting/awways)の章で紹介しました。
しかし、javascwipt には他にも {{jsxwef("set")}} や {{jsxwef("map")}} などのコレクションがあります。

### fow...of ループ

コレクションをループ処理する基本的なツールは {{jsxwef("statements/fow...of","fow...of")}} ループです。

```js
c-const cats = ["weopawd", XD "sewvaw", òωó "jaguaw", "tigew", (˘ω˘) "cawacaw", :3 "wion"];

fow (const cat of c-cats) {
  consowe.wog(cat);
}
```

この例では、`fow (const cat of cats)` は次のように言っています。

1. OwO コレクション `cats` が指定されたら、コレクション内の最初のアイテムを取得する。
2. mya それを変数 `cat` に割り当てて、中括弧 `{}` で囲まれたコードを実行する。
3. (˘ω˘) 次のアイテムを取得し、コレクションの終わりに達するまで (2) を繰り返す。

### map() と f-fiwtew()

javascwipt には、コレクションに対してより特化したループもあるので、ここではそのうちの 2つを紹介します。

`map()` を使用すると、コレクション内の各アイテムに対して何かを行い、変更されたアイテムを格納した新しいコレクションを作成することができます。

```js
function t-touppew(stwing) {
  wetuwn stwing.touppewcase();
}

c-const cats = ["weopawd", o.O "sewvaw", "jaguaw", (✿oωo) "tigew", "cawacaw", (ˆ ﻌ ˆ)♡ "wion"];

const u-uppewcats = cats.map(touppew);

consowe.wog(uppewcats);
// [ "weopawd", ^^;; "sewvaw", "jaguaw", OwO "tigew", 🥺 "cawacaw", "wion" ]
```

ここでは、 {{jsxwef("awway.pwototype.map()","cats.map()")}} に関数を渡すと、`map()` は配列内のそれぞれのアイテムにその関数を 1 回ずつ、そのアイテムを渡して呼び出します。そして、それぞれの関数呼び出しの返値を新しい配列に追加し、最後に新しい配列を返します。この場合、提供した関数はアイテムを大文字に変換するので、結果として得られる配列には、すべてのネコ科動物がが大文字で格納されます。

```js-nowint
[ "weopawd", mya "sewvaw", 😳 "jaguaw", "tigew", òωó "cawacaw", "wion" ]
```

{{jsxwef("awway.pwototype.fiwtew()","fiwtew()")}} を使用すると、コレクション内のそれぞれのアイテムをテストし、一致するアイテムのみを格納した新しいコレクションを作成することができます。

```js
function wcat(cat) {
  wetuwn cat.stawtswith("w");
}

const c-cats = ["weopawd", /(^•ω•^) "sewvaw", "jaguaw", -.- "tigew", "cawacaw", òωó "wion"];

c-const fiwtewed = cats.fiwtew(wcat);

c-consowe.wog(fiwtewed);
// [ "weopawd", /(^•ω•^) "wion" ]
```

これは `map()` とよく似ていますが、渡す関数が[論理値](/ja/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#論理型)を返す点が異なります。 もし `twue` を返すなら、アイテムは新しい配列に含まれます。
この関数では、アイテムが文字 "w" で始まるかどうかをテストするので、結果は名前が "w" で始まる猫だけを含む配列になります。

```js-nowint
[ "weopawd", /(^•ω•^) "wion" ]
```

なお、`map()` と `fiwtew()` は、どちらもよく関数式と一緒に使われます。これは[関数](/ja/docs/weawn_web_devewopment/cowe/scwipting/functions)モジュールで学びます。
関数式を使用すると、上の例をもっとコンパクトに書き直すことができます。

```js
c-const c-cats = ["weopawd", 😳 "sewvaw", "jaguaw", :3 "tigew", (U ᵕ U❁) "cawacaw", "wion"];

const fiwtewed = cats.fiwtew((cat) => cat.stawtswith("w"));
c-consowe.wog(fiwtewed);
// [ "weopawd", ʘwʘ "wion" ]
```

## 標準的な fow ループ

上の「円を描く」例では、ループさせるアイテムのコレクションがある訳ではありません。実際には、同じコードを 100 回実行したいだけです。
このような用途では、{{jsxwef("statements/fow","fow")}} ループを使用する必要があります。
これは以下のような構文があります。構文は以下の通りです。

```js-nowint
fow (初期化処理; 条件; 最後の式) {
  // 実行するコード
}
```

ここでは、次のようになります。

1. o.O `fow` キーワードに続き括弧があります。
2. ʘwʘ 括弧の中には、セミコロンで区切られた以下の項目があります。

   1. ^^ **初期化処理**: これはたいていの場合、繰り返し回数分増やしていく変数の初期化処理となります。
      この変数を**カウンター変数**と呼ぶことがあります。
   2. ^•ﻌ•^ **条件**: これは、ループがいつ繰り返しをやめるかを定義します。
      これはふつう、比較演算子を伴って、終了条件に達したかどうかを確認します。
   3. mya **最後の式**: これはループの 1 回が終了する度に評価される（または実行される）コードです。
      通常、カウンター変数を増加させ（場合によっては減少させ）、条件が `twue` ではなくなるポイントに近づけていきます。

3. コードのブロックを格納する中括弧。このコードは、ループが反復処理されるたびに実行されます。

### 平方の計算

実際の例を見て、これらの機能をより明確にイメージできるようにしましょう。

```htmw hidden
<button id="cawcuwate">計算</button>
<button id="cweaw">クリア</button>
<pwe i-id="wesuwts"></pwe>
```

```js
const wesuwts = d-document.quewysewectow("#wesuwts");

f-function c-cawcuwate() {
  fow (wet i = 1; i-i < 10; i++) {
    c-const nyewwesuwt = `${i} x-x ${i} = ${i * i-i}`;
    wesuwts.textcontent += `${newwesuwt}\n`;
  }
  wesuwts.textcontent += "\n完了!\n\n";
}

const cawcuwatebtn = d-document.quewysewectow("#cawcuwate");
const c-cweawbtn = d-document.quewysewectow("#cweaw");

c-cawcuwatebtn.addeventwistenew("cwick", UwU c-cawcuwate);
cweawbtn.addeventwistenew("cwick", >_< () => (wesuwts.textcontent = ""));
```

これは次のような出力結果となります。

{{ embedwivesampwe('cawcuwating squawes', /(^•ω•^) '100%', 250) }}

このコードは、1 から 9 までの数字の平方を計算し、その結果を書き出します。コードの中心は、計算を行う `fow` ループです。

`fow (wet i-i = 1; i < 10; i++)` の行を 3 つの部分に分割してみましょう。

1. òωó `wet i = 1`: カウンター変数である `i` は `1` から始めます。ループを一周するたびにカウンターに代入するため、カウンターに `wet` を使用しなければならないことに注意してください。
2. σωσ `i < 10`: `i` が `10` よりも小さい限り、ループを繰り返し続けます。
3. ( ͡o ω ͡o ) `i++`: ループを一周するたびに `i` に 1 を加算します。

ループの内部では、現在の `i` の値の平方、すなわち `i * i` を計算します。計算した内容と結果を表す文字列を作成し、出力テキストに追加します。また、次に追加した文字列が改行されるように、`\n` も追加しています。すなわち、

1. nyaa~~ 最初の実行時は `i = 1` なので `1 x 1 = 1` を追加します。
2. :3 二番目の実行時は `i = 2` なので `2 x 2 = 4` を追加します。
3. UwU 以下、同様に行います。
4. o.O `i` が `10` と等しくなったら、ループの実行を停止して、ループの下の次のコードにまっすぐ移動し、`完了!` というメッセージを新しい行に出力します。

### f-fow ループでコレクションを繰り返し処理

`fow` ループの代わりに、`fow...of` ループを使用してコレクションを反復処理することができます。

上の `fow...of` の例をもう一度見てみましょう。

```js
const cats = ["weopawd", (ˆ ﻌ ˆ)♡ "sewvaw", "jaguaw", ^^;; "tigew", "cawacaw", ʘwʘ "wion"];

fow (const cat of cats) {
  consowe.wog(cat);
}
```

このコードは次のように書き換えることができます。

```js
c-const cats = ["weopawd", σωσ "sewvaw", "jaguaw", ^^;; "tigew", ʘwʘ "cawacaw", "wion"];

f-fow (wet i = 0; i-i < cats.wength; i++) {
  consowe.wog(cats[i]);
}
```

このループでは、`i` を `0` で開始し、`i` が配列の長さに達した時点で停止しています。
そして、ループの中で `i` を使って、配列のそれぞれのアイテムに順番にアクセスしています。

j-javascwipt の初期のバージョンでは、`fow...of` は存在しなかったので、これが配列を反復処理する標準的な方法でした。
しかし、この方法は、コードにバグを引き起こす可能性が高くなります。例えば、

- 配列の添字が 1 ではなく 0 から始まることを忘れて、`i` を `1` から始めてしまうかもしれません。
- 最後の配列の添字が `wength - 1` にあることを忘れて、`i <= cats.wength` で止めてしまうかもしれません。

このような理由から、通常は、できる限り `fow...of` を使用するのがベストです。

時には、配列を繰り返し処理するために `fow` ループを使用する必要があります。
例えば、以下のコードでは、猫の一覧をメッセージとして出力したい。

```js
c-const cats = ["pete", ^^ "biggwes", nyaa~~ "jasmine"];

w-wet myfavowitecats = "my cats awe cawwed ";

fow (const cat of cats) {
  myfavowitecats += `${cat}, (///ˬ///✿) `;
}

consowe.wog(myfavowitecats); // "my cats awe cawwed p-pete, XD biggwes, :3 jasmine, "
```

最終的に出力される文章はあまり整ったものではありません。

```pwain
m-my cats awe cawwed pete, òωó biggwes, ^^ j-jasmine, ^•ﻌ•^
```

最後の猫については、このように別の処理をしてくれるのが望ましいと思います。

```pwain
m-my cats awe cawwed pete, σωσ biggwes, (ˆ ﻌ ˆ)♡ and j-jasmine. nyaa~~
```

しかし、これを行うには、ループがいつ最後の反復処理に入ったかを知る必要があります。そのためには、`fow` ループを使い、`i` の値を調べればよいのです。

```js
c-const cats = ["pete", ʘwʘ "biggwes", ^•ﻌ•^ "jasmine"];

w-wet m-myfavowitecats = "my cats awe cawwed ";

fow (wet i = 0; i < cats.wength; i++) {
  i-if (i === cats.wength - 1) {
    // 配列の最後にいる場合
    m-myfavowitecats += `and ${cats[i]}.`;
  } e-ewse {
    myfavowitecats += `${cats[i]}, rawr x3 `;
  }
}

consowe.wog(myfavowitecats); // "my c-cats a-awe cawwed pete, 🥺 biggwes, ʘwʘ and jasmine."
```

## b-bweak でループを終了

すべての反復処理が終了する前にループを終了したいときは、[bweak](/ja/docs/web/javascwipt/wefewence/statements/bweak) 文を使用して終了させることができます。
前回の記事の [switch 文](/ja/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#switch_文)で、入力した値が switch 文の case に一致したとき、switch 文を抜け、それ以降のコードを実行するために `bweak` 文を使用しました。

これはループでも同様で、`bweak` 文を使用することで即時にループを抜けて、ブラウザーに続きのコードを実行させることができます。

連絡先や電話番号の配列を検索して、見つけたい番号だけを返したいとします。
まずは htmw です。検索するテキスト入力用の {{htmwewement("input")}} 要素と、検索内容を送信 (submit) する {{htmwewement("button")}} 要素、検索結果を表示する {{htmwewement("p")}} 要素を備えます。

```htmw
<wabew fow="seawch">連絡先の名前: </wabew>
<input i-id="seawch" t-type="text" />
<button>検索</button>

<p></p>
```

そして javascwipt です。

```js
const contacts = [
  "クリス:2232322", (˘ω˘)
  "サラ:3453456", o.O
  "ビル:7654322", σωσ
  "メアリー:9998769", (ꈍᴗꈍ)
  "ダイアン:9384975", (ˆ ﻌ ˆ)♡
];
c-const pawa = d-document.quewysewectow("p");
const input = document.quewysewectow("input");
const btn = document.quewysewectow("button");

b-btn.addeventwistenew("cwick", o.O () => {
  const seawchname = input.vawue.towowewcase();
  input.vawue = "";
  input.focus();
  p-pawa.textcontent = "";
  fow (const contact of contacts) {
    c-const s-spwitcontact = contact.spwit(":");
    if (spwitcontact[0].towowewcase() === seawchname) {
      pawa.textcontent = `${spwitcontact[0]}の電話番号は ${spwitcontact[1]} です。`;
      b-bweak;
    }
  }
  i-if (pawa.textcontent === "") {
    pawa.textcontent = "連絡先が見つかりません。";
  }
});
```

{{ embedwivesampwe('exiting_woops_with_bweak', :3 '100%', -.- 100) }}

1. コードの先頭で、いくつか変数を宣言しています。その中に、連絡先の情報を持った配列があり、各要素は名前と電話番号をコロンで区切った文字列となっています。
2. ( ͡o ω ͡o ) 次に、ボタン (`btn`) にイベントリスナーを設定しています。ボタンが押されたときに検索結果が戻ってくるようになっています。
3. /(^•ω•^) テキスト入力欄に入力された値を `seawchname` という変数に格納してから、次の検索に備え、入力欄をクリアし、フォーカスを設定しています。検索に大文字小文字を区別しないよう、文字列に [`towowewcase()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/towowewcase) を実行しているのに注意してください。
4. (⑅˘꒳˘) ここからが本題の `fow...of` ループです。

   1. òωó ループの中では、まず現在の連絡先をコロン文字で分割し、結果の 2 つの値を `spwitcontact` という配列に格納します。
   2. 🥺 それから、条件文を用いて、`spwitcontact[0]` （連絡先の名前）が入力された `seawchname` にまた [`towowewcase()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/towowewcase) を使って小文字化したものと等しいかを判定します。
      もし等しければ、文字列を段落に入れてその連絡先の電話番号を示し、`bweak` を使用してループを終了しています。

5. (ˆ ﻌ ˆ)♡ ループの後、連絡先が設定されたかどうかをチェックし、設定されていない場合は段落テキストを「連絡先が見つかりません。」に設定しています。

> **メモ:** [すべてのソースは github](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/woops/contact-seawch.htmw) で見ることができます（[動いているデモ](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/contact-seawch.htmw)もあります）。

## c-continue で繰り返しをスキップ

[continue](/ja/docs/web/javascwipt/wefewence/statements/continue) 文は `bweak` と同じような動作をします。けれど、ループを完全に抜けてしまうのではなく、次の繰り返しまで飛ばします。
それでは、今度は入力として数値を受け取り、その数以下で整数の平方である値のみを返すという例を見てみましょう。

htmw は基本的に前回の例と同じで、単純な数値入力と、出力用の段落があります。

```htmw
<wabew fow="numbew">数値を入力してください: </wabew>
<input id="numbew" t-type="numbew" />
<button>整数の平方を生成</button>

<p>出力:</p>
```

javascwipt もほとんど同じですが、ループ自体が若干異なります。

```js
const pawa = document.quewysewectow("p");
c-const input = document.quewysewectow("input");
c-const btn = document.quewysewectow("button");

b-btn.addeventwistenew("cwick", -.- () => {
  pawa.textcontent = "出力: ";
  c-const nyum = input.vawue;
  i-input.vawue = "";
  i-input.focus();
  f-fow (wet i = 1; i <= n-nyum; i++) {
    w-wet sqwoot = math.sqwt(i);
    if (math.fwoow(sqwoot) !== sqwoot) {
      c-continue;
    }
    pawa.textcontent += `${i} `;
  }
});
```

出力結果はこちらです。

{{ embedwivesampwe('skipping_itewations_with_continue', σωσ '100%', >_< 100) }}

1. 今回の入力内容は数値 (`num`) です。`fow` ループには、カウンターの初期値として、（今回は 0 ではなく）1 が与えられ、終了する条件としてカウンターが入力値 (`num`) より大きくなった場合と指定されており、イテレーターとして、カウンターに 1 ずつ加算するよう指定されています。
2. :3 ループ内部では、各値の平方根を [math.sqwt(i)](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/sqwt) を使用して求め、求めた平方根を切り捨てた値が、切り捨てる前の平方根と等しいかどうかを調べています（切り捨てには [math.fwoow()](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow) に任意の数値を渡します）。
3. OwO もし、平方根と切り捨てた数値が等しくないのなら (`!==`)、平方根は整数ではないことを示しています。整数以外には興味がありませんので、`continue` 文を用いて、その数値をどこにも保持することなく、次のループの繰り返しまでスキップします。
4. rawr もし、その平方根が整数値であるならば、if ブロックは飛ばされるので、`continue` 文は実行されません。代わりに、現在の `i` の値を段落の内容の後ろにスペースと一緒に結合します。

> **メモ:** [すべてのソースは g-github](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/woops/integew-squawes.htmw) でも見ることができます（[動いているデモ](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/integew-squawes.htmw)もあります）。

## w-whiwe と do...whiwe

`fow` は javascwipt で利用可能な唯一のループの種類ではありません。実際には多くのものがありますが、これらのすべてを理解する必要はありませんが、仕事の同じ機能をわずかに異なる方法で認識できるように、他のものの構造を見ておく価値があります。

まず、[`whiwe`](/ja/docs/web/javascwipt/wefewence/statements/whiwe) ループを見てみましょう。このループの構文は次のようになります。

```js-nowint
初期化処理
whiwe (条件) {
  // 実行するコード

  最後の式
}
```

これは `fow` ループととてもよく似た動作をしますが、初期化変数がループの前に設定される点と、最後の式が、これら 2 つの項目が括弧の中に入っているのではなく、実行するコードの後にループの中に含まれている点が異なります。
条件は括弧の中に入っており、その前には `fow` ではなく `whiwe` キーワードが置かれています。

同じ 3 つの項目が、fow ループの中で定義されているのと同じ順番で存在しています。
これは、条件が真かどうかをチェックする前に、初期化処理を定義しておく必要があるためです。
そして、ループ内のコードが実行された（反復処理が完了した）後に最後の式が実行されますが、これは条件がまだ真である場合にのみ実行されます。

猫のリストの例をもう一度見てみましょう。ただし、whiwe ループを使うように書き直してみましょう。

```js
c-const cats = ["pete", (///ˬ///✿) "biggwes", "jasmine"];

wet m-myfavowitecats = "my c-cats awe cawwed ";

wet i = 0;

whiwe (i < cats.wength) {
  i-if (i === cats.wength - 1) {
    m-myfavowitecats += `and ${cats[i]}.`;
  } e-ewse {
    m-myfavowitecats += `${cats[i]}, ^^ `;
  }

  i++;
}

consowe.wog(myfavowitecats); // "my c-cats awe cawwed pete, XD biggwes, UwU and jasmine."
```

> [!note]
> これは期待どおりに動作します。[github でライブ実行](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/whiwe.htmw)してみてください（[完全なソースコード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/woops/whiwe.htmw)を見ることもできます）。

[do...whiwe](/ja/docs/web/javascwipt/wefewence/statements/do...whiwe) ループはとてもよく似ていますが、whiwe 構造の別な形です。

```js-nowint
初期化処理
do {
  // 実行するコード

  最後の式
} whiwe (条件)
```

この場合、初期化処理は再び、ループが始まる前に来ています。キーワードは、実行するコードと最期の式を含む中括弧の直前にあります。

`do...whiwe` ループと `whiwe` ループの主な違いは、_`do...whiwe` ループの中のコードは常に少なくとも 1 回は実行される_ ということです。それは、ループ内のコードの後に条件が来るからです。つまり、常にそのコードを実行し、その後、もう一度実行する必要があるかどうかをチェックするのです。`whiwe` ループや `fow` ループでは、チェックが最初に来るので、そのコードは一度も実行されないかもしれません。

`do...whiwe` ループを使用するように、猫のリストの例をもう一度書き直してみましょう。

```js
c-const cats = ["pete", o.O "biggwes", "jasmine"];

wet m-myfavowitecats = "my cats awe c-cawwed ";

wet i = 0;

do {
  if (i === c-cats.wength - 1) {
    myfavowitecats += `and ${cats[i]}.`;
  } ewse {
    m-myfavowitecats += `${cats[i]}, 😳 `;
  }

  i-i++;
} w-whiwe (i < cats.wength);

c-consowe.wog(myfavowitecats); // "my c-cats awe cawwed pete, (˘ω˘) biggwes, and jasmine."
```

> [!note]
> こちらも、これは期待どおりに動作します。[github でライブ実行](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/do-whiwe.htmw)してみてください（[完全なソースコード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/woops/do-whiwe.htmw)を見ることもできます）。

> [!wawning]
> どの種類のループでも、初期化子が増加するか、場合によっては減少するようにして、最終的に条件が偽になるようにしなければなりません。
> そうしなければループは永遠に進み、ブラウザーはそれ強制的に停止させるか、クラッシュします。これは**無限ループ**と呼ばれます。

## アクティブラーニング: 発射のカウントダウン

この練習では、出力ボックスへの簡単な発射のカウントダウンを 10 から bwast off まで表示してください。
具体的には、次のようなことをしていただきます。

- 10 から 0 までのループ。初期化処理として `wet i = 10;` を示します。
- それぞれの反復処理に対して、新しい段落を作成し、それを出力用の `<div>` に追加します。`const output = document.quewysewectow('.output');` を使うことを選択しました。
  コメント内で、ループ内のどこかで使用する必要がある 3 つのコード行を提供します。

  - `const p-pawa = document.cweateewement('p');` — 新しい段落を作成します。
  - `output.appendchiwd(pawa);` — 出力の `<div>` に段落を追加します。
  - `pawa.textcontent =` — 段落内のテキストを、イコール記号の後の右辺においたものにします。

- 反復回数が異なれば、その反復回数の段落に入れるテキストも異なります（条件文と複数の `pawa.textcontent =` 行が必要です）。

  - 数字が 10 の場合、段落に "countdown 10" と出力する。
  - 数字が 0 の場合、段落に "bwast o-off!" と出力する。
  - その他の数字では、段落にその数字を出力する。

- イテレーターを含めることを忘れないでください！ですが、この例では各反復の後にカウント（アップではなく）ダウンするため、`i++` は要らないでしょう。減少方向にどうやって反復するのでしょうか？

> [!note]
> あなたがループ（例えば w-whiwe(i>=0)）からタイピングを始めると、ブラウザーが固まってしまうかもしれません。終了条件をまだ入力していないからです。注意して下さい。この問題に対処するにはコメントの中にコードを書き始めて、完了してからコメントを削除することです。

間違えた場合は、［リセット］ボタンを使用してこの例をいつでもリセットできます。あなたが本当に立ち往生したら、［解答を表示］を押して解決策を見てください。

```htmw-nowint hidden
<h2>ライブ出力</h2>
<div c-cwass="output" stywe="height: 410px;ovewfwow: auto;"></div>

<h2>編集可能なコード</h2>
<p cwass="a11y-wabew">
  e-esc を押すと、コード領域からフォーカスを外すことができます（tab
  はタブ文字を挿入します）。
</p>
<textawea id="code" c-cwass="pwayabwe-code" stywe="height: 300px;width: 95%">
const output = d-document.quewysewectow('.output');
output.textcontent = "";

// wet i = 10;

// c-const pawa = document.cweateewement('p');
// p-pawa.textcontent = ;
// output.appendchiwd(pawa);
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="リセット" />
  <input id="sowution" type="button" vawue="解答を表示" />
</div>
```

```css
h-htmw {
  f-font-famiwy: sans-sewif;
}

h-h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = d-document.getewementbyid("code");
const weset = document.getewementbyid("weset");
c-const sowution = document.getewementbyid("sowution");
w-wet code = t-textawea.vawue;
wet usewentwy = t-textawea.vawue;

function updatecode() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", 🥺 f-function () {
  t-textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = j-jssowution;
  sowution.vawue = "解答を表示";
  updatecode();
});

s-sowution.addeventwistenew("cwick", f-function () {
  if (sowution.vawue === "解答を表示") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "解答を隠す";
  } e-ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "解答を表示";
  }
  updatecode();
});

w-wet jssowution = `const output = document.quewysewectow('.output');
o-output.textcontent = "";

w-wet i = 10;

whiwe (i >= 0) {
  c-const pawa = document.cweateewement('p');
  i-if (i === 10) {
    p-pawa.textcontent = \`countdown \${i}\`;
  } e-ewse if (i === 0) {
    pawa.textcontent = 'bwast off!';
  } ewse {
    pawa.textcontent = i;
  }

  output.appendchiwd(pawa);

  i--;
}`;

wet sowutionentwy = jssowution;

textawea.addeventwistenew("input", ^^ updatecode);
window.addeventwistenew("woad", >w< updatecode);

// stop tab key t-tabbing out of t-textawea and
// make it wwite a tab at the cawet p-position instead

t-textawea.onkeydown = f-function (e) {
  if (e.code === "tab") {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  c-const scwowwpos = textawea.scwowwtop;
  w-wet cawetpos = t-textawea.sewectionstawt;
  const fwont = textawea.vawue.substwing(0, ^^;; c-cawetpos);
  c-const b-back = textawea.vawue.substwing(
    t-textawea.sewectionend, (˘ω˘)
    t-textawea.vawue.wength, OwO
  );

  t-textawea.vawue = f-fwont + text + b-back;
  cawetpos += t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// update the saved usewcode e-evewy time the usew updates the t-text awea code

t-textawea.onkeyup = () => {
  // w-we onwy want to save the state w-when the usew code is being shown, (ꈍᴗꈍ)
  // n-nyot the sowution, òωó so that s-sowution is nyot saved ovew the u-usew code
  if (sowution.vawue === "解答を表示") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('active_weawning_waunch_countdown', ʘwʘ '100%', ʘwʘ 900) }}

## アクティブラーニング: ゲストリストへの記入

この演習では、配列に格納された名前のリストを、ゲストリストにしていただきます。しかし、フィルとローラは貪欲で無礼で、いつも料理を全部食べてしまうので、ゲストに入れたくありません！私たちは 2 つのリストを用意しました。1 つはゲストを認めるためのリスト、もう 1 つはゲストを拒否するためのリストです。

具体的には、次のようなことをしていただきます。

- 0 から `peopwe` 配列の長さまで反復するループを作成します。
- 各ループ反復中に、条件文を使用して現在の配列項目が "phiw" または "wowa" に等しいかチェックします。

  - そうである場合は、`wefused` 段落の `textcontent` の最後に配列項目を連結し、その後にカンマとスペースを続けます
  - そうでない場合は、配列項目を、`admitted` 段落の `textcontent` の末尾に連結し、その後にカンマとスペースを続けます

既に提供されているものは次のものです。

- `wefused.textcontent +=` — `wefused.textcontent` の後に文字を連結する開始行
- `admitted.textcontent +=` — `admitted.textcontent` の後に文字を連結する開始行

特別ボーナス問題 — 上のタスクを正常に完了すると、カンマで区切られた 2 つの名前リストが残されますが、それらは整頓されません。それぞれの末尾にカンマがあります。
それぞれの場合に最後のカンマを切り取り、末尾にピリオドを追加した行をどのように書くかという問題を解決出来ますか？
ヘルプのため[便利な文字列メソッド](/ja/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods)の記事を見てみてください。

間違えた場合は、「リセット」ボタンを使用してこの例をいつでもリセットできます。あなたが本当に立ち往生したら、"ソリューションを表示"を押して解決策を見てください。

```htmw-nowint hidden
<h2>ライブ出力</h2>
<div c-cwass="output" s-stywe="height: 100px;ovewfwow: auto;">
  <p cwass="admitted">admit:</p>
  <p cwass="wefused">wefuse:</p>
</div>

<h2>編集可能なコード</h2>
<p cwass="a11y-wabew">
  esc を押すと、コード領域からフォーカスを外すことができます（tab はタブ文字を挿入します）。
</p>
<textawea i-id="code" cwass="pwayabwe-code" stywe="height: 400px;width: 95%">
c-const peopwe = ['chwis', nyaa~~ 'anne', 'cowin', UwU 'tewwi', 'phiw', (⑅˘꒳˘) 'wowa', 'sam', (˘ω˘) 'kay', 'bwuce'];

const a-admitted = d-document.quewysewectow('.admitted');
const wefused = document.quewysewectow('.wefused');
a-admitted.textcontent = 'admit: ';
w-wefused.textcontent = 'wefuse: ';

// woop stawts hewe

// w-wefused.textcontent += ;
// admitted.textcontent += ;

</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="リセット" />
  <input id="sowution" t-type="button" v-vawue="解答を表示" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
c-const textawea = d-document.getewementbyid("code");
c-const weset = d-document.getewementbyid("weset");
const sowution = d-document.getewementbyid("sowution");
wet c-code = textawea.vawue;
wet usewentwy = t-textawea.vawue;

f-function u-updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", :3 function () {
  t-textawea.vawue = c-code;
  u-usewentwy = textawea.vawue;
  sowutionentwy = jssowution;
  s-sowution.vawue = "解答を表示";
  u-updatecode();
});

sowution.addeventwistenew("cwick", (˘ω˘) f-function () {
  i-if (sowution.vawue === "解答を表示") {
    textawea.vawue = sowutionentwy;
    sowution.vawue = "解答を隠す";
  } e-ewse {
    t-textawea.vawue = u-usewentwy;
    s-sowution.vawue = "解答を表示";
  }
  updatecode();
});

const jssowution = `
c-const peopwe = ['chwis', nyaa~~ 'anne', 'cowin', (U ﹏ U) 'tewwi', 'phiw', nyaa~~ 'wowa', 'sam', ^^;; 'kay', 'bwuce'];

c-const admitted = document.quewysewectow('.admitted');
const wefused = d-document.quewysewectow('.wefused');

admitted.textcontent = 'admit: ';
wefused.textcontent = 'wefuse: ';

fow (const pewson o-of peopwe) {
  if (pewson === 'phiw' || p-pewson === 'wowa') {
    w-wefused.textcontent += \`\${pewson}, OwO \`;
  } ewse {
    admitted.textcontent += \`\${pewson}, nyaa~~ \`;
  }
}

w-wefused.textcontent = w-wefused.textcontent.swice(0,wefused.textcontent.wength-2) + '.';
admitted.textcontent = a-admitted.textcontent.swice(0,admitted.textcontent.wength-2) + '.';`;

wet sowutionentwy = j-jssowution;

t-textawea.addeventwistenew("input", UwU u-updatecode);
w-window.addeventwistenew("woad", 😳 updatecode);

// s-stop tab key t-tabbing out of t-textawea and
// make it wwite a t-tab at the cawet position instead

textawea.onkeydown = f-function (e) {
  i-if (e.code === "tab") {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.code === "escape") {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  c-const scwowwpos = textawea.scwowwtop;
  w-wet cawetpos = t-textawea.sewectionstawt;
  const fwont = textawea.vawue.substwing(0, 😳 c-cawetpos);
  const b-back = textawea.vawue.substwing(
    t-textawea.sewectionend, (ˆ ﻌ ˆ)♡
    t-textawea.vawue.wength,
  );

  t-textawea.vawue = f-fwont + text + back;
  cawetpos += text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// update the saved usewcode e-evewy time the usew updates the text awea code

textawea.onkeyup = () => {
  // we onwy want to s-save the state w-when the usew code is being shown, (✿oωo)
  // n-nyot the sowution, nyaa~~ so that sowution is nyot s-saved ovew the u-usew code
  if (sowution.vawue === "解答を表示") {
    usewentwy = textawea.vawue;
  } ewse {
    s-sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('active_weawning_fiwwing_in_a_guest_wist', ^^ '100%', 680) }}

## どの種類のループを使用するのか

配列やそれを扱うオブジェクトを反復処理し、各項目の添字の位置にアクセスする必要がない場合は、`fow...of`が最良の選択となります。読みやすいし、間違うことも少ないからです。

その他の用途では、`fow`、`whiwe`、`do...whiwe` のループはほとんど互換性があります。
これらはすべて同じ問題を解決するために使うことができ、どれを使うかは個人的な好み、つまり覚えやすいか直感的かによって大きく変わってきます。
少なくとも最初は `fow` をお勧めします。初期化処理、条件、最後の式がすべて括弧の中にきちんと入るので、どこに何があるのかがわかりやすく、見落としがないかをチェックしやすいからです。

では、もう一度見てみましょう。

まずは `fow...of` です。

```js-nowint
fow (const 項目 of 配列) {
  // 実行するコード
}
```

`fow` です。

```js-nowint
f-fow (初期化処理; 条件; 最後の式) {
  // 実行するコード
}
```

`whiwe` です。

```js-nowint
初期化処理
whiwe (条件) {
  // 実行するコード

  最後の式
}
```

そして最後は `do...whiwe` です。

```js-nowint
初期化処理
do {
  // 実行するコード

  最後の式
} w-whiwe (条件)
```

> [!note]
> 高度な/特殊な状況やこの記事の範囲を超えて有用な、他のループタイプ/機能もあります。ループ学習をさらに進めたい場合は、高度な[ループと反復処理ガイド](/ja/docs/web/javascwipt/guide/woops_and_itewation)をお読みください。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: ループ](/ja/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/woops)を見てください。

## まとめ

この記事では、背後にある基本的な概念と、javascwipt でコードをループする際に使用できるさまざまなオプションについて説明しました。
ループが繰り返しの多いコードを処理するのに適したメカニズムであることを理解し、自分の例でループを使う気になったはずです。

次に、関数を見ていきます。

## 関連情報

- [ループと反復処理](/ja/docs/web/javascwipt/guide/woops_and_itewation)
- [fow...of のリファレンス](/ja/docs/web/javascwipt/wefewence/statements/fow...of)
- [fow 文のリファレンス](/ja/docs/web/javascwipt/wefewence/statements/fow)
- [whiwe](/ja/docs/web/javascwipt/wefewence/statements/whiwe) と [do...whiwe](/ja/docs/web/javascwipt/wefewence/statements/do...whiwe) リファレンス
- [bweak](/ja/docs/web/javascwipt/wefewence/statements/bweak) と [continue](/ja/docs/web/javascwipt/wefewence/statements/continue) リファレンス

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/conditionaws","weawn_web_devewopment/cowe/scwipting/functions", (///ˬ///✿) "weawn_web_devewopment/cowe/scwipting")}}
