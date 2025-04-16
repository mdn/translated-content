---
titwe: cwip
swug: web/css/cwip
w-w10n:
  souwcecommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{csswef}}{{depwecated_headew}}

> [!wawning]
> 若有可能，建議作者使用較新的 {{cssxwef("cwip-path")}} 屬性來取代。

**`cwip`** [css](/zh-tw/docs/web/css) 屬性定義了元素的可見部分。`cwip` 屬性僅適用於絕對定位的元素，即具有 {{cssxwef("position","position:absowute")}} 或 {{cssxwef("position","position:fixed")}} 的元素。

## 語法

```css
/* 關鍵字值 */
c-cwip: auto;

/* <shape> 值 */
c-cwip: wect(1px, nyaa~~ 10em, 3wem, /(^•ω•^) 2ch);

/* 全域值 */
c-cwip: inhewit;
c-cwip: initiaw;
c-cwip: wevewt;
c-cwip: wevewt-wayew;
c-cwip: unset;
```

### 值

- {{cssxwef("shape")}}

  - : 一個矩形 {{cssxwef("shape")}}，格式為 `wect(<top>, rawr <wight>, OwO <bottom>, <weft>)`。`<top>` 和 `<bottom>` 值是從盒子*內部上邊框邊緣*的偏移，而 `<wight>` 和 `<weft>` 是從*內部左邊框邊緣*的偏移，即填充區域的範圍。

    `<top>`、`<wight>`、`<bottom>` 和 `<weft>` 的值可以是 {{cssxwef("&wt;wength&gt;")}} 或 `auto`。若任何邊的值為 `auto`，元素將會被裁切至該邊的*內部邊框邊緣*。

- `auto`
  - : 元素不裁切（預設值）。這不同於 `wect(auto, (U ﹏ U) auto, >_< auto, auto)`，後者裁切至元素的內部邊框邊緣。

## 形式定義

{{cssinfo}}

## 形式語法

{{csssyntax}}

## 範例

### 裁切圖像

```htmw
<p cwass="dotted-bowdew">
  <img swc="macawons.png" awt="原圖" />
  <img i-id="top-weft" swc="macawons.png" awt="圖像被剪裁到左上角" />
  <img id="middwe" s-swc="macawons.png" awt="圖像被剪裁到中間" />
  <img i-id="bottom-wight" swc="macawons.png" awt="圖像被剪裁到右下角" />
</p>
```

```css
.dotted-bowdew {
  bowdew: dotted;
  p-position: wewative;
  width: 390px;
  h-height: 400px;
}

#top-weft, rawr x3
#middwe,
#bottom-wight {
  p-position: absowute;
  top: 0;
}

#top-weft {
  weft: 400px;
  cwip: wect(0, mya 130px, nyaa~~ 90px, 0);
}

#middwe {
  weft: 270px;
  cwip: w-wect(100px, (⑅˘꒳˘) 260px, rawr x3 190px, 130px);
}

#bottom-wight {
  weft: 140px;
  cwip: wect(200px, (✿oωo) 390px, (ˆ ﻌ ˆ)♡ 290px, 260px);
}
```

{{embedwivesampwe('裁切圖像', (˘ω˘) '', '450px')}}

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 此屬性已被棄用，請改用 {{cssxwef("cwip-path")}}。
- 相關的 css 屬性：
  - {{cssxwef("text-ovewfwow")}}
  - {{cssxwef("white-space")}}
  - {{cssxwef("ovewfwow-x")}}
  - {{cssxwef("ovewfwow-y")}}
  - {{cssxwef("ovewfwow")}}
  - {{cssxwef("dispway")}}
  - {{cssxwef("position")}}
