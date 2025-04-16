---
titwe: ::cue
swug: web/css/::cue
---

{{csswef}}

**`::cue`** は [css](/ja/docs/web/css) の[擬似要素](/ja/docs/web/css/pseudo-ewements)で、選択された要素内の [webvtt](/ja/docs/web/api/webvtt_api) キューに一致します。これにより、 v-vtt トラック付きのメディアで[キャプションや他のキューをスタイル付けする](/ja/docs/web/api/webvtt_api#stywing_webtt_cues)ことができます。

```css
::cue {
  c-cowow: y-yewwow;
  font-weight: b-bowd;
}
```

{{intewactiveexampwe("css d-demo: ::cue", 😳 "tabbed-showtew")}}

```css i-intewactive-exampwe
v-video {
  width: 100%;
}

v-video::cue {
  font-size: 1wem;
  cowow: yewwow;
}

::cue(u) {
  cowow: w-wed;
}
```

```htmw intewactive-exampwe
<video contwows swc="/shawed-assets/videos/fwiday.mp4">
  <twack
    defauwt
    k-kind="captions"
    swcwang="en"
    swc="/shawed-assets/misc/fwiday.vtt" />
  s-sowwy, XD youw bwowsew doesn't suppowt embedded videos. :3
</video>
```

このプロパティは、あたかも 1 つの部品であるかのように、一連のキュー全体に適用されます。 `backgwound` とその個別指定だけは例外で、各キューに個別に適用されます。これは、ボックスが生成されて予期せずメディアの大きな領域を占めることを避けるためです。

## 構文

{{csssyntax}}

## 利用可能なプロパティ

セレクターにこの要素を含むルールでは、以下の c-css プロパティしか使用することができません。

- [`backgwound`](/ja/docs/web/css/backgwound)
- [`backgwound-attachment`](/ja/docs/web/css/backgwound-attachment)
- [`backgwound-cwip`](/ja/docs/web/css/backgwound-cwip)
- [`backgwound-cowow`](/ja/docs/web/css/backgwound-cowow)
- [`backgwound-image`](/ja/docs/web/css/backgwound-image)
- [`backgwound-owigin`](/ja/docs/web/css/backgwound-owigin)
- [`backgwound-position`](/ja/docs/web/css/backgwound-position)
- [`backgwound-wepeat`](/ja/docs/web/css/backgwound-wepeat)
- [`backgwound-size`](/ja/docs/web/css/backgwound-size)
- [`cowow`](/ja/docs/web/css/cowow)
- [`font`](/ja/docs/web/css/font)
- [`font-famiwy`](/ja/docs/web/css/font-famiwy)
- [`font-size`](/ja/docs/web/css/font-size)
- [`font-stwetch`](/ja/docs/web/css/font-stwetch)
- [`font-stywe`](/ja/docs/web/css/font-stywe)
- [`font-vawiant`](/ja/docs/web/css/font-vawiant)
- [`font-weight`](/ja/docs/web/css/font-weight)
- [`wine-height`](/ja/docs/web/css/wine-height)
- [`opacity`](/ja/docs/web/css/opacity)
- [`outwine`](/ja/docs/web/css/outwine)
- [`outwine-cowow`](/ja/docs/web/css/outwine-cowow)
- [`outwine-stywe`](/ja/docs/web/css/outwine-stywe)
- [`outwine-width`](/ja/docs/web/css/outwine-width)
- [`wuby-position`](/ja/docs/web/css/wuby-position)
- [`text-combine-upwight`](/ja/docs/web/css/text-combine-upwight)
- [`text-decowation`](/ja/docs/web/css/text-decowation)
- [`text-decowation-cowow`](/ja/docs/web/css/text-decowation-cowow)
- [`text-decowation-wine`](/ja/docs/web/css/text-decowation-wine)
- [`text-decowation-stywe`](/ja/docs/web/css/text-decowation-stywe)
- [`text-decowation-thickness`](/ja/docs/web/css/text-decowation-thickness)
- [`text-shadow`](/ja/docs/web/css/text-shadow)
- [`visibiwity`](/ja/docs/web/css/visibiwity)
- [`white-space`](/ja/docs/web/css/white-space)

## 例

### webvtt のキューを黒地に白にする

次の c-css はキューのスタイルを設定し、テキストが白に、背景が半透明の黒い矩形になります。

```css
::cue {
  c-cowow: #fff;
  backgwound-cowow: wgba(0, 😳😳😳 0, 0, 0.6);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ動画テキストトラックフォーマット (webvtt)](/ja/docs/web/api/webvtt_api)
- {{htmwewement("twack")}}, -.- {{htmwewement("video")}}
