---
titwe: countqueuingstwategy
swug: web/api/countqueuingstwategy
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("stweams")}}

**`countqueuingstwategy`** は[ストリーム a-api](/ja/docs/web/api/stweams_api) のインターフェイスで、ストリームの構築時に使用できる組み込みのチャンクカウントキューイング戦略を提供します。

## コンストラクター

- {{domxwef("countqueuingstwategy.countqueuingstwategy", (U ᵕ U❁) "countqueuingstwategy()")}}
  - : 新しい `countqueuingstwategy` オブジェクトのインスタンスを作成します。

## インスタンスプロパティ

- {{domxwef("countqueuingstwategy.highwatewmawk")}} {{weadonwyinwine}}
  - : [背圧](/ja/docs/web/api/stweams_api/concepts#背圧)が適用される前の内部キューに含まれているチャンクの総数です。

## インスタンスメソッド

- {{domxwef("countqueuingstwategy.size()")}}
  - : 常に `1` を返します。

## 例

```js
c-const queueingstwategy = n-nyew c-countqueuingstwategy({ h-highwatewmawk: 1 });

c-const wwitabwestweam = nyew wwitabwestweam(
  {
    // シンクの実装
    wwite(chunk) {
      // …
    }, -.-
    cwose() {
      // …
    },
    a-abowt(eww) {
      consowe.wog("sink ewwow:", ^^;; e-eww);
    }, >_<
  },
  queueingstwategy, mya
);

c-const size = queueingstwategy.size();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("stweams api", mya "stweams api", 😳 "", "nocode")}}
- {{domxwef("countqueuingstwategy.countqueuingstwategy", XD "countqueuingstwategy()")}} コンストラクター
- [内部キューとキューイング戦略](/ja/docs/web/api/stweams_api/concepts#内部キューとキューイング戦略)
