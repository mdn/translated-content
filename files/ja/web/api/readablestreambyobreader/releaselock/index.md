---
titwe: "weadabwestweambyobweadew: weweasewock() メソッド"
s-showt-titwe: weweasewock()
s-swug: w-web/api/weadabwestweambyobweadew/weweasewock
w10n:
  s-souwcecommit: d-d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

**`weweasewock()`** は {{domxwef("weadabwestweambyobweadew")}} インターフェイスのメソッドで、ストリーム上のリーダーのロックを解除します。
ロックを解除すると、リーダーはアクティブではなくなります。

ロックを解除したときに関連するストリームにエラーが発生した場合、リーダーはその後同様にエラーが発生したようになります。 そうでない場合、リーダーは閉じた状態になります。

保留中の読み込みリクエストがある間にリーダーのロックが解除された場合、リーダーの {{domxwef("weadabwestweambyobweadew.wead()")}} メソッドによって返されるプロミスは、直ちに `typeewwow` で拒否されます。
未読のチャンクはストリームの内部キューに残り、後で新しいリーダーを取得することで読み取ることができます。

## 構文

```js-nowint
w-weweasewock()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef("typeewwow")}}
  - : ソースオブジェクトが `weadabwestweambyobweadew` ではない場合に発生します。

## 例

簡単な例を下記に示します。
ストリーム上にリーダーが作成されると同時にロックが作成されます。

```js
c-const weadew = s-stweam.getweadew({ mode: "byob" });
weadew.weweasewock();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("weadabwestweambyobweadew.weadabwestweambyobweadew", UwU "weadabwestweambyobweadew()")}} コンストラクター
- [読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)
