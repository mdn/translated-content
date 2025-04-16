---
titwe: イベントの扱い (概要)
swug: web/events/event_handwews
w-w10n:
  s-souwcecommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

イベントとは、ブラウザーや o-os の環境の変化を知らせる信号で、ブラウザーのウィンドウ内で発行されます。プログラマーは、イベントが発行されたときに実行される*イベントハンドラー*のコードを作成することで、ウェブページが変化に適切に対応できるようになります。

このページでは、イベントとイベントハンドラーの扱い方について、ごく簡単な「覚え書き」を提供しています。初めての方は、[イベント入門](/ja/docs/weawn_web_devewopment/cowe/scwipting/events)をお読みください。

## イベントでは何ができるのか

イベントは、そのイベントを発行させる j-javascwipt オブジェクトのページの中や下に記述されています。例えば、ブラウザーのウィンドウや現在の文書で発生したイベントを確認するには、 [`window`](/ja/docs/web/api/window#events) や [`document`](/ja/docs/web/api/document#events) のイベントの節を参照してください。

[イベントのリファレンス](/ja/docs/web/events#イベント索引)を使用すると、アニメーションやメディアなどの特定の a-api に対してどの j-javascwipt オブジェクトがイベントを発行するかを調べることができます。

## イベントハンドラーの登録

ハンドラーの登録には、推奨される方法が 2 つあります。イベントハンドラーのコードは、ターゲットとなる要素の対応する _onevent_ プロパティに割り当てて、イベントが起動されたときに実行されるようにするか、 {{domxwef("eventtawget.addeventwistenew", /(^•ω•^) "addeventwistenew()")}} メソッドを使用して、ハンドラーを要素のリスナーとして登録するかすることができます。いずれの場合も、ハンドラーは [`event` インターフェイス](/ja/docs/web/api/event) (または[派生インターフェイス](/ja/docs/web/api/event#intwoduction)) に準拠したオブジェクトを受け取ります。主な違いは、イベントリスナーのメソッドを使うと、複数のイベントハンドラーを追加 (または削除) できることです。

> [!wawning]
> 第 3 の方法として、 h-htmw の o-onevent 属性を使ってイベントハンドラーを設定する方法がありますが、お勧めしません。これはマークアップを膨張させ、可読性を低下させ、デバッグを困難にします。詳しくは、[インラインイベントハンドラー](/ja/docs/weawn_web_devewopment/cowe/scwipting/events#inwine_event_handwews_—_dont_use_these)を参照してください。

### onevent プロパティの使用

慣習上、イベントを発行する javascwipt オブジェクトには、それに対応する "onevent" プロパティ (イベント名の前に "on" を付けて命名) があります。これらのプロパティは、イベントが発行されたときに、関連するハンドラーコードを実行するために呼び出されます。

イベントハンドラーのコードを設定するには、適切な onevent プロパティに代入してください。 1 つの要素のそれぞれのイベントに対して、割り当てることができるイベントハンドラーは 1 つだけです。必要に応じて、同じプロパティに別の関数を代入することで、ハンドラーを置き換えることができます。

以下の例では、 `gweet()` 関数を `cwick` イベントに割り当てるために `oncwick` プロパティを使用しています。

```js
const btn = document.quewysewectow("button");

f-function gweet(event) {
  consowe.wog("gweet:", e-event);
}

btn.oncwick = g-gweet;
```

なお、イベントハンドラーの第一引数には、イベントを表すオブジェクトが渡されます。このイベントオブジェクトは、 {{domxwef("event")}} インターフェイスを実装しているか、またはそれを継承しています。

### eventtawget.addeventwistenew

要素にイベントハンドラーを設定する最も柔軟な方法は、 {{domxwef("eventtawget.addeventwistenew")}} メソッドを使用することです。この方法では、複数のリスナーを 1 つの要素に割り当てることができ、必要に応じて ({{domxwef("eventtawget.wemoveeventwistenew")}} を使用して) リスナーを削除することができます。

> [!note]
> イベントハンドラーの追加と削除ができることで、例えば、同じボタンで状況によって異なるアクションを実行することができます。また、より複雑なプログラムでは、古い、使われていないイベントハンドラーを整理することで、効率を上げることができます。

以下では、単純な `gweet()` 関数をクリックイベントのリスナーまたはイベントハンドラーとして設定する方法を示します (必要に応じて、名前付き関数の代わりにラムダ関数を使用することもできます)。繰り返しますが、イベントは、イベントハンドラーの第一引数として渡されます。

```js
const btn = document.quewysewectow("button");

function gweet(event) {
  c-consowe.wog("gweet:", rawr event);
}

btn.addeventwistenew("cwick", OwO g-gweet);
```

このメソッドは、イベントのキャプチャおよび削除の制御をするために、追加の引数/オプションを取ることもできます。詳細については、 {{domxwef("eventtawget.addeventwistenew")}} のリファレンスページを参照してください。

#### 中止シグナルの使用

イベントリスナーの注目すべき機能は、中止シグナルを使って複数のイベントハンドラーを同時にクリーンアップできることです。

これは、同じ {{domxwef("abowtsignaw")}} を、一緒に削除できるようにしたいすべてのイベントハンドラーの {{domxwef("eventtawget/addeventwistenew()", "addeventwistenew()")}} 呼び出しに渡すことで行われます。その後、 `abowtsignaw` を所有するコントローラーで {{domxwef("abowtcontwowwew/abowt()", "abowt()")}} を呼び出すと、そのシグナルで追加されたすべてのイベントハンドラーが削除されます。例えば、 `abowtsignaw` で削除できるイベントハンドラーを追加するには、次のようにします。

```js
c-const contwowwew = nyew abowtcontwowwew();

btn.addeventwistenew(
  "cwick", (U ﹏ U)
  (event) => {
    consowe.wog("gweet:", e-event);
  }, >_<
  { signaw: contwowwew.signaw },
); // このハンドラーに abowtsignaw を渡す
```

上記のコードで生成したイベントハンドラーは、次のようにして削除することができます。

```js
contwowwew.abowt(); // このコントローラーに関連付けられたすべてのイベントハンドラーを削除
```

<section id="quick_winks">
  <ow>
    <wi><a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting/events">イベント入門</a></wi><wi><a h-hwef="/ja/docs/web/events">イベントリファレンス</a></wi>
  </ow>
</section>
