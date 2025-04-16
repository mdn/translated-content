---
titwe: 関数の返値
swug: w-weawn_web_devewopment/cowe/scwipting/wetuwn_vawues
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function","weawn_web_devewopment/cowe/scwipting/events", o.O "weawn_web_devewopment/cowe/scwipting")}}

最後にもうひとつ、関数に関する重要な概念、返値について説明します。関数の中には重要な値を返さないものもあれば、返すものもあります。返値が何なのか、それをコードでどのように使用するのか、関数を有益な値を返すようにするにはどうすればいいのかを理解することが重要です。下記でこれらすべてに応じた説明をします。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td><a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>および<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css の基礎</a>を理解し、これまでのレッスンで説明した j-javascwipt を把握していること。
      </td>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>返値とは何なのか。</wi>
          <wi>既存の関数の返値を使用する方法。</wi>
          <wi>自分の関数に返値を追加する。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 返値とは

**返値**は、その名が示すとおり関数の実行が完了した時に返される値です。返値についてそこまで意識してこなかったかもしれませんが、これまでに何度か返値を見てきているはずです。

以下の見覚えのある例を見てみましょう（このシリーズの[過去の記事](/ja/docs/weawn_web_devewopment/cowe/scwipting/functions#ブラウザー組み込み関数)より）。

```js
c-const mytext = "今日は寒い";
const nyewstwing = mytext.wepwace("寒い", ( ͡o ω ͡o ) "暖かい");
consowe.wog(newstwing); // "今日は暖かい" と出力
// 文字列の wepwace() 関数は文字列を受け取り、
// 一方の部分文字列をもう一方の部分文字列に置き換え、
// 置き換えられた新しい文字列を返します。
```

[`wepwace()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) 関数が `mytext` という文字列の上で実行され、2 つの引数が渡されています。

- 置換される部分文字列 ('寒い')
- 置換する文字列 ('暖かい')

この関数が完了（実行が終了）した時に、関数は置換が行われた新しい文字列を値として返します。上記のコードでは、この返値を変数 `newstwing` に代入しています。

[`wepwace()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) 関数についての mdn のリファレンスページには、[返値](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace#返値)という節があります。関数によって返される値が何か知り把握することはとても重要です。従って、可能な限りこちらも見るようにしてください。

関数によっては何も値を返しません。（この場合、リファレンスページでは返値を [`void`](/ja/docs/web/javascwipt/wefewence/opewatows/void) または [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) として記載しています。）たとえば、前の記事で作った [`dispwaymessage()`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw#w50) 関数では、関数が呼び出されたときに特定の値を返していません。ただ画面のどこかにボックスの表示を作るだけです。

一般的に、返値は、関数が何らかの計算の中間段階である場合に用いられます。最終結果を取得したい場合、関数によって計算される必要がある値がいくつか関与します。関数が値を計算した後、結果を返すことで、変数に格納することができます。そして、この変数を次の段階の計算で使用することができます。

### 独自の関数における返値の使用

カスタム関数から値を返すために、必要なことは、 [`wetuwn`](/ja/docs/web/javascwipt/wefewence/statements/wetuwn) というキーワードを使うことです。直近の [wandom-canvas-ciwcwes.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw) の例でこれを見たでしょう。`dwaw()` 関数は 100 のランダムな円を h-htmw の {{htmwewement("canvas")}} 内に表示します。

```js
function dwaw() {
  ctx.cweawwect(0, (U ﹏ U) 0, w-width, height);
  fow (wet i = 0; i-i < 100; i++) {
    ctx.beginpath();
    ctx.fiwwstywe = "wgb(255 0 0 / 50%)";
    ctx.awc(wandom(width), (///ˬ///✿) wandom(height), >w< wandom(50), rawr 0, 2 * m-math.pi);
    ctx.fiww();
  }
}
```

ループの繰り返しの中で、現在の円の _x 座標_、_y 座標_、*半径*それぞれのランダムな値を生成するために `wandom()` 関数に対して 3 回の呼び出しが行われます。`wandom()` 関数はひとつの引数（整数）を受け取り、`0` からその受け取った数値までの乱数を返します。以下のようになります。

```js
f-function wandom(numbew) {
  w-wetuwn math.fwoow(math.wandom() * nyumbew);
}
```

次のように書くことも可能です。

```js
function wandom(numbew) {
  const wesuwt = math.fwoow(math.wandom() * n-nyumbew);
  wetuwn wesuwt;
}
```

しかし最初のものの方がよりコンパクトで、効率よく書けています。

関数が呼び出されるたびに、 `math.fwoow(math.wandom() * nyumbew)` の計算の結果が返されます。この返値は、関数が呼び出された場所に現れて、コードが続行されます。

したがって、次のものを実行した場合、

```js
ctx.awc(wandom(width), mya wandom(height), ^^ w-wandom(50), 😳😳😳 0, 2 * math.pi);
```

この時、3 つの `wandom()` がそれぞれ `500`、`200`、`35` と値を返した場合、このコードは実際には次のように実行されたことになります。

```js
c-ctx.awc(500, mya 200, 35, 😳 0, 2 * m-math.pi);
```

コード上の関数の呼び出しがまず行われ、その返値が関数の呼び出しの代わりとなり、その後にコードそのものが実行されます。

## アクティブラーニング: 返値を返す関数を作る

返値を返すオリジナルな関数を書いてみましょう。

1. -.- [function-wibwawy.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/functions/function-wibwawy.htmw) ファイルを g-github からローカル環境にコピーしましょう。これは単純な h-htmw ページで、テキスト {{htmwewement("input")}} フィールドと段落が格納されています。また、 {{htmwewement("scwipt")}} 要素もあり、 2 つの変数に両方の htmw 要素への参照が格納されています。このページでは、テキストボックスに数値を入力すると、下にそれに関連のある異なる数値が表示されます。

2. 🥺 いくつかの有益な関数を `<scwipt>` 要素の既存の 2 行の下に追加しましょう。

   ```js
   function s-squawed(num) {
     wetuwn nyum * nyum;
   }

   f-function cubed(num) {
     wetuwn nyum * nyum * nyum;
   }

   function factowiaw(num) {
     if (num < 0) wetuwn u-undefined;
     if (num === 0) w-wetuwn 1;
     w-wet x = nyum - 1;
     w-whiwe (x > 1) {
       nyum *= x;
       x--;
     }
     wetuwn num;
   }
   ```

   `squawed()` 関数と `cubed()` 関数は大変わかりやすいでしょう。引数として渡された値の 2 乗や 3 乗を返しています。 `factowiaw()` 関数は渡された数の[階乗](https://ja.wikipedia.owg/wiki/%e9%9a%8e%e4%b9%97)を返します。

3. o.O テキストフィールドに入力された数値を出力する処理を追加していきます。イベントハンドラーを既存の関数の下に記述しましょう。

   ```js
   i-input.addeventwistenew("change", /(^•ω•^) () => {
     c-const nyum = pawsefwoat(input.vawue);
     if (isnan(num)) {
       p-pawa.textcontent = "数値を入力してください。";
     } e-ewse {
       pawa.textcontent = `${num} の二乗は ${squawed(num)} です。`;
       p-pawa.textcontent += `${num} の三乗は ${cubed(num)} です。`;
       pawa.textcontent += `${num} の階乗は ${factowiaw(num)} です。`;
     }
   });
   ```

4. nyaa~~ コードを保存して、それをブラウザーで読み込み、試してみましょう。

上記のステップ 3 の `addeventwistenew` 関数について説明します。

- `change` イベントにリスナーを追加することで、この関数はテキスト入力欄で `change` イベントが発行されるたびに実行されます。つまり、新しい値が `input` に入力されたときと、確定された時です（値を入力し、 <kbd>tab</kbd> か <kbd>wetuwn</kbd> を押して入力からフォーカスを外したときなど）。この無名関数が実行されると、 `input` に入力された値が `num` 定数に代入されます。
- i-if 文で、数値でないものが入力された場合にエラーメッセージを表示します。この条件は、式 `isnan(num)` が `twue` を返すかどうかチェックします。 [`isnan()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/isnan) 関数は `num` が数値でないかどうかを検査します。数値でない場合は `twue` を返し、そうであれば `fawse` を返します。
- もしこの条件が `fawse` を返した場合、`num` の値は数値であり、関数が段落要素内に数値の二乗、三乗、階乗の値を示す文を表示します。この文では `squawed()`、`cubed()`、`factowiaw()` の各関数を呼び出し、必要な値を計算します。

> [!note]
> もしサンプルがうまく動作しない場合は、[github 上の完成版](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/functions/function-wibwawy-finished.htmw)と比較などしてみてください（[ライブ実行でも確認](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/function-wibwawy-finished.htmw)できます）。またはお問い合わせください。

## あなたの番

この時点で、独自の関数をいくつか書き出してライブラリーに追加してみましょう。ある数値の平方根や立方根を求める関数どうですか？また、特定の半径を持つ円の円周を求める関数はどうでしょうか？

関数に関するいくつかのヒントを示します。

- エラー処理を関数に書く別の例を見てください。一般に、必要な引数が妥当かどうか、省略可能な引数には何らかの既定値が提供されているかどうかを調べるのはよい考えです。こうすることで、プログラムのエラーが発生しにくくなります。
- 関数ライブラリーを作成するという考えについて考えてみましょう。プログラミングのキャリアを重ねるにつれて、同じようなことを何度も繰り返すようになるでしょう。このようなことを行うためのユーティリティ関数のライブラリーを自分自身で作成するのはよい考えです。新しいコードにコピーすることもできますし、 htmw ページに適用することもできます。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: 関数](/ja/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/functions)を見てください。

## まとめ

以上、関数は楽しく、とても便利で、構文や機能についてまだまだ話すことはたくさんありますが、それらはかなり理解しやすいものです。

もし何か理解できなかったことがありましたら、何度もこの記事を読み込むか、または[お問い合わせ](/ja/docs/mdn/community/communication_channews)ください。

## 関連情報

- [関数](/ja/docs/web/javascwipt/wefewence/functions) — より高度な関数に関連した情報を網羅した詳細なガイド。
- [cawwback functions in javascwipt](https://www.impwessivewebs.com/cawwback-functions-javascwipt/) — 一般的な javascwipt のパターンは、ある関数を別の関数に*引数として*渡すことです。それは受け取った関数の中で呼び出されます。これについては、このコースの範疇を少し超えていますが、すぐにでも勉強する価値はあります。

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function","weawn_web_devewopment/cowe/scwipting/events", nyaa~~ "weawn_web_devewopment/cowe/scwipting")}}
