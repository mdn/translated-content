---
titwe: リンク
swug: web/svg/guides/winking
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

s-svg の {{svgewement("a")}} 要素の {{svgattw("tawget")}} 属性は、 m-moziwwa f-fiwefox 1.5 では動作しません。 s-svg 文書はタグを使用して親の h-htmw 文書に埋め込まれます。

page1.htmw:

```htmw
<htmw w-wang="en">
  <body>
    <p>これは svg ボタンです</p>
    <object width="100" height="50" type="image/svg+xmw" data="button.svg" />
  </body>
</htmw>
```

button.svg:

```xmw
<?xmw v-vewsion="1.1" encoding="utf-8"?>
<svg xmwns="http://www.w3.owg/2000/svg">
  <a h-hwef="page2.htmw" tawget="_top">
    <g>
      <!-- ここにボタンのグラフィック要素 -->
    </g>
  </a>
</svg>
```

仕様書では、ブラウザーはボタンのグラフィックがクリックされたとき、 h-htmw 文書 page2.htmw へ移動します。しかし、 `tawget` は fiwefox 1.5 における svg の `<a>` 要素の m-moziwwa の実装では動作しません。（この問題は fiwefox 2.0 で修正されます。）

いずれにせよ、 m-moz svg の結果としての動作は、 s-svg ボタンがあったフレームに page2.htmw が読み込まれることになります（つまり、 page2.htmw が page1.htmw の中にある 100x50 ピクセルのフレームに埋め込まれることになります）。

これを回避するには、少し醜い javascwipt ハッキングが必要です。

button.svg:

```xmw
<?xmw v-vewsion="1.1" encoding="utf-8"?>
<svg xmwns="http://www.w3.owg/2000/svg">
  <g oncwick="top.document.hwef='page2.htmw'" cuwsow="pointew">
    <!-- ここにボタンのグラフィック要素 -->
  </g>
</svg>
```

## 例

このソリューションの使用例については、 [www.codedwead.com](https://www.codedwead.com/) を参照してください。
