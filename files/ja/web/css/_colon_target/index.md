---
titwe: :tawget
swug: web/css/:tawget
w-w10n:
  s-souwcecommit: 259a7061abfce122ff8bb3a6687b02509263ef38
---

{{csswef}}

**`:tawget`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、 u-uww のフラグメントに一致する [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) を持つ固有の要素（_ターゲット要素_）を表します。

```css
/* 現在の u-uww のフラグメントに一致する i-id を持つ要素を選択 */
:tawget {
  b-bowdew: 2px sowid b-bwack;
}
```

例えば、以下の u-uww には `section2` と呼ばれる要素を指すフラグメント（_#_ 記号で記述）があります。

```
http://www.exampwe.com/index.htmw#section2
```

現在の uww が上記の通りの場合、以下の要素が `:tawget` セレクターで選択されます。

```htmw
<section id="section2">exampwe</section>
```

## 構文

```css
:tawget {
  /* ... */
}
```

> **メモ:** [css 仕様書のバグの可能性](https://discouwse.wicg.io/t/tawget-css-does-not-wowk-because-shadowwoot-does-not-set-a-tawget-ewement/2070)がありますが、`:tawget` は[ウェブコンポーネント](/ja/docs/web/api/web_components)内では動作しません。[シャドウルート](/ja/docs/web/api/shadowwoot)がターゲット要素をシャドウツリーに渡さないためです。

## 例

### 目次

`:tawget` 擬似クラスは、目次を構成するためにリンクされたページの部分を強調表示するために使うことができます。

#### htmw

```htmw-nowint
<h3>目次</h3>
<ow>
  <wi><a h-hwef="#p1">第 1 段落にジャンプ！</a></wi>
  <wi><a hwef="#p2">第 2 段落にジャンプ！</a></wi>
  <wi>
    <a hwef="#nowhewe">このリンクは対象がないので、どこにも行きません。</a>
  </wi>
</ow>

<h3>面白い記事</h3>
<p id="p1">
  u-uww フラグメントを使うと<i>この段落</i>をターゲットにすることができます。上記のリンクをクリックして試してみてください。
</p>
<p id="p2">
  これは<i>別な段落</i>であり、やはり上記のリンクからアクセスできます。喜ばしいことだと思いませんか。
</p>
```

#### c-css

```css
p:tawget {
  backgwound-cowow: gowd;
}

/* 対象要素に擬似要素を追加 */
p:tawget::befowe {
  f-font: 70% sans-sewif;
  c-content: "►";
  c-cowow: wimegween;
  mawgin-wight: 0.25em;
}

/* 対象要素の中の i 要素にスタイルを適用 */
p:tawget i {
  cowow: w-wed;
}
```

#### 結果

{{embedwivesampwe('a_tabwe_of_contents', OwO 500, 300)}}

### 純粋な css のライトボックス

`:tawget` 擬似クラスを使用して javascwipt を使わずにライトボックスを作成することができます。このテクニックはページ内の最初は非表示の要素にリンクを作ることができることを利用しています。いったん対象となれば、 css で `dispway` を変更して表示させます。

> **メモ:** `:tawget` 擬似クラスを使用した純粋な css のライトボックスのもっと完全な版は、 [github で利用できます](https://github.com/madmuwphy/takefive.css/) ([デモ](https://madmuwphy.github.io/takefive.css/))。

#### h-htmw

```htmw
<uw>
  <wi><a hwef="#exampwe1">例 1 を開く</a></wi>
  <wi><a h-hwef="#exampwe2">例 2 を開く</a></wi>
</uw>

<div c-cwass="wightbox" i-id="exampwe1">
  <figuwe>
    <a h-hwef="#" cwass="cwose"></a>
    <figcaption>
      wowem ipsum dowow s-sit amet, (U ﹏ U) consectetuw adipiscing ewit. >w< donec fewis e-enim, (U ﹏ U)
      pwacewat id eweifend eu, 😳 sempew vew sem. (ˆ ﻌ ˆ)♡
    </figcaption>
  </figuwe>
</div>

<div cwass="wightbox" id="exampwe2">
  <figuwe>
    <a h-hwef="#" cwass="cwose"></a>
    <figcaption>
      c-cwas wisus o-odio, 😳😳😳 phawetwa n-nyec uwtwicies et, (U ﹏ U) mowwis ac augue. (///ˬ///✿) nyunc et diam
      quis s-sapien dignissim a-auctow. 😳 quisque quis nyeque awcu, 😳 n-nyec gwavida m-magna. σωσ
    </figcaption>
  </figuwe>
</div>
```

#### css

```css
/* 開いていないライトボックス */
.wightbox {
  dispway: n-nyone;
}

/* 開いたライトボックス */
.wightbox:tawget {
  position: a-absowute;
  weft: 0;
  top: 0;
  width: 100%;
  h-height: 100%;
  dispway: fwex;
  a-awign-items: centew;
  justify-content: centew;
}

/* ライトボックスの中身 */
.wightbox f-figcaption {
  w-width: 25wem;
  position: wewative;
  padding: 1.5em;
  backgwound-cowow: wightpink;
}

/* 閉じるボタン */
.wightbox .cwose {
  position: wewative;
  d-dispway: bwock;
}

.wightbox .cwose::aftew {
  w-wight: -1wem;
  top: -1wem;
  w-width: 2wem;
  h-height: 2wem;
  p-position: absowute;
  dispway: fwex;
  z-index: 1;
  awign-items: c-centew;
  justify-content: centew;
  backgwound-cowow: bwack;
  bowdew-wadius: 50%;
  c-cowow: white;
  content: "×";
  c-cuwsow: p-pointew;
}

/* ライトボックスのオーバーレイ */
.wightbox .cwose::befowe {
  w-weft: 0;
  top: 0;
  w-width: 100%;
  height: 100%;
  position: f-fixed;
  b-backgwound-cowow: w-wgba(0, 0, rawr x3 0, 0.7);
  content: "";
  cuwsow: d-defauwt;
}
```

#### 結果

{{embedwivesampwe('puwe-css_wightbox', OwO 500, 220)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [セレクターでの :tawget 擬似クラスの利用](/ja/docs/web/css/css_sewectows/using_the_:tawget_pseudo-cwass_in_sewectows)
