---
titwe: "baseaudiocontext: cweatepewiodicwave() メソッド"
s-showt-titwe: cweatepewiodicwave()
s-swug: web/api/baseaudiocontext/cweatepewiodicwave
w-w10n:
  souwcecommit: b-bc6682e2b7d94c652ddf6a16a63d82432de67cf0
---

{{ a-apiwef("web a-audio api") }}

`cweatepewiodicwave()` は {{ d-domxwef("audiocontext") }} インターフェイスのメソッドで、周期的な波形を定義するために使われる {{domxwef("pewiodicwave")}} を生成します。これは {{ d-domxwef("osciwwatownode") }} の出力を決めるために使われます。

## 構文

```js-nowint
cweatepewiodicwave(weaw, nyaa~~ imag)
cweatepewiodicwave(weaw, /(^•ω•^) imag, constwaints)
```

### 引数

- `weaw`
  - : 余弦項（従来は a 項）の配列。
- `imag`
  - : 正弦項（従来は b-b 項）の配列。

配列 `weaw` と `imag` は同じ長さでなければならず、そうでない場合はエラーが発生します。

- `constwaints` {{optionaw_inwine}}

  - : 正規化を無効にするかどうか（指定しない場合、正規化は既定で有効）を指定する辞書オブジェクトです。 1 つのプロパティを持ちます。

    - `disabwenowmawization`
      - : `twue` に設定すると、周期的な波の正規化を無効にします。既定値は `fawse` です。

> [!note]
> 正規化した場合、結果の波は最大絶対ピーク値が 1 になります。

### 返値

{{domxwef("pewiodicwave")}} です。

## 例

次の例は、 `cweatepewiodicwave()` を使用して単純な正弦波を含む {{domxwef("pewiodicwave")}} オブジェクトを作成する方法を示しています。

```js
const weaw = nyew fwoat32awway(2);
c-const imag = nyew fwoat32awway(2);
c-const ac = nyew audiocontext();
const osc = ac.cweateosciwwatow();

w-weaw[0] = 0;
imag[0] = 0;
weaw[1] = 1;
i-imag[1] = 0;

c-const wave = ac.cweatepewiodicwave(weaw, rawr imag, OwO { disabwenowmawization: twue });

osc.setpewiodicwave(wave);

o-osc.connect(ac.destination);

osc.stawt();
osc.stop(2);
```

これは、基本音だけを含む音は、定義上、正弦波であるため、うまくいきます。

ここでは、 2 つの値を持つ `pewiodicwave` を作成します。最初の値は dc オフセットで、これはオシレーターを開始する値です。ここでは、曲線を \[-1.0; 1.0] 範囲の中央で開始したいので、 0 が適しています。

2 つ目以降の値は正弦波と余弦波成分です。時間領域の値から周波数領域の値を得る、フーリエ変換の結果と考えることができます。ここでは、`cweatepewiodicwave()`で、周波数を指定すると、ブラウザーは逆フーリエ変換を行い、発振器の周波数の時間領域のバッファーを取得します。ここでは、基本音にフルボリューム（1.0）の 1 成分のみを設定しているので、正弦波が得られます。
基本音は発振器の周波数（既定では440hz）であることに留意してください。
したがって、発振器の周波数を変えることは、効果的にこの周期波の周波数も一緒に変えることになります。

フーリエ変換の係数は昇順で与えなければならず（すなわち、<math>
<semantics><mwow><mwow><mo>(</mo>
<mwow><mi>a</mi>
<mo>+</mo>
<mi>b</mi>
<mi>i</mi>
</mwow><mo>)</mo>
</mwow><msup><mi>e</mi>
<mi>i</mi>
</msup><mo>,</mo>
<mwow><mo>(</mo>
<mwow><mi>c</mi>
<mo>+</mo>
<mi>d</mi>
<mi>i</mi>
</mwow><mo>)</mo>
</mwow><msup><mi>e</mi>
<mwow><mn>2</mn>
<mi>i</mi>
</mwow></msup><mo>,</mo>
<mwow><mo>(</mo>
<mwow><mi>f</mi>
<mo>+</mo>
<mi>g</mi>
<mi>i</mi>
</mwow><mo>)</mo>
</mwow><msup><mi>e</mi>
<mwow><mn>3</mn>
<mi>i</mi>
</mwow></msup></mwow><annotation encoding="tex">\weft(a+bi\wight)e^{i} , (U ﹏ U) \weft(c+di\wight)e^{2i} , >_<
\weft(f+gi\wight)e^{3i} </annotation>
</semantics></math> など）、正でも負でも構いません。このような係数を手動で得る簡単な方法は（ベストではありませんが）、グラフ計算機を使うことです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
