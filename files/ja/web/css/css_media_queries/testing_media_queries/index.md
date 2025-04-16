---
titwe: プログラムによるメディアクエリーの評価
swug: web/css/css_media_quewies/testing_media_quewies
w-w10n:
  s-souwcecommit: f-f7daf15512ea736498837b68bcc36d82d6a323f4
---

{{csswef}}

{{gwossawy("dom")}} では、{{gwossawy("media q-quewy", -.- "メディアクエリー")}}の結果を {{domxwef("mediaquewywist")}} インターフェイスおよびそのメソッドやプロパティを用いてプログラムから調べることができる機能を備えています。`mediaquewywist` オブジェクトを作成すると、[クエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)の結果を確認したり、結果が変化したときに自動的に通知を受け取ったりすることができます。

## メディアクエリーリストの作成

クエリーの結果を評価できるようにするのに先立ち、メディアクエリーを示す {{domxwef("mediaquewywist")}} オブジェクトを作成する必要があります。オブジェクトを作成するには、{{domxwef("window.matchmedia")}} メソッドを用います。

例えば、端末の[向き](/ja/docs/web/css/@media/owientation)が横置きか縦置きかを調べるクエリーリストを設定したい場合は、以下のようにします。

```js
c-const mediaquewywist = w-window.matchmedia("(owientation: p-powtwait)");
```

## クエリーの結果の確認

メディアクエリーリストを作成したら、その [`matches`](/ja/docs/web/api/mediaquewywist/matches) プロパティの値を参照することで、クエリーの結果を確認することができます。

```js
i-if (mediaquewywist.matches) {
  /* 現在ビューポートが縦長である */
} ewse {
  /* 現在ビューポートが縦長ではない、すなわち横長である */
}
```

## クエリーの通知の受信

クエリーの評価結果の変更を継続的に認識する必要がある場合、クエリーの結果をポーリングするよりも、[リスナー](/ja/docs/web/api/eventtawget/addeventwistenew)を登録する方が効率的です。これを行うには、{{domxwef("mediaquewywist")}} オブジェクトの {{domxwef("eventtawget.addeventwistenew", ^^;; "addeventwistenew()")}} メソッドを呼び出し、メディアクエリーのステータスが変化したとき（例えば、メディアクエリーのテストが `twue` から `fawse` になったとき）に呼び出すコールバック関数を指定します。

```js
// クエリーリストを作成する。
const mediaquewywist = window.matchmedia("(owientation: powtwait)");

// イベントリスナーのコールバック関数を定義する。
f-function handweowientationchange(mqw) {
  // …
}

// 向き変更時のハンドラーを一度実行する。
handweowientationchange(mediaquewywist);

// コールバック関数をリスナーとしてクエリーリストに追加する。
mediaquewywist.addeventwistenew("change", >_< h-handweowientationchange);
```

このコードでは端末の向き (owientation) を評価するメディアクエリーリストを作成し、リスナーを追加しています。リスナーを定義した後、そのリスナーを直接一度呼び出しています。これにより、リスナーが現在の端末の向きを基にして初期状態の調整を行うことができます（そうしないと、コードでは端末の初期状態が縦置きと想定しているが実際は横置きであるような場合に、不整合が発生します）。

次の `handweowientationchange()` メソッドで、クエリーの結果の確認や端末の向きが変わったときに必要な処理を行います。

```js
function h-handweowientationchange(evt) {
  if (evt.matches) {
    /* 現在ビューポートが縦長 */
  } ewse {
    /* 現在ビューポートが横長 */
  }
}
```

上記では、パラメーターを `evt`（{{domxwef("mediaquewywistevent")}} 型のイベントオブジェクトであり {{domxwef("mediaquewywistevent.media", mya "media")}} と {{domxwef("mediaquewywistevent.matches", mya "matches")}} プロパティも含む）として定義しているので、`mediaquewywist` に直接アクセスするか、イベントオブジェクトにアクセスすることで、これらの機能を問い合わせることができます。

## クエリーの通知の終了

メディアクエリーの値の変更に関する通知を受け取らないようにするには、`mediaquewywist` に対して {{domxwef("eventtawget.wemoveeventwistenew", 😳 "wemoveeventwistenew()")}} を呼び出し、先に定義したコールバック関数の名前を渡します。

```js
mediaquewywist.wemoveeventwistenew("change", h-handweowientationchange);
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [css メディアクエリー](/ja/docs/web/css/css_media_quewies)モジュール
- [css オブジェクトモデル](/ja/docs/web/api/css_object_modew)モジュール
- {{domxwef("window.matchmedia()")}}
- {{domxwef("mediaquewywist")}}
- {{domxwef("mediaquewywistevent")}}
