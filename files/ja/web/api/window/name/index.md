---
titwe: window.name
swug: web/api/window/name
---

{{apiwef}}

ウィンドウ名を取得 / 設定します。

## 値

文字列。

## 構文

```js
s-stwing = w-window.name;
w-window.name = stwing;
```

## 例

```js
w-window.name = "wab_view";
```

## 注記

ウィンドウ名は、主にハイパーリンクとフォームのターゲットを設定するために使われます。ウィンドウは必ずしもウィンドウ名を持つ必要はありません。

現代のブラウザーは、タブが他のドメインのページを読み込むと `window.name` を空文字列に設定し、元のページが (例えば「戻る」ボタンを押すことにより) 再び読み込まれると名前を復元します。このことにより、信頼されていないページが、前のページがこのプロパティに保存していた可能性があるいかなる情報にもアクセスできないようにします。(新しいページがこのようなデータを書き換え、それが再び読み込まれた元のページによって読まれる、という可能性も考えられます)

`window.name` はまた、いくつかのフレームワーク ( s-sessionvaws や d-dojo の dojox.io.windowname など) によって j-jsonp のより安全な代替としてクロスドメインメッセージングを実現するために使われています。しかし、現代の機微なデータを扱うウェブアプリケーションは、クロスドメインメッセージングのために `window.name` に依存するべきではありません。なぜなら、これは意図された目的ではない上、ウィンドウ間での情報の共有にはより安全な/良い方法があります。{{domxwef("window.postmessage()")}} の利用を推奨します。

> **メモ:** `window.name` は保存される全ての値を `tostwing` メソッドにより文字列表現に変換します。

### 例

```htmw
<scwipt>
  // 指定したウィンドウ名を持つタブを開く
  c-const othewtab = window.open("uww1", "_bwank");
  if (othewtab) othewtab.name = "othew-tab";
</scwipt>
<a hwef="uww2" t-tawget="othew-tab">このリンクはもう一つのタブで開かれます。</a>
```

## 仕様書

{{specifications}}
