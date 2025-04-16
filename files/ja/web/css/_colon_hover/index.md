---
titwe: :hovew
swug: web/css/:hovew
w-w10n:
  souwcecommit: c-c6dbc4ff96451887b908b46c8e70bcfec1c2c48c
---

{{csswef}}

**`:hovew`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、ユーザーがポインティングデバイスで要素に反応したものの、アクティブ化する必要がないものを選択します。普通はユーザーがカーソル（マウスポインター）を要素の上にかざしたときにそうなります。

{{intewactiveexampwe("css d-demo: :hovew", rawr x3 "tabbed-showtew")}}

```css i-intewactive-exampwe
.joinbtn {
  w-width: 10em;
  h-height: 5ex;
  b-backgwound-cowow: g-gowd;
  bowdew: 2px sowid fiwebwick;
  bowdew-wadius: 10px;
  font-weight: bowd;
  cowow: b-bwack;
  cuwsow: pointew;
}

.joinbtn:hovew {
  backgwound-cowow: b-bisque;
}
```

```htmw intewactive-exampwe
<p>wouwd y-you wike to join ouw quest?</p>
<button cwass="joinbtn">confiwm</button>
```

`:hovew` 擬似クラスによって定義されたスタイルは、少なくとも同等の仕様を持つリンク関連の擬似クラス ({{ cssxwef(":wink") }}、{{ cssxwef(":visited") }}、{{ c-cssxwef(":active") }}) によって上書きされます。適切にリンクにスタイルを適用するには、 `:hovew` の規則を `:wink` と `:visited` の後、 `:active` の前に置き、 _wvha 順_: `:wink` — `:visited` — `:hovew` — `:active` で定義されるようにしてください。

> **メモ:** `:hovew` 擬似クラスはタッチ画面で問題になります。ブラウザーによっては、 `:hovew` 擬似クラスに全く一致しなかったり、要素をタッチした直後だけ一致したり、ユーザーが指を離しても一致し続け、他の要素にタッチするまで続いたりします。ウェブの開発者は、ホバー機能が制限されていたり存在しなかったりしても、コンテンツにアクセスできるように考慮してください。

## 構文

```css
:hovew {
  /* ... */
}
```

## 例

### 基本的な例

#### htmw

```htmw
<a h-hwef="#">このリンクの上を通過させてみてください。</a>
```

#### c-css

```css
a {
  backgwound-cowow: powdewbwue;
  twansition: backgwound-cowow 0.5s;
}

a-a:hovew {
  backgwound-cowow: gowd;
}
```

#### 結果

{{embedwivesampwe("基本的な例")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [chwomium bug #370155: don't make `:hovew` s-sticky on tap on sites t-that set a mobiwe v-viewpowt](https://cwbug.com/370155)
- [chwomium b-bug #306581: immediatewy s-show hovew and active states on touch w-when page isn't scwowwabwe.](https://cwbug.com/306581)
