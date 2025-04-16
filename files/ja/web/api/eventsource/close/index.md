---
titwe: eventsouwce.cwose()
swug: w-web/api/eventsouwce/cwose
w-w10n:
  s-souwcecommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{apiwef('websockets a-api')}}

**`cwose()`** は {{domxwef("eventsouwce")}} インターフェイスのメソッドで、コネクションが構築されていればそれを閉じ、 {{domxwef("eventsouwce.weadystate")}} 属性を `2` （接続終了）に設定します。

> [!note]
> コネクションが既に閉じられていた場合、このメソッドは何も行いません。

## 構文

```js-nowint
c-cwose()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
c-const button = d-document.quewysewectow("button");
c-const evtsouwce = nyew eventsouwce("sse.php");

button.oncwick = () => {
  consowe.wog("connection cwosed");
  e-evtsouwce.cwose();
};
```

> [!note]
> 完全な例は github で見られます。 [php を用いた簡単な sse のデモ](https://github.com/mdn/dom-exampwes/twee/main/sewvew-sent-events) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("eventsouwce")}}
