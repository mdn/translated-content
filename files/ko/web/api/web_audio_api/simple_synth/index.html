---
title: '예제와 튜토리얼: 간단한 신시사이저 키보드'
slug: Web/API/Web_Audio_API/Simple_synth
tags:
  - Audio
  - Example
  - Guide
  - Media
  - Oscillator
  - Piano
  - Synthesizer
  - Tutorial
  - Web Audio API
---
<div>{{DefaultAPISidebar("Web Audio API")}}</div>

<p>이 문서는 마우스를 사용해 플레이할 수 있는 비디오 키보드의 데모와 코드를 보여줍니다. 이 키보드는 표준 파형들과 사용자 정의 파형 중에서 선택할 수 있는 기능을 제공하고, 키보드 아래에 있는 볼륨 슬라이더를 사용하여 메인 gain을 제어할 수 있습니다. 이 예제는 다음의 Web API 인터페이스를 사용합니다: {{domxref("AudioContext")}}, {{domxref("OscillatorNode")}}, {{domxref("PeriodicWave")}}, 그리고 {{domxref("GainNode")}}.</p>

<p>{{domxref("OscillatorNode")}}가 {{domxref("AudioScheduledSourceNode")}}에 기반하기 때문에, 이것은 또한 얼마간 그것에 대한 예제이기도 합니다.</p>

<h2 id="The_video_keyboard">비디오 키보드</h2>

<h3 id="HTML">HTML</h3>

<p>이 가상 키보드의 디스플레이에는 세 가지 주요한 컴포넌트가 있습니다. 첫번째는 뮤지컬 키보드 그 자체입니다. 우리는 이것을 중첩된 {{HTMLElement("div")}} 요소의 쌍으로 그려 만약 모든 건반이 화면에 맞지 않으면 그것들이 줄바꿈되는 일 없이 키보드를 가로로 스크롤할 수 있게 되도록 만들 것입니다.</p>

<h4 id="The_keyboard">키보드</h4>

<p>첫째로, 키보드를 넣을 공간을 만듭니다. 우리는 프로그래밍적으로 키보드를 구성할 것인데, 왜냐하면 그렇게 하는 것은 우리에게 해당하는 음에 대한 적절한 데이터를 결정하면서 각각의 건반을 설정하는 유연성을 주기 때문입니다. 우리의 경우, 우리는 표로부터 각 음의 주파수를 얻지만, 이것은 또한 알고리즘적으로도 계산될 수 있습니다.</p>

<pre class="brush: html">&lt;div class="container"&gt;
  &lt;div class="keyboard"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

<p><code>"container"</code>라는 이름의 {{HTMLElement("div")}}는 만약 이것이 이용 가능한 공간에 대해 너무 넓으면 가로로 스크롤될 수 있는 박스입니다. 건반들 자체는 <code>"keyboard"</code> 클래스의 블록 안으로 삽입될 것입니다.</p>

<h4 id="The_settings_bar">설정 바</h4>

<p>키보드 아래에, 우리는 레이어를 설정하기 위한 조종 장치를 놓을 것입니다. 우선은, 우리는 두 조종 장치를 가지고 있습니다: 하나는 메인 볼륨을 설정하기 위한 것이고 나머지 하나는 노트를 생성할 때 어떤 주기적인 파형을 사용할 지 고르기 위한 것입니다.</p>

<h5 id="The_volume_control">볼륨 컨트롤</h5>

<p>첫째로 우리는 필요한 대로 스타일될 수 있도록, 설정 바를 포함하는 <code>&lt;div&gt;</code>를 생성합니다. 그리고 나서 바의 좌측에 나타날 박스를 생성하고 라벨과 <code>"range"</code> 유형의 {{HTMLElement("input")}} 요소를 배치합니다. range 요소는 보통 슬라이더로 표현됩니다; 각 위치마다 0.01만큼 움직이며 0.0과 1.0 사이의 모든 값을 허용하게 설정합니다.</p>

<pre class="brush: html">&lt;div class="settingsBar"&gt;
  &lt;div class="left"&gt;
    &lt;span&gt;Volume: &lt;/span&gt;
    &lt;input type="range" min="0.0" max="1.0" step="0.01"
        value="0.5" list="volumes" name="volume"&gt;
    &lt;datalist id="volumes"&gt;
      &lt;option value="0.0" label="Mute"&gt;
      &lt;option value="1.0" label="100%"&gt;
    &lt;/datalist&gt;
  &lt;/div&gt;
</pre>

<p>우리는 기본값을 0.5로 명시하고, ID가 맞는 옵션 목록을 찾기 위해 {{htmlattrxref("name")}} 특성을 사용하여 range에 연결된 {{HTMLElement("datalist")}} 요소를 제공합니다; 이 경우, 데이터셋은 <code>"volume"</code>이라는 이름입니다. 이는 우리로 하여금 브라우저가 옵션적으로 어떤 방식으로 디스플레이하기를 선택할지도 모르는 특별한 문자열과 일반적인 값의 집합을 제공하게 합니다; 우리는 값 0.0 ("무음")과 1.0 ("100%")에 대해 이름을 제공합니다.</p>

<h5 id="The_waveform_picker">파형 선택기</h5>

<p>세팅 바의 우측에, 우리는 라벨과 이용 가능한 파형에 부합하는 옵션을 가지고 있는 <code>"waveform"</code>라는 이름의 {{HTMLElement("select")}} 요소를 배치합니다.</p>

<pre class="brush: html">  &lt;div class="right"&gt;
    &lt;span&gt;Current waveform: &lt;/span&gt;
    &lt;select name="waveform"&gt;
      &lt;option value="sine"&gt;Sine&lt;/option&gt;
      &lt;option value="square" selected&gt;Square&lt;/option&gt;
      &lt;option value="sawtooth"&gt;Sawtooth&lt;/option&gt;
      &lt;option value="triangle"&gt;Triangle&lt;/option&gt;
      &lt;option value="custom"&gt;Custom&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>

<div class="hidden">
<h3 id="CSS">CSS</h3>

<pre class="brush: css">.container {
  overflow-x: scroll;
  overflow-y: hidden;
  width: 660px;
  height: 110px;
  white-space: nowrap;
  margin: 10px;
}

.keyboard {
  width: auto;
  padding: 0;
  margin: 0;
}

.key {
  cursor: pointer;
  font: 16px "Open Sans", "Lucida Grande", "Arial", sans-serif;
  border: 1px solid black;
  border-radius: 5px;
  width: 20px;
  height: 80px;
  text-align: center;
  box-shadow: 2px 2px darkgray;
  display: inline-block;
  position: relative;
  margin-right: 3px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.key div {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  pointer-events: none;
}

.key div sub {
  font-size: 10px;
  pointer-events: none;
}

.key:hover {
  background-color: #eef;
}

.key:active {
  background-color: #000;
  color: #fff;
}

.octave {
  display: inline-block;
  padding: 0 6px 0 0;
}

.settingsBar {
  padding-top: 8px;
  font: 14px "Open Sans", "Lucida Grande", "Arial", sans-serif;
  position: relative;
  vertical-align: middle;
  width: 100%;
  height: 30px;
}

.left {
  width: 50%;
  position: absolute;
  left: 0;
  display: table-cell;
  vertical-align: middle;
}

.left span, .left input {
  vertical-align: middle;
}

.right {
  width: 50%;
  position: absolute;
  right: 0;
  display: table-cell;
  vertical-align: middle;
}

.right span {
  vertical-align: middle;
}

.right input {
  vertical-align: baseline;
}</pre>
</div>

<h3 id="JavaScript">JavaScript</h3>

<p>JavaScript 코드는 몇 개의 변수를 초기화함으로써 시작합니다.</p>

<pre class="brush: js">let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let oscList = [];
let mainGainNode = null;
</pre>

<ol>
 <li><code>audioContext</code>는 전역 {{domxref("AudioContext")}} 객체를 (또는 필요하다면 <code>webkitAudioContext</code>를) 참조하기 위해 설정되었습니다.</li>
 <li><code>oscList</code>는 현재 재생되고 있는 모든 oscillator를 포함할 준비가 되기 위해 설정되었습니다. 이것은 빈 상태로 시작하는데, 왜냐하면 아직 어떤 것도 재생되고 있지 않기 때문입니다.</li>
 <li><code>mainGainNode</code>은 null로 설정되었습니다; 설정 과정 중에, 이것은 재생되는 모든 oscillator가 연결되고 슬라이더를 사용해 전체 볼륨이 제어되도록 하는 {{domxref("GainNode")}}를 포함하도록 설정될 것입니다.</li>
</ol>

<pre class="brush: js">let keyboard = document.querySelector(".keyboard");
let wavePicker = document.querySelector("select[name='waveform']");
let volumeControl = document.querySelector("input[name='volume']");
</pre>

<p>접근이 필요한 요소들에의 참조는 위와 같이 얻어집니다:</p>

<ul>
 <li><code>keyboard</code>는 건반이 배치될 컨테이너입니다.</li>
 <li><code>wavePicker</code>는 음에 대해 사용할 파형을 선택하는 데 사용되는 {{HTMLElement("select")}} 요소입니다.</li>
 <li><code>volumeControl</code>는 메인 오디오 볼륨을 제어하기 위해 사용되는 (<code>"range"</code> 유형의) {{HTMLElement("input")}} 요소입니다.</li>
</ul>

<pre class="brush: js">let noteFreq = null;
let customWaveform = null;
let sineTerms = null;
let cosineTerms = null;
</pre>

<p>마지막으로, 파형을 생성할 때 사용될 전역 변수들이 생성됩니다:</p>

<ul>
 <li><code>noteFreq</code>는 배열들의 배열입니다; 각 배열은 하나의 옥타브를 나타내는데, 그 옥타브에 있는 각 음에 대한 항목을 포함합니다. 각각에 대한 값은 음의 음색을 나타내는 헤르츠로 표현되는 주파수입니다.</li>
 <li><code>customWaveform</code>는 사용자가 "Custom"을 파형 선택기에서 선택했을 때 사용할 파형을 기술하는 {{domxref("PeriodicWave")}}로 설정될 것입니다.</li>
 <li><code>sineTerms</code> 와 <code>cosineTerms</code>는 파형을 생성하기 위한 데이터를 저장하기 위해 사용될 것입니다; 각각은 사용자가 "Custom"을 선택했을 때 생성되는 배열을 포함할 것입니다.</li>
</ul>

<h3 id="Creating_the_note_table">음 테이블 생성하기</h3>

<p><code>createNoteTable()</code> 함수는 각 옥타브를 나타내는 객체의 배열을 포함하는 <code>noteFreq</code> 배열을 만듭니다. 차례로 각 옥타브는 그 옥타브에 있는 각 음에 대한 하나의 지정된 속성을 가집니다; 그 속성의 이름은 음의 이름입니다 (예를 들자면 C-sharp는 "C#"로 표현됩니다), 그리고 값은 헤르츠로 표현되는 그 음의 주파수입니다.</p>

<pre class="brush: js">function createNoteTable() {
  let noteFreq = [];
  for (let i=0; i&lt; 9; i++) {
    noteFreq[i] = [];
  }

  noteFreq[0]["A"] = 27.500000000000000;
  noteFreq[0]["A#"] = 29.135235094880619;
  noteFreq[0]["B"] = 30.867706328507756;

  noteFreq[1]["C"] = 32.703195662574829;
  noteFreq[1]["C#"] = 34.647828872109012;
  noteFreq[1]["D"] = 36.708095989675945;
  noteFreq[1]["D#"] = 38.890872965260113;
  noteFreq[1]["E"] = 41.203444614108741;
  noteFreq[1]["F"] = 43.653528929125485;
  noteFreq[1]["F#"] = 46.249302838954299;
  noteFreq[1]["G"] = 48.999429497718661;
  noteFreq[1]["G#"] = 51.913087197493142;
  noteFreq[1]["A"] = 55.000000000000000;
  noteFreq[1]["A#"] = 58.270470189761239;
  noteFreq[1]["B"] = 61.735412657015513;
</pre>

<p>... 간결성을 위해 몇몇 옥타브는 생략되었습니다 ...</p>

<div class="hidden">
<pre class="brush: js">  noteFreq[2]["C"] = 65.406391325149658;
  noteFreq[2]["C#"] = 69.295657744218024;
  noteFreq[2]["D"] = 73.416191979351890;
  noteFreq[2]["D#"] = 77.781745930520227;
  noteFreq[2]["E"] = 82.406889228217482;
  noteFreq[2]["F"] = 87.307057858250971;
  noteFreq[2]["F#"] = 92.498605677908599;
  noteFreq[2]["G"] = 97.998858995437323;
  noteFreq[2]["G#"] = 103.826174394986284;
  noteFreq[2]["A"] = 110.000000000000000;
  noteFreq[2]["A#"] = 116.540940379522479;
  noteFreq[2]["B"] = 123.470825314031027;

  noteFreq[3]["C"] = 130.812782650299317;
  noteFreq[3]["C#"] = 138.591315488436048;
  noteFreq[3]["D"] = 146.832383958703780;
  noteFreq[3]["D#"] = 155.563491861040455;
  noteFreq[3]["E"] = 164.813778456434964;
  noteFreq[3]["F"] = 174.614115716501942;
  noteFreq[3]["F#"] = 184.997211355817199;
  noteFreq[3]["G"] = 195.997717990874647;
  noteFreq[3]["G#"] = 207.652348789972569;
  noteFreq[3]["A"] = 220.000000000000000;
  noteFreq[3]["A#"] = 233.081880759044958;
  noteFreq[3]["B"] = 246.941650628062055;

  noteFreq[4]["C"] = 261.625565300598634;
  noteFreq[4]["C#"] = 277.182630976872096;
  noteFreq[4]["D"] = 293.664767917407560;
  noteFreq[4]["D#"] = 311.126983722080910;
  noteFreq[4]["E"] = 329.627556912869929;
  noteFreq[4]["F"] = 349.228231433003884;
  noteFreq[4]["F#"] = 369.994422711634398;
  noteFreq[4]["G"] = 391.995435981749294;
  noteFreq[4]["G#"] = 415.304697579945138;
  noteFreq[4]["A"] = 440.000000000000000;
  noteFreq[4]["A#"] = 466.163761518089916;
  noteFreq[4]["B"] = 493.883301256124111;

  noteFreq[5]["C"] = 523.251130601197269;
  noteFreq[5]["C#"] = 554.365261953744192;
  noteFreq[5]["D"] = 587.329535834815120;
  noteFreq[5]["D#"] = 622.253967444161821;
  noteFreq[5]["E"] = 659.255113825739859;
  noteFreq[5]["F"] = 698.456462866007768;
  noteFreq[5]["F#"] = 739.988845423268797;
  noteFreq[5]["G"] = 783.990871963498588;
  noteFreq[5]["G#"] = 830.609395159890277;
  noteFreq[5]["A"] = 880.000000000000000;
  noteFreq[5]["A#"] = 932.327523036179832;
  noteFreq[5]["B"] = 987.766602512248223;

  noteFreq[6]["C"] = 1046.502261202394538;
  noteFreq[6]["C#"] = 1108.730523907488384;
  noteFreq[6]["D"] = 1174.659071669630241;
  noteFreq[6]["D#"] = 1244.507934888323642;
  noteFreq[6]["E"] = 1318.510227651479718;
  noteFreq[6]["F"] = 1396.912925732015537;
  noteFreq[6]["F#"] = 1479.977690846537595;
  noteFreq[6]["G"] = 1567.981743926997176;
  noteFreq[6]["G#"] = 1661.218790319780554;
  noteFreq[6]["A"] = 1760.000000000000000;
  noteFreq[6]["A#"] = 1864.655046072359665;
  noteFreq[6]["B"] = 1975.533205024496447;
</pre>
</div>

<pre class="brush: js">  noteFreq[7]["C"] = 2093.004522404789077;
  noteFreq[7]["C#"] = 2217.461047814976769;
  noteFreq[7]["D"] = 2349.318143339260482;
  noteFreq[7]["D#"] = 2489.015869776647285;
  noteFreq[7]["E"] = 2637.020455302959437;
  noteFreq[7]["F"] = 2793.825851464031075;
  noteFreq[7]["F#"] = 2959.955381693075191;
  noteFreq[7]["G"] = 3135.963487853994352;
  noteFreq[7]["G#"] = 3322.437580639561108;
  noteFreq[7]["A"] = 3520.000000000000000;
  noteFreq[7]["A#"] = 3729.310092144719331;
  noteFreq[7]["B"] = 3951.066410048992894;

  noteFreq[8]["C"] = 4186.009044809578154;
  return noteFreq;
}
</pre>

<p>결과는 <code>noteFreq</code> 배열인데, 이는 각 옥타브에 대한 객체를 가지고 있습니다. 각 옥타브 객체는 속성 이름이 음의 이름이고 (예를 들자면 C-sharp는 "C#"로 표현됩니다) 속성의 값은 헤르츠로 표현되는 음의 주파수인 지정된 속성들을 가지고 있습니다. 부분적으로는, 결과 객체는 다음과 같이 보입니다:</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">옥타브</th>
   <td colspan="8">음</td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <th scope="row">0</th>
   <td>"A" ⇒ 27.5</td>
   <td>"A#" ⇒ 29.14</td>
   <td>"B" ⇒ 30.87</td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <th scope="row">1</th>
   <td>"C" ⇒ 32.70</td>
   <td>"C#" ⇒ 34.65</td>
   <td>"D" ⇒ 36.71</td>
   <td>"D#" ⇒ 38.89</td>
   <td>"E" ⇒ 41.20</td>
   <td>"F" ⇒ 43.65</td>
   <td>"F#" ⇒ 46.25</td>
   <td>"G" ⇒ 49</td>
   <td>"G#" ⇒ 51.9</td>
   <td>"A" ⇒ 55</td>
   <td>"A#" ⇒ 58.27</td>
   <td>"B" ⇒ 61.74</td>
  </tr>
  <tr>
   <th scope="row">2</th>
   <td colspan="12">. . .</td>
  </tr>
 </tbody>
</table>

<p>준비된 이 표를 가지고, 우리는 특정한 옥타브에 있는 주어진 음에 대한 주파수를 꽤 쉽게 찾을 수 있습니다. 만약 우리가 옥타브 1의 G# 음의 주파수를 원한다면, 우리는 <code>noteFreq[1]["G#"]</code>을 사용하여 결과로 51.9의 값을 얻습니다.</p>

<div class="note">
<p>위의 예시 표의 값들은 소숫점 둘째 자리까지 반올림되었습니다.</p>
</div>

<div class="hidden">
<p>This polyfill stands in when <code>Object.entries()</code> doesn't exist.</p>

<pre class="brush: js">if (!Object.entries) {
    Object.entries = function entries(O) {
        return reduce(keys(O), (e, k) =&gt; concat(e, typeof k === 'string' &amp;&amp; isEnumerable(O, k) ? [[k, O[k]]] : []), []);
    };
}
</pre>
</div>

<h3 id="Building_the_keyboard">키보드 만들기</h3>

<p><code>setup()</code> 함수의 역할은 키보드를 만들고 앱이 음악을 재생하도록 준비하는 것입니다.</p>

<pre class="brush: js">function setup() {
  noteFreq = createNoteTable();

  volumeControl.addEventListener("change", changeVolume, false);

  mainGainNode = audioContext.createGain();
  mainGainNode.connect(audioContext.destination);
  mainGainNode.gain.value = volumeControl.value;

  // Create the keys; skip any that are sharp or flat; for
  // our purposes we don't need them. Each octave is inserted
  // into a &lt;div&gt; of class "octave".

  noteFreq.forEach(function(keys, idx) {
    let keyList = Object.entries(keys);
    let octaveElem = document.createElement("div");
    octaveElem.className = "octave";

    keyList.forEach(function(key) {
      if (key[0].length == 1) {
        octaveElem.appendChild(createKey(key[0], idx, key[1]));
      }
    });

    keyboard.appendChild(octaveElem);
  });

  document.querySelector("div[data-note='B'][data-octave='5']").scrollIntoView(false);

  sineTerms = new Float32Array([0, 0, 1, 0, 1]);
  cosineTerms = new Float32Array(sineTerms.length);
  customWaveform = audioContext.createPeriodicWave(cosineTerms, sineTerms);

  for (i=0; i&lt;9; i++) {
      oscList[i] = {};
  }
}

setup();</pre>

<ol>
 <li>음의 이름과 옥타브를 주파수에 대응(map)시키는 표는 <code>createNoteTable()</code>를 호출함으로써 생성됩니다.</li>
 <li>메인 gain 제어에서 {{event("change")}} 이벤트를 다루기 위해 {{domxref("EventTarget.addEventListener", "addEventListener()")}}를 호출함으로써 이벤트 핸들러가 생성되었습니다. 이것은 메인 gain 노드의 음량을 제어의 새 값으로 업데이트 합니다.</li>
 <li>다음으로, 음 주파수 표에 있는 각 옥타브에 대해 순회합니다. 각 옥타브에 대해, 우리는 그 옥타브에 있는 음들의 목록을 얻기 위해 {{jsxref("Object.entries()")}}를 사용합니다.</li>
 <li>그 옥타브의 음들을 포함하는 {{HTMLElement("div")}}를 생성하고 (이렇게 함으로써 우리는 옥타브들 사이에 약간의 공간을 가질 수 있습니다), 이것의 클래스명을 "octave"로 설정합니다.</li>
 <li>옥타브에 있는 각 건반에 대해, 우리는 음의 이름이 한 문자보다 많은지 검사합니다. 우리는 이것을 생략하는데, 왜냐하면 우리는 이 예제에서 샤프(#) 음들을 무시하기 때문입니다. 만약 음의 이름이 단지 한 문자라면, 우리는 <code>createKey()</code>를 호출하는데, 이는 음의 문자열, 옥타브, 그리고 주파수를 명시합니다. 이 반환된 요소는 단계 4에서 생성된 옥타브 요소에 추가됩니다.</li>
 <li>각 옥타브 요소가 생성되었을 때, 키보드에 추가됩니다.</li>
 <li>키보드가 생성되고 나면, 옥타브 5의 "B" 음이 보이도록 스크롤합니다; 이것은 주변 건반들을 따라 중앙 '다' 음이 보이도록 하는 효과를 가지고 있습니다.</li>
 <li>그리고 나서 새로운 사용자 정의 파형이 {{domxref("AudioContext.createPeriodicWave()")}}를 사용하여 생성됩니다. 이 파형은 언제든지 사용자가 파형 선택기에서 "Custom"을 선택했을 때 사용될 것입니다.</li>
 <li>마지막으로, oscillator 목록이 어떤 oscillator가 어떤 건반과 연관되어 있는지를 식별하는 정보를 받기 위한 준비가 되었다는 것을 보장하도록 초기화됩니다.</li>
</ol>

<h4 id="Creating_a_key">건반 생성하기</h4>

<p><code>createKey()</code> 함수는 가상 키보드에 표시하기를 원하는 각각의 건반에 대해 한 번 호출됩니다. 이것은 건반과 건반의 라벨으로 구성되는 요소를 생성하고, 추후의 사용을 위해 그 요소에 데이터 특성을 추가하고, 그리고 우리가 관심을 가지고 있는 이벤트에 대한 이벤트 핸들러를 부여합니다.</p>

<pre class="brush: js">function createKey(note, octave, freq) {
  let keyElement = document.createElement("div");
  let labelElement = document.createElement("div");

  keyElement.className = "key";
  keyElement.dataset["octave"] = octave;
  keyElement.dataset["note"] = note;
  keyElement.dataset["frequency"] = freq;

  labelElement.innerHTML = note + "&lt;sub&gt;" + octave + "&lt;/sub&gt;";
  keyElement.appendChild(labelElement);

  keyElement.addEventListener("mousedown", notePressed, false);
  keyElement.addEventListener("mouseup", noteReleased, false);
  keyElement.addEventListener("mouseover", notePressed, false);
  keyElement.addEventListener("mouseleave", noteReleased, false);

  return keyElement;
}
</pre>

<p>건반과 건반의 라벨을 표현할 요소를 생성한 이후, 건반의 클래스를 (외양을 설정하는) "key"로 설정함으로써 건반의 요소를 설정합니다. 그리고 나서 건반의 옥타브(<code>data-octave</code> 특성), 재생할 음을 표현하는 문자열(<code>data-note</code> 특성), 헤르츠로 표현되는 주파수(<code>data-frequency</code> 특성)를 포함하는 {{htmlattrxref("data-*")}} 특성을 추가합니다. 이것은 우리로 하여금 이벤트를 다룰 때 필요한 경우 쉽게 이 정보를 가져올 수 있도록 할 것입니다.</p>

<h3 id="Making_music">음악 만들기</h3>

<h4 id="Playing_a_tone">음 재생하기</h4>

<p><code>playTone()</code> 함수의 역할은 주어진 주파수의 음을 재생하는 것입니다. 이것은 적절한 음을 재생하는 키보드 건반의 이벤트 핸들러에 의해 사용될 것입니다.</p>

<pre class="brush: js">function playTone(freq) {
  let osc = audioContext.createOscillator();
  osc.connect(mainGainNode);

  let type = wavePicker.options[wavePicker.selectedIndex].value;

  if (type == "custom") {
    osc.setPeriodicWave(customWaveform);
  } else {
    osc.type = type;
  }

  osc.frequency.value = freq;
  osc.start();

  return osc;
}
</pre>

<p><code>playTone()</code>은 {{domxref("AudioContext.createOscillator()")}} 메서드를 호출하여 새로운 {{domxref("OscillatorNode")}}를 생성함으로써 시작합니다. 그리고 나서 우리는 이것을 메인 gain 노드에 새로운 oscillator의 {{domxref("OscillatorNode.connect()")}} 메서드를 호출함으로써 연결하는데, 이는 oscillator에게 이것의 결과를 어디로 보낼지 알려줍니다. 이렇게 함으로써, 메인 gain 노드의 gain을 변경하는 것은 생성되는 모든 음의 볼륨에 영향을 미칠 것입니다.</p>

<p>그리고 나서 우리는 사용할 파형의 유형을 세팅 바의 파형 선택기의 값을 검사함으로써 얻습니다. 만약 사용자가 이것을 <code>"custom"</code>으로 설정했다면, 우리는 사용자 정의 파형을 사용할 oscillator를 설정하기 위하여 {{domxref("OscillatorNode.setPeriodicWave()")}}를 호출합니다. 이를 하는 것은 자동적으로 oscillator의 {{domxref("OscillatorNode.type", "type")}}을 <code>custom</code>으로 설정합니다. 만약 파형 선택기에서 다른 파형이 선택되었다면, 우리는 oscillator의 유형을 선택기의 값으로 설정합니다; 그 값은 <code>sine</code>, <code>square</code>, <code>triangle</code>, 그리고 <code>sawtooth</code> 중 하나일 것입니다.</p>

<p>oscillator의 주파수는 {{domxref("Oscillator.frequency")}} {{domxref("AudioParam")}} 객체의 값을 설정함으로써 <code>freq</code> 파라미터에 명시된 값으로 설정됩니다. 그리고서, 마침내, oscillator는 상속된 {{domxref("AudioScheduledSourceNode.start()")}} 메서드를 호출하여 소리를 생성하도록 시작됩니다.</p>

<h4 id="Playing_a_tone_2">음 재생하기</h4>

<p>{{event("mousedown")}} 이나 {{domxref("mouseover")}} 이벤트가 건반에서 발생했을 때, 우리는 대응하는 음을 재생하기를 원합니다. <code>notePressed()</code> 함수는 이 이벤트들에 대한 이벤트 핸들러로 사용됩니다.</p>

<pre class="brush: js">function notePressed(event) {
  if (event.buttons &amp; 1) {
    let dataset = event.target.dataset;

    if (!dataset["pressed"]) {
      let octave = +dataset["octave"];
      oscList[octave][dataset["note"]] = playTone(dataset["frequency"]);
      dataset["pressed"] = "yes";
    }
  }
}
</pre>

<p>두 가지 이유로, 우리는 주요 마우스 버튼이 눌러졌는지를 확인함으로써 시작합니다. 첫째로, 우리는 오직 주요 마우스 버튼이 노트 재생을 할 수 있게 허용하기를 원합니다. 둘째로, 그리고 더욱 중요하게, 우리는 유저가 음에서 음으로 드래그하는 경우에 대해 {{event("mouseover")}}를 다루기 위해 이것을 사용하고, 우리는 오직 마우스가 요소에 들어왔을 때 눌러졌다면 노트를 재생하기를 원합니다.</p>

<p>만약 마우스 버튼이 실제로 눌러졌다면, 우리는 눌러진 건반의 {{htmlattrxref("dataset")}} 특성을 얻습니다; 이는 요소의 사용자 정의 데이터 특성에 접근하는 것을 쉽게 해 줍니다. 우리는 <code>data-pressed</code> 특성을 찾습니다; 만약 (음이 이미 재생되고 있지 않다는 것을 나타내는) 그것이 없다면, 요소의 <code>data-frequency</code> 특성 값을 전달하며, 우리는 음을 재생하기 위해 <code>playTone()</code>을 호출합니다. 반환된 oscillator는 <code>oscList</code>에 미래의 참조를 위해 저장되고, <code>data-pressed</code>는 음이 재생되고 있다는 것을 나타내기 위해 <code>yes</code>로 설정되어 다음 번에 이것이 호출되었을 때 이것을 다시 시작하지 않습니다.</p>

<h4 id="Stopping_a_tone">음 멈추기</h4>

<p><code>noteReleased()</code> 함수는 사용자가 마우스 버튼을 떼거나 마우스를 현재 재생되고 있는 건반 밖으로 이동시켰을 때 호출되는 이벤트 핸들러입니다.</p>

<pre class="brush: js">function noteReleased(event) {
  let dataset = event.target.dataset;

  if (dataset &amp;&amp; dataset["pressed"]) {
    let octave = +dataset["octave"];
    oscList[octave][dataset["note"]].stop();
    delete oscList[octave][dataset["note"]];
    delete dataset["pressed"];
  }
}
</pre>

<p><code>noteReleased()</code>는 사용자 정의 <code>data-octave</code>와 <code>data-note</code> 특성을 건반의 oscillator를 찾아보기 위해 사용하고, 그리고 나서 음 재생을 멈추기 위해 oscillator의 상속된 {{domxref("AudioScheduledSourceNode.stop", "stop()")}} 메서드를 호출합니다. 마지막으로, 음이 현재 재생되고 있지 않다는 것을 나타내기 위해, 음에 대한 <code>oscList</code> 항목은 지워지고 <code>data-pressed</code> 특성은 ({{domxref("event.target")}}에 의해 식별된) 건반 요소로부터 제거됩니다.</p>

<h4 id="main">메인 볼륨 변경하기</h4>

<p>세팅 바의 볼륨 슬라이더는 메인 gain 노드의 gain 값을 변경하기 위한 간단한 인터페이스를 제공하는데, 이로써 재생되는 모든 음의 세기를 변경합니다. <code>changeVolume()</code> 메서드는 슬라이더의 {{event("change")}} 이벤트에 대한 핸들러입니다.</p>

<pre class="brush: js">function changeVolume(event) {
  mainGainNode.gain.value = volumeControl.value
}
</pre>

<p>이것은 메인 gain 노드의 <code>gain</code> {{domxref("AudioParam")}}의 값을 슬라이더의 새로운 값으로 설정합니다.</p>

<h3 id="Result">결과</h3>

<p>이를 모두 합하면, 결과는 간단하지만 작동하는 마우스로 이용 가능한 뮤지컬 키보드입니다.</p>

<p>{{ EmbedLiveSample('The_video_keyboard', 680, 200) }}</p>

<h2 id="See_also">같이 보기</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Audio_API">Web Audio API</a></li>
 <li>{{domxref("OscillatorNode")}}</li>
 <li>{{domxref("GainNode")}}</li>
 <li>{{domxref("AudioContext")}}</li>
</ul>
