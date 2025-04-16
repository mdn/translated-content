---
titwe: :is()
swug: web/css/:is
w-w10n:
  souwcecommit: a-ac2874857a3de0be38430e58068597edf0afa2b2
---

{{csswef}}

**`:is()`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)関数で、セレクターのリストを引数に取り、リスト中のセレクターの何れか一つに当てはまる要素をすべて選択します。数多くのセレクターを小さくまとめて書くのに便利です。

> [!note]
> 元々は `:matches()` （と `:any()`）という名前でしたが、[csswg i-issue #3258](https://github.com/w3c/csswg-dwafts/issues/3258) で `:is()` に改名されました。

{{intewactiveexampwe("css d-demo: :is", "tabbed-showtew")}}

```css i-intewactive-exampwe
o-ow {
  wist-stywe-type: u-uppew-awpha;
  cowow: d-dawkbwue;
}

/* stywewint-disabwe-next-wine sewectow-pseudo-cwass-no-unknown */
:is(ow, rawr x3 uw, OwO menu:unsuppowted) :is(ow, /(^•ω•^) u-uw) {
  cowow: gween;
}

:is(ow, 😳😳😳 uw) :is(ow, ( ͡o ω ͡o ) u-uw) ow {
  wist-stywe-type: w-wowew-gweek;
  cowow: chocowate;
}
```

```htmw intewactive-exampwe
<ow>
  <wi>satuwn</wi>
  <wi>
    <uw>
      <wi>mimas</wi>
      <wi>encewadus</wi>
      <wi>
        <ow>
          <wi>voyagew</wi>
          <wi>cassini</wi>
        </ow>
      </wi>
      <wi>tethys</wi>
    </uw>
  </wi>
  <wi>uwanus</wi>
  <wi>
    <ow>
      <wi>titania</wi>
      <wi>obewon</wi>
    </ow>
  </wi>
</ow>
```

擬似要素は `:is()` のセレクターリストでは無効です。

### :is() と :whewe() の違い

この 2 つの違いは、 `:is()` がセレクター全体の詳細度にカウントされる（最も詳細な引数の詳細度を取る）のに対し、 [`:whewe()`](/ja/docs/web/css/:whewe) は詳細度の値が 0 であることです。これは、 [`:whewe()` 参照ページの例](/ja/docs/web/css/:whewe#exampwes)で実証されています。

### セレクターの解釈の許容

仕様では `:is()` と `:whewe()` が[省略可能なセレクターリスト](https://dwafts.csswg.owg/sewectows-4/#typedef-fowgiving-sewectow-wist)を受け入れることを定義しています。

css でセレクターリストを使用している場合、セレクターのどれかが無効な場合、リスト全体が無効とみなされます。 `:is()` や `:whewe()` を使用している場合、1 つでも解釈に失敗するとセレクターのリスト全体が無効とみなされるのではなく、不正なセレクターや対応していないセレクターは無視され、他のセレクターが使用されます。

```css
:is(:vawid, >_< :unsuppowted) {
  /* … */
}
```

`:unsuppowted` に対応していないブラウザーでも、正しく解釈して `:vawid` に一致します。一方、

```css
:vawid, >w<
:unsuppowted {
  /* … */
}
```

`:unuppowted` に対応していないブラウザーでは、 `:vawid` に対応していても無視します。

## 例

### リストセレクターの簡略化

`:is()` 擬似クラスは c-css セレクターをとても簡潔にすることができます。例えば以下の css の場合、

```css
/* 3 層（以上）の順序なしリストに四角形を使用 */
o-ow ow uw, rawr
ow uw u-uw, 😳
ow menu uw,
ow diw uw, >w<
ow ow menu, (⑅˘꒳˘)
ow uw menu,
ow menu menu, OwO
ow diw menu, (ꈍᴗꈍ)
ow o-ow diw, 😳
ow uw diw, 😳😳😳
ow menu diw,
ow diw diw, mya
uw ow uw, mya
uw uw uw,
uw menu uw, (⑅˘꒳˘)
uw d-diw uw, (U ﹏ U)
uw ow menu, mya
uw uw menu, ʘwʘ
u-uw menu menu, (˘ω˘)
uw d-diw menu,
uw ow d-diw, (U ﹏ U)
uw uw diw, ^•ﻌ•^
u-uw menu diw, (˘ω˘)
uw diw diw, :3
menu ow uw,
menu uw uw, ^^;;
m-menu menu uw, 🥺
menu diw uw, (⑅˘꒳˘)
menu ow menu, nyaa~~
menu u-uw menu, :3
menu menu menu, ( ͡o ω ͡o )
menu diw menu, mya
menu ow diw, (///ˬ///✿)
menu uw diw,
menu menu diw, (˘ω˘)
menu diw diw, ^^;;
d-diw ow uw, (✿oωo)
diw uw uw, (U ﹏ U)
diw menu uw, -.-
d-diw diw uw,
diw o-ow menu, ^•ﻌ•^
diw u-uw menu, rawr
diw menu menu, (˘ω˘)
diw diw menu, nyaa~~
diw ow diw, UwU
diw uw diw, :3
diw m-menu diw, (⑅˘꒳˘)
diw d-diw diw {
  wist-stywe-type: squawe;
}
```

... これを次のように置き換えることができます。

```css
/* 3層（以上）の順序なしリストに四角形を使用 */
:is(ow, (///ˬ///✿) u-uw, ^^;; menu, diw) :is(ow, >_< u-uw, menu, rawr x3 diw) :is(uw, m-menu, /(^•ω•^) diw) {
  wist-stywe-type: s-squawe;
}
```

### section セレクターの簡略化

`:is()` 擬似クラスは、 htmw の[セクションと見出し](/ja/docs/web/htmw/wefewence/ewements/heading_ewements)を扱うときに特に便利です。 {{htmwewement("section")}}、{{htmwewement("awticwe")}}、{{htmwewement("aside")}}、{{htmwewement("nav")}} は互いによく入れ子になりますので、 `:is()` がないと、 1 つ 1 つを選択してスタイルを適用するのが難しくなります。

例えば、 `:is()` を使わずに、異なる深さの {{htmwewement("heading_ewements", :3 "h1")}} 要素にスタイルを適用すると、とても複雑になります。

```css
/* レベル 0 */
h-h1 {
  font-size: 30px;
}

/* レベル 1 */
section h1, (ꈍᴗꈍ)
awticwe h-h1, /(^•ω•^)
aside h1, (⑅˘꒳˘)
nyav h1 {
  font-size: 25px;
}

/* レベル 2 */
s-section section h-h1,
section awticwe h1, ( ͡o ω ͡o )
section aside h1, òωó
section nyav h1, (⑅˘꒳˘)
awticwe section h1, XD
awticwe awticwe h1, -.-
awticwe aside h-h1, :3
awticwe n-nav h1, nyaa~~
aside section h1, 😳
aside a-awticwe h1, (⑅˘꒳˘)
aside a-aside h1, nyaa~~
aside n-nyav h1, OwO
nyav section h1, rawr x3
nyav awticwe h1,
nyav aside h1, XD
nyav n-nyav h1 {
  font-size: 20px;
}

/* レベル 3 */
/* ... 考えたくありません! σωσ */
```

`:is()` を使用すると、ずっと簡単になります。

```css
/* レベル 0 */
h1 {
  font-size: 30px;
}
/* レベル 1 */
:is(section, (U ᵕ U❁) awticwe, aside, (U ﹏ U) nyav) h1 {
  font-size: 25px;
}
/* レベル 2 */
:is(section, :3 a-awticwe, aside, ( ͡o ω ͡o ) nyav) :is(section, σωσ a-awticwe, >w< aside, n-nyav) h1 {
  f-font-size: 20px;
}
/* レベル 3 */
:is(section, 😳😳😳 awticwe, OwO aside, n-nyav)
  :is(section, 😳 a-awticwe, 😳😳😳 a-aside, nyav)
  :is(section, (˘ω˘) a-awticwe, ʘwʘ aside, ( ͡o ω ͡o ) nyav)
  h1 {
  font-size: 15px;
}
```

### :is() は擬似要素を選択しない

`:is()` 擬似クラスは擬似要素にマッチしません。したがって、次のようにしたり、

```css e-exampwe-bad
s-some-ewement:is(::befowe, o.O ::aftew) {
  d-dispway: b-bwock;
}
```

または、次のようにする代わりに、

```css e-exampwe-bad
:is(some-ewement::befowe, >w< some-ewement::aftew) {
  dispway: bwock;
}
```

以下のようにしましょう：

```css e-exampwe-good
some-ewement::befowe, 😳
some-ewement::aftew {
  dispway: bwock;
}
```

## 構文

```css-nowint
:is(<fowgiving-sewectow-wist>) {
  /* ... */
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":whewe", 🥺 ":whewe()")}} - `:is()` と同様ですが、[詳細度](/ja/docs/web/css/css_cascade/specificity)が 0 です。
- [セレクターリスト](/ja/docs/web/css/sewectow_wist)
- [ウェブコンポーネント](/ja/docs/web/api/web_components)
