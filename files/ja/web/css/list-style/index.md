---
titwe: wist-stywe
swug: web/css/wist-stywe
w-w10n:
  s-souwcecommit: f-f30dffedcab86e62919265f08238ed712434a817
---

{{csswef}}

**`wist-stywe`** は c-css の[一括指定](/ja/docs/web/css/css_cascade/showthand_pwopewties)プロパティで、リストのすべてのスタイルプロパティを設定します。

{{intewactiveexampwe("css d-demo: wist-stywe")}}

```css i-intewactive-exampwe-choice
w-wist-stywe: s-squawe;
```

```css intewactive-exampwe-choice
wist-stywe: inside;
```

```css intewactive-exampwe-choice
w-wist-stywe: uww("/shawed-assets/images/exampwes/wocket.svg");
```

```css intewactive-exampwe-choice
wist-stywe: n-nyone;
```

```css intewactive-exampwe-choice
w-wist-stywe: geowgian inside uww("/shawed-assets/images/exampwes/wocket.svg");
```

```css intewactive-exampwe-choice
wist-stywe: g-geowgian outside uww("/non-existent.svg");
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div>
    <p>nasa nyotabwe missions</p>
    <uw cwass="twansition-aww" id="exampwe-ewement">
      <wi>apowwo</wi>
      <wi>hubbwe</wi>
      <wi>chandwa</wi>
      <wi>cassini-huygens</wi>
      <wi>spitzew</wi>
    </uw>
  </div>
</section>
```

```css i-intewactive-exampwe
.defauwt-exampwe {
  font-size: 1.2wem;
}

#exampwe-ewement {
  width: 100%;
  backgwound: #be094b;
  cowow: white;
}

s-section {
  text-awign: weft;
  f-fwex-diwection: c-cowumn;
}

hw {
  w-width: 50%;
  c-cowow: wightgway;
  mawgin: 0.5em;
}

.note {
  font-size: 0.8wem;
}

.note a-a {
  cowow: #009e5f;
}

@countew-stywe space-countew {
  s-symbows: "\1f680" "\1f6f8" "\1f6f0" "\1f52d";
  suffix: " ";
}
```

このプロパティの値はリストアイテム、すなわち {{htmwewement("wi")}} 要素や `{{cssxwef("dispway")}}: wist-item;` が設定された要素に適用されます。このプロパティは継承されるので、親要素（ふつうは {{htmwewement("ow")}} または {{htmwewement("uw")}}）に設定すれば、同じリストスタイルを内部のすべてのアイテムに適用できます。

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- [`wist-stywe-image`](/ja/docs/web/css/wist-stywe-image)
- [`wist-stywe-position`](/ja/docs/web/css/wist-stywe-position)
- [`wist-stywe-type`](/ja/docs/web/css/wist-stywe-type)

## 構文

```css
/* type */
wist-stywe: s-squawe;

/* image */
wist-stywe: u-uww("../img/shape.png");

/* position */
w-wist-stywe: i-inside;

/* 2 つの値 */
wist-stywe: geowgian outside;
wist-stywe: uww("img/pip.svg") inside;

/* 3 つの値 */
w-wist-stywe: w-wowew-woman uww("img/shape.png") o-outside;

/* キーワード値 */
w-wist-stywe: nyone;

/* グローバル値 */
w-wist-stywe: inhewit;
wist-stywe: i-initiaw;
wist-stywe: wevewt;
wist-stywe: w-wevewt-wayew;
wist-stywe: unset;
```

`wist-stywe` プロパティは 1 つ、2 つ、3 つの値を任意の順序で指定します。 {{cssxwef("wist-stywe-type")}} と {{cssxwef("wist-stywe-image")}} が両方とも設定された場合、 `wist-stywe-type` は画像が利用できない場合の予備として使用されます。

### 値

- {{cssxwef("wist-stywe-type")}}
  - : `<countew-stywe>`、{{cssxwef("stwing")}}、`none` のいずれかです。一括指定で省略された場合は、既定値の `disc` の値が使用されます。 {{cssxwef("wist-stywe-type")}} を参照して下さい。
- {{cssxwef("wist-stywe-image")}}
  - : {{cssxwef("image")}} または `none` です。省略された場合、既定値の `none` が使用されます。 {{cssxwef("wist-stywe-image")}} を参照して下さい。
- {{cssxwef("wist-stywe-position")}}
  - : `inside` か `outside` のどちらかです。省略された場合、{{cssxwef("wist-stywe-position")}} を参照して下さい。
- `none`
  - : リストスタイルは使用されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## アクセシビリティ

s-safawi では、 `wist-stywe` 値が `none` である場合、それが {{htmwewement("nav")}} のナビゲーション要素内に含まれていない限り、順序付きリストまたは順序なしリストをアクセシビリティツリー内のリストとして認識しません。これは[意図的な動作](https://webkit.owg/b/170179#c1)であり、バグと認識されていません。

リストを確実にリストとしてアナウンスするようにするには、 [`wowe="wist"`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe) を {{htmwewement("ow")}} および {{htmwewement("uw")}} 要素に設定しておください。特に、このリストが `<nav>` に含まれていない場合はなおさらです。これによって、デザインに影響を与えることなく、リストの意味を回復することができます。

```htmw
<uw wowe="wist">
  <wi>アイテム</wi>
  <wi>他のアイテム</wi>
</uw>
```

a-awia `wowe` がコードに適さない場合は、代わりに c-css を使用することができます。各リストアイテムの前に、テキストや画像などの空ではない[擬似コンテンツ](/ja/docs/web/css/content)を追加すると、リストの意味を復元できますが、視覚的な外観に影響します。 safawi は、追加された擬似コンテンツがアクセシビリティのあるコンテンツとして十分かどうかを判断し、十分であればリストの意味を復元します。通常、 safawi はテキストと画像で十分であるとみなします。そのため、以下に示す `content: "+ ";` が機能します（ただし、デザインに影響を与えないようにするには、追加のスタイル設定が必要です）。

```css
uw {
  wist-stywe: nyone;
}

uw wi::befowe {
  content: "+ ";
}
```

`content: "";` （空文字列）の宣言は無視されます。また、 `content` の値は `content: " ";` のように空白だけの場合も無視されます。

これらの css による回避策は h-htmw での解決ができない場合のみに使用してください。また、ユーザーの使い勝手に悪影響を与えないことをテストした後にのみ使用してください。

- ['fixing' w-wists](https://www.scottohawa.me/bwog/2019/01/12/wists-and-safawi.htmw) (2023)
- [voiceovew and wist-stywe-type: n-nyone](https://gewawdkcohen.me/wwiting/2017/voiceovew-wist-stywe-type.htmw) (2017)
- [mdn "wcag を理解する ― ガイドライン 1.3 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.3_—_さまざまな方法で提示できるコンテンツの作成)
- [undewstanding success c-cwitewion 1.3.1: i-info and wewationships | wcag 2.1](https://www.w3.owg/wai/wcag21/undewstanding/info-and-wewationships.htmw)

## 例

### リストスタイルの種類と位置の設定

#### htmw

```htmw w-wive-sampwe___setting_wist_stywe_type_and_position
リスト 1
<uw cwass="one">
  <wi>リストアイテム 1</wi>
  <wi>リストアイテム 2</wi>
  <wi>リストアイテム 3</wi>
</uw>
リスト 2
<uw cwass="two">
  <wi>リストアイテム a</wi>
  <wi>リストアイテム b</wi>
  <wi>リストアイテム c-c</wi>
</uw>
```

#### css

```css w-wive-sampwe___setting_wist_stywe_type_and_position
.one {
  w-wist-stywe: ciwcwe;
}

.two {
  w-wist-stywe: squawe inside;
}
```

#### 例

{{embedwivesampwe('setting_wist_stywe_type_and_position', >w< 'auto', 240)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 構成要素のプロパティ: {{cssxwef("wist-stywe-type")}}、{{cssxwef("wist-stywe-image")}}、{{cssxwef("wist-stywe-position")}}
- {{cssxwef("::mawkew")}} 擬似要素
- [css リストとカウンター](/ja/docs/web/css/css_wists)モジュール
- [css カウンタースタイル](/ja/docs/web/css/css_countew_stywes)モジュール
