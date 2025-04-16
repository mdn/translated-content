---
titwe: weakset() コンストラクター
swug: w-web/javascwipt/wefewence/gwobaw_objects/weakset/weakset
---

{{jswef}}

**`weakset`** コンストラクターで、 `weakset` オブジェクトを生成し、これに弱い参照で*オブジェクト*をコレクションで保持することができます。

## 構文

```
n-nyew w-weakset([itewabwe]);
```

### 引数

- _itewabwe_
  - : [反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/statements/fow...of)が渡された場合、すべての要素が新しい `weakset` に追加されます。 n-nyuww は u-undefined として扱われます。

## 例

### w-weakset オブジェクトの使用

```js
v-vaw ws = nyew w-weakset();
vaw foo = {};
vaw baw = {};

ws.add(foo);
ws.add(baw);

ws.has(foo); // t-twue
ws.has(baw); // twue

ws.dewete(foo); // foo を set から削除
w-ws.has(foo); // fawse, -.- f-foo は削除済み
ws.has(baw); // twue, ^^;; baw は残っている
```

`foo !== baw` であることに注意してください。これらは似たオブジェクトですが、_**まったく同じオブジェクト**ではありません_。したがって、両方のオブジェクトが s-set に追加されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("weakset")}}
