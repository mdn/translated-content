---
title: SpeechSynthesis.getVoices()
slug: Web/API/SpeechSynthesis/getVoices
translation_of: Web/API/SpeechSynthesis/getVoices
---
<div>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</div>

<p>The <code><strong>getVoices()</strong></code> method of the {{domxref("SpeechSynthesis")}} interface returns a list of {{domxref("SpeechSynthesisVoice")}} objects representing all the available voices on the current device.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">speechSynthesisInstance.getVoices();
</pre>

<h3 id="参数">参数</h3>

<p>None.</p>

<h3 id="返回值">返回值</h3>

<p>返回一个类型为{{domxref("SpeechSynthesisVoice")}} 的数组（array）列表（list）。</p>

<div class="note">
<p><strong>Note</strong>: 使用此方法会返回存在错误规范的<code>SpeechSynthesisVoiceList</code> 对象, 可能已被从现有规范中移除。</p>
</div>

<h2 id="示例">示例</h2>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function populateVoiceList() {
  if(typeof speechSynthesis === 'undefined') {
    return;
  }

  voices = speechSynthesis.getVoices();

  for(i = 0; i &lt; voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voiceSelect").appendChild(option);
  }
}

populateVoiceList();
if (typeof speechSynthesis !== 'undefined' &amp;&amp; speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;select id="voiceSelect"&gt;&lt;/select&gt;
</pre>

<p>{{EmbedLiveSample("Example", 400, 25)}}</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Speech API', '#dfn-ttsgetvoices', 'getVoices()')}}</td>
   <td>{{Spec2('Web Speech API')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>


<p>{{Compat("api.SpeechSynthesis.getVoices")}}</p>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
