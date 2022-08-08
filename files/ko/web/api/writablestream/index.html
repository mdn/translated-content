---
title: WritableStream
slug: Web/API/WritableStream
translation_of: Web/API/WritableStream
---
<p>{{SeeCompatTable}}{{APIRef("Streams")}}</p>

<p><a href="/en-US/docs/Web/API/Streams_API">Streams API</a>의 <strong><code>WritableStream</code></strong>는 지정된 곳에 스트림 데이터를 writing하기 위한 싱크 추상 인터페이스입니다. 이 객체는 내장 백프레셔와 큐잉으로 구성되어 있다.</p>

<h2 id="생성자">생성자</h2>

<dl>
 <dt>{{domxref("WritableStream.WritableStream", "WritableStream()")}}</dt>
 <dd>새 <code>WritableStream</code> 오브젝트를 생성한다.</dd>
</dl>

<h2 id="속성">속성</h2>

<dl>
 <dt>{{domxref("WritableStream.locked")}} {{readonlyinline}}</dt>
 <dd><code>WritableStream</code>의 locked 여부를 boolean 값으로 반환한다. </dd>
</dl>

<h2 id="메소드">메소드</h2>

<dl>
 <dt>{{domxref("WritableStream.abort()")}}</dt>
 <dd>스트림을 중단한다. 생산자에게 더 이상 쓰기 스트림을 사용할 수 없으며 에러 상태로 전한됨을 고지한다. 큐잉되어 있던 모든 쓰기 작업은 소실된다.</dd>
 <dt>{{domxref("WritableStream.getWriter()")}}</dt>
 <dd>새 {{domxref("WritableStreamDefaultWriter")}} 인스턴스를 반환하고 스트림에 락을 건다. 스트림에 락이 걸린 동안에는 해제하기 전까지 다른 writer를 요청할 수 없다.</dd>
</dl>

<h2 id="예시">예시</h2>

<p>아래 예시는 본 인터페이스의 몇 가지 기능을 소개합니다. 커스텀 콜백과 API를 통한 queuing strategy 값을 가지고 <code>WritableStream</code>을 생성하는 법을 보여줍니다. 그 후 생성된 스트림과 문자열을 전달하여 <code>sendMessage()</code>를 합니다. 함수 내부에선 {{domxref("WritableStreamDefaultWriter")}} 인스턴스를 반환하는 스트림의 <code>getWriter()</code> 메소드를 호출합니다. 문자열 조각들을 각각 스트림에 쓰기 위해 <code>forEach()</code> 를 사용하구요. 마지막으로 문자열 조각과 스트림 성공/실패를 처리하기 위해 <code>write()</code>와 <code>close()</code>는 Promise를 반환합니다.</p>

<ul>
</ul>

<pre class="brush: js">const list = document.querySelector('ul');

function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message, { stream: true });
  encoded.forEach((chunk) =&gt; {
    defaultWriter.ready
      .then(() =&gt; {
        return defaultWriter.write(chunk);
      })
      .then(() =&gt; {
        console.log("Chunk written to sink.");
      })
      .catch((err) =&gt; {
        console.log("Chunk error:", err);
      });
  });
  // Call ready again to ensure that all chunks are written
  //   before closing the writer.
  defaultWriter.ready
    .then(() =&gt; {
      defaultWriter.close();
    })
    .then(() =&gt; {
      console.log("All chunks written");
    })
    .catch((err) =&gt; {
      console.log("Stream error:", err);
    });
}

const decoder = new TextDecoder("utf-8");
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });
let result = "";
const writableStream = new WritableStream({
  // Implement the sink
  write(chunk) {
    return new Promise((resolve, reject) =&gt; {
      var buffer = new ArrayBuffer(2);
      var view = new Uint16Array(buffer);
      view[0] = chunk;
      var decoded = decoder.decode(view, { stream: true });
      var listItem = document.createElement('li');
      listItem.textContent = "Chunk decoded: " + decoded;
      list.appendChild(listItem);
      result += decoded;
      resolve();
    });
  },
  close() {
    var listItem = document.createElement('li');
    listItem.textContent = "[MESSAGE RECEIVED] " + result;
    list.appendChild(listItem);
  },
  abort(err) {
    console.log("Sink error:", err);
  }
}, queuingStrategy);

sendMessage("Hello, world.", writableStream);</pre>

<p><a href="https://mdn.github.io/dom-examples/streams/simple-writer/">Simple writer example</a>에서 전체 코드를 볼 수 있습니다.</p>

<h3 id="백프레셔(배압)">백프레셔(배압)</h3>

<p>API 내부에서 백프레셔가 어떻게 구현되어 있는지에 따라 코드가 보기에 영 깔끔하지 않을 수 있습니다. 세 가지 관점에서 백프레셔가 어떻게 구현되어 있는지 알아봅시다.</p>

<ul>
 <li>Counting strategy를 생성할 때 35라인에서 지정 된 <code>highWaterMark</code> 프로퍼티는 <code>write()</code>를 한 번 호출할때 <code>WritableStream</code>가 처리할 수 있는 최대 데이터량을 지정합니다. 이 예시에선 <code>defaultWriter.write()</code> 에 처리할 수 있는 최대량이 전달됩니다 (line 9).</li>
 <li><code>writer.ready</code>프로퍼티는 <code>(WritableStream</code> 생성자의 첫 번째 파라미터로 전달 된) 콜백 객체가 데이터 쓰기를 완료했을 때 resolved되는 Promise를 반환합니다. 데이터 소스는 추가 데이터를 write하거나 (line 9) <code>close()</code> 를 호출할 수 있습니다(line 21). close()를 빨리 호출하면 더 이상 데이터를 쓸 수 없게 막을 수 있습니다. 예시에서  <code>writer.ready</code>를 두 번 호출한 이유입니다 (lines 7 and 19). </li>
 <li>콜백 객체의  <code>write()</code>가 반환한 {{jsxref("Promise")}}는 <code>WritableStream</code>과 그 writer가 <code>writer.ready</code>를 언제 resolve 해야 할 지 알려줍니다.</li>
</ul>

<h2 id="Specifications">명세서</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

{{Compat("api.WritableStream")}}

<h2 id="더_보기">더 보기</h2>

<ul>
 <li><a href="https://whatwg-stream-visualizer.glitch.me/">WHATWG Stream Visualiser</a>, redable, writable 스트림 및 스트림간 변환을 시각화 한 예시.</li>
</ul>
