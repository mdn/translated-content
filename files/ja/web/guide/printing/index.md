---
title: 印刷
slug: Web/Guide/Printing
---

コンテンツを印刷するときに、ウェブサイトまたはアプリケーションで使い勝手を向上させたい場合があります。考えられるシナリオはいくつかあります。

- 紙の大きさと形状を生かしてレイアウトを調整したい
- (画面とは) 異なるスタイルを利用して、紙の上でのコンテンツの見栄えを良くしたい
- 良い結果をるために、より高解像度の画像を使用したい
- 印刷を始める前にコンテンツの印刷プレビュー版を表示するなど、印刷の使い勝手を調整したい

他にも印刷処理を管理したい場合がありますが、これらは最も一般的なシナリオの一部です。この記事では、ウェブコンテンツの印刷品質を向上させるためのヒントとテクニックを紹介します。

## 印刷スタイルシートの使用

{{HTMLElement("head")}} タグの中に次のように追加してください。

```
<link href="/path/to/print.css" media="print" rel="stylesheet" />
```

## レイアウトを改善するためのメディアクエリの使用

## 印刷リクエストの検出

ブラウザーによっては (Firefox 6 以降や Internet Explorer など) コンテンツが印刷を開始することを判断できるように、 `beforeprint` および `afterprint` イベントを送信します。これを使用して、印刷中に表示されるユーザーインターフェイスを調整することができます (例えば、印刷処理中にユーザーインターフェイス要素を表示したり隠したりするなど)。

> **メモ:** [`window.onbeforeprint`](/ja/docs/DOM/window.onbeforeprint) および [`window.onafterprint`](/ja/docs/DOM/window.onafterprint) を使用してこれらのイベントにハンドラーを割り当てることもできますが、 {{domxref("EventTarget.addEventListener()")}} を使用することをお勧めします。

## 例

よくある例をいくつか紹介します。

#### ポップアップウィンドウを開き、終了したら閉じる

ユーザーがコンテンツを印刷した後に [popup window](/ja/docs/DOM/window.open) (例えば文書の印刷用など) を自動的に閉じたい場合は、次のようなコードで実現できます。

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>JavaScript Window Close Example</title>
    <script type="text/javascript">
      function popuponclick() {
        my_window = window.open(
          "",
          "mywindow",
          "status=1,width=350,height=150",
        );
        my_window.document.write("<html><head><title>Print Me</title></head>");
        my_window.document.write('<body onafterprint="self.close()">');
        my_window.document.write(
          "<p>When you print this window, it will close afterward.</p>",
        );
        my_window.document.write("</body></html>");
      }
    </script>
  </head>
  <body>
    <p>
      To try out the <code>afterprint</code> event, click the link below to open
      the window to print. You can also try changing the code to use
      <code>beforeprint</code> to see the difference.
    </p>
    <p><a href="javascript: popuponclick()">Open Popup Window</a></p>
  </body>
</html>
```

[ライブ例を表示](/samples/domref/printevents.html)

### 外部ページを開かずに印刷する

外部ページを開かずに印刷できるようにしたい場合は、非表示の {{HTMLElement("iframe")}} ([HTMLIFrameElement](/ja/docs/DOM/HTMLIFrameElement) を参照) を利用し、ユーザーがコンテンツを印刷した後で自動的にそれを削除するようにすることで実現できます。以下の例は、 `externalPage.html` という名前のファイルを印刷することができる例です。

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>MDN Example</title>
    <script type="text/javascript">
      function closePrint() {
        document.body.removeChild(this.__container__);
      }

      function setPrint() {
        this.contentWindow.__container__ = this;
        this.contentWindow.onbeforeunload = closePrint;
        this.contentWindow.onafterprint = closePrint;
        this.contentWindow.focus(); // Required for IE
        this.contentWindow.print();
      }

      function printPage(sURL) {
        var oHiddFrame = document.createElement("iframe");
        oHiddFrame.onload = setPrint;
        oHiddFrame.style.position = "fixed";
        oHiddFrame.style.right = "0";
        oHiddFrame.style.bottom = "0";
        oHiddFrame.style.width = "0";
        oHiddFrame.style.height = "0";
        oHiddFrame.style.border = "0";
        oHiddFrame.src = sURL;
        document.body.appendChild(oHiddFrame);
      }
    </script>
  </head>

  <body>
    <p>
      <span
        onclick="printPage('externalPage.html');"
        style="cursor:pointer;text-decoration:underline;color:#0000ff;"
        >Print external page!</span
      >
    </p>
  </body>
</html>
```

> **メモ:** 古いバージョン Internet Explorer は、非表示の {{HTMLElement("iframe")}} の印刷することができません。

## 関連情報

- [`window.print`](/ja/docs/DOM/window.print)
- [`window.onbeforeprint`](/ja/docs/DOM/window.onbeforeprint)
- [`window.onafterprint`](/ja/docs/DOM/window.onafterprint)
- [Media queries](/ja/docs/CSS/Media_queries)
- {{cssxref("@media")}}
