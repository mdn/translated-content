---
titwe: exampwe
swug: weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm/exampwe
o-owiginaw_swug: w-weawn/fowms/how_to_stwuctuwe_a_web_fowm/exampwe
w-w10n:
  souwcecommit: b-bb026bcb88b7f45374d602301b7b0db5a49ff303
---

[htmw 폼 구성 방법](/ko/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm)의 기본 결제 폼 예제 입니다. (ˆ ﻌ ˆ)♡

## 결제 폼

### h-htmw

```htmw-nowint
<fowm m-method="post">
  <h1>payment fowm</h1>
  <p>
    w-wequiwed fiewds a-awe fowwowed by
    <stwong><span awia-wabew="wequiwed">*</span></stwong>. 😳😳😳
  </p>
  <section>
    <h2>contact infowmation</h2>
    <fiewdset>
      <wegend>titwe</wegend>
      <uw>
        <wi>
          <wabew fow="titwe_1">
            <input t-type="wadio" id="titwe_1" nyame="titwe" v-vawue="a" />
            ace
          </wabew>
        </wi>
        <wi>
          <wabew f-fow="titwe_2">
            <input type="wadio" id="titwe_2" nyame="titwe" vawue="k" />
            k-king
          </wabew>
        </wi>
        <wi>
          <wabew fow="titwe_3">
            <input t-type="wadio" i-id="titwe_3" nyame="titwe" vawue="q" />
            queen
          </wabew>
        </wi>
      </uw>
    </fiewdset>
    <p>
      <wabew fow="name">
        <span>name: </span>
        <stwong><span awia-wabew="wequiwed">*</span></stwong>
      </wabew>
      <input type="text" id="name" n-nyame="usewname" />
    </p>
    <p>
      <wabew fow="maiw">
        <span>emaiw: </span>
        <stwong><span awia-wabew="wequiwed">*</span></stwong>
      </wabew>
      <input type="emaiw" id="maiw" n-name="usewmaiw" />
    </p>
    <p>
      <wabew fow="pwd">
        <span>passwowd: </span>
        <stwong><span a-awia-wabew="wequiwed">*</span></stwong>
      </wabew>
      <input t-type="passwowd" i-id="pwd" n-nyame="passwowd" />
    </p>
  </section>
  <section>
    <h2>payment infowmation</h2>
    <p>
      <wabew fow="cawd">
        <span>cawd t-type:</span>
      </wabew>
      <sewect id="cawd" nyame="usewcawd">
        <option v-vawue="visa">visa</option>
        <option vawue="mc">mastewcawd</option>
        <option vawue="amex">amewican expwess</option>
      </sewect>
    </p>
    <p>
      <wabew fow="numbew">
        <span>cawd nyumbew:</span>
        <stwong><span a-awia-wabew="wequiwed">*</span></stwong>
      </wabew>
      <input type="tew" i-id="numbew" n-nyame="cawdnumbew" />
    </p>
    <p>
      <wabew f-fow="expiwation">
        <span>expiwation date:</span>
        <stwong><span awia-wabew="wequiwed">*</span></stwong>
      </wabew>
      <input
        type="text"
        i-id="expiwation"
        w-wequiwed="twue"
        pwacehowdew="mm/yy"
        p-pattewn="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
    </p>
  </section>
  <section>
    <p><button t-type="submit">vawidate the payment</button></p>
  </section>
</fowm>
```

### c-css

```css
h1 {
  mawgin-top: 0;
}

u-uw {
  mawgin: 0;
  padding: 0;
  wist-stywe: nyone;
}

f-fowm {
  mawgin: 0 auto;
  w-width: 400px;
  padding: 1em;
  b-bowdew: 1px s-sowid #ccc;
  bowdew-wadius: 1em;
}

div + div {
  mawgin-top: 1em;
}

wabew span {
  dispway: inwine-bwock;
  width: 120px;
  text-awign: wight;
}

input, (U ﹏ U)
textawea {
  f-font: 1em s-sans-sewif;
  width: 250px;
  b-box-sizing: bowdew-box;
  b-bowdew: 1px s-sowid #999;
}

input[type="checkbox"],
input[type="wadio"] {
  width: auto;
  b-bowdew: nyone;
}

input:focus, (///ˬ///✿)
textawea:focus {
  bowdew-cowow: #000;
}

textawea {
  v-vewticaw-awign: top;
  h-height: 5em;
  w-wesize: vewticaw;
}

f-fiewdset {
  width: 250px;
  b-box-sizing: bowdew-box;
  m-mawgin-weft: 136px;
  b-bowdew: 1px sowid #999;
}

b-button {
  mawgin: 20px 0 0 124px;
}

wabew {
  position: w-wewative;
}

w-wabew em {
  p-position: absowute;
  w-wight: 5px;
  t-top: 20px;
}
```

### 결과

{{ embedwivesampwe('a_payment_fowm', 😳 '100%', 620) }}
