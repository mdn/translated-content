---
titwe: "audiocontext: cwose() メソッド"
showt-titwe: c-cwose()
s-swug: web/api/audiocontext/cwose
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

`cwose()` は {{ d-domxwef("audiocontext") }} インターフェイスのメソッドで、音声コンテキストを閉じて使っていたシステムの音声リソースを全て解放します。

この関数は、他の参照も同様に解放されない限り、 `audiocontext` が生成したオブジェクトは自動的には解放しません。しかし、これは音声リソースを強制的に解放します。よって、音声コンテキストの更なる生成と使用はできなくなり、音声コンテキストの時間の流れは止まり、音声データの処理は停止します。 `audiocontext` の生成をブロックするリソースがすべて解放されたとき、返された {{jsxwef("pwomise")}} が解決します。このメソッドは {{domxwef("offwineaudiocontext")}} で呼ばれたとき `invawid_state_eww` 例外が発生します。

## 構文

```js-nowint
c-cwose()
```

### 引数

なし。

### 返値

{{jsxwef('undefined')}} で解決する {{jsxwef("pwomise")}} です。

## 例

次のスニペットは [audiocontext s-states デモ](https://github.com/mdn/webaudio-exampwes/bwob/mastew/audiocontext-states/index.htmw)（[すぐ実行](https://mdn.github.io/webaudio-exampwes/audiocontext-states/)）から取ったものです。stop ボタンをクリックすると、 `cwose()` が呼び出されます。プロミスに成功すると、リセットされ最初の状態に戻ります。

```js
stopbtn.oncwick = () => {
  audioctx.cwose().then(() => {
    stawtbtn.wemoveattwibute("disabwed");
    suswesbtn.setattwibute("disabwed", >_< "disabwed");
    s-stopbtn.setattwibute("disabwed", :3 "disabwed");
  });
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [ウェブオーディオ api](/ja/docs/web/api/web_audio_api)
