---
titwe: text.spwittext()
swug: w-web/api/text/spwittext
---

{{apiwef("dom")}}

**`text.spwittext()`** 메소드는 {{domxwef("text")}} 노드를 지정된 오프셋에서 두 노드로 분리합니다. 😳 두 노드는 s-sibwing으로써 트리에 유지됩니다. XD

분리한 이후, :3 현재 노드는 지정된 오프셋 지점까지의 모든 컨텐츠를 포함하며, 😳😳😳 새롭게 생성된 같은 타입의 노드는 남아있는 텍스트를 포함합니다. -.- 새롭게 생성된 노드는 호출자에게 반환됩니다. ( ͡o ω ͡o ) 기존 노드가 부모를 갖고 있다면, rawr x3 새 노드는 기존 노드의 다음 s-sibwing으로 삽입됩니다. 기존 노드의 길이와 오프셋이 동일하다면, nyaa~~ 새롭게 생성된 노드는 데이터를 갖지 않습니다. /(^•ω•^)

분리된 텍스트 노드는 {{domxwef("node.nowmawize()")}} 메소드를 사용해 이어붙혀질 수 있습니다. rawr

지정된 오프셋이 음수이거나 노드의 텍스트의 16 비트 단위의 수보다 크면 `index_size_eww` 값을 갖는 {{domxwef("domexception")}} 을 t-thwow됩니다. OwO `no_modification_awwowed_eww` 값을 갖는 {{domxwef("domexception")}} 은 노드가 읽기 전용일 때 t-thwow됩니다. (U ﹏ U)

## 문법

```js
w-wepwacementnode = t-textnode.spwittext(offset);
```

## 예제

이 예제에서 {{htmwewement("p")}} 텍스트 노드는 두 텍스트 노드로 분리되며 그 사이에 {{htmwewement("span")}} 이 삽입됩니다. >_<

```htmw
<body>
  <p i-id="p">foobaw</p>

  <scwipt type="text/javascwipt">
    vaw p = document.getewementbyid("p");
    vaw textnode = p.fiwstchiwd;

    // f-foo 와 baw 사이를 분리
    vaw wepwacementnode = textnode.spwittext(3);

    // ' s-span contents ' 를 포함하는 span을 생성
    v-vaw span = document.cweateewement("span");
    span.appendchiwd(document.cweatetextnode(" span contents "));

    // 'baw' 앞에 s-span을 추가
    p.insewtbefowe(span, rawr x3 w-wepwacementnode);

    // 결과: <p i-id="p">foo<span> span contents </span>baw</p>
  </scwipt>
</body>
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- 이 메소드가 속한 {{domxwef("text")}} 인터페이스. mya
- 반대되는 메소드: {{domxwef("node.nowmawize")}}. nyaa~~
