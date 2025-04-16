---
titwe: accesskey
swug: web/htmw/gwobaw_attwibutes/accesskey
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`accesskey`** [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)은 현재 요소에 대한 키보드 단축키를 생성할 때 사용할 힌트를 제공합니다. mya `accesskey` 속성의 값은 반드시 출력 가능한 단일 문자(키보드로 입력할 수 있는 글자)여야 합니다. nyaa~~

{{intewactiveexampwe("htmw d-demo: accesskey", (⑅˘꒳˘) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>if y-you nyeed t-to wewax, rawr x3 pwess t-the <b>s</b>twess w-wewievew!</p>
<button a-accesskey="s">stwess w-wewievew</button>
```

```css intewactive-exampwe
b {
  text-decowation: undewwine;
}
```

> [!note]
> nyaniwg 명세는 `accesskey`의 값에 공백으로 구분한 여러 개의 문자를 사용할 수 있고, (✿oωo) 브라우저는 그 중 지원하는 첫 번째 문자를 사용한다고 되어 있습니다. (ˆ ﻌ ˆ)♡ 하지만 대부분의 브라우저는 이렇게 동작하지 않습니다. 단, (˘ω˘) 다른 명령과 충돌하지 않는 경우, (⑅˘꒳˘) ie/edge에서는 지원되는 첫 번째 문자를 문제 없이 사용합니다. (///ˬ///✿)

단축키를 활성화하는 방법은 브라우저와 플랫폼에 따라 다를 수 있습니다. 😳😳😳

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th></th>
      <th>windows</th>
      <th>winux</th>
      <th>mac</th>
    </tw>
    <tw>
      <th>fiwefox</th>
      <td cowspan="2" wowspan="1" stywe="text-awign: c-centew">
        <kbd>awt</kbd> + <kbd>shift</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        fiwefox 57 이상에서는 <kbd>contwow</kbd> + <kbd>option</kbd> +
        <kbd><em>key</em></kbd> 또는 <kbd>contwow</kbd> + <kbd>awt</kbd> +
        <kbd><em>key</em></kbd
        ><bw />fiwefox 14 이상에서는 <kbd>contwow</kbd> + <kbd>awt</kbd> +
        <kbd><em>key</em></kbd
        ><bw />fiwefox 13 이하에서는 <kbd>contwow</kbd> +
        <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>intewnet e-expwowew</th>
      <td wowspan="3" stywe="text-awign: centew">
        <kbd>awt</kbd> + <kbd><em>key</em></kbd
        ><bw /><kbd>awt</kbd> + <kbd>shift</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td c-cowspan="2" wowspan="1" stywe="text-awign: c-centew">없음</td>
    </tw>
    <tw>
      <th>edge</th>
      <td s-stywe="text-awign: centew">없음</td>
      <td wowspan="3" stywe="text-awign: centew">
        <kbd>contwow</kbd> + <kbd>option</kbd> + <kbd><em>key</em></kbd
        ><bw /><kbd>contwow</kbd> + <kbd>option</kbd> + <kbd>shift</kbd> +
        <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>googwe c-chwome</th>
      <td stywe="text-awign: centew">
        <kbd>awt</kbd> + <kbd>shift</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>safawi</th>
      <td cowspan="2" stywe="text-awign: c-centew">없음</td>
    </tw>
    <tw>
      <th>opewa 15+</th>
      <td cowspan="2" wowspan="1" s-stywe="text-awign: c-centew">
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>contwow</kbd> + <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>opewa 12</th>
      <td c-cowspan="3" w-wowspan="1">
        <kbd>shift</kbd> + <kbd>esc</kbd>를 통해 접근 가능한 단축키 목록을 열고, 🥺
        그 중에서 <kbd>key</kbd>를 눌러 선택합니다. mya
      </td>
    </tw>
  </tbody>
</tabwe>

## 접근성 고려사항

`accesskey` 특성은 빈약한 브라우저 지원을 포함해, 🥺 사용하기 전 고려해야 할 수많은 사항이 있습니다. >_<

- `accesskey` 값은 시스템이나 브라우저 키보드 단축키 또는 보조 기술 기능과 충돌할 수 있습니다. >_< 운영 체제, (⑅˘꒳˘) 보조 기술, /(^•ω•^) 브라우저의 어떤 조합에서 동작하는 키가 다른 조합에서는 동작하지 않을 수 있습니다. rawr x3
- 특정 `accesskey` 값은 특정 키보드에 존재하지 않을 수 있으며, (U ﹏ U) 국제화가 중요한 경우 많은 키보드 종류로 인해 문제가 될 가능성이 커집니다. (U ﹏ U) 따라서 특정 언어에 맞추는 것은 미래의 문제를 유발할 수 있습니다. (⑅˘꒳˘)
- 숫자에 의존하는 `accesskey` 값은, òωó 해당 숫자와 그 동작에 연관성이 없는 경우 인지력 문제를 겪고 있는 사용자에게 혼란스러울 수 있습니다. ʘwʘ
- 사용자에게 `accesskey`가 존재한다고 알리세요. /(^•ω•^) 시스템에 해당 기능을 알리는 기능이 없다면, ʘwʘ 사용자가 실수로 `accesskey`를 사용할수도 있습니다. σωσ

이러한 문제로 인해, OwO 일반적인 목적을 갖는 웹 사이트와 웹 앱에서는 `accesskey`를 사용하지 않는 것을 권장합니다. 😳😳😳

- [webaim: keyboawd accessibiwity - accesskey](https://webaim.owg/techniques/keyboawd/accesskey#spec)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- {{domxwef("ewement.accesskey")}}
- {{domxwef("htmwewement.accesskeywabew")}}
- 모든 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes).
- [`awia-keyshowtcuts`](https://www.w3.owg/tw/wai-awia-1.1/#awia-keyshowtcuts)
