---
title: TransformStream
slug: Web/API/TransformStream
tags:
  - API
  - Interface
  - Streams API
  - TransformStream
  - Web
  - インターフェイス
translation_of: Web/API/TransformStream
---
<div>{{APIRef("Media Capture and Streams")}}</div>

<p><span class="seoSummary"><code>TransformStream</code> は <a href="/ja/docs/Web/API/Streams_API">Streams API</a> のインターフェイスで一連の変換可能なデータを表します。</span></p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("TransformStream.TransformStream", "TransformStream()")}}</dt>
 <dd>指定されたハンドラーから変換ストリームを作成して返却します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("TransformStream.readable")}} {{readonlyInline}}</dt>
 <dd>TransformStream の <code>readable</code> 側の端点です。</dd>
 <dt>{{domxref("TransformStream.writable")}} {{readonlyInline}}</dt>
 <dd>TransformStream の <code>writable</code> 側の端点です。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p>なし</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Anything-to-uint8array_stream" name="Anything-to-uint8array_stream">何かを uint8array に変換するストリーム</h3>

<p>以下の例では、変換ストリームは受信したすべてのチャンクを {{domxref("Uint8Array")}} の値に渡します。</p>

<pre class="brush: js">const transformContent = {
  start() {}, // required.
  async transform(chunk, controller) {
    chunk = await chunk
    switch (typeof chunk) {
      case 'object':
        // just say the stream is done I guess
        if (chunk === null) controller.terminate()
        else if (ArrayBuffer.isView(chunk))
          controller.enqueue(new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength))
        else if (Array.isArray(chunk) &amp;&amp; chunk.every(value =&gt; typeof value === 'number'))
          controller.enqueue(new Uint8Array(chunk))
        else if ('function' === typeof chunk.valueOf &amp;&amp; chunk.valueOf() !== chunk)
          this.transform(chunk.valueOf(), controller) // hack
        else if ('toJSON' in chunk) this.transform(JSON.stringify(chunk), controller)
        break
      case 'symbol':
        controller.error("Cannot send a symbol as a chunk part")
        break
      case 'undefined':
        controller.error("Cannot send undefined as a chunk part")
      default:
        controller.enqueue(this.textencoder.encode(String(chunk)))
        break
  },
  flush() { /* do any destructor work here */ }
}

class AnyToU8Stream extends TransformStream {
  constructor() {
    super({...transformContent, textencoder: new TextEncoder()})
  }
}
</pre>

<h3 id="Polyfilling_TextEncoderStream_and_TextDecoderStream" name="Polyfilling_TextEncoderStream_and_TextDecoderStream">TextEncoderStream および TextDecoderStream の代替</h3>

<p>なお、これはネイティブのコンストラクターを使っているため非推奨です。これは対応していないプラットフォームで代替とすることを意図しています。</p>

<pre class="brush: js">const tes = {
  start(){this.encoder = new TextEncoder()},
  transform(chunk, controller) {
    controller.enqueue(this.encoder.encode(chunk))
  }
}
let _jstes_wm = new WeakMap(); /* info holder */
class JSTextEncoderStream extends TransformStream {
  constructor() {
    let t = {...tes}

    super(t)
    _jstes_wm.set(this, t)
  }
  get encoding() {return _jstes_wm.get(this).encoder.encoding}
}
</pre>

<p>同様に、 TextDecoderStream は次のように書くことができます。</p>

<pre class="brush: js">const tes = {
  start(){
    this.decoder = new TextDecoder(this.encoding, this.options)
  },
  transform(chunk, controller) {
    controller.enqueue(this.decoder.decode(chunk))
  }
}
let _jstds_wm = new WeakMap(); /* info holder */
class JSTextDecoderStream extends TransformStream {
  constructor(encoding = 'utf-8', {...options} = {}) {
    let t = {...tds, encoding, options}

    super(t)
    _jstes_wm.set(this, t)
  }
  get encoding() {return _jstds_wm.get(this).decoder.encoding}
  get fatal() {return _jstds_wm.get(this).decoder.fatal}
  get ignoreBOM() {return _jstds_wm.get(this).decoder.ignoreBOM}
}
</pre>

<h3 id="複数の_ReadableStreams_を互いに結合">複数の ReadableStreams を互いに結合</h3>

<p>これは、複数のストリームを結合できる便利なものです。例ではプログレッシブ読み込みやプログレッシブストリーミングを持つ PWA の構築が含まれます。</p>

<pre class="brush: js">let responses = [ /* conjoined response tree */ ]
let {readable, writable} = new TransformStream

responses.reduce(
  (a, res, i, arr) =&gt; a.then(() =&gt; res.pipeTo(writable, {preventClose: (i+1) !== arr.length})),
  Promise.resolve()
)
</pre>

<p>これは他への影響に対して耐性がないことに注意してください。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Media Capture', '#dom-mediastream', 'MediaStream')}}</td>
   <td>{{Spec2('Media Capture')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.TransformStream")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://whatwg-stream-visualizer.glitch.me/">WHATWG Stream Visualiser</a>: 読み取り、書き込み、変換ストリームの基本的な視覚化</li>
</ul>
