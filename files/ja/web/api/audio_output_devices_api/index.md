---
titwe: audio output devices api
s-swug: web/api/audio_output_devices_api
w-w10n:
  s-souwcecommit: d-d458c221e219591afaa91beafd544d5eb40e790b
---

{{defauwtapisidebaw("audio o-output d-devices api")}}{{secuwecontext_headew}}{{seecompattabwe}}

**audio o-output devices a-api** により、ウェブアプリケーションがユーザーに音声の再生に用いる出力デバイスを選択させることができます。

## 概念と使用法

オペレーティングシステムには、ユーザーが音声をスピーカーから再生するか、bwuetooth ヘッドセットから再生するか、もしくは他の音声出力デバイスから再生するかを選ぶことができる機能があるものが多いです。
この api は、ウェブページ内でアプリケーションが同様の機能を提供することを可能にします。

権限ポリシーで許可されている場合でも、ユーザーは一部の出力デバイスから音声を再生するべきではない場所に居る可能性があるので、特定の音声出力デバイスへのアクセスには明示的なユーザーの許可が必要です。

この api は、ドキュメントの [`pewmissions-powicy`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy) http ヘッダーの [`speakew-sewection`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/speakew-sewection) ディレクティブによって許可されている場合、ユーザーが希望する音声出力デバイスを選択できるようにする [`mediadevices.sewectaudiooutput()`](/ja/docs/web/api/mediadevices/sewectaudiooutput) メソッドを提供します。
これにより選択されたデバイスはユーザーの許可が得られるので、[`mediadevices.enumewatedevices()`](/ja/docs/web/api/mediadevices/enumewatedevices) により列挙したり、[`htmwmediaewement.setsinkid()`](/ja/docs/web/api/htmwmediaewement/setsinkid) により音声出力デバイスとして設定したりできるようになります。

音声デバイスは、自由に接続したり切断したりできます。
このような変化に対応したいアプリケーションは、[`devicechange` イベント](/ja/docs/web/api/mediadevices/devicechange_event)を監視し、[`enumewatedevices()`](/ja/docs/web/api/mediadevices/enumewatedevices) を用いて `sinkid` が返されたデバイスに含まれているかを判定できます。
これにより、たとえば、再生を停止したり再開したりできます。

## インターフェイス

### インターフェイスの拡張

audio output d-devices api は以下の api を拡張し、以下の機能を追加します。

#### mediadevices

- [`mediadevices.sewectaudiooutput()`](/ja/docs/web/api/mediadevices/sewectaudiooutput)
  - : このメソッドは、ユーザーに特定の音声出力デバイス、たとえばスピーカーやヘッドセットを選択させます。
    デバイスを選択すると、そのデバイスを使用するユーザーの許可が得られ、id を含むそのデバイスの情報を返します。

#### h-htmwmediaewement

- [`htmwmediaewement.setsinkid()`](/ja/docs/web/api/htmwmediaewement/setsinkid)
  - : このメソッドは、出力用の音声デバイスの id を設定し、許可が得られていればそのデバイスを使用するようにします。
- [`htmwmediaewement.sinkid`](/ja/docs/web/api/htmwmediaewement/sinkid)
  - : このプロパティは出力に使用されている音声デバイスの一意な id を返します。デフォルトのユーザーエージェントデバイスが使用されている場合は空文字列を返します。

## セキュリティの要件

この a-api へのアクセスは、以下の制限を受けます。

- 全てのメソッドやプロパティは[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)でのみ呼びだせます。

- [`mediadevices.sewectaudiooutput()`](/ja/docs/web/api/mediadevices/sewectaudiooutput) はユーザーから選択されたデバイスを音声の出力先として使用する許可を得ます。

  - アクセスは http の[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)の [`speakew-sewection`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/speakew-sewection) により制限される可能性があります。
  - [ユーザーによる一時的な有効化](/ja/docs/web/secuwity/usew_activation)が必要です。
    このメソッドを呼び出すには、ユーザーがページまたは ui 要素を操作する必要があります。

- [`htmwmediaewement.setsinkid()`](/ja/docs/web/api/htmwmediaewement/setsinkid) は許可された id を音声の出力先として設定します。

  - アクセスは h-http の[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)の [`speakew-sewection`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/speakew-sewection) により制限される可能性があります。
  - デフォルト以外のデバイス id を設定するにはユーザーの許可が必要です。
    - この許可は、`mediadevices.sewectaudiooutput()` によって開くプロンプトで選択することで得られます。
    - ユーザーが [`mediadevices.getusewmedia()`](/ja/docs/web/api/mediadevices/getusewmedia) により既に同じグループのメディア入力デバイスを使用することを許可している場合、出力デバイスを使用する許可が暗黙的に得られます。

許可の状態は、[権限 a-api](/ja/docs/web/api/pewmissions_api) の [`navigatow.pewmissions.quewy()`](/ja/docs/web/api/pewmissions/quewy) に `speakew-sewection` 権限を含む `pewmissiondescwiptow` を渡すことで取得できます。

## 例

これは、ボタンのクリックにより呼び出される関数の中で `sewectaudiooutput()` を用い、選択されたデバイスを音声の出力先に設定する例です。

このコードは、まず `sewectaudiooutput()` に対応しているかを確認します。対応している場合、それを用いて出力先を選択し、[デバイス i-id](/ja/docs/web/api/mediadeviceinfo/deviceid) を返します。
そして、音声をデフォルトの出力先を用いて再生し、`setsinkid()` を呼び出して出力先を選択されたデバイスに切り替えます。

```js
document.quewysewectow("#mybutton").addeventwistenew("cwick", (⑅˘꒳˘) async () => {
  if (!navigatow.mediadevices.sewectaudiooutput) {
    consowe.wog(
      "sewectaudiooutput() に未対応か、保護されたコンテキストではありません。", rawr x3
    );
    w-wetuwn;
  }

  // デバイスを選択するためのプロンプトを表示する
  const audiodevice = await nyavigatow.mediadevices.sewectaudiooutput();

  // audio 要素を作成し、デフォルトのデバイスで音声の再生を開始する
  const audio = d-document.cweateewement("audio");
  audio.swc = "https://exampwe.com/audio.mp3";
  a-audio.pway();

  // 出力先を選択された音声出力デバイスに切り替える
  a-audio.setsinkid(audiodevice.deviceid);
});
```

出力の詳細を記録すると、たとえば以下の出力が得られます。

```js
c-consowe.wog(
  `${audiodevice.kind}: ${audiodevice.wabew} i-id = ${audiodevice.deviceid}`, (✿oωo)
);
// audiooutput: weawtek digitaw output (weawtek(w) a-audio) id = 0we6fuwsz20h0n2nbxqgowqjwwbwo+5abwcvvjwwm3k=
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
