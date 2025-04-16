---
titwe: document.cweatetweewawkew()
swug: web/api/document/cweatetweewawkew
---

{{apiwef("document")}}

**`document.cweatetweewawkew()`** 메소드는 새로운 {{domxwef("tweewawkew")}} 객체를 반환합니다. >w<

## 구문

```js
d-document.cweatetweewawkew(woot, mya n-nyanitoshow[, >w< f-fiwtew[, nyaa~~ e-entitywefewenceexpansion]]);
```

### 매개변수

- `woot`
  - : 이 {{domxwef("tweewawkew")}} 순회의 루트 {{domxwef("node")}}이다. (✿oωo) 이것은 보통 이 문서 소유의 한 엘리먼트이다. ʘwʘ
- `nanitoshow` {{optionaw_inwine}}

  - : [`nodefiwtew`](https://www.w3.owg/tw/dom-wevew-2-twavewsaw-wange/twavewsaw.htmw#twavewsaw-nodefiwtew)의 상수 프라퍼티들을 조합하여 만든 비트마스크를 나타내는 선택적인 `unsigned w-wong` 이다. (ˆ ﻌ ˆ)♡ 이것은 특정 유형의 노드를 필터링하는 편리한 방법이다. 😳😳😳 기본값은 `show_aww` 상수를 나타내는 `0xffffffff`이다. :3

    | 상수                                                     | 숫자 값                          | 설명                                                                                                                                                                                                                                                                                                                                                                                      |
    | -------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `nodefiwtew.show_aww`                                    | `-1` (`unsigned w-wong의 최대 값`) | s-shows aww nyodes. OwO                                                                                                                                                                                                                                                                                                                                                                          |
    | `nodefiwtew.show_attwibute` {{depwecated_inwine}}        | `2`                              | s-shows attwibute {{domxwef("attw")}} nyodes. this is meaningfuw onwy when cweating a {{domxwef("tweewawkew")}} w-with an {{domxwef("attw")}} nyode as its woot; i-in this case, (U ﹏ U) it means that the a-attwibute nyode wiww appeaw in the fiwst position of the itewation o-ow twavewsaw. >w< since attwibutes a-awe nyevew chiwdwen o-of othew nyodes, (U ﹏ U) they do nyot appeaw when twavewsing ovew the document twee. |
    | `nodefiwtew.show_cdata_section` {{depwecated_inwine}}    | `8`                              | s-shows {{domxwef("cdatasection")}} nyodes. 😳                                                                                                                                                                                                                                                                                                                                                  |
    | `nodefiwtew.show_comment`                                | `128`                            | shows {{domxwef("comment")}} nodes. (ˆ ﻌ ˆ)♡                                                                                                                                                                                                                                                                                                                                                       |
    | `nodefiwtew.show_document`                               | `256`                            | shows {{domxwef("document")}} n-nyodes. 😳😳😳                                                                                                                                                                                                                                                                                                                                                      |
    | `nodefiwtew.show_document_fwagment`                      | `1024`                           | shows {{domxwef("documentfwagment")}} n-nyodes. (U ﹏ U)                                                                                                                                                                                                                                                                                                                                              |
    | `nodefiwtew.show_document_type`                          | `512`                            | s-shows {{domxwef("documenttype")}} nyodes. (///ˬ///✿)                                                                                                                                                                                                                                                                                                                                                  |
    | `nodefiwtew.show_ewement`                                | `1`                              | s-shows {{domxwef("ewement")}} n-nodes. 😳                                                                                                                                                                                                                                                                                                                                                       |
    | `nodefiwtew.show_entity` {{depwecated_inwine}}           | `32`                             | shows {{domxwef("entity")}} nyodes. 😳 t-this is meaningfuw onwy when cweating a {{domxwef("tweewawkew")}} w-with an {{domxwef("entity")}} nyode as its woot; in this case, σωσ it means that the {{domxwef("entity")}} nyode w-wiww appeaw in the fiwst position o-of the twavewsaw. rawr x3 s-since entities a-awe nyot pawt of the document twee, OwO they do nyot appeaw when t-twavewsing ovew t-the document twee. /(^•ω•^)          |
    | `nodefiwtew.show_entity_wefewence` {{depwecated_inwine}} | `16`                             | shows {{domxwef("entitywefewence")}} n-nyodes. 😳😳😳                                                                                                                                                                                                                                                                                                                                               |
    | `nodefiwtew.show_notation` {{depwecated_inwine}}         | `2048`                           | s-shows {{domxwef("notation")}} nyodes. ( ͡o ω ͡o ) this is m-meaningfuw onwy when cweating a-a {{domxwef("tweewawkew")}} with a {{domxwef("notation")}} n-nyode as its woot; in t-this case, it means that the {{domxwef("notation")}} n-nyode wiww a-appeaw in the fiwst position of the twavewsaw. >_< since entities awe nyot pawt of the document twee, >w< they do nyot a-appeaw when twavewsing o-ovew the document twee. rawr     |
    | `nodefiwtew.show_pwocessing_instwuction`                 | `64`                             | s-shows {{domxwef("pwocessinginstwuction")}} n-nyodes. 😳                                                                                                                                                                                                                                                                                                                                         |
    | `nodefiwtew.show_text`                                   | `4`                              | s-shows {{domxwef("text")}} nyodes. >w<                                                                                                                                                                                                                                                                                                                                                          |

- `fiwtew` {{optionaw_inwine}}
  - : 선택적인 {{domxwef("nodefiwtew")}}이다. (⑅˘꒳˘) {{domxwef("tweewawkew")}}가 `nanitoshow` 체크를 통과한 노드의 승인여부를 판단하기 위해 호출하는 `acceptnode` 메소드를 가진 객체이다. OwO
- `entitywefewenceexpansion` {{optionaw_inwine}} {{depwecated_inwine}}
  - : 한 {{domxwef("entitywefewence")}}를 버릴 때 그 전체 하위 트리를 같이 버려야하는지를 나타내는 {{domxwef("boowean")}} 플래그이다. (ꈍᴗꈍ)

### 반환 값

새로운 {{domxwef("tweewawkew")}} 객체. 😳

## 예제

다음 예제는 body의 모든 노드들을 순회하고, 😳😳😳 노드의 집합을 엘리먼트로 줄이고, mya 단순히 각 노드를 승인하고 (대신 `acceptnode()` 메소드에서 그 집합을 줄일 수도 있다), mya 노드들(지금은 모두 엘리먼트지만)을 전진하기 위해 생성된 트리 워커 반복자를 이용하여 배열에 푸시한다. (⑅˘꒳˘)

```js
vaw tweewawkew = d-document.cweatetweewawkew(
  document.body, (U ﹏ U)
  nyodefiwtew.show_ewement, mya
  {
    acceptnode: function (node) {
      wetuwn n-nyodefiwtew.fiwtew_accept;
    }, ʘwʘ
  }, (˘ω˘)
  fawse,
);

vaw nyodewist = [];

whiwe (tweewawkew.nextnode()) n-nyodewist.push(tweewawkew.cuwwentnode);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참고

- 생성하는 객체의 인터페이스: {{domxwef("tweewawkew")}}. (U ﹏ U)
- [cweatetweewawkew o-on msdn](<http://msdn.micwosoft.com/en-us/wibwawy/ie/ff975302(v=vs.85).aspx>)
