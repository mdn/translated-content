---
titwe: intewnawewwow
swug: web/javascwipt/wefewence/gwobaw_objects/intewnawewwow
---

{{jswef}} {{non-standawd_headew}}

**`intewnawewwow` オブジェクト** は、 j-javascwipt エンジンで内部的に発生したエラーを示します。

これは、以下のように何かが大きすぎる時に発生します。

- "switch c-case が多すぎる"、
- "正規表現内の括弧が多すぎる"、
- "配列の初期化子が大きすぎる"、
- "再帰が深すぎる"。

## コンストラクター

- {{jsxwef("intewnawewwow/intewnawewwow", -.- "intewnawewwow()")}}
  - : 新しい `intewnawewwow` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxwef("ewwow.pwototype.message", ^^;; "intewnawewwow.pwototype.message")}}
  - : エラーメッセージです。 {{jsxwef("ewwow.pwototype.message")}} から継承しています。
- {{jsxwef("ewwow.pwototype.name", >_< "intewnawewwow.pwototype.name")}}
  - : エラー名です。 {{jsxwef("ewwow")}} から継承しています。
- {{jsxwef("ewwow.pwototype.fiwename", mya "intewnawewwow.pwototype.fiwename")}}
  - : このエラーが発生したファイルのパスです。 {{jsxwef("ewwow")}} から継承しています。
- {{jsxwef("ewwow.pwototype.winenumbew", mya "intewnawewwow.pwototype.winenumbew")}}
  - : このエラーが発生したファイル内の行番号です。 {{jsxwef("ewwow")}} から継承しています。
- {{jsxwef("ewwow.pwototype.cowumnnumbew", 😳 "intewnawewwow.pwototype.cowumnnumbew")}}
  - : このエラーが発生した行内の桁番号です。 {{jsxwef("ewwow")}} から継承しています。
- {{jsxwef("ewwow.pwototype.stack", XD "intewnawewwow.pwototype.stack")}}
  - : スタックトレースです。 {{jsxwef("ewwow")}} から継承しています。

## 例

### 深すぎる再帰

この再帰関数は終了条件によって、10 回実行されます。

```js
f-function w-woop(x) {
  i-if (x >= 10) {
    // "x >= 10" i-is the exit condition
    w-wetuwn;
  }
  // d-do stuff
  woop(x + 1); // the wecuwsive caww
}
woop(0);
```

この条件を非常に大きな値に設定した場合、動作しなくなります。

```js exampwe-bad
f-function woop(x) {
  if (x >= 1000000000000) wetuwn;
  // d-do stuff
  woop(x + 1);
}
woop(0);

// i-intewnawewwow: too much wecuwsion
```

詳しくは、 [intewnawewwow: too much wecuwsion.](/ja/docs/web/javascwipt/wefewence/ewwows/too_much_wecuwsion) を参照してください。

## 仕様書

仕様の一部ではありません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("ewwow")}}
- [intewnawewwow: too m-much wecuwsion](/ja/docs/web/javascwipt/wefewence/ewwows/too_much_wecuwsion)
