---
title: URL.createObjectURL()
slug: Web/API/URL/createObjectURL
tags:
  - API
  - Blob
  - DOM
  - Reference
  - URL
  - URL API
  - createObjectURL
translation_of: Web/API/URL/createObjectURL
---
<p><strong><code>URL.createObjectURL()</code></strong> 静的メソッドは、引数で指定されたオブジェクトを表す URL を含む {{domxref("DOMString")}} を生成します。 URL の寿命は、それを作成したウィンドウ内の {{domxref("document")}} と結び付けられています。 新しいオブジェクト URL は、指定された {{domxref("File")}} オブジェクトか {{domxref("Blob")}} オブジェクトを表します。</p>

<p>オブジェクト URL を解放するには、 {{domxref("URL.revokeObjectURL", "revokeObjectURL()")}} を呼び出してください。</p>

<p>{{AvailableInWorkers}}</p>

<div class="note">
<p><strong>メモ:</strong> この機能はメモリリークを生み出す可能性があるため、<a href="/ja/docs/Web/API/Service_Worker_API">サービスワーカー</a>内で利用することは<em>できません</em>。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>objectURL</em> = URL.createObjectURL(<em>object</em>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>object</code></dt>
 <dd>オブジェクト URL を生成するための {{domxref("File")}}, {{domxref("Blob")}}, {{domxref("MediaSource")}} の何れかのオブジェクトです。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>object</code> で指定された内容を参照するために使用されるオブジェクト URL を含んだ {{domxref("DOMString")}} です。</p>

<h2 id="Example" name="Example">例</h2>

<p><a href="/ja/docs/Web/API/File/Using_files_from_web_applications#例_オブジェクト_url_で画像を表示">オブジェクト URL で画像を表示</a>を参照してください。</p>

<h2 id="Usage_notes" name="Usage_notes">使用上のメモ</h2>

<h3 id="Memory_management" name="Memory_management">メモリ管理</h3>

<p>すでにオブジェクト URL が生成されている場合でも、 <code>createObjectURL()</code> を呼び出す度に、新しいオブジェクト URL が生成されます。 必要がなくなったら {{domxref("URL.revokeObjectURL()")}} を呼び出して、それぞれを解放してください。</p>

<p>ブラウザーは、文書がアンロードされた際にこれらのオブジェクト URL をメモリから解放します。 しかし、性能とメモリ使用を考慮すると、明示的にアンロードできる安全な機会があるならば、そうするべきです。</p>

<h3 id="Using_object_URLs_for_media_streams" name="Using_object_URLs_for_media_streams">メディアストリームのオブジェクト URL の使用</h3>

<p>古いバージョンの Media Source 仕様書では、 {{HTMLElement("video")}} 要素にストリームを添付するには {{domxref("MediaStream")}} にオブジェクト URL を生成する必要があるとしてます。 これはもう必要なく、ブラウザーはこのようにする対応を削除してきています。</p>

<div class="warning">
<p><strong>重要:</strong> もし {{domxref("URL.createObjectURL", "createObjectURL()")}} でメディア要素にストリームを割り当てるコードが残っているのであれば、単純に {{domxref("HTMLMediaElement.srcObject", "srcObject")}} を直接 <code>MediaStream</code> に設定するよう更新する必要があります。</p>
</div>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('File API', '#dfn-createObjectURL', 'createObjectURL()')}}</td>
   <td>{{Spec2('File API')}}</td>
   <td>初回定義</td>
  </tr>
  <tr>
   <td>{{SpecName('Media Source Extensions', '#dom-url-createobjecturl', 'URL')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td>
    <p>MediaSource 拡張</p>

    <p>Older versions of this specification used <code>createObjectURL()</code> for {{domxref("MediaStream")}} objects; this is no longer supported.</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.URL.createObjectURL")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/File/Using_files_from_web_applications">Web アプリケーションからファイルを扱う</a></li>
 <li><a href="/ja/docs/Web/API/File/Using_files_from_web_applications#例_オブジェクト_url_で画像を表示">オブジェクト URL で画像を表示</a></li>
 <li>{{domxref("URL.revokeObjectURL()")}}</li>
 <li>{{domxref("HTMLMediaElement.srcObject")}}</li>
 <li>{{domxref("FileReader.readAsDataURL()")}}</li>
</ul>

<div>{{APIRef("URL")}}</div>
