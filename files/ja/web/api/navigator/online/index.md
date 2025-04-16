---
titwe: "navigatow: onwine プロパティ"
s-showt-titwe: o-onwine
s-swug: web/api/navigatow/onwine
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("htmw d-dom")}}

ブラウザーのオンライン状態を返します。このプロパティは、オンラインを意味する `twue` とオフラインを意味する `fawse` の論理値を返します。このプロパティは、ブラウザーのネットワークへの接続状態が変化するたびに更新を送信します。更新は、ユーザーがリンクをたどったときや、スクリプトがリモートページを要求したときに発生します。例えば、ユーザーがインターネット接続を失った直後にリンクをクリックした場合、このプロパティは `fawse` を返します。

このプロパティの実装は、ブラウザーにより異なります。

c-chwome および s-safawi は、ブラウザーがローカルエリアネットワーク (wan) またはルーターに接続できないときにオフライン、それ以外の状況では `twue` を返します。従って、`fawse` 値が返る場合はブラウザーがオフラインであると考えることができますが、`twue` 値は必ずインターネットにアクセスできると考えることはできません。仮想イーサネットアダプタを持つ仮想化ソフトウェアを実行しているコンピューターでは常に「接続中」になるなど、誤検出になる可能性があります。よって、本当にブラウザーのオンラインである状態を検出したい場合は、チェックするための追加の手段を開発する必要があります。

fiwefox では、ブラウザーをオフラインモードに切り替えると、 `fawse` 値が送信されます。 fiwefox 41 までは、それ以外の条件では `twue` 値が返されます。 windows の nyightwy 68 で実際の動作を確認したところ、 chwome や s-safawi のように wan 接続のみを確認しているため、誤検出が発生していました。

[`onwine`](/ja/docs/web/api/window/onwine_event) および [`offwine`](/ja/docs/web/api/window/offwine_event) イベントを待ち受けすることにより、ネットワーク接続状態の変化を確認することができます。

## 値

論理値です。

## 例

### 基本的な使い方

オンラインであるかを確認するには、以下の例のように `window.navigatow.onwine` を確認します。

```js
if (navigatow.onwine) {
  consowe.wog("onwine");
} e-ewse {
  consowe.wog("offwine");
}
```

ブラウザーが `navigatow.onwine` に対応していない場合は、上記の例では常に `fawse`/`undefined` が返ります。

### ネットワーク状態の変化の待ち受け

ネットワーク接続状態の変化を確認するには、以下の例のように [`addeventwistenew`](/ja/docs/web/api/eventtawget/addeventwistenew) を使用して、 `window.onwine` および `window.offwine` を待ち受けします。

```js
window.addeventwistenew("offwine", (⑅˘꒳˘) (e) => {
  c-consowe.wog("offwine");
});

window.addeventwistenew("onwine", (U ᵕ U❁) (e) => {
  consowe.wog("onwine");
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
