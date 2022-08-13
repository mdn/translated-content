---
title: ReadableStream.cancel()
slug: Web/API/ReadableStream/cancel
tags:
  - API
  - Method
  - ReadableStream
  - Reference
  - Streams
  - cancel
translation_of: Web/API/ReadableStream/cancel
---
<div>{{APIRef("Streams")}}</div>

<p class="summary">{{domxref("ReadableStream")}} インターフェイスの <strong><code>cancel()</code></strong> メソッドは、関連付けられたストリームをキャンセルします。 提供された <code>reason</code> パラメーターは、基になるソースに与えられ、使用する場合と使用しない場合があります。</p>

<p>キャンセルは、ストリームを完全に終了し、読み取り待ちのチャンクがキューに入れられている場合でも、それ以上データを必要としない場合に使用します。 キャンセルが呼び出された後、そのデータは失われ、ストリームは読み取り不能になります。 これらのチャンクをまだ読み取り、ストリームを完全に取り除くわけではない場合は、{{domxref("ReadableStreamDefaultController.close()")}} を使用します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>promise</em> = <em>readableStream</em>.cancel(reason);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>reason</dt>
 <dd>人間が読むことができるキャンセルの理由を提供する {{domxref("DOMString")}}。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{jsxref("Promise")}}。 <code>reason</code> パラメーターで指定された値で満たされます。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>TypeError</dt>
 <dd>キャンセルしようとしているストリームは {{domxref("ReadableStream")}} ではないか、ロックされています。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>Jake Archibald による<a href="https://jsbin.com/gameboy/edit?js,console">フェッチのキャンセル</a>の例では、ストリームを使用して、チャンクごとに WHATWG HTML 仕様をフェッチします。 各チャンクで文字列 "service workers" を検索します。 検索用語が見つかると、<code>cancel()</code> を使用してストリームをキャンセルします — 仕事は終了しているため、ストリームは不要になります。</p>

<pre class="brush: js">var searchTerm = "service workers";
// 一致した結果の両側を表示する文字数
var contextBefore = 30;
var contextAfter = 30;
var caseInsensitive = true;
var url = 'https://html.spec.whatwg.org/';

console.log(`'${searchTerm}' を '${url}' で検索`);

fetch(url).then(response =&gt; {
  console.log('ヘッダーを受信しました');

  var decoder = new TextDecoder();
  var reader = response.body.getReader();
  var toMatch = caseInsensitive ? searchTerm.toLowerCase() : searchTerm;
  var bufferSize = Math.max(toMatch.length - 1, contextBefore);

  var bytesReceived = 0;
  var buffer = '';
  var matchFoundAt = -1;

  return reader.read().then(function process(result) {
    if (result.done) {
      console.log('一致が見つかりませんでした');
      return;
    }

    bytesReceived += result.value.length;
    console.log(`これまでに ${bytesReceived} バイトのデータを受信しました`);

    buffer += decoder.decode(result.value, {stream: true});

    // 一致するものが既に見つかっており、コンテキストを収集していますか？
    if (matchFoundAt === -1) {
      matchFoundAt = (caseInsensitive ? buffer.toLowerCase() : buffer).indexOf(toMatch);
    }

    if (matchFoundAt === -1) {
      buffer = buffer.slice(-bufferSize);
    }
    else if (buffer.slice(matchFoundAt + toMatch.length).length &gt;= contextAfter) {
      console.log("これが一致したものです:")
      console.log(buffer.slice(
        Math.max(0, matchFoundAt - contextBefore),
        matchFoundAt + toMatch.length + contextAfter
      ));
      console.log("フェッチのキャンセル");
      reader.cancel();
      return;
    }
    else {
      console.log('一致が見つかりましたが、さらにコンテキストが必要です…');
    }

    // 読み続けます
    return reader.read().then(process);
  });
}).catch(err =&gt; {
  console.log("何かがおかしかった。 詳細については、開発ツールを参照してください。 応答に CORS ヘッダーがありませんか？");
  throw err;
});</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("Streams","#rs-cancel","cancel()")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.ReadableStream.cancel")}}</p>
