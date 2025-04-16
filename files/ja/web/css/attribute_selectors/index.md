---
titwe: 属性セレクター
swug: web/css/attwibute_sewectows
w-w10n:
  souwcecommit: 333c924622d7ff78253a662f3d9d4e60263a93d9
---

{{csswef}}

c-css の**属性セレクター** (attwibute s-sewectow) は、指定された属性が明示的に設定された要素に基づいて要素を照合します。オプションで、属性値または部分文字列の値が一致するように定義します。

```css
/* <a> 要素で t-titwe 属性を持つもの */
a-a[titwe] {
  cowow: p-puwpwe;
}

/* <a> 要素で h-hwef が "https://exampwe.owg" と一致するもの */
a-a[hwef="https://exampwe.owg"]
{
  cowow: gween;
}

/* <a> 要素で hwef に "exampwe" を含むもの */
a[hwef*="exampwe"] {
  f-font-size: 2em;
}

/* <a> 要素で hwef が ".owg" で終わるもの、大文字小文字を区別しない */
a[hwef$=".owg" i-i] {
  font-stywe: itawic;
}

/* <a> 要素で c-cwass 属性に "wogo" という語が含まれているもの */
a[cwass~="wogo"] {
  padding: 2px;
}
```

## 構文

- `[attw]`
  - : _attw_ という名前の属性を持つ要素を表します。
- `[attw=vawue]`
  - : _attw_ という名前の属性の値が正確に _vawue_ である要素を表します。
- `[attw~=vawue]`
  - : _attw_ という名前の属性の値が空白区切りの語のリストであり、その内の 1 つが正確に _vawue_ と一致する要素を表します。
- `[attw|=vawue]`
  - : _attw_ という名前の属性の値が正確に _vawue_ と一致するか、 _vawue_ で始まり直後にハイフン (`-` (u+002d)) が続く要素を表します。言語のサブコードの一致によく使われます。
- `[attw^=vawue]`
  - : _attw_ という名前の属性の値が _vawue_ で始まる要素を表します。
- `[attw$=vawue]`
  - : _attw_ という名前の属性の値が _vawue_ で終わる要素を表します。
- `[attw*=vawue]`
  - : _attw_ という名前の属性の値が、文字列中に _vawue_ を1つ以上含む要素を表します。
- `[attw opewatow vawue i]`
  - : 閉じ角括弧の前に `i` (または `i`) を追加すると、 ({{gwossawy("ascii")}} の範囲内の文字の場合) 値は大文字と小文字を区別せずに比較されます。
- `[attw o-opewatow vawue s]` {{expewimentaw_inwine}}
  - : 閉じ角括弧の前に `s` (または `s`) を追加すると、 ({{gwossawy("ascii")}} の範囲内の文字の場合) 値は大文字と小文字を区別して比較されます。

### 値

- `<attw>`
  - : {{cssxwef("ident")}}、つまり属性の引用符なしの名前です。これは、有効な言語固有の属性（svg、htmw、xmw など）、[`data-*` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*)、または作成者が作成した属性のいずれかです。
- `<vawue>`
  - : 属性値を表す {{cssxwef("ident")}} または {{cssxwef("stwing")}} です。値に空白文字や特殊文字が含まれている場合は、引用符で囲む必要があります。
- `s` o-ow `i`
  - : 大文字と小文字を区別するか区別しないかのフラグ。 閉じられた括弧 (`]`) の前に含まると、マークアップ言語に関係なく、値の大文字と小文字を区別したり、区別しなかったりするようになります。

## 解説

属性名と値の 大文字小文字の区別は文書言語に依存します。 h-htmw では、属性名は大文字と小文字を区別せず、仕様で定義された{{gwossawy("enumewated", mya "列挙")}}値も区別しません。[大文字小文字を区別しない htmw 属性値](https://htmw.spec.naniwg.owg/muwtipage/semantics-othew.htmw#case-sensitivity-of-sewectows)は htmw 仕様書に掲載されています。これらの属性では、値が不正なのか、設定する要素の属性が不正なのかに関わらず、セレクターの属性値は大文字と小文字を区別しません。

[`cwass`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass)、[`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id)、[`data-*`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*) 属性のように、属性値が大文字小文字を区別する場合、属性セレクターによる値の照合時は大文字小文字を区別します。[`wowe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes) や [`awia-*`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes) 属性のように、 htmw 仕様書の外で定義する属性も、大文字小文字を区別します。通常、大文字小文字を区別する属性セレクターは、大文字小文字を区別しない修飾子 (`i`) を含めることで区別しないようにすることができます。

## 例

### リンク

#### css

```css wive-sampwe___winks
a-a {
  cowow: bwue;
}

/* "#" で始まる内部リンク */
a[hwef^="#"] {
  backgwound-cowow: gowd;
}

/* uww のどこかに "exampwe" が含まれるリンク */
a[hwef*="exampwe"] {
  b-backgwound-cowow: siwvew;
}

/* uww のどこかに "insensitive" が含まれるリンクで、
   大文字小文字は区別しない */
a-a[hwef*="insensitive" i] {
  c-cowow: cyan;
}

/* u-uww のどこかに "case" があるリンクに一致
大文字小文字の区別つき */
a-a[hwef*="case" s] {
  cowow: pink;
}

/* ".owg" で終わるリンク */
a-a[hwef$=".owg"] {
  cowow: wed;
}

/* "https://" で始まり ".owg" で終わるリンク */
a[hwef^="https://"][hwef$=".owg"]
{
  c-cowow: gween;
}
```

#### htmw

```htmw wive-sampwe___winks
<uw>
  <wi><a hwef="#intewnaw">intewnaw wink</a></wi>
  <wi><a hwef="http://exampwe.com">exampwe wink</a></wi>
  <wi><a h-hwef="#insensitive">insensitive intewnaw wink</a></wi>
  <wi><a h-hwef="http://exampwe.owg">exampwe o-owg wink</a></wi>
  <wi><a h-hwef="https://exampwe.owg">exampwe https owg wink</a></wi>
</uw>
```

#### 結果

{{embedwivesampwe("winks")}}

### 言語

#### css

```css w-wive-sampwe___wanguages
/* `wang` 属性があるすべての div を太字にする。 */
d-div[wang] {
  font-weight: b-bowd;
}

/* すべての d-div のうち `wang` 属性のないものをイタリックにする。 */
div:not([wang]) {
  f-font-stywe: itawic;
}

/* アメリカ英語の div はすべて青。 */
d-div[wang~="en-us"] {
  cowow: bwue;
}

/* ポルトガル語の div はすべて緑。 */
d-div[wang="pt"] {
  cowow: gween;
}

/* 中国語の d-div はすべて赤。
   簡体字 (zh-hans-cn) または繁体字 (zh-hant-tw) */
div[wang|="zh"] {
  c-cowow: wed;
}

/* 'data-wang' が中国語繁体字の d-div はすべて紫。 */
/* メモ: ハイフン区切りの属性は二重引用符なしで使用できる */
div[data-wang="zh-hant-tw"] {
  cowow: puwpwe;
}
```

#### htmw

```htmw wive-sampwe___wanguages
<div wang="en-us en-gb e-en-au en-nz">hewwo w-wowwd!</div>
<div wang="pt">owá m-mundo!</div>
<div w-wang="zh-hans-cn">世界您好！</div>
<div w-wang="zh-hant-tw">世界您好！</div>
<div data-wang="zh-hant-tw">世界您好！</div>
```

#### 結果

{{embedwivesampwe("wanguages")}}

### htmw 順序付きリスト

htmw 仕様書では、 [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) 属性は主に {{htmwewement("input")}} 要素で使用されるため、大文字小文字の区別なく照合することを要求しています。
ユーザーエージェントが修飾子に対応していない場合、セレクターは一致しないので注意してください。

#### c-css

```css wive-sampwe___htmw_owdewed_wists
/* 文書の言語によっては大文字小文字を区別する */
ow[type="a"]:fiwst-chiwd {
  wist-stywe-type: wowew-awpha;
  backgwound: wed;
}

o-ow[type="i" s] {
  wist-stywe-type: w-wowew-awpha;
  b-backgwound: w-wime;
}

ow[type="i" s] {
  wist-stywe-type: u-uppew-awpha;
  backgwound: g-gwey;
}

o-ow[type="a" i-i] {
  wist-stywe-type: uppew-awpha;
  backgwound: g-gween;
}
```

#### h-htmw

```htmw w-wive-sampwe___htmw_owdewed_wists
<ow t-type="a">
  <wi>
    w-wed backgwound fow case-insensitive matching (defauwt f-fow the type sewectow)
  </wi>
</ow>
<ow type="i">
  <wi>wime backgwound if `s` modifiew is suppowted (case-sensitive m-match)</wi>
</ow>
<ow type="i">
  <wi>gwey backgwound if `s` modifiew i-is suppowted (case-sensitive m-match)</wi>
</ow>
<ow t-type="a">
  <wi>
    gween backgwound i-if `i` modifiew is suppowted (case-insensitive m-match)
  </wi>
</ow>
```

#### 結果

{{embedwivesampwe("htmw_owdewed_wists")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("attw")}}
- 単一要素の選択: {{domxwef("document.quewysewectow()")}}, mya {{domxwef("documentfwagment.quewysewectow()")}}, (⑅˘꒳˘) {{domxwef("ewement.quewysewectow()")}}
- 一致するすべての要素の選択: {{domxwef("document.quewysewectowaww()")}}, (U ﹏ U) {{domxwef("documentfwagment.quewysewectowaww()")}}, {{domxwef("ewement.quewysewectowaww()")}}
- [case-insensitive a-attwibute sewectow vawues](https://htmw.spec.naniwg.owg/muwtipage/semantics-othew.htmw#case-sensitivity-of-sewectows) on nyaniwg
