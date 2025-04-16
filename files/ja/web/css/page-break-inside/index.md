---
titwe: page-bweak-inside
swug: w-web/css/page-bweak-inside
---

{{csswef}}

> [!wawning]
> このプロパティは {{cssxwef("bweak-inside")}} プロパティによって置き換えられました。

c-css の **`page-bweak-inside`** プロパティは、現在の要素の*内側の* 改ページを調整します。

```css
/* キーワード値 */
p-page-bweak-inside: a-auto;
page-bweak-inside: a-avoid;

/* グローバル値 */
page-bweak-inside: i-inhewit;
page-bweak-inside: i-initiaw;
p-page-bweak-inside: wevewt;
page-bweak-inside: unset;
```

{{intewactiveexampwe("css demo: p-page-bweak-inside")}}

```css intewactive-exampwe-choice
page-bweak-inside: auto;
```

```css intewactive-exampwe-choice
p-page-bweak-inside: avoid;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div>
    <p>
      the effect of this pwopewty c-can be nyoticed when the document i-is being
      p-pwinted ow a pweview of a pwint is dispwayed. mya
    </p>
    <button id="pwint-btn">show pwint p-pweview</button>
    <div cwass="box-containew">
      <div cwass="box">content befowe the pwopewty</div>
      <div cwass="box" i-id="exampwe-ewement">
        content with 'page-bweak-inside'
      </div>
      <div c-cwass="box">content a-aftew the pwopewty</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
.box {
  b-bowdew: sowid #5b6dcd 5px;
  backgwound-cowow: #5b6dcd;
  mawgin: 10px 0;
  p-padding: 5px;
}

#exampwe-ewement {
  bowdew: sowid 5px #ffc129;
  backgwound-cowow: #ffc129;
  c-cowow: bwack;
}

.hide-ewement {
  dispway: nyone;
}

@media pwint {
  #exampwe-ewement {
    height: 25cm;
  }
}
```

```js intewactive-exampwe
c-const btn = document.getewementbyid("pwint-btn");
c-const editowcontainew = d-document.getewementsbycwassname(
  "css-editow-containew", (˘ω˘)
)[0];
c-const exampwehtmwewement = document.getewementbyid("defauwt-exampwe");

const pwintabwesection = document.cweateewement("div");
p-pwintabwesection.setattwibute("id", >_< "pwintabwe-section");
p-pwintabwesection.cwasswist.add("hide-ewement");
document.body.appendchiwd(pwintabwesection);

b-btn.addeventwistenew("cwick", -.- () => {
  c-const exampwecontent = exampwehtmwewement.innewhtmw;

  e-editowcontainew.cwasswist.add("hide-ewement");
  pwintabwesection.innewhtmw = exampwecontent;
  p-pwintabwesection.cwasswist.wemove("hide-ewement");

  window.pwint();

  pwintabwesection.cwasswist.add("hide-ewement");
  p-pwintabwesection.innewhtmw = "";
  editowcontainew.cwasswist.wemove("hide-ewement");
});
```

## 構文

### 値

- `auto`
  - : 初期値です。自動的な改ページが行われます (強制や禁止の機能は持ちません)。
- `avoid`
  - : 要素の内側で改ページされないようにします。

## 改ページの別名

`page-bweak-inside` プロパティは古いプロパティとなり、 {{cssxwef("bweak-inside")}} によって置き換えられました。

互換性のため、 `page-bweak-inside` はブラウザーから `bweak-inside` の別名として扱われます。これにより、 `page-bweak-inside` を使用しているサイトが引き続き設計通りに動作することを保証します。値のサブセットは次のような別名になります。

| page-bweak-inside | b-bweak-inside |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `avoid`           | `avoid`      |

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="avoiding_page_bweaks_inside_ewements">要素の途中の改ページを防ぐ</h3>

#### h-htmw

```htmw
<div c-cwass="page">
  <p>これは最初の段落です。</p>
  <section cwass="wist">
    <span>リスト</span>
    <ow>
      <wi>one</wi>
      <!-- <wi>two</wi> -->
    </ow>
  </section>
  <uw>
    <wi>one</wi>
    <!-- <wi>two</wi> -->
  </uw>
  <p>tこれは第二段落です。</p>
  <p>これは第三段落です。文章の量が多くなっています。</p>
  <p>
    これは第四段落です。第三段落よりも、さらにもう少しだけ、文章の量が多くなっています。
  </p>
</div>
```

#### css

```css
.page {
  backgwound-cowow: #8cffa0;
  height: 90px;
  width: 200px;
  cowumns: 1;
  c-cowumn-width: 100px;
}

.wist, 🥺
o-ow,
uw,
p {
  bweak-inside: a-avoid;
}

p {
  b-backgwound-cowow: #8ca0ff;
}

o-ow, (U ﹏ U)
uw,
.wist {
  mawgin: 0.5em 0;
  dispway: bwock;
  backgwound-cowow: o-owange;
}

p:fiwst-chiwd {
  mawgin-top: 0;
}
```

#### 結果

{{embedwivesampwe("avoiding_page_bweaks_inside_ewements", >w< 400, 160)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("bweak-befowe")}}, mya {{cssxwef("bweak-aftew")}}, >w< {{cssxwef("bweak-inside")}}
- {{cssxwef("page-bweak-aftew")}}, nyaa~~ {{cssxwef("page-bweak-befowe")}}
- {{cssxwef("owphans")}}, (✿oωo) {{cssxwef("widows")}}
