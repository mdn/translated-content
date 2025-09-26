---
title: Worklet
slug: Web/API/Worklet
---

{{APIRef("Worklets")}}{{SeeCompatTable}}

**`Worklet`** インターフェイスは軽量な{{domxref("Worker", "ウェブワーカー", "", 1)}}を提供し、開発者がレンダリングパイプラインの低水準な部分を制御できるようにします。

ワークレットでは、グラフィックや音声処理といった、高い性能を必要とする処理を JavaScript や [WebAssembly](/ja/docs/WebAssembly) コードを使って記述できます。

## ワークレットの種類

ワークレットの利用はいくつかの用途に限定されています。つまり、ウェブワーカーのように好きな計算をさせる用途には使えません。 `Worklet` インターフェイスは、すべての種類のワークレットに共通する属性とメソッドを抽象化する一方、直接インスタンスを作成することはできません。実際にインスタンスを作成するには、以下のクラスを利用します。

<table class="no-markdown">
  <thead>
    <tr>
      <th>クラス名</th>
      <th>説明</th>
      <th>動作するスレッド</th>
      <th>仕様書</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("PaintWorklet")}}</td>
      <td>
        CSS プロパティがファイルを必要とする場合に、プログラムによって画像を生成するためのものです。このインターフェイスには {{DOMxRef("CSS.paintWorklet")}} でアクセスします。
      </td>
      <td>
        <strong>Chrome:</strong> メインスレッド<br>
        <strong>Gecko:</strong> 描画スレッド
      </td>
      <td>
        <a href="https://drafts.css-houdini.org/css-paint-api-1/#paint-worklet">CSS 描画 API</a>
      </td>
    </tr>
    <tr>
      <td>{{domxref("AudioWorklet")}}</td>
      <td>カスタムオーディオノードでの音声処理のために使用します。</td>
      <td>ウェブオーディオレンダリングスレッド</td>
      <td>
        <a href="https://webaudio.github.io/web-audio-api/#AudioWorklet">ウェブオーディオ API</a>
      </td>
    </tr>
    <tr>
      <td>{{domxref("AnimationWorklet")}}</td>
      <td>
        スクロールに伴うアニメーションや、性能を必要とするアニメーションをプログラミングするために使用します。
      </td>
      <td>編集スレッド</td>
      <td>
        <a href="https://wicg.github.io/animation-worklet/">CSS アニメーションワークレット API</a>
      </td>
    </tr>
    <tr>
      <td>{{domxref("LayoutWorklet")}}</td>
      <td>カスタム要素のサイズと位置を定義するために使用します。</td>
      <td></td>
      <td>
        <a
          href="https://drafts.css-houdini.org/css-layout-api-1/#layout-worklet"
          >CSS レイアウト API</a
        >
      </td>
    </tr>
  </tbody>
</table>

[WebGL](/ja/docs/Web/API/WebGL_API) を用いた 3D グラフィックにはワークレットを使用しません。その代わりに GLSL で記述した頂点シェーダーとフラグメントシェーダーを書いてください。これらのシェーダーコードはグラフィックカードの上で動作します。

## プロパティ

_Worklet インターフェイスでは、プロパティは定義されていません。_

## メソッド

- {{domxref("Worklet.addModule()")}} {{experimental_inline}}
  - : 指定された URL にあるスクリプト モジュールを現在のワークレットに追加します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Houdini: Demystifying CSS](https://developer.chrome.com/docs/css-ui/houdini) on Google Developers (May 2016)
- [AudioWorklet :: What, Why, and How](https://www.youtube.com/watch?v=g1L4O1smMC0&t=1m33s) on YouTube (November 2017)
- [Enter AudioWorklet](https://developer.chrome.com/blog/audio-worklet/) on Google Developers (December 2017)
- [Animation Worklet - HTTP203 Advent](https://www.youtube.com/watch?v=ZPkMMShYxKU&t=0m19s) on YouTube (December 2017)
