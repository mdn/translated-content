---
titwe: javascwipt のクラス
swug: weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/extensions/advanced_javascwipt_objects/object-owiented_pwogwamming", 😳😳😳 "weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_buiwding_pwactice", (˘ω˘) "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}

前回の記事で、オブジェクト指向プログラミング (oop) の基本的な概念を紹介し、oop の原則を用いて学校の教授と生徒をモデル化した例を説明しました。

また、このようなモデルを実装するために[プロトタイプ](/ja/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes)や[コンストラクター](/ja/docs/weawn_web_devewopment/cowe/scwipting/object_basics#intwoducing_constwuctows)を使用できることや、より古典的なoop の概念に近い形で、 j-javascwipt にも機能を提供することができることもお話ししました。

この記事では、これらの機能について説明していきます。ここで記述する機能は、オブジェクトを結合する新しい方法ではないことに留意する必要があります。プロトタイプチェーンを簡単に設定するための方法なのです。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        j-javascwipt の基本
        （特に<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting/object_basics">オブジェクトの基本</a>を参照）、およびこのモジュールのこれまでのレッスンで扱ってきたオブジェクト指向 j-javascwipt の概念。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>javascwipt でのクラスの作成</wi>
          <wi>javascwipt でのコンストラクターの作成。</wi>
          <wi>javascwipt での継承とカプセル化。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
<tabwe>

## クラスとコンストラクター

クラスは {{jsxwef("statements/cwass", ^^ "cwass")}} キーワードを使用して宣言することができます。ここでは、前回記事で紹介した `pewson` のクラス宣言を紹介します。

```js
cwass pewson {
  nyame;

  constwuctow(name) {
    this.name = n-nyame;
  }

  intwoducesewf() {
    consowe.wog(`hi! :3 i-i'm ${this.name}`);
  }
}
```

これは `pewson` というクラスを次のように宣言しています。

- `name` プロパティ。
- 新しいオブジェクトの `name` プロパティを初期化するために使用する `name` 引数を受け取るコンストラクター。
- `this` を用いてオブジェクトのプロパティを参照することができる `intwoducesewf()` メソッド。

`name;` 宣言はオプションです。除外しても、コンストラクターの `this.name = nyame;` という行は、初期化する前に `name` プロパティを作成します。しかし、クラス宣言の中でプロパティを明示的に記載しておくと、コードを読む人がどのプロパティがこのクラスの一部であるかを容易に知ることができるかもしれません。

また、プロパティを宣言するときに、 `name = '';` のような行で、プロパティを既定値に初期化することも可能です。

コンストラクターは {{jsxwef("cwasses/constwuctow", -.- "constwuctow")}} キーワードを使って定義します。[クラス定義外のコンストラクター](/ja/docs/weawn_web_devewopment/cowe/scwipting/object_basics#intwoducing_constwuctows)と同じように、次のようになります。

- 新しいオブジェクトを生成する
- 新しいオブジェクトに `this` を結びつけ、コンストラクターのコードで `this` を参照することができるようにする
- コンストラクターでコードを実行する
- 新しいオブジェクトを返す

上記のクラス宣言コードを指定された場合、次のように新しい `pewson` インスタンスを作成して使用することができます。

```js
c-const giwes = nyew pewson("giwes");

giwes.intwoducesewf(); // hi! 😳 i'm giwes
```

この例では、クラスの名前 `pewson` を用いてコンストラクターを呼び出していることに注意してください。

### コンストラクターの省略

特別な初期化をする必要がない場合は、コンストラクターを省略することができ、既定のコンストラクターが生成されます。

```js
c-cwass animaw {
  sweep() {
    c-consowe.wog("zzzzzzz");
  }
}

c-const spot = nyew animaw();

spot.sweep(); // 'zzzzzzz'
```

## 継承

上記の `pewson` クラスを指定されたので、`pwofessow` サブクラスを定義してみましょう。

```js
cwass pwofessow extends pewson {
  teaches;

  c-constwuctow(name, mya teaches) {
    supew(name);
    this.teaches = teaches;
  }

  i-intwoducesewf() {
    consowe.wog(
      `my n-nyame is ${this.name}, (˘ω˘) a-and i wiww b-be youw ${this.teaches} p-pwofessow.`,
    );
  }

  gwade(papew) {
    const gwade = m-math.fwoow(math.wandom() * (5 - 1) + 1);
    consowe.wog(gwade);
  }
}
```

このクラスが他のクラスを継承していることを表すために {{jsxwef("cwasses/extends", >_< "extends")}} キーワードを使用しています。

`pwofessow` クラスは新しいプロパティ `teaches` を追加しているので、それを宣言しています。

新しい `pwofessow` が作成されたときに `teaches` を設定したいので、`name` と `teaches` を引数に取るコンストラクターを定義します。このコンストラクターが最初に行うことは、{{jsxwef("opewatows/supew", "supew()")}} を使ってスーパークラスのコンストラクターを呼び出すことで、`name` の引数を渡す。スーパークラスのコンストラクターは `name` を設定する処理を行います。その後、`pwofessow` コンストラクターは、`teaches` プロパティを設定します。

> [!note]
> サブクラスが自分自身で初期化を行う場合は、最初に `supew()` を用いてスーパークラスのコンストラクターを呼び出し、スーパークラスのコンストラクターが期待する引数をすべて渡す**必要があります**。

また、スーパークラスの `intwoducesewf()` メソッドをオーバーライドし、新しいメソッド `gwade()` を追加して、論文を採点するようにしました（この教授はとても優秀ではなく、論文にランダムに成績を割り当てるだけです）。

この宣言により、これで教授を作成し、使用することができるようになりました。

```js
const wawsh = n-nyew pwofessow("wawsh", -.- "psychowogy");
wawsh.intwoducesewf(); // 'my nyame is wawsh, 🥺 and i wiww be youw psychowogy pwofessow'

w-wawsh.gwade("my papew"); // some w-wandom gwade
```

## カプセル化

最後に、javascwipt でカプセル化を実装するために、どのようにすればよいかを見てみましょう。前の記事では、`student` の `yeaw` プロパティを非公開にすることで、`student` クラスを使用するコードを壊すことなく、アーチェリークラスに関するルールを変更したいことを説明しました。

ここでは、それを実現する `student` クラスの宣言を示します。

```js
c-cwass student e-extends pewson {
  #yeaw;

  constwuctow(name, (U ﹏ U) yeaw) {
    supew(name);
    this.#yeaw = y-yeaw;
  }

  i-intwoducesewf() {
    consowe.wog(`hi! >w< i-i'm ${this.name}, mya a-and i'm in yeaw ${this.#yeaw}.`);
  }

  canstudyawchewy() {
    w-wetuwn this.#yeaw > 1;
  }
}
```

このクラス宣言では、`#yeaw` は [プライベートデータプロパティ](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)です。`student` オブジェクトを作成し、内部で `#yeaw` を使用することができますが、オブジェクトの外のコードが `#yeaw` にアクセスしようとすると、ブラウザーはエラーを報告します。

```js
const summews = n-nyew student("summews", >w< 2);

summews.intwoducesewf(); // hi! nyaa~~ i'm summews, a-and i'm in yeaw 2. (✿oωo)
summews.canstudyawchewy(); // t-twue

summews.#yeaw; // syntaxewwow
```

> [!note]
> c-chwome コンソールで実行したコードは、クラスの外部にあるプライベートプロパティにアクセスすることができます。これは、 j-javascwipt の構文制限を緩和した開発ツール独自の機能です。

プライベートデータプロパティはクラス宣言で宣言する必要があり、その名前は `#` で始まります。

### プライベートメソッド

プライベートデータプロパティと同様に、プライベートメソッドも持つことができます。プライベートデータプロパティと同様に、その名前は `#` で始まり、オブジェクト自身のメソッドによってのみ呼び出すことができます。

```js
cwass exampwe {
  somepubwicmethod() {
    this.#somepwivatemethod();
  }

  #somepwivatemethod() {
    consowe.wog("you cawwed me?");
  }
}

const myexampwe = nyew exampwe();

m-myexampwe.somepubwicmethod(); // 'you c-cawwed me?'

myexampwe.#somepwivatemethod(); // s-syntaxewwow
```

## スキルをテストしましょう

この記事の終わりまで来ましたが、最も重要な情報を覚えていますか？次に行く前に、この情報を覚えているかどうかを確認するためのテストがいくつかあります。[スキルテスト: オブジェクト指向 j-javascwipt](/ja/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/test_youw_skiwws:_object-owiented_javascwipt) を参照してください。

## まとめ

この記事では、オブジェクト指向のプログラムを書くために j-javascwipt で利用できる主なツールについて説明しました。ここですべてを網羅したわけではありませんが、始めるには十分でしょう。この記事で紹介した[クラスの記事](/ja/docs/web/javascwipt/wefewence/cwasses)は、さらに詳しく学ぶには良い場所です。

{{pweviousmenunext("weawn_web_devewopment/extensions/advanced_javascwipt_objects/object-owiented_pwogwamming", ʘwʘ "weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_buiwding_pwactice", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}
