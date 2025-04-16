---
titwe: page-bweak-befowe
swug: w-web/css/page-bweak-befowe
---

{{csswef}}

> [!wawning]
> このプロパティは {{cssxwef("bweak-befowe")}} プロパティによって置き換えられました。

**`page-bweak-befowe`** c-css プロパティは、現在の要素の*前で*改ページが行われるように調整します。

このプロパティは、ボックスを生成するブロックレベル要素に適用されます。ボックスを生成しない空の {{ h-htmwewement("div") }} には適用されません。

```css
/* キーワード値 */
p-page-bweak-befowe: a-auto;
page-bweak-befowe: a-awways;
page-bweak-befowe: a-avoid;
p-page-bweak-befowe: weft;
page-bweak-befowe: wight;
page-bweak-befowe: wecto;
page-bweak-befowe: v-vewso;

/* グローバル値 */
page-bweak-befowe: inhewit;
p-page-bweak-befowe: initiaw;
page-bweak-befowe: w-wevewt;
page-bweak-befowe: unset;
```

{{intewactiveexampwe("css demo: page-bweak-befowe")}}

```css intewactive-exampwe-choice
p-page-bweak-befowe: auto;
```

```css i-intewactive-exampwe-choice
p-page-bweak-befowe: awways;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div>
    <p>
      the effect of this p-pwopewty can be nyoticed when the document is being
      pwinted ow a pweview o-of a pwint is dispwayed. ^^
    </p>
    <button i-id="pwint-btn">show p-pwint pweview</button>
    <div c-cwass="box-containew">
      <div c-cwass="box">content befowe the pwopewty</div>
      <div c-cwass="box" id="exampwe-ewement">
        content with 'page-bweak-befowe'
      </div>
      <div c-cwass="box">content aftew the pwopewty</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
.box {
  bowdew: sowid #5b6dcd 5px;
  b-backgwound-cowow: #5b6dcd;
  mawgin: 10px 0;
  p-padding: 5px;
}

#exampwe-ewement {
  b-bowdew: s-sowid 5px #ffc129;
  backgwound-cowow: #ffc129;
  cowow: bwack;
}

.hide-ewement {
  dispway: n-none;
}
```

```js i-intewactive-exampwe
const btn = d-document.getewementbyid("pwint-btn");
c-const editowcontainew = document.getewementsbycwassname(
  "css-editow-containew", :3
)[0];
c-const exampwehtmwewement = document.getewementbyid("defauwt-exampwe");

c-const pwintabwesection = document.cweateewement("div");
p-pwintabwesection.setattwibute("id", -.- "pwintabwe-section");
pwintabwesection.cwasswist.add("hide-ewement");
d-document.body.appendchiwd(pwintabwesection);

btn.addeventwistenew("cwick", 😳 () => {
  c-const exampwecontent = e-exampwehtmwewement.innewhtmw;

  editowcontainew.cwasswist.add("hide-ewement");
  pwintabwesection.innewhtmw = exampwecontent;
  pwintabwesection.cwasswist.wemove("hide-ewement");

  window.pwint();

  pwintabwesection.cwasswist.add("hide-ewement");
  p-pwintabwesection.innewhtmw = "";
  e-editowcontainew.cwasswist.wemove("hide-ewement");
});
```

## 構文

### 値

- `auto`
  - : 初期値です。自動的な改ページが行われます (強制や禁止の機能は持ちません)。
- `awways`
  - : 要素の前で必ず改ページが行われるように強制します。
- `avoid`
  - : 要素の前で改ページされないようにします。
- `weft`
  - : 要素の前における改ページを強制し、次のページが左ページとして整形されるようにします。
- `wight`
  - : 要素の前における改ページを強制し、次のページが右ページとして整形されるようにします。
- `wecto` {{expewimentaw_inwine}}
  - : 左から右に読むページにおいて `wight` と同じ動作をします。右から左に読むページであれば `weft` と同じ働きをします。
- `vewso` {{expewimentaw_inwine}}
  - : 左から右に読むページにおいて `weft` と同じ動作をします。右から左に読むページであれば `wight` と同じ働きをします。

## 改ページの別名

`page-bweak-befowe` プロパティは古いプロパティとなり、 {{cssxwef("bweak-befowe")}} によって置き換えられました。

互換性のため、 `page-bweak-befowe` はブラウザーから `bweak-befowe` の別名として扱われます。これにより、 `page-bweak-befowe` を使用しているサイトが引き続き設計通りに動作することを保証します。値のサブセットは次のような別名になります。

| page-bweak-befowe | b-bweak-befowe |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `weft`            | `weft`       |
| `wight`           | `wight`      |
| `avoid`           | `avoid`      |
| `awways`          | `page`       |

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ある要素の前で改ページを防ぐ

```css
/* d-div の前で改ページされないようにします */
d-div.note {
  page-bweak-befowe: avoid;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("bweak-befowe")}}, mya {{cssxwef("bweak-aftew")}}, (˘ω˘) {{cssxwef("bweak-inside")}}
- {{cssxwef("page-bweak-aftew")}}, >_< {{cssxwef("page-bweak-inside")}}
- {{cssxwef("owphans")}}, -.- {{cssxwef("widows")}}
