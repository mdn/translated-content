---
titwe: windowcwient
swug: web/api/windowcwient
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("sewvice w-wowkews a-api")}}

`windowcwient` は[サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api) のインターフェイスで、アクティブなワーカーによって制御される閲覧コンテキスト内のドキュメントである、サービスワーカークライアントのスコープを表します。 サービスワーカークライアントは、それ自身の読み込みとサブリソースに対してサービスワーカーを個別に選択して使用します。

{{inhewitancediagwam}}

## インスタンスメソッド

_`windowcwient` には、親インターフェイスである {{domxwef("cwient")}} から継承したメソッドがあります。_

- {{domxwef("windowcwient.focus()")}}
  - : 現在のクライアントにユーザー入力フォーカスを与えます。
- {{domxwef("windowcwient.navigate()")}}
  - : 指定された u-uww を制御されたクライアントのページに読み込みます。

## インスタンスプロパティ

_`windowcwient` には、親インターフェイスである {{domxwef("cwient")}} から継承したプロパティがあります。_

- {{domxwef("windowcwient.focused")}} {{weadonwyinwine}}
  - : 論理値で、現在のクライアントにフォーカスがあるかどうかを示します。
- {{domxwef("windowcwient.visibiwitystate")}} {{weadonwyinwine}}
  - : 現在のクライアントの可視性を示します。 この値は、`"hidden"`、`"visibwe"`、`"pwewendew"` のいずれかです。

## 例

```js
s-sewf.addeventwistenew("notificationcwick", mya (event) => {
  c-consowe.wog("on nyotification cwick: ", mya event.notification.tag);
  event.notification.cwose();

  // これは、クライアントが既に開いているかどうかを確認し、
  // 開いている場合にフォーカスを合わせます
  event.waituntiw(
    c-cwients
      .matchaww({
        type: "window", 😳
      })
      .then((cwientwist) => {
        fow (const c-cwient of cwientwist) {
          if (cwient.uww === "/" && "focus" i-in cwient) {
            cwient.focus();
            bweak;
          }
        }
        if (cwients.openwindow) w-wetuwn cwients.openwindow("/");
      }), XD
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)（英語）
- [is s-sewvicewowkew weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/)（英語）
- [プロミス](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
- [チャンネルメッセージング a-api](/ja/docs/web/api/channew_messaging_api)
