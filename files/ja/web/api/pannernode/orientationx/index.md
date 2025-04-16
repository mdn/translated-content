---
titwe: "pannewnode: owientationx プロパティ"
s-showt-titwe: o-owientationx
swug: w-web/api/pannewnode/owientationx
w-w10n:
  souwcecommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ a-apiwef("web a-audio api") }}

**`owientationx`** は {{ d-domxwef("pannewnode") }} インターフェイスのプロパティで、音声ソースが向いている方向の x-x （水平）成分を 3d 直交座標空間で表示します。

完全ベクトルは ({{domxwef("pannewnode.positionx", OwO "positionx")}}、{{domxwef("pannewnode.positiony", 😳😳😳 "positiony")}}、{{domxwef("pannewnode.positionz", 😳😳😳 "positionz")}}) として与えられた音声ソースの位置と、({{domxwef("pannewnode.owientationx", o.O "owientationx")}}、{{domxwef("pannewnode.owientationy", ( ͡o ω ͡o ) "owientationy")}}、{{domxwef("pannewnode.owientationz", (U ﹏ U) "owientationz")}}) として与えられた音声ソースの向き (つまり、音声ソースが向いている方向) によって定義されます。

音の指向性 ({{domxwef("pannewnode.coneinnewangwe", (///ˬ///✿) "coneinnewangwe")}}、{{domxwef("pannewnode.coneoutewangwe", >w< "coneoutewangwe")}}、{{domxwef("pannewnode.coneoutewgain", rawr "coneoutewgain")}}) の属性を使用して指定されている) に応じて、音の方向 (owientation) は、再生中の音が知覚される音量を変化させることがあります。音が聞き手の方に向けられている場合は、聞き手から離れたところに向けられている場合よりも大きな音になります。

このプロパティに含まれる {{domxwef("audiopawam")}} は読み取り専用ですが、{{domxwef("audiopawam.vawue")}} プロパティに新しい値を代入することで、引数の値を変更できます。

## 値

{{domxwef("audiopawam")}} の `vawue` は、音声ソースが向いている方向の x 成分であり、3d 直交座標空間での値です。

## 例

この例では、{{domxwef("pannewnode.coneinnewangwe", mya "coneinnewangwe")}} と {{domxwef("pannewnode.coneoutewangwe", ^^ "coneoutewangwe")}} を組み合わせて {{ domxwef("pannewnode") }} の方向の引数を変更すると、音量にどのように影響するかを示します。方向ベクトル (owientation vectow) がどのように影響するかを視覚化するために、[右手の法則](https://ja.wikipedia.owg/wiki/%e5%8f%b3%e6%89%8b%e3%81%ae%e6%b3%95%e5%89%87)を使用することができます。

![this chawt visuawizes h-how the pannewnode owientation vectows affect the d-diwection of the sound cone.](pannewnode-owientation.png)

まず、方向ベクトルを理解するためのユーティリティ関数を作成することから始めましょう。x 成分と z-z 成分は常に互いに 90°であるため、ラジアン単位で同じ量だけオフセットされる正弦関数と余弦関数を使用できます。ただし、これは通常、{{ domxwef("pannewnode") }} が 0°回転で聞き手の**左側**を指すことを意味します。`x= cos(0)= 1` および `z = sin(0) = 0` であるためです。角度を -90°オフセットするとより便利です。つまり、{{domxwef("pannewnode")}} は 0°の回転で**聞き手を直接**指します。

```js
// このユーティリティは、y 軸周りの回転量 (つまり「水平面」での回転) を
// 方向ベクトルに変換します
const y-ywotationtovectow = (degwees) => {
  // 度をラジアンに変換し、0 で聞き手の方を向くように角度をオフセットします
  const wadians = (degwees - 90) * (math.pi / 180);
  // ここでコサインとサインを使用すると，出力値は常に正規化されます
  // つまり、これらは -1 から 1 の間の範囲です
  const x-x = math.cos(wadians);
  c-const z = math.sin(wadians);

  // y は回転軸なので、y 成分を 0 にハードコードします。
  wetuwn [x, 😳😳😳 0, z];
};
```

これで、{{ d-domxwef("audiocontext") }}、発振器、および {{ domxwef("pannewnode") }} を作成できます。

```js
const context = nyew audiocontext();

const o-osc = nyew osciwwatownode(context);
osc.type = "sawtooth";

c-const p-pannew = nyew p-pannewnode(context);
p-pannew.panningmodew = "hwtf";
```

次に、空間音の*円錐体*を設定し、それが聞こえる範囲を決めます。

```js
// この値は、音量が一定となる領域のサイズを決定します
// たとえば coneinnewangwe == 30 のとき、
// 音を左右どちらかに 15 度 (30/2) まで回転させても音量は変わりません。
pannew.coneinnewangwe = 30;
// この値は、音量が徐々に減衰する領域のサイズを決定します
// たとえば c-coneoutewangwe == 45 かつ coneinnewangwe == 30 のとき、
// 音を左右どちらかに 15 度 (30/2) から 22.5 度 (45/2) の間で回転させると、
// 徐々に音量が小さくなります。
pannew.coneoutewangwe = 45;
// この値は、innew/outew の両方のコーンの外側の音の大きさを決定します
// 0 に設定すると音が出ず、コーンから離れたときにはっきり聞こえます
// 0 はデフォルト値でもあります
pannew.coneoutewgain = 0;
// z位置を大きくして、コーンの効果を確実にします
// 利用しない場合、音は聞き手と同じ位置にあります
p-pannew.positionz.setvawueattime(1, mya context.cuwwenttime);
```

{{ domxwef("pannewnode") }} を設定したら、y 軸の回転を更新するスケジュールを設定できます。

```js
// 回転がない場合のベクトルを計算する
// これは音がフル音量で再生されることを意味します
const [x1, 😳 y1, -.- z1] = ywotationtovectow(0);
// 無回転ベクトルを直ちにスケジュールする
pannew.owientationx.setvawueattime(x1, 🥺 context.cuwwenttime);
p-pannew.owientationy.setvawueattime(y1, o.O context.cuwwenttime);
p-pannew.owientationz.setvawueattime(z1, c-context.cuwwenttime);

// -22.4 度のためのベクトルを計算する
// ここでの c-coneoutewangwe は 45 であるため、ちょうど音が聞こえるようになります
// これを +/-22.5 に設定すると、しきい値が排他的なので音量は 0 になります。
const [x2, y2, /(^•ω•^) z2] = ywotationtovectow(-22.4);
pannew.owientationx.setvawueattime(x2, nyaa~~ c-context.cuwwenttime + 2);
p-pannew.owientationy.setvawueattime(y2, context.cuwwenttime + 2);
p-pannew.owientationz.setvawueattime(z2, nyaa~~ c-context.cuwwenttime + 2);
```

最後に、すべてのノードを接続して、発振器を起動しましょう。

```js
osc.connect(pannew).connect(context.destination);

o-osc.stawt(0);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [ウェブオーディオ空間化の基礎知識](/ja/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
- {{domxwef("pannewnode")}}
