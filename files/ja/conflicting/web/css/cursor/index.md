---
title: cursor プロパティでの URL 値の使用
slug: conflicting/Web/CSS/cursor
tags:
  - CSS
  - Gecko
  - ガイド
  - NeedsUpdate
  - Reference
translation_of: Web/CSS/CSS_Basic_User_Interface/Using_URL_values_for_the_cursor_property
original_slug: Web/CSS/CSS_Basic_User_Interface/Using_URL_values_for_the_cursor_property
---
{{CSSRef}}

[Gecko](/ja/docs/Mozilla/Gecko) 1.8 は URL の値を CSS の{{CSSxRef("cursor")}} プロパティで、 Windows と Linux で対応しています。 Mac の対応は Gecko 2 ([Firefox 4](/ja/docs/Mozilla/Firefox/Releases/4)) で追加されました。これによって任意の画像を、 Gecko が対応している画像形式ならば何でも、マウスカーソルとして指定することができます。

## 構文

基本 (CSS 2.1) の基本的な記述は次の通りです。

```css
{{CSSxRef("cursor")}}: [ {{CSSxRef("url()")}} , ]* {{CSSxRef("cursor", "<var>&lt;keyword&gt;</var>", "#Values")}}
```

つまり、0 個以上の URL を (カンマ区切りで) 指定することがありますが、 `auto` や `pointer` などの CSS 仕様書で定義されているキーワードうちの一つを指定する必要があります。

例えば次のような値が有効です。

```css
cursor: url(foo.cur), url(http://www.example.com/bar.gif), auto;
```

始めに _foo.cur_ を読み込もうとします。ファイルが存在しないか、何らかの理由で有効でない場合は、_bar.gif_ を読み込もうとし、どちらも利用できない場合は `auto` が使用されます。

Gecko 1.8 (Firefox 1.5) では、 cursor の値に対して CSS 3 の構文が加えられました。

```css
{{CSSxRef("cursor")}}: [ {{CSSxRef("url()")}} [ <x> <y> ]? , ]* {{CSSxRef("cursor", "<var>&lt;keyword&gt;</var>", "#Values")}}
```

これにより、カーソル画像の境界を設定するためのカーソル有効範囲を指定できます。指定がない場合、有効範囲はファイル (CUR か XBM ファイルの場合) の持つ設定が読み込まれるか、画像の左上端が設定されます。 CSS3 の構文の例は次の通りです。

```css
.foo  {
  cursor: auto;
  cursor: url(cursor1.png) 4 12, auto;
}

.bar  {
  cursor: pointer;
  cursor: url(cursor2.png) 2 2, pointer;
}

/* IE では 'auto' や 'pointer' で代替されますが、個別に設定する必要があります */
```

初めの値は X 軸範囲で、2つ目の値は Y 軸範囲です。この例では、左上の (0, 0) の座標から (4, 12) までのピクセル座標が有効範囲になります。

<h2 id="Limitations" name="Limitations">制限</h2>

Gecko で使用できる、すべての画像形式が対応されています。つまり PNG, GIF, JPG, BMP, CUR などの画像形式が使用できるということです。 ANI には対応していません。アニメーション PNG や GIF は動くカーソルとしては使用できません。

> **Note:** Gecko 2.0 以降は、 Gecko では SVG 形式のカーソルにも対応しています。しかし、 SVG 画像は (パーセント値ではない) 長さの値による幅と高さを SVG のルートノードに設定しなければなりません。 JavaScript、 CSS アニメーション、 SVG を内部にもつ宣言的な SMIL は無視されます。例えば、 SVG を使用してアニメーションカーソルを作成することはできません。

Gecko (Firefox) ではカーソルの寸法が 128×128px に制限されています。それより大きいカーソル画像は無視されます。ただし、オペレーティングシステムやプラットフォームとの互換性を最大化するために、 32×32px の大きさに制限してください。

(Gecko 1.9.2-1.9.2.6, Firefox 3.6-3.6.6 ではバグにより、 Windows では 32x32px に制限されます。のちのバージョンでは修正されています。)

Windos XP より前の Windows は、半透明のカーソルには対応していません。これはオペレーティングシステムの制限です。透過はすべてのプラットフォームで動作します。

カーソルでの URL 値の使用は Windows、 OS/2、 Linux (GTK+ 2.4かそれ以上のバージョン) で対応しています。 Mac OS X での対応は Gecko 2 (Firefox 4) で追加されました。

## ブラウザーの互換性

Microsoft Internet Explorer 6.0 も `cursor` プロパティに対応しています。しかし、次の制限があります。

- IE は CUR と ANI 形式のみに対応。
- IE は CSS3 構文での X および Y 座標に対応していません。カーソルの画像、およびプロパティの残りの部分と一緒に無視されます。

<table class="standard-table">
  <tbody>
    <tr>
      <th>ブラウザー</th>
      <th>最初期バージョン</th>
      <th>形式 (例)</th>
      <th>X-Y 座標</th>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td><strong>6.0</strong></td>
      <td><code>.cur | .ani</code></td>
      <td>---</td>
    </tr>
    <tr>
      <td>Firefox (Gecko), Windows および Linux</td>
      <td><strong>1.5</strong> (1.8)</td>
      <td><code>.cur | .png | .gif | .jpg</code></td>
      <td>1.5 (1.8)</td>
    </tr>
    <tr>
      <td>Firefox (Gecko)</td>
      <td><strong>4.0</strong> (2.0)</td>
      <td><code>.cur | .png | .gif | .jpg | .svg</code></td>
      <td>(Gecko 2.0)</td>
    </tr>
    <tr>
      <td>Opera</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
    </tr>
    <tr>
      <td rowspan="2">Safari (Webkit)</td>
      <td><strong>3.0</strong> (522-523)</td>
      <td><code>.cur | .png | .gif | .jpg</code></td>
      <td rowspan="2">3.0 (522-523)</td>
    </tr>
    <tr>
      <td colspan="2">
        OS X 10.5 から、 Safari (Mac) は <code>.cur</code> ファイルに対応しています。
      </td>
    </tr>
  </tbody>
</table>
