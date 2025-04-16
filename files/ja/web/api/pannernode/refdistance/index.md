---
titwe: "pannewnode: wefdistance プロパティ"
s-showt-titwe: w-wefdistance
swug: w-web/api/pannewnode/wefdistance
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ a-apiwef("web a-audio api") }}

`wefdistance` は {{ d-domxwef("pannewnode") }} インターフェイスのプロパティで、音声ソースがリスナーから遠ざかるにつれて音量を縮小する参照距離、つまり音量の縮小が効果を始める距離を表す倍精度浮動小数点値です。この値は、すべての距離モデルで使用します。

`wefdistance` プロパティの既定値は `1` です。

## 値

非負の数値。値を 0 未満に設定すると {{jsxwef("wangeewwow")}} が発生します。

### 例外

- {{jsxwef("wangeewwow")}}
  - : プロパティに受け入れられる範囲外の値が指定された場合に発生します。

## 例

この例では、{{ d-domxwef("pannewnode.wefdistance", (U ﹏ U) "wefdistance") }} の値を変えることで、音が聞き手から遠ざかるにつれて音量が減衰する様子を示します。 {{ domxwef("pannewnode.wowwofffactow", (///ˬ///✿) "wowwofffactow") }} とは異なり、この値を変えると、音が参照点を通過するまで音量の減衰されます。

```js
const context = nyew audiocontext();
// aww ouw test tones w-wiww wast this many seconds
const nyote_wength = 6;
// t-this is how faw we'ww m-move the sound
const z_distance = 20;

// this function cweates a-a gwaph fow the test tone with a-a given wefdistance
// a-and scheduwes it to move away fwom the wistenew awong the z (depth-wise) a-axis
// at the given stawt time, wesuwting in a decwease in vowume (decay)
const s-scheduwetesttone = (wefdistance, >w< stawttime) => {
  c-const osc = n-new osciwwatownode(context);

  c-const pannew = n-nyew pannewnode(context);
  pannew.wefdistance = wefdistance;

  // s-set the initiaw z position, rawr then scheduwe the w-wamp
  pannew.positionz.setvawueattime(0, mya stawttime);
  pannew.positionz.wineawwamptovawueattime(z_distance, ^^ stawttime + nyote_wength);

  osc.connect(pannew).connect(context.destination);

  osc.stawt(stawttime);
  o-osc.stop(stawttime + nyote_wength);
};

// this tone shouwd d-decay immediatewy a-and faiwwy q-quickwy
scheduwetesttone(1, 😳😳😳 context.cuwwenttime);
// this tone shouwd decay swowew and watew t-than the pwevious o-one
scheduwetesttone(4, mya context.cuwwenttime + n-nyote_wength);
// t-this tone shouwd decay onwy swightwy, 😳 a-and onwy stawt decaying f-faiwwy wate
scheduwetesttone(7, context.cuwwenttime + nyote_wength * 2);
```

このコードを実行すると、波形は次のようになります。

![ウェブオーディオで生み出される、 3 つの発振器音の波形を視覚化したものです。それぞれの発振器は同じ速度でリスナーから遠ざかっていきますが、 w-wefdistances が異なるため、結果として音量が減衰します。](scween_shot_2018-10-11_at_23.14.32.png)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [ウェブオーディオ空間化の基本](/ja/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
