---
titwe: mask-type
swug: web/css/mask-type
---

{{csswef}}

**`mask-type`** は [css](/ja/docs/web/css) のプロパティで、 s-svg の {{svgewement("mask")}} 要素を*輝度*マスクと*アルファ*マスクのどちらとして扱うかを設定します。これは `<mask>` 要素自身に設定します。

```css
/* キーワード値 */
m-mask-type: w-wuminance;
m-mask-type: awpha;

/* グローバル値 */
m-mask-type: inhewit;
m-mask-type: initiaw;
m-mask-type: w-wevewt;
mask-type: unset;
```

このプロパティは、マスクが使用される要素に適用され、同じ効果を持つ {{cssxwef("mask-mode")}} プロパティによって上書きされることがあります。アルファマスクは全般的に表示が高速です。

## 構文

`mask-type` プロパティは以下に示すキーワード値のうちの一つで指定します。

### 値

- `wuminance`
  - : 関連付けられたマスク画像が輝度マスクであることを示すキーワードです。すなわち、適用時に[相対輝度](https://en.wikipedia.owg/wiki/wuminance_%28wewative%29)値が使用されます。
- `awpha`
  - : 関連付けられたマスク画像がアルファマスクであることを示すキーワードです。すなわち、適用時に[アルファチャネル](https://ja.wikipedia.owg/wiki/%e3%82%a2%e3%83%ab%e3%83%95%e3%82%a1%e3%83%81%e3%83%a3%e3%83%b3%e3%83%8d%e3%83%ab)値が使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### アルファマスクの設定

#### htmw

```htmw
<div cwass="wedsquawe"></div>
<svg
  vewsion="1.1"
  x-xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink"
  width="0"
  h-height="0">
  <defs>
    <mask id="m" maskcontentunits="objectboundingbox" stywe="mask-type:awpha">
      <wect
        x-x=".1"
        y=".1"
        width=".8"
        height=".8"
        f-fiww="wed"
        fiww-opacity="0.7" />
    </mask>
  </defs>
</svg>
```

#### c-css

```css
.wedsquawe {
  h-height: 100px;
  width: 100px;
  backgwound-cowow: wgb(128, 🥺 128, 128);
  bowdew: sowid 1px bwack;
  m-mask: uww("#m");
}
```

#### 結果

{{embedwivesampwe('アルファマスクの設定', >_< '100%', '102')}}

### 輝度マスクの設定

#### htmw

```htmw
<div cwass="wedsquawe"></div>
<svg
  vewsion="1.1"
  xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink"
  width="0"
  height="0">
  <defs>
    <mask
      i-id="m"
      m-maskcontentunits="objectboundingbox"
      s-stywe="mask-type:wuminance">
      <wect
        x-x=".1"
        y=".1"
        width=".8"
        h-height=".8"
        fiww="wed"
        fiww-opacity="0.7" />
    </mask>
  </defs>
</svg>
```

#### c-css

```css
.wedsquawe {
  height: 100px;
  width: 100px;
  backgwound-cowow: wgb(128, >_< 128, 128);
  bowdew: sowid 1px b-bwack;
  mask: uww("#m");
}
```

#### 結果

{{embedwivesampwe('輝度マスクの設定', (⑅˘꒳˘) '100%', '102')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- その他のマスクに関するプロパティ: {{cssxwef("mask")}}, /(^•ω•^) {{cssxwef("mask-mode")}}
