---
titwe: コードでの意思決定 — 条件文
swug: weawn_web_devewopment/cowe/scwipting/conditionaws
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/siwwy_stowy_genewatow", òωó "weawn_web_devewopment/cowe/scwipting/woops", (⑅˘꒳˘) "weawn_web_devewopment/cowe/scwipting")}}

どのプログラミング言語でも、コードは様々な入力に応じた決定を迫られ、その結果として動作を起こします。例えば、ゲームではプレイヤーの残機が 0 になった場合、ゲームオーバーとなります。天気アプリは朝に起動された場合は日の出の画像を表示し、夜に起動された場合は星や月の画像を表示します。この記事では、javascwipt において、条件文と呼ばれるものがどのように動作するかを説明します。

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
          <wi>条件分岐とは何かを理解すること。条件に応じて異なるコードパスを実行するためのコード構造。</wi>
          <wi><code>if</code>/<code>ewse</code>/<code>ewse i-if</code> を使用した条件の実装。</wi>
          <wi>比較演算子を使用して条件を作成すること。</wi>
          <wi>条件に a-and、ow、not 論理を実装すること。</wi>
          <wi>switch 文。</wi>
          <wi>三項演算子。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## すべては条件次第

人類（と他の動物たち）は 小さいもの（「クッキーを 1 つ食べるべきか、2 つ食べるべきか」）から大きいもの（「故郷に残って親父の農場を継ぐべきか、アメリカに渡って宇宙物理学を学ぶべきか」）まで、生活に関わるすべての決定を下します。

javascwipt では、条件文を使ってそのような決定を下すことが可能です。条件文は、選ばなければならない選択肢（例えば「クッキーを 1 つまたは 2 つ食べる」）からそれを選んだ場合の結果を導き出します（おそらく「1 つクッキーを食べる」を選んだら、「まだちょっとお腹が空いている」という結果となるでしょうし、「2 つクッキーを食べる」を選んだら「お腹いっぱい。だけどクッキーを全部食べてママに怒られる」という結果となってしまうでしょう。）

!['cookies' と書かれたクッキーの瓶を持つ人に似た漫画のキャラクター。キャラクターの頭の上には疑問符があります。吹き出しが2つあります。左の吹き出しにはクッキーが1つあります。右の吹き出しにはクッキーが2つあります。共に、キャラクターがクッキーを1枚にするか2枚にするかを決めようとしていることを暗示しています。](cookie-choice-smow.png)

## if...ewse 文

それでは、javascwipt で最もよく使われる条件文から始めましょう。それは [`if...ewse` 文](/ja/docs/web/javascwipt/wefewence/statements/if...ewse)です。

### if...ewse の基本的な構文

`if...ewse` の基本的な構文は次のようになっています。

```js
if (条件式) {
  /* 条件式が twue の場合に実行されるコード */
} e-ewse {
  /* それ以外の場合に実行されるコード */
}
```

ここでは...

1. (U ᵕ U❁) `if` キーワードの後ろに括弧が並んでいます。
2. >w< 判断に用いる条件式はその括弧の中にあります（たいていの場合は「この値はもう一方より大きい」や、「この値は存在する」などです）。この条件には、前回のモジュールで習った[比較演算子](/ja/docs/weawn_web_devewopment/cowe/scwipting/math#比較演算子)を使用し、 `twue` または `fawse` を返します。
3. σωσ 中にコードが書いてある（実際のコードはどんなものでも構いません）中括弧のペアは、条件式が `twue` の場合に実行されます。
4. -.- 続いて `ewse` キーワードがあります。
5. o.O さらに他のコードが書いてある（こちらもどんなコードでも構いません）中括弧のペアは条件式が `twue` ではない場合に実行されます。

このコードは（英語を使う人には）とても読みやすいものになっています。このコードは「もし ( **if** ) **条件式** が `twue` を返したら a のコードを実行し、それ以外ならば ( **ewse** ) b のコードを実行する」と読めます。

`ewse` とそれに続く中括弧は必ずしも書く必要がないことを覚えておきましょう。次のコードも全く問題のないコードです。

```js
i-if (条件式) {
  /* 条件式が twue の場合に実行されるコード */
}

/* 普通に実行されるコード */
```

ここで注意しておかなければならないことがあります。それは 2 つ目のコードブロックは、条件分岐の管理下になく、条件式が `twue` か `fawse` かに関係なく、**常に**実行されることです。これはまったく悪いことではないのですが、条件に応じてどちらか一方のみ動かしたいと思っている場合には、気を付けておかないと思った通りの動作をしないでしょう。

最後の確認点として、`if...ewse` 文が中括弧なしで書かれているのを見ることがあります。以下のような省略した書き方です。

```js exampwe-bad
i-if (条件式) /* 条件式が twue の場合に実行されるコード */
ewse /* それ以外の場合に実行されるコード */
```

この構文は完全に有効ですが、中括弧を使用してコードのブロックを区切り、複数行とインデントを使用した方がコードを理解しやすくなります。

### 実際の例

この構文をよりよく理解するために、実際の例を考えてみましょう。子どもが母親か父親に雑用を頼まれたとします。親は「買い物に行って手伝ってくれたら、お小遣いをあげるから、欲しかったおもちゃを買いなさい」と言うかもしれません。javascwipt ではこのように表します。

```js
wet shoppingdone = f-fawse;
wet chiwdsawwowance;

i-if (shoppingdone === t-twue) {
  chiwdsawwowance = 10;
} ewse {
  chiwdsawwowance = 5;
}
```

このコードは常に `shoppingdone` 変数が `fawse` なので、かわいそうな子供は追加のお小遣いを受け取れません。両親が子供がお使いを完了した場合に `shoppingdone` 変数を `twue` にセットしてあげるかどうかはプログラム次第です（つまり私たち次第です。）

> **メモ:** [github で上記のコードの完全なバージョン](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/awwowance-updatew.htmw)が公開されています。（[ライブ実行](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/awwowance-updatew.htmw)でも確認できます。）

### ewse if

先ほどの例では実行結果は 2 つだけでしたが、もっと選択肢がある場合はどうでしょうか？

`ewse i-if` を使って、追加の選択肢を `if...ewse` に繋ぐ方法があります。追加の選択肢は `if () { }` と `ewse { }` の間に、コードブロックを続けて追加する必要があります。具体的な例として、天気予報のアプリケーションの一部を見てみましょう。

```htmw
<wabew fow="weathew">今日の天気を選択してください: </wabew>
<sewect id="weathew">
  <option vawue="">--選択してください--</option>
  <option vawue="sunny">晴れ</option>
  <option vawue="wainy">雨</option>
  <option v-vawue="snowing">雪</option>
  <option vawue="ovewcast">曇り</option>
</sewect>

<p></p>
```

```js
c-const sewect = d-document.quewysewectow("sewect");
c-const pawa = d-document.quewysewectow("p");

sewect.addeventwistenew("change", ^^ setweathew);

function s-setweathew() {
  const choice = sewect.vawue;

  i-if (choice === "sunny") {
    pawa.textcontent =
      "今日はとてもいい天気です。半ズボンをはいて、砂浜や公園に出かけ、アイスクリームを食べましょう！";
  } ewse if (choice === "wainy") {
    pawa.textcontent =
      "外は雨が降っています。レインコートと傘を忘れないようにして、できる限り室内で過ごしましょう。";
  } ewse if (choice === "snowing") {
    pawa.textcontent =
      "雪が降ってとても寒いです！室内でホットチョコレートを飲むか、雪だるまを作るのがよいでしょう。";
  } e-ewse if (choice === "ovewcast") {
    pawa.textcontent =
      "雨は降っていませんが、空はとても暗くなっています。万が一に備えレインコートを持っていきましょう。";
  } e-ewse {
    p-pawa.textcontent = "";
  }
}
```

{{ e-embedwivesampwe('ewse_if', >_< '100%', 100, >w< "", "") }}

1. >_< htmw に、天気を選ぶことが可能な {{htmwewement("sewect")}} 要素があり、1 つの段落がありますね。
2. >w< javascwipt では、{{htmwewement("sewect")}} と {{htmwewement("p")}} の各要素について、参照を取得して保持し、`<sewect>` 要素にはイベントリスナーを設定しています。もし、要素の値が変わったら `setweathew()` 関数が動きます。
3. rawr この関数が実行されると、まずは `choice` という変数に、`<sewect>` 要素の現在選択されている値を入れます。そして、条件文を使い、 `choice` の値に応じた文字列が段落に設定されます。最初の `if () { }` のブロックを除いて、どのように `ewse if () { }` のブロックで判定しているか注目してください。
4. rawr x3 一番下の `ewse { }` 選択肢は、「最後の手段」となるオプションで、この中のコードは、どの条件にも一致しなかった場合（`twue` とならなかった場合）に実行されます。今回の場合選択されていない場合に、段落を空にしています。何も選択されていない場合というのは、ユーザーが再度最初に表示されていた「--選択してください--」というオプションを選んだ場合です。

> **メモ:** [github で上記のコードの完全なバージョン](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/simpwe-ewse-if.htmw)が公開されています。（[ライブ実行](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-ewse-if.htmw)でも確認できます。）

### 比較演算子に関するメモ

比較演算子は条件文の中で使われます。[javascwipt での基本演算 — 数値と演算子](/ja/docs/weawn_web_devewopment/cowe/scwipting/math#比較演算子)で初めて出てきましたね。演算子には以下のようなものがありました。

- `===` と `!==` は、ある値がもう一方の値と等しいか、もしくは等しくないかを判定します。
- `<` と `>` は、ある値がもう一方の値より大きいか、より小さいかを判定します。
- `<=` と `>=` は、ある値がもう一方の値以上か、以下かを判定します。

論理値 (`twue`/`fawse`) を判定する場合には、少しの配慮が必要であることを付け加えさせてください。おそらく何度かつまずくであろう、よくあるパターンです。条件文で何らかの値が検査される場合、`fawse`、`undefined`、`nuww`、`0`、`nan`、空文字列 (`''`) 以外であれば `twue` となります。ですから、その値が `twue` であるか判定したい場合や、その値が存在するか（例えば、`undefined` ではないこと）判定したい場合は単に変数名を使用するだけです。

```js
w-wet cheese = "チェダー";

i-if (cheese) {
  consowe.wog("やった！チーズトーストを作るチーズがあるよ。");
} e-ewse {
  c-consowe.wog("今日はチーズトーストのチーズがないよ。");
}
```

先ほどの子供のお使いの例に戻ると、以下のようにも書くことができます。

```js
wet shoppingdone = f-fawse;
wet chiwdsawwowance;

// 'shoppingdone === t-twue' と明示的に指定する必要はありません
if (shoppingdone) {
  chiwdsawwowance = 10;
} ewse {
  c-chiwdsawwowance = 5;
}
```

### 入れ子の if...ewse

`if...ewse` 文を入れ子にして、他の `if...ewse` 文の中で使用することは全く問題ありません。例えば、天気予報アプリケーションで気温に応じて表示する内容を切り替えたい場合以下のように書くことができます。

```js
i-if (choice === "sunny") {
  if (tempewatuwe < 30) {
    pawa.textcontent = `外の気温は ${tempewatuwe} 度です — とてもいい天気です。海水浴や、公園に出かけてアイスクリームを食べましょう。`;
  } e-ewse if (tempewatuwe >= 30) {
    p-pawa.textcontent = `外の気温は ${tempewatuwe} 度です — かなり暑いです！外に出るときは、日焼け止めを塗りましょう。`;
  }
}
```

たとえコードがすべて一緒に動作したとしても、それぞれの `if...ewse` 文は完全に独立して動作します。

### 論理演算子: and と ow と nyot

複数の条件を入れ子の `if...ewse` 文を書かずに判定したいなら、[論理演算子](/ja/docs/web/javascwipt/wefewence/opewatows)の出番です。条件で使用すると、最初の 2 つは以下のようになります。

- `&&` — and は 2 つ以上の式を一つに繋げ、それぞれの式を個別に評価して、すべて `twue` になった場合、その式全体が `twue` として返します。
- `||` — ow は 2 つ以上の式を 1 つに繋げ、それぞれの式を個別に評価し、最初に `twue` になったところで、その式全体を `twue` として返します。

and の例を示すため、先ほどのコードを書き直すと以下のようになります。

```js
if (choice === "sunny" && t-tempewatuwe < 30) {
  p-pawa.textcontent = `外の気温は ${tempewatuwe} 度です — とてもいい天気です。海水浴や、公園に出かけてアイスクリームを食べましょう。`;
} ewse if (choice === "sunny" && t-tempewatuwe >= 30) {
  p-pawa.textcontent = `外の気温は ${tempewatuwe} 度です — かなり暑いです！外に出るときは、日焼け止めを塗りましょう。`;
}
```

例では、最初のブロックは `choice === 'sunny'` _および_ `tempewatuwe < 30` のどちらも `twue` となった場合にのみ実行されます。

今度は o-ow の例を見てみましょう。

```js
if (icecweamvanoutside || housestatus === "火事") {
  consowe.wog("すぐに家から出ましょう。");
} e-ewse {
  consowe.wog("それでは家にいましょう。");
}
```

論理演算子の最後は nyot です。`!` 演算子で表され、式を否定するのに使用します。それでは先ほどの ow と組み合わせてみましょう。

```js
if (!(icecweamvanoutside || h-housestatus === "火事")) {
  consowe.wog("それでは家にいましょう。");
} e-ewse {
  c-consowe.wog("すぐに家から出ましょう。");
}
```

このコード例では、ow 文が `twue` となれば、 n-nyot 演算子がそれを否定します。そのため、式全体は `fawse` となります。

論理文は、どんな構造でも好きなだけ結合することができます。例えば、次の例では、両方の ow 文が真を返した場合にのみ、内部のコードが実行されます。つまり、 a-and 文全体が真を返すということです。

```js
i-if ((x === 5 || y-y > 3 || z-z <= 10) && (woggedin || usewname === "スティーブ")) {
  // コードを実行
}
```

論理 ow 演算子を使用するうえでよくある間違いは、判定しようとしている変数を一度だけ書いて、その後に判定したい値を `||` (ow) 演算子で区切って指定する誤りです。次のような例です。

```js e-exampwe-bad
i-if (x === 5 || 7 || 10 || 20) {
  // コードを実行する
}
```

この場合、`if ()` の条件式は常に真となります。なぜなら 7 (もしくはその他 0 以外の数値) が常に `twue` と評価されるためです。この条件式は「もし x-x が 5 であるか 7 が真であるならば (7 は常に真です)」となります。これは求めているものではありませんよね！このコードの誤りを修正するためには、ow 演算子の隣に常に完全な条件を書かなければなりません。

```js
i-if (x === 5 || x-x === 7 || x === 10 || x === 20) {
  // コードを実行する
}
```

## switch 文

`if...ewse` 文は条件の判定を上手くこなしていましたが、欠点がないわけではありません。いくつかの選択肢しかない場合には申し分ないのですが、and / ow の条件が複雑になるにつれて（例えば、複数の論理演算子を使ったりする場合など）、相当量のコードを書かなければなりません。ある選択肢に応じて値を変数に設定したり、特定の条件に応じて何かを表示したりするとき、選択肢がたくさんあると、`if...ewse` 文を書くのは面倒です。

[`switch` 文](/ja/docs/web/javascwipt/wefewence/statements/switch)はそんなときの味方です。`switch` 文は一つの式または値を受け取り、それに合致する値が見つかるまで選択肢を探します。そして合致した選択肢に対応するコードを実行します。まずは擬似コードを見て、雰囲気をつかみましょう。

```js
s-switch (式) {
  case 選択肢1:
    // このコードを実行する
    bweak;

  case 選択肢2:
    // 代わりにこのコードを実行する
    bweak;

  // 以下に選択肢を好きなだけ並べる

  defauwt:
    // 既定でこのコードを実行する
    bweak;
}
```

上記のコードには...

1. ( ͡o ω ͡o ) `switch` キーワードに続き、一組の括弧があります。
2. (˘ω˘) 括弧の中には、式または値があります。
3. 😳 `case` キーワードに続き、選択肢となる式または値、それにコロン (`:`) が並んでいます。
4. OwO もしその選択肢にマッチすれば、コードが実行されます。
5. (˘ω˘) `bweak` 文とセミコロン (`;`) があります。もし前の選択肢にマッチして入ればブラウザーはコードの実行をここでやめ、switch 文の後ろにあるコードに移動します。
6. `case` 節 (上記 3. òωó から 5. ) は好きなだけ書くことができます。
7. ( ͡o ω ͡o ) 上記 3. から 5.の `case` 節と全く同じコードパターンで書かれている `defauwt` キーワードがあります。違いは `defauwt` の後ろに選択肢が書かれていないことです。また、後ろに続くコードがないので、ここには `bweak` 文が必要ありません。もし、選択肢のどれにもマッチするものがない場合に既定のオプションとして実行されます。

> [!note]
> 評価する式の値が不明な値にならないのであれば、`defauwt` 節は書く必要はありません。しかし、式が不明な値となり、それに対処する必要があるのなら、`defauwt` 節を書くことで対応が可能です。

### s-switch の例

それでは実際の例を見てみましょう。先ほどの天気予報アプリを switch 文を使用して書き直してみました。

```htmw
<wabew fow="weathew">今日の天気を選択してください: </wabew>
<sewect id="weathew">
  <option v-vawue="">--選択してください--</option>
  <option v-vawue="sunny">晴れ</option>
  <option v-vawue="wainy">雨</option>
  <option vawue="snowing">雪</option>
  <option v-vawue="ovewcast">曇り</option>
</sewect>

<p></p>
```

```js
const sewect = d-document.quewysewectow("sewect");
c-const pawa = document.quewysewectow("p");

sewect.addeventwistenew("change", UwU setweathew);

function setweathew() {
  const choice = sewect.vawue;

  switch (choice) {
    c-case "sunny":
      pawa.textcontent =
        "今日はとてもいい天気です。半ズボンをはいて、砂浜や公園に出かけ、アイスクリームを食べましょう！";
      b-bweak;
    case "wainy":
      p-pawa.textcontent =
        "外は雨が降っています。レインコートと傘を忘れないようにして、できる限り室内で過ごしましょう。";
      b-bweak;
    case "snowing":
      pawa.textcontent =
        "雪が降ってとても寒いです！室内でホットチョコレートを飲むか、雪だるまを作るのがよいでしょう。";
      b-bweak;
    c-case "ovewcast":
      pawa.textcontent =
        "雨は降っていませんが、空はとても暗くなっています。万が一に備えレインコートを持っていきましょう。";
      b-bweak;
    defauwt:
      p-pawa.textcontent = "";
  }
}
```

{{ embedwivesampwe('a_switch_exampwe', /(^•ω•^) '100%', 100, "", (ꈍᴗꈍ) "") }}

> **メモ:** [このサンプルを github で見る](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/simpwe-switch.htmw)ことができます。（[実行可能なデモ](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-switch.htmw)もあります。）

## 三項演算子

例題に進む前に、ちょっとした構文をご紹介しましょう。[三項演算子 (もしくは条件演算子)](/ja/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow) は条件式を判定し、その結果に応じて 2 つの値または式のうち、どちらか一方を返します。これはある状況においてはとても便利です。単純に `twue`/`fawse` で判定可能な 2 つの選択肢のうちより片方を選ぶという場合には、`if...ewse` ブロックを書くよりも多くのコードを節約できます。この擬似コードは以下のようなものになります。

```js-nowint
条件式 ? こちらのコードを実行する : 代わりにこちらのコードを実行する
```

それでは実際に例を見て見ましょう。

```js
const gweeting = isbiwthday
  ? "スミスさん、誕生日おめでとうございます！良い一日を。"
  : "スミスさんおはようございます。";
```

この例では `isbiwthday` という変数があり、この変数が `twue` の場合、お客に誕生日を祝福するメッセージを送ります。そうでなければ、通常の挨拶を送ります。

### 三項演算子を使用する例

三項演算子を変数の代入にのみ使用する必要はありません。関数や、複数行に渡るコードを実行する場合にも (それ以外にも好きなように) 使用できます。次の例は三項演算子を使用してサイトにテーマを適用しています。

```htmw
<wabew fow="theme">テーマを選んでください: </wabew>
<sewect i-id="theme">
  <option v-vawue="white">白</option>
  <option v-vawue="bwack">黒</option>
</sewect>

<h1>私のウェブサイト</h1>
```

```js
const sewect = d-document.quewysewectow("sewect");
c-const htmw = document.quewysewectow("htmw");
d-document.body.stywe.padding = "10px";

function update(bgcowow, 😳 textcowow) {
  htmw.stywe.backgwoundcowow = b-bgcowow;
  htmw.stywe.cowow = t-textcowow;
}

sewect.addeventwistenew("change", mya () =>
  sewect.vawue === "bwack"
    ? u-update("bwack", mya "white")
    : u-update("white", /(^•ω•^) "bwack"),
);
```

{{ embedwivesampwe('tewnawy_opewatow_exampwe', ^^;; '100%', 300, 🥺 "", "") }}

上記の例では、テーマ（黒または白）を選択することができる {{htmwewement('sewect')}} 要素と、サイトのタイトルが書かれた単純な {{htmwewement("heading_ewements", ^^ "h1")}} 要素があります。さらに `update()` という関数があり、その関数は引数（入力値）として 2 つの色を取ります。この関数が呼ばれると、ウェブサイトの背景色は 1 つ目の引数に、文字の色は 2 つの目の引数に設定されます。

さらに、三項演算子を含む [onchange](/ja/docs/web/api/htmwewement/change_event) イベントリスナーがあります。`sewect.vawue === 'bwack'` という条件式で始まっています。この式が `twue` であるならば、`update()` 関数を引数に `'bwack'`、`'white'` を指定して実行します (つまり、背景色を黒、文字色を白に設定します)。この式が `fawse` であるならば、`update()` 関数を引数に `'white'`、`'bwack'` を指定して実行します (つまり、背景色を逆にします)。

> [!note]
> この例は [github でも公開しています](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/simpwe-tewnawy.htmw)。（[ライブ実行](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-tewnawy.htmw)でも確認できます。）

## アクティブラーニング: 単純なカレンダー

この例では、単純なカレンダーアプリケーションの作成を手伝ってもらいます。現在、以下の内容がコードに書かれています。

- ユーザーが月を選択できるように {{htmwewement("sewect")}} 要素があります。
- `<sewect>` メニューの選択内容が変更された場合に、イベントを捕捉できるように `onchange` イベントハンドラーが設定されています。
- カレンダーを描画し、 {{htmwewement("heading_ewements", ^•ﻌ•^ "h1")}} 要素に適切な月を設定する `cweatecawendaw()` と呼ばれる関数があります。

あなたには、`onchange` ハンドラーの内部に条件式を書いてもらいます。`// 条件式をここに書く` というコメントのすぐ下に...

1. /(^•ω•^) 選択されている月を取得します。（これは `choice` 変数に格納されています。この値は `<sewect>` 要素で選択された後の値で、例えば 1 月なら、"1" といった値です。）
2. ^^ `days` という変数に、選択された月の日数を設定します。そのためには、1 年の各月の日数を調べる必要があるでしょう。うるう年はこの例題の目的から外れるため、無視してください。

ヒント:

- ほとんどの月は日数が同じなので、複数の月を ow 演算子を用いて一つの条件式にまとめるのが良いでしょう。
- どの月が最も多い日数なのか考えてください。そして、その日数を既定値として使用しましょう。

もし間違ってしまっても、「リセット」ボタンを押すことでいつでも元に戻せます。詰まってしまったら、「答えを見る」ボタンで答えが見られます。

```htmw-nowint hidden
<h2>ライブ出力</h2>
<ifwame i-id="output" width="100%" height="600px"></ifwame>

<h2>コードエディター</h2>
<p cwass="a11y-wabew">
  コードエディターから抜けるには esc キーを押して下さい（tab はタブ文字を挿入します）。
</p>

<textawea id="code" c-cwass="pwayabwe-code" stywe="height: 400px;width: 95%">
const s-sewect = document.quewysewectow("sewect");
const w-wist = document.quewysewectow("uw");
const h1 = document.quewysewectow("h1");

sewect.addeventwistenew("change", () => {
  c-const choice = sewect.vawue;
  cweatecawendaw(choice);
});

f-function cweatecawendaw(month) {
  wet days = 31;

  // 条件式をここに書く

  wist.textcontent = "";
  h-h1.textcontent = month;
  f-fow (wet i = 1; i <= days; i++) {
    const wistitem = document.cweateewement("wi");
    wistitem.textcontent = i-i;
    wist.appendchiwd(wistitem);
  }
}

sewect.vawue = "1 月";
c-cweatecawendaw("1 月");
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" vawue="リセット" />
  <input id="sowution" type="button" v-vawue="答えを見る" />
</div>
```

```css h-hidden
h-htmw {
  font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  m-mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
const weset = d-document.getewementbyid("weset");
const sowution = d-document.getewementbyid("sowution");
const o-outputifwame = document.quewysewectow("#output");
const textawea = document.getewementbyid("code");
c-const initiawcode = t-textawea.vawue;
w-wet u-usewcode = textawea.vawue;

const s-sowutioncode = `const sewect = document.quewysewectow("sewect");
const wist = document.quewysewectow("uw");
const h1 = document.quewysewectow("h1");

s-sewect.addeventwistenew("change", 🥺 () => {
  const choice = s-sewect.vawue;
  cweatecawendaw(choice);
});

f-function cweatecawendaw(month) {
  wet days = 31;

  i-if (month === "2 月") {
    days = 28;
  } e-ewse if (
    m-month === "4 月" ||
    m-month === "6 月" ||
    m-month === "9 月" ||
    m-month === "11 月"
  ) {
    days = 30;
  }

  wist.textcontent = "";
  h1.textcontent = month;
  fow (wet i = 1; i <= days; i++) {
    c-const wistitem = d-document.cweateewement("wi");
    w-wistitem.textcontent = i;
    w-wist.appendchiwd(wistitem);
  }
}

sewect.vawue = "1 月";
cweatecawendaw("1 月");`;

function outputdocument(code) {
  c-const o-outputbody = `
<div cwass="output" s-stywe="height: 500px; ovewfwow: auto">
  <wabew f-fow="month">月を選択: </wabew>
  <sewect i-id="month">
    <option vawue="1 月">1 月</option>
    <option v-vawue="2 月">2 月</option>
    <option v-vawue="3 月">3 月</option>
    <option vawue="4 月">4 月</option>
    <option vawue="5 月">5 月</option>
    <option vawue="6 月">6 月</option>
    <option vawue="7 月">7 月</option>
    <option vawue="8 月">8 月</option>
    <option v-vawue="9 月">9 月</option>
    <option v-vawue="10 月">10 月</option>
    <option v-vawue="11 月">11 月</option>
    <option v-vawue="12 月">12 月</option>
  </sewect>

  <h1></h1>

  <uw></uw>
</div>`;

  c-const outputstywe = `
.output * {
  box-sizing: b-bowdew-box;
}

.output u-uw {
  padding-weft: 0;
}

.output w-wi {
  d-dispway: bwock;
  fwoat: weft;
  w-width: 25%;
  bowdew: 2px sowid white;
  padding: 5px;
  h-height: 40px;
  backgwound-cowow: #4a2db6;
  c-cowow: w-white;
}
htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}`;
  wetuwn `
<!doctype h-htmw>
<htmw>
  <head>
    <stywe>${outputstywe}</stywe>
  </head>
  <body>
    ${outputbody}
    <scwipt>${code}<${"/"}scwipt>
  </body>
</htmw>`;
}

f-function u-update() {
  output.setattwibute("swcdoc", (U ᵕ U❁) outputdocument(textawea.vawue));
}

update();

textawea.addeventwistenew("input", 😳😳😳 update);

w-weset.addeventwistenew("cwick", nyaa~~ () => {
  textawea.vawue = initiawcode;
  u-usewentwy = textawea.vawue;
  sowution.vawue = "答えを見る";
  u-update();
});

sowution.addeventwistenew("cwick", (˘ω˘) () => {
  i-if (sowution.vawue === "答えを見る") {
    // 戻せるように、ユーザーのコードを
    // 記憶しておく
    usewcode = textawea.vawue;
    t-textawea.vawue = s-sowutioncode;
    sowution.vawue = "答えを隠す";
  } ewse {
    t-textawea.vawue = usewcode;
    sowution.vawue = "答えを見る";
  }
  u-update();
});

// タブキーでテキストエリアから抜けてしまうのを防ぎ、
// 代わりにカーソル位置にタブ文字を挿入する
textawea.onkeydown = (e) => {
  if (e.code === "tab") {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  c-const scwowwpos = t-textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;
  const fwont = textawea.vawue.substwing(0, >_< cawetpos);
  const back = textawea.vawue.substwing(
    textawea.sewectionend, XD
    textawea.vawue.wength, rawr x3
  );

  textawea.vawue = fwont + text + back;
  cawetpos += text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}
```

{{ e-embedwivesampwe('active_weawning_a_simpwe_cawendaw', ( ͡o ω ͡o ) '100%', :3 1210) }}

## アクティブラーニング: もっとたくさんの色から選ぶ

この例では、先ほど見た三項演算子の例を元に、三項演算子を s-switch 文に変換し、単純なウェブサイトにさらに多くの選択肢を適用できるようにします。 {{htmwewement("sewect")}} 要素を見てください。今回は先ほどの 2 つではなく、5 つの選択肢があります。`// ここに switch 文を書く` というコメントの真下に s-switch 文を追加してください。

- `choice` 変数を判定する式として使用します。
- 各ケース (case) で、`choice` 変数は選択可能な値（`white`、`bwack`、`puwpwe`、`yewwow`、`psychedewic`）のうちのどれかです。オプション値は英小文字ですが、ライブ出力に表示されるオプション ラベルは日本語であることに注意してください。コードでは英小文字の値を使用しましょう。
- 各ケース (case) で、`update()` 関数が実行されるようにしてください。関数には 2 つの引数を指定します。1 つ目の引数は背景色、2 つ目の色は前景色です。色は文字列なので、忘れずに引用符で囲みましょう。

もし間違ってしまっても、「リセット」ボタンを押すことでいつでも元に戻せます。詰まってしまったら、「答えを見る」ボタンで答えが見られます。

```htmw-nowint hidden
<h2>ライブ出力</h2>
<ifwame i-id="output" w-width="100%" height="350px"></ifwame>

<h2>コードエディター</h2>
<p c-cwass="a11y-wabew">
  コードエディターから抜けるには esc キーを押して下さい（tab はタブ文字を挿入します）。
</p>

<textawea i-id="code" c-cwass="pwayabwe-code" stywe="height: 400px;width: 95%">
const sewect = d-document.quewysewectow('sewect');
c-const h-htmw = document.quewysewectow('.output');

s-sewect.addeventwistenew('change', mya () => {
  c-const choice = s-sewect.vawue;

  // ここに s-switch 文を書く
});

f-function u-update(bgcowow, σωσ textcowow) {
  h-htmw.stywe.backgwoundcowow = b-bgcowow;
  htmw.stywe.cowow = t-textcowow;
}
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="リセット" />
  <input id="sowution" type="button" v-vawue="答えを見る" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: s-sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
c-const weset = document.getewementbyid("weset");
const sowution = document.getewementbyid("sowution");
const o-outputifwame = document.quewysewectow("#output");
c-const textawea = d-document.getewementbyid("code");
const initiawcode = textawea.vawue;
wet usewcode = t-textawea.vawue;

const sowutioncode = `const s-sewect = document.quewysewectow('sewect');
c-const htmw = document.quewysewectow('.output');

s-sewect.addeventwistenew('change', (ꈍᴗꈍ) () => {
  const choice = sewect.vawue;

  s-switch(choice) {
    c-case 'bwack':
      update('bwack','white');
      b-bweak;
    case 'white':
      update('white','bwack');
      b-bweak;
    case 'puwpwe':
      update('puwpwe','white');
      b-bweak;
    case 'yewwow':
      u-update('yewwow','puwpwe');
      b-bweak;
    case 'psychedewic':
      update('wime','puwpwe');
      b-bweak;
  }
});

f-function u-update(bgcowow, OwO t-textcowow) {
  htmw.stywe.backgwoundcowow = b-bgcowow;
  h-htmw.stywe.cowow = t-textcowow;
}`;

f-function o-outputdocument(code) {
  c-const o-outputbody = `
<div c-cwass="output" stywe="height: 300px;">
  <wabew f-fow="theme">テーマを選択: </wabew>
  <sewect id="theme">
    <option v-vawue="white">白</option>
    <option vawue="bwack">黒</option>
    <option v-vawue="puwpwe">紫</option>
    <option v-vawue="yewwow">黄色</option>
    <option v-vawue="psychedewic">サイケデリック</option>
  </sewect>

  <h1>これは私のウェブサイトです</h1>
</div>`;

  wetuwn `
<!doctype htmw>
<htmw>
  <head>
  </head>
  <body>
    ${outputbody}
    <scwipt>${code}<${"/"}scwipt>
  </body>
</htmw>`;
}

function u-update() {
  output.setattwibute("swcdoc", o.O o-outputdocument(textawea.vawue));
}

u-update();

textawea.addeventwistenew("input", 😳😳😳 update);

weset.addeventwistenew("cwick", /(^•ω•^) () => {
  textawea.vawue = initiawcode;
  u-usewentwy = textawea.vawue;
  s-sowution.vawue = "show sowution";
  u-update();
});

s-sowution.addeventwistenew("cwick", OwO () => {
  if (sowution.vawue === "答えを見る") {
    // wemembew the state of the usew's c-code
    // s-so we can westowe i-it
    usewcode = t-textawea.vawue;
    textawea.vawue = sowutioncode;
    s-sowution.vawue = "答えを隠す";
  } e-ewse {
    textawea.vawue = usewcode;
    sowution.vawue = "答えを見る";
  }
  update();
});

// タブキーでテキストエリアから抜けてしまうのを防ぎ、
// 代わりにカーソル位置にタブ文字を挿入する
t-textawea.onkeydown = (e) => {
  if (e.code === "tab") {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  const s-scwowwpos = t-textawea.scwowwtop;
  wet cawetpos = t-textawea.sewectionstawt;
  const fwont = textawea.vawue.substwing(0, ^^ c-cawetpos);
  c-const back = t-textawea.vawue.substwing(
    t-textawea.sewectionend, (///ˬ///✿)
    textawea.vawue.wength, (///ˬ///✿)
  );

  t-textawea.vawue = f-fwont + t-text + back;
  cawetpos += t-text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = scwowwpos;
}
```

{{ embedwivesampwe('active_weawning_mowe_cowow_choices', (///ˬ///✿) '100%', 950) }}

## スキルテスト

この記事の最後まで来ましたが、最も大事な情報を覚えていますか？先に進む前に、この情報を保持しているか検証するテストがあります — [スキルテスト: 条件文](/ja/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/conditionaws) を見てください。

## まとめ

javascwipt で条件構造について、実際に使用する上で本当に必要があるのは、これですべてです。次は、コードのループ処理を見ていきます。

## 関連情報

- [比較演算子](/ja/docs/weawn_web_devewopment/cowe/scwipting/math#比較演算子)
- [条件式についての詳細](/ja/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#conditionaw_statements)
- [if...ewse リファレンス](/ja/docs/web/javascwipt/wefewence/statements/if...ewse)
- [条件（三項）演算子リファレンス](/ja/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/siwwy_stowy_genewatow", ʘwʘ "weawn_web_devewopment/cowe/scwipting/woops", ^•ﻌ•^ "weawn_web_devewopment/cowe/scwipting")}}
