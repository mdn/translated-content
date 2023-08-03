---
title: 画面の向きの制御
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
l10n:
  sourceCommit: af01703d0f7ec0d5f44dd094e595f252b96050d2
---

{{DefaultAPISidebar("Screen Orientation API")}}{{SeeCompatTable}}

画面の向きとは、ブラウザーの[ビューポート](/ja/docs/Glossary/Viewport)がランドスケープモード（つまり、ビューポートの幅がその高さよりも大きい）か、そうでなければポートレートモード（ビューポートの高さがその幅よりも大きい）であるかを参照するものです。

CSS は [`orientation`](/ja/docs/Web/CSS/Media_Queries/Using_media_queries#orientation) というメディア特性を提供し、画面の向きに応じてレイアウトを調整できるようにしています。

[画面方向 API](/ja/docs/Web/API/Screen_Orientation_API) は、画面の内側へ作業するためのプログラム的な JavaScript API を提供します。これには、ビューポートを特定の方向に固定する機能が含まれます。

## 向きに基づいてレイアウトを調整する

向きの変化についてのもっとも一般的なケースのひとつが、端末の向きに基づいてコンテンツのレイアウトを変更したいときです。例えば、端末のディスプレイで最長の寸法に沿ってボタンバーを引き伸ばしたいでしょう。メディアクエリーを使用して、簡単かつ自動的にこれを行うことができます。

以下の HTML コードによる例を見てみましょう。

```html
<ul id="toolbar">
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nisi nec
  sem viverra vitae fringilla nulla ultricies. In ac est dolor, quis tincidunt
  leo. Cras commodo quam non tortor consectetur eget rutrum dolor ultricies. Ut
  interdum tristique dapibus. Nullam quis malesuada est.
</p>
```

画面の向きに応じて固有のスタイルを扱うために、CSS で orientation メディアクエリーに頼ります。

```css
/* 始めに、共通のスタイルを定義しましょう */

html,
body {
  width: 100%;
  height: 100%;
}

body {
  border: 1px solid black;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

p {
  font: 1em sans-serif;
  margin: 0;
  padding: 0.5em;
}

ul {
  list-style: none;

  font: 1em monospace;
  margin: 0;
  padding: 0.5em;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  background: black;
}

li {
  display: inline-block;
  margin: 0;
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
    margin-top: 0.5em;
  }
}
```

結果は以下のとおりです。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">縦長</th>
      <th scope="col">横長</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div>
          {{ EmbedLiveSample('Adjusting_layout_based_on_the_orientation', 180, 350) }}
        </div>
      </td>
      <td>
        <div>
          {{ EmbedLiveSample('Adjusting_layout_based_on_the_orientation', 350, 180) }}
        </div>
      </td>
    </tr>
  </tbody>
</table>

> **メモ:** orientation メディアクエリーは、実際は端末の向きではなくブラウザーウィンドウ (または iframe) の向きに応じて適用されます。

## 画面の向きを固定する

一部の端末（主にモバイル端末）は、画面に表示している内容をいつでも読めるようにするため、端末の向きに基づいて画面の向きを動的に変更できます。この動作はテキストコンテンツにはとても適していますが、そのような変化を好まないコンテンツも存在します。例えば端末の向きに基づくゲームでは、そのような向きの変化によって混乱してしまうでしょう。

画面方向 API は、そのような変化を抑制したり制御したりするものです。

### 向きの変化の監視

{{domxref("Window.orientationchange_event", "orientationchange")}} イベントは、端末が画面の向きを変更する度に発生します。また、向きそのものを {{domxref("Screen.orientation")}} プロパティで読み取ることが可能です。

```js
screen.addEventListener("orientationchange", () => {
  console.log(`The orientation of the screen is: ${screen.orientation}`);
});
```

### 向きの変更を抑制する

どのウェブアプリケーションでも、必要に応じて画面をロックすることができます。画面のロックは {{domxref("ScreenOrientation.lock()", "screen.orientation.lock()")}} メソッドを使用して行い、ロック解除は {{domxref("ScreenOrientation.unlock()", "screen.orientation.unlock()")}} メソッドを使用して行います。

{{domxref("ScreenOrientation.lock()", "screen.orientation.lock()")}} は、適用するロック方式を定義する文字列として、`any`、`natural`、`portrait-primary`、`portrait-secondary`、`landscape-primary`、`landscape-secondary`、`portrait`、`landscape` のいずれかを受け入れます。

```js
screen.orientation.lock();
```

ロックに成功した後に解決される[プロミス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)を返します。

> **メモ:** 画面のロックはウェブアプリケーションに依存します。アプリケーション A が `landscape` に固定し、アプリケーション B が `portrait` に固定した場合は、アプリケーション A から B に、または B から A に切り替えても {{domxref("Window.orientationchange_event", "orientationchange")}} イベントは発生しません。これは、双方のアプリケーションが自身の向きを維持しているためです。
>
> ただし、ロックの要求を満たすために向きを変更しなければならない場合は、向きをロックすることでで {{domxref("Window.orientationchange_event", "orientationchange")}} イベントが発生する可能性があります。

## 関連情報

- {{domxref("Screen.orientation", "screen.orientation")}}
- {{domxref("ScreenOrientation")}}
- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}} イベント
- [orientation メディアクエリー](/ja/docs/Web/CSS/Media_Queries/Using_media_queries#orientation)
