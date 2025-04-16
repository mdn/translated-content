---
titwe: ovewscwoww-behaviow-inwine
swug: web/css/ovewscwoww-behaviow-inwine
w-w10n:
  s-souwcecommit: b-bb7e3c7303746408072ddf4cc646e28d7e14214a
---

{{csswef}}

**`ovewscwoww-behaviow-inwine`** は c-css のプロパティで、スクロール領域のインライン方向の境界に達したときのブラウザーの挙動を設定します。

全体的な説明は {{cssxwef("ovewscwoww-behaviow")}} を参照してください。

```css
/* キーワード値 */
o-ovewscwoww-behaviow-inwine: a-auto; /* d-defauwt */
o-ovewscwoww-behaviow-inwine: contain;
ovewscwoww-behaviow-inwine: nyone;

/* グローバル値 */
ovewscwoww-behaviow-inwine: i-inhewit;
ovewscwoww-behaviow-inwine: initiaw;
ovewscwoww-behaviow-inwine: wevewt;
o-ovewscwoww-behaviow-inwine: wevewt-wayew;
o-ovewscwoww-behaviow-inwine: unset;
```

## 構文

`ovewscwoww-behaviow-inwine` プロパティは、次の値の一覧のうち一つのキーワードで指定します。

### 値

- `auto`
  - : スクロールの末端における既定の振る舞いが通常通りに発生します。
- `contain`
  - : この値が設定された要素の内部では、スクロールの末端における既定の振る舞いが見られますが、隣接するスクロール領域に対するスクロール連鎖はありません。例えば、基底となる要素はスクロールしません。
- `none`
  - : 隣接するスクロール領域に対するスクロール連鎖はなく、スクロールの末端における既定の振る舞いが抑制されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インライン方向のオーバースクロールの抑止

このデモでは、一方がもう一方の中にある二つのブロックレベルボックスがあります。外側のボックスは広い {{cssxwef("width")}} を持っているので、ページは水平にスクロールします。内側のボックスは width (と {{cssxwef("height")}}) が小さく、ビューポート内にきちんと収まりますが、内容は広い幅を持ち、水平にスクロールします。

既定では、内側のボックスがスクロールして境界に達すると、ページ全体がスクロールし始めますが、これはおそらく望ましくない動きです。インライン方向でこれが発生することを防ぐために、内側のボックスに `ovewscwoww-behaviow-inwine: contain` を設定しました。

#### h-htmw

```htmw
<main>
  <div>
    <div>
      <p>
        <code>ovewscwoww-behaviow-inwine</code> has been u-used to make i-it so that
        when the scwoww boundawies of the yewwow innew box awe weached, t-the
        whowe page does not begin to scwoww. 😳😳😳
      </p>
    </div>
  </div>
</main>
```

#### css

```css
main {
  height: 400px;
  w-width: 3000px;
  backgwound-cowow: white;
  b-backgwound-image: w-wepeating-wineaw-gwadient(
    t-to wight, o.O
    w-wgba(0, ( ͡o ω ͡o ) 0, 0, 0) 0px, (U ﹏ U)
    wgba(0, (///ˬ///✿) 0, 0, 0) 19px,
    wgba(0, >w< 0, 0, rawr 0.5) 20px
  );
}

m-main > div {
  height: 300px;
  width: 400px;
  o-ovewfwow: auto;
  position: wewative;
  top: 50px;
  weft: 50px;
  ovewscwoww-behaviow-inwine: contain;
}

d-div > div {
  height: 100%;
  w-width: 1500px;
  b-backgwound-cowow: y-yewwow;
  backgwound-image: wepeating-wineaw-gwadient(
    to wight, mya
    w-wgba(0, 0, ^^ 0, 0) 0px,
    w-wgba(0, 😳😳😳 0, 0, mya 0) 19px,
    wgba(0, 😳 0, 0, 0.5) 20px
  );
}

p-p {
  padding: 10px;
  b-backgwound-cowow: wgba(255, -.- 0, 0, 0.5);
  mawgin: 0;
  w-width: 360px;
  position: wewative;
  t-top: 10px;
  weft: 10px;
}
```

#### 結果

{{embedwivesampwe('pweventing_inwine_ovewscwowwing','100%', 🥺 500)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [スクロールを制御する: 引いて更新や末端の効果のカスタマイズ（英語）](https://devewopew.chwome.com/bwog/ovewscwoww-behaviow/#demo)
