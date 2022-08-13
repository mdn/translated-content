---
title: Basic concepts behind Web Audio API
slug: Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API
tags:
  - Audio
  - Beginner
  - Guide
  - Introduction
  - Media
  - Web Audio
  - Web Audio API
  - concepts
  - sound
  - 初心者
translation_of: Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API
---
<div class="summary">
<p>この記事では、アプリを経由した音声伝達方法の設計をする際に、十分な情報に基づいた決断をする助けとなるよう、 Web Audio API の特徴がいかに働いているか、その背後にある音声理論について説明します。この記事はあなたを熟練のサウンドエンジニアにさせることはできないものの、Web Audio API が動く理由を理解するための十分な背景を提供します。</p>
</div>

<h2 id="Audio_graphs" name="Audio_graphs">オーディオグラフ</h2>

<p><a href="/ja/docs/Web/API/Web_Audio_API">Web Audio API</a> は、<a href="/ja/docs/Web/API/AudioContext">オーディオコンテキスト</a>内部でのオーディオオペレーションに対するハンドリングを含み、<strong>モジュラールーティング</strong>を可能とするためにデザインされてきました。基本となる音声操作を成す要素は、<strong>オーディオルーチングラフ</strong>を形作るために、互いに接続される<strong>オーディオノード</strong>によります。様々なタイプのチャンネルレイアウトと共に、いくつかの音声源もまた、単一のコンテキスト内部にて支持されています。このモジュラーデザインは、複雑なオーディオ機能を、ダイナミックな音響効果と共に創造するために必要な柔軟性を与えています。</p>

<p>オーディオノードは、それら入出力を経由し接続され、単一あるいは複数の音声源から開始される一連のチェーンを作り、一つ以上のノードを経由しつつ、最終的な行き先に届き終了します。ただし、たとえば、音声データを視覚化することのみを求める場合などは、このような目的地は省いて構いません。シンプルで典型的な Web Audio ワークフローでは、以下のようになります:</p>

<ol>
 <li>オーディオコンテキストの作成。</li>
 <li>{{HTMLElement("audio")}} タグ、オシレーター、ストリーム等といった、該当コンテキスト内での音声源の作成。</li>
 <li>リバーブ、バイカッドフィルター、パンナーコンプレッサーといった、音響効果用ノードの作成。</li>
 <li>例えばあなたのシステムのスピーカーなど、音声の最終的な行き先の選択。</li>
 <li>音声効果を（あるのならば）かけた後、最後に選択した行き先へ届いて終了する、音声源からの接続の確立。</li>
</ol>

<div class="callout-box"><strong>チャンネルの記法</strong>

<p>信号上で利用できるオーディオチャンネルの数字は、2.0 や 5.1 のように、しばしば、数値の形式で表現されます。これは{{interwiki("wikipedia", "Surround_sound#Channel_notation", "channel notation")}}と呼ばれます。最初の数値は、該当の信号が含んでいるオーディオチャンネルの数です。ピリオドの後にある数値は、低音増強用出力として確保されているチャンネルの数を示しています。それらはしばしば<strong>サブウーファー</strong>とも称されます。</p>
</div>

<p><img alt="A simple box diagram with an outer box labeled Audio context, and three inner boxes labeled Sources, Effects and Destination. The three inner boxes have arrow between them pointing from left to right, indicating the flow of audio information." src="https://mdn.mozillademos.org/files/12237/webaudioAPI_en.svg" style="display: block; height: 143px; margin: 0px auto; width: 643px;"></p>

<p>各入出力は、互いに特定のオーディオレイアウトを代表する、一つ以上のオーディオ<strong>チャンネル</strong>により構成されます。個別のチャンネル構造それぞれは、モノラル、ステレオ、クアッド、5.1等を含んでサポートされています。</p>

<p><img alt="Show the ability of AudioNodes to connect via their inputs and outputs and the channels inside these inputs/outputs." src="https://mdn.mozillademos.org/files/14179/mdn.png" style="display: block; height: 360px; margin: 0px auto; width: 630px;"></p>

<p>音声源はいくつかの方法で取得できます:</p>

<ul>
 <li>JavaScript内部で(オシレーターのような)オーディオノードにより、直接音声を生成。</li>
 <li>未加工の PCM データから生成(この場合、該当オーディオコンテキストは、対応している音声フォーマット形式へのデコード手段を有しています)。</li>
 <li>({{HTMLElement("video")}} や {{HTMLElement("audio")}} のような)HTML media elements より取得。</li>
 <li>(webcam やマイクロフォンのような)<a href="/ja/docs/Web/API/WebRTC_API">Web RTC</a> {{domxref("MediaStream")}} により直接取得。</li>
</ul>

<h2 id="Audio_data_whats_in_a_sample" name="Audio_data_whats_in_a_sample">オーディオデータ: サンプルとは？</h2>

<p>オーディオシグナルのプロセス中では、<strong>サンプリング</strong>とは<a href="https://en.wikipedia.org/wiki/Discrete_time_and_continuous_time">連続的な信号</a>を<a href="Discrete time and continuous time">離散的な信号</a>へ変換することを意味します。あるいは別の言い方をすると、バンドのライブ演奏のような連続的な音波を、コンピューターがその音声を区別されたブロックで処理できるようになる(離散時間信号の)一連のサンプルに変換します。</p>

<p>より詳しい情報は、Wikipedia の <a href="https://ja.wikipedia.org/wiki/%E6%A8%99%E6%9C%AC%E5%8C%96">Sampling(Signal processing)</a>から見ることができます。</p>

<h2 id="Audio_buffers_frames_samples_and_channels" name="Audio_buffers_frames_samples_and_channels">オーディオバッファー: フレーム、サンプル、チャンネルセクション</h2>

<p>{{ domxref("AudioBuffer") }}は、チャンネルの数(モノラルの場合は 1,ステレオの場合は 2、等)、バッファー長すなわちバッファーに格納されているサンプルフレーム数、サンプルレートすなわち 1秒間に再生されるサンプルフレーム数を、そのパラメーターとして持っています。</p>

<p>例として、float32型の値1 つは、(ステレオの場合は左側あるいは右側といった)特定のチャンネルにおいて、各特定時点おけるオーディオストリームの値を表しています。フレームまたはサンプルフレームは、一定時点における、音声を再生する全チャンネル分の値すべてのまとまりです。全チャンネルの全サンプルが一緒に再生されます(ステレオならば 2 チャンネル分、5.1 ならば 6 チャンネル分、等)。</p>

<p>サンプルレートとは、1秒間に再生される、それらサンプルの数(または、1 フレームのサンプルすべてが同時に再生させることから、フレーム)であり、単位は Hz で測定されます。サンプルレートが高まるにつれ、音質は向上します。</p>

<p>モノラルとステレオのオーディオバッファーを見てみましょう。それらは 1秒間、44100Hz で再生されます。</p>

<ul>
 <li>モノラルバッファーは 44100 サンプル、44100 フレームで構成され、length プロパティは 44100 となる。</li>
 <li>ステレオバッファーは 88200 サンプル、44100 フレームで構成され、length プロパティは、そのフレーム数に等しいため 44100 のままである。</li>
</ul>

<p><img alt="A diagram showing several frames in an audio buffer in a long line, each one containing two samples, as the buffer has two channels, it is stereo." src="https://mdn.mozillademos.org/files/14801/sampleframe-english.png" style="height: 150px; width: 853px;"></p>

<p>バッファが再生されると、最も左のサンプルフレームが聞こえ、次にそのサンプルフレームのすぐ隣のサンプルフレームが続いてゆきます。ステレオの場合、両方のチャンネルから同時に聴こえます。サンプルフレームは、チャンネルの数とは独立しているため非常に便利であり、正確に音声を取り扱う有効な手段として、時間を表現してくれます。</p>

<div class="note">
<p><strong>注: </strong>フレーム数から秒数を得るためには、フレーム数をサンプルレートで単に除算するだけです。サンプル数からフレーム数を得るためには、チャンネル数で単に除算するだけです。</p>
</div>

<p>以下はいくつかの単純なサンプルです:</p>

<pre class="brush: js notranslate">var context = new AudioContext();
var buffer = context.createBuffer(2, 22050, 44100);</pre>

<div class="note">
<p><strong>注:</strong> <a href="https://ja.wikipedia.org/wiki/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E3%82%AA%E3%83%BC%E3%83%87%E3%82%A3%E3%82%AA">デジタルオーディオに</a>おいて、<strong>44100</strong><a href="https://ja.wikipedia.org/wiki/%E3%83%98%E3%83%AB%E3%83%84">Hz</a>(<strong>44.1kHz</strong> とも表記される)は一般的な<a href="https://ja.wikipedia.org/wiki/%E6%A8%99%E6%9C%AC%E5%8C%96">サンプリング周波数</a>です。なぜ 44.1kHz なのでしょう？<br>
 <br>
 第一に、人間の耳の<a href="https://en.wikipedia.org/wiki/Hearing_range">可聴範囲</a>は、大雑把に 20 から 20000Hz の範囲です。<a href="https://ja.wikipedia.org/wiki/%E6%A8%99%E6%9C%AC%E5%8C%96%E5%AE%9A%E7%90%86">Nyquist-Shannon のサンプリング定理</a>により、サンプリング周波数は再現したい最大周波数の 2倍以上でなくてはなりません。したがって、サンプリングレートは 40kHz以上でなくてはなりません。<br>
 <br>
 第二に、シグナルはサンプリング前に、<a href="https://ja.wikipedia.org/wiki/%E6%8A%98%E3%82%8A%E8%BF%94%E3%81%97%E9%9B%91%E9%9F%B3">偽信号</a>の発生をさせないため、<a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%BC%E3%83%91%E3%82%B9%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF">ローパスフィルタリング</a>されていなければなりません。理想的ローパスフィルターが 20kHz以下の周波数を(減衰させずに)完璧に通し、20kHz以上の周波数を完璧に遮断する一方で、実際には、周波数が部分的に減衰する場所となる、<a href="https://en.wikipedia.org/wiki/Transition_band">トランジションバンド</a>が必要です。このバンドが広くなるにつれ、<a href="https://en.wikipedia.org/wiki/Anti-aliasing_filter">減衰フィルター</a>を作るのは簡単かつ効率的になります。44.1kHz サンプリング周波数は、2.05kHz のトランジションバンドを与えます。</p>
</div>

<p>この呼び出しをする場合、チャンネル数2 のステレオバッファーを取得し、AudioContext 上で(非常に一般的で、通常のサウンドカードではほとんどはレートとなる)44100Hz にて再生される音源が、0.5秒間続きます: 22050 フレーム/44100Hz = 0.5 秒。</p>

<pre class="brush: js notranslate">var context = new AudioContext();
var buffer = context.createBuffer(1, 22050, 22050);</pre>

<p>この呼び出しをする場合、モノラルバッファーをチャンネル数1 で取得し、AudioContext 上で 44100Hz にて再生される際に自動で 44100Hz へ<em>再サンプリングされ</em>(したがって 44100 フレームとなり)、1秒間続きます: 44100 フレーム/44100Hz = 1 秒。</p>

<div class="note">
<p><strong>注</strong>: オーディオの再サンプリングは、画像のサイズ変更と非常に似たものです。例えば 16x16 の画像があり、32x32 のスペースを満たしたいとします。サイズ変更(あるいは再サンプリング)を行い、結果として(サイズ変更アルゴリズムの違いに依存して、ぼやけたりエッジができたりと)画質の低下を伴いますが、スペースを減らすサイズ変更済み画像が作れます。再サンプリングされたオーディオもまったく同じです。スペースを保てるものの、実際には高音域のコンテンツや高音を適切に再現することはできません。</p>
</div>

<h3 id="Planar_versus_interleaved_buffers" name="Planar_versus_interleaved_buffers">バッファーセクションの平面性対交差性</h3>

<p>Web AudioAPI は平面的なバッファー形式を採用しています。左右のチャンネルは、以下のように格納されています:</p>

<pre class="notranslate">LLLLLLLLLLLLLLLLRRRRRRRRRRRRRRRR (for a buffer of 16 frames)</pre>

<p>これは音声処理における一般的な形式です: これにより各チャンネルの独立した処理が簡単になります。</p>

<p>代わりの方式としては、交差的な形式が用いられます:</p>

<pre class="notranslate">LRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLR (for a buffer of 16 frames)</pre>

<p>この形式は、大掛かりな処理を必要としない音声を、格納し再生する目的として一般的です。例えばデコード済み MP3音楽ストリームなどがあります。<br>
 <br>
 Web Audio API は、音声処理に適することを理由に、平面的なバッファー<strong>のみ</strong>を採用しています。通常は平面的ですが、再生用に音声がサウンドカードへ送られる際は、交差的に変換されます。反対に、MP3音声がデコードされる場合、元々は交差形式だったものの、音声処理のため平面形式へと変換されます。</p>

<h2 id="Audio_channels" name="Audio_channels">オーディオチャンネル</h2>

<p>異なるオーディオバッファーでは、それぞれ異なった数のチャンネルを含んでいます: より基本的なモノラルとステレオ(それぞれチャンネル数1 と 2)から始まり、より複雑なクアッドもしくは 5.1 のような、異なるサウンドサンプルが各チャンネルに含まれ、よりリッチな音声体験を導くセットもあります。チャンネルは通常、以下のテーブルに示される、標準的な略語によって示されます:</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td><em>Mono</em></td>
   <td><code>0: M: mono</code></td>
  </tr>
  <tr>
   <td><em>Stereo</em></td>
   <td><code>0: L: left<br>
    1: R: right</code></td>
  </tr>
  <tr>
   <td><em>Quad</em></td>
   <td><code>0: L: left<br>
    1: R: right<br>
    2: SL: surround left<br>
    3: SR: surround right</code></td>
  </tr>
  <tr>
   <td><em>5.1</em></td>
   <td><code>0: L: left<br>
    1: R: right<br>
    2: C: center<br>
    3: LFE: subwoofer<br>
    4: SL: surround left<br>
    5: SR: surround right</code></td>
  </tr>
 </tbody>
</table>

<h3 id="Up-mixing_and_down-mixing" name="Up-mixing_and_down-mixing">アップミキシングとダウンミキシング</h3>

<p>入力と出力のチャンネル数が一致しない場合、以下のルールに基づいてアップミキシングまたはダウンミキシングが行われます。これは{{domxref("AudioNode.channelInterpretation")}} プロパティを <code>speakers</code> または <code>discrete</code> へとセットしてコントロールできます。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="row">説明</th>
   <th scope="col">入力チャンネル</th>
   <th scope="col">出力チャンネル</th>
   <th scope="col">ミキシングルール</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th colspan="1" rowspan="13" scope="row"><code>speakers</code></th>
   <td><code>1</code> <em>(Mono)</em></td>
   <td><code>2</code> <em>(Stereo)</em></td>
   <td><em>モノラルからステレオへのアップミックス。</em><br>
    <code>M</code>入力チャンネルは(<code>L</code> と <code>R</code> の)両出力チャンネル用に使われます。<br>
    <code>output.L = input.M<br>
    output.R = input.M</code></td>
  </tr>
  <tr>
   <td><code>1</code> <em>(Mono)</em></td>
   <td><code>4</code> <em>(Quad)</em></td>
   <td><em>モノラルからクアッドへのアップミックス。</em><br>
    <code>M</code> 入力チャンネルは(<code>L</code> と <code>R</code> の)ノンサラウンド出力チャンネル用に使われます。(<code>SL</code> と <code>SR</code> の)サラウンド出力チャンネルは無音です。<br>
    <code>output.L = input.M<br>
    output.R = input.M<br>
    output.SL = 0<br>
    output.SR = 0</code></td>
  </tr>
  <tr>
   <td><code>1</code> <em>(Mono)</em></td>
   <td><code>6</code> <em>(5.1)</em></td>
   <td><em>モノラルから 5.1.へのアップミックス。</em><br>
    <code>M</code> 入力チャンネルは(<code>C</code> の)ノン中央出力チャンネル用に使われます。その他すべての(<code>L</code>, <code>R</code>, <code>LFE</code>, <code>SL</code>, <code>SR</code>)出力チャンネルは無音です。<br>
    <code>output.L = 0<br>
    output.R = 0</code><br>
    <code>output.C = input.M<br>
    output.LFE = 0<br>
    output.SL = 0<br>
    output.SR = 0</code></td>
  </tr>
  <tr>
   <td><code>2</code> <em>(Stereo)</em></td>
   <td><code>1</code> <em>(Mono)</em></td>
   <td><em>モノラルからステレオへのダウンミックス。</em><br>
    (<code>L</code> と <code>R</code> の)両入力チャンネルは等しく結合され、単一出力チャンネル(<code>M</code>)になります。<br>
    <code>output.M = 0.5 * (input.L + input.R)</code></td>
  </tr>
  <tr>
   <td><code>2</code> <em>(Stereo)</em></td>
   <td><code>4</code> <em>(Quad)</em></td>
   <td><em>ステレオからクアッドへのアップミックス。</em><br>
    左右(<code>L</code> と <code>R</code>)入力チャンネルはそれぞれ(<code>L</code> と <code>R</code> の)ノンサラウンド出力チャンネル用に使われます。(<code>SL</code> と <code>SR</code> の)サラウンド出力チャンネルは無音です。<br>
    <code>output.L = input.L<br>
    output.R = input.R<br>
    output.SL = 0<br>
    output.SR = 0</code></td>
  </tr>
  <tr>
   <td><code>2</code> <em>(Stereo)</em></td>
   <td><code>6</code> <em>(5.1)</em></td>
   <td><em>ステレオから 5.1.へのアップミックス。</em><br>
    左右(<code>L</code> と <code>R</code>)入力チャンネルはそれぞれ(<code>L</code> と <code>R</code> の)ノンサラウンド出力チャンネル用に使われます。(<code>SL</code> と <code>SR</code> の)サラウンド出力チャンネル、中央チャンネル(<code>C</code>)、サブウーファー(<code>LFE</code>)はすべて同様に無音です。<br>
    <code>output.L = input.L<br>
    output.R = input.R<br>
    output.C = 0<br>
    output.LFE = 0<br>
    output.SL = 0<br>
    output.SR = 0</code></td>
  </tr>
  <tr>
   <td><code>4</code> <em>(Quad)</em></td>
   <td><code>1</code> <em>(Mono)</em></td>
   <td><em>クアッドからモノラルへのダウンミックス。</em><br>
    (<code>L</code>, <code>R</code>, <code>SL</code>, <code>SR</code>)入力チャンネルは等しく結合され、単一出力チャンネル(<code>M</code>)になります。<br>
    <code>output.M = 0.25 * (input.L + input.R + input.SL + input.SR)</code></td>
  </tr>
  <tr>
   <td><code>4</code> <em>(Quad)</em></td>
   <td><code>2</code> <em>(Stereo)</em></td>
   <td><em>クアッドからステレオへのダウンミックス。両左入力チャンネル</em><br>
    (<code>L</code> と <code>SL</code>)は等しく結合され、単一左出力チャンネル(<code>L</code>)になります。同様に、<em>両右入力チャンネル</em>(<code>R</code> と <code>SR</code>)は等しく結合され、単一右出力チャンネル(<code>R</code>)になります。<br>
    <code>output.L = 0.5 * (input.L + input.SL</code><code>)</code><br>
    <code>output.R = 0.5 * (input.R + input.SR</code><code>)</code></td>
  </tr>
  <tr>
   <td><code>4</code> <em>(Quad)</em></td>
   <td><code>6</code> <em>(5.1)</em></td>
   <td><em>クアッドから 5.1.へのアップミックス。</em><br>
    (<code>L</code>, <code>R</code>, <code>SL</code>, <code>SR</code>)入力チャンネルはそれぞれ(<code>L</code> と <code>R</code> の)出力チャンネル用に使われます。中央チャンネル(<code>C</code>)、サブウーファー(<code>LFE</code>)は無音です。<br>
    <code>output.L = input.L<br>
    output.R = input.R<br>
    output.C = 0<br>
    output.LFE = 0<br>
    output.SL = input.SL<br>
    output.SR = input.SR</code></td>
  </tr>
  <tr>
   <td><code>6</code> <em>(5.1)</em></td>
   <td><code>1</code> <em>(Mono)</em></td>
   <td><em>5.1.からモノラルへのダウンミックス。左チャンネル</em>(<code>L</code>, <code>SL</code>)、右チャンネル(<code>R</code>, <code>SR</code>)、中央チャンネルはそれぞれ混合されます。サラウンドチャンネルは僅かに減衰され、標準側面チャンネルは利用のために、単一チャンネルを<code>√2/2</code> で乗算したものとして出力が補強されます。サブウーファー<code>(LFE)</code>チャンネルは失われます。<br>
    <code>output.M = 0.7071 * (input.L + input.R) + input.C + 0.5 * (input.SL + input.SR)</code></td>
  </tr>
  <tr>
   <td><code>6</code> <em>(5.1)</em></td>
   <td><code>2</code> <em>(Stereo)</em></td>
   <td><em>5.1.からステレオへのダウンミックス。</em><br>
    中央チャンネルは各側面サラウンドチャンネル(<code>SL</code> と <code>SR</code>)と合算され、各側面チャンネルへ混合されます。2 チャンネルへとミックスダウンされる過程は低労力で行われ、各々の場合について、<code>√2/2</code> で乗算されます。サブウーファー (<code>LFE</code>) チャンネルは失われます。<br>
    <code>output.L = input.L + 0.7071 * (input.C + input.SL)<br>
    output.R = input.R </code><code>+ 0.7071 * (input.C + input.SR)</code></td>
  </tr>
  <tr>
   <td><code>6</code> <em>(5.1)</em></td>
   <td><code>4</code> <em>(Quad)</em></td>
   <td><em>5.1.からクアッドへのダウンミックス。</em><br>
    中央チャンネルは各側面ノンサラウンドチャンネル(<code>L</code> と <code>R</code>)と合算され、各側面チャンネルへ混合されます。2 チャンネルへとミックスダウンされる過程は低労力で行われ、各々の場合について、<code>√2/2</code> で乗算されます。サラウンドチャンネルへの伝達には変化がありません。サブウーファー (<code>LFE</code>) チャンネルは失われます。<br>
    <code>output.L = input.L + 0.7071 * input.C<br>
    output.R = input.R + 0.7071 * input.C<br>
    <code>output.SL = input.SL<br>
    output.SR = input.SR</code></code></td>
  </tr>
  <tr>
   <td colspan="2" rowspan="1">その他、非標準レイアウト</td>
   <td>非標準チャンネルレイアウトは <code>channelInterpretation</code> を <code>discrete</code> へセットしたものとして操作されます。<br>
    新たなスピーカーレイアウトの将来的な定義を、仕様書でははっきりと認めています。従ってこの予備部分は、チャンネルに用いられる特定の数字が示すブラウザーの挙動が、将来的に変更された場合のために用意されたものではありません。</td>
  </tr>
  <tr>
   <th colspan="1" rowspan="2" scope="row"><code>discrete</code></th>
   <td rowspan="1">各 (<code>x</code>)</td>
   <td rowspan="1">各 (<code>y</code>) (<code>x&lt;y</code> の場合)</td>
   <td><em>離散チャンネルのアップミックス。</em><br>
    各出力チャンネルに、それに対応する同番号の入力チャンネルによる入力をします。対応する入力チャンネルが存在しないチャンネルは無音になります。</td>
  </tr>
  <tr>
   <td rowspan="1">各 (<code>x</code>)</td>
   <td rowspan="1">各 (<code>y</code>) (<code>x&gt;y</code> の場合)</td>
   <td><em>離散チャンネルのダウンミックス。</em><br>
    各出力チャンネルに、それに対応する同番号の入力チャンネルによる入力をします。対応する出力チャンネルが存在しない入力チャンネルは無視されます。</td>
  </tr>
 </tbody>
</table>

<h2 id="Visualizations" name="Visualizations">視覚化</h2>

<p>原則、オーディオ視覚化は出力オーディオデータ(基本的にはゲインまたは周波数データ)に時間毎にアクセスすることで行われ、更にグラフなどの視覚化出力へ渡すためのグラフィカル技術が用いられます。Web Audio API は {{domxref("AnalyserNode")}} で、経由して渡されたオーディオ信号を変換せず利用することができます。ただしその出力は、{{htmlelement("canvas")}} などのような視覚化技術へ受け渡せるオーディオデータです。</p>

<p><img alt="Without modifying the audio stream, the node allows to get the frequency and time-domain data associated to it, using a FFT." src="https://mdn.mozillademos.org/files/12521/fttaudiodata_en.svg" style="height: 206px; width: 693px;"></p>

<p>以下のメソッドを利用して、データの取得が可能です。</p>

<dl>
 <dt>{{domxref("AnalyserNode.getFloatFrequencyData()")}}</dt>
 <dd>現在の周波数データを渡された {{domxref("Float32Array")}} 型配列にコピーします。</dd>
</dl>

<dl>
 <dt>{{domxref("AnalyserNode.getByteFrequencyData()")}}</dt>
 <dd>現在の周波数データを渡された {{domxref("Uint8Array")}} 型配列(符号なしバイト配列)にコピーします。</dd>
</dl>

<dl>
 <dt>{{domxref("AnalyserNode.getFloatTimeDomainData()")}}</dt>
 <dd>現在の波形データまたはタイムドメインデータを渡された{{domxref("Float32Array")}}型配列にコピーします。</dd>
 <dt>{{domxref("AnalyserNode.getByteTimeDomainData()")}}</dt>
 <dd>現在の波形データまたはタイムドメインデータを渡された{{domxref("Uint8Array")}}型配列(符号なしバイト配列)にコピーします。</dd>
</dl>

<div class="note">
<p><strong>注</strong>: より詳しい情報は、Web Audio API記事中の <a href="/ja/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API">Visualizations with Web Audio API</a> を参照してください。</p>
</div>

<h2 id="Spatialisations" name="Spatialisations">立体化</h2>

<div>
<p>(Web Audio API の {{domxref("PannerNode")}} と {{domxref("AudioListener")}} ノードによって操作される)立体音響化によって、オーディオシグナルの、空間を介した点における位置や振る舞いをモデル化することができ、その音声をリスナーが聞くことができます。</p>

<p>パンナーの位置は、直行座標の右側に描かれています。ドップラー効果を作るに必要な、速度ベクトルを用いた移動、そして方向コーンを用いた方向性があります。このコーンは、例えば無指向性音源などのため、とても大きくなり得ます。</p>
</div>

<p><img alt="The PannerNode brings a spatial position and velocity and a directionality for a given signal." src="https://mdn.mozillademos.org/files/12511/pannernode_en.svg" style="height: 340px; width: 799px;"></p>

<div>
<p>リスナーの位置は、直行座標の右側に描かれています。度ベクトルを用いた移動と、リスナーの頭がポイントされている(頭部側と顔面側の)二方向ベクターを用いた方向性があります。これらはそれぞれリスナーの頭部の頂点からの方向と、リスナーの鼻にポイントされている方向とを定義しており、これらは直角となっています。</p>
</div>

<p><img alt="We see the position, up and front vectors of an AudioListener, with the up and front vectors at 90° from the other." src="https://mdn.mozillademos.org/files/14311/WebAudioListenerReduced.png" style="display: block; margin: 0 auto;"></p>

<div class="note">
<p><strong>注</strong>: より詳しい情報は、<a href="/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics">Web audio spatialization basics</a> を参照してください。</p>
</div>

<h2 id="Fan-in_and_Fan-out" name="Fan-in_and_Fan-out">ファンインとファンアウト</h2>

<p>オーディオ用語では、<strong>fan-in</strong> は{{domxref("ChannelMergerNode")}} が一連の単一入力ソースを受け、単一マルチチャンネル信号を出力するプロセスを意味します。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/12517/fanin.svg" style="height: 258px; width: 325px;"></p>

<p><strong>Fan-out</strong> はその対となるプロセスを意味します。{{domxref("ChannelSplitterNode")}} が一つのマルチチャンネル入力源を受け、複数のモノラル出力信号を出力します。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/12515/fanout.svg" style="height: 258px; width: 325px;"></p>
