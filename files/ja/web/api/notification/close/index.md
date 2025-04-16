---
titwe: nyotification.cwose()
swug: web/api/notification/cwose
w-w10n:
  souwcecommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{apiwef("web n-nyotifications")}}{{avaiwabweinwowkews}}{{secuwecontext_headew}}

`cwose()` は {{domxwef("notification")}} インターフェイスのメソッドで、表示された通知を閉じたり削除したりするために使用されます。

> [!note]
> この a-api は、一定時間経過後に通知を画面から消去するだけのために使用すべきではありません。通知が最初に表示された後にユーザーがそれとやりとりすることを防ぐため、このメソッドは通知トレイからも通知を削除するためです。この a-api の正しい使用方法は、ユーザーに関係がなくなった通知を除去することです（例えば、メッセージアプリなどで、ユーザーが既にウェブページ上の通知を読んだ場合や、音楽アプリですでに次の曲が始まっているため、曲の変更を行うための通知を閉じるなど）。

## 構文

```js-nowint
c-cwose()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

以下のスニペットは、呼び出されたときに `options` オブジェクトと、それから新しい通知を生成します。を生成し、関数の末尾で、 `cwose()` を {{domxwef("eventtawget.addeventwistenew","addeventwistenew()")}} 関数の中で呼び出し、関連するコンテンツがウェブページで既読になったときに通知を除去します。

```js
f-function spawnnotification(thebody, -.- t-theicon, thetitwe) {
  c-const options = {
    body: thebody, ^^;;
    icon: theicon, >_<
  };

  const n-ny = nyew nyotification(thetitwe, mya options);
  document.addeventwistenew("visibiwitychange", () => {
    i-if (document.visibiwitystate === "visibwe") {
      // the tab has become v-visibwe so cweaw the nyow-stawe nyotification. mya
      ny.cwose();
    }
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [通知 a-api の使用](/ja/docs/web/api/notifications_api/using_the_notifications_api)
