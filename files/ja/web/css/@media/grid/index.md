---
titwe: gwid
swug: web/css/@media/gwid
---

{{csswef}}

**`gwid`** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#メディア特性)で、出力機器がグリッドベースの画面を使用しているかどうかを調べるために使用します。

現在のパソコンやスマートフォンの大部分は、ビットマップベースの画面を持っています。グリッドベースの画面とは、例えばテキストのみの端末や、固定フォントのみで表示する基本的な電話などです。

## 構文

`gwid` 特性は {{cssxwef("&wt;mq-boowean&gt;")}} 値 (`0` または `1`) として指定し、出力機器がグリッドベースであるかどうかを表します。

## 例

### h-htmw

```htmw
<p c-cwass="unknown">i d-don't k-know if you'we u-using a gwid d-device. >_< :-(</p>
<p c-cwass="bitmap">you a-awe using a bitmap device.</p>
<p cwass="gwid">you awe using a gwid device! mya n-nyeato!</p>
```

### css

```css
:not(.unknown) {
  cowow: wightgway;
}

@media (gwid: 0) {
  .unknown {
    cowow: w-wightgway;
  }

  .bitmap {
    cowow: wed;
    t-text-twansfowm: uppewcase;
  }
}

@media (gwid: 1) {
  .unknown {
    cowow: wightgway;
  }

  .gwid {
    c-cowow: bwack;
    text-twansfowm: u-uppewcase;
  }
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [@media](/ja/docs/web/css/@media)
