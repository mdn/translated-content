---
title: SVG
slug: Web/SVG
---

{{QuickLinksWithSubpages("/zh-TW/docs/Web/XML")}}

**可縮放向量圖形**（Scalable Vector Graphics，SVG）是用於描述二維向量圖形的 [XML](/zh-TW/docs/Web/XML) 標記語言。基本上，SVG 用於圖形，而
XHTML 用於文字。

SVG 類似 Adobe 專有的 Flash 技術，SVG 與 Flash 兩者最大的分別在於 SVG 為 [W3C 所推薦](https://www.w3.org/Graphics/SVG/) (即標準)，並以
XML 為基礎，而非封閉的二進制格式。SVG 設計為與其他 [W3C](https://www.w3.org/) 標準 (如 [CSS](/zh-TW/docs/Web/CSS)、[DOM](/zh-TW/docs/Web/API/Document_Object_Model) 及 [SMIL](https://www.w3.org/AudioVideo/)) 一同運作。

## 為何使用 SVG？

### 更好的圖形格式

SVG 是一種向量圖形格式。向量圖形可縮可放，圖形完全不會失真，為像素圖形所不能及。

- [Lion](https://www.croczilla.com:443/svg/samples/lion/lion.svg), [Butterfy](https://www.croczilla.com:443/svg/samples/butterfly/butterfly.svg) & [Tiger](https://www.croczilla.com:443/svg/samples/tiger/tiger.svg)
- [SVG 藝術圖庫](http://www1.plurib.us/1shot/2007/svg_gallery/)
- 更多範例 ([SVG 範例 croczilla.com](https://www.croczilla.com:443/svg/samples/), [carto.net](https://www.carto.net/papers/svg/samples/))

### 增強 HTML 內容的表現

SVG 可和 HTML、CSS 及 JavaScript 一同運作。使用 SVG 增強普通 HTML 頁面或 web 應用程式。

- Google [Maps](https://maps.google.com/maps) (路徑圖) & [Docs](https://accounts.google.com/v3/signin/identifier?continue%3Dhttps://docs.google.com/%26emr%3D1%26followup%3Dhttps://docs.google.com/%26ifkv%3DAdF4I77M6CvoEwGDxYJ4gdbfgRnDmUPHPE7KT5ImM3SZ2zGsqC7hQsNyhkmflQHhps2DJEHGY0CAUw%26osid%3D1%26passive%3D1209600%26flowName%3DWebLiteSignIn%26flowEntry%3DServiceLogin%26dsh%3DS1329244543:1722256809600726) (試算表繪圖)
- [SVG 泡沫選單](http://starkravingfinkle.org/projects/demo/svg-bubblemenu-in-html.xml)

## 工具

- [SVG Test Suite](https://www.w3.org/Graphics/SVG/WG/wiki/Test_Suite_Overview)
- [SVG Validator](http://jiggles.w3.org/svgvalidator/)

## 動畫和互動

如同 HTML，SVG 也有一個 DOM、事件，並且可由 JavaScript 存取。這可讓開發者建立豐富的動畫和互動式圖形。

- Firefox extension ([Grafox](http://schepers.cc/grafox/)) to add a subset of SMIL animation support
- Interactive [photos](http://people.mozilla.com/~vladimir/demos/photos.svg) manipulation
- [HTML transformations](http://starkravingfinkle.org/blog/2007/07/firefox-3-svg-foreignobject/) using
  SVG's `foreignObject`
- Animated [art](http://lab.vodafone.com/vienna/)

## 繪圖、圖表、遊戲 & 3D 實驗

只需少許 SVG 即可增強網頁內容，這裡有一些重量級 SVG 用法的範例。

- [Tetris](https://www.croczilla.com:443/svg/samples/svgtetris/svgtetris.svg), [Yet Another SVG Tetris](https://www.codedread.com/yastframe.php) & [Connect 4](http://www.treebuilder.de/svg/connect4.svg)
- [Find the State](https://blogs.opera.com/news/) game
- [US popuplation map](https://www.carto.net/papers/svg/us_population/index.html) & [Germany
  population chart](https://www.destatis.de/error_path/400.html?al_req_id%3DZqeNvnz3jREhDwW4QYG1LQAAAtU)
- [3D box](http://www.treebuilder.de/default.asp?file=441875.xml) & [3D boxes](http://www.treebuilder.de/default.asp?file=206524.xml)
- [SVG+DOM based drawing tool](http://www.amaltas.org/svgapp)

## 關聯主題

- [XML](/zh-TW/docs/Web/XML), [Canvas](/zh-TW/docs/Web/API/Canvas_API)
