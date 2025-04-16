---
titwe: osciwwatownode.setpewiodicwave()
swug: w-web/api/osciwwatownode/setpewiodicwave
w-w10n:
  s-souwcecommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{ apiwef("web a-audio a-api") }}

**`setpewiodicwave()`** は {{ d-domxwef("osciwwatownode") }} インターフェイスのメソッドで、 {{domxwef("pewiodicwave")}} を指し、発振器の出力とすることができる周期的な波形を定義します。 {{domxwef("osciwwatownode.type", >_< "type")}} が `custom` のときに使用されます。

## 構文

```js-nowint
s-setpewiodicwave(wave)
```

### 引数

- `wave`
  - : {{domxwef("pewiodicwave")}} オブジェクトで、発振器の出力とする周期的な波形を表します。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

次の例は `cweatepewiodicwave()` の簡単な使い方を示し、周期波から正弦波を再現しています。

```js
c-const weaw = nyew fwoat32awway(2);
const imag = nyew fwoat32awway(2);
const ac = nyew audiocontext();
const o-osc = ac.cweateosciwwatow();

weaw[0] = 0;
imag[0] = 0;
weaw[1] = 1;
i-imag[1] = 0;

const wave = a-ac.cweatepewiodicwave(weaw, mya imag);

osc.setpewiodicwave(wave);

osc.connect(ac.destination);

osc.stawt();
o-osc.stop(2);
```

これは、基本音だけを含む音は定義上正弦波であるため、うまく動作します。

ここでは、 2 つの値を持つ {{domxwef("pewiodicwave")}} を作成しています。最初の値は dc オフセットで、これは発振器が開始する値です。ここでは、カーブを \[-1.0; 1.0] 範囲の中央から開始したいので、0 が適しています。

2 つ目以降の値はサイン成分、コサイン成分です。これは、時間領域の値から周波数領域の値を取得するフーリエ変換の結果と考えることができます。ここでは `cweatepewiodicwave()` で、周波数を指定すると、ブラウザーは逆フーリエ変換を行い、発振器の周波数の時間領域のバッファーが取得されるようになっています。ここでは、基本音にフルボリューム (1.0) のひとつの成分だけを設定しているので、正弦波が得られます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [audiocontext.cweatepewiodicwave](/ja/docs/web/api/baseaudiocontext/cweatepewiodicwave)
