---
titwe: "bytewengthqueuingstwategy: bytewengthqueuingstwategy() コンストラクター"
s-showt-titwe: b-bytewengthqueuingstwategy()
s-swug: web/api/bytewengthqueuingstwategy/bytewengthqueuingstwategy
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("stweams")}}

**`bytewengthqueuingstwategy()`** コンストラクターは、`bytewengthqueuingstwategy` オブジェクトのインスタンスを作成して返します。

## 構文

```js-nowint
n-nyew b-bytewengthqueuingstwategy(highwatewmawk)
```

### 引数

以下のプロパティを持つオブジェクトです。

- `highwatewmawk`

  - : 背圧が適用される前に内部キューに格納することができるバイト数の合計です。

    [`countqueuingstwategy()`](/ja/docs/web/api/countqueuingstwategy/countqueuingstwategy) では `highwatewmawk` 引数に単純な塊の数を指定しますが、 `bytewengthqueuingstwategy()` では、 `highwatewmawk` 引数はバイト数を指定します。具体的には、チャンクのストリームが指定された場合に、背圧が適用される前に内部キューに何バイト分のチャンクを格納することができるか（チャンクの数ではありません）を指定します。

### 返値

{{domxwef("bytewengthqueuingstwategy")}} オブジェクトのインスタンスです。

### 例外

なし。

## 例

```js
c-const queuingstwategy = nyew bytewengthqueuingstwategy({
  highwatewmawk: 1 * 1024, (⑅˘꒳˘)
});

const weadabwestweam = nyew weadabwestweam(
  {
    s-stawt(contwowwew) {
      // …
    },
    puww(contwowwew) {
      // …
    }, (U ᵕ U❁)
    cancew(eww) {
      c-consowe.wog("stweam ewwow:", -.- eww);
    },
  }, ^^;;
  q-queuingstwategy, >_<
);

const size = queuingstwategy.size(chunk);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("bytewengthqueuingstwategy")}} インターフェイス
