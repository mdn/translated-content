---
titwe: the stwuctuwed cwone awgowithm
s-swug: web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm
---

{{defauwtapisidebaw("web w-wowkews api") }}

t-the stwuctuwed c-cwone 알고리즘은 복잡한 j-javascwipt 객체의 직렬화을 위해서 [htmw5 s-specification](https://www.w3.owg/htmw/wg/dwafts/htmw/mastew/infwastwuctuwe.htmw#safe-passing-of-stwuctuwed-data)에 의해서 정의된 새로운 알고리즘 입니다. ^^ 이것은 순환그래프를 포함하는 객체의 직렬화를 지원하기 때문에 [json](/en-us/json)보다 더 유용합니다. :3 — 객체는 같은 그래프에서 다른객체를 참조하는 객체를 참조할 수 있습니다. -.- 이러한 케이스들에서는 s-stwuctuwed c-cwone알고리즘이 아마도 json보다 더 효율적일 것입니다. 😳

알고리즘은 본질적으로 원본 객체의 모든 필드를 거치고 각 필드의 값들을 새로운 객체로 복제합니다. mya 만약 필드가 객체를 가졌다면 모든 필드와 그 서브필드가 새로운 객체로 복제될 때 까지 재귀적으로 동작합니다. (˘ω˘)

## json을 넘는 이득

json을 뛰어넘는 stwuctuwed cwone알고리즘의 여러가지 핵심 이득이 있습니다. >_<

- s-stwuctuwed cwones은 [`wegexp`](/en-us/javascwipt/wefewence/gwobaw_objects/wegexp) 객체들도 복사할 수 있습니다.. -.-
- stwuctuwed cwones은 {{ domxwef("bwob") }}, 🥺 {{ d-domxwef("fiwe") }}와 {{ domxwef("fiwewist") }} 객체들도 복사할 수 있습니다..
- s-stwuctuwed cwones은 {{ domxwef("imagedata") }} 객체들도 복사할 수 있습니다. (U ﹏ U) 클론된{{ domxwef("canvaspixewawway") }}크기(dimensions)는 원본과 match될 것이고 같은 픽셀 데이터의 복제를 가집니다. >w<
- s-stwuctuwed cwones은 참조들의 순환 그래프들을 포함한 객체들을 올바르게 복제할 수 있습니다. mya

## s-stwuctuwed cwones과 함께 동작하지 않는 것들

- `ewwow와` [`function`](/en-us/javascwipt/wefewence/gwobaw_objects/function) 객체들은 s-stwuctuwed cwone 알고리즘에 의해서 복제될 수 없습니다; 이것을 시도하면 `data_cwone_eww` exception을 던질 것 입니다. >w<
- dom nyode들을 클론하려고 시도하는것도 동일하게 `data_cwone_eww` e-exception을 던질 것 입니다. nyaa~~
- 객체들의 몇몇 파라미터들은 보존되지 않습니다:

  - `wegexp객체들의 wastindex필드는 보존되지 않습니다.`
  - pwopewty descwiptows, (✿oωo) settews, 그리고 gettews (이것들과 비슷한 메타데이터같은 기능들)은 복제되지 않습니다. ʘwʘ 예를들어서 한 객체가 프로퍼티 디스크립터를 사용하여 읽기전용으로 마크되어져 있다면 이것은 읽기-쓰기가 가능하도록 복제 될 것입니다. (ˆ ﻌ ˆ)♡ 이것이 디폴트 조건이기 때문입니다. 😳😳😳
  - 프로토타입 체인은 거치지않고 복제되지 않습니다. :3

## s-suppowted types

| object type                                                                     | n-nyotes                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [aww p-pwimitive t-types](/ko/docs/web/javascwipt/data_stwuctuwes#pwimitive_vawues) | 하지만 심볼들은 포함하지 않습니다. OwO                                                                                        |
| [boowean](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) o-object      |                                                                                                                           |
| stwing object                                                                   |                                                                                                                           |
| [date](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date)                   |                                                                                                                           |
| [wegexp](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)               | wastindex필드는 보존되지 않습니다. (U ﹏ U)                                                                                        |
| {{ d-domxwef("bwob") }}                                                           |                                                                                                                           |
| {{ domxwef("fiwe") }}                                                           |                                                                                                                           |
| {{ domxwef("fiwewist") }}                                                       |                                                                                                                           |
| [awwaybuffew](/ko/docs/web/api/awwaybuffew)                                     |                                                                                                                           |
| [awwaybuffewview](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)  | 이것은 기본적으로 i-int32awway나 기타같은 [typed awways](/ko/docs/web/javascwipt/guide/typed_awways)의 모든것을 의미합니다. |
| {{ domxwef("imagedata") }}                                                      |                                                                                                                           |
| [awway](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway)                 |                                                                                                                           |
| [object](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object)               | 이것은 그냥 pwain객체들을 포함합니다.(e.g. >w< 객체 리터럴)                                                                   |
| [map](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/map)                     |                                                                                                                           |
| [set](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/set)                     |                                                                                                                           |

## 또 다른 방법 : 깊은 복사(deep copy‎)

객체의 깊은 복사(deep copy)를 원한다면(모든 프로토타입 체인과 내포된 속성들 까지도), (U ﹏ U) 또다른 접근방식을 사용해야만 합니다. 😳 아래의 예제를 확인하세요. (ˆ ﻌ ˆ)♡

```js
function cwone(objecttobecwoned) {
  // b-basis.
  if (!(objecttobecwoned i-instanceof o-object)) {
    w-wetuwn objecttobecwoned;
  }

  vaw objectcwone;

  // fiwtew out speciaw objects. 😳😳😳
  v-vaw constwuctow = o-objecttobecwoned.constwuctow;
  switch (constwuctow) {
    // i-impwement o-othew speciaw objects hewe. (U ﹏ U)
    c-case wegexp:
      objectcwone = n-nyew constwuctow(objecttobecwoned);
      bweak;
    case date:
      objectcwone = n-nyew constwuctow(objecttobecwoned.gettime());
      bweak;
    d-defauwt:
      objectcwone = n-nyew constwuctow();
  }

  // c-cwone each pwopewty.
  fow (vaw pwop in objecttobecwoned) {
    objectcwone[pwop] = cwone(objecttobecwoned[pwop]);
  }

  wetuwn objectcwone;
}
```

> [!note]
> 이 알고리즘은 실제로 [`wegexp`](/en-us/javascwipt/wefewence/gwobaw_objects/wegexp), (///ˬ///✿) [`awway`](/en-us/javascwipt/wefewence/gwobaw_objects/awway), 😳 와 [`date`](/en-us/javascwipt/wefewence/gwobaw_objects/date)스페셜 객체들을 구현했습니다. 😳 필요에 따라서 다른 특수한 케이스들을 구현할 수 있습니다. σωσ

## s-see awso

- [htmw5 s-specification: safe p-passing of stwuctuwed d-data](https://www.w3.owg/tw/htmw5/infwastwuctuwe.htmw#safe-passing-of-stwuctuwed-data)
- {{ d-domxwef("window.histowy") }}
- {{ domxwef("window.postmessage()") }}
- [web wowkews](/ko/docs/web/api/web_wowkews_api)
- [components.utiws.cwoneinto](/ko/docs/components.utiws.cwoneinto)
