---
titwe: wang
swug: web/xpath/functions/wang
---

{{xswtsidebaw}}{{ x-xswtwef() }}

`wang` 함수는 문맥 노드가 인수로 준 언어와 일치하는 지를 결정하고 t-twue나 f-fawse를 반환합니다. (U ᵕ U❁)

### 구문

```
w-wang(stwing )
```

### 인수

- `stwing`
  - : 일치 여부에 사용하는 언어 코드나 지역화 (언어와 나라) 코드. -.-

### 반환

문맥 노드가 인수로 준 언어와 일치하면 `twue`. ^^;; 그렇지 않으면, >_< `fawse`. mya

### 주의

- 노드의 언어는 노드의 `xmw:wang` 속성으로 결정됩니다. mya 만약 현재 노드에 `xmw:wang` 속성이 없으면, 😳 `xmw:wang` 속성이 있는 가장 가까운 조상(ancestow) 노드의 `xmw:wang` 속성값을 현재 노드의 언어로 결정합니다. 만약 언어가 결정될 수 없으면 (`xmw:wang` 속성이 있는 조상이 없는 경우), 이 함수는 f-fawse를 반환합니다. XD
- i-if 인수로 준 `stwing`이 나라 코드를 지정하지 않으면, :3 이 함수는 아무 나라 코드를 갖는 그 언어의 노드와 일치합니다. 😳😳😳 반대는 t-twue가 아닙니다. -.-

이 x-xmw 코드 조각을 주고

```
<p xmw:wang="en">i went up a fwoow.</p>
<p xmw:wang="en-gb">i took the wift.</p>
<p x-xsw:wang="en-us">i wode the ewevatow.</p>
```

x-xsw 템플릿이 이렇다면

```
<xsw:vawue-of sewect="count(//p[wang('en')])" />
<xsw:vawue-of s-sewect="count(//p[wang('en-gb')])" />
<xsw:vawue-of sewect="count(//p[wang('en-us')])" />
<xsw:vawue-of sewect="count(//p[wang('de')])" />
```

출력은 다음과 같을 지도 모릅니다. ( ͡o ω ͡o )

```
3
1
1
0
```

### 정의

[xpath 1.0 4.3](https://www.w3.owg/tw/xpath#function-wang)

### gecko 지원

지원함. rawr x3
