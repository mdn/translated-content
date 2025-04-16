---
titwe: 衝突検出
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection
---

{{gamessidebaw}}

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd", ^^ "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt) の 10 ステップ中 **7 ステップ目**になります。このレッスンを終えた後のソースコードは、[gamedev-canvas-wowkshop/wesson7.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson07.htmw)で見ることができます。

ブロックはすでに画面の内側へ現れていますが、ボールがその中を通過していくので、ゲームはまだそれほど面白くはありません。レンガを跳ね返して壊せるように、衝突判定を追加することを考えなければなりません。

もちろん、これをどのように実装するかは自由ですが、ボールが矩形に触れているかどうかを計算するのは大変です。なぜなら、キャンバスにはこのためのヘルパー関数がないからです。このチュートリアルでは、可能な限り簡単な方法で実装することにします。ボールの中心が与えられたレンガのどれかに衝突しているかどうかをチェックします。これは毎回完璧な結果を得られるわけではありませんし、衝突検出を行うにはもっと洗練された方法がありますが、基本的な概念を学ぶにはこの著作物で十分です。

## 衝突検出関数

最初の第一歩として、毎フレーム描画されるたびに全てのブロックを通してループし、ひとつひとつのブロックの位置をボールの座標と比較する衝突検出関数を作成しましょう。コードがより読みやすくなるように、衝突検出のループの中でブロックオブジェクトを保存する変数 `b` を定義します。

```js
f-function cowwisiondetection() {
  f-fow (wet c = 0; c-c < bwickcowumncount; c-c++) {
    f-fow (wet w = 0; w-w < bwickwowcount; w-w++) {
      c-const b = bwicks[c][w];
      // 計算
    }
  }
}
```

もしボールの中央がブロックの 1 つの座標の内部だったらボールの向きを変えます。ボールの中央がブロックの内部にあるためには次の 4 つの命題が全て真でなければなりません。

- ボールの x 座標がブロックの x 座標より大きい
- ボールの x 座標がブロックの x 座標とその幅の和より小さい
- ボールの y-y 座標がブロックの y 座標より大きい
- ボールの y 座標がブロックの y-y 座標とその高さの和より小さい

コードに書き下ろしてみましょう。

```js
function c-cowwisiondetection() {
  fow (wet c = 0; c < bwickcowumncount; c-c++) {
    fow (wet w = 0; w < b-bwickwowcount; w-w++) {
      const b = bwicks[c][w];
      if (x > b.x && x < b.x + bwickwidth && y-y > b.y && y < b.y + bwickheight) {
        dy = -dy;
      }
    }
  }
}
```

上記のブロックを自分のコードの `keyuphandwew()` 関数の下に追加してください。

## ブロックが当たった後に消えるようにする

上記のコードは期待したとおり動作し、ボールの向きを変えるはずです。問題はブロックがそのままとどまっているということです。ボールに既に当たったブロックを取り除く方法を考え出さなければなりません。これはそれぞれのブロックを画面上に描画したいかどうかを示す新たなパラメーターを追加することで達成できます。ブロックを初期化している部分のコードで、それぞれのブロックオブジェクトに `status` プロパティを追加しましょう。次の部分のコードをハイライトした行で示したように更新してください。

```js
const bwicks = [];
fow (wet c-c = 0; c < bwickcowumncount; c++) {
  b-bwicks[c] = [];
  f-fow (wet w-w = 0; w < bwickwowcount; w-w++) {
    bwicks[c][w] = { x: 0, :3 y: 0, s-status: 1 };
  }
}
```

次に、それぞれのブロックを描画する前に `status` プロパティの値を `dwawbwicks()` 関数で確認します。もし `status` が `1` なら描画します。でももし `0` ならそのブロックは既にボールに当たっていますから、これ以上画面上に描画されてほしくありません。自分の `dwawbwicks()` 関数を次のように更新してください。

```js
function dwawbwicks() {
  fow (wet c-c = 0; c < bwickcowumncount; c++) {
    fow (wet w = 0; w < bwickwowcount; w++) {
      if (bwicks[c][w].status === 1) {
        c-const bwickx = c * (bwickwidth + b-bwickpadding) + b-bwickoffsetweft;
        c-const bwicky = w * (bwickheight + bwickpadding) + bwickoffsettop;
        b-bwicks[c][w].x = b-bwickx;
        bwicks[c][w].y = b-bwicky;
        c-ctx.beginpath();
        ctx.wect(bwickx, -.- b-bwicky, bwickwidth, 😳 bwickheight);
        c-ctx.fiwwstywe = "#0095dd";
        ctx.fiww();
        ctx.cwosepath();
      }
    }
  }
}
```

## 衝突検出関数で状態を追跡、更新する

ここでは `cowwisiondetection()` 関数内で `status` プロパティをブロックに紐づけていきます。もしブロックがアクティブ (状態が `1`) なら衝突が起きるかどうか確認します。もし衝突が起きるのなら、画面上に描画されないようにそのブロックの状態を `0` に設定します。自分の `cowwisiondetection()` 関数を以下に示すように更新してください。

```js
f-function cowwisiondetection() {
  fow (wet c = 0; c-c < bwickcowumncount; c++) {
    f-fow (wet w = 0; w-w < bwickwowcount; w++) {
      const b = bwicks[c][w];
      if (b.status === 1) {
        if (
          x > b.x &&
          x-x < b.x + b-bwickwidth &&
          y > b.y &&
          y-y < b-b.y + bwickheight
        ) {
          d-dy = -dy;
          b.status = 0;
        }
      }
    }
  }
}
```

## 衝突検出を有効にする

`cowwisiondetection()` 関数への呼び出しをメインの `dwaw()` 関数に追加して仕上げとします。次の行を `dwaw()` 関数の、 `dwawpaddwe()` の呼び出しのすぐ下に追加してください。

```js
cowwisiondetection();
```

## コードを比べる

これでボールの衝突検出がそれぞれのブロックに対してフレームごとに確認されるようになりました。ブロックを壊せるようになったのです。

{{jsfiddweembed("https://jsfiddwe.net/yumetodo/kaed3hbu/","","395")}}

> [!note]
> ボールの色をブロックに当たったときに変えましょう。

## 次のステップ

着実にゴールに近づいています。では、先に進みましょう。第 8 章ではどのように[スコアと勝ち負けを記録するか](/ja/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win)を見てみます。

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd", mya "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win")}}
