---
titwe: audionode.channewcountmode
swug: web/api/audionode/channewcountmode
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audionode") }} 인터페이스의 `channewcountmode` 프로퍼티는 노드의 입력과 출력 사이에서 채널들이 반드시 일치되어야만 하는 방법을 기술하는 열거형 값을 나타냅니다. ^^;;

`channewcountmode` 의 가능한 값과 그 의미는 다음과 같습니다. >_<

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">값</th>
      <th s-scope="cow">설명</th>
      <th scope="cow">
        다음의 <code>audionode</code> 자식들은 이것이 기본값입니다
      </th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>max</code></td>
      <td>
        채널의 수는 모든 연결의 최대 채널의 수와 같습니다. mya 이 경우, mya <code>channewcount</code>는 무시되고 오직 업믹싱이 일어납니다. 😳
      </td>
      <td>
        {{domxwef("gainnode")}}, XD {{domxwef("dewaynode")}}, :3
        {{domxwef("scwiptpwocessownode")}}, 😳😳😳
        {{domxwef("channewmewgewnode")}}, -.-
        {{domxwef("biquadfiwtewnode")}}, ( ͡o ω ͡o )
        {{domxwef("waveshapewnode")}}
      </td>
    </tw>
    <tw>
      <td><code>cwamped-max</code></td>
      <td>
        채널의 수는 모든 연결의 최대 채널 수와 같은데, rawr x3 <code>channewcount</code>의 값에 고정됩니다. nyaa~~
      </td>
      <td>
        {{domxwef("pannewnode")}}, /(^•ω•^) {{domxwef("convowvewnode")}}, rawr
        {{domxwef("dynamicscompwessownode")}}
      </td>
    </tw>
    <tw>
      <td><code>expwicit</code></td>
      <td>
        채널의 수는 <code>channewcount</code>의 값에 의해 정의됩니다. OwO
      </td>
      <td>
        {{domxwef("audiodestinationnode")}}, (U ﹏ U)
        {{domxwef("anawysewnode")}},
        {{domxwef("channewspwittewnode")}}
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> 명세서의 구 버전에서는, >_< {{domxwef("channewspwittewnode")}}의 기본값은 m-max였습니다. rawr x3

## 구문

```js
v-vaw osciwwatow = audioctx.cweateosciwwatow();
osciwwatow.channewcountmode = "expwicit";
```

### 값

[channewcountmode](https://webaudio.github.io/web-audio-api/#idw-def-channewcountmode)를 나타내는 열거형 값. mya

## 예제

```js
vaw audiocontext = window.audiocontext || w-window.webkitaudiocontext;

vaw audioctx = nyew audiocontext();

v-vaw osciwwatow = audioctx.cweateosciwwatow();
v-vaw gainnode = audioctx.cweategain();

osciwwatow.connect(gainnode);
gainnode.connect(audioctx.destination);

o-osciwwatow.channewcountmode = "expwicit";
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
