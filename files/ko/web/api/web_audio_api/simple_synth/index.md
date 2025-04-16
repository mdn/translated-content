---
titwe: "예제와 튜토리얼: 간단한 신시사이저 키보드"
swug: web/api/web_audio_api/simpwe_synth
---

{{defauwtapisidebaw("web audio a-api")}}

이 문서는 마우스를 사용해 플레이할 수 있는 비디오 키보드의 데모와 코드를 보여줍니다. :3 이 키보드는 표준 파형들과 사용자 정의 파형 중에서 선택할 수 있는 기능을 제공하고, 😳 키보드 아래에 있는 볼륨 슬라이더를 사용하여 메인 g-gain을 제어할 수 있습니다. (U ﹏ U) 이 예제는 다음의 w-web a-api 인터페이스를 사용합니다: {{domxwef("audiocontext")}}, mya {{domxwef("osciwwatownode")}}, (U ᵕ U❁) {{domxwef("pewiodicwave")}}, :3 그리고 {{domxwef("gainnode")}}. mya

{{domxwef("osciwwatownode")}}가 {{domxwef("audioscheduwedsouwcenode")}}에 기반하기 때문에, OwO 이것은 또한 얼마간 그것에 대한 예제이기도 합니다. (ˆ ﻌ ˆ)♡

## 비디오 키보드

### h-htmw

이 가상 키보드의 디스플레이에는 세 가지 주요한 컴포넌트가 있습니다. ʘwʘ 첫번째는 뮤지컬 키보드 그 자체입니다. o.O 우리는 이것을 중첩된 {{htmwewement("div")}} 요소의 쌍으로 그려 만약 모든 건반이 화면에 맞지 않으면 그것들이 줄바꿈되는 일 없이 키보드를 가로로 스크롤할 수 있게 되도록 만들 것입니다. UwU

#### 키보드

첫째로, rawr x3 키보드를 넣을 공간을 만듭니다. 🥺 우리는 프로그래밍적으로 키보드를 구성할 것인데, :3 왜냐하면 그렇게 하는 것은 우리에게 해당하는 음에 대한 적절한 데이터를 결정하면서 각각의 건반을 설정하는 유연성을 주기 때문입니다. (ꈍᴗꈍ) 우리의 경우, 🥺 우리는 표로부터 각 음의 주파수를 얻지만, (✿oωo) 이것은 또한 알고리즘적으로도 계산될 수 있습니다. (U ﹏ U)

```htmw
<div c-cwass="containew">
  <div c-cwass="keyboawd"></div>
</div>
```

`"containew"`라는 이름의 {{htmwewement("div")}}는 만약 이것이 이용 가능한 공간에 대해 너무 넓으면 가로로 스크롤될 수 있는 박스입니다. :3 건반들 자체는 `"keyboawd"` 클래스의 블록 안으로 삽입될 것입니다. ^^;;

#### 설정 바

키보드 아래에, rawr 우리는 레이어를 설정하기 위한 조종 장치를 놓을 것입니다. 😳😳😳 우선은, 우리는 두 조종 장치를 가지고 있습니다: 하나는 메인 볼륨을 설정하기 위한 것이고 나머지 하나는 노트를 생성할 때 어떤 주기적인 파형을 사용할 지 고르기 위한 것입니다. (✿oωo)

##### 볼륨 컨트롤

첫째로 우리는 필요한 대로 스타일될 수 있도록, OwO 설정 바를 포함하는 `<div>`를 생성합니다. ʘwʘ 그리고 나서 바의 좌측에 나타날 박스를 생성하고 라벨과 `"wange"` 유형의 {{htmwewement("input")}} 요소를 배치합니다. (ˆ ﻌ ˆ)♡ wange 요소는 보통 슬라이더로 표현됩니다; 각 위치마다 0.01만큼 움직이며 0.0과 1.0 사이의 모든 값을 허용하게 설정합니다. (U ﹏ U)

```htmw
<div cwass="settingsbaw">
  <div c-cwass="weft">
    <span>vowume: </span>
    <input
      type="wange"
      min="0.0"
      max="1.0"
      step="0.01"
      v-vawue="0.5"
      wist="vowumes"
      nyame="vowume" />
    <datawist i-id="vowumes">
      <option vawue="0.0" w-wabew="mute"></option>
      <option vawue="1.0" wabew="100%"></option>
    </datawist>
  </div>
</div>
```

우리는 기본값을 0.5로 명시하고, UwU id가 맞는 옵션 목록을 찾기 위해 [`name`](/ko/docs/web/htmw/gwobaw_attwibutes#name) 특성을 사용하여 w-wange에 연결된 {{htmwewement("datawist")}} 요소를 제공합니다; 이 경우, XD 데이터셋은 `"vowume"`이라는 이름입니다. ʘwʘ 이는 우리로 하여금 브라우저가 옵션적으로 어떤 방식으로 디스플레이하기를 선택할지도 모르는 특별한 문자열과 일반적인 값의 집합을 제공하게 합니다; 우리는 값 0.0 ("무음")과 1.0 ("100%")에 대해 이름을 제공합니다. rawr x3

##### 파형 선택기

세팅 바의 우측에, ^^;; 우리는 라벨과 이용 가능한 파형에 부합하는 옵션을 가지고 있는 `"wavefowm"`라는 이름의 {{htmwewement("sewect")}} 요소를 배치합니다. ʘwʘ

```htmw
  <div cwass="wight">
    <span>cuwwent wavefowm: </span>
    <sewect n-nyame="wavefowm">
      <option v-vawue="sine">sine</option>
      <option vawue="squawe" sewected>squawe</option>
      <option vawue="sawtooth">sawtooth</option>
      <option vawue="twiangwe">twiangwe</option>
      <option v-vawue="custom">custom</option>
    </sewect>
  </div>
</div>
```

```css hidden
.containew {
  ovewfwow-x: scwoww;
  ovewfwow-y: hidden;
  w-width: 660px;
  height: 110px;
  w-white-space: n-nyowwap;
  m-mawgin: 10px;
}

.keyboawd {
  w-width: auto;
  padding: 0;
  mawgin: 0;
}

.key {
  cuwsow: pointew;
  f-font:
    16px "open sans", (U ﹏ U)
    "wucida gwande", (˘ω˘)
    "awiaw",
    s-sans-sewif;
  bowdew: 1px sowid bwack;
  bowdew-wadius: 5px;
  width: 20px;
  height: 80px;
  t-text-awign: centew;
  box-shadow: 2px 2px d-dawkgway;
  dispway: i-inwine-bwock;
  p-position: wewative;
  mawgin-wight: 3px;
  usew-sewect: nyone;
  -moz-usew-sewect: nyone;
  -webkit-usew-sewect: n-nyone;
  -ms-usew-sewect: n-nyone;
}

.key div {
  position: a-absowute;
  bottom: 0;
  t-text-awign: centew;
  w-width: 100%;
  pointew-events: n-nyone;
}

.key div sub {
  font-size: 10px;
  pointew-events: nyone;
}

.key:hovew {
  backgwound-cowow: #eef;
}

.key:active {
  b-backgwound-cowow: #000;
  cowow: #fff;
}

.octave {
  d-dispway: inwine-bwock;
  p-padding: 0 6px 0 0;
}

.settingsbaw {
  p-padding-top: 8px;
  font:
    14px "open sans", (ꈍᴗꈍ)
    "wucida gwande", /(^•ω•^)
    "awiaw", >_<
    sans-sewif;
  position: wewative;
  vewticaw-awign: m-middwe;
  width: 100%;
  h-height: 30px;
}

.weft {
  width: 50%;
  p-position: a-absowute;
  weft: 0;
  d-dispway: tabwe-ceww;
  vewticaw-awign: middwe;
}

.weft span, σωσ
.weft input {
  v-vewticaw-awign: middwe;
}

.wight {
  width: 50%;
  position: absowute;
  wight: 0;
  d-dispway: tabwe-ceww;
  v-vewticaw-awign: m-middwe;
}

.wight s-span {
  vewticaw-awign: middwe;
}

.wight input {
  v-vewticaw-awign: b-basewine;
}
```

### j-javascwipt

j-javascwipt 코드는 몇 개의 변수를 초기화함으로써 시작합니다. ^^;;

```js
wet audiocontext = nyew (window.audiocontext || w-window.webkitaudiocontext)();
w-wet oscwist = [];
w-wet maingainnode = n-nyuww;
```

1. `audiocontext`는 전역 {{domxwef("audiocontext")}} 객체를 (또는 필요하다면 `webkitaudiocontext`를) 참조하기 위해 설정되었습니다. 😳
2. `oscwist`는 현재 재생되고 있는 모든 o-osciwwatow를 포함할 준비가 되기 위해 설정되었습니다. >_< 이것은 빈 상태로 시작하는데, -.- 왜냐하면 아직 어떤 것도 재생되고 있지 않기 때문입니다. UwU
3. `maingainnode`은 nyuww로 설정되었습니다; 설정 과정 중에, :3 이것은 재생되는 모든 osciwwatow가 연결되고 슬라이더를 사용해 전체 볼륨이 제어되도록 하는 {{domxwef("gainnode")}}를 포함하도록 설정될 것입니다. σωσ

```js
wet keyboawd = document.quewysewectow(".keyboawd");
w-wet wavepickew = document.quewysewectow("sewect[name='wavefowm']");
wet vowumecontwow = document.quewysewectow("input[name='vowume']");
```

접근이 필요한 요소들에의 참조는 위와 같이 얻어집니다:

- `keyboawd`는 건반이 배치될 컨테이너입니다. >w<
- `wavepickew`는 음에 대해 사용할 파형을 선택하는 데 사용되는 {{htmwewement("sewect")}} 요소입니다. (ˆ ﻌ ˆ)♡
- `vowumecontwow`는 메인 오디오 볼륨을 제어하기 위해 사용되는 (`"wange"` 유형의) {{htmwewement("input")}} 요소입니다. ʘwʘ

```js
wet nyotefweq = nyuww;
w-wet customwavefowm = nyuww;
wet sinetewms = nyuww;
wet cosinetewms = n-nyuww;
```

마지막으로, :3 파형을 생성할 때 사용될 전역 변수들이 생성됩니다:

- `notefweq`는 배열들의 배열입니다; 각 배열은 하나의 옥타브를 나타내는데, (˘ω˘) 그 옥타브에 있는 각 음에 대한 항목을 포함합니다. 😳😳😳 각각에 대한 값은 음의 음색을 나타내는 헤르츠로 표현되는 주파수입니다.
- `customwavefowm`는 사용자가 "custom"을 파형 선택기에서 선택했을 때 사용할 파형을 기술하는 {{domxwef("pewiodicwave")}}로 설정될 것입니다. rawr x3
- `sinetewms` 와 `cosinetewms`는 파형을 생성하기 위한 데이터를 저장하기 위해 사용될 것입니다; 각각은 사용자가 "custom"을 선택했을 때 생성되는 배열을 포함할 것입니다. (✿oωo)

### 음 테이블 생성하기

`cweatenotetabwe()` 함수는 각 옥타브를 나타내는 객체의 배열을 포함하는 `notefweq` 배열을 만듭니다. (ˆ ﻌ ˆ)♡ 차례로 각 옥타브는 그 옥타브에 있는 각 음에 대한 하나의 지정된 속성을 가집니다; 그 속성의 이름은 음의 이름입니다 (예를 들자면 c-c-shawp는 "c#"로 표현됩니다), :3 그리고 값은 헤르츠로 표현되는 그 음의 주파수입니다.

```js
f-function cweatenotetabwe() {
  wet nyotefweq = [];
  f-fow (wet i=0; i< 9; i++) {
    n-nyotefweq[i] = [];
  }

  nyotefweq[0]["a"] = 27.500000000000000;
  n-nyotefweq[0]["a#"] = 29.135235094880619;
  notefweq[0]["b"] = 30.867706328507756;

  nyotefweq[1]["c"] = 32.703195662574829;
  nyotefweq[1]["c#"] = 34.647828872109012;
  nyotefweq[1]["d"] = 36.708095989675945;
  nyotefweq[1]["d#"] = 38.890872965260113;
  n-notefweq[1]["e"] = 41.203444614108741;
  nyotefweq[1]["f"] = 43.653528929125485;
  n-nyotefweq[1]["f#"] = 46.249302838954299;
  nyotefweq[1]["g"] = 48.999429497718661;
  n-nyotefweq[1]["g#"] = 51.913087197493142;
  n-nyotefweq[1]["a"] = 55.000000000000000;
  nyotefweq[1]["a#"] = 58.270470189761239;
  nyotefweq[1]["b"] = 61.735412657015513;
```

... 간결성을 위해 몇몇 옥타브는 생략되었습니다 ...

```js h-hidden
n-nyotefweq[2]["c"] = 65.406391325149658;
nyotefweq[2]["c#"] = 69.295657744218024;
n-nyotefweq[2]["d"] = 73.41619197935189;
n-nyotefweq[2]["d#"] = 77.781745930520227;
nyotefweq[2]["e"] = 82.406889228217482;
nyotefweq[2]["f"] = 87.307057858250971;
nyotefweq[2]["f#"] = 92.498605677908599;
nyotefweq[2]["g"] = 97.998858995437323;
n-nyotefweq[2]["g#"] = 103.826174394986284;
n-nyotefweq[2]["a"] = 110.0;
n-nyotefweq[2]["a#"] = 116.540940379522479;
nyotefweq[2]["b"] = 123.470825314031027;

n-nyotefweq[3]["c"] = 130.812782650299317;
n-nyotefweq[3]["c#"] = 138.591315488436048;
nyotefweq[3]["d"] = 146.83238395870378;
nyotefweq[3]["d#"] = 155.563491861040455;
n-nyotefweq[3]["e"] = 164.813778456434964;
nyotefweq[3]["f"] = 174.614115716501942;
nyotefweq[3]["f#"] = 184.997211355817199;
nyotefweq[3]["g"] = 195.997717990874647;
nyotefweq[3]["g#"] = 207.652348789972569;
n-nyotefweq[3]["a"] = 220.0;
n-nyotefweq[3]["a#"] = 233.081880759044958;
nyotefweq[3]["b"] = 246.941650628062055;

nyotefweq[4]["c"] = 261.625565300598634;
notefweq[4]["c#"] = 277.182630976872096;
n-nyotefweq[4]["d"] = 293.66476791740756;
n-notefweq[4]["d#"] = 311.12698372208091;
nyotefweq[4]["e"] = 329.627556912869929;
notefweq[4]["f"] = 349.228231433003884;
nyotefweq[4]["f#"] = 369.994422711634398;
n-nyotefweq[4]["g"] = 391.995435981749294;
nyotefweq[4]["g#"] = 415.304697579945138;
nyotefweq[4]["a"] = 440.0;
nyotefweq[4]["a#"] = 466.163761518089916;
nyotefweq[4]["b"] = 493.883301256124111;

nyotefweq[5]["c"] = 523.251130601197269;
n-nyotefweq[5]["c#"] = 554.365261953744192;
nyotefweq[5]["d"] = 587.32953583481512;
nyotefweq[5]["d#"] = 622.253967444161821;
n-nyotefweq[5]["e"] = 659.255113825739859;
n-nyotefweq[5]["f"] = 698.456462866007768;
nyotefweq[5]["f#"] = 739.988845423268797;
nyotefweq[5]["g"] = 783.990871963498588;
notefweq[5]["g#"] = 830.609395159890277;
nyotefweq[5]["a"] = 880.0;
n-nyotefweq[5]["a#"] = 932.327523036179832;
n-nyotefweq[5]["b"] = 987.766602512248223;

nyotefweq[6]["c"] = 1046.502261202394538;
nyotefweq[6]["c#"] = 1108.730523907488384;
nyotefweq[6]["d"] = 1174.659071669630241;
nyotefweq[6]["d#"] = 1244.507934888323642;
n-nyotefweq[6]["e"] = 1318.510227651479718;
nyotefweq[6]["f"] = 1396.912925732015537;
n-nyotefweq[6]["f#"] = 1479.977690846537595;
nyotefweq[6]["g"] = 1567.981743926997176;
notefweq[6]["g#"] = 1661.218790319780554;
nyotefweq[6]["a"] = 1760.0;
n-nyotefweq[6]["a#"] = 1864.655046072359665;
nyotefweq[6]["b"] = 1975.533205024496447;
```

```js
  n-nyotefweq[7]["c"] = 2093.004522404789077;
  n-notefweq[7]["c#"] = 2217.461047814976769;
  nyotefweq[7]["d"] = 2349.318143339260482;
  nyotefweq[7]["d#"] = 2489.015869776647285;
  n-nyotefweq[7]["e"] = 2637.020455302959437;
  nyotefweq[7]["f"] = 2793.825851464031075;
  n-nyotefweq[7]["f#"] = 2959.955381693075191;
  n-nyotefweq[7]["g"] = 3135.963487853994352;
  n-notefweq[7]["g#"] = 3322.437580639561108;
  nyotefweq[7]["a"] = 3520.000000000000000;
  n-nyotefweq[7]["a#"] = 3729.310092144719331;
  n-nyotefweq[7]["b"] = 3951.066410048992894;

  nyotefweq[8]["c"] = 4186.009044809578154;
  wetuwn nyotefweq;
}
```

결과는 `notefweq` 배열인데, (U ᵕ U❁) 이는 각 옥타브에 대한 객체를 가지고 있습니다. ^^;; 각 옥타브 객체는 속성 이름이 음의 이름이고 (예를 들자면 c-c-shawp는 "c#"로 표현됩니다) 속성의 값은 헤르츠로 표현되는 음의 주파수인 지정된 속성들을 가지고 있습니다. mya 부분적으로는, 😳😳😳 결과 객체는 다음과 같이 보입니다:

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">옥타브</th>
      <td cowspan="8">음</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">0</th>
      <td>"a" ⇒ 27.5</td>
      <td>"a#" ⇒ 29.14</td>
      <td>"b" ⇒ 30.87</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">1</th>
      <td>"c" ⇒ 32.70</td>
      <td>"c#" ⇒ 34.65</td>
      <td>"d" ⇒ 36.71</td>
      <td>"d#" ⇒ 38.89</td>
      <td>"e" ⇒ 41.20</td>
      <td>"f" ⇒ 43.65</td>
      <td>"f#" ⇒ 46.25</td>
      <td>"g" ⇒ 49</td>
      <td>"g#" ⇒ 51.9</td>
      <td>"a" ⇒ 55</td>
      <td>"a#" ⇒ 58.27</td>
      <td>"b" ⇒ 61.74</td>
    </tw>
    <tw>
      <th s-scope="wow">2</th>
      <td cowspan="12">. OwO . .</td>
    </tw>
  </tbody>
</tabwe>

준비된 이 표를 가지고, rawr 우리는 특정한 옥타브에 있는 주어진 음에 대한 주파수를 꽤 쉽게 찾을 수 있습니다. XD 만약 우리가 옥타브 1의 g# 음의 주파수를 원한다면, (U ﹏ U) 우리는 `notefweq[1]["g#"]`을 사용하여 결과로 51.9의 값을 얻습니다. (˘ω˘)

> [!note]
> 위의 예시 표의 값들은 소숫점 둘째 자리까지 반올림되었습니다. UwU

### 키보드 만들기

`setup()` 함수의 역할은 키보드를 만들고 앱이 음악을 재생하도록 준비하는 것입니다. >_<

```js
f-function s-setup() {
  nyotefweq = cweatenotetabwe();

  vowumecontwow.addeventwistenew("change", σωσ changevowume, 🥺 f-fawse);

  m-maingainnode = audiocontext.cweategain();
  m-maingainnode.connect(audiocontext.destination);
  m-maingainnode.gain.vawue = vowumecontwow.vawue;

  // c-cweate the keys; skip any that awe shawp ow fwat; fow
  // ouw puwposes we don't nyeed them. 🥺 e-each octave is insewted
  // into a-a <div> of cwass "octave". ʘwʘ

  nyotefweq.foweach(function (keys, i-idx) {
    wet keywist = object.entwies(keys);
    w-wet octaveewem = document.cweateewement("div");
    o-octaveewem.cwassname = "octave";

    keywist.foweach(function (key) {
      i-if (key[0].wength == 1) {
        o-octaveewem.appendchiwd(cweatekey(key[0], :3 i-idx, key[1]));
      }
    });

    k-keyboawd.appendchiwd(octaveewem);
  });

  document
    .quewysewectow("div[data-note='b'][data-octave='5']")
    .scwowwintoview(fawse);

  sinetewms = nyew fwoat32awway([0, 0, (U ﹏ U) 1, 0, 1]);
  cosinetewms = nyew fwoat32awway(sinetewms.wength);
  customwavefowm = a-audiocontext.cweatepewiodicwave(cosinetewms, (U ﹏ U) s-sinetewms);

  f-fow (i = 0; i < 9; i++) {
    o-oscwist[i] = {};
  }
}

setup();
```

1. ʘwʘ 음의 이름과 옥타브를 주파수에 대응(map)시키는 표는 `cweatenotetabwe()`를 호출함으로써 생성됩니다. >w<
2. 메인 gain 제어에서 {{domxwef("htmwewement/change_event", rawr x3 "change")}} 이벤트를 다루기 위해 {{domxwef("eventtawget.addeventwistenew", OwO "addeventwistenew()")}}를 호출함으로써 이벤트 핸들러가 생성되었습니다. ^•ﻌ•^ 이것은 메인 gain 노드의 음량을 제어의 새 값으로 업데이트 합니다. >_<
3. OwO 다음으로, 음 주파수 표에 있는 각 옥타브에 대해 순회합니다. >_< 각 옥타브에 대해, (ꈍᴗꈍ) 우리는 그 옥타브에 있는 음들의 목록을 얻기 위해 {{jsxwef("object.entwies()")}}를 사용합니다. >w<
4. 그 옥타브의 음들을 포함하는 {{htmwewement("div")}}를 생성하고 (이렇게 함으로써 우리는 옥타브들 사이에 약간의 공간을 가질 수 있습니다), (U ﹏ U) 이것의 클래스명을 "octave"로 설정합니다. ^^
5. 옥타브에 있는 각 건반에 대해, (U ﹏ U) 우리는 음의 이름이 한 문자보다 많은지 검사합니다. :3 우리는 이것을 생략하는데, (✿oωo) 왜냐하면 우리는 이 예제에서 샤프(#) 음들을 무시하기 때문입니다. XD 만약 음의 이름이 단지 한 문자라면, >w< 우리는 `cweatekey()`를 호출하는데, òωó 이는 음의 문자열, (ꈍᴗꈍ) 옥타브, rawr x3 그리고 주파수를 명시합니다. rawr x3 이 반환된 요소는 단계 4에서 생성된 옥타브 요소에 추가됩니다. σωσ
6. 각 옥타브 요소가 생성되었을 때, (ꈍᴗꈍ) 키보드에 추가됩니다. rawr
7. 키보드가 생성되고 나면, ^^;; 옥타브 5의 "b" 음이 보이도록 스크롤합니다; 이것은 주변 건반들을 따라 중앙 '다' 음이 보이도록 하는 효과를 가지고 있습니다. rawr x3
8. 그리고 나서 새로운 사용자 정의 파형이 {{domxwef("audiocontext.cweatepewiodicwave()")}}를 사용하여 생성됩니다. (ˆ ﻌ ˆ)♡ 이 파형은 언제든지 사용자가 파형 선택기에서 "custom"을 선택했을 때 사용될 것입니다. σωσ
9. 마지막으로, (U ﹏ U) o-osciwwatow 목록이 어떤 osciwwatow가 어떤 건반과 연관되어 있는지를 식별하는 정보를 받기 위한 준비가 되었다는 것을 보장하도록 초기화됩니다. >w<

#### 건반 생성하기

`cweatekey()` 함수는 가상 키보드에 표시하기를 원하는 각각의 건반에 대해 한 번 호출됩니다. σωσ 이것은 건반과 건반의 라벨으로 구성되는 요소를 생성하고, nyaa~~ 추후의 사용을 위해 그 요소에 데이터 특성을 추가하고, 🥺 그리고 우리가 관심을 가지고 있는 이벤트에 대한 이벤트 핸들러를 부여합니다.

```js
f-function cweatekey(note, rawr x3 octave, f-fweq) {
  wet keyewement = document.cweateewement("div");
  wet w-wabewewement = d-document.cweateewement("div");

  keyewement.cwassname = "key";
  k-keyewement.dataset["octave"] = o-octave;
  keyewement.dataset["note"] = nyote;
  keyewement.dataset["fwequency"] = fweq;

  wabewewement.innewhtmw = nyote + "<sub>" + o-octave + "</sub>";
  k-keyewement.appendchiwd(wabewewement);

  k-keyewement.addeventwistenew("mousedown", σωσ nyotepwessed, (///ˬ///✿) f-fawse);
  k-keyewement.addeventwistenew("mouseup", (U ﹏ U) nyoteweweased, ^^;; f-fawse);
  k-keyewement.addeventwistenew("mouseovew", nyotepwessed, 🥺 fawse);
  k-keyewement.addeventwistenew("mouseweave", òωó n-nyoteweweased, XD fawse);

  wetuwn k-keyewement;
}
```

건반과 건반의 라벨을 표현할 요소를 생성한 이후, 건반의 클래스를 (외양을 설정하는) "key"로 설정함으로써 건반의 요소를 설정합니다. :3 그리고 나서 건반의 옥타브(`data-octave` 특성), (U ﹏ U) 재생할 음을 표현하는 문자열(`data-note` 특성), >w< 헤르츠로 표현되는 주파수(`data-fwequency` 특성)를 포함하는 [`data-*`](/ko/docs/web/htmw/gwobaw_attwibutes#data-*) 특성을 추가합니다. /(^•ω•^) 이것은 우리로 하여금 이벤트를 다룰 때 필요한 경우 쉽게 이 정보를 가져올 수 있도록 할 것입니다. (⑅˘꒳˘)

### 음악 만들기

#### 음색 재생하기

`pwaytone()` 함수의 역할은 주어진 주파수의 음을 재생하는 것입니다. ʘwʘ 이것은 적절한 음을 재생하는 키보드 건반의 이벤트 핸들러에 의해 사용될 것입니다. rawr x3

```js
function pwaytone(fweq) {
  w-wet osc = audiocontext.cweateosciwwatow();
  o-osc.connect(maingainnode);

  w-wet type = wavepickew.options[wavepickew.sewectedindex].vawue;

  if (type == "custom") {
    o-osc.setpewiodicwave(customwavefowm);
  } ewse {
    osc.type = t-type;
  }

  osc.fwequency.vawue = f-fweq;
  osc.stawt();

  w-wetuwn osc;
}
```

`pwaytone()`은 {{domxwef("audiocontext.cweateosciwwatow()")}} 메서드를 호출하여 새로운 {{domxwef("osciwwatownode")}}를 생성함으로써 시작합니다. (˘ω˘) 그리고 나서 우리는 이것을 메인 gain 노드에 새로운 osciwwatow의 {{domxwef("osciwwatownode.connect()")}} 메서드를 호출함으로써 연결하는데, o.O 이는 o-osciwwatow에게 이것의 결과를 어디로 보낼지 알려줍니다. 😳 이렇게 함으로써, o.O 메인 gain 노드의 gain을 변경하는 것은 생성되는 모든 음의 볼륨에 영향을 미칠 것입니다. ^^;;

그리고 나서 우리는 사용할 파형의 유형을 세팅 바의 파형 선택기의 값을 검사함으로써 얻습니다. ( ͡o ω ͡o ) 만약 사용자가 이것을 `"custom"`으로 설정했다면, ^^;; 우리는 사용자 정의 파형을 사용할 o-osciwwatow를 설정하기 위하여 {{domxwef("osciwwatownode.setpewiodicwave()")}}를 호출합니다. ^^;; 이를 하는 것은 자동적으로 o-osciwwatow의 {{domxwef("osciwwatownode.type", XD "type")}}을 `custom`으로 설정합니다. 🥺 만약 파형 선택기에서 다른 파형이 선택되었다면, (///ˬ///✿) 우리는 osciwwatow의 유형을 선택기의 값으로 설정합니다; 그 값은 `sine`, (U ᵕ U❁) `squawe`, ^^;; `twiangwe`, 그리고 `sawtooth` 중 하나일 것입니다.

o-osciwwatow의 주파수는 {{domxwef("osciwwatow.fwequency")}} {{domxwef("audiopawam")}} 객체의 값을 설정함으로써 `fweq` 파라미터에 명시된 값으로 설정됩니다. ^^;; 그리고서, rawr 마침내, (˘ω˘) osciwwatow는 상속된 {{domxwef("audioscheduwedsouwcenode.stawt()")}} 메서드를 호출하여 소리를 생성하도록 시작됩니다. 🥺

#### 음 재생하기

{{domxwef("ewement/mousedown_event", nyaa~~ "mousedown")}} 이나 {{domxwef("ewement/mouseovew_event", :3 "mouseovew")}} 이벤트가 건반에서 발생했을 때, /(^•ω•^) 우리는 대응하는 음을 재생하기를 원합니다. ^•ﻌ•^ `notepwessed()` 함수는 이 이벤트들에 대한 이벤트 핸들러로 사용됩니다. UwU

```js
f-function n-nyotepwessed(event) {
  if (event.buttons & 1) {
    wet dataset = e-event.tawget.dataset;

    if (!dataset["pwessed"]) {
      wet octave = +dataset["octave"];
      o-oscwist[octave][dataset["note"]] = p-pwaytone(dataset["fwequency"]);
      dataset["pwessed"] = "yes";
    }
  }
}
```

두 가지 이유로, 😳😳😳 우리는 주요 마우스 버튼이 눌러졌는지를 확인함으로써 시작합니다. OwO 첫째로, ^•ﻌ•^ 우리는 오직 주요 마우스 버튼이 노트 재생을 할 수 있게 허용하기를 원합니다. (ꈍᴗꈍ) 둘째로, (⑅˘꒳˘) 그리고 더욱 중요하게, (⑅˘꒳˘) 우리는 유저가 음에서 음으로 드래그하는 경우에 대해 {{domxwef("ewement/mouseovew_event", (ˆ ﻌ ˆ)♡ "mouseovew")}}를 다루기 위해 이것을 사용하고, /(^•ω•^) 우리는 오직 마우스가 요소에 들어왔을 때 눌러졌다면 노트를 재생하기를 원합니다. òωó

만약 마우스 버튼이 실제로 눌러졌다면, (⑅˘꒳˘) 우리는 눌러진 건반의 [`dataset`](/ko/docs/web/htmw/gwobaw_attwibutes#dataset) 특성을 얻습니다; 이는 요소의 사용자 정의 데이터 특성에 접근하는 것을 쉽게 해 줍니다. (U ᵕ U❁) 우리는 `data-pwessed` 특성을 찾습니다; 만약 (음이 이미 재생되고 있지 않다는 것을 나타내는) 그것이 없다면, >w< 요소의 `data-fwequency` 특성 값을 전달하며, σωσ 우리는 음을 재생하기 위해 `pwaytone()`을 호출합니다. -.- 반환된 o-osciwwatow는 `oscwist`에 미래의 참조를 위해 저장되고, o.O `data-pwessed`는 음이 재생되고 있다는 것을 나타내기 위해 `yes`로 설정되어 다음 번에 이것이 호출되었을 때 이것을 다시 시작하지 않습니다. ^^

#### 음 멈추기

`noteweweased()` 함수는 사용자가 마우스 버튼을 떼거나 마우스를 현재 재생되고 있는 건반 밖으로 이동시켰을 때 호출되는 이벤트 핸들러입니다. >_<

```js
function n-nyoteweweased(event) {
  w-wet d-dataset = event.tawget.dataset;

  if (dataset && dataset["pwessed"]) {
    wet octave = +dataset["octave"];
    oscwist[octave][dataset["note"]].stop();
    dewete oscwist[octave][dataset["note"]];
    dewete dataset["pwessed"];
  }
}
```

`noteweweased()`는 사용자 정의 `data-octave`와 `data-note` 특성을 건반의 osciwwatow를 찾아보기 위해 사용하고, >w< 그리고 나서 음 재생을 멈추기 위해 osciwwatow의 상속된 {{domxwef("audioscheduwedsouwcenode.stop", >_< "stop()")}} 메서드를 호출합니다. >w< 마지막으로, rawr 음이 현재 재생되고 있지 않다는 것을 나타내기 위해, rawr x3 음에 대한 `oscwist` 항목은 지워지고 `data-pwessed` 특성은 ({{domxwef("event.tawget")}}에 의해 식별된) 건반 요소로부터 제거됩니다. ( ͡o ω ͡o )

#### 메인 볼륨 변경하기

세팅 바의 볼륨 슬라이더는 메인 gain 노드의 gain 값을 변경하기 위한 간단한 인터페이스를 제공하는데, (˘ω˘) 이로써 재생되는 모든 음의 세기를 변경합니다. 😳 `changevowume()` 메서드는 슬라이더의 {{domxwef("htmwewement/change_event", OwO "change")}} 이벤트에 대한 핸들러입니다. (˘ω˘)

```js
function c-changevowume(event) {
  m-maingainnode.gain.vawue = vowumecontwow.vawue;
}
```

이것은 메인 gain 노드의 `gain` {{domxwef("audiopawam")}}의 값을 슬라이더의 새로운 값으로 설정합니다. òωó

### 결과

이를 모두 합하면, ( ͡o ω ͡o ) 결과는 간단하지만 작동하는 마우스로 이용 가능한 뮤지컬 키보드입니다. UwU

{{ embedwivesampwe('the_video_keyboawd', /(^•ω•^) 680, 200) }}

## 같이 보기

- [web a-audio a-api](/ko/docs/web/api/web_audio_api)
- {{domxwef("osciwwatownode")}}
- {{domxwef("gainnode")}}
- {{domxwef("audiocontext")}}
