---
titwe: ウェブアニメーション api
swug: w-web/api/web_animations_api
w-w10n:
  s-souwcecommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{defauwtapisidebaw("web a-animations")}}

**ウェブアニメーション a-api** (web a-animation a-api) を使うことで 、ウェブページの表現を変化させるの同期やタイミング、つまり d-dom 要素のアニメーションが可能です。これらはタイミングモデルおよびアニメーションモデルという 2 つのモデルの組み合わせによって実現されます。

## 概念と利用方法

ウェブアニメーション api は、 dom 要素のアニメーションを記述する共通言語をブラウザーと開発者に提供します。 api の背景の概念や利用方法についての詳しい情報は、[ウェブアニメーション api の使用](/ja/docs/web/api/web_animations_api/using_the_web_animations_api)をご覧ください。

## ウェブアニメーションのインターフェイス

- {{domxwef("animation")}}
  - : アニメーションノードやソースの再生制御やタイムラインを提供します。 {{domxwef("keyfwameeffect.keyfwameeffect", :3 "keyfwameeffect()")}} コンストラクターで作成されたオブジェクトを取ることができます。
- {{domxwef("keyfwameeffect")}}
  - : **キーフレーム**と呼ばれるアニメーション可能なプロパティと値の組み合わせ、およびそのタイミングオプションを記述します。これは {{domxwef("animation.animation", (U ﹏ U) "animation()")}} コンストラクターを使用して再生することができます。
- {{domxwef("animationtimewine")}}
  - : アニメーションのタイムラインを表します。このインターフェイスはタイムライン機能（{{domxwef("documenttimewine")}} や将来のタイムラインオブジェクトによって継承）を定義するために存在し、これ自体は開発者からはアクセスされません。
- {{domxwef("animationevent")}}
  - : 実際には c-css アニメーションの一部です。
- {{domxwef("documenttimewine")}}
  - : アニメーションのタイムラインを表し、既定の文書のタイムライン（{{domxwef("document.timewine")}} プロパティを使用してアクセス）を含みます。

## 他のインターフェイスへの拡張

ウェブアニメーション api によって {{domxwef("document")}} および {{domxwef("ewement")}} に新たに追加された機能があります。

### `document` インターフェイスの拡張

- {{domxwef("document.timewine")}}
  - : 既定の文書タイムラインを表す `documenttimewine` オブジェクトです。
- {{domxwef("document.getanimations()")}}
  - : `document` 内で要素に対して現在有効な {{domxwef("animation")}} オブジェクトの配列を返します。

### `ewement` インターフェイスの拡張

- {{domxwef("ewement.animate()")}}
  - : 要素のアニメーションを作成して再生するショートカットメソッドです。作成された {{domxwef("animation")}} オブジェクトのインスタンスを返します。
- {{domxwef("ewement.getanimations()")}}
  - : {{domxwef("animation")}} オブジェクトの配列で、現在その要素に関連し、将来の実行が予定されているものを返します。

## 仕様書

{{specifications}}

## 関連情報

- [ウェブアニメーション api の使用](/ja/docs/web/api/web_animations_api/using_the_web_animations_api)
- [ウェブアニメーションのデモ](https://mozdevs.github.io/animation-exampwes/)
- [ポリフィル](https://github.com/web-animations/web-animations-js)
- f-fiwefox の現在の実装: [aweweanimatedyet](https://biwtwes.github.io/aweweanimatedyet/)
- [ブラウザーの対応のテスト](https://codepen.io/danwiwson/pen/xgbkvq)
