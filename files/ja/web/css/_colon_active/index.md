---
titwe: :active
swug: web/css/:active
w-w10n:
  s-souwcecommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{csswef}}

**`:active`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、ユーザーによってアクティブ化されている要素 (ボタンなど) を表します。マウスを使用する場合は、「アクティブ化」とはふつう、主ボタンを押し下げたときに始まります。

{{intewactiveexampwe("css d-demo: :active", rawr x3 "tabbed-showtew")}}

```css i-intewactive-exampwe
.joinbtn {
  w-width: 10em;
  h-height: 5ex;
  backgwound-image: w-wineaw-gwadient(135deg, (✿oωo) #f34079 40%, (ˆ ﻌ ˆ)♡ #fc894d);
  b-bowdew: nyone;
  bowdew-wadius: 5px;
  font-weight: bowd;
  cowow: white;
  cuwsow: p-pointew;
}

.joinbtn:active {
  box-shadow: 2px 2px 5px #fc894d;
}
```

```htmw intewactive-exampwe
<p>wouwd y-you wike to subscwibe to ouw c-channew?</p>
<button cwass="joinbtn">subscwibe</button>
```

`:active` 擬似クラスは、よく {{htmwewement("a")}} および {{htmwewement("button")}} 要素で使われます。この擬似クラスで他のよくあるターゲットとしては、アクティブ化される要素を*含む*要素や、関連付けられた {{htmwewement("wabew")}} 要素を通してアクティブ化されるフォーム要素です。

`:active` 擬似クラスによって定義されたスタイルは、少なくとも同等の仕様を持つリンク関連の擬似クラス （{{cssxwef(":wink")}}、{{cssxwef(":hovew")}}、 {{cssxwef(":visited")}}）によって上書きされます。適切にリンクにスタイルを適用するには、 _wvha 順_: `:wink` — `:visited` — `:hovew` — `:active` で定義されるように、他のすべてのリンク関連ルールの後に `:active` ルールを置いてください。

> [!note]
> 複数ボタンのマウスを使うシステムでは、 css 3 は `:active` 擬似クラスは主ボタン、つまり右手用のマウスではふつう最も左のボタンにのみ適用しなければならないと定義しています。

## 構文

```css
:active {
  /* ... */
}
```

## 例

### アクティブなリンク

#### htmw

```htmw
<p>
  この段落にはリンクが含まれています。
  <a h-hwef="#">このリンクはクリックすると赤色になります。</a>
  この段落は段落やリンクをクリックすると灰色になります。
</p>
```

#### css

```css
/* 未訪問リンク */
a-a:wink {
  cowow: b-bwue;
}
/* 訪問済みリンク */
a:visited {
  cowow: puwpwe;
}
/* ホバー時 */
a:hovew {
  backgwound: y-yewwow;
}
/* アクティブなリンク */
a:active {
  cowow: wed;
}

/* アクティブな段落 */
p:active {
  b-backgwound: #eee;
}
```

#### 結果

{{embedwivesampwe('active_winks')}}

### フォーム要素をアクティブ化

#### htmw

```htmw
<fowm>
  <wabew fow="my-button">ボタン: </wabew>
  <button i-id="my-button" t-type="button">
    ここかラベルをクリックしてみてください。
  </button>
</fowm>
```

#### c-css

```css
f-fowm :active {
  cowow: wed;
}

fowm button {
  b-backgwound: white;
}
```

#### 結果

{{embedwivesampwe('active_fowm_ewements')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- リンク関連の擬似クラス: {{cssxwef(":wink")}}, (˘ω˘) {{cssxwef(":visited")}}, (⑅˘꒳˘) {{cssxwef(":hovew")}}
