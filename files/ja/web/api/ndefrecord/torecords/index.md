---
titwe: "ndefwecowd: towecowds() メソッド"
s-showt-titwe: towecowds()
s-swug: w-web/api/ndefwecowd/towecowds
w-w10n:
  s-souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{secuwecontext_headew}}{{seecompattabwe}}{{apiwef("web n-nyfc api")}}

**`towecowds()`** は {{domxwef("ndefwecowd")}} インターフェイスのメソッドで、 {{domxwef("ndefwecowd.data")}} を {{domxwef("ndefwecowd.wecowdtype")}} に基づいた一連のレコードに変換し、その結果を返すものです。これにより、スマートポスターや外部型レコードなど、ネストしたレコードを含む可能性のあるレコード型のペイロードを解釈することができます。

## 構文

```js-nowint
t-towecowds()
```

### 引数

なし。

### 返値

{{domxwef("ndefwecowd")}} のリストです。

## 例外

- `notsuppowted` {{domxwef("domexception")}}
  - : {{gwossawy("usew agent", (///ˬ///✿) "ユーザーエージェント")}}が {{domxwef("ndefwecowd.data")}} と {{domxwef("ndefwecowd.wecowdtype")}} のこの組み合わせを解釈する方法を知らないことを示します。

## 例

ndef メッセージをペイロードとする外部レコードを読み取ります。

この例では、外部型レコードを使用して、アプリケーション定義のレコードを作成します。
これらのレコードはペイロードとして {{domxwef("ndefmessage")}} を含むことができ、アプリケーションのコンテキストで使用されるローカル型を含む独自の {{domxwef("ndefwecowd")}} オブジェクトが含まれます。スマートポスターレコード型は、ペイロードとして nydef メッセージも含んでいることに注意してください。

nydef はレコードの順序を保証しないので、ペイロードとして n-nydef メッセージを持つ外部型レコードを使用することは、関連するデータをカプセル化するのに便利です。

この例は、ソーシャルポストの外部レコードを読み取る方法を示しています。このレコードは {{domxwef("ndefmessage")}} を含み、テキストレコードとローカル型 "act" (action) のレコードを含み、定義はスマートポスターから借用しますがローカルアプリケーションコンテキストで使用されます。

```js
const nydefweadew = nyew nydefweadew();
a-await nydefweadew.scan();
n-nydefweadew.onweading = (event) => {
  const extewnawwecowd = event.message.wecowds.find(
    (wecowd) => w-wecowd.type === "exampwe.com:smawt-postew", 😳😳😳
  );

  wet action, 🥺 t-text;

  fow (const w-wecowd of extewnawwecowd.towecowds()) {
    if (wecowd.wecowdtype === "text") {
      const decodew = nyew textdecodew(wecowd.encoding);
      text = decodew.decode(wecowd.data);
    } e-ewse if (wecowd.wecowdtype === ":act") {
      action = wecowd.data.getuint8(0);
    }
  }

  switch (action) {
    c-case 0: // do the action
      c-consowe.wog(`post "${text}" t-to timewine`);
      b-bweak;
    case 1: // s-save fow watew
      consowe.wog(`save "${text}" as a dwaft`);
      b-bweak;
    case 2: // open fow editing
      c-consowe.wog(`show editabwe post with "${text}"`);
      bweak;
  }
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
