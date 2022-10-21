---
title: 画面の向きを制御する
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
---

{{DefaultAPISidebar("Screen Orientation API")}}{{SeeCompatTable}}

画面の向きは、[端末の向き](/ja/docs/WebAPI/Detecting_device_orientation)と異なる場合があります。端末が自身の向きを検知することができない場合でも、画面には向きがあります。また端末が自身の向きを知ることが可能であっても、Web アプリケーションのインターフェイスを維持または適合するために画面の向きを制御できるとよいでしょう。

CSS と JavaScript の双方に、画面の向きを扱う方法がいくつかあります。第一の方法は [orientation メディアクエリ](/ja/docs/CSS/Media_queries#orientation)です。これはブラウザウィンドウがランドスケープモード (すなわち幅が高さより大きい) かポートレートモード (高さが幅より大きい) かに基づいて、CSS を使用してコンテンツのレイアウトを調整できます。

第二の方法は、画面自身の現在の向きを取得して最終的に固定するために使用できる、JavaScript の Screen Orientation API です。

## 向きに基づいてレイアウトを調整する

向きの変化についてのもっとも一般的なケースのひとつが、端末の向きに基づいてコンテンツのレイアウトを変更したいときです。例えば、端末のディスプレイで最長の寸法に沿ってボタンバーを引き伸ばしたいでしょう。メディアクエリを使用して、簡単かつ自動的にこれを行うことができます。

以下の HTML コードによる例を見てみましょう。

```html
<ul id="toolbar">
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nisi nec sem viverra vitae fringilla nulla ultricies. In ac est dolor, quis tincidunt leo. Cras commodo quam non tortor consectetur eget rutrum dolor ultricies. Ut interdum tristique dapibus. Nullam quis malesuada est.</p>
```

画面の向きに応じて固有のスタイルを扱うために、CSS で orientation メディアクエリに頼ります。

```css
/* 始めに、共通のスタイルを定義しましょう */

html, body {
  width : 100%;
  height: 100%;
}

body {
  border: 1px solid black;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

p {
  font   : 1em sans-serif;
  margin : 0;
  padding: .5em;
}

ul {
  list-style: none;

  font   : 1em monospace;
  margin : 0;
  padding: .5em;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  background: black;
}

li {
  display: inline-block;
  margin : 0;
  padding: 0.5em;
  background: white;
}
```

共通のスタイルを定義したら、続いて向きに対して特有のケースの定義を始めましょう。

```css
/* 縦長の場合はツールバーを上に置きたい */

@media screen and (orientation: portrait) {
  #toolbar {
    width: 100%;
  }
}

/* 横長の場合はツールバーを左端に付けたい */

@media screen and (orientation: landscape) {
  #toolbar {
    position: fixed;
    width: 2.65em;
    height: 100%;
  }

  p {
    margin-left: 2em;
  }

  li + li {
    margin-top: .5em;
  }
}
```

結果は以下のとおりです。

| 縦長                                                                                                 | 横長                                                                                                 |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| {{ EmbedLiveSample('Adjusting_layout_based_on_the_orientation', 180, 350) }} | {{ EmbedLiveSample('Adjusting_layout_based_on_the_orientation', 350, 180) }} |

> **メモ:** orientation メディアクエリは、実際は端末の向きではなくブラウザウィンドウ (または iframe) の向きに応じて適用されます。

## 画面の向きを固定する

> **警告:** この API は実験的であり現在は `moz` 接頭辞付きで、[Firefox OS](/ja/docs/Mozilla/Firefox_OS) および [Android 版 Firefox](/ja/docs/Mozilla/Firefox_for_Android) で使用できます。また、Windows 8.1 以降の Internet Explorer では `ms` 接頭辞付きで使用できます。

一部の端末 (主にモバイル端末) は、画面に表示している内容をいつでも読めるようにするため、端末の向きに基づいて画面の向きを動的に変更できます。この動作はテキストコンテンツにはとても適していますが、そのような変化を好まないコンテンツも存在します。例えば端末の向きに基づくゲームでは、そのような向きの変化によって混乱してしまうでしょう。

Screen Orientation API は、そのような変化を抑制したり制御したりするものです。

### 向きの変化をリッスンする

{{event("orientationchange")}} イベントは、端末が画面の向きを変更する度に発生します。また、向きそのものを {{domxref("Screen.orientation")}} プロパティで読み取ることが可能です。

```js
screen.addEventListener("orientationchange", function () {
  console.log("The orientation of the screen is: " + Screen.orientation);
});
```

### 向きの変更を抑制する

任意の Web アプリケーションが、自身の要望に合うように画面を固定できます。{{domxref("Screen.lockOrientation()")}} メソッドを使用して画面の固定を、また {{domxref("Screen.unlockOrientation()")}} メソッドで固定の解除を行います。

{{domxref("Screen.lockOrientation()")}} は、適用する固定方式を定義する文字列 (または一連の文字列) を受け入れます。受け入れる値: `portrait-primary`、`portrait-secondary`、`landscape-primary`、`landscape-secondary`、`portrait`、`landscape` (それぞれの値について知るために {{domxref("Screen.lockOrientation")}} をご覧ください)。

```js
Screen.lockOrientation('landscape');
```

> **メモ:** 画面の固定はウェブアプリケーションに従属します。アプリケーション A が `landscape` に固定、またアプリケーション B が `portrait` に固定した場合は、アプリケーション A から B に、または B から A に切り替えても {{event("orientationchange")}} イベントは発生しません。これは、双方のアプリケーションが自身の向きを維持しているためです。
>
> ただし、固定の要求を満たすために向きを変更しなければならない場合は、向きの固定で {{event("orientationchange")}} イベントが発生してもかまいません。

## Firefox OS および Android: マニフェストを使用して向きをロックする

Firefox OS および Android 版 Firefox (近いうちにデスクトップ版 Firefox も対応予定) 特有の向きをロックする方法として、アプリのマニフェストで [orientation](/ja/Apps/Build/Manifest#orientation) フィールドを設定できます。例を示します:

```json
"orientation": "portrait"
```

## 関連情報

- {{domxref("Screen.orientation")}}
- {{domxref("Screen.lockOrientation()")}}
- {{domxref("Screen.unlockOrientation()")}}
- {{domxref("Screen.onorientationchange")}}
- [orientation メディアクエリ](/ja/docs/CSS/Media_queries#orientation)
- [A short introduction to media queries in Firefox 3.5](http://hacks.mozilla.org/2009/06/media-queries/)
