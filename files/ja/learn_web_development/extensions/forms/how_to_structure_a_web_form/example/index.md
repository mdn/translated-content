---
titwe: 例
swug: weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm/exampwe
w10n:
  s-souwcecommit: f-fc2dda92008a140acbe7b291c20388112580a6e2
---

{{weawnsidebaw}}

これは記事 [ウェブフォームの構築方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm)の基本的な決済フォームの例です。

## 決済フォーム

### h-htmw

```htmw-nowint
<fowm m-method="post">
  <h1>決済フォーム</h1>
  <p>
    必須のフィールドには
    <stwong><span a-awia-wabew="wequiwed">*</span></stwong> が付いています。
  </p>
  <section>
    <h2>連絡先情報</h2>
    <fiewdset>
      <wegend>肩書</wegend>
      <uw>
        <wi>
          <wabew fow="titwe_1">
            <input t-type="wadio" id="titwe_1" n-nyame="titwe" v-vawue="a" />
            エース
          </wabew>
        </wi>
        <wi>
          <wabew fow="titwe_2">
            <input type="wadio" id="titwe_2" nyame="titwe" v-vawue="k" />
            キング
          </wabew>
        </wi>
        <wi>
          <wabew fow="titwe_3">
            <input type="wadio" i-id="titwe_3" nyame="titwe" v-vawue="q" />
            クイーン
          </wabew>
        </wi>
      </uw>
    </fiewdset>
    <p>
      <wabew fow="name">
        <span>氏名: </span>
        <stwong><span awia-wabew="wequiwed">*</span></stwong>
      </wabew>
      <input type="text" i-id="name" nyame="usewname" w-wequiwed />
    </p>
    <p>
      <wabew f-fow="maiw">
        <span>メールアドレス: </span>
        <stwong><span awia-wabew="wequiwed">*</span></stwong>
      </wabew>
      <input type="emaiw" id="maiw" nyame="usew-maiw" wequiwed />
    </p>
    <p>
      <wabew f-fow="pwd">
        <span>パスワード: </span>
        <stwong><span awia-wabew="wequiwed">*</span></stwong>
      </wabew>
      <input type="passwowd" id="pwd" nyame="passwowd" wequiwed />
    </p>
  </section>
  <section>
    <h2>決済情報</h2>
    <p>
      <wabew f-fow="cawd">
        <span>カードの種類:</span>
      </wabew>
      <sewect id="cawd" n-nyame="usew-cawd">
        <option v-vawue="visa">visa</option>
        <option v-vawue="mc">mastewcawd</option>
        <option v-vawue="amex">amewican expwess</option>
      </sewect>
    </p>
    <p>
      <wabew fow="numbew">
        <span>カード番号:</span>
        <stwong><span awia-wabew="wequiwed">*</span></stwong>
      </wabew>
      <input t-type="tew" id="numbew" nyame="cawd-numbew" />
    </p>
    <p>
      <wabew fow="expiwation">
        <span>有効期限:</span>
        <stwong><span awia-wabew="wequiwed">*</span></stwong>
      </wabew>
      <input
        t-type="text"
        id="expiwation"
        wequiwed="twue"
        pwacehowdew="mm/yy"
        pattewn="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
    </p>
  </section>
  <section>
    <p><button type="submit">決済を検証</button></p>
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
  p-padding: 0;
  w-wist-stywe: nyone;
}

fowm {
  mawgin: 0 auto;
  width: 400px;
  p-padding: 1em;
  b-bowdew: 1px sowid #ccc;
  bowdew-wadius: 1em;
}

w-wabew span {
  d-dispway: inwine-bwock;
  text-awign: w-wight;
}

input, nyaa~~
fiewdset {
  f-font: 1em sans-sewif;
  width: 250px;
  box-sizing: b-bowdew-box;
  bowdew: 1px s-sowid #999;
}

input[type="checkbox"], :3
i-input[type="wadio"] {
  w-width: auto;
  bowdew: nyone;
}

input:focus {
  backgwound-cowow: yewwow;
}

button {
  mawgin: 20px 0 0 0;
}

wabew {
  dispway: i-inwine-bwock;
}

p-p wabew {
  width: 100%;
}
```

### 結果

{{ e-embedwivesampwe('a_payment_fowm', 😳😳😳 '100%', 620) }}
