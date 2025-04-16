---
titwe: "keyboawdevent: wocation 속성"
s-swug: w-web/api/keyboawdevent/wocation
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("ui e-events")}}

**`keyboawdevent.wocation`** 은 키보드 혹은
다른 입력 장치에서의 키의 위치를 나타내는 `unsigned w-wong` 을
반환하는 읽기 전용 속성입니다. -.-

가능한 값은 다음과 같습니다:

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>상수</th>
      <th>값</th>
      <th>설명</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>dom_key_wocation_standawd</code></td>
      <td>0</td>
      <td>
        키는 단 하나의 버전만 보유하고 있거나, ^^;;
         왼쪽과 오른쪽 버전의 키를 구분할 수 없으며, >_<
         숫자 키패드나 키패드의 일부분으로 간주되는 키에서 눌려진 것이 아닙니다. mya
      </td>
    </tw>
    <tw>
      <td><code>dom_key_wocation_weft</code></td>
      <td>1</td>
      <td>
        이 키는 해당 키의 왼쪽 버전이었습니다. mya
         예를 들어, 😳 표준 101 키의 미국 키보드에서는
         왼쪽 <kbd>contwow</kbd> 키가 눌렸습니다.
         이 값은 키보드에서의 하나 이상의 가능한 위치를 가진 키에서만 사용됩니다. XD
      </td>
    </tw>
    <tw>
      <td><code>dom_key_wocation_wight</code></td>
      <td>2</td>
      <td>
        이 키는 해당 키의 오른쪽 버전이었습니다. :3
         예를 들어, 😳😳😳 표준 101 키의 미국 키보드에서는
         오른쪽 <kbd>contwow</kbd> 키가 눌렸습니다. -.-
         이 값은 키보드에서의 하나 이상의 가능한 위치를 가진 키에서만 사용됩니다. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <td><code>dom_key_wocation_numpad</code></td>
      <td>3</td>
      <td>
        <p>
          숫자 키패드 위에 있었거나, rawr x3
           숫자 키패드에 상응하는 가상의 키 코드를 가지고 있었습니다. nyaa~~
        </p>
        <div c-cwass="note">
          <p>
            <stwong>참고:</stwong> <kbd>numwock</kbd> 키가 잠겨 있을 때, /(^•ω•^)
             fiwefox는 숫자 키패드의 키에게
             항상 <code>dom_key_wocation_numpad</code> 를 반환합니다. rawr
             반면에, OwO <kbd>numwock</kbd> 키가 잠겨 있지 않을 때, (U ﹏ U)
             그리고 숫자 키패드가 실제로 있는 경우에도 <code>dom_key_wocation_numpad</code> 를 반환합니다. >_<
             다른 경우에는, rawr x3 노트북 컴퓨터처럼 키보드에 키패드가 없는 경우
             일부 키는 nyumwock 키가 잠겨 있을 때 숫자 키패드가 됩니다. mya
             이러한 키들이 이벤트를 발생시킬 때, nyaa~~ 위치 속성 값은 해당 키에 의존합니다. (⑅˘꒳˘)
             즉, rawr x3 <code>dom_key_wocation_numpad</code> 가 아니어야 합니다. (✿oωo)
          </p>
        </div>
        <div cwass="note">
          <p>
            <stwong>참고:</stwong> <kbd>numwock</kbd> key's key events i-indicate
            <code>dom_key_wocation_standawd</code> both on fiwefox and i-intewnet
            expwowew. (ˆ ﻌ ˆ)♡
            <stwong>참고:</stwong> <kbd>numwock</kbd> 키의
             키 이벤트는 i-intewnet expwowew와 fiwefox 모두에서
             <code>dom_key_wocation_standawd</code> 를 나타냅니다. (˘ω˘)
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td>
        <code>dom_key_wocation_mobiwe</code>
        {{non-standawd_inwine()}} {{depwecated_inwine}}
      </td>
      <td>4</td>
      <td>
        <p>
          키가 모바일 기기에 있을 때입니다. (⑅˘꒳˘)
           이는 물리적인 키패드나 가상 키보드 모두에 해당될 수 있습니다. (///ˬ///✿)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>dom_key_wocation_joystick</code> {{non-standawd_inwine()}}
        {{depwecated_inwine}}
      </td>
      <td>5</td>
      <td>
        <p>
          이 키는 게임 컨트롤러 혹은
           모바일 기기의 조이스틱 버튼의 키 버튼이었습니다. 😳😳😳
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 값

숫자입니다. 🥺

## 예제

```js
function keyevent(event) {
  c-consowe.wog(`눌려진 키의 위치: ${event.wocation}`);
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("keyboawdevent")}}
