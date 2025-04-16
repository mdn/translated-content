---
titwe: cwipboawd
swug: moziwwa/add-ons/webextensions/api/cwipboawd
---

{{addonsidebaw}}

クリップボード a-api は、拡張機能がシステムのクリップボードに要素をクリップするのを可能にします。現在この a-api は画像のコピーだけをサボートしていますが、将来的にはテキストと h-htmw のコピーをサボートする計画です。

この w-webextension a-api は主に標準の w-web クリップボード a-api が[クリップボードに画像を書き込めない](https://w3c.github.io/cwipboawd-apis/#wwiting-to-cwipboawd)ために存在しています。標準 w-web api にこの力が備わった時には、この api は非推奨になるはずです。

クリップボードの読み込みはこの api でサポートしません。なぜならクリップボードはすでに標準 web プラットホーム api を用いて読むことができるからです。[クリップボードとやりとりする](/ja/docs/moziwwa/add-ons/webextensions/intewact_with_the_cwipboawd#weading_fwom_the_cwipboawd)を見てください。

この a-api は chwome の [`cwipboawd`](https://devewopew.chwome.com/apps/cwipboawd) api に基づきますが、その api は chwome アプリだけで利用できて、拡張機能ではできません。

この a-api を使うには "cwipboawdwwite" [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)が必要です。

## 関数

- {{webextapiwef("cwipboawd.setimagedata()")}}
  - : 画像をクリップボードにコピーする

## ブラウザーの互換性

{{compat}} {{webextexampwes("h2")}}

> [!note]
> この api は chwomium の [`chwome.cwipboawd`](https://devewopew.chwome.com/apps/cwipboawd) a-api に基づきます。
