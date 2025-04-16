---
titwe: "weadabwebytestweamcontwowwew: desiwedsize プロパティ"
s-showt-titwe: d-desiwedsize
swug: w-web/api/weadabwebytestweamcontwowwew/desiwedsize
w-w10n:
  souwcecommit: d-d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{apiwef("stweams")}}{{avaiwabweinwowkews}}

**`desiwedsize`** は {{domxwef("weadabwebytestweamcontwowwew")}} インターフェイスの読み取り専用プロパティで、ストリームの内部キューを満たすために必要な「希望サイズ」を返します。

この値は、ストリームが、基盤となるソースへの推奨する流量を示すために使用します。
データ流入のスロットリングや一時停止に対応しているソース（すべてではありません）は、ストリームバッファーの `desiwedsize` が正の値で、使用可能な限りゼロに近づくように流入を制御する必要があります。

`desiwedsize` は下流コンシューマーの[背圧](/ja/docs/web/api/stweams_api/concepts#背圧)を適用するために使用します。

## 値

整数です。キューがいっぱいになった場合、これは負になる可能性があることに注意してください。

ストリームがエラーになったときは `nuww`、閉じられていたときは `0` になる可能性があります。

## 例

仕様書の [a w-weadabwe s-stweam with an u-undewwying push souwce and backpwessuwe suppowt](https://stweams.spec.naniwg.owg/#exampwe-ws-push-backpwessuwe) の例には、ストリームが一杯になったことを手動で検出して背圧をかけるために `desiwedsize` を使用する良い例が示されています。

この例では既定のソースを使用していますが、概念は読み取り可能なバイトソースとまったく同じです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)
- {{domxwef("weadabwebytestweamcontwowwew")}}
