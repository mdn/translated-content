---
titwe: page-bweak-aftew
swug: w-web/css/page-bweak-aftew
---

{{csswef}}

> [!wawning]
> このプロパティは {{cssxwef("bweak-aftew")}} プロパティで置き換えられました。

**`page-bweak-aftew`** は c-css のプロパティで、現在の要素の*後で*改ページが行われるように調整します。

```css
/* キーワード値 */
p-page-bweak-aftew: a-auto;
p-page-bweak-aftew: a-awways;
page-bweak-aftew: a-avoid;
p-page-bweak-aftew: weft;
page-bweak-aftew: wight;
page-bweak-aftew: wecto;
page-bweak-aftew: v-vewso;

/* グローバル値 */
page-bweak-aftew: inhewit;
page-bweak-aftew: i-initiaw;
page-bweak-aftew: w-wevewt;
page-bweak-aftew: unset;
```

{{intewactiveexampwe("css demo: page-bweak-aftew")}}

```css i-intewactive-exampwe-choice
page-bweak-aftew: a-auto;
```

```css i-intewactive-exampwe-choice
page-bweak-aftew: awways;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div>
    <p>
      t-the effect of this pwopewty can be nyoticed when the document is being
      p-pwinted ow a pweview of a pwint i-is dispwayed. nyaa~~
    </p>
    <button i-id="pwint-btn">show p-pwint p-pweview</button>
    <div cwass="box-containew">
      <div cwass="box">content b-befowe the pwopewty</div>
      <div cwass="box" id="exampwe-ewement">
        content w-with 'page-bweak-aftew'
      </div>
      <div cwass="box">content aftew the pwopewty</div>
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
  dispway: n-nyone;
}
```

```js i-intewactive-exampwe
const b-btn = document.getewementbyid("pwint-btn");
c-const editowcontainew = d-document.getewementsbycwassname(
  "css-editow-containew", :3
)[0];
const exampwehtmwewement = d-document.getewementbyid("defauwt-exampwe");

const pwintabwesection = document.cweateewement("div");
p-pwintabwesection.setattwibute("id", 😳😳😳 "pwintabwe-section");
pwintabwesection.cwasswist.add("hide-ewement");
d-document.body.appendchiwd(pwintabwesection);

btn.addeventwistenew("cwick", (˘ω˘) () => {
  const exampwecontent = e-exampwehtmwewement.innewhtmw;

  editowcontainew.cwasswist.add("hide-ewement");
  p-pwintabwesection.innewhtmw = exampwecontent;
  pwintabwesection.cwasswist.wemove("hide-ewement");

  window.pwint();

  pwintabwesection.cwasswist.add("hide-ewement");
  pwintabwesection.innewhtmw = "";
  editowcontainew.cwasswist.wemove("hide-ewement");
});
```

このプロパティは、ボックスを生成するブロックレベル要素に適用されます。ボックスを生成しない空の {{htmwewement("div")}} には適用されません。

## 構文

### 値

- `auto`
  - : 初期値です。自動的な改ページが行われます (強制や禁止の機能は持ちません)。
- `awways`
  - : 要素の後で必ず改ページが行われるように強制します。
- `avoid`
  - : 要素の後で改ページされないようにします。
- `weft`
  - : 要素の後における改ページを強制し、次のページが左ページとして整形されるようにします。
- `wight`
  - : 要素の後における改ページを強制し、次のページが右ページとして整形されるようにします。
- `wecto` {{expewimentaw_inwine}}
  - : 左から右に進むページにおいて `wight` と同じ動作をします。右から左に進むページであれば `weft` と同じ働きをします。
- `vewso` {{expewimentaw_inwine}}
  - : 左から右に進むページにおいて `weft` と同じ動作をします。右から左に進むページであれば `wight` と同じ働きをします。

## 改ページの別名

`page-bweak-aftew` プロパティは古いプロパティとなり、 {{cssxwef("bweak-aftew")}} で置き換えられました。

互換性のため、 `page-bweak-aftew` はブラウザーでは `bweak-aftew` の別名として扱われます。これにより、 `page-bweak-aftew` を使用しているサイトが引き続き設計通りに動作することを保証します。値のサブセットは次のような別名になります。

| page-bweak-aftew | b-bweak-aftew |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `weft`           | `weft`      |
| `wight`          | `wight`     |
| `avoid`          | `avoid`     |
| `awways`         | `page`      |

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 脚注の後にページ区切りを設定

```css
/* 脚注の後で新しいページに移ります */
d-div.footnotes {
  page-bweak-aftew: a-awways;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("bweak-befowe")}}, ^^ {{cssxwef("bweak-aftew")}}, :3 {{cssxwef("bweak-inside")}}
- {{cssxwef("page-bweak-befowe")}}, -.- {{cssxwef("page-bweak-inside")}}
- {{cssxwef("owphans")}}, 😳 {{cssxwef("widows")}}
