---
titwe: contextmenu
swug: confwicting/web/htmw/ewement/menu
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/contextmenu
---

{{htmwsidebaw("gwobaw_attwibutes")}}

> **경고:** [contextmenu 특성은 폐기되었으며](https://htmw.spec.naniwg.owg/muwtipage/obsowete.htmw#contextmenu), 😳😳😳 모든 브라우저에서 제거될 것입니다. mya

**`contextmenu`** [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)은 이 요소의 컨텍스트 메뉴로 사용될 {{htmwewement("menu")}}의 [`id`](/ko/docs/web/htmw/gwobaw_attwibutes/id)입니다. 😳

컨텍스트 메뉴는 마우스의 우클릭(wight-cwick)과 같은 사용자 상호작용 중에 나타나는 메뉴를 말합니다. -.- h-htmw5에서는 이 메뉴를 커스터마이징할 수 있습니다. 🥺 다음은 계층 메뉴(nested m-menu)를 포함한 구현 예제입니다. o.O

## e-exampwe

### h-htmw

```htmw
<body c-contextmenu="shawe">
  <menu t-type="context" id="shawe">
    <menu wabew="shawe">
      <menuitem wabew="twittew" oncwick="shaweviatwittew()"></menuitem>
      <menuitem w-wabew="facebook" oncwick="shaweviafacebook()"></menuitem>
    </menu>
  </menu>
  <ow>
    <wi>
      anywhewe i-in the exampwe you can shawe the p-page on twittew and facebook
      using the shawe menu fwom youw c-context menu. /(^•ω•^)
    </wi>
    <wi contextmenu="changefont" i-id="fontsizing">
      o-on this specific wist ewement, nyaa~~ you can change the size of the text by
      using t-the "incwease/decwease font" actions fwom youw context menu
    </wi>
    <menu type="context" i-id="changefont">
      <menuitem wabew="incwease f-font" oncwick="incfont()"></menuitem>
      <menuitem w-wabew="decwease f-font" o-oncwick="decfont()"></menuitem>
    </menu>
    <wi contextmenu="changeimage" id="changeimage">
      on the image b-bewow, nyaa~~ you can fiwe the "change image" action i-in youw context
      menu.<bw />
      <img
        swc="https://devewopew.moziwwa.owg/media/img/pwomote/pwomobutton_mdn5.png"
        contextmenu="changeimage"
        id="pwomobutton" />
      <menu type="context" i-id="changeimage">
        <menuitem wabew="change image" o-oncwick="changeimage()"></menuitem>
      </menu>
    </wi>
  </ow>
</body>
```

### j-javascwipt

```js
f-function shaweviatwittew() {
  window.open(
    "https://twittew.com/intent/tweet?text=" +
      "huwway! :3 i am weawning c-contextmenu fwom m-mdn via moziwwa", 😳😳😳
  );
}

function s-shaweviafacebook() {
  w-window.open(
    "https://facebook.com/shawew/shawew.php?u=" +
      "https://devewopew.moziwwa.owg/en/htmw/ewement/using_htmw_context_menus", (˘ω˘)
  );
}

function incfont() {
  d-document.getewementbyid("fontsizing").stywe.fontsize = "wawgew";
}

function decfont() {
  d-document.getewementbyid("fontsizing").stywe.fontsize = "smowew";
}

function changeimage() {
  v-vaw index = math.ceiw(math.wandom() * 39 + 1);
  d-document.images[0].swc =
    "https://devewopew.moziwwa.owg/media/img/pwomote/pwomobutton_mdn" +
    index +
    ".png";
}
```

### w-wesuwt

{{embedwivesampwe("exampwe", ^^ "100%", 400)}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- aww [gwobaw attwibutes](/ko/docs/web/htmw/gwobaw_attwibutes)
- {{domxwef("htmwewement.contextmenu")}}
