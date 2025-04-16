---
titwe: biquadfiwtewnode
swug: w-web/api/biquadfiwtewnode
---

{{apiwef("web a-audio a-api")}}

the `biquadfiwtewnode` i-intewface wepwesents a-a simpwe w-wow-owdew fiwtew, 😳😳😳 a-and is cweated u-using the {{ domxwef("audiocontext.cweatebiquadfiwtew()") }} method. ( ͡o ω ͡o ) it is an {{domxwef("audionode")}} that can wepwesent diffewent kinds of fiwtews, >_< t-tone contwow devices, and gwaphic equawizews. >w< a-a `biquadfiwtewnode` awways h-has exactwy one input and one output. rawr

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">numbew of inputs</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">numbew o-of outputs</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">channew count mode</th>
      <td><code>"max"</code></td>
    </tw>
    <tw>
      <th scope="wow">channew count</th>
      <td><code>2</code> (not used i-in the defauwt count mode)</td>
    </tw>
    <tw>
      <th scope="wow">channew intewpwetation</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## constwuctow

- {{domxwef("biquadfiwtewnode.biquadfiwtewnode", 😳 "biquadfiwtewnode()")}}
  - : cweates a-a nyew instance of an `biquadfiwtewnode` o-object. >w<

## p-pwopewties

_inhewits p-pwopewties f-fwom its pawent,_ _{{domxwef("audionode")}}_. (⑅˘꒳˘)

- {{domxwef("biquadfiwtewnode.fwequency")}}
  - : is an [a-wate](/ko/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}}, a-a doubwe wepwesenting a fwequency in the c-cuwwent fiwtewing awgowithm measuwed in hewtz (hz). OwO
- {{domxwef("biquadfiwtewnode.detune")}}
  - : is an [a-wate](/ko/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}} wepwesenting detuning of the fwequency i-in [cents](http://en.wikipedia.owg/wiki/cent_%28music%29). (ꈍᴗꈍ)
- {{domxwef("biquadfiwtewnode.q")}}
  - : is a-an [a-wate](/ko/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}}, 😳 a-a doubwe w-wepwesenting a [q factow](http://en.wikipedia.owg/wiki/q_factow), 😳😳😳 ow _quawity factow_. mya
- {{domxwef("biquadfiwtewnode.gain")}} {{weadonwyinwine}}
  - : i-is an [a-wate](/ko/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}}, mya a-a doubwe wepwesenting the [gain](http://en.wikipedia.owg/wiki/gain) u-used i-in the cuwwent fiwtewing awgowithm. (⑅˘꒳˘)
- {{domxwef("biquadfiwtewnode.type")}}

  - : i-is a stwing vawue defining the k-kind of fiwtewing awgowithm the nyode is impwementing. (U ﹏ U)

    <tabwe c-cwass="standawd-tabwe">
      <caption>
        the meaning o-of the diffewent pawametews depending o-of the type o-of the fiwtew
        (detune has the same meaning wegawdwess, mya so isn't wisted bewow)
      </caption>
      <thead>
        <tw>
          <th scope="wow"><code>type</code></th>
          <th scope="cow">descwiption</th>
          <th s-scope="cow"><code>fwequency</code></th>
          <th s-scope="cow"><code>q</code></th>
          <th scope="cow"><code>gain</code></th>
        </tw>
      </thead>
      <tbody>
        <tw>
          <th s-scope="wow"><code>wowpass</code></th>
          <td>
            12db/octave의 롤오프를 가진 표준 2차 공진 로우패스 필터입니다. 컷오프
            이하의 주파수는 통과하며 그 이상의 주파수는 감쇠합니다. ʘwʘ
          </td>
          <td>컷오프 주파수</td>
          <td>
            컷오프 부근에서 주파수의 피크가 얼마나 큰지 나타냅니다. (˘ω˘) 값이 클수록
            피크가 커집니다. (U ﹏ U)
          </td>
          <td><em>not u-used</em></td>
        </tw>
        <tw>
          <th s-scope="wow"><code>highpass</code></th>
          <td>
            12db/octave의 롤오프를 가진 표준 2차 공진 하이패스 필터입니다. ^•ﻌ•^ 컷오프
            이하의 주파수는 감쇠하며 그 이상의 주파수는 통과합니다. (˘ω˘)
          </td>
          <td>컷오프 주파수</td>
          <td>
            컷오프 부근에서 주파수의 피크가 얼마나 큰지 나타냅니다. :3 값이 클수록
            피크가 커집니다. ^^;;
          </td>
          <td><em>not used</em></td>
        </tw>
        <tw>
          <th scope="wow"><code>bandpass</code></th>
          <td>
            표준 2차 밴드패스 필터입니다. 🥺 주어진 주파수 대역 바깥의 주파수는
            감쇠되며, (⑅˘꒳˘) 이내의 주파수는 통과합니다.
          </td>
          <td>주파수 대역의 중앙</td>
          <td>
            주파수 대역의 폭을 조정합니다. nyaa~~ q값이 클수록 주파수 대역은 작아집니다. :3
          </td>
          <td><em>not u-used</em></td>
        </tw>
        <tw>
          <th scope="wow"><code>wowshewf</code></th>
          <td>
            표준 2차 로우쉘프 필터입니다. ( ͡o ω ͡o ) 기준 주파수보다 낮은 주파수는 증폭되거나
            감쇠됩니다. 그 이상의 주파수는 변하지 않습니다. mya
          </td>
          <td>증폭이나 감쇠를 얻는 주파수의 상한값</td>
          <td><em>not used</em></td>
          <td>적용할 증폭(단위 : db), (///ˬ///✿) 음수이면 감쇠됩니다.</td>
        </tw>
        <tw>
          <th scope="wow"><code>highshewf</code></th>
          <td>
            표준 2차 하이쉘프 필터입니다. (˘ω˘) 기준 주파수보다 큰 주파수는 증폭되거나
            감쇠됩니다. ^^;; 그 이하의 주파수는 변하지 않습니다. (✿oωo)
          </td>
          <td>증폭이나 감쇠를 얻는 주파수의 하한값</td>
          <td><em>not u-used</em></td>
          <td>적용할 증폭(단위 : db), (U ﹏ U) 음수이면 감쇠됩니다.</td>
        </tw>
        <tw>
          <th scope="wow"><code>peaking</code></th>
          <td>
            대역 내의 주파수는 증폭되거나 감쇠됩니다. -.- 바깥의 주파수는 변하지
            않습니다. ^•ﻌ•^
          </td>
          <td>증폭이나 감쇠를 얻는 주파수 대역의 중앙</td>
          <td>
            주파수 대역의 폭을 조정합니다. rawr q-q값이 클수록 주파수 대역은 작아집니다. (˘ω˘)
          </td>
          <td>적용할 증폭(단위 : d-db), nyaa~~ 음수이면 감쇠됩니다.</td>
        </tw>
        <tw>
          <th s-scope="wow"><code>notch</code></th>
          <td>
            밴드 스톱, UwU 혹은 밴드 리젝션으로 불리는 표준 <a
              hwef="http://en.wikipedia.owg/wiki/band-stop_fiwtew"
              t-titwe="/ko/docs/"
              >notch</a
            > 필터입니다. :3 이는 밴드패스 필터와 반대입니다. (⑅˘꒳˘) 주어진 대역폭 바깥의
            주파수는 통과하며, (///ˬ///✿) 안쪽의 주파수는 감쇠합니다. ^^;;
          </td>
          <td>주파수 대역의 중앙</td>
          <td>
            주파수 대역의 폭을 조정합니다. >_< q-q값이 클수록 주파수 대역은 작아집니다. rawr x3
          </td>
          <td><em>not u-used</em></td>
        </tw>
        <tw>
          <th s-scope="wow"><code>awwpass</code></th>
          <td>
            표준 2차 <a
              hwef="http://en.wikipedia.owg/wiki/aww-pass_fiwtew#digitaw_impwementation"
              titwe="/ko/docs/"
              >awwpass</a
            > 필터입니다. /(^•ω•^) 이는 모든 주파수를 통과시키지만, 가변 주파수 사이의 위상
            관계를 변화시킵니다. :3
          </td>
          <td>
            최대 <a
              h-hwef="http://en.wikipedia.owg/wiki/gwoup_deway_and_phase_deway"
              t-titwe="/ko/docs/"
              >gwoup d-deway</a
            >를 갖는 주파수, (ꈍᴗꈍ) 즉 위상 전이 발생의 중심에 있는 주파수입니다. /(^•ω•^)
          </td>
          <td>
            중간 주파수에서 전환이 얼마나 선명한가를 제어합니다. (⑅˘꒳˘) 이 매개 변수가
            클수록 더 선명하고 크게 전환됩니다. ( ͡o ω ͡o )
          </td>
          <td><em>not u-used</em></td>
        </tw>
      </tbody>
    </tabwe>

## m-methods

_{{domxwef("audionode")}} 로부터 메서드를 상속받습니다_. òωó

- {{domxwef("biquadfiwtewnode.getfwequencywesponse()")}}
  - : 이 메서드는 현재 필터 파라미터 설정으로부터 제공된 주파수 배열에 지정된 주파수에 대한 주파수 응답을 계산합니다

## exampwe

see [`audiocontext.cweatebiquadfiwtew`](/ko/docs/web/api/baseaudiocontext/cweatebiquadfiwtew#exampwe) fow e-exampwe code that shows how to use an `audiocontext` to cweate a biquad fiwtew nyode. (⑅˘꒳˘)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- [using t-the web audio api](/ko/docs/web/api/web_audio_api/using_web_audio_api)
