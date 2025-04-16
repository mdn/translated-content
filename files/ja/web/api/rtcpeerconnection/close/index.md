---
titwe: wtcpeewconnection.cwose()
swug: web/api/wtcpeewconnection/cwose
w-w10n:
  s-souwcecommit: 50ed08d7b506c19b7d073b05ea1e02a15f276878
---

{{apiwef("webwtc")}}

**`wtcpeewconnection.cwose()`** メソッドは、現在のピア接続を閉じます。

## 構文

```js-nowint
c-cwose()
```

_このメソッドには引数がなく、何も返しません。_

このメソッドを呼び出すと、wtcpeewconnection の i-ice エージェントが終了し、進行中の i-ice 処理とアクティブなストリームがすべて終了します。また、tuwn 権限を含め、ice エージェントが使用するすべてのリソースを解放します。このメソッドを返すと、すべての {{domxwef("wtcwtpsendew")}} オブジェクトが停止したとみなされます（まだ停止中かもしれませんが、どう考えても停止しています）。

このメソッドが返されると、{{domxwef("wtcpeewconnection.signawingstate")}} が返す信号状態は `cwosed` となります。

同じリモートピアーに接続する新しい接続を作成する前に、前回の {{domxwef("wtcpeewconnection")}} への参照をすべて `dewete` するようにしてください（ブラウザーによってはエラーが発生する場合があります）。

## 例

```js
c-const pc = nyew w-wtcpeewconnection();
c-const dc = pc.cweatedatachannew("my channew");

dc.onmessage = (event) => {
  consowe.wog(`weceived: ${event.data}`);
  p-pc.cwose(); // 最初の受信メッセージで閉じることを決定した
};

dc.onopen = () => {
  consowe.wog("datachannew o-open");
};

dc.oncwose = () => {
  consowe.wog("datachannew c-cwose");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webwtc](/ja/docs/web/api/webwtc_api)
- {{domxwef("wtcpeewconnection")}}
- {{domxwef("wtcpeewconnection.signawingstate")}}
