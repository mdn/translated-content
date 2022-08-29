---
title: TextEncoder.encodeInto()
slug: Web/API/TextEncoder/encodeInto
tags:
  - API
  - 実験的
  - メソッド
  - リファレンス
  - TextEncoder
  - encodeInto
browser-compat: api.TextEncoder.encodeInto
translation_of: Web/API/TextEncoder/encodeInto
---
{{APIRef("Encoding API")}}{{SeeCompatTable}}

**`TextEncoder.encodeInto()`** メソッドは、エンコードする文字列と、 UTF-8 エンコード後のテキスト格納先となる {{jsxref("Uint8Array")}} を受け取り、エンコードの進行状況を示す辞書オブジェクトを返します。これは古い `encode()` メソッドよりも潜在的に性能が高く、特にターゲットバッファーが Wasm ヒープへのビューである場合、より効果的です。

## 構文

```js
encodeInto(string, uint8Array)
```

### 引数

- `string`
  - : エンコードするテキストが入った文字列です。
- `uint8Array`
  - : {{jsxref("Uint8Array")}} オブジェクトのインスタンスで、結果の UTF-8 エンコードされたテキストが入ります。

### 返値

2 つのメンバーを持つオブジェクトです。

- `read`
  - : ソースから UTF-8 へ変換された、 UTF-16 単位のコードの数。これは、 `uint8Array` に十分なスペースがない場合、 `string.length` よりも小さくなる可能性があります。
- `written`
  - : 宛先の `Uint8Array` で変更されたバイト数。書き込まれたバイトは、完全な UTF-8 バイト列を形成することが保証されます。

## 特定の位置にエンコード

_encoder_.encodeInto は常に配列の先頭に出力を行います。しかしながら、出力を特定の位置から開始できると便利なことがあります。これは [TypedArray.prototype.subarray()](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray) で解決できます。ご覧ください。

```js
var encoder = new TextEncoder;
function encodeIntoAtPosition(string, u8array, position) {
    return encoder.encodeInto(string, position ? u8array.subarray(position|0) : u8array);
}

var u8array = new Uint8Array(8);
encodeIntoAtPosition("hello", u8array, 2);
console.log( "" + u8array.join() ); // 0,0,104,101,108,108,111,0
```

## バッファーの大きさ

JavaScript の文字列 `s` を変換するために、完全な変換に必要な出力領域は `s.length` バイトより小さくなることはなく、 `s.length * 3` バイトより大きくなることはありません。もし出力の割り当て（典型的には Wasm ヒープ内）が短時間であることが予想される場合、出力に `s.length * 3` バイトを割り当てることは理にかなっており、その場合、最初の変換の試行で文字列全体を変換することが保証されています。文字列は 3 バイトに展開されるいくつかの文字でパックされることになるので、 `s.length * 3` になることはまれであることに注意してください。長いテキストが `s.length * 2` バイトの長さを超えることはまずないでしょう。したがって、より楽観的なアプローチとしては、 `s.length * 2 + 5` バイトを割り当てて、楽観的な予測が間違っていたという稀な状況下で再割り当てを実行することでしょう。

出力結果の寿命が長いと見込まれる場合、最小割り当てサイズ `roundUpToBucketSize(s.length)` と最大割り当てサイズ `s.length * 3` を計算し、（メモリー使用量と速度のトレードオフとして）選択した閾値 `t` を用意し、 `roundUpToBucketSize(s.length) + t >= s.length * 3` なら、 `s.length * 3` に対して割り当てるといったことは理にかなっています。そうでない場合は、まず `roundUpToBucketSize(s.length)` を確保し、変換します。返値の辞書にある `read` アイテムが `s.length` であれば、変換は完了です。そうでない場合は、ターゲットバッファーを `written + (s.length - read) * 3` に再割り当てし、 `read` の位置から始まる `s` と `written` の位置から始まるターゲットバッファーのサブバッファーを取得して、残りを変換する。

上記の `roundUpToBucketSize()` はアロケーターのバケットサイズに切り上げる関数です。たとえば、 Wasm のアロケーターが 2 のべき乗のバケットを使うことがわかっている場合、 `roundUpToBucketSize()` は引数が 2 のべき乗であればそれを返し、そうでなければ次の 2 のべき乗を返すようにします。 Wasm アロケーターの挙動が不明な場合は、 `roundUpToBucketSize()` を恒等関数にする必要があります。

アロケーターの挙動が不明な場合、最大で 2 回の再割り当てを行い、最初の再割り当てでは、*未変換の残りの*長さを 3 倍ではなく 2 倍にすることができます。
しかし、この場合、すでに*書き込まれた*バッファーの長さを 2 倍するような通常の実装は意味がありません。このような場合、 2 回目の再割り当てが発生すると、常に元の長さに 3 倍した長さと比較して割り当て回数が多くなってしまうからです。
上記のアドバイスは、ゼロ終端のためのスペースを割り当てる必要がないことを前提としています。つまり、 Wasm 側では Rust の文字列か、ゼロ終端でない C++ のクラスを使っていることになります。 C++ の `std::string` を使用している場合は、論理長が表示されていても、 アロケーターバケットサイズへの丸めの計算時に余分なターミネータバイトを考慮する必要があります。 C の文字列については、次の節を参照してください。

## ゼロ終端なし

入力文字列に U+0000 という文字が含まれている場合、`encodeInto()` は出力に 0x00 のバイトを書き込みます。
`encodeInto()` は論理出力の後に C 形式の 0x00 終端文字のバイトを書き込み*ません*。

もし自分の Wasm プログラムが C の文字列を使っているなら、 0x00 の終端文字を書くのは自分の責任で、 JavaScript の文字列が U+0000 を含んでいれば、自分の Wasm プログラムが論理的に切り詰められた文字列として扱うことを防ぐことができません。ご覧ください。

```js
var encoder = new TextEncoder;
function encodeIntoWithSentinel(string, u8array, position) {
    var stats = encoder.encodeInto(string, position ? u8array.subarray(position|0) : u8array);
    if (stats.written < u8array.length) u8array[stats.written] = 0; // append null if room
    return stats;
}
```

## 例

```html
<p class="source">This is a sample paragraph.</p>
<p class="result"></p>
```

```js
const sourcePara = document.querySelector('.source');
const resultPara = document.querySelector('.result');
const string = sourcePara.textContent;

const textEncoder = new TextEncoder();
const utf8 = new Uint8Array(string.length);

let encodedResults = textEncoder.encodeInto(string, utf8);
resultPara.textContent += 'Bytes read: ' + encodedResults.read +
                          ' | Bytes written: ' + encodedResults.written +
                          ' | Encoded result: ' + utf8;
```

{{EmbedLiveSample('Examples')}}

## ポリフィル

以下のポリフィルは、 switch - case 文や Safari のネイティブの TextEncoder.prototype.encode を利用できる場合は利用するので、少し長いかもしれませんが、パフォーマンスが向上するので、長さに見合うだけの価値はあります。

```js
(function(window){
    "use strict";
    var log = Math.log;
    var LN2 = Math.LN2;
    var clz32 = Math.clz32 || function(x) {return 31 - log(x >>> 0) / LN2 | 0};
    var fromCharCode = String.fromCharCode;
    var patchedU8Array = window.Uint8Array || Array;
    var TextEncoderPrototype = TextEncoder["prototype"];
    var GlobalTextEncoder = window["TextEncoder"];
    var globalTextEncoderPrototype;
    var globalTextEncoderInstance;
    //////////////////////////////////////////////////////////////////////////////////////
    function encoderReplacer(nonAsciiChars){
        // make the UTF string into a binary UTF-8 encoded string
        var point = nonAsciiChars.charCodeAt(0)|0;
        if (0xD800 <= point && point <= 0xDBFF) {
            var nextcode = nonAsciiChars.charCodeAt(1)|0; // defaults to 0 when NaN, causing null replacement character

            if (0xDC00 <= nextcode && nextcode <= 0xDFFF) {
                //point = ((point - 0xD800)<<10) + nextcode - 0xDC00 + 0x10000|0;
                point = (point<<10) + nextcode - 0x35fdc00|0;
                if (point > 0xffff)
                    return fromCharCode(
                        (0x1e/*0b11110*/<<3) | (point>>>18),
                        (0x2/*0b10*/<<6) | ((point>>>12)&0x3f/*0b00111111*/),
                        (0x2/*0b10*/<<6) | ((point>>>6)&0x3f/*0b00111111*/),
                        (0x2/*0b10*/<<6) | (point&0x3f/*0b00111111*/)
                    );
            } else point = 65533/*0b1111111111111101*/;//return '\xEF\xBF\xBD';//fromCharCode(0xef, 0xbf, 0xbd);
        }
        /*if (point <= 0x007f) return nonAsciiChars;
        else */if (point <= 0x07ff) {
            return fromCharCode((0x6<<5)|(point>>>6), (0x2<<6)|(point&0x3f));
        } else return fromCharCode(
            (0xe/*0b1110*/<<4) | (point>>>12),
            (0x2/*0b10*/<<6) | ((point>>>6)&0x3f/*0b00111111*/),
            (0x2/*0b10*/<<6) | (point&0x3f/*0b00111111*/)
        );
    }
    function TextEncoder(){};
    TextEncoderPrototype["encode"] = function(inputString) {
        // 0xc0 => 0b11000000; 0xff => 0b11111111; 0xc0-0xff => 0b11xxxxxx
        // 0x80 => 0b10000000; 0xbf => 0b10111111; 0x80-0xbf => 0b10xxxxxx
        var encodedString = inputString === void 0 ?  "" : ("" + inputString).replace(/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g, encoderReplacer);
        var len=encodedString.length|0, result = new patchedU8Array(len);
        var i=0;
        for (; i<len; i=i+1|0)
            result[i] = encodedString.charCodeAt(i) |0;
        return result;
    };
    function polyfill_encodeInto(inputString, u8Arr) {
        var encodedString = inputString === void 0 ?  "" : ("" + inputString).replace(/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g, encoderReplacer);
        var len=encodedString.length|0, i=0, char=0, read=0, u8ArrLen = u8Arr.length|0, inputLength=inputString.length|0;
        if (u8ArrLen < len) len=u8ArrLen;
        putChars: for (; i<len; i=i+1|0) {
            char = encodedString.charCodeAt(i) |0;
            switch(char >>> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    read = read + 1|0;
                    // extension points:
                case 8:
                case 9:
                case 10:
                case 11:
                    break;
                case 12:
                case 13:
                    if ((i+1|0) < u8ArrLen) {
                        read = read + 1|0;
                        break;
                    }
                case 14:
                    if ((i+2|0) < u8ArrLen) {
                        read = read + 1|0;
                        break;
                    }
                case 15:
                    if ((i+3|0) < u8ArrLen) {
                        read = read + 1|0;
                        break;
                    }
                default:
                    break putChars;
            }
            //read = read + ((char >>> 6) !== 2) |0;
            u8Arr[i] = char;
        }
        return {"written": i, "read": inputLength < read ? inputLength : read};
    };
    TextEncoderPrototype["encodeInto"] = polyfill_encodeInto;

    if (!GlobalTextEncoder) {
        window["TextEncoder"] = TextEncoder;
    } else if (!(globalTextEncoderPrototype = GlobalTextEncoder["prototype"])["encodeInto"]) {
        globalTextEncoderInstance = new GlobalTextEncoder;
        globalTextEncoderPrototype["encodeInto"] = function(string, u8arr) {
            // Unfortunately, there's no way I can think of to quickly extract the number of bits written and the number of bytes read and such
            var strLen = string.length|0, u8Len = u8arr.length|0;
            if (strLen < ((u8Len >> 1) + 3|0)) { // in most circumstances, this means its safe. there are still edge-cases which are possible
                // in many circumstances, we can use the faster native TextEncoder
                var res8 = globalTextEncoderInstance["encode"](string);
                var res8Len = res8.length|0;
                if (res8Len < u8Len) { // if we dont have to worry about read/written
                    u8arr.set( res8 );
                    return {
                        "read": strLen,
                        "written": res8.length|0
                    };
                }
            }
            return polyfill_encodeInto(string, u8arr);
        };
    }
})(typeof global == "" + void 0 ? typeof self == "" + void 0 ? this : self : global);
```

引用元: <https://github.com/anonyco/FastestSmallestTextEncoderDecoder>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{DOMxRef("TextEncoder")}} インターフェイス。
- {{DOMxRef("TextEncoder.encode()")}}
