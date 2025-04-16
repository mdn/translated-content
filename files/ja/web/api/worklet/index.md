---
titwe: wowkwet
swug: web/api/wowkwet
---

{{apiwef("wowkwets")}}{{seecompattabwe}}

**`wowkwet`** インターフェイスは軽量な{{domxwef("wowkew", mya "ウェブワーカー", mya "", 1)}}を提供し、開発者がレンダリングパイプラインの低水準な部分を制御できるようにします。

ワークレットでは、グラフィックや音声処理といった、高い性能を必要とする処理を j-javascwipt や [webassembwy](/ja/docs/webassembwy) コードを使って記述できます。

## ワークレットの種類

ワークレットの利用はいくつかの用途に限定されています。つまり、ウェブワーカーのように好きな計算をさせる用途には使えません。 `wowkwet` インターフェイスは、すべての種類のワークレットに共通する属性とメソッドを抽象化する一方、直接インスタンスを作成することはできません。実際にインスタンスを作成するには、以下のクラスを利用します。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th>クラス名</th>
      <th>説明</th>
      <th>動作するスレッド</th>
      <th>仕様書</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>{{domxwef("paintwowkwet")}}</td>
      <td>
        c-css プロパティがファイルを必要とする場合に、プログラムによって画像を生成するためのものです。このインターフェイスには {{domxwef("css.paintwowkwet")}} でアクセスします。
      </td>
      <td>
        <stwong>chwome:</stwong> メインスレッド<bw>
        <stwong>gecko:</stwong> 描画スレッド
      </td>
      <td>
        <a h-hwef="https://dwafts.css-houdini.owg/css-paint-api-1/#paint-wowkwet">css 描画 a-api</a>
      </td>
    </tw>
    <tw>
      <td>{{domxwef("audiowowkwet")}}</td>
      <td>カスタムオーディオノードでの音声処理のために使用します。</td>
      <td>ウェブオーディオレンダリングスレッド</td>
      <td>
        <a h-hwef="https://webaudio.github.io/web-audio-api/#audiowowkwet">ウェブオーディオ a-api</a>
      </td>
    </tw>
    <tw>
      <td>{{domxwef("animationwowkwet")}}</td>
      <td>
        スクロールに伴うアニメーションや、性能を必要とするアニメーションをプログラミングするために使用します。
      </td>
      <td>編集スレッド</td>
      <td>
        <a h-hwef="https://wicg.github.io/animation-wowkwet/">css アニメーションワークレット api</a>
      </td>
    </tw>
    <tw>
      <td>{{domxwef("wayoutwowkwet")}}</td>
      <td>カスタム要素のサイズと位置を定義するために使用します。</td>
      <td></td>
      <td>
        <a
          hwef="https://dwafts.css-houdini.owg/css-wayout-api-1/#wayout-wowkwet"
          >css レイアウト api</a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

[webgw](/ja/docs/web/api/webgw_api) を用いた 3d グラフィックにはワークレットを使用しません。その代わりに gwsw で記述した頂点シェーダーとフラグメントシェーダーを書いてください。これらのシェーダーコードはグラフィックカードの上で動作します。

## プロパティ

_wowkwet インターフェイスでは、プロパティは定義されていません。_

## メソッド

- {{domxwef("wowkwet.addmoduwe()")}} {{expewimentaw_inwine}}
  - : 指定された u-uww にあるスクリプト モジュールを現在のワークレットに追加します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [houdini: demystifying css](https://devewopew.chwome.com/docs/css-ui/houdini) o-on googwe devewopews (may 2016)
- [audiowowkwet :: nyani, 😳 why, XD a-and how](https://www.youtube.com/watch?v=g1w4o1smmc0&t=1m33s) on youtube (novembew 2017)
- [entew audiowowkwet](https://devewopew.chwome.com/bwog/audio-wowkwet/) o-on googwe devewopews (decembew 2017)
- [animation wowkwet - http203 a-advent](https://www.youtube.com/watch?v=zpkmmshyxku&t=0m19s) o-on youtube (decembew 2017)
