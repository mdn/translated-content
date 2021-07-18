---
title: ReadableStream.tee()
slug: Web/API/ReadableStream/tee
tags:
  - API
  - Method
  - ReadableStream
  - Reference
  - Streams
  - tee
translation_of: Web/API/ReadableStream/tee
---
<div>{{APIRef("Streams")}}</div>

<p class="summary"><span class="seoSummary">{{domxref("ReadableStream")}} インターフェイスの <strong><code>tee()</code></strong> メソッドは、現在の読み取り可能なストリームを<a href="https://streams.spec.whatwg.org/#tee-a-readable-stream">ティーイング</a>し、結果の2つの分岐を新しい {{domxref("ReadableStream")}} インスタンスとして含む2要素配列を返します。</span></p>

<p>これは、2つのリーダーがストリームを同時に、おそらく異なる速度で読み取ることができるようにする場合に便利です。 例えば、サーバーから応答を取得してブラウザーにストリームしたいが、ServiceWorker キャッシュにもストリームしたい場合は、ServiceWorker でこれを行うことができます。 応答のボディを複数回使用することはできないため、これを行うには2つのコピーが必要です。</p>

<p>ストリームをキャンセルするには、結果の両方の分岐をキャンセルする必要があります。 ストリームをティーイングすると、通常、その間はストリームがロックされ、他のリーダーがロックできなくなります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>teedStreams</em> = <em>readableStream</em>.tee();</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>2つの {{domxref("ReadableStream")}} インスタンスを含む {{jsxref("Array")}}。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>TypeError</dt>
 <dd>ソースストリームは <code>ReadableStream</code> ではありません。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>次の簡単な例では、以前に作成したストリームをティーイングした結果の両方のストリーム（生成された配列の2つのメンバーに含まれる）を、2つのストリームからデータを読み取り、各ストリームのチャンクを UI の異なる部分に順番に印刷する関数に渡します。 完全なコードについては、<a href="https://mdn.github.io/dom-examples/streams/simple-tee-example/">単純な tee の例</a>を参照してください。</p>

<pre class="brush: js">function teeStream() {
  const teedOff = stream.tee();
  fetchStream(teedOff[0], list2);
  fetchStream(teedOff[1], list3);
}

function fetchStream(stream, list) {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() は、値を受け取ったときに解決する promise を返します
  reader.read().then(function processText({ done, value }) {
    // 結果オブジェクトには2つのプロパティが含まれます。
    // done  - ストリームがすべてのデータを既に提供している場合は true。
    // value - 一部のデータ。 done が true の場合、常に undefined。
    if (done) {
      console.log("Stream complete");
      return;
    }

    // フェッチしたストリームの値は Uint8Array です
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement('li');
    listItem.textContent = 'Read ' + charsReceived + ' characters so far. Current chunk = ' + chunk;
    list.appendChild(listItem);

    // さらに読み、この関数を再度呼び出します
    return reader.read().then(processText);
  });
}</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("Streams","#rs-tee","tee()")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.ReadableStream.tee")}}</p>
