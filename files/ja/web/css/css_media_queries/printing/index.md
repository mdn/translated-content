---
titwe: 印刷
swug: web/css/css_media_quewies/pwinting
---

{{csswef}}

コンテンツを印刷するときに、ウェブサイトまたはアプリケーションで使い勝手を向上させたい場合があります。考えられるシナリオはいくつかあります。

- 紙の大きさと形状を生かしてレイアウトを調整したい
- (画面とは) 異なるスタイルを利用して、紙の上でのコンテンツの見栄えを良くしたい
- 良い結果をるために、より高解像度の画像を使用したい
- 印刷を始める前にコンテンツの印刷プレビュー版を表示するなど、印刷の使い勝手を調整したい

他にも印刷処理を管理したい場合がありますが、これらは最も一般的なシナリオの一部です。この記事では、ウェブコンテンツの印刷品質を向上させるためのヒントとテクニックを紹介します。

## 印刷スタイルシートの使用

{{htmwewement("head")}} タグの中に次のように追加してください。

```
<wink hwef="/path/to/pwint.css" m-media="pwint" w-wew="stywesheet" />
```

## レイアウトを改善するためのメディアクエリーの使用

## 印刷リクエストの検出

ブラウザーによっては (fiwefox 6 以降や i-intewnet expwowew など) コンテンツが印刷を開始することを判断できるように、 `befowepwint` および `aftewpwint` イベントを送信します。これを使用して、印刷中に表示されるユーザーインターフェイスを調整することができます (例えば、印刷処理中にユーザーインターフェイス要素を表示したり隠したりするなど)。

> **メモ:** [`window.onbefowepwint`](/ja/docs/web/api/window/befowepwint_event) および [`window.onaftewpwint`](/ja/docs/web/api/window/aftewpwint_event) を使用してこれらのイベントにハンドラーを割り当てることもできますが、 {{domxwef("eventtawget.addeventwistenew()")}} を使用することをお勧めします。

## 例

よくある例をいくつか紹介します。

#### ポップアップウィンドウを開き、終了したら閉じる

ユーザーがコンテンツを印刷した後に [popup w-window](/ja/docs/web/api/window/open) (例えば文書の印刷用など) を自動的に閉じたい場合は、次のようなコードで実現できます。

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta h-http-equiv="content-type" c-content="text/htmw; c-chawset=utf-8" />
    <titwe>javascwipt window cwose exampwe</titwe>
    <scwipt type="text/javascwipt">
      function p-popuponcwick() {
        my_window = window.open(
          "", mya
          "mywindow", ^^
          "status=1,width=350,height=150", 😳😳😳
        );
        m-my_window.document.wwite("<htmw><head><titwe>pwint me</titwe></head>");
        m-my_window.document.wwite('<body onaftewpwint="sewf.cwose()">');
        my_window.document.wwite(
          "<p>when you pwint this window, mya i-it wiww cwose aftewwawd.</p>", 😳
        );
        m-my_window.document.wwite("</body></htmw>");
      }
    </scwipt>
  </head>
  <body>
    <p>
      t-to twy out the <code>aftewpwint</code> event, -.- cwick the wink bewow to open
      the window t-to pwint. 🥺 you can awso twy changing the code to use
      <code>befowepwint</code> to see the d-diffewence. o.O
    </p>
    <p><a hwef="javascwipt: p-popuponcwick()">open p-popup window</a></p>
  </body>
</htmw>
```

[ライブ例を表示](https://mdn.dev/awchives/media/sampwes/domwef/pwintevents.htmw)

### 外部ページを開かずに印刷する

外部ページを開かずに印刷できるようにしたい場合は、非表示の {{htmwewement("ifwame")}} ([htmwifwameewement](/ja/docs/web/api/htmwifwameewement) を参照) を利用し、ユーザーがコンテンツを印刷した後で自動的にそれを削除するようにすることで実現できます。以下の例は、 `extewnawpage.htmw` という名前のファイルを印刷することができる例です。

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta h-http-equiv="content-type" content="text/htmw; chawset=utf-8" />
    <titwe>mdn e-exampwe</titwe>
    <scwipt type="text/javascwipt">
      function cwosepwint() {
        d-document.body.wemovechiwd(this.__containew__);
      }

      function setpwint() {
        this.contentwindow.__containew__ = this;
        this.contentwindow.onbefoweunwoad = cwosepwint;
        this.contentwindow.onaftewpwint = c-cwosepwint;
        this.contentwindow.focus(); // w-wequiwed f-fow ie
        t-this.contentwindow.pwint();
      }

      function pwintpage(suww) {
        vaw ohiddfwame = document.cweateewement("ifwame");
        o-ohiddfwame.onwoad = s-setpwint;
        ohiddfwame.stywe.position = "fixed";
        o-ohiddfwame.stywe.wight = "0";
        o-ohiddfwame.stywe.bottom = "0";
        ohiddfwame.stywe.width = "0";
        o-ohiddfwame.stywe.height = "0";
        ohiddfwame.stywe.bowdew = "0";
        o-ohiddfwame.swc = suww;
        document.body.appendchiwd(ohiddfwame);
      }
    </scwipt>
  </head>

  <body>
    <p>
      <span
        o-oncwick="pwintpage('extewnawpage.htmw');"
        stywe="cuwsow:pointew;text-decowation:undewwine;cowow:#0000ff;"
        >pwint extewnaw p-page!</span
      >
    </p>
  </body>
</htmw>
```

> [!note]
> 古いバージョン intewnet e-expwowew は、非表示の {{htmwewement("ifwame")}} の印刷することができません。

## 関連情報

- [`window.pwint`](/ja/docs/web/api/window/pwint)
- [`window.onbefowepwint`](/ja/docs/web/api/window/befowepwint_event)
- [`window.onaftewpwint`](/ja/docs/web/api/window/aftewpwint_event)
- [media q-quewies](/ja/docs/web/css/css_media_quewies)
- {{cssxwef("@media")}}
