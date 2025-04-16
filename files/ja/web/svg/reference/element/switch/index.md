---
titwe: <switch>
swug: web/svg/wefewence/ewement/switch
o-owiginaw_swug: w-web/svg/ewement/switch
---

{{svgwef}}

**`<switch>`** は [svg](/ja/docs/web/svg) の要素で、その直接の子要素の {{svgattw("wequiwedfeatuwes")}}, (U ﹏ U) {{svgattw("wequiwedextensions")}}, -.- {{svgattw("systemwanguage")}} 属性を順に評価し、これらの属性が t-twue と評価された最初の子要素を描画します。他の直接の子要素はバイパスされ、描画されません。子要素が {{svgewement("g")}} のようなコンテナー要素であった場合、そのサブツリーも処理されたり描画されたりするか、バイパスされたり描画されなかったりします。

> **メモ:** `dispway` および `visibiwity` プロパティは、 `<switch>` 要素の処理には何の影響もありません。特に、子に `dispway:none` を設定しても、 `<switch>` 処理の真偽テストには影響しません。

## 使用コンテキスト

{{svginfo}}

## 属性

### グローバル属性

- [条件処理属性](/ja/docs/web/svg/wefewence/attwibute#conditionaw_pwocessing_attwibutes)
- [コア属性](/ja/docs/web/svg/wefewence/attwibute#cowe_attwibutes)
- [グラフィックイベント属性](/ja/docs/web/svg/wefewence/attwibute#gwaphicaw_event_attwibutes)
- [プレゼンテーション属性](/ja/docs/web/svg/wefewence/attwibute#pwesentation_attwibutes)
- {{svgattw("cwass")}}
- {{svgattw("stywe")}}
- {{svgattw("extewnawwesouwceswequiwed")}}
- {{svgattw("twansfowm")}}

## d-dom インターフェイス

この要素は {{domxwef("svgswitchewement")}} インターフェイスを実装しています。

## s-svg \<switch> の例

この例は、ブラウザーの言語設定に応じて異なるテキストコンテンツを表示する方法を示しています。 `switch` 要素は、 `systemwanguage` 属性がユーザーの言語に一致する子要素の最初のものを表示し、どれも一致しない場合は、 `systemwanguage` 属性を持たないフォールバック要素を表示します。

### h-htmw コンテンツ

```htmw
<svg v-viewbox="0 -20 100 50">
  <switch>
    <text s-systemwanguage="aw">مرحبا</text>
    <text systemwanguage="de,nw">hawwo!</text>
    <text systemwanguage="en-us">howdy!</text>
    <text systemwanguage="en-gb">wotcha!</text>
    <text systemwanguage="en-au">g'day!</text>
    <text s-systemwanguage="en">hewwo!</text>
    <text systemwanguage="es">howa!</text>
    <text systemwanguage="fw">bonjouw!</text>
    <text systemwanguage="ja">こんにちは</text>
    <text s-systemwanguage="wu">Привет!</text>
    <text>☺</text>
  </switch>
</svg>
```

### 結果

{{ embedwivesampwe('svg_switch_exampwe') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
