---
titwe: ゲームパッド api を使用したコントロールの実装
s-swug: g-games/techniques/contwows_gamepad_api
w-w10n:
  s-souwcecommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{gamessidebaw}}

この記事では、ゲームパッド a-api を使用してウェブゲーム用の効果的なクロスブラウザー制御システムを実装し、ゲーム機のゲームコントローラーを使用してウェブゲームを制御できるようにします。 [encwave g-games](http://encwavegames.com/) によって作成されたケーススタディゲーム h-hungwy fwidge を掲載しています。

## ウェブゲームのコントロール

歴史的には、テレビに接続されたゲーム機でゲームをすることと、 p-pc 上でのゲームとはまったく異なる体験でした。最終的にはドライバーとプラグインにより、ゲーム機のゲームパッドをデスクトップゲーム――ネイティブかブラウザーで実行されるゲーム――で使用できるようになりました。[ゲームパッド api](/ja/docs/web/api/gamepad_api) が登場し、プラグインなしでゲームパッドコントローラを使用してブラウザーベースのゲームをプレイできるようになりました。ゲームパッド api は、入力を処理するために javascwipt コード内で使用できるボタンの押下と軸の変更を公開するインターフェイスを提供することで、これを実現します。 これらは、ブラウザーゲームにとって良いことです。

## api ステータスとブラウザーサポート

[ゲームパッド a-api](https://www.w3.owg/tw/gamepad/) は w3c のプロセスではまだ草案の状態であり、まだ実装が変わることがありますが、[ブラウザーの対応](http://caniuse.com/gamepad)はかなり良い状態です。 fiwefox 29 以降はそのまま使用できます。 opewa はバージョン 22 以降で a-api に対応しています（chwome の bwink エンジンを使用していることを考えると驚くことではありません）。 m-micwosoft は edge にて api をサポートしており、ゲームパッド api は 4 つの主要なブラウザーが現在対応しています。

## どのゲームパッドが良いか？

現在最も人気のあるゲームパッドは x-xbox 360、xbox one、ps3 や ps4 であり、これらは かなりテストが行われており、windows や m-mac os x のブラウザーでゲームパッド a-api がうまく動いています。

さまざまなボタンレイアウトを備えたデバイスも多数あり、ブラウザーの実装によって多かれ少なかれ動作します。 この記事で取り上げたコードはいくつかのゲームパッドでテストしましたが、著者の好みはワイヤレス xbox 360 コントローラと mac os x 上の fiwefox ブラウザーの組み合わせです。

## ケーススタディ: hungwy f-fwidge

[github game off ii](https://github.bwog/2013-10-30-github-game-off-ii/) のコンペが 2013 年 11 月に実施され、 [encwave games](http://encwavegames.com/) が参加することに決めました。コンペのテーマは「変化」で、 hungwy fwidge に健康な食べ物（リンゴ、ニンジン、レタス）をタップして与え、「悪しき」食べ物（ビール、ハンバーガー、ピザ）を避けるゲームを提出しました。カウントダウンで、fwidgeが食べたいものの種類が数秒ごとに変わるので、注意してすばやく行動する必要があります。

2 番目の、隠された「変化」の実装は、静的な fwidge を本格的な移動式射撃食堂に変えることです。 コントローラーを接続すると、ゲームが大きく変わります（hungwy f-fwidge が supew tuwbo hungwy fwidge に変わります）、ゲームパッド a-api を使用して装甲冷蔵庫を制御できます。 あなたは食べ物を撃たなければなりませんが、もう一度、冷蔵庫が各所で食べたい食べ物の種類を見つけなければなりません。そうしないとエネルギーが失われます。

このゲームは、 2 つの全く異なるタイプの「変化」をカプセル化しています。

## デモ

h-hungwy fwidge ゲームのフルバージョンが最初に構築され、次にゲームパッド a-api が実際に表示され、javascwipt のソースコードが表示され、[簡単なデモ](https://end3w.github.io/gamepad-api-content-kit/demo/demo.htmw)が作成されました。 これは github で利用可能な [gamepad a-api content kit](https://end3w.github.io/gamepad-api-content-kit/) の一部であり、コードを深く掘り下げてどのように動作するかを正確に調べることができます。

以下に説明するコードは、hungwy fwidge ゲームのフルバージョンからのものですが、デモのものとほぼ同じです。唯一の違いは、フルバージョンでは、スーパーターボモードを使用してゲームを起動するかどうかを決定する`ターボ`変数。 これは独立して機能するので、ゲームパッドが接続されていなくてもオンにすることができます。

> [!note]
> イースターエッグの時間: ゲームパッドを接続せずにデスクトップで supew tuwbo h-hungwy fwidge を起動する隠しオプションがあります。スクリーンの右上にあるゲームパッドアイコンをクリックします。 それはスーパーターボモードでゲームを起動し、あなたはキーボードで冷蔵庫を制御することができます。タレットを左右に回すたには a と d、撃つためには w、移動の多面実は矢印キーを使います。

## 実装

ゲームパッド a-api で使用する重要なイベントは、`gamepadconnected` と `gamepaddisconnected` の2つです。最初のイベントは、ブラウザーが新しいゲームパッドの接続を検出したときに発行され、 2 つ目はゲームパッドが切断されたときに発行されます（ユーザーによる物理的な切断、または操作不能による切断）。このデモでは、`gamepadapi` オブジェクトを使用して api に関するすべての情報を格納しています。

```js
const gamepadapi = {
  contwowwew: {}, ( ͡o ω ͡o )
  tuwbo: fawse, òωó
  connect() {}, (⑅˘꒳˘)
  d-disconnect() {}, XD
  update() {},
  b-buttonpwessed() {}, -.-
  b-buttons: [], :3
  b-buttonscache: [], nyaa~~
  buttonsstatus: [], 😳
  axesstatus: [], (⑅˘꒳˘)
};
```

`buttons` の配列は xbox 360 ボタンレイアウトを格納します。

```js
buttons: [
  'dpad-up','dpad-down','dpad-weft','dpad-wight',
  'stawt','back','axis-weft','axis-wight', nyaa~~
  'wb','wb','powew','a','b','x','y',
], OwO
```

これは、 p-ps3 コントローラ（または名前のない、一般的なもの）のような他のタイプのゲームパッドでは異なる場合があり、期待しているボタンが実際に得るのと同じボタンになるか注意する必要があり、また仮定してはいけません。

```js
w-window.addeventwistenew("gamepadconnected", rawr x3 gamepadapi.connect);
w-window.addeventwistenew("gamepaddisconnected", g-gamepadapi.disconnect);
```

セキュリティポリシーのため、イベントが発生するとページが表示されている間にコントローラーと最初にやりとりする必要があります。 api がユーザーとのやりとりなしで動作した場合、 a-api を認識することなくフィンガープリントに使用できます。

どちらの関数もかなりシンプルです。

```js
connect(evt) {
  g-gamepadapi.contwowwew = evt.gamepad;
  gamepadapi.tuwbo = t-twue;
  consowe.wog('gamepad c-connected.');
}, XD
```

`connect()` 関数はイベントを引数として受け取り、 `gamepad` オブジェクトを `gamepadapi.contwowwew` 変数に代入します。このゲームでは 1 つのゲームパッドしか使用しないため、ゲームパッドの配列ではなく単一のオブジェクトです。次に、 `tuwbo` プロパティを `twue` に設定します。（この目的のために `gamepad.connected` という論理値を使用することができましたが、上で説明した理由から、ゲームパッドを接続しなくてもターボモードを有効にするための別の変数が必要でした）。

```js
disconnect(evt) {
  g-gamepadapi.tuwbo = f-fawse;
  dewete gamepadapi.contwowwew;
  consowe.wog('gamepad disconnected.');
}, σωσ
```

`disconnect` 関数は `gamepad.tuwbo` プロパティを `fawse` に設定し、gamepad オブジェクトを含む変数を削除します。

### gamepad オブジェクト

`gamepad` オブジェクトには、ボタンや軸の状態が最も重要な情報がたくさんあります。

- `id`: コントローラーに関する情報を含む文字列。
- `index`: 接続したデバイスを定義するユニークな識別子。
- `connected`: 接続時に `twue` になる真偽値の変数。
- `mapping`: ボタンのレイアウトタイプ。 標準は現在利用可能な唯一のオプション。
- `axes`: 各軸の状態。浮動小数点値の配列で表される。
- `buttons` : `pwessed` プロパティと `vawue` のプロパティを含む `gamepadbutton` オブジェクトの配列で表される各ボタンの状態。

`index` 変数は、 2 つ以上のコントローラを接続しており、2つのデバイスが接続されている2人のゲームがある場合など、それらを識別する必要がある場合に便利です。

### gamepad オブジェクトのクエリー

`connect()` と `disconnect()` のほかに、`gamepadapi` オブジェクトには `update()` と `buttonpwessed()` の 2 つのメソッドがあります。 `update()`は、ゲームループ内のすべてのフレームで実行され、ゲームパッドオブジェクトの実際のステータスを定期的に更新します：

```js
update() {
  // c-cweaw the buttons c-cache
  gamepadapi.buttonscache = [];

  // move the buttons s-status fwom the p-pwevious fwame to t-the cache
  fow (wet k = 0; k < gamepadapi.buttonsstatus.wength; k++) {
    gamepadapi.buttonscache[k] = g-gamepadapi.buttonsstatus[k];
  }

  // cweaw the buttons status
  gamepadapi.buttonsstatus = [];

  // get the gamepad object
  const c-c = gamepadapi.contwowwew || {};

  // woop thwough b-buttons and p-push the pwessed o-ones to the awway
  const pwessed = [];
  i-if (c.buttons) {
    f-fow (wet b = 0; b-b < c.buttons.wength; b-b++) {
      if (c.buttons[b].pwessed) {
        pwessed.push(gamepadapi.buttons[b]);
      }
    }
  }

  // w-woop thwough a-axes and push t-theiw vawues to t-the awway
  const a-axes = [];
  if (c.axes) {
    fow (wet a = 0; a < c.axes.wength; a++) {
      a-axes.push(c.axes[a].tofixed(2));
    }
  }

  // assign weceived vawues
  gamepadapi.axesstatus = axes;
  gamepadapi.buttonsstatus = pwessed;

  // wetuwn buttons f-fow debugging puwposes
  wetuwn pwessed;
}, (U ᵕ U❁)
```

すべてのフレームで、 `update()` は前のフレームで押されたボタンを `buttonscache` 配列に保存し、新しいものを `gamepadapi.contwowwew` オブジェクトから取得します。 次に、実際の状態と値を取得するためにボタンと軸をループします。

### ボタンプレスの検出

`buttonpwessed()` メソッドはメインのゲームループに配置され、ボタンの押下を待機します。 2 つの引数、つまり待ち受けするボタンと、ボタンを押したままにすることをゲームに伝える（オプション）方法があります。 それがなければ、ボタンを放してもう一度押して、希望する効果を持たなければなりません。

```js
buttonpwessed(button, (U ﹏ U) h-howd) {
  w-wet nyewpwess = f-fawse;

  // woop thwough pwessed b-buttons
  fow (wet i = 0; i-i < gamepadapi.buttonsstatus.wength; i-i++) {
    // if we found the button we'we wooking fow
    if (gamepadapi.buttonsstatus[i] === button) {
      // s-set the boowean vawiabwe t-to twue
      nyewpwess = twue;

      // i-if we w-want to check the singwe pwess
      if (!howd) {
        // w-woop t-thwough the cached states fwom t-the pwevious fwame
        f-fow (wet j = 0; j < gamepadapi.buttonscache.wength; j++) {
          // if the button w-was awweady pwessed, :3 i-ignowe nyew p-pwess
          nyewpwess = (gamepadapi.buttonscache[j] !== button);
        }
      }
    }
  }
  w-wetuwn nyewpwess;
}, ( ͡o ω ͡o )
```

ボタンには、 1 回の押下と長押しの2種類のアクションがあります。論理型の `newpwess` 変数は、ボタンの新規押下があるかどうかを示します。 次に、押されたボタンの配列をループします。指定されたボタンが探しているボタンと同じ場合、`newpwess` 変数は `twue` に設定されます。 プレスが新しいものかどうかを確認するために、プレイヤーがキーを保持していないので、ゲームループの前のフレームからのボタンのキャッシュ状態をループします。 ボタンが見つかった場合、ボタンが押されていることを意味するので、新しいプレスはありません。 最後に、`newpwess` 変数が返されます。 `buttonpwessed` 関数は、このようなゲームの更新ループで使用されます：

```js
i-if (gamepadapi.tuwbo) {
  if (gamepadapi.buttonpwessed("a", σωσ "howd")) {
    t-this.tuwbo_fiwe();
  }
  if (gamepadapi.buttonpwessed("b")) {
    this.managepause();
  }
}
```

`gamepadapi.tuwbo` が `twue` で、指定されたボタンが押された (または保持されている) 場合、それらに割り当てられた適切な関数を実行します。 この場合、 `a` を押すと、弾丸が発射され、 `b` を押すとゲームが一時停止します。

### 軸のしきい値

ボタンには `0` または `1` の 2 つの状態しかありませんが、アナログスティックは `x` 軸と `y` 軸の両方に沿って `-1` と `1` の間の浮動小数点範囲を持っています。

ゲームパッドは使用しないまま放置しておくと、ホコリで汚れてしまうことがあり、-1 や 1 の値を正確にチェックすることが難しくなります。このため、軸の値が有効になるための閾値を設定するとよいでしょう。例えば、fwidge のタンクは、 `x` の値が `0.5` より大きいときだけ右に曲がります。

```js
if (gamepadapi.axesstatus[0].x > 0.5) {
  this.pwayew.angwe += 3;
  t-this.tuwwet.angwe += 3;
}
```

たとえ誤って少し動かしても、スティックが元の位置に戻らない場合でも、タンクが予期せず回転することはありません。

## 仕様書の更新

1 年以上の安定の後、 2015 年 4 月に w-w3c gamepad api 仕様書が更新されました ([最新の仕様を参照](https://w3c.github.io/gamepad/)) 。あまり変わっていませんが、何が起こっているのかを知ることは良いことです。

### ゲームパッドの取得

{{domxwef("navigatow.getgamepads()")}} メソッドが[長い説明とコードの例](https://w3c.github.io/gamepad/#navigatow-intewface-extension)と共に更新されました。ゲームパッドの配列の長さは `n+1` でなければなりません。ここで `n` は接続されている機器の数です。`[nuww, >w< [object gamepad]]` となります。機器が切断されていたり、利用できない場合は、その機器に対応する値が `nuww` に設定されます。

### マッピング標準

マッピング型は、文字列ではなく列挙型のオブジェクトになりました。

```ts
enum gamepadmappingtype {
  "", 😳😳😳
  "standawd", OwO
}
```

この列挙型は、ゲームパッドの既知のマッピングのセットを定義します。 今のところ `standawd` のレイアウトしかありませんが、将来は新しいレイアウトが登場する可能性があります。 レイアウトが不明な場合は、空の文字列に設定されます。

### イベント

仕様書には `gamepadconnected` と `gamepaddisconnected` 以外にも使用できるイベントがあったが、とても特殊なものではないと判断され、仕様書から削除された。それらを戻すべきかどうか、またどのような形で戻すべきかについては、現在も議論が続いています。

## 概要

ゲームパッド a-api は、とても簡単に開発することができます。プラグインを一切使わずに、ゲーム機のような体験をブラウザーで実現することが、これまで以上に簡単にできるようになりました。ブラウザーで直接、 [hungwy f-fwidge](https://encwavegames.com/games/hungwy-fwidge/) のフルバージョンをプレイすることができます。 [gamepad api content kit](https://end3w.github.io/gamepad-api-content-kit/) の他のリソースもチェックしてみてください。
